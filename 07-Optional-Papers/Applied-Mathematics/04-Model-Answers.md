# Worked Solutions — Applied Mathematics (CSS)

**80 exam-style problems with full step-by-step solutions**, covering every syllabus section. Most are modelled on real CSS questions from 2016–2026 (the source year is shown); some are new practice problems of the same type. Every numerical answer was recomputed in python3 (pure Python, with numerical checks such as substituting the answer back into the equation). The scripts are listed in `COVERAGE.md`.

**How to use.** Cover the solution, attempt the problem with a timer (a 10-mark part ≈ 17 minutes), then mark yourself line by line. Copy the *layout*: statement of method → formula → working → boxed answer → one-line check.

**How a CSS maths answer is marked (practical guide).** Each 10-mark part is roughly: correct method/formula stated (2–3), correct working (4–5), correct final answer (1–2), check/interpretation (≤1). A wrong final number with correct method still earns most of the marks. A bare answer earns almost nothing.

Contents: A. Vector Calculus (P1–P12) · B. Statics (P13–P21) · C. Dynamics (P22–P32) · D. ODEs (P33–P52) · E. Fourier Series and PDEs (P53–P64) · F. Numerical Methods (P65–P80).

---

# A. Vector Calculus

### P1. (CSS 2026 type) Prove ∇f(r) = f′(r)**r**/r. Hence find U if ∇U = 2r⁴**r**.

**Solution.**
1. r² = x² + y² + z² ⇒ 2r ∂r/∂x = 2x ⇒ ∂r/∂x = x/r. Similarly ∂r/∂y = y/r, ∂r/∂z = z/r.
2. By the chain rule ∂f/∂x = f′(r)·x/r, etc.
3. ∇f = f′(r)(x**i** + y**j** + z**k**)/r = **f′(r)r/r**. ∎
4. Now ∇U = 2r⁴**r**. Try U = U(r): then ∇U = U′(r)**r**/r. Compare: U′(r)/r = 2r⁴ ⇒ U′ = 2r⁵ ⇒ **U = r⁶/3 + C**.

Check: ∇(r⁶/3) = (2r⁵)**r**/r = 2r⁴**r** ✓.

### P2. (CSS 2018, 2020 type) Show ∇²rⁿ = n(n + 1)rⁿ⁻², and that ψ = sin(kr)/r satisfies ∇²ψ + k²ψ = 0.

**Solution.**
1. From P1, ∇rⁿ = n rⁿ⁻²**r**.
2. ∇²rⁿ = ∇·(n rⁿ⁻²**r**) = n[∇(rⁿ⁻²)·**r** + rⁿ⁻²(∇·**r**)] = n[(n − 2)rⁿ⁻⁴(**r**·**r**) + 3rⁿ⁻²] = n[(n − 2) + 3]rⁿ⁻² = **n(n + 1)rⁿ⁻²**.
3. General radial Laplacian: ∇²f(r) = ∇·(f′**r**/r) = f″ + 2f′/r (same steps).
4. ψ = sin(kr)/r: ψ′ = k cos(kr)/r − sin(kr)/r²; ψ″ = −k² sin(kr)/r − 2k cos(kr)/r² + 2 sin(kr)/r³.
5. ψ″ + 2ψ′/r = −k² sin(kr)/r − 2k cos/r² + 2 sin/r³ + 2k cos/r² − 2 sin/r³ = −k² sin(kr)/r = −k²ψ.
6. So **∇²ψ + k²ψ = 0** (Helmholtz equation). ∎ (Checked numerically at r = 0.9, k = 2: residual ≈ 10⁻⁸.)

### P3. (CSS 2019 type) Directional derivative of φ = x²yz + 4xz² at (1, −2, −1) in the direction 2**i** − **j** − 2**k**. What is the maximum rate of change there?

**Solution.**
1. ∇φ = (2xyz + 4z², x²z, x²y + 8xz).
2. At (1, −2, −1): (4 + 4, −1, −2 − 8) = (8, −1, −10).
3. Unit vector **a** = (2, −1, −2)/√9 = (2, −1, −2)/3.
4. D = ∇φ·**a** = (16 + 1 + 20)/3 = **37/3 ≈ 12.33**.
5. Maximum rate = |∇φ| = √(64 + 1 + 100) = **√165 ≈ 12.85**, in the direction of ∇φ.

### P4. (CSS 2023) Find the angle between the surfaces x² + y² + z² = 9 and z = x² + y² − 3 at (2, −1, 2).

**Solution.**
1. φ₁ = x² + y² + z² − 9 ⇒ ∇φ₁ = (2x, 2y, 2z) = (4, −2, 4), |∇φ₁| = 6.
2. φ₂ = x² + y² − z − 3 ⇒ ∇φ₂ = (2x, 2y, −1) = (4, −2, −1), |∇φ₂| = √21.
3. cos θ = (16 + 4 − 4)/(6√21) = 16/(6√21) = 0.58191.
4. **θ = 54.41°** (0.9497 rad).

### P5. (CSS 2019) Find a, b, c so that **F** = (x + 2y + az)**i** + (bx − 3y − z)**j** + (4x + cy + 2z)**k** is irrotational, and find φ with **F** = ∇φ.

**Solution.**
1. ∇×**F** = (∂F₃/∂y − ∂F₂/∂z, ∂F₁/∂z − ∂F₃/∂x, ∂F₂/∂x − ∂F₁/∂y) = (c + 1, a − 4, b − 2).
2. Set to **0**: **a = 4, b = 2, c = −1**.
3. φₓ = x + 2y + 4z ⇒ φ = x²/2 + 2xy + 4xz + g(y, z).
4. φ_y = 2x + g_y = 2x − 3y − z ⇒ g = −3y²/2 − yz + h(z).
5. φ_z = 4x − y + h′(z) = 4x − y + 2z ⇒ h = z².
6. **φ = x²/2 − 3y²/2 + z² + 2xy + 4xz − yz + C**.

### P6. (CSS 2023) Work done by **F** = 3xy**i** − 5z**j** + 10x**k** along x = t² + 1, y = 2t², z = t³ from t = 1 to t = 2.

**Solution.**
1. W = ∫**F**·d**r** = ∫(3xy dx − 5z dy + 10x dz).
2. dx = 2t dt, dy = 4t dt, dz = 3t² dt.
3. 3xy dx = 3(t² + 1)(2t²)(2t) dt = (12t⁵ + 12t³) dt.
4. −5z dy = −5t³(4t) dt = −20t⁴ dt.
5. 10x dz = 10(t² + 1)(3t²) dt = (30t⁴ + 30t²) dt.
6. Sum: 12t⁵ + 10t⁴ + 12t³ + 30t².
7. W = [2t⁶ + 2t⁵ + 3t⁴ + 10t³]₁² = 320 − 17 = **303 units**.

### P7. (CSS 2019) Evaluate ∮_C (xy + y²)dx + x²dy, where C bounds the region between y = x and y = x², (a) directly, (b) by Green's theorem.

**Solution.** The curves meet at (0, 0) and (1, 1). Counter-clockwise: along the parabola from (0, 0) to (1, 1), back along the line.
(a) **Direct.**
- On y = x², dy = 2x dx: ∫₀¹[(x³ + x⁴) + 2x³]dx = 3/4 + 1/5 = 19/20.
- On y = x from 1 to 0: ∫₁⁰[(x² + x²) + x²]dx = −1.
- Total = 19/20 − 1 = **−1/20**.
(b) **Green.** M = xy + y², N = x². ∂N/∂x − ∂M/∂y = 2x − x − 2y = x − 2y.
∬ = ∫₀¹∫_{x²}^{x}(x − 2y)dy dx = ∫₀¹[xy − y²]_{x²}^{x} dx = ∫₀¹(x⁴ − x³)dx = 1/5 − 1/4 = **−1/20**. ✓ Theorem verified.

### P8. (CSS 2018) Evaluate ∮ **A**·d**r** with **A** = (−y**i** + x**j**)/(x² + y²) around x² + y² = a². Does Green's theorem apply?

**Solution.**
1. x = a cos t, y = a sin t, dx = −a sin t dt, dy = a cos t dt, x² + y² = a².
2. **A**·d**r** = [(−a sin t)(−a sin t) + (a cos t)(a cos t)]/a² dt = dt.
3. ∮ = ∫₀²π dt = **2π**.
4. Green's theorem would give ∬(∂N/∂x − ∂M/∂y) = ∬0 = 0, because ∂N/∂x = ∂M/∂y = (y² − x²)/(x² + y²)². The contradiction is because M and N are **not continuous at the origin**, which lies inside C. Green's theorem does not apply. (The answer 2π is independent of a.)

### P9. (CSS 2020) Evaluate ∬_S **A**·**n** dS, **A** = 18z**i** − 12**j** + 3y**k**, S the part of 2x + 3y + 6z = 12 in the first octant.

**Solution.**
1. ∇(2x + 3y + 6z) = (2, 3, 6), so **n** = (2, 3, 6)/7 and **n**·**k** = 6/7.
2. **A**·**n** = (36z − 36 + 18y)/7. On S, 6z = 12 − 2x − 3y ⇒ 36z = 72 − 12x − 18y ⇒ **A**·**n** = (36 − 12x)/7.
3. dS = dx dy/|**n**·**k**| = (7/6)dx dy. Projection R: x, y ≥ 0, 2x + 3y ≤ 12.
4. Flux = ∬_R (36 − 12x)/6 dx dy = ∫₀⁶(6 − 2x)·(12 − 2x)/3 dx = (1/3)∫₀⁶(72 − 36x + 4x²)dx = (1/3)(432 − 648 + 288) = **24**.

