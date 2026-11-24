# CSS Pakistan Practice

A free, complete self-study course for Pakistan's **CSS Competitive Examination** (FPSC), built for a first attempt at CSS 2028.

**Open the website:** https://mahad002.github.io/css-pakistan-practice/

## What's inside

| | |
|---|---|
| **Notes for every paper** | The MPT screening test, all six compulsory papers (Essay, Précis & Composition, General Science & Ability, Current Affairs, Pakistan Affairs, Islamic Studies), and eight optional subjects across three ready-made combinations |
| **Syllabus checklist** | Every syllabus item with four states (Not started → Studied once → Revised → Mastered), saved in your browser, with export and import |
| **3,700+ MCQs** | Practice one at a time with explanations, or build timed exams, including full 200-question MPT mocks in the official split |
| **1,500+ written questions** | Past questions from 2016–2026 (paraphrased) plus likely questions for 2028, for outlines and timed answers |
| **Create an exam** | MPT mocks, Part I (20 MCQs in 30 minutes), full written papers (20 MCQs + choose 4 of 7), essay papers, or a custom mix |
| **Interview & later stages** | Medical board, psychological assessment, viva voce and group allocation, compiled from FPSC documents and officers' accounts |
| **Downloads** | FPSC rules, syllabus, notices, Annual Report 2023, past papers 2023–2026, the Constitution (to the 27th Amendment) and the Economic Survey 2025-26 overview |
| **Plan and tracking** | A dated week-by-week schedule, progress dashboard, error log, scorecards and a mock-test guide |

## Optional-subject combinations

| Recommended | Maths strength | English strength |
|---|---|---|
| Political Science (200) | Political Science (200) | Political Science (200) |
| Public Administration | Applied Mathematics | Public Administration |
| Gender Studies | Statistics | English Literature |
| Criminology | Gender Studies | Criminology |
| Journalism & Mass Communication | Criminology | Journalism & Mass Communication |

The evidence behind each one is in [`04-Research/Optional-Subjects-Research.md`](04-Research/Optional-Subjects-Research.md) and [`07-Optional-Papers/00-Combinations.md`](07-Optional-Papers/00-Combinations.md).

## Folder layout

```
00-START-HERE.md           where to begin
01-Plan/                   plan, exam rules, schedule, optional subjects, resources, dashboard, logistics
02-Practice-and-Tracking/  error log, weekly review, scorecards, mock guide, your own work
03-Past-Papers/            where to get past papers and how to file them
04-Research/               verified FPSC facts and optional-subject scoring data
05-MPT-Screening-Test/     screening-test pack (2,550 MCQs, 4 full mocks)
06-Compulsory-Papers/      six compulsory packs
07-Optional-Papers/        eight optional packs
08-Interview-and-Stages/   medical, psychological assessment, viva, allocation
09-Official-Documents/     downloaded official PDFs + catalogue
index.html, site/          the website (no build step needed to view it)
tools/build.py             rebuilds site/data/*.json from the markdown
```

## Run it on your computer

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000. After editing any markdown file, rebuild the website data:

```bash
python3 tools/build.py
```

## Accuracy and sources

- Exam rules come from FPSC's own documents (CE Rules 2019, the MPT amendment, the syllabus and the CSS 2027 notices). See `04-Research/Official-Facts.md`.
- Facts that couldn't be verified are marked `[verify]`. Current affairs are dated "as of Nov 2026" and need updating before the exam.
- Past-paper questions are paraphrased, with links to the sources.
- Exam dates beyond the CSS 2027 cycle are projections. Always confirm on [fpsc.gov.pk](https://www.fpsc.gov.pk).
- Downloaded PDFs are public documents from official government websites. No copyrighted books are stored.

This is an independent study resource, not affiliated with FPSC.
