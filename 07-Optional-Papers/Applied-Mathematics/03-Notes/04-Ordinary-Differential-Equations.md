# 04 — Ordinary Differential Equations (20% of syllabus; ~23% of questions asked 2016–2026)

Every paper has two to five ODE parts. These are the most reliable marks in the paper: the methods are mechanical and the examiner can see each step. **Variation of parameters** (six papers), **Bernoulli** (four), **power series** (four) and **Bessel** (three) are the favourites.

Decision chart for a first-order equation dy/dx = f(x, y):

1. Can you separate x and y? → separable.
2. Is M dx + N dy = 0 with M_y = N_x? → exact.
3. Is it y′ + P(x)y = Q(x)? → linear (integrating factor).
4. Is it y′ + P(x)y = Q(x)yⁿ? → Bernoulli (v = y^{1−n}).
5. Is it y′ = P + Qy + Ry² with one known solution? → Riccati.
6. Is f(tx, ty) = f(x, y)? → homogeneous (y = vx).

---

## 1. Separable equations

Form: g(y)dy = f(x)dx. Integrate both sides; add one constant.

**Worked example (2025).** √(1 − y²)dx − √(1 − x²)dy = 0, y(0) = √3/2.
dy/√(1 − y²) = dx/√(1 − x²) ⇒ sin⁻¹y = sin⁻¹x + C. At x = 0: C = sin⁻¹(√3/2) = π/3.
**y = sin(sin⁻¹x + π/3) = x/2 + (√3/2)√(1 − x²)**.

## 2. Exact equations and integrating factors

M dx + N dy = 0 is exact iff ∂M/∂y = ∂N/∂x. Then the solution is F(x, y) = C with F_x = M, F_y = N.
Practical rule: ∫M dx (y constant) + ∫(terms of N not containing x) dy = C.

If not exact, look for an integrating factor (IF):
- (M_y − N_x)/N = g(x) only ⇒ IF = e^{∫g dx}.
- (N_x − M_y)/M = h(y) only ⇒ IF = e^{∫h dy}.
- M = y f(xy), N = x g(xy) ⇒ IF = 1/(Mx − Ny).
- Homogeneous M, N ⇒ IF = 1/(Mx + Ny).

**Worked example (2018).** (3x²y + 2)dx + (x³ + y)dy = 0. M_y = 3x² = N_x ✓ exact.
∫M dx = x³y + 2x; extra from N: ∫y dy = y²/2. **x³y + 2x + y²/2 = C**.

**Worked example (2017).** (2xy + y − tan y)dx + (x² − x tan²y + sec²y)dy = 0.
M_y = 2x + 1 − sec²y; N_x = 2x − tan²y = 2x − (sec²y − 1) = 2x + 1 − sec²y ✓ exact.
Solution: **x²y + xy − x tan y + tan y = C**.

## 3. Linear first-order equations

y′ + P(x)y = Q(x). IF = e^{∫P dx}. Then (y·IF)′ = Q·IF ⇒ y·IF = ∫Q·IF dx + C.

**Worked example (2022).** xy′ + y = eˣ, y(1) = 2. Already (xy)′ = eˣ ⇒ xy = eˣ + C. y(1) = 2 ⇒ C = 2 − e.
**y = (eˣ + 2 − e)/x**, largest interval of definition **(0, ∞)** (x = 0 excluded, and the initial point x = 1 lies in (0, ∞)).

**Worked example (2023).** x dy = (x sin x − y)dx ⇒ y′ + y/x = sin x. IF = x. (xy)′ = x sin x ⇒ xy = sin x − x cos x + C ⇒ **y = (sin x)/x − cos x + C/x**.

**Modelling (2026).** A lake of volume V (constant: inflow = outflow = r per day) receives water with pollutant concentration c_in. Let Q(t) = amount of pollutant. Rate in − rate out: dQ/dt = r c_in − (r/V)Q. Linear: Q = Vc_in + (Q₀ − Vc_in)e^{−rt/V}. The pollutant level tends to V c_in; the time scale is V/r.

**Substitution check (2026).** (1 + x²)y′ + 2xy = e^{x²}. This is ((1 + x²)y)′ = e^{x²}. The suggested substitution y = v e^{x²} gives (1 + x²)(v′ + 2xv) + 2xv = 1, i.e. **(1 + x²)v′ + 2x(2 + x²)v = 1**, a linear equation in v. (Shows the substitution works but is not simpler than the IF method.)

## 4. Bernoulli and Riccati equations

