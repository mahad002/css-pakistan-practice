# 07 — Statistical Inference (Estimation and Hypothesis Testing)

Examined every year, often twice. Typical parts: **Type I/II errors and hypothesis concepts** (2020, 2021, 2023, 2025, 2026), **two-sample tests of means** (2017, 2020, 2023, 2024, 2026) and **proportions** (2016, 2018, 2021, 2022), **confidence intervals** (2018, 2021, 2022, 2024), χ² tests (2018, 2021). 2026 added critique-style theory (p-values, the role of probability).

All critical values used here are in `10-Statistical-Tables.md`.

---

## 1. Point estimation

An **estimator** is a rule (statistic) for estimating a parameter; an **estimate** is its value in a given sample (2025 MCQ: x̄ is a statistic/estimator; its numerical value an estimate).
**Properties of a good estimator (2018, 2021, 2023):**
- **Unbiased:** E(θ̂) = θ. x̄ for μ; s² (divisor n − 1) for σ². Example: the average of many survey estimates centres on the true literacy rate.
- **Consistent:** θ̂ → θ in probability as n → ∞ (sufficient: bias → 0 and variance → 0). Example: x̄ from larger samples gets closer to μ.
- **Efficient:** smallest variance among unbiased estimators. For a normal population, Var(x̄) = σ²/n < Var(median) ≈ πσ²/(2n), so the mean is more efficient. The Cramér–Rao bound is the minimum possible variance; a consistent estimator need not attain it (2026 MCQ).
- **Sufficient:** uses all the information in the sample about θ.
Methods: method of moments, maximum likelihood, least squares.

## 2. Interval estimation

A 100(1 − α)% confidence interval contains the parameter in 100(1 − α)% of repeated samples.

| Parameter | Condition | Interval |
|---|---|---|
| μ | σ known or n large | x̄ ± z_{α/2}σ/√n |
| μ | σ unknown, small n, normal population | x̄ ± t_{α/2, n−1}s/√n |
| μ₁ − μ₂ | large samples | (x̄₁ − x̄₂) ± z√(s₁²/n₁ + s₂²/n₂) |
| μ₁ − μ₂ | small, normal, equal variances | (x̄₁ − x̄₂) ± t_{n₁+n₂−2}·s_p√(1/n₁ + 1/n₂), s_p² = [(n₁ − 1)s₁² + (n₂ − 1)s₂²]/(n₁ + n₂ − 2) |
| μ_D (paired) | normal differences | d̄ ± t_{n−1}s_d/√n |
| P | large n | p̂ ± z√(p̂q̂/n) |
| P₁ − P₂ | large n | (p̂₁ − p̂₂) ± z√(p̂₁q̂₁/n₁ + p̂₂q̂₂/n₂) |
| σ² | normal | [(n − 1)s²/χ²_{α/2}, (n − 1)s²/χ²_{1−α/2}] |

**Small-sample CI for a normal mean (2026, explain):** (1) compute x̄ and s; (2) since σ is unknown and n is small, use t with n − 1 df (wider than z to allow for the extra uncertainty in s); (3) find t_{α/2, n−1}; (4) x̄ ± t s/√n; (5) interpret. Example: n = 10, x̄ = 50, s = 4: 50 ± 2.262(4/√10) = **(47.14, 52.86)**.

**Worked example (2024, confidence coefficient).** n = 50, σ = 21, limits 866.11 and 875.89. Half-width 4.89 = z(21/√50) = 2.970z ⇒ z = 1.646 ⇒ confidence ≈ **90%** (x̄ = 871).

**Worked example (2021).** Approve: 300/400 dormitory vs 200/300 others. p̂₁ − p̂₂ = 0.0833; SE = √(0.75 × 0.25/400 + 0.667 × 0.333/300) = 0.0348. 95% CI: **(0.015, 0.151)** — excludes 0, so dormitory students approve more.

