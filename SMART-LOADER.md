# SMART-LOADER v2: Context Router + Memory Engine

## READ THIS FILE FIRST. ALWAYS. BEFORE ANY OTHER FILE.

This file is the brain of the Product Architect system. It decides what to load,
manages context efficiently, and ensures nothing is ever lost — even across chat
compaction, session limits, or new conversations.

---

## STEP 1: Classify the Request

Read the user's message. Classify into ONE pattern:

```
PATTERN A — SINGLE TOPIC: "Write a PRD" / "Design an app" / "Financial model"
→ Load: 1-2 agents + 1 framework. Done in 1 turn.

PATTERN B — MULTI-TOPIC: "Product roadmap" / "Marketing strategy" / "Launch plan"
→ Load: 3-4 agents + 1-2 frameworks. Done in 1-2 turns.

PATTERN C — FULL PRODUCT: "Build me a complete product" / "Full product from scratch"
→ Phased execution across 5-6 turns. See Phase Plan below.

PATTERN D — CONTINUE PREVIOUS: User references past work or pastes a KDR/MKDR.
→ Read the KDR. Resume from where they left off. Don't reload completed phases.

PATTERN E — CHECKLIST/QUICK ANSWER: "Checklist for X" / "How much to raise"
→ Load: 1 framework only. Quick response. No multi-phase needed.

PATTERN F — MULTI-INTENT: Request contains 2+ distinct topics.
→ Decompose into separate intents. Prioritize. Execute sequentially.
  Example: "Write a PRD and estimate the cost" = PRD (Agent 04) THEN Finance (Agent 18).
  Load the primary intent first. Address secondary after primary is delivered.

PATTERN G — AMBIGUOUS: Can't confidently classify.
→ Ask ONE clarifying question: "I can help with that — are you looking for
  [interpretation A] or [interpretation B]?" Then route based on answer.
```

## STEP 2: Agent Routing Engine

### 2a. Keyword → Agent Scoring

Don't just keyword-match. SCORE each potential agent 0-10 based on relevance,
then load the top-scoring agents up to the context budget.

```
SCORING METHOD:
For each agent, score = keyword_match + intent_match + context_bonus

keyword_match (0-5):
  5 = Exact topic word ("PRD", "security audit", "financial model")
  3 = Related topic word ("requirements" → PRD, "money" → Finance)
  1 = Tangential relevance
  0 = No match

intent_match (0-3):
  3 = The agent PRODUCES what the user is asking for
  2 = The agent VALIDATES/REVIEWS what the user is asking for
  1 = The agent provides SUPPORTING context
  0 = Not relevant to this request

context_bonus (0-2):
  +2 = User explicitly mentioned this agent's domain
  +1 = Previous KDR shows this agent's work is incomplete/relevant
  +0 = No additional context signal

LOAD DECISION:
  Score 8-10: PRIMARY agent — load first, this produces the deliverable
  Score 5-7:  SECONDARY agent — load if budget allows, validates/enriches
  Score 3-4:  TERTIARY — mention in output ("you may also want Agent X for Y")
  Score 0-2:  SKIP — not relevant to this request
```

### 2b. Primary Routing Table

