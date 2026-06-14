# EU Compliance Deep-Dive

> **⚠️ DISCLAIMER:** Laws change. This reflects early 2026 status. Always verify
> with local legal counsel before relying on any specific requirement.

## Data Protection: GDPR (Reg. 2016/679)
- **Territorial scope (Art. 3):** Establishment in EU, OR offering goods/services to / monitoring behavior of people in EU (extraterritorial). Free apps count.
- **6 lawful bases (Art. 6):** (1) Consent — freely given, specific, informed, unambiguous, withdrawable, no pre-ticked boxes; (2) Contract — necessary to perform; (3) Legal obligation; (4) Vital interests; (5) Public task; (6) Legitimate interests — requires documented LIA balancing test (not available to public authorities). Marketing usually consent or LI; cannot rely on "contract" for ads.
- **Special category data (Art. 9):** Race/ethnicity, political/religious/philosophical beliefs, trade union, genetic, biometric (for ID), health, sex life/orientation → need an Art. 9 condition (usually explicit consent). Criminal data Art. 10 separate.
- **Data Subject Rights (DSR):** Access (SAR), rectification, erasure ("right to be forgotten"), restriction, portability (structured machine-readable), object, not be subject to solely automated decisions with legal/significant effect (Art. 22). Respond within **1 month** (extendable +2 for complex), free of charge.
- **DPO mandatory (Art. 37)** if: public authority; core activities = large-scale systematic monitoring; or large-scale special-category processing. Otherwise optional but common. Must be independent, report to top management.
- **Art. 27 EU Representative:** Non-EU controllers/processors in scope must appoint a written-mandated EU rep (named in privacy policy) unless occasional/low-risk. Mirror obligation for non-UK under UK GDPR.
- **DPIA (Art. 35):** Required for high-risk processing — large-scale profiling, systematic monitoring of public areas, large-scale special-category, automated decisions with legal effect, new tech. Consult supervisory authority if residual high risk.
- **Records of Processing (Art. 30 / ROPA):** Maintain for controllers & processors (exemption <250 employees only if processing is occasional/low-risk — rarely applies).
- **Data Processing Agreements (Art. 28):** Mandatory controller↔processor contract; processor obligations, sub-processors, audits.
- **Breach notification:** **72 hours** to supervisory authority (Art. 33) unless unlikely to risk rights; "without undue delay" to individuals if high risk (Art. 34). Keep internal breach register regardless.
- **International transfers (Ch. V):** Adequacy decision (UK, Switzerland, Japan, S. Korea, Canada-commercial, NZ, Argentina, Israel, etc.), or **SCCs** (2021 modules) + **Transfer Impact Assessment** (post-*Schrems II*), or BCRs, or derogations. **EU–US Data Privacy Framework (DPF, 2023)** allows transfers to self-certified US companies (challenge pending — verify validity).
- **Privacy by design & default (Art. 25);** **data minimization, accuracy, storage limitation, integrity** (Art. 5 principles); accountability.
- **Children:** Consent age 16 default; member states may lower to **13** (varies — IE 16, FR/DE 16, ES/SE/DK 13, etc.).
- **Penalties:** Up to **€20M or 4%** of global annual turnover (whichever higher) for serious breaches; €10M/2% for lesser. One-Stop-Shop via lead supervisory authority (main establishment). EDPB coordinates.

## ePrivacy / Cookies (ePrivacy Directive 2002/58, national implementations)
- **Prior consent** for non-essential cookies/trackers/local storage (analytics, ads) BEFORE they fire. Strictly necessary cookies exempt.
- Consent banner must allow **reject as easily as accept** (no "accept all" without equal "reject all"); no cookie walls (mostly); granular per-purpose; no pre-checked boxes; re-consent periodically.
- Enforcement active (CNIL fined Google/Amazon/Meta hundreds of €M for cookie banners). Plus GDPR if cookies = personal data.
- Marketing: opt-in for email/SMS (soft opt-in narrow exception for existing customers, same goods, easy unsubscribe).
- **ePrivacy Regulation** (to replace directive) still stalled — verify.

