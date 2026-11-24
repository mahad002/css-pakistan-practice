# 03 — Dynamics (10% of syllabus; ~12% of questions asked 2016–2026)

Asked every year. The most repeated item is **radial and transverse components of velocity and acceleration** (derivation or application), in six papers. The second is **projectiles** (2022, 2024, 2026) and **central orbits** (2021, 2024). Learn the derivations word for word; they are "free marks".

Units: CSS questions mix SI and British units. In ft-units, g = 32 ft/s²; in SI, g = 9.8 m/s². State which you use.

---

## 1. Rectilinear motion

Constant acceleration: v = u + at, s = ut + ½at², v² = u² + 2as.

Variable acceleration — pick the right form of a:

| a given as | Use | Then |
|---|---|---|
| f(t) | a = dv/dt | integrate twice in t |
| f(v) | a = dv/dt or a = v dv/dx | separate variables |
| f(x) | a = v dv/dx = d(½v²)/dx | ½v² = ∫f(x)dx |

**Worked example (2017/2018).** Retardation kv³, initial speed u. Find v and t after distance x.
v dv/dx = −kv³ ⇒ dv/v² = −k dx ⇒ 1/v − 1/u = kx ⇒ **v = u/(1 + kux)**.
dt = dx/v = (1 + kux)dx/u ⇒ **t = x/u + ½kx²**. (Checked numerically with u = 10, k = 0.01, x = 3: v = 7.692, t = 0.345.)

**Worked example (2020).** Acceleration kx directed *away* from O, start from rest at x = a: v dv/dx = kx ⇒ v² = k(x² − a²); x = a cosh(√k t). If the acceleration is *towards* O (−kx), the motion is SHM about O with amplitude a.

## 2. Simple harmonic motion (SHM)

Definition: acceleration towards a fixed point O, proportional to distance: ẍ = −ω²x.
Solution: x = A cos(ωt + ε). Period T = 2π/ω. Amplitude A. Max speed ωA (at O). Max acceleration ω²A (at the ends).
Key relation: **v² = ω²(A² − x²)**.

**Two-point problems.** Speeds v₁, v₂ at distances x₁, x₂: v₁² = ω²(A² − x₁²), v₂² = ω²(A² − x₂²). Subtract to get ω; then A.

**Worked example.** Speeds 5 and 4 ft/s at distances 12 and 13 ft from the centre.
25 − 16 = ω²(169 − 144) ⇒ ω² = 9/25, ω = 0.6 rad/s. A² = 144 + 25/0.36 = 213.4, A = 14.61 ft. **T = 2π/0.6 = 10.47 s**.

**Recognising SHM from v² (2019).** If v² = n²(c + 2bx − x²) = n²[(c + b²) − (x − b)²], the motion is SHM with centre x = b, amplitude √(c + b²), period 2π/n.
Example: v² = 9(8 + 2x − x²) = 9[9 − (x − 1)²] ⇒ centre x = 1, amplitude 3, period 2π/3.

**Changing max speed (2021).** If the max speed is changed from v to nv with the same centre and the particle passing a given point with the same speed… set up v² = ω²(A² − x²) for both and compare. Read the question's condition carefully; if ω is fixed, new amplitude = nA, period unchanged.

## 3. Projectiles

Launch speed u at angle α above horizontal, from the origin, no air resistance:
x = u cos α·t, y = u sin α·t − ½gt².
Path: y = x tan α − gx²/(2u² cos²α) (a parabola).
Time of flight 2u sin α/g; greatest height u² sin²α/(2g); horizontal range R = u² sin 2α/g; maximum range u²/g at α = 45°.
Range on an inclined plane β: R = 2u² cos α sin(α − β)/(g cos²β); maximum u²/[g(1 + sin β)].

**Worked example (2026).** Muzzle speed 1 mile/s = 5280 ft/s, g = 32 ft/s².
Max range = u²/g = 5280²/32 = 871,200 ft = **165 miles**. Height at α = 45°: u²/(4g) = 217,800 ft = **41.25 miles**. (Ignores air resistance and curvature of the earth — say so.)

**Worked example (2024 proof).** Least speed to project a particle from height h to land a horizontal distance a away is √(g(√(a² + h²) − h)).
Landing condition (taking up as positive, point of projection at height h): −h = a tan α − ga²(1 + tan²α)/(2u²).
Write T = tan α. Then ga²T² − 2u²aT + (ga² − 2u²h) = 0. For a real α the discriminant ≥ 0:
4u⁴a² − 4ga²(ga² − 2u²h) ≥ 0 ⇒ u⁴ + 2ghu² − g²a² ≥ 0 ⇒ u² ≥ −gh + g√(h² + a²).
So **u_min = √(g(√(a² + h²) − h))**. (Numerical check: h = 20 m, a = 40 m, g = 9.8 gives 15.57 m/s by both the formula and a brute-force search over angles.)

## 4. Work, energy, impulse, conservative forces

Work W = ∫**F**·d**r**. Kinetic energy ½mv². Work–energy principle: work done = change in KE.
A force is **conservative** if its work is path-independent ⇔ ∇×**F** = 0 ⇔ **F** = −∇V. Then KE + V = constant (conservation of energy).
Impulse = ∫**F** dt = change in momentum. Power = **F**·**v**.

## 5. Tangential and normal components

