# Roadmap Framework

## Roadmap Structure

Every roadmap has 4 horizons. The detail decreases as you look further out - because
certainty decreases. Don't pretend to know what you'll build in 12 months.

```
HORIZON 1 (Now → 8 weeks): HIGH DETAIL
- Specific features with PRDs written
- Engineering estimates assigned
- Design specs complete
- Sprint-level planning

HORIZON 2 (2-4 months): MEDIUM DETAIL
- Features identified and prioritized
- High-level specs (not full PRDs yet)
- Dependencies mapped
- Resource allocation estimated

HORIZON 3 (4-8 months): LOW DETAIL
- Themes and objectives, not specific features
- Tied to business goals and OKRs
- Flexible based on learnings from Horizon 1-2

HORIZON 4 (8-12+ months): VISION ONLY
- Strategic direction
- Market opportunities to explore
- Technology bets to evaluate
- Competitive positioning goals
```

## Phased Roadmap Template

```markdown
# Product Roadmap: [Product Name]
Last Updated: [Date]

## Phase 0: Foundation (Week 1-2)
**Goal**: Technical foundation and team readiness

| Workstream | Tasks | Owner | Status |
|-----------|-------|-------|--------|
| Infrastructure | Cloud setup, CI/CD, environments | Eng | |
| Design System | Typography, colors, components, icons | Design | |
| Auth System | Signup, login, session management | Eng | |
| Database | Schema design, migrations, seed data | Eng | |
| Payments | Gateway account setup, test mode config | Eng | |
| Analytics | SDK integration, event taxonomy defined | Eng | |
| Legal | Privacy policy, ToS, compliance review | Legal | |

**Milestone**: Development environment operational, all team members can run locally.

---

## Phase 1: MVP (Week 3-8)
**Goal**: Core value loop functional end-to-end

| Feature | Priority | Effort | Dependencies | Status |
|---------|----------|--------|-------------|--------|
| [Feature A] | P0 | M | Auth | |
| [Feature B] | P0 | L | Feature A | |
| [Feature C] | P0 | M | None | |
| [Feature D] | P0 | L | Feature B, Payments | |

**Milestone**: 50 beta users can complete core loop. Payment processes successfully.

**Exit Criteria**:
□ Core flow completion rate > 60%
□ Payment success rate > 95%
□ Crash rate < 0.5%
□ P0 bugs: 0 open
□ Beta user feedback collected

---

## Phase 2: Beta & Iteration (Week 9-14)
**Goal**: Validate with broader audience, iterate on feedback

| Feature | Priority | Rationale (from feedback) | Effort |
|---------|----------|--------------------------|--------|
| [Feature E] | P1 | Top user request from beta | M |
| [Feature F] | P1 | 40% drop-off at step X | S |
| [Feature G] | P1 | Competitive parity needed | L |
| Performance optimization | P1 | Load times > 5s on 3G | M |

**Milestone**: 500+ active users. D7 retention > 25%. NPS > 30.

---

## Phase 3: Growth (Month 4-6)
**Goal**: Scale acquisition, improve retention, expand features

| Theme | Features | Business Impact |
|-------|----------|----------------|
| Acquisition | Referral program, ASO, content SEO | 3x signup volume |
| Retention | Push notifications, personalization, rewards | D30 retention > 15% |
| Monetization | Additional payment methods, pricing experiments | ARPU +20% |
| Quality | Performance, accessibility, localization | Broader market reach |

**Milestone**: 5,000+ MAU. Positive unit economics (LTV > 3x CAC).

---

## Phase 4: Scale & Expand (Month 7-12)
**Goal**: Market expansion, platform features, competitive moat

| Theme | Direction |
|-------|-----------|
| Market expansion | [New geography/segment] |
| Platform | [APIs, integrations, marketplace features] |
| AI/Intelligence | [Personalization, recommendations, automation] |
| Operational excellence | [Internal tools, automation, efficiency] |

**Milestone**: [Revenue target]. [User target]. [Market position target].
```

