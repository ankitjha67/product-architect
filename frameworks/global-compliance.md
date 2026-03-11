# Global Compliance Framework

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
- Card tokenization: Mandatory (RBI directive — no storing card numbers)
- Wallet: RBI PPI license required for own wallet
- BNPL: RBI digital lending guidelines apply
- COD: Still 30-40% of e-commerce — plan for it
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
- Mada (Saudi Arabia), NOL (UAE), BENEFIT (Bahrain) — local card networks
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
US: Sales tax (varies by state, county, city — use Avalara/TaxJar for automation)
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
