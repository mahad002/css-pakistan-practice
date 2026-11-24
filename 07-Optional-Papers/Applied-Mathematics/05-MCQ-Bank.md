# MCQ Bank — Applied Mathematics (concept checks)

**Important: the real CSS Applied Mathematics paper has NO MCQ section** (FPSC syllabus Note and CE Rules Appendix-I: MCQs are set in every optional paper except Pure and Applied Mathematics). These 120 questions are for quick self-testing of formulas and concepts — use them as a warm-up before a timed problem session, not as exam practice. All written by me; every key checked.

## Vector Calculus

**Q1.** If **r** = x**i** + y**j** + z**k**, then ∇·**r** equals
- A) 3
- B) 1
- C) 0
- D) r
**Answer:** A. ∂x/∂x + ∂y/∂y + ∂z/∂z = 3.

**Q2.** ∇×**r** equals
- A) **r**
- B) **0**
- C) 3
- D) **k**
**Answer:** B. The position field has no rotation.

**Q3.** ∇(rⁿ) equals
- A) n rⁿ⁻¹ **r**
- B) rⁿ⁻² **r**
- C) n rⁿ⁻² **r**
- D) n(n + 1) rⁿ⁻²
**Answer:** C. ∇f(r) = f′(r)**r**/r with f′ = n rⁿ⁻¹.

**Q4.** For r ≠ 0, ∇²(1/r) equals
- A) 1/r³
- B) −2/r³
- C) 2/r
- D) 0
**Answer:** D. ∇²rⁿ = n(n + 1)rⁿ⁻² and n = −1 gives 0.

**Q5.** The directional derivative of φ at a point is greatest in the direction of
- A) ∇φ
- B) the tangent to the level surface
- C) **r**
- D) ∇×∇φ
**Answer:** A. Its greatest value is |∇φ|.

**Q6.** At a point of the surface φ(x, y, z) = c, the vector ∇φ is
- A) tangent to the surface
- B) normal to the surface
- C) always zero
- D) parallel to **r**
**Answer:** B. The gradient is normal to level surfaces.

**Q7.** A vector field **F** is called solenoidal if
- A) ∇×**F** = **0**
- B) **F** = ∇φ
- C) ∇·**F** = 0
- D) **F**·**r** = 0
**Answer:** C. Zero divergence = no sources or sinks.

**Q8.** ∇·(∇×**F**) equals
- A) ∇²**F**
- B) |**F**|
- C) **0** (vector)
- D) 0 (scalar)
**Answer:** D. Divergence of a curl is identically the scalar zero.

**Q9.** If **F** = ∇φ, the value of ∮**F**·d**r** round any closed curve is
- A) 0
- B) 2π
- C) the enclosed area
- D) path dependent
**Answer:** A. A gradient field is conservative.

**Q10.** **a**·(**b**×**c**) = 0 means that **a**, **b**, **c** are
- A) mutually perpendicular
- B) coplanar
- C) of equal length
- D) unit vectors
**Answer:** B. The parallelepiped has zero volume.

**Q11.** **a**×(**b**×**c**) equals
- A) (**a**·**b**)**c** − (**a**·**c**)**b**
- B) (**b**·**c**)**a**
- C) **0**
- D) (**a**·**c**)**b** − (**a**·**b**)**c**
**Answer:** D. "BAC minus CAB".

**Q12.** Green's theorem converts a line integral round a closed plane curve into
- A) a volume integral
- B) a surface integral over a sphere
- C) a double integral over the enclosed region
- D) a triple integral
**Answer:** C. ∮M dx + N dy = ∬(N_x − M_y) dA.

**Q13.** The area enclosed by a simple closed curve C equals
- A) ½∮(x dy − y dx)
- B) ∮x dx
- C) ∮(x dx + y dy)
- D) ∮y dy
**Answer:** A. Green's theorem with M = −y/2, N = x/2.

**Q14.** Gauss's divergence theorem relates
- A) a line integral and a surface integral
- B) a closed-surface integral and a volume integral
- C) a line integral and a double integral
- D) two line integrals
**Answer:** B. ∯**F**·**n** dS = ∭∇·**F** dV.

**Q15.** Stokes' theorem states that ∮_C **F**·d**r** equals
- A) ∭∇·**F** dV
- B) ∬**F**·**n** dS
- C) ∇²**F**
- D) ∬(∇×**F**)·**n** dS
**Answer:** D. Circulation = flux of curl through any surface spanning C.