## Dependency Mapping

For complex products, map feature dependencies:

```
Feature A ──────────────────────────────────┐
Feature B ── depends on A ──────────────────┤
Feature C ──────────────────┐               ├── Phase 1 Complete
Feature D ── depends on B+C ┘               │
Payment Setup ──────────────────────────────┘

Feature E ── depends on Phase 1 ────────────┐
Feature F ── depends on analytics data ──────┤── Phase 2 Complete
Feature G ── independent ───────────────────┘
```

## Roadmap Principles

1. **Ship early, learn fast**: A 60% feature shipped today beats a 100% feature shipped next quarter
2. **Date things loosely**: "Q2" not "April 15th" - precision implies false certainty
3. **Kill features that don't earn their place**: If Phase 2 data shows Feature X isn't used, cut it
4. **Leave buffer**: Plan for 70% capacity. The other 30% is bugs, tech debt, and surprises
5. **Review monthly**: Roadmap is a living document, not a contract

## Prioritization Methods (and where each one lies to you)

### RICE
```
RICE = (Reach × Impact × Confidence) ÷ Effort. Reach = users or accounts affected PER QUARTER
(counted, not felt). Impact = 3 massive / 2 high / 1 medium / 0.5 low / 0.25 minimal. Confidence
= 100% data / 80% some evidence / 50% hunch. Effort = person-months including design, QA, rollout.
WORKED: onboarding checklist = 8,000 × 2 × 0.8 ÷ 3 = 4,267. Enterprise SSO = 40 × 3 × 1.0 ÷ 4 = 30.
RICE prefers onboarding 140:1, yet SSO unblocks $600K of stalled pipeline. The inputs are in
incompatible units, so the ranking is arithmetic theatre.
MISLEADS: Reach units must be identical across every scored item or the ranking is meaningless.
Impact is an invented ordinal multiplied as if cardinal. Confidence is applied to the item instead
of to each factor. Effort ignores opportunity cost, dependency risk, and who does the work. Net
effect: RICE systematically favours broad small optimizations over narrow high-value platform and
enterprise work. FIX: score within a category (growth vs enterprise vs platform) and convert Reach
to revenue-weighted terms when categories must compete.
```

### WSJF
```
WSJF = Cost of Delay ÷ Job Size. CoD = Business Value + Time Criticality + Risk Reduction /
Opportunity Enablement, each on modified Fibonacci (1, 2, 3, 5, 8, 13, 20).
WORKED: Item A (regulatory reporting) 8 + 13 + 3 = CoD 24 ÷ size 5 = 4.8. Item B (analytics module)
13 + 2 + 5 = CoD 20 ÷ size 13 = 1.5. A goes first despite lower business value, because delay costs
more per week.
MISLEADS: scores are relative WITHIN one batch only, so never compare across quarters or teams.
Time Criticality is the gameable field and is inflated by whoever is loudest. Job Size is estimated
by the team that wants the work. WSJF has no concept of a dependency chain, so a high-WSJF item
blocked for six weeks still ranks first. FIX: cap items scoring TC ≥ 13 at 20% of the batch, and
run the ranking through the dependency register before committing to it.
```

### Kano
```
Two questions per feature (functional: "how do you feel if present?", dysfunctional: "how do you
feel if absent?"), five options each: like it / expect it / neutral / tolerate it / dislike it.
The answer pair maps through the Kano table to Must-be, Performance, Attractive, Indifferent,
Reverse, or Questionable.
WORKED (n = 140): offline mode A 42% | O 18% | M 9% | I 28% → ATTRACTIVE, a differentiator.
Two-factor auth M 61% | O 14% | I 20% → MUST-BE: absence loses deals, presence delights nobody.
RULES: satisfy every must-be first (entry tickets, zero competitive credit), compete on performance
attributes, cap attractive-feature spend at 10-20% of capacity. DECAY: attractive slides to
performance and then to must-be within 18-36 months in fast categories (dark mode, biometric
unlock, SSO), so re-survey annually or your differentiator becomes table stakes while you still
call it innovation.
MISLEADS: measures STATED preference, not behaviour. Needs n ≥ 100 per segment. Users cannot
evaluate what they cannot picture, so genuinely novel concepts skew Indifferent. Mixing segments
averages a delighter for your target segment into indifference overall.
```

