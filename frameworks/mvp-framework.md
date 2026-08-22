# MVP Framework

## What an MVP Actually Is

An MVP is NOT a crappy version of your full product. It is the **smallest possible product
that tests your riskiest assumption** while delivering real value to real users.

## MVP Scoping Process

### Step 1: Identify the Core Hypothesis
What is the ONE thing that must be true for this product to succeed?

```
HYPOTHESIS FORMAT:
We believe that [target users] have [this problem] and would [desired behavior]
if we provided [proposed solution], which we'll know is true when we see [measurable signal].

Example:
We believe that busy professionals in Bengaluru have difficulty finding healthy lunch options
and would order at least 3x/week if we provided a curated healthy meal subscription,
which we'll know is true when 40% of beta users order 3+ times in their first 2 weeks.
```

### Step 2: Define the Core Value Loop
What is the minimum set of actions for a user to get value?

```
CORE LOOP: [User action] → [System delivers value] → [User gets outcome]

Example (food delivery):
Browse menu → Place order → Receive food

Example (SaaS):
Input data → System processes → User sees insight

The MVP MUST complete this loop end-to-end. Everything else is optional.
```

### Step 3: Apply the Cut Test
For every proposed feature, ask:

```
CUT TEST:
1. Can a user complete the core value loop WITHOUT this feature?
   YES → Cut it from MVP
   NO → Keep it

2. Is this feature testing our core hypothesis?
   YES → Keep it
   NO → Cut it from MVP

3. Will removing this feature make the product DANGEROUS or ILLEGAL?
   YES → Keep it (security, compliance, payment integrity)
   NO → Apply test 1 and 2

4. Will removing this feature make the product EMBARRASSING?
   Not a valid reason to keep it. Ship embarrassing. Learn fast.
```

### Step 4: MVP Feature Matrix

| Feature | Core Loop? | Tests Hypothesis? | Legal/Security? | MVP? | Effort |
|---------|-----------|-------------------|-----------------|------|--------|
| User signup | No (could use invite-only) | No | No | Cut | S |
| Email signup only | Yes (need accounts) | No | No | Keep | S |
| Social login | No | No | No | Cut | M |
| Browse products | Yes | Yes | No | Keep | M |
| Advanced filters | No | No | No | Cut | M |
| Basic search | Yes | No | No | Keep | S |
| Add to cart | Yes | Yes | No | Keep | M |
| Checkout | Yes | Yes | Yes | Keep | L |
| Payment (UPI only) | Yes | Yes | Yes | Keep | M |
| Multiple payment methods | No | No | No | Cut (add card/NB in v1.1) | L |
| Order tracking | No | No | No | Cut (SMS updates instead) | L |
| Reviews & ratings | No | No | No | Cut | M |
| Referral program | No | No | No | Cut | M |
| Push notifications | No | No | No | Cut (use SMS/email) | M |
| Admin dashboard | Yes (ops need it) | No | No | Keep (basic) | M |

### Step 5: MVP Timeline

```
HARD RULE: If your MVP takes more than 8 weeks to build, it's not an MVP.

Week 1-2: Foundation
- Auth (simplest possible - email + OTP or magic link)
- Core data models
- Basic API structure
- Design system setup

Week 3-5: Core Loop
- Primary screens (3-5 screens maximum)
- Core business logic
- Payment integration (one method)
- Basic admin operations

Week 6-7: Polish & Test
- Error handling
- Loading states
- Basic performance optimization
- Internal testing, bug fixes

Week 8: Soft Launch
- Deploy to production
- Invite 50-100 beta users
- Monitor, fix critical issues
- Begin collecting feedback
```

### Step 6: What "Done" Looks Like for MVP

```
MVP IS DONE WHEN:
□ A new user can sign up in < 2 minutes
□ A new user can complete the core value loop in < 5 minutes
□ Payment works end-to-end (with at least one method)
□ Errors are handled gracefully (no crashes, no blank screens)
□ Data is stored securely (encryption, access controls)
□ Basic analytics are tracking (signup, core action, payment)
□ At least 10 users have completed the full flow successfully
□ No known critical or high-severity bugs

MVP IS NOT DONE WHEN:
✗ "It works on my machine"
✗ Only the happy path is tested
✗ Analytics aren't instrumented
✗ Error states show raw error messages
✗ There's no way for users to contact support
```

## Common MVP Anti-Patterns

1. **The "We need feature parity" MVP**: Trying to match competitors before launching.
   You don't. You need to be 10x better at ONE thing.

2. **The "But what about scale" MVP**: Building for 1M users when you have 0.
   Optimize for learning, not load.

