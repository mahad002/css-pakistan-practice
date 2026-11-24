# 09 — Population Analysis, Vital Statistics, Official Statistics, National Income and Index Numbers

Examined in 9 of 11 papers. **Fertility and reproduction rates** (GFR, ASFR, TFR, GRR, NRR) were computed in 2017, 2018, 2019, 2020 and 2021; death rates in 2020 and 2026; index numbers in 2017, 2022 and 2024; Pakistan's statistical organisations in 2016 and 2018. Computations are mechanical — a reliable Section B choice if you know the formulas.

---

## 1. Demography and vital statistics

**Demography:** the scientific study of the size, composition, distribution and change of human populations (through births, deaths and migration).
**Vital statistics:** data on vital events — live births, deaths, foetal deaths, marriages, divorces — and the rates derived from them.
**Census vs vital statistics (2017):** a census is a periodic (usually ten-yearly) complete count of the population at one moment (a "stock"); vital registration records events continuously as they happen (a "flow"). Rates need both: events (numerator, from registration) and population (denominator, from the census).
**Sources of demographic data (2020):** local — population census (PBS; 7th census 2023, first digital census, population 241.49 million [verify]), civil registration of births and deaths with union councils/NADRA's CRMS, sample surveys (Pakistan Demographic and Health Survey by NIPS, PSLM/HIES and Labour Force Survey by PBS), hospital records; global — UN Population Division (World Population Prospects), UN Statistics Division Demographic Yearbook, WHO, World Bank, DHS Program.

**Importance and uses (2021, 2022):** planning health, education and housing; measuring health status (infant and maternal mortality); population projections; family-planning evaluation; insurance (life tables); seat allocation and resource distribution (the NFC award uses population weights); research.
**Limitations/shortcomings in Pakistan:** under-registration of births and deaths (especially rural, female and infant deaths); late registration; age misreporting (digit preference); inconsistent definitions; long gaps between censuses; politically contested census counts.

**Rates vs ratios (2020).** A *rate* relates events to the population at risk over a period (deaths per 1,000 population per year). A *ratio* compares two separate quantities (sex ratio = males per 100 females).

## 2. Mortality

| Measure | Formula |
|---|---|
| Crude death rate (CDR) | (deaths in year/mid-year population) × 1000 |
| Age-specific death rate | (deaths aged x/population aged x) × 1000 |
| Infant mortality rate (IMR) | (deaths under age 1/live births) × 1000 |
| Neonatal mortality rate | deaths under 28 days per 1000 live births |
| Maternal mortality ratio | maternal deaths per 100,000 live births |
| Standardised death rate (direct) | Σ(ASDR_A × P_standard)/ΣP_standard |

**Why standardise (2019):** crude rates depend on age structure. A town with many old people has a high CDR even if every age group is healthy. Standardisation applies each population's age-specific rates to one standard population so the rates can be compared fairly (similarly for births and marriages).

**Worked example (2026).** Town A: population 100, 1500, 850, 50 (age groups <10, 11–25, 26–50, >50); deaths 40, 150, 108, 37. Town B population (standard): 1000, 500, 400, 100.
(i) CDR_A = 335/2500 × 1000 = **134 per 1000**.
(ii) ASDRs of A: 400, 100, 127.06, 740 per 1000. SDR_A = (0.4 × 1000 + 0.1 × 500 + 0.12706 × 400 + 0.74 × 100)/2000 × 1000 = (400 + 50 + 50.82 + 74)/2000 × 1000 = **287.4 per 1000**.
(The numbers are artificial — far above real death rates — but the method is what is marked.)

**IMR (2026 MCQ).** IMR 45 per 1000 with 250,000 live births ⇒ 45 × 250 = **11,250** infant deaths.

## 3. Fertility