### Opportunity scoring (outcome-driven)
```
Survey OUTCOMES not features on two 1-10 scales: Opportunity = Importance + max(Importance −
Satisfaction, 0). WORKED: "minimize time to reconcile invoices" importance 8.7, satisfaction 3.9
→ 8.7 + 4.8 = 13.5. THRESHOLDS: >15 extreme | 12-15 attractive | 10-12 marginal | <10 overserved
(stop investing, consider withdrawing investment already made).
MISLEADS: needs n ≥ 60 per segment; outcome statements must be solution-free ("minimize time to X")
or you are polling for features with extra steps; averaging across segments hides the single
underserved segment worth targeting, so always cut results by segment before ranking.
```

### Choosing a method
```
<15 items, little data, early stage        → ICE, 30 minutes, move on
Cross-team quarterly plan, mixed sizes     → WSJF, or RICE scored within category
Mature market, what do users value         → Kano + opportunity scoring, n ≥ 100
Hard external dates involved               → cost of delay in currency per week, not a score
Customer tradeoff workshop                 → buy-a-feature with a fixed budget
MoSCoW is a communication device, not a prioritization method: unchecked, everything becomes a
Must. If you use it, cap Must at 60% of capacity in writing.
THE HONEST RULE: the top 3 and the bottom 50% are already obvious. Scoring exists to make the
ambiguous middle discussable, not to automate the decision. A ranking nobody in the room believes
is laundering a decision that was made somewhere else.
```

## Now / Next / Later vs Date-Based Roadmaps

```
| Dimension      | Now / Next / Later                | Date-based                            |
|----------------|-----------------------------------|---------------------------------------|
| Unit           | Problems and outcomes             | Features and milestones               |
| Horizon        | ~1 qtr / 2 qtrs / beyond          | Named months or sprints               |
| Best when      | Discovery-heavy, PLG, uncertain   | An external date already exists       |
| Fails when     | Partners need a date to plan      | Uncertainty is high, dates become     |
|                |                                   | fiction and trust erodes              |
| Implied promise| Sequence, not schedule            | A commitment people hold you to,      |
|                |                                   | whatever the caveats say              |

DATE-BASED IS REQUIRED WHEN: a contract or regulation sets the date; hardware or retail launch;
booked marketing spend; a partner joint launch; a seasonal window (tax season, holiday retail); a
conference keynote; an enterprise agreement with a delivery clause. In each, the date exists before
the roadmap does, so the roadmap's job is scope, not schedule.
THE HYBRID MOST COMPANIES NEED: Now/Next/Later for the bulk, plus a separate COMMITMENTS lane
carrying real dates, capped at 3 concurrent items and 15-25% of quarterly capacity. Every dated item
names who signed the commitment and the consequence of missing it.
CONFIDENCE LABELS on every item, shown on every export: COMMITTED (>90%, date shareable, in the
register) | PLANNED (~70%, quarter granularity, internal) | EXPLORING (<50%, theme only, no date).
```

## Capacity and Throughput Reality

