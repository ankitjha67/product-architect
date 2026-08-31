# A/B Testing & Experimentation Framework

## Experiment Lifecycle

### 1. Hypothesis Formation

```
TEMPLATE:
"We believe that [change] will [improve metric] by [amount]
because [evidence/reasoning], and we'll know this is true
when we see [statistical significance at p < 0.05 with n = X]."

BAD HYPOTHESIS: "Changing the button color to green will increase conversions."
(No expected magnitude, no reasoning, no success criteria)

GOOD HYPOTHESIS: "Changing the CTA from 'Sign Up' to 'Start Free Trial'
will increase signup rate by 8-12% because our user research shows
price uncertainty is the #1 signup objection, and 'Free Trial' directly
addresses this. We need 5,000 users per variant for 95% confidence."
```

### 2. Experiment Design

```
MINIMUM REQUIREMENTS:
□ Primary metric: ONE metric that determines success/failure
□ Guardrail metrics: 2-3 metrics that must NOT worsen (e.g., revenue, retention, page speed)
□ Sample size calculation:
  - Baseline conversion rate
  - Minimum detectable effect (MDE): typically 5-10% relative change
  - Statistical power: 80% (industry standard)
  - Significance level: 95% (p < 0.05)
  - Use calculator: evan miller's sample size calculator or statsig
□ Duration: Minimum 1 full business week (capture weekday/weekend variation)
□ Randomization unit: Usually user-level (not session, not page view)
□ Segmentation: Define if experiment applies to all users or a specific segment

SAMPLE SIZE QUICK REFERENCE:
| Baseline Rate | MDE 5% | MDE 10% | MDE 20% |
|--------------|--------|---------|---------|
| 1% | 390K/variant | 98K | 25K |
| 5% | 72K | 18K | 4.6K |
| 10% | 34K | 8.6K | 2.2K |
| 25% | 11K | 2.9K | 740 |
| 50% | 7.4K | 1.9K | 490 |
```

### 3. Common Experiment Types

```
A/B TEST: Two variants (control vs. treatment)
- Best for: Clear binary choices (old vs. new design, copy A vs. copy B)

A/B/n TEST: Multiple variants (control + 2-4 treatments)
- Best for: Testing multiple options (3 different headlines, 4 pricing tiers)
- WARNING: Requires larger sample size AND multiple comparison correction

MULTIVARIATE TEST (MVT): Test combinations of multiple elements simultaneously
- Best for: Optimizing page layouts with multiple changing elements
- WARNING: Exponential sample size requirements. Usually not worth it for startups.

FEATURE FLAG / STAGED ROLLOUT: Gradual percentage increase
- Best for: Risky changes, infrastructure changes, new features
- Not a true experiment (no statistical rigor) but reduces blast radius

BANDIT: Dynamic allocation (more traffic to winning variant)
- Best for: Short-lived experiments (flash sales, limited inventory)
- Tradeoff: Faster to "winner" but weaker statistical validity
```

### 4. Statistical Rigor

```
COMMON MISTAKES TO AVOID:
━━━━━━━━━━━━━━━━━━━━━━━━

□ PEEKING: Don't check results daily and stop when p < 0.05
  → Use sequential testing methods (always valid p-values) OR
  → Pre-commit to a fixed sample size and don't peek
  → Peeking inflates false positive rate from 5% to 25-50%

□ MULTIPLE COMPARISONS: Testing 5 variants without correction
  → Apply Bonferroni correction: α/n (0.05/5 = 0.01 per comparison)
  → Or use False Discovery Rate (FDR) control (Benjamini-Hochberg)

□ SAMPLE RATIO MISMATCH: Variants don't have equal sample sizes
  → Check for SRM before analyzing results
  → SRM indicates a bug in randomization (invalidates results)

□ NOVELTY/PRIMACY EFFECTS: Users react to "new" not "better"
  → Run experiments for 2+ weeks to wash out novelty
  → Analyze by user tenure (new vs. existing users)

□ INTERFERENCE / NETWORK EFFECTS: Treatment leaks to control
  → If User A (treatment) shares a referral with User B (control), the control is contaminated
  → Use cluster-based randomization for social/network products

□ SURVIVORSHIP BIAS: Only analyzing users who completed the flow
  → Analyze on intent-to-treat basis (all users assigned, not just those who engaged)
```

