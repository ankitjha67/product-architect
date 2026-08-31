# PRD Framework

Use this template for every PRD. Fill every section - if a section isn't applicable,
state why rather than leaving it blank.

---

```markdown
# Product Requirements Document: [Feature/Module Name]

**Version**: [1.0]
**Author**: [Name]
**Date**: [Date]
**Status**: [Draft / In Review / Approved / In Development]
**Priority**: [P0 / P1 / P2 / P3]

---

## 1. Overview

### 1.1 Problem Statement
[2-3 sentences. What problem does this solve? For whom? What evidence do we have that
this problem is real and worth solving?]

### 1.2 Goals
- **Primary goal**: [Measurable outcome this feature should achieve]
- **Secondary goals**: [Additional benefits]

### 1.3 Non-Goals (Explicitly Out of Scope)
- [Thing we are NOT doing, and why]
- [Thing we are NOT doing, and why]

### 1.4 Success Metrics
| Metric | Current | Target | Measurement Method |
|--------|---------|--------|-------------------|
| [Metric name] | [Baseline or N/A] | [Target value] | [How we'll measure] |

## 2. User Stories

### 2.1 Primary Personas
[Reference personas from Discovery Brief. List the 1-2 personas this feature serves.]

### 2.2 User Stories
| ID | As a... | I want to... | So that... | Priority |
|----|---------|-------------|------------|----------|
| US-001 | [persona] | [action] | [outcome] | P0 |
| US-002 | [persona] | [action] | [outcome] | P0 |

### 2.3 Acceptance Criteria
For each user story:
```
US-001:
- GIVEN [precondition] WHEN [action] THEN [expected outcome]
- GIVEN [precondition] WHEN [action] THEN [expected outcome]
- GIVEN [edge case] WHEN [action] THEN [expected outcome]
```

## 3. Functional Requirements

### 3.1 Feature Specification
[For each feature within this module:]

#### Feature: [Name]
- **Description**: [What it does]
- **Trigger**: [What initiates this feature]
- **Input**: [What data/action is needed from the user]
- **Processing**: [What the system does]
- **Output**: [What the user sees/receives]
- **Validation Rules**: [Input validation, business rules]

### 3.2 User Flows

#### Happy Path
1. [Step] → [System response]
2. [Step] → [System response]
3. [Step] → [System response]

#### Alternative Paths
- [Condition] → [Alternative flow]

#### Error Paths
- [Error condition] → [Error handling] → [Recovery path]

### 3.3 Business Rules
| Rule ID | Rule | Condition | Action |
|---------|------|-----------|--------|
| BR-001 | [Rule name] | [When this condition] | [Do this] |

## 4. UI/UX Requirements

### 4.1 Screens Required
| Screen | Description | States |
|--------|-------------|--------|
| [Screen name] | [What it shows] | Loaded, Loading, Empty, Error |

### 4.2 Screen-Level Specifications
[For each screen, specify:]
- Content elements and hierarchy
- Interactive elements and behaviors
- Navigation paths (where can user go from here?)
- Loading behavior (skeleton, spinner, progressive)
- Empty state (what to show when no data)
- Error state (what to show when something breaks)

### 4.3 Interaction Specifications
| Interaction | Trigger | Behavior | Feedback |
|------------|---------|----------|----------|
| [Name] | [Tap/swipe/scroll] | [What happens] | [Visual/haptic] |

## 5. Data Requirements

### 5.1 Data Model
| Entity | Fields | Type | Required | Notes |
|--------|--------|------|----------|-------|
| [Entity] | [field_name] | [string/int/etc] | [Y/N] | [Validation, constraints] |

### 5.2 API Endpoints
| Method | Endpoint | Auth | Description | Request | Response |
|--------|----------|------|-------------|---------|----------|
| POST | /api/v1/... | Yes | [What it does] | [Body] | [Shape] |

## 6. Non-Functional Requirements
- **Performance**: [Response time, load time targets]
- **Scalability**: [Expected load, growth expectations]
- **Availability**: [Uptime requirements]
- **Security**: [Auth requirements, data protection needs]
- **Accessibility**: [WCAG level, specific requirements]
- **Localization**: [Languages, currencies, formats]


## 7. Edge Cases & Error Handling
| Scenario | Expected Behavior | User Feedback |
|----------|------------------|---------------|
| [Edge case] | [System behavior] | [What user sees] |
| Network failure during [action] | [Behavior] | [Message] |
| Concurrent access to [resource] | [Behavior] | [Message] |

## 8. Dependencies & Risks
| Dependency/Risk | Type | Impact | Mitigation |
|----------------|------|--------|------------|
| [Dependency] | [External/Internal] | [What if unavailable] | [Fallback plan] |

## 9. Release Plan
- **Phase**: [Which roadmap phase]
- **Estimated effort**: [T-shirt size with justification]
- **Dependencies**: [What must be built/available first]
- **Feature flag**: [Will this be behind a flag?]
- **Rollback plan**: [How to undo if issues arise]


## 10. Open Questions
| Question | Owner | Due Date | Resolution |
|----------|-------|----------|------------|
| [Question] | [Who needs to answer] | [When] | [Answer when resolved] |

## Appendix
- Wireframes / mockups (link to design files)
- Technical architecture references
- Research data supporting decisions
- Competitive analysis screenshots
```

