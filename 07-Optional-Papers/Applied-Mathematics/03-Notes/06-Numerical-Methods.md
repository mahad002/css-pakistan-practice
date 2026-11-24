# 06 — Numerical Methods (30% of syllabus; ~26% of questions asked 2016–2026)

The largest and most calculator-friendly section. Every paper has four to six numerical parts, usually spread over two questions. With a scientific calculator and a clean table layout you can score 17–19/20 here. **Newton–Raphson, Gauss–Seidel, trapezoidal/Simpson and (modified) Euler** are near-certain each year.

Exam habits for this section:
- Show the formula first, then a table of iterations. Carry 6 decimals unless told otherwise; round only the final answer.
- Set the calculator to **radians** for any trig function.
- State the stopping rule (|xₙ₊₁ − xₙ| < tolerance).
- Where possible, compare with the exact answer and give the error. Examiners like it and often ask for it.

---

## 1. Errors and rounding

Absolute error = |true − approx|; relative error = absolute/|true|; percentage = 100 × relative.
**k-digit rounding arithmetic (2025):** round every intermediate result to k significant figures. Example: 2/3 in 3-digit arithmetic = 0.667.
Sources: round-off (finite digits) and truncation (cutting an infinite process).

## 2. Root finding: bracketing methods

**Bisection.** f continuous on [a, b], f(a)f(b) < 0. c = (a + b)/2; keep the half where the sign changes. Error after n steps ≤ (b − a)/2ⁿ⁺¹. Number of steps for tolerance ε: n ≥ log₂((b − a)/ε) − 1. Always converges, slowly (linear, ratio ½).

**Worked example (2022).** x³ + 4x² − 10 on [1, 2] to 10⁻⁴.

| n | a | b | c | f(c) |
|---|---|---|---|---|
| 1 | 1 | 2 | 1.5 | 2.375 |
| 2 | 1 | 1.5 | 1.25 | −1.797 |
| 3 | 1.25 | 1.5 | 1.375 | 0.162 |
| 4 | 1.25 | 1.375 | 1.3125 | −0.848 |
| 5 | 1.3125 | 1.375 | 1.34375 | −0.351 |
| 6 | 1.34375 | 1.375 | 1.359375 | −0.096 |
| 7 | 1.359375 | 1.375 | 1.3671875 | 0.032 |

Continue to 13–14 steps: **root ≈ 1.3652** (true 1.365230).

**Regula falsi (false position).** c = [a f(b) − b f(a)]/[f(b) − f(a)] (the x-intercept of the chord). Keep the sign-change bracket. Usually faster than bisection; one end can get stuck (2017 asked you to compare: for x¹⁰ − 1 on [0, 1.3] false position is very slow because the curve is flat near 0 and steep near 1.3, so bisection wins there).
**Example (2020).** ln x − cos x = 0 on [1, 2]: c₁ = 1.32754, c₂ = 1.30367, c₃ = 1.30298 → **root 1.30296**.

## 3. Root finding: open methods

**Newton–Raphson.** xₙ₊₁ = xₙ − f(xₙ)/f′(xₙ). Geometric meaning: tangent line intercept. Quadratic convergence near a simple root. Fails if f′ ≈ 0 or the start is poor.
**Square root of N (2026):** f = x² − N ⇒ **xₙ₊₁ = ½(xₙ + N/xₙ)**. √14 from x₀ = 4: 3.75, 3.741667, 3.741657 → **3.741657**.
**Reciprocal:** xₙ₊₁ = xₙ(2 − Nxₙ). **k-th root:** xₙ₊₁ = [(k − 1)xₙ + N/xₙ^{k−1}]/k.

**Worked example (2025).** x − cos x = 0, x₀ = π/4. f′ = 1 + sin x.
x₁ = 0.739536, x₂ = 0.739085, x₃ = 0.739085 → **0.7391** (to 10⁻⁴ after 3 steps).

