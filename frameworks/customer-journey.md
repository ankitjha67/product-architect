# Customer Journey & Lifecycle Framework

A customer journey is the end-to-end path from "never heard of you" to "tells
everyone about you." This framework maps every stage, who owns it, where the
moments of truth are, how to instrument it, and the plays that move people from
one stage to the next - with filled templates and worked B2B + B2C examples.

---

## 1. THE END-TO-END LIFECYCLE STAGES

```
AWARENESS ──► CONSIDERATION ──► PURCHASE ──► ONBOARDING ──► ADOPTION
                                                                │
   ADVOCACY ◄── EXPANSION ◄── RETENTION ◄─────────────────────┘
        │                          │
        └──────────────────────────┴──► (CHURN ──► WIN-BACK / SAVE)

| Stage         | Customer state                  | Goal                      |
|---------------|---------------------------------|---------------------------|
| Awareness     | Has a problem, discovers you     | Get on the radar          |
| Consideration | Evaluating options              | Be the obvious choice     |
| Purchase      | Decides + buys                  | Remove friction, close    |
| Onboarding    | Setting up, first use           | Reach first value (TTV)   |
| Adoption      | Using core value regularly      | Build the habit           |
| Retention     | Renewing, staying               | Sustain value, prevent churn|
| Expansion     | Buying more / upgrading         | Grow account (NRR)        |
| Advocacy      | Referring, reviewing            | Turn into a growth loop   |
| Churn-save    | Leaving / at-risk               | Diagnose + win back       |
```

---

## 2. JOURNEY MAPPING METHOD (filled template)

```
For each stage, map: actions, thoughts, emotions, touchpoints, pain points,
opportunities. Build from real research, not assumptions.

EXAMPLE - "Consideration" stage of a B2B SaaS journey:
| Lens         | Content                                                         |
|--------------|-----------------------------------------------------------------|
| ACTIONS      | Reads reviews, books demo, compares 3 vendors, loops in team    |
| THOUGHTS     | "Will this actually save time? Will my team adopt it? Is it safe?"|
| EMOTIONS     | 😟 skeptical → 🙂 hopeful after demo → 😬 anxious about switching  |
| TOUCHPOINTS  | G2, website, demo call, pricing page, security docs             |
| PAIN POINTS  | Pricing unclear; unsure about migration; needs buy-in from IT   |
| OPPORTUNITIES| ROI calculator, migration guide, security one-pager, free pilot |

EMOTION CURVE (plot the highs and lows across the whole journey):
😀 │        ●demo                    ●first value      ●expansion
😐 │  ●aware    ●pricing                 ●habit
😟 │              ●migration fear  ●setup friction
   └──awareness─consider─purchase─onboard─adopt─retain─expand──►
   Lows = where you lose people. Fix the deepest dips first.
```

---

## 3. MOMENTS OF TRUTH - "WOW" vs "OW"

```
MOMENTS OF TRUTH = high-stakes interactions that disproportionately shape
perception. Get them right (WOW) and you earn loyalty; wrong (OW) and you churn.

| Moment                    | WOW (do this)                 | OW (avoid this)            |
|---------------------------|-------------------------------|----------------------------|
| First value (aha)         | Fast, obvious, delightful     | Buried behind setup        |
| First support contact     | Fast, human, resolves it      | Bot loop, slow, no fix     |
| First bill / renewal      | No surprises, clear value     | Surprise charge, friction  |
| A failure/outage          | Proactive, honest, made right | Silence, blame, no recovery|
| Hitting a limit           | Smooth upgrade path           | Hard wall, frustration     |
| Offboarding (yes, this!)  | Graceful, data export, "door open"| Hostage tactics, dark patterns|

PRINCIPLE: invest disproportionately in the few moments of truth. A great
recovery from a failure (service recovery paradox) can create MORE loyalty than
if nothing had gone wrong. Map your moments and over-engineer them.
```

---

## 4. STAGE → OWNER MAP

```
| Stage         | Primary owner                  | Supporting agents              |
|---------------|--------------------------------|--------------------------------|
| Awareness     | Marketing (Agent 15)           | Brand/Messaging                |
| Consideration | Marketing + Sales (Agent 16)   | Content, SE                    |
| Purchase      | Sales (sales-playbook.md)      | Finance, Legal                 |
| Onboarding    | Customer Success (Agent 17)    | Product, Support               |
| Adoption      | Product (Agent 04) + CS        | Growth (growth-model.md)       |
| Retention     | Customer Success (Agent 17)    | Product, Support               |
| Expansion     | CS / Account Mgmt + Sales       | Product                        |
| Advocacy      | Marketing + CS                 | Community                      |
| Churn-save    | Customer Success (Agent 17)    | Product, Finance               |

RULE: every stage has ONE accountable owner. The handoffs between owners
(especially Sales → CS at purchase→onboarding) are where customers get dropped -
make them explicit (see sales-playbook.md §10 warm handoff).
```

---

