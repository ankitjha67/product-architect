---
name: product-architect
description: Complete product development system with 48 agents and 35 frameworks. Use when the user wants to build a product, write a PRD, plan an MVP or roadmap, design an app, research a market or check whether a feature already exists or is novel, do competitive analysis, run a security audit, build a financial model, plan hiring, launch, set up operations, prepare for IPO, or write a compliance policy. Also triggers on market research, does this exist, product marketing, positioning, pricing, packaging, sales, RevOps, partnerships, developer relations, user research, growth, PLG, data engineering, data governance, privacy, DPO, DSAR, incident management, OKRs, program management, docs, localization, investor relations, M&A, procurement, RAG, LangGraph, AI agents, LLM features, vector database, embeddings, unit economics, user personas, SOP, or checklist for X. Do NOT use for general knowledge questions, coding tutorials, or creative writing unrelated to product development.
license: MIT
compatibility: Works on Claude.ai, Claude Code, and API. No external dependencies. Enhanced with anti-slop-design skill for UI/UX.
metadata:
  author: ankitjha67
  version: "3.1.0"
  category: product-development
  tags: [product-management, startup, prd, strategy, compliance, finance, operations, hiring, launch, saas, marketplace]
  repository: https://github.com/ankitjha67/product-architect
---

# Product Architect

48 specialized agents covering every department from solo founder Day 0 to IPO.
35 frameworks with tactical playbooks, compliance guides, process maps, and a
modern AI-engineering stack (LangGraph, RAG, agents) applied across every department.

## Depth Promise: Research-First, Never Surface-Level

This system goes deep "until the Mariana Trench." Before recommending building
ANY feature, product, or bet, agents run the **Deep Research Protocol**
(`frameworks/deep-research-protocol.md`, owned by Agent 47): they investigate the
market end to end and return a grounded verdict — **"this already exists, here are
the competitors + citations, refine it"** or **"this is white-space, no competition
or citations found in this niche"** (with the honest caveat that absence of evidence
is not proof of novelty). Every agent inherits this via `references/agent-standards.md`
and must grade its output L3+ on the Depth Rubric. Agents never fabricate a company,
statistic, study, patent, or URL; when live-search tools are unavailable they say so
and label market claims as hypotheses.

## Critical: Read SMART-LOADER.md First

Before loading any agent files, consult `SMART-LOADER.md`. It contains:
- Request classification and agent routing (which agents to load)
- Context budget rules (never load more than 5 agents per turn)
- Multi-intent decomposition (handling complex requests)
- KDR memory system (Key Decision Records that survive chat compaction)
- Conflict detection protocol (what to do when agents disagree)

## Instructions

### Step 0: Research Gate (for any build/bet)

If the request is to build a feature/product, validate an idea, or make a market/
pricing/architecture bet, load `agents/47-deep-research.md` +
`frameworks/deep-research-protocol.md` FIRST. Establish whether it already exists
(cite competitors → refine) or is white-space (no citations found → say so + why it's
empty) BEFORE designing the solution. Then proceed to Step 1. For pure questions,
checklists, or continuations, skip the gate but still apply the Depth Rubric.

### Step 1: Route the Request

Read `SMART-LOADER.md` to classify the request and identify which agents to load.

