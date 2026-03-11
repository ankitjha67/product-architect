# SMART-LOADER v2: Context Router + Memory Engine

## READ THIS FILE FIRST. ALWAYS. BEFORE ANY OTHER FILE.

This file is the brain of the Product Architect system. It decides what to load,
manages context efficiently, and ensures nothing is ever lost — even across chat
compaction, session limits, or new conversations.

---

## STEP 1: Classify the Request

Read the user's message. Match to ONE of these patterns:

```
PATTERN A — SINGLE TOPIC: "Write a PRD / Design an app / Financial model / etc."
→ Load: 1-2 agents + 1 framework. Done in 1 turn.

PATTERN B — MULTI-TOPIC: "Product roadmap / Marketing strategy / Launch plan"
→ Load: 3-4 agents + 1-2 frameworks. Done in 1-2 turns.

PATTERN C — FULL PRODUCT: "Build me a complete product / Full product from scratch"
→ Phased execution across 5-6 turns. See Phase Plan below.

PATTERN D — CONTINUE PREVIOUS: User references past work or pastes a KDR/MKDR.
→ Read the KDR. Resume from where they left off. Don't reload completed phases.

PATTERN E — CHECKLIST/QUICK ANSWER: "Checklist for X / How much to raise / etc."
→ Load: 1 framework only. Quick response. No multi-phase needed.
```

## STEP 2: Agent Routing Table

```
REQUEST CONTAINS          → LOAD THESE AGENTS           → LOAD THESE FRAMEWORKS
─────────────────────────────────────────────────────────────────────────────────
"PRD" / "requirements"    → 04                          → prd-framework
"design" / "UI" / "app"   → 05                          → (anti-slop-design skill)
"roadmap" / "strategy"    → 02 + 03                     → roadmap + consulting
"MVP" / "build"           → 03 + 04                     → mvp-framework
"financial" / "pricing"   → 18                          → compensation-bands
"security" / "audit"      → 09 + 11                     → global-compliance
"marketing" / "growth"    → 15 + 14                     → ab-testing
"hiring" / "team"         → 22                          → compensation-bands
"legal" / "compliance"    → 10 + 11                     → global-compliance
"launch" / "go-to-market" → 14 + 07                     → stress-test
"operations" / "SOP"      → 19 + 20                     → sop-process-maps
"IPO" / "board"           → 26 + 18                     → corporate-scaling
"trust" / "moderation"    → 12                          → —
"fraud"                   → 13                          → —
"AI" / "ML" / "data"      → 29                          → —
"ESG" / "sustainability"  → 27                          → —
"checklist for"           → (none)                      → universal-checklists
"how to start" / "day 0"  → (none)                      → founders-playbook
"review" / "audit all"    → 00 + 01                     → coverage-audit
"complete product"        → PHASE PLAN (see below)      →
```

## STEP 3: Context Budget Rules

```
HARD RULES:
□ NEVER load more than 5 agent files in a single turn
□ NEVER load SKILL.md + SMART-LOADER.md + 5 agents (too much context waste)
□ SMART-LOADER is the ONLY file always in context
□ For Pattern C (full product): Execute in phases, output KDR between each
□ Reserve 40% of context for conversation history + user's files/input
□ If user is on free tier: Be MORE aggressive about phasing (smaller chunks per turn)

LOADING PRIORITY:
1. SMART-LOADER.md (always — you're reading it now)
2. The PRIMARY agent for the task (the one that produces the main deliverable)
3. The relevant framework (template/structure for the deliverable)
4. SECONDARY agents (validation, review, suggestions)
5. Agent 01 (Proactive Advisor) — if context budget allows
```

## STEP 4: Full Product Phase Plan

For "build me a complete product" requests:

```
PHASE A — FOUNDATION (Turn 1):
  Load: Agent 02 (Discovery) + Agent 03 (Strategy) + consulting-frameworks
  Output: Discovery Brief + Product Strategy
  → Output KDR-A at end of turn

PHASE B — SPECIFICATION (Turn 2):
  Load: Agent 04 (PRD) + Agent 05 (Design) + prd-framework + user-flows
  Input: KDR-A (provides context from Phase A)
  Output: PRD + Design direction + Key user flows
  → Output KDR-B at end of turn

PHASE C — ENGINEERING & TESTING (Turn 3):
  Load: Agent 06 (Engineering) + Agent 07 (Testing) + Agent 08 (DevOps)
  Input: KDR-A + KDR-B
  Output: Architecture + Test strategy + DevOps plan
  → Output KDR-C at end of turn

PHASE D — BUSINESS & OPERATIONS (Turn 4):
  Load: Agent 18 (Finance) + Agent 19 (Ops) + Agent 15 (Marketing)
  Input: KDR-A + KDR-B + KDR-C
  Output: Financial model + Ops plan + GTM strategy
  → Output KDR-D at end of turn

PHASE E — GOVERNANCE & COMPLIANCE (Turn 5):
  Load: Agent 11 (Compliance) + Agent 22 (People) + Agent 26 (Governance)
  Input: All previous KDRs
  Output: Policy framework + Hiring plan + Governance structure
  → Output KDR-E at end of turn

PHASE F — FINAL AUDIT (Turn 6):
  Load: Agent 00 (Chief Reviewer) + Agent 01 (Advisor)
  Input: All KDRs
  Output: Comprehensive audit report + Proactive suggestions
  → Output MASTER KDR (complete state of the product)

Between phases, ASK: "Phase [X] complete. Ready for Phase [X+1]?"
This gives the user control and lets them ask questions or adjust before continuing.
```

---

## MEMORY & COMPACTION ENGINE

### The Problem
Claude's chat history gets compacted in long conversations, especially on free tier.
Earlier details disappear. Without a system, the user has to repeat everything.

### The Solution: Key Decision Records (KDR)

**After EVERY phase or major deliverable, output a KDR block.**
KDRs are structured summaries that capture the COMPLETE state in minimum tokens.
They survive compaction because they're recent. They can be pasted into new chats.

### KDR Format (Phase-Level)

```
╔══════════════════════════════════════════════════╗
║ KDR: [PRODUCT NAME] — PHASE [X] COMPLETE        ║
║ Date: [Date] | Phase: [X of Y]                   ║
╠══════════════════════════════════════════════════╣
║ PRODUCT: [Name]                                  ║
║ TYPE: [B2B SaaS / B2C marketplace / etc.]        ║
║ MARKETS: [Countries/regions targeted]            ║
║ USERS: [Primary persona in one sentence]         ║
║ PROBLEM: [Core problem in one sentence]          ║
║ SOLUTION: [Product approach in one sentence]     ║
║                                                  ║
║ DECISIONS MADE THIS PHASE:                       ║
║ 1. [Decision]: [Choice] → because [reason]       ║
║ 2. [Decision]: [Choice] → because [reason]       ║
║ 3. [Decision]: [Choice] → because [reason]       ║
║                                                  ║
║ KEY SPECS:                                       ║
║ • Revenue model: [Specific model + pricing]      ║
║ • Tech stack: [Frontend / Backend / DB / Infra]  ║
║ • MVP features: [3-5 core features listed]       ║
║ • Timeline: [MVP in X weeks, launch in Y weeks]  ║
║ • Budget: [Monthly burn, runway, raise target]   ║
║                                                  ║
║ ARTIFACTS PRODUCED:                              ║
║ • [Document name] — [What it contains]           ║
║ • [Document name] — [What it contains]           ║
║                                                  ║
║ OPEN ITEMS:                                      ║
║ • [What still needs to be decided/built]         ║
║ • [Question that needs user input]               ║
║                                                  ║
║ NEXT: Phase [X+1] — [What it covers]             ║
╚══════════════════════════════════════════════════╝
```

### MASTER KDR (End of Full Product Session)

