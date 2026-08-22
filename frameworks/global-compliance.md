# Global Compliance Framework

> **⚠️ DISCLAIMER:** Every rate, threshold, deadline, and penalty below moves with
> legislation, regulator guidance, and case law. Treat this file as a map of what to
> ask about, never as the current legal position. Confirm each specific figure, clock,
> and mechanism with qualified counsel licensed in that market before relying on it.
> See [DISCLAIMER.md](../references/DISCLAIMER.md) and the deep-dives in
> `references/compliance/`.

## Purpose
Country-specific regulatory requirements for data privacy, payments, consumer protection,
and industry regulations. ALWAYS ask the user for target markets, then apply relevant sections.

## Data Privacy Laws by Region

### Asia-Pacific
| Country | Law | Key Requirements | Penalty |
|---------|-----|-----------------|---------|
| **India** | DPDP Act 2023 | Consent, purpose limitation, data minimization, DPO, breach notification to DPBI, children's data (verifiable parental consent <18), data localization for certain categories | Up to ₹250 Cr |
| **China** | PIPL 2021 | Consent, data localization mandatory, cross-border transfer requires security assessment, DPO, separate consent for sensitive data | Up to 5% annual revenue |
| **Japan** | APPI | Consent for third-party transfer, data breach notification, cross-border rules, opt-out right | Up to ¥100M |
| **South Korea** | PIPA | Explicit consent, data localization for certain sectors, DPO mandatory, biometric data rules | Up to 3% revenue |
| **Singapore** | PDPA | Consent, purpose limitation, DPO, breach notification <3 days, data portability | Up to S$1M |
| **Australia** | Privacy Act | 13 APPs, breach notification <30 days, cross-border disclosure rules | Up to A$50M |
| **Indonesia** | PDP Law 2022 | Consent, data localization, DPO, breach notification 3×24 hours | Up to 2% annual revenue |

### Europe
| Country/Region | Law | Key Requirements | Penalty |
|----------------|-----|-----------------|---------|
| **EU/EEA** | GDPR | Lawful basis, consent, DPO (for large-scale processing), DPIA, 72-hour breach notification, data portability, right to be forgotten, cross-border via SCCs/adequacy | Up to 4% global revenue or €20M |
| **UK** | UK GDPR + DPA 2018 | Mirrors GDPR post-Brexit, ICO as regulator, UK-specific adequacy decisions | Same as GDPR |
| **Switzerland** | nFADP 2023 | Similar to GDPR, extraterritorial scope, DPO recommended, breach notification ASAP | Criminal penalties |

### Americas
| Country | Law | Key Requirements | Penalty |
|---------|-----|-----------------|---------|
| **US (Federal)** | No federal omnibus law | FTC Act (deceptive practices), COPPA (children <13), HIPAA (health), GLBA (finance), FERPA (education) | Varies by regulation |
| **US (California)** | CCPA/CPRA | Right to know/delete/opt-out of sale, data minimization, sensitive data consent, CPPA enforcement | $7,500/intentional violation |
| **US (Other states)** | Virginia VCDPA, Colorado CPA, Connecticut CTDPA, etc. | Varying: consent, opt-out rights, data protection assessments | Varies |
| **Brazil** | LGPD | Similar to GDPR, lawful basis, DPO, breach notification, ANPD enforcement | Up to 2% revenue (R$50M cap) |
| **Canada** | PIPEDA / Quebec Law 25 | Consent, accountability, DPO, breach reporting, DPIA, cross-border rules | Up to C$10M |

### Middle East & Africa
| Country | Law | Key Requirements | Penalty |
|---------|-----|-----------------|---------|
| **UAE** | PDPL 2021 | Consent, purpose limitation, cross-border restrictions, DPO, breach notification | Up to AED 20M |
| **Saudi Arabia** | PDPL 2023 | Consent, data localization, DPO, cross-border via adequacy or safeguards | Up to SAR 5M |
| **South Africa** | POPIA | Similar to GDPR, consent, DPO (Information Officer), cross-border restrictions | Up to ZAR 10M |
| **Nigeria** | NDPR | Consent, DPO, breach notification, data protection audit | Up to 2% annual revenue |
| **Kenya** | DPA 2019 | Consent, DPO, cross-border restrictions, registration with Data Commissioner | Up to KES 5M |