```
QUICK ROUTING:
"Write a PRD"           → agents/04-prd.md + frameworks/prd-framework.md
"Design an app"         → agents/05-design.md (+ anti-slop-design skill)
"Product roadmap"       → agents/02-discovery.md + agents/03-strategy.md
"Financial model"       → agents/18-finance.md
"Security audit"        → agents/09-security.md + agents/11-compliance-ethics.md
"Marketing plan"        → agents/15-marketing-sales.md + frameworks/30-day-launch-engine.md
"How to start"          → frameworks/founders-playbook.md
"Checklist for [X]"     → frameworks/universal-checklists.md
"Positioning/messaging" → agents/31-product-marketing.md + frameworks/brand-messaging.md
"Pricing/packaging"     → agents/36-pricing-monetization.md + frameworks/pricing-packaging.md
"Sales motion/RevOps"   → agents/32-sales-revops.md + frameworks/sales-playbook.md
"Partnerships"          → agents/33-partnerships-bizdev.md + frameworks/partnership-framework.md
"Growth/PLG"            → agents/37-growth.md + frameworks/growth-model.md
"User research"         → agents/35-user-research.md
"Developer relations"   → agents/34-developer-relations.md + agents/30-platform-ecosystem.md
"Docs/tech writing"     → agents/42-content-docs.md
"Localization/i18n"     → agents/43-localization-i18n.md + frameworks/accessibility-i18n.md
"Data pipelines"        → agents/38-data-engineering.md + frameworks/data-governance.md
"Privacy/DSAR/DPO"      → agents/39-privacy-dpo.md + references/compliance/*.md
"Internal IT/SSO"       → agents/40-it-corporate-engineering.md
"Program management"    → agents/41-technical-program-management.md
"OKRs/goals"            → frameworks/okr-goal-setting.md
"Incident/on-call"      → frameworks/incident-management.md + agents/08-devops-sre.md
"Investor updates"      → agents/44-investor-relations.md
"M&A/acquisition"       → agents/45-corporate-development.md + frameworks/physical-ops-pmi.md
"Procurement/vendors"   → agents/46-procurement-supply-chain.md
"Customer journey"      → frameworks/customer-journey.md + agents/17-customer-success.md
"LangGraph/RAG/AI agent"→ frameworks/ai-engineering-stack.md + agents/29-data-ai-strategy.md + agents/06-engineering.md
"AI feature/LLM/embed"  → frameworks/ai-engineering-stack.md + frameworks/ai-department-playbooks.md
"AI for [department]"   → frameworks/ai-department-playbooks.md
"Does this exist?"      → agents/47-deep-research.md + frameworks/deep-research-protocol.md
"Is this novel?"        → agents/47-deep-research.md + frameworks/deep-research-protocol.md
"Market research"       → agents/47-deep-research.md + agents/02-discovery.md
"Build [any feature]"   → agents/47-deep-research.md FIRST (research gate), then route
"Full product"          → Phased execution (see SMART-LOADER.md Phase Plan)
```

### Step 2: Load and Execute

Load the primary agent file, then apply quality standards from
`references/agent-standards.md` which contains:
- Quality protocol (before/during/after checklist for every agent)
- Iterative refinement loop (draft → self-review → refine → deliver)
- Cross-reference table (which frameworks support which agents)
- Standard example format and error handling patterns

```
LOADING PRIORITY:
1. SMART-LOADER.md (routing — always)
2. Primary agent (produces the deliverable)
3. Relevant framework (template/structure — see agent-standards.md cross-reference table)
4. Secondary agent (validation — if budget allows)
```

### Step 3: Enforce Cross-Agent Governance

When multiple agents are active, apply the authority hierarchy:

```
Level 5 (highest): Agent 11 (Compliance) — OVERRIDE on legal/regulatory risk
Level 4: Agent 39 (Privacy/DPO) — OVERRIDE on personal-data processing & rights
Level 3: Agent 09 (Security) — OVERRIDE on security vulnerabilities
Level 2: Agent 18 (Finance) — VETO on budget/cost violations
Level 1: Agent 00 (Chief Reviewer) — VETO on quality/consistency
```

Note: Privacy (39) and Compliance (11) are adjacent authorities. When a question is
about *whether* data may be processed at all (lawful basis, consent, rights, transfers),
Privacy leads. When it is about *which statute/regulator* governs and broader legal/
regulatory exposure, Compliance leads. If they disagree, the stricter control wins.

If two agents produce conflicting recommendations:
1. STOP — do not proceed with either
2. STATE the conflict explicitly
3. APPLY the hierarchy (higher authority wins)
4. DOCUMENT in KDR with decision number
5. FLAG for user review

### Step 4: Output Key Decision Records

After every phase, output a structured KDR block capturing all decisions,
specs, open items, and artifacts. KDRs survive chat compaction.
Full KDR format is in `SMART-LOADER.md`.

## Agent Directory

