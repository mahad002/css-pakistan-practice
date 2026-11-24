# 04 — Regression and Correlation Analysis

Examined in 9 of 11 papers. The biggest single question type is a **full simple-regression analysis** from raw data (2016, 2020, 2022, 2025): line, r, r², prediction, standard error, test and confidence interval for β. Multiple regression / partial correlation with three variables appeared in 2019, 2021 and 2023.

---

## 1. Simple linear regression

**Model:** Yᵢ = α + βXᵢ + εᵢ. **Assumptions (2017, 2021):** (1) relationship is linear; (2) X values fixed (measured without error); (3) E(εᵢ) = 0; (4) constant variance σ² (homoscedasticity); (5) errors independent; (6) errors normal (needed for tests and intervals).

**Least squares.** Choose a, b to minimise S = Σ(Yᵢ − a − bXᵢ)². Setting ∂S/∂a = ∂S/∂b = 0 gives the **normal equations**:
ΣY = na + bΣX; ΣXY = aΣX + bΣX².
Solution: **b = S_xy/S_xx**, **a = ȳ − b x̄**, where
S_xx = ΣX² − (ΣX)²/n, S_yy = ΣY² − (ΣY)²/n, S_xy = ΣXY − ΣXΣY/n.
(In a sketch: the line through the scatter that minimises the sum of squared *vertical* distances from points to the line — draw small squares on those vertical gaps.)

**Properties of the least-squares line (2019):** passes through (x̄, ȳ); residuals sum to zero (Σeᵢ = 0); ΣXᵢeᵢ = 0; Σŷᵢ = Σyᵢ; a and b are unbiased, and best among linear unbiased estimators (Gauss–Markov).

**Inference.**
SSE = S_yy − bS_xy; s_e = √(SSE/(n − 2)) (standard error of estimate, "standard deviation of errors").
SE(b) = s_e/√S_xx; test H₀: β = 0 with **t = b/SE(b)**, df = n − 2. CI: b ± t_{α/2, n−2}·SE(b).
SE(a) = s_e√(1/n + x̄²/S_xx).
Mean response at x₀: ŷ₀ ± t·s_e√(1/n + (x₀ − x̄)²/S_xx); single prediction: ŷ₀ ± t·s_e√(1 + 1/n + (x₀ − x̄)²/S_xx).

**Worked example (2022 — machine age vs breakdowns).** Ages X: 12, 7, 2, 8, 13, 9, 4; breakdowns Y: 10, 5, 1, 4, 12, 7, 2. n = 7.
ΣX = 55, ΣY = 41, ΣX² = 527, ΣY² = 339, ΣXY = 416.
S_xx = 527 − 55²/7 = 94.857; S_yy = 339 − 41²/7 = 98.857; S_xy = 416 − 55(41)/7 = 93.857.
(i) Expect B > 0 (older machines break down more).
(iii) b = 93.857/94.857 = **0.9895**; a = 5.857 − 0.9895(7.857) = **−1.917**. **ŷ = −1.917 + 0.9895x**.
(iv) r = 93.857/√(94.857 × 98.857) = **0.969**; r² = **0.939** (94% of the variation in breakdowns is explained by age).
(v) At x = 10: ŷ = **7.98** breakdowns.
(vi) SSE = 98.857 − 0.9895(93.857) = 5.989; s_e = √(5.989/5) = **1.094**.
(vii) SE(b) = 1.094/√94.857 = 0.1124. 90% CI: 0.9895 ± 2.015(0.1124) = **(0.763, 1.216)**.
(viii) t = 0.9895/0.1124 = **8.80** > t₀.₀₂₅,₅ = 2.571 ⇒ reject H₀: β = 0; age has a significant effect.

**Residuals (2025).** eᵢ = yᵢ − ŷᵢ; Σeᵢ = 0 always (because the line passes through the means) — a check on arithmetic, not a test of fit.

## 2. Correlation

**Pearson's r** = S_xy/√(S_xx S_yy) = [nΣXY − ΣXΣY]/√{[nΣX² − (ΣX)²][nΣY² − (ΣY)²]}.
**Properties (2023, 2022):** −1 ≤ r ≤ 1; unit-free; symmetric (r_xy = r_yx); unchanged by change of origin and scale (sign flips if one scale factor is negative); r = 0 means no *linear* relation (not independence); r² = coefficient of determination; r = ±√(b_yx b_xy) with the sign of the regression coefficients; r is the geometric mean of the two regression slopes.
**Conditions/assumptions for correlation (2025):** both variables random, measured on an interval scale, roughly bivariate normal, relation linear; no extreme outliers.
**Test:** t = r√(n − 2)/√(1 − r²), df n − 2.
**Correlation vs regression (2016):** correlation measures the strength of association symmetrically; regression gives a predictive equation with a dependent and an independent variable. Examples: height–weight correlation (association); predicting sales from advertising spend (regression).
**Coefficient of determination r²:** proportion of variation in Y explained by the regression on X = 1 − SSE/S_yy.

