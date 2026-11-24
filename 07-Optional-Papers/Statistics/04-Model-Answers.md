# Worked Solutions — Statistics (CSS)

**61 exam-style problems with full step-by-step solutions**, across every syllabus section. Most use the actual data of CSS questions 2016–2026 (year shown); a few are new practice problems of the same type. Every number was recomputed in python3 (pure Python: exact fractions for enumerations, my own implementations of the normal, t, χ² and F distributions checked against standard tables). Critical values are from `03-Notes/10-Statistical-Tables.md`.

**How a CSS statistics answer earns marks:** state the method/formula, lay out a table of sums, compute cleanly, give the decision with the table value, and **interpret in words**. For tests always write the six steps (H₀/H₁, α, statistic, critical region, computation, conclusion).

Contents: A. Descriptive (S1–S10) · B. Probability (S11–S17) · C. Distributions (S18–S24) · D. Regression & correlation (S25–S30) · E. Non-parametric (S31–S34) · F. Sampling (S35–S41) · G. Inference (S42–S51) · H. Design of experiments (S52–S58) · I. Vital statistics & index numbers (S59–S61).

---

# A. Descriptive Statistics

### S1. (CSS 2023) Weights (kg) of containers: classes 18–26, 27–35, 36–44, 45–53, 54–62, 63–71, 72–80 with frequencies 13, 20, 39, 40, 25, 6, 12. Find Q₁, median and Q₃ and comment on symmetry.

**Solution.**
1. Class boundaries: 17.5–26.5, 26.5–35.5, …, 71.5–80.5; width h = 9; n = 155.
2. Cumulative frequencies: 13, 33, 72, 112, 137, 143, 155.
3. Formula: Q_k = l + (h/f)(kn/4 − c).
4. Q₁: n/4 = 38.75 → class 35.5–44.5 (c = 33, f = 39): Q₁ = 35.5 + (9/39)(5.75) = **36.83 kg**.
5. Median: n/2 = 77.5 → class 44.5–53.5 (c = 72, f = 40): Md = 44.5 + (9/40)(5.5) = **45.74 kg**.
6. Q₃: 3n/4 = 116.25 → class 53.5–62.5 (c = 112, f = 25): Q₃ = 53.5 + (9/25)(4.25) = **55.03 kg**.
7. Q₃ − Md = 9.29 and Md − Q₁ = 8.91 — nearly equal. Bowley's coefficient = (55.03 + 36.83 − 91.48)/(55.03 − 36.83) = **0.02**.
8. **Conclusion:** the middle half of the distribution is almost symmetric (very slight positive skew). (The tail class 72–80 with 12 containers makes the mean, 46.39, a little larger than the median.)

### S2. (CSS 2023) The first three moments about 2 are 1, 16 and −40. Show that the mean is 3, the variance 15 and μ₃ = −86, and that the first three moments about 0 are 3, 24, 76.

**Solution.**
1. μ′₁ = 1 about A = 2 ⇒ mean = A + μ′₁ = **3**.
2. μ₂ = μ′₂ − μ′₁² = 16 − 1 = **15**.
3. μ₃ = μ′₃ − 3μ′₂μ′₁ + 2μ′₁³ = −40 − 48 + 2 = **−86**.
4. About 0: m′₁ = mean = **3**; m′₂ = μ₂ + mean² = 15 + 9 = **24**; m′₃ = μ₃ + 3·mean·μ₂ + mean³ = −86 + 135 + 27 = **76**. ∎

### S3. (CSS 2026) The first four moments about the origin are −0.55, 4.46, −0.43, 68.52. Find skewness and kurtosis and comment on the shape.

**Solution.**
1. μ₂ = 4.46 − (−0.55)² = **4.1575**.
2. μ₃ = −0.43 − 3(4.46)(−0.55) + 2(−0.55)³ = −0.43 + 7.359 − 0.33275 = **6.5963**.
3. μ₄ = 68.52 − 4(−0.43)(−0.55) + 6(4.46)(0.3025) − 3(0.55)⁴ = 68.52 − 0.946 + 8.0949 − 0.2745 = **75.3944**.
4. β₁ = μ₃²/μ₂³ = 43.511/71.863 = **0.605**; γ₁ = +√β₁ = **0.778** (sign of μ₃ positive).
5. β₂ = μ₄/μ₂² = 75.3944/17.2848 = **4.36**; γ₂ = 1.36.
6. **Shape:** moderately positively skewed (long right tail) and leptokurtic (sharper peak and heavier tails than a normal curve, for which β₁ = 0 and β₂ = 3).

### S4. (CSS 2021) Two weight distributions: X (n = 125) coded X = 16 + 5u with Σfu = −46, Σfu² = 306, Σfu³ = −242, Σfu⁴ = 1962; Y (n = 200) coded Y = 20 + 2v with Σfv = 21, Σfv² = 1265, Σfv³ = −627, Σfv⁴ = 14169. Which is more consistent, which is negatively skewed, which is closer to mesokurtic?

**Solution.**
1. Raw moments of u: −0.368, 2.448, −1.936, 15.696. Central (in u units): μ₂ = 2.3126, μ₃ = 0.6669, μ₄ = 14.781.
 Mean X = 16 + 5(−0.368) = 14.16; σ_X = 5√2.3126 = 7.604; **CV = 53.7%**; γ₁ = **+0.19**; β₂ = **2.76**.
2. Raw moments of v: 0.105, 6.325, −3.135, 70.845. Central: μ₂ = 6.3140, μ₃ = −5.1255, μ₄ = 72.580.
 Mean Y = 20 + 2(0.105) = 20.21; σ_Y = 2√6.314 = 5.026; **CV = 24.9%**; γ₁ = **−0.32**; β₂ = **1.82**.
3. **(i)** Y is more consistent (smaller CV). **(ii)** Y is negatively skewed (γ₁ < 0); X is slightly positive. **(iii)** X (β₂ = 2.76) is nearly mesokurtic; Y (β₂ = 1.82) is platykurtic. (Skewness and kurtosis are unit-free, so they can be computed directly from the coded moments.)

### S5. (CSS 2018) A sample of 20 has mean 75 and SD 2.5, but one value 68 was wrongly recorded as 86. Find the correct mean and SD.

**Solution.** (SD with divisor n, as in the textbook convention.)
1. Σx = 20 × 75 = 1500. Corrected Σx = 1500 − 86 + 68 = 1482 ⇒ **mean = 74.1**.
2. Σx² = n(σ² + x̄²) = 20(6.25 + 5625) = 112,625. Corrected Σx² = 112,625 − 86² + 68² = 112,625 − 7396 + 4624 = 109,853.
3. σ² = 109,853/20 − 74.1² = 5492.65 − 5490.81 = 1.84 ⇒ **σ = 1.356**.
(If 2.5 was a sample SD with divisor n − 1, the corrected s = 1.268. State your convention.)

### S6. (CSS 2018) Monthly incomes (Rs '000) of 100 employees in each of two banks. Classes 35–49, 50–64, 65–79, 80–94, 95–109, 110–124. Bank A: 10, 15, 35, 20, 10, 10. Bank B: 15, 20, 40, 15, 7, 3. Compare the variation.

**Solution.** Mid-points 42, 57, 72, 87, 102, 117; code u = (x − 72)/15 = −2, −1, 0, 1, 2, 3.

| u | f_A | f_A u | f_A u² | f_B | f_B u | f_B u² |
|---|---|---|---|---|---|---|
| −2 | 10 | −20 | 40 | 15 | −30 | 60 |
| −1 | 15 | −15 | 15 | 20 | −20 | 20 |
| 0 | 35 | 0 | 0 | 40 | 0 | 0 |
| 1 | 20 | 20 | 20 | 15 | 15 | 15 |
| 2 | 10 | 20 | 40 | 7 | 14 | 28 |
| 3 | 10 | 30 | 90 | 3 | 9 | 27 |
| Σ | 100 | 35 | 205 | 100 | −12 | 150 |

Bank A: mean = 72 + 15(0.35) = **77.25**; σ = 15√(2.05 − 0.1225) = **20.83**; **CV = 26.96%**.
Bank B: mean = 72 + 15(−0.12) = **70.20**; σ = 15√(1.50 − 0.0144) = **18.28**; **CV = 26.04%**.
**Conclusion:** relative variation is almost the same; Bank B's incomes are slightly more uniform (lower CV) as well as lower on average.

### S7. (CSS 2019, 2021, 2016) (a) A man drives from A to B at 30 mph and returns at 60 mph. Average speed? (b) Salary rises of 10%, 20%, 25% in three years: equivalent annual rise? (c) AM, GM, HM of 1, 2, 4, …, 2ⁿ.

**Solution.**
(a) Equal distances d: total time d/30 + d/60 = d/20; average speed = 2d/(d/20) = **40 mph** (the harmonic mean of 30 and 60).
(b) Growth factors multiply: (1.10)(1.20)(1.25) = 1.65. Equivalent rate r: (1 + r)³ = 1.65 ⇒ 1 + r = 1.1817 ⇒ **r = 18.17% per year** (the geometric mean, not the arithmetic mean 18.33%).
(c) n + 1 terms. AM = (1 + 2 + … + 2ⁿ)/(n + 1) = **(2^{n+1} − 1)/(n + 1)**. GM = (2^{0+1+…+n})^{1/(n+1)} = 2^{n/2} = **√(2ⁿ)**. HM = (n + 1)/Σ2^{−k} = **(n + 1)2ⁿ/(2^{n+1} − 1)**. Check: AM × HM = 2ⁿ = GM².

