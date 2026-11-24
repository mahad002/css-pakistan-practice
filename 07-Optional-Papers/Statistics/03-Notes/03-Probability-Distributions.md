# 03 — Probability Distributions

Examined every year. Expect one derivation (mean/variance/mgf of the binomial, Poisson as a limit of the binomial, normal properties) and one application (normal-table problem or Poisson count). Normal-table questions appeared in 2018, 2022 (twice) and 2024 (lognormal).

---

## 1. Summary table

| Distribution | p(x) or f(x) | Mean | Variance | mgf |
|---|---|---|---|---|
| Bernoulli(p) | pˣq^{1−x}, x = 0, 1 | p | pq | q + pe^t |
| Binomial(n, p) | ⁿCₓ pˣ q^{n−x} | np | npq | (q + pe^t)ⁿ |
| Poisson(λ) | e^{−λ}λˣ/x! | λ | λ | e^{λ(e^t − 1)} |
| Hypergeometric(N, k, n) | ᵏCₓ·^{N−k}C_{n−x}/ᴺCₙ | nk/N | n(k/N)(1 − k/N)(N − n)/(N − 1) | — |
| Geometric (trial of 1st success) | q^{x−1}p | 1/p | q/p² | — |
| Uniform(a, b) | 1/(b − a) | (a + b)/2 | (b − a)²/12 | — |
| Exponential(λ) | λe^{−λx} | 1/λ | 1/λ² | λ/(λ − t) |
| Normal(μ, σ²) | (1/(σ√2π))e^{−(x−μ)²/(2σ²)} | μ | σ² | e^{μt + σ²t²/2} |

## 2. Binomial distribution

**Conditions:** n independent trials; two outcomes; constant p; X = number of successes.
**Derivation of mean and variance (2025).**
E(X) = Σx ⁿCₓ pˣqⁿ⁻ˣ = np Σ ⁿ⁻¹C_{x−1} p^{x−1}q^{n−x} = np (q + p)^{n−1} = **np**.
E[X(X − 1)] = n(n − 1)p² ⇒ Var = n(n − 1)p² + np − n²p² = np(1 − p) = **npq**.
Via mgf: M(t) = Σ ⁿCₓ(pe^t)ˣqⁿ⁻ˣ = (q + pe^t)ⁿ. M′(0) = np; M″(0) = n(n − 1)p² + np.
**Uses of the mgf:** generates moments; identifies distributions (uniqueness); proves limits (binomial → Poisson, → normal); sums of independent variables multiply their mgfs.
Shape: symmetric if p = ½; positively skewed if p < ½. Mode near (n + 1)p.

## 3. Poisson distribution

**Characteristics (2025):** counts of rare events in a fixed interval of time/space; events occur independently, singly, at a constant average rate λ. Mean = variance = λ. Positively skewed (skewness 1/√λ), tends to normal as λ grows. Sum of independent Poissons is Poisson.
**Examples:** typing errors per page; accidents per day on the Motorway; calls per minute at a call centre; defects per metre of cloth; radioactive decays per second.
**Relationships:** limit of the binomial; normal approximation for λ > 10 or so; inter-arrival times of a Poisson process are exponential.

**Poisson as a limit of the binomial (2023 derivation).** Let n → ∞, p → 0 with np = λ fixed:
ⁿCₓpˣqⁿ⁻ˣ = [n(n − 1)…(n − x + 1)/nˣ]·(λˣ/x!)·(1 − λ/n)ⁿ(1 − λ/n)^{−x} → 1·(λˣ/x!)·e^{−λ}·1 = **e^{−λ}λˣ/x!**.
Assumptions: n large, p small, np moderate (rule of thumb n ≥ 20, p ≤ 0.05).

**Poisson distribution vs Poisson process (2024).** The *distribution* describes one count X (e.g. calls in a given hour). The *process* {N(t), t ≥ 0} is a family of counts over time with independent, stationary increments, N(t) ~ Poisson(λt); waiting times between events are exponential with mean 1/λ. Example: arrivals at a bank counter over a day (process) vs the number arriving between 10 and 11 a.m. (distribution).

**Worked example (2026).** 2 errors per page on average. P(X ≥ 4) = 1 − e^{−2}(1 + 2 + 2 + 4/3) = 1 − 0.8571 = **0.1429**. P(X = 0) = e^{−2} = **0.1353**.

**Worked example (2017).** P(reaction) = 0.001, n = 2000 ⇒ λ = 2. Exactly 3: Poisson e^{−2}2³/6 = **0.1804** (binomial 0.1805). More than 2: 1 − e^{−2}(1 + 2 + 2) = **0.3233** (binomial 0.3233).