---

## Section-by-Section: Why It Exists, and What Bad Looks Like

| Section | The decision it unblocks | A bad version looks like |
|---------|--------------------------|--------------------------|
| Header (version/status) | Tells a reader in 5 seconds whether it is safe to build from | "Draft" for 6 weeks while engineering builds from it |
| 1.1 Problem | Stops you building something nobody asked for; it is what you check against at launch | A feature description with the word "problem" in front |
| 1.3 Non-goals | Kills the assumptions reviewers would otherwise carry into week 6 | Empty, or straw non-goals nobody ever proposed |
| 1.4 Metrics | Makes the bet falsifiable and forces instrumentation before launch | "Increase engagement": no baseline, no target, no source |
| 2 Stories + AC | Turns intent into testable behavior; QA writes tests straight from AC | AC that restate the story instead of specifying behavior |
| 4 UI/UX | Forces loaded/loading/empty/error to exist before design review | "See Figma", with no states and no failure behavior |
| 5 Data | Surfaces migrations, PII, and API contracts while they are cheap to change | Field names with no types, nullability, or PII flags |
| 7 Edge cases | Prevents most post-launch incidents (see stress-test-framework.md) | 3 obvious cases, none from concurrency, money, or auth |
| 10 Open questions | Legitimizes unknowns so they are tracked, not hidden | Questions with no owner and no due date |

## Problem Statement Craft

```
STRUCTURE (4 sentences, this order):
  WHO       specific and sized: "Sellers with >100 SKUs (12% of sellers, 41% of GMV)"
  WHAT      the observed friction, in their words
  EVIDENCE  the number, and where it came from, with a date
  COST      what it costs them and us if nothing changes

EVIDENCE BAR - at least two independent sources, each named and dated:
  ☐ Quantitative: funnel/event data with the query or dashboard linked
  ☐ Qualitative: >=5 interviews or 20 support tickets, quoted (Agent 35)
  ☐ Commercial: churn reasons, lost-deal notes, or support cost (Agents 32, 17)
  One loud customer or an exec opinion is a hypothesis, not evidence.

SOLUTION-SHAPED PROBLEM TEST - if only one solution could satisfy it, rewrite it:
  ✗ "Users need a bulk upload tool"  ✓ "Sellers with >100 SKUs spend 3.5h/week
     re-keying inventory; 22% of churn interviews cite it"

FIVE QUESTIONS IT MUST SURVIVE:
  1. Who exactly, and what % of the base?   2. How do we know (linked, dated)?
  3. What do they do today instead (the workaround is the real competitor)?
  4. Why now - what changed?   5. What happens if we do nothing for 2 quarters?
```

## Success Metrics: Leading + Lagging Pairs, and the Gameability Check