**Q16.** The flux of the constant field **F** = 2**i** + 3**j** + 4**k** out of any closed surface is
- A) 9
- B) 0
- C) 24
- D) equal to the enclosed volume
**Answer:** B. ∇·**F** = 0, so by Gauss the flux is 0.

**Q17.** The directional derivative of φ = x² + y² at (1, 1) in the direction **i** is
- A) 1
- B) √2
- C) 2
- D) 4
**Answer:** C. ∇φ = (2, 2); component along **i** is 2.

**Q18.** If ∇×**F** = **0** in a simply connected region, **F** is called
- A) irrotational
- B) solenoidal
- C) harmonic
- D) periodic
**Answer:** A. And then **F** = ∇φ for some φ.

**Q19.** ∇·(φ**A**) equals
- A) φ∇·**A**
- B) ∇φ×**A**
- C) ∇φ·**A** + φ∇·**A**
- D) ∇φ·**A** − φ∇·**A**
**Answer:** C. Product rule for divergence.

**Q20.** The work done by a force **F** along a curve C is
- A) ∫**F**×d**r**
- B) |**F**| × length of C
- C) ∬**F**·**n** dS
- D) ∫_C **F**·d**r**
**Answer:** D. Only the tangential component does work.

## Statics

**Q21.** Two forces P and Q act at angle α. The square of their resultant is
- A) P² + Q² − 2PQ cos α
- B) P² + Q² + 2PQ cos α
- C) P² + Q² + 2PQ sin α
- D) (P + Q)² cos α
**Answer:** B. Parallelogram law.

**Q22.** Lami's theorem applies to
- A) any number of forces in equilibrium
- B) two parallel forces
- C) three concurrent coplanar forces in equilibrium
- D) a couple
**Answer:** C. Each force ∝ sine of the angle between the other two.

**Q23.** The moment of a couple about any point in its plane is
- A) zero
- B) the same for every point
- C) greatest about the midpoint of the arm
- D) equal to the sum of the forces
**Answer:** B. Moment = force × arm, independent of the point.

**Q24.** Varignon's theorem states that the moment of the resultant about a point equals
- A) the sum of the moments of the component forces about that point
- B) zero
- C) the product of the forces
- D) the moment of the largest force
**Answer:** A. Principle of moments.

**Q25.** If λ is the angle of friction and μ the coefficient of friction, then
- A) sin λ = μ
- B) cos λ = μ
- C) tan λ = μ
- D) λ = μ
**Answer:** C. tan λ = F/R = μ at the limit.

**Q26.** A body rests on a rough inclined plane. It is on the point of slipping when the inclination equals
- A) 45°
- B) the angle of friction
- C) 90° minus the angle of friction
- D) twice the angle of friction
**Answer:** B. tan α = μ.

**Q27.** The centroid of a uniform semicircular lamina of radius a is at distance ____ from the diameter.
- A) a/2
- B) 2a/π
- C) 3a/8
- D) 4a/(3π)
**Answer:** D. 4a/(3π) ≈ 0.424a.

**Q28.** The centre of mass of a uniform solid hemisphere of radius a is at distance ____ from its plane face.
- A) 3a/8
- B) a/2
- C) 4a/(3π)
- D) 3a/4
**Answer:** A. Standard result.

**Q29.** The centre of mass of a uniform solid right circular cone of height h is at distance ____ from the base.
- A) h/2
- B) h/3
- C) h/4
- D) 2h/3
**Answer:** C. h/4 from the base (3h/4 from the vertex).

**Q30.** Forces of 8 N and 6 N act at a point. Their greatest and least possible resultants are
- A) 10 N and 2 N
- B) 14 N and 2 N
- C) 14 N and 0 N
- D) 48 N and 2 N
**Answer:** B. P + Q and |P − Q|.

**Q31.** Forces of 3 N and 4 N act at right angles. The resultant is
- A) 7 N
- B) 1 N
- C) 12 N
- D) 5 N
**Answer:** D. √(9 + 16) = 5.

**Q32.** Forces represented in magnitude, direction and line of action by the sides of a triangle taken in order are equivalent to
- A) a single force along the longest side
- B) zero (equilibrium)
- C) a couple whose moment is twice the area of the triangle
- D) a force through the centroid
**Answer:** C. The vector sum is zero but the moments do not cancel.