## EU AI Act (Reg. 2024/1689) — phased
- Risk-based. **Timelines:** in force Aug 2024; **prohibited practices + AI literacy Feb 2025**; **GPAI rules Aug 2025**; **high-risk + governance Aug 2026**; remaining high-risk (regulated-product embedded) **Aug 2027**.
- **Prohibited (Feb 2025):** Social scoring by public authorities, manipulative/subliminal techniques causing harm, exploiting vulnerabilities, untargeted facial-recognition scraping, emotion recognition in workplace/education, biometric categorization by sensitive traits, real-time remote biometric ID in public by law enforcement (narrow exceptions).
- **High-risk (Annex III):** Employment/HR (CV screening), credit scoring, education, essential services access, biometrics, critical infrastructure, law enforcement, migration. Requirements: risk management, data governance, technical docs, logging, transparency, human oversight, accuracy/robustness/cybersecurity, conformity assessment + CE marking + EU database registration.
- **GPAI / foundation models:** Transparency, technical docs, copyright policy, training-data summary; **systemic-risk** models (>10^25 FLOPs) add evals, adversarial testing, incident reporting. Voluntary GPAI Code of Practice.
- **Limited risk:** Chatbots, deepfakes, AI-generated content → **transparency/labeling** (disclose AI interaction; mark synthetic media).
- **Penalties:** Up to **€35M or 7%** of global turnover for prohibited-use breaches; €15M/3% for other obligations.

## Digital Services Act (DSA, Reg. 2022/2065)
- All intermediary services accessible in EU; obligations scale: hosting → online platforms → **VLOPs/VLOSEs (45M+ EU monthly users)**.
- **Notice-and-action** mechanisms, statement of reasons for moderation, internal complaint + out-of-court dispute settlement, trusted flaggers, transparency reports.
- Ban on **dark patterns**, targeting ads to minors, ads based on sensitive data; ad repositories; trader traceability (KYBC for marketplaces).
- VLOPs: systemic-risk assessments, independent audits, crisis response, data access for researchers, recommender-system opt-out of profiling.
- **Penalties up to 6%** of global turnover. EU Commission supervises VLOPs; national Digital Services Coordinators others.

## Digital Markets Act (DMA, Reg. 2022/1925)
- **Gatekeepers:** core platform service with >€7.5B EU turnover (or €75B market cap) + 45M EU monthly users + 10K business users, 3 yrs. Designated: Alphabet, Amazon, Apple, Meta, Microsoft, ByteDance, Booking (verify list).
- Obligations: no self-preferencing, interoperability (messaging), sideloading/alternative app stores, data portability, no combining data without consent, fair access. Up to **10% (20% repeat)** global turnover fines.
- If not a gatekeeper: doesn't apply directly but reshapes ecosystem (alternative stores, browser choice screens).

## NIS2 (Dir. 2022/2555 — Cybersecurity)
- Transposition deadline Oct 2024 (many states late — verify national law). Covers **essential & important entities** in 18 sectors (energy, transport, banking, health, digital infra, cloud, data centers, ICT B2B, online marketplaces, etc.), generally medium+ (50+ staff / €10M+).
- Requirements: risk-management measures, **management-body accountability** (personal liability), incident reporting (**early warning 24h, notification 72h, final report 1 month**), supply-chain security, registration. Fines up to **€10M or 2%** (essential).
- **DORA** (Reg. 2022/2554) — financial-sector ICT resilience, applies Jan 2025 (third-party/oversight, testing, incident reporting).

## Data Act (Reg. 2023/2854) & Data Governance Act
- **Data Act** (applies Sept 2025): access to IoT/connected-product data for users, fairer B2B/B2C data sharing, cloud-switching/portability (reduce lock-in, phase out egress fees), interoperability, govt access in emergencies, unfair-contract-term controls.
- **Data Governance Act** (2022): data intermediaries, data altruism, public-sector data reuse.

## Payments: PSD2 / PSD3 + PSR
- **SCA (Strong Customer Authentication):** 2-factor for electronic payments (3DS2 for cards), exemptions (low-value, TRA, recurring).
- **Open banking:** licensed AISP/PISP access to accounts with consent.
- **E-money:** EMD2 for wallets/e-money issuers.
- **SEPA / Instant Payments Regulation (2024):** instant euro credit transfers, fee parity, IBAN-name verification.
- **PSD3 + PSR** proposed (replacing PSD2) — fraud liability, API improvements — verify status.
- **MiCA** (Reg. 2023/1114): crypto-asset markets — CASP authorization, stablecoin (ART/EMT) rules, fully applies Dec 2024.

## Consumer Protection
- **Consumer Rights Directive (CRD):** Pre-contract info, **14-day right of withdrawal** for distance/online sales (digital content: lose right only after consent + acknowledgment; refund within 14 days). Confirmation, "order with obligation to pay" button.
- **Unfair Contract Terms Directive (93/13);** **Unfair Commercial Practices Directive.**
- **Omnibus Directive (2022):** Fake-discount rules (show prior lowest 30-day price), fake-review bans, transparency of ranking/paid placement, marketplace disclosures; fines up to 4% turnover.
- **Digital Content Directive + Sale of Goods Directive:** conformity, **2-year legal guarantee**, updates obligation.
- **Geo-blocking Regulation:** no unjustified geo-discrimination.

