# Verticals: Industry Practices

The numbered agents in `agents/` model the departments of one product organisation. The verticals here are
something different: **industry practices** that a full-service agency runs alongside that core team. A game studio,
a GIS consultancy, a clinic, an XR lab, a law firm and a real estate brokerage are not departments of the same
company, so they do not belong in the flat 00-to-N numbering. They live here, grouped by domain.

A vertical agent still carries the full house structure and the same depth doctrine as a numbered agent: Role,
Inputs Required, numbered domain sections, a Decision Framework, an Enterprise-Grade section, Failure Modes,
Organisational Edge Cases, a worked Example, an Output artifact, and a Quality Standard. It still reasons through the
Enterprise Reasoning Protocol and names its edge cases, because a hospital, a law firm or a survey company is itself
a large organisation with sponsors, budgets, approval gates and reorganisations.

The difference is domain, not depth. A vertical agent speaks the language, standards, regulators, tools and failure
modes of its industry rather than of a generic software product org, and it cross-references the core agents where
the two meet (a clinic still needs Security, Privacy, Finance and Compliance from `agents/`).

## Domains

| Vertical | Agents |
|---|---|
| `game-development/` | Game Designer, Level Designer, Narrative Designer, Economy & Systems Designer, Technical Artist, Game Audio |
| `gis-geospatial/` | Spatial Data Engineer, GeoAI & ML Engineer, Cartography & Visualization, Web GIS Developer, Remote Sensing & Photogrammetry, Geoprocessing & Analysis |
| `healthcare-clinical/` | Clinical Evidence & Informatics, Medical Billing & Coding, Health Systems Strategy, Patient Access & Services, Healthcare Compliance & HIPAA |
| `spatial-xr/` | XR Interaction Designer, Immersive Experience Developer, Spatial Platform Engineer, XR Production & Content |
| `legal-practice/` | Client Intake & Matter Management, Document Review & E-Discovery, Legal Billing & Practice Operations, Contract Lifecycle & Drafting |
| `real-estate/` | Buyer & Seller Representation, Transaction & Property Operations |
| `financial-services/` | Lending & Mortgage Advisory, Insurance Advisory & Underwriting Support |
| `aec-built-environment/` | Civil & Structural Engineering, Master Planning & Urban Design |
| `academic-research/` | Quantitative & Statistical Research, Qualitative & Historical Research, Social Science & Field Research |
| `service-industries/` | Hospitality Guest Services, Retail Operations & Merchandising |

## How verticals are loaded

The router in `SMART-LOADER.md` sends an industry request to the matching vertical folder. A vertical agent may pull
in core numbered agents as secondary context: a `legal-practice` matter still needs `agents/39-privacy-dpo.md` and
`agents/11-compliance-ethics.md`, a `healthcare-clinical` build still needs `agents/09-security.md` and
`agents/72-regulatory-affairs-quality.md`, and a `game-development` studio still needs `agents/18-finance.md` and
`agents/14-launch-gtm.md`. The vertical owns the domain; the core owns the company mechanics underneath it.

## Disclaimer

Every vertical touches a regulated or licensed profession (medicine, law, financial advice, engineering stamping,
real estate agency). All content here is decision support, not professional advice. Legal, medical, financial,
engineering and licensing claims are principles and process, stated with a "verify current with qualified [counsel /
clinician / adviser / licensed professional]" caveat, and point at `../references/DISCLAIMER.md`. Nothing here
substitutes for a licensed professional in the relevant jurisdiction.