### P10. (CSS 2024) Verify the divergence theorem for **A** = 4x**i** − 2y²**j** + z²**k** over the region x² + y² ≤ 4, 0 ≤ z ≤ 3.

**Solution.** Statement: ∯_S **A**·**n** dS = ∭_V ∇·**A** dV.
**Volume integral.** ∇·**A** = 4 − 4y + 2z. In cylindrical coordinates (y = r sin θ):
∭ = ∫₀³∫₀²π∫₀²(4 − 4r sin θ + 2z) r dr dθ dz. The sin θ term vanishes over 0 to 2π.
= ∫₀³(4 + 2z)·(area 4π) dz = 4π[4z + z²]₀³ = 4π(21) = **84π**.
**Surface integral.**
- Top (z = 3, **n** = **k**): **A**·**n** = 9; ∬ = 9 × 4π = 36π.
- Bottom (z = 0, **n** = −**k**): **A**·**n** = −z² = 0.
- Side (**n** = (x, y, 0)/2, x = 2 cos θ, y = 2 sin θ, dS = 2 dθ dz): **A**·**n** = 2x² − y³ = 8 cos²θ − 8 sin³θ. ∬ = ∫₀³∫₀²π(8cos²θ − 8 sin³θ)·2 dθ dz = 3 × 2 × 8π = 48π.
- Total = 36π + 48π = **84π**. ✓ Verified. (Both ≈ 263.894, checked numerically.)

### P11. (CSS 2016) Verify Stokes' theorem for **A** = (2x − y)**i** − yz²**j** − y²z**k** over the upper half of the unit sphere.

**Solution.** Statement: ∮_C **A**·d**r** = ∬_S (∇×**A**)·**n** dS.
**Line integral.** C: x² + y² = 1, z = 0, x = cos t, y = sin t. On C, z = 0, so **A**·d**r** = (2x − y)dx = (2 cos t − sin t)(−sin t)dt.
∮ = ∫₀²π(−2 sin t cos t + sin²t)dt = 0 + π = **π**.
**Surface integral.** ∇×**A** = (∂(−y²z)/∂y − ∂(−yz²)/∂z, ∂(2x − y)/∂z − ∂(−y²z)/∂x, ∂(−yz²)/∂x − ∂(2x − y)/∂y) = (−2yz + 2yz, 0, 1) = **k**.
∬ **k**·**n** dS = ∬ over the projection (unit disc) dx dy = **π**. ✓ Verified.

### P12. (CSS 2026) **A** = x²yz**i** − 2xz³**j** + xz²**k**, **B** = 2z**i** + y**j** − x²**k**. Find ∂²(**A**×**B**)/∂x∂y, and its value at (1, 0, −2).

**Solution.**
1. **A**×**B** = (A₂B₃ − A₃B₂, A₃B₁ − A₁B₃, A₁B₂ − A₂B₁)
 = ((−2xz³)(−x²) − (xz²)(y), (xz²)(2z) − (x²yz)(−x²), (x²yz)(y) − (−2xz³)(2z))
 = (2x³z³ − xyz², 2xz³ + x⁴yz, x²y²z + 4xz⁴).
2. ∂/∂y: (−xz², x⁴z, 2x²yz).
3. ∂/∂x of that: **(−z², 4x³z, 4xyz)**, i.e. −z²**i** + 4x³z**j** + 4xyz**k**.
4. At (1, 0, −2): **−4i − 8j** (+0**k**). (Checked by finite differences.)

---

# B. Statics

### P13. (CSS 2018 and 2023) Forces P, 2P, 3P, 4P act along AB, BC, CD, DA of a square of side a, and forces 8√2P act along AC and BD. Find the resultant and the distance of its line of action from A.

**Solution.**
1. Axes: A(0, 0), B(a, 0), C(a, a), D(0, a).
2. Components:
 - P along AB: (P, 0) at A.
 - 2P along BC: (0, 2P) at B.
 - 3P along CD: (−3P, 0) at C.
 - 4P along DA: (0, −4P) at D.
 - 8√2P along AC (direction (1, 1)/√2): (8P, 8P) at A.
 - 8√2P along BD (direction (−1, 1)/√2): (−8P, 8P) at B.
3. X = P − 3P + 8P − 8P = −2P. Y = 2P − 4P + 8P + 8P = 14P.
4. R = √(4 + 196)P = **10√2 P ≈ 14.14P**, making angle tan⁻¹(14/−2) = 98.1° with AB.
5. Moments about A (M = xF_y − yF_x): BC: a(2P) = 2Pa; CD: −a(−3P) = 3Pa; DA: 0 − a·0 = 0; BD: a(8P) = 8Pa; AB, AC: 0. G = **13Pa** (anticlockwise).
6. Distance from A = G/R = 13a/(10√2) = **0.919a**. Line of action: xY − yX = G ⇒ **14x + 2y = 13a**.

### P14. (CSS 2021) Two forces have greatest resultant P and least resultant Q. Show that when they act at angle α their resultant is √(P² cos²(α/2) + Q² sin²(α/2)). Find the forces and the resultant at 90° if P = 17 N, Q = 7 N.

**Solution.**
1. Let the forces be F₁, F₂ (F₁ > F₂). Greatest: F₁ + F₂ = P; least: F₁ − F₂ = Q.
2. R² = F₁² + F₂² + 2F₁F₂ cos α. Write cos α = cos²(α/2) − sin²(α/2) and F₁² + F₂² = (F₁² + F₂²)(cos² + sin²):
 R² = (F₁ + F₂)² cos²(α/2) + (F₁ − F₂)² sin²(α/2) = P² cos²(α/2) + Q² sin²(α/2). ∎
3. Numbers: F₁ = (17 + 7)/2 = **12 N**, F₂ = **5 N**. At 90°: R² = 289(½) + 49(½) = 169 ⇒ **R = 13 N** (= √(12² + 5²) ✓).

### P15. (CSS 2022) Three concurrent forces P, Q, R are in equilibrium. The angle between P and Q is double the angle between P and R. Prove R² = Q(Q − P).

**Solution.**
1. Let angle (P, R) = θ, angle (P, Q) = 2θ, with Q and R on opposite sides of P. Then angle (Q, R) = 2π − 3θ.
2. Lami's theorem: P/sin(Q, R) = Q/sin(R, P) = R/sin(P, Q), so P/sin(2π − 3θ) = Q/sin θ = R/sin 2θ.
3. Since sin(2π − 3θ) = −sin 3θ: P/(−sin 3θ) = Q/sin θ = R/sin 2θ.
4. R/Q = sin 2θ/sin θ = 2 cos θ.
5. P/Q = −sin 3θ/sin θ = −(3 − 4 sin²θ) = 1 − 4 cos²θ = 1 − (R/Q)².
6. Multiply by Q²: PQ = Q² − R² ⇒ **R² = Q(Q − P)**. ∎ (Numerical check with θ = 70°, Q = 1: force sums are zero and R² = Q(Q − P) = 0.4679.)

### P16. (CSS 2023) A uniform rod AB, length a, weight W, is hinged at A to a vertical wall and held by a light string of length a from B to a point C, b vertically above A. Find the tension and show that the hinge reaction is W√(a² + 2b²)/(2b).

**Solution.**
1. AB = BC = a, AC = b: triangle ABC is isosceles with apex B. B is at height b/2 above A and at horizontal distance d = √(a² − b²/4).
2. Forces on the rod: W at the midpoint (horizontal distance d/2 from A); tension T along BC; hinge reaction (X, Y) at A.
3. Moments about A. Perpendicular distance from A to line BC = (twice the area of ABC)/BC = (b·d)/a. So T·bd/a = W·d/2 ⇒ **T = Wa/(2b)**.
4. Direction of BC from B: (−d, b/2)/a. So T has components (−Td/a, Tb/(2a)).
5. Horizontal: X = Td/a = Wd/(2b). Vertical: Y + Tb/(2a) = W ⇒ Y = W − W/4 = 3W/4.
6. R² = X² + Y² = W²(a² − b²/4)/(4b²) + 9W²/16 = W²[a²/(4b²) − 1/16 + 9/16] = W²(a² + 2b²)/(4b²).
7. **R = W√(a² + 2b²)/(2b)**. ∎ (Checked with a = 1, b = 0.8, W = 1: R = 0.94373 both ways.)

### P17. (CSS 2018) A uniform ladder 70 ft long rests at 45° against a vertical wall. μ = 1/3 at the wall and 1/2 at the ground. A man whose weight is half the ladder's climbs it. How far up is he when the ladder slips?

**Solution.**
1. Ladder weight W at the midpoint; man W/2 at distance x from the foot. Ground: normal R, friction R/2 towards the wall (limiting). Wall: normal S, friction S/3 upward (limiting).
2. Horizontal: R/2 = S.
3. Vertical: R + S/3 = W + W/2 ⇒ R + R/6 = 3W/2 ⇒ **R = 9W/7**, **S = 9W/14**.
4. Moments about the foot (θ = 45°, sin = cos cancels): S·70 + (S/3)·70 = W·35 + (W/2)x.
5. (4/3)(9W/14)(70) = 35W + Wx/2 ⇒ 60W = 35W + Wx/2 ⇒ **x = 50 ft**.
So the ladder slips when the man is 50 ft up (5/7 of its length).

### P18. (CSS 2017) A 100 kg crate rests on a wooden ramp at 10°, μ_s = 0.28. Find the weight components, the friction force, and the angle at which it begins to slip (g = 9.8 m/s²).

