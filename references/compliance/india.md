# India Compliance Deep-Dive

> **⚠️ DISCLAIMER:** Laws change. This reflects early 2026 status. Always verify
> with local legal counsel before relying on any specific requirement.

## Data Protection: DPDP Act 2023 + Draft Rules 2025
- Status: Act passed Aug 2023; draft DPDP Rules published Jan 2025, finalization pending - verify current text with counsel
- Scope: Digital personal data processed in India, plus extraterritorial processing for offering goods/services to data principals in India
- Consent: Free, specific, informed, unconditional, unambiguous with clear affirmative action; itemized notice in English + 22 Eighth Schedule languages
- Consent Managers: Registered with Data Protection Board (DPB), min net worth ₹2 Cr (per draft Rules); single interoperable dashboard for give/manage/withdraw consent
- Withdrawal: Must be as easy as giving consent; processing stops, consequences borne by principal
- Purpose limitation: Use ONLY for the purpose for which consent given; delete when purpose served / consent withdrawn
- Legitimate uses (no consent needed): voluntary provision, state benefits/subsidies, legal obligation, medical emergency, employment purposes, disaster
- Children (<18): Verifiable parental consent required; NO behavioral tracking or targeted advertising directed at children; draft Rules allow exemptions for healthcare/education providers (verify)
- Persons with disability: Guardian consent for those with legal guardians
- Data Fiduciary obligations: accuracy, security safeguards, breach notification, erasure, grievance redressal, publish DPO/contact
- Significant Data Fiduciary (SDF): Notified by govt based on volume/sensitivity/risk to sovereignty/electoral democracy. Extra duties: appoint DPO based in India + reporting to board, independent Data Auditor, periodic DPIA + audit
- Data Principal rights: access (summary of processing), correction/completion/erasure, grievance redressal, nominate (on death/incapacity)
- Grievance Officer: Mandatory; respond within prescribed period (draft Rules ~90 days; verify)
- Breach notification: To DPB AND to each affected principal "without delay" - intimation of breach description, mitigation, contact (draft Rules prescribe format)
- Cross-border: Permitted by default EXCEPT to countries on a govt blacklist (negative-list model). Sector regulators (e.g., RBI) may impose stricter localization
- Penalties: Up to ₹250 Cr per instance for security-safeguard failure; ₹200 Cr for breach-reporting / children failures; ₹50 Cr others; principal duty breaches up to ₹10,000
- Entity: Data Protection Board of India (DPBI) - adjudication, digital-by-design; appeals to TDSAT
- Interaction: Overrides parts of IT Act SPDI Rules 2011 once fully in force; SPDI Rules still relevant in transition
- Notice content (draft Rules): itemized description of personal data + purpose + how to exercise rights + how to complain to DPB; available in English + Eighth Schedule languages
- Data retention (draft Rules): erase personal data after purpose served unless legal retention required; e-commerce/social-media/gaming intermediaries with large user bases face fixed retention/erasure timelines (verify thresholds)
- Processor (Data Processor) processes on behalf of fiduciary under contract; fiduciary remains accountable
- No statutory "data localization" under DPDP itself (negative-list transfer model) - BUT sectoral mandates (RBI payments, insurance, telecom) impose storage-in-India; reconcile both
- Consent for existing users: notice must be given "as soon as reasonably practicable" for data collected before the Act for continued processing
- Open question: interaction of DPDP children rules with platforms (age-verification mechanism unspecified) - verify with counsel

## IT Rules 2021 (Intermediary Guidelines & Digital Media Ethics)
- Due diligence: Publish rules/privacy policy/user agreement; inform users of prohibited content; remove unlawful content within 36 hrs of court/govt order
- Grievance Officer (India-based): Acknowledge complaint within 24 hrs, resolve within 15 days; certain content (non-consensual nudity etc.) within 24 hrs
- Significant Social Media Intermediary (SSMI, >50 lakh / 5M users): Chief Compliance Officer, Nodal Contact Person, Resident Grievance Officer - all India-resident; monthly compliance report; traceability of first originator (messaging)
- Grievance Appellate Committees (GAC): Users can appeal grievance-officer decisions
- Safe harbor (Sec 79 IT Act) conditional on due diligence

