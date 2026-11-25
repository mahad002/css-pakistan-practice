#!/usr/bin/env python3
"""Build the data files for the CSS web app.

Reads the markdown course in this repository and writes:
  site/data/manifest.json    - every document, grouped for the sidebar, with headings
  site/data/questions.json   - every MCQ from every bank (one common shape)
  site/data/subjective.json  - subjective questions from QUESTION-BANK / 06-Question-Bank files
  site/data/checklist.json   - syllabus checklist items per paper
  site/data/documents.json   - downloadable official documents (from 09-Official-Documents/catalogue.json)

Run from the repository root:  python3 tools/build.py
It prints a parse report; any bank whose key count doesn't match its question count is flagged.
"""
import json, os, re, sys, glob, hashlib

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, 'site', 'data')
os.makedirs(OUT, exist_ok=True)
PRIVATE = {'01-Plan/My-Situation.md'}
SKIP_DIRS = {'.git', 'site', 'tools', 'node_modules'}

def rel(p): return os.path.relpath(p, ROOT).replace(os.sep, '/')
def read(p):
    with open(p, encoding='utf-8') as f: return f.read()
def clean(t):
    t = re.sub(r'\s+', ' ', t).strip()
    return t
def strip_md(t):
    t = re.sub(r'\*\*|__|`', '', t)
    return clean(t)

# ---------------------------------------------------------------- papers
PAPERS = [
    # id, label, group, path prefix
    ('mpt', 'MPT screening test', 'MPT', '05-MPT-Screening-Test/'),
    ('essay', 'English Essay', 'Compulsory', '06-Compulsory-Papers/1-English-Essay/'),
    ('precis', 'Précis & Composition', 'Compulsory', '06-Compulsory-Papers/2-English-Precis-and-Composition/'),
    ('gsa', 'General Science & Ability', 'Compulsory', '06-Compulsory-Papers/3-General-Science-and-Ability/'),
    ('ca', 'Current Affairs', 'Compulsory', '06-Compulsory-Papers/4-Current-Affairs/'),
    ('pa', 'Pakistan Affairs', 'Compulsory', '06-Compulsory-Papers/5-Pakistan-Affairs/'),
    ('isl', 'Islamic Studies', 'Compulsory', '06-Compulsory-Papers/6-Islamic-Studies/'),
    ('polsci', 'Political Science', 'Optional', '07-Optional-Papers/Political-Science/'),
    ('pubadmin', 'Public Administration', 'Optional', '07-Optional-Papers/Public-Administration/'),
    ('gender', 'Gender Studies', 'Optional', '07-Optional-Papers/Gender-Studies/'),
    ('crim', 'Criminology', 'Optional', '07-Optional-Papers/Criminology/'),
    ('journalism', 'Journalism & Mass Communication', 'Optional', '07-Optional-Papers/Journalism-and-Mass-Communication/'),
    ('appmaths', 'Applied Mathematics', 'Optional', '07-Optional-Papers/Applied-Mathematics/'),
    ('stats', 'Statistics', 'Optional', '07-Optional-Papers/Statistics/'),
    ('englit', 'English Literature', 'Optional', '07-Optional-Papers/English-Literature/'),
    ('interview', 'Interview & later stages', 'Stages', '08-Interview-and-Stages/'),
]
COMBOS = {
    'recommended': {'label': 'Recommended', 'subjects': ['polsci', 'pubadmin', 'gender', 'crim', 'journalism']},
    'maths': {'label': 'Maths strength', 'subjects': ['polsci', 'appmaths', 'stats', 'gender', 'crim']},
    'english': {'label': 'English strength', 'subjects': ['polsci', 'pubadmin', 'englit', 'crim', 'journalism']},
}
def paper_of(path):
    for pid, label, group, pre in PAPERS:
        if path.startswith(pre): return pid
    return None

# ---------------------------------------------------------------- manifest
SECTIONS = [
    ('start', 'Start', ['00-START-HERE.md']),
    ('plan', 'Plan', ['01-Plan/']),
    ('practice', 'Practice & tracking', ['02-Practice-and-Tracking/']),
    ('pastpapers', 'Past papers', ['03-Past-Papers/']),
    ('research', 'Research', ['04-Research/']),
    ('mpt', 'MPT screening test', ['05-MPT-Screening-Test/']),
    ('compulsory', 'Compulsory papers', ['06-Compulsory-Papers/']),
    ('optional', 'Optional papers', ['07-Optional-Papers/']),
    ('stages', 'Interview & stages', ['08-Interview-and-Stages/']),
    ('docs', 'Official documents', ['09-Official-Documents/']),
]
def section_of(path):
    for sid, label, pres in SECTIONS:
        for p in pres:
            if path == p or path.startswith(p): return sid
    return 'other'

