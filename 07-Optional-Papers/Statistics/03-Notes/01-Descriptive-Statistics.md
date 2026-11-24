# 01 — Descriptive Statistics

Examined in all 11 papers (2016–2026), usually Q2 of Section A. **Moments, skewness and kurtosis** appeared in eight papers. Expect one theory part ("define statistics / frequency distribution / measures of central tendency") and one computation (grouped data, moments, CV or skewness).

---

## 1. Statistics: meaning, scope, limitations

**Definition.** Statistics is the science of collecting, organising, summarising, analysing and interpreting numerical data in order to draw conclusions and make decisions under uncertainty. (Plural sense: the numerical facts themselves — e.g. Pakistan's population of 241.5 million in the 2023 census.)

**Descriptive vs inferential.** Descriptive statistics summarise the data in hand (tables, graphs, averages, spread). Inferential statistics use a sample to draw conclusions about a population, with a measured risk of error (estimation, hypothesis tests). Example: the average household income of 5,000 sampled households is descriptive; using it to estimate the national average with a 95% confidence interval is inferential.

**Importance (with examples).** Planning (the Planning Commission uses census and Labour Force Survey data); economics (CPI inflation from PBS drives State Bank interest-rate decisions); business (quality control, market research); medicine (clinical trials); agriculture (crop-yield experiments at research institutes); government (budget, NFC award shares based on population). Statistics extends scientific knowledge because it turns observation into tested evidence: hypotheses are confirmed or rejected with a known error rate (2025 question).

**Limitations.** Deals with aggregates, not individuals; results true on average, not in every case; can be misused or misread; needs homogeneous, reliable data.

**Variables and data.** Qualitative (nominal: gender; ordinal: Likert scale) vs quantitative (discrete: number of children; continuous: weight). Primary data (collected first-hand: survey, experiment, interview, observation) vs secondary (published: PBS, State Bank, World Bank).

**Methods of collecting data (2024).**

| Method | Suits | Accuracy | Cost/time |
|---|---|---|---|
| Direct personal investigation | small field | high | high per unit |
| Indirect oral investigation (witnesses) | sensitive topics | medium | medium |
| Questionnaire by post/online | large, literate field | low response | low |
| Enumerators with schedules | very large field (census, surveys) | high if trained | high total, low per unit |
| Local correspondents | continuous reports (prices, crops) | medium | low |
| Registration (births, deaths) | vital statistics | depends on coverage | ongoing |

## 2. Presentation of data

**Frequency distribution — steps (2019, 2023):** (1) find the range; (2) choose the number of classes (5–20; Sturges k ≈ 1 + 3.322 log₁₀ n); (3) class width h ≈ range/k, rounded up; (4) write class limits so classes are exhaustive and non-overlapping; (5) tally; (6) count frequencies; (7) add class boundaries, mid-points, cumulative and relative frequencies.
Desirable qualities: classes of equal width, no gaps, no open ends if possible, mid-points convenient for calculation.

**Graphs (describe in words in the exam):** histogram (bars touching, area ∝ frequency); frequency polygon (join mid-points); ogive (cumulative frequency against upper boundaries — used to read the median and quartiles); bar and pie charts (qualitative data).
**Stem-and-leaf plot:** each value split into a stem (leading digits) and leaf (last digit); keeps the raw data while showing shape.
**Box plot (five-number summary):** box from Q1 to Q3 with a line at the median, whiskers to the smallest and largest non-outlying values; points beyond Q1 − 1.5 IQR or Q3 + 1.5 IQR are outliers. A median nearer Q1 indicates positive skew.

## 3. Measures of central tendency

| Measure | Ungrouped | Grouped |
|---|---|---|
| Arithmetic mean | x̄ = Σx/n | x̄ = Σfx/Σf (x = mid-point); coding u = (x − A)/h: x̄ = A + hΣfu/Σf |
| Weighted mean | Σwx/Σw | — |
| Median | middle value of ordered data | l + (h/f)(n/2 − c) |
| Quartiles | Q₁ at (n + 1)/4-th value, etc. | Q_k = l + (h/f)(kn/4 − c) |
| Mode | most frequent | l + h(f₁ − f₀)/[(f₁ − f₀) + (f₁ − f₂)] |
| Geometric mean | (Πx)^{1/n} = antilog(Σlog x/n) | antilog(Σf log x/Σf) |
| Harmonic mean | n/Σ(1/x) | Σf/Σ(f/x) |

(l = lower class boundary, h = width, f = class frequency, c = cumulative frequency before the class.)

**Relations.** For positive data AM ≥ GM ≥ HM; for two values GM² = AM × HM. Empirical relation for moderately skewed data: **Mode ≈ 3 Median − 2 Mean**.
**Properties of the mean:** Σ(x − x̄) = 0; Σ(x − a)² is least when a = x̄. The median minimises Σ|x − a| (2025 MCQ).
**When to use:** mean for symmetric data; median for skewed data or open-ended classes (incomes); mode for qualitative data; GM for rates of growth and index numbers; HM for averaging speeds or rates over equal distances.

**Worked examples.**
- Mean 40.5, median 36 ⇒ mode ≈ 3(36) − 2(40.5) = **27** (2025).
- Up at 30 mph, back at 60 mph: average speed = HM = 2/(1/30 + 1/60) = **40 mph**, not 45 (2019).
- Rises of 10%, 20%, 25%: equivalent annual rise = (1.10 × 1.20 × 1.25)^{1/3} − 1 = 1.65^{1/3} − 1 = **18.17%** (2021).
- Series 1, 2, 4, …, 2ⁿ (n + 1 terms): AM = (2^{n+1} − 1)/(n + 1); GM = 2^{n/2}; HM = (n + 1)2ⁿ/(2^{n+1} − 1) (2016). Check: AM × HM = 2ⁿ = GM².

**Grouped quartiles (2023).** Container weights, classes 18–26, …, 72–80 (boundaries 17.5, 26.5, …; h = 9), f = 13, 20, 39, 40, 25, 6, 12; n = 155.
Q₁: n/4 = 38.75 lies in 35.5–44.5 (c = 33, f = 39): Q₁ = 35.5 + 9(5.75/39) = **36.83**.
Median: 77.5 lies in 44.5–53.5 (c = 72, f = 40): Md = 44.5 + 9(5.5/40) = **45.74**.
Q₃: 116.25 lies in 53.5–62.5 (c = 112, f = 25): Q₃ = 53.5 + 9(4.25/25) = **55.03**.
Bowley skewness = (Q₃ + Q₁ − 2Md)/(Q₃ − Q₁) = 0.38/18.20 = **0.02** ⇒ almost symmetric (in its middle half).

## 4. Measures of dispersion

| Measure | Formula | Relative form |
|---|---|---|
| Range | max − min | (max − min)/(max + min) |
| Quartile deviation | (Q₃ − Q₁)/2 | (Q₃ − Q₁)/(Q₃ + Q₁) |
| Mean deviation | Σf\|x − x̄\|/n (or about the median) | MD/x̄ |
| Variance | σ² = Σf(x − x̄)²/n = Σfx²/n − x̄² | — |
| Standard deviation | σ = √variance | **CV = 100σ/x̄ %** |

Sample variance s² = Σ(x − x̄)²/(n − 1) is the unbiased estimator of σ². CSS descriptive questions usually use divisor n (Pakistani textbooks); in inference, use n − 1. Say which you use.
**Coded data:** if u = (x − A)/h, then σ_x = hσ_u. Change of origin does not change σ; change of scale multiplies it by |h| (2017).
**Combined mean and SD** of two groups: x̄_c = (n₁x̄₁ + n₂x̄₂)/(n₁ + n₂); σ_c² = [n₁(σ₁² + d₁²) + n₂(σ₂² + d₂²)]/(n₁ + n₂), dᵢ = x̄ᵢ − x̄_c.

**Worked example (correcting an error, 2018).** n = 20, x̄ = 75, σ = 2.5, but 68 was recorded as 86.
Σx = 1500 → 1500 − 86 + 68 = 1482 ⇒ corrected mean **74.1**.
Σx² = n(σ² + x̄²) = 20(6.25 + 5625) = 112,625 → 112,625 − 7396 + 4624 = 109,853. Corrected σ² = 109,853/20 − 74.1² = 5492.65 − 5490.81 = 1.84 ⇒ **σ = 1.356**.

**Worked example (comparing variation, 2018).** Incomes (Rs '000) in classes 35–49, …, 110–124 (mid-points 42, 57, …, 117). Bank A f = 10, 15, 35, 20, 10, 10: mean 77.25, σ = 20.83, **CV = 26.96%**. Bank B f = 15, 20, 40, 15, 7, 3: mean 70.20, σ = 18.28, **CV = 26.04%**. Bank B's incomes are slightly less variable (and lower on average).

## 5. Moments, skewness and kurtosis

Raw moments about A: μ′ᵣ = Σf(x − A)ʳ/n. Central moments μᵣ = Σf(x − x̄)ʳ/n.
**Conversion (memorise):**
μ₂ = μ′₂ − μ′₁²
μ₃ = μ′₃ − 3μ′₂μ′₁ + 2μ′₁³
μ₄ = μ′₄ − 4μ′₃μ′₁ + 6μ′₂μ′₁² − 3μ′₁⁴
Mean = A + μ′₁. Moments are unchanged by change of origin; μᵣ scales by hʳ.

**Skewness** (lack of symmetry). Positive: long right tail, mean > median > mode. Negative: long left tail.
- Karl Pearson: Sk = (mean − mode)/σ ≈ 3(mean − median)/σ.
- Bowley (quartile): Sk = (Q₃ + Q₁ − 2Md)/(Q₃ − Q₁), between −1 and 1.
- Moment: β₁ = μ₃²/μ₂³; γ₁ = μ₃/μ₂^{3/2} (sign shows direction).
**Kurtosis** (peakedness/tail weight): β₂ = μ₄/μ₂²; γ₂ = β₂ − 3. β₂ = 3 mesokurtic (normal); > 3 leptokurtic; < 3 platykurtic.

**Worked example (2026).** Moments about the origin: −0.55, 4.46, −0.43, 68.52.
μ₂ = 4.46 − 0.3025 = 4.1575. μ₃ = −0.43 − 3(4.46)(−0.55) + 2(−0.55)³ = −0.43 + 7.359 − 0.33275 = 6.59625.
μ₄ = 68.52 − 4(−0.43)(−0.55) + 6(4.46)(0.3025) − 3(0.0915) = 68.52 − 0.946 + 8.0949 − 0.2745 = 75.3944.
β₁ = 6.59625²/4.1575³ = **0.605**; γ₁ = **+0.778** (positively skewed). β₂ = 75.3944/4.1575² = **4.36** > 3 ⇒ **leptokurtic** (more peaked, heavier tails than normal).

**Worked example (2023).** Moments about 2 are 1, 16, −40 ⇒ mean = 2 + 1 = **3**; μ₂ = 16 − 1 = **15**; μ₃ = −40 − 3(16)(1) + 2(1) = **−86**. About 0: μ′₁ = 3; μ′₂ = μ₂ + x̄² = 24; μ′₃ = μ₃ + 3x̄μ₂ + x̄³ = −86 + 135 + 27 = **76**.

**Worked example (2016).** Symmetric mesokurtic distribution with μ₄ = 243: β₂ = 3 ⇒ μ₂² = 81 ⇒ μ₂ = 9 ⇒ **σ = 3**.

**Worked example (2026 quartile/Pearson).** (i) Bowley Sk = 0.6, Q₁ + Q₃ = 100, median 38: (100 − 76)/(Q₃ − Q₁) = 0.6 ⇒ Q₃ − Q₁ = 40 ⇒ **Q₁ = 30, Q₃ = 70**. (ii) Pearson Sk = 0.32, σ = 6.5, mean 29.6: mode = 29.6 − 0.32(6.5) = **27.52**; median = mean − (mean − mode)/3 = **28.91**.

**Quick skewness judgements (2018, 2022).** Median 60, quartiles 40 and 80 ⇒ Q₃ − Md = Md − Q₁ ⇒ symmetric (in the middle). Mean = mode = 140 ⇒ symmetric. Mean 39,000 < mode 45,000 ⇒ negative skew. Mean 39,000 > median 38,500 ⇒ positive skew.

---

## Common mistakes
- Using class limits instead of class boundaries in grouped formulas.
- Mixing divisors n and n − 1 without saying so.
- Forgetting that the mode formula needs the modal class (largest frequency) and equal widths.
- Reporting β₁ without the sign of μ₃ (β₁ is always ≥ 0, so it hides direction).

## Exam checklist
- Grouped mean, median, quartiles, mode, SD, CV in one table.
- Moment conversions and β₁, β₂ with interpretation.
- All three skewness coefficients; empirical mode relation.
- Short essays: define statistics; descriptive vs inferential; frequency-distribution steps; qualities of a good average.