**Worked example (2025).** n = 20, x̄ = 2, ȳ = 8, ΣX² = 180, ΣY² = 1424, ΣXY = 404.
S_xy = 404 − 20(2)(8) = 84; S_xx = 180 − 80 = 100; S_yy = 1424 − 1280 = 144. r = 84/√(100 × 144) = **0.70** — a fairly strong positive linear relation.

**Worked example (2018).** Eight mills: persons employed and cloth (000 m): r = **0.936**, strong positive.

**Spearman's rank correlation** (useful for ranked data): r_s = 1 − 6Σd²/[n(n² − 1)].

## 3. Multiple regression (three variables)

Model X₁ = a + b₁₂.₃X₂ + b₁₃.₂X₃. Normal equations:
ΣX₁ = na + b₁₂ΣX₂ + b₁₃ΣX₃;
ΣX₁X₂ = aΣX₂ + b₁₂ΣX₂² + b₁₃ΣX₂X₃;
ΣX₁X₃ = aΣX₃ + b₁₂ΣX₂X₃ + b₁₃ΣX₃².
**From summary statistics** (means, SDs, simple r's), regression of X₃ on X₁, X₂:
b₃₁.₂ = (s₃/s₁)(r₁₃ − r₁₂r₂₃)/(1 − r₁₂²); b₃₂.₁ = (s₃/s₂)(r₂₃ − r₁₂r₁₃)/(1 − r₁₂²); a = x̄₃ − b₃₁.₂x̄₁ − b₃₂.₁x̄₂.
Interpretation: b₃₁.₂ is the change in X₃ per unit change in X₁ with X₂ held constant.
**Multiple vs simple regression (2018):** simple regression has one predictor; multiple regression uses two or more and separates their individual effects.
F-test of all slopes together: F = (SSR/k)/(SSE/(n − k − 1)) (2026 MCQ: "partial regression coefficients simultaneously" ⇒ F-test).

**Worked example (2021).** Quiz 1 (X₁): mean 6.8, s 1.0; quiz 2 (X₂): 7.0, 0.8; final (X₃): 74, 9.0; r₁₂ = 0.60, r₁₃ = 0.70, r₂₃ = 0.65.
b₃₁.₂ = 9(0.70 − 0.39)/0.64 = **4.359**; b₃₂.₁ = (9/0.8)(0.65 − 0.42)/0.64 = **4.043**; a = 74 − 4.359(6.8) − 4.043(7.0) = **16.055**.
X̂₃ = 16.055 + 4.359X₁ + 4.043X₂. Scores (9, 7): **83.6**; (4, 8): **65.8**.
R₃.₁₂ = √[(r₁₃² + r₂₃² − 2r₁₂r₁₃r₂₃)/(1 − r₁₂²)] = √[(0.49 + 0.4225 − 0.546)/0.64] = **0.757**.

## 4. Partial and multiple correlation

**Partial correlation** r₁₂.₃ = correlation between X₁ and X₂ after removing the linear effect of X₃:
r₁₂.₃ = (r₁₂ − r₁₃r₂₃)/√[(1 − r₁₃²)(1 − r₂₃²)].
Equivalent method (2023): regress X₁ on X₃ and X₂ on X₃, take the residuals X₁.₃ and X₂.₃, and correlate them.
**Multiple correlation** R₁.₂₃ = correlation between X₁ and its best linear prediction from X₂ and X₃; 0 ≤ R ≤ 1; R₁.₂₃² = (r₁₂² + r₁₃² − 2r₁₂r₁₃r₂₃)/(1 − r₂₃²).
**Multiple vs partial (2018):** multiple correlation measures the joint effect of several variables on one; partial measures the net association of two with others held constant.

**Worked example (2023).** X₁: 7, 12, 14, 17, 20; X₂: 4, 7, 8, 9, 12; X₃: 1, 2, 4, 5, 8.
X₁ on X₃: X̂₁ = 7.067 + 1.733X₃. X₂ on X₃: X̂₂ = 3.867 + 1.033X₃.
Residuals X₁.₃: −1.800, 1.467, 0, 1.267, −0.933; X₂.₃: −0.900, 1.067, 0, −0.033, −0.133.
r(X₁.₃, X₂.₃) = **0.831** = r₁₂.₃ (same from the formula with r₁₂ = 0.987, r₁₃ = 0.959, r₂₃ = 0.971).

---

## Common mistakes
- Using S_yy where S_xx belongs in b.
- Testing β with df = n − 1 (it is n − 2 in simple regression).
- Saying r = 0 means "no relation" — it means no *linear* relation.
- Predicting far outside the observed X range (extrapolation).

## Exam checklist
- A full regression table (ΣX, ΣY, ΣX², ΣY², ΣXY) laid out neatly.
- Line, r, r², s_e, t-test for β, CI for β, prediction.
- Three-variable regression from summary statistics; r₁₂.₃; R₃.₁₂.