**Solution.**
1. W = 100 × 9.8 = 980 N.
2. Perpendicular to ramp: W cos 10° = **965.1 N**; parallel (down the slope): W sin 10° = **170.2 N**.
3. In equilibrium, static friction balances the parallel component: **F = 170.2 N** up the slope.
4. Maximum available friction μN = 0.28 × 965.1 = 270.2 N > 170.2 N ⇒ the crate does not slip.
5. Slip begins when W sin α = μW cos α ⇒ tan α = 0.28 ⇒ **α = 15.64°**.
(Free-body diagram: weight down, normal perpendicular to ramp, friction up the ramp.)

### P19. (CSS 2016, 2024) (a) Find the centroid of the region bounded by the cardioid r = a(1 + cos θ). (b) Find the centroid of the surface formed by revolving it about the initial line.

**Solution (a).**
1. By symmetry ȳ = 0.
2. Area A = ½∫₀²π a²(1 + cos θ)² dθ = (a²/2)∫(1 + 2cos θ + cos²θ)dθ = (a²/2)(2π + 0 + π) = **3πa²/2**.
3. Moment about the y-axis: ∬x dA = ∫₀²π∫₀^{a(1+cos θ)} r cos θ·r dr dθ = (a³/3)∫₀²π(1 + cos θ)³cos θ dθ.
4. Expand: (1 + 3cos θ + 3cos²θ + cos³θ)cos θ; over 0 to 2π, ∫cos θ = 0, ∫3cos²θ = 3π, ∫3cos³θ = 0, ∫cos⁴θ = 3π/4. Total 15π/4. Moment = (a³/3)(15π/4) = 5πa³/4.
5. **x̄ = (5πa³/4)/(3πa²/2) = 5a/6** from the cusp (pole).
**Solution (b).**
1. ds = √(r² + r′²)dθ = a√(2 + 2cos θ)dθ = 2a cos(θ/2)dθ, 0 ≤ θ ≤ π. y = r sin θ, x = r cos θ.
2. Surface S = ∫₀^π 2πy ds = ∫₀^π 2π·a(1 + cos θ) sin θ·2a cos(θ/2)dθ. With 1 + cos θ = 2cos²(θ/2), sin θ = 2 sin(θ/2)cos(θ/2): S = 16πa²∫₀^π cos⁴(θ/2) sin(θ/2)dθ = 16πa²·(2/5) = **32πa²/5**.
3. Moment = ∫₀^π x·2πy ds = 32πa³∫₀^π cos⁶(θ/2) sin(θ/2)(2cos²(θ/2) − 1)dθ. Put u = cos(θ/2), du = −½ sin(θ/2)dθ: = 64πa³∫₀¹(2u⁸ − u⁶)du = 64πa³(2/9 − 1/7) = 64πa³(5/63) = 320πa³/63.
4. **x̄ = (320πa³/63)/(32πa²/5) = 50a/63 ≈ 0.794a**. (Both results checked by numerical integration.)

### P20. (CSS 2022) Find the centre of mass of a semicircular lamina of radius a whose density varies as the square of the distance from the centre.

**Solution.**
1. Density ρ = kr². Place the diameter on the x-axis, centre O. By symmetry x̄ = 0.
2. Mass M = ∫₀^π∫₀^a kr²·r dr dθ = kπa⁴/4.
3. Moment ∬y ρ dA = ∫₀^π∫₀^a kr²(r sin θ) r dr dθ = k(a⁵/5)(2) = 2ka⁵/5.
4. **ȳ = (2ka⁵/5)/(kπa⁴/4) = 8a/(5π) ≈ 0.509a** on the axis of symmetry (compare 4a/(3π) ≈ 0.424a for uniform density — the mass is pushed outward).

### P21. (CSS 2025) Find the centre of mass of the surface formed by revolving the arc of the parabola y² = 4ax from the vertex to the end of the latus rectum about the x-axis.

**Solution.**
1. y = 2√(ax), 0 ≤ x ≤ a. y′ = √(a/x). ds = √(1 + a/x) dx. So y ds = 2√(ax)·√((x + a)/x) dx = 2√a·√(x + a) dx.
2. Surface S = ∫₀^a 2πy ds = 4π√a∫₀^a(x + a)^{1/2}dx = 4π√a·(2/3)[(2a)^{3/2} − a^{3/2}] = **(8πa²/3)(2√2 − 1)**.
3. Moment ∫₀^a x·2πy ds = 4π√a∫₀^a x√(x + a) dx. Put u = x + a: ∫_a^{2a}(u − a)u^{1/2}du = [2u^{5/2}/5 − 2au^{3/2}/3]_a^{2a} = (4a^{5/2}/15)(√2 + 1). Moment = (16πa³/15)(√2 + 1).
4. x̄ = (16πa³(√2 + 1)/15)/(8πa²(2√2 − 1)/3) = (2a/5)(√2 + 1)/(2√2 − 1) = **2a(5 + 3√2)/35 ≈ 0.528a** from the vertex, on the axis. (Checked numerically.)

---

# C. Dynamics

### P22. (CSS 2017, 2018) A particle moves in a straight line with retardation kv³, starting with speed u. Find its speed and the time taken when it has gone a distance x.

**Solution.**
1. Acceleration as a function of v and we want v(x) ⇒ use v dv/dx = −kv³.
2. Separate: dv/v² = −k dx ⇒ −1/v = −kx + C. At x = 0, v = u ⇒ C = −1/u.
3. 1/v = 1/u + kx ⇒ **v = u/(1 + kux)**.
4. dt = dx/v = (1/u + kx)dx ⇒ **t = x/u + kx²/2**.
(Numerical check u = 10, k = 0.01, x = 3: v = 7.692, t = 0.345 — matches a step-by-step simulation.)

### P23. (CSS 2017 type) A particle in SHM has speeds 5 ft/s and 4 ft/s at distances 12 ft and 13 ft from the centre. Find the amplitude and period.

**Solution.**
1. SHM: v² = ω²(A² − x²).
2. 25 = ω²(A² − 144), 16 = ω²(A² − 169).
3. Subtract: 9 = 25ω² ⇒ ω = 3/5 = 0.6 rad/s.
4. A² = 144 + 25/0.36 = 144 + 69.44 = 213.44 ⇒ **A = 14.61 ft**.
5. **T = 2π/ω = 10π/3 = 10.47 s**.

### P24. (CSS 2019 type) A particle moves along a line with v² = 9(8 + 2x − x²). Show the motion is SHM; find the centre, amplitude and period.

**Solution.**
1. Complete the square: 8 + 2x − x² = 9 − (x − 1)². So v² = 9[3² − (x − 1)²].
2. Compare with v² = ω²(A² − X²), X = x − 1: ω = 3, A = 3.
3. Check: differentiate v² w.r.t. x: 2v dv/dx = 2a = 9(2 − 2x) ⇒ a = −9(x − 1): acceleration towards x = 1, proportional to distance ⇒ SHM. ∎
4. **Centre x = 1, amplitude 3, period 2π/3 ≈ 2.094**.

### P25. (CSS 2026) What is the maximum range of a projectile fired with muzzle speed 1 mile/s? What height does it reach then?

**Solution.**
1. u = 1 mile/s = 5280 ft/s, g = 32 ft/s². Neglect air resistance and the earth's curvature.
2. R = u² sin 2α/g is greatest at α = 45°: R_max = u²/g = 27,878,400/32 = **871,200 ft = 165 miles**.
3. Height H = u² sin²α/(2g) = u²/(4g) at 45° = **217,800 ft = 41.25 miles**.
4. Comment: the real range is far smaller because of air resistance; at these heights the flat-earth, constant-g model also fails.

### P26. (CSS 2024) Prove that the least speed with which a particle can be projected from a height h so as to strike the ground at horizontal distance a is √(g(√(a² + h²) − h)). Evaluate for h = 20 m, a = 40 m.

**Solution.**
1. Origin at the point of projection, speed u, angle α. Ground at y = −h.
2. Path: y = x tan α − gx²(1 + tan²α)/(2u²). Must pass through (a, −h):
 −h = a tan α − ga²(1 + tan²α)/(2u²).
3. Multiply by 2u² and put T = tan α: ga²T² − 2u²aT + (ga² − 2u²h) = 0.
4. For a real angle, discriminant ≥ 0: 4u⁴a² − 4ga²(ga² − 2u²h) ≥ 0 ⇒ u⁴ + 2ghu² − g²a² ≥ 0.
5. Roots in u²: u² = −gh ± g√(h² + a²). Positive root ⇒ u² ≥ g(√(a² + h²) − h).
6. **u_min = √(g(√(a² + h²) − h))**. ∎
7. h = 20, a = 40, g = 9.8: √(1600 + 400) = 44.721; u_min = √(9.8 × 24.721) = **15.57 m/s**. (A brute-force search over angles gives the same.)

### P27. (CSS 2016/2018/2020 derivation + 2023) Derive the radial and transverse components of velocity and acceleration. Then find them at t = 1 for r = at + bt², θ = ct^{3/2}.