```
Every goal needs BOTH: a lagging metric that proves value, and a leading metric that
moves within ~2 weeks so you can steer before the quarter is spent.

| Goal                 | Leading (days)                 | Lagging (weeks to months)   |
|----------------------|--------------------------------|-----------------------------|
| Faster onboarding    | % completing step 3 in <10 min | D30 retention of new cohorts|
| Reduce support load  | % sessions hitting self-serve  | tickets per 100 accounts    |

SIX FIELDS OR IT IS NOT A METRIC: name · definition (numerator/denominator) ·
source event or table · baseline + date · target + date · owner.

GUARDRAILS (must not degrade; state the tolerance, e.g. "p95 +<10%"):
  ☐ revenue per session   ☐ p95 latency of the touched flow   ☐ contact rate
  A launch that hits its target and breaks a guardrail is a failed launch.

GAMEABILITY CHECK - for each metric ask "how would I hit this without helping anyone?"
| Metric           | Cheapest way to game it        | Pair it with                 |
|------------------|--------------------------------|------------------------------|
| Signups          | buy low-intent traffic         | activation rate, D7 retention|
| Time in app      | make it slower to find things  | task completion time, CSAT   |

TARGETS CARRY CONSEQUENCES: "If activation reaches 35% by Mar 31 we fund phase 2;
below 25% we roll back and re-open discovery." A target with no decision is a wish.
```

## Scope Boundaries: Non-Goals Prevent More Rework Than Goals

```
WHY: goals are read once and agreed. Non-goals are what people ARGUE about in week 6.

WRITE NON-GOALS FOR WHAT PEOPLE WILL ASSUME, not for absurdities:
  ✓ "No CSV export in v1. Reason: 3 weeks of work, asked for by 4 accounts.
     Revisit if >20 accounts request it by Q3."           [NOT-NOW + trigger]

EVERY NON-GOAL CARRIES: reason · class · trigger.
  CLASSES: NOT-NOW (deferred, has a revisit trigger) · NOT-EVER (a positioning
  decision) · NOT-US (another team or a vendor owns it - name them).

BOUNDARY CHECKLIST - mark IN or OUT explicitly. Silence is where scope creeps:
  ☐ Surfaces: web / iOS / Android / public API / partner
  ☐ Markets, locales, currencies, regulators (global-compliance.md)
  ☐ Billing: priced, free, or bundled (Agent 36 signs)
  A "TBD" here is an open question with an owner, never a blank.
```

## Living Registers: Open Questions and Assumptions

```

OPEN QUESTIONS (§10) - anything unresolved that could change the design:
| ID | Question | Blocks | Owner | Due | Status | Resolution + date |
| Q1 | Do we charge for bulk import? | pricing, UI | @name | Mar 4 | Open | |
  ✓ Every question names what it BLOCKS; one blocking nothing is a note, not a question
  ✓ Resolved questions stay, struck through, with the answer. That is the record
  ✓ No question blocking a P0 story may be open at engineering sign-off

ASSUMPTIONS - what you believe but have not proven, that would change the plan if false:
| ID | Assumption | If false, then | Confidence | Validate how | Owner | By |
| A1 | <5% of accounts hold >10k SKUs | pagination redesign | Med | run the query | @name | Mar 2 |
  ✓ Low confidence + expensive "if false" = validate BEFORE build starts, not after
```

## Review and Sign-Off Matrix

```
Reviewers give input. Signers can block. Name people, not teams, and record the date.

| Trigger present in the PRD              | Must review                  | Must SIGN      |
|-----------------------------------------|------------------------------|----------------|
| Always                                  | Eng lead, Design, QA (07)    | Eng lead       |
| Personal data touched                   | Privacy (39), Security (09)  | Privacy (39)   |
| Pricing, packaging, discounts           | Pricing (36), Finance (18)   | Pricing (36)   |
| Money movement, refunds, invoicing      | Billing eng (55), Rev acct(56)| Finance (18)  |
| New market or cross-border data flow    | Compliance (11), Tax (57)    | Compliance (11)|
| Regulated sector (fintech/health/minors)| Compliance (11), Legal (10)  | Legal (10)     |
| ML or LLM in the user path              | AI eval (63), Privacy (39)   | AI eval (63)   |

SIGN-OFF RECORD lives in the PRD header, never in chat:
| Role | Name | Decision | Date | Conditions |

  ✓ Silence is not approval. Review SLA: 3 business days (1 day for P0 scope), then escalate
  ✓ Scope, data-handling, or pricing changes after sign-off require re-signing
  ✓ Many signers, exactly one accountable owner: the PM
```

