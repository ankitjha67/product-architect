# OKRs & Goal-Setting Framework

## Purpose
This framework turns strategy into a small number of measurable goals everyone can rally
behind — and away from a long to-do list nobody remembers by week three. It covers the North
Star Metric, the metrics tree beneath it, the mechanics of OKRs, how to cascade and run them
without bureaucracy, and the failure modes that quietly kill goal-setting at most companies.

Pair this with **Agent 03 (Strategy)** for the strategic inputs that goals must serve, and
**Agent 41 (Chief of Staff / Operating Cadence)** for running the rhythm. Growth's North Star
work lives in **Agent 37**.

---

## PART 1 — THE NORTH STAR METRIC (NSM)

```
DEFINITION: the ONE metric that best captures the core value your product delivers to
customers. Everything else ladders up to it. It is a LEADING proxy for long-term success —
not revenue itself (revenue is a lagging output; the NSM predicts it).

HOW TO CHOOSE — a good NSM is:
□ A measure of customer VALUE RECEIVED (not value extracted) — when it goes up, customers
  are genuinely better off.
□ A LEADING indicator of revenue/retention (it moves before the money does).
□ Something the whole company can influence and rally around.
□ A RATE or a COUNT of value delivered, often with an engagement/quality threshold baked in
  (so you can't game it with empty signups).

THE TEST: "If this number doubled and nothing else changed, would the business be
meaningfully healthier a year from now?" If yes, it's a candidate. If you could double it by
gaming a vanity action, it's wrong.

EXAMPLES BY BUSINESS MODEL:
| Model | North Star Metric | Why |
|-------|-------------------|-----|
| Marketplace | Weekly successful transactions | Captures both sides matching = value |
| SaaS (team) | Weekly active teams doing the core action | Team usage = stickiness + value |
| Content/media | Weekly active consumers past an engagement threshold | Engaged time = value |
| E-commerce | Weekly active buyers / repeat purchase rate | Repeat = value, not one-time |
| Social | Daily active users with N meaningful interactions | Interaction = the value, not logins |
| Fintech | Monthly transacting users / transaction volume | Usage of the financial value |
| PLG/dev tool | Weekly active workspaces shipping to production | Real usage, not signups |
(Real-world: Airbnb ~nights booked; Spotify ~time spent listening; Slack ~messages by teams.)

ANTI-PATTERNS (NSMs that lie to you):
⛔ Revenue or GMV as the NSM — lagging, and tempts you to extract instead of deliver value.
⛔ Registered users / total signups — a vanity count; says nothing about value received.
⛔ Page views / sessions — measures activity, not value (more sessions can mean confusion).
⛔ A number you can't decompose into things teams control — un-actionable.
⛔ TWO north stars — then it isn't north. Pick one; the rest are supporting metrics.
```

### The Metrics Tree (input → output decomposition)

```
The NSM is an OUTPUT. You cannot work on an output directly — you work on the INPUTS that
drive it. Decompose the NSM into a tree of input metrics that teams can own.

  NORTH STAR (output)
        │
        ├── Input metric A  ── owned by Team 1  ── moved by KR ──→ initiatives
        ├── Input metric B  ── owned by Team 2
        └── Input metric C  ── owned by Team 3

WORKED EXAMPLE — NSM = Weekly Active Teams performing the core action:
  NSM = (new teams) × (% activated) × (% retained W/W) × (actions per active team)
        └ Acquisition   └ Activation   └ Retention        └ Engagement/depth
Each factor is an input metric a team owns and writes a Key Result against. This is how the
NSM connects to OKRs: KRs move INPUT metrics; input metrics multiply into the NSM.

RULE: if you can't trace a team's OKR up the tree to the NSM, either the OKR is off-strategy
or your tree is incomplete. Build the tree first; write OKRs against its branches.
```

---

## PART 2 — OKR MECHANICS