3. **The "Design-perfect" MVP**: Pixel-perfect designs for a product no one's validated.
   Clean and functional > beautiful and unvalidated.

4. **The "Kitchen sink" MVP**: 30 features, none finished properly.
   3 features, all bulletproof > 30 features, all half-baked.

5. **The "No-code MVP we'll rebuild later"**: Sometimes right, often a trap.
   Only if the rebuild is planned and budgeted from day one.

## MVP Type Selection

```
| Type           | What it is                                   | Risk it resolves        | Cost / time     |
|----------------|----------------------------------------------|-------------------------|-----------------|
| Concierge      | Service delivered fully by hand, 5-20 users  | Workflow unknown        | ~0 build, 1-4   |
|                | no product at all                            |                         | hrs/user/week   |
| Wizard of Oz   | Front end looks automated, humans behind it  | The AUTOMATION itself   | 1-2 weeks       |
| Landing page   | Page + offer + capture, nothing behind it    | Pure demand, pre-build  | 2-5 days + ads  |
| Single-feature | One job, better than the incumbent's suite   | Solution shape          | 3-6 weeks       |
| Piecemeal      | Existing tools stitched into a live service  | Demand, with simple logic| 1-3 wks, $50-500|
| Pre-order      | Take the money before building anything      | Willingness to pay      | 1-3 weeks       |
| Design partner | 3-5 paid pilots, 60-90 days, written criteria| Enterprise fit          | 4-8 weeks       |

REAL PATTERNS: concierge = a meal subscription run off a spreadsheet with WhatsApp orders and a
hired courier. Wizard of Oz = an "AI categorizer" where an ops team labels every submission inside
a 5-minute SLA while the UI claims nothing about how. Piecemeal = Airtable + Make/Zapier + Stripe
Payment Links + Softr + Tally. Pre-order = the card is charged only on ship, but the card is taken.

SELECT BY DOMINANT RISK, not by what you enjoy building:
  Demand risk        → landing page, then pre-order (money beats email by an order of magnitude)
  Workflow risk      → concierge
  Feasibility risk   → Wizard of Oz, or a technical spike with a written pass/fail
  Usability risk     → clickable prototype tested with 5-8 users (no code at all)
  Willingness to pay → price it, ask for the card, count the cards
  Distribution risk  → run the channel first with a competitor's product or a manual offer

LANDING-PAGE READ THRESHOLDS: you need 500-1,000 TARGETED visits before the number means anything.
Email capture ≥5% of cold targeted traffic is a signal, 1-2% is noise. A pre-order or card-on-file
at ≥1-2% of visits is a far stronger signal than a 20% email rate. Always record traffic source:
a 12% rate from your own audience and a 12% rate from cold paid traffic are different products.
```

## The Riskiest-Assumption Test Is the Unit of Work

```
The MVP is not a small product. It is the cheapest artifact that resolves the assumption that would
kill you first. Most failed MVPs are well-built answers to the second or third most dangerous
question, shipped six months after the first one could have been answered for free.

STEP 1 - INVENTORY the assumptions in five categories: DESIRABILITY (they want it), VIABILITY (the
economics work), FEASIBILITY (we can build it), USABILITY (they can use it), LEGAL/ETHICAL (we are
allowed to). Write 10-20 as falsifiable statements. "Users want faster onboarding" is not one;
"70% of new admins will connect a data source within 24 hours without a call" is.
STEP 2 - SCORE each: likelihood we are wrong (1-5) × cost if we are wrong (1-5). Anything ≥ 16 is
tested before anything is built. Plot importance against existing evidence: the important, no-
evidence quadrant is your test queue, in order.
STEP 3 - BUDGET: a RAT should cost under 2 weeks and under 5-10% of the MVP budget. If designing
the test costs more than 20% of the build, skip the test and build the thing.

TEST CARD:
  ASSUMPTION: ______________________  KILL RISK (1-25): ____
  TEST: ____________________________  COST: ______  TIME: ______  OWNER: ______
  METRIC: __________________________  PASS THRESHOLD: ______  (set BEFORE running)
  IF PASS: __________________  IF FAIL: __________________  DECIDE BY: ______

WORKED: assumption "hospital IT will grant EHR API access to a startup." Likelihood wrong 4, cost
if wrong 5 = 20, the highest on the board. TEST: request sandbox access from 3 hospital IT
departments over 2 weeks. PASS: 2 of 3 grant access with a named integration path. Engineering cost
zero, and it de-risks a 6-month build. Every hour spent on the UI before that answer is a gamble.
```