```
REQUEST CONTAINS          → PRIMARY AGENT(S)  → FRAMEWORK              → SECONDARY
─────────────────────────────────────────────────────────────────────────────────────
"PRD" / "requirements"    → 04 (PRD)          → prd-framework          → 07 (Testing)
"design" / "UI" / "app"   → 05 (Design)       → (anti-slop-design)     → 04 (PRD)
"roadmap" / "strategy"    → 02+03 (Disc+Str)  → roadmap+consulting     → 18 (Finance)
"MVP" / "build"           → 03+04 (Str+PRD)   → mvp-framework          → 06 (Engineering)
"financial" / "pricing"   → 18 (Finance)       → compensation-bands     → 03 (Strategy)
"security" / "audit"      → 09+11 (Sec+Comp)  → global-compliance      → 06 (Engineering)
"marketing" / "growth"    → 15+14 (Mkt+Launch) → 30-day-launch-engine   → 16 (Analytics)
"hiring" / "team"         → 22 (People)        → compensation-bands     → 18 (Finance)
"legal" / "compliance"    → 10+11 (Legal+Comp) → global-compliance      → 09 (Security)
"launch" / "go-to-market" → 14+07 (Launch+QA)  → stress-test            → 15 (Marketing)
"operations" / "SOP"      → 19+20 (Ops+BAU)   → sop-process-maps       → 18 (Finance)
"IPO" / "board"           → 26+18 (Gov+Fin)   → corporate-scaling      → 10 (Legal)
"trust" / "moderation"    → 12 (Trust)         → —                      → 11 (Compliance)
"fraud"                   → 13 (Fraud)         → —                      → 09 (Security)
"AI" / "ML" / "data"      → 29 (Data/AI)       → —                      → 06 (Engineering)
"ESG" / "sustainability"  → 27 (ESG)           → —                      → 25 (PR)
"platform" / "API" / "eco"→ 30 (Platform)      → —                      → 06 (Engineering)
"crisis" / "incident"     → 25 (PR)            → scenario-playbooks     → 09 (Security)
"checklist for"           → (none)             → universal-checklists   → —
"how to start" / "day 0"  → (none)             → founders-playbook      → —
"review" / "audit all"    → 00+01 (Review+Adv) → coverage-audit         → —
"complete product"        → PHASE PLAN (below) →                        → —
```

### 2c. Fallback When No Pattern Matches

```
IF the request doesn't match ANY routing pattern:

1. CHECK: Is it a general knowledge question? → Answer directly, no agent needed.
2. CHECK: Is it about the Product Architect system itself? → Reference SKILL.md.
3. CHECK: Is it a continuation of previous work? → Look for KDR context.
4. IF STILL UNCLEAR: Ask the user ONE question:
   "I want to give you the best help. Could you tell me which of these
   is closest to what you need?
   A) Product spec or design
   B) Business/financial planning
   C) Technical/engineering
   D) Legal/compliance
   E) Team/operations
   F) Something else — describe in one sentence"

NEVER: Load 5 random agents and hope one is relevant.
NEVER: Say "I don't know which agent to use." Route or ask.
```

### 2d. Multi-Intent Decomposition

```
WHEN a request contains multiple distinct intents:

EXAMPLE: "Write a PRD for the payment feature and estimate how much it will cost
to build, and also what compliance requirements apply."

DECOMPOSE:
  Intent 1: PRD for payment feature → Agent 04 (PRD) + prd-framework
  Intent 2: Cost estimation → Agent 18 (Finance) + Agent 06 (Engineering)
  Intent 3: Compliance requirements → Agent 11 (Compliance) + global-compliance

EXECUTION ORDER:
  Priority = which intent enables the others?
  PRD first (defines what we're costing and compliance-checking)
  → Cost second (needs PRD scope to estimate)
  → Compliance third (needs feature spec to assess)

CONTEXT BUDGET CHECK:
  Can all 4 agents fit in one turn? (04 + 18 + 06 + 11 = 4 agents)
  4 ≤ 5 limit → YES, load all in one turn.
  If >5 agents needed → Split into 2 turns, output mini-KDR between.

OUTPUT: Address each intent in sequence, clearly labeled:
  "## Payment Feature PRD [Agent 04]"
  "## Cost Estimation [Agent 18]"
  "## Compliance Requirements [Agent 11]"
```

### 2e. Dynamic Mid-Conversation Loading

```
DURING a conversation, new agent needs may emerge that weren't in the original request.

TRIGGERS FOR DYNAMIC LOADING:
□ User asks a follow-up in a different domain
  ("Now what about the legal implications?" → Load Agent 10)
□ Current agent's output reveals a dependency
  (PRD specs payment flow → "This needs Security Agent 09 review for PCI compliance")
□ Conflict detected between current output and previous KDR decisions
  (→ Load the conflicting agent for resolution)

DYNAMIC LOADING RULES:
1. ANNOUNCE before loading: "I'm bringing in Agent 09 (Security) to review
   the payment flow for PCI compliance."
2. Don't reload agents already in context (check what's loaded)
3. If loading a new agent would exceed 5-agent limit:
   Summarize least-relevant agent's contribution, unload it, load new one
4. Record dynamic load in KDR: "Agent 09 dynamically loaded during Phase B
   to review payment PCI compliance."
```

