# 02 — Statics (10% of syllabus; ~10% of questions asked 2016–2026)

Asked in 9 of 11 papers, usually as one full question. Statics was absent in 2020 and 2026. It is the most "trick-heavy" section, so many candidates skip it. Since you choose 5 of 8 questions, treat Statics as optional, but learn the three standard types: **forces along the sides of a figure**, **ladder with friction**, **centroids**.

---

## 1. Composition and resolution of forces

**Parallelogram law.** Two forces P and Q at angle α have resultant
R² = P² + Q² + 2PQ cos α, with direction tan θ = Q sin α/(P + Q cos α) (θ measured from P).
Greatest resultant P + Q (α = 0); least |P − Q| (α = π).

**Resolution.** A force F at angle θ to the x-axis has components (F cos θ, F sin θ). For many forces, X = ΣF cos θ, Y = ΣF sin θ, R = √(X² + Y²), tan θ = Y/X.

**Worked example (2021 type).** Greatest resultant of two forces is 17 N, least is 7 N. Find the forces and the resultant when they act at right angles.
P + Q = 17, P − Q = 7 ⇒ P = 12, Q = 5. At 90°: R = √(144 + 25) = **13 N**.
General result (2021 proof): with greatest P′ = P + Q and least Q′ = P − Q, R² = P² + Q² + 2PQ cos α = (P + Q)² cos²(α/2) + (P − Q)² sin²(α/2). Proof: use cos α = cos²(α/2) − sin²(α/2) and 1 = cos²(α/2) + sin²(α/2).

**Forces represented by sides of a triangle.** If forces are represented in magnitude and direction by λ·BC, μ·CA etc., use vectors: write each side as a difference of position vectors and add. Example idea (2025): 2**BC** + **CA** + **BA**. With D the midpoint of BC, use **BC** = 2**DC** and simplify to a single multiple of a line segment.

## 2. Moments, parallel forces and couples

Moment of F about O = F × perpendicular distance (anticlockwise positive). In vectors, **M** = **r**×**F**; in 2-D, M = xF_y − yF_x.
**Varignon's theorem:** the moment of the resultant = the sum of the moments of the components.
**Parallel forces:** like forces P and Q at A and B have resultant P + Q at C on AB with P·AC = Q·CB.
**Couple:** two equal, opposite, parallel forces; moment = F × arm, the same about every point. A couple can only be balanced by a couple.

## 3. Resultant of a general coplanar system

Method (use it for every "forces along the sides of a square/hexagon/triangle" question):

1. Put the figure on axes (A at origin).
2. List each force: point of application (any point on its line) and components.
3. Sum X and Y. R = √(X² + Y²).
4. Sum moments about A: G = Σ(xF_y − yF_x).
5. Line of action: perpendicular distance from A = |G|/R; equation: xY − yX = G.
6. Special cases: R = 0, G ≠ 0 ⇒ couple; R = 0, G = 0 ⇒ equilibrium.

**Worked example (2018 and 2023 — asked twice).** Forces P, 2P, 3P, 4P act along AB, BC, CD, DA of a square of side a, and 8√2 P along AC and BD. Take A(0, 0), B(a, 0), C(a, a), D(0, a).

| Force | Components | Point | Moment about A |
|---|---|---|---|
| P along AB | (P, 0) | A | 0 |
| 2P along BC | (0, 2P) | B(a, 0) | 2Pa |
| 3P along CD | (−3P, 0) | C(a, a) | 3Pa |
| 4P along DA | (0, −4P) | D(0, a) | 0 |
| 8√2P along AC | (8P, 8P) | A | 0 |
| 8√2P along BD | (−8P, 8P) | B(a, 0) | 8Pa |

X = −2P, Y = 14P ⇒ R = √200 P = **10√2 P**. G = 13Pa ⇒ distance from A = 13a/(10√2) ≈ **0.919a**. Line of action: 14Px + 2Py = 13Pa, i.e. 14x + 2y = 13a.