| Measure | Formula |
|---|---|
| Crude birth rate (CBR) | (live births/mid-year population) × 1000 |
| General fertility rate (GFR) | (live births/women aged 15–49) × 1000 |
| Age-specific fertility rate (ASFR) | (births to women aged x to x + 4/women in that group) × 1000 |
| Total fertility rate (TFR) | 5 × ΣASFR (per woman, with ASFR as a proportion) |
| Gross reproduction rate (GRR) | 5 × Σ(female ASFR) = TFR × (female births/total births) |
| Net reproduction rate (NRR) | 5 × Σ(female ASFR × survival probability to that age) |
| Sex ratio | (males/females) × 100; sex ratio at birth ≈ 105 |
| Vital index | (births/deaths) × 100 |

**Interpretation of NRR (2019):** NRR = 1 — each generation of women exactly replaces itself (replacement level); NRR > 1 — population will grow in the long run; NRR < 1 — it will eventually decline. GRR ignores mortality; NRR includes it, so NRR ≤ GRR. (Replacement TFR ≈ 2.1.)

**Worked example (2020).** Women and births by age 15–19 … 45–49: women 84,790, 70,010, 72,660, 75,920, 75,100, 71,620, 66,660; births 343, 14,541, 16,736, 12,218, 756, 82, 45.
ASFR (per 1000): 4.05, 207.70, 230.33, 160.93, 10.07, 1.14, 0.68.
**TFR** = 5 × 614.9/1000 = **3.07 children per woman** (3,074 per 1000 women).
**GFR** = 44,721/516,760 × 1000 = **86.5 per 1000 women aged 15–49**.

**Worked example (2021).** Six age groups 15–44, female population 8981, 5875, 3613, 3380, 3345, 3248; births 1835, 2616, 2563, 1062, 558, 37; female survivors per 1000 = 634, 602, 568, 530, 488, 444; sex ratio at birth 105.2.
Proportion of births that are female = 100/205.2 = 0.4873.
ASFR = births/women: 0.2043, 0.4453, 0.7094, 0.3142, 0.1668, 0.0114 (as printed the population figures give very high rates — the method is what matters).
TFR = 5 × 1.8514 = 9.257. **GRR** = 0.4873 × 9.257 = **4.51**. **NRR** = 5 × Σ(ASFR × 0.4873 × survival/1000) = **2.57**. Both > 1 ⇒ the population would grow.

## 4. Official statistics in Pakistan (2016, 2018)

| Organisation | Role |
|---|---|
| **Pakistan Bureau of Statistics (PBS)** | National statistical office. Created in 2011 by merging the Federal Bureau of Statistics, the Population Census Organisation and the Agricultural Census Organisation under the General Statistics (Reorganisation) Act 2011 [verify]. Conducts the population, housing and agricultural censuses; Labour Force Survey; PSLM/HIES; compiles CPI, SPI, WPI, national accounts (with the National Accounts Committee), foreign-trade and industrial statistics. Now under the Ministry of Planning, Development and Special Initiatives |
| **Statistics Division** | Formerly the federal division that supervised the FBS and census organisations; its functions were folded into PBS/Planning Ministry arrangements [verify current status]. Questions from 2018 still ask about it: describe it as the policy and coordinating division for official statistics |
| **NADRA** (National Database and Registration Authority, est. 2000) | Citizen database; CNICs, B-forms (child registration), family trees; Civil Registration Management System (CRMS) linking union councils for birth, death, marriage and divorce registration; supports targeting (BISP), elections (electoral rolls with ECP) and the census frame |
| **State Bank of Pakistan** | Monetary, banking, balance-of-payments and external-debt statistics |
| **Ministry of Finance** | Pakistan Economic Survey (annual) |
| **Provincial Bureaus of Statistics** (Punjab, Sindh, KP, Balochistan) | Provincial surveys (e.g. MICS), development statistics |
| **NIPS** (National Institute of Population Studies) | Pakistan Demographic and Health Survey |

## 5. National income