## Payments & Fintech: RBI
- Payment Aggregator (PA) / Payment Gateway (PG): PA needs RBI authorization under PA/PG guidelines (2020); min net worth ₹15 Cr at application, ₹25 Cr by end of 3rd FY; cannot store card data; escrow with scheduled commercial bank; KYC of merchants. PA-CB (cross-border) framework added 2024
- Card tokenization: MANDATORY since 1 Oct 2022 - no storage of actual card numbers (PAN) by merchants/PA/PG; only card networks + issuers store; CoFT tokens used
- Data localization (RBI circular 6 Apr 2018): ALL payment system data stored ONLY in India; foreign-leg copy of cross-border txns permitted; data to be stored within 24 hrs; system audit report to RBI
- Account Aggregator (AA): NBFC-AA license; consent-based financial data sharing via standardized consent artefact; AA cannot store/use data, only conduit
- KYC Master Direction (2016, periodically amended): CDD, V-CIP (video KYC), periodic updating (low/medium/high risk = 10/8/2 yrs), CKYCR upload, beneficial owner identification
- Digital Lending Guidelines (Sept 2022, DLG/FLDG 2023): Loan disbursal/repayment only between borrower and RE bank accounts (no pass-through pools); no automatic credit-limit increase without consent; cooling-off period; Key Fact Statement (KFS) with APR; LSP/DLA disclosures; data minimization, no borrower-data access beyond need
- FLDG (First Loss Default Guarantee): Capped at 5% of loan portfolio; only in approved forms (cash deposit / bank guarantee / fixed deposit lien); RE must recognize NPA regardless
- Prepaid Payment Instruments (PPI / wallets): PPI Master Direction; full-KYC vs min-KYC (₹10,000 cap, no cash-out); interoperability via UPI/cards mandated
- BNPL: Treated under digital lending; credit-line-on-UPI now permitted via banks
- UPI: NPCI specifications; zero MDR on UPI (P2M for RuPay/UPI); 3rd-party app provider (TPAP) 30% volume cap (deadline extended; verify)
- NBFC: Registration if financial activity is principal business (50-50 test); SBR scale-based regulation tiers (Base/Middle/Upper/Top)
- Settlement: UPI near-real-time; cards/NEFT/RTGS per network/RBI windows

## Securities & Wealth: SEBI
- Investment Adviser (IA) / Research Analyst (RA): SEBI registration required to advise/recommend securities; RA Regulations amended 2024/2025 (verify thresholds)
- Stock broker / depository participant: SEBI + exchange membership
- Mutual fund distribution: AMFI ARN registration; execution-only platforms (EOP) framework 2023 for direct plans
- Portfolio Managers (PMS): min ₹50 lakh client investment; AIF for pooled (Cat I/II/III), min ₹1 Cr investor commitment
- Account Aggregator + SEBI: data sharing for securities accounts under FSDC umbrella
- Finfluencer rules (2024): Registered intermediaries barred from associating with unregistered finfluencers

## Tax
### GST
- Rates: 0 / 5 / 12 / 18 / 28% (+ cess on luxury/sin goods). GST 2.0 rate rationalization under discussion - verify current slabs
- Registration: Mandatory if turnover >₹40L (goods) / ₹20L (services) [₹20L / ₹10L special-category states]; mandatory regardless for inter-state supply, e-commerce operators, RCM liability, casual taxable persons
- Place of supply: Services to registered person = location of recipient; to unregistered = location of recipient if address on record else supplier. OIDAR / digital services to unregistered Indian consumers taxable in India
- Reverse Charge Mechanism (RCM): Recipient pays GST on notified supplies (import of services, GTA, legal services from advocates, director services, etc.)
- Input Tax Credit (ITC): Available on inputs used for taxable supplies; blocked credits (Sec 17(5)) - motor vehicles, food/beverage, club membership; supplier must file GSTR-1 and tax paid (matching via GSTR-2B); ITC time-barred after Nov 30 of next FY
- E-invoicing: Mandatory B2B if turnover >₹5 Cr (threshold lowered over time); IRN + QR from IRP
- E-way bill: For goods movement >₹50,000
- TCS by e-commerce operators: 0.5% (0.25% CGST + 0.25% SGST) on net taxable supplies (reduced from 1%; verify current rate)