### 5. Results Analysis

```
ANALYSIS CHECKLIST:
□ Sample ratio mismatch check (are groups equal?)
□ Statistical significance (p < 0.05 or CI doesn't include 0)
□ Practical significance (is the effect size worth shipping?)
□ Guardrail metrics check (nothing worsened?)
□ Segment analysis (does it help all users or just a subset?)
□ Time series analysis (was the effect consistent or a spike?)
□ Revenue impact calculation (lift × baseline × traffic = ₹ impact)

DECISION FRAMEWORK:
- Significant + positive + guardrails safe → SHIP IT
- Significant + positive + guardrail violated → INVESTIGATE (maybe ship with guardrail fix)
- Not significant → RUN LONGER or LEARN WHY (underpowered? No real effect? Wrong metric?)
- Significant + negative → KILL IT (learn from the loss)
- Inconclusive → Was the MDE too small? Wrong metric? Wrong audience?
```

### 6. Experiment Backlog Template

| Experiment | Hypothesis | Primary Metric | Expected Impact | Sample Size | Duration | Priority |
|-----------|-----------|---------------|----------------|-------------|----------|----------|
| [Name] | [Brief hypothesis] | [Metric] | [+X%] | [N per variant] | [Days] | [P0-P3] |

Prioritize experiments by: Expected impact × Confidence ÷ Effort (ICE scoring for experiments).

## 7. THE STATISTICS, DONE CORRECTLY

```
H0: the treatment has ZERO effect. H1: non-zero effect (two-sided). The test never proves H1: you
reject H0 or fail to reject it, and there is no third outcome. ERRORS: Type I (α=0.05, ship a dud)
| Type II (β=0.20, kill a winner) | Type S (wrong sign) | Type M (right sign, inflated magnitude).
Underpowered tests (power 20-30%) do not merely miss winners: any result that clears p<0.05 is on
average 2-3x the true effect, which is why a shipped "+8%" never shows up in the P&L.

p = P(data this extreme or more | H0 true). p = 0.04 DOES NOT MEAN:
  ✗ 96% chance the variant is better    ✗ 4% chance this is a fluke
  ✗ the effect is large                 ✗ p=0.051 "failed" while p=0.049 "passed" (same evidence)

FALSE DISCOVERY RATE is the number that matters. With 20% of ideas real, α=0.05, power 80%, per
100 tests: 20×0.8 = 16 true positives, 80×0.05 = 4 false → 20% of your "wins" are noise. If only
10% of ideas are real, FDR = 36%. Fix by raising the prior (evidence-backed ideas only) or
tightening α to 0.01 for expensive and irreversible ships.

CONFIDENCE INTERVAL: report it every time. 95% CI = lift ± 1.96 × SE. WORKED: control 10.0%
(n=14,400) vs treatment 11.1% (n=14,400). SE = sqrt(0.09/14400 + 0.0987/14400) = 0.00362 →
CI = 1.1pp ± 0.71pp = [0.39pp, 1.81pp] absolute = [+3.9%, +18.1%] relative.
DECIDE ON THE LOWER BOUND: ship if the lower bound > breakeven, where breakeven = ongoing cost ÷
value per unit of lift. FLAT vs INCONCLUSIVE: CI [-0.4%, +0.5%] against MDE 5% is genuinely flat,
so learn and move on; CI [-12%, +14%] is underpowered, you learned nothing, and reporting it as
"no effect" is the most common lie in experiment readouts.

POWER: 80% standard; 90% when missing a winner is expensive (pricing, checkout); below 50% power
do not run the test at all. ONE-TAILED vs TWO-TAILED: one-tailed cuts n by ~21% (Z 1.96 → 1.645)
but is blind to harm, and is defensible only when a negative result triggers the identical action
as a null result, which in product work it almost never does. DEFAULT TWO-TAILED; switching to
one-tailed after seeing the data is p-hacking.
```

