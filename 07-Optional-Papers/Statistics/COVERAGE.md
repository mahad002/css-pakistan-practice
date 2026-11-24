# COVERAGE — Statistics pack

Checked 24 Nov 2026.

## Syllabus item → status

Full = notes with method, formulas and a worked example, plus worked problems in `04-Model-Answers.md`. Short = covered briefly or with one example only.

| Section | Item | Notes | Worked problems | Status |
|---|---|---|---|---|
| 1 Descriptive | Meaning, scope, descriptive vs inferential | 01 §1 | — (essay) | Full |
| | Data types and collection | 01 §1 | — (essay) | Full |
| | Presentation: tables, graphs, stem-and-leaf, box plot | 01 §2 | — | Short |
| | Central tendency (incl. GM, HM, quartiles) | 01 §3 | S1, S7, S9 | Full |
| | Dispersion, CV | 01 §4 | S5, S6, S8, S10 | Full |
| | Moments, skewness, kurtosis | 01 §5 | S2, S3, S4, S9 | Full |
| 2 Probability | Experiments, counting | 02 §1 | S17 | Full |
| | Laws, joint/marginal | 02 §2 | S15, S16 | Full |
| | Conditional probability, independence | 02 §2 | S15, S17 | Full |
| | Bayes, total probability | 02 §3 | S11–S14 | Full |
| | Random variables, distribution functions | 02 §4 | S24 | Full |
| | Expectation, variance, mgf, Chebyshev | 02 §4 | S18, S41 | Full |
| | Exchangeability (2026) | 02 §4 | — | Short |
| 3 Distributions | Binomial | 03 §2 | S18, S19, S24 | Full |
| | Poisson (limit, process) | 03 §3 | S19, S20 | Full |
| | Hypergeometric | 03 §4 | S17 | Full |
| | Normal | 03 §5 | S21–S23 | Full |
| | Normal approximations | 03 §6 | (notes example) | Short |
| 4 Regression | Simple regression, least squares | 04 §1 | S25, S26, S28 | Full |
| | Inference on β, prediction | 04 §1 | S25 | Full |
| | Multiple regression (3 variables) | 04 §3 | S29 | Full |
| | Correlation, r² | 04 §2 | S25, S27 | Full |
| | Partial and multiple correlation | 04 §4 | S29, S30 | Full |
| 5 Non-parametric | Nature, pros and cons | 05 §1 | — | Full |
| | Sign test | 05 §2 | S33 | Full |
| | Wilcoxon signed-rank | 05 §3 | S33 | Full |
| | Kolmogorov–Smirnov | 05 §7 | — | Short |
| | Runs test | 05 §6 | S31 | Full |
| | Mann–Whitney (and Kruskal–Wallis) | 05 §4–5 | S32, S34 | Full |
| 6 Sampling | Concepts, with/without replacement | 06 §1 | S35 | Full |
| | Sampling designs | 06 §2 | — (essay) | Full |
| | Sampling and non-sampling errors | 06 §3 | — (essay) | Full |
| | Sampling distribution of x̄, FPC | 06 §4 | S35–S39, S41 | Full |
| | CLT | 06 §5 | S39, S40 | Full |
| | Other sampling distributions | 06 §6 | S37, S38 | Full |
| 7 Inference | Point estimation, properties | 07 §1 | — (essay) | Full |
| | Interval estimation | 07 §2 | S48, S49 | Full |
| | Hypothesis-testing concepts, p-values | 07 §3 | S24(c) | Full |
| | Tests about means | 07 §4 | S42–S46 | Full |
| | Tests about proportions | 07 §5 | S47, S48 | Full |
| | Tests about variances | 07 §6 | S51 | Short |
| | Sample size | 07 §7 | S49 | Full |
| | χ² goodness of fit, contingency tables | 07 §8 | S50, S51 | Full |
| 8 DOE | Principles | 08 §1 | S52 | Full |
| | One-way ANOVA | 08 §2 | S54, S55 | Full |
| | Two-way (with interaction) | 08 §5 | S57 | Full |
| | CRD | 08 §2 | S53, S55 | Full |
| | RCBD, relative efficiency | 08 §3 | S52, S53, S56 | Full |
| | Latin square | 08 §6 | S58 | Full |
| | LSD | 08 §4 | S52, S56, S58 | Full |
| 9 Vital/official/index | Demography, census, vital registration | 09 §1 | — (essay) | Full |
| | Birth and fertility rates | 09 §3 | S60 | Full |
| | Death rates, standardisation | 09 §2 | S60 | Full |
| | GRR, NRR, sex ratio, vital index | 09 §3 | S59 | Full |
| | Official statistics in Pakistan | 09 §4 | — (essay) | Full |
| | National income | 09 §5 | — (essay) | Short |
| | Index numbers | 09 §6 | S61 | Full |
| Tables | z, t, χ², F and non-parametric tables | 10 | — | Full |