**Secant method.** xₙ₊₁ = xₙ − f(xₙ)(xₙ − xₙ₋₁)/[f(xₙ) − f(xₙ₋₁)]. No derivative needed; order ≈ 1.618. Does not keep a bracket.
**Example (2023).** 2x − 3 sin x − 5 = 0, x₀ = 2, x₁ = 3: x₂ = 2.866039, x₃ = 2.883101, x₄ = 2.883237, x₅ = 2.883237 → **2.8832**.

**Fixed-point iteration.** Rewrite f(x) = 0 as x = g(x); iterate xₙ₊₁ = g(xₙ). Converges if |g′(x)| < 1 near the root (rate ≈ |g′(root)|).
**Example (2022).** x⁴ − 3x² − 3 = 0 on [1, 2], p₀ = 1, g(x) = (3x² + 3)^{1/4}: 1.56508, 1.79357, 1.88594, 1.92285, 1.93751, 1.94332, 1.94562, 1.94653 → |p₈ − p₇| < 10⁻² ⇒ **p ≈ 1.94** (true root 1.94712).

**Order of convergence.** If eₙ₊₁ ≈ C eₙᵖ, the order is p. Bisection 1 (linear), fixed-point 1, secant 1.618, Newton 2.

## 4. Linear systems: iterative methods

**Diagonal dominance:** |aᵢᵢ| > Σ_{j≠i}|aᵢⱼ| in every row. It is *sufficient* (not necessary) for Jacobi and Gauss–Seidel to converge (2019 asked this). If a system is not dominant, **reorder the equations** first.

**Jacobi:** every new value uses only old values.
xᵢ^{(k+1)} = [bᵢ − Σ_{j≠i} aᵢⱼxⱼ^{(k)}]/aᵢᵢ.
**Gauss–Seidel:** use each new value as soon as it is computed. Usually about twice as fast as Jacobi.

**Worked example (2024, Gauss–Seidel).** 20x + y − 2z = 17, 3x + 20y − z = −18, 2x − 3y + 20z = 25, start (0, 0, 0).
x = (17 − y + 2z)/20, y = (−18 − 3x + z)/20, z = (25 − 2x + 3y)/20.

| k | x | y | z |
|---|---|---|---|
| 1 | 0.85000 | −1.02750 | 1.01088 |
| 2 | 1.00246 | −0.99983 | 0.99978 |
| 3 | 0.99997 | −1.00001 | 1.00000 |

**Solution (1, −1, 1).**

**Worked example (2021, Jacobi).** 10x + 3y + z = 19, 3x + 10y + 2z = 29, x + 2y + 10z = 35 → iterates (1.9, 2.9, 3.5), (0.68, 1.63, 2.73), (1.138, 2.150, 3.106), … → **(1, 2, 3)** after about 8 iterations.

**Why not Gaussian elimination?** (2019) Iterative methods are preferred for large sparse systems, are self-correcting (round-off does not accumulate), and are simple to program.

## 5. Interpolation and finite differences

Forward difference Δfᵢ = fᵢ₊₁ − fᵢ; backward ∇fᵢ = fᵢ − fᵢ₋₁. Build a difference table; for a polynomial of degree n the n-th differences are constant.

**Newton forward** (near the start): p = (x − x₀)/h,
f(x) ≈ f₀ + pΔf₀ + p(p − 1)Δ²f₀/2! + p(p − 1)(p − 2)Δ³f₀/3! + …
**Newton backward** (near the end): p = (x − xₙ)/h,
f(x) ≈ fₙ + p∇fₙ + p(p + 1)∇²fₙ/2! + p(p + 1)(p + 2)∇³fₙ/3! + …
**Lagrange** (any spacing): f(x) ≈ Σ fᵢ Lᵢ(x), Lᵢ = Π_{j≠i}(x − xⱼ)/(xᵢ − xⱼ).
**Newton divided differences** (any spacing): f[x₀, x₁] = (f₁ − f₀)/(x₁ − x₀), etc.; f(x) ≈ f₀ + (x − x₀)f[x₀, x₁] + (x − x₀)(x − x₁)f[x₀, x₁, x₂] + ….