**Q33.** A rigid body acted on by coplanar forces is in equilibrium if and only if
- A) ΣX = 0, ΣY = 0 and ΣM = 0 about any point
- B) ΣX = 0 only
- C) ΣM = 0 about one point only
- D) the forces are concurrent
**Answer:** A. Two force conditions and one moment condition.

**Q34.** A couple can be balanced only by
- A) a single force
- B) a couple of equal and opposite moment
- C) friction
- D) a weight
**Answer:** B. A couple has zero resultant force.

**Q35.** Limiting friction is
- A) proportional to the area of contact
- B) independent of the normal reaction
- C) always equal to the weight
- D) proportional to the normal reaction
**Answer:** D. F = μR.

**Q36.** The centroid of a uniform semicircular wire (arc) of radius a is at distance ____ from the centre.
- A) 2a/π
- B) 4a/(3π)
- C) a/2
- D) a/π
**Answer:** A. ∫a sin θ·a dθ/(πa) = 2a/π.

**Q37.** The centroid of a uniform triangular lamina lies
- A) at the circumcentre
- B) on each median, one-third of the way from the side to the vertex
- C) at the midpoint of the longest side
- D) at the incentre
**Answer:** B. Intersection of the medians.

**Q38.** If a rigid body is in equilibrium under three non-parallel forces, the forces must be
- A) equal
- B) perpendicular
- C) concurrent
- D) collinear
**Answer:** C. Three-force theorem.

**Q39.** A general system of forces in three dimensions can always be reduced to
- A) a single force
- B) a single couple
- C) zero
- D) a wrench (a force and a couple about the same line)
**Answer:** D. Poinsot's central axis.

**Q40.** Like parallel forces of 3 N and 5 N act 8 m apart. Their resultant is
- A) 8 N, 5 m from the 3 N force
- B) 8 N, 3 m from the 3 N force
- C) 2 N, 5 m from the 5 N force
- D) 15 N at the midpoint
**Answer:** A. 3x = 5(8 − x) ⇒ x = 5 m.

## Dynamics

**Q41.** The period of the motion ẍ = −9x is
- A) 2π/9
- B) 2π/3
- C) 3π
- D) 6π
**Answer:** B. ω = 3, T = 2π/ω.

**Q42.** In simple harmonic motion the speed is greatest
- A) at the extreme points
- B) halfway to the extreme
- C) at the centre
- D) nowhere; it is constant
**Answer:** C. v² = ω²(A² − x²) is largest at x = 0.

**Q43.** In SHM with amplitude 5 and ω = 2, the speed at x = 3 is
- A) 4
- B) 6
- C) 10
- D) 8
**Answer:** D. v = 2√(25 − 9) = 8.

**Q44.** The maximum horizontal range of a projectile fired with speed u is
- A) u²/g
- B) u²/(2g)
- C) 2u²/g
- D) u/g
**Answer:** A. At 45°, R = u² sin 90°/g.

**Q45.** For a fixed speed, the horizontal range is greatest at a projection angle of
- A) 30°
- B) 60°
- C) 90°
- D) 45°
**Answer:** D. sin 2α = 1.

**Q46.** The time of flight of a projectile on a horizontal plane is
- A) u sin α/g
- B) 2u sin α/g
- C) 2u cos α/g
- D) u²/g
**Answer:** B. Time to rise is u sin α/g; double it.

**Q47.** The radial component of acceleration in polar coordinates is
- A) r̈ − rθ̇²
- B) rθ̈ + 2ṙθ̇
- C) r̈ + rθ̇²
- D) ṙθ̇
**Answer:** A. a_r = r̈ − rθ̇².

**Q48.** The transverse component of acceleration can be written as
- A) d(rθ̇)/dt
- B) r̈
- C) (1/r) d(r²θ̇)/dt
- D) rθ̇²
**Answer:** C. Equals rθ̈ + 2ṙθ̇.

**Q49.** For motion under a central force, which quantity is constant?
- A) speed
- B) r²θ̇
- C) r
- D) θ̇
**Answer:** B. Zero transverse acceleration ⇒ r²θ̇ = h.

**Q50.** Kepler's second law is a consequence of
- A) conservation of energy
- B) the inverse-square law specifically
- C) conservation of angular momentum under any central force
- D) Newton's third law
**Answer:** C. Equal areas in equal times holds for every central force.

