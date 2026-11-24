# 01 — Vector Calculus (10% of syllabus; ~15% of questions asked 2016–2026)

Asked every year. One full question (20 marks) or one part of a mixed question. The single most repeated item in the whole paper is **grad of rⁿ or of f(r)** (seven papers out of eleven). Learn it cold.

Notation: **r** = x**i** + y**j** + z**k**, r = |**r**| = √(x² + y² + z²). Bold = vector.

---

## 1. Vector algebra

| Item | Formula | Meaning |
|---|---|---|
| Dot product | **A**·**B** = A₁B₁ + A₂B₂ + A₃B₃ = AB cos θ | Zero ⇔ perpendicular |
| Cross product | **A**×**B** = determinant of rows (**i j k**), (A₁ A₂ A₃), (B₁ B₂ B₃) | Magnitude AB sin θ = area of parallelogram; direction by right-hand rule |
| Scalar triple product | [**A B C**] = **A**·(**B**×**C**) = 3×3 determinant | Volume of parallelepiped; zero ⇔ coplanar |
| Vector triple product | **A**×(**B**×**C**) = (**A**·**C**)**B** − (**A**·**B**)**C** | "BAC minus CAB" |
| Projection of **A** on **B** | (**A**·**B**)/B | Component along **B** |
| Work by constant force | W = **F**·**d** | |
| Moment of force about O | **M** = **r**×**F** | |

**Worked example.** Show **a** and **c** are parallel if (**a**×**b**)×**c** = **a**×(**b**×**c**) (2025 type, with the intended meaning).
LHS = −**c**×(**a**×**b**) = −[(**c**·**b**)**a** − (**c**·**a**)**b**] = (**c**·**a**)**b** − (**c**·**b**)**a**.
RHS = (**a**·**c**)**b** − (**a**·**b**)**c**.
Equal ⇒ (**c**·**b**)**a** = (**a**·**b**)**c**. If **a**·**b** ≠ 0, then **c** = [(**c**·**b**)/(**a**·**b**)]**a**, a scalar multiple of **a**. So **a** ∥ **c**.

## 2. Differentiation of vector functions

If **r**(t) is position, **v** = d**r**/dt, **a** = d²**r**/dt². Product rules hold: d(**A**·**B**)/dt = **A**′·**B** + **A**·**B**′; d(**A**×**B**)/dt = **A**′×**B** + **A**×**B**′ (keep order).

**Worked example (2017 type).** **r** = eᵗ cos t **i** + eᵗ sin t **j**. Then **r**′ = eᵗ(cos t − sin t, sin t + cos t), **r**″ = eᵗ(−2 sin t, 2 cos t).
**r**·**r**″ = e²ᵗ(−2 sin t cos t + 2 sin t cos t) = 0. So the angle between **r** and **r**″ is always 90°.

## 3. Gradient, divergence, curl

∇ = **i** ∂/∂x + **j** ∂/∂y + **k** ∂/∂z.

| Operator | Acts on | Gives | Formula |
|---|---|---|---|
| grad φ = ∇φ | scalar | vector | (φₓ, φ_y, φ_z) |
| div **F** = ∇·**F** | vector | scalar | ∂F₁/∂x + ∂F₂/∂y + ∂F₃/∂z |
| curl **F** = ∇×**F** | vector | vector | determinant (**i j k**; ∂ₓ ∂_y ∂_z; F₁ F₂ F₃) |
| Laplacian ∇²φ | scalar | scalar | φₓₓ + φ_yy + φ_zz |

**Meanings.** ∇φ points in the direction of fastest increase; its magnitude is that rate. ∇φ is normal to the level surface φ = c. div **F** = outflow per unit volume (source strength). curl **F** = rotation (twice the angular velocity for a rigid rotation).

**Directional derivative** of φ at P in direction **a**: D = ∇φ·**a**/|**a**|. Maximum value = |∇φ|.

**Angle between surfaces** φ₁ = c₁ and φ₂ = c₂ at a common point: angle between normals, cos θ = (∇φ₁·∇φ₂)/(|∇φ₁||∇φ₂|).

**Identities to know (and be able to prove in one line each):**

1. ∇r = **r**/r; ∇rⁿ = n rⁿ⁻² **r**; ∇f(r) = f′(r) **r**/r.
2. ∇·**r** = 3; ∇×**r** = **0**.
3. ∇·(rⁿ**r**) = (n + 3)rⁿ; ∇²rⁿ = n(n + 1)rⁿ⁻²; ∇²f(r) = f″ + (2/r)f′.
4. ∇·(φ**A**) = ∇φ·**A** + φ∇·**A**; ∇×(φ**A**) = ∇φ×**A** + φ∇×**A**.
5. ∇·(**A**×**B**) = **B**·(∇×**A**) − **A**·(∇×**B**).
6. ∇×(∇φ) = **0**; ∇·(∇×**A**) = 0.
7. ∇·[f(r)**r**/r] = 2f/r + f′ (asked 2016).