def title_of(text, path):
    m = re.search(r'^#\s+(.+)$', text, re.M)
    if m: return strip_md(m.group(1))
    return os.path.splitext(os.path.basename(path))[0].replace('-', ' ')

def build_manifest():
    docs = []
    for dirpath, dirnames, filenames in os.walk(ROOT):
        dirnames[:] = sorted(d for d in dirnames if d not in SKIP_DIRS and not d.startswith('.'))
        for fn in sorted(filenames):
            if not fn.endswith('.md'): continue
            full = os.path.join(dirpath, fn); r = rel(full)
            if r in PRIVATE or r == 'README.md' and dirpath == ROOT: continue
            text = read(full)
            heads = [strip_md(h) for h in re.findall(r'^##\s+(.+)$', text, re.M)][:60]
            docs.append({'path': r, 'title': title_of(text, r), 'section': section_of(r),
                         'paper': paper_of(r), 'words': len(text.split()), 'headings': heads})
    return {'sections': [{'id': s, 'label': l} for s, l, _ in SECTIONS], 'docs': docs}

# ---------------------------------------------------------------- MCQ parsing
LET = 'ABCD'
def mk(paper, src, section, num, q, opts, ans, expl=''):
    if len(opts) != 4 or ans not in range(4) or not q: return None
    return {'paper': paper, 'src': src, 'section': section, 'n': num,
            'q': clean(q), 'o': [clean(o) for o in opts], 'a': ans, 'e': clean(expl)}

def sections_by_pos(text, level='##'):
    """List of (pos, heading) for headings of the given level."""
    pat = r'^' + level + r'\s+(.+)$'
    return [(m.start(), strip_md(m.group(1))) for m in re.finditer(pat, text, re.M)]
def sec_at(secs, pos):
    cur = ''
    for p, h in secs:
        if p <= pos: cur = h
        else: break
    return cur

def parse_standard(text, paper, src):
    """**Q12.** text / - A) opt ... / **Answer:** C. expl   (new optional banks)"""
    out = []; secs = sections_by_pos(text)
    pat = re.compile(r'\*\*Q(\d+)\.\*\*\s*(.+?)\n((?:\s*-\s*[A-D][\).]\s*.+\n){4})\s*\*\*Answer:\*\*\s*([A-D])[\.\):]?\s*(.*)', re.M)
    for m in pat.finditer(text):
        opts = re.findall(r'-\s*[A-D][\).]\s*(.+)', m.group(3))
        out.append(mk(paper, src, sec_at(secs, m.start()), int(m.group(1)), m.group(2), opts, LET.index(m.group(4)), m.group(5)))
    return [x for x in out if x]

def parse_mpt(text, paper, src):
    """**12.** text / - A. opt (x4) ... key: **12. B** (ans). expl   or quick key 12:B"""
    k = max(text.rfind('## Answer Key'), text.rfind('Answer Key'))
    body, key = text[:k], text[k:]
    secs = sections_by_pos(body, '###') or sections_by_pos(body)
    keys, expl = {}, {}
    for m in re.finditer(r'\*\*(\d+)\.\s*([A-D])\*\*\s*(?:\(([^)]*)\))?\.?\s*(.*)', key):
        keys[int(m.group(1))] = LET.index(m.group(2)); expl[int(m.group(1))] = m.group(4)
    for m in re.finditer(r'(\d+):([A-D])', key):
        keys.setdefault(int(m.group(1)), LET.index(m.group(2)))
    out = []
    pat = re.compile(r'\*\*(\d+)\.\*\*\s*(.+?)\n((?:\s*-\s*[A-D]\.\s*.+\n?){4})', re.M)
    for m in pat.finditer(body):
        n = int(m.group(1)); opts = re.findall(r'-\s*[A-D]\.\s*(.+)', m.group(3))
        if n in keys: out.append(mk(paper, src, sec_at(secs, m.start()), n, m.group(2), opts, keys[n], expl.get(n, '')))
    return [x for x in out if x]