**v** = v**T** (velocity is always tangent). **a** = (dv/dt)**T** + (v²/ρ)**N**, where ρ = radius of curvature.
For y = f(x): ρ = (1 + y′²)^{3/2}/|y″|.

**Derivation (2018).** Let **T** be the unit tangent and ψ the angle it makes with the x-axis, s arc length. d**T**/dψ = **N** and dψ/ds = 1/ρ. **v** = (ds/dt)**T** = v**T**. Differentiate: **a** = (dv/dt)**T** + v (d**T**/dψ)(dψ/ds)(ds/dt) = (dv/dt)**T** + (v²/ρ)**N**.

**Worked example (2025).** Particle on the ellipse x²/a² + y²/b² = 1 with uniform speed V. At (0, b): tangential acceleration = dV/dt = 0. Radius of curvature at the end of the minor axis = a²/b. Normal acceleration = V²/ρ = **bV²/a²**, directed towards the centre.

## 6. Radial and transverse components (polar)

Unit vectors **e**_r = (cos θ, sin θ), **e**_θ = (−sin θ, cos θ). d**e**_r/dt = θ̇**e**_θ, d**e**_θ/dt = −θ̇**e**_r.

**Derivation (asked 2016, 2018, 2020 — write it in full).**
**r** = r**e**_r.
**v** = ṙ**e**_r + r θ̇**e**_θ ⇒ v_r = ṙ, v_θ = rθ̇.
**a** = r̈**e**_r + ṙθ̇**e**_θ + ṙθ̇**e**_θ + rθ̈**e**_θ − rθ̇²**e**_r
⇒ **a_r = r̈ − rθ̇²**, **a_θ = rθ̈ + 2ṙθ̇ = (1/r) d(r²θ̇)/dt**.

**Worked example (2023).** r = at + bt², θ = ct^{3/2}. At t = 1: ṙ = a + 2b, r̈ = 2b, θ̇ = (3c/2), θ̈ = 3c/4, r = a + b.
v_r = a + 2b; v_θ = 3c(a + b)/2; a_r = 2b − 9c²(a + b)/4; a_θ = 3c(a + b)/4 + 3c(a + 2b).
(With a = b = c = 1: v_r = 3, v_θ = 3, a_r = −2.5, a_θ = 10.5 — checked.)

**Worked example (2024 and 2026 — asked twice).** Curve ax² + by² = 1 with θ = ct².
In polar: r²(a cos²θ + b sin²θ) = 1 ⇒ r = (a cos²θ + b sin²θ)^{−1/2}. θ̇ = 2ct.
v_θ = rθ̇ = **2ct r**.
v_r = (dr/dθ)θ̇. dr/dθ = −½(…)^{−3/2}(−2a sin θ cos θ + 2b sin θ cos θ) = (a − b) r³ sin θ cos θ.
So **v_r = ct (a − b) r³ sin 2θ**, with θ = ct².

## 7. Central forces and orbits

A central force acts along the line to a fixed centre O. Then the transverse acceleration is zero ⇒ r²θ̇ = h (constant): **areal velocity ½h is constant** (Kepler's 2nd law).
With u = 1/r, the orbit equation is
**d²u/dθ² + u = F/(h²u²)** (F = central acceleration towards O).
Pedal (p–r) form: **F = (h²/p³) dp/dr**; speed v = h/p.

**Finding the law of force from the orbit — method:** write u = 1/r as a function of θ, compute u″ + u, multiply by h²u².

**Worked example (2024).** Orbit r = l/(1 − e cos θ) (a conic).
u = (1 − e cos θ)/l, u″ = e cos θ/l, u″ + u = 1/l. F = h²u²/l = (h²/l)/r². **Inverse-square law**, μ = h²/l.

**Worked example (2021).** Orbit rⁿ = aⁿ cos nθ. Pedal equation: p = r^{n+1}/aⁿ. dp/dr = (n + 1)rⁿ/aⁿ.
F = (h²/p³)dp/dr = h²(n + 1)rⁿ/aⁿ · a^{3n}/r^{3n+3} = **(n + 1)h²a^{2n}/r^{2n+3}**.

## 8. Planetary motion and Kepler's laws

1. Each planet moves in an ellipse with the sun at one focus.
2. The radius vector sweeps equal areas in equal times (r²θ̇ = h).
3. T² ∝ a³ (a = semi-major axis); precisely T² = 4π²a³/(GM).

Inverse-square attraction μ/r² gives a conic: ellipse (e < 1, total energy negative), parabola (e = 1), hyperbola (e > 1). Speed at distance r on an ellipse: v² = μ(2/r − 1/a) (vis-viva).
Escape speed from the earth's surface √(2gR) ≈ 11.2 km/s.

**Worked example.** Mars has a = 1.524 AU. T = 1.524^{3/2} = **1.88 years**.

---

## Common mistakes

- Using a = dv/dt when a is given as a function of x (use v dv/dx).
- Forgetting the 2ṙθ̇ term in a_θ.
- Leaving out the direction of the acceleration in SHM (sign).
- Mixing ft and m. Write units on every line.

## Exam checklist

- Derive radial–transverse and tangential–normal components.
- Projectile: max range, height, least speed from a height.
- Orbit → law of force (conic; rⁿ = aⁿ cos nθ).
- SHM two-point problem.