**Solution.**
1. **e**_r = cos θ**i** + sin θ**j**, **e**_θ = −sin θ**i** + cos θ**j**. Differentiating: d**e**_r/dt = θ̇**e**_θ, d**e**_θ/dt = −θ̇**e**_r.
2. **r** = r**e**_r ⇒ **v** = ṙ**e**_r + rθ̇**e**_θ. So **v_r = ṙ, v_θ = rθ̇**.
3. **a** = r̈**e**_r + ṙθ̇**e**_θ + (ṙθ̇ + rθ̈)**e**_θ + rθ̇(−θ̇**e**_r) ⇒ **a_r = r̈ − rθ̇², a_θ = rθ̈ + 2ṙθ̇ = (1/r)d(r²θ̇)/dt**.
4. Application at t = 1: r = a + b, ṙ = a + 2b, r̈ = 2b, θ̇ = (3c/2)t^{1/2} = 3c/2, θ̈ = (3c/4)t^{−1/2} = 3c/4.
5. **v_r = a + 2b; v_θ = 3c(a + b)/2.**
6. **a_r = 2b − 9c²(a + b)/4; a_θ = 3c(a + b)/4 + 3c(a + 2b) = (3c/4)(5a + 9b).**
(With a = b = c = 1: v_r = 3, v_θ = 3, a_r = −2.5, a_θ = 10.5 ✓.)

### P28. (CSS 2024 and 2026) A particle moves on ax² + by² = 1 with θ = ct². Find the radial and transverse components of its velocity.

**Solution.**
1. Polar form: r²(a cos²θ + b sin²θ) = 1 ⇒ r = (a cos²θ + b sin²θ)^{−1/2}.
2. θ̇ = 2ct.
3. **v_θ = rθ̇ = 2ct·r**.
4. dr/dθ = −½(a cos²θ + b sin²θ)^{−3/2}·(−2a cos θ sin θ + 2b sin θ cos θ) = (a − b)r³ sin θ cos θ.
5. **v_r = (dr/dθ)θ̇ = 2ct(a − b)r³ sin θ cos θ = ct(a − b)r³ sin 2θ**, where θ = ct² and r is as in step 1.

### P29. (CSS 2025) A particle moves on x²/a² + y²/b² = 1 with uniform speed V. Find the tangential and normal components of its acceleration at (0, b).

**Solution.**
1. **a** = (dv/dt)**T** + (v²/ρ)**N**. Speed constant ⇒ **tangential component = 0**.
2. Near (0, b): y = b√(1 − x²/a²). y′(0) = 0; y″ = −b/a² at x = 0.
3. ρ = (1 + y′²)^{3/2}/|y″| = a²/b.
4. **Normal component = V²/ρ = bV²/a²**, directed towards the centre (down the y-axis).
(Check with a = 3, b = 2, V = 5: 50/9 = 5.556.)

### P30. (CSS 2024) Find the law of force for a particle describing r = l/(1 − e cos θ) under a central force.

**Solution.**
1. Central-orbit equation: d²u/dθ² + u = F/(h²u²), u = 1/r.
2. u = (1 − e cos θ)/l ⇒ du/dθ = e sin θ/l ⇒ d²u/dθ² = e cos θ/l.
3. u″ + u = e cos θ/l + 1/l − e cos θ/l = 1/l.
4. F = h²u²(1/l) = (h²/l)/r².
5. **The force is attractive and varies inversely as the square of the distance**, F = μ/r² with μ = h²/l (so h² = μl: l is the semi-latus rectum).

### P31. (CSS 2021) Show that the central force for the orbit rⁿ = aⁿ cos nθ is (n + 1)h²a^{2n}/r^{2n+3}.

**Solution.**
1. Pedal equation. Take logs: n ln r = n ln a + ln cos nθ ⇒ (n/r)dr/dθ = −n tan nθ ⇒ (1/r)dr/dθ = −tan nθ.
2. The angle φ between radius and tangent satisfies cot φ = (1/r)dr/dθ = −tan nθ ⇒ φ = π/2 + nθ.
3. p = r sin φ = r cos nθ = r·rⁿ/aⁿ = r^{n+1}/aⁿ.
4. F = (h²/p³)(dp/dr) = h²·(a^{3n}/r^{3n+3})·(n + 1)rⁿ/aⁿ = **(n + 1)h²a^{2n}/r^{2n+3}**. ∎

### P32. (CSS 2022) A particle has position **r** = a cos nt **i** + b sin nt **j** (a > b > 0). Show the path is an ellipse, the force is directed towards the centre, and find the maximum speed.

**Solution.**
1. x = a cos nt, y = b sin nt ⇒ x²/a² + y²/b² = cos² + sin² = 1: **an ellipse**, centre O.
2. **a** = d²**r**/dt² = −n²(a cos nt**i** + b sin nt**j**) = **−n²r**: directed towards O, magnitude ∝ distance (central force, "elliptic harmonic motion").
3. **v** = −an sin nt**i** + bn cos nt**j** ⇒ v² = n²(a² sin²nt + b² cos²nt) = n²[b² + (a² − b²)sin²nt].
4. Since a > b, v² is greatest when sin²nt = 1: **v_max = na**, at the ends of the minor axis (x = 0); least speed nb at the ends of the major axis.

---

# D. Ordinary Differential Equations

### P33. (CSS 2025) Solve √(1 − y²)dx − √(1 − x²)dy = 0, y(0) = √3/2.

**Solution.**
1. Separable: dy/√(1 − y²) = dx/√(1 − x²).
2. Integrate: sin⁻¹y = sin⁻¹x + C.
3. x = 0, y = √3/2 ⇒ C = sin⁻¹(√3/2) = π/3.
4. y = sin(sin⁻¹x + π/3) = sin(sin⁻¹x)cos(π/3) + cos(sin⁻¹x)sin(π/3).
5. **y = x/2 + (√3/2)√(1 − x²)**, valid for −1 ≤ x ≤ 1/2 (where sin⁻¹x + π/3 ≤ π/2 keeps the branch). (Substituted back: residual ≈ 10⁻¹¹.)

### P34. (CSS 2017) Test for exactness and solve (2xy + y − tan y)dx + (x² − x tan²y + sec²y)dy = 0.

**Solution.**
1. M = 2xy + y − tan y ⇒ M_y = 2x + 1 − sec²y.
2. N = x² − x tan²y + sec²y ⇒ N_x = 2x − tan²y = 2x − (sec²y − 1) = 2x + 1 − sec²y.
3. M_y = N_x ⇒ **exact**.
4. ∫M dx (y fixed) = x²y + xy − x tan y.
5. Terms of N free of x: sec²y ⇒ ∫sec²y dy = tan y.
6. **x²y + xy − x tan y + tan y = C**. (Checked: F_x = M, F_y = N.)

### P35. (CSS 2022) Solve xy′ + y = eˣ, y(1) = 2, and state the largest interval of definition.

**Solution.**
1. Left side = d(xy)/dx. So d(xy)/dx = eˣ.
2. xy = eˣ + C. At x = 1: 2 = e + C ⇒ C = 2 − e.
3. **y = (eˣ + 2 − e)/x**.
4. The standard form y′ + y/x = eˣ/x has coefficients continuous except at x = 0. The initial point x = 1 > 0, so the **largest interval is (0, ∞)**.

### P36. (CSS 2020) Solve x(2 + x)y′ + 2(1 + x)y = 1 + 3x², y(−1) = 1.

**Solution.**
1. Note d/dx[x(2 + x)] = 2 + 2x = 2(1 + x). So the left side is d/dx[x(2 + x)y].
2. x(2 + x)y = ∫(1 + 3x²)dx = x + x³ + C.
3. x = −1, y = 1: (−1)(1)(1) = −1 − 1 + C ⇒ C = 1.
4. **y = (x³ + x + 1)/(x² + 2x)**, on the interval (−2, 0) containing x = −1. (Residual checked ≈ 10⁻⁷.)

### P37. (CSS 2016) Solve y′ + y/x = x³y⁴.

**Solution.**
1. Bernoulli with n = 4. Divide by y⁴: y⁻⁴y′ + y⁻³/x = x³.
2. v = y⁻³ ⇒ v′ = −3y⁻⁴y′. So −v′/3 + v/x = x³ ⇒ v′ − 3v/x = −3x³.
3. IF = e^{∫−3/x dx} = x⁻³. (vx⁻³)′ = −3 ⇒ vx⁻³ = −3x + C.
4. v = Cx³ − 3x⁴ ⇒ **1/y³ = Cx³ − 3x⁴**.

### P38. (CSS 2023) Solve x dy/dx + y = 1/y².

**Solution.**
1. y′ + y/x = y⁻²/x: Bernoulli with n = −2.
2. Multiply by y²: y²y′ + y³/x = 1/x. Put v = y³, v′ = 3y²y′: v′/3 + v/x = 1/x ⇒ v′ + 3v/x = 3/x.
3. IF = x³: (x³v)′ = 3x² ⇒ x³v = x³ + C.
4. **y³ = 1 + C/x³** (or x³(y³ − 1) = C).

### P39. Solve the Riccati equation y′ = 1 + x² − 2xy + y², given that y = x is a solution.

**Solution.**
1. Check y₁ = x: y₁′ = 1; RHS = 1 + x² − 2x² + x² = 1 ✓.
2. Put y = x + 1/v. Then y′ = 1 − v′/v².
3. RHS = 1 + x² − 2x(x + 1/v) + (x + 1/v)² = 1 + x² − 2x² − 2x/v + x² + 2x/v + 1/v² = 1 + 1/v².
4. So 1 − v′/v² = 1 + 1/v² ⇒ v′ = −1 ⇒ v = C − x.
5. **y = x + 1/(C − x)**. (Residual checked.)

### P40. (CSS 2026 modelling) A lake holds 10⁶ m³. River water with pollutant concentration 0.01 kg/m³ flows in at 10⁴ m³/day and lake water flows out at the same rate. Initially the lake is clean. Model the pollutant and find the amount after 100 days.