## Payment Regulations by Market

```
INDIA:
- Payment gateways: Razorpay, Cashfree, PayU, Juspay (all RBI-regulated)
- UPI: Mandatory support for mass-market products. Free for merchant transactions
- Card tokenization: Mandatory (RBI directive - no storing card numbers)
- Wallet: RBI PPI license required for own wallet
- BNPL: RBI digital lending guidelines apply
- COD: Still 30-40% of e-commerce - plan for it
- International payments: FEMA regulations, purpose codes required

US:
- Payment gateways: Stripe, Square, Braintree, Adyen
- PCI-DSS: Mandatory for any card processing
- State money transmitter licenses: Required for wallet/payment services (expensive, complex)
- ACH: For bank-to-bank transfers
- Regulation E: Consumer protections for electronic fund transfers

EU:
- Payment gateways: Stripe, Adyen, Mollie
- PSD2/SCA: Strong Customer Authentication required (3DS mandatory)
- SEPA: Standardized bank transfers
- EMD2: E-money directive for wallets
- Open Banking: PSD2 enables third-party payment initiation

UK:
- Similar to EU (PSD2 equivalent via UK PSR)
- FCA authorization for payment services
- Open Banking via OBIE standards

SOUTHEAST ASIA:
- Multiple payment methods per country (GrabPay, GoPay, OVO, Dana, ShopeePay)
- QR code payments dominant (PromptPay Thailand, DuitNow Malaysia)
- Cash-heavy: COD still significant in Philippines, Vietnam, Indonesia

MIDDLE EAST:
- Mada (Saudi Arabia), NOL (UAE), BENEFIT (Bahrain) - local card networks
- Apple Pay/Google Pay adoption growing
- Islamic finance considerations (no interest/riba in financial products)

AFRICA:
- Mobile money dominant: M-Pesa (Kenya, Tanzania), MTN MoMo (West Africa)
- Cash-heavy: COD or cash-on-pickup important
- Airtime as currency in some markets
```

## Consumer Protection

```
UNIVERSAL:
□ Clear pricing (no hidden fees revealed at checkout)
□ Accurate product descriptions (no false advertising)
□ Right to refund within cooling-off period (varies: 7 days EU, 14 days UK, varies India)
□ Cancellation rights (subscriptions must be cancellable)
□ Grievance redressal mechanism

INDIA-SPECIFIC:
□ Consumer Protection Act 2019: E-commerce rules, no manipulation of prices, no fake reviews
□ Grievance Officer appointment (mandatory for platforms with significant user base)
□ Product liability: Manufacturer/seller liable for defective products
□ MRP display mandatory for physical goods

EU-SPECIFIC:
□ Consumer Rights Directive: 14-day withdrawal right for online purchases
□ Digital Content Directive: Conformity guarantees for digital products/services
□ Omnibus Directive: Transparency on price reductions, review authenticity
□ DSA (Digital Services Act): Content moderation obligations for platforms

US-SPECIFIC:
□ FTC Act: No deceptive or unfair practices
□ CAN-SPAM: Email marketing compliance (unsubscribe, physical address, honest subject)
□ TCPA: Telemarketing/SMS consent requirements
□ State-specific: California, New York, Illinois have additional protections
```

## Tax Compliance

```
INDIA: GST (0%, 5%, 12%, 18%, 28% depending on product category, HSN/SAC code required, e-invoicing for B2B)
EU: VAT (varies 17-27% by country, VAT MOSS for digital services, reverse charge for B2B)
US: Sales tax (varies by state, county, city - use Avalara/TaxJar for automation)
UK: VAT (20% standard, registration threshold £85,000)
AUSTRALIA: GST (10%, registration threshold A$75,000)
CANADA: GST/HST/PST (varies by province)
SINGAPORE: GST (9%, registration threshold S$1M)
JAPAN: Consumption tax (10%)

DIGITAL SERVICES TAX (emerging):
- India: 2% equalization levy on e-commerce revenue
- France/UK/Italy: Various DST rates on digital advertising, marketplace revenue
- Many countries adopting OECD Pillar One/Two frameworks
```

## Compliance Checklist Generator

When the user specifies target markets, generate a combined checklist:
1. Data privacy requirements for each market
2. Payment method and regulation requirements for each market
3. Consumer protection requirements for each market
4. Tax obligations for each market
5. Industry-specific regulations for each market
6. Accessibility requirements for each market

