# Product Architect — Enhancement Roadmap

This document lists every enhancement made to close the gap between the original
31-agent system and how the **biggest product-development companies actually
operate** (Google, Amazon, Microsoft, Meta, Stripe, Atlassian, Salesforce,
Netflix, Apple, and high-growth startups). Each item maps to a real
organizational function, discipline, or operating ritual.

Status legend: ✅ done · 🚧 in progress · ⬜ planned

---

## 1. Missing Departments / Agents (commercial, technical, corporate)

Real product companies run far more than 31 functions. The following were
absent as first-class agents and have been added at department-head depth.

| # | Agent | Why it exists in real companies | Status |
|---|-------|----------------------------------|--------|
| 31 | **Product Marketing (PMM)** | Owns positioning, messaging, launch tiers, competitive intel, sales enablement — distinct from demand-gen marketing | ✅ |
| 32 | **Sales & Revenue Operations (RevOps)** | B2B sales motion, MEDDICC/qualification, CRM hygiene, forecasting, quota, comp plans, deal desk | ✅ |
| 33 | **Business Development & Partnerships** | Strategic alliances, channel, reseller/OEM, co-sell, integration partners | ✅ |
| 34 | **Developer Relations & DevEx** | DevRel, advocacy, SDKs, docs portal, sandbox, developer funnel — core to API/platform companies | ✅ |
| 35 | **User Research & Insights** | Generative + evaluative research, ResearchOps, panels, usability, JTBD interviews — distinct from Discovery | ✅ |
| 36 | **Pricing & Monetization** | Packaging, price metric, value-based pricing, discounting governance, monetization experiments | ✅ |
| 37 | **Growth (PLG & Growth Engineering)** | Activation, retention, referral loops, experimentation velocity, lifecycle, growth model ownership | ✅ |
| 38 | **Data Engineering & Platform** | Pipelines, warehouse/lakehouse, data contracts, streaming, reverse-ETL, semantic layer | ✅ |
| 39 | **Privacy & Data Protection (DPO)** | Privacy-by-design, DPIA/RoPA, consent, DSAR fulfillment, cross-border transfers — distinct from Security/Compliance | ✅ |
| 40 | **IT & Corporate Engineering** | Internal tools, identity/SSO, device/MDM, SaaS management, helpdesk, zero-trust corp network | ✅ |
| 41 | **Technical Program Management (PMO)** | Cross-team delivery, dependency management, program rituals, launch coordination, risk burndown | ✅ |
| 42 | **Content, Docs & Technical Writing** | Product docs, API reference, in-product content, content design, knowledge base, style guide | ✅ |
| 43 | **Localization & Internationalization** | l10n/i18n operations, locale strategy, translation management, market readiness | ✅ |
| 44 | **Investor Relations** | Ongoing investor comms, board reporting, fundraising data room, earnings (post-IPO) — distinct from Governance | ✅ |
| 45 | **Corporate Development & M&A** | Buy/build/partner, target sourcing, diligence, deal structuring, integration thesis | ✅ |
| 46 | **Procurement & Supply Chain** | Vendor sourcing, contracts, SaaS spend, supplier risk, logistics for physical goods | ✅ |

## 2. Missing Frameworks / Operating Systems

| Framework | What it adds | Status |
|-----------|--------------|--------|
| **OKRs & Goal-Setting** | North Star metric, metrics tree, OKR cascade, weekly/quarterly cadence | ✅ |
| **Pricing & Packaging** | Price-metric selection, packaging tiers, Van Westendorp, willingness-to-pay, discount matrix | ✅ |
| **Growth Model** | AARRR, growth loops vs funnels, PLG motion, activation/retention math | ✅ |
| **Sales Playbook** | Sales stages, MEDDICC, ICP, discovery scripts, objection handling, enterprise motion | ✅ |
| **Data Governance** | Data contracts, quality SLAs, lineage, catalog, ownership, classification | ✅ |
| **Incident Management** | Severity levels, on-call, paging, comms, blameless postmortems, runbooks | ✅ |
| **Partnership Framework** | Partner tiers, deal structures, co-sell mechanics, partner economics | ✅ |
| **Brand & Messaging** | Positioning statement, messaging house, voice & tone, narrative | ✅ |
| **Customer Journey** | Lifecycle map, moments of truth, retention/expansion loops, journey instrumentation | ✅ |

## 3. Deepened Existing Content

| File | Enhancement | Status |
|------|-------------|--------|
| `references/compliance/india.md` | Expanded: DPDP rules, RBI/SEBI, GST, labour codes, sector regulators | ✅ |
| `references/compliance/us.md` | Expanded: state privacy patchwork, sectoral (HIPAA/GLBA/COPPA), FTC, employment | ✅ |
| `references/compliance/eu.md` | Expanded: GDPR mechanics, AI Act, DSA/DMA, NIS2, e-Privacy | ✅ |
| `references/compliance/uk.md` | Expanded: UK GDPR/DPA, ICO, FCA, employment, online safety | ✅ |
| `references/compliance/sea.md` | Expanded: per-country PDPA, data localization, fintech licensing | ✅ |
| `frameworks/coverage-audit.md` | Expanded into a real gap-analysis instrument across all departments | ✅ |
| `frameworks/risk-matrix.md` | Expanded: scoring rubric, register template, treatment strategies | ✅ |

## 4. System Wiring (so everything actually works)

| Change | Status |
|--------|--------|
| `SKILL.md` — updated agent + framework directories, counts, examples | ✅ |
| `SMART-LOADER.md` — routing table, scoring, phase plan, "what each agent produces" | ✅ |
| `references/agent-standards.md` — cross-reference table for all new agents | ✅ |
| `README.md` — updated tables, counts, structure | ✅ |
| `START-HERE.md` — updated agent catalog for free-tier guided mode | ✅ |
| New governance tiers added for Privacy (DPO) into authority hierarchy | ✅ |

---

*Every new agent inherits `references/agent-standards.md`, participates in the
KDR memory system, respects the cross-agent governance hierarchy, and carries
professional-review disclaimers where the domain is regulated.*