**Bernoulli:** y′ + P y = Q yⁿ (n ≠ 0, 1). Divide by yⁿ and put v = y^{1−n}: v′ + (1 − n)P v = (1 − n)Q — linear.
Difference from a linear equation (2019): a linear equation has y to the first power only; Bernoulli has a yⁿ term on the right, which the substitution removes.

**Worked example (2016).** y′ + y/x = x³y⁴. n = 4, v = y^{−3}: v′ − 3v/x = −3x³. IF = x^{−3}: (v x^{−3})′ = −3 ⇒ v = −3x⁴ + Cx³.
**1/y³ = Cx³ − 3x⁴**.

**Worked example (2023).** xy′ + y = 1/y² ⇒ y′ + y/x = y^{−2}/x. n = −2, v = y³: v′ + 3v/x = 3/x. IF = x³: (vx³)′ = 3x² ⇒ vx³ = x³ + C.
**y³ = 1 + C/x³**.

**Riccati:** y′ = P(x) + Q(x)y + R(x)y². If y₁ is one solution, put y = y₁ + 1/v: v′ = −(Q + 2Ry₁)v − R (linear).
**Worked example.** y′ = 1 + x² − 2xy + y², y₁ = x. Then Q + 2Ry₁ = −2x + 2x = 0, so v′ = −1, v = C − x. **y = x + 1/(C − x)**.

## 5. Orthogonal trajectories

Method: (1) differentiate the family and eliminate the constant to get y′ = f(x, y); (2) replace y′ by −1/y′; (3) solve. In polar, replace r dθ/dr by −(1/r) dr/dθ.
**Example.** y = cx²: y′ = 2y/x. Orthogonal: y′ = −x/(2y) ⇒ 2y dy = −x dx ⇒ **x² + 2y² = k** (ellipses).

## 6. Higher-order linear equations with constant coefficients

L(D)y = F(x), D = d/dx. General solution y = y_c + y_p.

**Complementary function** from the auxiliary equation L(m) = 0:

| Roots | Terms in y_c |
|---|---|
| real distinct m₁, m₂ | c₁e^{m₁x} + c₂e^{m₂x} |
| real repeated m (k times) | (c₁ + c₂x + … + c_k x^{k−1})e^{mx} |
| complex α ± iβ | e^{αx}(c₁ cos βx + c₂ sin βx) |

**Example (2022).** y‴ − 4y″ − 5y′ = 0: m(m² − 4m − 5) = m(m − 5)(m + 1) ⇒ **y = c₁ + c₂e^{5x} + c₃e^{−x}**.

## 7. Particular integrals: undetermined coefficients and the D-operator

**Undetermined coefficients — trial forms:**

| F(x) | Try y_p |
|---|---|
| polynomial of degree n | general polynomial of degree n |
| e^{ax} | Ae^{ax} |
| cos bx or sin bx | A cos bx + B sin bx |
| e^{ax}·(polynomial) | e^{ax}(polynomial of same degree) |
| e^{ax}cos bx | e^{ax}(A cos bx + B sin bx) |

**Resonance rule:** if any term of the trial is already in y_c, multiply the trial by x (or x² for a double root).

**D-operator shortcuts:** 1/L(D) e^{ax} = e^{ax}/L(a) if L(a) ≠ 0; if L(a) = 0, = x e^{ax}/L′(a).
1/L(D²) sin bx = sin bx/L(−b²). 1/L(D) e^{ax}V = e^{ax} 1/L(D + a) V (shift rule). For polynomials, expand 1/L(D) as a power series in D.

**Worked example (2019).** y″ − 3y′ + 2y = 2x³ − 9x² + 6x. y_c = c₁eˣ + c₂e^{2x}. Try a cubic; it comes out as y_p = x³ (check: 6x − 9x² + 2x³ ✓). **y = c₁eˣ + c₂e^{2x} + x³**.

**Worked example (2021).** y″ − y′ + y = 2 cos 3x. y_c = e^{x/2}(c₁ cos(√3x/2) + c₂ sin(√3x/2)).
Try A cos 3x + B sin 3x: (−8A − 3B)cos 3x + (3A − 8B) sin 3x = 2 cos 3x ⇒ A = −16/73, B = −6/73.
**y_p = −(16 cos 3x + 6 sin 3x)/73**.

**Worked example (2016).** (D² − 5D + 6)y = x³e^{2x}. Roots 2, 3. Shift: y_p = e^{2x} 1/((D + 2)² − 5(D + 2) + 6) x³ = e^{2x} 1/(D² − D) x³ = −e^{2x} (1/D)(1 − D)^{−1} x³ = −e^{2x}(1/D)(1 + D + D² + D³)x³ = −e^{2x}(1/D)(x³ + 3x² + 6x + 6) = **−e^{2x}(x⁴/4 + x³ + 3x² + 6x)**.