**Q51.** Kepler's third law states
- A) T ∝ a
- B) T² ∝ a
- C) T ∝ a²
- D) T² ∝ a³
**Answer:** D. Square of period ∝ cube of semi-major axis.

**Q52.** The normal component of acceleration of a particle moving on a curve with speed v is
- A) dv/dt
- B) v²/ρ
- C) vρ
- D) v/ρ²
**Answer:** B. ρ = radius of curvature.

**Q53.** When acceleration is given as a function of displacement x, the most useful form is
- A) a = dv/dt
- B) a = d²t/dx²
- C) a = v dv/dx
- D) a = dx/dt
**Answer:** C. Then ½v² = ∫f(x) dx.

**Q54.** A force field **F** is conservative if
- A) ∇·**F** = 0
- B) **F** is constant
- C) **F** is central
- D) ∇×**F** = **0**
**Answer:** D. Then **F** = −∇V.

**Q55.** With u = 1/r, the differential equation of a central orbit is
- A) d²u/dθ² + u = F/(h²u²)
- B) d²u/dθ² − u = F/h²
- C) du/dθ = F
- D) d²r/dθ² + r = F
**Answer:** A. Standard orbit equation.

**Q56.** An attractive inverse-square central force produces an orbit that is
- A) always a circle
- B) a conic section
- C) a spiral
- D) a straight line
**Answer:** B. Ellipse, parabola or hyperbola depending on energy.

**Q57.** A particle moves round a circle of radius r at constant speed v. Its acceleration is
- A) zero
- B) v²/r tangentially
- C) v²/r towards the centre
- D) vr towards the centre
**Answer:** C. Tangential part is zero; normal part v²/r.

**Q58.** Impulse equals the change in
- A) kinetic energy
- B) momentum
- C) velocity only
- D) acceleration
**Answer:** B. ∫**F** dt = Δ(m**v**).

**Q59.** The escape speed from the earth's surface is about
- A) 7.9 km/s
- B) 3 km/s
- C) 30 km/s
- D) 11.2 km/s
**Answer:** D. √(2gR).

**Q60.** The greatest height reached by a projectile is
- A) u² sin²α/(2g)
- B) u² sin 2α/g
- C) u² cos²α/(2g)
- D) u sin α/g
**Answer:** A. From v_y² = u² sin²α − 2gH = 0.

## Ordinary Differential Equations

**Q61.** The order and degree of (y″)³ + y′ = x are
- A) order 3, degree 2
- B) order 2, degree 3
- C) order 2, degree 1
- D) order 1, degree 3
**Answer:** B. Highest derivative y″ (order 2), raised to power 3.

**Q62.** M dx + N dy = 0 is exact if
- A) ∂M/∂x = ∂N/∂y
- B) M = N
- C) ∂M/∂y = ∂N/∂x
- D) M_y + N_x = 0
**Answer:** C. Test for exactness.

**Q63.** The integrating factor of y′ + y/x = x² is
- A) x
- B) 1/x
- C) eˣ
- D) ln x
**Answer:** A. e^{∫dx/x} = x.

**Q64.** The Bernoulli equation y′ + Py = Qyⁿ becomes linear with the substitution
- A) v = yⁿ
- B) v = y/x
- C) v = ln y
- D) v = y^{1−n}
**Answer:** D. Then v′ + (1 − n)Pv = (1 − n)Q.

**Q65.** If the auxiliary equation has the double root m = 2, the complementary function is
- A) c₁e^{2x} + c₂e^{−2x}
- B) (c₁ + c₂x)e^{2x}
- C) c₁ cos 2x + c₂ sin 2x
- D) c₁e^{2x}
**Answer:** B. Repeated root ⇒ multiply by x.

**Q66.** The general solution of y″ + 4y = 0 is
- A) c₁e^{2x} + c₂e^{−2x}
- B) (c₁ + c₂x)e^{2x}
- C) c₁ cos 2x + c₂ sin 2x
- D) c₁ cos 4x + c₂ sin 4x
**Answer:** C. Roots ±2i.

**Q67.** The correct trial particular solution for y″ − y = eˣ is
- A) Aeˣ
- B) Ax²eˣ
- C) A cos x
- D) Axeˣ
**Answer:** D. eˣ is in the CF (roots ±1), so multiply by x.