**Proof of identity 1 (the favourite).** ∂r/∂x: from r² = x² + y² + z², 2r ∂r/∂x = 2x, so ∂r/∂x = x/r. Then ∂f(r)/∂x = f′(r) x/r. Similarly for y, z. So ∇f(r) = (f′/r)(x, y, z) = f′(r)**r**/r. Put f = rⁿ: ∇rⁿ = n rⁿ⁻¹ **r**/r = n rⁿ⁻² **r**.

**Proof of identity 3.** ∇²rⁿ = ∇·(n rⁿ⁻² **r**) = n[∇rⁿ⁻²·**r** + rⁿ⁻²∇·**r**] = n[(n − 2)rⁿ⁻⁴ **r**·**r** + 3rⁿ⁻²] = n[(n − 2) + 3]rⁿ⁻² = n(n + 1)rⁿ⁻².

**Proof of identity 5.** Write ∇·(**A**×**B**) = Σ ∂/∂x(A₂B₃ − A₃B₂) + … Expand by the product rule and regroup the terms that contain derivatives of **A** (they form **B**·curl **A**) and those with derivatives of **B** (they form −**A**·curl **B**). Asked 2026.

**Worked example (directional derivative).** φ = x²yz + 4xz² at (1, −2, −1) along 2**i** − **j** − 2**k**.
∇φ = (2xyz + 4z², x²z, x²y + 8xz) = (4 + 4, −1, −2 − 8) = (8, −1, −10).
Unit vector = (2, −1, −2)/3. D = (16 + 1 + 20)/3 = 37/3 ≈ 12.33.

**Irrotational field and potential.** **F** is irrotational if ∇×**F** = **0**; then **F** = ∇φ (conservative), work is path-independent. **F** is solenoidal if ∇·**F** = 0.

**Worked example (2019).** **F** = (x + 2y + az)**i** + (bx − 3y − z)**j** + (4x + cy + 2z)**k**. Curl components: (c + 1, a − 4, b − 2) = **0** ⇒ a = 4, b = 2, c = −1. Potential: φ = x²/2 − 3y²/2 + z² + 2xy + 4xz − yz (check φₓ = x + 2y + 4z ✓).

## 4. Line integrals

∫_C **F**·d**r** = ∫ (F₁dx + F₂dy + F₃dz). Method: parametrise the curve (x(t), y(t), z(t)), substitute, integrate in t. For a closed curve, write ∮. Work done = ∫ **F**·d**r**. If **F** = ∇φ, the integral = φ(end) − φ(start).

**Worked example (2023).** **F** = 3xy**i** − 5z**j** + 10x**k** along x = t² + 1, y = 2t², z = t³, t from 1 to 2.
dx = 2t dt, dy = 4t dt, dz = 3t² dt.
Integrand = 3(t² + 1)(2t²)(2t) − 5t³(4t) + 10(t² + 1)(3t²) = 12t⁵ + 12t³ − 20t⁴ + 30t⁴ + 30t² = 12t⁵ + 10t⁴ + 12t³ + 30t².
∫₁² = [2t⁶ + 2t⁵ + 3t⁴ + 10t³]₁² = (128 + 64 + 48 + 80) − (2 + 2 + 3 + 10) = 320 − 17 = **303**.

## 5. Surface and volume integrals

Flux ∬_S **F**·**n** dS. For a surface z = g(x, y) or φ(x, y, z) = c projected on the xy-plane: dS = dx dy/|**n**·**k**|, with **n** = ∇φ/|∇φ|.
So ∬ **F**·**n** dS = ∬_R **F**·**n** dx dy/|**n**·**k**|.
For a cylinder x² + y² = a², use x = a cos θ, y = a sin θ, dS = a dθ dz, **n** = (cos θ, sin θ, 0).
Volume integral ∭_V φ dV — use cylindrical (r dr dθ dz) or spherical coordinates (ρ² sin φ dρ dφ dθ) when the region suggests it.

