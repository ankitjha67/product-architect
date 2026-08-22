# Pricing & Packaging Framework

> **⚠️ DISCLAIMER:** The benchmarks, templates, and discount matrices here are illustrative
> frameworks, not financial, tax, or legal advice. Pricing changes, discounts, and localization
> carry revenue-recognition, tax (VAT/GST), and contractual consequences - have a CA/CPA and
> counsel review before going live. See [DISCLAIMER.md](../references/DISCLAIMER.md).

## Purpose
This is the tactical, copy-paste companion to **Agent 36 (Pricing & Monetization)**. Agent 36
holds the strategy and the why; this framework holds the runbooks, survey templates, decision
trees, and checklists you execute. Use them together.

---

## PART 1 - THE PRICING PROJECT WORKFLOW (step by step)

```
A pricing project is a 6-8 week effort, not an afternoon. Run it in order - skipping research
is how companies ship prices they regret for years.

WEEK 1 - FRAME
  □ Define the goal: new pricing? a raise? a re-package? fix churn? Pick ONE primary objective.
  □ Pull inputs: unit economics & margin floor (Agent 18), usage data & cohorts (Agent 16),
    win/loss & discount data (Sales/CS), positioning & ICP (Agent 03).
  □ State the constraint: gross-margin floor, must-not-harm conversion, contractual locks.

WEEK 2-3 - RESEARCH (willingness-to-pay)
  □ Run Van Westendorp (Part 4) for a price RANGE. Add Gabor-Granger (Part 5) for the point.
  □ Run MaxDiff/conjoint if re-packaging (which features are worth gating). Agent 36 §4.
  □ Run 8-12 WTP interviews (Part 7) for the qualitative "why" behind the numbers.
  □ Discount stated WTP ~20-30% - surveys run high vs. real paid behavior.

WEEK 4 - DESIGN
  □ Pick/validate the VALUE METRIC (Part 2 decision tree). This is the highest-leverage call.
  □ Design packaging on the canvas (Part 3): tiers, fences, add-ons.
  □ Set price points within the researched range, anchored to value, above the margin floor.

WEEK 5 - PRESSURE-TEST
  □ Model revenue impact across cohorts (3 scenarios: conservative/base/optimistic).
  □ Teardown your own pricing page draft (Part 8).
  □ Build the discount approval matrix (Part 6) so the new list doesn't leak on day one.
  □ Legal/tax review of localization, tax-inclusive display, contract terms (professional review).

WEEK 6+ - ROLL OUT
  □ Execute the price-change runbook (Part 9): comms, grandfathering, migration, monitoring.
  □ Roll out cohort-based (new customers first) - NEVER A/B different prices to identical users.
  □ Watch guardrails 90 days; have a rollback/save plan ready.
```

---

## PART 2 - PRICE-METRIC SELECTION DECISION TREE

```
START: What does the customer get MORE of as they get more value?

  Is the value tied to NUMBER OF PEOPLE using it (collaboration, login-based)?
    └─ YES → consider PER SEAT.  Caution: does it punish adoption (seat-hoarding)? If yes, add
             a usage dimension or move to hybrid.
    └─ NO ↓
  Is the value tied to VOLUME consumed (compute, API calls, GB, messages, GMV)?
    └─ YES → consider USAGE-BASED.  Caution: can the customer predict the bill within ±20%?
             If no → add commitments/credits + spend alerts, or go hybrid with a base fee.
    └─ NO ↓
  Can you tie price directly to a measurable OUTCOME the customer cares about (leads, $ saved)?
    └─ YES & you can meter it cleanly & accept delivery risk → consider OUTCOME-BASED. (Rare; powerful.)
    └─ NO ↓
  Is value roughly FLAT per customer / hard to meter / customer wants total predictability?
    └─ YES → TIERED FLAT (good-better-best on feature sets). Caution: caps expansion - add
             usage or seats as a second dimension if accounts grow.

CONVERGENCE: most mature products land on a HYBRID - a predictable base (seat or platform fee)
+ an expansion dimension (usage/seats) + enterprise add-ons. Pick ONE primary metric.

VALIDATE the chosen metric against all 5 (Agent 36 §2):
  □ Grows as the customer gets more value?   □ Bill predictable within ±20%?
  □ Not gameable?   □ Doesn't punish adoption?   □ You can meter & explain it to a CFO?
```

---

## PART 3 - PACKAGING DESIGN CANVAS