**Worked example (2019).** x: 0, 0.2, 0.4, 0.6; f: 15, 21, 30, 51. Δ: 6, 9, 21; Δ²: 3, 12; Δ³: 9.
f(0.1): p = 0.5. Quadratic: 15 + 0.5(6) + 0.5(−0.5)(3)/2 = **17.625**; cubic adds 0.5(−0.5)(−1.5)(9)/6 = 0.5625 → 18.1875.
f(0.5): backward from 0.6, p = −0.5, ∇ = 21, ∇² = 12, ∇³ = 9. Quadratic: 51 − 10.5 − 1.5 = **39.0**; cubic: 39.0 − 0.5625 = 38.4375.

**Worked example (2017, Lagrange).** (0, 3.850), (20, 0.800), (40, 0.212). f(15): linear (first two points) = **1.5625**; quadratic = **1.3317**.

## 6. Numerical differentiation

From Newton forward at x₀:
f′(x₀) ≈ (1/h)[Δf₀ − Δ²f₀/2 + Δ³f₀/3 − Δ⁴f₀/4 + …]
f″(x₀) ≈ (1/h²)[Δ²f₀ − Δ³f₀ + (11/12)Δ⁴f₀ − …]
Simple formulas:

| Formula | Error order |
|---|---|
| forward f′ ≈ (f₁ − f₀)/h | O(h) |
| backward f′ ≈ (f₀ − f₋₁)/h | O(h) |
| central f′ ≈ (f₁ − f₋₁)/(2h) | O(h²) |
| 3-point endpoint f′ ≈ (−3f₀ + 4f₁ − f₂)/(2h) | O(h²) |
| 5-point central f′ ≈ (f₋₂ − 8f₋₁ + 8f₁ − f₂)/(12h) | O(h⁴) |
| central f″ ≈ (f₁ − 2f₀ + f₋₁)/h² | O(h²) |

**Worked example (2022).** f = xeˣ, h = 0.1: f(1.8) = 10.889365, f(1.9) = 12.703199, f(2.0) = 14.778112, f(2.1) = 17.148957, f(2.2) = 19.855030. f′(2.0): 3-point endpoint (forward) 22.0323; 3-point endpoint (backward) 22.0545; 3-point midpoint 22.2288; 5-point midpoint **22.1670**. Exact 3e² = 22.1672.

## 7. Numerical integration

h = (b − a)/n, fᵢ = f(a + ih).

| Rule | Formula | Condition | Error term |
|---|---|---|---|
| Trapezoidal | (h/2)[f₀ + 2(f₁ + … + fₙ₋₁) + fₙ] | any n | −(b − a)h²f″(ξ)/12 |
| Simpson 1/3 | (h/3)[f₀ + 4(odd) + 2(even) + fₙ] | n even | −(b − a)h⁴f⁽⁴⁾(ξ)/180 |
| Simpson 3/8 | (3h/8)[f₀ + 3f₁ + 3f₂ + 2f₃ + 3f₄ + … + fₙ] | n multiple of 3 | −(b − a)h⁴f⁽⁴⁾(ξ)/80 |
| Gauss 2-point | ∫_{−1}^{1}f ≈ f(−1/√3) + f(1/√3) | — | exact for cubics |

Simpson's rules are exact for cubics; the trapezoidal rule is exact for straight lines. For Gauss on [a, b], put x = (b + a)/2 + (b − a)t/2, dx = (b − a)dt/2.

**Derivation of 2-point Gauss (2019).** Seek ∫_{−1}^{1}f ≈ w₁f(t₁) + w₂f(t₂) exact for 1, t, t², t³: w₁ + w₂ = 2; w₁t₁ + w₂t₂ = 0; w₁t₁² + w₂t₂² = 2/3; w₁t₁³ + w₂t₂³ = 0 ⇒ w₁ = w₂ = 1, t = ±1/√3.

