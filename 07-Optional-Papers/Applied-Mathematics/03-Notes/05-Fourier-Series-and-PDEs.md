# 05 — Fourier Series and Partial Differential Equations (20% of syllabus; ~15% of questions asked 2016–2026)

**A Fourier series question appeared in all 11 papers (2016–2026).** A separation-of-variables problem (heat, wave or Laplace) appeared in 10 of them. These are the two most predictable 10-mark parts in the paper. Usually they sit together as one 20-mark question — a question you should always attempt.

---

## 1. Fourier series on (−L, L) (period 2L)

f(x) = a₀/2 + Σ_{n≥1} [aₙ cos(nπx/L) + bₙ sin(nπx/L)], where
- a₀ = (1/L)∫_{−L}^{L} f dx
- aₙ = (1/L)∫_{−L}^{L} f cos(nπx/L) dx
- bₙ = (1/L)∫_{−L}^{L} f sin(nπx/L) dx.

For period 2π (L = π): aₙ = (1/π)∫f cos nx dx, bₙ = (1/π)∫f sin nx dx.
On any interval (c, c + 2L), use the same formulas with limits c to c + 2L.

**Useful integrals.** sin nπ = 0; cos nπ = (−1)ⁿ.
∫x sin nx dx = −x cos nx/n + sin nx/n². ∫x cos nx dx = x sin nx/n + cos nx/n².
∫x² cos nx dx = x² sin nx/n + 2x cos nx/n² − 2 sin nx/n³.
Use the **tabular (repeated parts) method** for polynomial × trig: differentiate the polynomial down, integrate the trig across, alternate signs.

**Even and odd functions (2019).** Even: f(−x) = f(x) (x², cos x, |x|) ⇒ bₙ = 0, aₙ = (2/L)∫₀^L f cos. Odd: f(−x) = −f(x) (x, sin x, x³) ⇒ aₙ = 0, bₙ = (2/L)∫₀^L f sin.

**Dirichlet conditions (convergence).** If f is periodic, piecewise continuous and has finitely many maxima/minima and discontinuities in a period, the series converges to f(x) where f is continuous, and to [f(x⁺) + f(x⁻)]/2 at a jump.

**Standard results (memorise):**

| f on (−π, π) | Series |
|---|---|
| x | 2Σ(−1)^{n+1} sin nx/n |
| \|x\| | π/2 − (4/π)Σ_{n odd} cos nx/n² |
| x² | π²/3 + 4Σ(−1)ⁿ cos nx/n² |
| −1 on (−π, 0), 1 on (0, π) (square wave) | (4/π)Σ_{n odd} sin nx/n |

**Summation of series.** Put a convenient x into a known series. x² at x = π: π² = π²/3 + 4Σ1/n² ⇒ **Σ1/n² = π²/6**. |x| at x = 0: **Σ_{odd} 1/n² = π²/8**. Square wave at x = π/2: **1 − 1/3 + 1/5 − … = π/4**.

**Bessel's inequality and Parseval's identity.** For f with Fourier coefficients on (−π, π):
a₀²/2 + Σ(aₙ² + bₙ²) ≤ (1/π)∫_{−π}^{π} f² dx (Bessel), with equality for every piecewise continuous f (Parseval). Example: f = x gives Σ4/n² = 2π²/3 ⇒ Σ1/n² = π²/6 again.

**Worked example (2025).** f = 3π + 2x on (−π, 0), π + 2x on (0, π).
a₀ = (1/π)[∫_{−π}^0(3π + 2x)dx + ∫₀^π(π + 2x)dx] = (1/π)[2π² + 2π²] = 4π, so a₀/2 = 2π.
aₙ: the constants integrate to 0 against cos nx, and 2x is odd, so aₙ = 0.
bₙ = (1/π)[3π∫_{−π}^0 sin nx dx + π∫₀^π sin nx dx + 2∫_{−π}^π x sin nx dx] = [−2(1 − (−1)ⁿ) + 4(−1)^{n+1}]/n.
n odd: (−4 + 4)/n = 0. n even: −4/n.
**f(x) = 2π − 2Σ_{k≥1} sin(2kx)/k**. (Check: f − 2π is the sawtooth 2x − π on (0, π), whose series is −2Σ sin 2kx/k ✓; coefficients verified numerically.)

**Worked example (2024).** f = x² on 1 < x < 2 (period 1, so L = ½, nπx/L = 2nπx).
a₀ = 2∫₁²x²dx = 14/3 ⇒ a₀/2 = 7/3. aₙ = 2∫₁²x² cos 2nπx dx = 1/(n²π²). bₙ = 2∫₁²x² sin 2nπx dx = −3/(nπ).
**x² = 7/3 + Σ[cos 2nπx/(n²π²) − 3 sin 2nπx/(nπ)]** on (1, 2). (Verified numerically.)

## 2. Half-range series

