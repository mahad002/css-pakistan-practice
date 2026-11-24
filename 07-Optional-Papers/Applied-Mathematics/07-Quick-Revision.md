# Quick Revision — Applied Mathematics (one page per section)

Read the night before and on the morning of the paper. Every formula here is used in `04-Model-Answers.md`.

## 1. Vector Calculus

- ∇φ = (φₓ, φ_y, φ_z); D_**a**φ = ∇φ·**a**/|**a**|; max rate |∇φ|; ∇φ ⊥ level surface.
- Angle between surfaces: cos θ = ∇φ₁·∇φ₂/(|∇φ₁||∇φ₂|).
- ∇·**F** = ΣF_{i,i}; ∇×**F** = det(**i j k**; ∂ₓ ∂_y ∂_z; F₁ F₂ F₃).
- ∇r = **r**/r; **∇f(r) = f′(r)r/r**; ∇rⁿ = nrⁿ⁻²**r**; ∇·**r** = 3; ∇×**r** = 0; ∇²rⁿ = n(n + 1)rⁿ⁻²; ∇²f(r) = f″ + 2f′/r; ∇·(rⁿ**r**) = (n + 3)rⁿ.
- ∇·(φ**A**) = ∇φ·**A** + φ∇·**A**; ∇·(**A**×**B**) = **B**·∇×**A** − **A**·∇×**B**; curl grad = 0; div curl = 0.
- **a**×(**b**×**c**) = (**a**·**c**)**b** − (**a**·**b**)**c**.
- Irrotational ⇒ **F** = ∇φ ⇒ ∫**F**·d**r** = φ(B) − φ(A).
- Green: ∮M dx + N dy = ∬(N_x − M_y)dA (anticlockwise). Area = ½∮(x dy − y dx).
- Stokes: ∮**F**·d**r** = ∬(∇×**F**)·**n** dS. Gauss: ∯**F**·**n** dS = ∭∇·**F** dV.
- Flux over z = g(x, y): ∬**F**·**n** dx dy/|**n**·**k**|. Cylinder: dS = a dθ dz, **n** = (cos θ, sin θ, 0).

## 2. Statics

- R² = P² + Q² + 2PQ cos α; tan θ = Q sin α/(P + Q cos α).
- Lami: P/sin α = Q/sin β = R/sin γ (angle opposite = between the other two).
- General system: X, Y, G = Σ(xF_y − yF_x); R = √(X² + Y²); distance |G|/R; line xY − yX = G.
- Equilibrium: ΣX = ΣY = 0, ΣM = 0. Three non-parallel forces ⇒ concurrent.
- Friction F ≤ μR; tan λ = μ; slips on incline when tan α = μ.
- Ladder: μ₁R = S; R + μ₂S = ΣW; moments about the foot.
- Centroids: x̄ = ∫x dm/∫dm. Polar area x̄ = (⅔∫r³cos θ dθ)/(∫r²dθ). Surface of revolution x̄ = ∫x y ds/∫y ds.
- Standard: semicircle lamina 4a/3π; arc 2a/π; hemisphere 3a/8; shell a/2; cone h/4; cardioid area 5a/6, surface 50a/63.

## 3. Dynamics

- a = dv/dt = v dv/dx. Constant a: v = u + at, s = ut + ½at², v² = u² + 2as.
- SHM ẍ = −ω²x; x = A cos(ωt + ε); v² = ω²(A² − x²); T = 2π/ω; v_max = ωA.
- Projectile: y = x tan α − gx²/(2u²cos²α); T = 2u sin α/g; H = u²sin²α/2g; R = u² sin 2α/g; R_max = u²/g. Least speed from height h to range a: u² = g(√(a² + h²) − h).
- Tangential–normal: **a** = v̇**T** + (v²/ρ)**N**, ρ = (1 + y′²)^{3/2}/|y″|.
- Radial–transverse: v_r = ṙ, v_θ = rθ̇; a_r = r̈ − rθ̇², a_θ = rθ̈ + 2ṙθ̇ = (1/r)(r²θ̇)˙.
- Central force: r²θ̇ = h; u″ + u = F/(h²u²); F = (h²/p³)dp/dr; v = h/p.
- Conic r = l/(1 + e cos θ) ⇔ inverse square, h² = μl. Kepler: ellipse; equal areas; T² ∝ a³ (T² = 4π²a³/μ).
- Conservative ⇔ ∇×**F** = 0; KE + PE = const. Impulse = Δ momentum.

## 4. ODEs