Prioritize by: Legal risk (penalties), Market size (revenue impact), Complexity (effort to comply).

## Compliance Operating Model (who owns what)

```
FOUR OWNERS, ONE MAP. Compliance fails when each assumes another owns it.
  Agent 10 LEGAL      interpretation of law, contracts, licences, regulator correspondence
  Agent 11 COMPLIANCE the programme: policies, training, monitoring, the obligation
                      register, control testing, audits, whistleblowing channel
  Agent 39 PRIVACY    personal data: lawful basis, RoPA, DSRs, DPIAs, transfer mechanisms
  Agent 57 TAX        registrations, filings, indirect-tax determination, DST exposure

RACI, NEW-MARKET LAUNCH (R=Responsible A=Accountable C=Consulted I=Informed):
| Activity                         | 10  | 11  | 39  | 57  | Product |
|----------------------------------|-----|-----|-----|-----|---------|
| Entity + licence strategy        | A/R | C   | I   | C   |   I     |
| Obligation register for market   | C   | A/R | C   | C   |   I     |
| Privacy assessment + RoPA update | C   | C   | A/R | I   |   C     |
| Evidence pack + audit trail      | I   | A/R | R   | R   |   C     |
| Regulator contact                | A/R | R   | R   | R   |   I     |

ESCALATION: 11 and 39 hold override authority in their domains. Product cannot outvote a
regulatory blocker; it can change scope, change market, or sign a dated, named risk acceptance.
CADENCE: weekly launch triage · monthly register review · quarterly control testing (59) ·
annual policy and training refresh.
```

## The Obligation Register

```
ONE ROW PER OBLIGATION that applies to YOUR product in YOUR markets, traced from the
feature that triggers it to the control that satisfies it and the evidence that proves it.

ROW SCHEMA (example): ID OB-014 · trigger: marketing email at signup · markets: EU/UK/US/IN
  regime: electronic marketing and consumer rules (verify current with counsel) · requirement:
  consent or a valid exemption, working unsubscribe · status: Met | Gap (dated) | Accepted risk

FIRST PASS, 2 DAYS: list every capability touching personal data, money, minors, health,
credit, content, advertising, employment, or goods → ask which regime plausibly applies per
market → have counsel confirm applicability (never guess scope) → map each obligation to one
owner and one control → an obligation with no control is a Gap with a date, not a footnote.

MAINTENANCE:
  ✓ New feature → PM completes the trigger questionnaire → new rows, or a signed "no new
    obligations" from Agent 11. There is no silent third option
  ✓ New market → re-test applicability from scratch. Obligations are not portable
```

## Compliance Calendar & Horizon Scanning

```
THE CALENDAR - every row dated, owned, reminded 30 days out, with evidence stored:
| Item                                              | Typical cadence       | Owner |
|---------------------------------------------------|-----------------------|-------|
| Indirect tax filings (GST/VAT/sales tax)          | monthly or quarterly  | 57    |
| Licence renewals (payments, sector)               | per licence terms     | 10/11 |
| Corporate income tax, statutory accounts, entity filings | annual per market| 57/10 |
| Access reviews, control testing, policy + training| quarterly / annual    | 11/59 |
| Pen test, SOC 2 / ISO windows, accessibility re-test| annual              | 09/05 |

HORIZON SCANNING:
  SOURCES  regulator sites and newsletters per market · gazettes · counsel alerts · industry
           associations · payment and cloud provider compliance bulletins
  OUTPUT   per item: what changed, which register rows it hits, effective date, work needed,
           owner, and the date work must START to make the deadline
  ⚠ Never take an effective date from a headline; phase-ins are where teams get caught
```

## Market-Entry Compliance Checklist (generalizes to any country)