## 8. MDE AND SAMPLE SIZE, WITH WORKED NUMBERS

```
BINARY:     n = 2 × (Z_α/2 + Z_β)² × p(1-p) ÷ δ²   with (1.96 + 0.84)² = 7.84
SHORTCUT:   n ≈ 16 × p(1-p) ÷ δ²   (δ = ABSOLUTE lift)      CONTINUOUS: n ≈ 16 × σ² ÷ δ²
CONVERT:    δ_absolute = baseline × MDE_relative

WORKED A (binary): baseline 10%, detect +10% relative (10.0% → 11.0%), so δ = 0.01.
  n = 16 × 0.10 × 0.90 ÷ 0.0001 = 14,400 per variant; 28,800 total. (Evan Miller returns ~14,744
  on the same inputs: the shortcut is within 3%. Use it to sanity-check, a calculator to commit.)
  DURATION at 4,000 eligible users/day: 28,800 ÷ 4,000 = 7.2 days → round UP to 14 days. Never
  stop mid-week; Tuesday users are not Saturday users.
  HALVE THE MDE to 5% → n = 57,600/variant. Sample scales as 1/δ²: halving the MDE quadruples the
  cost. This is the core economic fact of experimentation and the reason most roadmaps cannot
  afford to test small changes.

WORKED B (continuous): revenue/user mean $12, σ = $40 (CV 3.3, typical heavy tail), detect +$1.
  n = 16 × 1,600 ÷ 1 = 25,600 per variant. Winsorize at p99 → σ 40 → 28 → n = 12,544, a 51%
  traffic saving for one line of SQL. Declare the capped metric primary and check uncapped second.

TRIGGERED ANALYSIS, the biggest lever nobody pulls: if only x% of assigned users SEE the change,
the measured effect shrinks by 1/x and the sample need grows by 1/x².
  WORKED: the change lives on a page 8% of users reach. A true +10% on the exposed dilutes to
  +0.8% overall and the sample requirement multiplies by (1/0.08)² = 156x.
  FIX: fire an EXPOSURE event where the surface actually renders, at the same code point in BOTH
  variants, and analyze only exposed users. CAUTION: trigger on the condition, never the outcome
  ("users who clicked" reintroduces selection bias and invalidates the test).

RECONCILING CALCULATORS: the table in section 2 and this formula can differ by 40%. Before
trusting any calculator confirm (1) one- vs two-sided, (2) absolute vs relative MDE, (3) pooled
vs unpooled variance, (4) per-variant vs total n. Lock those four settings org-wide so experiment
results stay comparable across teams.
```

## 9. THE PEEKING PROBLEM AND SEQUENTIAL TESTING

```
A fixed-horizon test controls α at ONE pre-specified look. Every extra look is another chance for
noise to cross the line: 1 look 5% | 5 looks ~14% | 10 looks ~19% | daily for 30 days ~26-30% |
continuous monitoring with no stopping rule approaches 100%.

1. FIXED HORIZON (default). Pre-commit n and end date. Practical version: show guardrails and SRM
   daily, HIDE the primary metric until the horizon. Statsig, Eppo and GrowthBook can gate this.
2. GROUP SEQUENTIAL (O'Brien-Fleming / Pocock). Pre-declare 3-4 interim looks; early looks need
   roughly p<0.005 to stop, later looks relax toward 0.05. Cost ~2-5% extra sample. Use when you
   want the option to stop early on a large win.
3. ALWAYS-VALID (mSPRT, confidence sequences). Valid at every moment, stop any time. Optimizely
   Stats Engine, Statsig and Eppo sequential modes. Cost ~20-50% more sample for equal power.
   Buy it if your org cannot resist looking: it is cheaper than the false positives you ship.

NEVER STOP EARLY FOR A WIN. ALWAYS STOP EARLY FOR HARM. Asymmetric stopping is not cheating: the
decision to stop harm is not the decision to ship. Pre-register an automated safety rule, e.g.
"auto-disable if checkout success drops >2% relative at p<0.01, or p95 latency +200ms, or error
rate doubles, evaluated every 15 minutes."

FIXED-HORIZON DISCIPLINE: 7 days minimum always, 14 for anything behavioral or novelty-prone;
cover one full billing/usage cycle for subscription metrics; whole weeks only; annotate and re-run
anything spanning a sale or holiday; never extend because a result is "nearly significant" unless
the extension rule was written into the doc before launch.
```

