# Growth Model Framework

## Purpose
A funnel measures how users move through a one-way path. A loop measures how
output (users, content, revenue) becomes input (more users, content, revenue).
Funnels leak. Loops compound. This framework helps you instrument both, find
your one engine that compounds, and run the experiment machine that improves it.

**The rule of growth: find ONE loop that works, then pour fuel on it.**
Everything else is a distraction until that loop is proven.

---

## 1. LOOPS VS FUNNELS

```
FUNNEL (linear — describes a single user's journey):

  Acquisition → Activation → Retention → Revenue → Referral
  100 ───────→  40 ──────→  18 ──────→  9 ─────→  2
  (each stage leaks; you constantly re-fill the top by spending money)

LOOP (circular — describes how the system grows itself):

        ┌──────────────────────────────────────────┐
        │                                            │
        ▼                                            │
  New user signs up                                  │
        │                                            │
        ▼                                            │
  Gets value (activates)                             │
        │                                            │
        ▼                                            │
  Takes an action that exposes the product           │
  to a NON-user (invite, share, content, etc.)       │
        │                                            │
        ▼                                            │
  Non-user sees it → becomes a new user ─────────────┘

THE DIFFERENCE:
- Funnel growth is ADDITIVE. Stop spending → growth stops.
- Loop growth is COMPOUNDING. Each cohort seeds the next.
- You need BOTH: the funnel diagnoses where you leak; the loop is your engine.
```

---

## 2. THE FOUR CORE LOOP TYPES

```
┌──────────────┬────────────────────────────┬─────────────────┬──────────────┐
│ Loop         │ Mechanism                  │ Cycle time      │ Best for     │
├──────────────┼────────────────────────────┼─────────────────┼──────────────┤
│ VIRAL        │ User invites/shares → new  │ Hours–days      │ Collaboration│
│              │ user → invites again       │ (fast)          │ social, comms│
│ CONTENT      │ User/product creates       │ Weeks–months    │ Marketplaces,│
│              │ content → ranks/shared →   │ (slow, durable) │ UGC, SEO     │
│              │ attracts users → more      │                 │              │
│ PAID         │ User pays → revenue funds  │ Days–weeks      │ Predictable  │
│              │ ads → acquires user → pays │ (gated by CAC)  │ unit economics│
│ SALES        │ Rep closes → revenue funds │ Weeks–quarters  │ High-ACV B2B │
│              │ more reps → close more     │ (slow, costly)  │              │
└──────────────┴────────────────────────────┴─────────────────┴──────────────┘
```

### Viral loop math
```
Each user invites (i) others. Of those, (c)% convert. k-factor = i × c.
  k > 1  → exponential, self-sustaining growth (rare; treasure it)
  k 0.5–1 → strong amplifier; halves your effective CAC
  k < 0.3 → nice-to-have, not an engine
Cycle time matters as much as k: k=0.5 every 2 days beats k=0.7 every 30 days.
```

### Content loop math
```
Pages created/month × % that rank × visits/ranked page × visit→signup %
= new users/month. Compounds because old pages keep ranking (the "asset" stays).
Worked: 500 listings × 30% rank × 40 visits/mo × 3% = 180 signups/mo, growing.
```

### Paid loop math
```
Sustainable ONLY if: LTV > CAC (target LTV:CAC ≥ 3) AND CAC payback < 12 months.
Reinvest a fixed % of new revenue into acquisition. Loop velocity gated by payback.
```

---

## 3. AARRR METRICS WITH FORMULAS

```
┌────────────┬───────────────────────────────┬──────────────────────────────┐
│ Stage      │ Definition                    │ Formula                      │
├────────────┼───────────────────────────────┼──────────────────────────────┤
│ Acquisition│ Users arriving                │ Visitors (by channel)        │
│ Activation │ Users reaching first value    │ Activated ÷ Signups          │
│ Retention  │ Users coming back             │ Active in period N ÷ cohort  │
│ Revenue    │ Users paying                  │ Paying ÷ Active; ARPU; MRR   │
│ Referral   │ Users bringing others         │ Invites sent × accept rate   │
└────────────┴───────────────────────────────┴──────────────────────────────┘

KEY DERIVED FORMULAS:
  MRR             = Σ(active subscriptions × monthly price)
  ARPU            = MRR ÷ active users
  Gross churn %   = MRR lost (churn+downgrade) ÷ starting MRR
  Net revenue ret = (start MRR + expansion − churn − contraction) ÷ start MRR
  LTV (simple)    = ARPU × gross margin % ÷ monthly churn %
  CAC             = total S&M spend ÷ new customers acquired (same period)
  CAC payback (mo)= CAC ÷ (ARPU × gross margin %)
  Quick Ratio     = (new MRR + expansion MRR) ÷ (churned + contraction MRR)
                    (>4 is healthy growth; <1 is shrinking)
```

