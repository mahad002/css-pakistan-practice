# 08 — Design of Experiments (ANOVA, CRD, RCBD)

Examined in 10 of 11 papers, almost always as a full 20-mark question. **RCBD analysis** appeared in 2019, 2022, 2024, 2025 and 2026 — and **2025 and 2026 used exactly the same data table**. One-way ANOVA (CRD) appeared in 2016, 2017, 2018. This is the most "bankable" question in Section B.

---

## 1. Principles

**Experiment:** a planned study in which the investigator applies treatments to experimental units and measures responses.
**Experimental design:** the plan for allocating treatments to units.
**Basic principles (2018):**
1. **Randomisation** — treatments allocated to units by a random process. Removes systematic bias, makes errors independent, and validates the F-test.
2. **Replication** — each treatment applied to several units. Allows estimation of experimental error and increases precision (SE of a mean = σ/√r).
3. **Local control (blocking)** — group similar units into blocks and compare treatments within blocks; removes block-to-block variation from the error.
**Experimental error (2017, 2025 MCQ):** variation among units treated alike — due to uncontrolled factors (soil fertility, measurement error).
**Number of replications depends on (2017):** the size of difference to detect, the variability of units, the desired power and α, and resources.

## 2. One-way ANOVA (CRD)

**Model:** y_ij = μ + τᵢ + ε_ij, ε_ij ~ N(0, σ²) independent; i = 1…k treatments, j = 1…nᵢ (2017).
**Assumptions (2016):** independent random samples; normal populations; equal variances (homogeneity); additive effects.
**Meaning:** ANOVA splits total variation into parts due to identified sources and error, and compares the variance between treatment means with the variance within treatments. If H₀ (all μᵢ equal) is true, both estimate σ² and F ≈ 1.
**Degrees of freedom:** the number of independent pieces of information in a sum of squares (n − 1 for n deviations that sum to zero).

**Computation:** G = grand total, N = Σnᵢ, CF = G²/N.
SST = Σy² − CF; SS_Tr = ΣTᵢ²/nᵢ − CF; SSE = SST − SS_Tr.

| Source | df | SS | MS | F |
|---|---|---|---|---|
| Treatments | k − 1 | SS_Tr | SS_Tr/(k − 1) | MS_Tr/MSE |
| Error | N − k | SSE | SSE/(N − k) | |
| Total | N − 1 | SST | | |

Reject H₀ if F > F_{α}(k − 1, N − k). **A significant F (2025)** means at least one treatment mean differs — not that all differ; follow up with a multiple-comparison test.

**Randomisation in a CRD (2025).** 3 wheat varieties, 18 plots ⇒ 6 plots each. Number the plots 1–18; draw random numbers (or shuffle 18 cards labelled A×6, B×6, C×6) and assign in order. Every arrangement is equally likely; no blocking. Suitable when the plots are homogeneous (e.g. a greenhouse).

**Worked example (2018, unequal n).** Relief times: drug 1 (25, 38, 42, 65, 47, 52), drug 2 (15, 21, 19, 25), drug 3 (44, 39, 54, 58, 73).
T = 269, 80, 268; G = 617; N = 15; CF = 25,379.27; Σy² = 29,689; SST = 4309.73; SS_Tr = 269²/6 + 80²/4 + 268²/5 − CF = 2645.70; SSE = 1664.03.
MS_Tr = 1322.85; MSE = 138.67; **F = 9.54** > F₀.₀₅(2, 12) = 3.89 ⇒ mean relief times differ (drug 2 fastest).

**Worked example (2016, from summary statistics).** nᵢ = 4, 6, 7, 3; means 58, 57, 43, 42; variances 10, 30.4, 5.67, 9. Grand mean = 1001/20 = 50.05. SS_Tr = Σnᵢ(x̄ᵢ − x̄)² = 1084.95; SSE = Σ(nᵢ − 1)sᵢ² = 234.02. F = (1084.95/3)/(234.02/16) = **24.73** > 3.24 ⇒ reject equality.

**Why not many t-tests (2023):** with k groups there are k(k − 1)/2 comparisons; each at 5% inflates the overall chance of at least one false rejection (for 3 groups about 14%, for 6 groups about 54% if independent). ANOVA tests all means at once at the stated α, uses a pooled error estimate, and extends to several factors.

## 3. Randomised complete block design (RCBD)

**Layout (2024, 2026):** divide the field into b homogeneous blocks (e.g. strips of equal fertility, perpendicular to the fertility gradient); each block has t plots; assign all t treatments at random within each block (a separate randomisation per block). Describe: "Block I: T3 T1 T4 T2; Block II: T2 T4 T1 T3; …" (draw a grid of blocks as rows).
**Model:** y_ij = μ + τᵢ + βⱼ + ε_ij.
**Advantages:** removes block variation from error (more precise than CRD when blocks differ); flexible; simple analysis; missing values can be estimated. **Disadvantages:** loses error df; inefficient if blocks are not homogeneous or with many treatments (blocks get large).

**Computation:** CF = G²/(bt); SST = Σy² − CF; SS_Blocks = ΣBⱼ²/t − CF; SS_Tr = ΣTᵢ²/b − CF; SSE = SST − SS_B − SS_Tr.