A function given only on (0, L) can be extended as even (cosine series) or odd (sine series).
Cosine: aₙ = (2/L)∫₀^L f cos(nπx/L) dx. Sine: bₙ = (2/L)∫₀^L f sin(nπx/L) dx.

**Worked example (2023).** sin x on (0, π) as a cosine series. a₀ = (2/π)∫₀^π sin x dx = 4/π. aₙ = (2/π)∫₀^π sin x cos nx dx = (1/π)∫₀^π[sin(1 + n)x + sin(1 − n)x]dx = −2(1 + (−1)ⁿ)/[π(n² − 1)] for n ≠ 1; a₁ = 0.
n odd: 0; n even: −4/[π(n² − 1)].
**sin x = 2/π − (4/π)Σ_{k≥1} cos 2kx/(4k² − 1)**.

## 3. First-order PDEs

**Lagrange's linear equation** Pp + Qq = R (p = z_x, q = z_y). Auxiliary equations dx/P = dy/Q = dz/R. Find two independent integrals u = c₁, v = c₂. General solution φ(u, v) = 0. Tools: grouping two ratios; **multipliers** (l, m, n) with lP + mQ + nR = 0, so l dx + m dy + n dz = 0 integrates directly.

**Worked example (2024).** 2y(z − 3)p + (2x − z)q = y(2x − 3), through the circle x² + y² = 2x, z = 0.
Ratios 1 and 3: dx/[2y(z − 3)] = dz/[y(2x − 3)] ⇒ (2x − 3)dx = 2(z − 3)dz ⇒ **u = x² − 3x − z² + 6z = c₁**.
Multipliers (1, 2y, −2): 2y(z − 3) + 2y(2x − z) − 2y(2x − 3) = 0 ⇒ dx + 2y dy − 2dz = 0 ⇒ **v = x + y² − 2z = c₂**.
On the circle (z = 0, y² = 2x − x²): c₁ = x² − 3x, c₂ = 3x − x² ⇒ c₁ + c₂ = 0.
Integral surface: **x² + y² − 2x − z² + 4z = 0**. (Substituted back into the PDE: residual 0.)

**Transformation / characteristics for a·u_x + b·u_t + cu = 0.** Along dx/dt = a/b the PDE becomes an ODE.
**Worked example (2026).** u_t + u_x + u = 0, x > 0, t > 0, u(0, t) = sin t, u(x, 0) = 0.
Put ξ = x − t (constant on characteristics), τ = x. Then u_x + u_t = u_τ, so u_τ + u = 0 ⇒ u = F(ξ)e^{−τ} = F(x − t)e^{−x}.
Region x < t (characteristics come from the boundary x = 0): u(0, t) = F(−t) = sin t ⇒ F(s) = sin(−s) ⇒ u = e^{−x} sin(t − x).
Region x > t (characteristics come from t = 0): u(x, 0) = F(x)e^{−x} = 0 ⇒ u = 0.
**u(x, t) = e^{−x} sin(t − x)·H(t − x)** (H = unit step). A signal that travels right at speed 1 and decays.

## 4. Classification of second-order PDEs

A u_xx + B u_xy + C u_yy + (lower order) = 0. Discriminant Δ = B² − 4AC:
Δ < 0 **elliptic** (Laplace); Δ = 0 **parabolic** (heat); Δ > 0 **hyperbolic** (wave).

**Example (2021).** (1 − x²)u_xx − 2xy u_xy + (1 − y²)u_yy = 0. Δ = 4x²y² − 4(1 − x²)(1 − y²) = 4(x² + y² − 1).
Elliptic inside the unit circle, parabolic on it, hyperbolic outside.

**Canonical form (hyperbolic) — method.** Solve Aλ² − Bλ + C = 0 for λ = dy/dx (characteristic slopes); characteristics y − λ₁x = c, y − λ₂x = c; put ξ = y − λ₁x, η = y − λ₂x; transform with the chain rule.
**Worked example (2024).** 4u_xx + 5u_xy + u_yy + u_x + u_y = 2. Δ = 25 − 16 = 9 > 0 (hyperbolic).
4λ² − 5λ + 1 = 0 ⇒ λ = 1, ¼. ξ = y − x, η = y − x/4.
Chain rule: u_x = −u_ξ − ¼u_η, u_y = u_ξ + u_η. The u_ξξ and u_ηη terms cancel; the u_ξη coefficient is −9/4; lower terms give ¾u_η.
Canonical form: **u_ξη = ⅓u_η − 8/9**.
Solve: w = u_η satisfies w_ξ − w/3 = −8/9 ⇒ w = 8/3 + e^{ξ/3}g(η). Integrate in η:
**u = (8/3)(y − x/4) + e^{(y−x)/3}G(y − x/4) + H(y − x)**.

## 5. Separation of variables — the master method