```
Run before committing engineering to a market: several items carry 4-12+ week lead times
and sit on the critical path (see 30-day-launch-engine.md). Verify every threshold locally.

1. ENTITY & PRESENCE
  ☐ Local entity, branch, or cross-border sale; local director or resident agent required?
  ☐ Permanent-establishment risk from staff, servers, or agents (Agent 57 assesses)
2. TAX REGISTRATION
  ☐ Indirect tax registration threshold, and whether digital-services rules make you liable
    from the first sale; withholding on payouts to sellers, creators, and contractors
  ☐ Invoice and e-invoicing mandates; marketplace deemed-supplier rules (who remits?)
3. DATA PROTECTION
  ☐ Which law applies, does it reach you extraterritorially, and is a local representative
    or DPO appointment or authority registration required?
  ☐ Localization or residency rules per data category; the transfer mechanism out
  ☐ Notice, consent, and rights (access, delete, opt-out) actually built in-product
4. SECTOR LICENCE
  ☐ Does the activity need authorization (payments, lending, insurance, health, education,
    gambling, telecom, transport)? Assume yes until counsel says otherwise; check timeline,
    capital requirements, and whether a licensed partner model removes the need
5. EMPLOYMENT
  ☐ Hiring vehicle: entity, EOR, or contractor. Misclassification is the usual failure
  ☐ Mandatory benefits, notice periods, working time, leave, required internal committees
6. CONSUMER LAW
  ☐ Price display (tax-inclusive?), fee transparency, cancellation and refund clocks
  ☐ Auto-renewal rules; advertising, endorsement, and review-authenticity rules
  ☐ Local-language terms, notices, and support; grievance or ADR route
7. ACCESSIBILITY
  ☐ Which standard applies (commonly a WCAG level, sometimes via procurement or sector);
    buyers requiring a conformance report; remediation plan and re-test cadence (05, 11)
8. GO / NO-GO
  ☐ Obligation register built; gaps closed or accepted in writing; evidence pack opened;
    local counsel retained; named internal owner per workstream
```

## Cross-Border Data Transfers (principle, not a rate card)

```
THE PRINCIPLE IS STABLE; THE MECHANISMS ARE NOT. Most modern privacy regimes restrict
sending personal data abroad unless one of a small set of conditions is met:
  1. the destination is formally recognized as offering adequate protection, or
  2. an approved contractual or intra-group instrument binds the recipient, or
  3. a narrow case-specific derogation applies (regulators treat these as exceptional and
     unsuitable for routine flows), or 4. the data stays in-country under localization

BUILD FOR THESE REGARDLESS OF WHICH MECHANISM IS CURRENT:
  ✓ Map every onward transfer: support tools, analytics, backups. Remote access IS a transfer
  ✓ Apply supplementary measures where a destination-risk assessment demands them: keys
    held in-region, pseudonymization, tight access control, full logging

⚠ Adequacy findings, clause sets, certification frameworks, and localization rules change and
are litigated. Verify every corridor with qualified counsel before launch and annually after.
```

## Sector Overlays (these stack ON TOP of the baseline)

```
Baseline = privacy + consumer + tax + accessibility. Confirm scope with sector counsel.

FINTECH / PAYMENTS / LENDING - licensing or partnering with a licensed institution; an
  AML/CFT programme (KYC, sanctions screening, transaction monitoring, suspicious-activity
  reporting); safeguarding of customer funds; card-scheme rules and PCI-DSS; lending
  disclosure, pricing, and collections rules. Owners: 10, 11, 13, 55, 58.

HEALTH / WELLNESS - health data is typically a special category with stricter consent and
  security duties; clinical claims can turn software into a regulated medical device;
  provider-side rules flow contractual, retention, and interoperability duties to you.
  No clinical claim ships without regulatory review. Owners: 10, 11, 39.

EDUCATION / EDTECH - student records usually sit under a distinct regime, with duties
  flowing to you contractually from the institution; consent may rest with the school or
  parent, not the learner; profiling and advertising to students is commonly restricted;
  accessibility expectations are higher for public buyers. Owners: 11, 39, 53.

CHILDREN'S AND TEEN PRODUCTS - age thresholds differ by market; verifiable parental consent
  is required in several regimes; age assurance must be proportionate to risk. Design codes
  in some markets require high-privacy defaults, no nudges toward weaker settings, limits on
  profiling and behavioral advertising, geolocation off by default, and extra duties on
  contests, purchases, and contact features. Owners: 11, 12, 39.

ALSO OVERLAY-BEARING: insurance, gambling, alcohol, firearms, crypto-assets, telecom,
mobility, food, gig platforms, and AI in regulated use cases (Agents 29, 63).
```

## Compliance Evidence & Audit Trail