## Scope-Cutting Mechanics

```
THE "WHAT BREAKS IF WE REMOVE IT" PASS: for every item, complete the sentence out loud: "if we
remove X, the user cannot ______." If the blank names a step in the core value loop, keep it. If
the blank is "do it as conveniently" or "see how nice we are", cut it. Run this in a room, in one
sitting, with the whole team, because the sentence is much harder to fake than a priority label.

MUST-HAVE DERIVATION: draw the critical path from user intent to value delivered. Everything off
that path starts OUT and has to argue its way back in against a named cut. This inverts the default
and is the single highest-leverage change to how scope meetings run.

THE 50% RULE: cut the scope in half, then check whether the loop still closes end to end. Repeat
once. Most teams can do it twice and still have a testable product. If halving breaks the loop, you
found the real must-haves, which is the point of the exercise.

TIMEBOX OVER SCOPE BOX: fix the date, flex the list. A dated MVP with a flexible scope ships; a
fixed scope with a flexible date does not. Corollary: any addition after kickoff must displace
something of equal size, in writing. Track added scope; once it exceeds 20% of the original
estimate, the MVP has become a v1 and the launch date is now fiction, so say that out loud.

MANUAL UNTIL IT HURTS: automate a step only when it exceeds 2 ops-hours/day, or 20 instances/day,
or breaks a customer-facing SLA. Below those lines humans are cheaper, faster to change, and they
discover the edge cases the automation would have gotten wrong.

DEFAULT CUT LIST FOR v1: SSO, admin beyond a table and a CSV export, settings pages, multi-currency,
localization, dark mode, a native app when responsive web works, roles beyond admin and user, bulk
operations, integrations beyond the first one, notification preferences, onboarding tours,
in-product analytics dashboards for customers, and anything described as "while we're in there".
```

## Build vs No-Code vs Manual

```
| Dimension        | Manual / concierge         | No-code                      | Custom code             |
|------------------|----------------------------|------------------------------|-------------------------|
| Time to 1st user | 2-5 days                   | 1-3 weeks                    | 6-12 weeks              |
| Build cost       | ~0                         | $50-500/mo + 1-3 weeks       | 2-3 engineers or        |
|                  |                            |                              | $30-150K agency         |
| Ops cost         | 1-4 hrs/user/week          | Low                          | Low                     |
| User ceiling     | 10-50                      | ~1,000-10,000, simple logic  | Unbounded               |
| Change speed     | Instant                    | Hours                        | Days                    |
| Breaks when      | Ops cost/user > price, or  | Custom logic, sub-200ms p95, | Rarely, but you learn   |
|                  | >20 transactions/day       | complex data, compliance     | slowly and pay for it   |

TOOLS: Airtable/Baserow for data, Softr/Glide/Bubble for the app, Retool for internal tools,
Zapier/Make for glue, Stripe Payment Links or Checkout for money, Tally/Typeform for intake.
MIGRATION TRIGGERS from no-code to code (any one): platform fees above ~$10K/mo, p95 page load
above 5s, a compliance control the platform cannot provide (audit logs, residency, SOC 2 evidence),
a data model the platform cannot express, or vendor rate limits throttling the core loop.
MIGRATION COST: budget 1.5-2x the original build plus a data migration and a dual-running period.
Decide on day one which parts are throwaway, and keep identity, payments, and the database
portable: own your data or at least own a complete, tested export.
THE RULE: no-code when the risk is DEMAND. Custom code when the risk is FEASIBILITY, or when the
technology IS the product. Manual when you do not yet know the workflow you would be automating.
```

## Success Criteria and the Pre-Registered Kill Threshold

```
Write the numbers BEFORE the first commit and get sign-off from whoever controls the budget. After
launch every number becomes a story, and the story always argues for one more month.

PRE-REGISTRATION TEMPLATE:
  HYPOTHESIS: ___________________________  DECISION OWNER: ______  DECIDE BY (date): ______
  PRIMARY SIGNAL: ______________  SAMPLE: ______ users  WINDOW: ______ days
  PASS THRESHOLD: ______   KILL THRESHOLD: ______   (both numeric, both agreed in advance)
  ON PASS WE WILL: ______________________   ON FAIL WE WILL: ______________________
  Changing a threshold requires the same sign-off as the original, logged with the reason.

THRESHOLDS BY MVP TYPE (starting points, tune to your market):
  Landing page      ≥5% email capture from 1,000 targeted visits
  Pre-order         ≥1.5% of visits leave a card; ≥50% still convert when charged
  Concierge         ≥40% of the first 20 users repeat within 14 days
  B2B pilot         ≥3 of 5 design partners convert to paid at list price within 90 days
  Consumer app      D7 ≥20% and D30 ≥10% for the first two cohorts
  Marketplace       ≥30% of listings transact in 14 days; ≥40% of buyers return in 30 days
  SaaS self-serve   ≥30% of signups reach the activation event; ≥15% weekly active at day 30
  Any type          at least 3 unprompted users ask when they can pay or invite someone
```