def parse_pa(text, paper, src):
    """**12.** text  \n(a) x  (b) y  (c) z  (d) w     keys: 12-c"""
    secs = sections_by_pos(text)
    keys = {int(n): 'abcd'.index(l) for n, l in re.findall(r'(?<![\d.])(\d+)-([a-d])\b', text)}
    out = []
    for m in re.finditer(r'\*\*(\d+)\.\*\*\s*(.+?)\s*\n\s*(\(a\).+)', text):
        opts = re.split(r'\s*\([bcd]\)\s*', re.sub(r'^\(a\)\s*', '', m.group(3).strip()))
        n = int(m.group(1))
        if n in keys: out.append(mk(paper, src, sec_at(secs, m.start()), n, m.group(2), opts, keys[n]))
    return [x for x in out if x]

def parse_inline(text, paper, src, upper=True):
    """12. text (A) x (B) y (C) z (D) w    keys: **Answers A:** 1 C · 2 A   or  1-b, 2-c"""
    secs = sections_by_pos(text)
    keys = {}
    for line in re.findall(r'\*\*Answers?[^*]*\*\*\s*(.+)', text):
        for n, l in re.findall(r'(\d+)\s*[-\s]\s*([A-Da-d])\b', line):
            keys[int(n)] = 'ABCD'.index(l.upper())
    out = []
    lab = r'\(([A-Da-d])\)'
    for m in re.finditer(r'^(\d+)\.\s+(.+?)\s*:?\s*\([Aa]\)\s*(.+?)\s*\([Bb]\)\s*(.+?)\s*\([Cc]\)\s*(.+?)\s*\([Dd]\)\s*(.+?)\s*$', text, re.M):
        n = int(m.group(1))
        if n in keys:
            out.append(mk(paper, src, sec_at(secs, m.start()), n, m.group(2).rstrip(':'), [m.group(3), m.group(4), m.group(5), m.group(6)], keys[n]))
    return [x for x in out if x]

def parse_gsa(text, paper, src):
    """**12.** text\n(A) x  (B) y  (C) z  (D) w     keys in tables | 12 | B |"""
    secs = sections_by_pos(text)
    keys = {}
    for row in re.findall(r'^\|(.+)\|\s*$', text, re.M):
        c = [x.strip() for x in row.split('|')]
        for i in range(0, len(c) - 1, 2):
            if c[i].isdigit() and c[i + 1] in ('A', 'B', 'C', 'D'): keys[int(c[i])] = LET.index(c[i + 1])
    out = []
    for m in re.finditer(r'\*\*(\d+)\.\*\*\s*(.+?)\n\(A\)\s*(.+?)\s{2,}\(B\)\s*(.+?)\s{2,}\(C\)\s*(.+?)\s{2,}\(D\)\s*(.+?)\s*$', text, re.M):
        n = int(m.group(1))
        if n in keys: out.append(mk(paper, src, sec_at(secs, m.start()), n, m.group(2), [m.group(3), m.group(4), m.group(5), m.group(6)], keys[n]))
    return [x for x in out if x]

def parse_precis_mock(text, paper, src):
    k = text.find('# ANSWER KEY')
    if k < 0: return []
    body, key = text[:k], text[k:]
    q1 = key[key.find('## Q.1'):key.find('## Q.2')]
    rows = [r for r in re.findall(r'^\|(.+)\|\s*$', q1, re.M) if not set(r) <= set('|- ')]
    keys = {}
    for i in range(0, len(rows) - 1, 2):
        ns = [x.strip() for x in rows[i].split('|')]; ls = [x.strip() for x in rows[i + 1].split('|')]
        for n, l in zip(ns, ls):
            if n.isdigit() and l in 'abcd' and l: keys[int(n)] = 'abcd'.index(l)
    out = []
    for m in re.finditer(r'^(\d+)\.\s+([A-Z][A-Z\- ]+):\s*\(a\)\s*(.+?)\s*\(b\)\s*(.+?)\s*\(c\)\s*(.+?)\s*\(d\)\s*(.+?)\s*$', body, re.M):
        n = int(m.group(1))
        if n in keys:
            kind = 'Synonym' if n <= 10 else 'Antonym'
            out.append(mk(paper, src, 'Part I: synonyms and antonyms', n, f'{kind} of {m.group(2).strip()}', [m.group(3), m.group(4), m.group(5), m.group(6)], keys[n]))
    return [x for x in out if x]