### S8. (CSS 2020) Weekly refrigerator sales: 35, 56, 43, 21, 43, 56, 78, 12, 56, 47, 76, 23, 52. Find the mean and SD, the interval x̄ ± 2s, and describe it.

**Solution.**
1. n = 13, Σx = 598 ⇒ **x̄ = 46.0**.
2. Σ(x − x̄)² = 4710 ⇒ s² = 4710/12 = 392.5 ⇒ **s = 19.81** (sample SD; with divisor n, 19.03).
3. x̄ ± 2s = 46 ± 39.62 = **(6.4, 85.6)**.
4. All 13 weeks (100%) fall inside. By Chebyshev at least 75% must; for bell-shaped data about 95% would. Planning stock for 6–86 refrigerators a week covers essentially all normal weeks.

### S9. (CSS 2026, 2025, 2016) (a) Bowley's skewness is 0.6, Q₁ + Q₃ = 100, median 38: find Q₁, Q₃. (b) Pearson's skewness is 0.32, SD 6.5, mean 29.6: find mode and median. (c) Mean 40.5, median 36: approximate mode. (d) A symmetric mesokurtic distribution has μ₄ = 243: find σ.

**Solution.**
(a) Sk_B = (Q₃ + Q₁ − 2Md)/(Q₃ − Q₁) ⇒ 0.6 = (100 − 76)/(Q₃ − Q₁) ⇒ Q₃ − Q₁ = 40. With Q₃ + Q₁ = 100: **Q₁ = 30, Q₃ = 70**.
(b) Sk_P = (mean − mode)/σ ⇒ mode = 29.6 − 0.32(6.5) = **27.52**. Empirical relation mean − mode = 3(mean − median) ⇒ median = 29.6 − 2.08/3 = **28.91**.
(c) Mode ≈ 3(36) − 2(40.5) = **27**.
(d) Mesokurtic ⇒ β₂ = μ₄/μ₂² = 3 ⇒ μ₂² = 81 ⇒ μ₂ = 9 ⇒ **σ = 3**.

### S10. (CSS 2019, 2017) (a) Mean deviation about the mean for marks: 0–9: 2, 10–19: 3, 20–29: 8, 30–39: 24, 40–49: 27, 50–59: 40, 60–69: 11, 70–79: 5. (b) Weekly wages "less than" 5, 10, …, 35 with cumulative workers 7, 78, 120, 189, 205, 275, 300: SD, CV and skewness.

**Solution (a).**
1. Mid-points 4.5, 14.5, …, 74.5; n = 120; Σfx = 5540 ⇒ x̄ = **46.17**.
2. Σf|x − x̄| = 1353.3 ⇒ MD = 1353.3/120 = **11.28**; coefficient of MD = 11.28/46.17 = **0.244**.
**Solution (b).**
1. Class frequencies (differences of cumulative): 0–5: 7, 5–10: 71, 10–15: 42, 15–20: 69, 20–25: 16, 25–30: 70, 30–35: 25.
2. Mid-points 2.5, …, 32.5: Σfx = 5380 ⇒ **mean = 17.93**. σ = **8.70** ⇒ **CV = 48.5%**.
3. Median: 150th value in 15–20 (c = 120, f = 69): 15 + 5(30/69) = **17.17**.
4. Pearson's skewness (median form) = 3(17.93 − 17.17)/8.70 = **+0.26**: slight positive skew.
5. Comment: wages vary a lot (CV ≈ 49%). The mode formula is unreliable here — three classes have almost equal frequencies (71, 69, 70), so the distribution is multi-modal; use the median-based coefficient.

---

# B. Probability

### S11. (CSS 2020) Bag A has 7 red and 8 blue marbles; bag B has 9 red and 7 blue. A bag is chosen at random and a marble drawn; it is red. Find the probability it came from bag A.

**Solution.**
1. Prior: P(A) = P(B) = ½. Likelihoods: P(R | A) = 7/15, P(R | B) = 9/16.
2. Total probability: P(R) = ½(7/15) + ½(9/16) = ½(0.4667 + 0.5625) = 0.5146.
3. Bayes: P(A | R) = ½(7/15)/0.5146 = (7/15)/(7/15 + 9/16) = (112/240)/(247/240) = **112/247 = 0.453**.

### S12. (CSS 2019) Three coins: one fair, two biased with P(H) = 1/3 and 2/3. One coin is picked at random and tossed twice, giving two heads. Find P(fair coin).

**Solution.**
1. P(HH | fair) = 1/4; P(HH | 1/3-coin) = 1/9; P(HH | 2/3-coin) = 4/9. Priors 1/3 each (cancel).
2. P(fair | HH) = (1/4)/(1/4 + 1/9 + 4/9) = (9/36)/(29/36) = **9/29 = 0.310**.

### S13. (CSS 2021) An urn contains four balls, known to be either all white or two white and two black (equally likely). A ball drawn at random is white. Find the probability that all are white.

**Solution.** P(W | all white) = 1, P(W | 2W2B) = ½. P(all white | W) = (½ × 1)/(½ × 1 + ½ × ½) = **2/3**.

### S14. (CSS 2024) Urn 1: 10 white, 3 black. Urn 2: 2 white, 5 black. Two balls are transferred from urn 1 to urn 2, then one ball is drawn from urn 2. Find P(white).

**Solution.**
1. ¹³C₂ = 78 ways to choose the two balls.
2. Case 2W: ¹⁰C₂ = 45 ways → urn 2 = 4W, 5B → P(W) = 4/9.
3. Case 1W1B: 10 × 3 = 30 ways → 3W, 6B → P(W) = 3/9.
4. Case 2B: ³C₂ = 3 ways → 2W, 7B → P(W) = 2/9.
5. P(W) = (45 × 4 + 30 × 3 + 3 × 2)/(78 × 9) = 276/702 = **46/117 = 0.393**.

### S15. (CSS 2022) 800 employees; 20% hold degrees and half of those are in non-management posts; 30% of non-graduates are managers. (i) How many managers? (ii) P(graduate | manager). (iii) P(graduate or manager).

**Solution.** Build the table:

| | Manager | Non-manager | Total |
|---|---|---|---|
| Graduate | 80 | 80 | 160 |
| Non-graduate | 192 | 448 | 640 |
| Total | 272 | 528 | 800 |

(i) **272 managers.** (ii) P(G | M) = 80/272 = **0.294** (and P(M | G) = 80/160 = 0.5). (iii) P(G ∪ M) = (160 + 272 − 80)/800 = **0.44**.

### S16. (CSS 2026) In a town 60% read newspaper A, 40% B, 30% C; 20% read A and B, 10% A and C, 20% B and C, and 5% all three. Draw a Venn diagram; find the percentage reading none and at least one.

**Solution.**
1. Fill the Venn diagram from the centre: A∩B∩C = 5; A∩B only = 15; A∩C only = 5; B∩C only = 15; A only = 60 − 15 − 5 − 5 = 35; B only = 40 − 15 − 15 − 5 = 5; C only = 30 − 5 − 15 − 5 = 5.
2. At least one = 35 + 5 + 5 + 15 + 5 + 15 + 5 = **85%** (= 60 + 40 + 30 − 20 − 10 − 20 + 5).
3. None = **15%**.

### S17. (CSS 2018, 2023) (a) A box has 12 red and 20 white roses picked one at a time without replacement. Find P(third red | first two white) and P(exactly 3 red and 2 white among the first five). (b) A box has 4 bad and 6 good tubes; two are drawn together and one of them, tested, is good. Find P(the other is good).

**Solution (a).**
1. After two whites: 12 red, 18 white remain ⇒ P = 12/30 = **0.4**.
2. Hypergeometric: ¹²C₃ × ²⁰C₂/³²C₅ = 220 × 190/201,376 = **0.2076**.
**Solution (b).**
1. Let G₁ = the tested tube is good, G₂ = the other is good. P(G₁) = 6/10 (any one tube of the box is good with probability 0.6).
2. P(G₁ ∩ G₂) = P(both good) = ⁶C₂/¹⁰C₂ = 15/45 = 1/3.
3. P(G₂ | G₁) = (1/3)/(3/5) = **5/9 = 0.556**. (Same as drawing the second tube from the 9 left, 5 of which are good.)

---

# C. Probability Distributions

### S18. (CSS 2025) For the binomial distribution show E(X) = np and Var(X) = npq; derive the mgf and state its uses.

**Solution.**
1. E(X) = Σₓ x·n!/(x!(n − x)!) pˣqⁿ⁻ˣ = np Σ_{y=0}^{n−1} ⁿ⁻¹C_y p^y q^{n−1−y} (y = x − 1) = np(p + q)^{n−1} = **np**.
2. E[X(X − 1)] = n(n − 1)p² Σ ⁿ⁻²C_z p^z q^{n−2−z} = n(n − 1)p².
3. Var(X) = E[X(X − 1)] + E(X) − [E(X)]² = n(n − 1)p² + np − n²p² = np − np² = **npq**.
4. mgf: M(t) = E(e^{tX}) = Σ ⁿCₓ(pe^t)ˣqⁿ⁻ˣ = **(q + pe^t)ⁿ**. M′(t) = npe^t(q + pe^t)^{n−1} ⇒ M′(0) = np ✓.
5. **Uses:** generating moments by differentiation; identifying a distribution (uniqueness); proving limit theorems (binomial → Poisson as n → ∞, np = λ, since (1 + λ(e^t − 1)/n)ⁿ → e^{λ(e^t−1)}); finding the distribution of sums of independent variables (product of mgfs).