## Instrumentation Minimum (so the result is readable)

```
SHIP NOTHING WITHOUT THESE EVENTS, each carrying user_id, timestamp, source, platform, and version:
  signup_started | signup_completed | activation_reached (define the exact action and threshold) |
  core_action_completed | payment_started | payment_succeeded | payment_failed (with reason code) |
  error_shown | support_contacted
CAP THE TAXONOMY AT 8-12 EVENTS. A 60-event schema at MVP stage is noise that nobody queries and
that nobody maintains, and it makes the funnel harder to read, not easier.
IDENTITY STITCHING: alias the anonymous id to user_id at signup. Skip this and your funnel is
broken from day one, and no later fix recovers the lost sessions.
ONE SOURCE OF TRUTH: choose ONE of PostHog, Amplitude, Mixpanel, or GA4 with BigQuery, and add
Segment or RudderStack only if you have 3+ destinations. Never run two analytics tools "to compare".
ALSO REQUIRED: Sentry (or equivalent) for errors, and session replay (PostHog, Microsoft Clarity
which is free, or FullStory). At MVP scale 20 replays teach more than 20,000 events.
DEFINE BEFORE LAUNCH: the funnel steps, the activation definition, and the cohort dimensions
(acquisition source, signup week, plan). Retrofitting cohorts is how MVP data becomes unreadable.
STATISTICAL REALITY: with 100 users you can only detect enormous differences. Do NOT A/B test an
MVP below roughly 1,000 weekly conversions (see ab-testing-framework.md for the sample math). Use
qualitative evidence plus directional numbers, and say the word "directional" out loud in every
readout so nobody quotes a 12% difference from n=40 back at you next quarter.
WEEKLY READOUT (30 min, fixed format): cohort retention table, funnel by step, top 5 errors, top 5
support themes, 3 verbatim user quotes, and one decision.
```

## The Post-MVP Decision: Persevere, Pivot, or Kill

```
| Signal            | PERSEVERE                    | PIVOT                          | KILL                    |
|-------------------|------------------------------|--------------------------------|-------------------------|
| Retention curve   | Flattens at or above target  | Flattens for ONE segment only  | Zero by week 4 in every |
|                   |                              | → go to that segment           | segment                 |
| Willingness to pay| ≥20-30% of qualified users   | Interest but no payment → pivot| Nobody pays after 3     |
|                   | convert or pre-pay           | value capture or segment       | pricing attempts        |
| Sean Ellis test   | ≥40% "very disappointed"     | 25-40% → iterate, narrow the   | <25% after two          |
|                   | if it disappeared            | segment                        | iterations              |
| Funnel shape      | One broken step, rest healthy| Every step leaks → the value   | No step works, nobody   |
|                   | → fix and continue           | prop is the problem            | asks for a fix          |
| Qualitative       | Users chase you for access   | Used for a different job than  | Polite praise, zero     |
|                   | and invite others            | the one you designed for       | usage                   |

PIVOT TYPES: zoom-in (one feature becomes the product), zoom-out (the product becomes one feature),
customer segment, customer need, platform, business architecture, value capture, engine of growth,
channel, technology. Name which one you are doing; an unnamed pivot is a rewrite with better PR.
TIME BOX: 2 full build-measure-learn cycles, or 90 days, per major assumption before the call is
made. Extending without NEW evidence is sunk-cost behaviour wearing a roadmap.
KILL WELL: write the post-mortem (what we believed, what we learned, what would have to be true to
try again), harvest reusable components, tell users honestly with a data export and a wind-down
date, honour refunds, and redeploy the team within 2 weeks. A clean kill is a hiring asset.
```

## Tech-Debt Policy During MVP

