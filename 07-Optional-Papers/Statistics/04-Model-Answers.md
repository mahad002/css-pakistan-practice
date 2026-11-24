# Worked Solutions — Statistics (CSS)

**60 exam-style problems with full step-by-step solutions**, across every syllabus section. Most use the actual data of CSS questions 2016–2026 (year shown); a few are new practice problems of the same type. Every number was recomputed in python3 (pure Python: exact fractions for enumerations, my own implementations of the normal, t, χ² and F distributions checked against standard tables). Critical values are from `03-Notes/10-Statistical-Tables.md`.

**How a CSS statistics answer earns marks:** state the method/formula, lay out a table of sums, compute cleanly, give the decision with the table value, and **interpret in words**. For tests always write the six steps (H₀/H₁, α, statistic, critical region, computation, conclusion).

Contents: A. Descriptive (S1–S10) · B. Probability (S11–S17) · C. Distributions (S18–S24) · D. Regression & correlation (S25–S30) · E. Non-parametric (S31–S34) · F. Sampling (S35–S41) · G. Inference (S42–S51) · H. Design of experiments (S52–S57) · I. Vital statistics & index numbers (S58–S60).

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
