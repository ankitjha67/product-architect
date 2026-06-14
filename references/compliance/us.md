# US Compliance Deep-Dive

> **⚠️ DISCLAIMER:** Laws change. This reflects early 2026 status. Always verify
> with local legal counsel before relying on any specific requirement.

## Data Privacy (No Federal Omnibus — State Patchwork)
- No single federal privacy law (ADPPA stalled). ~20 states have comprehensive laws by early 2026; new ones effective each Jan/Jul. Track per-state.
- **CCPA/CPRA (California):** Applies if for-profit doing business in CA AND ≥1 of: >$25M annual gross revenue; buys/sells/shares personal info of ≥100K consumers/households; ≥50% revenue from selling/sharing PI. Rights: know, delete, correct, opt-out of sale/share, limit use of sensitive PI, no retaliation. Enforced by **CPPA** (rulemaking) + CA AG. Penalties: $2,500/violation, $7,500 if intentional or involving minors. Private right of action only for breaches ($100–$750/consumer statutory damages).
- **The other ~19:** Virginia VCDPA, Colorado CPA, Connecticut CTDPA, Utah UCPA, Texas TDPSA (no revenue threshold — applies to most processors), Oregon, Montana, Iowa, Delaware, New Jersey, New Hampshire, Nebraska, Tennessee, Indiana, Minnesota, Maryland (strictest data-minimization), Florida (large platforms), Kentucky, Rhode Island. Most are **opt-out** models (vs CCPA's broader rights).
- **Common thresholds:** Typically 100K consumers, OR 25K consumers + >25% revenue from data sales. Texas/Nebraska use a "not a small business" SBA test instead.
- **Opt-out of sale/share + targeted advertising:** Must honor. "Sale" is broad (can include sharing for cross-context ads).
- **Global Privacy Control (GPC):** California + Colorado + Connecticut + others REQUIRE honoring GPC browser signal as a valid opt-out. Failure = enforcement (Sephora $1.2M 2022, Todd Snyder $345K 2025).
- **Sensitive data:** Precise geolocation, race/ethnicity, religion, health, sexual orientation, biometrics, citizenship, children's data, SSN. Most states require **opt-in consent** (CCPA: right to limit). Maryland bans sale of sensitive data outright.
- **Universal opt-out mechanism (UOOM):** Colorado, California, others require recognition of UOOMs.
- **Data Protection Assessments:** Required for high-risk processing (targeted ads, profiling, sensitive data, sale) in VA/CO/CT and most newer laws.
- **Biometric laws:** Illinois **BIPA** (private right of action, $1K/$5K per violation — billion-dollar exposure, e.g., Facebook $650M, BNSF $228M), Texas CUBI, Washington. BIPA reformed 2024 to per-person (not per-scan) for some claims.
- **Washington My Health My Data Act (2024):** Broad "consumer health data," private right of action, applies beyond HIPAA — high litigation risk.

## Sectoral Privacy Laws
- **HIPAA:** Protected Health Information. Covered entities (providers, plans, clearinghouses) + business associates (BAA required). No direct-to-consumer app exemption unless receiving PHI from a covered entity. Breach notification: HHS OCR + individuals within 60 days; media if >500 affected in a state. Penalties up to ~$2M/year per violation tier.
- **GLBA:** Financial institutions — privacy notices + Safeguards Rule (updated 2023: written infosec program, MFA, encryption, designated qualified individual). FTC/CFPB/banking regulators enforce.
- **COPPA:** Children **under 13**. Verifiable parental consent before collection. 2025 amended rule: stricter consent, data retention limits, separate consent for third-party ads. FTC enforces ($X per child; YouTube $170M, Epic/Fortnite $275M).
- **FERPA:** Student education records at federally funded schools. Plus state student-privacy laws (e.g., SOPIPA in CA).
- **FCRA:** Consumer reports / background checks / credit. Permissible purpose, adverse-action notices, accuracy. FTC + CFPB. "Consumer reporting agency" definition can catch data brokers/screening tools.
- **TCPA:** Prior express written consent for autodialed/prerecorded marketing calls/texts. $500–$1,500 per message statutory damages — class-action magnet. National DNC registry. 2024 FCC "1:1 consent" rule (later vacated by 11th Cir. — verify status).
- **CAN-SPAM:** Commercial email — accurate headers/subject, physical address, working opt-out honored within 10 days. $50,120 per violation. (Note: weaker than GDPR/opt-in.)
- **VPPA:** Video viewing records — revived in litigation against streaming/pixel tracking.
- **DPPA** (driver records), **CalOPPA** (privacy-policy posting requirement), **CPNI** (telecom customer data, FCC).
- **State data-broker registration:** California (Delete Act — universal deletion mechanism DROP by 2026), Texas, Oregon, Vermont — register + honor deletion. FTC scrutiny of location/sensitive-data brokers intensifying.
- **AI-specific (emerging):** Colorado AI Act (high-risk AI, effective 2026), Utah AI disclosure, Illinois (BIPA + AI Video Interview Act), California ADMT/automated-decision rules, Texas TRAIGA (2026). No federal AI law; FTC Section 5 + sectoral apply.

## FTC Act Section 5 (Unfair or Deceptive Acts/Practices)
- Primary US consumer-protection backstop where no specific statute applies. "Deceptive" = misleading material claim; "Unfair" = substantial unavoidable injury not outweighed by benefits.
- Covers: privacy promises, data security, dark patterns, AI/algorithm claims, advertising/endorsements, subscription cancellation.
- **Negative-option / "Click-to-Cancel" rule (2024):** Cancellation must be as easy as sign-up. (Partially vacated 2025 on procedural grounds — verify current status; many state auto-renewal laws still apply, e.g., CA ARL.)
- **Endorsement Guides (2023):** Disclose material connections; no fake reviews (Review/Testimonials Rule 2024, up to $51,744/violation).
- Recent enforcement themes: data brokers/location data (Kochava, X-Mode/Outlogic, Mobilewalla, InMarket), sensitive data sale, AI-washing, COPPA, health data (GoodRx, BetterHelp, Cerebral, Flo).

## Employment
- **At-will employment:** Default in all states except Montana (after probation). Terminate for any non-discriminatory, non-retaliatory, non-contractual reason. Document performance.
- **FLSA:** Federal min wage $7.25/hr (unchanged; many states/cities higher — CA $16+, WA, NYC ~$16+). Overtime 1.5× after 40 hrs/week for **non-exempt**. Exempt = salary basis ≥ threshold (2024 increases largely struck down — reverted ~$35,568/yr; verify) + duties test (executive/admin/professional/computer/outside sales).
- **Worker classification (1099 vs W-2):** IRS common-law test + DOL economic-reality test (2024 rule). California **ABC test** (AB5) very strict; misclassification = back taxes, wages, penalties. Gig carve-outs vary (Prop 22).
- **I-9 / E-Verify:** I-9 for every employee within 3 days. E-Verify mandatory in some states (FL, AZ, GA, TN, etc.) and for federal contractors.
- **ADA:** Reasonable accommodation; 15+ employees. Also governs website/app accessibility (see below).
- **Title VII:** No discrimination on race, color, religion, sex (incl. sexual orientation/gender identity per *Bostock*), national origin; 15+ employees. ADEA (age 40+, 20+ employees), GINA, PWFA (Pregnant Workers Fairness Act 2023), EPA.
- **FMLA:** 12 weeks unpaid; 50+ employees within 75 miles, employee tenure ≥12 months/1,250 hrs.
- **WARN Act:** 60 days' notice for plant closing / mass layoff (employers 100+; layoffs of 50+/500+). State mini-WARN stricter (CA 75+ employees, NY 90 days).
- **Workers' comp:** State-mandated injury insurance.
- **State-specific:** Paid family/medical leave (CA, NY, NJ, WA, CO, MA, OR…), paid sick leave (many), salary/pay-range transparency (CO, NY, CA, WA, IL), **non-compete bans** (CA total ban, MN 2023 ban, ND, OK; FTC nationwide ban vacated 2024 — verify), captive-audience bans, AI-in-hiring rules (NYC Local Law 144 bias audit, IL, CO AI Act 2026).

## Securities & Fundraising
- **Reg D 506(b):** Unlimited accredited + up to 35 sophisticated non-accredited; **no general solicitation**. Most common startup raise. File Form D within 15 days.
- **Reg D 506(c):** General solicitation **allowed** but ALL investors must be **verified** accredited.
- **Accredited investor:** $200K income ($300K joint) 2 yrs, or $1M net worth excl. primary residence, or certain licenses (Series 7/65/82).
- **Reg CF (crowdfunding):** Up to $5M/12 months via registered funding portal; non-accredited investment caps.
- **Reg A+:** Tier 1 ($20M) / Tier 2 ($75M); "mini-IPO."
- **Blue Sky laws:** State-level securities registration/notice filings in addition to federal (notice filing for 506).
- **83(b) election:** File within **30 DAYS** of receiving restricted stock (e.g., founder shares subject to vesting). Miss it = tax on vesting at then-FMV. No extensions.
- **Delaware C-corp default** (see Corporate). Equity: ISOs vs NSOs, 409A valuation required for option strike price.

## Corporate
- **Delaware C-corp** is the venture default: well-developed case law (Court of Chancery), investor familiarity/expectation, flexible DGCL, predictable. C-corp (not LLC/S-corp) because VCs/institutional investors and QSBS require it; foreign/entity shareholders blocked in S-corp.
- LLC fine for bootstrapped/lifestyle; convert to C-corp before institutional raise.
- Foreign-qualify in states where you have nexus (employees, office). Delaware franchise tax (use assumed-par-value method to minimize).
- Cap table hygiene, board approvals, 409A, stock plan, IP assignment from all founders/contractors.

## Tax
- **Federal corporate:** 21% flat (C-corp). Quarterly estimated payments. C-corp double taxation (entity + dividends) vs pass-through.
- **State income/franchise tax:** 0–~13.3%. No state income tax: TX, FL, WA (has B&O/cap-gains), NV, WY, SD, AK, TN, NH (interest/dividends phased out).
- **Sales tax & economic nexus (post-*South Dakota v. Wayfair* 2018):** Collect where you exceed thresholds even without physical presence. Typical: **$100K revenue OR 200 transactions** per state/year (many states dropped the 200-txn prong; CA/TX use $500K). SaaS taxability varies wildly by state. Use Avalara/TaxJar; register for permits before collecting. **Marketplace facilitator** laws shift collection to platforms.
- **R&D credit:** Section 41 — ~6–8% of qualified research expenses; can offset up to $500K payroll tax for qualified small businesses (startups). Sec 174 capitalization (5/15-yr amortization) — reversed for domestic R&E by 2025 OBBBA, restoring immediate expensing (verify).
- **QSBS:** Section 1202 — exclude up to greater of $10M or 10× basis on C-corp stock held >5 yrs (2025 OBBBA added tiered exclusion at 3/4/5 yrs and raised cap to $15M for newer stock — verify).
- **Transfer pricing:** Arm's-length documentation for intercompany / international.

## Industry-Specific Regulators
- **FDA:** Food, drugs, devices, cosmetics; 510(k)/PMA for medical devices; SaMD guidance; LDT rule.
- **CFPB:** Consumer financial products (lending, BNPL, larger-participant rules for digital wallets 2024 — status verify); UDAAP.
- **SEC / FINRA:** Securities, broker-dealers, RIAs, crypto enforcement.
- **FCC:** Telecom, TCPA, robocalls (STIR/SHAKEN).
- **FTC:** Cross-sector consumer protection + privacy (above).
- **State money transmitter licenses (MTL):** Each state separately for payment/wallet/custody. Money Transmission Modernization Act adopted by many states. $50K–$500K+, surety bonds, 6–18 months. Alternatively partner with a licensed BaaS/bank. **FinCEN MSB** registration + BSA/AML/KYC/SAR program federally.
- **PCI-DSS v4.0.1** (mandatory March 2025): any card handling; SAQ level by volume (L1 >6M txns/yr); tokenize to reduce scope.

## Payments & Money Movement
- **State money transmitter licenses (MTL):** holding/moving customer funds, wallets, custody — each state separately (~$50K–$500K all-in, surety bonds, net-worth minimums, 6–18 months). **Money Transmission Modernization Act** adopted by many states to harmonize. Most startups partner with a licensed BaaS/bank instead.
- **FinCEN MSB registration** + BSA/AML program (KYC/CIP, SAR/CTR filing, OFAC screening) federally for money transmitters/exchangers.
- **Nacha rules** (ACH); **Regulation E** (consumer EFT — error resolution, unauthorized-txn liability limits); **Regulation Z** (TILA/credit); **Regulation CC** (funds availability).
- **CFPB Section 1033 (open banking, 2024 final rule)** — consumer financial-data access/portability (phasing + litigation — verify).
- **Crypto:** SEC/CFTC jurisdiction contested; NY **BitLicense**; money-transmission overlay; IRS broker reporting (**Form 1099-DA** from 2025).

## Accessibility
- **ADA Title III:** Courts increasingly treat websites/apps of "public accommodations" as covered → **WCAG 2.1 AA** the de facto standard. Surge in demand letters/serial litigation (esp. NY, CA, FL).
- **DOJ ADA Title II rule (2024):** State/local govt web + apps must meet **WCAG 2.1 AA** (large entities by ~April 2026, small by 2027).
- **Section 508:** Federal agencies + vendors selling to them → WCAG 2.0 AA (VPAT/ACR required in procurement).
- **CVAA, Air Carrier Access Act** for specific sectors.

## Export Controls & Sanctions
- **EAR (Commerce/BIS):** Dual-use tech, encryption (most mass-market software self-classifies/notifies; strong crypto may need classification), ECCNs, deemed exports to foreign nationals, entity list. China/advanced-compute controls expanding.
- **ITAR (State):** Defense articles — rarely startups but severe.
- **OFAC sanctions:** Screen users/counterparties against SDN list; block Cuba, Iran, North Korea, Syria, Russia-occupied regions; strict liability. Crypto/fintech high-risk (Bittrex, BitPay settlements).

## Breach Notification
- **All 50 states + DC + territories** have breach-notification laws — no federal omnibus. Triggered by unauthorized acquisition of PI (name + SSN/financial/medical/credentials). Notify affected residents; many require AG notification above a threshold (e.g., 500/1,000 residents) and credit monitoring offers (some states). Timelines vary: "without unreasonable delay," CO/FL 30 days, others 45/60 days. Comply with **every** state where a resident is affected. Plus sectoral: HIPAA (60 days), GLBA/FTC Safeguards (FTC notice 2024 amendment, 30 days for ≥500), SEC cyber-disclosure (public co. 4 business days material incident, 2023 rule).

## Common Edge Cases
- Free B2C app under all CCPA thresholds — still hit by other states (Texas: no revenue threshold) and BIPA/MHMD private rights of action.
- Embedding analytics/ad pixels (Meta Pixel, session replay) — wiretapping (CIPA, two-party consent states), VPPA, MHMD class actions.
- "We don't sell data" but use cross-context ad cookies — that IS a "sale/share" under CCPA; must offer opt-out + honor GPC.
- Hiring W-2 across states — payroll tax registration + nexus in each employee's state.
- Texting customers order updates that drift into marketing — TCPA exposure without prior express written consent.
- AI hiring tool used on NYC candidates — Local Law 144 bias audit + notice.
- Storing card data for retries — PCI scope explosion; tokenize via processor instead.
- Treating a screening/scoring product output as not a "consumer report" — may be FCRA-covered.