### S19. (CSS 2017, 2018) (a) P(bad reaction) = 0.001 for 2000 people: P(exactly 3) and P(more than 2), by binomial and Poisson. (b) 250 reservations, each no-show with probability 0.005: P(exactly 5 no-shows).

**Solution (a).** λ = np = 2.
- Poisson: P(3) = e^{−2}2³/3! = **0.1804**; P(X > 2) = 1 − e^{−2}(1 + 2 + 2) = 1 − 5e^{−2} = **0.3233**.
- Binomial: P(3) = ²⁰⁰⁰C₃(0.001)³(0.999)¹⁹⁹⁷ = **0.1805**; P(X > 2) = **0.3233**. The approximation is excellent (n large, p small).
**Solution (b).** λ = 250 × 0.005 = 1.25. Poisson: e^{−1.25}(1.25)⁵/120 = **0.0073**; exact binomial 0.0072.

### S20. (CSS 2026) A secretary makes 2 errors per page on average. Find P(4 or more errors) and P(no error) on the next page.

**Solution.** X ~ Poisson(2).
1. P(0) = e^{−2} = **0.1353**.
2. P(X ≤ 3) = e^{−2}(1 + 2 + 2 + 4/3) = 0.1353 × 6.3333 = 0.8571 ⇒ **P(X ≥ 4) = 0.1429**.

### S21. (CSS 2022) A machine fills cups with N(200, 15²) ml. (i) P(191 < X < 209). (ii) How many of the next 1000 drinks overflow 230 ml cups? (iii) Below what amount are the smallest 25% of drinks?

**Solution.**
1. (i) z = (191 − 200)/15 = −0.6, (209 − 200)/15 = 0.6. P = Φ(0.6) − Φ(−0.6) = 0.7257 − 0.2743 = **0.4515**.
2. (ii) P(X > 230) = P(Z > 2) = 1 − 0.9772 = 0.0228 ⇒ expected overflows = 1000 × 0.0228 ≈ **23**.
3. (iii) Φ(z) = 0.25 ⇒ z = −0.6745 ⇒ x = 200 − 0.6745(15) = **189.9 ml**.

### S22. (CSS 2022, 2018) (a) Housework hours N(8.2, 2.1²): P(9 or more), P(7 or less). (b) Glass contents N(250, 15²): P(> 280), P(240–260).

**Solution (a).** z = (9 − 8.2)/2.1 = 0.381 ⇒ P(X ≥ 9) = 1 − 0.6484 = **0.352**. z = (7 − 8.2)/2.1 = −0.571 ⇒ P(X ≤ 7) = **0.284**.
**Solution (b).** P(X > 280) = P(Z > 2) = **0.0228** (2.3% of glasses). P(240 < X < 260) = P(−0.667 < Z < 0.667) = 2(0.7475) − 1 = **0.495**.

### S23. (CSS 2024) If log X is normal with mean 1 and variance 4, find P(1 < X < 2).

**Solution.** (log = natural log; the paper prints ln 2 = 0.693.)
1. Y = ln X ~ N(1, 2²). 1 < X < 2 ⇔ 0 < Y < 0.6931.
2. z₁ = (0 − 1)/2 = −0.5; z₂ = (0.6931 − 1)/2 = −0.1534.
3. P = Φ(−0.1534) − Φ(−0.5) = 0.4390 − 0.3085 = **0.1305**.

### S24. (CSS 2025, 2016, 2019) (a) f(x) = k(x − x²), 0 ≤ x ≤ 1: find k, mean, variance and skewness. (b) f(x) = w(x − 2)(5 − x), 2 ≤ x ≤ 5: find w, mean, variance, mode, median. (c) H₀: p = 0.6 is rejected if 3 or fewer of 10 families buy brand A. Find α, and β for p = 0.3, 0.4, 0.5.

**Solution (a).** ∫₀¹(x − x²)dx = 1/6 ⇒ **k = 6**. E(X) = 6∫₀¹(x² − x³)dx = **1/2**. E(X²) = 6(1/4 − 1/5) = 0.3 ⇒ **Var = 0.05**. f is symmetric about ½ (f(½ + t) = f(½ − t)) ⇒ μ₃ = 0 ⇒ **skewness 0**; mean = median = mode = ½.
**Solution (b).** (The paper prints (2 − x)(x − 5), which is negative on [2, 5]; the intended density is w(x − 2)(5 − x).) ∫₂⁵(x − 2)(5 − x)dx = 27/6 = 4.5 ⇒ **w = 2/9**. The parabola is symmetric about 3.5 ⇒ **mean = median = mode = 3.5**. Variance = (b − a)²/20 for this shape = 9/20 = **0.45**.
**Solution (c).** X ~ Binomial(10, p). α = P(X ≤ 3 | p = 0.6) = **0.0548**.
β = P(X ≥ 4 | p): p = 0.3: **0.350**; p = 0.4: **0.618**; p = 0.5: **0.828**. (β grows as the true p approaches 0.6 — the test struggles to detect small departures.)

---

# D. Regression and Correlation

### S25. (CSS 2022) Age (years) and breakdowns last month for seven machines: ages 12, 7, 2, 8, 13, 9, 4; breakdowns 10, 5, 1, 4, 12, 7, 2. (i) Hypothesis about the sign of B. (ii) SSxx, SSyy, SSxy. (iii) Least-squares line. (iv) r and r². (v) Predict at age 10. (vi) SD of errors. (vii) 90% CI for B. (viii) Test H₀: B = 0 against B ≠ 0.

**Solution.**
(i) Older machines should break down more: expect **B > 0** (age = X, breakdowns = Y).
(ii) n = 7; ΣX = 55, ΣY = 41, ΣX² = 527, ΣY² = 339, ΣXY = 416.
 SSxx = 527 − 55²/7 = **94.857**; SSyy = 339 − 41²/7 = **98.857**; SSxy = 416 − (55)(41)/7 = **93.857**.
(iii) b = 93.857/94.857 = **0.9895**; a = 41/7 − 0.9895(55/7) = 5.857 − 7.774 = **−1.917**. **ŷ = −1.917 + 0.9895x**.
(iv) r = 93.857/√(94.857 × 98.857) = **0.969**; r² = **0.939**: a very strong positive relation; 93.9% of the variation in breakdowns is explained by age.
(v) x = 10: ŷ = −1.917 + 9.895 = **7.98 ≈ 8 breakdowns**.
(vi) SSE = SSyy − b·SSxy = 98.857 − 92.868 = 5.989; s_e = √(5.989/5) = **1.094**.
(vii) SE(b) = 1.094/√94.857 = 0.1124; t₀.₀₅,₅ = 2.015. CI: 0.9895 ± 2.015(0.1124) = **(0.763, 1.216)** — positive throughout.
(viii) H₀: B = 0, H₁: B ≠ 0, α = 0.05, df = 5, critical ±2.571. t = 0.9895/0.1124 = **8.80** > 2.571 ⇒ **reject H₀**: age significantly affects breakdowns.

### S26. (CSS 2020) Relative humidity y and moisture content x on ten days: y = 46, 53, 37, 42, 34, 29, 60, 48, 41, 48; x = 12, 14, 11, 13, 10, 8, 17, 12, 10, 15. Fit y = β₁ + β₂x by least squares and interpret the coefficient of determination.

**Solution.**
1. n = 10; Σx = 122, Σy = 438, Σx² = 1552, Σy² = 19,944, Σxy = 5545.
2. S_xx = 1552 − 1488.4 = 63.6; S_yy = 19,944 − 19,184.4 = 759.6; S_xy = 5545 − 5343.6 = 201.4.
3. β̂₂ = 201.4/63.6 = **3.1667**; β̂₁ = 43.8 − 3.1667(12.2) = **5.167**. **ŷ = 5.167 + 3.167x**.
4. Interpretation: each extra unit of moisture content goes with about 3.17 points more humidity.
5. r = 201.4/√(63.6 × 759.6) = 0.9163 ⇒ **R² = 0.840**: 84% of the day-to-day variation in humidity is explained by its linear relation with moisture; 16% is due to other factors.

### S27. (CSS 2018, 2025) (a) Persons employed (x) and cloth (000 m) (y) in eight mills: x = 139, 219, 140, 213, 180, 215, 249, 280; y = 28, 55, 26, 49, 42, 54, 51, 60. Find and interpret r. (b) n = 20, x̄ = 2, ȳ = 8, ΣX² = 180, ΣY² = 1424, ΣXY = 404: find r.

**Solution (a).**
1. Σx = 1635, Σy = 365, Σx² = 351,277, Σy² = 17,767, Σxy = 78,683.
2. S_xx = 17,123.9; S_yy = 1113.9; S_xy = 4086.1.
3. r = 4086.1/√(17,123.9 × 1113.9) = **0.936**: a strong positive correlation; mills employing more people produce more cloth (r² = 0.876).
**Solution (b).** S_xy = 404 − 20(2)(8) = 84; S_xx = 180 − 20(4) = 100; S_yy = 1424 − 20(64) = 144. r = 84/√(14,400) = **0.70**.