**Worked example (2018).** n = 250, p = 0.005 ⇒ λ = 1.25. P(X = 5) = e^{−1.25}(1.25)⁵/120 = **0.0073** (exact binomial 0.0072).

## 4. Hypergeometric distribution

Sampling **without replacement** from N items of which k are "successes": P(X = x) = ᵏCₓ·^{N−k}C_{n−x}/ᴺCₙ.
**Importance/uses (2016, 2021):** quality control (defectives in a lot sampled without replacement), card games, lotteries, wildlife capture–recapture, auditing a sample of invoices.
**Tends to the binomial (2016 proof idea):** as N → ∞ with k/N = p fixed, ᵏCₓ·^{N−k}C_{n−x}/ᴺCₙ → ⁿCₓpˣqⁿ⁻ˣ, because removing a few items barely changes the proportion. The factor (N − n)/(N − 1) in the variance is the finite population correction.

## 5. Normal distribution

f(x) = (1/(σ√2π))exp[−(x − μ)²/(2σ²)], −∞ < x < ∞.
**Properties:** bell-shaped, symmetric about μ; mean = median = mode = μ; points of inflection at μ ± σ; total area 1; tails approach the axis; β₁ = 0, β₂ = 3; about 68.27%, 95.45%, 99.73% of the area within 1, 2, 3σ; linear combinations of independent normals are normal.
**Mean and variance derivation (2025).** With z = (x − μ)/σ: E(X) = μ + σ∫z φ(z)dz = μ (odd integrand). Var = σ²∫z²φ(z)dz = σ² (integrate by parts: ∫z·zφ dz = [−zφ] + ∫φ = 1).
**Mean = median = mode:** symmetry about μ gives median μ; f′(x) = 0 only at x = μ gives mode μ.

**Standardising:** Z = (X − μ)/σ ~ N(0, 1). Read Φ(z) = P(Z ≤ z) from the table (see `10-Statistical-Tables.md`).

**Worked example (2022).** Cup contents N(200, 15²).
(i) P(191 < X < 209) = P(−0.6 < Z < 0.6) = 2(0.7257) − 1 = **0.4515**.
(ii) 230 ml cups overflow if X > 230: P(Z > 2) = 0.0228 ⇒ about **23 in 1000** drinks.
(iii) Smallest 25%: x = 200 + z₀.₂₅(15) = 200 − 0.6745(15) = **189.9 ml**.

**Worked example (2022).** Housework N(8.2, 2.1²): P(X ≥ 9) = P(Z ≥ 0.381) = **0.352**; P(X ≤ 7) = P(Z ≤ −0.571) = **0.284**.

**Worked example (2018).** N(250, 15²): P(X > 280) = P(Z > 2) = **0.0228**; P(240 < X < 260) = P(|Z| < 0.667) = **0.495**.

**Lognormal (2024).** If ln X ~ N(1, 4) then P(1 < X < 2) = P(0 < ln X < 0.6931) = Φ((0.6931 − 1)/2) − Φ((0 − 1)/2) = Φ(−0.153) − Φ(−0.5) = 0.4390 − 0.3085 = **0.1305**.

## 6. Normal approximations

- Binomial: if np ≥ 5 and nq ≥ 5, X ≈ N(np, npq). **Continuity correction:** P(X ≤ k) ≈ Φ((k + 0.5 − np)/√(npq)).
- Poisson: λ large, X ≈ N(λ, λ), with continuity correction.
Example: n = 100, p = 0.5, P(X ≤ 55) ≈ Φ((55.5 − 50)/5) = Φ(1.1) = 0.8643.

## 7. Other continuous distributions used in inference
- **χ²(ν):** sum of ν squared independent standard normals; mean ν, variance 2ν; positively skewed; tends to normal as ν grows (because it is a sum of i.i.d. terms — CLT) (2019).
- **t(ν):** Z/√(χ²/ν); symmetric, heavier tails than normal; → N(0, 1) as ν → ∞; range −∞ to ∞ (2025 MCQ).
- **F(ν₁, ν₂):** (χ²₁/ν₁)/(χ²₂/ν₂). If samples come from two normal populations with equal variances, s₁²/s₂² ~ F(n₁ − 1, n₂ − 1) (2019). Relations: t²(ν) = F(1, ν); ν₁F(ν₁, ∞) = χ²(ν₁).

---

## Exam checklist
- Derive mean/variance/mgf of the binomial; Poisson as a limit.
- Normal problems: standardise, sketch the curve, shade the area, read the table.
- Know when each discrete distribution applies (with/without replacement, rare events).