---

## 4. THE METRICS TREE (North Star → inputs)

```
Build top-down. The North Star is the ONE number that best proxies delivered value.
Below it, the equation that produces it. Below that, the inputs teams actually move.

                    ┌─────────────────────────┐
                    │   NORTH STAR METRIC     │   e.g. "Weekly Active Teams
                    │  (value delivered)      │    that sent 5+ messages"
                    └────────────┬────────────┘
            ┌────────────────────┼────────────────────┐
            ▼                    ▼                    ▼
      New activated         Retained from        Resurrected
      teams (acquisition    prior weeks          (win-back)
       × activation)        (retention)
            │                    │                    │
     ┌──────┴──────┐      ┌──────┴──────┐      ┌──────┴──────┐
     ▼             ▼      ▼             ▼      ▼             ▼
  Signups   Activation  D7 ret    Feature    Dormant     Win-back
  by chan.  rate %      curve     depth      pool        campaign CTR
  (INPUTS — teams own these and run experiments against them)

NORTH STAR EXAMPLES BY MODEL:
  Marketplace : completed transactions/week (both sides matched)
  B2B SaaS    : weekly active accounts performing the core action
  Consumer    : DAU performing the habit action (not just "opened app")
  Content     : time/sessions of meaningful consumption
  AVOID vanity: registered users, total downloads, page views, raw MAU
```

---

## 5. ACTIVATION DEFINITION WORKSHOP (the aha moment + magic number)

```
GOAL: Define the precise event + threshold that predicts long-term retention.

STEP 1 — List candidate "value events" (the things users do early).
STEP 2 — For each, split users who did vs. didn't in their first 7 days.
STEP 3 — Compare D30 retention between the two groups. Biggest gap wins.
STEP 4 — Find the threshold (the "magic number") where retention curve flattens.

THE FORMULA:  Activation = [core action] × [count] × [time window]

WORKED EXAMPLE (collaboration tool):
  Candidates tested:        invited 1 teammate | created 1 doc | sent 10 msgs
  D30 retention if did:           34%          |     41%       |     71%
  D30 retention if not:           22%          |     24%       |     19%
  → "Sent 10+ messages with 2+ teammates in first 7 days" = the aha moment.
  Threshold sweep: 5 msgs→48%, 10 msgs→71%, 15 msgs→73% (flattens at 10).
  ACTIVATION = "2+ teammates AND 10+ messages within 7 days."
  Every onboarding experiment now optimizes for THIS, not generic signups.

(Slack's famous version: "2,000 messages sent by a team." Facebook's: "7 friends
in 10 days." Yours is specific to your product — go find it in your data.)
```

---

## 6. RETENTION COHORT ANALYSIS

### How to read a retention curve
```
% of cohort active
100│●
   │ ●
 60│  ●
   │   ●●
 30│     ●●●─────────────────  ← THE SMILE: curve flattens, then ticks UP
   │        ↑ flat = you found PMF for a segment (they keep coming back)
  0└──────────────────────────────► weeks
   D0  D1  D7  D14  D30  D60  D90

DIAGNOSIS:
  Curve hits zero        → no PMF. Fix the product, don't fix marketing.
  Curve flattens > 0     → a segment retains. Find them, double down.
  Curve smiles (ticks up)→ best case. Expansion/habit within retained users.
```

### Classic (triangle) retention cohort table
```
Cohort     Size  │ M0   M1   M2   M3   M4   M5
─────────────────┼────────────────────────────────
Jan        1,000 │100%  42%  31%  28%  27%  27%   ← flattening at ~27% = good
Feb        1,300 │100%  45%  34%  31%  30%
Mar        1,500 │100%  48%  37%  34%               ← onboarding change paid off
Apr        1,700 │100%  51%  40%                     (M1 climbing cohort-over-cohort)
May        2,100 │100%  53%
Read DOWN a column to see if you're improving retention over time.
Read ACROSS a row to see a single cohort's decay curve.
```

