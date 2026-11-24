# Quick Revision — Statistics (one block per section)

Read the night before and on the morning of the paper. Memorise the critical values in §10.

## 1. Descriptive statistics
- Mean Σfx/n = A + hΣfu/n. Median l + (h/f)(n/2 − c). Q_k = l + (h/f)(kn/4 − c). Mode l + h(f₁ − f₀)/(2f₁ − f₀ − f₂). GM antilog(Σlog x/n). HM n/Σ(1/x). AM ≥ GM ≥ HM; GM² = AM·HM (two values).
- Mode ≈ 3Md − 2x̄. Median minimises Σ|x − a|; mean minimises Σ(x − a)².
- σ² = Σfx²/n − x̄²; s² divisor n − 1. CV = 100σ/x̄. QD = (Q₃ − Q₁)/2. MD = Σf|x − x̄|/n.
- μ₂ = μ′₂ − μ′₁²; μ₃ = μ′₃ − 3μ′₂μ′₁ + 2μ′₁³; μ₄ = μ′₄ − 4μ′₃μ′₁ + 6μ′₂μ′₁² − 3μ′₁⁴.
- β₁ = μ₃²/μ₂³, γ₁ = μ₃/μ₂^{3/2}; β₂ = μ₄/μ₂² (3 meso, > 3 lepto, < 3 platy).
- Pearson Sk = (x̄ − Mo)/σ ≈ 3(x̄ − Md)/σ. Bowley (Q₃ + Q₁ − 2Md)/(Q₃ − Q₁) ∈ [−1, 1].
- Positive skew: mean > median > mode.

## 2. Probability
- P(A ∪ B) = P(A) + P(B) − P(A ∩ B). P(A ∩ B) = P(A)P(B | A). Independent ⇔ P(A ∩ B) = P(A)P(B).
- Total probability P(A) = ΣP(Bᵢ)P(A | Bᵢ). Bayes P(Bⱼ | A) = P(Bⱼ)P(A | Bⱼ)/ΣP(Bᵢ)P(A | Bᵢ).
- ⁿPᵣ = n!/(n − r)!; ⁿCᵣ = n!/(r!(n − r)!).
- E(aX + b) = aE(X) + b; Var(aX + b) = a²Var(X); Var = E(X²) − μ². mgf M(t) = E(e^{tX}).
- Chebyshev: P(|X − μ| < kσ) ≥ 1 − 1/k².

## 3. Distributions
| | p(x) | Mean | Var |
|---|---|---|---|
| Binomial | ⁿCₓpˣqⁿ⁻ˣ | np | npq |
| Poisson | e^{−λ}λˣ/x! | λ | λ |
| Hypergeometric | ᵏCₓ ᴺ⁻ᵏC_{n−x}/ᴺCₙ | nk/N | n(k/N)(1 − k/N)(N − n)/(N − 1) |
| Normal | (1/σ√2π)e^{−(x−μ)²/2σ²} | μ | σ² |
| Exponential | λe^{−λx} | 1/λ | 1/λ² |
- Binomial mgf (q + pe^t)ⁿ; Poisson e^{λ(e^t − 1)}; normal e^{μt + σ²t²/2}.
- Poisson = limit of binomial (n → ∞, p → 0, np = λ). Normal approx to binomial: np, nq ≥ 5, continuity correction ±0.5.
- Normal: 68.27 / 95.45 / 99.73% within 1/2/3σ; Z = (X − μ)/σ.

## 4. Regression and correlation
- S_xx = ΣX² − (ΣX)²/n; S_xy = ΣXY − ΣXΣY/n. b = S_xy/S_xx; a = ȳ − bx̄.
- r = S_xy/√(S_xxS_yy); r² = 1 − SSE/S_yy; r = ±√(b_yx b_xy).
- SSE = S_yy − bS_xy; s_e = √(SSE/(n − 2)); SE(b) = s_e/√S_xx; t = b/SE(b), df n − 2.
- Three variables: b₃₁.₂ = (s₃/s₁)(r₁₃ − r₁₂r₂₃)/(1 − r₁₂²). r₁₂.₃ = (r₁₂ − r₁₃r₂₃)/√((1 − r₁₃²)(1 − r₂₃²)). R₁.₂₃² = (r₁₂² + r₁₃² − 2r₁₂r₁₃r₂₃)/(1 − r₂₃²).
- Spearman r_s = 1 − 6Σd²/(n(n² − 1)).

## 5. Non-parametric
- Sign: Bin(n, ½). Wilcoxon: T = min(T⁺, T⁻); z = (T − n(n + 1)/4)/√(n(n + 1)(2n + 1)/24).
- Mann–Whitney: U₁ = R₁ − n₁(n₁ + 1)/2; z = (U − n₁n₂/2)/√(n₁n₂(n₁ + n₂ + 1)/12).
- Kruskal–Wallis H = 12/(N(N + 1))ΣRᵢ²/nᵢ − 3(N + 1) ~ χ²(k − 1).
- Runs: E(R) = 2n₁n₂/(n₁ + n₂) + 1; Var = 2n₁n₂(2n₁n₂ − n₁ − n₂)/((n₁ + n₂)²(n₁ + n₂ − 1)).
- K–S: D = max|Fₙ − F₀|; large-n 5% critical 1.36/√n.