**Equilibrium of forces along a hexagon (2019).** Forces F₁…F₆ along the sides of a regular hexagon in order are in equilibrium iff ΣF·(direction) = 0 and the moments vanish. Use the fact that opposite sides are parallel and in opposite directions; resolve along and perpendicular to one side.

## 4. Equilibrium of a particle; Lami's theorem

Three concurrent forces in equilibrium: each force ∝ sine of the angle between the other two.
P/sin α = Q/sin β = R/sin γ (α is the angle between Q and R, etc.).
Conditions for equilibrium of a particle: ΣX = 0, ΣY = 0 (and ΣZ = 0 in 3-D).

**Worked example.** A 100 N weight hangs from two strings making 30° and 60° with the horizontal. Angles between forces: between the strings 90°; between the 30°-string and the weight 120°; between the 60°-string and the weight 150°.
T₁/sin 150° = T₂/sin 120° = 100/sin 90° ⇒ T₁ = 50 N (string at 30°), T₂ = 86.6 N (string at 60°). Check: horizontal 50 cos 30° = 86.6 cos 60° = 43.3 ✓.

**2022 type (proof).** Three concurrent forces P, Q, R in equilibrium; angle (P, Q) is twice angle (P, R). Prove R² = Q(Q − P).
Let angle (P, R) = θ and angle (P, Q) = 2θ, with Q and R on opposite sides of P. Then the angle between Q and R is 2π − 3θ (for equilibrium the three forces cannot all lie in one half-plane, so 3θ > π).
Lami: P/sin(2π − 3θ) = Q/sin θ = R/sin 2θ, i.e. P/(−sin 3θ) = Q/sin θ = R/sin 2θ.
From the last two: R/Q = sin 2θ/sin θ = 2 cos θ.
From the first two: P/Q = −sin 3θ/sin θ = −(3 − 4 sin²θ) = 1 − 4cos²θ = 1 − (R/Q)².
Multiply by Q²: PQ = Q² − R², so **R² = Q(Q − P)**. (Checked: with θ = 70°, Q = 1 the force sums vanish.) The trap is the sign of sin(2π − 3θ); state the angle between Q and R explicitly.

## 5. Equilibrium of a rigid body (coplanar forces)

Three conditions: ΣX = 0, ΣY = 0, ΣM(any point) = 0. Take moments about the point where the most unknowns act.
**Three-force theorem:** if a body is in equilibrium under three non-parallel forces, they are concurrent.

**Worked example (2023).** Uniform rod AB, length a, weight W, hinged at A to a vertical wall. A string of length a joins B to C, a point b above A. Find the tension and hinge reaction.
Geometry: triangle ABC is isosceles (AB = BC = a, AC = b), so B is at height b/2 and horizontal distance d = √(a² − b²/4).
Moments about A: W(d/2) = T × (perpendicular from A to BC) = T·d b/a ⇒ **T = Wa/(2b)**.
Hinge: X = T d/a = Wd/(2b); Y = W − T(b/2)/a = 3W/4.
R² = W²(a² − b²/4)/(4b²) + 9W²/16 = W²(a² + 2b²)/(4b²) ⇒ **R = W√(a² + 2b²)/(2b)**. (Checked numerically.)

## 6. Friction

Limiting friction F = μR (R = normal reaction). Before slipping F ≤ μR. Angle of friction λ: tan λ = μ. A body on a rough incline is on the point of slipping when tan α = μ.
**Laws:** friction opposes the tendency to move; is independent of area of contact; ∝ normal reaction at the limit.

**Worked example (2017).** 100 kg crate on a ramp at 10°, μ_s = 0.28 (g = 9.8).
W = 980 N. Perpendicular component W cos 10° = 965.1 N; parallel W sin 10° = 170.2 N. Static friction needed = 170.2 N (it balances the parallel component). Maximum available = 0.28 × 965.1 = 270.2 N, so the crate stays. It slips when tan α = 0.28, **α = 15.6°**.