**Solution.**
1. Q(t) = kg of pollutant. Rate in = 10⁴ × 0.01 = 100 kg/day. Rate out = (Q/10⁶) × 10⁴ = 0.01Q kg/day.
2. dQ/dt = 100 − 0.01Q, Q(0) = 0. Linear first order.
3. IF = e^{0.01t}: (Qe^{0.01t})′ = 100e^{0.01t} ⇒ Qe^{0.01t} = 10⁴e^{0.01t} + C; Q(0) = 0 ⇒ C = −10⁴.
4. **Q(t) = 10⁴(1 − e^{−0.01t})** kg. Q(100) = 10⁴(1 − e^{−1}) = **6,321 kg**.
5. Long run: Q → 10⁴ kg, i.e. concentration → 0.01 kg/m³ (the inflow concentration). Assumptions: perfect mixing, constant volume, no decay of the pollutant.

### P41. (CSS 2022) Solve y‴ − 4y″ − 5y′ = 0.

**Solution.**
1. Auxiliary equation m³ − 4m² − 5m = 0 ⇒ m(m − 5)(m + 1) = 0 ⇒ m = 0, 5, −1.
2. **y = c₁ + c₂e^{5x} + c₃e^{−x}**.

### P42. (CSS 2019) Solve y″ − 3y′ + 2y = 2x³ − 9x² + 6x by undetermined coefficients.

**Solution.**
1. m² − 3m + 2 = 0 ⇒ m = 1, 2 ⇒ y_c = c₁eˣ + c₂e^{2x}.
2. Trial y_p = Ax³ + Bx² + Cx + D. y_p′ = 3Ax² + 2Bx + C, y_p″ = 6Ax + 2B.
3. Substitute: 2Ax³ + (2B − 9A)x² + (6A − 6B + 2C)x + (2B − 3C + 2D) = 2x³ − 9x² + 6x.
4. A = 1; 2B − 9 = −9 ⇒ B = 0; 6 − 0 + 2C = 6 ⇒ C = 0; 0 − 0 + 2D = 0 ⇒ D = 0.
5. y_p = x³. **y = c₁eˣ + c₂e^{2x} + x³**.

### P43. (CSS 2021) Solve y″ − y′ + y = 2 cos 3x by undetermined coefficients.

**Solution.**
1. m² − m + 1 = 0 ⇒ m = ½ ± i√3/2 ⇒ y_c = e^{x/2}[c₁ cos(√3x/2) + c₂ sin(√3x/2)].
2. Trial y_p = A cos 3x + B sin 3x (no resonance). y_p″ = −9y_p.
3. y_p″ − y_p′ + y_p = (−9A − 3B + A)cos 3x + (−9B + 3A + B)sin 3x = (−8A − 3B)cos 3x + (3A − 8B)sin 3x.
4. −8A − 3B = 2, 3A − 8B = 0 ⇒ A = 8B/3 ⇒ −64B/3 − 3B = 2 ⇒ B = −6/73, A = −16/73.
5. **y = e^{x/2}[c₁ cos(√3x/2) + c₂ sin(√3x/2)] − (16 cos 3x + 6 sin 3x)/73**.

### P44. (CSS 2016) Solve (D² − 5D + 6)y = x³e^{2x}.

**Solution.**
1. m² − 5m + 6 = 0 ⇒ m = 2, 3 ⇒ y_c = c₁e^{2x} + c₂e^{3x}.
2. Shift rule: y_p = e^{2x}·[1/((D + 2)² − 5(D + 2) + 6)]x³ = e^{2x}·[1/(D² − D)]x³.
3. 1/(D² − D) = −(1/D)·1/(1 − D) = −(1/D)(1 + D + D² + D³ + …).
4. (1 + D + D² + D³)x³ = x³ + 3x² + 6x + 6. Then (1/D) integrates: x⁴/4 + x³ + 3x² + 6x.
5. y_p = −e^{2x}(x⁴/4 + x³ + 3x² + 6x).
6. **y = c₁e^{2x} + c₂e^{3x} − e^{2x}(x⁴/4 + x³ + 3x² + 6x)**. (The 6x e^{2x} part could be absorbed in the CF only if it were a CF term; it is not, so keep it. Residual checked.)

### P45. (CSS 2024) Solve y⁗ + y″ = 3x² + 4 sin x − 2 cos x.

**Solution.**
1. m⁴ + m² = m²(m² + 1) = 0 ⇒ m = 0, 0, ±i ⇒ y_c = c₁ + c₂x + c₃ cos x + c₄ sin x.
2. Polynomial part: y_p1 = [1/(D²(1 + D²))]3x² = (1/D²)(1 − D² + …)3x² = (1/D²)(3x² − 6) = x⁴/4 − 3x².
3. Trig part: sin x and cos x are in y_c (roots ±i, simple), so try y_p2 = x·u with u = A cos x + B sin x (note u″ = −u).
 y″ = 2u′ + xu″ = 2u′ − xu; y⁗ = (2u′ − xu)″ = 2u‴ − (2u′ + xu″) = −2u′ − 2u′ + xu = −4u′ + xu.
 y⁗ + y″ = −2u′ = −2(−A sin x + B cos x) = 2A sin x − 2B cos x.
 Match 4 sin x − 2 cos x ⇒ A = 2, B = 1.
4. y_p2 = x(2 cos x + sin x) = 2x cos x + x sin x.
5. **y = c₁ + c₂x + c₃ cos x + c₄ sin x + x⁴/4 − 3x² + 2x cos x + x sin x**. (Substituted numerically: residual within finite-difference error.)

### P46. (CSS 2024) Solve y″ − 8y′ + 15y = 9xe^{2x}, y(0) = 5, y′(0) = 10.

**Solution.**
1. m² − 8m + 15 = 0 ⇒ m = 3, 5 ⇒ y_c = c₁e^{3x} + c₂e^{5x}.
2. Trial y_p = e^{2x}(Ax + B). Shift: (D + 2)² − 8(D + 2) + 15 = D² − 4D + 3 acting on Ax + B: −4A + 3Ax + 3B = 9x.
3. 3A = 9 ⇒ A = 3; −12 + 3B = 0 ⇒ B = 4. y_p = (3x + 4)e^{2x}.
4. y(0) = c₁ + c₂ + 4 = 5 ⇒ c₁ + c₂ = 1.
5. y′ = 3c₁e^{3x} + 5c₂e^{5x} + (6x + 11)e^{2x} ⇒ y′(0) = 3c₁ + 5c₂ + 11 = 10 ⇒ 3c₁ + 5c₂ = −1.
6. Solve: c₂ = −2, c₁ = 3.
7. **y = 3e^{3x} − 2e^{5x} + (3x + 4)e^{2x}**. (Checked: y(0) = 5, y′(0) = 10, residual ≈ 0.)

### P47. (CSS 2026) Solve y‴ + 8y = 2x − 5 + 8e^{−2x}, y(0) = −5, y′(0) = 3, y″(0) = −4.

**Solution.**
1. m³ + 8 = 0 ⇒ (m + 2)(m² − 2m + 4) = 0 ⇒ m = −2, 1 ± i√3.
 y_c = c₁e^{−2x} + eˣ(c₂ cos √3x + c₃ sin √3x).
2. Polynomial part: try Ax + B: 8(Ax + B) = 2x − 5 ⇒ A = 1/4, B = −5/8.
3. Exponential part: e^{−2x} is in y_c (resonance). 1/L(D) e^{ax} with L(a) = 0: x e^{ax}/L′(a). L′(D) = 3D², L′(−2) = 12. So 8·x e^{−2x}/12 = (2/3)x e^{−2x}.
4. y = y_c + x/4 − 5/8 + (2/3)x e^{−2x}.
5. Conditions. Use: for eˣcos √3x, value 1, slope 1, second derivative 1 − 3 = −2 at 0; for eˣ sin √3x, value 0, slope √3, second derivative 2√3 at 0. For (2/3)xe^{−2x}: value 0, slope 2/3, second derivative (2/3)(−4) = −8/3.
 - y(0): c₁ + c₂ − 5/8 = −5 ⇒ c₁ + c₂ = −35/8.
 - y′(0): −2c₁ + c₂ + √3c₃ + 1/4 + 2/3 = 3 ⇒ −2c₁ + c₂ + √3c₃ = 25/12.
 - y″(0): 4c₁ − 2c₂ + 2√3c₃ − 8/3 = −4 ⇒ 4c₁ − 2c₂ + 2√3c₃ = −4/3.
6. Subtract twice the second from the third: 8c₁ − 4c₂ = −4/3 − 25/6 = −11/2 ⇒ 2c₁ − c₂ = −11/8. Add to c₁ + c₂ = −35/8: 3c₁ = −46/8 ⇒ **c₁ = −23/12**, **c₂ = −59/24**. Then √3c₃ = 25/12 + 2c₁ − c₂ = 25/12 − 11/8 = 17/24 ⇒ **c₃ = 17/(24√3) = 17√3/72**.
7. **y = −(23/12)e^{−2x} + eˣ[−(59/24)cos √3x + (17√3/72) sin √3x] + x/4 − 5/8 + (2/3)xe^{−2x}**. (All three initial conditions and the equation checked numerically.)

### P48. (CSS 2016) Solve y″ + y = tan x, −π/2 < x < π/2, by variation of parameters.

