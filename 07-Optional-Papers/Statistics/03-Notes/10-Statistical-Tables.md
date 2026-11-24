# 10 — Statistical Tables: what you need and how to use them

**Will tables be provided in the hall?** I could not confirm this. The CSS papers 2016–2026 do not print tables, and the printed instructions mention only that a calculator is allowed. [verify with FPSC or recent candidates] **Plan as if no table is given:** memorise the critical values below (they cover almost every CSS question since 2016). If a question needs a value you do not know, state the value you would read from the table and the decision rule in symbols; examiners give most of the marks for correct working.

All values below were computed in python3 (inverse distribution functions) and agree with standard published tables to the digits shown.

---

## 1. Standard normal (z) table

The table gives Φ(z) = P(Z ≤ z), the area to the left of z. Some books give the area between 0 and z instead (= Φ(z) − 0.5) — check the heading.

**How to use:** (1) standardise z = (x − μ)/σ; (2) round z to 2 decimals; (3) row = first decimal, column = second decimal; (4) for negative z, use Φ(−z) = 1 − Φ(z); (5) P(a < Z < b) = Φ(b) − Φ(a). Always sketch the curve and shade the area.

| z | 0.5 | 1.0 | 1.5 | 1.645 | 1.96 | 2.0 | 2.326 | 2.576 | 3.0 |
|---|---|---|---|---|---|---|---|---|---|
| Φ(z) | 0.6915 | 0.8413 | 0.9332 | 0.9500 | 0.9750 | 0.9772 | 0.9900 | 0.9950 | 0.9987 |

**Critical z values:**

| Confidence / test | Two-sided | One-sided |
|---|---|---|
| 90% / α = 0.10 | 1.645 | 1.282 |
| 95% / α = 0.05 | **1.960** | **1.645** |
| 99% / α = 0.01 | **2.576** | 2.326 |

Useful extra values: Φ(0.38) ≈ 0.648, Φ(0.57) ≈ 0.716, Φ(0.6) = 0.7257, Φ(0.67) ≈ 0.749, Φ(0.8) = 0.7881, z₀.₇₅ = 0.6745 (quartile).

## 2. Student's t table

Rows = degrees of freedom (df); columns = upper-tail area (or two-tailed α). Value t such that P(T > t) = column area.
**How to use:** find df (n − 1 one sample; n₁ + n₂ − 2 pooled; n − 2 regression; error df in ANOVA for LSD); choose the column: for a two-sided test at 5% use the 0.025 column; one-sided 5% use 0.05.

| df | 0.05 | 0.025 | 0.01 | 0.005 |
|---|---|---|---|---|
| 1 | 6.314 | 12.706 | 31.821 | 63.657 |
| 2 | 2.920 | 4.303 | 6.965 | 9.925 |
| 3 | 2.353 | 3.182 | 4.541 | 5.841 |
| 4 | 2.132 | 2.776 | 3.747 | 4.604 |
| 5 | 2.015 | 2.571 | 3.365 | 4.032 |
| 6 | 1.943 | 2.447 | 3.143 | 3.707 |
| 7 | 1.895 | 2.365 | 2.998 | 3.499 |
| 8 | 1.860 | 2.306 | 2.896 | 3.355 |
| 9 | 1.833 | 2.262 | 2.821 | 3.250 |
| 10 | 1.812 | 2.228 | 2.764 | 3.169 |
| 12 | 1.782 | 2.179 | 2.681 | 3.055 |
| 14 | 1.761 | 2.145 | 2.624 | 2.977 |
| 15 | 1.753 | 2.131 | 2.602 | 2.947 |
| 16 | 1.746 | 2.120 | 2.583 | 2.921 |
| 18 | 1.734 | 2.101 | 2.552 | 2.878 |
| 20 | 1.725 | 2.086 | 2.528 | 2.845 |
| 24 | 1.711 | 2.064 | 2.492 | 2.797 |
| 30 | 1.697 | 2.042 | 2.457 | 2.750 |
| 60 | 1.671 | 2.000 | 2.390 | 2.660 |
| 120 | 1.658 | 1.980 | 2.358 | 2.617 |
| ∞ | 1.645 | 1.960 | 2.326 | 2.576 |

## 3. Chi-square (χ²) table

Value with the stated area to the **left** (lower-tail columns) — be careful: many books tabulate the area to the right. Right-tail 5% = left-tail 0.95.
**How to use:** goodness of fit df = k − 1 − (parameters estimated); contingency df = (r − 1)(c − 1); variance test df = n − 1 (two-sided: use both the 0.025 and 0.975 points); Kruskal–Wallis df = k − 1.

| df | 0.025 | 0.05 | 0.95 | 0.975 | 0.99 |
|---|---|---|---|---|---|
| 1 | 0.001 | 0.004 | **3.841** | 5.024 | 6.635 |
| 2 | 0.051 | 0.103 | **5.991** | 7.378 | 9.210 |
| 3 | 0.216 | 0.352 | **7.815** | 9.348 | 11.345 |
| 4 | 0.484 | 0.711 | **9.488** | 11.143 | 13.277 |
| 5 | 0.831 | 1.145 | 11.070 | 12.833 | 15.086 |
| 6 | 1.237 | 1.635 | 12.592 | 14.449 | 16.812 |
| 8 | 2.180 | 2.733 | 15.507 | 17.535 | 20.090 |
| 10 | 3.247 | 3.940 | 18.307 | 20.483 | 23.209 |
| 15 | 6.262 | 7.261 | 24.996 | 27.488 | 30.578 |
| 20 | 9.591 | 10.851 | 31.410 | 34.170 | 37.566 |
| 24 | 12.401 | 13.848 | 36.415 | 39.364 | 42.980 |
| 30 | 16.791 | 18.493 | 43.773 | 46.979 | 50.892 |