```
Fill one row per feature. Decide its tier and its fence rationale. The canvas forces you to
fence on VALUE, not annoyance.

| Feature | Value to customer | Who needs it | Fence type | Tier | Add-on? |
|---------|-------------------|--------------|------------|------|---------|
| Core action | Essential | Everyone | none | GOOD+ | - |
| More seats | Scales w/ team | Growing teams | scale axis | metered | yes |
| Advanced analytics | High, for power users | Mid-market+ | value | BETTER | - |
| Integrations | High | Teams w/ stack | value | BETTER | - |
| SSO / SAML / SCIM | Security/IT requirement | Enterprises | "who-pays" | ENTERPRISE | - |
| Audit logs / DLP | Compliance | Regulated orgs | "who-pays" | ENTERPRISE | - |
| SLA / dedicated CSM | Risk reduction | Large accounts | value | ENTERPRISE | - |
| AI / automation | Discretionary premium | Some, all sizes | value | - | ADD-ON |
| Extra usage pack | Scales w/ consumption | Heavy users | scale axis | - | ADD-ON |

GOOD-BETTER-BEST RULES:
□ 3 tiers. Make the MIDDLE (Better) the bullseye - most should choose it (anchoring/compromise).
□ GOOD = acquisition tier: genuinely useful, missing what teams need at scale. Not crippleware.
□ BETTER = where you make money: everything a typical customer needs.
□ BEST = anchor: makes Better look reasonable; a few big accounts buy it (pure margin).
□ ENTERPRISE = "contact us": SSO, audit, SLA, custom terms; value-priced per deal.

THE FENCE TEST for every gate: "Does this feel like a fair reflection of value at scale, or a
hostage situation?" If hostage → move it down a tier or make it an add-on.
```

---

## PART 4 - VAN WESTENDORP SURVEY TEMPLATE

```
Audience: 30-50+ QUALIFIED respondents (your ICP, who understand the product). Show a crisp
description of the product/tier + the value-metric unit (per seat / per month / per use) first.

THE 4 QUESTIONS (ask exactly these; respondents give a price for each):
  Q1 (Too Expensive):  "At what price would this be so expensive you would NOT consider buying it?"
  Q2 (Expensive/High): "At what price is this getting expensive, but you'd still CONSIDER it?"
  Q3 (Cheap/Bargain):  "At what price is this a BARGAIN - a great value for the money?"
  Q4 (Too Cheap):      "At what price is this so cheap you'd QUESTION its quality?"

HOW TO PLOT:
  1. For each price point, compute the CUMULATIVE % of respondents.
     - "Too Expensive" and "Expensive": cumulative ASCENDING (more say yes as price rises).
     - "Cheap" and "Too Cheap": cumulative DESCENDING (fewer as price rises).
  2. Draw all four curves on one chart (price on X, cumulative % on Y).

THE 4 INTERSECTIONS TO READ:
  • PMC - Point of Marginal Cheapness  = "Too Cheap" × "Expensive"      → LOWER bound of range
  • PME - Point of Marginal Expensiveness = "Too Expensive" × "Cheap"   → UPPER bound of range
  • OPP - Optimal Price Point          = "Too Cheap" × "Too Expensive"  → resistance balanced; the headline price
  • IPP - Indifference Price Point     = "Cheap" × "Expensive"          → the "expected/normal" price

INTERPRET:
  Range of Acceptable Pricing = PMC → PME (set price inside this).
  Set near OPP; lean toward IPP/PME for PREMIUM positioning, toward PMC/OPP for penetration.
  LIMITATION: measures stated sensitivity, not volume or real intent → always pair with
  Gabor-Granger (Part 5) and real signals.
```

---

## PART 5 - GABOR-GRANGER SURVEY TEMPLATE

```
Goal: find the REVENUE-MAXIMIZING price and the demand curve.

METHOD:
  1. Show ONE price. Ask: "How likely are you to buy at [price]?" (1-5 scale, or Yes/No).
  2. If likely → show a HIGHER price and re-ask. If unlikely → show a LOWER price.
  3. Iterate per respondent across a price ladder (e.g., ₹X, 1.25X, 1.5X, 2X, 0.75X).
  4. RANDOMIZE the starting price across respondents to reduce anchoring bias.

ANALYZE:
  | Price | % who'd buy (demand) | Indexed revenue = price × %buy |
  |-------|----------------------|-------------------------------|
  | ₹X    | 70%                  | 0.70X                         |
  | 1.25X | 55%                  | 0.69X                         |
  | 1.5X  | 45%                  | 0.68X  ← may still maximize    |
  | 2X    | 25%                  | 0.50X                         |
  The price with the HIGHEST indexed revenue is the revenue-maximizing point. (Note: max-revenue
  ≠ max-volume ≠ max-margin - choose per your objective and clear the margin floor.)
LIMITATION: weaker for novel categories (respondents can't judge unknown value); anchoring risk.
```