1. Assume u = X(x)T(t) (or X(x)Y(y)).
2. Substitute, divide by XT, set each side to a constant −λ.
3. Use the homogeneous boundary conditions to get the eigenvalue problem X″ + λX = 0, X(0) = X(L) = 0 ⇒ λₙ = (nπ/L)², Xₙ = sin(nπx/L).
   (With X′(0) = X′(L) = 0 ⇒ Xₙ = cos(nπx/L), n = 0, 1, 2, ….)
4. Solve the other ODE for each n.
5. Superpose: u = Σ (product terms).
6. Fit the remaining (non-homogeneous) condition with a Fourier series.

**Modelling the 1-D wave equation (2026).** Take a string of density ρ per unit length under tension T. For a small element Δx with small slope, the vertical net force is T[u_x(x + Δx) − u_x(x)]. Newton: ρΔx u_tt = TΔx u_xx ⇒ **u_tt = c²u_xx, c² = T/ρ**. Assumptions: perfectly flexible string, constant tension, small vertical displacement, gravity neglected.

## 6. Heat equation u_t = k u_xx (0 < x < L)

Ends at zero: u(0, t) = u(L, t) = 0, u(x, 0) = f(x).
**u = Σ bₙ sin(nπx/L) e^{−k(nπ/L)²t}**, bₙ = (2/L)∫₀^L f sin(nπx/L) dx.

**Worked example (2020).** f = lx − x² on (0, l). bₙ = (2/l)∫₀^l(lx − x²)sin(nπx/l)dx = 4l²(1 − (−1)ⁿ)/(n³π³) = 8l²/(n³π³) for odd n, 0 for even n.
**u = (8l²/π³)Σ_{n odd} sin(nπx/l) e^{−kn²π²t/l²}/n³**. (Coefficient formula checked numerically.)

## 7. Wave equation u_tt = c²u_xx (string fixed at 0 and L)

u(x, 0) = f(x), u_t(x, 0) = g(x):
**u = Σ [Aₙ cos(nπct/L) + Bₙ sin(nπct/L)] sin(nπx/L)**,
Aₙ = (2/L)∫₀^L f sin(nπx/L) dx, Bₙ = (2/(nπc))∫₀^L g sin(nπx/L) dx.

**Worked example (2026).** f = Lx − x², g = 4. Aₙ = 8L²/(n³π³) (n odd); Bₙ = (2/(nπc))·4L(1 − (−1)ⁿ)/(nπ) = 16L/(n²π²c) (n odd). Even n: both zero.
**u = Σ_{n odd} [8L²/(n³π³) cos(nπct/L) + 16L/(n²π²c) sin(nπct/L)] sin(nπx/L)**.

**D'Alembert's solution (2025).** u_tt = c²u_xx on −∞ < x < ∞:
**u = ½[f(x + ct) + f(x − ct)] + (1/(2c))∫_{x−ct}^{x+ct} g(s) ds**.
Derivation: put ξ = x + ct, η = x − ct ⇒ u_ξη = 0 ⇒ u = F(x + ct) + G(x − ct); apply the two initial conditions. (For the 2025 equation u_xx = ½u_tt, c² = 2, c = √2.)

## 8. Laplace's equation u_xx + u_yy = 0 (rectangle 0 < x < a, 0 < y < b)

Zero on x = 0, x = a and y = 0; u(x, b) = f(x):
**u = Σ cₙ sinh(nπy/a) sin(nπx/a)**, cₙ = [2/(a sinh(nπb/a))]∫₀^a f sin(nπx/a) dx.
If the non-zero side is y = 0 instead, use sinh(nπ(b − y)/a).
Example: f = u₀ (constant): cₙ = 4u₀/(nπ sinh(nπb/a)) for odd n.

**2023 variant (Neumann sides).** u_x = 0 at x = 0 and x = a, u_y(x, b) = 0, u(x, 0) = f(x). Eigenfunctions cos(nπx/a), n = 0, 1, …; Yₙ(y) = cosh(nπ(b − y)/a) (so that Y′(b) = 0).
u = A₀/2 + Σ Aₙ cosh(nπ(b − y)/a) cos(nπx/a)/cosh(nπb/a), with Aₙ = (2/a)∫₀^a f cos(nπx/a) dx.

---

## Common mistakes

- Using period 2π formulas when the period is 2L (check the interval length!).
- Forgetting a₀/2 (not a₀).
- Dropping (−1)ⁿ — then the odd/even pattern is lost.
- Not stating the eigenvalue problem — that line carries marks.
- In the wave equation, using the wrong factor in Bₙ (it is 2/(nπc), not 2/L).

## Exam checklist

- Fourier series of a piecewise function on (−π, π), on (0, 2), and on (1, 2).
- Half-range sine and cosine series.
- Heat, wave and Laplace on a finite domain, fully worked.
- D'Alembert; classification; one canonical form; Lagrange's method.