### TDS / TCS (Income Tax) - common rates
| Section | Nature | Rate |
|---------|--------|------|
| 192 | Salary | Slab rate |
| 194C | Contractor/sub-contractor | 1% (indiv/HUF), 2% (others) |
| 194J | Professional/technical fees | 10% (2% for technical) |
| 194H | Commission/brokerage | 2% (reduced from 5%; verify) |
| 194I | Rent (plant/machinery 2%; land/building 10%) | 2% / 10% |
| 194O | E-commerce operator on participant sales | 0.1% |
| 194Q | Purchase of goods >₹50L | 0.1% |
| 195 | Payments to non-residents | DTAA/Act rate |
| 206C(1H) | TCS on sale of goods >₹50L | 0.1% |
- Equalization levy 2% on non-resident e-commerce supply WITHDRAWN w.e.f. 1 Aug 2024; 6% levy on online advertising also being phased - verify

### Startup / corporate tax
- Corporate rate: 22% (Sec 115BAA, no incentives) + surcharge/cess (~25.17%); 15% for new manufacturing (115BAB); MAT 15%
- Startup tax holiday: Sec 80-IAC - 100% deduction any 3 of first 10 yrs (DPIIT-recognized, incorporation by sunset date - extended to 31 Mar 2030; verify)
- Angel tax: Sec 56(2)(viib) ABOLISHED for all investors w.e.f. AY 2025-26 (Finance Act 2024)

## Companies Act 2013
- Incorporation: SPICe+ form via MCA; PAN/TAN/EPFO/ESIC/GSTIN/bank in one; DIN for directors
- Private Ltd: min 2 directors (≥1 resident in India ≥182 days), 2 members, max 200 members; OPC for single founder
- ROC filings: AOC-4 (financials) + MGT-7/7A (annual return) within 30/60 days of AGM; DIR-3 KYC annually; DPT-3, MSME-1, BEN-2 (beneficial owner)
- Board: Min 4 meetings/yr, max gap 120 days; women director for prescribed companies; AGM within 6 months of FY end (first within 9 months)
- Statutory auditor: Appointed within 30 days of incorporation; rotation for listed/large
- CSR (Sec 135): If net worth ≥₹500 Cr OR turnover ≥₹1,000 Cr OR net profit ≥₹5 Cr - spend 2% of avg net profit (last 3 yrs); CSR committee; unspent (ongoing project) to special account within 30 days
- Related-party transactions (Sec 188): Board / shareholder approval; arm's length + ordinary course exemptions; register in MBP-4
- Deposits, loans to directors (185/186), significant beneficial ownership (SBO) all regulated

## FEMA / FDI
- Routes: Automatic (no prior approval) vs Government (approval from sectoral ministry/DPIIT)
- Sectoral caps (illustrative; verify FDI Policy current): 100% automatic - most software/IT, e-commerce marketplace (NOT inventory-based B2C), manufacturing; 74% insurance (auto up to 74%); 49% then approval - broadcasting content, defence (74% govt route above); 100% govt - multi-brand retail (51%, conditions, several states opt out); banking private 49% auto/74% approval
- E-commerce: Marketplace model 100% auto; inventory-based B2C FDI prohibited; FDI marketplace cannot influence price / hold >25% vendor sales via group entity
- Pricing & reporting: FC-GPR (equity issue) within 30 days; FC-TRS (transfer); valuation at/above fair value (entry), at/below (exit) for non-residents
- Press Note 3 (2020): Investments from countries sharing land border with India (China, Pakistan, Bangladesh, etc.) require govt approval regardless of sector/route - beneficial ownership lookthrough
- ODI (Overseas Direct Investment): FEM (Overseas Investment) Rules/Regulations 2022; financial commitment limits, round-tripping restrictions relaxed (2 layers allowed)
- Downstream investment: Investment by FDI-funded Indian company into another is indirect FDI - must comply with caps/conditions; reporting in form DI

## Labour Codes (4 new Codes)
- Status as of early 2026: Codes passed (2019-2020) but NOT fully notified/in force nationally; states drafting rules - verify implementation
- Code on Wages 2019: Universal min wage, floor wage, timely payment, equal remuneration
- Industrial Relations Code 2020: Standing orders threshold raised to 300 workers; retrenchment/layoff approval; fixed-term employment; trade union recognition
- Code on Social Security 2020: Gig/platform workers brought in; social security fund; EPF/ESI consolidation
- OSH Code 2020: Single registration/license; working conditions, contract labour
- Until notified, existing acts apply: Factories Act, EPF Act, ESI Act, Payment of Wages, Minimum Wages, Contract Labour, etc.

