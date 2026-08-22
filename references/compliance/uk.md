# UK Compliance Deep-Dive

> **⚠️ DISCLAIMER:** Laws change. This reflects early 2026 status. Always verify
> with local legal counsel before relying on any specific requirement.

## Data Protection: UK GDPR + DPA 2018
- Post-Brexit retained GDPR ("UK GDPR") + **Data Protection Act 2018** (national derogations, law-enforcement & intelligence parts, ICO powers) + **PECR**.
- **Regulator: ICO** (Information Commissioner's Office). Mandatory ICO registration + **data protection fee** (£40 / £60 / £2,900 by tier) for most controllers.
- Mirrors EU GDPR mechanics: 6 lawful bases, DSR (1-month response), Art. 30 records, DPO when required, DPIA for high risk, Art. 27-equivalent **UK representative** for non-UK controllers in scope.
- **UK adequacy:** EU granted UK adequacy (renewed/extended to **Dec 2025**, with further extension - verify) so EU↔UK data flows freely. UK has its own adequacy list + **International Data Transfer Agreement (IDTA)** / **UK Addendum** to EU SCCs + **UK–US "Data Bridge"** (DPF extension).
- **Children:** consent age **13**; **Age Appropriate Design Code (Children's Code)** - 15 standards for services likely accessed by children (high-privacy defaults, no nudge techniques, geolocation off).
- **Breach notification:** **72 hours** to ICO; "without undue delay" to individuals if high risk.
- **Penalties:** up to **£17.5M or 4%** global turnover.
- **Data reform - DUAA:** The **Data (Use and Access) Act 2025** (successor to the lapsed DPDI Bill) became law mid-2025 - reforms to legitimate interests ("recognised" LIs), automated decision-making, cookies (some analytics consent-exempt), Smart Data schemes, ICO restructured into a board (Information Commission). **Verify which provisions are in force.**

## PECR (Privacy and Electronic Communications Regulations)
- **Cookies/trackers:** consent for non-essential before setting (DUAA may exempt low-risk analytics - verify). Reject-as-easy-as-accept.
- **Marketing:** opt-in for email/SMS; **soft opt-in** for existing customers (own similar products, opt-out at collection + each message). B2B email to corporate addresses lighter; telephone marketing must screen TPS/CTPS.
- ICO fines up to **£500K** under PECR (separate from UK GDPR).

## Online Safety Act 2023
- **Regulator: Ofcom.** Covers user-to-user and search services with UK links (extraterritorial).
- **Illegal harms duties (in force from Mar 2025):** risk assessments + proportionate measures for priority illegal content (CSAM, terrorism, fraud, etc.); remove when aware.
- **Child-safety duties (from 2025):** services likely accessed by children must do children's-access + harms risk assessments and use **"highly effective age assurance"** for pornography/primary-priority content; protect against legal-but-harmful-to-children content.
- **Codes of Practice, transparency reporting, complaints**; categorised services (Cat 1/2A/2B) extra duties (user empowerment, fraudulent ads).
- **Enforcement:** fines up to **£18M or 10%** global turnover; business disruption / ISP blocking; senior-manager criminal liability for certain failures.

## Payments & Fintech: FCA
- **FCA authorisation** required for: payment services (PSR 2017), e-money (EMR 2011), consumer credit (CCA), investments, insurance distribution. Small/full PI/EMI categories; safeguarding of customer funds.
- **Open Banking:** CMA Order + PSD2-equivalent; OBL standards; future via Data (Use and Access) Smart Data.
- **APP fraud reimbursement (from 7 Oct 2024):** mandatory 50/50 sending/receiving PSP reimbursement for authorised push payment fraud over Faster Payments/CHAPS (PSR rules; cap £85K).
- **Consumer Duty (in force July 2023/2024):** firms must deliver good outcomes - products & services, price & value, consumer understanding, consumer support; ongoing monitoring + board report.
- **Financial promotions regime:** crypto promotions in scope (from Oct 2023) - must be approved/exempt; "appropriateness" + risk warnings.
- **FCA Regulatory Sandbox** + Innovation Pathways for fintech testing.
- **AML:** MLR 2017, FCA/HMRC supervision, KYC/CDD, SARs to NCA. **Crypto:** registration with FCA for AML; broader crypto/stablecoin regulatory regime being legislated (verify).

## Tax
- **Corporation tax:** **25%** main rate (profits >£250K); **19%** small-profits rate (<£50K); marginal relief between.
- **VAT:** 20% standard. Registration threshold **£90,000** turnover (from Apr 2024). Digital services: place-of-supply rules; VAT MOSS replaced post-Brexit (register in an EU state for EU OSS).
- **PAYE + National Insurance:** employer deducts income tax + employee NI; **employer NI 15%** above £5,000/yr secondary threshold (from Apr 2025 - rate raised from 13.8%, threshold cut; verify).
- **R&D tax relief:** merged **RDEC scheme** (~20% above-the-line credit) for accounting periods from Apr 2024; enhanced support for R&D-intensive SMEs (~27%).
- **EMI options:** tax-advantaged employee share options (companies <£30M gross assets, <250 employees, £3M EMI limit, £250K/employee) - no income tax on grant/exercise (if at market value), CGT/BADR on sale.
- **SEIS / EIS:** investor income-tax relief (SEIS 50% up to £200K; EIS 30% up to £1M/£2M knowledge-intensive) - must obtain advance assurance, company qualifying conditions.
- **Digital Services Tax:** 2% on UK-user revenues of search, social media, online marketplaces (global >£500M, UK >£25M) - to be repealed if OECD Pillar One lands (verify). **Pillar Two** 15% global minimum tax (multinational top-up tax) in force.
- **Capital gains / BADR (Business Asset Disposal Relief):** 10% rising to 14% (2025)/18% (2026) on qualifying disposals - verify rate.

## Employment
- **Employment Rights Act 1996:** unfair dismissal protection currently after **2 years**' service - **the Employment Rights Act 2025 reforms make unfair dismissal a "day-one" right** (and add other changes), phasing in ~2026–2027; **verify commencement**.
- **National Minimum/Living Wage (from Apr 2025):** NLW **£12.21**/hr (21+); lower bands 18–20 (£10.00), under-18/apprentice (£7.55). Updated each April.
- **Working Time Regulations:** 48-hr average week (individual opt-out allowed), **28 days** paid leave (5.6 weeks, may include 8 bank holidays).
- **Statutory notice:** ≥1 week, +1 week per year of service up to 12 weeks.
- **Right to work checks:** mandatory for all employees (manual / IDVT / online share code); illegal-working civil penalty up to **£60,000** per worker (from 2024).
- **IR35 / off-payroll:** medium/large clients assess contractor status (inside = PAYE); status determination statement.
- **TUPE:** employees transfer on business/service transfer with terms + consultation.
- **Auto-enrolment pension:** mandatory; minimum 8% of qualifying earnings (employer ≥3%, total 8%).
- **Gender pay gap reporting:** employers **250+**; (ethnicity/disability reporting proposed).
- **Modern Slavery Act:** annual transparency statement, turnover **£36M+**.
- **Employment tribunals:** no cap on discrimination awards; unfair dismissal compensatory cap (~£115K or 1 yr's pay). Day-one rights: SSP, family leave reforms, "fire and rehire" code (2024).
- **Settlement agreements, statutory family leave** (maternity 52 wks/SMP 39 wks, paternity, shared parental, neonatal care leave 2025, carer's leave).

## Company Law
- **Companies House** registration (incorporate online ~£50). Private limited (Ltd) most common.
- **Annual filings:** **Confirmation statement** (CS01, annually), annual accounts (micro/small exemptions; deadline 9 months after year-end for private co), corporation tax return (CT600) to HMRC.
- **PSC register:** Persons with Significant Control (>25% shares/votes, or significant influence) - disclose + keep current.
- **Directors' duties** (CA 2006 ss.171–177); at least 1 natural-person director; registered office.
- **ECCTA (Economic Crime and Corporate Transparency Act 2023):** Companies House reform - **identity verification** for directors/PSCs/filers (phasing in 2025–2026), stronger powers, "failure to prevent fraud" corporate offence (large orgs, from Sept 2025). **Verify timelines.**

## Corporate Structure & Setup Notes
- **Entity types:** private limited (Ltd) is the venture default; LLP for professional services; public limited (Plc) for listing. SEIS/EIS + EMI eligibility makes Ltd attractive to UK angels.
- **Share structure:** ordinary + preference shares; option pool; cap-table on a registered platform; Companies House records public.
- **Jurisdiction:** England & Wales, Scotland, and Northern Ireland have separate legal systems - contracts/employment specifics can differ; "UK" company law (CA 2006) is unified but court systems are not.
- **Imports/customs (post-Brexit):** **EORI number** required to import/export goods; customs declarations + potential VAT/duty at border for EU trade; Northern Ireland Protocol/Windsor Framework special rules for NI goods.
- **Sanctions/export:** OFSI (financial sanctions), ECJU/strategic export controls - screen counterparties; Russia/Belarus regimes.

## Accessibility
- **Public Sector Bodies Accessibility Regulations 2018:** public-sector websites/apps must meet **WCAG 2.1 AA** + accessibility statement.
- **Equality Act 2010:** duty to make reasonable adjustments - extends to private-sector digital services (de facto WCAG AA expectation).
- EAA (EU) not directly binding post-Brexit, but UK businesses selling into the EU must comply with the EAA from June 2025.

## Consumer Protection & Advertising
- **Consumer Rights Act 2015:** goods (satisfactory quality/fit/as-described, 30-day reject), services (reasonable care/skill), **digital content** rights; unfair-terms regime.
- **Consumer Contracts Regulations 2013:** pre-contract info + **14-day cooling-off** for distance/online sales.
- **Digital Markets, Competition and Consumers Act 2024 (DMCC):** new direct CMA enforcement of consumer law (fines up to **10%** global turnover), ban on **fake reviews** + **subscription traps** (clear pre-contract info, reminders, easy cancellation) - phasing in from Apr 2025; CMA "Strategic Market Status" digital-competition regime (gatekeeper-style).
- **ASA / CAP & BCAP Codes:** advertising must be legal, decent, honest, truthful; misleading-ads, influencer #ad disclosure, prize draws, environmental claims. ASA self-regulatory; backstop to Trading Standards/CMA.

## Fines Quick-Reference (max)
| Regime | Cap |
|--------|-----|
| UK GDPR | £17.5M / 4% global turnover |
| PECR | £500K |
| Online Safety Act | £18M / 10% global turnover |
| DMCC (consumer) | 10% global turnover |
| Illegal-working penalty | £60K per worker |

## Common Edge Cases
- US/EU cloud for UK personal data - use IDTA or UK Addendum + transfer risk assessment.
- Relying on EU adequacy permanence - UK adequacy renewals are time-limited; monitor.
- Cookie banner copied from EU site - still needs PECR-compliant reject option (and DUAA changes - verify).
- Service "likely accessed by children" - Children's Code + Online Safety Act age assurance both bite even for non-child-targeted apps.
- Crypto marketing to UK consumers - must meet FCA financial-promotions regime (approval/exemption + risk warnings) or commit a criminal offence.
- Contractor engaged via personal service company - IR35 status determination obligation on medium/large clients.
- Auto-renewing subscription - DMCC subscription-trap rules (reminders + easy exit) from 2025.
- Hiring an EU-based remote worker into a UK company - UK payroll may not cover them; local employment law + social security of the worker's country applies (get local advice + PEO/EOR).
- Granting EMI options after exceeding £30M gross assets / 250 employees - options may fall outside EMI; use unapproved/CSOP and check tax.
- Marketing financial/crypto products to UK users via influencers - financial-promotions regime + ASA disclosure both apply.
- Relying on the old £85K VAT threshold - it is £90K from Apr 2024; register on time to avoid penalties.
- Assuming "soft opt-in" covers cold B2C email - it only covers your own existing customers for similar products.
