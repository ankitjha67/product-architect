# Gap Analysis: product-architect vs agency-agents

A comparison of this repository against [msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents),
done to find every domain we do not yet cover and to plan the build that closes the gap.

## The two repositories are different in kind

| | product-architect (this repo) | agency-agents |
|---|---|---|
| Agents | 80, numbered 00 to 79 | 258 across 19 divisions |
| Philosophy | Depth-first reasoning system | Breadth-first persona catalogue |
| Median agent length | ~500 lines | 230 lines |
| Max agent length | 1,124 lines | 750 lines |
| Structure | SMART-LOADER routing, KDR memory, governance hierarchy, 36 frameworks | Flat catalogue, multi-tool export (Claude Code, Cursor, Codex, Gemini) |
| Shape of an agent | Role, Inputs, numbered domain sections, Decision Framework, Enterprise-Grade, Failure Modes, Organisational Edge Cases, Example, Output, Quality Standard | Persona: identity and memory, mission, critical rules, deliverables, communication style, success metrics |

The headline finding: **we are already deeper per agent.** Their median agent is roughly half the length of ours,
and our deepest files are 50 percent longer than their deepest. Matching their depth is not the work. The gap is
**breadth**: whole domains and specialisms we deliberately never built.

## Depth of their agents

258 agents. 62 are under 150 lines (thin), 101 are 150 to 300, 95 are 300 or more. Their deepest are Senior SecOps
Engineer (750), Threat Intelligence Analyst (644), Infrastructure Maintainer (618), Hospitality Guest Services (604),
Multi-Agent Systems Architect (601), Feishu Integration Developer (599), Workflow Architect (598), Real Estate
Buyer and Seller (597), Legal Compliance Checker (588), Support Responder (585), Supply Chain Strategist (583).

## What we already cover (no action)

Their product, finance, project-management, research, testing and most design and support divisions map cleanly onto
our existing agents. Examples: their Chief Financial Officer maps to our 18 Finance, Data Privacy Officer to 39
Privacy/DPO, ESG and Sustainability Officer to 27, Customer Success Manager to 17, Operations Manager to 19,
Recruitment Specialist to 60, Supply Chain Strategist to 46, M&A Integration Manager to 45, Pricing Analyst to 36,
Sales Engineer to 51, Accessibility Auditor to 78, Technical Writer to 42, Backend Architect to 65, Data Engineer to
38, DevOps Automator to 08, Frontend Developer to 50, Mobile App Builder to 48, AI Engineer to 49. Roughly 90 of
their 258 are covered.

## The real gaps

### A. Horizontal engineering and cross-functional roles (fit our "one product org" model, numbered 80+)

These are roles a large product organisation genuinely has that our roster lacks. They extend our identity cleanly
and become numbered agents 80 and up.

| New agent | Closest agency-agents source | Why it is a real gap |
|---|---|---|
| 80 API Platform Engineer | API Platform Engineer (163) | We have backend (65) but no owner of the public API as a product: versioning, deprecation, gateways, rate limits, developer contracts |
| 81 Identity & Access Engineering | Identity & Access Engineer (197) | AuthN/AuthZ, OAuth/OIDC/SAML, session, secrets, service-to-service. Distinct from Security (09) policy |
| 82 Network Engineering | Network Engineer (240) | CDN, DNS, load balancing, VPC, connectivity, latency at the network layer |
| 83 Database Reliability Engineering | Database Reliability Engineer (163) | The data tier as a reliability surface: replication, failover, backup/restore, query performance at scale |
| 84 Embedded, Firmware & IoT | Embedded Firmware (174), IoT Fleet (149) | Constrained devices, OTA update, fleet management. Nothing in our roster touches hardware software |
| 85 Blockchain & Web3 Engineering | Solidity (523), ZK Steward (212), Blockchain Security Auditor (464) | Smart contracts, on-chain systems, zero-knowledge, chain security. Entirely absent |
| 86 Streaming & Real-Time Media | Video Streaming (151), Realtime Collaboration (188) | Live video, WebRTC, low-latency media, collaborative editing |
| 87 Search & Relevance Engineering | Search Relevance Engineer (238) | Ranking, retrieval quality, relevance evaluation. Distinct from data science |
| 88 Knowledge Graph & Semantic Data | Knowledge Graph Engineer (368) | Ontologies, graph databases, entity resolution, semantic layers |
| 89 Voice & Conversational AI | Voice AI Integration (562) | ASR/TTS, dialogue systems, telephony, latency budgets for voice |
| 90 Desktop Application Engineering | Desktop App Engineer (205) | Native and cross-platform desktop. We have mobile, frontend, backend but not desktop |
| 91 RAG & AI Application Engineering | RAG Pipeline Engineer (438) | Retrieval-augmented generation as a product surface. We have the framework but no owning agent |
| 92 Multi-Agent Systems Architecture | Multi-Agent Systems Architect (601) | Orchestration, agent-to-agent protocols, tool routing. The architecture layer above single agents |