## 5. SERVICE BLUEPRINT (frontstage / backstage / support)

```
A service blueprint extends the journey map DOWN into your operations - it shows
what has to happen behind the scenes to deliver each customer-facing moment.

EXAMPLE - "Onboarding kickoff":
  ───────────────────────── LINE OF INTERACTION ─────────────────────────
  CUSTOMER ACTION:   joins kickoff call → connects data → invites team
  ─────────────────────────────────────────────────────────────────────
  FRONTSTAGE (visible):  CSM runs call, shares setup guide, confirms goals
  ───────────────────────── LINE OF VISIBILITY ──────────────────────────
  BACKSTAGE (hidden):    CSM preps account from sales handoff doc; provisions env
  ───────────────────────── LINE OF INTERNAL INTERACTION ─────────────────
  SUPPORT PROCESSES:     CRM→CS sync, integration API, onboarding checklist tool

USE IT TO: find where a great customer moment depends on a fragile internal
process - and fix the backstage before it breaks the frontstage.
```

---

## 6. ONBOARDING JOURNEY DEEP-DIVE

```
ONBOARDING is the highest-leverage stage: it sets retention for the whole life.
Goal = reach TIME-TO-VALUE (TTV) as fast as possible.

ACTIVATION MILESTONES (map the path to first value - see growth-model.md §5):
  Signup → Setup complete → First core action → Aha moment → Habit formed
            │                  │                  │            │
        (remove friction)  (guide to it)     (celebrate)   (make it routine)

ONBOARDING PLAYBOOK:
  ✓ Define ACTIVATION explicitly (the measurable "aha" + magic number)
  ✓ Shorten TTV: pre-fill, templates, sample data, "do it for them" white-glove (B2B)
  ✓ Onboarding checklist / progress bar (completion correlates with retention)
  ✓ Lifecycle nudges for stalled users (see §9 triggers)
  ✓ For B2B: kickoff call, success plan, named CSM, 30/60/90 goals
  ✓ Measure: activation rate, TTV (median days/hours), onboarding completion %

BENCHMARK: activation 30-50% (B2B self-serve), 20-40% (consumer). TTV: faster is
always better - every hour of delay leaks users.
```

---

## 7. RETENTION & EXPANSION LOOPS

```
RETENTION LOOP (the habit):
  Use core value ──► get outcome ──► trigger to return ──► use again
  Levers: re-engagement triggers, increasing value over time, switching cost
  (data, integrations, workflows embedded), and continuous "next value."

EXPANSION LOOP (grow the account - drives NRR > 100%):
  | Expansion type | Trigger                          | Play                   |
  |----------------|----------------------------------|------------------------|
  | Seat expansion | More team members invited/active | usage-based prompt     |
  | Tier upgrade   | Hit a limit / need a feature     | in-product upgrade CTA |
  | Cross-sell     | Adjacent need surfaces           | CSM recommendation     |
  | Usage growth   | More volume/workflows            | usage-based pricing    |

NRR = (start MRR + expansion − contraction − churn) ÷ start MRR.
>100% = you grow even with zero new customers. The most powerful loop in SaaS.
```

---

## 8. CHURN DIAGNOSIS & SAVE PLAYS

```
CHURN SIGNALS (instrument these as a health score):
  Login frequency ↓ >50% WoW · core feature unused · support tickets ↑ ·
  champion left the account · seats declining · payment failures · NPS drop.

DIAGNOSE (why are they leaving?):
  | Root cause          | Save play                                      |
  |---------------------|------------------------------------------------|
  | Never activated     | re-onboard, white-glove setup, show first value|
  | Missing feature     | roadmap commitment + timeline, interim workaround|
  | Too expensive       | right-size plan, annual discount, ROI reminder |
  | Bad experience      | apologize specifically, fix, comp, exec touch  |
  | Champion left       | re-establish value with new stakeholder        |
  | No longer needed    | accept gracefully, leave door open, get feedback|

(Full save scripts in scenario-playbooks.md → "Churn Save Playbook.")
HEALTH SCORE: combine signals into red/yellow/green; trigger CS outreach BEFORE
the cancel, not after. Proactive beats reactive every time.
```

---

## 9. VOICE-OF-CUSTOMER INSTRUMENTATION (tie to Agent 17)

```
Place the right survey at the right moment - don't spray NPS everywhere.

| Metric | Measures              | Best placement                    | Scale     |
|--------|-----------------------|-----------------------------------|-----------|
| CSAT   | Satisfaction with an interaction| right after support/onboarding | 1-5 / %  |
| CES    | Effort to get something done   | right after a task (e.g. setup)| 1-7 (low=good)|
| NPS    | Overall loyalty/advocacy       | periodic relationship survey   | 0-10, -100..+100|
| PMF survey| "how disappointed if gone"  | with engaged users (>40% "very")| %        |

CLOSE THE LOOP: a survey you don't act on erodes trust. Route detractors to CS
for follow-up; mine verbatims for product & messaging (see brand-messaging.md §7).
See Agent 17 for CS operating model and the de-escalation/save scripts.
```