```
ACCEPTABLE TO DEFER (write a ticket, defer with intent):
  test coverage beyond the critical path and payments | horizontal scaling and caching | i18n and
  localization | admin tooling beyond a table and a CSV export | design-system completeness |
  microservices (start with the monolith) | CI beyond one pipeline | Kubernetes | observability
  beyond error tracking and structured logs | SSO | performance work on pages that are not broken |
  multi-region | analytics dashboards for customers | accessibility beyond keyboard and contrast
  basics (see accessibility-i18n.md for what is legally required in your market)

NEVER ACCEPTABLE, AT ANY STAGE OR SIZE:
  ✗ Password storage that is not a vetted hash (bcrypt/argon2) or a managed identity provider
  ✗ Secrets in the repository, or shared production credentials
  ✗ PII unencrypted in transit or at rest        ✗ No backups, or backups never test-restored
  ✗ Payment calls without idempotency keys, or no daily reconciliation against the processor
  ✗ Money movement without an append-only audit log
  ✗ Admin actions without authentication and role checks
  ✗ No rate limiting on auth, OTP, and payment endpoints
  ✗ Ignoring deletion or consent requests        ✗ Logging cards, passwords, tokens, or full PII

DEBT REGISTER: every deferral gets a ticket, an owner, a TRIGGER CONDITION ("when we pass 1,000
users", "before the first enterprise deal", "before we take EU customers"), and a review date.
Debt that is written down is a decision; debt that is not written down is an accident.
THE LINE: defer anything that costs engineering time later. Never defer anything that costs user
trust, user money, or legal standing, because those debts cannot be repaid at any interest rate.
```

## Enterprise and Regulated MVPs: What Cannot Be Cut

```
MONEY (payments, lending, wallets, payouts):
  Double-entry ledger from day one; never derive a balance from a mutable column. Idempotency on
  every payment call. Daily reconciliation against the processor with a documented break process.
  Refund and chargeback paths before launch, not after the first dispute. Immutable audit log of
  every money movement. Explicit currency and rounding rules. Use a hosted payment page or a
  tokenizing SDK so card data never touches your servers (PCI DSS SAQ-A instead of SAQ-D), follow
  your processor's tokenization mandates, and store raw card data nowhere, ever.
HEALTH DATA:
  A signed BAA with every vendor that could touch PHI, which in practice means disabling session
  replay and third-party analytics on PHI screens. Access controls plus an audit log of every
  record VIEW, not just every edit. Minimum-necessary access by role. Encryption in transit and at
  rest. A written breach-notification plan with named owners and clocks.
PERSONAL DATA (GDPR, India's DPDP, and equivalents):
  A lawful basis and stored consent records; a data-subject-request process that actually executes
  access, deletion, and correction (GDPR's clock is 30 days); a data map; retention limits; a
  published sub-processor list; DPAs with vendors; residency where required. See data-governance.md
  and global-compliance.md for the operating detail.
ENTERPRISE BUYING MINIMUMS (these block deals regardless of how good the product is):
  SSO via SAML or OIDC (the single most common blocker), role-based access control, customer-
  exportable audit logs, a completed security questionnaire answer set, a DPA, a status page with a
  stated uptime target, and a documented incident-response process (see incident-management.md).
SOC 2: Type I is achievable pre-revenue in roughly 6-10 weeks with Vanta or Drata. Type II needs
3-6 months of continuous evidence, so start the evidence clock before a deal demands the report.
SEQUENCING RULE: build a compliance-shaped MVP with a smaller feature surface rather than a
feature-rich MVP that cannot legally be sold. In regulated markets the compliance surface IS the
product surface. If the timeline forces a cut, narrow the USER POPULATION instead (one hospital,
one corridor, one state, internal users only). Shrink the blast radius, never the safeguards.
```

## One-Page MVP Brief

```
RISKIEST ASSUMPTION: ________________________________________  KILL RISK (1-25): ____
RAT (test before building): ________________________  PASS: ______  BY (date): ______
MVP TYPE: concierge / Wizard of Oz / landing page / single-feature / piecemeal / pre-order / pilot
CORE LOOP (must complete end to end): ______________________________________________
BUILD PATH: manual / no-code / custom  because the dominant risk is: ______________
IN SCOPE (must-haves on the critical path): ________________________________________
CUT (with the sentence "user cannot ___" left blank): ______________________________
TIMEBOX: ____ weeks, launch date ______ (fixed). Scope added since kickoff: ____%
SUCCESS THRESHOLD: ______   KILL THRESHOLD: ______   DECISION OWNER: ______
EVENTS INSTRUMENTED: signup / activation / core action / payment / error / support  □ all
NEVER-CUT CHECKS: auth □ secrets □ PII encryption □ backups tested □ payment idempotency □
                  audit log □ rate limiting □ consent and deletion □
DEBT REGISTER: ____ items, each with an owner and a trigger condition
POST-MVP REVIEW DATE: ______  (persevere / pivot / kill, decided against the numbers above)
```