### S28. (CSS 2025) Y = 6.5, 5.3, 8.6, 1.2, 4.2, 2.9, 1.1, 3.0 and X = 3.2, 2.7, 4.5, 1.0, 2.0, 1.7, 0.6, 1.9. Fit Y on X, compute the residuals, show they sum to zero, and find s_y.x.

**Solution.**
1. n = 8; ΣX = 17.6, ΣY = 32.8, ΣX² = 49.64, ΣXY = 94.7, ΣY² = 182.0.
2. S_xx = 49.64 − 38.72 = 10.92; S_xy = 94.7 − 72.16 = 22.54; S_yy = 47.52.
3. b = 22.54/10.92 = 2.0641; a = 4.1 − 2.0641(2.2) = −0.4410. **Ŷ = −0.441 + 2.064X**.
4. Residuals e = Y − Ŷ: 0.336, 0.168, −0.247, −0.423, 0.513, −0.168, 0.303, −0.481. **Σe = 0** (to rounding).
5. Conclusion: residuals always sum to zero for a least-squares line with an intercept, because the line passes through (x̄, ȳ). This checks the arithmetic; it does not prove a good fit.
6. SSE = Σe² = 0.9951; **s_y.x = √(0.9951/6) = 0.407**. (r = 0.989, so the fit is in fact very good.)

### S29. (CSS 2021) 120 students: quiz 1 (X₁): mean 6.8, SD 1.0; quiz 2 (X₂): 7.0, 0.8; final (X₃): 74, 9.0; r₁₂ = 0.60, r₁₃ = 0.70, r₂₃ = 0.65. Find the regression of X₃ on X₁ and X₂, estimate final marks for quiz scores (9, 7) and (4, 8), and find R₃.₁₂.

**Solution.**
1. b₃₁.₂ = (s₃/s₁)(r₁₃ − r₁₂r₂₃)/(1 − r₁₂²) = 9(0.70 − 0.39)/0.64 = **4.359**.
2. b₃₂.₁ = (s₃/s₂)(r₂₃ − r₁₂r₁₃)/(1 − r₁₂²) = 11.25(0.65 − 0.42)/0.64 = **4.043**.
3. a = 74 − 4.359(6.8) − 4.043(7.0) = **16.055**. **X̂₃ = 16.055 + 4.359X₁ + 4.043X₂**.
4. (9, 7): 16.055 + 39.234 + 28.301 = **83.6**. (4, 8): 16.055 + 17.438 + 32.344 = **65.8**.
5. R₃.₁₂ = √[(r₁₃² + r₂₃² − 2r₁₂r₁₃r₂₃)/(1 − r₁₂²)] = √[(0.49 + 0.4225 − 0.546)/0.64] = √0.5727 = **0.757**: the two quizzes together explain R² = 57% of the variation in final marks.

### S30. (CSS 2023, 2019) X₁ = 7, 12, 14, 17, 20; X₂ = 4, 7, 8, 9, 12; X₃ = 1, 2, 4, 5, 8. Find the regressions of X₁ on X₃ and X₂ on X₃, the residuals X₁.₃ and X₂.₃, and their correlation.

**Solution.**
1. x̄₁ = 14, x̄₂ = 8, x̄₃ = 4. S₃₃ = 30, S₁₃ = 52, S₂₃ = 31, S₁₁ = 98, S₂₂ = 34, S₁₂ = 57.
2. X₁ on X₃: b = 52/30 = 1.7333, a = 14 − 1.7333(4) = 7.0667 ⇒ **X̂₁ = 7.067 + 1.733X₃**.
3. X₂ on X₃: b = 31/30 = 1.0333, a = 8 − 4.1333 = 3.8667 ⇒ **X̂₂ = 3.867 + 1.033X₃**.
4. Residuals X₁.₃ = −1.800, 1.467, 0, 1.267, −0.933; X₂.₃ = −0.900, 1.067, 0, −0.033, −0.133.
5. r(X₁.₃, X₂.₃) = Σe₁e₂/√(Σe₁²Σe₂²) = **0.831**. This is the partial correlation r₁₂.₃.
6. Check by formula: r₁₂ = 0.9875, r₁₃ = 0.9590, r₂₃ = 0.9706 ⇒ r₁₂.₃ = (0.9875 − 0.9308)/√[(1 − 0.9197)(1 − 0.9421)] = **0.831** ✓. The very high simple correlation r₁₂ = 0.99 drops to 0.83 once the common influence of X₃ is removed.

---

# E. Non-Parametric Methods

### S31. (CSS 2016) Use the runs test on 14 coin tosses H T T H H H T H T T H H T H at α = 5%.

**Solution.**
1. H₀: the sequence is random; H₁: not random.
2. Runs: H | TT | HHH | T | H | TT | HH | T | H ⇒ **R = 9**; n₁ (H) = 8, n₂ (T) = 6.
3. Critical values (5%, n₁ = 8, n₂ = 6): reject if R ≤ 3 or R ≥ 12 (the paper supplied 2 and 12).
4. 3 < 9 < 12 ⇒ **do not reject H₀**: no evidence against randomness. (E(R) = 2(8)(6)/14 + 1 = 7.86; 9 is close to it.)

### S32. (CSS 2020) Scores under three teaching methods: A: 94, 88, 91, 74, 87, 97; B: 85, 82, 79, 84, 61, 72, 80; C: 89, 67, 72, 76, 69. Use the Kruskal–Wallis test at 5%.

**Solution.**
1. H₀: the three methods give identically distributed scores; H₁: not all the same.
2. Rank all N = 18 scores: 61(1), 67(2), 69(3), 72(4.5), 72(4.5), 74(6), 76(7), 79(8), 80(9), 82(10), 84(11), 85(12), 87(13), 88(14), 89(15), 91(16), 94(17), 97(18).
3. Rank sums: R_A = 6 + 14 + 16 + 13 + 17 + 18 = **84**; R_B = 12 + 10 + 8 + 11 + 1 + 4.5 + 9 = **55.5**; R_C = 15 + 2 + 4.5 + 7 + 3 = **31.5**. (Check: total 171 = 18 × 19/2.)
4. H = [12/(18 × 19)](84²/6 + 55.5²/7 + 31.5²/5) − 3(19) = 0.035088 × 1814.49 − 57 = **6.67**.
5. Critical χ²₀.₀₅,₂ = 5.991. 6.67 > 5.991 ⇒ **reject H₀**: the methods differ; method A (mean rank 14) scores highest, C (6.3) lowest.

### S33. Ten people were weighed before and after a diet: before 72, 68, 75, 80, 66, 70, 78, 74, 69, 71; after 70, 65, 76, 74, 63, 70, 72, 70, 68, 66. Use (a) the Wilcoxon signed-rank test and (b) the sign test at 5% (two-sided).

**Solution.**
1. Differences (before − after): 2, 3, −1, 6, 3, 0, 6, 4, 1, 5. Drop the 0 ⇒ n = 9.
2. (a) Rank |d|: 1, 1 → 1.5 each; 2 → 3; 3, 3 → 4.5 each; 4 → 6; 5 → 7; 6, 6 → 8.5 each.
 T⁻ = 1.5 (from −1); T⁺ = 45 − 1.5 = 43.5. T = 1.5.
 Critical value (n = 9, two-sided 5%) = 5. T ≤ 5 ⇒ **reject H₀**: the diet changes weight (a reduction).
3. (b) Signs: 8 plus, 1 minus. Under H₀, X = number of minus ~ Bin(9, ½). Two-sided p = 2P(X ≤ 1) = 2(10/512) = **0.039** < 0.05 ⇒ reject H₀ as well.
4. Wilcoxon gives stronger evidence because it uses the sizes of the differences, not just their signs.

### S34. Two independent groups: G1 = 14, 18, 12, 20, 16; G2 = 22, 25, 19, 24, 21, 26. Test with the Mann–Whitney U test at 5% (two-sided).

**Solution.**
1. H₀: the two populations are identical; H₁: they differ in location.
2. Combined ranking: 12(1), 14(2), 16(3), 18(4), 19(5), 20(6), 21(7), 22(8), 24(9), 25(10), 26(11).
3. R₁ (G1) = 1 + 2 + 3 + 4 + 6 = 16. U₁ = R₁ − n₁(n₁ + 1)/2 = 16 − 15 = **1**; U₂ = n₁n₂ − U₁ = 29.
4. U = 1. Critical value (n₁ = 5, n₂ = 6, two-sided 5%) = 3. 1 ≤ 3 ⇒ **reject H₀**: G2 values are larger.

---

# F. Sampling and Sampling Distributions

### S35. (CSS 2025) What is the finite population correction and when can it be ignored? From the population 2, 4, 8, 8, 10, 10, how many samples of size 2 can be drawn without replacement? Tabulate the sampling distribution of x̄ and verify its mean and variance.