## Versioning and Change History

```
VERSION SCHEME:
  0.x  Draft. Not safe to build from; anything can change
  1.0  Approved and signed. Estimation and build may begin
  1.x  Clarifications and additions that do NOT change scope, metrics, or contracts
  2.0  Material change to scope, metrics, data model, API contract, or pricing.
       Re-review by every signer whose trigger is affected

CHANGE LOG at the top of the PRD, newest first, never truncated:
| Version | Date | Author | Change | Reason | Re-sign |
| 2.0 | Mar 20 | @pm | CSV export cut from v1 | capacity, moved to Q3 | Yes: Eng, Support |

  ✓ Edit in place. One URL forever. Never "PRD_final_v2_REAL.docx"
  ✓ Every AC change after build starts is a change-log row. Unlogged changes are how
    QA ends up testing a spec nobody agreed to
```

## The One-Page PRD (short form)

```
USE THE SHORT FORM ONLY IF EVERY BOX IS TRUE:
  ☐ Under ~2 engineer-weeks   ☐ No schema migration, no new persisted field, no new PII
  ☐ No new external API contract, vendor, or SDK
  ☐ No pricing, billing, tax, or contractual change
  ☐ No new market, locale, or regulated surface
  ☐ Reversible by a feature flag within one deploy
  ANY unchecked box means use the full template. When in doubt, full template.

TEMPLATE:
  TITLE · owner · date · flag name
  PROBLEM      2 sentences plus the one number that proves it
  CHANGE       what a user will see that is different, one paragraph
  NOT DOING    2-4 explicit non-goals
  SUCCESS      1 leading metric + 1 guardrail, each with baseline and target
  ACCEPTANCE   3-8 GIVEN/WHEN/THEN lines, including 2 edge cases and the error state
  RISKS        top 2, with mitigations
  ROLLOUT      flag, ramp %, rollback trigger, who watches what and for how long
  OPEN Qs      with owners and dates

```

## Reviewing Someone Else's PRD: Quality Rubric

```
Score 0-2 per dimension (0 missing, 1 weak, 2 solid). Below 14/20: send it back with
specifics. Below 10/20: it is still a draft and should not be in review.

| # | Dimension            | 2 points means                                            |
|---|----------------------|-----------------------------------------------------------|
| 1 | Problem + evidence   | sized segment, dated data from >=2 sources, no solution in it|
| 2 | Goals and non-goals  | non-goals cover what people will actually assume, with reasons|
| 3 | Metrics              | leading + lagging + guardrail, baselines, owner, gameability tested|
| 4 | Stories + AC         | testable GIVEN/WHEN/THEN; QA could write tests today        |
| 5 | Edge cases           | concurrency, money, auth, empty and very-large states covered|
| 6 | Data and API         | types, nullability, PII flags, versioning, migration plan   |
| 7 | NFRs                 | numbers for latency, load, availability, accessibility level|
| 8 | Deps and risks       | named owners, dates, mitigations, critical path identified  |
| 9 | Rollout and rollback | flag, ramp, rollback trigger, monitoring owner              |
|10 | Honest unknowns      | real open questions with owners and dates                   |

RED FLAGS (each is a send-it-back on its own):
  ⚠ The problem statement names the solution ("users need a dashboard")
  ⚠ A metric with no baseline, or a round-number target with no derivation
  ⚠ Fewer than 5 edge cases, or only happy-path errors
  ⚠ Passive voice hiding the actor: "the data will be validated" - by what, when, then what?
  ⚠ Weasel words with no number: fast, seamless, intuitive, robust, scalable, soon
  ⚠ A PII field in the data model with no privacy reviewer named

```