## Counts

| File | Count |
|---|---|
| Worked problems (`04`) | 61 (requirement ≥ 50) |
| MCQs (`05`) | 120, keys checked; distribution A 27, B 36, C 31, D 26 |
| Question bank (`06`) | 164 items: 146 past (2016–2026) + 18 likely |
| Notes | 9 section files + 1 tables file |

## How the numbers were checked

numpy, scipy and sympy are not installed, so I wrote the distribution functions in plain python3 (regularised incomplete beta and gamma functions; `statistics.NormalDist` for the normal) and verified them against standard table values (t₀.₀₂₅,₃ = 3.182, χ²₀.₀₅,₄ = 9.488, F₀.₀₅(3, 9) = 3.86, etc.). Every worked answer, table value and MCQ calculation was recomputed: exact fractions for all sampling enumerations; direct sums for regressions, ANOVA tables and vital rates; exact enumeration for the Wilcoxon, Mann–Whitney and runs critical values. Scripts (session scratchpad, temporary): `stdist.py`, `st_check.py`. Errors caught and fixed during checking: two sums of squares in S30, one standard error in S48.

## What I could not verify

- **FPSC originals.** fpsc.gov.pk refused connections (certificate error). The syllabus follows cssprep.com.pk's copy; papers 2016–2025 follow cssprep.com.pk transcriptions; 2026 was read from a PDF copy whose header says "Competitive Examination – 2026".
- **MCQ sections 2016–2024** do not survive in any source I found; only 2026 (complete) and 2025 (topics) are analysed.
- **Statistical tables in the hall:** not confirmed. [verify]
- **2023 Q7 two-way ANOVA layout** is ambiguous in the transcription; S57 states the interpretation used. [verify]
- **2021 Q8 and 2017 Q6 vital-statistics data** give implausibly high fertility rates as printed (units probably differ); solved as printed.
- **Printed errors handled by interpretation:** 2016 Q3(c) density sign; 2018 Q6(b) missing sample variance; 2024 Q8(b) "H" variety; 2018 Q6(a)(ii) direction of the alternative.
- Pakistan facts marked [verify] in notes 09 (PBS creation date and Act, Statistics Division's current status, census and sex-ratio figures), VU course code, calculator model rules.
- **Topper advice** specific to CSS Statistics: none found worth citing; the strategy in `00` is my own, from the paper analysis.

## What is missing / could be added later

- Worked solutions for a few past parts whose data were not transcribed in full (2016 fathers' and sons' heights; 2016 three-variance test; 2019 hay/rainfall partial correlation; 2022 Laspeyres/Paasche/Fisher data; 2018 and 2019 reproduction-rate tables). Each has a close worked relative in `04`.
- Box plots and stem-and-leaf displays are described, not drawn.
- Pre-2016 papers not analysed.
- Basic matrix algebra (appeared in two 2026 MCQs, outside the syllabus) is not covered.