- Separable: ∫g(y)dy = ∫f(x)dx. Exact: M_y = N_x; ∫M dx + ∫(N's y-only terms)dy = C.
- IF: (M_y − N_x)/N = g(x) ⇒ e^{∫g dx}; (N_x − M_y)/M = h(y) ⇒ e^{∫h dy}.
- Linear: y′ + Py = Q; IF e^{∫P}; y·IF = ∫Q·IF + C.
- Bernoulli: v = y^{1−n} ⇒ v′ + (1 − n)Pv = (1 − n)Q. Riccati: y = y₁ + 1/v ⇒ v′ = −(Q + 2Ry₁)v − R.
- Orthogonal trajectories: y′ → −1/y′.
- CF: distinct e^{mx}; repeated (c₁ + c₂x)e^{mx}; α ± iβ: e^{αx}(c₁ cos βx + c₂ sin βx).
- PI: 1/L(D)e^{ax} = e^{ax}/L(a) (if L(a) = 0: xe^{ax}/L′(a)); 1/L(D²) sin bx = sin bx/L(−b²); shift e^{ax}V → e^{ax}1/L(D + a)V; polynomials: expand in D. Resonance ⇒ multiply trial by x.
- VoP (leading coeff 1!): W = y₁y₂′ − y₂y₁′; y_p = −y₁∫y₂f/W + y₂∫y₁f/W.
- Cauchy–Euler: y = x^m, m(m − 1) + am + b = 0; repeated ⇒ x^m ln x; complex ⇒ x^α cos(β ln x).
- Ordinary point: p, q analytic. Regular singular: (x − x₀)p, (x − x₀)²q analytic.
- Series: recurrence for a_{n+2}. Frobenius: indicial equation; equal roots ⇒ ln term.
- Bessel: x²y″ + xy′ + (λ²x² − ν²)y = 0 ⇒ J_ν(λx), Y_ν(λx) (J_{−ν} if ν ∉ ℤ). J_{1/2} = √(2/πx) sin x; J_{−1/2} = √(2/πx) cos x; J_{ν−1} + J_{ν+1} = (2ν/x)J_ν; J_{ν−1} − J_{ν+1} = 2J_ν′.
- Legendre: Pₙ = (1/2ⁿn!)Dⁿ(x² − 1)ⁿ; P₂ = (3x² − 1)/2; P₃ = (5x³ − 3x)/2; ∫PₘPₙ = 2δₘₙ/(2n + 1).

## 5. Fourier Series and PDEs

- (−L, L): a₀ = (1/L)∫f, aₙ = (1/L)∫f cos(nπx/L), bₙ = (1/L)∫f sin(nπx/L); series starts a₀/2.
- Even ⇒ cosines; odd ⇒ sines. Jump ⇒ average. cos nπ = (−1)ⁿ.
- x² = π²/3 + 4Σ(−1)ⁿcos nx/n²; x = 2Σ(−1)^{n+1}sin nx/n; |x| = π/2 − (4/π)Σ_{odd}cos nx/n².
- Σ1/n² = π²/6; Σ_{odd}1/n² = π²/8; Σ(−1)^{n+1}/n² = π²/12; 1 − 1/3 + 1/5 − … = π/4.
- Parseval: a₀²/2 + Σ(aₙ² + bₙ²) = (1/π)∫f² (Bessel: ≤).
- Lagrange Pp + Qq = R: dx/P = dy/Q = dz/R; multipliers with lP + mQ + nR = 0.
- B² − 4AC: < 0 elliptic, = 0 parabolic, > 0 hyperbolic. Canonical: ξ, η from Aλ² − Bλ + C = 0.
- X″ + λX = 0, X(0) = X(L) = 0 ⇒ sin(nπx/L), λ = (nπ/L)². Neumann ⇒ cos(nπx/L).
- Heat: Σbₙ sin(nπx/L)e^{−kn²π²t/L²}. Wave: Σ[Aₙ cos(nπct/L) + Bₙ sin(nπct/L)] sin(nπx/L), Bₙ = (2/nπc)∫g sin. Laplace: Σcₙ sinh(nπy/a) sin(nπx/a).
- D'Alembert: ½[f(x + ct) + f(x − ct)] + (1/2c)∫_{x−ct}^{x+ct}g.
- ∫₀^L(Lx − x²)sin(nπx/L)dx = 2L³(1 − (−1)ⁿ)/(n³π³).

## 6. Numerical Methods

- Bisection: error ≤ (b − a)/2ⁿ⁺¹. Regula falsi: c = (af(b) − bf(a))/(f(b) − f(a)).
- Newton: xₙ₊₁ = xₙ − f/f′ (order 2). √N: ½(x + N/x). Secant (order 1.618). Fixed point: |g′| < 1.
- Jacobi (old values) / Gauss–Seidel (newest values). Strict diagonal dominance ⇒ convergence. Reorder rows first.
- Newton forward f₀ + pΔ + p(p − 1)Δ²/2 + …; backward fₙ + p∇ + p(p + 1)∇²/2 + …; Lagrange Σfᵢ∏(x − xⱼ)/(xᵢ − xⱼ); divided differences for unequal spacing.
- f′ ≈ (1/h)(Δ − Δ²/2 + Δ³/3); f″ ≈ (1/h²)(Δ² − Δ³ + 11Δ⁴/12). Central (f₁ − f₋₁)/2h; 5-point (f₋₂ − 8f₋₁ + 8f₁ − f₂)/12h.
- Trapezoidal (h/2)[f₀ + 2Σ + fₙ], error −(b − a)h²f″/12. Simpson 1/3 (h/3)[f₀ + 4odd + 2even + fₙ], n even, error −(b − a)h⁴f⁽⁴⁾/180. 3/8: (3h/8)[f₀ + 3f₁ + 3f₂ + 2f₃ + …], n ∈ 3ℤ. Gauss 2-pt: f(−1/√3) + f(1/√3).
- Euler yₙ₊₁ = yₙ + hf. Modified Euler: y* = yₙ + hfₙ; yₙ₊₁ = yₙ + (h/2)(fₙ + f(xₙ₊₁, y*)).
- RK4: k₁ = hf(x, y), k₂ = hf(x + h/2, y + k₁/2), k₃ = hf(x + h/2, y + k₂/2), k₄ = hf(x + h, y + k₃); y + (k₁ + 2k₂ + 2k₃ + k₄)/6.
- **Radians. Six decimals. Formula first. Table. Compare with exact.**