### Layer-cake (retention as revenue/usage stacked by cohort)
```
Active users
        ┌─────────────────────── new (Jun)
        │ ┌───────────────────── retained May
        │ │ ┌─────────────────── retained Apr
        │ │ │ ┌───────────────── retained Mar
        │ │ │ │ ┌─────────────── retained Feb
   ─────┴─┴─┴─┴─┴──────────────► time
If each layer stays thick over time, the cake grows tall = compounding retention.
If layers thin to nothing, you're on a treadmill (the "leaky bucket").
```

---

## 7. THE EXPERIMENT ENGINE

### Hypothesis backlog template
| ID | Hypothesis (We believe X → Y because Z) | Stage (AARRR) | Metric | Effort | Confidence | Reach/Impact | Score |
|----|------------------------------------------|---------------|--------|--------|-----------|--------------|-------|
| E-01 | Adding social login → +signups because PW friction is #1 drop | Acquisition | Signup % | 2 | 70% | High | |

### ICE scoring (fast, for early stage)
```
ICE = (Impact 1-10 + Confidence 1-10 + Ease 1-10) ÷ 3.  Rank desc. Run top first.
Example: Social login → Impact 7, Confidence 7, Ease 8 → 7.3 (do it).
```

### RICE scoring (for prioritizing across a roadmap)
```
RICE = (Reach × Impact × Confidence) ÷ Effort
  Reach      = # users affected per quarter (e.g. 5,000)
  Impact     = 3 massive / 2 high / 1 medium / 0.5 low / 0.25 minimal
  Confidence = 100% / 80% / 50%
  Effort     = person-months
Worked: Reach 5,000 × Impact 2 × Confidence 0.8 ÷ Effort 1.5 = 5,333.
```

### Experiment doc template
```
EXPERIMENT: [name]                              Owner: ___  Ship date: ___
HYPOTHESIS: We believe [change] will [move metric] by [MDE] because [evidence].
PRIMARY METRIC: ____ (one only)   CURRENT BASELINE: ____
GUARDRAIL METRICS: ____, ____ (must NOT worsen — e.g. revenue, latency, churn)
DESIGN: variants ___ | split ___ | randomization unit: user | segment: ___
SAMPLE SIZE: ___ per variant   DURATION: ___ (min 1 full week; 2 wks if novelty risk)
HOLDOUT: ___% kept on control to measure long-term/cumulative effect
RESULT: lift ___ | p-value/CI ___ | guardrails ___ | DECISION: ship / kill / iterate
LEARNING: what we now believe that we didn't before.
```

### Guardrails, holdouts, and MDE
```
GUARDRAIL METRICS : metrics that must not degrade even if the primary improves
                    (revenue/user, p95 latency, churn, support tickets, unsubscribe).
HOLDOUT           : a slice (1–10%) permanently kept on control to measure the
                    cumulative impact of all shipped wins (catches "death by a
                    thousand local maxima" where individual wins don't add up).
MINIMUM DETECTABLE  the smallest effect worth detecting. Smaller MDE = much larger
EFFECT (MDE)        sample. For sample-size math, multiple-comparison correction,
                    peeking, and SRM checks → see ab-testing-framework.md.
```

---

## 8. PLG VS SALES-LED DECISION

```
                    Is the product usable & valuable to ONE person
                    WITHOUT setup, integration, or a buying committee?
                              │                          │
                            YES                          NO
                              │                          │
            ACV < $5K & broad mkt?             ACV > $25K or complex?
                 │          │                       │          │
               YES         NO                      YES        (rare)
                 │          │                       │
            ┌────▼────┐ ┌───▼─────┐           ┌─────▼──────┐
            │  PLG    │ │ HYBRID  │           │ SALES-LED  │
            │self-serve│ │PLG+sales│           │ AE + demos │
            └─────────┘ │ assist  │           │ + MAP/MEDDIC│
                        └─────────┘           └────────────┘
ACV = annual contract value. Hybrid ("product-led sales") is now the common path:
self-serve bottoms-up adoption, then a rep engages accounts showing buying intent.
For the sales motion's playbook → see sales-playbook.md.
```

---

## 9. LIFECYCLE MESSAGING TRIGGER MAP