**Solution.**
1. **FPC** = (N − n)/(N − 1), multiplying σ²/n in Var(x̄) when sampling without replacement from a finite population (√ of it for the standard error). It reflects that each draw removes a unit, so later draws carry less new information. Ignore it when n/N is small (< 5%), since it is then close to 1.
2. N = 6, n = 2: ⁶C₂ = **15** samples (the two 8s and two 10s are distinct units).
3. Population: μ = 42/6 = 7; σ² = Σ(x − 7)²/6 = (25 + 9 + 1 + 1 + 9 + 9)/6 = 9.
4. Sample means: (2,4)3; (2,8)5 ×2; (2,10)6 ×2; (4,8)6 ×2; (4,10)7 ×2; (8,8)8; (8,10)9 ×4; (10,10)10.

| x̄ | 3 | 5 | 6 | 7 | 8 | 9 | 10 | Σ |
|---|---|---|---|---|---|---|---|---|
| f | 1 | 2 | 4 | 2 | 1 | 4 | 1 | 15 |
| f x̄ | 3 | 10 | 24 | 14 | 8 | 36 | 10 | 105 |
| f x̄² | 9 | 50 | 144 | 98 | 64 | 324 | 100 | 789 |

5. E(x̄) = 105/15 = **7 = μ** ✓. Var(x̄) = 789/15 − 49 = 52.6 − 49 = **3.6**. Formula: (σ²/n)(N − n)/(N − 1) = (9/2)(4/5) = **3.6** ✓.

### S36. (CSS 2022) Population 0, 1, 5, 6, 8, 11. Draw all samples of size 3 without replacement, form the sampling distribution of x̄, and verify μ_x̄ = μ and σ²_x̄ = (σ²/n)(N − n)/(N − 1).

**Solution.**
1. μ = 31/6 = 5.1667; σ² = Σx²/N − μ² = 247/6 − 26.694 = 14.472.
2. ⁶C₃ = 20 samples and means: (0,1,5) 2; (0,1,6) 2.333; (0,1,8) 3; (0,1,11) 4; (0,5,6) 3.667; (0,5,8) 4.333; (0,5,11) 5.333; (0,6,8) 4.667; (0,6,11) 5.667; (0,8,11) 6.333; (1,5,6) 4; (1,5,8) 4.667; (1,5,11) 5.667; (1,6,8) 5; (1,6,11) 6; (1,8,11) 6.667; (5,6,8) 6.333; (5,6,11) 7.333; (5,8,11) 8; (6,8,11) 8.333.
3. Σx̄ = 103.333 ⇒ E(x̄) = 103.333/20 = **5.1667 = μ** ✓.
4. Σx̄² = 591.778 ⇒ Var(x̄) = 591.778/20 − 5.1667² = 29.589 − 26.694 = **2.894**.
5. Formula: (14.472/3)(3/5) = **2.894** ✓.

### S37. (CSS 2023) Draw all samples of size 2 with replacement from {4, 6, 8} and from {1, 2, 3}. Construct the sampling distribution of x̄₁ − x̄₂ and verify μ_{x̄₁−x̄₂} = μ₁ − μ₂ and σ² = σ₁²/n₁ + σ₂²/n₂.

**Solution.**
1. Population 1: μ₁ = 6, σ₁² = 8/3. Population 2: μ₂ = 2, σ₂² = 2/3.
2. 9 samples from each: x̄₁ ∈ {4, 5, 5, 6, 6, 6, 7, 7, 8}; x̄₂ ∈ {1, 1.5, 1.5, 2, 2, 2, 2.5, 2.5, 3}. All 81 combinations give differences:

| d | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5 | 5.5 | 6 | 6.5 | 7 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| f | 1 | 2 | 5 | 6 | 10 | 10 | 13 | 10 | 10 | 6 | 5 | 2 | 1 |

3. Mean of d = 324/81 = **4 = 6 − 2** ✓.
4. Var(d) = **5/3 = 1.667**; formula (8/3)/2 + (2/3)/2 = 4/3 + 1/3 = **5/3** ✓. (The distribution is symmetric about 4.)

### S38. (CSS 2021) (a) Population 0, 3, 6, 9, 12; samples of n = 3 without replacement: sampling distribution of x̄, its mean and SD, verifying the FPC formula. (b) Population 1, 2, 3, 4, 5: all samples of size 2 without replacement; mean of the sample variances compared with the population variance.

**Solution (a).** μ = 6, σ² = 18. ⁵C₃ = 10 samples; means 3, 4, 5, 5, 6, 6, 7, 7, 8, 9.
E(x̄) = 60/10 = **6** ✓. Var(x̄) = Σx̄²/10 − 36 = 390/10 − 36 = **3**; SD = 1.732. Formula: (18/3)(2/4) = 3 ✓.
**Solution (b).** Ten samples: s² (divisor n − 1 = 1) = (a − b)²/2: differences 1 (four pairs) → 0.5; 2 (three) → 2; 3 (two) → 4.5; 4 (one) → 8. Mean s² = (4 × 0.5 + 3 × 2 + 2 × 4.5 + 8)/10 = 25/10 = **2.5**.
Population variance σ² = 2 (divisor N), S² = 2.5 (divisor N − 1). So E(s²) = S² = Nσ²/(N − 1): s² is unbiased for S², and slightly overestimates σ² in finite-population sampling without replacement.

### S39. (CSS 2024) (a) Population X = 1, 2, 3, 4 with relative frequencies 1/7, 3/7, 2/7, 1/7. Find the sampling distribution of x̄ for samples of 3 without replacement and compare its variance with the population variance. (b) A sample of 100 is taken from a population with mean 20 and SD 5 (shape unknown). Describe the sampling distribution of x̄ and find P(x̄ > 20.75).

**Solution (a).** Interpret the population as N = 7 units: 1, 2, 2, 2, 3, 3, 4. μ = 17/7 = 2.429; σ² = 40/49 = 0.816.
⁷C₃ = 35 samples:

| x̄ | 5/3 | 2 | 7/3 | 8/3 | 3 | 10/3 |
|---|---|---|---|---|---|---|
| f | 3 | 7 | 10 | 8 | 6 | 1 |

E(x̄) = 85/35 = 17/7 ✓. Var(x̄) = 80/441 = **0.181** = (σ²/3)(4/6) ✓ — less than a quarter of the population variance (0.816): averages vary much less than single values.
**Solution (b).** By the CLT (n = 100 is large) x̄ ≈ N(20, (5/10)²) = N(20, 0.25). P(x̄ > 20.75) = P(Z > 0.75/0.5) = P(Z > 1.5) = **0.0668**.

### S40. (CSS 2018) Shrub heights are N(1.14 m, 0.25²). Fifty samples of 100 shrubs each are taken. How many sample means are expected (i) above 1.16 m, (ii) between 1.13 m and 1.18 m?

**Solution.**
1. σ_x̄ = 0.25/√100 = 0.025.
2. (i) z = (1.16 − 1.14)/0.025 = 0.8 ⇒ P = 1 − 0.7881 = 0.2119 ⇒ 50 × 0.2119 = **10.6 ≈ 11 samples**.
3. (ii) z = −0.4 and 1.6 ⇒ P = 0.9452 − 0.3446 = 0.6006 ⇒ 50 × 0.6006 = **30 samples**.

### S41. (CSS 2023) Population 1, 1, 1, 3, 4, 5, 6, 6, 6, 7. (i) For random samples of 36 with replacement, find P(3.26 < x̄ < 4.74). (ii) For samples of 4 without replacement, find the mean and SD of x̄, and the interval containing at least ¾ of the sample means.

**Solution.**
1. N = 10; μ = 40/10 = 4; σ² = Σx²/N − 16 = 210/10 − 16 = 5.
2. (i) σ_x̄ = √(5/36) = 0.3727. z = ±0.74/0.3727 = ±1.986. P = 2Φ(1.986) − 1 = **0.953** (CLT, n = 36).
3. (ii) E(x̄) = **4**; σ_x̄ = √[(5/4)(6/9)] = √0.8333 = **0.913**.
4. Chebyshev: at least 1 − 1/k² = ¾ within k = 2 SDs: 4 ± 1.826 = **(2.17, 5.83)**.

---

# G. Statistical Inference

### S42. (CSS 2025) Weights of four people before and after giving up smoking: before 148, 176, 153, 116; after 154, 176, 151, 121. Use a paired t-test at α = 0.05 to test that quitting has no effect on weight.

**Solution.**
1. Paired data (same people) ⇒ paired t. d = after − before = 6, 0, −2, 5.
2. H₀: μ_d = 0; H₁: μ_d ≠ 0; α = 0.05; df = n − 1 = 3; reject if |t| > t₀.₀₂₅,₃ = 3.182.
3. d̄ = 9/4 = 2.25; Σd² = 65; s_d² = (65 − 4(2.25)²)/3 = (65 − 20.25)/3 = 14.917; s_d = 3.862.
4. t = d̄/(s_d/√n) = 2.25/(3.862/2) = **1.165**.
5. 1.165 < 3.182 ⇒ **do not reject H₀**: the data give no evidence that giving up smoking changes weight (the sample is very small, so the test has little power).

### S43. (CSS 2020) Recovery times (minutes): medicine M1 (6 patients) 12, 9, 8, 11, 10, 9; M2 (8 patients) 5, 11, 7, 6, 8, 6, 5, 4. At 5%, is M2 better (faster) on average?