Audit: `00-chief-reviewer` `01-proactive-advisor`
Product: `02-discovery` `03-strategy` `04-prd` `05-design` `06-engineering`
Build: `07-testing-qa` `08-devops-sre`
Protect: `09-security` `10-legal-ip` `11-compliance-ethics` `12-trust-safety` `13-fraud-operations`
Launch: `14-launch-gtm` `15-marketing-sales` `16-analytics` `17-customer-success`
Operate: `18-finance` `19-operations` `20-bau` `21-innovation-programs`
People: `22-people-hr` `23-learning-development` `24-wellness-performance`
Corporate: `25-pr-communications` `26-governance-ipo` `27-esg-sustainability` `28-government-relations`
Specialized: `29-data-ai-strategy` `30-platform-ecosystem`
Commercial: `31-product-marketing` `32-sales-revops` `33-partnerships-bizdev` `36-pricing-monetization` `37-growth`
Developer & Research: `34-developer-relations` `35-user-research` `42-content-docs` `43-localization-i18n`
Data & Privacy: `38-data-engineering` `39-privacy-dpo`
Internal & Delivery: `40-it-corporate-engineering` `41-technical-program-management`
Corporate Finance: `44-investor-relations` `45-corporate-development` `46-procurement-supply-chain`
Research: `47-deep-research` (research-first gate — invoked before any build/bet)

All agent files are in `agents/` directory.

## Framework Directory

All framework files are in `frameworks/` directory:
`founders-playbook` `30-day-launch-engine` `scenario-playbooks` `sop-process-maps`
`compensation-bands` `consulting-frameworks` `stress-test-framework` `universal-checklists`
`global-compliance` `corporate-scaling` `institutional-memory` `prd-framework`
`mvp-framework` `roadmap-framework` `user-flows-framework` `risk-matrix`
`ab-testing-framework` `accessibility-i18n` `product-lifecycle` `competitive-war-room`
`continuous-improvement` `physical-ops-pmi` `coverage-audit`
`okr-goal-setting` `pricing-packaging` `growth-model` `sales-playbook`
`data-governance` `incident-management` `partnership-framework` `brand-messaging`
`customer-journey` `deep-research-protocol` `ai-engineering-stack`
`ai-department-playbooks`

Country compliance: `references/compliance/` — india, us, eu, uk, sea.

## Examples

Example 1: Single-topic request
```
User: "Write a PRD for a payment feature"
→ Load agents/04-prd.md + frameworks/prd-framework.md
→ Produce PRD with: happy path, error states, edge cases, acceptance criteria
→ Output KDR with all decisions
```

Example 2: Full product build
```
User: "Build me a food delivery app for Bangalore"
→ Phase A: agents/02 + 03 → Discovery brief + strategy + KDR-A
→ Phase B: agents/04 + 05 → PRD + design + KDR-B
→ Phase C: agents/06 + 07 + 08 → Architecture + testing + DevOps + KDR-C
→ Phase D: agents/18 + 19 + 15 → Finance + ops + marketing + KDR-D
→ Phase E: agents/11 + 22 + 26 → Compliance + hiring + governance + KDR-E
→ Phase F: agents/00 + 01 → Final 6-pass audit + proactive suggestions
```

Example 3: Quick reference
```
User: "What salary should I pay a senior engineer in Bangalore?"
→ Load frameworks/compensation-bands.md
→ Answer: L3 Senior, Tier 1 India, ₹22-38 LPA generic / ₹30-55 LPA niche
```

## Troubleshooting

Skill triggers on unrelated queries:
- This skill scopes to product development only
- Should NOT trigger for general coding, creative writing, or factual queries
- Description includes negative triggers for common false positives

Context window fills up:
- Never load more than 5 agent files per turn
- Free tier: max 3 agents per turn
- Use phased execution in SMART-LOADER.md for complex requests

Inconsistent outputs across agents:
- Apply cross-agent governance hierarchy (Step 3)
- Chief Reviewer (Agent 00) runs 6-pass consistency audit with 14 cross-checks
- Conflict detection protocol prevents contradictions

Context lost after chat compaction:
- KDR system outputs structured state after every phase
- User pastes MASTER KDR into new conversation to restore full context

## Important

All legal, financial, security, and HR content requires professional review
before real-world use. See `references/DISCLAIMER.md` for full details.