**Q68.** The Wronskian of cos x and sin x is
- A) 1
- B) 0
- C) cos 2x
- D) −1
**Answer:** A. cos²x + sin²x.

**Q69.** The general solution of x²y″ + xy′ − y = 0 (x > 0) is
- A) c₁x + c₂x²
- B) c₁x + c₂/x
- C) c₁eˣ + c₂e^{−x}
- D) (c₁ + c₂ ln x)x
**Answer:** B. m² − 1 = 0 ⇒ m = ±1.

**Q70.** For y″ + p(x)y′ + q(x)y = 0, x₀ is an ordinary point if
- A) p and q are analytic at x₀
- B) p(x₀) = 0
- C) (x − x₀)p is analytic
- D) q(x₀) = 0
**Answer:** A. Otherwise it is a singular point.

**Q71.** Bessel's equation of order ν is
- A) (1 − x²)y″ − 2xy′ + ν(ν + 1)y = 0
- B) y″ − 2xy′ + 2νy = 0
- C) x²y″ + xy′ + (x² − ν²)y = 0
- D) xy″ + (1 − x)y′ + νy = 0
**Answer:** C. (A is Legendre, B Hermite, D Laguerre.)

**Q72.** J_{1/2}(x) equals
- A) √(2/(πx)) cos x
- B) √(2/(πx)) sin x
- C) sin x/x
- D) √(πx/2) sin x
**Answer:** B. From the series with Γ(½) = √π.

**Q73.** The Legendre polynomial P₂(x) is
- A) x²
- B) (3x² + 1)/2
- C) (5x³ − 3x)/2
- D) (3x² − 1)/2
**Answer:** D. From Rodrigues' formula.

**Q74.** ∫_{−1}^{1}[Pₙ(x)]² dx equals
- A) 2/(2n + 1)
- B) 1
- C) 2n + 1
- D) 0
**Answer:** A. Normalisation of Legendre polynomials.

**Q75.** The indicial equation arises in
- A) the method of undetermined coefficients
- B) variation of parameters
- C) the Frobenius method
- D) Euler's numerical method
**Answer:** C. From the lowest power of x in Σaₙx^{n+r}.

**Q76.** Which is a Riccati equation?
- A) y′ + Py = Q
- B) y′ = P + Qy + Ry²
- C) y′ + Py = Qyⁿ
- D) y″ + y = 0
**Answer:** B. Quadratic in y.

**Q77.** To find orthogonal trajectories of a family with slope y′ = f(x, y), solve
- A) y′ = −f
- B) y′ = 1/f
- C) y′ = f²
- D) y′ = −1/f
**Answer:** D. Perpendicular slopes multiply to −1.

**Q78.** The solution of dy/dx = ky is
- A) y = kx + C
- B) y = Ce^{kx}
- C) y = Cx^k
- D) y = C sin kx
**Answer:** B. Separable; exponential growth or decay.

**Q79.** A particular integral of (D² + 1)y = sin x is
- A) −(x cos x)/2
- B) (sin x)/2
- C) x sin x
- D) −cos x
**Answer:** A. Resonance case: 1/(D² + 1) sin x = −(x/2)cos x.

**Q80.** The general solution of an n-th order ODE contains
- A) one arbitrary constant
- B) two arbitrary constants
- C) n arbitrary constants
- D) n + 1 arbitrary constants
**Answer:** C. One per order of integration.

## Fourier Series and PDEs

**Q81.** The Fourier series on (−π, π) of an even function contains
- A) only sine terms
- B) only cosine terms (and a constant)
- C) both sine and cosine terms
- D) no constant term
**Answer:** B. bₙ = 0 for even functions.

**Q82.** On (−π, π), the coefficient a₀ is
- A) (1/π)∫_{−π}^{π}f dx
- B) (1/2π)∫_{−π}^{π}f dx
- C) ∫_{−π}^{π}f dx
- D) (2/π)∫_{−π}^{π}f dx
**Answer:** A. And the constant term in the series is a₀/2.

**Q83.** At a jump discontinuity, a Fourier series converges to
- A) the left-hand limit
- B) zero
- C) the right-hand limit
- D) the average of the left- and right-hand limits
**Answer:** D. Dirichlet's theorem.

**Q84.** Σ_{n≥1} 1/n² equals
- A) π²/8
- B) π²/12
- C) π²/6
- D) π/4
**Answer:** C. From the series of x² at x = π.

