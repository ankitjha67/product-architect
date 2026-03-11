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