**Solution.**
1. y₁ = cos x, y₂ = sin x, W = cos x·cos x − sin x·(−sin x) = 1. f = tan x.
2. u₁′ = −y₂f/W = −sin x tan x = −sin²x/cos x = −(1 − cos²x)/cos x = cos x − sec x ⇒ u₁ = sin x − ln|sec x + tan x|.
3. u₂′ = y₁f/W = sin x ⇒ u₂ = −cos x.
4. y_p = u₁y₁ + u₂y₂ = sin x cos x − cos x ln|sec x + tan x| − sin x cos x = −cos x ln|sec x + tan x|.
5. **y = c₁ cos x + c₂ sin x − cos x ln(sec x + tan x)**.

### P49. (CSS 2023) Solve y″ − 4y′ + 4y = (x + 1)e^{2x} by variation of parameters.

**Solution.**
1. m = 2 (double): y₁ = e^{2x}, y₂ = xe^{2x}. W = e^{2x}(e^{2x} + 2xe^{2x}) − xe^{2x}·2e^{2x} = e^{4x}.
2. u₁′ = −y₂f/W = −xe^{2x}(x + 1)e^{2x}/e^{4x} = −(x² + x) ⇒ u₁ = −x³/3 − x²/2.
3. u₂′ = y₁f/W = (x + 1) ⇒ u₂ = x²/2 + x.
4. y_p = e^{2x}[−x³/3 − x²/2 + x(x²/2 + x)] = e^{2x}(x³/6 + x²/2).
5. **y = (c₁ + c₂x)e^{2x} + e^{2x}(x³/6 + x²/2)**. (Residual checked.)

### P50. (CSS 2025) Solve 3y″ − 6y′ + 6y = eˣ sec x by variation of parameters.

**Solution.**
1. Divide by 3 first: y″ − 2y′ + 2y = (1/3)eˣ sec x. (Forgetting this costs the answer.)
2. m² − 2m + 2 = 0 ⇒ m = 1 ± i. y₁ = eˣ cos x, y₂ = eˣ sin x, W = e^{2x}.
3. u₁′ = −y₂f/W = −eˣ sin x·eˣ sec x/(3e^{2x}) = −(1/3)tan x ⇒ u₁ = (1/3)ln|cos x|.
4. u₂′ = y₁f/W = eˣ cos x·eˣ sec x/(3e^{2x}) = 1/3 ⇒ u₂ = x/3.
5. **y = eˣ(c₁ cos x + c₂ sin x) + (1/3)eˣ cos x ln|cos x| + (1/3)xeˣ sin x**. (Residual checked.)

### P51. (CSS 2016, 2018) Solve (a) x²y″ − 2xy′ − 4y = 0; (b) x²y″ − 3xy′ + 4y = x² ln x.

**Solution (a).** Try y = x^m: m(m − 1) − 2m − 4 = m² − 3m − 4 = 0 ⇒ m = 4, −1. **y = c₁x⁴ + c₂x⁻¹** (x > 0).
**Solution (b).**
1. Put x = eᵗ, D = d/dt: x²y″ = D(D − 1)y, xy′ = Dy.
2. [D(D − 1) − 3D + 4]y = (D − 2)²y = te^{2t}.
3. y_c = (c₁ + c₂t)e^{2t}.
4. y_p = [1/(D − 2)²]te^{2t} = e^{2t}(1/D²)t = e^{2t}t³/6.
5. Back to x (t = ln x, e^{2t} = x²): **y = x²(c₁ + c₂ ln x) + x²(ln x)³/6**. (Residual checked.)

### P52. (CSS 2018) Solve x²y″ − 3xy′ + 3y = 2x⁴eˣ by variation of parameters.

**Solution.**
1. Standard form: y″ − (3/x)y′ + (3/x²)y = 2x²eˣ.
2. Homogeneous (Cauchy–Euler): m² − 4m + 3 = 0 ⇒ m = 1, 3. y₁ = x, y₂ = x³, W = x·3x² − x³·1 = 2x³.
3. u₁′ = −y₂f/W = −x³·2x²eˣ/(2x³) = −x²eˣ ⇒ u₁ = −eˣ(x² − 2x + 2).
4. u₂′ = y₁f/W = x·2x²eˣ/(2x³) = eˣ ⇒ u₂ = eˣ.
5. y_p = −xeˣ(x² − 2x + 2) + x³eˣ = eˣ(2x² − 2x).
6. **y = c₁x + c₂x³ + 2x(x − 1)eˣ**. (Residual checked.)

### P53. (CSS 2025) Find a power-series solution of (x² + 1)y″ + xy′ − y = 0 about x = 0.

**Solution.**
1. x = 0 is an ordinary point. y = Σaₙxⁿ, y′ = Σnaₙxⁿ⁻¹, y″ = Σn(n − 1)aₙxⁿ⁻².
2. Substitute: Σn(n − 1)aₙxⁿ + Σn(n − 1)aₙxⁿ⁻² + Σnaₙxⁿ − Σaₙxⁿ = 0.
3. Shift the second sum (n → n + 2) and collect xⁿ: (n + 2)(n + 1)a_{n+2} + [n(n − 1) + n − 1]aₙ = 0.
4. n(n − 1) + n − 1 = n² − 1 ⇒ **a_{n+2} = −(n − 1)aₙ/(n + 2)**, n ≥ 0.
5. Odd n: a₃ = −0·a₁/3 = 0 ⇒ a₅ = a₇ = … = 0. So one solution is y₂ = x.
6. Even n: a₂ = a₀/2; a₄ = −a₂/4 = −a₀/8; a₆ = −3a₄/6 = a₀/16; a₈ = −5a₆/8 = −5a₀/128.
7. **y = a₀(1 + x²/2 − x⁴/8 + x⁶/16 − 5x⁸/128 + …) + a₁x**, converging for |x| < 1.
(Check: the even series is the binomial series for √(1 + x²); at x = 0.5 the partial sum is 1.11804 against √1.25 = 1.11803.)

### P54. (CSS 2022) Find two power-series solutions about x = 0 of y″ − 2xy′ + y = 0.

**Solution.**
1. Substitute y = Σaₙxⁿ: Σ(n + 2)(n + 1)a_{n+2}xⁿ − Σ2naₙxⁿ + Σaₙxⁿ = 0.
2. **a_{n+2} = (2n − 1)aₙ/[(n + 2)(n + 1)]**.
3. a₀ = 1, a₁ = 0: a₂ = −1/2, a₄ = (3/12)(−1/2) = −1/8, a₆ = (7/30)(−1/8) = −7/240, a₈ = −11/1920.
 **y₁ = 1 − x²/2 − x⁴/8 − 7x⁶/240 − …**
4. a₀ = 0, a₁ = 1: a₃ = 1/6, a₅ = (5/20)(1/6) = 1/24, a₇ = (9/42)(1/24) = 1/112, a₉ = 13/8064.
 **y₂ = x + x³/6 + x⁵/24 + x⁷/112 + …**
5. General solution y = c₁y₁ + c₂y₂ (valid for all x). (Coefficients computed exactly with fractions; residual checked.)

### P55. (CSS 2021) Use the Frobenius method to find two independent solutions of x²y″ − (x² + x)y′ + y = 0.

**Solution.**
1. p = −(x + 1)/x, q = 1/x²: xp = −(x + 1) and x²q = 1 are analytic ⇒ x = 0 is a regular singular point.
2. y = Σaₙx^{n+r}. Lowest power (n = 0): [r(r − 1) − r + 1]a₀ = (r − 1)²a₀ = 0 ⇒ **r = 1, 1** (equal roots).
3. General coefficient: [(n + r)(n + r − 1) − (n + r) + 1]aₙ − (n + r − 1)a_{n−1} = 0 ⇒ (n + r − 1)²aₙ = (n + r − 1)a_{n−1} ⇒ aₙ = a_{n−1}/(n + r − 1).
4. r = 1: aₙ = a_{n−1}/n ⇒ aₙ = a₀/n! ⇒ **y₁ = x Σxⁿ/n! = xeˣ**.
5. Equal roots ⇒ second solution has a log term. Reduction of order: y₂ = y₁∫[e^{−∫p dx}/y₁²]dx. e^{−∫p} = e^{x + ln x} = xeˣ.
 y₂ = xeˣ∫xeˣ/(x²e^{2x})dx = xeˣ∫(e^{−x}/x)dx.
6. ∫e^{−x}/x dx = ln x − x + x²/4 − x³/18 + x⁴/96 − … (integrate the series of e^{−x}/x term by term).
7. **y₂ = xeˣ ln x + xeˣ(−x + x²/4 − x³/18 + …)**. General solution y = c₁y₁ + c₂y₂. (y₂ checked numerically in the equation.)

### P56. (CSS 2021, 2022, 2026) (a) Classify the singular points of (x² − 4)²y″ + (x − 2)y′ + y = 0. (b) Solve x²y″ + xy′ + (9x² − 4)y = 0 and 16x²y″ + 16xy′ + (16x² − 1)y = 0. (c) Show J_{3/2}(x) = √(2/(πx))[(sin x)/x − cos x].

**Solution (a).** p = (x − 2)/(x² − 4)² = 1/[(x − 2)(x + 2)²], q = 1/[(x − 2)²(x + 2)²]. Singular points x = ±2.
- x = 2: (x − 2)p = 1/(x + 2)², (x − 2)²q = 1/(x + 2)², both analytic at 2 ⇒ **regular singular**.
- x = −2: (x + 2)p = 1/[(x − 2)(x + 2)] is not analytic at −2 ⇒ **irregular singular**.
**Solution (b).**
- Compare with x²y″ + xy′ + (λ²x² − ν²)y = 0 (solution J_ν(λx), Y_ν(λx)): λ = 3, ν = 2 ⇒ **y = c₁J₂(3x) + c₂Y₂(3x)**.
- Divide by 16: x²y″ + xy′ + (x² − 1/16)y = 0 ⇒ ν = 1/4 (not an integer) ⇒ **y = c₁J_{1/4}(x) + c₂J_{−1/4}(x)** on (0, ∞).
**Solution (c).**
1. From the series, J_{1/2} = √(2/(πx)) sin x and J_{−1/2} = √(2/(πx)) cos x (use Γ(½) = √π).
2. Recurrence J_{ν−1} + J_{ν+1} = (2ν/x)J_ν with ν = ½: J_{−1/2} + J_{3/2} = (1/x)J_{1/2}.
3. J_{3/2} = J_{1/2}/x − J_{−1/2} = **√(2/(πx))[(sin x)/x − cos x]**. ∎ (Matches the series value 0.33149 at x = 1.3.)

