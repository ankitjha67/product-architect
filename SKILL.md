---
name: product-architect
description: "Complete product development system with 31 specialized agents and 23 frameworks. Use when user asks to build a product, write a PRD, create a roadmap, plan an MVP, design an app, do a security audit, create a financial model, plan hiring, launch a product, set up operations, prepare for IPO, or write a compliance policy. Also triggers on help me plan, product strategy, go-to-market, fundraising, pitch deck, unit economics, competitive analysis, user personas, sprint planning, SOP, checklist for, or how do I start a company. Do NOT use for general knowledge questions, coding tutorials, creative writing unrelated to product development, standalone code security scanning (use a dedicated SAST/DAST skill), pure accounting or bookkeeping (use a finance-specific skill), or generic project management without a product development context."
license: MIT
compatibility: Works on Claude.ai, Claude Code, and API. No external dependencies. Enhanced with anti-slop-design skill for UI/UX.
metadata:
  author: ankitjha67
  version: "2.0.0"
  category: product-development
  tags: "product-management, startup, prd, strategy, compliance, finance, operations, hiring, launch, saas, marketplace"
  repository: https://github.com/ankitjha67/product-architect
---

# Product Architect

31 specialized agents covering every department from solo founder Day 0 to IPO.
23 frameworks with tactical playbooks, compliance guides, and process maps.

## Instructions

### Step 1: Route the Request via SMART-LOADER

Read `SMART-LOADER.md` first — it contains request classification, agent routing, context budget rules (max 5 agents per turn), multi-intent decomposition, the KDR memory system, and conflict detection. Use it to identify which agents to load.

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
Level 4 (highest): Agent 11 (Compliance) — OVERRIDE on legal/regulatory risk
Level 3: Agent 09 (Security) — OVERRIDE on security vulnerabilities
Level 2: Agent 18 (Finance) — VETO on budget/cost violations
Level 1: Agent 00 (Chief Reviewer) — VETO on quality/consistency
```

If two agents produce conflicting recommendations:
1. STOP — do not proceed with either
2. STATE the conflict explicitly
3. APPLY the hierarchy (higher authority wins)
4. DOCUMENT in KDR with decision number
5. FLAG for user review

### Step 4: Output Key Decision Records

After every phase, output a structured KDR block. KDRs survive chat compaction and enable session resumption. Full format in `SMART-LOADER.md`. Minimal example:

```
╔══════════════════════════════════════════════════╗
║ KDR: [PRODUCT] — PHASE [X] COMPLETE              ║
╠══════════════════════════════════════════════════╣
║ DECISIONS:                                       ║
║  #1 [Decision with rationale]                    ║
║ SPECS: [Key technical choices]                   ║
║ OPEN: [Unresolved items]                         ║
║ NEXT: Phase [X+1] — [What it covers]             ║
╚══════════════════════════════════════════════════╝
```

## Agent Directory

31 agents in `agents/` (numbered `00` – `30`), grouped by domain: Audit (00–01), Product (02–06), Build (07–08), Protect (09–13), Launch (14–17), Operate (18–21), People (22–24), Corporate (25–28), Specialized (29–30). Use the routing table in Step 1 or `SMART-LOADER.md` scoring to pick the right agents.

## Framework Directory

23 frameworks in `frameworks/` — covering PRDs, MVPs, roadmaps, user flows, risk matrices, SOPs, compliance, A/B testing, accessibility, product lifecycle, competitive analysis, and more. See `references/agent-standards.md` cross-reference table for which frameworks support which agents.

Country compliance deep-dives: `references/compliance/` — india, us, eu, uk, sea.

## Examples

Example 1: Single-topic request
```
User: "Write a PRD for a payment feature"
→ Load agents/04-prd.md + frameworks/prd-framework.md
→ Produce PRD sections: Problem statement, user stories, happy path,
  error states, edge cases, acceptance criteria, success metrics
→ Output KDR:
  ╔══════════════════════════════════════════════════╗
  ║ KDR: PAYFLOW — PHASE B COMPLETE                  ║
  ╠══════════════════════════════════════════════════╣
  ║ DECISIONS:                                       ║
  ║  #1 Razorpay over Stripe (INR-first, lower MDR) ║
  ║  #2 UPI as primary method (85% of target users)  ║
  ║ SPECS: REST API, idempotent, webhook-driven      ║
  ║ OPEN: Refund policy TBD, auto-retry threshold    ║
  ║ NEXT: Phase C — Engineering + Security review     ║
  ╚══════════════════════════════════════════════════╝
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

Inconsistent outputs across agents:
- Apply cross-agent governance hierarchy (Step 3)
- Chief Reviewer (Agent 00) runs 6-pass consistency audit with 14 cross-checks

Context lost after chat compaction:
- User pastes the most recent KDR or MASTER KDR into a new conversation to restore full context (see `SMART-LOADER.md` memory rules)

## Important

All legal, financial, security, and HR content requires professional review
before real-world use. See `references/DISCLAIMER.md` for full details.