## 8. Variation of parameters

For y″ + p(x)y′ + q(x)y = f(x) (leading coefficient 1!) with y_c = c₁y₁ + c₂y₂:
W = y₁y₂′ − y₂y₁′; **y_p = −y₁∫(y₂f/W)dx + y₂∫(y₁f/W)dx**.
Use it when f is tan, sec, cosec, ln, eˣ/x, etc., where undetermined coefficients fails.

**Worked example (2016).** y″ + y = tan x. y₁ = cos x, y₂ = sin x, W = 1.
u₁ = −∫sin x tan x dx = −∫(sec x − cos x)dx = sin x − ln|sec x + tan x|; u₂ = ∫cos x tan x dx = −cos x.
y_p = cos x(sin x − ln|sec x + tan x|) − sin x cos x = **−cos x ln|sec x + tan x|**.

**Worked example (2020).** y″ + y = cosec x: y_p = −x cos x + sin x ln|sin x|.
**Worked example (2017).** y″ + 4y = sec 2x: y_p = (x/2) sin 2x + (1/4) cos 2x ln|cos 2x|.

## 9. Cauchy–Euler equations

x²y″ + axy′ + by = f(x). Put x = eᵗ (t = ln x): xy′ = Dy, x²y″ = D(D − 1)y with D = d/dt. Constant coefficients in t.
Shortcut for the homogeneous part: try y = x^m ⇒ m(m − 1) + am + b = 0.

| Roots | y_c |
|---|---|
| distinct m₁, m₂ | c₁x^{m₁} + c₂x^{m₂} |
| repeated m | x^m(c₁ + c₂ ln x) |
| α ± iβ | x^α[c₁ cos(β ln x) + c₂ sin(β ln x)] |

**Example (2018).** x²y″ − 2xy′ − 4y = 0: m² − 3m − 4 = 0 ⇒ m = 4, −1. **y = c₁x⁴ + c₂/x**.
**Example (2016).** x²y″ − 3xy′ + 4y = x² ln x: m = 2 (double). In t: (D − 2)²y = te^{2t} ⇒ y_p = t³e^{2t}/6. **y = x²(c₁ + c₂ ln x) + x²(ln x)³/6**.

## 10. Initial- and boundary-value problems

IVP: conditions at one point; for linear equations with continuous coefficients a unique solution exists.
BVP: conditions at two points; there may be no solution, one, or infinitely many.
**Example (2017).** y″ + 4y = 0, y(0) = y(2π) = −2: y = c₁ cos 2x + c₂ sin 2x; y(0) = c₁ = −2; y(2π) = c₁ = −2 automatically. So c₂ is free: **infinitely many solutions** y = −2 cos 2x + c₂ sin 2x.

## 11. Ordinary and singular points

For P₀(x)y″ + P₁(x)y′ + P₂(x)y = 0, write y″ + p y′ + q y = 0 with p = P₁/P₀, q = P₂/P₀.
- x₀ is **ordinary** if p and q are analytic at x₀; otherwise **singular**.
- A singular x₀ is **regular** if (x − x₀)p and (x − x₀)²q are analytic at x₀; otherwise **irregular**.

**Example (2021).** (x² − 4)²y″ + (x − 2)y′ + y = 0. p = 1/[(x − 2)(x + 2)²], q = 1/[(x − 2)²(x + 2)²].
At x = 2: (x − 2)p = 1/(x + 2)², (x − 2)²q = 1/(x + 2)² — analytic ⇒ **regular**.
At x = −2: (x + 2)p = 1/[(x − 2)(x + 2)] — not analytic ⇒ **irregular**.

## 12. Series solutions

**About an ordinary point:** y = Σaₙxⁿ. Substitute, shift indices so every sum has xⁿ, set coefficients to zero ⇒ recurrence relation. Two arbitrary constants a₀, a₁.

**Worked example (2025).** (x² + 1)y″ + xy′ − y = 0. Coefficient of xⁿ: (n + 2)(n + 1)a_{n+2} + (n² − 1)aₙ = 0 ⇒ **a_{n+2} = −(n − 1)aₙ/(n + 2)**.
Odd: a₃ = 0 ⇒ y₂ = x. Even: a₂ = a₀/2, a₄ = −a₀/8, a₆ = a₀/16, a₈ = −5a₀/128.
**y = a₀(1 + x²/2 − x⁴/8 + x⁶/16 − 5x⁸/128 + …) + a₁x**. (The even series is the expansion of √(1 + x²) — a nice check.)