def parse_any(path):
    text = read(path); r = rel(path); paper = paper_of(r) or 'other'
    best = []
    for fn in (parse_standard, parse_mpt, parse_pa, parse_gsa, parse_inline, parse_precis_mock):
        try: res = fn(text, paper, r)
        except Exception as e: res = []
        if len(res) > len(best): best = res
    return best

def candidate_banks():
    pats = ['05-MPT-Screening-Test/*/Practice-MCQs.md', '05-MPT-Screening-Test/09-Mock-Tests/Mock-Test-*.md',
            '06-Compulsory-Papers/*/*MCQ-Bank*.md', '06-Compulsory-Papers/2-English-Precis-and-Composition/11-Mock-Papers/Mock-*.md',
            '07-Optional-Papers/*/05-MCQ-Bank.md']
    files = []
    for p in pats: files += sorted(glob.glob(os.path.join(ROOT, p)))
    return files

def expected_count(text):
    nums = set(int(n) for n in re.findall(r'^\*\*Q?(\d+)\.\*\*', text, re.M))
    nums |= set(int(n) for n in re.findall(r'^(\d+)\.\s+.+\([Aa]\).+\([Dd]\)', text, re.M))
    return len(nums)

# ---------------------------------------------------------------- subjective
def build_subjective():
    out = []
    files = sorted(glob.glob(os.path.join(ROOT, '06-Compulsory-Papers/*/QUESTION-BANK.md'))) + \
            sorted(glob.glob(os.path.join(ROOT, '07-Optional-Papers/*/06-Question-Bank.md')))
    for f in files:
        text = read(f); r = rel(f); paper = paper_of(r); secs = sections_by_pos(text)
        for m in re.finditer(r'^\s*-\s*\*\*\[([^\]]+)\]\*\*\s*(.+)$', text, re.M):
            tag = m.group(1).strip()
            yr = re.search(r'(20\d\d)', tag)
            out.append({'paper': paper, 'src': r, 'topic': sec_at(secs, m.start()), 'tag': tag,
                        'year': int(yr.group(1)) if yr else None, 'past': tag.upper().startswith('CSS'),
                        'q': strip_md(m.group(2))})
    return out

# ---------------------------------------------------------------- checklist
MANUAL = {
    'mpt': [('Format and strategy', ['Read the format, pass rule and strategy (00, 01)']),
            ('Sections', ['English: notes + 300 MCQs', 'General Abilities: methods + 300 MCQs', 'Islamic Studies: fact sheets + 250 MCQs',
                          'Pakistan Affairs: fact sheets + 250 MCQs', 'Current Affairs & GK: fact sheets + 250 MCQs (refresh Aug 2027)',
                          'Everyday Science: fact sheets + 250 MCQs', 'Urdu: fact sheets + 150 MCQs']),
            ('Mocks', ['Mock Test 1 (200 MCQs)', 'Mock Test 2', 'Mock Test 3', 'Mock Test 4'])],
    'essay': [('Method', ['Paper format, marking and why candidates fail (00)', 'Decoding topics and topic types', 'Thesis statements',
                          'Outline format', 'Introductions', 'Body paragraphs (PEEL)', 'Counter-arguments', 'Conclusions',
                          'Coherence, length and presentation', 'Handwriting speed baseline']),
              ('Content', ['Past-paper analysis and likely themes (02)', 'Governance and politics outlines', 'Economy outlines',
                           'Climate, water, energy, population outlines', 'Society outlines', 'Technology outlines', 'World affairs outlines',
                           'Abstract and quotation outlines', 'Model essays 1–5 studied', 'Evidence bank learnt', 'Language toolkit']),
              ('Practice milestones', ['Essays 1–6 (Phase 1)', 'Essays 7–19 (Phase 2, weekly)', 'Essays 20–23 (Phase 3)', 'Essays 24–43 (Phase 4)',
                                       'Second reader feedback x3'])],
    'precis': [('Précis and comprehension', ['Précis method and rubric', '12 worked précis examples', '15 practice précis', 'Comprehension method + 8 passages']),
               ('Grammar and usage', ['Grammar rules (17 families)', '150 correction sentences', 'Punctuation rules + passages', 'Prepositions',
                                      'Direct/indirect, voice, other types']),
               ('Vocabulary', ['Vocabulary: past-paper words (224)', 'Vocabulary: all 579 words', 'Idioms (352)', 'Phrasal verbs (163)', 'Pairs of words (265)']),
               ('Translation', ['Translation method + tense mapping', '25 Urdu paragraphs', '100 proverbs and idioms']),
               ('Mocks', ['Mock 1', 'Mock 2', 'Mock 3', 'Mock 4', 'Mock 5'])],
    'interview': [('Before the viva', ['Read the overview of all stages', 'MPT advice', 'Written-exam advice', 'Medical board checklist',
                                       'Psychological assessment: tests practised', 'Psychological assessment: group discussion practised']),
                  ('Viva preparation', ['Viva format and do\'s and don\'ts', 'Personal and form-based questions prepared', 'Home district and province',
                                        'Degree-related questions', 'Current affairs refresh', 'Optional subjects refresh', 'Group preferences decided and justified',
                                        'Three mock interviews done']),
                  ('After allocation', ['Read: CSA and Common Training Programme'])],
}

