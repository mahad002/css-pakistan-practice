# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: one self-studying candidate preparing alone for Pakistan's CSS Competitive Examination (first attempt CSS 2028), often alongside work or study. Uses it on phone and laptop about equally: phone for MCQs, the checklist and quick check-ins; laptop for reading long notes and timed practice. The site is public, so other CSS candidates are welcome to use it, but guidance is written for one person studying alone, and nothing personal is shown.

## Product Purpose

A complete CSS study course in one place: notes for the MPT and every written paper (6 compulsory, 8 optional across three subject combinations), a syllabus checklist, MCQ practice and timed exams, written question banks, interview guidance and official documents. Success: the candidate always knows what is left and what to do next, without feeling lost or pushed.

## Positioning

The content is complete and evidence-based (FPSC rules, past papers 2016–2026, scoring data). The experience gives **guidance, not pressure** (user's words): the candidate sets their own target dates, sees honestly how much is left, and gets suggestions they are free to follow or ignore. Everything stays in the candidate's hands.

## Operating Context

- Sessions are short and frequent (20 minutes on a phone) or long (2–4 hours of notes or a 3-hour timed paper on a laptop).
- Real writing happens by hand on paper; the site holds the material, prompts, timers and self-marking.
- Progress is stored in the browser only (localStorage), with export and import.
- The content is markdown files in the repo; `tools/build.py` turns them into JSON for the site.

## Capabilities and Constraints

- Static site: `index.html` + `site/assets/app.js` + `site/assets/app.css`, served by GitHub Pages (mahad002/css-pakistan-practice). No build step for the UI; external scripts only from pinned CDN versions.
- Data: `site/data/manifest.json` (433 docs), `questions.json` (5,084 MCQs), `subjective.json` (2,818 written questions), `checklist.json` (912 syllabus items, 4 states: Not started, Studied once, Revised, Mastered), `documents.json` (68 PDFs), `meta.json` (papers, combinations).
- Three optional combinations: Recommended, Maths strength, English strength.
- Exam dates beyond the CSS 2027 cycle are projections; the user sets their own dates.
- Urdu and Arabic text appear in content (right-to-left).

## Evidence on Hand

All study content is in the repository folders 00–09. FPSC statistics are in `04-Research/`. No testimonials, users or outcomes exist; do not invent any.

## Product Principles

1. Guidance, not pressure: show what is left and suggest a pace. Never scold, never show red "behind" warnings, never auto-impose a schedule.
2. The candidate is in control: they set the target dates, pick the subjects, and choose what to do next; the app recommends.
3. Never lost: every screen answers "where am I, what's left, what could I do next", and every suggestion is one tap from the exact material.
4. Honest numbers: progress comes from what the candidate actually marked, and projections are labelled as projections.
5. Depth on demand: the full library stays available, but it is not the front door.