## 10. VARIANCE REDUCTION (same answer, less traffic)

```
Power depends on effect ÷ variance. You cannot always raise the effect; you can almost always cut
the variance.

CUPED: Y_adj = Y − θ(X − mean X), θ = Cov(Y,X) ÷ Var(X), where X is the same metric measured over
  the 2-4 weeks BEFORE assignment. Variance reduction = ρ²: ρ 0.5 → 25%, ρ 0.7 → 49%, ρ 0.8 → 64%.
  Real-world gain 10-40% on engagement metrics and ~50% reported at Bing scale, equivalent to that
  much free traffic or a 30-50% shorter test. LIMITS: no pre-period means no adjustment, so new
  users get θ=0 and become their own stratum; useless for "used the new feature" style metrics.
  Native in Statsig, Eppo, GrowthBook and Optimizely.
STRATIFICATION: randomize or re-weight within platform / country / tenure / free-vs-paid strata.
  Typical gain 5-15%, needs no pre-period data, and also prevents accidental imbalance.
A BETTER METRIC, usually the largest single win: denser beats rarer ("reached checkout" at an 18%
  base needs far less traffic than "purchased 3+ times in 30 days" at 1.2%); winsorize at p99
  (40-50% variance cut on revenue); use a binary indicator instead of a heavy-tailed count when
  you only need direction; and if the analysis unit differs from the randomization unit (randomize
  by user, measure per session) use the delta method or a bootstrap, because naive per-session
  t-tests understate the standard error and manufacture significance.
ML COVARIATES (CUPAC style): predict the outcome from pre-period features and use the prediction
  as the covariate. Beats single-metric CUPED when ρ is low. Worth building above ~200 tests/year.
STACK ORDER: exposure and triggering → metric choice → CUPED → stratification. Running CUPED on a
diluted, untriggered metric is polishing the wrong lever.
```

## 11. VALIDITY CHECKLIST (run in order, stop at the first failure)

```
STEP 0 - SAMPLE RATIO MISMATCH, ALWAYS FIRST. Chi-square the assignment counts; p < 0.001 means
  DO NOT ANALYZE, debug first. Roughly 6-10% of experiments at large companies fail this check.
  CAUSES: redirect-based tests losing users to redirect latency; bot filtering applied after
  assignment; a lazily loaded SDK dropping slow-network users; a higher crash rate in one variant;
  CDN or app cache serving stale assignments; filtering on an attribute the treatment changes.
  A 0.5% imbalance can flip a 2% effect. There is no such thing as a small SRM.
STEP 1 - EXPOSURE SANITY. Same code point, same eligibility, same rate in both variants. Mismatched
  exposure is SRM's quieter cousin and does not show up in assignment counts.
STEP 2 - NOVELTY vs PRIMACY. Novelty: effect DECAYS (the new thing gets clicked because it is new).
  Primacy: effect GROWS (tenured users must relearn). DIAGNOSTIC: plot daily cumulative lift over
  14 days; monotonic decay signals novelty, a rising plateau signals primacy. CONFIRM by splitting
  brand-new users (no prior UI, so neither effect applies) from tenured users, and re-measure on a
  holdout at 4-6 weeks before banking the number in a forecast.
STEP 3 - INTERFERENCE. Marketplace: treated buyers consume the SAME finite supply as control, so
  lift is stolen rather than created and is overstated. Social: treated users contaminate control,
  so lift is understated. Ads: variants share a budget and compete in the same auction. FIXES by
  cost: cluster randomize by market or city (needs 20+ clusters per arm, since with 10 clusters
  your effective n is 10, not 10 million); cluster by graph community; switchback on 30-60 minute
  time blocks (standard for logistics, pricing and matching); budget-split designs for ad systems.
STEP 4 - SIMPSON'S PARADOX. Aggregate wins while every segment loses. Root cause 99% of the time
  is a traffic MIX difference created by ramping allocation mid-test (5% → 50%), so the variants
  sampled different days and populations. RULE: never change allocation mid-experiment; if you
  must, discard all data before the last allocation change.
STEP 5 - MULTIPLE COMPARISONS. Count variants × metrics × segments × time slices. 20 metrics at
  α=0.05 produces 1 false win per experiment by chance; 10 segments × 3 metrics = 30 tests
  produces 1.5. Bonferroni (α ÷ m) for families of m ≤ 5; Benjamini-Hochberg FDR (sort p ascending,
  take the largest k with p(k) ≤ (k/m)q, q = 0.10) for dashboards of 20-100 metrics; no correction
  for the single pre-registered primary. Segment findings are hypotheses for the NEXT experiment,
  never a ship decision on their own.
STEP 6 - INTENT TO TREAT. Analyze everyone assigned, including non-engagers, crashers and drop-offs.
  Completers-only analysis systematically favors whichever variant is easier to complete.
```