def _freq_word(v):
    v = (v or '').strip()
    if not v or v in ('—', '-'): return None
    if re.match(r'^(High|Medium|Low)', v, re.I): return v.split()[0].capitalize()
    if '●' in v or '○' in v:
        n = v.count('●'); return {0: 'Not asked', 1: 'Low', 2: 'Medium'}.get(n, 'High')
    m = re.match(r'^(\d+)', v)
    if m:
        n = int(m.group(1)); return 'High' if n >= 5 else 'Medium' if n >= 3 else 'Low' if n >= 1 else 'Not asked'
    return None

def parse_table_checklist(text):
    items = []; cur = ''; parent = ''; hdr = []; prev = ''
    for line in text.splitlines():
        h = re.match(r'^(#{2,3})\s+(.+)', line)
        if h: cur = strip_md(h.group(2)); parent = ''; hdr = []; prev = line; continue
        if re.match(r'^\|\s*:?-{2,}', line) and prev.startswith('|'):
            hdr = [c.strip().lower() for c in prev.strip().strip('|').split('|')]; prev = line; continue
        prev = line
        if not line.startswith('|'): continue
        cells = [c.strip() for c in line.strip().strip('|').split('|')]
        if len(cells) < 2 or '☐' not in cells[0]: continue
        low = ' '.join(cells[1:]).lower()
        if 'official topic' in low or 'syllabus item' in low: continue
        col = lambda *names: next((cells[i] for i, hd in enumerate(hdr) if i < len(cells) and any(n in hd for n in names)), '')
        sub = col('sub-topic')
        if sub or any('sub-topic' in hd for hd in hdr):
            if cells[1]: parent = strip_md(cells[1])
            text_ = f"{parent} — {strip_md(sub)}" if sub else parent
        elif re.fullmatch(r'[IVXL]+', strip_md(cells[1])) and len(cells) > 2:
            text_ = strip_md(cells[1]) + '. ' + strip_md(cells[2])
        else:
            text_ = strip_md(cells[1])
        if not text_: continue
        it = {'section': cur, 'text': text_}
        fq = _freq_word(col('freq', 'asked 20'))
        if fq: it['freq'] = fq
        note = re.search(r'`?([\w./-]+\.md)`?', col('notes') or '')
        if note: it['notes'] = note.group(1)
        items.append(it)
    return items

def parse_box_checklist(text):
    items = []; cur = ''; top = ''
    for line in text.splitlines():
        h1 = re.match(r'^#\s+(.+)', line); h = re.match(r'^##+\s+(.+)', line)
        if h1 and items == [] and not top: top = ''
        if h1: top = strip_md(h1.group(1)) if 'paper' in h1.group(1).lower() else top; continue
        if h: cur = (top + ': ' if top else '') + strip_md(h.group(1)); continue
        m = re.match(r'^\s*-\s*\[[ xX]\]\s*(.+)$', line)
        if m:
            t = m.group(1); note = re.search(r'notes:\s*([^—]+)', t); fq = re.search(r'freq:\s*(\w+)', t)
            t = re.split(r'\s+—\s+notes:', t)[0]
            items.append({'section': cur, 'text': strip_md(t), 'freq': fq.group(1) if fq else None,
                          'notes': note.group(1).strip() if note else None})
    return items