---

# E. Fourier Series and Partial Differential Equations

### P57. (CSS 2025) Find the Fourier series on (−π, π) of f(x) = 3π + 2x for −π < x < 0 and π + 2x for 0 < x < π.

**Solution.**
1. a₀ = (1/π)[∫_{−π}^{0}(3π + 2x)dx + ∫₀^{π}(π + 2x)dx] = (1/π)[(3π² − π²) + (π² + π²)] = 4π ⇒ a₀/2 = 2π.
2. aₙ = (1/π)[3π∫_{−π}^0 cos nx dx + π∫₀^π cos nx dx + 2∫_{−π}^{π}x cos nx dx]. Each constant integral is 0 (sin nπ = 0) and x cos nx is odd ⇒ **aₙ = 0**.
3. bₙ = (1/π)[3π∫_{−π}^0 sin nx dx + π∫₀^π sin nx dx + 2∫_{−π}^{π}x sin nx dx].
 - ∫_{−π}^0 sin nx dx = −(1 − (−1)ⁿ)/n; ∫₀^π sin nx dx = (1 − (−1)ⁿ)/n.
 - ∫_{−π}^{π}x sin nx dx = 2π(−1)^{n+1}/n.
 - bₙ = −3(1 − (−1)ⁿ)/n + (1 − (−1)ⁿ)/n + 4(−1)^{n+1}/n = [−2(1 − (−1)ⁿ) + 4(−1)^{n+1}]/n.
4. n odd: (−4 + 4)/n = 0. n even: (0 − 4)/n = −4/n.
5. **f(x) = 2π − Σ_{n even}(4/n) sin nx = 2π − 2Σ_{k=1}^{∞}(sin 2kx)/k.**
6. At x = 0 the series gives 2π = average of f(0⁻) = 3π and f(0⁺) = π ✓ (Dirichlet). (b₂ = −2, b₄ = −1 confirmed numerically.)

### P58. Find the Fourier series of f(x) = x² on (−π, π) and deduce Σ1/n² and Σ(−1)^{n+1}/n².

**Solution.**
1. f is even ⇒ bₙ = 0.
2. a₀ = (2/π)∫₀^π x²dx = 2π²/3 ⇒ a₀/2 = π²/3.
3. aₙ = (2/π)∫₀^π x² cos nx dx = (2/π)[x² sin nx/n + 2x cos nx/n² − 2 sin nx/n³]₀^π = (2/π)(2π(−1)ⁿ/n²) = 4(−1)ⁿ/n².
4. **x² = π²/3 + 4Σ(−1)ⁿ cos nx/n²**, −π ≤ x ≤ π.
5. x = π (f continuous in the periodic extension, f(π) = π²): π² = π²/3 + 4Σ1/n² ⇒ **Σ1/n² = π²/6**.
6. x = 0: 0 = π²/3 + 4Σ(−1)ⁿ/n² ⇒ **Σ(−1)^{n+1}/n² = π²/12**.

### P59. (CSS 2023) Expand f(x) = sin x, 0 < x < π, in a Fourier cosine series.

**Solution.**
1. Even extension, period 2π. a₀ = (2/π)∫₀^π sin x dx = 4/π ⇒ a₀/2 = 2/π.
2. aₙ = (2/π)∫₀^π sin x cos nx dx = (1/π)∫₀^π[sin(1 + n)x + sin(1 − n)x]dx.
3. For n ≠ 1: = (1/π)[(1 − cos(1 + n)π)/(1 + n) + (1 − cos(1 − n)π)/(1 − n)] = (1/π)(1 + (−1)ⁿ)[1/(1 + n) + 1/(1 − n)] = 2(1 + (−1)ⁿ)/[π(1 − n²)].
4. n = 1: a₁ = (1/π)∫₀^π sin 2x dx = 0.
5. n odd: aₙ = 0. n even: aₙ = −4/[π(n² − 1)].
6. **sin x = 2/π − (4/π)[cos 2x/3 + cos 4x/15 + cos 6x/35 + …] = 2/π − (4/π)Σ cos 2kx/(4k² − 1)**. (Coefficients checked numerically.)

### P60. (CSS 2020) Find the Fourier series of f(x) = x for 0 < x < 1, f(x) = 0 for 1 < x < 2 (period 2).

**Solution.**
1. Period 2L = 2 ⇒ L = 1, terms cos nπx, sin nπx, integrals over (0, 2).
2. a₀ = ∫₀²f dx = ∫₀¹x dx = 1/2 ⇒ a₀/2 = 1/4.
3. aₙ = ∫₀¹x cos nπx dx = [x sin nπx/(nπ) + cos nπx/(nπ)²]₀¹ = ((−1)ⁿ − 1)/(n²π²): −2/(n²π²) for odd n, 0 for even n.
4. bₙ = ∫₀¹x sin nπx dx = [−x cos nπx/(nπ) + sin nπx/(nπ)²]₀¹ = −(−1)ⁿ/(nπ) = (−1)^{n+1}/(nπ).
5. **f(x) = 1/4 − (2/π²)Σ_{n odd} cos nπx/n² + (1/π)Σ(−1)^{n+1} sin nπx/n**. (Checked numerically for n = 1, 2, 3.)

### P61. (CSS 2024) Expand f(x) = x² on 1 < x < 2 as a Fourier series.

**Solution.**
1. Interval length 1 ⇒ period 2L = 1, L = ½, so the terms are cos 2nπx, sin 2nπx and the coefficient factor is 1/L = 2.
2. a₀ = 2∫₁²x²dx = 2(7/3) = 14/3 ⇒ a₀/2 = 7/3.
3. With ω = 2nπ (sin ωx = 0, cos ωx = 1 at x = 1, 2):
 ∫x² cos ωx dx = x² sin ωx/ω + 2x cos ωx/ω² − 2 sin ωx/ω³ ⇒ [ ]₁² = (4 − 2)/ω² = 2/ω².
 aₙ = 2·2/ω² = 4/(4n²π²) = **1/(n²π²)**.
4. ∫x² sin ωx dx = −x² cos ωx/ω + 2x sin ωx/ω² + 2 cos ωx/ω³ ⇒ [ ]₁² = −(4 − 1)/ω = −3/ω.
 bₙ = 2(−3/ω) = **−3/(nπ)**.
5. **x² = 7/3 + Σ_{n≥1}[cos 2nπx/(n²π²) − 3 sin 2nπx/(nπ)]**, 1 < x < 2.
6. Check at the jump x = 1: series → average of f(1⁺) = 1 and f(2⁻) = 4, i.e. 5/2. Indeed 7/3 + Σ1/(n²π²) = 7/3 + 1/6 = 5/2 ✓.

### P62. (CSS 2026) Find the Fourier series of f(x) = (1 − |x|/a)H(1 − |x|/a), H the unit step.

**Solution.**
1. Meaning: f = 1 − |x|/a for |x| < a and 0 for |x| > a — a triangular pulse of height 1 and half-width a. The paper does not state a period; assume period 2L with L ≥ a (state this assumption in the exam). The simplest choice is L = a.
2. f is even ⇒ bₙ = 0.
3. a₀ = (1/L)∫_{−a}^{a}(1 − |x|/a)dx = a/L.
4. aₙ = (2/L)∫₀^a(1 − x/a)cos(nπx/L)dx. With k = nπ/L, ∫₀^a(1 − x/a)cos kx dx = [(1 − x/a)sin kx/k]₀^a + (1/(ak))∫₀^a sin kx dx = (1 − cos ka)/(ak²).
 aₙ = **2L[1 − cos(nπa/L)]/(n²π²a)**.
5. f(x) = a/(2L) + Σ (2L/(n²π²a))[1 − cos(nπa/L)] cos(nπx/L).
6. Special case L = a: a₀/2 = 1/2, aₙ = 2(1 − (−1)ⁿ)/(n²π²) ⇒ **f(x) = 1/2 + (4/π²)Σ_{n odd} cos(nπx/a)/n²**. (General formula checked numerically with a = 1, L = 2.)

### P63. (CSS 2021, 2024) (a) Classify (1 − x²)u_xx − 2xyu_xy + (1 − y²)u_yy = 0. (b) Reduce 4u_xx + 5u_xy + u_yy + u_x + u_y = 2 to canonical form and solve it.

**Solution (a).** A = 1 − x², B = −2xy, C = 1 − y². B² − 4AC = 4x²y² − 4(1 − x² − y² + x²y²) = 4(x² + y² − 1).
**Elliptic for x² + y² < 1, parabolic on x² + y² = 1, hyperbolic for x² + y² > 1.**
**Solution (b).**
1. B² − 4AC = 25 − 16 = 9 > 0 ⇒ hyperbolic everywhere.
2. Characteristic equation 4λ² − 5λ + 1 = 0 ⇒ λ = 1, ¼ (dy/dx). Characteristics y − x = c, y − x/4 = c.
3. ξ = y − x, η = y − x/4. ξ_x = −1, ξ_y = 1, η_x = −¼, η_y = 1.
4. u_x = −u_ξ − ¼u_η; u_y = u_ξ + u_η.
 u_xx = u_ξξ + ½u_ξη + (1/16)u_ηη; u_xy = −u_ξξ − (5/4)u_ξη − ¼u_ηη; u_yy = u_ξξ + 2u_ξη + u_ηη.