```
WHY TEAMS OVERCOMMIT (structural, not moral): estimates are MODES not means, and the distribution
has a long right tail (a 2-week task cannot finish 2 weeks early but can be 4 weeks late);
non-project work is invisible at planning time (support, review, interviews, incidents, ramp);
interrupts arrive mid-quarter and are never subtracted; estimates get negotiated downward under
pressure and then treated as forecasts; dependencies are assumed to resolve on schedule.

USE HISTORICAL THROUGHPUT, NOT SUMMED ESTIMATES. Count items completed per week over the last 6-12
weeks and take cycle-time percentiles (median and p85). Plan against p85. Monte Carlo the throughput
sample for a range ("80% chance of 14-19 items this quarter") instead of a single number. Tools:
ActionableAgile, Nave, Jira built-ins, or a spreadsheet.
ESTIMATE INFLATION FACTOR: measure actual ÷ estimate over the last 20 items. Typical 1.3-1.8x.
Multiply future estimates by YOUR number and stop arguing about whether estimates are wrong.
LITTLE'S LAW: WIP = throughput × cycle time. To cut cycle time, cut WIP. Enforce 1-1.5 items in
progress per engineer.

ALLOCATION NORMS (% of engineering capacity, steady state):
  new value 50-60% | KTLO and maintenance 15-25% | tech debt and architecture 10-20% |
  bugs and escalations 10% | unallocated buffer 10%
  TRIGGERS: KTLO above 40% for two consecutive quarters means stop feature work and fix the
  platform, because you no longer have a product team. Tech debt below 10% for four consecutive
  quarters buys a 6-month re-platform later at 5-10x the cost of the deferred work.

WORKED CAPACITY (6 engineers, 12-week quarter):
  nominal 6 × 12 = 72.0 engineer-weeks
  × 0.65 availability (meetings, review, recruiting, ramp)          = 46.8
  − 5 weeks planned PTO                                             = 41.8
  − on-call drag (12 shifts × 50% productive loss)                  = 35.8
  − KTLO 20% (7.2) − tech debt 15% (5.4) − bugs 10% (3.6)
  = ROADMAP CAPACITY 19.6 engineer-weeks.
  If the Now column holds 34 engineer-weeks of estimates you are 73% over. Publish that in week 1
  instead of discovering it in week 10.
```

## Roadmap Communication by Audience

```
| Audience      | Show                                   | Granularity    | Commitment risk       |
|---------------|----------------------------------------|----------------|-----------------------|
| Engineering   | Sequenced items, dependencies, debt    | 1-2 sprints    | Over-detailing the far|
|               | slots, interface contracts             | detailed       | horizon causes rework |
| Sales / CS    | Themes + quarter + confidence label,   | Quarter only   | HIGH: a slide becomes |
|               | no dates below Committed               |                | a contract in a deal  |
| Exec / Board  | 3-4 bets, the outcome each serves,     | Quarter,       | Line items invite     |
|               | and what you are NOT doing             | outcomes only  | line-item management  |
| Customers     | Problems solved, broad timeframe,      | "this quarter" | Legal exposure from   |
|               | public changelog                       | / "exploring"  | forward-looking claims|
| Investors     | Strategy, moat, milestones to the      | Round horizon  | Milestones return as  |
|               | next round                             |                | diligence questions   |
| Support / Mkt | Launch-dated view 6 weeks out for      | Weeks          | Too late = enablement |
|               | enablement                             |                | gap; too early = leak |

RULES THAT PREVENT MOST ROADMAP DAMAGE: never send an editable file externally (PDF or read-only
view); stamp every external artifact with its confidence label and a dated footer reading
"Directional. Not a commitment. Subject to change"; keep ONE source of truth, because if sales
maintains a copy the wrong one is in front of the customer; customer-facing language is "we are
exploring", never "we will ship in Q3", unless the item sits in the commitments register; and always
state what is NOT on the roadmap, because the omissions are the strategy.
```

## The Sales-Driven Roadmap Request

