# 02 — Basic Probability

Examined in 10 of 11 papers. **Bayes' theorem / total probability** (2019, 2020, 2021, 2024) and **conditional probability word problems** (2022, 2023, 2026) are the favourites. 2026 also asked a concept question (exchangeability).

---

## 1. Basic ideas

- **Random experiment:** can be repeated under the same conditions; all outcomes known in advance; the actual outcome cannot be predicted (2021).
- **Sample space S:** set of all outcomes. **Event:** a subset of S.
- **Mutually exclusive:** cannot occur together (A ∩ B = ∅). Examples: a student passes or fails a paper; a cricket match ends in a win, loss, draw or tie for Pakistan.
- **Exhaustive:** together cover S. **Equally likely:** same chance.
- **Independent:** P(A ∩ B) = P(A)P(B) — the occurrence of one does not change the chance of the other.

**Definitions of probability.** Classical P(A) = n(A)/n(S) (equally likely outcomes); relative frequency (long-run proportion); subjective; axiomatic (Kolmogorov): P(A) ≥ 0, P(S) = 1, additivity for mutually exclusive events.

**Counting.** Permutations ⁿPᵣ = n!/(n − r)!; combinations ⁿCᵣ = n!/[r!(n − r)!]. From A, B, C, D taken 3: ⁴C₃ = **4** combinations (ABC, ABD, ACD, BCD) and ⁴P₃ = **24** permutations (each combination in 3! = 6 orders) (2023).

## 2. Laws of probability

- Complement: P(Aᶜ) = 1 − P(A).
- **Addition:** P(A ∪ B) = P(A) + P(B) − P(A ∩ B); for mutually exclusive events P(A ∪ B) = P(A) + P(B).
- Three events: P(A ∪ B ∪ C) = ΣP(A) − ΣP(A ∩ B) + P(A ∩ B ∩ C).
- **Multiplication:** P(A ∩ B) = P(A)P(B | A) = P(B)P(A | B); three events P(A ∩ B ∩ C) = P(A)P(B | A)P(C | A ∩ B) (2019 asked the form P(A | B ∩ C)P(B | C)P(C)).
- **Conditional:** P(A | B) = P(A ∩ B)/P(B), P(B) > 0.

**Proof of the addition law for mutually exclusive events (2019).** Classical: if A has m outcomes and B has k outcomes out of n, and they share none, A ∪ B has m + k outcomes, so P(A ∪ B) = (m + k)/n = P(A) + P(B). (Axiomatically it is the third axiom.)

**Joint and marginal probability.** In a two-way table of probabilities, each cell is a joint probability P(Aᵢ ∩ Bⱼ); row and column totals are marginal probabilities.

**Worked example (2026, Venn diagram).** Newspapers: P(A) = .60, P(B) = .40, P(C) = .30, P(AB) = .20, P(AC) = .10, P(BC) = .20, P(ABC) = .05.
P(A ∪ B ∪ C) = 1.30 − 0.50 + 0.05 = **0.85** ⇒ 85% read at least one, **15% read none**.
Venn regions (draw three overlapping circles and fill from the centre out): ABC only .05; AB only .15; AC only .05; BC only .15; A only .35; B only .05; C only .05; outside .15. (Check: sum = 1.)

**Worked example (2022, two-way table).** 800 employees; 20% graduates (160), half of them non-managers ⇒ 80 graduate managers; 30% of the 640 non-graduates are managers (192). Managers = **272**.
P(graduate | manager) = 80/272 = **0.294**; P(manager | graduate) = 80/160 = 0.5; P(graduate or manager) = (160 + 272 − 80)/800 = **0.44**.

**Worked example (2018, without replacement).** 12 red, 20 white roses. (i) P(3rd red | first two white) = 12/30 = **0.4**. (ii) P(exactly 3 red and 2 white in the first five) = ¹²C₃·²⁰C₂/³²C₅ = 220 × 190/201,376 = **0.2076** (hypergeometric).

## 3. Total probability and Bayes' theorem

If B₁, …, B_k partition S: P(A) = Σ P(Bᵢ)P(A | Bᵢ).
**Bayes:** P(Bⱼ | A) = P(Bⱼ)P(A | Bⱼ)/Σᵢ P(Bᵢ)P(A | Bᵢ).
Method: draw a tree (first stage: which "cause"; second stage: the observed outcome); multiply along branches; divide the branch of interest by the total.