Output this at the end of a complete product session. It's the user's "save file."

```
╔══════════════════════════════════════════════════════════════╗
║ MASTER KDR: [PRODUCT NAME]                                   ║
║ Last Updated: [Date] | Phases Completed: [X of Y]            ║
╠══════════════════════════════════════════════════════════════╣
║                                                              ║
║ VISION: [One sentence]                                       ║
║ MISSION: [One sentence]                                      ║
║ VALUES: [3-4 one-line values]                                ║
║                                                              ║
║ ─── PRODUCT ───                                              ║
║ Problem: [Specific problem statement]                        ║
║ Solution: [Product approach]                                 ║
║ Target user: [Primary persona]                               ║
║ Markets: [Countries + priority order]                        ║
║ Differentiator: [Why this beats alternatives]                ║
║ MVP features: [Numbered list of 3-7 features]               ║
║ Post-MVP roadmap: [Next 3 major milestones]                  ║
║                                                              ║
║ ─── BUSINESS ───                                             ║
║ Revenue model: [Model + specific pricing]                    ║
║ Unit economics: CAC [₹X] | LTV [₹Y] | Ratio [Z:1]          ║
║ Year 1 revenue target: [₹X]                                 ║
║ Funding status: [Bootstrapped/Raising ₹X at ₹Y valuation]   ║
║ Monthly burn: [₹X] | Runway: [X months]                     ║
║                                                              ║
║ ─── TECHNICAL ───                                            ║
║ Stack: [Frontend] + [Backend] + [DB] + [Infra]              ║
║ Architecture: [Monolith/microservices, key services]         ║
║ Key integrations: [Payment/SMS/Email/Maps/etc.]              ║
║ Hosting: [Provider + region]                                 ║
║                                                              ║
║ ─── TEAM ───                                                 ║
║ Current: [X people, roles listed]                            ║
║ Next hires: [Roles in priority order]                        ║
║ Org structure: [Flat/functional/matrix]                      ║
║                                                              ║
║ ─── COMPLIANCE ───                                           ║
║ Legal entity: [Type + jurisdiction]                          ║
║ Regulations: [Key regulations that apply]                    ║
║ Policies: [Created / Pending / Not yet needed]               ║
║                                                              ║
║ ─── ALL DECISIONS MADE ───                                   ║
║ 1. [Decision]: [Choice] → [Reason] (Phase X)                ║
║ 2. [Decision]: [Choice] → [Reason] (Phase X)                ║
║ [... complete numbered list ...]                             ║
║                                                              ║
║ ─── OPEN ITEMS ───                                           ║
║ 1. [Item] — [What's needed to resolve]                      ║
║ 2. [Item] — [What's needed to resolve]                      ║
║                                                              ║
║ ─── ARTIFACTS PRODUCED ───                                   ║
║ • [Name] — [Type] — [Status: Draft/Complete]                ║
║ [... complete list ...]                                      ║
║                                                              ║
║ ─── NEXT STEPS ───                                           ║
║ 1. [Most important next action]                              ║
║ 2. [Second priority]                                         ║
║ 3. [Third priority]                                          ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝

TO CONTINUE: Paste this MASTER KDR into a new conversation with Claude and say
"Continue my product work from this KDR." Claude will pick up exactly where you left off.
```

### Memory Rules

```
RULE 1: Output a KDR after EVERY phase — non-negotiable.
RULE 2: KDR must capture ALL decisions, not just major ones.
        "We chose PostgreSQL over MongoDB" is a decision. Record it.
RULE 3: KDR must capture ALL open items and questions.
        "User hasn't decided on pricing yet" is an open item. Record it.
RULE 4: When a user pastes a KDR, TRUST IT as ground truth.
        Don't re-ask questions that are already answered in the KDR.
RULE 5: If context seems to be missing (compaction happened):
        Ask: "I may have lost some earlier context. Could you paste
        the latest KDR or MASTER KDR? That will restore everything."
RULE 6: Output MASTER KDR at end of every session, not just full-product sessions.
        Even a single-topic session (just a PRD) should end with a mini-KDR.
RULE 7: Number all decisions sequentially across phases.
        This creates an audit trail: "As decided in #14, we're using Razorpay..."
```