### B. Horizontal security, marketing and sales specialisms (numbered 93+)

| New agent | Source cluster | Why |
|---|---|---|
| 93 Offensive Security & Penetration Testing | Penetration Tester (399), AI-Gen Code Auditor (208) | Our 09 is defensive and broad; offensive testing is its own discipline |
| 94 Threat Intelligence & Detection (SOC) | Threat Intelligence (644), Threat Detection (535), Incident Responder (437), SecOps (750) | The detection-and-response side of security, a genuinely separate function |
| 95 Application & Product Security | Application Security Engineer (491), Cloud Security Architect (523) | AppSec and secure SDLC as a dedicated owner |
| 96 Performance & Paid Media | paid-media division (7 agents) | We have no paid acquisition owner: PPC, paid social, programmatic, ad creative, tracking |
| 97 SEO & Answer-Engine Optimization | SEO (371), AEO Foundations (265), Agentic Search Optimizer (314), AI Citation (173) | Organic search plus the new discipline of optimising for AI answer engines. Timely and absent |
| 98 Social & Channel Marketing | 15+ social channel agents incl. the full China cluster | Channel-specific playbooks (TikTok, LinkedIn, Reddit, Instagram) and APAC/China platforms (Douyin, WeChat, Xiaohongshu, Weibo, Bilibili) |
| 99 Lifecycle & Email Marketing | Email Marketing (250), Private Domain Operator (309) | Retention marketing, lifecycle, CRM messaging |
| 100 Sales Enablement & Deal Strategy | Deal Strategist (181), Discovery Coach (226), Sales Coach (272), Proposal Strategist (218) | The rep-facing enablement layer beneath our 32 Sales/RevOps |

### C. Industry verticals (new `verticals/` division, outside the numbered core)

These are not departments of one product organisation. They are separate industry practices, so they get a new
`verticals/<domain>/` tree rather than flat numbers, mirroring how a real agency runs industry practices alongside a
core team. Each is a small set of deep agents.

| Vertical | Agents to build | Source |
|---|---|---|
| `verticals/game-development/` | Game Designer, Level Designer, Narrative Designer, Economy Designer, Technical Artist, Game Audio | game-development division (6) |
| `verticals/gis-geospatial/` | Spatial Data Engineer, GeoAI/ML Engineer, Cartography Designer, Web GIS Developer, Remote Sensing & Drone Mapping, Geoprocessing | gis division (13) |
| `verticals/healthcare-clinical/` | Clinical Evidence, Medical Billing & Coding, Health Systems Strategy, Patient Services, Healthcare Compliance | healthcare (3) + specialized healthcare agents |
| `verticals/spatial-xr/` | XR Interaction Designer, Immersive Experience Developer, Spatial Platform Engineer (visionOS/Metal) | spatial-computing division (6) |
| `verticals/legal-practice/` | Client Intake, Document Review, Legal Billing & Practice Ops, Contract Lifecycle | specialized legal agents (3) |
| `verticals/real-estate/` | Buyer & Seller Representation, Transaction & Property Ops | Real Estate Buyer & Seller (597) |
| `verticals/financial-services/` | Loan & Mortgage Advisory, Insurance Advisory | Loan Officer (556) |
| `verticals/aec-built-environment/` | Civil Engineering, Master Planning & Urban Design | Civil Engineer (357), Master Plan Architect (158) |
| `verticals/academic-research/` | Quantitative & Statistical, Qualitative & Historical, Social Science lenses | academic division (6) |
| `verticals/service-industries/` | Hospitality Guest Services, Retail Operations | Hospitality (604), Retail Returns (567) |

### D. Deliberately not building (niche, low reuse, or platform-locked)

Platform-locked engineering agents (Drupal Performance, WordPress Shopping Cart, GaussDB, Feishu, WeChat Mini
Program, USWDS, Filament, Rust Refactoring) and single-purpose utilities (Resume Tailor, Document Generator, Report
Distribution, Meeting Notes, Data Consolidation) are intentionally skipped. They are either too narrow to carry a
full house-structure agent or already implied by a broader one we have. Where a broad agent should mention them, it
does so as a capability rather than a separate file.

## Build plan

- **Phase 1 (agents 80 to 92):** horizontal engineering specialisms. Fits current architecture, wired into
  SKILL.md, SMART-LOADER.md, README.md, START-HERE.md, references/github-readme.md, tools/navigator.jsx, CHANGELOG.md.
- **Phase 2 (agents 93 to 100):** horizontal security, marketing and sales specialisms. Same wiring.
- **Phase 3:** the `verticals/` tree, a new routing layer, and a validator extension so verticals are checked too.

Every new agent follows the house structure and the depth doctrine already enforced by `tools/validate_repo.py`:
Role, Inputs Required, numbered domain sections, Decision Framework, Enterprise-Grade, Failure Modes,
Organisational Edge Cases, a worked Example, Output and Quality Standard, at L3-plus depth with real numbers, named
tools and honest failure modes, and no fabricated facts.
