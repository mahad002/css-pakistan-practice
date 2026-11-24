# 05 — Non-Parametric Methods

Examined in 2016 (three parts), 2019, 2020 (Kruskal–Wallis), 2021 (runs test) and 2026 (parametric vs non-parametric). Low frequency, but these questions are short and predictable — a good "second choice" in Section A.

---

## 1. What and why

**Parametric tests** (z, t, F) assume a population distribution (usually normal) and test parameters (μ, σ²). **Non-parametric (distribution-free) tests** make few assumptions — usually only continuity and independence — and work with signs, ranks or runs.

| Advantages | Disadvantages |
|---|---|
| Valid for any population shape; good for small samples | Less powerful than parametric tests when parametric assumptions hold |
| Work with ordinal or ranked data | Discard information (magnitudes) |
| Robust to outliers | Ties need corrections; tables needed for exact tests |
| Simple to compute | Test hypotheses about medians/distributions rather than means |

**General steps (2016):** (1) state H₀ and H₁ (usually about medians or identical distributions); (2) choose α; (3) choose the test and its statistic (signs, ranks, runs); (4) find the critical value from the special table, or use the normal approximation for large samples; (5) compute; (6) decide and state the conclusion in words.

**Parametric vs non-parametric in ANOVA (2026):** one-way ANOVA (F-test, assumes normal populations with equal variances) ↔ **Kruskal–Wallis H-test** (ranks); two-way/RCBD ANOVA ↔ **Friedman test** (ranks within blocks).

## 2. Sign test

One sample: H₀: median = M₀. Record + if x > M₀, − if x < M₀ (drop ties). Under H₀ the number of + signs ~ Binomial(n, ½).
Paired samples: signs of the differences.
Large n: z = (X − n/2)/(√n/2) (with continuity correction ±0.5).

## 3. Wilcoxon signed-rank test

Paired or one-sample data, assuming a symmetric distribution of differences.
Steps: (1) dᵢ = differences (drop zeros); (2) rank |dᵢ| (average ranks for ties); (3) T⁺ = sum of ranks of positive d, T⁻ = sum of negative; (4) T = min(T⁺, T⁻); (5) reject H₀ if T ≤ critical value.
Large n: z = (T − n(n + 1)/4)/√[n(n + 1)(2n + 1)/24].
**Difference from the sign test (2019):** the sign test uses only the direction of each difference; Wilcoxon also uses the size (through ranks), so it is more powerful.

**Worked example.** Weights before/after a diet for 10 people give differences 2, 3, −1, 6, 3, 0, 6, 4, 1, 5. Drop the zero: n = 9. Ranks of |d|: 1 → 1.5, 1 → 1.5, 2 → 3, 3 → 4.5, 3 → 4.5, 4 → 6, 5 → 7, 6 → 8.5, 6 → 8.5. T⁻ = 1.5 (only the −1), T⁺ = 43.5. Critical value (n = 9, two-sided α = 0.05) = 5. T = 1.5 ≤ 5 ⇒ **reject H₀**: the diet changes weight. (Sign test: 1 minus sign out of 9, P(X ≤ 1) = 10/512 = 0.0195 one-sided — also significant.)

## 4. Mann–Whitney U test (two independent samples)

Steps: (1) rank all n₁ + n₂ observations together; (2) R₁ = sum of ranks of sample 1; (3) U₁ = R₁ − n₁(n₁ + 1)/2, U₂ = n₁n₂ − U₁; (4) U = min(U₁, U₂); reject H₀ (same distribution) if U ≤ critical value.
Large samples: z = (U − n₁n₂/2)/√[n₁n₂(n₁ + n₂ + 1)/12].
**Worked example.** Group 1: 14, 18, 12, 20, 16; group 2: 22, 25, 19, 24, 21, 26. Ranks of group 1: 12 → 1, 14 → 2, 16 → 3, 18 → 4, 20 → 6 ⇒ R₁ = 16. U₁ = 16 − 15 = 1, U₂ = 29. U = 1 ≤ 3 (critical, n₁ = 5, n₂ = 6, two-sided 5%) ⇒ **reject H₀**.

## 5. Kruskal–Wallis H test (k independent samples)

H = [12/(N(N + 1))] Σ Rᵢ²/nᵢ − 3(N + 1), compare with χ²(k − 1).
**Worked example (2020).** Teaching methods A (6 scores), B (7), C (5); N = 18. Rank all 18 (the two 72s share rank 4.5). Rank sums: R_A = 84, R_B = 55.5, R_C = 31.5.
H = [12/(18 × 19)](84²/6 + 55.5²/7 + 31.5²/5) − 57 = 0.035088(1176 + 440.04 + 198.45) − 57 = **6.67** > χ²₀.₀₅,₂ = 5.991 ⇒ **reject H₀**: average scores differ by method (A highest). (The tie correction changes H only in the third decimal.)

## 6. Runs test for randomness

A run is a maximal sequence of identical symbols. Too few runs suggest clustering/trend; too many suggest alternation.
Count R (number of runs), n₁, n₂. Small samples: reject randomness if R ≤ r_L or R ≥ r_U (runs table).
Large samples: E(R) = 2n₁n₂/(n₁ + n₂) + 1, Var(R) = 2n₁n₂(2n₁n₂ − n₁ − n₂)/[(n₁ + n₂)²(n₁ + n₂ − 1)], z = (R − E(R))/√Var(R).
For numeric data, code each value as above (+) or below (−) the median.
**Advantages:** simple; no distributional assumption. **Disadvantages:** low power; detects only some kinds of non-randomness (2021).

**Worked example (2016).** HTTHHHTHTTHHTH: runs H | TT | HHH | T | H | TT | HH | T | H ⇒ **R = 9**, n_H = 8, n_T = 6. Exact 5% limits for (8, 6): reject if R ≤ 3 or R ≥ 12 (the paper printed 2 and 12). 9 is inside ⇒ **do not reject**; the order looks random. (E(R) = 7.86.)

## 7. Kolmogorov–Smirnov tests

**One sample (goodness of fit):** D = max|F_n(x) − F₀(x)|, F_n the empirical CDF, F₀ the hypothesised continuous CDF. Reject if D > critical value (≈ 1.36/√n at 5% for large n).
**Two samples:** D = max|F_{n₁}(x) − G_{n₂}(x)|; critical ≈ 1.36√[(n₁ + n₂)/(n₁n₂)] at 5%.
Advantages over χ² goodness of fit: works with ungrouped small samples; exact for continuous F₀. Limitation: F₀ must be fully specified (parameters not estimated from the data) for the standard table.

---

## Exam checklist
- Steps of any non-parametric test; advantages/disadvantages table.
- One worked example each: sign/Wilcoxon, Mann–Whitney, Kruskal–Wallis, runs.
- Know the critical-value tables exist and how to read them (see `10-Statistical-Tables.md`).