```
┌───────────────────┬──────────────────────────┬────────────────────────────┐
│ Trigger (event)   │ Message / intervention   │ Channel & timing           │
├───────────────────┼──────────────────────────┼────────────────────────────┤
│ Signup, no activate│ "Finish setup in 2 min"  │ Email + in-app, 1h & 24h   │
│ Activated          │ Celebrate + next step    │ In-app, immediate          │
│ Power feature unused│ "Did you know…" nudge    │ In-app tooltip, on session │
│ Usage drop >50%    │ Win-back / check-in      │ Email, within 48h          │
│ Approaching limit  │ Upgrade prompt           │ In-app, at 80% of limit    │
│ Trial day -3       │ Value recap + offer      │ Email + rep (if B2B)       │
│ Payment failed     │ Dunning sequence         │ Email, day 0/3/7/14        │
│ Churned            │ Exit survey + win-back   │ Email, day 1/7/30          │
│ Hit aha moment ×N  │ Ask for referral/review  │ In-app, at peak happiness  │
└───────────────────┴──────────────────────────┴────────────────────────────┘
Tie triggers to the metrics tree: each fires when an INPUT metric breaches a line.
```

---

## 10. GROWTH BENCHMARKS

```
ACTIVATION RATE (signup → first value):
  Consumer app   : 20–40% (great >40%)        B2B SaaS: 30–60% (great >60%)

RETENTION (% of cohort still active) — these vary widely; use as rough goalposts:
┌────────────────┬───────┬───────┬───────┐
│ Category       │  D1   │  D7   │  D30  │
├────────────────┼───────┼───────┼───────┤
│ Social/comms   │ 50%   │ 30%   │ 22%   │
│ Games (casual) │ 35%   │ 15%   │  6%   │
│ Productivity   │ 40%   │ 25%   │ 16%   │
│ B2B SaaS (mo)  │  —    │  —    │ 80%+  │ ← logo retention, monthly
└────────────────┴───────┴───────┴───────┘

K-FACTOR        : >1 viral; 0.5–1 strong amplifier; <0.3 minor.
CAC PAYBACK     : <12 mo good (SMB), <18 mo acceptable (enterprise), <6 mo elite.
LTV:CAC         : ≥3 healthy; >5 may be UNDER-investing in growth; <1 unsustainable.
NET REVENUE RET : >100% great (expansion outruns churn); >120% best-in-class SaaS.
GROSS CHURN/mo  : <2% great, 2–4% ok, >5% leaky (SMB SaaS tolerates higher).
```

---

## 11. WORKED EXAMPLE A — B2B SaaS (team analytics tool)

```
North Star : "Weekly active workspaces with 3+ active members"
Loop       : SALES-ASSISTED PLG — free workspace → teammate invites (viral assist)
             → usage limit → AE engages → paid → more seats (expansion loop)
Activation : "Connected 1 data source AND invited 2 teammates in first 7 days"
Funnel     : 1,000 signups → 55% activate → 80% M1 retain → 9% to paid → NRR 118%
Key metrics: CAC $1,800 | ARPU $90/mo | gross margin 82% | payback = 1800/(90×.82)
             = 24 mo (too slow!) → fix: drive expansion + raise activation to cut CAC.
Top experiment: "Auto-suggest teammates from email domain" → +14% invites (shipped).
```

## 12. WORKED EXAMPLE B — Consumer app (habit/journaling)

```
North Star : "DAU who logged an entry" (the habit action, not "opened app")
Loop       : CONTENT + VIRAL — users share streak cards → friends install → streak
Activation : "Logged entries on 3 of first 7 days" (D30 ret 58% vs 11% if not)
Funnel     : 10,000 installs → 32% activate → D1 44% / D7 26% / D30 15%
Monetize   : freemium → 4% to paid at $40/yr → ARPU $1.60/yr blended
k-factor   : invites 0.9 × accept 22% = k 0.20 (minor) → invest in content loop instead
Top experiment: "Day-2 reminder push at user's logging time" → D7 26%→31% (shipped).
```

---

## ONE-PAGE GROWTH BRIEF

```
NORTH STAR METRIC: _______________________________________________
PRIMARY LOOP (viral/content/paid/sales): ________________________
  Loop cycle time: ______   Loop strength (k / payback / rank %): ______
ACTIVATION = [action] × [count] × [window]: _____________________
CURRENT FUNNEL: acq ___ → act ___% → ret(D30) ___% → rev ___% → ref ___
TOP 3 INPUT METRICS TO MOVE THIS QUARTER: 1) ____ 2) ____ 3) ____
NEXT 3 EXPERIMENTS (by ICE/RICE): 1) ____ 2) ____ 3) ____
GUARDRAILS THAT MUST NOT BREAK: ________________________________
```