```
OKR = OBJECTIVE + KEY RESULTS.

OBJECTIVE (the O): a QUALITATIVE, inspirational, memorable statement of WHAT you want to
achieve this period. No numbers. It should be ambitious and motivating.
  ✅ "Make onboarding so good that new users can't help but stick."
  ❌ "Increase D30 retention to 55%."  ← that's a Key Result, not an Objective.

KEY RESULTS (the KRs): 2-5 MEASURABLE OUTCOMES that prove you achieved the Objective. Each is
a number with a target. KRs measure OUTCOMES (a metric moved), never OUTPUTS/tasks (a thing
shipped). If you can complete a KR without anything actually improving, it's a task, not a KR.
  ✅ "Lift activation rate from 31% → 50%."  /  "Cut time-to-value from 3 days → 1 hour."
  ❌ "Ship the new onboarding flow."  ← that's an initiative; shipping it isn't the goal,
     the metric moving is.

THE CONSTRAINTS THAT MAKE OKRs WORK:
□ MAX 3 OBJECTIVES per team per quarter. Focus is the entire point. 7 objectives = 0 priorities.
□ 2-5 Key Results per Objective. Fewer is better.
□ KRs are OUTCOMES, not a checklist of initiatives.
□ OKRs are TRANSPARENT — everyone can see everyone's. Alignment requires visibility.

SCORING (0.0 – 1.0):
  Score each KR 0.0–1.0 (e.g., went 31%→44% on a 31%→50% target ≈ (44-31)/(50-31) = 0.68).
  THE 70% SWEET SPOT: for ASPIRATIONAL OKRs, an average score of ~0.7 is the target. Hitting
  1.0 means you sandbagged (the goal was too easy). Scoring ~0.3 consistently means you're
  setting fantasies. ~0.7 means you reached just beyond your grasp — exactly the point.
  GRADE the score, then INTERPRET it (a 0.4 with huge learning can beat a 0.7 of busywork).

ASPIRATIONAL vs COMMITTED OKRs (distinguish them explicitly):
  - COMMITTED: must hit 1.0 (e.g., ship compliance feature by deadline, keep uptime ≥99.9%).
    Missing one is a serious miss requiring re-planning. Score target = 1.0.
  - ASPIRATIONAL / "moonshot": deliberately set so ~0.7 is a great result. Stretch the org.
  Mixing them without labeling causes confusion — mark each OKR's type.
```

---

## PART 3 — THE CASCADE (alignment without rigid waterfall)

```
GOAL: every team's OKRs visibly serve the company's, WITHOUT a mechanical top-down dictation
where each KR becomes the next level's Objective (that's brittle and kills ownership).

HOW IT ACTUALLY WORKS:
  Company sets 3 Objectives + KRs (from Strategy, Agent 03).
        │  (published, transparent)
        ▼
  Teams DRAFT their own OKRs that they believe will move the company KRs — bottom-up.
        │  (negotiate up + sideways)
        ▼
  Leadership + teams reconcile: ensure coverage (every company KR has a team driving it),
  resolve conflicts and dependencies, kill OKRs that don't ladder up.
        ▼
  (Optional) Individuals align — many high-performing orgs STOP at the team level and don't
  do individual OKRs at all (they conflate with performance reviews and create busywork).

PRINCIPLES:
□ ~60% of team OKRs should be set bottom-up. Ownership comes from authorship.
□ Alignment is achieved by TRANSPARENCY + reconciliation, not by copy-pasting KRs downward.
□ Map cross-team DEPENDENCIES explicitly ("our KR depends on Platform shipping X").
□ NOT every team needs to ladder to every company OKR — but every company OKR needs an owner.
□ Keep OKRs SEPARATE from performance reviews and compensation. The moment bonuses ride on
  OKR scores, everyone sandbags and aspiration dies. (Grade for learning, pay for impact
  judged holistically.)
```

---

## PART 4 — CADENCE (the operating rhythm)