| Source | df | SS | MS | F |
|---|---|---|---|---|
| Blocks | b − 1 | SS_B | MS_B | MS_B/MSE |
| Treatments | t − 1 | SS_Tr | MS_Tr | MS_Tr/MSE |
| Error | (b − 1)(t − 1) | SSE | MSE | |
| Total | bt − 1 | SST | | |

**Worked example (2025 and 2026 — identical data).** Four varieties (treatments) in four blocks:

| Block | V1 | V2 | V3 | V4 | Total |
|---|---|---|---|---|---|
| I | 2 | 5 | 4 | 1 | 12 |
| II | 2 | 3 | 3 | 1 | 9 |
| III | 4 | 6 | 6 | 2 | 18 |
| IV | 1 | 4 | 2 | 3 | 10 |
| Total | 9 | 18 | 15 | 7 | G = 49 |

CF = 49²/16 = 150.0625; Σy² = 191; SST = 40.9375; SS_B = (144 + 81 + 324 + 100)/4 − CF = 12.1875; SS_Tr = (81 + 324 + 225 + 49)/4 − CF = 19.6875; SSE = 9.0625.

| Source | df | SS | MS | F | F₀.₀₅ |
|---|---|---|---|---|---|
| Blocks | 3 | 12.1875 | 4.0625 | 4.03 | 3.86 |
| Varieties | 3 | 19.6875 | 6.5625 | **6.52** | 3.86 |
| Error | 9 | 9.0625 | 1.0069 | | |
| Total | 15 | 40.9375 | | | |

**Conclusion:** reject H₀ — the variety means differ (V2 best, mean 4.5). Blocking was also worthwhile (F = 4.03 > 3.86).

**Relative efficiency (2019, 2022).** Efficiency of RCBD relative to CRD:
RE = [(b − 1)MS_B + b(t − 1)MSE]/[(bt − 1)MSE]. RE > 1 means blocking paid off (a CRD would need RE times as many replicates for the same precision). For the table above: RE = [3(4.0625) + 12(1.0069)]/(15 × 1.0069) = 1.61.
For a Latin square relative to an RCBD with rows as blocks: RE = [MS_col + (t − 1)MSE]/(t·MSE).

## 4. Multiple comparisons: LSD

After a significant F: **LSD = t_{α/2, error df}·√(2MSE/r)**. Two treatment means differ significantly if their difference exceeds LSD.
SE of a treatment mean = √(MSE/r); SE of a difference = √(2MSE/r).
Other procedures (2020): Tukey's HSD (controls the family-wise error), Duncan's multiple range, Scheffé, Bonferroni.

**Worked example (2022).** Partial RCBD table: blocks df 8, SS 2.1074; treatments df 3, SS 2.1006; error df 24, SS 2.6249. So r = 9 blocks, t = 4.
MS: blocks 0.2634, treatments 0.7002, error 0.10937. F_Tr = **6.40** > F₀.₀₅(3, 24) = 3.01 (significant); F_B = 2.41 > 2.36 (blocks just significant).
SE(mean) = √(0.10937/9) = **0.110**; SE(difference) = **0.156**; LSD = 2.064 × 0.156 = **0.322**.
Means: T1 1.464, T2 1.195, T3 1.325, T4 1.662. Differences > 0.322: T4 − T2 = 0.467, T4 − T3 = 0.337. **T4 differs from T2 and T3**; other pairs do not differ.

## 5. Two-way classification with interaction (r observations per cell)

SS_cells = ΣT_cell²/r − CF; SS_A = ΣA²/(br) − CF; SS_B = ΣB²/(ar) − CF; SS_AB = SS_cells − SS_A − SS_B; SSE = SST − SS_cells. df: a − 1, b − 1, (a − 1)(b − 1), ab(r − 1).
**Worked example (2023).** 3 students × 3 subjects × 3 scores (as printed). G = 495, CF = 9075, SST = 328; SS_students = 44.67, SS_subjects = 18.67, SS_interaction = 116.67, SSE = 148 (df 18, MSE = 8.22).
F: students 2.72, subjects 1.14 (both < F₀.₀₅(2, 18) = 3.55); interaction **3.55 > F₀.₀₅(4, 18) = 2.93**. Conclusion: no overall difference in subject difficulty or student ability, but a significant interaction — students differ in which subject they do well in.

## 6. Latin square design (2020)

t treatments arranged in a t × t grid so each appears once in each row and each column; controls two nuisance factors.
SS_rows, SS_cols, SS_Tr each from totals divided by t; SSE = SST − rows − cols − treatments; error df (t − 1)(t − 2).
**Worked example (2020).** 3 × 3: rows = professional interest, columns = ethnic background, letters = instructors. G = 736; CF = 60,188.44; SST = 693.56; rows 150.22; columns 14.22; instructors 523.56 (A 244, B 274, C 218); SSE = 5.56 (df 2, MSE 2.78).
F (df 2, 2; F₀.₀₅ = 19.0): instructors **94.2** (significant), professional interest **27.0** (significant), ethnic background 2.56 (not significant).

---

## Exam checklist
- Write the ANOVA table with df, SS, MS, F and the table F, and a one-line conclusion.
- RCBD layout (randomise within blocks) and analysis; RE versus CRD.
- LSD after a significant F.
- Short essays: principles of design; why ANOVA not many t-tests; meaning of a significant F.