**Solution.**
1. Independent samples, small, assume normal populations with equal variances ⇒ pooled t.
2. H₀: μ₁ = μ₂; H₁: μ₁ > μ₂ (M2 faster); α = 0.05; df = 12; reject if t > 1.782.
3. x̄₁ = 59/6 = 9.833, s₁² = 2.167; x̄₂ = 52/8 = 6.5, s₂² = 4.857.
4. s_p² = [5(2.167) + 7(4.857)]/12 = 3.736; SE = √[3.736(1/6 + 1/8)] = 1.044.
5. t = (9.833 − 6.5)/1.044 = **3.19** > 1.782 ⇒ **reject H₀**: M2 gives significantly faster relief.

### S44. (CSS 2024) Weights of 8 sheep on food A: 49, 53, 51, 52, 47, 50, 52, 53; on food B: 52, 55, 52, 53, 50, 54, 54, 53. Assuming independent samples, test whether food B is better.

**Solution.**
1. H₀: μ_B = μ_A; H₁: μ_B > μ_A; α = 0.05; df = 14; reject if t > 1.761.
2. x̄_B = 52.875, s_B² = 2.411; x̄_A = 50.875, s_A² = 4.411. s_p² = (7 × 2.411 + 7 × 4.411)/14 = 3.411.
3. SE = √[3.411(1/8 + 1/8)] = 0.9234. t = 2.0/0.9234 = **2.17** > 1.761 ⇒ **reject H₀**: food B gives heavier sheep.
4. Testing process (part b): state hypotheses; check assumptions (normality, equal variances — here s_A²/s_B² = 1.83 < F₀.₀₂₅(7, 7) ≈ 4.99, so pooling is reasonable); compute; compare; conclude. If the same 8 sheep received both foods, use a paired test instead: d̄ = 2, s_d = 1.309, t = 4.32 on 7 df — even stronger evidence.

### S45. (CSS 2023) Two samples from normal populations with σ = 0.8: A: 10.5, 11.6, 12.7, 12.9, 13.5, 13.6, 14.8; B: 11.3, 12.4, 12.4, 13.9, 14.2, 14.7, 14.9, 15.6. Is the difference between means significant?

**Solution.**
1. σ known ⇒ z-test. H₀: μ_A = μ_B; H₁: μ_A ≠ μ_B; α = 0.05; reject if |z| > 1.96.
2. x̄_A = 89.6/7 = 12.800; x̄_B = 109.4/8 = 13.675.
3. SE = 0.8√(1/7 + 1/8) = 0.4140. z = (12.800 − 13.675)/0.4140 = **−2.11**.
4. |z| = 2.11 > 1.96 ⇒ **significant at 5%** (not at 1%, where the critical value is 2.576).

### S46. (CSS 2026, 2017) (a) Housing as % of income: five years ago n₁ = 200, x̄₁ = 32.42, s₁ = 6.08; now n₂ = 100, x̄₂ = 33.72, s₂ = 6.75. At 5%, has it increased? (b) Farm A: n = 100, mean 14 min, SD 2; farm B: n = 150, mean 11, SD 3. At 1%, are the mean times equal?

**Solution (a).**
1. Large samples ⇒ z. H₀: μ₂ = μ₁; H₁: μ₂ > μ₁; α = 0.05; reject if z > 1.645.
2. SE = √(6.08²/200 + 6.75²/100) = √(0.1848 + 0.4556) = 0.8003.
3. z = (33.72 − 32.42)/0.8003 = **1.62** < 1.645 ⇒ **do not reject H₀** (p ≈ 0.052). The economist cannot infer an increase at the 5% level, though the result is borderline.
**Solution (b).** H₀: μ_A = μ_B; H₁: μ_A ≠ μ_B; reject if |z| > 2.576. SE = √(4/100 + 9/150) = 0.3162; z = 3/0.3162 = **9.49** ⇒ **reject**: farm B is much faster.

### S47. (CSS 2016, 2021) (a) Smokers: 300 of 500 men in Lahore, 550 of 1000 in Karachi. Do the cities differ? (b) Mail order: white envelopes to 1000 women gave 10% orders, blue envelopes to another 1000 gave 30%. At 5%, does colour matter?

**Solution (a).**
1. H₀: P₁ = P₂; H₁: P₁ ≠ P₂; α = 0.05; |z| > 1.96.
2. p̂₁ = 0.60, p̂₂ = 0.55; pooled p̄ = 850/1500 = 0.5667, q̄ = 0.4333.
3. SE = √[0.5667 × 0.4333 × (1/500 + 1/1000)] = 0.02714. z = 0.05/0.02714 = **1.84**.
4. 1.84 < 1.96 ⇒ **not significant**: no evidence of a difference in smoking rates.
**Solution (b).** p̄ = 0.2; SE = √(0.2 × 0.8 × 2/1000) = 0.01789; z = (0.30 − 0.10)/0.01789 = **11.2** ⇒ **reject H₀**: envelope colour strongly affects sales (blue better).

### S48. (CSS 2021, 2022, 2018) Confidence intervals for P₁ − P₂: (a) 300/400 vs 200/300, 95%; (b) 62/100 women vs 69/150 men, 99%; (c) 400/900 men vs 420/1200 women prefer local brands: 99% CI and a 5% test.

**Solution.** CI: (p̂₁ − p̂₂) ± z√(p̂₁q̂₁/n₁ + p̂₂q̂₂/n₂).
(a) 0.750 − 0.667 = 0.083; SE = 0.0348; ± 1.96 SE ⇒ **(0.015, 0.151)**. Excludes 0: dormitory students approve more.
(b) 0.620 − 0.460 = 0.160; SE = 0.0633; ± 2.576 SE ⇒ **(−0.003, 0.323)**. Includes 0 (just): at 99% we cannot be sure the proportions differ.
(c) 0.444 − 0.350 = 0.094; SE = 0.0215 (unpooled); ± 2.576 SE ⇒ **(0.039, 0.150)**.
 Test: pooled p̄ = 820/2100 = 0.3905; z = 0.0944/√[0.3905 × 0.6095 × (1/900 + 1/1200)] = **4.39**. The paper's H₁ "men's proportion less than women's" is contradicted: the men's proportion is significantly *greater*. (State this; a one-sided test in the wrong direction can never reject.)

### S49. (CSS 2024, 2026, 2016) (a) A CI from n = 50, σ = 21 has limits 866.11 and 875.89. Find the confidence coefficient. (b) Construct a 95% CI for a normal mean from n = 10, x̄ = 50, s = 4, explaining each step. (c) How large a sample estimates μ within ±2 with 95% confidence if σ = 10?

**Solution (a).** x̄ = 871; half-width 4.89 = z(21/√50) = 2.970z ⇒ z = 1.6465 ⇒ confidence = 2Φ(1.6465) − 1 = **0.90 (90%)**.
**Solution (b).** σ unknown and n small ⇒ t with 9 df; t₀.₀₂₅,₉ = 2.262. SE = 4/√10 = 1.265. CI = 50 ± 2.262(1.265) = **(47.14, 52.86)**. Interpretation: intervals built this way contain μ in 95% of samples. (Assumes a normal population; the t interval is wider than a z interval to allow for estimating σ by s.)
**Solution (c).** n = (zσ/E)² = (1.96 × 10/2)² = 96.04 ⇒ **n = 97** (always round up).

### S50. (CSS 2021) In 800 families with 4 children, the number of boys was 0: 32, 1: 178, 2: 290, 3: 236, 4: 64. Test whether the data fit a binomial distribution with p = q = ½.

**Solution.**
1. H₀: X ~ Binomial(4, ½); H₁: not. α = 0.05.
2. Expected: 800 × ⁴Cₓ/16 = 50, 200, 300, 200, 50 (all ≥ 5).

| Boys | O | E | (O − E)²/E |
|---|---|---|---|
| 0 | 32 | 50 | 6.480 |
| 1 | 178 | 200 | 2.420 |
| 2 | 290 | 300 | 0.333 |
| 3 | 236 | 200 | 6.480 |
| 4 | 64 | 50 | 3.920 |
| Σ | 800 | 800 | **19.633** |

3. df = 5 − 1 = 4 (p was given, not estimated); χ²₀.₀₅,₄ = 9.488.
4. 19.63 > 9.488 ⇒ **reject H₀**: births are not equally likely boys and girls in these data.
5. Extra insight: the mean number of boys is 2.1525, so p̂ = 0.538. A binomial with p = 0.538 gives χ² = 1.37 on 3 df (critical 7.815) — an excellent fit. The data fit a binomial, but with p slightly above ½.

### S51. (CSS 2018) (a) 1000 young people: males 300 own expensive phones, 200 do not; females 400 own, 100 do not. At 5%, are gender and ownership related? (b) A sample of 25 cars; test at 5% whether σ² = 1.05 km/l² (take s² = 1.5, which the paper omitted).

**Solution (a).**
1. H₀: independent; H₁: related. df = (2 − 1)(2 − 1) = 1; χ²₀.₀₅,₁ = 3.841.
2. Expected = row × column/1000: own 350, 350; not own 150, 150.
3. χ² = (300 − 350)²/350 + (200 − 150)²/150 + (400 − 350)²/350 + (100 − 150)²/150 = 7.143 + 16.667 + 7.143 + 16.667 = **47.6**.
4. 47.6 > 3.841 ⇒ **reject H₀**: ownership depends on gender (80% of females vs 60% of males own one).
**Solution (b).** χ² = (n − 1)s²/σ₀² = 24(1.5)/1.05 = **34.29**. Two-sided 5% limits for 24 df: 12.40 and 39.36. 34.29 lies between ⇒ **do not reject** σ² = 1.05.