```
OKRs are not a document you write and file. They're a RHYTHM. The cadence is the product.

| Ceremony | Frequency | Purpose |
|----------|-----------|---------|
| Annual planning | Yearly | Company-level annual OKRs/themes + the NSM; strategic direction (Agent 03) |
| Quarterly planning | Every quarter | Set the quarter's OKRs; the main unit of OKR work |
| Weekly check-in | Weekly | Update CONFIDENCE on each KR; surface blockers; 15-30 min, not status theater |
| Mid-quarter review | ~Week 6 | Course-correct: kill/adjust OKRs that are clearly off; re-allocate |
| Quarter-end retro + grading | End of quarter | Score 0.0-1.0, INTERPRET, capture learnings, feed next quarter |

WEEKLY CONFIDENCE CHECK: for each KR, owners post a confidence level (e.g., 1-10 or
red/yellow/green) that they'll hit it, plus what changed and what's blocked. The TREND in
confidence is the early-warning system — a KR sliding from green→yellow→red in weeks 2-4 lets
you act while there's still time, instead of discovering the miss at quarter-end.

ANNUAL vs QUARTERLY: keep annual OKRs few and directional; do the real work quarterly.
Don't re-plan annual goals every quarter (whiplash), and don't set-and-forget quarterly ones
(the #1 failure). The mid-quarter review exists precisely to prevent set-and-forget.
```

---

## PART 5 — COMMON FAILURE MODES

```
⛔ SANDBAGGING: setting targets you know you'll hit (so the score looks good / bonus is safe).
   → Fix: separate OKRs from comp; celebrate ambitious 0.7s over safe 1.0s; leaders model it.
⛔ KRs THAT ARE TASKS: "Launch the mobile app," "Hire 3 engineers," "Run 5 webinars."
   → Fix: ask "if we do this and the metric doesn't move, did we succeed?" If no, it's a KR;
     if the task itself is the goal, rewrite as the OUTCOME you expect ("mobile drives X
     activations").
⛔ TOO MANY: 6 objectives, 8 KRs each. Everything is a priority → nothing is. → Fix: cap at 3 O's.
⛔ SET-AND-FORGET: written in January, opened again in December. → Fix: the weekly/mid-quarter cadence.
⛔ OUTPUT vs OUTCOME confusion: measuring activity (features shipped, calls made) not results.
   → Fix: KRs are CUSTOMER/BUSINESS outcomes; initiatives are the bets you make to move them.
⛔ OKRs AS A TODO LIST: every project becomes an OKR. → Fix: OKRs are the FEW things that
   matter most; BAU and most projects are NOT OKRs.
⛔ TIED TO COMPENSATION: → instant sandbagging and gaming. Keep them apart.
⛔ NO OWNER: a KR everyone is responsible for is a KR no one is. One DRI per KR.
⛔ VANITY METRICS as KRs: signups, page views. → tie KRs to value-received metrics (Part 1).
```

---

## PART 6 — OKRs vs KPIs vs INITIATIVES

```
These three get conflated constantly. Keep them distinct:

KPIs (Key Performance Indicators): the ONGOING health metrics you ALWAYS watch — uptime,
  NRR, gross margin, NPS, churn. They have no end date; they're the dashboard of the business.
  A KPI becomes a KR only when you decide to CHANGE it this quarter.

OKRs: the FEW things you want to CHANGE or ACHIEVE this period — focused, time-boxed, ambitious.
  Not everything; the things that matter most right now.

INITIATIVES / PROJECTS: the WORK you do to move a KR. The bets, features, campaigns, experiments.
  Multiple initiatives ladder under one KR; if an initiative isn't moving a KR, question it.

RELATIONSHIP:
  KPI: "NRR is 102% (we monitor it always)."
  OKR Objective: "Make existing customers love us enough to grow."
  → KR: "Lift NRR from 102% → 115%."
  → Initiatives: launch expansion add-on, build PQL upsell, ship the new analytics dashboard.

RULE: most metrics are KPIs (watch). A handful become KRs (change). Initiatives are how. Don't
turn your whole KPI dashboard into OKRs — that's how you get 40 "goals" and zero focus.
```

