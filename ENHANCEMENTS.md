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
| `frameworks/scenario-playbooks.md` | Extended from 20 playbooks/14 departments to **54 playbooks across 31 departments** — added tactical, do-it-today guides for all 17 new departments (Agents 31–47): Tier-1 launch, MEDDICC discovery call, integration/reseller deals, DevEx sprint, usability test, WTP study, price-increase rollout, activation/aha, growth experiment, modern data stack, data-incident, DSAR runbook, DPIA, secure offboarding, SSO/SCIM rollout, launch readiness/go-no-go, RAID unblock, API docs, i18n locale launch, investor update, bad-news comms, M&A diligence, RFP/vendor selection, SaaS renewal, and the deep-research existence-scan + dossier | ✅ |

## 4. System Wiring (so everything actually works)

| Change | Status |
|--------|--------|
| `SKILL.md` — updated agent + framework directories, counts, examples | ✅ |
| `SMART-LOADER.md` — routing table, scoring, phase plan, "what each agent produces" | ✅ |
| `references/agent-standards.md` — cross-reference table for all new agents | ✅ |
| `README.md` — updated tables, counts, structure | ✅ |
| `START-HERE.md` — updated agent catalog for free-tier guided mode | ✅ |
| New governance tiers added for Privacy (DPO) into authority hierarchy | ✅ |

## 5. Deep Research & Depth Doctrine (research-first, no surface scaffolding)

The system now researches before it recommends, and enforces depth on every agent.

| Addition | What it does | Status |
|----------|--------------|--------|
| **Agent 47 — Deep Research** | Runs an end-to-end market investigation on any feature/idea and returns an **exists-vs-novel verdict** with citations: "this already exists → refine it (competitor teardown + wedge)" or "white-space → no competition/citations found + why the niche is empty + how to validate." | ✅ |
| **`deep-research-protocol.md`** | The engine: auto-trigger conditions, idea decomposition into searchable objects, 8-layer source sweep, citation ledger with source tiering, an **adversarial anti-hallucination gate**, the verdict decision tree (A Established / B Emerging / C Adjacent / D White-space / E Inconclusive), competitor-teardown + refinement, the "why is it empty?" novelty test, a **Depth Rubric (L0 surface → L4 Mariana Trench)**, the **Honesty Doctrine** (absence of evidence ≠ proof; never fabricate), and a **Per-Agent Depth Map** giving all 48 agents domain-specific deep-research moves. | ✅ |
| **Depth Doctrine in `agent-standards.md`** | Every agent now inherits a mandatory **research-first gate** (Rule A) and **Depth Rubric self-grade ≥ L3** (Rule B), plus a no-fabrication rule and a "declare your tools" rule. Quality checklist updated with depth self-grade, citation, and no-fabrication checks. | ✅ |
| **Research gate wired into the flow** | `SKILL.md` Step 0 research gate; `SMART-LOADER.md` routing + new **Phase 0 (Research Gate)** before any product is designed; hardwired into Agent 02 (Discovery) and Agent 04 (PRD); navigator + START-HERE updated. | ✅ |

**How "every agent goes deep" actually works:** depth is enforced systemically, not by
bloating 48 files with boilerplate. The shared `agent-standards.md` (loaded with every
agent) makes research-first + the Depth Rubric mandatory; the protocol's Per-Agent Depth
Map defines exactly what "deep" means for each domain (e.g., Legal → real statutes/case
law/FTO, Finance → comparable-company multiples, Engineering → reference architectures +
benchmark numbers + real post-mortems). An agent that returns an uncited, edge-case-free,
"it depends" answer has failed the standard regardless of length.

**Honest limits:** the quality of a live "exists vs. novel" verdict depends on the
research tools available in the runtime. When `WebSearch`/`WebFetch` or the `deep-research`
skill are present, agents run real queries and cite real URLs. When they are not, the
protocol requires agents to **say so** and label market claims as hypotheses to verify —
never to fabricate competitors, statistics, or citations to manufacture confidence.

## 6. AI-Native Layer (LangGraph, RAG & modern AI across every department)

Brings the current AI-engineering stack into the system and applies it to all 48 departments.

| Addition | What it does | Status |
|----------|--------------|--------|
| **`ai-engineering-stack.md`** | The flagship technical reference: the L0→L5 maturity ladder (prompt→RAG→tools→workflow→agent→multi-agent), **RAG** deep-dive (chunking, embeddings, vector DBs, hybrid retrieval + RRF, reranking, query transforms, contextual retrieval, CRAG/self-RAG, agentic RAG, GraphRAG, RAGAS evals), **LangGraph** deep-dive (StateGraph, conditional edges/loops, checkpointing, human-in-the-loop, memory, multi-agent patterns) with an honest orchestrator comparison incl. Anthropic-native options (Agent SDK, Managed Agents, Tool Runner, MCP), a reference agentic-RAG architecture, production concerns (observability, evals-in-CI, guardrails, cost/latency, prompt caching), and the **OWASP LLM Top 10** risk surface | ✅ |
| **`ai-department-playbooks.md`** | "AI for every department" — a specific, grounded LLM/RAG/agent use case for **each of the 48 agents** (00–47) with the pattern, stack, and guardrail/metric, so every department gets a concrete AI upgrade without bloating each agent file | ✅ |
| Inline AI sections | Agent 29 (Modern GenAI & Agent Strategy), Agent 06 (AI-Native Architecture), Agent 38 (AI/Embeddings Data Pipeline), Agent 16 (LLM-Powered Analytics), Agent 17 (AI Support & Deflection), Agent 34 (AI-Assisted DevEx), Agent 09 (Securing AI Features / OWASP LLM Top 10), Agent 39 (Privacy in AI/LLM Systems) | ✅ |
| Wiring | SKILL.md (35 frameworks, AI triggers, routing, directory, v3.1.0), SMART-LOADER routing, agent-standards (every agent → AI playbooks), README/START-HERE/github-readme/navigator counts, ENHANCEMENTS | ✅ |

**How it stays accurate & safe:** the stack defaults to the latest Claude models
(Opus 4.8, Sonnet 5, Haiku 4.5) with adaptive thinking and MCP for integrations, and
flags version-sensitive claims with "verify current provider docs" (the GenAI stack moves
fast). Every LLM feature that touches untrusted input or personal data requires sign-off
from Agent 09 (Security) and Agent 39 (Privacy/DPO); Agent 29 owns responsible-AI
governance and the eval-first discipline. Absence of a guardrail or eval set is a failed AI feature.

---

*Every new agent inherits `references/agent-standards.md`, participates in the
KDR memory system, respects the cross-agent governance hierarchy, runs the
research-first Depth Doctrine, applies the AI Department Playbooks where useful, and
carries professional-review disclaimers where the domain is regulated.*