## Tax
- **VAT:** Standard rates 17–27% by country (LU 17%, HU 27%). Digital/electronically-supplied services to EU consumers = VAT in **customer's country**.
- **VAT OSS / IOSS:** One-Stop-Shop single registration for cross-border B2C; IOSS for imported goods ≤€150.
- **€10,000/year** EU-wide micro-threshold for cross-border B2C digital — below = home-country rate; above = customer-country via OSS.
- **B2B reverse charge** for cross-border services (customer accounts for VAT).
- **VAT in the Digital Age (ViDA):** mandatory **e-invoicing + digital reporting** for intra-EU B2B phasing in ~2028–2030; several states already mandate domestic e-invoicing (Italy SdI now; France/Poland/Germany rolling out 2026–2027). Platform deemed-supplier rules for short-term rental/transport.
- National **Digital Services Taxes** (France/Italy/Spain/Austria ~3%) pending OECD Pillar One; **Pillar Two** 15% global minimum tax in effect for large groups (>€750M).
- **Customs/import:** EU customs union; €150 de-minimis duty threshold (proposed removal — verify); EORI number for importers.
- **Corporate tax** is national (IE 12.5%, HU 9%, DE ~30%, FR 25%); no EU-wide rate. Anti-tax-avoidance (ATAD), DAC reporting (DAC7 platform reporting of seller income).

## Employment
- **Highly member-state specific — ALWAYS get local counsel.** EU directives set floors.
- **Working Time Directive:** max 48 hrs/week average, 11h daily + 24h weekly rest, ≥4 weeks paid annual leave; recorded working time (*CCOO* ruling).
- Notice/severance vary widely: Germany 1–7 months + works-council/Kündigungsschutz, France strong dismissal protections + indemnités, Netherlands needs UWV/court approval.
- **Works councils / co-determination:** mandatory at thresholds (Germany Betriebsrat, EU-level European Works Councils for 1,000+ across 2+ states); information/consultation directive.
- **Transfer of undertakings (TUPE-equivalent / ARD):** employees transfer with terms on business sale.
- **Platform Work Directive (2024):** presumption of employment for gig workers, algorithmic-management transparency — transposing.
- **Pay Transparency Directive (transpose by 2026):** salary ranges in ads, reporting, gender pay-gap remedies.
- **Whistleblower Directive:** internal reporting channels (50+ employees).
- Employee data = GDPR (lawful basis, can't over-rely on consent given power imbalance).

## Product & Accessibility
- **CE marking:** conformity for regulated products (machinery, electronics/EMC, RED radio, toys, PPE, MDR medical devices, etc.).
- **GPSR (General Product Safety Regulation, applies Dec 2024):** all consumer products — safety, traceability, EU responsible person, online-marketplace duties, accident reporting.
- **European Accessibility Act (EAA, Dir. 2019/882) — applies 28 June 2025:** e-commerce, banking, e-books, ticketing, computers/OS, smartphones, ATMs/terminals must be accessible (de facto **WCAG 2.1 AA / EN 301 549**). Micro-enterprises (services) exempt. Enforcement + penalties per member state.
- **Web Accessibility Directive:** public-sector bodies' sites/apps → EN 301 549.

## Common Edge Cases
- Free B2C app with no EU entity but EU users — full GDPR + Art. 27 EU rep + cookie consent apply.
- Relying on "legitimate interest" for behavioral ads — generally invalid; consent + cookie banner required.
- US cloud processor — needs SCCs + TIA, or DPF self-certification (verify DPF validity post-litigation).
- Analytics like GA without proper config — Austrian/French/Italian DPAs found unlawful transfers; use consent + server-side/anonymization.
- AI CV-screening tool — high-risk under AI Act (Aug 2026) AND GDPR Art. 22 automated-decision rights.
- Auto-renewing subscription without 14-day withdrawal + Omnibus pricing — consumer-law breach.
- Selling connected hardware in EU — GPSR responsible person + CE + EAA accessibility + Data Act portability.
- Storing EU employee data on a US HRIS — same transfer rules as customer data (SCCs/DPF + TIA).
- Sending a marketing email to a "purchased list" — no consent, unlawful under ePrivacy + GDPR.
- A SaaS chatbot that doesn't disclose it's AI — AI Act transparency breach once limited-risk rules bite.

## Fines Quick-Reference (max, whichever higher)
| Regime | Cap |
|--------|-----|
| GDPR | €20M / 4% global turnover |
| AI Act (prohibited use) | €35M / 7% |
| DSA | 6% global turnover |
| DMA | 10% (20% repeat) |
| NIS2 (essential) | €10M / 2% |
| Consumer/Omnibus | 4% turnover (national) |