5. 4u_xx + 5u_xy + u_yy: u_ξξ: 4 − 5 + 1 = 0; u_ηη: ¼ − 5/4 + 1 = 0; u_ξη: 2 − 25/4 + 2 = −9/4.
 u_x + u_y = ¾u_η.
6. −(9/4)u_ξη + ¾u_η = 2 ⇒ **u_ξη = ⅓u_η − 8/9** (canonical form).
7. Let w = u_η: ∂w/∂ξ − w/3 = −8/9 ⇒ w = 8/3 + e^{ξ/3}g(η).
8. Integrate in η: u = 8η/3 + e^{ξ/3}G(η) + H(ξ).
9. **u = (8/3)(y − x/4) + e^{(y−x)/3}G(y − x/4) + H(y − x)**, G and H arbitrary.

### P64. (CSS 2024) Find the integral surface of 2y(z − 3)p + (2x − z)q = y(2x − 3) through the circle x² + y² = 2x, z = 0.

**Solution.**
1. Lagrange: dx/[2y(z − 3)] = dy/(2x − z) = dz/[y(2x − 3)].
2. First and third: (2x − 3)dx = 2(z − 3)dz ⇒ x² − 3x = z² − 6z + c ⇒ **u = x² − 3x − z² + 6z = c₁**.
3. Multipliers 1, 2y, −2: numerator dx + 2y dy − 2dz; denominator 2y(z − 3) + 2y(2x − z) − 2y(2x − 3) = 2y[z − 3 + 2x − z − 2x + 3] = 0. So dx + 2y dy − 2dz = 0 ⇒ **v = x + y² − 2z = c₂**.
4. On the given curve: z = 0, y² = 2x − x² ⇒ c₁ = x² − 3x, c₂ = x + 2x − x² = 3x − x² ⇒ **c₁ + c₂ = 0**.
5. Surface: (x² − 3x − z² + 6z) + (x + y² − 2z) = 0 ⇒ **x² + y² − 2x − z² + 4z = 0**. (Substituting p, q from this surface into the PDE gives zero.)

### P65. (CSS 2026) Solve u_t + u_x + u = 0 (x > 0, t > 0), u(0, t) = sin t, u(x, 0) = 0.

**Solution.**
1. Transformation: ξ = x − t, τ = x. Then u_x = u_ξ + u_τ, u_t = −u_ξ, so u_t + u_x = u_τ.
2. PDE becomes u_τ + u = 0 ⇒ u = F(ξ)e^{−τ} = F(x − t)e^{−x}.
3. For x > t: the characteristic x − t = const meets t = 0 at x − t > 0: u(x, 0) = F(x)e^{−x} = 0 ⇒ F(s) = 0 for s > 0 ⇒ u = 0.
4. For x < t: it meets x = 0 at time t − x: u(0, t) = F(−t) = sin t ⇒ F(s) = sin(−s) ⇒ u = sin(t − x)e^{−x}.
5. **u(x, t) = e^{−x} sin(t − x) for x < t; 0 for x > t**, i.e. u = e^{−x} sin(t − x)H(t − x).
6. Check: u_t = e^{−x}cos(t − x); u_x = −e^{−x}sin(t − x) − e^{−x}cos(t − x); sum + u = 0 ✓; u(0, t) = sin t ✓.

### P66. (CSS 2020) Solve u_xx = (1/k)u_t, 0 < x < l, with u(0, t) = u(l, t) = 0 and u(x, 0) = lx − x².

**Solution.**
1. u = X(x)T(t): X″T = XT′/k ⇒ X″/X = T′/(kT) = −λ.
2. X″ + λX = 0, X(0) = X(l) = 0 ⇒ λₙ = (nπ/l)², Xₙ = sin(nπx/l) (λ ≤ 0 gives only X = 0).
3. T′ = −kλₙT ⇒ Tₙ = e^{−kn²π²t/l²}.
4. u = Σbₙ sin(nπx/l)e^{−kn²π²t/l²}.
5. t = 0: lx − x² = Σbₙ sin(nπx/l) ⇒ bₙ = (2/l)∫₀^l(lx − x²)sin(nπx/l)dx.
6. Integrating by parts twice: bₙ = 4l²(1 − (−1)ⁿ)/(n³π³) = 8l²/(n³π³) for odd n, 0 for even.
7. **u(x, t) = (8l²/π³)Σ_{n odd}(1/n³) sin(nπx/l) e^{−kn²π²t/l²}**. (bₙ checked numerically with l = 2.)

### P67. (CSS 2026, 2022) (a) A string of length L, fixed at both ends, has initial displacement Lx − x² and initial velocity 4. Find u(x, t). (b) Same with L = 1, c = 1, zero initial velocity, initial displacement kx(1 − x).

**Solution (a).**
1. u_tt = c²u_xx. Separation gives u = Σ[Aₙ cos(nπct/L) + Bₙ sin(nπct/L)] sin(nπx/L).
2. Aₙ = (2/L)∫₀^L(Lx − x²)sin(nπx/L)dx = 4L²(1 − (−1)ⁿ)/(n³π³) = 8L²/(n³π³) (n odd).
3. u_t(x, 0) = ΣBₙ(nπc/L)sin(nπx/L) = 4 ⇒ Bₙ(nπc/L) = (2/L)∫₀^L 4 sin(nπx/L)dx = 8(1 − (−1)ⁿ)/(nπ).
 Bₙ = 8L(1 − (−1)ⁿ)/(n²π²c) = 16L/(n²π²c) (n odd).
4. **u = Σ_{n odd}[(8L²/(n³π³))cos(nπct/L) + (16L/(n²π²c))sin(nπct/L)] sin(nπx/L)**.
**Solution (b).** With L = 1, c = 1, g = 0: Bₙ = 0; Aₙ = 2∫₀¹kx(1 − x)sin nπx dx = 8k/(n³π³) for odd n.
**u = (8k/π³)Σ_{n odd} cos nπt sin nπx/n³**. For k = 0.01, A₁ = 0.002580, A₃ = 0.0000956 — the first term dominates. (Coefficients checked numerically.)

### P68. (CSS 2025) Solve u_xx + u_yy = 0 in 0 < x < a, 0 < y < b with u = 0 on x = 0, x = a, y = 0 and u(x, b) = f(x). Write the answer for f(x) = u₀ (constant).

**Solution.**
1. u = X(x)Y(y) ⇒ X″/X = −Y″/Y = −λ.
2. X″ + λX = 0, X(0) = X(a) = 0 ⇒ λₙ = (nπ/a)², Xₙ = sin(nπx/a).
3. Y″ − (nπ/a)²Y = 0, Y(0) = 0 ⇒ Yₙ = sinh(nπy/a).
4. u = Σcₙ sinh(nπy/a) sin(nπx/a).
5. y = b: f(x) = Σcₙ sinh(nπb/a) sin(nπx/a) ⇒ **cₙ = [2/(a sinh(nπb/a))]∫₀^a f(x) sin(nπx/a)dx**.
6. f = u₀: ∫₀^a u₀ sin(nπx/a)dx = u₀a(1 − (−1)ⁿ)/(nπ) ⇒ cₙ = 4u₀/(nπ sinh(nπb/a)) for odd n.
 **u = (4u₀/π)Σ_{n odd} sinh(nπy/a) sin(nπx/a)/[n sinh(nπb/a)]**.

### P69. (CSS 2025, 2019) (a) Derive D'Alembert's solution of u_tt = c²u_xx with u(x, 0) = f(x), u_t(x, 0) = g(x). (b) Solve ∂u/∂x = 2∂u/∂t + u, u(x, 0) = 6e^{−3x}.

**Solution (a).**
1. ξ = x + ct, η = x − ct. Then u_xx = u_ξξ + 2u_ξη + u_ηη and u_tt = c²(u_ξξ − 2u_ξη + u_ηη).
2. The wave equation becomes 4c²u_ξη = 0 ⇒ u_ξη = 0 ⇒ u = F(ξ) + G(η) = F(x + ct) + G(x − ct).
3. u(x, 0): F + G = f. u_t(x, 0): c(F′ − G′) = g ⇒ F − G = (1/c)∫₀ˣg(s)ds + K.
4. F = ½f + (1/(2c))∫₀ˣg + K/2; G = ½f − (1/(2c))∫₀ˣg − K/2.
5. **u(x, t) = ½[f(x + ct) + f(x − ct)] + (1/(2c))∫_{x−ct}^{x+ct}g(s)ds**.
 For the 2025 form u_xx = ½u_tt: c² = 2, c = √2.
**Solution (b).**
1. u = X(x)T(t): X′T = 2XT′ + XT ⇒ X′/X = 2T′/T + 1 = k (constant).
2. X = Ae^{kx}; T′/T = (k − 1)/2 ⇒ T = Be^{(k−1)t/2}.
3. u = Ce^{kx + (k−1)t/2}. At t = 0: Ce^{kx} = 6e^{−3x} ⇒ C = 6, k = −3.
4. **u = 6e^{−3x−2t}**. Check: u_x = −3u; 2u_t + u = −4u + u = −3u ✓.