**Q85.** The Fourier series of f(x) = x on (−π, π) is
- A) 2Σ(−1)^{n+1} sin nx/n
- B) Σ cos nx/n²
- C) π/2 − Σ sin nx/n
- D) 4Σ sin nx/n
**Answer:** A. Odd function, bₙ = 2(−1)^{n+1}/n.

**Q86.** A half-range sine series on (0, L) is obtained by
- A) an even extension
- B) an odd extension
- C) periodic extension with period L
- D) differentiating the cosine series
**Answer:** B. Odd extension ⇒ only sine terms.

**Q87.** A Fourier series in cos(nπx/L) and sin(nπx/L) has period
- A) L
- B) π
- C) 2L
- D) 2π
**Answer:** C. cos(nπ(x + 2L)/L) = cos(nπx/L).

**Q88.** Laplace's equation u_xx + u_yy = 0 is
- A) hyperbolic
- B) parabolic
- C) elliptic
- D) first order
**Answer:** C. B² − 4AC = −4 < 0.

**Q89.** The heat equation u_t = ku_xx is
- A) parabolic
- B) elliptic
- C) hyperbolic
- D) non-linear
**Answer:** A. B² − 4AC = 0.

**Q90.** The wave equation u_tt = c²u_xx is
- A) elliptic
- B) parabolic
- C) of first order
- D) hyperbolic
**Answer:** D. B² − 4AC = 4c² > 0.

**Q91.** The type of Au_xx + Bu_xy + Cu_yy + … = 0 is decided by
- A) A + C
- B) B² − 4AC
- C) AC
- D) the boundary conditions
**Answer:** B. Discriminant.

**Q92.** The method of separation of variables for u(x, t) assumes
- A) u = X(x) + T(t)
- B) u = X(x)T(t)
- C) u = f(x + t)
- D) u is linear in t
**Answer:** B. Product solution.

**Q93.** The eigenvalues of X″ + λX = 0, X(0) = X(L) = 0 are
- A) nπ/L
- B) n²
- C) (nπ/L)²
- D) (2n + 1)π/L
**Answer:** C. With eigenfunctions sin(nπx/L).

**Q94.** D'Alembert's general solution of u_tt = c²u_xx has the form
- A) F(x + ct) + G(x − ct)
- B) F(x)G(t)
- C) e^{−ct}F(x)
- D) F(x² − c²t²)
**Answer:** A. Two waves travelling in opposite directions.

**Q95.** In the heat-equation solution with fixed zero ends, the n-th mode decays like
- A) e^{−knπt/L}
- B) cos(nπt/L)
- C) e^{−kn²π²t/L²}
- D) 1/t
**Answer:** C. Higher modes die faster.

**Q96.** For a string with tension T and mass per unit length ρ, the wave speed c is
- A) T/ρ
- B) √(T/ρ)
- C) √(ρ/T)
- D) Tρ
**Answer:** B. c² = T/ρ.

**Q97.** Lagrange's auxiliary equations for Pp + Qq = R are
- A) dx/P = dy/Q = dz/R
- B) P dx + Q dy = R dz
- C) dx/R = dy/Q = dz/P
- D) p/P = q/Q
**Answer:** A. Characteristic system.

**Q98.** Parseval's identity relates
- A) Fourier coefficients to the derivative of f
- B) the sum of squares of the Fourier coefficients to the integral of f²
- C) sine and cosine coefficients only
- D) the period to the number of terms
**Answer:** B. a₀²/2 + Σ(aₙ² + bₙ²) = (1/π)∫f².

**Q99.** At the point x = 2, the equation (1 − x²)u_xx + u_yy = 0 is
- A) elliptic
- B) parabolic
- C) undefined
- D) hyperbolic
**Answer:** D. B² − 4AC = −4(1 − 4) = 12 > 0.

**Q100.** The Dirichlet conditions for a Fourier series are
- A) necessary but not sufficient
- B) necessary and sufficient
- C) sufficient but not necessary
- D) neither
**Answer:** C. They guarantee convergence but some functions outside them also converge.

## Numerical Methods

**Q101.** The order of convergence of the Newton–Raphson method at a simple root is
- A) 1
- B) 2
- C) 1.618
- D) 3
**Answer:** B. Quadratic convergence.