```
Evidence is what a regulator, auditor, or enterprise buyer accepts. Produce it as a
by-product of operating, never reconstructed after the request arrives.

KEEP PER OBLIGATION: the versioned policy with approver and date · proof the control ran
(logs, tickets, timestamped exports, sign-offs) · training completion · exceptions and risk
acceptances with approver and expiry · decisions NOT to act, with reasoning and who decided.

PRODUCT SURFACES THAT MUST EMIT EVIDENCE:
  ☐ Consent: exact wording version shown, timestamp, mechanism, and withdrawal event
  ☐ Rights requests: received, identity verified, actioned, completed, each dated
  ☐ Age or identity checks and privileged admin actions: actor, method, result, timestamp
  ☐ Pricing, fee, and terms changes: the version and effective date shown to each user

PRINCIPLES:
  ✓ Append-only and time-stamped. An editable spreadsheet is not evidence
  ✓ Retention follows the longest applicable rule, defined per market; give auditors scoped
    access without exposing production data
  ✓ Run one evidence fire drill a year: pick 5 obligations, produce proof within 48 hours.
    Whatever you cannot produce is a gap, and it goes on the register
```

## Breach & Incident Notification (the clocks differ per market)

```
THE PRINCIPLE: most privacy regimes require notifying a regulator, and sometimes affected
individuals, when a breach crosses a risk threshold. Sector rules (financial, health, telecom,
critical infrastructure) add SEPARATE notifications on SHORTER clocks; contracts add more.

WHAT DIFFERS BY MARKET - map it before you need it, not during a SEV1:
  · the clock length, and what starts it (awareness? confirmation? by whom?)
  · who must be told: regulator, individuals, sector supervisor, partners, exchange

BUILD THIS TABLE NOW; verify each row with local counsel; review annually:
| Market | Regulator | Trigger/threshold | Clock + what starts it | Notify individuals? | Portal | Counsel |

OPERATIONAL RULES:
  ✓ Assume the SHORTEST clock in your footprint governs your internal process
  ✓ The clock usually runs from awareness: define what "aware" means and guarantee a support
    agent's report reaches the DPO the same day
  ✓ Privacy assessment (39) runs in PARALLEL with containment (08). Wire the notification
    decision into the SEV1 runbook in incident-management.md
  ✓ Record the assessment even when you decide NOT to notify. That record is the defence
⚠ Never state an hour count from memory. Confirm each market's current deadline with
qualified counsel and keep it in the table above.
```

## Vendor & Processor Compliance Flow-Down

```
If a vendor processes personal data, moves money, or performs a regulated function for you,
their failure is generally your exposure to the regulator and the customer.

INTAKE, BEFORE CONTRACTING (Agents 46, 09, 39, 11):
  ☐ What data do they receive, at what sensitivity, processed and stored where?
  ☐ Security posture: current certification or report, pen-test summary, incident history
  ☐ Sub-processor list, advance notice of changes, and a right to object
  ☐ Regulated status, business continuity, exit and deletion plan, insurance limits

CONTRACT FLOW-DOWN (Agent 10 drafts; the exact clause set is jurisdiction-specific):
  ☐ Process only on documented instructions; purpose limitation
  ☐ Breach notice to you on a clock SHORTER than your own regulatory deadline
  ☐ Deletion or return at termination with certification, flowed down to sub-processors

ONGOING:
  ✓ Off-boarding is a control: revoke access, confirm deletion, keep the certificate
  ✓ Keep a processor inventory reconciling to the RoPA (39) and the obligation register; a
    vendor missing from either is an audit finding. Re-assess on any material change
```

## Professional Review Requirement (extends references/DISCLAIMER.md)

```
⚠ NOTHING IN THIS FILE IS LEGAL, TAX, OR REGULATORY ADVICE.
  · Statutes are amended, thresholds indexed, penalties revised, guidance reissued. Any
    number here may already be stale
  · Applicability is fact-specific: the same feature can be in scope in one market and out
    of scope in the next; enforcement priorities shift with the regulator
BEFORE RELYING ON ANY OF IT:
  ☐ Qualified counsel licensed in each target market confirms applicability, the current
    figure or deadline, and the mechanism you plan to use
  ☐ A tax adviser confirms registration thresholds, rates, and filing obligations
  ☐ Re-verify annually and on any material change to product, data, vendors, or markets
  ☐ Record who advised, when, and on what facts. Advice is fact-bound and date-bound
```
