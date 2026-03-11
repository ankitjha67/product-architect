# US Compliance Deep-Dive

## Data Privacy (No Federal Omnibus — State Patchwork)
- CCPA/CPRA (California): Right to know/delete/opt-out of sale. Applies if: >$25M revenue OR >100K consumers' data OR >50% revenue from selling data. CPPA enforces.
- Virginia VCDPA, Colorado CPA, Connecticut CTDPA, Utah UCPA, Texas TDPSA: Varying requirements, mostly opt-out models. More states adding annually.
- COPPA: Children under 13. Verifiable parental consent before collecting data. FTC enforces.
- HIPAA: Protected Health Information. Applies to covered entities + business associates. No direct-to-consumer app exemption unless receiving PHI from covered entity.
- FERPA: Student education records. Applies to schools receiving federal funding.
- GLBA: Financial data. Privacy notices + safeguard requirements for financial institutions.

## Payments
- PCI-DSS: Mandatory for any card processing. Levels based on transaction volume.
- State money transmitter licenses: Required for operating payment/wallet services. Each state separately. Expensive ($50K-500K per state). Timeline: 6-18 months. Alternatively: Partner with licensed entity.
- Federal: FinCEN registration for money services businesses (MSB). BSA/AML compliance.
- ACH: For bank-to-bank transfers. Nacha operating rules.
- Regulation E: Consumer protections for electronic fund transfers (error resolution, unauthorized transaction limits).

## Tax
- Federal income tax: 21% corporate rate. Quarterly estimated payments.
- State income tax: Varies 0-13.3% (no income tax: TX, FL, WA, NV, WY, SD, AK).
- Sales tax: Varies by state, county, city. Economic nexus: Typically >$100K revenue or >200 transactions in a state. Use Avalara/TaxJar for automation.
- R&D tax credit: Section 41 — 6-8% of qualifying research expenditures. Significant for software companies.
- QSBS: Section 1202 — up to $10M or 10x basis excluded from capital gains if held >5 years.
- 83(b) election: File within 30 DAYS of receiving restricted stock. Miss it = massive tax bill later.
- Transfer pricing: If international operations, arm's length documentation required.

## Employment
- At-will employment: Default in most states (except Montana). Can terminate for any non-discriminatory reason.
- FLSA: Minimum wage ($7.25 federal, higher in many states), overtime (1.5x after 40 hrs/week for non-exempt).
- I-9 verification: Every employee. E-Verify in some states.
- Workers' compensation: State-mandated insurance for workplace injuries.
- ADA: Reasonable accommodations for disabilities. Applies to employers with 15+ employees.
- Title VII: No discrimination based on race, color, religion, sex, national origin. 15+ employees.
- FMLA: 12 weeks unpaid leave for qualifying reasons. 50+ employees within 75 miles.
- State-specific: Paid family leave (CA, NY, NJ, etc.), salary transparency (CO, NY, CA), non-compete bans (CA, MN, etc.).

## Industry-Specific
- FDA: Food, drugs, medical devices, cosmetics. 510(k) for medical devices.
- FTC: Consumer protection, advertising standards, endorsement guidelines.
- FCC: Telecommunications, TCPA (telemarketing), CAN-SPAM (email).
- SEC: Securities registration, crowdfunding (Reg CF), accredited investor rules.
- CFPB: Consumer financial products regulation.