**Q102.** In the bisection method the length of the bracketing interval after each step is
- A) halved
- B) divided by 3
- C) reduced by f(c)
- D) unchanged
**Answer:** A. Linear convergence with ratio ½.

**Q103.** The order of convergence of the secant method is about
- A) 1
- B) 2
- C) 0.5
- D) 1.618
**Answer:** D. The golden ratio.

**Q104.** Newton's iteration for √N is
- A) xₙ₊₁ = xₙ − N/xₙ
- B) xₙ₊₁ = N/xₙ
- C) xₙ₊₁ = ½(xₙ + N/xₙ)
- D) xₙ₊₁ = 2xₙ − Nxₙ²
**Answer:** C. From f(x) = x² − N.

**Q105.** Fixed-point iteration xₙ₊₁ = g(xₙ) converges near a root if
- A) |g′(x)| < 1
- B) g′(x) > 1
- C) g(x) = 0
- D) g is a polynomial
**Answer:** A. Contraction condition.

**Q106.** Gauss–Seidel differs from Jacobi in that it
- A) needs no starting values
- B) uses each newly computed value immediately
- C) works only for 2×2 systems
- D) is a direct method
**Answer:** B. That usually makes it faster.

**Q107.** A sufficient condition for the convergence of Jacobi and Gauss–Seidel is that the coefficient matrix is
- A) symmetric
- B) singular
- C) strictly diagonally dominant
- D) upper triangular
**Answer:** C. |aᵢᵢ| > Σ|aᵢⱼ| in each row.

**Q108.** Simpson's 1/3 rule requires the number of subintervals to be
- A) odd
- B) a multiple of 3
- C) prime
- D) even
**Answer:** D. It fits parabolas over pairs of intervals.

**Q109.** Simpson's 3/8 rule requires the number of subintervals to be a multiple of
- A) 2
- B) 3
- C) 4
- D) 8
**Answer:** B. It fits cubics over three intervals.

**Q110.** The trapezoidal rule gives exact results for polynomials of degree at most
- A) 1
- B) 2
- C) 3
- D) 0
**Answer:** A. Error term involves f″.

**Q111.** Simpson's 1/3 rule gives exact results for polynomials of degree at most
- A) 1
- B) 2
- C) 3
- D) 4
**Answer:** C. Error term involves f⁽⁴⁾.

**Q112.** The nodes of the two-point Gauss–Legendre rule on [−1, 1] are
- A) ±1
- B) ±1/√3
- C) ±1/2
- D) 0 and 1
**Answer:** B. Weights both equal 1.

**Q113.** The global error of Euler's method is of order
- A) h
- B) h²
- C) h⁴
- D) 1/h
**Answer:** A. Local error O(h²), accumulated over 1/h steps.

**Q114.** The global error of the classical fourth-order Runge–Kutta method is of order
- A) h
- B) h²
- C) h³
- D) h⁴
**Answer:** D. Hence "fourth order".

**Q115.** The central-difference approximation of f′(x) is
- A) [f(x + h) − f(x)]/h
- B) [f(x) − f(x − h)]/h
- C) [f(x + h) − f(x − h)]/(2h)
- D) [f(x + h) − 2f(x) + f(x − h)]/h²
**Answer:** C. Error O(h²). (D approximates f″.)

**Q116.** Newton's forward-difference interpolation formula is most suitable for values near
- A) the beginning of the table
- B) the end of the table
- C) the middle only
- D) outside the table
**Answer:** A. Backward differences suit the end.

**Q117.** For data from a cubic polynomial at equal spacing, which differences are constant?
- A) first
- B) second
- C) fourth
- D) third
**Answer:** D. n-th differences of a degree-n polynomial are constant.

**Q118.** The modified (improved) Euler method is also known as
- A) the Taylor method
- B) Heun's method (a second-order Runge–Kutta method)
- C) the secant method
- D) Milne's method
**Answer:** B. Predictor–corrector with two slopes.

**Q119.** The trapezoidal rule with h = 1 applied to ∫₀²x² dx gives
- A) 8/3
- B) 2
- C) 3
- D) 4
**Answer:** C. ½[0 + 2(1) + 4] = 3 (exact value 8/3).

**Q120.** In three-digit rounding arithmetic, 2/3 is stored as
- A) 0.667
- B) 0.666
- C) 0.67
- D) 0.6667
**Answer:** A. Three significant figures, rounded.