---

## PART 6 - DISCOUNT APPROVAL MATRIX (copy-paste)

```
Publish this internally on day one of new pricing. Every standing, ungoverned discount becomes
the new expected price.

| Discount % | Approver           | Required justification (logged on the deal) |
|------------|--------------------|---------------------------------------------|
| 0–10%      | Rep (self-serve)   | Annual prepay / multi-year / logo value - note the reason |
| 11–20%     | Sales Manager      | Competitive / volume / strategic, w/ written rationale |
| 21–30%     | Director / RevOps  | "Lost without it" evidence + multi-year commit + expansion path |
| 31–40%     | VP Sales + Finance | CFO sign-off; must clear gross-margin FLOOR; documented exception |
| >40%       | CEO / CFO          | Strategic exception only (lighthouse logo / market entry); TIME-BOXED |

RULES:
□ Trade discount for VALUE TO YOU: annual/multi-year prepay, case-study rights, logo use,
  reference calls, longer commit, faster close. Never discount for nothing.
□ Prefer adding VALUE (extra seats, a month free, an add-on) over cutting PRICE - protects
  realized ARR and is easier to claw back at renewal.
□ Use EXPIRING, end-of-quarter discounts, not permanent list reductions.
□ Publish the FLOOR price. Below it, walk.
□ Track discount leakage monthly: (List ARR − Booked ARR) ÷ List ARR. >15% = list is fiction.
```

---

## PART 7 - WILLINGNESS-TO-PAY INTERVIEW SCRIPT

```
8-12 interviews with ICP buyers. 30 min. Goal: the qualitative WHY behind the survey numbers.

OPEN (2 min): "I want to understand how you think about the value and cost of solving [problem].
There are no right answers and I'm not selling you anything today."

VALUE & ALTERNATIVES (10 min):
  □ "Walk me through how you solve [problem] today. What does that cost you - in money, time,
     or pain?" (establish the next-best-alternative / reference price)
  □ "If [problem] were completely solved, what would that be worth to you / your team?" (TEV)
  □ "What have you paid for tools in this space? What made those worth it - or not?"

PRICE REACTION (10 min):
  □ "If this cost [price A], what's your gut reaction?" (watch for the flinch)
  □ "What would make [price A] clearly WORTH it? What would make it too expensive?"
  □ "Walk me to the price where you'd say 'no, that's too much.'" (find the ceiling)
  □ "And the price so low you'd worry it's not serious?" (find the floor)
  □ "Who else signs off on a purchase like this, and what do THEY care about?" (buying committee)

PACKAGING (5 min):
  □ "Which of these features would you actually pay extra for? Which do you expect for free?"
  □ "If you had to give up one of these to lower the price, which goes first?" (reveals fences)

CLOSE: "What almost stopped you from considering something like this?"

ANALYSIS: synthesize the reference price, the ceiling/floor, the must-have vs nice-to-have
features, and who else is in the decision. Triangulate with Van Westendorp/Gabor-Granger.
```

---

## PART 8 - PRICING-PAGE TEARDOWN CHECKLIST

```
□ Does the page lead with VALUE/outcomes, not a wall of feature checkmarks?
□ 3-4 tiers max? Is the TARGET tier visually highlighted ("Most Popular")?
□ Monthly/annual toggle present, defaulting to ANNUAL with the savings shown?
□ Are prices VISIBLE (only Enterprise = "Contact us")? Hidden prices kill self-serve.
□ Is the anchor working (expensive plan adjacent to target so target looks reasonable)?
□ ONE primary CTA per tier? Friction removed (no card for free/trial, social login)?
□ Social proof near the CTA (logos, "trusted by X teams," a real quote)?
□ FAQ killing the top objections (billing, cancellation, refunds, what counts as a "seat/unit")?
□ Comparison table for considered B2B buys; simple cards for low-consideration B2C?
□ Charm pricing (₹999) for B2C; round confident numbers for B2B/enterprise?
□ Tier NAMES signal who each is for (not just "Basic/Pro" - speak to the segment)?
□ Local currency + PPP shown for international visitors (Agent 36 §6)?
□ Is the cheapest desired action the most obvious one on the page?
```