**Frobenius method (regular singular point at 0):** y = Σaₙx^{n+r}, a₀ ≠ 0. The lowest power gives the **indicial equation**. Cases: roots differing by a non-integer → two Frobenius series; equal roots → second solution contains y₁ ln x; roots differing by an integer → second solution may contain ln x.

**Worked example (2021).** x²y″ − (x² + x)y′ + y = 0. Indicial: r(r − 1) − r + 1 = (r − 1)² = 0 ⇒ r = 1 (double). Recurrence gives y₁ = x eˣ (check by substitution). Second solution by reduction of order: y₂ = y₁∫e^{−∫p}/y₁² dx = x eˣ∫(e^{−x}/x)dx = **x eˣ ln x + x eˣ(−x + x²/4 − x³/18 + …)**.

## 13. Bessel and Legendre equations

**Bessel's equation of order ν:** x²y″ + xy′ + (x² − ν²)y = 0.
Solution: y = c₁J_ν(x) + c₂J_{−ν}(x) (ν not an integer) or c₁J_ν(x) + c₂Y_ν(x) (any ν).
J_ν(x) = Σ_{m≥0} (−1)^m (x/2)^{2m+ν}/[m! Γ(m + ν + 1)].
Scaled form: x²y″ + xy′ + (λ²x² − ν²)y = 0 ⇒ y = c₁J_ν(λx) + c₂Y_ν(λx).

Properties: J₀(0) = 1; J_{−n} = (−1)ⁿJₙ for integer n; J_{1/2} = √(2/(πx)) sin x; J_{−1/2} = √(2/(πx)) cos x.
Recurrences: J_{ν−1} + J_{ν+1} = (2ν/x)J_ν; J_{ν−1} − J_{ν+1} = 2J_ν′; (x^νJ_ν)′ = x^νJ_{ν−1}; (x^{−ν}J_ν)′ = −x^{−ν}J_{ν+1}.
Generating function: e^{(x/2)(t − 1/t)} = Σ Jₙ(x)tⁿ.

**Example (2021).** J_{3/2} = (1/x)J_{1/2} − J_{−1/2} (from the first recurrence with ν = 1/2) = **√(2/(πx))[(sin x)/x − cos x]**. (Checked against the series at x = 1.3.)
**Example (2022).** x²y″ + xy′ + (9x² − 4)y = 0: λ = 3, ν = 2 ⇒ **y = c₁J₂(3x) + c₂Y₂(3x)**.
**Example (2026).** 16x²y″ + 16xy′ + (16x² − 1)y = 0 ⇒ divide by 16: ν² = 1/16, ν = 1/4 ⇒ **y = c₁J_{1/4}(x) + c₂J_{−1/4}(x)**.

**Legendre's equation:** (1 − x²)y″ − 2xy′ + n(n + 1)y = 0. Polynomial solutions Pₙ(x).
Rodrigues: Pₙ(x) = (1/(2ⁿn!)) dⁿ/dxⁿ (x² − 1)ⁿ. P₀ = 1, P₁ = x, P₂ = (3x² − 1)/2, P₃ = (5x³ − 3x)/2.
Orthogonality: ∫_{−1}^{1} PₘPₙ dx = 0 (m ≠ n), = 2/(2n + 1) (m = n).
Recurrence: (n + 1)P_{n+1} = (2n + 1)xPₙ − nP_{n−1}. Generating function (1 − 2xt + t²)^{−1/2} = ΣPₙtⁿ.
**2024 result:** ∫_{−1}^{1} xⁿPₙ dx = 2^{n+1}(n!)²/(2n + 1)!. Proof idea: use Rodrigues and integrate by parts n times; the boundary terms vanish because (x² − 1)ⁿ has zeros of order n at ±1; you are left with (n!/(2ⁿn!))∫(1 − x²)ⁿdx, and ∫_{−1}^1(1 − x²)ⁿdx = 2^{2n+1}(n!)²/(2n + 1)!.

---

## Common mistakes

- Variation of parameters without first dividing by the leading coefficient.
- Forgetting the resonance rule (multiply by x).
- Writing a series solution without the recurrence relation — the recurrence carries most of the marks.
- In Cauchy–Euler, solving in t and forgetting to return to x.

## Exam checklist

- One example of each first-order type.
- VoP with tan, sec, cosec and with a repeated root.
- Cauchy–Euler with a ln x right-hand side.
- Power series about an ordinary point; one Frobenius example.
- Bessel: identify ν and λ; J_{1/2}, J_{3/2}. Legendre: Rodrigues and orthogonality.