---

## 10. LIFECYCLE MESSAGING TRIGGERS

```
| Stage      | Trigger                       | Message goal        | Channel        |
|------------|-------------------------------|---------------------|----------------|
| Onboarding | signup, no activation 24h     | drive to first value| email + push   |
| Onboarding | reached aha                   | reinforce + next step| in-app         |
| Adoption   | hasn't used feature X         | feature education   | email/in-app   |
| Retention  | usage dropped >50%            | re-engage           | email + push   |
| Expansion  | hit plan limit                | upgrade prompt      | in-app         |
| Expansion  | high usage / many seats       | upsell via CSM      | human + email  |
| Renewal    | 60/30 days pre-renewal        | reinforce value/ROI | email + CSM    |
| Churn-save | cancel initiated              | save offer/feedback | human email    |
| Advocacy   | high NPS / power user         | referral/review ask | email + in-app |
(Shared with growth-model.md §9 - keep these in sync as one source of truth.)
```

---

## 11. JOURNEY ANALYTICS & FUNNEL INSTRUMENTATION (Agent 16)

```
Instrument the journey so you can SEE where people drop. Track a defined event
at every stage transition.

FUNNEL EVENTS (example):
  visited → signed_up → activated → habit_formed → upgraded → referred

| Transition          | Metric            | Diagnose when low          |
|---------------------|-------------------|----------------------------|
| visit → signup      | signup rate       | positioning/landing page   |
| signup → activate   | activation rate   | onboarding/TTV             |
| activate → retain   | Dn retention      | core value/habit           |
| retain → expand     | NRR / upgrade rate| value ceiling/pricing      |
| any → advocate      | referral rate / NPS| product love              |

TOOLS: PostHog, Amplitude, Mixpanel (funnels + cohort retention curves). Pair
funnel drop-off with cohort retention (growth-model.md §6) to know if it's an
acquisition, activation, or retention problem. See Agent 16 (Analytics).
```

---

## 12. WORKED EXAMPLE A - B2B SaaS journey

```
Product: design-review platform. ACV ₹6L/yr. Sales-assisted.
| Stage        | Key moment            | Owner   | Metric → target          |
|--------------|-----------------------|---------|--------------------------|
| Awareness    | G2 listing, content   | Mktg    | qualified traffic        |
| Consideration| demo + ROI calc       | Sales   | demo→opp 40%             |
| Purchase     | pilot → contract      | Sales   | win rate 25%             |
| Onboarding   | kickoff + connect data| CS      | TTV <7 days, activate 50%|
| Adoption     | 3+ teammates active   | CS/Prod | WAU/account              |
| Retention    | QBR, value review     | CS      | logo retention >90%      |
| Expansion    | seat + tier growth    | CS/Sales| NRR >115%                |
| Advocacy     | case study, referral  | Mktg    | referral-sourced %       |
MOMENT OF TRUTH: the Sales→CS handoff at purchase→onboarding. Warm handoff doc
+ joint kickoff = activation; cold handoff = early churn.
```

---

## 13. WORKED EXAMPLE B - B2C app journey

```
Product: habit-tracking app. Freemium, ₹399/mo premium. Mobile.
| Stage        | Key moment             | Owner   | Metric → target          |
|--------------|------------------------|---------|--------------------------|
| Awareness    | App Store + share-cards| Mktg    | installs                 |
| Consideration| store page + reviews   | Mktg    | install→open 70%         |
| Purchase     | (free signup)          | Product | signup rate              |
| Onboarding   | log first habit fast   | Product | activate (3 logs/7d) 45% |
| Adoption     | daily streak habit     | Product | D7 25% / D30 15%         |
| Retention    | reminders, streaks     | Product | D30 retention            |
| Expansion    | paywall after week 1   | Growth  | free→premium 3%          |
| Advocacy     | streak share / review  | Growth  | k-factor 0.3             |
| Churn-save   | win-back push at D14 lapse| Growth| reactivation rate        |
MOMENT OF TRUTH: first-session "log a habit." If it's not effortless and
rewarding within seconds, D1 retention collapses and nothing downstream matters.
```

---

## ONE-PAGE JOURNEY BRIEF

```
SEGMENT: ____________   PRIMARY LOOP: ____________ (see growth-model.md)
STAGE OWNERS: aware ___ consider ___ purchase ___ onboard ___ retain ___ expand ___
ACTIVATION DEFINITION (aha + magic number): __________________________
TTV TARGET: ______   TOP MOMENT OF TRUTH: ____________  (over-engineer it)
DEEPEST EMOTION DIP / drop-off: ____________  → fix: ____________
VOC INSTRUMENTATION: CSAT @___  CES @___  NPS @___
TOP CHURN SIGNAL: ____________  → save play: ____________
NRR TARGET: ______   REFERRAL/ADVOCACY TRIGGER: ____________
```