## STEP 3: Context Budget Rules

```
HARD RULES:
□ NEVER load more than 5 agent files in a single turn
□ NEVER load SKILL.md + SMART-LOADER.md + 5 agents simultaneously
□ SMART-LOADER is the ONLY file always in context
□ For Pattern C (full product): Execute in phases, output KDR between each
□ If user is on free tier: Maximum 3 agents per turn (not 5)

TOKEN ESTIMATION:
  SMART-LOADER.md ≈ 4,500 tokens (always loaded)
  Average agent file ≈ 3,000-6,000 tokens
  Average framework file ≈ 2,000-5,000 tokens
  User's conversation history ≈ varies (reserve 40% of total budget)

  FREE TIER (~100K tokens):
    Budget: 60K for files (after 40% conversation reserve)
    Max: SMART-LOADER (4.5K) + 3 agents (15K) + 1 framework (4K) = ~23.5K
    Remaining: ~36K for response generation — comfortable

  PRO TIER (~200K tokens):
    Budget: 120K for files
    Max: SMART-LOADER (4.5K) + 5 agents (25K) + 2 frameworks (8K) = ~37.5K
    Remaining: ~82K for response generation — very comfortable

LOADING PRIORITY (when budget is tight):
1. SMART-LOADER.md (always — non-negotiable)
2. PRIMARY agent (the one producing the main deliverable)
3. The relevant framework (template/structure)
4. SECONDARY agent (validation/enrichment — only if budget allows)
5. Agent 01 (Proactive Advisor) — only if budget allows after all of the above
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

### Conflict Detection Protocol (THE CRITICAL MECHANISM)

```
BEFORE RECORDING ANY NEW DECISION, CLAUDE MUST:

1. SCAN all previous decisions in the current KDR chain for contradictions.
2. If a new decision CONFLICTS with a previous numbered decision:

   ⚠️ CONFLICT DETECTED:
   Decision #[new]: [Agent X] recommends [new thing]
   Decision #[old]: [Agent Y] previously decided [old thing]
   These are INCOMPATIBLE because: [specific reason]

   RESOLUTION (apply hierarchy from SKILL.md):
   → If Compliance/Security/Finance override applies → auto-resolve, document why
   → If no clear hierarchy → STOP and ask user:
     "Decisions #[old] and #[new] conflict. Which do you want to keep?"

3. Record the resolution as a new decision:
   Decision #[N]: CONFLICT RESOLVED — [old decision] updated to [new decision]
   because [reason]. Previous Decision #[old] is SUPERSEDED.

EXAMPLES:
Decision #7 (Strategy): "Target SMBs with ₹499/month pricing"
Decision #19 (Finance): "Need ₹999/month minimum for positive unit economics"
→ ⚠️ CONFLICT: #7 and #19 — pricing doesn't cover costs
→ Resolution: Ask user. Options: raise price, reduce costs, or accept negative margins for growth.
→ Decision #20: CONFLICT RESOLVED — Pricing set to ₹699/month with ₹999 target
   by Month 6. Decision #7 SUPERSEDED.

Decision #12 (Engineering): "Store user location history for recommendations"
Decision #23 (Compliance): "DPDP Act requires purpose limitation — location
   for recommendations requires explicit consent"
→ ⚠️ CONFLICT: #12 and #23 — data collection without consent flow
→ Resolution: Compliance overrides (hierarchy Rule 1). Auto-resolved.
→ Decision #24: CONFLICT RESOLVED — Add consent prompt before location collection.
   Decision #12 UPDATED to include consent requirement.

THIS IS THE MECHANISM THAT PREVENTS 31 AGENTS FROM CONTRADICTING EACH OTHER.
Without it, each agent operates in isolation. With it, every decision is checked
against every previous decision, and conflicts are surfaced before they become bugs.
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