---

## PART 9 - PRICE-CHANGE ROLLOUT RUNBOOK

```
T-60 days - PREPARE
  □ Finalize new pricing, packaging, and the grandfather policy (permanent / time-boxed / migrate).
  □ Model impact by cohort (3 scenarios). Confirm margin floor cleared.
  □ Draft comms: top-account personal emails, broad email, in-app, updated pricing page, FAQ,
    sales/CS enablement (objection handling, save offers).
  □ Legal/tax review (tax-inclusive display, contract price-lock clauses, notice requirements).
  □ Prep monitoring dashboard (Part below) and a ROLLBACK plan.

T-30 days - ANNOUNCE
  □ Notify EXISTING customers with 30-60 days notice. Lead with VALUE shipped since they joined,
    not "rising costs." Personal outreach to top accounts.
  □ Offer a lock-in: "prepay annually now to keep your current price for 12 months" (also pulls
    cash forward and boosts retention).
  □ Honor contractual price locks; never change annual contracts mid-term.

T-0 - GO LIVE (COHORT-BASED, never A/B on identical users)
  □ New customers see new pricing immediately (no grandfather needed).
  □ Existing customers migrate per the grandfather policy - on RENEWAL, not mid-term.
  □ Sunset discontinued legacy plans gracefully; don't strand mid-implementation customers.

T+1 to T+90 - MONITOR (guardrails)
  | Metric | Watch for | Action if breached |
  |--------|-----------|--------------------|
  | New-business conversion | drop vs prior cohort | investigate page/price; consider rollback |
  | Win rate / sales cycle | win-rate fall, cycle stretch | enablement; revisit fences |
  | Churn / downgrade by cohort | spike post-migration | deploy save offers (Agent 17) |
  | NRR / GRR | contraction | check expansion levers (Agent 36 §10) |
  | Support sentiment / tickets | anger spike | comms fix; reconsider grandfather terms |
  | ARPA | the intended lift | confirm net positive vs conversion |
  RULE: a change that lifts ARPA but tanks conversion or spikes churn is a NET LOSS. Measure net.
```

---

## PART 10 - SaaS PRICING BENCHMARKS

```
Directional ranges for healthy SaaS. Verify against current data and your own model - these age.

| Metric | Healthy | Notes |
|--------|---------|-------|
| Gross margin (SaaS) | >70-80% | Below 60% questions the model |
| LTV / CAC | >3x (5x excellent) | <1x = dying |
| CAC payback | <12 mo (SMB <6, ent <18) | The cash-recovery clock |
| NRR | >100% (>115% mid-mkt/ent) | The single strongest growth signal |
| GRR | >90% (>85% SMB) | The "leak" rate, expansion excluded |
| Free → Paid (freemium) | 2-5% | Higher = under-monetized free tier or narrow funnel |
| Free trial → Paid | 15-25% | Reverse trial often 25-40% |
| Discount leakage | <15% | (List − Booked)÷List ARR |
| Price realization | >85% | Avg sell price ÷ list |
| Annual prepay mix | 50-80% | Improves cash + retention |
| % new ARR from expansion | 30%+ | Mark of a healthy expansion motion |
| Annual discount vs monthly | ~15-20% | The standard incentive to commit annually |
```

---

## THE ONE-PAGE PRICING BRIEF

```
PRODUCT / TIER PRICED: _______________________________
PRIMARY OBJECTIVE (pick one): new price / raise / re-package / fix churn
VALUE METRIC: ________________________ (and why it scales with value)
MARGIN FLOOR (Agent 18): ₹__________  CANNOT price below this.

RESEARCHED RANGE (Van Westendorp): PMC ₹____ → PME ₹____   OPP ₹____  IPP ₹____
REVENUE-MAX POINT (Gabor-Granger): ₹____
CHOSEN PRICE POINT(S): GOOD ₹____  BETTER ₹____ (bullseye)  BEST ₹____  ENTERPRISE: custom

PACKAGING: fences chosen on VALUE (list): _______________________________
ADD-ONS: _______________________________
DISCOUNT FLOOR: ₹____  |  Matrix published? Y/N

ROLLOUT: cohort-based (new first) | grandfather: permanent / 12-mo / migrate
GUARDRAILS WATCHED 90 DAYS: conversion, win rate, churn, NRR, ARPA, sentiment
ROLLBACK TRIGGER: _______________________________

> Reviewed by Finance (Agent 18) and counsel/CA before go-live? Y/N (required).
```