**Worked example (2022).** 62/100 women vs 69/150 men. Difference 0.16; SE 0.0633; 99% CI: 0.16 ± 2.576(0.0633) = **(−0.003, 0.323)** — just includes 0.

## 3. Hypothesis testing — concepts

- **Statistical hypothesis:** a claim about a population parameter or distribution. **Null H₀** (no effect, equality, status quo) vs **alternative H₁** (what we want evidence for).
- **Simple** hypothesis specifies the distribution completely (μ = 50 with σ known); **composite** does not (μ > 50) (2016, 2021, 2023).
- **Test statistic:** a statistic whose distribution under H₀ is known (z, t, χ², F).
- **Level of significance α:** P(reject H₀ | H₀ true), fixed in advance (5%, 1%).
- **Critical (rejection) region:** values of the statistic that lead to rejection; the rest is the acceptance (non-critical) region.
- **Type I error:** rejecting a true H₀ (probability α). **Type II error:** not rejecting a false H₀ (probability β). **Power** = 1 − β.
 Examples: a court convicting an innocent person (Type I) or acquitting a guilty one (Type II); a medical test showing disease in a healthy person (Type I) or missing it in a sick one (Type II).
- **Trade-off (2026):** for a fixed n, lowering α widens the acceptance region and raises β. The only way to reduce both is a larger sample (or a better test). The choice of α should reflect which error is costlier.
- **p-value:** the probability, under H₀, of a result at least as extreme as the one observed. Reject H₀ if p ≤ α.
- **Critique of p-values (2026):** a p-value is not the probability that H₀ is true; it says nothing about the size or importance of an effect; with huge samples trivial effects become "significant"; the 0.05 cut-off is arbitrary; multiple testing and selective reporting ("p-hacking") inflate false positives. **Alternatives:** report effect sizes with confidence intervals; Bayesian methods (posterior probabilities, Bayes factors); pre-registered analyses; adjust for multiple comparisons; replication.
- **Role of probability in inference (2026):** sampling makes statistics random; probability theory gives their sampling distributions, which convert sample evidence into statements with a known error rate (confidence levels, α, β, p-values). Without probability, there is no way to say how far a sample result can be trusted.

**The six steps (2022):** (1) H₀ and H₁; (2) α; (3) test statistic and its distribution; (4) critical region; (5) compute; (6) decide and conclude in words.

## 4. Tests about means

| Situation | Statistic | df |
|---|---|---|
| one mean, σ known or n ≥ 30 | z = (x̄ − μ₀)/(σ/√n) | — |
| one mean, σ unknown, small n | t = (x̄ − μ₀)/(s/√n) | n − 1 |
| two means, large samples | z = (x̄₁ − x̄₂)/√(s₁²/n₁ + s₂²/n₂) | — |
| two means, σ's known | z = (x̄₁ − x̄₂)/√(σ₁²/n₁ + σ₂²/n₂) | — |
| two means, small, equal variances | t = (x̄₁ − x̄₂)/[s_p√(1/n₁ + 1/n₂)] | n₁ + n₂ − 2 |
| paired | t = d̄/(s_d/√n) | n − 1 |

**Paired t-test applies (2025)** when the two samples are dependent: the same units measured twice (before/after) or matched pairs. df = n − 1 (number of pairs minus one).

**Worked example (2025, paired).** Weights before: 148, 176, 153, 116; after: 154, 176, 151, 121. d = 6, 0, −2, 5; d̄ = 2.25; s_d = 3.862; t = 2.25/(3.862/2) = **1.165** < t₀.₀₂₅,₃ = 3.182 ⇒ do not reject: no evidence that quitting smoking changes weight.

**Worked example (2026, large samples).** Housing share of income: n₁ = 200, x̄₁ = 32.42, s₁ = 6.08 (five years ago); n₂ = 100, x̄₂ = 33.72, s₂ = 6.75 (now). H₀: μ₂ = μ₁ vs H₁: μ₂ > μ₁.
SE = √(6.08²/200 + 6.75²/100) = 0.8003; z = 1.30/0.8003 = **1.624** < 1.645 ⇒ **do not reject at 5%** (p = 0.052). The increase is not quite significant.