- **GDP** (gross domestic product): market value of all final goods and services produced within the country in a year.
- **GNP/GNI** = GDP + net factor (primary) income from abroad.
- **NDP** = GDP − depreciation (capital consumption); **NNP** = GNP − depreciation.
- **National income** (NNP at factor cost) = NNP at market prices − indirect taxes + subsidies.
- Three approaches: **production** (sum of value added by sectors: agriculture, industry, services), **income** (wages + rent + interest + profit), **expenditure** (C + I + G + X − M).
- Real vs nominal: real GDP = nominal GDP deflated by a price index (GDP deflator). Per capita income = national income/population.
- **Saving** = disposable income − consumption (a flow); **wealth** = stock of assets (land, buildings, financial assets) net of liabilities. National saving finances investment; low saving rates force reliance on foreign borrowing (a long-standing issue for Pakistan).

## 6. Index numbers

An index number measures relative change in a variable (prices, quantities) over time or space, with a base period = 100.
**Construction steps (2024 — wholesale price index):** (1) define the purpose; (2) choose the base period (normal, recent); (3) select representative commodities; (4) choose markets and collect wholesale price quotations; (5) choose weights (quantities or values traded); (6) choose the formula (usually Laspeyres); (7) compute price relatives and combine; (8) revise base and weights periodically.

**Formulas** (p = price, q = quantity, 0 = base, 1 = current):

| Index | Formula |
|---|---|
| Simple aggregative | Σp₁/Σp₀ × 100 |
| Laspeyres | Σp₁q₀/Σp₀q₀ × 100 (base weights) |
| Paasche | Σp₁q₁/Σp₀q₁ × 100 (current weights) |
| Fisher's ideal | √(L × P) |
| Marshall–Edgeworth | Σp₁(q₀ + q₁)/Σp₀(q₀ + q₁) × 100 |
| Walsh | Σp₁√(q₀q₁)/Σp₀√(q₀q₁) × 100 |

**Tests (2017):** *time reversal* — P₀₁ × P₁₀ = 1 (the index forward times the index backward gives 1); *factor reversal* — P₀₁ × Q₀₁ = Σp₁q₁/Σp₀q₀ (price index × quantity index = value ratio). **Fisher's index satisfies both**, hence "ideal"; Laspeyres and Paasche satisfy neither.

**Worked example (new numbers).** Four goods: p₀ = 10, 8, 5, 20; q₀ = 30, 15, 20, 5; p₁ = 12, 10, 6, 22; q₁ = 25, 16, 24, 6.
Σp₀q₀ = 620, Σp₁q₀ = 740, Σp₀q₁ = 618, Σp₁q₁ = 736.
L = 119.35; P = 119.09; **Fisher = 119.22**.

**Worked example (2024).** Prices (Rs/40 kg) 2002 → 2004: A 3.95 → 4.25, B 34.80 → 38.04, C 61.56 → 59.70; quantities 2002: 9675, 788, 118; 2004: 16,436, 3, 116 (as printed).
**Marshall–Edgeworth = 106.87**; **Walsh = 106.34** (also L = 107.18, P = 106.55, Fisher = 106.86).

**CPI and deflating (2017).** CPI measures the cost of a fixed basket bought by households (PBS publishes it monthly for urban and rural areas); it is used to measure inflation and to deflate money values: **real value = money value/CPI × 100**. The *purchasing power of money* = 100/CPI (2026 MCQ: retail/consumer price index).
Example (2017): per-capita income 1627 → 2970 (1980–81 to 1986–87) with CPI 100 → 115.6. Real income 1986–87 = 2970/115.6 × 100 = **2569**; real-income index = **157.9** against a money-income index of 182.5. About a quarter of the apparent rise was inflation.

---

## Exam checklist
- Formula sheet: CBR, CDR, IMR, GFR, ASFR, TFR, GRR, NRR, SDR — with one worked table each.
- Census vs registration; uses and limitations of vital statistics in Pakistan.
- PBS, NADRA, SBP roles.
- National income concepts and the three approaches.
- Laspeyres, Paasche, Fisher, Marshall–Edgeworth, Walsh; time and factor reversal; deflating.
