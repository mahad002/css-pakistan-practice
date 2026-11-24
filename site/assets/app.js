/* CSS Pakistan Practice — single-page app (no build step).
   Data comes from site/data/*.json (built by tools/build.py); documents are the markdown files in the repo. */
(() => {
  'use strict';

  // ------------------------------------------------------------------ helpers
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const store = {
    get(k, d) { try { const v = localStorage.getItem('cssp.' + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem('cssp.' + k, JSON.stringify(v)); } catch (e) { /* storage unavailable */ } },
    del(k) { try { localStorage.removeItem('cssp.' + k); } catch (e) {} },
  };
  const shuffle = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const pct = (a, b) => (b ? Math.round((a / b) * 100) : 0);
  const fmtTime = (s) => { s = Math.max(0, Math.round(s)); const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), x = s % 60; return (h ? h + ':' + String(m).padStart(2, '0') : m) + ':' + String(x).padStart(2, '0'); };
  const fmtDate = (t) => new Date(t).toLocaleDateString(undefined, { day: 'numeric', month: 'short', year: 'numeric' });
  const isRTL = (s) => { const t = (s || '').replace(/[\s\d\p{P}]/gu, ''); if (!t) return false; const ar = (t.match(/[؀-ۿݐ-ݿﭐ-﷿ﹰ-﻿]/g) || []).length; return ar / t.length > 0.5; };
  const dirAttr = (s) => (isRTL(s) ? ' dir="rtl" lang="ur"' : '');

  const D = {}; // data
  let paperById = {};

  async function loadJSON(name) {
    const r = await fetch('site/data/' + name + '.json', { cache: 'no-cache' });
    if (!r.ok) throw new Error('Could not load ' + name);
    return r.json();
  }

  // ------------------------------------------------------------------ settings
  const combo = () => store.get('combo', 'recommended');
  const comboSubjects = () => (D.meta.combos[combo()] || D.meta.combos.recommended).subjects;
  const paperExists = (pid) => D.manifest.docs.some((d) => d.paper === pid);
  const visiblePapers = (includeAllOptionals = false) => D.meta.papers.filter((p) =>
    p.group !== 'Optional' || includeAllOptionals || comboSubjects().includes(p.id));

  // ------------------------------------------------------------------ sidebar tree
  function buildTree(filter = '') {
    const tree = $('#tree');
    const q = filter.trim().toLowerCase();
    if (q) {
      const words = q.split(/\s+/);
      const hits = D.manifest.docs.map((d) => {
        const hay = (d.title + ' ' + d.path + ' ' + d.headings.join(' ')).toLowerCase();
        const score = words.reduce((s, w) => s + (d.title.toLowerCase().includes(w) ? 3 : 0) + (hay.includes(w) ? 1 : 0), 0);
        const ok = words.every((w) => hay.includes(w));
        const head = d.headings.find((h) => words.some((w) => h.toLowerCase().includes(w)));
        return { d, score, ok, head };
      }).filter((x) => x.ok).sort((a, b) => b.score - a.score).slice(0, 80);
      tree.innerHTML = hits.length
        ? `<div class="small muted" style="padding:4px 8px">${hits.length} result${hits.length > 1 ? 's' : ''}</div>` + hits.map(({ d, head }) =>
          `<a class="hit" href="#/doc/${encodeURI(d.path)}">${mark(d.title, words)}${head ? `<br><small class="muted">${mark(head, words)}</small>` : ''}</a>`).join('')
        : '<div class="small muted" style="padding:8px">No matching notes.</div>';
      return;
    }
    const mob = `<div class="mobile-nav">${$$('.topnav a').map((a) => `<a href="${a.getAttribute('href')}">${a.textContent}</a>`).join('')}</div>`;
    const bySec = {};
    for (const d of D.manifest.docs) (bySec[d.section] = bySec[d.section] || []).push(d);
    let html = mob;
    for (const s of D.manifest.sections) {
      let docs = bySec[s.id]; if (!docs || !docs.length) continue;
      if (s.id === 'optional') docs = docs.filter((d) => !d.paper || comboSubjects().includes(d.paper) || store.get('showAllOptionals', false));
      if (docs.length === 1 && s.id === 'start') { html += `<a href="#/doc/${encodeURI(docs[0].path)}" style="padding-left:8px;font-weight:600;color:var(--text)">${esc(s.label)}</a>`; continue; }
      html += `<details data-sec="${s.id}"><summary>${esc(s.label)}</summary>${renderFolder(docs, s.id)}</details>`;
    }
    tree.innerHTML = html;
    highlightTree();
  }
  function mark(text, words) {
    let t = esc(text);
    for (const w of words) if (w.length > 1) t = t.replace(new RegExp('(' + w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'ig'), '<mark>$1</mark>');
    return t;
  }
  function renderFolder(docs, sid) {
    // group by path segments after the section's top folder
    const root = { files: [], dirs: {} };
    for (const d of docs) {
      const parts = d.path.split('/');
      const segs = parts.slice(1, -1);
      let node = root;
      for (const sg of segs) node = node.dirs[sg] = node.dirs[sg] || { files: [], dirs: {} };
      node.files.push(d);
    }
    const label = (s) => s.replace(/^\d+[-_.]?/, '').replace(/-/g, ' ').replace(/\band\b/g, '&');
    const render = (node, depth) => {
      let h = node.files.sort((a, b) => a.path.localeCompare(b.path)).map((d) =>
        `<a href="#/doc/${encodeURI(d.path)}" data-path="${esc(d.path)}">${esc(shortTitle(d))}</a>`).join('');
      for (const k of Object.keys(node.dirs).sort()) {
        h += `<details class="sub"><summary>${esc(label(k))}</summary>${render(node.dirs[k], depth + 1)}</details>`;
      }
      return h;
    };
    return render(root, 0);
  }
  function shortTitle(d) {
    let t = d.title.replace(/^(CSS\s+)?/, '');
    if (t.length > 70) t = t.slice(0, 67) + '…';
    return t;
  }
  function highlightTree() {
    const h = decodeURI(location.hash);
    $$('#tree a').forEach((a) => a.classList.toggle('active', decodeURI(a.getAttribute('href')) === h));
    const act = $('#tree a.active');
    if (act) { let p = act.parentElement; while (p && p.id !== 'tree') { if (p.tagName === 'DETAILS') p.open = true; p = p.parentElement; } }
  }

  // ------------------------------------------------------------------ markdown documents
  const docSet = () => (D._docSet ||= new Set(D.manifest.docs.map((d) => d.path)));
  function resolvePath(base, p) {
    if (/^(https?:|mailto:|#|data:)/i.test(p)) return null;
    p = p.split('#')[0].split('?')[0];
    if (!p) return null;
    const stack = p.startsWith('/') ? [] : base.split('/').slice(0, -1);
    for (const part of p.replace(/^\//, '').split('/')) {
      if (part === '..') stack.pop(); else if (part !== '.' && part !== '') stack.push(part);
    }
    return stack.join('/');
  }
  function findDoc(base, p) {
    // Try relative to the document, then repo root, then the doc's pack, then common folders.
    const cands = [];
    const r1 = resolvePath(base, p); if (r1) cands.push(r1);
    const clean = p.replace(/^\.\.?\//, '').replace(/^(\.\.\/)+/, '');
    cands.push(clean);
    const pack = base.split('/').slice(0, base.startsWith('0') && base.split('/').length > 2 ? 2 : 1).join('/');
    cands.push(pack + '/' + clean, '06-Compulsory-Papers/' + clean, '22-CSS-Exam/' + clean);
    for (const c of cands) {
      const n = c.replace(/^22-CSS-Exam\//, '');
      if (docSet().has(n)) return { type: 'doc', path: n };
      const folder = n.replace(/\/$/, '');
      const inFolder = D.manifest.docs.filter((d) => d.path.startsWith(folder + '/')).sort((a, b) => a.path.localeCompare(b.path));
      if (folder && inFolder.length) {
        const pref = inFolder.find((d) => /\/(00-|README|COVERAGE)/i.test(d.path.slice(folder.length))) || inFolder[0];
        return { type: 'doc', path: pref.path };
      }
      const prefixMatch = D.manifest.docs.find((d) => d.path.startsWith(n) && n.length > 6);
      if (prefixMatch) return { type: 'doc', path: prefixMatch.path };
    }
    if (/\.(pdf|epub|txt|json|csv|tsv)$/i.test(p) && r1) return { type: 'file', path: r1 };
    return null;
  }
  const slug = (t) => t.toLowerCase().replace(/<[^>]+>/g, '').replace(/[^\w؀-ۿ]+/g, '-').replace(/^-|-$/g, '').slice(0, 60);

  async function viewDoc(path) {
    const main = $('#main');
    const meta = D.manifest.docs.find((d) => d.path === path);
    if (!meta) { main.innerHTML = `<div class="empty">That document isn't in this course. <a href="#/">Go home</a>.</div>`; return; }
    main.innerHTML = '<div class="loading">Loading…</div>';
    let text;
    try { const r = await fetch(encodeURI(path)); if (!r.ok) throw 0; text = await r.text(); }
    catch (e) { main.innerHTML = `<div class="empty">Couldn't load this file. If you opened index.html directly from disk, run a local server instead (see README).</div>`; return; }
    const html = DOMPurify.sanitize(marked.parse(text, { gfm: true, breaks: false }), { ADD_ATTR: ['target'] });
    const parts = path.split('/'); const crumbs = parts.slice(0, -1).map((p) => `<span>${esc(p.replace(/^\d+-/, '').replace(/-/g, ' '))}</span>`).join('');
    main.innerHTML = `<div class="doc-wrap"><article><div class="crumbs">${crumbs}</div><div class="md" id="md">${html}</div>
      <div class="doc-foot"><span class="muted small">${esc(path)} · ${meta.words.toLocaleString()} words</span>
      <a href="https://github.com/mahad002/css-pakistan-practice/blob/main/${encodeURI(path)}" target="_blank" rel="noopener">View on GitHub</a></div></article>
      <nav class="toc" id="toc" aria-label="On this page"></nav></div>`;
    const md = $('#md');
    // tables → scroll wrappers
    $$('table', md).forEach((t) => { const w = document.createElement('div'); w.className = 'tbl'; t.parentNode.insertBefore(w, t); w.appendChild(t); });
    // links
    $$('a[href]', md).forEach((a) => {
      const href = a.getAttribute('href');
      if (/^https?:/i.test(href)) { a.target = '_blank'; a.rel = 'noopener'; return; }
      if (href.startsWith('#')) return;
      const f = findDoc(path, href);
      if (f && f.type === 'doc') a.setAttribute('href', '#/doc/' + encodeURI(f.path));
      else if (f && f.type === 'file') { a.setAttribute('href', encodeURI(f.path)); a.setAttribute('download', ''); }
    });
    // inline code paths → links
    $$('code', md).forEach((c) => {
      if (c.closest('pre') || c.closest('a')) return;
      const t = c.textContent.trim();
      if (!/(\.md|\/)$/.test(t) && !/^\d\d-[\w-]+/.test(t)) return;
      if (t.includes(' ') && !t.endsWith('.md')) return;
      const f = findDoc(path, t);
      if (f && f.type === 'doc') { const a = document.createElement('a'); a.href = '#/doc/' + encodeURI(f.path); a.className = 'pathlink'; c.replaceWith(a); a.appendChild(c); }
    });
    // Urdu / Arabic text direction
    $$('p, li, td, th, blockquote, h2, h3', md).forEach((el) => { if (isRTL(el.textContent)) { el.setAttribute('dir', 'rtl'); el.setAttribute('lang', 'ur'); } });
    // headings ids + toc
    const heads = $$('h2, h3', md); const used = {};
    heads.forEach((h) => { let id = slug(h.textContent) || 'section'; used[id] = (used[id] || 0) + 1; if (used[id] > 1) id += '-' + used[id]; h.id = id; });
    const toc = $('#toc');
    if (heads.length > 2) {
      toc.innerHTML = '<h4>On this page</h4>' + heads.slice(0, 80).map((h) => `<a href="javascript:void 0" data-id="${h.id}" style="${h.tagName === 'H3' ? 'padding-left:10px' : ''}">${esc(h.textContent)}</a>`).join('');
      toc.addEventListener('click', (e) => { const a = e.target.closest('a[data-id]'); if (a) document.getElementById(a.dataset.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' }); });
    } else toc.remove();
    document.title = meta.title + ' · CSS Pakistan Practice';
    window.scrollTo(0, 0);
    store.set('lastDoc', path);
  }

  // ------------------------------------------------------------------ checklist
  const chk = () => store.get('checklist', {});
  function setChk(id, s) { const c = chk(); if (s) c[id] = s; else delete c[id]; store.set('checklist', c); }
  function paperProgress(p) {
    const c = chk(); const n = [0, 0, 0, 0];
    p.items.forEach((it) => n[c[it.id] || 0]++);
    return { n, total: p.items.length, score: p.items.length ? (n[1] * 1 + n[2] * 2 + n[3] * 3) / (p.items.length * 3) : 0 };
  }
  function checklistPapers(includeAll) {
    const subs = comboSubjects();
    return D.checklist.papers.filter((p) => p.group !== 'Optional' || includeAll || subs.includes(p.paper));
  }
  function overall() {
    const ps = checklistPapers(false).filter((p) => p.items.length);
    let num = 0, den = 0; const n = [0, 0, 0, 0];
    ps.forEach((p) => { const pr = paperProgress(p); pr.n.forEach((v, i) => (n[i] += v)); num += pr.score * pr.total; den += pr.total; });
    return { pct: den ? Math.round((num / den) * 100) : 0, n, total: den };
  }
  const barHTML = (n, total) => `<div class="bar" role="img" aria-label="${n[1]} studied once, ${n[2]} revised, ${n[3]} mastered of ${total}">${[1, 2, 3].map((i) => `<i class="b${i}" style="width:${pct(n[i], total)}%"></i>`).join('')}</div>`;
  const legend = () => `<div class="legend">${D.checklist.states.map((s, i) => `<span style="--c:var(--s${i})">${esc(s)}</span>`).join('')}</div>`;

  function viewChecklist() {
    const main = $('#main');
    const showAll = store.get('chkShowAll', false);
    const filt = store.get('chkFilter', 'all');
    const papers = checklistPapers(showAll);
    const o = overall();
    const groups = ['MPT', 'Compulsory', 'Optional', 'Stages'];
    main.innerHTML = `
      <div class="page-head"><div><h1>Syllabus checklist</h1>
      <p>Mark every syllabus item as you go: <b>Studied once</b> after the first read and summary, <b>Revised</b> after the second pass, and <b>Mastered</b> once you can answer a timed past-paper question on it at your target. Progress is saved in this browser; use Export to back it up or move it to another device.</p></div>
      <div class="ring" style="--p:${o.pct}"><div>${o.pct}%</div></div></div>
      <div class="toolbar">
        <div class="field"><label for="cf">Show</label><select id="cf">
          ${['all', '0', '1', '2', '3'].map((v) => `<option value="${v}" ${filt === v ? 'selected' : ''}>${v === 'all' ? 'All items' : D.checklist.states[+v]}</option>`).join('')}</select></div>
        <div class="field" style="flex:1;min-width:180px"><label for="cs">Find a topic</label><input id="cs" type="search" placeholder="e.g. Lahore Resolution, ozone, Seerah"></div>
        <label class="row small" style="gap:6px"><input type="checkbox" id="cAll" ${showAll ? 'checked' : ''}> Show all optional subjects</label>
        <div class="row"><button class="btn" id="cExp">Export</button><label class="btn" for="cImp">Import</label><input type="file" id="cImp" accept="application/json" hidden><button class="btn ghost danger" id="cReset">Reset</button></div>
      </div>
      <div class="row" style="justify-content:space-between;margin-bottom:12px">${legend()}<span class="small muted" id="osum">${o.n[3]} mastered · ${o.n[2]} revised · ${o.n[1]} studied once · ${o.n[0]} not started</span></div>
      <div id="chkList"></div>`;
    const list = $('#chkList');
    const render = () => {
      const q = $('#cs').value.trim().toLowerCase(); const f = $('#cf').value; const c = chk();
      let html = '';
      for (const g of groups) {
        const ps = papers.filter((p) => p.group === g); if (!ps.length) continue;
        html += `<h2 style="font-size:1rem;color:var(--muted);text-transform:uppercase;letter-spacing:.06em;margin:22px 0 10px">${g === 'Stages' ? 'Interview and later stages' : g === 'MPT' ? 'Screening test' : g + ' papers'}</h2>`;
        for (const p of ps) {
          const pr = paperProgress(p);
          const items = p.items.filter((it) => (f === 'all' || String(c[it.id] || 0) === f) && (!q || (it.text + ' ' + it.section).toLowerCase().includes(q)));
          const open = store.get('chkOpen', {})[p.paper] || !!q;
          let body = '';
          if (!p.items.length) body = `<div class="chk-sec"><div class="empty small">${p.exists ? 'No checklist found in this pack yet.' : 'This pack is still being written. It will appear here once it is added.'}</div></div>`;
          else if (!items.length) body = `<div class="chk-sec"><div class="small muted" style="padding:10px 0">No items match.</div></div>`;
          else {
            const secs = {}; items.forEach((it) => (secs[it.section || 'Items'] = secs[it.section || 'Items'] || []).push(it));
            body = Object.entries(secs).map(([s, its]) => `<div class="chk-sec"><h4>${esc(s)}</h4>${its.map((it) => itemHTML(p, it, c[it.id] || 0)).join('')}</div>`).join('');
          }
          const sp = D.meta.papers.find((x) => x.id === p.paper);
          html += `<details class="card chk-paper" data-p="${p.paper}" ${open ? 'open' : ''} style="padding:0">
            <summary><div><h3>${esc(p.label)}</h3><div class="meta">${pr.total ? `${pr.n[3]}/${pr.total} mastered · ${Math.round(pr.score * 100)}% overall` : '—'}</div></div>
            ${barHTML(pr.n, pr.total || 1)}<span class="pill ${pr.total && pr.n[3] === pr.total ? 'acc' : ''}">${pr.total} items</span></summary>${body}</details>`;
        }
      }
      list.innerHTML = html;
    };
    const itemHTML = (p, it, s) => {
      const pre = (D.meta.papers.find((x) => x.id === p.paper) || {}).prefix || '';
      let link = '';
      if (it.notes) { const f = findDoc(pre + 'x.md', it.notes.replace(/^\.\//, '')); if (f && f.type === 'doc') link = ` <a class="small" href="#/doc/${encodeURI(f.path)}">notes</a>`; }
      return `<div class="chk-item" data-id="${esc(it.id)}"><div class="t"${dirAttr(it.text)}>${esc(it.text)}${it.freq ? ` <span class="pill ${/high/i.test(it.freq) ? 'warn' : ''}">${esc(it.freq)}</span>` : ''}${link}</div>
        <div class="states" role="group" aria-label="Status">${D.checklist.states.map((st, i) => `<button type="button" data-s="${i}" aria-pressed="${i === s}">${esc(st)}</button>`).join('')}</div></div>`;
    };
    render();
    list.addEventListener('click', (e) => {
      const b = e.target.closest('.states button'); if (!b) return;
      const row = b.closest('.chk-item'); setChk(row.dataset.id, +b.dataset.s);
      $$('.states button', row).forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
      const det = b.closest('details'); const p = D.checklist.papers.find((x) => x.paper === det.dataset.p); const pr = paperProgress(p);
      det.querySelector('.bar').outerHTML = barHTML(pr.n, pr.total);
      det.querySelector('.meta').textContent = `${pr.n[3]}/${pr.total} mastered · ${Math.round(pr.score * 100)}% overall`;
      const o2 = overall(); const ring = $('.ring'); ring.style.setProperty('--p', o2.pct); ring.firstElementChild.textContent = o2.pct + '%'; $('#osum').textContent = `${o2.n[3]} mastered · ${o2.n[2]} revised · ${o2.n[1]} studied once · ${o2.n[0]} not started`;
    });
    list.addEventListener('toggle', (e) => { const d = e.target; if (d.matches?.('details[data-p]')) { const o3 = store.get('chkOpen', {}); o3[d.dataset.p] = d.open; store.set('chkOpen', o3); } }, true);
    $('#cs').addEventListener('input', render);
    $('#cf').addEventListener('change', (e) => { store.set('chkFilter', e.target.value); render(); });
    $('#cAll').addEventListener('change', (e) => { store.set('chkShowAll', e.target.checked); viewChecklist(); });
    $('#cExp').addEventListener('click', exportProgress);
    $('#cImp').addEventListener('change', importProgress);
    $('#cReset').addEventListener('click', () => { if (confirm('Clear every checklist mark in this browser? This cannot be undone (export first if unsure).')) { store.del('checklist'); viewChecklist(); } });
  }
  function exportProgress() {
    const data = { app: 'css-pakistan-practice', version: 1, exported: new Date().toISOString(), checklist: chk(), qstats: store.get('qstats', {}), history: store.get('history', []), combo: combo() };
    const blob = new Blob([JSON.stringify(data, null, 1)], { type: 'application/json' });
    const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'css-progress-' + new Date().toISOString().slice(0, 10) + '.json'; a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 2000);
  }
  function importProgress(e) {
    const f = e.target.files[0]; if (!f) return;
    f.text().then((t) => {
      const d = JSON.parse(t); if (d.app !== 'css-pakistan-practice') throw new Error('Not a progress file from this site.');
      if (!confirm('Replace the progress in this browser with the imported file?')) return;
      store.set('checklist', d.checklist || {}); store.set('qstats', d.qstats || {}); store.set('history', d.history || []); if (d.combo) store.set('combo', d.combo);
      route();
    }).catch((err) => alert('Import failed: ' + err.message));
  }

  // ------------------------------------------------------------------ question stats
  const qstats = () => store.get('qstats', {});
  function recordAnswer(id, ok) { const s = qstats(); const r = s[id] || { c: 0, w: 0 }; ok ? r.c++ : r.w++; r.l = ok ? 1 : 0; r.t = Date.now(); s[id] = r; store.set('qstats', s); }
  const qById = () => (D._qById ||= Object.fromEntries(D.questions.map((q) => [q.id, q])));
  const paperLabel = (pid) => (paperById[pid] || {}).label || pid;
  const papersWithMCQ = () => [...new Set(D.questions.map((q) => q.paper))];

  // ------------------------------------------------------------------ practice
  let practice = null;
  function viewPractice() {
    const main = $('#main');
    const st = qstats(); const all = D.questions;
    const attempted = all.filter((q) => st[q.id]); const right = attempted.filter((q) => st[q.id].l === 1).length;
    const wrongIds = all.filter((q) => st[q.id] && st[q.id].l === 0);
    const sel = store.get('pracPapers', ['mpt']);
    const pp = papersWithMCQ().filter((p) => paperById[p] && (paperById[p].group !== 'Optional' || comboSubjects().includes(p) || store.get('chkShowAll', false)));
    main.innerHTML = `
      <div class="page-head"><div><h1>MCQ practice</h1><p>Answer one question at a time and see the explanation straight away. Wrong answers go into your review list, so you can drill them until they stick.</p></div></div>
      <div class="grid cols-3" style="margin-bottom:18px">
        <div class="card"><div class="kpi">${D.questions.length.toLocaleString()}</div><div class="kpi-label">MCQs in the bank</div></div>
        <div class="card"><div class="kpi">${attempted.length.toLocaleString()}</div><div class="kpi-label">attempted · ${pct(right, attempted.length)}% right on last try</div></div>
        <div class="card"><div class="kpi">${wrongIds.length}</div><div class="kpi-label">in your review list</div></div>
      </div>
      <div class="card">
        <div class="lbl" style="margin-bottom:8px">Papers</div>
        <div class="chips" id="pp">${pp.map((p) => `<button class="chip" data-p="${p}" aria-pressed="${sel.includes(p)}">${esc(paperLabel(p))} <span class="muted">${all.filter((q) => q.paper === p).length}</span></button>`).join('')}</div>
        <div class="row" style="margin-top:14px;align-items:end">
          <div class="field" style="min-width:220px;flex:1"><label for="psec">Section</label><select id="psec"></select></div>
          <div class="field"><label for="pmode">Questions</label><select id="pmode">
            <option value="random">Random</option><option value="unseen">Not tried yet</option><option value="wrong">My review list (wrong last time)</option><option value="order">In order</option></select></div>
          <div class="field"><label for="pn">How many</label><select id="pn"><option>10</option><option selected>20</option><option>50</option><option>100</option></select></div>
          <button class="btn primary" id="pstart">Start practice</button>
        </div>
        <p class="small muted" id="pcount" style="margin:10px 0 0"></p>
      </div>
      <div id="pq" style="margin-top:18px"></div>`;
    const updateSec = () => {
      const ps = $$('#pp .chip[aria-pressed=true]').map((b) => b.dataset.p);
      const secs = [...new Set(D.questions.filter((q) => ps.includes(q.paper)).map((q) => q.section).filter(Boolean))];
      $('#psec').innerHTML = `<option value="">All sections</option>` + secs.map((s) => `<option${dirAttr(s)}>${esc(s)}</option>`).join('');
      count();
    };
    const pool = () => {
      const ps = $$('#pp .chip[aria-pressed=true]').map((b) => b.dataset.p); const sec = $('#psec').value; const mode = $('#pmode').value; const s = qstats();
      let p = D.questions.filter((q) => ps.includes(q.paper) && (!sec || q.section === sec));
      if (mode === 'unseen') p = p.filter((q) => !s[q.id]);
      if (mode === 'wrong') p = p.filter((q) => s[q.id] && s[q.id].l === 0);
      return mode === 'order' ? p : shuffle(p);
    };
    const count = () => { $('#pcount').textContent = pool().length.toLocaleString() + ' questions match.'; };
    $('#pp').addEventListener('click', (e) => { const b = e.target.closest('.chip'); if (!b) return; b.setAttribute('aria-pressed', String(b.getAttribute('aria-pressed') !== 'true')); store.set('pracPapers', $$('#pp .chip[aria-pressed=true]').map((x) => x.dataset.p)); updateSec(); });
    $('#psec').addEventListener('change', count); $('#pmode').addEventListener('change', count);
    $('#pstart').addEventListener('click', () => {
      const qs = pool().slice(0, +$('#pn').value);
      if (!qs.length) { $('#pq').innerHTML = '<div class="empty">No questions match. Change the filters.</div>'; return; }
      practice = { qs, i: 0, right: 0, done: 0 }; showPQ();
    });
    updateSec();
  }
  function qCard(q, i, total, chosen, reveal) {
    return `<div class="card q-card" data-id="${q.id}">
      <div class="q-head"><span>Question ${i + 1} of ${total}</span><span>${esc(paperLabel(q.paper))}${q.section ? ' · <span' + dirAttr(q.section) + '>' + esc(q.section) + '</span>' : ''}</span></div>
      <div class="q-text"${dirAttr(q.q)}>${esc(q.q)}</div>
      <div class="opts">${q.o.map((o, k) => {
        let cls = ''; if (chosen === k) cls = 'sel'; if (reveal) { if (k === q.a) cls = 'right'; else if (chosen === k) cls = 'wrong'; }
        return `<button class="opt ${cls}" data-k="${k}" ${reveal ? 'disabled' : ''}${dirAttr(o)}><b>${'ABCD'[k]}</b><span>${esc(o)}</span></button>`;
      }).join('')}</div>
      ${reveal ? `<div class="expl"><b>${chosen === q.a ? 'Correct.' : chosen == null ? 'Not answered.' : 'Not quite.'}</b> Answer: <b>${'ABCD'[q.a]}</b>. ${esc(q.e || '')}
        <div class="small muted" style="margin-top:4px">Source: <a href="#/doc/${encodeURI(q.src)}">${esc(q.src.split('/').slice(-2).join(' / '))}</a></div></div>` : ''}
    </div>`;
  }
  function showPQ() {
    const box = $('#pq'); const P = practice;
    if (P.i >= P.qs.length) {
      box.innerHTML = `<div class="card"><h2 style="margin-top:0">Done: ${P.right} / ${P.done} right (${pct(P.right, P.done)}%)</h2>
        <p class="muted">Wrong answers are in your review list. Choose "My review list" above to drill them.</p><button class="btn primary" id="pagain">Practise again</button></div>`;
      $('#pagain').onclick = () => $('#pstart').click(); return;
    }
    const q = P.qs[P.i];
    box.innerHTML = qCard(q, P.i, P.qs.length, null, false) + `<p class="small muted">Tip: press A–D or 1–4 to answer, Enter for the next question.</p>`;
    box.scrollIntoView({ behavior: 'smooth', block: 'start' });
    const answer = (k) => {
      if (P.answered) return; P.answered = true; const ok = k === q.a; recordAnswer(q.id, ok); P.done++; if (ok) P.right++;
      box.innerHTML = qCard(q, P.i, P.qs.length, k, true) + `<div class="row" style="margin-top:12px"><button class="btn primary" id="pnext">${P.i + 1 < P.qs.length ? 'Next question' : 'See result'}</button><span class="muted small">${P.right}/${P.done} right so far</span></div>`;
      $('#pnext').onclick = next; $('#pnext').focus();
    };
    const next = () => { P.answered = false; P.i++; showPQ(); };
    box.querySelector('.opts').addEventListener('click', (e) => { const b = e.target.closest('.opt'); if (b) answer(+b.dataset.k); });
    P.key = (e) => {
      if (!$('#pq') || e.target.matches('input,select,textarea')) return;
      const m = { a: 0, b: 1, c: 2, d: 3, 1: 0, 2: 1, 3: 2, 4: 3 }[e.key.toLowerCase()];
      if (m != null && !P.answered) answer(m); else if (e.key === 'Enter' && P.answered) next();
    };
    document.onkeydown = P.key;
  }

  // ------------------------------------------------------------------ exams
  const MPT_SPLIT = [['islamic', 'Islamic Studies', 20], ['urdu', 'Urdu', 20], ['english', 'English', 50], ['ga', 'General Abilities', 60], ['gk', 'General Knowledge', 50]];
  function viewExamBuilder() {
    const main = $('#main');
    const cur = store.get('examCurrent', null);
    const hist = store.get('history', []);
    const subjPapers = [...new Set(D.subjective.map((s) => s.paper))];
    const mcqPapers = papersWithMCQ();
    const paperOpts = (list) => D.meta.papers.filter((p) => list.includes(p.id) && (p.group !== 'Optional' || comboSubjects().includes(p.id) || store.get('chkShowAll', false))).map((p) => `<option value="${p.id}">${esc(p.label)}</option>`).join('');
    main.innerHTML = `
      <div class="page-head"><div><h1>Create an exam</h1><p>Build a timed test from the question banks. MCQs are marked automatically; written questions are for answering by hand, then you enter your own marks out of 20 using the scorecard.</p></div></div>
      ${cur ? `<div class="notice info" style="margin-bottom:16px">You have an exam in progress: <b>${esc(cur.title)}</b>. <a href="#/exam/run">Resume it</a> · <a href="javascript:void 0" id="discard">discard</a></div>` : ''}
      <div class="grid cols-2">
        <div class="card"><h3 style="margin-top:0">MPT mock</h3><p class="muted small">The real split: Islamic Studies 20, Urdu 20, English 50, General Abilities 60, General Knowledge 50. Pass mark 33%.</p>
          <div class="row"><button class="btn primary" data-preset="mpt200">Full: 200 MCQs · 200 min</button><button class="btn" data-preset="mpt100">Half: 100 MCQs · 100 min</button></div></div>
        <div class="card"><h3 style="margin-top:0">Part I of a written paper</h3><p class="muted small">20 MCQs in 30 minutes, as on the OMR sheet.</p>
          <div class="row"><select id="p1paper" class="btn">${paperOpts(mcqPapers.filter((p) => p !== 'mpt'))}</select><button class="btn primary" data-preset="part1">Start</button></div></div>
        <div class="card"><h3 style="margin-top:0">Full written paper</h3><p class="muted small">20 MCQs (30 min) + 7 written questions, attempt any 4 (2.5 h). Answer on paper and mark yourself.</p>
          <div class="row"><select id="fpaper" class="btn">${paperOpts(subjPapers.filter((p) => p !== 'essay' && p !== 'precis'))}</select><button class="btn primary" data-preset="full">Start</button></div></div>
        <div class="card"><h3 style="margin-top:0">Essay paper</h3><p class="muted small">10 topics drawn from past papers and likely themes. Choose one, write for 3 hours by hand, then mark with the essay rubric.</p>
          <div class="row"><button class="btn primary" data-preset="essay" ${subjPapers.includes('essay') ? '' : 'disabled'}>Draw an essay paper</button></div></div>
      </div>
      <div class="card" style="margin-top:16px"><h3 style="margin-top:0">Custom exam</h3>
        <div class="chips" id="cxp">${D.meta.papers.filter((p) => (mcqPapers.includes(p.id) || subjPapers.includes(p.id)) && (p.group !== 'Optional' || comboSubjects().includes(p.id) || store.get('chkShowAll', false))).map((p) => `<button class="chip" data-p="${p.id}" aria-pressed="false">${esc(p.label)}</button>`).join('')}</div>
        <div class="row" style="margin-top:14px;align-items:end">
          <div class="field"><label for="cxn">MCQs</label><input id="cxn" type="number" min="0" max="300" value="40" style="width:90px"></div>
          <div class="field"><label for="cxs">Written questions</label><input id="cxs" type="number" min="0" max="20" value="0" style="width:90px"></div>
          <div class="field"><label for="cxt">Minutes</label><input id="cxt" type="number" min="5" max="400" value="40" style="width:90px"></div>
          <div class="field"><label for="cxm">MCQ source</label><select id="cxm"><option value="all">All questions</option><option value="unseen">Not tried yet</option><option value="wrong">My review list</option></select></div>
          <div class="field"><label for="cxy">Written source</label><select id="cxy"><option value="all">Past + likely</option><option value="past">Past papers only</option><option value="likely">Likely only</option></select></div>
          <button class="btn primary" id="cxgo">Create exam</button>
        </div><p class="small muted" id="cxmsg" style="margin:8px 0 0"></p></div>
      <h2 style="margin-top:28px">Exam history</h2>
      ${hist.length ? `<div class="card tablewrap"><table class="plain"><thead><tr><th>Date</th><th>Exam</th><th>MCQs</th><th>Written</th><th>Time</th></tr></thead><tbody>
        ${hist.slice().reverse().map((h) => `<tr><td>${fmtDate(h.date)}</td><td>${esc(h.title)}</td><td>${h.mcqTotal ? `${h.mcqRight}/${h.mcqTotal} (${pct(h.mcqRight, h.mcqTotal)}%)` : '—'}</td><td>${h.subjMax ? `${h.subjScore}/${h.subjMax}` : '—'}</td><td>${fmtTime(h.used)}</td></tr>`).join('')}
      </tbody></table></div>` : '<div class="empty">No exams yet. Your results will be listed here.</div>'}`;
    $('#discard')?.addEventListener('click', () => { if (confirm('Discard the exam in progress?')) { store.del('examCurrent'); viewExamBuilder(); } });
    main.addEventListener('click', (e) => {
      const b = e.target.closest('[data-preset]'); if (!b) return;
      const pr = b.dataset.preset;
      if (pr === 'mpt200' || pr === 'mpt100') {
        const half = pr === 'mpt100'; const qs = [];
        for (const [tag, , n] of MPT_SPLIT) qs.push(...shuffle(D.questions.filter((q) => q.paper === 'mpt' && q.tag === tag)).slice(0, half ? n / 2 : n));
        startExam({ title: half ? 'MPT half mock' : 'MPT full mock', mcq: qs.map((q) => q.id), subj: [], minutes: half ? 100 : 200, pass: 33, attemptSubj: 0 });
      } else if (pr === 'part1') {
        const p = $('#p1paper').value; const qs = shuffle(D.questions.filter((q) => q.paper === p)).slice(0, 20);
        startExam({ title: paperLabel(p) + ': Part I', mcq: qs.map((q) => q.id), subj: [], minutes: 30, pass: 40, attemptSubj: 0 });
      } else if (pr === 'full') {
        const p = $('#fpaper').value; const qs = shuffle(D.questions.filter((q) => q.paper === p)).slice(0, 20);
        const sj = drawSubjective(p, 7, 'all');
        startExam({ title: paperLabel(p) + ': full paper', mcq: qs.map((q) => q.id), subj: sj, minutes: 180, pass: 40, attemptSubj: 4 });
      } else if (pr === 'essay') {
        startExam({ title: 'English Essay paper', mcq: [], subj: drawSubjective('essay', 10, 'all'), minutes: 180, pass: 40, attemptSubj: 1, essay: true });
      }
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
    // spread across topics
    const byTopic = {}; shuffle(p).forEach((s) => (byTopic[s.topic] = byTopic[s.topic] || []).push(s));
    const out = []; const topics = shuffle(Object.keys(byTopic));
    while (out.length < n && topics.some((t) => byTopic[t].length)) for (const t of topics) { if (byTopic[t].length && out.length < n) out.push(byTopic[t].shift()); }
    return out.map((s) => ({ q: s.q, tag: s.tag, topic: s.topic, src: s.src }));
  }
  function startExam(cfg) {
    const ex = { ...cfg, id: Date.now(), started: Date.now(), answers: {}, flags: {}, i: 0, subjScores: {} };
    store.set('examCurrent', ex); location.hash = '#/exam/run';
  }
  let timerId = null;
  function viewExamRun() {
    const ex = store.get('examCurrent', null); const main = $('#main');
    if (!ex) { main.innerHTML = '<div class="empty">No exam in progress. <a href="#/exam">Create one</a>.</div>'; return; }
    const Q = qById(); const qs = ex.mcq.map((id) => Q[id]).filter(Boolean);
    const end = ex.started + ex.minutes * 60000;
    const tab = ex.tab || (qs.length ? 'mcq' : 'subj');
    main.innerHTML = `
      <div class="exam-bar"><div><b>${esc(ex.title)}</b> <span class="muted small">· ${qs.length} MCQs${ex.subj.length ? ` · ${ex.subj.length} written (attempt ${ex.attemptSubj})` : ''}</span></div>
        <div class="row"><span class="timer" id="timer" aria-live="off"></span><button class="btn primary" id="submit">Submit</button></div></div>
      ${qs.length && ex.subj.length ? `<div class="chips" style="margin-bottom:14px"><button class="chip" data-tab="mcq" aria-pressed="${tab === 'mcq'}">Part I: MCQs</button><button class="chip" data-tab="subj" aria-pressed="${tab === 'subj'}">Part II: written</button></div>` : ''}
      <div id="exbody"></div>`;
    const body = $('#exbody');
    const renderMCQ = () => {
      const q = qs[ex.i];
      body.innerHTML = `<div class="exam-layout"><div>${qCard(q, ex.i, qs.length, ex.answers[q.id], false)}
        <div class="row" style="margin-top:12px;justify-content:space-between"><div class="row"><button class="btn" id="prev" ${ex.i ? '' : 'disabled'}>Previous</button><button class="btn" id="next" ${ex.i < qs.length - 1 ? '' : 'disabled'}>Next</button></div>
        <button class="btn ghost" id="flag">${ex.flags[q.id] ? 'Unflag' : 'Flag for review'}</button></div></div>
        <aside class="exam-side card"><div class="lbl" style="margin-bottom:8px">${Object.keys(ex.answers).length} of ${qs.length} answered</div>
        <div class="navgrid">${qs.map((x, k) => `<button data-i="${k}" class="${ex.answers[x.id] != null ? 'ans' : ''} ${k === ex.i ? 'cur' : ''} ${ex.flags[x.id] ? 'flag' : ''}">${k + 1}</button>`).join('')}</div></aside></div>`;
      body.querySelector('.opts').addEventListener('click', (e) => { const b = e.target.closest('.opt'); if (!b) return; ex.answers[q.id] = +b.dataset.k; save(); if (ex.i < qs.length - 1) { ex.i++; save(); } renderMCQ(); });
      $('#prev').onclick = () => { ex.i--; save(); renderMCQ(); }; $('#next').onclick = () => { ex.i++; save(); renderMCQ(); };
      $('#flag').onclick = () => { ex.flags[q.id] = !ex.flags[q.id]; save(); renderMCQ(); };
      $('.navgrid', body).addEventListener('click', (e) => { const b = e.target.closest('button[data-i]'); if (b) { ex.i = +b.dataset.i; save(); renderMCQ(); } });
    };
    const renderSubj = () => {
      body.innerHTML = `<div class="card"><p class="notice info small" style="margin-top:0">${ex.essay ? 'Choose <b>one</b> topic. Write the outline and essay by hand in 3 hours. Aim for 2,500–3,000 words.' : `Attempt any <b>${ex.attemptSubj}</b>. Write by hand on paper: about 35–40 minutes per answer.`} Mark yourself after submitting.</p>
        ${ex.subj.map((s, k) => `<div class="subj"><span class="pill tag ${s.tag.startsWith('CSS') ? 'acc' : ''}">${esc(s.tag)}</span><span class="small muted">${esc(s.topic)}</span><div style="margin-top:6px;font-size:1.05rem"${dirAttr(s.q)}><b>Q${k + 2}.</b> ${esc(s.q)}</div></div>`).join('')}</div>`;
    };
    const renderTab = () => (ex.tab || tab) === 'mcq' && qs.length ? renderMCQ() : renderSubj();
    const save = () => store.set('examCurrent', ex);
    main.addEventListener('click', (e) => { const t = e.target.closest('[data-tab]'); if (!t) return; ex.tab = t.dataset.tab; save(); $$('[data-tab]').forEach((b) => b.setAttribute('aria-pressed', String(b === t))); renderTab(); });
    renderTab();
    const tick = () => {
      const left = (end - Date.now()) / 1000; const el = $('#timer');
      if (!el) { clearInterval(timerId); return; }
      el.textContent = fmtTime(left) + ' left'; el.classList.toggle('low', left < 300);
      if (left <= 0) { clearInterval(timerId); finishExam(true); }
    };
    clearInterval(timerId); timerId = setInterval(tick, 1000); tick();
    $('#submit').onclick = () => {
      const un = qs.length - Object.keys(ex.answers).length;
      if (confirm(un > 0 ? `${un} MCQ${un > 1 ? 's are' : ' is'} unanswered. Submit anyway?` : 'Submit the exam?')) finishExam(false);
    };
    document.onkeydown = (e) => {
      if (e.target.matches('input,select,textarea') || (ex.tab || tab) !== 'mcq' || !qs.length) return;
      const m = { a: 0, b: 1, c: 2, d: 3, 1: 0, 2: 1, 3: 2, 4: 3 }[e.key.toLowerCase()];
      if (m != null) { ex.answers[qs[ex.i].id] = m; save(); if (ex.i < qs.length - 1) ex.i++; save(); renderMCQ(); }
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
    ex.right = right;
    store.set('examLast', ex); store.del('examCurrent');
    const hist = store.get('history', []);
    hist.push({ id: ex.id, date: ex.finished, title: ex.title, mcqRight: right, mcqTotal: ex.mcq.length, subjScore: 0, subjMax: ex.subj.length ? (ex.essay ? 100 : ex.attemptSubj * 20) : 0, used: (ex.finished - ex.started) / 1000 });
    store.set('history', hist.slice(-100));
    location.hash = '#/exam/result';
  }
  function viewExamResult() {
    const ex = store.get('examLast', null); const main = $('#main');
    if (!ex) { main.innerHTML = '<div class="empty">No finished exam yet. <a href="#/exam">Create one</a>.</div>'; return; }
    const Q = qById(); const qs = ex.mcq.map((id) => Q[id]).filter(Boolean);
    const groups = {};
    qs.forEach((q) => { const k = q.paper === 'mpt' ? (MPT_SPLIT.find((m) => m[0] === q.tag) || [])[1] || 'MPT' : paperLabel(q.paper); const g = groups[k] = groups[k] || { r: 0, t: 0 }; g.t++; if (ex.answers[q.id] === q.a) g.r++; });
    const p = pct(ex.right, qs.length); const pass = p >= ex.pass;
    const onlyWrong = store.get('resOnlyWrong', false);
    main.innerHTML = `
      <div class="page-head"><div><h1>${esc(ex.title)}: result</h1><p>${ex.timeUp ? 'Time ran out and the exam was submitted automatically. ' : ''}Time used: ${fmtTime((ex.finished - ex.started) / 1000)} of ${ex.minutes} min.</p></div>
      <div class="row"><a class="btn" href="#/exam">New exam</a></div></div>
      ${qs.length ? `<div class="grid cols-3" style="margin-bottom:16px">
        <div class="card"><div class="kpi">${ex.right}/${qs.length}</div><div class="kpi-label">MCQs right · ${p}%</div></div>
        <div class="card"><div class="kpi" style="color:${pass ? 'var(--good)' : 'var(--bad)'}">${pass ? 'Above' : 'Below'}</div><div class="kpi-label">the ${ex.pass}% line</div></div>
        <div class="card"><div class="lbl">By section</div>${Object.entries(groups).map(([k, g]) => `<div class="row small" style="justify-content:space-between"><span>${esc(k)}</span><b>${g.r}/${g.t}</b></div>`).join('')}</div></div>` : ''}
      ${ex.subj.length ? `<div class="card" style="margin-bottom:16px"><h3 style="margin-top:0">Written part: mark yourself</h3>
        <p class="small muted">Use the scorecard in <a href="#/doc/02-Practice-and-Tracking/Scorecards.md">Scorecards</a>. Self-marking runs high, so subtract 5 until a human has checked a few scripts. Enter ${ex.essay ? 'your essay mark out of 100' : 'marks out of 20 for the answers you attempted'}.</p>
        ${ex.subj.map((s, k) => `<div class="subj row" style="justify-content:space-between;flex-wrap:nowrap"><div${dirAttr(s.q)}><span class="pill ${s.tag.startsWith('CSS') ? 'acc' : ''}">${esc(s.tag)}</span> ${esc(s.q)}</div>
          <input type="number" min="0" max="${ex.essay ? 100 : 20}" data-k="${k}" class="sscore" value="${ex.subjScores[k] ?? ''}" placeholder="—" style="width:76px;padding:6px;border:1px solid var(--border);border-radius:8px;background:var(--surface)"></div>`).join('')}
        <div class="row" style="margin-top:10px"><b id="stotal"></b></div></div>` : ''}
      ${qs.length ? `<div class="row" style="justify-content:space-between;margin:20px 0 10px"><h2 style="margin:0">Review</h2><label class="row small"><input type="checkbox" id="ow" ${onlyWrong ? 'checked' : ''}> Show only wrong or unanswered</label></div>
      <div class="grid" id="rev"></div>` : ''}`;
    const rev = $('#rev');
    const drawRev = () => { if (!rev) return; const ow = $('#ow').checked; rev.innerHTML = qs.map((q, k) => (ow && ex.answers[q.id] === q.a) ? '' : qCard(q, k, qs.length, ex.answers[q.id], true)).join('') || '<div class="empty">All correct.</div>'; };
    drawRev(); $('#ow')?.addEventListener('change', (e) => { store.set('resOnlyWrong', e.target.checked); drawRev(); });
    const upd = () => {
      const vals = $$('.sscore').map((i) => i.value === '' ? null : Math.max(0, Math.min(+i.max, +i.value)));
      vals.forEach((v, k) => { if (v != null) ex.subjScores[k] = v; else delete ex.subjScores[k]; });
      const tot = vals.filter((v) => v != null).reduce((a, b) => a + b, 0); const max = ex.essay ? 100 : ex.attemptSubj * 20;
      if ($('#stotal')) $('#stotal').textContent = `Written total: ${tot} / ${max}`;
      store.set('examLast', ex);
      const hist = store.get('history', []); const h = hist.find((x) => x.id === ex.id); if (h) { h.subjScore = tot; store.set('history', hist); }
    };
    $$('.sscore').forEach((i) => i.addEventListener('input', upd)); if ($$('.sscore').length) upd();
  }

  // ------------------------------------------------------------------ question bank (subjective + MCQ browse)
  function viewQuestionBank() {
    const main = $('#main'); const tab = store.get('qbTab', 'subj');
    main.innerHTML = `
      <div class="page-head"><div><h1>Question bank</h1><p>Every past-paper question from 2016–2026 that the packs record (paraphrased), plus likely questions for 2028, and the full MCQ bank to browse. Use them for outlines, timed answers or revision.</p></div></div>
      <div class="chips" style="margin-bottom:14px"><button class="chip" data-t="subj" aria-pressed="${tab === 'subj'}">Written questions (${D.subjective.length.toLocaleString()})</button><button class="chip" data-t="mcq" aria-pressed="${tab === 'mcq'}">MCQs (${D.questions.length.toLocaleString()})</button></div>
      <div id="qb"></div>`;
    main.querySelector('.chips').addEventListener('click', (e) => { const b = e.target.closest('[data-t]'); if (b) { store.set('qbTab', b.dataset.t); viewQuestionBank(); } });
    tab === 'subj' ? qbSubj() : qbMCQ();
  }
  function qbSubj() {
    const box = $('#qb');
    const papers = D.meta.papers.filter((p) => D.subjective.some((s) => s.paper === p.id));
    const years = [...new Set(D.subjective.map((s) => s.year).filter(Boolean))].sort((a, b) => b - a);
    box.innerHTML = `<div class="card"><div class="row" style="align-items:end">
      <div class="field"><label for="sp">Paper</label><select id="sp"><option value="">All papers</option>${papers.map((p) => `<option value="${p.id}">${esc(p.label)}</option>`).join('')}</select></div>
      <div class="field"><label for="st">Topic</label><select id="st"><option value="">All topics</option></select></div>
      <div class="field"><label for="sk">Type</label><select id="sk"><option value="">Past + likely</option><option value="past">Past papers</option><option value="likely">Likely</option></select></div>
      <div class="field"><label for="sy">Year</label><select id="sy"><option value="">Any year</option>${years.map((y) => `<option>${y}</option>`).join('')}</select></div>
      <div class="field" style="flex:1;min-width:160px"><label for="sq">Search</label><input id="sq" type="search" placeholder="e.g. CPEC, women, IMF"></div>
      <button class="btn" id="srand">Random 5</button></div></div>
      <p class="small muted" id="scount"></p><div class="card list" id="slist"></div>`;
    const fill = () => { const p = $('#sp').value; const tops = [...new Set(D.subjective.filter((s) => !p || s.paper === p).map((s) => s.topic))]; $('#st').innerHTML = '<option value="">All topics</option>' + tops.map((t) => `<option>${esc(t)}</option>`).join(''); };
    let random = null;
    const draw = () => {
      const p = $('#sp').value, t = $('#st').value, k = $('#sk').value, y = $('#sy').value, q = $('#sq').value.trim().toLowerCase();
      let L = D.subjective.filter((s) => (!p || s.paper === p) && (!t || s.topic === t) && (!k || (k === 'past') === s.past) && (!y || String(s.year) === y) && (!q || (s.q + ' ' + s.topic).toLowerCase().includes(q)));
      if (random) { L = shuffle(L).slice(0, 5); random = null; }
      $('#scount').textContent = L.length.toLocaleString() + ' questions';
      $('#slist').innerHTML = L.slice(0, 400).map((s) => `<div class="li"><div class="row small" style="gap:6px"><span class="pill ${s.past ? 'acc' : ''}">${esc(s.tag)}</span><span class="muted">${esc(paperLabel(s.paper))} · ${esc(s.topic)}</span></div><div style="margin-top:4px"${dirAttr(s.q)}>${esc(s.q)}</div></div>`).join('') + (L.length > 400 ? `<div class="li muted small">Showing the first 400. Narrow the filters to see more.</div>` : '') || '<div class="empty">No questions match.</div>';
    };
    fill(); draw();
    $('#sp').addEventListener('change', () => { fill(); draw(); });
    ['#st', '#sk', '#sy'].forEach((s) => $(s).addEventListener('change', draw)); $('#sq').addEventListener('input', draw);
    $('#srand').addEventListener('click', () => { random = true; draw(); });
  }
  function qbMCQ() {
    const box = $('#qb');
    const papers = D.meta.papers.filter((p) => D.questions.some((q) => q.paper === p.id));
    box.innerHTML = `<div class="card"><div class="row" style="align-items:end">
      <div class="field"><label for="mp">Paper</label><select id="mp">${papers.map((p) => `<option value="${p.id}">${esc(p.label)}</option>`).join('')}</select></div>
      <div class="field" style="min-width:200px"><label for="ms">Section</label><select id="ms"></select></div>
      <div class="field" style="flex:1;min-width:160px"><label for="mq">Search</label><input id="mq" type="search"></div>
      <label class="row small"><input type="checkbox" id="mshow"> Show answers</label></div></div>
      <p class="small muted" id="mcount"></p><div class="card list" id="mlist"></div>`;
    const fill = () => { const p = $('#mp').value; const secs = [...new Set(D.questions.filter((q) => q.paper === p).map((q) => q.section))]; $('#ms').innerHTML = '<option value="">All sections</option>' + secs.map((s) => `<option${dirAttr(s)}>${esc(s)}</option>`).join(''); };
    const draw = () => {
      const p = $('#mp').value, s = $('#ms').value, q = $('#mq').value.trim().toLowerCase(), show = $('#mshow').checked;
      const L = D.questions.filter((x) => x.paper === p && (!s || x.section === s) && (!q || (x.q + ' ' + x.o.join(' ')).toLowerCase().includes(q)));
      $('#mcount').textContent = L.length.toLocaleString() + ' questions';
      $('#mlist').innerHTML = L.slice(0, 300).map((x, i) => `<div class="li"${dirAttr(x.q)}><div><b>${i + 1}.</b> ${esc(x.q)}</div><div class="small" style="margin-top:4px">${x.o.map((o, k) => `<span style="margin-right:14px;${show && k === x.a ? 'color:var(--good);font-weight:700' : ''}">${'ABCD'[k]}) ${esc(o)}</span>`).join('')}</div>${show && x.e ? `<div class="small muted" style="margin-top:3px">${esc(x.e)}</div>` : ''}</div>`).join('') + (L.length > 300 ? '<div class="li small muted">Showing the first 300. Narrow the filters to see more.</div>' : '');
    };
    fill(); draw();
    $('#mp').addEventListener('change', () => { fill(); draw(); }); $('#ms').addEventListener('change', draw); $('#mq').addEventListener('input', draw); $('#mshow').addEventListener('change', draw);
  }

  // ------------------------------------------------------------------ interview
  function viewInterview() {
    const main = $('#main');
    const docs = D.manifest.docs.filter((d) => d.section === 'stages').sort((a, b) => a.path.localeCompare(b.path));
    const qb = docs.find((d) => /Question-Bank/i.test(d.path));
    main.innerHTML = `
      <div class="page-head"><div><h1>Interview & later stages</h1><p>Everything after the written exam: medical board, psychological assessment, viva voce (300 marks, 100 to pass), group allocation and training. It's compiled from FPSC documents and from what officers and candidates have shared online, with sources.</p></div></div>
      ${docs.length ? `<div class="grid cols-2">${docs.map((d) => `<a class="card" style="text-decoration:none;color:inherit" href="#/doc/${encodeURI(d.path)}"><h3 style="margin:0 0 6px">${esc(d.title)}</h3><p class="small muted" style="margin:0">${esc(d.headings.slice(0, 5).join(' · '))}</p></a>`).join('')}</div>` : '<div class="empty">The interview guide is still being written and will appear here once it is added.</div>'}
      ${qb ? `<div class="card" style="margin-top:18px"><h3 style="margin-top:0">Viva drill</h3><p class="small muted">Draw random questions from the interview question bank. Answer aloud in about 90 seconds each, or record yourself.</p><button class="btn primary" id="vdraw">Draw 5 questions</button><div class="list" id="vlist" style="margin-top:10px"></div></div>` : ''}`;
    if (qb) {
      let pool = null;
      $('#vdraw').addEventListener('click', async () => {
        if (!pool) { const t = await (await fetch(encodeURI(qb.path))).text(); pool = []; let sec = ''; t.split('\n').forEach((l) => { const h = l.match(/^#{2,3}\s+(.+)/); if (h) sec = h[1].replace(/\*/g, ''); const m = l.match(/^\s*(?:[-*]|\d+\.)\s+(.+)/); if (m && m[1].length > 15 && /\?|\*\*/.test(m[1])) pool.push({ sec, t: m[1] }); }); }
        $('#vlist').innerHTML = shuffle(pool).slice(0, 5).map((x) => `<div class="li"><div class="small muted">${esc(x.sec)}</div><div class="md" style="font-size:15.5px">${DOMPurify.sanitize(marked.parseInline(x.t))}</div></div>`).join('') || '<div class="empty">No questions found.</div>';
      });
    }
  }

  // ------------------------------------------------------------------ documents
  function viewDocuments() {
    const main = $('#main'); const docs = D.documents || [];
    const cat = D.manifest.docs.find((d) => /09-Official-Documents\/CATALOGUE\.md$/.test(d.path));
    const subjects = [...new Set(docs.map((d) => d.subject || 'Other'))].sort();
    const size = (b) => b > 1048576 ? (b / 1048576).toFixed(1) + ' MB' : Math.max(1, Math.round(b / 1024)) + ' KB';
    main.innerHTML = `
      <div class="page-head"><div><h1>Downloads</h1><p>Official FPSC documents, past papers and government publications, plus free and openly licensed books, stored in this repository. Copyrighted books are <b>not</b> hosted here; the catalogue lists where to get them.</p></div></div>
      ${cat ? `<p><a class="btn" href="#/doc/${encodeURI(cat.path)}">Open the full catalogue</a></p>` : ''}
      ${docs.length ? `<div class="card tablewrap"><table class="plain"><thead><tr><th>Document</th><th>Subject</th><th>Status</th><th>Size</th><th></th></tr></thead><tbody>
        ${subjects.map((s) => docs.filter((d) => (d.subject || 'Other') === s).map((d) => `<tr><td>${esc(d.title)}<div class="small muted">${d.source_url ? `<a href="${esc(d.source_url)}" target="_blank" rel="noopener">source</a>` : ''}</div></td><td>${esc(d.subject || '')}</td><td><span class="pill ${/official/i.test(d.status) ? 'acc' : ''}">${esc(d.status || '')}</span></td><td>${d.size_bytes ? size(d.size_bytes) : ''}</td><td><a class="btn" href="${encodeURI(d.path)}" download>Download</a></td></tr>`).join('')).join('')}
      </tbody></table></div>` : `<div class="empty">No documents have been added yet. When they are, each one gets a download button here.</div>`}
      <h2 style="margin-top:28px">Official links</h2>
      <div class="card list">
        ${[['CSS syllabus (FPSC)', 'https://www.fpsc.gov.pk/Syllabuses?section=CSS%20Syllabi'], ['CSS Competitive Examination Rules', 'https://www.fpsc.gov.pk/MPTandMAIN?section=CSS%20Rules'], ['Past papers (FPSC, 2023 onwards)', 'https://www.fpsc.gov.pk/Schedule?section=Previous%20Question%20Papers/CSS'], ['CSS and MPT notices', 'https://www.fpsc.gov.pk/Jobs?section=CSS'], ['FPSC annual reports', 'https://www.fpsc.gov.pk/Publications?section=Annual%20Report'], ['Online application portal', 'https://apply.fpsc.gov.pk/login']].map(([t, u]) => `<div class="li"><a href="${u}" target="_blank" rel="noopener">${t}</a></div>`).join('')}
      </div>`;
  }

  // ------------------------------------------------------------------ home
  function viewHome() {
    const main = $('#main'); const o = overall(); const st = qstats(); const att = Object.values(st); const right = att.filter((r) => r.l === 1).length;
    const hist = store.get('history', []); const last = store.get('lastDoc', null);
    const start = new Date('2027-02-01T00:00:00'); const exam = new Date('2028-01-27T00:00:00'); const now = new Date();
    const week = Math.floor((now - start) / (7 * 864e5)) + 1; const daysToStart = Math.ceil((start - now) / 864e5); const daysToExam = Math.ceil((exam - now) / 864e5);
    const sched = D.manifest.docs.find((d) => d.path === '01-Plan/Study-Schedule.md');
    const c = D.meta.combos[combo()];
    const groups = ['MPT', 'Compulsory', 'Optional'].map((g) => { const ps = checklistPapers(false).filter((p) => p.group === g && p.items.length); let n = [0, 0, 0, 0], t = 0; ps.forEach((p) => { const pr = paperProgress(p); pr.n.forEach((v, i) => (n[i] += v)); t += pr.total; }); return { g, n, t }; });
    main.innerHTML = `
      <section class="card hero" style="margin-bottom:18px"><div>
        <h1>CSS Pakistan Practice</h1>
        <p class="muted" style="margin:0 0 14px;max-width:640px">A complete self-study course for the CSS exam: notes for every paper, a syllabus checklist, ${D.questions.length.toLocaleString()} MCQs, ${D.subjective.length.toLocaleString()} written questions, mock exams and interview guidance.</p>
        <div class="row"><a class="btn primary" href="#/doc/00-START-HERE.md">Start here</a>${last ? `<a class="btn" href="#/doc/${encodeURI(last)}">Continue reading</a>` : ''}<a class="btn" href="#/exam">Take a mock</a></div>
      </div><div class="ring" style="--p:${o.pct}" title="Syllabus progress"><div>${o.pct}%</div></div></section>
      <div class="grid cols-3">
        <div class="card"><div class="kpi">${daysToStart > 0 ? daysToStart : daysToExam > 0 ? 'Week ' + week : '—'}</div><div class="kpi-label">${daysToStart > 0 ? 'days until the schedule starts (1 Feb 2027)' : daysToExam > 0 ? `of the schedule · ${daysToExam} days to the projected written exam` : 'Exam window reached'}</div>${sched ? `<a class="small" href="#/doc/${encodeURI(sched.path)}">Open the schedule</a>` : ''}</div>
        <div class="card"><div class="kpi">${att.length.toLocaleString()}</div><div class="kpi-label">MCQs attempted · ${pct(right, att.length)}% right on last try</div><a class="small" href="#/practice">Practise</a></div>
        <div class="card"><div class="kpi">${hist.length}</div><div class="kpi-label">exams taken${hist.length ? ` · last: ${esc(hist[hist.length - 1].title)}` : ''}</div><a class="small" href="#/exam">Create an exam</a></div>
      </div>
      <h2 style="margin-top:26px">Syllabus progress</h2>
      <div class="grid cols-3">${groups.map((x) => `<a class="card" style="text-decoration:none;color:inherit" href="#/checklist"><div class="row" style="justify-content:space-between"><b>${x.g === 'MPT' ? 'Screening test' : x.g + ' papers'}</b><span class="small muted">${x.t ? pct(x.n[3], x.t) + '% mastered' : 'not built yet'}</span></div><div style="margin-top:10px">${barHTML(x.n, x.t || 1)}</div><div class="small muted" style="margin-top:8px">${x.n[1]} studied once · ${x.n[2]} revised · ${x.n[3]} mastered of ${x.t}</div></a>`).join('')}</div>
      <div class="row" style="margin-top:10px">${legend()}</div>
      <h2 style="margin-top:26px">Your optional subjects: ${esc(c.label)}</h2>
      <div class="card"><div class="chips">${c.subjects.map((s) => `<span class="pill ${paperExists(s) ? 'acc' : ''}">${esc(paperLabel(s))}${paperExists(s) ? '' : ' (being written)'}</span>`).join('')}</div>
      <p class="small muted" style="margin:10px 0 0">Change the combination in the sidebar. Compare all three in <a href="#/doc/07-Optional-Papers/00-Combinations.md">the combinations guide</a>.</p></div>
      <h2 style="margin-top:26px">Quick links</h2>
      <div class="grid cols-3">${[['01-Plan/CSS-Plan.md', 'Master plan', 'Strategy, targets, decision dates'], ['01-Plan/Exam-Rules.md', 'Exam rules', 'Stages, marks, pass rules, attempts'], ['01-Plan/Optional-Subjects.md', 'Optional subjects', 'Rules and scoring data'], ['02-Practice-and-Tracking/Error-Log.md', 'Error log', 'Close every lost mark'], ['06-Compulsory-Papers/1-English-Essay/00-How-to-Use-This-Pack.md', 'Essay pack', 'The paper that decides the result'], ['05-MPT-Screening-Test/00-How-to-Use-This-Pack.md', 'MPT pack', 'Six-week sprint and mocks']].filter(([p]) => docSet().has(p)).map(([p, t, s]) => `<a class="card" style="text-decoration:none;color:inherit" href="#/doc/${encodeURI(p)}"><b>${t}</b><div class="small muted">${s}</div></a>`).join('')}</div>
      <p class="small muted" style="margin-top:28px">Your progress (checklist, answers, exam history) is stored only in this browser. Back it up from the <a href="#/checklist">checklist</a> page with Export. Exam dates beyond the CSS 2027 cycle are projections; always confirm on <a href="https://www.fpsc.gov.pk" target="_blank" rel="noopener">fpsc.gov.pk</a>.</p>`;
  }

  // ------------------------------------------------------------------ router
  function setActive(route) {
    $$('.topnav a').forEach((a) => a.classList.toggle('active', a.dataset.route === route));
  }
  function route() {
    clearInterval(timerId); document.onkeydown = null;
    const oldMain = $('#main'); const fresh = oldMain.cloneNode(false); oldMain.replaceWith(fresh); // drop old view listeners
    const h = decodeURI(location.hash.replace(/^#/, '')) || '/';
    const [, r, ...rest] = h.split('/'); const arg = rest.join('/');
    setActive(r || 'home');
    document.title = 'CSS Pakistan Practice';
    document.body.classList.remove('nav-open'); $('#menuBtn').setAttribute('aria-expanded', 'false');
    if (r === 'doc' && arg) viewDoc(arg);
    else if (r === 'checklist') viewChecklist();
    else if (r === 'practice') viewPractice();
    else if (r === 'exam' && arg === 'run') viewExamRun();
    else if (r === 'exam' && arg === 'result') viewExamResult();
    else if (r === 'exam') viewExamBuilder();
    else if (r === 'questions') viewQuestionBank();
    else if (r === 'interview') viewInterview();
    else if (r === 'documents') viewDocuments();
    else viewHome();
    if (r !== 'doc') window.scrollTo(0, 0);
    highlightTree();
    $('#main').focus({ preventScroll: true });
  }

  async function init() {
    try {
      const [manifest, questions, subjective, checklist, documents, meta] = await Promise.all(['manifest', 'questions', 'subjective', 'checklist', 'documents', 'meta'].map(loadJSON));
      Object.assign(D, { manifest, questions, subjective, checklist, documents, meta });
    } catch (e) {
      $('#main').innerHTML = `<div class="empty">Couldn't load the course data. If you opened this file directly from disk, serve the folder instead: run <code>python3 -m http.server</code> in it and open <code>http://localhost:8000</code>.</div>`;
      return;
    }
    paperById = Object.fromEntries(D.meta.papers.map((p) => [p.id, p]));
    const sel = $('#comboSelect');
    sel.innerHTML = Object.entries(D.meta.combos).map(([k, v]) => `<option value="${k}" ${k === combo() ? 'selected' : ''}>${esc(v.label)}</option>`).join('');
    sel.addEventListener('change', () => { store.set('combo', sel.value); buildTree(); route(); });
    buildTree();
    let t; $('#docSearch').addEventListener('input', (e) => { clearTimeout(t); t = setTimeout(() => buildTree(e.target.value), 120); });
    $('#menuBtn').addEventListener('click', () => { const o = document.body.classList.toggle('nav-open'); $('#menuBtn').setAttribute('aria-expanded', String(o)); });
    $('#scrim').addEventListener('click', () => document.body.classList.remove('nav-open'));
    $('#themeBtn').addEventListener('click', () => {
      const cur = document.documentElement.dataset.theme || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      const nx = cur === 'dark' ? 'light' : 'dark'; document.documentElement.dataset.theme = nx; try { localStorage.setItem('cssp.theme', nx); } catch (e) {}
    });
    window.addEventListener('hashchange', route);
    route();
  }
  init();
})();
