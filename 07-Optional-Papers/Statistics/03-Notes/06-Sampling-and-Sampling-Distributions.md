# 06 — Sampling and Sampling Distributions

Examined in 10 of 11 papers. **The single most repeated question in CSS Statistics** is "draw all possible samples of size n from this small population, form the sampling distribution of x̄, and verify E(x̄) = μ and Var(x̄) = (σ²/n)(N − n)/(N − 1)" — asked in 2016 (proportion version), 2019, 2020, 2021, 2022, 2023, 2024 and 2025. Learn the layout.

---

## 1. Basic concepts

- **Population:** all units of interest. **Target population** = the one you want to study; **sampled population** = the one you can actually reach (2018).
- **Sample:** a part of the population. **Sampling frame:** the list from which the sample is drawn (e.g. NADRA's database, electoral rolls, PBS's census enumeration blocks).
- **Parameter** (μ, σ, P) describes a population; **statistic** (x̄, s, p̂) describes a sample.
- **Why sample (2016):** lower cost, faster, feasible when testing destroys units, can be more accurate (better-trained staff), the only option for infinite populations.
- **With replacement:** a unit can be chosen again; Nⁿ ordered samples; draws independent. **Without replacement:** ᴺCₙ samples; draws dependent; the finite population correction applies.
- **Sample distribution vs sampling distribution (2018):** the *sample* distribution is the distribution of values in one sample; the *sampling* distribution is the distribution of a statistic over all possible samples.

## 2. Sampling designs

**Probability sampling** (every unit has a known, non-zero chance):

| Design | How | When useful |
|---|---|---|
| Simple random (SRS) | lottery / random numbers | homogeneous population with a frame |
| Stratified random | divide into homogeneous strata (province, urban/rural, income group); SRS within each | heterogeneous population; gives precision and estimates for each stratum (e.g. PBS Labour Force Survey stratifies by province and urban/rural) |
| Systematic | every k-th unit after a random start (k = N/n) | ordered lists; easy in the field |
| Cluster | randomly select whole groups (villages, schools) and study all units in them | no list of individuals; scattered population; cheaper but less precise |
| Multistage | sample at successive stages: districts → villages → households | large national surveys (e.g. PSLM / HIES) |
| Multiphase | the *same* units are sampled in phases: a large first-phase sample collects basic data, a sub-sample collects detailed data | when auxiliary information is cheap and detailed data expensive |

**Multistage vs multiphase (2021):** multistage samples *different kinds of units* at each stage (district, then village, then household); multiphase samples the *same kind of unit* repeatedly (households, then a sub-sample of those households).

**Non-probability sampling:** convenience, judgement (purposive), quota, snowball. Cheaper and quicker but selection probabilities are unknown, so sampling error cannot be measured and results cannot be generalised with stated confidence.

**Stratified sampling — when beneficial (2020):** when the population is made of distinct groups that differ on the variable, and are internally similar. Example: estimating average household income in Punjab by sampling separately from urban and rural strata. Allocation: proportional (nₕ ∝ Nₕ) or Neyman (nₕ ∝ Nₕσₕ).

## 3. Sampling and non-sampling errors (2017, 2023)

| | Sampling error | Non-sampling error |
|---|---|---|
| Cause | studying a sample instead of the whole population | mistakes in collection and processing |
| Examples | x̄ differs from μ by chance | non-response, wrong frame, interviewer bias, false answers, coding/data-entry errors |
| Occurs in a census? | no | yes |
| Control | larger n, better design (stratification), measured by the standard error | trained enumerators, pre-tested questionnaires, call-backs for non-response, checks and editing |

## 4. Sampling distribution of the mean

Results (with replacement or infinite population): **E(x̄) = μ**, **Var(x̄) = σ²/n**.
Without replacement from a finite population of N: E(x̄) = μ, **Var(x̄) = (σ²/n)·(N − n)/(N − 1)**.
Standard error SE(x̄) = σ_x̄.
**Finite population correction (FPC) (2025):** the factor (N − n)/(N − 1) (or √ of it for the SE). It is used when sampling without replacement from a finite population. It can be ignored when the sampling fraction n/N is small (rule: n/N < 0.05), because the factor is then close to 1.

**Properties of the sampling distribution of x̄ (2019):** centred at μ; spread σ/√n shrinks as n grows; normal if the population is normal; approximately normal for large n (CLT).

**Enumeration layout (use every time):**
1. Find μ and σ² of the population (divisor N).
2. List all samples (ᴺCₙ without replacement, Nⁿ with replacement) and each x̄.
3. Make a frequency table of x̄ values: x̄, f, f·x̄, f·x̄².
4. E(x̄) = Σf x̄/Σf; Var(x̄) = Σf x̄²/Σf − [E(x̄)]².
5. Compare with μ and the formula.