## 4. F table (upper 5% points)

F(ν₁, ν₂): ν₁ = numerator df (columns: treatments, k − 1), ν₂ = denominator df (rows: error df). Value with 5% in the upper tail.
**How to use:** ANOVA F = MS_treatment/MSE is compared with F₀.₀₅(t − 1, error df); reject if larger. For a two-variance test put the larger variance on top and use the α/2 table for a two-sided test. Lower points: F_{1−α}(ν₁, ν₂) = 1/F_α(ν₂, ν₁).

| ν₂ \ ν₁ | 1 | 2 | 3 | 4 | 5 | 6 | 8 |
|---|---|---|---|---|---|---|---|
| 2 | 18.51 | 19.00 | 19.16 | 19.25 | 19.30 | 19.33 | 19.37 |
| 3 | 10.13 | 9.55 | 9.28 | 9.12 | 9.01 | 8.94 | 8.85 |
| 4 | 7.71 | 6.94 | 6.59 | 6.39 | 6.26 | 6.16 | 6.04 |
| 5 | 6.61 | 5.79 | 5.41 | 5.19 | 5.05 | 4.95 | 4.82 |
| 6 | 5.99 | 5.14 | 4.76 | 4.53 | 4.39 | 4.28 | 4.15 |
| 8 | 5.32 | 4.46 | 4.07 | 3.84 | 3.69 | 3.58 | 3.44 |
| 9 | 5.12 | 4.26 | **3.86** | 3.63 | 3.48 | 3.37 | 3.23 |
| 10 | 4.96 | 4.10 | 3.71 | 3.48 | 3.33 | 3.22 | 3.07 |
| 12 | 4.75 | 3.89 | 3.49 | 3.26 | 3.11 | 3.00 | 2.85 |
| 14 | 4.60 | 3.74 | 3.34 | 3.11 | 2.96 | 2.85 | 2.70 |
| 16 | 4.49 | 3.63 | 3.24 | 3.01 | 2.85 | 2.74 | 2.59 |
| 18 | 4.41 | 3.55 | 3.16 | 2.93 | 2.77 | 2.66 | 2.51 |
| 20 | 4.35 | 3.49 | 3.10 | 2.87 | 2.71 | 2.60 | 2.45 |
| 24 | 4.26 | 3.40 | 3.01 | 2.78 | 2.62 | 2.51 | 2.36 |
| 30 | 4.17 | 3.32 | 2.92 | 2.69 | 2.53 | 2.42 | 2.27 |

Upper 1% points (selected): F₀.₀₁(3, 9) = 6.99; F₀.₀₁(3, 12) = 5.95; F₀.₀₁(2, 12) = 6.93; F₀.₀₁(3, 24) = 4.72.

**The RCBD 4 × 4 case (asked 2025 and 2026): F₀.₀₅(3, 9) = 3.86.** Memorise it.

## 5. Non-parametric tables (how to read)

| Table | Enter with | Decision |
|---|---|---|
| **Binomial (sign test)** | n (non-zero differences), p = ½ | P(X ≤ x) from binomial tables or by direct calculation; reject if ≤ α |
| **Wilcoxon signed-rank** | n (non-zero differences) | Reject if T = min(T⁺, T⁻) ≤ table value. Two-sided 5%: n = 6: 0; 7: 2; 8: 3; 9: 5; 10: 8; 11: 10; 12: 13; 13: 17; 14: 21; 15: 25 |
| **Mann–Whitney U** | n₁, n₂ | Reject if U ≤ table value. Two-sided 5%: (4, 5): 1; (5, 6): 3; (6, 8): 8 |
| **Runs test (Swed–Eisenhart)** | n₁, n₂ | Two tables: lower r_L and upper r_U. Reject randomness if R ≤ r_L or R ≥ r_U. For n₁ = 8, n₂ = 6 at 5%: reject if R ≤ 3 or R ≥ 12 |
| **Kolmogorov–Smirnov** | n (or n₁, n₂) | Reject if D > table value; large n, 5%: 1.36/√n (one sample), 1.36√((n₁ + n₂)/(n₁n₂)) (two samples) |
| **Kruskal–Wallis** | k − 1 df | Use χ² table when each nᵢ ≥ 5 |

(The Wilcoxon, Mann–Whitney and runs values above were computed exactly by enumeration.)

## 6. How to quote a table value in an answer

Write it like this: "At α = 0.05 with 9 df, the tabulated value is t₀.₀₂₅,₉ = 2.262. Since |t| = 3.10 > 2.262, we reject H₀." — the symbol, the df, the value, the comparison and the conclusion. If unsure of the value, write the symbol and the rule; you will lose at most a mark.