## 12. EXPERIMENT DESIGN DOC

```
EXPERIMENT: [name]                          ID: EXP-____   OWNER: ______   TIER: 1 / 2 / 3
HYPOTHESIS     : We believe [change] will [move metric] by [MDE] because [evidence]
EVIDENCE       : [research finding / funnel data / prior experiment ID]
PRIMARY METRIC : ______ (exactly ONE)      BASELINE: ______ (trailing 28 days)
MDE            : ____% relative. Why this number: [breakeven cost or strategic threshold]
GUARDRAILS     : revenue/user, p95 latency, error rate, support contacts, unsubscribe rate
                 AUTO-KILL: [metric] worse by [x]% at p<0.01 → disable the flag automatically
SECONDARY      : ______ (exploratory only, never a ship decision)
DESIGN         : variants ___ | split ___ | unit: user / account / cluster / time-block
                 eligibility ______ | EXPOSURE EVENT: ______ (event name + code location)
SAMPLE / POWER : ____ per variant | power 80% | α 0.05 two-sided
DURATION       : ____ days (whole weeks only) | END DATE: ______
ANALYSIS PLAN  : fixed horizon / group sequential / always-valid; CUPED on ______; strata ______
PRE-REGISTERED SEGMENTS (max 3): ______, ______, ______
HOLDOUT        : ___% held on control for ___ days after ship
ROLLBACK       : flag ______ | who can flip it ______ | time-to-off ___ min
DECISION RULE (written BEFORE launch): SHIP if CI lower bound > ______ and no guardrail breach |
                 ITERATE if ______ | KILL if ______
RESULT: lift ___ | 95% CI [___, ___] | p ___ | SRM pass/fail | guardrails ___
DECISION: ship / kill / iterate / extend (pre-registered reason only)
LEARNING (one sentence): _________________________________________________

GUARDRAIL LIBRARY, pick 3-5 and keep the SAME set across every experiment so it becomes a standing
safety net: revenue/user | conversion to paid | p95 latency | error rate | crash-free sessions |
support contacts per 1,000 users | unsubscribe rate | D7 retention | report rate | refund rate.

HOLDOUTS: keep 1-10% of users on control across ALL shipped experiments for a quarter. Teams
routinely ship fifteen "+2%" wins and find the holdout gap is +3%, not +34%. That gap is the most
honest number in the program: review it quarterly and baseline forecasts on it, not on the sum of
individual wins.
```

## 13. WHEN NOT TO A/B TEST, AND WHAT TO DO INSTEAD