def build_checklist():
    out = []
    for pid, label, group, pre in PAPERS:
        items = []
        if pid == 'ca':
            items = ca_items()
        elif pid in MANUAL:
            for sec, lst in MANUAL[pid]:
                items += [{'section': sec, 'text': t} for t in lst]
        else:
            base = os.path.join(ROOT, pre)
            for name in ('01-Syllabus-Checklist.md', '01-Syllabus-Map.md'):
                f = os.path.join(base, name)
                if os.path.exists(f):
                    t = read(f)
                    items = parse_box_checklist(t) if name.startswith('01-Syllabus-Checklist') else parse_table_checklist(t)
                    if items: break
        for i, it in enumerate(items): it['id'] = f'{pid}:{i}:' + hashlib.md5(it['text'].encode()).hexdigest()[:6]
        exists = os.path.isdir(os.path.join(ROOT, pre))
        out.append({'paper': pid, 'label': label, 'group': group, 'exists': exists, 'items': items})
    return {'papers': out, 'combos': COMBOS,
            'states': ['Not started', 'Studied once', 'Revised', 'Mastered']}

# ---------------------------------------------------------------- documents
def build_documents():
    f = os.path.join(ROOT, '09-Official-Documents', 'catalogue.json')
    if not os.path.exists(f): return []
    try: data = json.loads(read(f))
    except Exception: return []
    out = []
    for d in data:
        p = d.get('path', '')
        full = os.path.join(ROOT, '09-Official-Documents', p) if not p.startswith('09-') else os.path.join(ROOT, p)
        if os.path.exists(full): d['path'] = rel(full); out.append(d)
    return out

def mpt_tag(q):
    """Which MPT section a question belongs to (for full mocks), else ''."""
    if q['paper'] != 'mpt': return ''
    s = q['src']; sec = (q['section'] or '').lower()
    if '/02-English/' in s or 'english' in sec: return 'english'
    if '/03-General-Abilities/' in s or 'general abilities' in sec: return 'ga'
    if '/04-Islamic-Studies/' in s or 'islamic' in sec: return 'islamic'
    if '/08-Urdu/' in s or 'urdu' in sec: return 'urdu'
    return 'gk'

def ca_items():
    items = []
    labels = {'03-Foundations': 'Foundations', '04-Pakistan-Domestic': 'Pakistan: domestic', '05-Pakistan-External': 'Pakistan: external', '06-Global-Issues': 'Global issues'}
    for d, lab in labels.items():
        for f in sorted(glob.glob(os.path.join(ROOT, '06-Compulsory-Papers/4-Current-Affairs', d, '*.md'))):
            items.append({'section': lab, 'text': title_of(read(f), f), 'notes': rel(f)})
    return items

# ---------------------------------------------------------------- topic → document links
def heading_slug(t):
    t = re.sub(r'<[^>]+>', '', t.lower())
    return re.sub(r'[^a-z0-9_\u0600-\u06ff]+', '-', t).strip('-')[:60]

STOP = set('the and for with from into its their this that what which are was were how why who of in on to a an by as at or is be all notes mcqs plus fact sheets read'.split())
def words(t): return [w[:-1] if len(w) > 4 and w.endswith('s') else w for w in re.findall(r'[a-z0-9]+', t.lower()) if (len(w) > 2 or w.isdigit()) and w not in STOP]

KEY_DOCS = [('howto', r'/00-(How-to-Use|Overview)'), ('syllabus', r'/01-Syllabus'), ('analysis', r'/0\d-Past-Paper-Analysis'),
            ('qbank', r'/(QUESTION-BANK|06-Question-Bank|06-Interview-Question-Bank)\.md$'), ('mcq', r'/\d\d-MCQ-Bank\.md$'),
            ('answers', r'/0\d-Model-Answers\.md$'), ('revision', r'/0\d-Quick-Revision\.md$'), ('plan', r'/\d\d-Practice-Plan\.md$'),
            ('resources', r'/\d\d-Resources\.md$'), ('mocks', r'/(09-Mock-Tests|11-Mock-Papers)/')]

OVERRIDES = {
    'essay': [(r'^(Paper format|Decoding|Thesis|Outline format|Introductions|Body|Counter|Conclusions|Coherence|Handwriting)', '01-Essay-Method.md'),
              (r'^Past-paper analysis', '02-Past-Paper-Analysis.md'), (r'^Model essays', '04-Model-Essays/00-Index.md'),
              (r'^Evidence bank', '05-Evidence-Bank.md'), (r'^(Essays \d|Second reader)', '07-Practice-Plan.md')],
    'mpt': [(r'^Read the format', '00-How-to-Use-This-Pack.md')],
    'interview': [(r'^(Viva format|Personal and form|Home district|Degree-related|Current affairs refresh|Optional subjects refresh|Three mock)', '05-Viva-Voce.md'),
                  (r'^Psychological', '04-Psychological-Assessment.md'), (r'^Medical', '03-Medical-Board.md'), (r'^Read: CSA', '08-After-Allocation.md')],
}