**Worked example (2016, 2018 — asked twice).** ∫₀¹dx/(1 + x²), n = 4, h = 0.25. f: 1, 0.941176, 0.8, 0.64, 0.5.
T = 0.125[1 + 2(0.941176 + 0.8 + 0.64) + 0.5] = **0.782794**. S = (0.25/3)[1 + 4(0.941176 + 0.64) + 2(0.8) + 0.5] = **0.785392**. Exact π/4 = 0.785398. Errors 0.0026 and 0.000006.

**Worked example (2019 trick).** Trapezoidal gives 4 and Simpson gives 2 for ∫₀²f. T (one interval, h = 2): f(0) + f(2) = 4. S (h = 1): (f(0) + 4f(1) + f(2))/3 = 2 ⇒ 4 + 4f(1) = 6 ⇒ **f(1) = ½**.

## 8. Numerical solution of ODEs y′ = f(x, y), y(x₀) = y₀

**Taylor series method.** y(x₀ + h) = y₀ + hy₀′ + h²y₀″/2 + …, getting y″, y‴ by differentiating the ODE. (2020 used it to tabulate ∫₀ˣ (sin t)/t dt = x − x³/18 + x⁵/600 − x⁷/35280 + ….)

**Euler.** yₙ₊₁ = yₙ + h f(xₙ, yₙ). Error O(h) globally.
**Worked example (2025).** y′ = 1 + y/x, y(1) = 2, h = 0.25: y(1.25) = 2.75, y(1.5) = 3.55, y(1.75) = 4.391667, **y(2) = 5.269048**. Exact y = x ln x + 2x gives 5.386294 at x = 2 (error 0.117).

**Modified (improved) Euler / Heun.** Predictor y* = yₙ + h f(xₙ, yₙ); corrector yₙ₊₁ = yₙ + (h/2)[f(xₙ, yₙ) + f(xₙ₊₁, y*)]. Error O(h²). (Some books iterate the corrector; say which version you use.)
**Worked example (2026).** y′ = y − x² + 1, y(0) = 0.5, h = 0.5: y(0.5) = 1.375, y(1) = 2.515625, y(1.5) = 3.775391, **y(2) = 4.916260**. Exact y = (x + 1)² − 0.5eˣ: 1.425639, 2.640859, 4.009155, 5.305472.

**Runge–Kutta, 2nd order (Heun form):** k₁ = hf(xₙ, yₙ), k₂ = hf(xₙ + h, yₙ + k₁), yₙ₊₁ = yₙ + (k₁ + k₂)/2.
**Runge–Kutta, 4th order:**
k₁ = hf(xₙ, yₙ); k₂ = hf(xₙ + h/2, yₙ + k₁/2); k₃ = hf(xₙ + h/2, yₙ + k₂/2); k₄ = hf(xₙ + h, yₙ + k₃);
yₙ₊₁ = yₙ + (k₁ + 2k₂ + 2k₃ + k₄)/6. Error O(h⁴).
**Worked example.** y′ = x + y, y(0) = 1, h = 0.2: k = 0.2, 0.24, 0.244, 0.2888 ⇒ **y(0.2) = 1.242800**; second step ⇒ y(0.4) = 1.583636. Exact 2eˣ − x − 1: 1.242806, 1.583649.

**Systems and second-order equations (2024).** Write y″ = F(x, y, y′) as y′ = z, z′ = F(x, y, z) and apply RK4 to both, computing each kᵢ for y and z together.

---

## Common mistakes

- Calculator in degree mode.
- Simpson 1/3 with an odd number of intervals.
- Jacobi and Gauss–Seidel confused (Jacobi never uses a new value within the same sweep).
- Forgetting to reorder a non-dominant system.
- Not stating h, n and the formula at the start.

## Exam checklist

- One fully tabulated example of every method above.
- The derivations most often asked: Newton–Raphson (geometric), 2-point Gauss, trapezoidal error idea.
- Practise with a timer: a 10-mark numerical part should take 15–18 minutes.