### Handling Context Loss Gracefully

```
SCENARIO: Chat was compacted. User says "continue where we left off."
→ Check conversation history for any KDR blocks
→ If found: Use the most recent KDR as ground truth, continue from there
→ If not found: Ask user "Could you paste the MASTER KDR from our last session?"
→ If user doesn't have it: Ask the key questions to reconstruct context
  (product, market, stage, what's been done, what's next)
→ NEVER pretend you remember something you don't. Be honest about context loss.

SCENARIO: User starts new conversation referencing previous work.
→ If Claude's memory has context: Use it as starting point
→ If not: Ask for KDR or ask reconstruction questions
→ NEVER make up previous decisions. Always verify with the user.

SCENARIO: Session is about to hit token limit.
→ Output MASTER KDR immediately, even mid-phase
→ Tell user: "We're approaching the session limit. I've saved our complete
  state in the MASTER KDR above. Start a new conversation, paste it in,
  and we'll continue seamlessly."
```

---

## Quick-Reference: What Each Agent Produces

```
02 Discovery     → Discovery Brief (personas, market, competitive landscape)
03 Strategy      → Product Strategy (vision, business model, roadmap, priorities)
04 PRD           → Product Requirements (features, flows, edge cases, acceptance criteria)
05 Design        → UI/UX (screens, design system, interactions, states)
06 Engineering   → Technical Architecture (stack, schema, APIs, infrastructure)
07 Testing       → Test Strategy (pyramid, load, pen, chaos, mobile, accessibility)
08 DevOps        → Infrastructure Plan (CI/CD, monitoring, alerting, DR, cost)
09 Security      → Security Audit (auth, encryption, OWASP, PCI, data protection)
10 Legal         → Legal Strategy (IP, contracts, terms, open source, global regulatory)
11 Compliance    → Policy Framework (14 policies, audit, controls, whistleblower)
12 Trust&Safety  → T&S Plan (content moderation, abuse prevention, platform integrity)
13 Fraud         → Fraud Strategy (detection, chargebacks, abuse prevention)
14 Launch        → Launch Plan (GTM, growth loops, analytics, phased rollout)
15 Marketing     → Marketing Strategy (brand, channels, sales, budget)
16 Analytics     → Analytics Plan (pipeline, taxonomy, dashboards, metrics)
17 Customer Svc  → CX Strategy (support tiers, feedback, churn prevention, NPS)
18 Finance       → Financial Model (P&L, unit economics, pricing, fundraising readiness)
19 Operations    → Ops Plan (SOPs, vendors, supply chain, workforce, quality)
20 BAU           → BAU Manual (rhythms, governance, change management, BCP)
21 Innovation    → Programs Plan (hackathons, bug bounty, R&D, procurement)
22 People        → People Plan (hiring, culture, performance, retention, org design)
23 L&D           → L&D Strategy (training, skills, career ladders, knowledge mgmt)
24 Wellness      → Wellness Plan (mental health, productivity, coaching, burnout)
25 PR            → Comms Strategy (PR, crisis, internal comms, employer brand, CSR)
26 Governance    → Governance Plan (board, committees, IPO, roadshow, cap table)
27 ESG           → ESG Framework (carbon, DEI, reporting, supply chain responsibility)
28 GovRelations  → Regulatory Strategy (landscape, sandboxes, engagement, risk)
29 Data/AI       → AI Strategy (ML lifecycle, responsible AI, LLM integration, governance)
30 Platform      → Platform Strategy (API, marketplace dynamics, dev ecosystem)
01 Advisor       → Proactive Suggestions (runs parallel — blind spots, ideas, best practices)
00 Chief Review  → Final Audit (cross-agent consistency, gaps, risks, recommendations)
```