---

# H. Design of Experiments

### S52. (CSS 2025 and 2026 — identical data) Four varieties (treatments) in an RCBD with four blocks. Yields: Block I: 2, 5, 4, 1; II: 2, 3, 3, 1; III: 4, 6, 6, 2; IV: 1, 4, 2, 3 (columns V1–V4). Describe the layout and randomisation, give the general ANOVA table, and test at 5% whether the variety means are equal.

**Solution.**
1. **Layout (2026 part).** The field is divided into 4 blocks, each as uniform as possible (e.g. strips across a fertility gradient). Each block is split into 4 plots. In every block the 4 treatments are allocated to plots at random, separately for each block (e.g. by drawing lots): Block I: T3 T1 T4 T2; Block II: T2 T4 T1 T3; Block III: T1 T3 T2 T4; Block IV: T4 T2 T3 T1 (one possible randomisation). Every treatment appears once in every block — "complete" blocks.
2. **General ANOVA table:** sources Blocks (b − 1), Treatments (t − 1), Error ((b − 1)(t − 1)), Total (bt − 1); MS = SS/df; F = MS/MSE.
3. **Totals:** varieties T = 9, 18, 15, 7; blocks B = 12, 9, 18, 10; G = 49; N = 16; Σy² = 191.
4. CF = 49²/16 = 150.0625. SST = 191 − 150.0625 = 40.9375.
 SS_B = (12² + 9² + 18² + 10²)/4 − CF = 649/4 − 150.0625 = 12.1875.
 SS_V = (9² + 18² + 15² + 7²)/4 − CF = 679/4 − 150.0625 = 19.6875.
 SSE = 40.9375 − 12.1875 − 19.6875 = 9.0625.

| Source | df | SS | MS | F | F₀.₀₅ |
|---|---|---|---|---|---|
| Blocks | 3 | 12.1875 | 4.0625 | 4.03 | 3.86 |
| Varieties | 3 | 19.6875 | 6.5625 | **6.52** | 3.86 |
| Error | 9 | 9.0625 | 1.0069 | | |
| Total | 15 | 40.9375 | | | |

5. **Conclusion:** 6.52 > 3.86 ⇒ reject H₀; the four varieties do not give the same mean yield. Variety means: 2.25, 4.50, 3.75, 1.75 — V2 is best. LSD₀.₀₅ = 2.262√(2 × 1.0069/4) = 1.61, so V2 and V3 both beat V4, and V2 beats V1.
6. Blocks are also significant (4.03 > 3.86), and the efficiency of this RCBD relative to a CRD is [3(4.0625) + 12(1.0069)]/(15 × 1.0069) = **1.61**: blocking gave about 61% more precision.

### S53. (CSS 2024) Four wheat varieties A–D in four blocks. Yields: I: B 27, A 17, C 15, D 25; II: A 28, D 22, B 26, C 16; III: D 14, C 11, A 22, B 25; IV: C 18, B 18, D 19, A 17. (i) ANOVA for varieties and blocks at 5%. (ii) What if no blocking had been used?

**Solution.** (The printed "H 18" in block IV is read as B 18, the only missing variety.)
1. Variety totals: A 84, B 96, C 60, D 80. Block totals: 84, 92, 72, 72. G = 320, N = 16, Σy² = 6792, CF = 6400.
2. SST = 392; SS_blocks = (84² + 92² + 72² + 72²)/4 − 6400 = 72; SS_varieties = (84² + 96² + 60² + 80²)/4 − 6400 = 168; SSE = 152.

| Source | df | SS | MS | F | F₀.₀₅ |
|---|---|---|---|---|---|
| Blocks | 3 | 72 | 24.00 | 1.42 | 3.86 |
| Varieties | 3 | 168 | 56.00 | 3.32 | 3.86 |
| Error | 9 | 152 | 16.89 | | |
| Total | 15 | 392 | | | |

3. (i) Neither varieties (3.32 < 3.86) nor blocks (1.42) are significant at 5%.
4. (ii) As a CRD (blocks ignored): SSE = 152 + 72 = 224 on 12 df, MSE = 18.67; F = 56/18.67 = **3.00** < F₀.₀₅(3, 12) = 3.49 — still not significant. Here blocking removed only a little variation (MS_blocks is small), so the two analyses agree.

### S54. (CSS 2018, 2016) (a) Relief time (minutes) for three drugs: D1: 25, 38, 42, 65, 47, 52; D2: 15, 21, 19, 25; D3: 44, 39, 54, 58, 73. Test at 5% whether the mean relief time is the same. (b) Four groups with nᵢ = 4, 6, 7, 3, means 58, 57, 43, 42 and variances 10, 30.4, 5.67, 9: construct the ANOVA table.

**Solution (a).**
1. H₀: μ₁ = μ₂ = μ₃. Totals 269, 80, 268; G = 617; N = 15; Σy² = 29,689; CF = 617²/15 = 25,379.27.
2. SST = 4309.73; SS_Tr = 269²/6 + 80²/4 + 268²/5 − CF = 12,060.17 + 1600 + 14,364.8 − 25,379.27 = 2645.70; SSE = 1664.03.

| Source | df | SS | MS | F |
|---|---|---|---|---|
| Drugs | 2 | 2645.70 | 1322.85 | **9.54** |
| Error | 12 | 1664.03 | 138.67 | |
| Total | 14 | 4309.73 | | |

3. F₀.₀₅(2, 12) = 3.89 ⇒ **reject H₀**. Means 44.8, 20.0, 53.6: drug 2 gives much faster relief.
**Solution (b).**
1. Grand mean = (4·58 + 6·57 + 7·43 + 3·42)/20 = 1001/20 = 50.05.
2. SS_between = Σnᵢ(x̄ᵢ − 50.05)² = 4(63.20) + 6(48.30) + 7(49.70) + 3(64.80) = **1084.95**.
3. SS_within = Σ(nᵢ − 1)sᵢ² = 3(10) + 5(30.4) + 6(5.67) + 2(9) = **234.02** (sᵢ² read as sample variances).
4. F = (1084.95/3)/(234.02/16) = 361.65/14.63 = **24.73** > F₀.₀₅(3, 16) = 3.24 ⇒ the population means are not all equal.

### S55. (CSS 2017) A completely randomised design with four treatments: T1: 20.9, 12.4, 10.1, 4.2; T2: 23.7, 14.4, 9.0; T3: 13.2, 10.2, 5.1; T4: 5.8, 6.1, 4.8, 1.5. Analyse and conclude. Give the CRD model.

**Solution.**
1. Model: y_ij = μ + τᵢ + ε_ij, Στᵢ = 0 (or Σnᵢτᵢ = 0), ε_ij ~ N(0, σ²) independent.
2. Totals 47.6, 47.1, 28.5, 18.2; nᵢ = 4, 3, 3, 4; G = 141.4; N = 14; Σy² = 1960.70; CF = 141.4²/14 = 1428.14.
3. SST = 532.56; SS_Tr = 47.6²/4 + 47.1²/3 + 28.5²/3 + 18.2²/4 − CF = 566.44 + 739.47 + 270.75 + 82.81 − 1428.14 = 231.33; SSE = 301.23.

| Source | df | SS | MS | F | F₀.₀₅ |
|---|---|---|---|---|---|
| Treatments | 3 | 231.33 | 77.11 | 2.56 | 3.71 |
| Error | 10 | 301.23 | 30.12 | | |
| Total | 13 | 532.56 | | | |

4. 2.56 < 3.71 ⇒ **do not reject**: the treatment effects are not shown to differ (the within-treatment variation is large; more replication would be needed to detect differences of this size).

### S56. (CSS 2022) An RCBD analysis gave: Blocks df 8, SS 2.1074; Treatments df 3, SS 2.1006; Error df 24, SS 2.6249. (i) Complete the table. (ii) Standard errors of a treatment mean and of a difference. (iii) Treatment means are 1.464, 1.195, 1.325, 1.662: which differ by the LSD test?

**Solution.**
1. t = 4 treatments, r = 9 blocks.

| Source | df | SS | MS | F | F₀.₀₅ |
|---|---|---|---|---|---|
| Blocks | 8 | 2.1074 | 0.2634 | 2.41 | 2.36 |
| Treatments | 3 | 2.1006 | 0.7002 | **6.40** | 3.01 |
| Error | 24 | 2.6249 | 0.1094 | | |
| Total | 35 | 6.8329 | | | |

 Treatments significant; blocks just significant.
2. SE(mean) = √(MSE/r) = √(0.10937/9) = **0.110**; SE(difference) = √(2MSE/r) = **0.156**.
3. LSD₀.₀₅ = t₀.₀₂₅,₂₄ × 0.156 = 2.064 × 0.156 = **0.322**.
4. Ordered means: T2 1.195, T3 1.325, T1 1.464, T4 1.662. Differences: T4 − T2 = 0.467*, T4 − T3 = 0.337*, T4 − T1 = 0.198, T1 − T2 = 0.269, T1 − T3 = 0.139, T3 − T2 = 0.130 (* = exceeds LSD).
5. **T4 differs significantly from T2 and T3**; T4 is likely from a different population (the highest-yielding treatment).