```
INTAKE FORM (no request enters the backlog without all seven): 1) customer, ARR, deal stage;
2) the PROBLEM, not the requested feature; 3) is the account in the ICP; 4) how many other customers
asked; 5) is the deal contingent IN WRITING (verbal contingency is not one); 6) what happens if we
say no: lost, discount, delay, or nothing; 7) the workaround today and why it is not enough.

BUILD-IT THRESHOLDS (any one, otherwise the answer is no): deal ≥ 5-10% of the quarter's new-ARR
target AND contractually contingent | 3+ ICP customers asked for the same underlying problem | it
already sits on the strategy for another reason.
COMMIT BUDGET: single-customer commitments capped at 15-20% of quarterly capacity. Spent is spent,
and the register shows exactly where it went.
COST TAIL: a one-off feature costs 15-25% of build cost every year afterwards in maintenance. Price
custom development at full cost plus that tail, or decline it.

THREE ANSWERS, IN WRITING, NEVER "MAYBE": COMMITTED (dated, in the register, WITH the displaced item
named) | DIRECTIONAL (Next or Later, no date, no promise) | NO (reason plus an alternative:
workaround, services, partner, integration, or paid custom development).
ESCALATION PATH: AE files intake → PM answers within 2 business days with one of the three answers →
disagreement goes to weekly product/sales triage (30 min, both leads) → unresolved goes to a
VP tradeoff meeting. THE RULE THAT MAKES IT WORK: nothing enters the roadmap without something
leaving. The escalation must name the displaced item and its owner must be in the room. Saying that
out loud once in public prevents fifty future escalations.
```

## Dependency and Sequencing Logic

```
TYPES, in order of how badly they hurt: EXTERNAL VENDOR (contract, procurement, integration, lead
time 4-16 weeks) | COMPLIANCE and LEGAL (audit, DPA, certification, pen test, 4-12 weeks) | ORG
(another team's queue: lead time equals their queue depth, so ask for their throughput number, not
a promise) | HARD TECHNICAL (B cannot start until A's interface exists) | DATA (needs N weeks of
collected data, invisible until it is late) | DESIGN and RESEARCH (discovery must precede build).

DEPENDENCY REGISTER, reviewed weekly:
| ID | Item | Depends on | Type | Owner (named person) | Lead time | Needed by | Escalate by | Status |
ESCALATE-BY = needed-by − lead time − 2 weeks buffer, put in a calendar. A dependency without a
named person and a date is a wish, not a plan.

SEQUENCING RULES: start the longest lead-time external dependency FIRST regardless of value;
front-load the highest-uncertainty item, since a de-risking result in week 3 can re-plan the quarter
and the same result in week 11 cannot; order by number of downstream dependents, then by value;
decouple with interface contracts, mocks and feature flags so teams build in parallel instead of
queuing; never put two teams' critical paths in the same week; compute the critical path (the
longest chain) before publishing any date, because slack off that chain is free and adding people
to the chain rarely helps.
```

## Review Cadence and Re-Planning Triggers

```
WEEKLY (30 min)    : intake triage, commitment register, dependencies past escalate-by
BIWEEKLY (30 min)  : delivery checkpoint against Now; flag any slip greater than 1 week
MONTHLY (60 min)   : roadmap review. Move items across Now/Next/Later, update confidence labels,
                     publish the diff to every audience
QUARTERLY (half day): re-plan. Capacity re-baseline, say-do readout, kill list, allocation actuals

RE-PLAN OFF-CYCLE IMMEDIATELY IF ANY ONE FIRES:
  □ Say-do below 60% at mid-quarter        □ A P0 incident consuming >20% of a sprint
  □ Any OKR below 30% progress at mid-quarter   □ Budget/funding/headcount change >15%
  □ A competitor launch that changes the buying criteria
  □ A strategy or ICP change (re-score the backlog, do not merely re-shuffle it)
  □ Loss of a top-5 customer or churn above plan   □ A dependency past its escalate-by date
DO NOT re-plan for: one loud customer, a single bad week of metrics, a new executive's first idea,
or a competitor press release with no shipped product behind it.
```

## Measuring Roadmap Quality

