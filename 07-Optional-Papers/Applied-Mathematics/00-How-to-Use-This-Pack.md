# How to Use This Pack — Applied Mathematics (CSS, 100 marks, Group II)

Checked 24 Nov 2026. Anything I could not confirm is marked **[verify]**.

This subject is part of the **maths-strength combination** (see `../00-Combinations.md`). Take it only if you pass the **gate test**: score 70%+ on the timed CSS 2024, 2025 and 2026 Applied Mathematics papers before 30 Apr 2027. The study plan below builds that test in.

## 1. The paper at a glance

| Item | Detail |
|---|---|
| Subject code / group | 18, Group II (pair it with Statistics, code 20, to make 200 marks) |
| Marks / time | 100 marks, 3 hours, one paper |
| Structure | **8 questions, attempt any 5**, all equal (20 marks each, usually two 10-mark parts; some years split 8 + 6 + 6) |
| **MCQs** | **None.** FPSC sets 20 MCQs in every optional paper *except* Pure Mathematics and Applied Mathematics (syllabus Note; CE Rules Appendix-I para 3 — see `../../04-Research/Official-Facts.md`). The MCQ bank in this pack is for concept checks only |
| Calculator | **Allowed** (CE Rules 2019, Rule 16(22); printed on every paper 2016–2026 as "Use of Calculator is allowed") |
| Sections | None — any 5 of the 8 |
| Other printed rules | Attempt all parts of a question in one place; extra attempts are not marked; no blank pages |
| Pass mark | 33% in each optional subject; 50% aggregate overall (Rule 12) |

Sources: the 2024 and 2026 papers (headers and instructions read from the PDF text), cssprep.com.pk transcriptions for 2016–2025, FPSC rules in `../../04-Research/Official-Facts.md`.

## 2. Scoring data (from `../../04-Research/Optional-Subjects-Research.md`)

| Year | Appeared | Failed (<33%) | Scored 60%+ | Allocated | Mean / median / s.d. | Source |
|---|---|---|---|---|---|---|
| CSS 2023 | 284 | 149 (52%) | 41 (14%) | 6 | — | FPSC Annual Report 2023, Table 49 (hard data) |
| CSS 2025 | 186 | — | — | 3 (4 written qualifiers) | 29% / 28.5% / 21 | cssnorthstar.pk (third party, said to be FPSC data) |

**What this means.** The spread is huge. Half the candidates fail, yet one in seven scored 60%+ in 2023 — far above Political Science (0.2%) and Computer Science (0.5%), though below the easy-scoring subjects such as Gender Studies (55%) and Economics (30%). Statistics, the partner subject, had 2.8%. Marks are earned or lost on correct working, not on examiner taste. A well-prepared mathematician can expect **65–85**; an under-prepared one can score under 33. The standard deviation (21 points) is larger than in essay subjects (12–17).

## 3. The answer template that scores

FPSC does not publish a marking scheme. This layout makes every mark visible to the examiner:

1. **Write the question number and part clearly** (Q. No. 5(a)). Do all parts of a question together.
2. **Name the method in one line** ("Using variation of parameters", "By the Gauss–Seidel method").
3. **State the formula or theorem** before using it (e.g. "Green's theorem: ∮M dx + N dy = ∬(N_x − M_y) dA").
4. **Working in numbered steps**, one idea per line. For numerical methods, a **table** of iterations with column headings.
5. **Box or underline the final answer**, with units where relevant.
6. **One-line check**: substitute back, compare with an exact value, or state convergence. This also catches your own slips.
7. If the question says "prove", end with "Hence proved" or ∎. If it says "discuss" or "compare", add two or three sentences of words.

Typical split of a 10-mark part (my estimate from university marking practice, not FPSC): method/formula 2–3, working 4–5, answer 1–2, check/comment up to 1.

## 4. Time plan in the hall

| Phase | Time |
|---|---|
| Read all 8 questions, tick the 5 you will attempt | 10 min |
| Five questions × 32 min (≈ 16 min per 10-mark part) | 160 min |
| Final check of arithmetic and boxed answers | 10 min |

Order: do your **strongest** question first (usually Fourier + PDE or a numerical question), then the other numerical one, then ODEs, then vector calculus, and mechanics only if needed. If a part stalls for 5 minutes, leave space, move on, and return.

**Safe five-question choice:** Fourier/PDE + two numerical + one ODE + one vector calculus (or a second ODE). See `02-Past-Paper-Analysis.md` for why.

## 5. Common mistakes (and the fix)

