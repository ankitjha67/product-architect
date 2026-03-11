# Product Lifecycle Management

## The Infinite Loop

Products don't have a finish line. Launch is Day 1. This framework governs the continuous
cycle of Build → Measure → Learn → Improve that runs for the product's entire lifetime.

```
    ┌──────────────────────────────────────────┐
    │                                          │
    ▼                                          │
 DISCOVER  →  BUILD  →  LAUNCH  →  MEASURE  →  LEARN  →  IMPROVE ──┘
    │                                          ▲
    │                                          │
    └─── (new features enter the cycle) ───────┘
```

## Feature Lifecycle

Every feature goes through these stages:

### 1. Ideation → Validation
```
BEFORE BUILDING ANYTHING:
□ Problem validated with user research (interviews, surveys, data analysis)
□ Solution concept tested (prototype, mockup, Wizard of Oz test)
□ Business case: Expected impact on North Star metric
□ Effort estimate: T-shirt size with engineering input
□ Prioritized against backlog using RICE/ICE scoring
□ Approved by product review (or equivalent decision-making process)
```

### 2. Build → Ship
```
□ PRD written and reviewed (Agent 04 standards)
□ Design completed and reviewed (Agent 05 standards)
□ Engineering implementation
□ Code review
□ QA testing (unit + integration + E2E)
□ Security review (for sensitive features)
□ Feature flag: Behind a flag, can be toggled off instantly
□ Staged rollout: 5% → 25% → 50% → 100%
□ Monitoring: Custom metrics and alerts for new feature
```

### 3. Measure → Evaluate
```
WITHIN 2 WEEKS OF LAUNCH:
□ Adoption rate: What % of target users used the feature?
□ Completion rate: Of users who started, what % completed the flow?
□ Error rate: Any new errors introduced?
□ Performance impact: Any degradation in page load, API response?
□ User feedback: In-app feedback, support tickets, social mentions

WITHIN 1 MONTH:
□ Retention impact: Do users who use this feature retain better?
□ Revenue impact: Does this feature correlate with higher spend?
□ North Star impact: Did the North Star metric move?
□ Cannibalization: Did usage of other features decrease?
□ Support impact: More or fewer support tickets?
```

### 4. Iterate → Optimize
```
BASED ON DATA:
- If adoption < 30% of target: Discoverability problem → improve placement, onboarding
- If adoption OK but completion < 50%: Usability problem → fix UX, reduce friction
- If completion OK but no metric impact: Wrong feature → learn and redirect effort
- If all metrics positive: Double down → enhance, cross-sell, extend
```

### 5. Sunset → Remove (often forgotten)

```
WHEN TO SUNSET A FEATURE:
- Usage < 5% of target audience for 3+ months
- Maintenance cost exceeds value delivered
- Feature conflicts with new strategic direction
- Security/compliance burden outweighs benefit
- Better alternative exists (built internally or acquired)

SUNSETTING PROCESS:
1. ANNOUNCE: Communicate deprecation 90 days before removal
   - In-app notification
   - Email to affected users
   - Documentation update
   - Migration guide (if data needs to move)

2. MIGRATE: Help users transition
   - Export data in portable format
   - Suggest alternative features/products
   - Provide migration tools if applicable

3. DISABLE: Soft disable first (feature hidden but data preserved)
   - Monitor for support tickets from confused users
   - Address edge cases

4. REMOVE: Hard remove after grace period
   - Clean up code (don't leave dead code)
   - Remove from API (with proper deprecation headers first)
   - Archive data per retention policy
   - Update documentation
```

## Continuous Improvement Cadences

### Weekly
```
WEEKLY PRODUCT REVIEW (1 hour):
- Review: Key metrics dashboard (North Star, AARRR, feature adoption)
- Discuss: Top 3 user feedback themes from past week
- Action: Prioritize quick wins for next sprint
- Experiment: Review running experiments, launch new ones
- Support: Top support issues — systemic fixes needed?
```

### Monthly
```
MONTHLY PRODUCT DEEP-DIVE (2 hours):
- Cohort analysis: How are different user segments performing?
- Feature audit: Which features are thriving? Which are dying?
- Competitive scan: What did competitors launch? Any threats?
- Technical health: Performance trends, error trends, tech debt inventory
- Roadmap update: Adjust Horizon 1-2 based on learnings
```

### Quarterly
```
QUARTERLY PRODUCT STRATEGY REVIEW (half-day):
- Strategy validation: Is our positioning still correct?
- Market assessment: Has the market changed? New competitors? New regulations?
- User research synthesis: What have we learned about our users this quarter?
- OKR setting: Set objectives and key results for next quarter
- Roadmap: Update Horizon 2-3 based on strategy
- Resource: Do we have the right team? Any gaps?
```

### Annually
```
ANNUAL PRODUCT VISION REVIEW (full day):
- Vision check: Are we still building toward the right future?
- Market evolution: How has the market changed in the past year?
- Technology landscape: Any new technologies that change what's possible?
- Competitive moat assessment: Is our advantage growing or eroding?
- 3-year roadmap update: Where are we heading?
- Team and org structure: Does the team structure serve the product needs?
```

## Product Health Scorecard

```
Score each dimension quarterly (1-10):

PRODUCT HEALTH:
- User growth rate (vs. target)
- Retention rate (vs. benchmark)
- NPS/CSAT score
- Core feature adoption
- Error/crash rate

BUSINESS HEALTH:
- Revenue growth (vs. target)
- Unit economics (LTV/CAC)
- Gross margin
- Market share (estimated)
- Expansion revenue

TECHNICAL HEALTH:
- Performance (Core Web Vitals, API latency)
- Reliability (uptime, incident count)
- Tech debt score (estimated)
- Security posture (vulnerabilities, last audit)
- Deployment frequency

TEAM HEALTH:
- Velocity trend (story points, features shipped)
- Bug escape rate (bugs found in production vs. QA)
- Team satisfaction (survey)
- Knowledge distribution (bus factor per area)
- Hiring pipeline (for identified gaps)

OVERALL PRODUCT HEALTH = Weighted average of all dimensions
Display as traffic light: Green (8-10), Yellow (5-7), Red (1-4)
```
