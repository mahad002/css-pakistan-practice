/* CSS Practice: single-page app, no build step.
   Data comes from site/data/*.json (built by tools/build.py); documents are the markdown files in the repo.
   Everything the candidate sets or marks is kept in this browser (localStorage, keys "cssp.*"). */
(() => {
  'use strict';

  // ------------------------------------------------------------------ helpers
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const store = {
    get(k, d) { try { const v = localStorage.getItem('cssp.' + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem('cssp.' + k, JSON.stringify(v)); } catch (e) { /* storage unavailable */ } },
    del(k) { try { localStorage.removeItem('cssp.' + k); } catch (e) { /* storage unavailable */ } },
  };
  const shuffle = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const pct = (a, b) => (b ? Math.round((a / b) * 100) : 0);
  const fmtTime = (s) => { s = Math.max(0, Math.round(s)); const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), x = s % 60; return (h ? h + ':' + String(m).padStart(2, '0') : m) + ':' + String(x).padStart(2, '0'); };
  const DAY = 864e5;
  const toDate = (iso) => new Date(iso + 'T00:00:00');
  const isoOf = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  const today = () => { const d = new Date(); d.setHours(0, 0, 0, 0); return d; };
  const fmtDate = (d) => (typeof d === 'string' ? toDate(d) : new Date(d)).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
  const weeksBetween = (a, b) => (b - a) / (7 * DAY);
  const isRTL = (s) => { const t = (s || '').replace(/[\s\d\p{P}]/gu, ''); if (!t) return false; const ar = (t.match(/[؀-ۿݐ-ݿﭐ-﷿ﹰ-﻿]/g) || []).length; return ar / t.length > 0.5; };
  const dirAttr = (s) => (isRTL(s) ? ' dir="rtl" lang="ur"' : '');
  const plural = (n, w, p = w + 's') => `${n.toLocaleString()} ${n === 1 ? w : p}`;

  const ICONS = {
    check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    chev: '<path d="M9 6l6 6-6 6"/>',
    up: '<path d="M6 15l6-6 6 6"/>',
    down: '<path d="M6 9l6 6 6-6"/>',
    x: '<path d="M6 6l12 12M18 6L6 18"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    back: '<path d="M19 12H5M11 6l-6 6 6 6"/>',
    journey: '<path d="M2.5 12h2M9.5 12h5M19.5 12h2"/><circle cx="7" cy="12" r="2.5"/><circle cx="17" cy="12" r="2.5"/>',
    papers: '<path d="M5 4.5h11.5a1.5 1.5 0 0 1 1.5 1.5v14H6.5A1.5 1.5 0 0 1 5 18.5z"/><path d="M5 18.5A1.5 1.5 0 0 1 6.5 17H18M9 8.5h5"/>',
    practice: '<path d="M4.5 19.5l1-4 10.5-10.5 3 3L8.5 18.5z"/><path d="M14 7l3 3"/>',
    library: '<path d="M5 4v15M9.5 4v15"/><path d="M13.5 5.2l4 14"/><path d="M3 20h18"/>',
    plan: '<rect x="4" y="5.5" width="16" height="14.5" rx="2"/><path d="M4 10h16M9 3.5v4M15 3.5v4"/>',
    search: '<circle cx="11" cy="11" r="6"/><path d="M20 20l-4.5-4.5"/>',
    download: '<path d="M12 4v11M7 10l5 5 5-5"/><path d="M5 20h14"/>',
    external: '<path d="M14 5h5v5M19 5l-8 8"/><path d="M18 14v5H5V6h5"/>',
  };
  const icon = (n, cls = '') => `<svg class="ico ${cls}" viewBox="0 0 24 24" aria-hidden="true">${ICONS[n]}</svg>`;

  const D = {}; // course data
  let paperById = {};

  async function loadJSON(name) {
    const r = await fetch('site/data/' + name + '.json', { cache: 'no-cache' });
    if (!r.ok) throw new Error('Could not load ' + name);
    return r.json();
  }

  // ------------------------------------------------------------------ course facts used by the guide
  const SHORT = { mpt: 'MPT', essay: 'Essay', precis: 'Précis', gsa: 'Gen. Science', ca: 'Current Aff.', pa: 'Pak Affairs', isl: 'Islamic St.',
    polsci: 'Pol. Science', pubadmin: 'Public Admin', gender: 'Gender St.', crim: 'Criminology', journalism: 'Journalism', appmaths: 'App. Maths',
    stats: 'Statistics', englit: 'Eng. Lit.', interview: 'Interview' };
  const HOURS = { mpt: 6, essay: 3, precis: 3, gsa: 1.5, ca: 2, pa: 2.5, isl: 1.5, interview: 1.5 }; // rough hours per checklist topic; optionals default 2.5
  const COMBO_NOTE = {
    recommended: 'Reading-based subjects with the strongest scoring record.',
    maths: 'For a maths, science or engineering background.',
    english: 'For confident readers of literature. Scoring data is thinner.',
  };
  const STATES = ['Not yet', 'Studied', 'Revised', 'Mastered'];
  const DEFAULT_EXAM = '2028-01-27';
  const DEFAULT_START = '2027-02-01';
  const DEFAULT_DATES = [
    { id: 'mptreg', label: 'MPT registration', date: '2027-08-02', proj: true },
    { id: 'mpt', label: 'MPT screening test', date: '2027-10-17', proj: true },
    { id: 'apply', label: 'Written exam application', date: '2027-11-15', proj: true },
    { id: 'mock', label: 'My mock week', date: '2028-01-10', proj: false },
  ];
  const BASE_ORDER = ['precis', 'pa', 'essay', 'isl', 'gsa', 'ca', 'mpt'];
  const BUFFER_WEEKS = 6;

  // ------------------------------------------------------------------ settings the candidate controls
  const combo = () => store.get('combo', 'recommended');
  const comboSubjects = () => (D.meta.combos[combo()] || D.meta.combos.recommended).subjects;
  const examISO = () => store.get('examDate', DEFAULT_EXAM);
  const startISO = () => store.get('startDate', DEFAULT_START);
  const milestones = () => store.get('dates', DEFAULT_DATES);
  const paperLabel = (pid) => (paperById[pid] || {}).label || pid;
  const chkPaper = (pid) => D.checklist.papers.find((p) => p.paper === pid);
  function order() {
    const want = [...BASE_ORDER, ...comboSubjects()];
    const saved = store.get('order', null) || want;
    const o = saved.filter((id) => want.includes(id));
    want.forEach((id) => { if (!o.includes(id)) o.push(id); });
    return o;
  }

  // ------------------------------------------------------------------ progress
  const chk = () => store.get('checklist', {});
  function setChk(id, s) {
    const c = chk(); const t = store.get('chkTime', {});
    if (s) c[id] = s; else delete c[id];
    t[id] = Date.now();
    store.set('checklist', c); store.set('chkTime', t);
  }
  function progress(pid) {
    const p = chkPaper(pid); const c = chk(); const n = [0, 0, 0, 0];
    (p ? p.items : []).forEach((it) => n[c[it.id] || 0]++);
    const total = p ? p.items.length : 0;
    return { n, total, left: n[0], state: !total ? 'none' : n[0] === 0 ? 'ok' : n[0] < total ? 'part' : 'none' };
  }
  const segHTML = (n, total) => `<div class="seg" role="img" aria-label="${n[1]} studied, ${n[2]} revised, ${n[3]} mastered, ${n[0]} not yet, of ${total}">${[1, 2, 3].map((i) => `<i class="b${i}" style="width:${pct(n[i], total)}%"></i>`).join('')}</div>`;
  const legendHTML = () => `<div class="legend"><span style="--c:var(--s0)">Not yet</span><span style="--c:var(--s1)">Studied once</span><span style="--c:var(--s2)">Revised</span><span style="--c:var(--s3)">Mastered</span></div>`;
  const hoursFor = (pid, it) => {
    const t = it.text; const r = t.match(/Essays (\d+)[–-](\d+)/);
    if (r) return (r[2] - r[1] + 1) * 3;
    if (/^Mock/i.test(t)) return pid === 'mpt' ? 3.5 : 3;
    return HOURS[pid] ?? 2.5;
  };
  const fmtHours = (h) => (h < 1 ? Math.round(h * 60) + ' min' : (Math.round(h * 2) / 2) + ' h');
  const docHref = (it) => (it.doc ? '#/doc/' + encodeURI(it.doc) + (it.at ? '?at=' + encodeURIComponent(it.at) : '') : null);

  function stations() {
    return order().map((id) => ({ id, label: paperLabel(id), short: SHORT[id] || paperLabel(id), ...progress(id) }));
  }
  function currentStation(st) {
    const f = store.get('focus', null);
    const fs = st.find((s) => s.id === f && s.state !== 'ok');
    return fs || st.find((s) => s.state !== 'ok') || null;
  }

  // ------------------------------------------------------------------ question stats
  const qstats = () => store.get('qstats', {});
  function recordAnswer(id, ok) { const s = qstats(); const r = s[id] || { c: 0, w: 0 }; ok ? r.c++ : r.w++; r.l = ok ? 1 : 0; r.t = Date.now(); s[id] = r; store.set('qstats', s); }
  const qById = () => (D._qById ||= Object.fromEntries(D.questions.map((q) => [q.id, q])));
  const papersWithMCQ = () => (D._mcqP ||= [...new Set(D.questions.map((q) => q.paper))]);
  const visibleForPractice = (p) => paperById[p] && (paperById[p].group !== 'Optional' || comboSubjects().includes(p) || store.get('showAllOptionals', false));

  // ------------------------------------------------------------------ toast with undo
  let toastT = null;
  function toast(msg, undo) {
    $('.toast')?.remove(); clearTimeout(toastT);
    const el = document.createElement('div'); el.className = 'toast'; el.setAttribute('role', 'status');
    el.innerHTML = `<span>${esc(msg)}</span>${undo ? '<button type="button">Undo</button>' : ''}`;
    document.body.appendChild(el);
    if (undo) el.querySelector('button').onclick = () => { undo(); el.remove(); };
    toastT = setTimeout(() => el.remove(), 5000);
  }

  // ------------------------------------------------------------------ nav
  const NAV = [['', 'My journey', 'journey'], ['papers', 'Papers', 'papers'], ['practice', 'Practice', 'practice'], ['library', 'Library', 'library'], ['plan', 'My plan', 'plan']];
  const NAV_OF = { paper: 'papers', interview: 'papers', checklist: 'papers', exam: 'practice', questions: 'practice', doc: 'library', documents: 'library', setup: '' };
  function drawNav() {
    const a = (cls) => NAV.map(([r, t, i]) => `<a href="#/${r}" data-r="${r}">${icon(i)}<span>${t}</span></a>`).join('');
    $('#nav').innerHTML = a(); $('#tabbar').innerHTML = a();
    drawMeta();
  }
  function drawMeta() {
    const c = D.meta.combos[combo()];
    $('#topMeta').innerHTML = `${esc(c ? c.label : '')} subjects · exam <a href="#/plan">${esc(fmtDate(examISO()))}</a>`;
  }
  function setActive(r) {
    const key = NAV_OF[r] ?? r;
    $$('#nav a, #tabbar a').forEach((a) => { const on = a.dataset.r === key; a.classList.toggle('on', on); on ? a.setAttribute('aria-current', 'page') : a.removeAttribute('aria-current'); });
  }

  // ------------------------------------------------------------------ setup (first visit)
  function viewSetup() {
    const main = $('#main');
    const t = isoOf(today());
    main.innerHTML = `<div class="wrap"><form class="setup" id="setup">
      <h1 class="h1">Plan your line<span class="ur-word" lang="ur">منزل</span></h1>
      <p class="lede">Three questions and you're on your way. You can change every answer later in My plan, and nothing here is fixed.</p>
      <section class="step"><div class="n on">1</div><div>
        <h2 class="h2">When is your written exam?</h2>
        <p class="hint">FPSC announces each date in its notice. Until then, use the projection and change it when the notice comes out.</p>
        <div class="two"><div class="field"><label for="sExam">Written exam starts</label><input type="date" id="sExam" value="${examISO()}" required></div>
        <div class="field"><label for="sStart">I start studying on</label><input type="date" id="sStart" value="${store.get('startDate', null) || t}" required></div></div>
        <div class="chips" style="margin-top:12px"><button type="button" class="chip" data-start="${t}">Start today</button><button type="button" class="chip" data-start="${DEFAULT_START}">1 Feb 2027 (course schedule)</button></div>
      </div></section>
      <section class="step"><div class="n on">2</div><div>
        <h2 class="h2">Your five optional subjects</h2>
        <p class="hint">Pick the set that fits your background. Compare them in <a href="#/doc/07-Optional-Papers/00-Combinations.md">the combinations guide</a>.</p>
        <div class="opts-grid">${Object.entries(D.meta.combos).map(([k, v]) => `<label class="pick"><input type="radio" name="combo" value="${k}" ${k === combo() ? 'checked' : ''}><b>${esc(v.label)}</b><span>${esc(COMBO_NOTE[k] || '')}</span><span>${v.subjects.map((s) => esc(SHORT[s] || paperLabel(s))).join(' · ')}</span></label>`).join('')}</div>
      </div></section>
      <section class="step"><div class="n on">3</div><div>
        <h2 class="h2">Your pace</h2>
        <p class="hint">How many syllabus topics a week feels right? Leave it empty and the guide suggests one from your dates.</p>
        <div class="field" style="max-width:260px"><label for="sPace">Topics a week (optional)</label><input type="number" id="sPace" min="1" max="200" placeholder="Suggest one for me" value="${store.get('pace', '') ?? ''}"></div>
      </div></section>
      <div class="row" style="margin-top:8px"><button class="btn go" type="submit">Show my line ${icon('arrow')}</button><button class="btn quiet" type="button" id="sSkip">Skip and use the defaults</button></div>
    </form></div>`;
    $$('[data-start]').forEach((b) => (b.onclick = () => { $('#sStart').value = b.dataset.start; }));
    const finish = () => { store.set('setup', true); drawMeta(); location.hash = '#/'; };
    $('#setup').onsubmit = (e) => {
      e.preventDefault();
      store.set('examDate', $('#sExam').value || DEFAULT_EXAM);
      store.set('startDate', $('#sStart').value || t);
      store.set('combo', ($('input[name=combo]:checked') || {}).value || 'recommended');
      const p = parseInt($('#sPace').value, 10); p > 0 ? store.set('pace', p) : store.del('pace');
      finish();
    };
    $('#sSkip').onclick = finish;
  }

  // ------------------------------------------------------------------ my journey (home)
  function suggestions(st, cur) {
    const c = chk(); const times = store.get('chkTime', {}); const out = [];
    if (cur) {
      const p = chkPaper(cur.id);
      p.items.filter((it) => !c[it.id]).slice(0, 3).forEach((it) => out.push({ kind: 'learn', it, paper: cur.id, title: it.text, meta: [paperLabel(cur.id), it.freq && it.freq !== 'Not asked' ? it.freq + ' frequency' : ''], hours: hoursFor(cur.id, it), href: docHref(it) }));
    }
    const weekAgo = Date.now() - 7 * DAY; let rev = null;
    st.forEach((s) => chkPaper(s.id).items.forEach((it) => { if (c[it.id] === 1 && (times[it.id] || 0) < weekAgo && (!rev || (times[it.id] || 0) < (times[rev.it.id] || 0))) rev = { it, paper: s.id }; }));
    if (rev) out.push({ kind: 'revise', it: rev.it, paper: rev.paper, title: 'Revise: ' + rev.it.text, meta: [paperLabel(rev.paper), 'studied over a week ago'], hours: Math.max(0.5, hoursFor(rev.paper, rev.it) / 3), href: docHref(rev.it) });
    const pid = cur ? cur.id : null;
    if (pid && papersWithMCQ().includes(pid)) out.push({ kind: 'practice', title: '20 MCQs: ' + paperLabel(pid), meta: ['Practice', 'one question at a time'], hours: 0.25, href: '#/practice?paper=' + pid, cta: 'Start' });
    else if (pid === 'essay') out.push({ kind: 'practice', title: 'Outline one essay topic in 40 minutes', meta: ['Practice', 'pick a topic from the bank'], hours: 40 / 60, href: '#/questions?paper=essay', cta: 'Pick' });
    const wrong = Object.values(qstats()).filter((r) => r.l === 0).length;
    if (wrong >= 10) out.push({ kind: 'practice', title: `Go over your review list (${wrong} questions)`, meta: ['Practice', 'questions you missed last time'], hours: wrong / 60, href: '#/practice?mode=wrong', cta: 'Start' });
    return out;
  }
  // topics a week: the candidate's own pace, else the suggestion that fits their dates
  function paceRate(st) {
    const remaining = st.reduce((a, s) => a + s.left, 0);
    const now = today(); const start = toDate(startISO()); const from = start > now ? start : now;
    const mine = store.get('pace', null); if (mine) return { rate: mine, from, mine: true };
    const wk = weeksBetween(from, new Date(toDate(examISO()) - BUFFER_WEEKS * 7 * DAY));
    return wk >= 1 && remaining ? { rate: Math.ceil(remaining / wk), from, mine: false } : null;
  }
  const projDate = (topics, pr) => new Date(+pr.from + Math.ceil((topics / pr.rate) * 7) * DAY);
  const shortDate = (d) => d.toLocaleDateString('en-GB', d.getFullYear() === new Date().getFullYear() ? { day: 'numeric', month: 'short' } : { day: 'numeric', month: 'short', year: 'numeric' });
  function paceText(st) {
    const remaining = st.reduce((a, s) => a + s.left, 0);
    const now = today(); const start = toDate(startISO()); const exam = toDate(examISO());
    const from = start > now ? start : now;
    const firstPassEnd = new Date(exam - BUFFER_WEEKS * 7 * DAY);
    const mine = store.get('pace', null);
    if (!remaining) return 'Every station has had a first pass. Spend the time left on revision and full mocks.';
    if (exam < now) return 'Your exam date has passed. Set the next one in <a href="#/plan">My plan</a> when you are ready.';
    if (mine) {
      const fin = projDate(remaining, paceRate(st));
      return `At your pace of <b>${mine} topics a week</b>, you'd finish the first pass around <b>${fmtDate(fin)}</b>${fin > exam ? '. That is after your exam date: you could raise the pace or move the date, whichever suits you.' : fin > firstPassEnd ? ', a little under six weeks before the exam.' : ', with time left to revise.'} <a href="#/plan">Change pace</a>`;
    }
    const pr = paceRate(st);
    if (pr) return `At about <b>${pr.rate} topics a week</b> you'd finish the first pass around <b>${fmtDate(projDate(remaining, pr))}</b>, leaving at least six weeks to revise. Only a suggestion: <a href="#/plan">set your own pace or dates</a>.`;
    return 'Your exam is close. Put the time into revision and mocks; topics you marked "Studied once" are the ones to go over first.';
  }
  function viewHome() {
    if (!store.get('setup', false)) { viewSetup(); return; }
    const main = $('#main');
    const st = stations(); const cur = currentStation(st);
    const now = today(); const exam = toDate(examISO()); const start = toDate(startISO());
    const passed = st.filter((s) => s.state === 'ok').length;
    const weeks = Math.max(0, Math.ceil(weeksBetween(now, exam)));
    const n = st.length + 2; const hereIdx = cur ? st.indexOf(cur) + 1 : n - 1;
    const tasks = suggestions(st, cur);
    const c = chk();
    const ci = cur ? st.indexOf(cur) : -1; const nFar = cur ? st.filter((s, i) => i < ci - 1 || i > ci + 2).length : 0;
    const proj = {}; let arrive = null; const pr = paceRate(st);
    if (pr) {
      let cum = 0;
      st.forEach((s, i) => { cum += s.left; if (s.left && (s === cur || i === ci + 1)) proj[s.id] = 'done ' + shortDate(projDate(cum, pr)); });
      if (cum) arrive = shortDate(projDate(cum, pr));
    }
    const dates = [...milestones(), { id: 'exam', label: 'Written exam', date: examISO(), proj: !store.get('examConfirmed', false), exam: true }].sort((a, b) => a.date.localeCompare(b.date));
    main.innerHTML = `
      <section class="band route"><div class="wrap">
        <div class="rh"><div><h1 class="h1">Your line to the written exam<span class="ur-word" lang="ur">منزل</span></h1>
          <p class="lede">You set the arrival date. The stations are your papers, and you choose the order.</p></div>
          <div class="stats"><div class="stat"><b>${passed}</b><span>stations passed</span></div><div class="stat"><b>${st.length - passed}</b><span>stations left</span></div><div class="stat"><b>${weeks}</b><span>weeks to arrival</span></div></div></div>
        <div class="line arrive" style="--n:${n};--done:${(hereIdx / (n - 1)).toFixed(4)};--at:${hereIdx}">
          <div class="fill"></div><div class="train"><span>YOU ARE HERE</span></div>
          <div class="st ok"><span class="dot"></span><span class="lab"><b>Start</b><small>${esc(fmtDate(start))}</small></span></div>
          ${st.map((s, i) => { const far = cur && (i < ci - 1 || i > ci + 2); const pr = proj[s.id]; return `<a class="st ${s.state}${s === cur ? ' here' : ''}${far ? ' far' : ''}" href="#/paper/${s.id}" title="${esc(s.label)}"><span class="dot"></span><span class="lab"><b>${esc(s.short)}</b><small>${s.state === 'ok' ? 'first pass done' : s.left === s.total ? plural(s.total, 'topic') : `${s.left} of ${s.total} left`}${pr ? `<span class="pr">${esc(pr)} proj.</span>` : ''}</small></span></a>`; }).join('')}
          <a class="st end${cur ? '' : ' here'}" href="#/plan"><span class="dot"></span><span class="lab"><b>Written exam</b><small>${esc(fmtDate(exam))}${arrive ? `<span class="pr">first pass by ${esc(arrive)}</span>` : ''}</small></span></a>
        </div>
        ${nFar ? `<button type="button" class="btn sm quiet more-st" id="moreSt" aria-expanded="false">${icon('down', 'sm')} Show all ${st.length} stations</button>` : ''}
      </div></section>
      <div class="wrap"><div class="jbody">
        <section>
          <h2 class="h2">${cur ? 'Next stop: ' + esc(cur.label) : 'Revision and mocks'}</h2>
          <p class="hint">${start > now ? `Your line starts on ${esc(fmtDate(start))}. Anything you do before then is a head start. ` : ''}Suggestions for this stretch. Do them in any order, skip ahead, or <a href="#/papers">pick another station</a>.</p>
          <div class="tasks" id="tasks">${tasks.map((t, i) => {
            const checked = t.it ? (t.kind === 'revise' ? (c[t.it.id] || 0) >= 2 : (c[t.it.id] || 0) >= 1) : false;
            return `<div class="task${checked ? ' done' : ''}" data-i="${i}">
              ${t.it ? `<button type="button" class="box" role="checkbox" aria-checked="${checked}" aria-label="Mark ${esc(t.kind === 'revise' ? 'revised' : 'studied')}: ${esc(t.it.text)}">${icon('check')}</button>` : '<span class="box ghost"></span>'}
              <div><div class="t"${dirAttr(t.title)}>${esc(t.title)}</div><div class="m">${t.meta.filter(Boolean).map(esc).join(' · ')}<span class="mh"> · ${fmtHours(t.hours)}</span></div></div>
              <span class="h">${fmtHours(t.hours)}</span>
              ${t.href ? `<a class="btn sm open${i === 0 ? ' go' : ''}" href="${t.href}">${t.cta || 'Open'}</a>` : '<span></span>'}</div>`;
          }).join('') || '<div class="empty">Nothing suggested right now.</div>'}</div>
          <div class="note pace">${paceText(st)}</div>
        </section>
        <aside>
          <div class="board"><h2 class="h2">Timetable</h2><p class="hint">Your dates in order. Projected ones are marked.</p><div class="br bh"><span>Stop</span><span>Date</span></div>
            ${dates.map((d) => { const dd = toDate(d.date); const w = Math.ceil(weeksBetween(now, dd)); return `<div class="br${dd < now ? ' past' : ''}"><span>${esc(d.label)}${d.proj ? '<em>proj.</em>' : ''}</span><span class="d">${esc(dd.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }))}<small>${dd < now ? 'passed' : w <= 1 ? 'this week' : 'in ' + w + ' weeks'}</small></span></div>`; }).join('')}
            <p class="small" style="margin:14px 0 0"><a href="#/plan">Edit dates</a></p></div>
          <nav class="side-links" aria-label="Guides">
            <a href="#/doc/00-START-HERE.md">Start here <span>how the course works</span></a>
            <a href="#/doc/01-Plan/Exam-Rules.md">Exam rules <span>marks, pass rules, attempts</span></a>
            <a href="#/doc/01-Plan/Study-Schedule.md">Week-by-week schedule <span>one way to pace it</span></a>
            <a href="#/paper/interview">After the exam <span>medical, psych test, viva</span></a>
          </nav>
        </aside>
      </div></div>`;
    $('#moreSt')?.addEventListener('click', (e) => { const on = $('.line').classList.toggle('all'); e.currentTarget.setAttribute('aria-expanded', String(on)); e.currentTarget.innerHTML = on ? icon('up', 'sm') + ' Show fewer stations' : icon('down', 'sm') + ` Show all ${st.length} stations`; });
    $('#tasks').addEventListener('click', (e) => {
      const b = e.target.closest('.box[role=checkbox]'); if (!b) return;
      const t = tasks[+b.closest('.task').dataset.i]; const id = t.it.id; const prev = chk()[id] || 0;
      const on = b.getAttribute('aria-checked') !== 'true';
      const next = on ? (t.kind === 'revise' ? 2 : Math.max(prev, 1)) : (t.kind === 'revise' ? 1 : 0);
      setChk(id, next);
      b.setAttribute('aria-checked', String(on)); b.closest('.task').classList.toggle('done', on);
      if (on) toast(t.kind === 'revise' ? 'Marked as revised' : 'Marked as studied once', () => { setChk(id, prev); viewHome(); });
      clearTimeout(viewHome.t); viewHome.t = setTimeout(() => { if (location.hash.replace(/^#\/?/, '') === '') softRefreshHome(); }, 1600);
    });
  }
  function softRefreshHome() { const y = window.scrollY; viewHome(); $('.line')?.classList.remove('arrive'); window.scrollTo(0, y); }

  // ------------------------------------------------------------------ papers
  function viewPapers() {
    const main = $('#main'); const st = stations(); const cur = currentStation(st);
    const others = D.meta.papers.filter((p) => p.group === 'Optional' && !comboSubjects().includes(p.id));
    const row = (id, here) => { const p = progress(id); return `<a class="prow ${p.state}" href="#/paper/${id}"><span class="dot"></span><span><b>${esc(paperLabel(id))}</b>${here ? ' <span class="tag hi">next stop</span>' : ''}</span>${segHTML(p.n, p.total || 1)}<span class="c">${p.total ? (p.left ? `${p.left} of ${p.total} left` : 'first pass done') : '—'}</span>${icon('chev', 'sm')}</a>`; };
    main.innerHTML = `<div class="wrap">
      <div class="page-head"><h1 class="h1">Papers</h1><p class="lede">Every station on your line. Open one to see its path: understand the paper, learn the topics, practise, then sit a mock.</p>
        <div class="row">${legendHTML()}</div></div>
      <div class="group-h"><h2 class="h2">On your line</h2><a class="small" href="#/plan">Change the order</a></div>
      <div class="plist">${st.map((s) => row(s.id, s === cur)).join('')}</div>
      <div class="group-h"><h2 class="h2">After the written exam</h2></div>
      <div class="plist">${row('interview')}</div>
      <details class="sec" style="margin-bottom:60px"><summary class="group-h" style="cursor:pointer;list-style:none"><h2 class="h2">Other optional subjects</h2><span class="small muted">${plural(others.length, 'subject')} not in your set · show</span></summary>
        <div class="plist">${others.map((p) => row(p.id)).join('')}</div></details>
    </div>`;
  }

  // shared: topic row with the four status buttons
  const topicHTML = (it, s, showNotes = true) => {
    const href = docHref(it);
    return `<div class="topic" data-id="${esc(it.id)}"><div class="t"${dirAttr(it.text)}>${esc(it.text)}${it.freq && it.freq !== 'Not asked' ? `<span class="tag${it.freq === 'High' ? ' hi' : ''}">${esc(it.freq)}</span>` : ''}</div>
      ${showNotes && href ? `<a class="btn sm quiet" href="${href}">Notes</a>` : '<span></span>'}
      <div class="states" role="group" aria-label="Status of ${esc(it.text)}">${STATES.map((x, i) => `<button type="button" data-s="${i}" aria-pressed="${i === s}">${x}</button>`).join('')}</div></div>`;
  };
  function bindStates(root, after) {
    root.addEventListener('click', (e) => {
      const b = e.target.closest('.states button'); if (!b) return;
      const row = b.closest('.topic'); setChk(row.dataset.id, +b.dataset.s);
      $$('.states button', row).forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
      after && after(row);
    });
  }

  function viewPaper(pid) {
    const main = $('#main'); const meta = paperById[pid]; const cp = chkPaper(pid);
    if (!meta || !cp) { main.innerHTML = `<div class="wrap"><div class="empty" style="margin-top:30px">That paper isn't in this course. <a href="#/papers">See all papers</a>.</div></div>`; return; }
    const kd = meta.docs || {}; const st = stations(); const cur = currentStation(st); const onLine = order().includes(pid);
    const c = chk(); const mcqs = D.questions.filter((q) => q.paper === pid); const subj = D.subjective.filter((s) => s.paper === pid);
    const qs = qstats(); const tried = mcqs.filter((q) => qs[q.id]).length; const wrong = mcqs.filter((q) => qs[q.id] && qs[q.id].l === 0).length;
    const docs = D.manifest.docs.filter((d) => d.path.startsWith(meta.prefix));
    const link = (k, t, s) => kd[k] ? `<a href="#/doc/${encodeURI(kd[k])}"><span>${t}<span>${s}</span></span>${icon('chev', 'sm')}</a>` : '';
    const secs = []; cp.items.forEach((it) => { let g = secs.find((x) => x.name === (it.section || 'Topics')); if (!g) secs.push(g = { name: it.section || 'Topics', items: [] }); g.items.push(it); });
    const firstOpen = secs.findIndex((g) => g.items.some((it) => !c[it.id]));
    const head = () => { const p = progress(pid); return `${p.left ? `<b class="num">${p.left}</b> of ${p.total} topics not started yet` : 'Every topic has had a first pass'} · ${p.n[1]} studied once · ${p.n[2]} revised · ${p.n[3]} mastered`; };
    const isInterview = pid === 'interview';
    const seen = store.get('seen', {}); const pp = progress(pid);
    const mocked = store.get('history', []).some((h) => h.title.startsWith(meta.label) || (pid === 'mpt' && /^MPT/.test(h.title)));
    const stp = [kd.howto && seen[kd.howto] ? 'ok' : Object.keys(seen).some((k) => k.startsWith(meta.prefix)) ? 'part' : '',
      pp.left === 0 && pp.total ? 'ok' : pp.left < pp.total ? 'part' : '', wrong === 0 && tried >= Math.min(40, mcqs.length || 40) ? 'ok' : tried ? 'part' : '', mocked ? 'ok' : ''];
    const hereStep = stp.findIndex((x) => x !== 'ok'); if (hereStep >= 0) stp[hereStep] += ' here';
    const mockBlock = () => {
      if (pid === 'mpt') return `<div class="row"><button class="btn go" data-preset="mpt200">Full mock: 200 MCQs, 200 min</button><button class="btn" data-preset="mpt100">Half mock: 100 MCQs</button></div>`;
      if (pid === 'essay') return `<div class="row"><button class="btn go" data-preset="essay">Draw an essay paper (3 hours)</button></div>`;
      if (isInterview) return `<div class="row"><a class="btn go" href="#/doc/${encodeURI(kd.howto || meta.prefix + '05-Viva-Voce.md')}">Read the stages overview</a></div>`;
      return `<div class="row">${mcqs.length ? '<button class="btn go" data-preset="part1">Part I: 20 MCQs in 30 min</button>' : ''}${subj.length ? '<button class="btn" data-preset="full">Full paper: MCQs + 7 written questions</button>' : ''}</div>`;
    };
    main.innerHTML = `
      <section class="band"><div class="wrap page-head">
        <div class="crumbs"><a href="#/">My journey</a>${icon('chev')}<a href="#/papers">Papers</a></div>
        <h1 class="h1">${esc(meta.label)}</h1>
        <p class="lede" id="phead">${head()}</p>
        <div class="row">${onLine && cur && cur.id !== pid ? `<button class="btn go" id="focus">Make this my next stop</button>` : cur && cur.id === pid ? '<span class="tag hi">Your next stop</span>' : ''}
          ${!onLine && meta.group === 'Optional' ? '<span class="tag">Not in your subject set</span> <a class="small" href="#/plan">Change subjects</a>' : ''}</div>
        <nav class="path" aria-label="Steps for this paper">
          <a href="javascript:void 0" data-go="s1" class="${stp[0]}"><span class="dot">1</span><b>Understand</b><small>format and marking</small></a>
          <a href="javascript:void 0" data-go="s2" class="${stp[1]}"><span class="dot">2</span><b>Learn</b><small>${plural(cp.items.length, 'topic')}</small></a>
          <a href="javascript:void 0" data-go="s3" class="${stp[2]}"><span class="dot">3</span><b>Practise</b><small>${isInterview ? 'viva drill' : mcqs.length ? plural(mcqs.length, 'MCQ') : plural(subj.length, 'question')}</small></a>
          <a href="javascript:void 0" data-go="s4" class="${stp[3]}"><span class="dot">4</span><b>${isInterview ? 'Prepare' : 'Mock'}</b><small>${isInterview ? 'the day itself' : 'timed, like the real paper'}</small></a>
        </nav>
      </div></section>
      <div class="wrap" style="padding-bottom:60px">
        <section class="pstep" id="s1"><header><span class="dot">1</span><div><h2 class="h2">Understand the paper</h2><p class="hint" style="margin:0">Start here before the topics: what the paper asks, how it is marked, and where marks are lost.</p></div></header>
          <div class="doclinks">${link('howto', isInterview ? 'Overview of all stages' : 'How to use this pack', 'the plan for this paper')}${link('syllabus', 'Syllabus', 'official topics, with how often each is asked')}${link('analysis', 'Past-paper analysis', 'what came up, 2016–2026')}${link('plan', 'Practice plan', 'how to build up practice')}${link('resources', 'Books and resources', 'what else to read')}</div></section>
        <section class="pstep" id="s2"><header><span class="dot">2</span><div><h2 class="h2">Learn the topics</h2><p class="hint" style="margin:0">Open the notes, study, then mark it: <b>Studied</b> after the first read and summary, <b>Revised</b> after a second pass, <b>Mastered</b> once you can answer a timed past-paper question on it.</p></div></header>
          <div class="topics" id="topics">${secs.map((g, gi) => { const n = [0, 0, 0, 0]; g.items.forEach((it) => n[c[it.id] || 0]++); return `<details ${gi === (firstOpen < 0 ? 0 : firstOpen) ? 'open' : ''}><summary><b${dirAttr(g.name)}>${esc(g.name)}</b>${segHTML(n, g.items.length)}<span class="c">${n[0] ? n[0] + ' left' : 'done'}</span>${icon('chev', 'sm')}</summary>${g.items.map((it) => topicHTML(it, c[it.id] || 0)).join('')}</details>`; }).join('')}</div></section>
        <section class="pstep" id="s3"><header><span class="dot">3</span><div><h2 class="h2">${isInterview ? 'Practise the viva' : 'Practise'}</h2><p class="hint" style="margin:0">${isInterview ? 'Answer aloud in about 90 seconds each, or record yourself and listen back.' : 'Short sets as you go. Wrong answers collect in your review list.'}</p></div></header>
          ${isInterview ? `<button class="btn go" id="vdraw">Draw 5 interview questions</button><div class="list card" id="vlist" style="margin-top:14px;display:none"></div>` : `
          ${mcqs.length ? `<div class="grid3" style="margin-bottom:16px"><div class="figure"><b>${mcqs.length}</b><span>MCQs for this paper</span></div><div class="figure"><b>${tried}</b><span>tried so far</span></div><div class="figure"><b>${wrong}</b><span>in your review list</span></div></div>
          <div class="row"><a class="btn go" href="#/practice?paper=${pid}">20 MCQs now</a>${wrong ? `<a class="btn" href="#/practice?paper=${pid}&mode=wrong">Go over the ${wrong} you missed</a>` : ''}</div>` : ''}
          ${subj.length ? `<div class="sec" style="margin-top:22px"><h3 class="h3">Written questions</h3><p class="hint">${plural(subj.filter((s) => s.past).length, 'past-paper question')} and ${plural(subj.filter((s) => !s.past).length, 'likely question')}. Draw a few and outline answers against the clock.</p>
            <div class="row"><button class="btn" id="draw5">Draw 5 questions</button><a class="btn quiet" href="#/questions?paper=${pid}">Browse all</a></div><div class="list card" id="dlist" style="margin-top:14px;display:none"></div></div>` : ''}`}
          <div class="doclinks" style="margin-top:22px">${link('answers', 'Model answers', 'how a high-scoring answer is built')}${link('revision', 'Quick revision', 'the night-before sheet')}${link('qbank', 'Question bank', 'every recorded question')}${link('mcq', 'MCQ bank', 'all MCQs as one file')}</div></section>
        <section class="pstep" id="s4"><header><span class="dot">4</span><div><h2 class="h2">${isInterview ? 'Prepare for the day' : 'Sit a mock'}</h2><p class="hint" style="margin:0">${pid === 'mpt' ? 'The real split and timing. Pass mark 33%.' : isInterview ? 'Viva voce: 300 marks, 100 needed to pass.' : 'Write by hand, on paper, in the real time limit. Then mark yourself with the scorecard.'}</p></div></header>
          ${mockBlock()}${kd.mocks ? `<div class="doclinks" style="margin-top:16px">${link('mocks', 'Mock papers in this pack', 'with answer keys')}</div>` : ''}</section>
        <section class="pstep"><h2 class="h2">Everything in this pack</h2><p class="hint">${plural(docs.length, 'file')}.</p><div class="tree">${renderFolder(docs, meta.prefix)}</div></section>
      </div>`;
    $$('[data-go]').forEach((a) => (a.onclick = () => $('#' + a.dataset.go).scrollIntoView({ behavior: 'smooth', block: 'start' })));
    $('#focus')?.addEventListener('click', () => { store.set('focus', pid); toast(paperLabel(pid) + ' is now your next stop'); viewPaper(pid); });
    bindStates($('#topics'), (row) => {
      $('#phead').innerHTML = head();
      const det = row.closest('details'); const ids = $$('.topic', det).map((r) => r.dataset.id); const cc = chk(); const n = [0, 0, 0, 0]; ids.forEach((id) => n[cc[id] || 0]++);
      det.querySelector('.seg').outerHTML = segHTML(n, ids.length); det.querySelector('summary .c').textContent = n[0] ? n[0] + ' left' : 'done';
    });
    main.addEventListener('click', (e) => { const b = e.target.closest('[data-preset]'); if (b) startPreset(b.dataset.preset, pid); });
    $('#draw5')?.addEventListener('click', () => {
      const L = shuffle(subj).slice(0, 5); const box = $('#dlist'); box.style.display = '';
      box.innerHTML = L.map((s) => `<div class="li"><div class="row small" style="gap:6px"><span class="tag${s.past ? ' past' : ''}">${esc(s.tag)}</span><span class="muted">${esc(s.topic)}</span></div><div style="margin-top:4px"${dirAttr(s.q)}>${esc(s.q)}</div></div>`).join('');
    });
    if (isInterview) $('#vdraw').addEventListener('click', () => vivaDraw(kd.qbank));
  }
  let vivaPool = null;
  async function vivaDraw(path) {
    const box = $('#vlist'); if (!path) return; box.style.display = '';
    if (!vivaPool) {
      const t = await (await fetch(encodeURI(path))).text(); vivaPool = []; let sec = '';
      t.split('\n').forEach((l) => { const h = l.match(/^#{2,3}\s+(.+)/); if (h) sec = h[1].replace(/\*/g, ''); const m = l.match(/^\s*(?:[-*]|\d+\.)\s+(.+)/); if (m && m[1].length > 15 && /\?|\*\*/.test(m[1])) vivaPool.push({ sec, t: m[1] }); });
    }
    box.innerHTML = shuffle(vivaPool).slice(0, 5).map((x) => `<div class="li"><div class="small muted">${esc(x.sec)}</div><div>${DOMPurify.sanitize(marked.parseInline(x.t))}</div></div>`).join('') || '<div class="empty">No questions found.</div>';
  }

  // ------------------------------------------------------------------ library tree + search
  function renderFolder(docs, prefix) {
    const root = { files: [], dirs: {} };
    for (const d of docs) {
      const segs = d.path.slice(prefix.length).split('/').slice(0, -1);
      let node = root; for (const sg of segs) node = node.dirs[sg] = node.dirs[sg] || { files: [], dirs: {} };
      node.files.push(d);
    }
    const label = (s) => s.replace(/^\d+[-_.]?/, '').replace(/-/g, ' ').replace(/\band\b/g, '&');
    const render = (node) => node.files.sort((a, b) => a.path.localeCompare(b.path)).map((d) => `<a href="#/doc/${encodeURI(d.path)}">${esc(shortTitle(d))}</a>`).join('')
      + Object.keys(node.dirs).sort().map((k) => `<details class="sub"><summary>${esc(label(k))}</summary>${render(node.dirs[k])}</details>`).join('');
    return render(root);
  }
  function shortTitle(d) { let t = d.title.replace(/^(CSS\s+)?/, ''); if (t.length > 80) t = t.slice(0, 77) + '…'; return t; }
  function mark(text, words) {
    let t = esc(text);
    for (const w of words) if (w.length > 1) t = t.replace(new RegExp('(' + w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'ig'), '<mark>$1</mark>');
    return t;
  }
  const libTabs = (on) => `<nav class="subtabs" aria-label="Library"><a href="#/library" class="${on === 'notes' ? 'on' : ''}">Notes and guides</a><a href="#/documents" class="${on === 'docs' ? 'on' : ''}">Downloads</a></nav>`;
  function viewLibrary(q0 = '') {
    const main = $('#main');
    main.innerHTML = `<div class="wrap"><div class="page-head"><h1 class="h1">Library</h1><p class="lede">Every note, guide and question bank in the course, ${plural(D.manifest.docs.length, 'file')}. Most of the time you'll reach these from a paper's path; search here when you want something specific.</p>${libTabs('notes')}</div>
      <div class="field" style="max-width:560px"><label for="libq">Search the notes</label><input id="libq" type="search" placeholder="e.g. Lahore Resolution, ozone, Seerah, précis method" value="${esc(q0)}" autocomplete="off"></div>
      <div id="libres" style="margin:22px 0 60px"></div></div>`;
    const draw = () => {
      const q = $('#libq').value.trim().toLowerCase(); const box = $('#libres');
      if (!q) {
        const bySec = {}; D.manifest.docs.forEach((d) => (bySec[d.section] = bySec[d.section] || []).push(d));
        box.innerHTML = `<div class="tree">${D.manifest.sections.filter((s) => bySec[s.id]).map((s) => `<details><summary>${esc(s.label)} <span class="small muted" style="font:400 13px var(--sans);text-transform:none;letter-spacing:0">${bySec[s.id].length}</span></summary>${renderFolder(bySec[s.id], (bySec[s.id][0].path.split('/')[0] + '/').replace(/^[^/]+\.md\/$/, ''))}</details>`).join('')}</div>`;
        return;
      }
      const words = q.split(/\s+/);
      const hits = D.manifest.docs.map((d) => {
        const hay = (d.title + ' ' + d.path + ' ' + d.headings.join(' ')).toLowerCase();
        const score = words.reduce((s, w) => s + (d.title.toLowerCase().includes(w) ? 3 : 0) + (hay.includes(w) ? 1 : 0), 0);
        const head = d.headings.find((h) => words.some((w) => h.toLowerCase().includes(w)));
        return { d, score, ok: words.every((w) => hay.includes(w)), head };
      }).filter((x) => x.ok).sort((a, b) => b.score - a.score).slice(0, 80);
      box.innerHTML = hits.length ? `<p class="small muted">${plural(hits.length, 'result')}</p>` + hits.map(({ d, head }) => `<a class="hit" href="#/doc/${encodeURI(d.path)}"><b>${mark(d.title, words)}</b>${head ? `<div class="small muted">${mark(head, words)}</div>` : ''}<div class="small muted">${esc(d.path.split('/').slice(0, -1).map((p) => p.replace(/^\d+-/, '').replace(/-/g, ' ')).join(' › '))}</div></a>`).join('') : '<div class="empty">No notes match. Try fewer or different words.</div>';
    };
    let t; $('#libq').addEventListener('input', () => { clearTimeout(t); t = setTimeout(draw, 120); });
    draw();
  }

  // ------------------------------------------------------------------ document reader
  const docSet = () => (D._docSet ||= new Set(D.manifest.docs.map((d) => d.path)));
  function resolvePath(base, p) {
    if (/^(https?:|mailto:|#|data:)/i.test(p)) return null;
    p = p.split('#')[0].split('?')[0]; if (!p) return null;
    const stack = p.startsWith('/') ? [] : base.split('/').slice(0, -1);
    for (const part of p.replace(/^\//, '').split('/')) { if (part === '..') stack.pop(); else if (part !== '.' && part !== '') stack.push(part); }
    return stack.join('/');
  }
  function findDoc(base, p) {
    const cands = []; const r1 = resolvePath(base, p); if (r1) cands.push(r1);
    const clean = p.replace(/^\.\.?\//, '').replace(/^(\.\.\/)+/, ''); cands.push(clean);
    const pack = base.split('/').slice(0, base.startsWith('0') && base.split('/').length > 2 ? 2 : 1).join('/');
    cands.push(pack + '/' + clean, '06-Compulsory-Papers/' + clean, '22-CSS-Exam/' + clean);
    for (const c of cands) {
      const n = c.replace(/^22-CSS-Exam\//, '');
      if (docSet().has(n)) return { type: 'doc', path: n };
      const folder = n.replace(/\/$/, '');
      const inFolder = D.manifest.docs.filter((d) => d.path.startsWith(folder + '/')).sort((a, b) => a.path.localeCompare(b.path));
      if (folder && inFolder.length) return { type: 'doc', path: (inFolder.find((d) => /\/(00-|README|COVERAGE)/i.test(d.path.slice(folder.length))) || inFolder[0]).path };
      const pm = D.manifest.docs.find((d) => d.path.startsWith(n) && n.length > 6); if (pm) return { type: 'doc', path: pm.path };
    }
    if (/\.(pdf|epub|txt|json|csv|tsv)$/i.test(p) && r1) return { type: 'file', path: r1 };
    return null;
  }
  const slug = (t) => t.toLowerCase().replace(/<[^>]+>/g, '').replace(/[^\w؀-ۿ]+/g, '-').replace(/^-|-$/g, '').slice(0, 60);

  async function viewDoc(path, q) {
    const main = $('#main');
    const meta = D.manifest.docs.find((d) => d.path === path);
    if (!meta) { main.innerHTML = `<div class="wrap"><div class="empty" style="margin-top:30px">That document isn't in this course. <a href="#/library">Open the library</a>.</div></div>`; return; }
    main.innerHTML = '<div class="wrap loading">Opening…</div>';
    let text;
    try { const r = await fetch(encodeURI(path)); if (!r.ok) throw new Error(); text = await r.text(); }
    catch (e) { main.innerHTML = `<div class="wrap"><div class="empty" style="margin-top:30px">This file didn't load. If you opened index.html straight from disk, serve the folder instead (see README).</div></div>`; return; }
    const html = DOMPurify.sanitize(marked.parse(text, { gfm: true, breaks: false }), { ADD_ATTR: ['target'] });
    const paper = D.meta.papers.find((p) => path.startsWith(p.prefix));
    const items = D.checklist.papers.flatMap((p) => p.items).filter((it) => it.doc === path);
    const sec = D.manifest.sections.find((s) => s.id === meta.section);
    main.innerHTML = `<div class="wrap"><div class="doc-wrap"><article>
      <div class="crumbs"><a href="#/library">Library</a>${sec ? icon('chev') + esc(sec.label) : ''}${paper ? icon('chev') + `<a href="#/paper/${paper.id}">${esc(paper.label)}</a>` : ''}</div>
      <div class="md" id="md">${html}</div>
      ${items.length ? `<section class="mark-here" id="markHere"><h2 class="h3">Mark what you studied here</h2><p class="hint" style="margin:6px 0 4px">${plural(items.length, 'syllabus topic')} ${items.length === 1 ? 'uses' : 'use'} this note.</p>${items.map((it) => topicHTML(it, chk()[it.id] || 0, false)).join('')}</section>` : ''}
      <div class="doc-foot"><span class="muted small">${esc(path)} · ${meta.words.toLocaleString()} words</span>
        <span class="row">${paper ? `<a class="btn sm" href="#/paper/${paper.id}">${icon('back', 'sm')} Back to ${esc(SHORT[paper.id] || paper.label)}</a>` : ''}<a class="btn sm quiet" href="https://github.com/mahad002/css-pakistan-practice/blob/main/${encodeURI(path)}" target="_blank" rel="noopener">View on GitHub</a></span></div>
      </article><nav class="toc" id="toc" aria-label="On this page"></nav></div></div>`;
    const md = $('#md');
    $$('table', md).forEach((t) => { const w = document.createElement('div'); w.className = 'tbl'; t.parentNode.insertBefore(w, t); w.appendChild(t); });
    $$('a[href]', md).forEach((a) => {
      const href = a.getAttribute('href');
      if (/^https?:/i.test(href)) { a.target = '_blank'; a.rel = 'noopener'; return; }
      if (href.startsWith('#')) return;
      const f = findDoc(path, href);
      if (f && f.type === 'doc') a.setAttribute('href', '#/doc/' + encodeURI(f.path));
      else if (f && f.type === 'file') { a.setAttribute('href', encodeURI(f.path)); a.setAttribute('download', ''); }
    });
    $$('code', md).forEach((c) => {
      if (c.closest('pre') || c.closest('a')) return;
      const t = c.textContent.trim();
      if (!/(\.md|\/)$/.test(t) && !/^\d\d-[\w-]+/.test(t)) return;
      if (t.includes(' ') && !t.endsWith('.md')) return;
      const f = findDoc(path, t);
      if (f && f.type === 'doc') { const a = document.createElement('a'); a.href = '#/doc/' + encodeURI(f.path); a.className = 'pathlink'; c.replaceWith(a); a.appendChild(c); }
    });
    $$('p, li, td, th, blockquote, h2, h3', md).forEach((el) => { if (isRTL(el.textContent)) { el.setAttribute('dir', 'rtl'); el.setAttribute('lang', 'ur'); } });
    const heads = $$('h2, h3', md); const used = {};
    heads.forEach((h) => { let id = slug(h.textContent) || 'section'; used[id] = (used[id] || 0) + 1; if (used[id] > 1) id += '-' + used[id]; h.id = id; });
    const toc = $('#toc');
    if (heads.length > 2) {
      toc.innerHTML = '<h4>On this page</h4>' + heads.slice(0, 80).map((h) => `<a href="javascript:void 0" data-id="${h.id}" style="${h.tagName === 'H3' ? 'padding-left:10px' : ''}">${esc(h.textContent)}</a>`).join('');
      toc.addEventListener('click', (e) => { const a = e.target.closest('a[data-id]'); if (a) document.getElementById(a.dataset.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' }); });
    } else toc.remove();
    if ($('#markHere')) bindStates($('#markHere'), (row) => toast('Saved: ' + STATES[chk()[row.dataset.id] || 0]));
    document.title = meta.title + ' · CSS Practice';
    const at = q.get('at');
    const target = at && (document.getElementById(at) || heads.find((h) => h.id.startsWith(at.slice(0, 24))));
    if (target) { target.scrollIntoView({ block: 'start' }); target.classList.add('flash'); setTimeout(() => target.classList.remove('flash'), 2200); }
    else window.scrollTo(0, 0);
    store.set('lastDoc', path); const seenD = store.get('seen', {}); seenD[path] = Date.now(); store.set('seen', seenD);
  }

  // ------------------------------------------------------------------ downloads
  function viewDocuments() {
    const main = $('#main'); const docs = D.documents || [];
    const cat = D.manifest.docs.find((d) => /09-Official-Documents\/CATALOGUE\.md$/.test(d.path));
    const subjects = [...new Set(docs.map((d) => d.subject || 'Other'))].sort();
    const size = (b) => (b > 1048576 ? (b / 1048576).toFixed(1) + ' MB' : Math.max(1, Math.round(b / 1024)) + ' KB');
    main.innerHTML = `<div class="wrap"><div class="page-head"><h1 class="h1">Library</h1><p class="lede">Official FPSC documents, past papers and government publications stored with the course. Copyrighted books are not hosted here; the catalogue lists where to get them.</p>${libTabs('docs')}</div>
      ${cat ? `<p><a class="btn" href="#/doc/${encodeURI(cat.path)}">Open the full catalogue</a></p>` : ''}
      ${docs.length ? `<div class="card tablewrap" style="padding:8px 14px"><table class="plain"><thead><tr><th>Document</th><th>Subject</th><th>Size</th><th><span class="sr">Download</span></th></tr></thead><tbody>
        ${subjects.map((s) => docs.filter((d) => (d.subject || 'Other') === s).map((d) => `<tr><td>${esc(d.title)}${d.status ? ` <span class="tag${/official/i.test(d.status) ? ' past' : ''}">${esc(d.status)}</span>` : ''}${d.source_url ? `<div class="small"><a href="${esc(d.source_url)}" target="_blank" rel="noopener">source</a></div>` : ''}</td><td>${esc(d.subject || '')}</td><td class="num">${d.size_bytes ? size(d.size_bytes) : ''}</td><td><a class="btn sm" href="${encodeURI(d.path)}" download>${icon('download', 'sm')} Download</a></td></tr>`).join('')).join('')}
      </tbody></table></div>` : '<div class="empty">No documents yet.</div>'}
      <h2 class="h2 sec">Official links</h2>
      <div class="side-links" style="margin-bottom:60px">${[['CSS syllabus (FPSC)', 'https://www.fpsc.gov.pk/Syllabuses?section=CSS%20Syllabi'], ['CSS Competitive Examination Rules', 'https://www.fpsc.gov.pk/MPTandMAIN?section=CSS%20Rules'], ['Past papers (FPSC, 2023 onwards)', 'https://www.fpsc.gov.pk/Schedule?section=Previous%20Question%20Papers/CSS'], ['CSS and MPT notices', 'https://www.fpsc.gov.pk/Jobs?section=CSS'], ['FPSC annual reports', 'https://www.fpsc.gov.pk/Publications?section=Annual%20Report'], ['Online application portal', 'https://apply.fpsc.gov.pk/login']].map(([t, u]) => `<a href="${u}" target="_blank" rel="noopener">${t} ${icon('external', 'sm')}</a>`).join('')}</div></div>`;
  }

  // ------------------------------------------------------------------ practice: quick MCQs
  const pracTabs = (on) => `<nav class="subtabs" aria-label="Practice"><a href="#/practice" class="${on === 'mcq' ? 'on' : ''}">Quick practice</a><a href="#/exam" class="${on === 'exam' ? 'on' : ''}">Mock exams</a><a href="#/questions" class="${on === 'qb' ? 'on' : ''}">Question bank</a></nav>`;
  let practice = null;
  function viewPractice(q) {
    const main = $('#main');
    const st = qstats(); const all = D.questions;
    const attempted = all.filter((x) => st[x.id]); const right = attempted.filter((x) => st[x.id].l === 1).length;
    const wrongN = all.filter((x) => st[x.id] && st[x.id].l === 0).length;
    const pp = papersWithMCQ().filter(visibleForPractice);
    const sel = q.get('paper') ? [q.get('paper')] : store.get('pracPapers', [currentStation(stations())?.id || 'mpt']).filter((p) => pp.includes(p));
    main.innerHTML = `<div class="wrap"><div class="page-head"><h1 class="h1">Practice</h1><p class="lede">One question at a time, with the explanation straight after. Wrong answers go to your review list so you can come back to them.</p>${pracTabs('mcq')}</div>
      <div class="grid3" style="margin-bottom:22px"><div class="figure"><b>${all.length.toLocaleString()}</b><span>MCQs in the bank</span></div><div class="figure"><b>${attempted.length.toLocaleString()}</b><span>tried · ${pct(right, attempted.length)}% right last time</span></div><div class="figure"><b>${wrongN}</b><span>in your review list</span></div></div>
      <div class="card"><div class="lbl" style="margin-bottom:10px">Papers</div>
        <div class="chips" id="pp">${pp.map((p) => `<button type="button" class="chip" data-p="${p}" aria-pressed="${sel.includes(p)}">${esc(paperLabel(p))}<span class="muted">${all.filter((x) => x.paper === p).length}</span></button>`).join('')}</div>
        <div class="toolbar" style="margin-top:16px">
          <div class="field" style="min-width:220px;flex:1"><label for="psec">Section</label><select id="psec"></select></div>
          <div class="field"><label for="pmode">Questions</label><select id="pmode"><option value="random">Random</option><option value="unseen">Not tried yet</option><option value="wrong">My review list</option><option value="order">In order</option></select></div>
          <div class="field"><label for="pn">How many</label><select id="pn"><option>10</option><option selected>20</option><option>50</option><option>100</option></select></div>
          <button class="btn go" id="pstart">Start</button></div>
        <p class="small muted" id="pcount" style="margin:12px 0 0"></p></div>
      <div id="pq" style="margin:22px 0 60px"></div></div>`;
    if (q.get('mode')) $('#pmode').value = q.get('mode');
    const chosen = () => $$('#pp .chip[aria-pressed=true]').map((b) => b.dataset.p);
    const updateSec = () => {
      const secs = [...new Set(D.questions.filter((x) => chosen().includes(x.paper)).map((x) => x.section).filter(Boolean))];
      $('#psec').innerHTML = '<option value="">All sections</option>' + secs.map((s) => `<option${dirAttr(s)}>${esc(s)}</option>`).join('');
      count();
    };
    const pool = () => {
      const ps = chosen(); const sec = $('#psec').value; const mode = $('#pmode').value; const s = qstats();
      let p = D.questions.filter((x) => ps.includes(x.paper) && (!sec || x.section === sec));
      if (mode === 'unseen') p = p.filter((x) => !s[x.id]);
      if (mode === 'wrong') p = p.filter((x) => s[x.id] && s[x.id].l === 0);
      return mode === 'order' ? p : shuffle(p);
    };
    const count = () => { const n = pool().length; $('#pcount').textContent = n ? plural(n, 'question') + ' match.' : 'No questions match. Choose a paper, or change the filters.'; };
    $('#pp').addEventListener('click', (e) => { const b = e.target.closest('.chip'); if (!b) return; b.setAttribute('aria-pressed', String(b.getAttribute('aria-pressed') !== 'true')); store.set('pracPapers', chosen()); updateSec(); });
    $('#psec').addEventListener('change', count); $('#pmode').addEventListener('change', count);
    $('#pstart').addEventListener('click', () => {
      const qs = pool().slice(0, +$('#pn').value);
      if (!qs.length) { $('#pq').innerHTML = '<div class="empty">No questions match. Change the filters.</div>'; return; }
      practice = { qs, i: 0, right: 0, done: 0 }; showPQ();
    });
    updateSec();
    if (q.get('paper') || q.get('mode')) $('#pstart').click();
  }
  function qCard(q, i, total, chosen, reveal) {
    return `<div class="card q-card" data-id="${q.id}">
      <div class="q-head"><span class="num">Question ${i + 1} of ${total}</span><span>${esc(paperLabel(q.paper))}${q.section ? ' · <span' + dirAttr(q.section) + '>' + esc(q.section) + '</span>' : ''}</span></div>
      <div class="q-text"${dirAttr(q.q)}>${esc(q.q)}</div>
      <div class="opts">${q.o.map((o, k) => {
        let cls = ''; if (chosen === k) cls = 'sel'; if (reveal) { if (k === q.a) cls = 'right'; else if (chosen === k) cls = 'wrong'; }
        return `<button type="button" class="opt ${cls}" data-k="${k}" ${reveal ? 'disabled' : ''}${dirAttr(o)}><b>${'ABCD'[k]}</b><span>${esc(o)}</span></button>`;
      }).join('')}</div>
      ${reveal ? `<div class="expl"><b>${chosen === q.a ? 'Correct.' : chosen == null ? 'Not answered.' : 'Not this one.'}</b> Answer: <b>${'ABCD'[q.a]}</b>. ${esc(q.e || '')}
        <div class="small muted" style="margin-top:6px">Source: <a href="#/doc/${encodeURI(q.src)}">${esc(q.src.split('/').slice(-2).join(' / '))}</a></div></div>` : ''}</div>`;
  }
  function showPQ() {
    const box = $('#pq'); const P = practice;
    if (P.i >= P.qs.length) {
      box.innerHTML = `<div class="card"><h2 class="h2">${P.right} of ${P.done} right (${pct(P.right, P.done)}%)</h2><p class="hint">The ones you missed are in your review list. Choose "My review list" above to go over them.</p><button class="btn go" id="pagain">Another set</button></div>`;
      $('#pagain').onclick = () => $('#pstart').click(); return;
    }
    const q = P.qs[P.i];
    box.innerHTML = qCard(q, P.i, P.qs.length, null, false) + '<p class="small muted">On a keyboard: A–D or 1–4 to answer, Enter for the next question.</p>';
    box.scrollIntoView({ behavior: 'smooth', block: 'start' });
    const answer = (k) => {
      if (P.answered) return; P.answered = true; const ok = k === q.a; recordAnswer(q.id, ok); P.done++; if (ok) P.right++;
      box.innerHTML = qCard(q, P.i, P.qs.length, k, true) + `<div class="row" style="margin-top:14px"><button class="btn go" id="pnext">${P.i + 1 < P.qs.length ? 'Next question' : 'See how you did'}</button><span class="muted small num">${P.right} of ${P.done} right so far</span></div>`;
      $('#pnext').onclick = next; $('#pnext').focus();
    };
    const next = () => { P.answered = false; P.i++; showPQ(); };
    box.querySelector('.opts').addEventListener('click', (e) => { const b = e.target.closest('.opt'); if (b) answer(+b.dataset.k); });
    document.onkeydown = (e) => {
      if (!$('#pq') || e.target.matches('input,select,textarea')) return;
      const m = { a: 0, b: 1, c: 2, d: 3, 1: 0, 2: 1, 3: 2, 4: 3 }[e.key.toLowerCase()];
      if (m != null && !P.answered) answer(m); else if (e.key === 'Enter' && P.answered) next();
    };
  }

  // ------------------------------------------------------------------ practice: mock exams
  const MPT_SPLIT = [['islamic', 'Islamic Studies', 20], ['urdu', 'Urdu', 20], ['english', 'English', 50], ['ga', 'General Abilities', 60], ['gk', 'General Knowledge', 50]];
  function startPreset(pr, p) {
    if (pr === 'mpt200' || pr === 'mpt100') {
      const half = pr === 'mpt100'; const qs = [];
      for (const [tag, , n] of MPT_SPLIT) qs.push(...shuffle(D.questions.filter((q) => q.paper === 'mpt' && q.tag === tag)).slice(0, half ? n / 2 : n));
      startExam({ title: half ? 'MPT half mock' : 'MPT full mock', mcq: qs.map((q) => q.id), subj: [], minutes: half ? 100 : 200, pass: 33, attemptSubj: 0 });
    } else if (pr === 'part1') {
      const qs = shuffle(D.questions.filter((q) => q.paper === p)).slice(0, 20);
      startExam({ title: paperLabel(p) + ': Part I', mcq: qs.map((q) => q.id), subj: [], minutes: 30, pass: 40, attemptSubj: 0 });
    } else if (pr === 'full') {
      const qs = shuffle(D.questions.filter((q) => q.paper === p)).slice(0, 20);
      startExam({ title: paperLabel(p) + ': full paper', mcq: qs.map((q) => q.id), subj: drawSubjective(p, 7, 'all'), minutes: 180, pass: 40, attemptSubj: 4 });
    } else if (pr === 'essay') {
      startExam({ title: 'English Essay paper', mcq: [], subj: drawSubjective('essay', 10, 'all'), minutes: 180, pass: 40, attemptSubj: 1, essay: true });
    }
  }
  function viewExamBuilder() {
    const main = $('#main');
    const cur = store.get('examCurrent', null); const hist = store.get('history', []);
    const subjPapers = [...new Set(D.subjective.map((s) => s.paper))]; const mcqPapers = papersWithMCQ();
    const paperOpts = (list) => D.meta.papers.filter((p) => list.includes(p.id) && visibleForPractice(p.id)).map((p) => `<option value="${p.id}">${esc(p.label)}</option>`).join('');
    main.innerHTML = `<div class="wrap"><div class="page-head"><h1 class="h1">Practice</h1><p class="lede">Timed tests built from the question banks. MCQs are marked for you; written questions are answered by hand, then you enter your own marks.</p>${pracTabs('exam')}</div>
      ${cur ? `<div class="note" style="margin-bottom:18px">You have a test in progress: <b>${esc(cur.title)}</b>. <a href="#/exam/run">Carry on</a> · <a href="javascript:void 0" id="discard">discard it</a></div>` : ''}
      <div class="grid2">
        <div class="card"><h2 class="h3">MPT mock</h2><p class="hint" style="margin-top:6px">The real split: Islamic Studies 20, Urdu 20, English 50, General Abilities 60, General Knowledge 50. Pass mark 33%.</p>
          <div class="row"><button class="btn go" data-preset="mpt200">Full: 200 MCQs</button><button class="btn" data-preset="mpt100">Half: 100 MCQs</button></div></div>
        <div class="card"><h2 class="h3">Part I of a written paper</h2><p class="hint" style="margin-top:6px">20 MCQs in 30 minutes, as on the OMR sheet.</p>
          <div class="row"><select id="p1paper" style="width:auto;flex:1">${paperOpts(mcqPapers.filter((p) => p !== 'mpt'))}</select><button class="btn solid" data-preset="part1">Start</button></div></div>
        <div class="card"><h2 class="h3">Full written paper</h2><p class="hint" style="margin-top:6px">20 MCQs (30 min), then 7 written questions, attempt any 4 (2.5 h). Answer on paper and mark yourself.</p>
          <div class="row"><select id="fpaper" style="width:auto;flex:1">${paperOpts(subjPapers.filter((p) => p !== 'essay' && p !== 'precis'))}</select><button class="btn solid" data-preset="full">Start</button></div></div>
        <div class="card"><h2 class="h3">Essay paper</h2><p class="hint" style="margin-top:6px">10 topics from past papers and likely themes. Choose one, write for 3 hours by hand, then mark it with the essay rubric.</p>
          <div class="row"><button class="btn solid" data-preset="essay">Draw an essay paper</button></div></div>
      </div>
      <details class="card sec"><summary class="h3" style="cursor:pointer">Build your own test</summary>
        <div class="chips" id="cxp" style="margin-top:14px">${D.meta.papers.filter((p) => (mcqPapers.includes(p.id) || subjPapers.includes(p.id)) && visibleForPractice(p.id)).map((p) => `<button type="button" class="chip" data-p="${p.id}" aria-pressed="false">${esc(p.label)}</button>`).join('')}</div>
        <div class="toolbar" style="margin-top:14px">
          <div class="field"><label for="cxn">MCQs</label><input id="cxn" type="number" min="0" max="300" value="40" style="width:96px"></div>
          <div class="field"><label for="cxs">Written questions</label><input id="cxs" type="number" min="0" max="20" value="0" style="width:96px"></div>
          <div class="field"><label for="cxt">Minutes</label><input id="cxt" type="number" min="5" max="400" value="40" style="width:96px"></div>
          <div class="field"><label for="cxm">MCQ source</label><select id="cxm"><option value="all">All questions</option><option value="unseen">Not tried yet</option><option value="wrong">My review list</option></select></div>
          <div class="field"><label for="cxy">Written source</label><select id="cxy"><option value="all">Past and likely</option><option value="past">Past papers only</option><option value="likely">Likely only</option></select></div>
          <button class="btn solid" id="cxgo">Create test</button></div><p class="small muted" id="cxmsg" style="margin:10px 0 0"></p></details>
      <h2 class="h2 sec">Your past tests</h2>
      ${hist.length ? `<div class="card tablewrap" style="padding:8px 14px;margin-bottom:60px"><table class="plain"><thead><tr><th>Date</th><th>Test</th><th>MCQs</th><th>Written</th><th>Time</th></tr></thead><tbody>
        ${hist.slice().reverse().map((h) => `<tr><td>${fmtDate(h.date)}</td><td>${esc(h.title)}</td><td class="num">${h.mcqTotal ? `${h.mcqRight}/${h.mcqTotal} (${pct(h.mcqRight, h.mcqTotal)}%)` : '—'}</td><td class="num">${h.subjMax ? `${h.subjScore}/${h.subjMax}` : '—'}</td><td class="num">${fmtTime(h.used)}</td></tr>`).join('')}
      </tbody></table></div>` : '<div class="empty" style="margin-bottom:60px">No tests yet. Your results will be listed here.</div>'}</div>`;
    $('#discard')?.addEventListener('click', () => { if (confirm('Discard the test in progress?')) { store.del('examCurrent'); viewExamBuilder(); } });
    main.addEventListener('click', (e) => {
      const b = e.target.closest('[data-preset]'); if (!b) return;
      const pr = b.dataset.preset; startPreset(pr, pr === 'part1' ? $('#p1paper').value : pr === 'full' ? $('#fpaper').value : null);
    });
    $('#cxp').addEventListener('click', (e) => { const b = e.target.closest('.chip'); if (b) b.setAttribute('aria-pressed', String(b.getAttribute('aria-pressed') !== 'true')); });
    $('#cxgo').addEventListener('click', () => {
      const ps = $$('#cxp .chip[aria-pressed=true]').map((b) => b.dataset.p); const n = +$('#cxn').value || 0; const ns = +$('#cxs').value || 0; const mode = $('#cxm').value; const s = qstats();
      if (!ps.length) { $('#cxmsg').textContent = 'Choose at least one paper.'; return; }
      let pool = D.questions.filter((q) => ps.includes(q.paper));
      if (mode === 'unseen') pool = pool.filter((q) => !s[q.id]); if (mode === 'wrong') pool = pool.filter((q) => s[q.id] && s[q.id].l === 0);
      const qs = shuffle(pool).slice(0, n);
      const sj = ns ? shuffle(ps.flatMap((p) => drawSubjective(p, ns, $('#cxy').value))).slice(0, ns) : [];
      if (!qs.length && !sj.length) { $('#cxmsg').textContent = 'No questions match those choices.'; return; }
      startExam({ title: 'Custom: ' + ps.map(paperLabel).join(', '), mcq: qs.map((q) => q.id), subj: sj, minutes: +$('#cxt').value || 30, pass: 40, attemptSubj: sj.length });
    });
  }
  function drawSubjective(paper, n, kind) {
    let p = D.subjective.filter((s) => s.paper === paper);
    if (kind === 'past') p = p.filter((s) => s.past); else if (kind === 'likely') p = p.filter((s) => !s.past);
    const byTopic = {}; shuffle(p).forEach((s) => (byTopic[s.topic] = byTopic[s.topic] || []).push(s));
    const out = []; const topics = shuffle(Object.keys(byTopic));
    while (out.length < n && topics.some((t) => byTopic[t].length)) for (const t of topics) { if (byTopic[t].length && out.length < n) out.push(byTopic[t].shift()); }
    return out.map((s) => ({ q: s.q, tag: s.tag, topic: s.topic, src: s.src }));
  }
  function startExam(cfg) { store.set('examCurrent', { ...cfg, id: Date.now(), started: Date.now(), answers: {}, flags: {}, i: 0, subjScores: {} }); location.hash = '#/exam/run'; }
  let timerId = null;
  function viewExamRun() {
    const ex = store.get('examCurrent', null); const main = $('#main');
    if (!ex) { main.innerHTML = '<div class="wrap"><div class="empty" style="margin-top:30px">No test in progress. <a href="#/exam">Start one</a>.</div></div>'; return; }
    const Q = qById(); const qs = ex.mcq.map((id) => Q[id]).filter(Boolean);
    const end = ex.started + ex.minutes * 60000; const tab = ex.tab || (qs.length ? 'mcq' : 'subj');
    main.innerHTML = `<div class="wrap" style="padding-bottom:60px">
      <div class="exam-bar"><div><b>${esc(ex.title)}</b> <span class="muted small">· ${plural(qs.length, 'MCQ')}${ex.subj.length ? ` · ${ex.subj.length} written (attempt ${ex.attemptSubj})` : ''}</span></div>
        <div class="row"><span class="timer" id="timer"></span><button class="btn go" id="submit">Submit</button></div></div>
      ${qs.length && ex.subj.length ? `<div class="chips" style="margin-bottom:14px"><button type="button" class="chip" data-tab="mcq" aria-pressed="${tab === 'mcq'}">Part I: MCQs</button><button type="button" class="chip" data-tab="subj" aria-pressed="${tab === 'subj'}">Part II: written</button></div>` : ''}
      <div id="exbody"></div></div>`;
    const body = $('#exbody'); const save = () => store.set('examCurrent', ex);
    const renderMCQ = () => {
      const q = qs[ex.i];
      body.innerHTML = `<div class="exam-layout"><div>${qCard(q, ex.i, qs.length, ex.answers[q.id], false)}
        <div class="row" style="margin-top:12px;justify-content:space-between"><div class="row"><button class="btn" id="prev" ${ex.i ? '' : 'disabled'}>Previous</button><button class="btn" id="next" ${ex.i < qs.length - 1 ? '' : 'disabled'}>Next</button></div>
        <button class="btn quiet" id="flag">${ex.flags[q.id] ? 'Remove flag' : 'Flag to come back'}</button></div></div>
        <aside class="card"><div class="lbl num" style="margin-bottom:10px">${Object.keys(ex.answers).length} of ${qs.length} answered</div>
        <div class="navgrid">${qs.map((x, k) => `<button type="button" data-i="${k}" class="${ex.answers[x.id] != null ? 'ans' : ''} ${k === ex.i ? 'cur' : ''} ${ex.flags[x.id] ? 'flag' : ''}">${k + 1}</button>`).join('')}</div></aside></div>`;
      body.querySelector('.opts').addEventListener('click', (e) => { const b = e.target.closest('.opt'); if (!b) return; ex.answers[q.id] = +b.dataset.k; if (ex.i < qs.length - 1) ex.i++; save(); renderMCQ(); });
      $('#prev').onclick = () => { ex.i--; save(); renderMCQ(); }; $('#next').onclick = () => { ex.i++; save(); renderMCQ(); };
      $('#flag').onclick = () => { ex.flags[q.id] = !ex.flags[q.id]; save(); renderMCQ(); };
      $('.navgrid', body).addEventListener('click', (e) => { const b = e.target.closest('button[data-i]'); if (b) { ex.i = +b.dataset.i; save(); renderMCQ(); } });
    };
    const renderSubj = () => {
      body.innerHTML = `<div class="card"><p class="note small" style="margin-top:0">${ex.essay ? 'Choose <b>one</b> topic. Write the outline and essay by hand in 3 hours; aim for 2,500–3,000 words.' : `Attempt any <b>${ex.attemptSubj}</b>. Write by hand: about 35–40 minutes per answer. Some papers add section rules (Political Science: 2 from each section; Criminology: one from each section).`} Mark yourself after submitting.</p>
        ${ex.subj.map((s, k) => `<div class="subj"><span class="tag${s.tag.startsWith('CSS') ? ' past' : ''}">${esc(s.tag)}</span> <span class="small muted">${esc(s.topic)}</span><div style="margin-top:6px;font-size:17px"${dirAttr(s.q)}><b>Q${k + 2}.</b> ${esc(s.q)}</div></div>`).join('')}</div>`;
    };
    const renderTab = () => ((ex.tab || tab) === 'mcq' && qs.length ? renderMCQ() : renderSubj());
    main.addEventListener('click', (e) => { const t = e.target.closest('[data-tab]'); if (!t) return; ex.tab = t.dataset.tab; save(); $$('[data-tab]').forEach((b) => b.setAttribute('aria-pressed', String(b === t))); renderTab(); });
    renderTab();
    const tick = () => { const left = (end - Date.now()) / 1000; const el = $('#timer'); if (!el) { clearInterval(timerId); return; } el.textContent = fmtTime(left) + ' left'; if (left <= 0) { clearInterval(timerId); finishExam(true); } };
    clearInterval(timerId); timerId = setInterval(tick, 1000); tick();
    $('#submit').onclick = () => { const un = qs.length - Object.keys(ex.answers).length; if (confirm(un > 0 ? `${plural(un, 'MCQ')} not answered. Submit anyway?` : 'Submit the test?')) finishExam(false); };
    document.onkeydown = (e) => {
      if (e.target.matches('input,select,textarea') || (ex.tab || tab) !== 'mcq' || !qs.length) return;
      const m = { a: 0, b: 1, c: 2, d: 3, 1: 0, 2: 1, 3: 2, 4: 3 }[e.key.toLowerCase()];
      if (m != null) { ex.answers[qs[ex.i].id] = m; if (ex.i < qs.length - 1) ex.i++; save(); renderMCQ(); }
      if (e.key === 'ArrowRight' && ex.i < qs.length - 1) { ex.i++; save(); renderMCQ(); }
      if (e.key === 'ArrowLeft' && ex.i > 0) { ex.i--; save(); renderMCQ(); }
    };
  }
  function finishExam(timeUp) {
    clearInterval(timerId); document.onkeydown = null;
    const ex = store.get('examCurrent', null); if (!ex) return;
    ex.finished = Date.now(); ex.timeUp = timeUp;
    const Q = qById(); let right = 0;
    ex.mcq.forEach((id) => { const q = Q[id]; if (!q) return; const a = ex.answers[id]; if (a != null) recordAnswer(id, a === q.a); if (a === q.a) right++; });
    ex.right = right; store.set('examLast', ex); store.del('examCurrent');
    const hist = store.get('history', []);
    hist.push({ id: ex.id, date: ex.finished, title: ex.title, mcqRight: right, mcqTotal: ex.mcq.length, subjScore: 0, subjMax: ex.subj.length ? (ex.essay ? 100 : ex.attemptSubj * 20) : 0, used: (ex.finished - ex.started) / 1000 });
    store.set('history', hist.slice(-100)); location.hash = '#/exam/result';
  }
  function viewExamResult() {
    const ex = store.get('examLast', null); const main = $('#main');
    if (!ex) { main.innerHTML = '<div class="wrap"><div class="empty" style="margin-top:30px">No finished test yet. <a href="#/exam">Start one</a>.</div></div>'; return; }
    const Q = qById(); const qs = ex.mcq.map((id) => Q[id]).filter(Boolean); const groups = {};
    qs.forEach((q) => { const k = q.paper === 'mpt' ? (MPT_SPLIT.find((m) => m[0] === q.tag) || [])[1] || 'MPT' : paperLabel(q.paper); const g = groups[k] = groups[k] || { r: 0, t: 0 }; g.t++; if (ex.answers[q.id] === q.a) g.r++; });
    const p = pct(ex.right, qs.length); const onlyWrong = store.get('resOnlyWrong', false);
    main.innerHTML = `<div class="wrap" style="padding-bottom:60px"><div class="page-head"><h1 class="h1">${esc(ex.title)}</h1><p class="lede">${ex.timeUp ? 'Time ran out, so the test was submitted for you. ' : ''}Time used: ${fmtTime((ex.finished - ex.started) / 1000)} of ${ex.minutes} min.</p><div class="row"><a class="btn" href="#/exam">Another test</a></div></div>
      ${qs.length ? `<div class="grid3" style="margin-bottom:20px"><div class="figure"><b>${ex.right}/${qs.length}</b><span>MCQs right · ${p}%</span></div><div class="figure"><b>${p >= ex.pass ? 'Above' : 'Below'}</b><span>the ${ex.pass}% pass line</span></div>
        <div class="card" style="padding:14px 16px"><div class="lbl">By section</div>${Object.entries(groups).map(([k, g]) => `<div class="row small" style="justify-content:space-between"><span>${esc(k)}</span><b class="num">${g.r}/${g.t}</b></div>`).join('')}</div></div>` : ''}
      ${ex.subj.length ? `<div class="card" style="margin-bottom:20px"><h2 class="h3">Written part: mark yourself</h2>
        <p class="hint" style="margin-top:6px">Use the <a href="#/doc/02-Practice-and-Tracking/Scorecards.md">scorecards</a>. Self-marking runs high, so take off 5 until someone else has checked a few scripts. Enter ${ex.essay ? 'your essay mark out of 100' : 'marks out of 20 for the answers you attempted'}.</p>
        ${ex.subj.map((s, k) => `<div class="subj row" style="justify-content:space-between;flex-wrap:nowrap"><div${dirAttr(s.q)}><span class="tag${s.tag.startsWith('CSS') ? ' past' : ''}">${esc(s.tag)}</span> ${esc(s.q)}</div>
          <input type="number" min="0" max="${ex.essay ? 100 : 20}" data-k="${k}" class="sscore" value="${ex.subjScores[k] ?? ''}" placeholder="—" aria-label="Mark for question ${k + 2}" style="width:84px;flex:none"></div>`).join('')}
        <div class="row" style="margin-top:12px"><b id="stotal" class="num"></b></div></div>` : ''}
      ${qs.length ? `<div class="row" style="justify-content:space-between;margin:24px 0 12px"><h2 class="h2" style="margin:0">Go through it</h2><label class="row small"><input type="checkbox" id="ow" ${onlyWrong ? 'checked' : ''}> Only wrong or unanswered</label></div><div id="rev" style="display:grid;gap:14px"></div>` : ''}</div>`;
    const rev = $('#rev');
    const drawRev = () => { if (!rev) return; const ow = $('#ow').checked; rev.innerHTML = qs.map((q, k) => (ow && ex.answers[q.id] === q.a ? '' : qCard(q, k, qs.length, ex.answers[q.id], true))).join('') || '<div class="empty">All correct.</div>'; };
    drawRev(); $('#ow')?.addEventListener('change', (e) => { store.set('resOnlyWrong', e.target.checked); drawRev(); });
    const upd = () => {
      const vals = $$('.sscore').map((i) => (i.value === '' ? null : Math.max(0, Math.min(+i.max, +i.value))));
      vals.forEach((v, k) => { if (v != null) ex.subjScores[k] = v; else delete ex.subjScores[k]; });
      const tot = vals.filter((v) => v != null).reduce((a, b) => a + b, 0); const max = ex.essay ? 100 : ex.attemptSubj * 20;
      if ($('#stotal')) $('#stotal').textContent = `Written total: ${tot} / ${max}`;
      store.set('examLast', ex);
      const hist = store.get('history', []); const h = hist.find((x) => x.id === ex.id); if (h) { h.subjScore = tot; store.set('history', hist); }
    };
    $$('.sscore').forEach((i) => i.addEventListener('input', upd)); if ($$('.sscore').length) upd();
  }

  // ------------------------------------------------------------------ practice: question bank
  function viewQuestionBank(q) {
    const main = $('#main'); const tab = store.get('qbTab', 'subj');
    main.innerHTML = `<div class="wrap"><div class="page-head"><h1 class="h1">Practice</h1><p class="lede">Every past-paper question from 2016–2026 that the packs record (paraphrased), likely questions for the next exam, and the full MCQ bank to browse.</p>${pracTabs('qb')}</div>
      <div class="chips" style="margin-bottom:16px"><button type="button" class="chip" data-t="subj" aria-pressed="${tab === 'subj'}">Written questions <span class="muted">${D.subjective.length.toLocaleString()}</span></button><button type="button" class="chip" data-t="mcq" aria-pressed="${tab === 'mcq'}">MCQs <span class="muted">${D.questions.length.toLocaleString()}</span></button></div>
      <div id="qb" style="padding-bottom:60px"></div></div>`;
    main.querySelector('.chips').addEventListener('click', (e) => { const b = e.target.closest('[data-t]'); if (b) { store.set('qbTab', b.dataset.t); viewQuestionBank(new URLSearchParams()); } });
    tab === 'subj' || q.get('paper') ? qbSubj(q.get('paper')) : qbMCQ();
  }
  function qbSubj(pre) {
    const box = $('#qb');
    const papers = D.meta.papers.filter((p) => D.subjective.some((s) => s.paper === p.id));
    const years = [...new Set(D.subjective.map((s) => s.year).filter(Boolean))].sort((a, b) => b - a);
    box.innerHTML = `<div class="card"><div class="toolbar">
      <div class="field"><label for="sp">Paper</label><select id="sp"><option value="">All papers</option>${papers.map((p) => `<option value="${p.id}" ${pre === p.id ? 'selected' : ''}>${esc(p.label)}</option>`).join('')}</select></div>
      <div class="field"><label for="st">Topic</label><select id="st"><option value="">All topics</option></select></div>
      <div class="field"><label for="sk">Type</label><select id="sk"><option value="">Past and likely</option><option value="past">Past papers</option><option value="likely">Likely</option></select></div>
      <div class="field"><label for="sy">Year</label><select id="sy"><option value="">Any year</option>${years.map((y) => `<option>${y}</option>`).join('')}</select></div>
      <div class="field" style="flex:1;min-width:180px"><label for="sq">Search</label><input id="sq" type="search" placeholder="e.g. CPEC, women, IMF"></div>
      <button class="btn" id="srand">Random 5</button></div></div>
      <p class="small muted" id="scount"></p><div class="card list" id="slist"></div>`;
    const fill = () => { const p = $('#sp').value; const tops = [...new Set(D.subjective.filter((s) => !p || s.paper === p).map((s) => s.topic))]; $('#st').innerHTML = '<option value="">All topics</option>' + tops.map((t) => `<option>${esc(t)}</option>`).join(''); };
    let random = false;
    const draw = () => {
      const p = $('#sp').value, t = $('#st').value, k = $('#sk').value, y = $('#sy').value, s = $('#sq').value.trim().toLowerCase();
      let L = D.subjective.filter((x) => (!p || x.paper === p) && (!t || x.topic === t) && (!k || (k === 'past') === x.past) && (!y || String(x.year) === y) && (!s || (x.q + ' ' + x.topic).toLowerCase().includes(s)));
      if (random) { L = shuffle(L).slice(0, 5); random = false; }
      $('#scount').textContent = plural(L.length, 'question');
      $('#slist').innerHTML = L.slice(0, 400).map((x) => `<div class="li"><div class="row small" style="gap:6px"><span class="tag${x.past ? ' past' : ''}">${esc(x.tag)}</span><span class="muted">${esc(paperLabel(x.paper))} · ${esc(x.topic)}</span></div><div style="margin-top:4px"${dirAttr(x.q)}>${esc(x.q)}</div></div>`).join('') + (L.length > 400 ? '<div class="li muted small">Showing the first 400. Narrow the filters to see more.</div>' : '') || '<div class="empty">No questions match.</div>';
    };
    fill(); draw();
    $('#sp').addEventListener('change', () => { fill(); draw(); });
    ['#st', '#sk', '#sy'].forEach((s) => $(s).addEventListener('change', draw)); $('#sq').addEventListener('input', draw);
    $('#srand').addEventListener('click', () => { random = true; draw(); });
  }
  function qbMCQ() {
    const box = $('#qb'); const papers = D.meta.papers.filter((p) => D.questions.some((q) => q.paper === p.id));
    box.innerHTML = `<div class="card"><div class="toolbar">
      <div class="field"><label for="mp">Paper</label><select id="mp">${papers.map((p) => `<option value="${p.id}">${esc(p.label)}</option>`).join('')}</select></div>
      <div class="field" style="min-width:200px"><label for="ms">Section</label><select id="ms"></select></div>
      <div class="field" style="flex:1;min-width:180px"><label for="mq">Search</label><input id="mq" type="search"></div>
      <label class="row small" style="min-height:42px"><input type="checkbox" id="mshow"> Show answers</label></div></div>
      <p class="small muted" id="mcount"></p><div class="card list" id="mlist"></div>`;
    const fill = () => { const p = $('#mp').value; const secs = [...new Set(D.questions.filter((q) => q.paper === p).map((q) => q.section))]; $('#ms').innerHTML = '<option value="">All sections</option>' + secs.map((s) => `<option${dirAttr(s)}>${esc(s)}</option>`).join(''); };
    const draw = () => {
      const p = $('#mp').value, s = $('#ms').value, q = $('#mq').value.trim().toLowerCase(), show = $('#mshow').checked;
      const L = D.questions.filter((x) => x.paper === p && (!s || x.section === s) && (!q || (x.q + ' ' + x.o.join(' ')).toLowerCase().includes(q)));
      $('#mcount').textContent = plural(L.length, 'question');
      $('#mlist').innerHTML = L.slice(0, 300).map((x, i) => `<div class="li"${dirAttr(x.q)}><div><b class="num">${i + 1}.</b> ${esc(x.q)}</div><div class="small" style="margin-top:4px">${x.o.map((o, k) => `<span style="margin-right:14px;${show && k === x.a ? 'color:var(--right);font-weight:700' : ''}">${'ABCD'[k]}) ${esc(o)}</span>`).join('')}</div>${show && x.e ? `<div class="small muted" style="margin-top:3px">${esc(x.e)}</div>` : ''}</div>`).join('') + (L.length > 300 ? '<div class="li small muted">Showing the first 300. Narrow the filters to see more.</div>' : '');
    };
    fill(); draw();
    $('#mp').addEventListener('change', () => { fill(); draw(); }); $('#ms').addEventListener('change', draw); $('#mq').addEventListener('input', draw); $('#mshow').addEventListener('change', draw);
  }

  // ------------------------------------------------------------------ my plan
  function viewPlan() {
    const main = $('#main'); const st = stations();
    const ms = milestones(); const theme = store.get('themePref', 'system');
    main.innerHTML = `<div class="wrap"><div class="page-head"><h1 class="h1">My plan</h1><p class="lede">Your dates, your order, your pace. Everything here is saved in this browser only; back it up with Export if you switch devices.</p></div>
      <div class="plan-grid">
        <section class="card"><h2 class="h2">Dates</h2><p class="hint">The written exam is your arrival. Add any date that matters to you.</p>
          <div class="two" style="margin-top:0"><div class="field"><label for="pExam">Written exam starts</label><input type="date" id="pExam" value="${examISO()}"></div><div class="field"><label for="pStart">I started (or start) on</label><input type="date" id="pStart" value="${startISO()}"></div></div>
          <label class="row small" style="margin-top:10px"><input type="checkbox" id="pConf" ${store.get('examConfirmed', false) ? 'checked' : ''}> FPSC has announced this date (removes the "proj." mark)</label>
          <div style="margin-top:16px" id="ms">${ms.map((m, i) => `<div class="mrow" data-i="${i}"><input type="text" value="${esc(m.label)}" aria-label="Date name" data-f="label"><input type="date" value="${m.date}" aria-label="Date" data-f="date"><button type="button" class="icon-btn" data-del="${i}" aria-label="Remove ${esc(m.label)}">${icon('x')}</button></div>`).join('')}</div>
          <button type="button" class="btn sm" id="msAdd" style="margin-top:10px">${icon('plus', 'sm')} Add a date</button>
          <p class="small muted" style="margin:12px 0 0">Dates marked projected come from past cycles. Confirm each on <a href="https://www.fpsc.gov.pk" target="_blank" rel="noopener">fpsc.gov.pk</a>.</p></section>
        <section class="card"><h2 class="h2">Stations in order</h2><p class="hint">The order you'd like to take them. The first one that isn't finished is your next stop.</p>
          <div id="ord">${st.map((s, i) => `<div class="orow ${s.state}" data-id="${s.id}"><span class="dot"></span><span>${esc(s.label)} <span class="small muted num">${s.left ? s.left + ' left' : 'first pass done'}</span></span><span class="row" style="gap:2px"><button type="button" class="icon-btn" data-mv="-1" ${i ? '' : 'disabled'} aria-label="Move ${esc(s.label)} earlier">${icon('up')}</button><button type="button" class="icon-btn" data-mv="1" ${i < st.length - 1 ? '' : 'disabled'} aria-label="Move ${esc(s.label)} later">${icon('down')}</button></span></div>`).join('')}</div>
          ${store.get('focus', null) ? `<p class="small" style="margin:12px 0 0">Next stop pinned to ${esc(paperLabel(store.get('focus')))}. <a href="javascript:void 0" id="unfocus">Go back to the order</a></p>` : ''}</section>
        <section class="card"><h2 class="h2">Optional subjects</h2><p class="hint">Five subjects, 200 marks each. <a href="#/doc/07-Optional-Papers/00-Combinations.md">Compare the sets</a>.</p>
          <div style="display:grid;gap:10px">${Object.entries(D.meta.combos).map(([k, v]) => `<label class="pick"><input type="radio" name="pcombo" value="${k}" ${k === combo() ? 'checked' : ''}><b>${esc(v.label)}</b><span>${v.subjects.map((s) => esc(paperLabel(s))).join(' · ')}</span></label>`).join('')}</div>
          <label class="row small" style="margin-top:12px"><input type="checkbox" id="pAll" ${store.get('showAllOptionals', false) ? 'checked' : ''}> Show every optional subject in practice and tests</label></section>
        <section class="card"><h2 class="h2">Pace</h2><p class="hint">Topics a week you'd like to aim for. Leave it empty and the guide suggests one from your dates.</p>
          <div class="field" style="max-width:240px"><label for="pPace">Topics a week</label><input type="number" id="pPace" min="1" max="200" placeholder="Suggest one for me" value="${store.get('pace', '') ?? ''}"></div>
          <div class="note pace">${paceText(st)}</div></section>
        <section class="card"><h2 class="h2">Backup</h2><p class="hint">Your marks, answers, tests and settings, as one file.</p>
          <div class="row"><button type="button" class="btn" id="exp">${icon('download', 'sm')} Export</button><label class="btn" for="imp">Import</label><input type="file" id="imp" accept="application/json" hidden><button type="button" class="btn quiet" id="rst">Clear everything</button></div></section>
        <section class="card"><h2 class="h2">Appearance</h2><p class="hint">Dark is easier on the eyes for late study.</p>
          <div class="seg-ctl" id="thm">${[['system', 'Match device'], ['light', 'Light'], ['dark', 'Dark']].map(([k, t]) => `<button type="button" data-t="${k}" aria-pressed="${theme === k}">${t}</button>`).join('')}</div>
          <p class="small" style="margin:16px 0 0"><a href="javascript:void 0" id="rerun">Run the first-time setup again</a></p></section>
      </div></div>`;
    const saved = (m) => { drawMeta(); toast(m || 'Saved'); };
    $('#pExam').onchange = (e) => { if (e.target.value) { store.set('examDate', e.target.value); saved('Exam date saved'); } };
    $('#pStart').onchange = (e) => { if (e.target.value) { store.set('startDate', e.target.value); saved('Start date saved'); } };
    $('#pConf').onchange = (e) => { store.set('examConfirmed', e.target.checked); saved(); };
    $('#ms').addEventListener('change', (e) => { const row = e.target.closest('.mrow'); if (!row) return; const L = milestones(); const m = L[+row.dataset.i]; m[e.target.dataset.f] = e.target.value; if (e.target.dataset.f === 'date') m.proj = false; store.set('dates', L); saved(); });
    $('#ms').addEventListener('click', (e) => { const b = e.target.closest('[data-del]'); if (!b) return; const L = milestones(); const [gone] = L.splice(+b.dataset.del, 1); store.set('dates', L); viewPlan(); toast('Removed ' + gone.label, () => { const L2 = milestones(); L2.splice(+b.dataset.del, 0, gone); store.set('dates', L2); viewPlan(); }); });
    $('#msAdd').onclick = () => { const L = milestones(); L.push({ id: 'd' + Date.now(), label: 'New date', date: isoOf(new Date(Date.now() + 30 * DAY)), proj: false }); store.set('dates', L); viewPlan(); const r = $$('#ms .mrow input[data-f=label]').pop(); r.focus(); r.select(); };
    $('#ord').addEventListener('click', (e) => { const b = e.target.closest('[data-mv]'); if (!b) return; const o = order(); const id = b.closest('.orow').dataset.id; const i = o.indexOf(id); const j = i + +b.dataset.mv; [o[i], o[j]] = [o[j], o[i]]; store.set('order', o); viewPlan(); $(`.orow[data-id="${id}"] [data-mv="${b.dataset.mv}"]`)?.focus(); });
    $('#unfocus')?.addEventListener('click', () => { store.del('focus'); viewPlan(); });
    $$('input[name=pcombo]').forEach((r) => (r.onchange = () => { store.set('combo', r.value); viewPlan(); saved('Subjects changed to ' + D.meta.combos[r.value].label); }));
    $('#pAll').onchange = (e) => { store.set('showAllOptionals', e.target.checked); saved(); };
    $('#pPace').onchange = (e) => { const p = parseInt(e.target.value, 10); p > 0 ? store.set('pace', p) : store.del('pace'); $('.pace').innerHTML = paceText(stations()); saved('Pace saved'); };
    $('#exp').onclick = exportProgress; $('#imp').onchange = importProgress;
    $('#rst').onclick = () => { if (confirm('Clear every mark, answer, test and setting in this browser? This cannot be undone, so export first if unsure.')) { Object.keys(localStorage).filter((k) => k.startsWith('cssp.')).forEach((k) => localStorage.removeItem(k)); location.hash = '#/'; route(); } };
    $('#thm').addEventListener('click', (e) => { const b = e.target.closest('[data-t]'); if (!b) return; setTheme(b.dataset.t); $$('#thm button').forEach((x) => x.setAttribute('aria-pressed', String(x === b))); });
    $('#rerun').onclick = () => { store.del('setup'); location.hash = '#/'; };
  }
  function setTheme(t) {
    store.set('themePref', t);
    if (t === 'system') { delete document.documentElement.dataset.theme; try { localStorage.removeItem('cssp.theme'); } catch (e) { /* storage unavailable */ } }
    else { document.documentElement.dataset.theme = t; try { localStorage.setItem('cssp.theme', t); } catch (e) { /* storage unavailable */ } }
  }
  const BACKUP_KEYS = ['seen', 'checklist', 'chkTime', 'qstats', 'history', 'combo', 'examDate', 'startDate', 'examConfirmed', 'dates', 'order', 'focus', 'pace', 'setup', 'showAllOptionals'];
  function exportProgress() {
    const data = { app: 'css-pakistan-practice', version: 2, exported: new Date().toISOString() };
    BACKUP_KEYS.forEach((k) => { const v = store.get(k, undefined); if (v !== undefined) data[k] = v; });
    const blob = new Blob([JSON.stringify(data, null, 1)], { type: 'application/json' });
    const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'css-progress-' + isoOf(new Date()) + '.json'; a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 2000);
  }
  function importProgress(e) {
    const f = e.target.files[0]; if (!f) return;
    f.text().then((t) => {
      const d = JSON.parse(t); if (d.app !== 'css-pakistan-practice') throw new Error('this is not a progress file from this site.');
      if (!confirm('Replace the progress in this browser with the imported file?')) return;
      BACKUP_KEYS.forEach((k) => { if (d[k] !== undefined) store.set(k, d[k]); });
      if (d.checklist && !d.setup) store.set('setup', true);
      drawMeta(); route(); toast('Progress imported');
    }).catch((err) => alert('Import failed: ' + err.message));
  }

  // ------------------------------------------------------------------ router
  function route() {
    clearInterval(timerId); document.onkeydown = null;
    const oldMain = $('#main'); const fresh = oldMain.cloneNode(false); oldMain.replaceWith(fresh); // drop old view listeners
    const raw = location.hash.replace(/^#/, '') || '/';
    const qi = raw.indexOf('?'); const h = decodeURI(qi < 0 ? raw : raw.slice(0, qi)); const q = new URLSearchParams(qi < 0 ? '' : raw.slice(qi + 1));
    const [, r = '', ...rest] = h.split('/'); const arg = rest.join('/');
    setActive(r); document.title = 'CSS Practice';
    if (r === 'doc' && arg) viewDoc(arg, q);
    else if (r === 'paper' && arg) viewPaper(arg);
    else if (r === 'interview') viewPaper('interview');
    else if (r === 'papers' || r === 'checklist') viewPapers();
    else if (r === 'practice') viewPractice(q);
    else if (r === 'exam' && arg === 'run') viewExamRun();
    else if (r === 'exam' && arg === 'result') viewExamResult();
    else if (r === 'exam') viewExamBuilder();
    else if (r === 'questions') viewQuestionBank(q);
    else if (r === 'library') viewLibrary();
    else if (r === 'documents') viewDocuments();
    else if (r === 'plan') viewPlan();
    else if (r === 'setup') viewSetup();
    else viewHome();
    if (r !== 'doc') window.scrollTo(0, 0);
    $('#main').focus({ preventScroll: true });
  }

  async function init() {
    try {
      const [manifest, questions, subjective, checklist, documents, meta] = await Promise.all(['manifest', 'questions', 'subjective', 'checklist', 'documents', 'meta'].map(loadJSON));
      Object.assign(D, { manifest, questions, subjective, checklist, documents, meta });
    } catch (e) {
      $('#main').innerHTML = '<div class="wrap"><div class="empty" style="margin-top:30px">The course data didn\'t load. If you opened this file straight from disk, serve the folder instead: run <code>python3 -m http.server</code> in it and open <code>http://localhost:8000</code>.</div></div>';
      return;
    }
    paperById = Object.fromEntries(D.meta.papers.map((p) => [p.id, p]));
    // Returning visitors from the old site already have marks: skip the first-time setup for them.
    if (!store.get('setup', false) && Object.keys(chk()).length) store.set('setup', true);
    drawNav();
    window.addEventListener('hashchange', route);
    route();
  }
  init();
})();