### S57. (CSS 2023) Three students each took three tests in English, Mathematics and Statistics (scores as printed). Perform a two-way ANOVA testing equal difficulty of subjects, equal ability of students, and no interaction.

**Solution.** (Interpretation used: for each student, the printed groups of three are the three scores in English, then Mathematics, then Statistics. [verify against the original sheet])
Student 1: Eng 13, 23, 22; Math 18, 20, 23; Stat 15, 16, 20. Student 2: Eng 21, 20, 20; Math 16, 14, 15; Stat 24, 24, 22. Student 3: Eng 18, 17, 19; Math 15, 13, 21; Stat 12, 16, 18.
1. a = 3 students, b = 3 subjects, r = 3. G = 495; N = 27; Σy² = 9403; CF = 495²/27 = 9075; SST = 328.
2. Cell totals: S1 (58, 61, 51); S2 (61, 45, 70); S3 (54, 49, 46). Student totals 170, 176, 149; subject totals 173, 155, 167.
3. SS_students = (170² + 176² + 149²)/9 − 9075 = 44.67; SS_subjects = (173² + 155² + 167²)/9 − 9075 = 18.67; SS_cells = Σ(cell²)/3 − 9075 = 180.00; SS_interaction = 180.00 − 44.67 − 18.67 = 116.67; SSE = 328 − 180 = 148.

| Source | df | SS | MS | F | F₀.₀₅ |
|---|---|---|---|---|---|
| Students | 2 | 44.67 | 22.33 | 2.72 | 3.55 |
| Subjects | 2 | 18.67 | 9.33 | 1.14 | 3.55 |
| Interaction | 4 | 116.67 | 29.17 | **3.55** | 2.93 |
| Error | 18 | 148.00 | 8.22 | | |
| Total | 26 | 328.00 | | | |

4. (i) Subjects not significantly different in difficulty; (ii) students not significantly different overall; (iii) **interaction significant**: the students' relative performance depends on the subject (e.g. student 2 is best in Statistics but worst in Mathematics). When interaction is significant, main effects should be interpreted with care.
5. (Part b) Multiple t-tests instead of ANOVA: 3 pairwise tests at 5% each give about a 14% chance of at least one false "significant" result; ANOVA keeps the overall error at 5% and uses all the data for the error estimate.

### S58. (CSS 2020) A 3 × 3 Latin square: rows = professional interest (Law, Medicine, Engineering), columns = ethnic background (X, Y, Z), letters = instructors. Law: A75, B86, C69; Medicine: B95, C79, A86; Engineering: C70, A83, B93. Test at 5% the effects of instructor, background and professional interest.

**Solution.**
1. G = 736; N = 9; Σy² = 60,882; CF = 736²/9 = 60,188.44; SST = 693.56.
2. Row totals 230, 260, 246 ⇒ SS_rows = (230² + 260² + 246²)/3 − CF = 150.22.
 Column totals 240, 248, 248 ⇒ SS_cols = 14.22.
 Instructor totals A 244, B 274, C 218 ⇒ SS_instr = 523.56.
 SSE = 693.56 − 150.22 − 14.22 − 523.56 = 5.56 (df (t − 1)(t − 2) = 2).

| Source | df | SS | MS | F | F₀.₀₅(2, 2) |
|---|---|---|---|---|---|
| Professional interest | 2 | 150.22 | 75.11 | **27.0** | 19.0 |
| Ethnic background | 2 | 14.22 | 7.11 | 2.56 | 19.0 |
| Instructors | 2 | 523.56 | 261.78 | **94.2** | 19.0 |
| Error | 2 | 5.56 | 2.78 | | |
| Total | 8 | 693.56 | | | |

3. (i) Instructors **do** affect scores (B highest, mean 91.3; C lowest, 72.7). (ii) Ethnic background has **no** significant effect. (iii) Professional interest **does** matter (Medicine highest).
4. Multiple comparisons (part b): after a significant F, LSD, Tukey's HSD, Duncan's or Scheffé's tests show which means differ. LSD = t₀.₀₂₅,₂√(2MSE/3) = 4.303 × 1.361 = 5.86: all three instructor means differ from each other.

---

# I. Vital Statistics and Index Numbers

### S59. (CSS 2021) Female population, registered births and female survivors per 1000 for ages 15–19 to 40–44: population 8981, 5875, 3613, 3380, 3345, 3248; births 1835, 2616, 2563, 1062, 558, 37; survivors 634, 602, 568, 530, 488, 444. Sex ratio at birth 105.2 males per 100 females. Find GRR and NRR.

**Solution.**
1. Proportion of births that are female = 100/205.2 = 0.4873.

| Age | ASFR = births/women | Female ASFR (× 0.4873) | × survival (÷ 1000) |
|---|---|---|---|
| 15–19 | 0.2043 | 0.0996 | 0.0631 |
| 20–24 | 0.4453 | 0.2170 | 0.1306 |
| 25–29 | 0.7094 | 0.3457 | 0.1964 |
| 30–34 | 0.3142 | 0.1531 | 0.0812 |
| 35–39 | 0.1668 | 0.0813 | 0.0397 |
| 40–44 | 0.0114 | 0.0056 | 0.0025 |
| Σ | 1.8514 | 0.9022 | 0.5134 |

2. TFR = 5 × 1.8514 = 9.26; **GRR = 5 × 0.9022 = 4.51**; **NRR = 5 × 0.5134 = 2.57** daughters per woman.
3. NRR > 1: each generation of mothers would more than double itself, so the population is growing. NRR < GRR because some daughters die before or during the child-bearing years. (The rates are unrealistically high — the printed population figures may be in different units — but the method is what is marked.)

### S60. (CSS 2020, 2026) (a) Women and births by age (15–19 … 45–49): women 84,790, 70,010, 72,660, 75,920, 75,100, 71,620, 66,660; births 343, 14,541, 16,736, 12,218, 756, 82, 45. Find TFR and GFR. (b) Towns A and B by age group (<10, 11–25, 26–50, >50): A population 100, 1500, 850, 50 and deaths 40, 150, 108, 37; B population 1000, 500, 400, 100. Find the CDR of A and its standardised death rate using B as the standard population.

**Solution (a).**
1. ASFR per 1000: 4.05, 207.70, 230.33, 160.93, 10.07, 1.14, 0.68; Σ = 614.9.
2. **TFR = 5 × 614.9 = 3074 per 1000 women ≈ 3.07 children per woman.**
3. **GFR = (44,721/516,760) × 1000 = 86.5 births per 1000 women aged 15–49.**
**Solution (b).**
1. **CDR_A = (335/2500) × 1000 = 134 per 1000.**
2. A's age-specific death rates: 0.400, 0.100, 0.1271, 0.740.
3. Expected deaths in B's population at A's rates: 400 + 50 + 50.82 + 74 = 574.82 out of 2000.
4. **SDR_A = (574.82/2000) × 1000 = 287.4 per 1000.** (B's own CDR = 185.) Town A's crude rate looks lower than B's only because A has few children and old people; at the same age structure A's mortality is higher.

### S61. (CSS 2024, 2017) (a) Prices (Rs/40 kg) and quantities: A: p 3.95 → 4.25, q 9675 → 16,436; B: p 34.80 → 38.04, q 788 → 3; C: p 61.56 → 59.70, q 118 → 116 (2002 → 2004). Compute the Marshall–Edgeworth and Walsh price indices for 2004 (base 2002). (b) Explain the time-reversal and factor-reversal tests. (c) Per-capita income 1627, 1851, 1993, 2290, 2494, 2735, 2970 (1980–81 to 1986–87) and CPI 100, 103.5, 103.4, 109.4, 110.9, 113.8, 115.6: find real income and the real-income index.

**Solution (a).**
1. Marshall–Edgeworth: Σp₁(q₀ + q₁)/Σp₀(q₀ + q₁).
 q₀ + q₁: A 26,111; B 791; C 234. Numerator = 4.25(26,111) + 38.04(791) + 59.70(234) = 110,971.8 + 30,089.6 + 13,969.8 = 155,031.2. Denominator = 3.95(26,111) + 34.80(791) + 61.56(234) = 103,138.5 + 27,526.8 + 14,405.0 = 145,070.3.
 **P_ME = 106.87.**
2. Walsh: weights √(q₀q₁): A 12,610.2; B 48.6; C 117.0. Numerator = 53,593.5 + 1849.5 + 6984.9 = 62,427.9; denominator = 49,810.3 + 1691.9 + 7202.5 = 58,704.7. **P_W = 106.34.**
3. Prices rose by about 6–7% over the two years (Laspeyres 107.18, Paasche 106.55, Fisher 106.86 for comparison).
**Solution (b).** *Time reversal:* the index for period 1 on base 0 multiplied by the index for 0 on base 1 should equal 1 (P₀₁P₁₀ = 1). *Factor reversal:* the price index times the corresponding quantity index should equal the value ratio Σp₁q₁/Σp₀q₀. Fisher's ideal index satisfies both; Laspeyres and Paasche satisfy neither; Marshall–Edgeworth and Walsh satisfy time reversal only.
**Solution (c).** Real income = money income/CPI × 100: 1627, 1788, 1927, 2093, 2249, 2403, **2569**. Real-income index (1980–81 = 100): 100, 109.9, 118.5, 128.7, 138.2, 147.7, **157.9**. Money income rose 82.5% but real income only 57.9%; the difference is inflation.