| Mistake | Fix |
|---|---|
| Calculator in degrees for trig in Newton, RK or Fourier | Set radians at the start; write "(radians)" in your first line |
| Variation of parameters without dividing by the leading coefficient (e.g. 3y″ …) | Always write the standard form first |
| Forgetting resonance (trial already in the CF) | Compare trial terms with the CF before substituting |
| Fourier series on the wrong period, or writing a₀ instead of a₀/2 | Write "period 2L = …, L = …" first |
| Simpson's 1/3 rule with an odd number of strips | Check n even (1/3) or a multiple of 3 (3/8) |
| Gauss–Seidel on a non-dominant system (it diverges) | Reorder rows so the largest coefficients are on the diagonal; say so |
| Wrong sign/orientation in Green's or Stokes' theorem | Draw the curve with an arrow (anticlockwise) |
| Missing friction or reaction in statics | Always draw and label a force diagram |
| Bare answers | Show the method; most marks are for working |
| Spending 50 minutes on one question | Cap each question at about 35 minutes |

## 6. What is in this pack

| File | Use |
|---|---|
| `01-Syllabus-Checklist.md` | Official syllabus as a tick-list with frequency |
| `02-Past-Paper-Analysis.md` | Every question 2016–2026 by year, topic counts, predictions |
| `03-Notes/` (6 files) | Method, formulas and a worked example for every syllabus item |
| `04-Model-Answers.md` | **94 fully worked exam-style problems** (most from real CSS questions), all recomputed |
| `05-MCQ-Bank.md` | 120 concept-check MCQs (the real paper has none) |
| `06-Question-Bank.md` | Past and likely questions grouped by topic, cross-referenced to the worked problems |
| `07-Quick-Revision.md` | Formula sheet, one block per section |
| `08-Resources.md` | Free and paid books and courses |
| `COVERAGE.md` | What is complete, what is not verified |

## 7. Study plan: 4 hours a week, Feb 2027 → Jan 2028

About 190 hours in total. Each week: 3 hours of problems + 1 hour of review (redo yesterday's mistakes, read Quick Revision for that section).

| Month | Hours | Focus | Output by month end |
|---|---|---|---|
| **Feb 2027** | 16 | Numerical methods (roots, Gauss–Seidel, trapezoidal/Simpson, Euler/RK) — notes 06; P70–P94 | Can do any numerical part in 17 min |
| **Mar 2027** | 16 | ODEs (first order, constant coefficients, VoP) — notes 04, P33–P52; Fourier + heat/wave — notes 05, P57–P68 | Core five-question topics refreshed |
| **Apr 2027** | 16 | **Gate test.** Sit CSS 2024, 2025, 2026 papers timed (3 × 3 h), mark them strictly against `04-Model-Answers.md` (3 h), fix gaps (4 h). **Decide by 30 Apr**: ≥ 70% average → keep Applied Maths; < 60% → switch to the recommended combination | Decision recorded in `../../01-Plan/` |
| May | 16 | Numerical methods in depth: interpolation, differentiation, Gauss quadrature, fixed point, RK for systems; 2016–2019 numerical questions | All section VI items ticked |
| Jun | 16 | ODE in depth: Cauchy–Euler, exact/IF, Bernoulli/Riccati, series, Frobenius, Bessel, Legendre (P53–P56) | All section IV items ticked |
| Jul | 16 | Fourier & PDE in depth: half-range, Parseval, Laplace, D'Alembert, classification and canonical forms, Lagrange, transformation (P59–P69) | All section V items ticked |
| Aug | 16 | Vector calculus: identities and proofs, flux, Green/Stokes/Gauss verifications (P1–P12) | Section I ticked |
| Sep | 16 | Dynamics: rectilinear, SHM, projectiles, polar components, central orbits (P22–P32) | Section III ticked |
| Oct | 16 | Statics (P13–P21) + full timed papers 2016 and 2017 | Section II ticked; 2 mocks |
| Nov | 16 | Full timed papers 2018–2021 (one per week, 3 h + 1 h marking) | 4 mocks; error log |
| Dec | 16 | Full timed papers 2022, 2023; drill the weakest two topics from the error log | 2 mocks |
| Jan 2028 | 12–16 | Re-sit 2025 and 2026 papers; read `07-Quick-Revision.md` daily in the last week; MCQ bank as warm-up | Exam-ready |

Rules for the plan:
- **Never read without solving.** Every study hour should produce written solutions.
- Keep an **error log** (date, problem, what went wrong, the fix). Review it each Sunday.
- From November, every session is timed.
- If the written exam date moves, keep the order and compress May–Oct.