## Employment (current law)
- PF (EPF): Mandatory for establishments with 20+ employees; 12% employer + 12% employee of basic+DA (wage ceiling ₹15,000 for mandatory)
- ESI: Mandatory if 10+ employees (some states 20+) and wages ≤₹21,000/month; 3.25% employer + 0.75% employee
- Gratuity: After 5 yrs continuous service; 15 days' wages per completed year
- POSH Act 2013: Internal Committee mandatory at 10+ employees; annual report to District Officer
- Shops & Establishment Act: STATE-specific - registration window, working hours, weekly off, leave, women's night-shift rules vary (e.g., Karnataka, Maharashtra Shops Act, Delhi). Register typically within 30 days
- Professional Tax: State-specific (Maharashtra, Karnataka, WB, TN, etc.), max ₹2,500/yr; not levied in some states
- Maternity Benefit Act: 26 weeks paid leave; crèche facility at 50+ employees

## Consumer Protection
- Consumer Protection Act 2019: CCPA (Central Consumer Protection Authority) - class actions, product liability, penalties for misleading ads + celebrity endorsements
- E-Commerce Rules 2020 (under CPA): Mandatory grievance officer (ack 48 hrs, resolve 1 month); no manipulating prices/unfair trade; country of origin display; no flash-sale fraud; sellers' details disclosure; cancellation/refund policy; consent must be express (no pre-ticked boxes); marketplace vs inventory e-commerce distinctions
- Dark patterns: CCPA Guidelines for Prevention & Regulation of Dark Patterns 2023 - 13 specified dark patterns prohibited (false urgency, basket sneaking, confirm-shaming, drip pricing, subscription traps, etc.)
- Legal Metrology (Packaged Commodities) Rules: MRP, net quantity, manufacturer details on packaging
- Misleading advertisements: CCPA Guidelines 2022 - no surrogate ads, bait ads; disclaimers must be legible; endorser due-diligence; penalty up to ₹10L (₹50L repeat) + endorsement ban up to 3 yrs
- Influencer/endorsement disclosure: "Endorsements Know-hows" (DoCA 2023) - material connection must be disclosed (#ad/#sponsored)
- ODR (online dispute resolution) + e-Daakhil portal for consumer complaints; pecuniary jurisdiction: District ≤₹50L, State ₹50L–₹2 Cr, National >₹2 Cr

## Sector / Industry Regulators
- FSSAI: Food license - Basic registration (<₹12L turnover), State license (₹12L–₹20 Cr), Central license (>₹20 Cr / import-export / e-commerce)
- IRDAI: Insurance license; regulatory sandbox; web aggregator / corporate agent / insurance broker registrations
- CDSCO: Medical devices classified Class A/B/C/D by risk; drugs/cosmetics under Drugs & Cosmetics Act; new Drugs Rules; online pharmacy norms evolving
- BIS: Mandatory certification (ISI mark) for notified products; CRS registration for electronics (compulsory registration scheme)
- TRAI / DLT (TCCCPR 2018): Mandatory DLT registration of sender, header, content templates for bulk/transactional SMS; consent scrubbing for promotional; revised TCCCPR 2025 norms - verify
- RERA: Real estate project + agent registration (state authorities)
- Other: MeitY (data/IT policy), DGFT (import-export IEC), Spectrum/DoT (telecom license), Petroleum/Explosives (PESO)

## State-wise / Operational Nuances
- Shops & Establishment, Professional Tax, Labour Welfare Fund, stamp duty all vary by state
- GST registration needed per state where you have a "fixed establishment" or supply from
- Some states require separate trade license (municipal), fire NOC, pollution consent (CPCB/SPCB)

## Common Edge Cases
- Storing card data "temporarily" for retries - prohibited; use network tokens only
- Foreign SaaS billing Indian consumers - GST OIDAR registration + DPDP applicability even without local entity
- Investor from land-border country via SPV in Singapore - Press Note 3 beneficial-ownership lookthrough still triggers approval
- Treating gig workers as "non-employees" - Social Security Code + state gig-worker laws (e.g., Rajasthan, Karnataka) may impose welfare cess; misclassification risk
- Sending OTP/transactional SMS without DLT template registration - messages blocked by telcos
- Children's age-gating by self-declaration - DPDP requires *verifiable* parental consent; mechanism unclear, verify with counsel
- Cross-border data transfer to a US/EU cloud region while RBI payments data must stay India-only - segregate payment system data