```
□ TRAFFIC TOO LOW. Test: n_required ÷ daily eligible traffic > 28 days → do not test. WORKED:
  baseline 5% with MDE 10% relative needs ~18-30K per variant; at 500 eligible users/day that is
  72-120 days, and you will have changed the product four times first. Under ~1,000 weekly
  conversions experimentation is theatre. INSTEAD: ship it with 5-8 user interviews and monitoring.
□ ONE-WAY DOOR. Pricing changes to existing customers, rebrands, migrations, ToS changes,
  deprecations. You cannot un-show someone a price. INSTEAD: test on NEW customers only, or run a
  geo/segment pilot with an explicit rollback plan.
□ STRATEGIC BET. A two-year platform rewrite or a new market: the horizon exceeds any test window
  and the mechanism is not marginal. INSTEAD: staged commitment with kill gates, pilots, design
  partners (see mvp-framework.md for the kill-threshold pattern).
□ OBVIOUSLY RIGHT AND BELOW THE NOISE FLOOR. Crashes, broken buttons, security holes, accessibility
  violations. The test costs more than the change. Ship it.
□ ETHICS OR LAW SAYS NO. Emotional manipulation, deceptive patterns, differential pricing on
  protected attributes, withholding a safety feature from control, experiments on minors or on
  medical/financial vulnerability. GATE: if you would not describe the experiment to affected users
  in plain language, do not run it. Route to legal and privacy review, not to the platform.
□ EVERYONE MUST GET IT. Compliance deadlines, security patches, regulatory disclosures. Use a
  staged rollout for safety, not a test for evidence.

| Alternative               | Fits when                              | Minimum requirement                  |
|---------------------------|----------------------------------------|--------------------------------------|
| Interrupted time series   | One-time change to ALL users (pricing, | 8-12 stable pre-periods, seasonality  |
|                           | rebrand, policy change)                | and trend modelled explicitly         |
| Difference-in-differences | A comparable untreated market exists   | Parallel pre-trends over 8+ periods   |
| Switchback                | Strong interference: logistics,        | 30-60 min blocks, 100+ blocks per arm,|
|                           | matching, dynamic pricing              | block-level analysis                  |
| Geo / market holdout      | Marketing, offline, network effects    | 20+ matched markets, or a synthetic   |
|                           |                                        | control when you have fewer           |
| Holdback cohort           | Long-horizon, cumulative effects       | 1-10% held out for 30-90 days         |
| Staged rollout + monitor  | Risky infrastructure and migrations    | Real-time guardrails, rollback <5 min |
| Painted door              | Demand for something not yet built     | Honest follow-up; never twice         |
| Research (5-8 users)      | Usability, comprehension, naming       | Task-based, not opinion-based         |
| Dogfood / beta cohort     | Complex B2B workflows                  | 10-30 engaged accounts                |
```

## 14. PLATFORM CHOICE AND THE BUILD-VERSUS-BUY LINE

```
NON-NEGOTIABLE CAPABILITIES, score every vendor against this list:
  □ Deterministic hashing (userID + experiment salt) so assignment is stable across devices,
    sessions and service restarts        □ Automated SRM alerting
  □ Sticky assignment with documented behaviour on logout and on the anonymous → identified
    transition (the #1 source of dirty data)   □ Mutually exclusive layers/namespaces
  □ Exposure logging at the render point, not at bucketing   □ Holdout support
  □ Kill switch independent of a deploy   □ CUPED or equivalent variance reduction
  □ Metric definitions that match the BI layer exactly, or read directly from it

CLIENT vs SERVER: visual editors (Optimizely Web, VWO, AB Tasty) suit marketing pages but cause
flicker, are invisible to crawlers, and cannot reach below the presentation layer. Never use them
for pricing, ranking or logic. Server-side SDKs (Statsig, LaunchDarkly, GrowthBook, Split, Eppo)
for anything with money or business logic in it. WAREHOUSE-NATIVE (Eppo, GrowthBook, Statsig
warehouse mode) runs analysis on your own dbt models, so BI and experiments share one metric
definition and nobody argues about whose number is right: the default once a warehouse exists.

THE BUILD LINE. Buy unless at least one is true: >1,000 experiments/year and vendor cost exceeds
~2 engineers/year; a randomization unit vendors do not support (switchbacks, two-sided
marketplaces, household or device-mesh level); hard data-residency or on-prem constraints no
vendor meets. Realistic in-house build: 3-6 engineers, 12-18 months to reach vendor parity, then
permanent maintenance. Below ~200 experiments/year, buying wins on total cost of ownership.
COST SHAPE: free and self-hosted tiers exist (GrowthBook OSS, Statsig free tier); mid-market lands
in the tens of thousands per year; enterprise reaches six figures. Pricing usually scales on
tracked events or MAU, so forecast event volume before negotiating.
MIGRATION WARNING: assignment history and metric definitions rarely port between platforms. Budget
4-8 weeks, freeze new experiment starts during cutover, and expect a window where old and new
numbers do not reconcile.
```