def link_checklist(chk, man):
    docs = man['docs']; paths = {d['path'] for d in docs}
    keydocs = {}
    for pid, label, group, pre in PAPERS:
        mine = sorted((d for d in docs if d['path'].startswith(pre)), key=lambda d: d['path'])
        kd = {}
        for k, rx in KEY_DOCS:
            hit = next((d['path'] for d in mine if re.search(rx, '/' + d['path'][len(pre):])), None)
            if hit: kd[k] = hit
        keydocs[pid] = kd
        study = [d for d in mine if not re.search(r'(QUESTION-BANK|Question-Bank|MCQ|COVERAGE|Resources|Past-Paper-Analysis|Syllabus|00-How|Practice-MCQs)', d['path'])]
        paper = next(p for p in chk['papers'] if p['paper'] == pid)
        for it in paper['items']:
            target, at = None, None
            n = it.get('notes')
            for rx, rp in OVERRIDES.get(pid, []):
                if re.search(rx, it['text']) and pre + rp in paths: target = pre + rp; break
            if n and not target:
                for c in (pre + n.lstrip('./'), n.lstrip('./')):
                    if c in paths: target = c; break
                if not target:
                    base = n.split('/')[-1]
                    target = next((d['path'] for d in mine if d['path'].endswith('/' + base)), None)
            ws = set(words(it['text']))
            if not target and ws:
                best, bs = None, 0
                for d in study:
                    tw = set(words(d['title'] + ' ' + d['path'].split('/')[-1]))
                    hw = set(words(' '.join(d['headings'])))
                    sc = 3 * len(ws & tw) + len(ws & hw)
                    if sc > bs: best, bs = d, sc
                if best and bs >= 3: target = best['path']
            if target and ws:
                d = next(x for x in docs if x['path'] == target)
                hs = [(len(ws & set(words(h))), h) for h in d['headings']]
                hs = [x for x in hs if x[0] >= min(2, len(ws))]
                if hs: at = heading_slug(max(hs, key=lambda x: x[0])[1])
            it['doc'] = target or kd.get('syllabus') or kd.get('howto')
            if at: it['at'] = at
    return keydocs

# ---------------------------------------------------------------- main
def main():
    man = build_manifest()
    qs, report = [], []
    for f in candidate_banks():
        got = parse_any(f); exp = expected_count(read(f))
        qs += got; report.append((rel(f), len(got), exp))
    seen = set()
    for q in qs:
        base = hashlib.md5(f"{q['src']}#{q['n']}#{q['q']}".encode()).hexdigest()[:10]
        q['id'] = base if base not in seen else base + 'x'
        seen.add(q['id'])
        q['tag'] = mpt_tag(q)
    subj = build_subjective(); chk = build_checklist(); docs = build_documents()
    keydocs = link_checklist(chk, man)
    meta = {'papers': [{'id': p, 'label': l, 'group': g, 'prefix': pre, 'docs': keydocs.get(p, {})} for p, l, g, pre in PAPERS], 'combos': COMBOS}
    for name, obj in [('manifest', man), ('questions', qs), ('subjective', subj), ('checklist', chk), ('documents', docs), ('meta', meta)]:
        with open(os.path.join(OUT, name + '.json'), 'w', encoding='utf-8') as fh:
            json.dump(obj, fh, ensure_ascii=False, separators=(',', ':'))
    print(f"docs {len(man['docs'])} | MCQs {len(qs)} | subjective {len(subj)} | checklist items {sum(len(p['items']) for p in chk['papers'])} | documents {len(docs)}")
    bad = 0
    for r, got, exp in report:
        flag = '' if got >= exp * 0.97 and got > 0 else '   <-- CHECK'
        if flag: bad += 1
        print(f'  {got:4d}/{exp:<4d} {r}{flag}')
    for p in chk['papers']:
        print(f"  checklist {p['paper']:10s} {len(p['items']):4d} items{'' if p['exists'] else ' (pack not built)'}")
    return 1 if bad and '--strict' in sys.argv else 0

if __name__ == '__main__':
    sys.exit(main())