## 6. Sampling
- E(x̄) = μ; Var(x̄) = σ²/n (with replacement) or (σ²/n)(N − n)/(N − 1) (without). FPC ignorable if n/N < 0.05.
- Number of samples: Nⁿ (with), ᴺCₙ (without).
- Var(x̄₁ − x̄₂) = σ₁²/n₁ + σ₂²/n₂; Var(p̂) = PQ/n.
- CLT: x̄ ≈ N(μ, σ²/n) for large n.
- Designs: SRS, stratified, systematic, cluster, multistage (different units per stage), multiphase (same units, sub-samples). Non-probability: convenience, judgement, quota, snowball.

## 7. Inference
- CI: x̄ ± zσ/√n; x̄ ± t s/√n (df n − 1); p̂ ± z√(p̂q̂/n); (p̂₁ − p̂₂) ± z√(p̂₁q̂₁/n₁ + p̂₂q̂₂/n₂).
- Pooled s_p² = [(n₁ − 1)s₁² + (n₂ − 1)s₂²]/(n₁ + n₂ − 2); t = (x̄₁ − x̄₂)/(s_p√(1/n₁ + 1/n₂)).
- Paired t = d̄/(s_d/√n), df n − 1. Two proportions: pooled p̄.
- χ² = Σ(O − E)²/E; GoF df k − 1 − m; contingency df (r − 1)(c − 1). Variance: χ² = (n − 1)s²/σ₀².
- Sample size n = (zσ/E)²; n = z²PQ/E².
- α = P(Type I), β = P(Type II), power 1 − β. Six steps: H₀/H₁, α, statistic, critical region, compute, conclude.

## 8. Design of experiments
- Principles: randomisation, replication, local control.
- CRD: SS_Tr = ΣTᵢ²/nᵢ − CF; df k − 1, N − k.
- RCBD: SS_B = ΣB²/t − CF; SS_Tr = ΣT²/b − CF; error df (b − 1)(t − 1).
- Two-way with r reps: SS_AB = ΣT_cell²/r − CF − SS_A − SS_B; error df ab(r − 1).
- Latin square t × t: error df (t − 1)(t − 2).
- LSD = t_{α/2, df_E}√(2MSE/r). RE(RCBD vs CRD) = [(b − 1)MS_B + b(t − 1)MSE]/[(bt − 1)MSE].

## 9. Vital statistics and index numbers
- CBR, CDR per 1000 mid-year population. IMR per 1000 live births. GFR = births/women 15–49 × 1000.
- ASFR = births/women in group; TFR = 5ΣASFR; GRR = TFR × female share of births; NRR = 5Σ(female ASFR × survival). NRR = 1 replacement.
- SDR (direct) = Σ(ASDR × standard pop)/Σ standard pop.
- Sex ratio = males per 100 females; vital index = births/deaths × 100.
- L = Σp₁q₀/Σp₀q₀; P = Σp₁q₁/Σp₀q₁; Fisher √(LP); ME Σp₁(q₀ + q₁)/Σp₀(q₀ + q₁); Walsh Σp₁√(q₀q₁)/Σp₀√(q₀q₁).
- Time reversal P₀₁P₁₀ = 1; factor reversal P₀₁Q₀₁ = Σp₁q₁/Σp₀q₀ (Fisher passes both). Real value = money value/CPI × 100.
- GNP = GDP + net factor income from abroad; NDP = GDP − depreciation.
- PBS (census, CPI, LFS, national accounts), NADRA (CNIC, CRMS vital registration), SBP, NIPS (PDHS).

## 10. Critical values to memorise
- z: 1.645 (5% one-sided, 90% CI), **1.96**, 2.326, **2.576**.
- t₀.₀₂₅: df 3 → 3.182, 4 → 2.776, 5 → 2.571, 6 → 2.447, 7 → 2.365, 8 → 2.306, 9 → 2.262, 10 → 2.228, 12 → 2.179, 14 → 2.145, 20 → 2.086, 24 → 2.064, 30 → 2.042. t₀.₀₅: df 5 → 2.015, 12 → 1.782, 14 → 1.761.
- χ²₀.₀₅ (upper): df 1 → 3.841, 2 → 5.991, 3 → 7.815, 4 → 9.488, 5 → 11.07, 6 → 12.59.
- F₀.₀₅: (2, 12) 3.89; (3, 9) **3.86**; (3, 12) 3.49; (3, 16) 3.24; (3, 24) 3.01; (2, 2) 19.0; (2, 18) 3.55; (4, 18) 2.93.
