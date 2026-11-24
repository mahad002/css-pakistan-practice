# COVERAGE — Applied Mathematics pack

Checked 24 Nov 2026.

## Syllabus item → status

Full = method, formulas and at least one worked example in the notes, plus worked problems in `04-Model-Answers.md`. Short = covered, but briefly or with only one example.

| Section | Item | Notes file | Worked problems | Status |
|---|---|---|---|---|
| I Vector Calculus | Vector algebra, products, triple products | 01 §1 | P12 | Full |
| | Differentiation of vector functions | 01 §2 | (notes example) | Short |
| | Gradient, divergence, curl, directional derivative, identities | 01 §3 | P1–P5 | Full |
| | Irrotational/solenoidal fields, potentials | 01 §3 | P5 | Full |
| | Line integrals, work | 01 §4 | P6, P8 | Full |
| | Surface and volume integrals | 01 §5 | P9, P10 | Full |
| | Green's theorem | 01 §6 | P7, P8 | Full |
| | Stokes' theorem (incl. proof outline) | 01 §7 | P11 | Full |
| | Gauss divergence theorem | 01 §8 | P10 | Full |
| II Statics | Composition/resolution, resultant of two forces | 02 §1 | P14 | Full |
| | Moments, parallel forces, couples | 02 §2 | P13 | Full |
| | Lami's theorem, concurrent forces | 02 §4 | P15 | Full |
| | General coplanar system; forces along polygon sides | 02 §3 | P13 | Full |
| | Equilibrium of rigid bodies | 02 §5 | P16 | Full |
| | Friction, ladders, inclined planes | 02 §6 | P17, P18 | Full |
| | Centre of mass: areas, surfaces, variable density | 02 §7 | P19–P21 | Full |
| | Equilibrium in three dimensions; wrench | 02 §8 | — | Short |
| III Dynamics | Rectilinear motion, variable acceleration | 03 §1 | P22 | Full |
| | Simple harmonic motion | 03 §2 | P23, P24 | Full |
| | Projectiles | 03 §3 | P25, P26 | Full |
| | Work, energy, conservative forces, impulse | 03 §4 | — | Short |
| | Tangential and normal components | 03 §5 | P29 | Full |
| | Radial and transverse components | 03 §6 | P27, P28 | Full |
| | Central forces, orbits | 03 §7 | P30, P31, P32 | Full |
| | Planetary motion, Kepler's laws | 03 §8 | (notes example) | Short |
| IV ODEs | Separable | 04 §1 | P33 | Full |
| | Exact, integrating factors | 04 §2 | P34 | Full |
| | Linear first order | 04 §3 | P35, P36, P40 | Full |
| | Bernoulli, Riccati | 04 §4 | P37–P39 | Full |
| | Orthogonal trajectories, modelling | 04 §5, §3 | P40 | Full |
| | Constant-coefficient homogeneous | 04 §6 | P41 | Full |
| | Undetermined coefficients, D-operator | 04 §7 | P42–P47 | Full |
| | Variation of parameters | 04 §8 | P48–P50, P52 | Full |
| | Cauchy–Euler | 04 §9 | P51, P52 | Full |
| | IVPs and BVPs | 04 §10 | P46, P47 | Full |
| | Ordinary and singular points | 04 §11 | P56 | Full |
| | Series solutions, Frobenius | 04 §12 | P53–P55 | Full |
| | Bessel and Legendre | 04 §13 | P56 | Full |
| V Fourier & PDE | Trigonometric Fourier series, any interval | 05 §1 | P57, P58, P60–P62 | Full |
| | Half-range sine/cosine series | 05 §2 | P59 | Full |
| | Bessel's inequality, Parseval, summation, convergence | 05 §1 | P58 | Full |
| | First-order PDEs (Lagrange; transformation) | 05 §3 | P64, P65 | Full |
| | Classification and canonical forms | 05 §4 | P63 | Full |
| | Separation of variables, BVPs | 05 §5 | P66–P69 | Full |
| | Laplace equation | 05 §8 | P68 | Full |
| | Wave equation (incl. D'Alembert, modelling) | 05 §5, §7 | P67, P69 | Full |
| | Heat equation | 05 §6 | P66 | Full |
| VI Numerical | Errors and rounding | 06 §1 | P78 | Short |
| | Bisection, regula falsi | 06 §2 | P70, P75 | Full |
| | Secant, Newton–Raphson, fixed point, order | 06 §3 | P71–P74, P76 | Full |
| | Jacobi, Gauss–Seidel, diagonal dominance | 06 §4 | P77–P79 | Full |
| | Interpolation (forward/backward, Lagrange, divided differences) | 06 §5 | P80–P82 | Full |
| | Numerical differentiation | 06 §6 | P83, P84 | Full |
| | Trapezoidal, Simpson 1/3 and 3/8, Gauss | 06 §7 | P85–P88, P94 | Full |
| | Euler, modified Euler, Taylor | 06 §8 | P89, P90 | Full |
| | Runge–Kutta (2nd, 4th, systems) | 06 §8 | P91–P93 | Full |

## Counts

| File | Count |
|---|---|
| Worked problems (`04`) | 94 (requirement ≥ 60) |
| MCQs (`05`) | 120, keys checked; distribution A 30, B 34, C 31, D 25 |
| Question bank (`06`) | 189 items: 169 past (2016–2026) + 20 likely |
| Notes | 6 files, one per syllabus section |

## How the numbers were checked

numpy, scipy and sympy are **not installed** on this Mac, so every answer was recomputed in plain python3 (math, fractions): numerical integration (Simpson with 2,000–20,000 strips) for every integral, flux and Fourier coefficient; substitution of each ODE solution back into its equation by finite differences; exact fractions for series coefficients and Gauss–Seidel/Jacobi iterates; brute-force angle search for the projectile result; direct iteration tables for every numerical method. Scripts used (in the session scratchpad, which is temporary): `am_check.py`, `am2.py`, `ode2.py`, `nm2.py`. Errors found and fixed during checking: a backward-difference value in P80, a sign trap in the 2022 Lami proof (corrected to R² = Q(Q − P)), and eight intermediate table values in section F.

## What I could not verify

- **FPSC originals.** fpsc.gov.pk refused connections (certificate error), so the syllabus wording comes from the faithful copy on cssprep.com.pk, and past papers from cssprep.com.pk (2016–2023, 2025) and centralsuperiorservices.com PDFs (2024, 2026; FPSC headers read from the text layer). Check one FPSC original yourself.
- **Interpolation in the syllabus.** The secondary syllabus copies list "numerical differentiation and integration" but do not name interpolation explicitly; interpolation was examined in 2017–2021 and underlies the difference formulas, so it is included. [verify]
- **2016 Q6(b)** is cut off in every surviving copy.
- **Printed typos in papers**, kept "as printed" by the transcriber: 2025 Q1(a)(ii) triple product, 2025 Q4(a) point E, 2025 Q8(b) (uₓₓ = ½u_tt), 2026 Q7(b) ("x − 3"), 2026 Q6(b) integral limits (0 to 3 or 0 to 1 — both worked in P94), 2026 Q6(a) period of the Heaviside function (assumed), 2017 Q3 (acceleration "v³" without coefficient). My worked versions state the interpretation used.
- **Marking scheme.** FPSC publishes none; the mark split in `00` is my estimate.
- **Topper advice** specific to CSS Applied Mathematics: searches found none worth citing; the strategy in `00` is my own, based on the paper analysis.
- VU course codes in `08-Resources.md`; calculator model rules. [verify]

## What is missing / could be added later

- Worked solutions for the remaining past parts not in `04` (e.g. 2022 bomb-from-aeroplane, 2021 hanging sphere, 2019 hexagon and triangular-plate statics, 2020 Taylor-series integral, 2021 difference-table interpolation). Each has a close relative in `04`.
- Pre-2016 papers (two-paper era) are not analysed.
- Tensor analysis (pre-2016 only) is deliberately excluded.