## 15. EXPERIMENT REVIEW BOARD (scaling the program)

```
WHEN YOU NEED ONE: <20 experiments/quarter, no board (PM plus one analyst review the doc);
20-100/quarter, design review plus a weekly readout meeting; >100/quarter, tiered certification.

TIER 1 (expert review before launch AND before ship): pricing, billing, checkout, ranking and
  recommendations, trust & safety, legal disclosures, or any metric used in external reporting.
  Reviewers: a data scientist plus the domain owner. SLA 2 business days.
TIER 2 (self-serve, automated gates only): copy, layout, onboarding steps, notification timing,
  non-revenue UI. Gates: power check, SRM alerting on, guardrail set attached, duration ≥ 7 days,
  exactly one declared primary metric.
TIER 3 (no review): flag-only rollouts that claim no inference.

TWO GATES, NOT ONE. DESIGN GATE: hypothesis plus evidence, one primary metric, MDE justified,
power ≥ 80%, whole-week duration, guardrails and auto-kill rule, exposure event named, rollback
owner named. READOUT GATE: SRM pass, CI reported rather than p alone, guardrails clean, segments
labeled exploratory, decision matching the pre-registered rule, one-sentence learning written.
FORMAT: 30 minutes weekly, maximum 6 readouts at 5 minutes each; docs are read beforehand and only
decisions and disagreements get airtime.

THE REGISTRY is the compounding asset: every experiment gets a permanent ID, doc, result and
decision, searchable by surface, metric and team. Publish losses as prominently as wins, and search
before designing anything, because duplicate experiments are the largest single waste at scale.

SET EXPECTATIONS ON WIN RATE: across large published programs roughly 10-33% of experiments produce
a positive significant result on the primary metric, about a third are flat and about a third
actively hurt. A reported win rate above 50% means peeking, missing SRM checks or metric shopping,
not genius. The value of the program is the 70% you stopped from shipping.

PROGRAM HEALTH, reviewed quarterly: experiments started | % passing the design gate first time |
% with SRM failures | median idea-to-launch (target <10 days) | median duration | % underpowered at
launch (target <10%) | win rate | holdout gap | % of shipped changes that were experimented on.
```

## ONE-PAGE EXPERIMENT BRIEF

```
ID ______  SURFACE ______  OWNER ______  TIER 1/2/3
HYPOTHESIS: _________________________________________________________________
PRIMARY METRIC / BASELINE / MDE: ______ / ______ / ______%    POWER ___%  α ____
SAMPLE PER VARIANT / DURATION: ______ / ______ days (ends ______)
EXPOSURE EVENT + CODE LOCATION: _____________________________________________
GUARDRAILS + AUTO-KILL RULE: ________________________________________________
ANALYSIS: fixed / sequential | CUPED y/n | strata ______ | segments (max 3) ______
DECISION RULE: ship if CI lower bound > ______      ROLLBACK: flag ______ owner ______
RESULT: lift ___ CI [___, ___] SRM pass/fail      DECISION: ______
LEARNING (one sentence): ____________________________________________________
```
