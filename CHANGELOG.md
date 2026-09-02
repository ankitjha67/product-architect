# Changelog

All notable changes to Product Architect. Format follows [Keep a Changelog](https://keepachangelog.com/);
versions follow semver as declared in `SKILL.md` metadata.

## [6.0.0] - 2026-09

Prompted by a gap analysis against the agency-agents catalogue (see
`docs/AGENCY-AGENTS-GAP-ANALYSIS.md`). The finding was that this repo is already
deeper per agent, so the work was breadth: whole domains not previously covered.

### Added
- **21 new horizontal agents (80-100)**, each at full house-structure depth:
  - Engineering platform: 80 API Platform, 81 Identity & Access, 82 Network, 83
    Database Reliability, 84 Embedded/Firmware/IoT, 85 Blockchain & Web3, 86
    Streaming & Real-Time Media, 87 Search & Relevance.
  - AI and data systems: 88 Knowledge Graph & Semantic Data, 89 Voice &
    Conversational AI, 90 Desktop Application, 91 RAG & AI Application
    Engineering, 92 Multi-Agent Systems Architecture.
  - Security specialisms: 93 Offensive Security & Penetration Testing, 94 Threat
    Intelligence & Detection, 95 Application & Product Security.
  - Demand and revenue: 96 Performance & Paid Media, 97 SEO & Answer-Engine
    Optimization, 98 Social & Channel Marketing, 99 Lifecycle & Email Marketing,
    100 Sales Enablement & Deal Strategy.
- **A new `verticals/` tree** for industry practices that a full-service agency
  runs alongside the product org, each agent at the same house-structure depth
  and each carrying the professional-advice disclaimer for its regulated domain:
  - game-development (6): game, level, narrative and economy design, technical
    artist, game audio.
  - gis-geospatial (6): spatial data, GeoAI, cartography, web GIS, remote
    sensing, geoprocessing.
  - healthcare-clinical (5): clinical evidence, medical billing and coding,
    health systems, patient access, HIPAA compliance.
  - spatial-xr, legal-practice, real-estate, financial-services,
    aec-built-environment, academic-research and service-industries follow.
- `docs/AGENCY-AGENTS-GAP-ANALYSIS.md`: the full comparison and build plan.

### Changed
- All asserted counts updated to 101 numbered agents across SKILL.md,
  SMART-LOADER.md, README.md, START-HERE.md, references/github-readme.md and
  tools/navigator.jsx, with the verticals wired into routing and the directory.

## [5.0.0] - 2026-08

### Added
- **16 new department agents (64-79)**, each 665 to 790 lines with full house structure
  (Role, Inputs Required, Decision Framework, Enterprise-Grade, Failure Modes,
  Organisational Edge Cases, a worked Example, Output and Quality Standard). Each is
  positioned explicitly against its neighbours rather than overlapping them:
  - **Support and platform engineering:** 64 Customer Support (reactive queue, tiering,
    deflection economics, staffing maths, distinct from 17 Customer Success),
    65 Backend and Distributed Systems (consistency, idempotency, tail latency, the
    server-side sibling to 48/49/50), 66 Enterprise Architecture (reference
    architectures, tech radar, ARB, TIME portfolio), 67 Developer Productivity and
    Internal Platform (DORA/SPACE, build economics, golden paths).
  - **Infra economics and resilience:** 68 FinOps and Cloud Economics (allocation,
    unit economics, commitments, AI workload cost), 69 Business Continuity and
    Enterprise Resilience (BIA, RTO/RPO, DR patterns, crisis command).
  - **Corporate security and workplace:** 70 Corporate and Physical Security (site and
    people threat, access, travel, insider threat), 71 Workplace, Facilities and Real
    Estate (portfolio, lease economics, space planning, HSE).
  - **Regulated product and hardware:** 72 Regulatory Affairs and Quality Management
    (QMS, design controls, submissions, CAPA), 73 Hardware Engineering and Manufacturing
    (NPI stage gates, BOM, DFM, certification, RMA).
  - **Comms and vendor risk:** 74 Internal Communications (channel architecture,
    cascades, change and reorg comms), 75 Third-Party and Vendor Risk (tiering,
    diligence, evidence review, fourth-party risk).
  - **Expansion, ops and insight:** 76 Market Expansion and Country Launch (market
    selection, entry mode, entity, payments), 77 Design Ops and Research Ops (design
    system governance, participant panel, repository), 78 Accessibility and Inclusive
    Design (conformance floor, testing pyramid, VPAT), 79 Data Science and
    Experimentation (causal inference, experiment platform, SUTVA, holdouts).
- **Three-layer Edge-Case Doctrine** with a new `frameworks/enterprise-edge-cases.md`
  (organisational edge cases), the routing and session edge cases in `SMART-LOADER.md`,
  and a per-function Organisational Edge Cases section in every agent: 1,135 rows across
  all 80 agents plus a 54-entry shared catalogue.

### Changed
- **House structure completed across the whole roster.** An audit found 46 of the
  original 64 agents were missing standard sections (a Decision Framework, Failure Modes,
  Enterprise-Grade, Inputs Required or Quality Standard). All 80 agents now carry the
  full set. Core agents were deepened substantially in the process (Security 09 to 1,124
  lines, Engineering 06 to 966, DevOps 08 to 916), alongside deeper A/B testing, roadmap
  and MVP frameworks.
- All asserted counts updated to 80 agents across SKILL.md, SMART-LOADER.md, README.md,
  START-HERE.md, references/github-readme.md and tools/navigator.jsx.

### Fixed
- Stripped all em dashes repo-wide and made the rule mechanical in the validator.
- `tools/validate_repo.py` now also enforces agent house structure, catches numbered
  sections that read out of order, and distinguishes a genuinely broken internal link
  from a repo-root path written inside a subdirectory.

## [4.0.0] - 2026-07

### Added
- **16 new department agents (48–63)**, each written deep from birth with a Decision
  Framework, Enterprise-Grade section, failure modes, and a worked reasoning example -
  ~7,000 lines. These are real departments with distinct depth, not sub-topics of
  existing agents:
  - **Engineering specialisms:** 48 Mobile Engineering (release trains, app-store
    reality, crash/ANR budgets, MASVS), 49 ML Engineering/MLOps (baseline ladder,
    training-serving skew, deploy patterns, drift), 50 Frontend & Web Platform
    (rendering strategy, Core Web Vitals as a contract, design-system implementation).
  - **Customer-facing delivery:** 51 Solutions Engineering (POC gates, security
    questionnaires), 52 Professional Services (SOW discipline, migration, TTFV),
    53 Customer Education (certification, academy platforms), 54 Community.
  - **Revenue systems:** 55 Billing & Monetization Engineering (entitlements, metering,
    proration, dunning, tax engines, rev-rec hooks).
  - **Finance specialisms:** 56 Revenue Accounting & Controller (ASC 606, close, audit),
    57 Tax (indirect tax, PE risk, transfer pricing), 58 Treasury (liquidity, counterparty
    risk, FX).
  - **Risk & talent:** 59 Internal Audit & Enterprise Risk (three lines, SOX/ICFR),
    60 Talent Acquisition (funnel math, structured interviews), 61 Total Rewards
    (job architecture, bands, equity).
  - **Executive & AI assurance:** 62 Chief of Staff & BizOps (operating system, decision
    rights), 63 AI Evaluation & Red-Teaming (golden sets, judge calibration, CI gates,
    red-teaming, the ship/hold safety gate).
- Agent 47 (Deep Research) deepened 132 → 227 lines: research-depth tiering by decision
  reversibility with explicit stop rules, competitive-intelligence ethics and legal
  bright lines, dossier shelf life, and failure modes.

### Changed
- All 16 wired end to end: SKILL.md directory + quick routing, SMART-LOADER routing table
  and "what each agent produces", agent-standards cross-reference, README, START-HERE
  directory, github-readme tables, navigator `agentMap`, and a row each in
  `ai-department-playbooks.md`. Counts moved to 64 agents / 122 files everywhere.

## [3.2.1] - 2026-07

### Added
- **README `## About` section** - the repo previously opened straight into install
  instructions with no explanation of what it is. Now states the premise (48 department
  heads, not one generalist), what makes it different, who it's for, and the honest
  scope limits.
- **`.github/` scaffolding**: a CI workflow running the validator on every push and PR
  (a red check blocks merge), a PR template mirroring the CONTRIBUTING quality bar and
  wiring checklist, and issue templates for content gaps and bugs.

### Changed
- **`tools/validate_repo.py` upgraded** - now also verifies every relative markdown
  link resolves and every code fence is balanced, alongside the existing count,
  numbering, and doc-consistency checks. One source of truth for CI and local runs.

### Fixed
- Unbalanced code fence in `frameworks/ai-engineering-stack.md` (a stray closing fence
  after the RAG pipeline table) - caught by the new validator check on its first run.

## [3.2.0] - 2026-07

### Added
- **Enterprise Reasoning Protocol** in `references/agent-standards.md`, inherited by all
  48 agents: frame → options (≥2, incl. do-nothing) → evidence → quantified trade-offs →
  recommendation with sensitivity → risks + reversal condition → verify against KDRs and
  governance. Plus six enterprise-mode lenses (compliance & audit, scale/SLA, integration,
  procurement/security review, change management, 3-year TCO).
- **Per-agent Decision Frameworks, Enterprise-Grade sections, failure modes, and worked
  reasoning examples** added in place to the 25 agents that predated the bar:
  00–03, 05, 07, 08, 10, 12–17, 19–28, 30.
- Repo scaffolding: `CONTRIBUTING.md` (conventions + wiring checklist), `CHANGELOG.md`.

## [3.1.0] - 2026-07

### Added
- **AI-native layer**: `frameworks/ai-engineering-stack.md` (L0–L5 maturity ladder, RAG
  deep-dive incl. hybrid retrieval/rerank/GraphRAG/evals, LangGraph orchestration,
  Anthropic-native options, OWASP LLM Top 10) and `frameworks/ai-department-playbooks.md`
  (a concrete LLM/RAG/agent use case for every one of the 48 departments).
- Inline AI sections on Agents 06, 09, 16, 17, 29, 34, 38, 39.

## [3.0.0] - 2026-06

### Added
- **17 new agents (31–47)**: Product Marketing, Sales & RevOps, Partnerships, DevRel,
  User Research, Pricing & Monetization, Growth, Data Engineering, Privacy/DPO,
  IT & Corporate Engineering, Technical Program Management, Content & Docs,
  Localization & i18n, Investor Relations, Corporate Development & M&A,
  Procurement & Supply Chain, and **Deep Research** (exists-vs-novel market verdicts).
- **10 new frameworks**: OKRs, pricing & packaging, growth model, sales playbook, data
  governance, incident management, partnerships, brand & messaging, customer journey,
  and the **Deep Research Protocol** (research-first gate, citation ledger,
  anti-hallucination verdict engine, Depth Rubric L0→L4).
- **Scenario playbooks extended** 20 → 54 tactical guides across 31 departments.
- Governance hierarchy extended to 5 levels (Privacy/DPO override added).
- Extended full-product phase plan (Phase 0 research gate; phases G–K).
- `tools/validate_repo.py` structure validator (counts, numbering, doc-consistency).
- Country compliance deep-dives (IN/US/EU/UK/SEA) expanded ~3x; coverage-audit and
  risk-matrix rebuilt as full instruments.

## [2.0.0] and earlier - 2026 H1

- Original system: 31 agents (00–30), 23 frameworks, SMART-LOADER routing, KDR memory,
  4-level governance, compliance deep-dives, navigator UI, Anthropic skill-guide
  compliance pass, DISCLAIMER framework.