**Worked example (2020).** Bag A: 7 red, 8 blue; bag B: 9 red, 7 blue; bag chosen at random; red drawn.
P(R) = ½(7/15) + ½(9/16). P(A | R) = (7/15)/(7/15 + 9/16) = **112/247 = 0.4534**.

**Worked example (2019).** Three coins: fair, P(H) = 1/3, P(H) = 2/3; one chosen at random, tossed twice, two heads.
P(HH | fair) = 1/4, P(HH | c₂) = 1/9, P(HH | c₃) = 4/9. P(fair | HH) = (1/4)/(1/4 + 1/9 + 4/9) = **9/29 = 0.310**.

**Worked example (2021).** Urn with four balls: all white, or 2 white + 2 black (equally likely a priori). A white ball is drawn. P(all white | W) = 1/(1 + ½) = **2/3**.

**Worked example (2024, transfer between urns).** Urn 1: 10W, 3B; urn 2: 2W, 5B. Two balls go from urn 1 to urn 2, then one is drawn from urn 2.
P(2W moved) = 45/78 → urn 2 has 4W/9: P(W) = 4/9. P(1W1B) = 30/78 → 3/9. P(2B) = 3/78 → 2/9.
P(W) = (45·4 + 30·3 + 3·2)/(78·9) = 276/702 = **46/117 = 0.393**.

**Worked example (2023).** Box: 4 bad, 6 good tubes; two drawn together; one of them (chosen at random) is tested and is good. P(other good) = P(both good)/P(tested one good) = (15/45)/(6/10) = **5/9**. (If the information were "at least one is good", the answer would be 15/39 = 5/13. State your reading.)

## 4. Random variables and expectation

A random variable X assigns a number to each outcome. Discrete: probability function p(x) with Σp(x) = 1. Continuous: density f(x) ≥ 0, ∫f = 1, P(a < X < b) = ∫_a^b f. Distribution function F(x) = P(X ≤ x).

E(X) = Σx p(x) or ∫x f(x)dx. Var(X) = E(X²) − [E(X)]². E(aX + b) = aE(X) + b; Var(aX + b) = a²Var(X). For independent X, Y: Var(X ± Y) = Var X + Var Y.
**Moment generating function** M(t) = E(e^{tX}); E(Xʳ) = M⁽ʳ⁾(0). Uniqueness: an mgf identifies a distribution.
**Chebyshev's inequality:** P(|X − μ| < kσ) ≥ 1 − 1/k² for any distribution — e.g. at least ¾ of values lie within 2σ (used in 2023).

**Bernoulli variable (2017).** X = 1 with probability p, 0 with q = 1 − p. E(X) = 1·p + 0·q = p; E[(X − p)²] = (1 − p)²p + p²q = pq(q + p) = **pq**.

**Worked example (continuous, 2025).** f(x) = k(x − x²), 0 ≤ x ≤ 1. ∫₀¹(x − x²)dx = 1/6 ⇒ **k = 6**. E(X) = 6∫(x² − x³) = ½; E(X²) = 6∫(x³ − x⁴) = 0.3; Var = 0.05. The density is symmetric about ½, so μ₃ = 0 and **skewness = 0**.

**Worked example (CDF, 2026 MCQ).** F(x) = K(x − 2) on [2, 6) must reach 1 at x = 6 ⇒ K = 1/4.

**Exchangeability (2026).** Random variables X₁, …, Xₙ are exchangeable if their joint distribution is unchanged by any permutation of the indices: (X₁, X₂, X₃) has the same distribution as (X₂, X₃, X₁), etc. Independent, identically distributed variables are exchangeable, but not conversely. Example: drawing balls without replacement from an urn of 3 red, 2 black — the colours of draws 1 and 2 are dependent (P(2nd red | 1st red) = 2/4 ≠ 3/5) yet exchangeable (P(R then B) = P(B then R) = 3/10). By de Finetti's theorem an infinite exchangeable sequence behaves like i.i.d. given an unknown parameter — the foundation of Bayesian inference.

---

## Common mistakes
- Adding probabilities of events that are not mutually exclusive.
- Confusing P(A | B) with P(B | A) — the point of Bayes' theorem.
- Treating "without replacement" draws as independent.

## Exam checklist
- A tree diagram for every Bayes question.
- Venn diagram with three sets, filling from the centre.
- E(X), Var(X), mgf of simple distributions; Chebyshev.