```
| Metric             | Formula                                       | Target             |
|--------------------|-----------------------------------------------|--------------------|
| Say-do ratio       | committed items delivered ÷ committed         | 70-85%             |
| Outcome hit rate   | shipped items hitting their pre-stated metric | 30-40%             |
| Outcome coverage   | Now items with a metric set BEFORE build      | 100% Now, 80% Next |
| Roadmap churn      | (added + removed) ÷ planned, per quarter      | < 30%              |
| Scope creep        | final effort ÷ committed effort               | < 1.3              |
| Lead time          | commitment → ship, median and p85             | trending down      |
| Allocation actuals | KTLO / debt / new value vs target             | within 5pp         |

READING THEM HONESTLY: say-do above 95% for three quarters is SANDBAGGING, not excellence, and
means you are hiding capacity; below 50% the roadmap is fiction nobody will plan against. Count only
COMMITTED items or the ratio is trivially gameable. An outcome hit rate above 70% means the success
metrics were unambitious or written after the results arrived; 30-40% with honest metrics beats 90%
with post-hoc ones. Churn above 50% means the planning horizon exceeds your certainty horizon, so
shorten the horizon rather than blaming the team for thrash. Publish all seven quarterly: an
unmeasured roadmap drifts toward output, because output is the only thing easy to see.
```

## Anti-Pattern: The Feature-Factory Roadmap

```
SYMPTOMS (three or more and you are in one):
  □ Nothing measured after ship; "shipped" IS the definition of success
  □ The roadmap is features and dates with no stated outcomes
  □ Nothing has ever been removed or killed; the backlog only grows
  □ Requirements arrive from execs and sales as solutions, not problems
  □ Discovery is skipped; the PM writes specs from the loudest request
  □ Velocity or story points is the number reported upward
  □ Teams are staffed per project and disbanded, so nobody owns an outcome
  □ Launches are celebrated; impact is never revisited 30 days later
  □ Big-batch releases, long gaps between customer contact and shipped code
  □ Experiments are rare and their results are not published

TWO-QUESTION DIAGNOSTIC: "Name the last three things we removed, and why." and "What metric did the
last feature we shipped actually move?" Two blanks is your answer.

THE FIX, IN ORDER (do not start at step 3): 1) attach one outcome metric to every Now item and
publish the result 30 days post-ship, wins and losses alike; 2) create a quarterly kill list and
remove at least one shipped feature, which is the step that proves to the team that the change is
real; 3) rewrite the roadmap in problems and opportunities rather than features; 4) fund teams
against a problem for at least 2 quarters instead of per project; 5) replace the status-report
review with an outcome review, since the agenda change does more than the document change; 6) make
discovery evidence a gate for entering Now (see mvp-framework.md for riskiest-assumption tests and
ab-testing-framework.md for the evidence bar).
ROOT CAUSE: feature factories are produced by incentives, where leaders are rewarded for launches
and nobody is accountable for outcomes 90 days later. Fixing the review meeting fixes more than
fixing the roadmap document ever will.
```

## One-Page Roadmap Brief

```
QUARTER: ______  TEAM: ______  STRATEGY THIS SERVES: ________________________________
ROADMAP CAPACITY: ____ engineer-weeks (nominal ____ × factor ____ − PTO − on-call − KTLO)
ALLOCATION: new value ___% | KTLO ___% | tech debt ___% | bugs ___% | buffer ___%
NOW (committed, dated, owners): _____________________________________________________
NEXT (planned, quarter granularity): ________________________________________________
LATER (exploring, themes only): _____________________________________________________
NOT DOING THIS QUARTER, AND WHY: ____________________________________________________
COMMITMENT REGISTER: ___ items = ___% of capacity (cap 15-20%)
TOP 3 DEPENDENCIES + ESCALATE-BY DATES: _____________________________________________
OUTCOME METRIC PER NOW ITEM: ________________________________________________________
LAST QUARTER: say-do ___% | outcome hit rate ___% | churn ___% | scope creep ___x
RE-PLAN TRIGGERS ARMED: _____________________________________________________________
```