---

## PART 7 — WORKED EXAMPLE (SaaS startup, one quarter)

```
NORTH STAR: Weekly Active Teams performing the core action.

COMPANY OBJECTIVE 1 (aspirational): "New customers reach value so fast they can't help but stick."
  KR1: Activation rate 31% → 50%
  KR2: Median time-to-value 3 days → under 2 hours
  KR3: W4 team retention 22% → 35%
  Owner: Growth (Agent 37).  Initiatives: in-flow teammate invite, templates, day-2 lifecycle nudge.

COMPANY OBJECTIVE 2 (committed): "Make the platform enterprise-trustworthy."
  KR1: Ship SSO/SAML + audit logs to GA (committed → 1.0 required)
  KR2: Uptime ≥ 99.95% all quarter
  Owner: Engineering/Security (Agents 06/09).

COMPANY OBJECTIVE 3 (aspirational): "Existing customers grow with us."
  KR1: NRR 102% → 115%
  KR2: % of new ARR from expansion 20% → 35%
  Owner: Growth + Customer Success + Pricing (Agents 37/17/36).

QUARTER-END GRADING (illustrative):
  Obj 1: KR1 0.68, KR2 0.9, KR3 0.4  → avg 0.66 (good aspirational result; retention KR taught us
         most — depth, not just speed, drives W4). Carry the learning forward.
  Obj 2: 1.0 (committed — met, as required).
  Obj 3: KR1 0.54, KR2 0.7 → 0.62. Expansion add-on landed; NRR lags (slower to show in cohorts).
```

---

## TEMPLATES (copy-paste)

```
OKR TABLE:
| Objective (qualitative, inspiring) | Type (committed/aspirational) | Owner (DRI) |
|------------------------------------|-------------------------------|-------------|
| [O1]                               | aspirational                  | [name/team] |
|   KR1: [metric] [from] → [to]      |   confidence: 🟢/🟡/🔴          |             |
|   KR2: [metric] [from] → [to]      |   confidence:                  |             |
|   KR3: [metric] [from] → [to]      |   confidence:                  |             |
```

```
WEEKLY CONFIDENCE CHECK (per KR, posted weekly):
KR: ________________________   Confidence this week: __/10 (last week: __/10)
Current value: ____  → Target: ____   On track? Y/N
What moved it this week: ___________________________________
Blockers / help needed: ___________________________________
Next action + owner: ______________________________________
```

```
SCORING GRID (quarter-end):
| KR | Start | Target | Actual | Score (0.0–1.0) | Learning / next step |
|----|-------|--------|--------|------------------|----------------------|
|    |       |        |        |                  |                      |
Objective score = average of KR scores.
Aspirational target ≈ 0.7 (1.0 = sandbagged, ≤0.3 = fantasy). Committed target = 1.0.
```

---

## THE ONE-PAGE OKR CHECKLIST

```
BEFORE you finalize OKRs for the quarter:
□ Is there a single, value-based North Star, and does every Objective ladder toward it?
□ ≤ 3 Objectives per team? Each O qualitative & inspiring (no numbers in the O)?
□ 2-5 KRs per O, each a measurable OUTCOME (not a task/initiative/output)?
□ Is each OKR labeled committed vs aspirational?
□ Does each KR have exactly ONE owner (DRI)?
□ Are cross-team dependencies mapped?
□ Are OKRs transparent to everyone, and SEPARATE from comp/reviews?
□ Is the cadence scheduled (weekly check-in, mid-quarter review, end-quarter grading)?
□ Could you complete every KR and still have nothing actually improve? If yes — they're tasks. Rewrite.
```