**Worked example (2020).** **A** = 18z**i** − 12**j** + 3y**k**, S: 2x + 3y + 6z = 12 in the first octant.
**n** = (2, 3, 6)/7, **n**·**k** = 6/7. **A**·**n** = (36z − 36 + 18y)/7. Put z = (12 − 2x − 3y)/6: 36z = 72 − 12x − 18y, so **A**·**n** = (36 − 12x)/7.
Flux = ∬_R (36 − 12x)/7 · 7/6 dx dy = ∬_R (6 − 2x) dx dy over the triangle x ≥ 0, y ≥ 0, 2x + 3y ≤ 12.
= ∫₀⁶ (6 − 2x)(12 − 2x)/3 dx = **24**.

## 6. Green's theorem (plane)

∮_C (M dx + N dy) = ∬_R (∂N/∂x − ∂M/∂y) dx dy, C traversed counter-clockwise, R the region inside.
Special case: area = ½∮(x dy − y dx).
Conditions: M, N and their partial derivatives continuous on R; C simple, closed, piecewise smooth.

**Worked example (2019).** ∮ (xy + y²)dx + x²dy, C = boundary of the region between y = x and y = x².
∂N/∂x − ∂M/∂y = 2x − (x + 2y) = x − 2y.
∬ = ∫₀¹ ∫_{x²}^{x} (x − 2y) dy dx = ∫₀¹ [x² − x² − (x³ − x⁴)] dx = ∫₀¹ (x⁴ − x³) dx = 1/5 − 1/4 = **−1/20**.
(Verified by doing the line integral directly: −1/20.)

## 7. Stokes' theorem

∮_C **F**·d**r** = ∬_S (∇×**F**)·**n** dS, where C is the boundary of the open surface S, oriented by the right-hand rule.

**Proof outline (for "state and prove", 2024).** (1) Take S given by z = f(x, y) over region R in the xy-plane. (2) Consider only the F₁**i** part. On C, z = f(x, y), so ∮F₁dx = ∮F₁(x, y, f) dx; by Green's theorem this equals −∬_R ∂/∂y[F₁(x, y, f(x, y))] dx dy = −∬_R (∂F₁/∂y + ∂F₁/∂z f_y) dx dy. (3) On the surface side, (∇×F₁**i**)·**n** dS = (∂F₁/∂z **j** − ∂F₁/∂y **k**)·(−f_x, −f_y, 1) dx dy = (−∂F₁/∂z f_y − ∂F₁/∂y) dx dy. (4) The two agree. (5) Repeat for F₂, F₃ and add. Write it in about one page.

**Worked example (2016).** Verify for **A** = (2x − y)**i** − yz²**j** − y²z**k**, S the upper half of the unit sphere.
Line integral on C: x = cos t, y = sin t, z = 0: ∮ (2x − y)dx = ∫₀²π (2 cos t − sin t)(−sin t) dt = 0 + π = **π**.
Curl **A** = (−2yz + 2yz, 0, 0 + 1) = **k**. ∬ **k**·**n** dS = area of the projection (unit disc) = **π**. Verified.

## 8. Gauss's divergence theorem

∯_S **F**·**n** dS = ∭_V ∇·**F** dV, S the closed surface bounding V, **n** outward.

**Worked example (2024).** Verify for **A** = 4x**i** − 2y²**j** + z²**k** over x² + y² ≤ 4, 0 ≤ z ≤ 3.
Volume side: ∇·**A** = 4 − 4y + 2z. ∭ = ∫₀³∫₀²π∫₀² (4 − 4r sin θ + 2z) r dr dθ dz. The sin θ term integrates to 0. ∭ (4 + 2z) dV = 4π∫₀³(4 + 2z) dz = 4π(12 + 9) = **84π**.
Surface side: top z = 3, **n** = **k**: ∬ 9 dS = 9(4π) = 36π. Bottom z = 0, **n** = −**k**: −z² = 0. Curved side, **n** = (x, y, 0)/2: **A**·**n** = 2x² − y³; with x = 2cos θ, y = 2 sin θ, dS = 2 dθ dz: ∫₀³∫₀²π (8cos²θ − 8 sin³θ)2 dθ dz = 3 × 16π = 48π. Total 36π + 48π = **84π**. Verified.

---

## Common mistakes

- Forgetting to divide by |**a**| in the directional derivative.
- Wrong orientation in Green's or Stokes' (sign flips).
- In surface integrals, forgetting the factor 1/|**n**·**k**|.
- Mixing r (scalar) and **r** (vector) in identities. Write the bold or an arrow every time.
- Not stating the theorem before using it. One line of statement earns marks.

## Exam checklist for this section

- Prove ∇rⁿ, ∇f(r), ∇²rⁿ, ∇·(f(r)**r**/r) from scratch.
- Directional derivative, angle between surfaces, potential of an irrotational field.
- One verification each of Green, Stokes and Gauss, written out in full.