**Worked example (2017).** Farm A: n = 100, x̄ = 14, s = 2; farm B: n = 150, x̄ = 11, s = 3. z = 3/√(0.04 + 0.06) = **9.49** > 2.576 ⇒ reject at 1%: times differ.

## 5. Tests about proportions

One proportion: z = (p̂ − P₀)/√(P₀Q₀/n).
Two proportions: pooled p̄ = (x₁ + x₂)/(n₁ + n₂); z = (p̂₁ − p̂₂)/√[p̄q̄(1/n₁ + 1/n₂)].

**Worked example (2016).** Smokers: Lahore 300/500 = 0.60, Karachi 550/1000 = 0.55. p̄ = 850/1500 = 0.567; z = 0.05/√(0.567 × 0.433 × 0.003) = **1.84** < 1.96 ⇒ not significant at 5% (two-sided).

**Worked example (2021).** Envelope colour: 10% vs 30% of 1000 each. p̄ = 0.2; z = 0.2/√(0.2 × 0.8 × 0.002) = **11.2** ⇒ colour clearly affects sales.

## 6. Tests about variances

One variance: χ² = (n − 1)s²/σ₀², df n − 1. Two variances: F = s₁²/s₂² (larger on top), df (n₁ − 1, n₂ − 1). Several variances (2016): Bartlett's test.
**Example (2018, completed).** n = 25 cars; if s² = 1.5, test σ² = 1.05: χ² = 24(1.5)/1.05 = **34.29**; 5% two-sided limits 12.40 and 39.36 ⇒ do not reject. (The paper omitted s²; state an assumed value or explain the method.)

## 7. Sample size

For a mean with error E at confidence 1 − α: **n = (z_{α/2}σ/E)²**. For a proportion: n = z²PQ/E² (use P = 0.5 if unknown).
Example: σ = 10, E = 2, 95%: n = (1.96 × 10/2)² = 96.04 ⇒ **97**.
**Steps (2016):** define the parameter and the precision required; choose the confidence level; get a prior estimate of σ or P (pilot survey); compute n; adjust for FPC (n′ = n/(1 + n/N)) and expected non-response.

## 8. χ² tests

**Goodness of fit:** χ² = Σ(O − E)²/E, df = k − 1 − (number of parameters estimated). All E ≥ 5 (merge classes otherwise).
**Procedure (2021):** state H₀ (the data follow the model); compute expected frequencies from the model; compute χ²; compare with the table; conclude.
**Worked example (2021).** 800 four-child families, males 0–4: O = 32, 178, 290, 236, 64. Under Binomial(4, ½): E = 800(1, 4, 6, 4, 1)/16 = 50, 200, 300, 200, 50.
χ² = 6.48 + 2.42 + 0.333 + 6.48 + 3.92 = **19.63** > χ²₀.₀₅,₄ = 9.488 ⇒ reject p = ½. (With p estimated from the data, p̂ = 0.538, χ² = 1.37 on 3 df — a binomial with p ≈ 0.54 fits well. Boys are slightly more likely than girls.)

**Contingency table (independence):** Eᵢⱼ = (row total × column total)/n; df = (r − 1)(c − 1).
**Worked example (2018).** Gender × expensive phone: males 300 own, 200 not; females 400 own, 100 not. E: 350, 150, 350, 150.
χ² = (50²/350)·2 + (50²/150)·2 = **47.6** > 3.841 ⇒ ownership is related to gender (females more likely to own).

---

## Exam checklist
- Define every term in §3 with an example.
- Two-sample z, pooled t, paired t, two-proportion z, each with the six steps.
- CIs for μ, P, μ₁ − μ₂, P₁ − P₂.
- χ² goodness of fit and 2 × 2 independence.
- Short essays: estimator properties; p-value critique; Type I/II trade-off.