**Ladder method.**
1. Draw: ladder length L at angle θ to the horizontal; foot on ground (reaction R up, friction μ₁R towards the wall); top on wall (reaction S away from wall, friction μ₂S upward if the wall is rough).
2. Horizontal: μ₁R = S. Vertical: R + μ₂S = total weight.
3. Moments about the foot.

**Worked example (2018).** Ladder 70 ft at 45°, μ(wall) = 1/3, μ(ground) = 1/2, man of weight W/2 (ladder weight W). How far up can he go?
Horizontal: R/2 = S. Vertical: R + S/3 = 3W/2 ⇒ R + R/6 = 3W/2 ⇒ R = 9W/7, S = 9W/14.
Moments about the foot (sin 45° = cos 45° cancel): S·L + (S/3)·L = W(L/2) + (W/2)x ⇒ (4/3)(9/14)L = (L + x)/2 ⇒ x = 5L/7 = **50 ft** up the ladder.

## 7. Centre of mass (centroid)

| Body | Formula |
|---|---|
| Particles | x̄ = Σmx/Σm |
| Arc y = f(x) | x̄ = ∫x ds/∫ds, ds = √(1 + y′²) dx |
| Plane area | x̄ = ∬x dA/∬dA; in polar, dA = r dr dθ; for r = f(θ): x̄ = (⅔∫r³cos θ dθ)/(∫r² dθ) |
| Solid of revolution about x-axis | x̄ = ∫xπy² dx/∫πy² dx |
| Surface of revolution about x-axis | x̄ = ∫x·2πy ds/∫2πy ds |
| Variable density ρ | weight each element by ρ |

Standard results: semicircular arc 2a/π from centre; semicircular lamina 4a/(3π); hemisphere solid 3a/8; hemispherical shell a/2; cone h/4 from base; triangle at the medians' intersection.

**Worked example (2016).** Centroid of the region inside the cardioid r = a(1 + cos θ).
Area = ½∫₀²π a²(1 + cos θ)² dθ = 3πa²/2.
Moment = ⅓∫₀²π a³(1 + cos θ)³ cos θ dθ = 5πa³/4.
x̄ = (5πa³/4)/(3πa²/2) = **5a/6** from the cusp (pole), on the axis.

**Worked example (2024).** Centroid of the *surface* formed by revolving the cardioid about the initial line: x̄ = **50a/63** from the pole (surface area 32πa²/5). Use ds = 2a cos(θ/2) dθ, y = r sin θ, x = r cos θ, θ from 0 to π. (Checked numerically.)

**Worked example (2022).** Semicircular lamina radius a, density ∝ (distance from centre)².
ȳ = ∫₀^a∫₀^π r²·r sin θ·r dθ dr / ∫₀^a∫₀^π r²·r dθ dr = (2a⁵/5)/(πa⁴/4) = **8a/(5π)**, compared with 4a/(3π) for a uniform lamina.

## 8. Equilibrium in three dimensions

Six conditions: ΣX = ΣY = ΣZ = 0 and ΣM about each axis = 0. A system of forces in space reduces to a single force at any point plus a couple; the special pair where force and couple are parallel is a **wrench** (Poinsot's central axis). Rarely examined; know the definitions.

---

## Common mistakes

- Forgetting a reaction or friction force on the diagram. Always draw the diagram and label every force.
- Taking moments about a point that keeps too many unknowns.
- Friction in the wrong direction (it opposes the tendency to slip).
- Using sin where cos belongs when resolving on an incline: the component along the plane is W sin α.

## Exam checklist

- Resultant and line of action of forces along a square (done twice already).
- Ladder with both surfaces rough.
- Centroid of a cardioid (area and surface) and of a lamina with variable density.
- Lami's theorem and one proof-type question.