**Worked example (2025).** Population 2, 4, 8, 8, 10, 10 (N = 6), n = 2 without replacement: ⁶C₂ = **15** samples. μ = 7, σ² = 9.
Distribution of x̄:

| x̄ | 3 | 5 | 6 | 7 | 8 | 9 | 10 |
|---|---|---|---|---|---|---|---|
| f | 1 | 2 | 4 | 2 | 1 | 4 | 1 |

E(x̄) = 105/15 = **7 = μ** ✓. Var(x̄) = **3.6**; formula (9/2)(4/5) = 3.6 ✓.

**Worked example (2022).** Population 0, 1, 5, 6, 8, 11, n = 3 without replacement: 20 samples. μ = 31/6 = 5.167, σ² = 521/36 = 14.472. E(x̄) = 5.167 ✓, Var(x̄) = 521/180 = **2.894** = (14.472/3)(3/5) ✓.

**Worked example (2019, with replacement).** Population 2, 4, 6, n = 4 with replacement: 3⁴ = 81 samples. μ = 4, σ² = 8/3. E(x̄) = 4 ✓, Var(x̄) = 2/3 = σ²/4 ✓.

**Difference of two means (2023).** Samples of size 2 with replacement from {4, 6, 8} and from {1, 2, 3}: 9 × 9 = 81 differences. μ₁ − μ₂ = 6 − 2 = 4; σ₁²/n₁ + σ₂²/n₂ = (8/3)/2 + (2/3)/2 = 5/3. The enumeration gives mean **4** and variance **5/3** ✓.

**Sampling distribution of the variance (2021).** Population 1, 2, 3, 4, 5, samples of 2 without replacement: the mean of the 10 sample variances s² (divisor n − 1) is **2.5** = S² = Σ(x − μ)²/(N − 1), while σ² (divisor N) = 2. So s² estimates S² unbiasedly in finite-population sampling without replacement.

## 5. Central limit theorem

If X₁, …, Xₙ are independent with mean μ and finite variance σ², then for large n (≥ 30 as a rule) x̄ is approximately N(μ, σ²/n), whatever the population shape.

**Worked example (2024).** n = 100, μ = 20, σ = 5, shape unknown. (i) x̄ ≈ N(20, 0.5²) by the CLT. (ii) P(x̄ > 20.75) = P(Z > 1.5) = **0.0668**.

**Worked example (2018).** Heights N(1.14, 0.25²); 50 samples of n = 100 each. SE = 0.025.
P(x̄ > 1.16) = P(Z > 0.8) = 0.2119 ⇒ about **11** of the 50 sample means. P(1.13 < x̄ < 1.18) = P(−0.4 < Z < 1.6) = 0.6006 ⇒ about **30**.

**Worked example (2023).** Population 1, 1, 1, 3, 4, 5, 6, 6, 6, 7: μ = 4, σ² = 5.
(i) n = 36 with replacement: SE = √(5/36) = 0.3727; P(3.26 < x̄ < 4.74) = P(|Z| < 1.986) = **0.953**.
(ii) n = 4 without replacement: E(x̄) = 4, SD(x̄) = √[(5/4)(6/9)] = **0.913**. By Chebyshev, at least ¾ of sample means lie within 2 SD: **(2.17, 5.83)**.

## 6. Other sampling distributions

- **Proportion:** E(p̂) = P, Var(p̂) = PQ/n (× (N − n)/(N − 1) without replacement). Approximately normal for large n.
- **Difference of means:** E(x̄₁ − x̄₂) = μ₁ − μ₂, Var = σ₁²/n₁ + σ₂²/n₂.
- **Difference of proportions:** Var = P₁Q₁/n₁ + P₂Q₂/n₂.
- **Variance (normal population):** (n − 1)s²/σ² ~ χ²(n − 1).
- **t:** (x̄ − μ)/(s/√n) ~ t(n − 1) for a normal population.
- **F:** (s₁²/σ₁²)/(s₂²/σ₂²) ~ F(n₁ − 1, n₂ − 1).
- Sum of frequencies of a sampling distribution = number of possible samples (2025 MCQ).

---

## Exam checklist
- The enumeration layout, done neatly, with both verifications.
- FPC: what, when, when to ignore.
- Probability vs non-probability designs; stratified, cluster, systematic, multistage vs multiphase.
- Sampling vs non-sampling errors and their control.
- CLT statement and one numerical use.
