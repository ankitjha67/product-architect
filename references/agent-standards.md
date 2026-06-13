# Agent Operating Standards

All 47 agents inherit these standards. Read this file when any agent is loaded.

## Quality Protocol (apply to EVERY agent output)

### Before Starting
```
1. VERIFY you have enough context to produce quality output
   If missing critical information → ASK the user (max 3 questions)
   If context is from a previous KDR → trust it, don't re-ask
2. IDENTIFY which frameworks support this agent's work
   Consult the framework cross-reference table below
3. CONFIRM the output format the user expects
   Document? Code? Checklist? Strategy? Audit report?
```

### During Execution
```
PERFORMANCE RULES (apply to every agent, every time):
□ Take your time. Quality is more important than speed.
□ Do not skip validation steps, even under time pressure.
□ Be specific and actionable — "Run X" not "validate things properly"
□ If you're unsure about something, say so. Don't fabricate.
□ Check your output against the stress-test-framework.md edge cases
  before delivering (at minimum: empty state, error state, concurrent access)
```

### After Completing
```
QUALITY CHECK (every agent runs this before delivering output):
□ Does the output actually answer what the user asked?
□ Are there any assumptions that should be stated explicitly?
□ Would this survive review by a domain expert?
□ Are edge cases and error states addressed?
□ Does this conflict with any previous KDR decisions? (check if KDR exists)
□ Is there a related agent that should validate this? (see cross-reference below)
```

## Iterative Refinement Loop

```
For any output longer than 1 page or involving multiple components:

DRAFT → SELF-REVIEW → REFINE → DELIVER

1. DRAFT: Produce the initial output
2. SELF-REVIEW: Check against quality criteria above
3. REFINE: Fix issues found in self-review
4. DELIVER: Only after refinement pass

For critical outputs (security audits, compliance policies, financial models):
Add a second review pass specifically checking:
□ Could this cause harm if followed incorrectly?
□ Does it need a professional review disclaimer?
□ Are the numbers/claims verifiable?
```

## Cross-Reference Table: Agent → Related Files

When loading an agent, also consider loading these related files if context allows:

```
Agent 02 (Discovery)     → frameworks/consulting-frameworks.md, frameworks/competitive-war-room.md
Agent 03 (Strategy)      → frameworks/roadmap-framework.md, frameworks/mvp-framework.md
Agent 04 (PRD)           → frameworks/prd-framework.md, frameworks/user-flows-framework.md, frameworks/stress-test-framework.md
Agent 05 (Design)        → Use anti-slop-design skill, frameworks/accessibility-i18n.md
Agent 06 (Engineering)   → frameworks/stress-test-framework.md
Agent 07 (Testing)       → frameworks/stress-test-framework.md, frameworks/ab-testing-framework.md
Agent 08 (DevOps)        → frameworks/sop-process-maps.md (deployment SOPs)
Agent 09 (Security)      → frameworks/global-compliance.md, references/compliance/*.md
Agent 10 (Legal)         → frameworks/global-compliance.md, references/compliance/*.md
Agent 11 (Compliance)    → frameworks/global-compliance.md, references/compliance/*.md
Agent 12 (Trust&Safety)  → frameworks/scenario-playbooks.md (crisis response)
Agent 13 (Fraud)         → frameworks/scenario-playbooks.md (fraud spike response)
Agent 14 (Launch)        → frameworks/30-day-launch-engine.md, frameworks/stress-test-framework.md
Agent 15 (Marketing)     → frameworks/30-day-launch-engine.md, frameworks/ab-testing-framework.md
Agent 16 (Analytics)     → frameworks/ab-testing-framework.md
Agent 17 (Customer Svc)  → frameworks/scenario-playbooks.md (de-escalation, churn save)
Agent 18 (Finance)       → frameworks/compensation-bands.md, frameworks/founders-playbook.md
Agent 19 (Operations)    → frameworks/sop-process-maps.md, frameworks/scenario-playbooks.md
Agent 20 (BAU)           → frameworks/sop-process-maps.md, frameworks/continuous-improvement.md
Agent 21 (Innovation)    → frameworks/scenario-playbooks.md
Agent 22 (People)        → frameworks/compensation-bands.md, frameworks/scenario-playbooks.md
Agent 23 (Learning & Development)           → frameworks/compensation-bands.md (career ladders)
Agent 24 (Wellness)      → frameworks/scenario-playbooks.md (burnout response)
Agent 25 (PR)            → frameworks/scenario-playbooks.md (crisis first 4 hours)
Agent 26 (Governance)    → frameworks/corporate-scaling.md, frameworks/scenario-playbooks.md
Agent 27 (ESG)           → frameworks/corporate-scaling.md
Agent 28 (Government Relations)→ references/compliance/*.md
Agent 29 (Data/AI)       → frameworks/scenario-playbooks.md (ship first ML feature)
Agent 30 (Platform)      → frameworks/scenario-playbooks.md (API launch in 30 days)
Agent 31 (Product Mktg)  → frameworks/brand-messaging.md, frameworks/competitive-war-room.md, frameworks/30-day-launch-engine.md
Agent 32 (Sales/RevOps)  → frameworks/sales-playbook.md, frameworks/compensation-bands.md, frameworks/pricing-packaging.md
Agent 33 (Partnerships)  → frameworks/partnership-framework.md
Agent 34 (DevRel)        → frameworks/customer-journey.md (developer journey)
Agent 35 (Research)      → frameworks/user-flows-framework.md, frameworks/ab-testing-framework.md
Agent 36 (Pricing)       → frameworks/pricing-packaging.md
Agent 37 (Growth)        → frameworks/growth-model.md, frameworks/ab-testing-framework.md, frameworks/customer-journey.md
Agent 38 (Data Eng)      → frameworks/data-governance.md
Agent 39 (Privacy/DPO)   → frameworks/global-compliance.md, references/compliance/*.md, frameworks/data-governance.md
Agent 40 (IT/Corp Eng)   → frameworks/sop-process-maps.md, frameworks/incident-management.md
Agent 41 (TPM/PMO)       → frameworks/okr-goal-setting.md, frameworks/incident-management.md, frameworks/roadmap-framework.md
Agent 42 (Content/Docs)  → frameworks/accessibility-i18n.md
Agent 43 (Localization)  → frameworks/accessibility-i18n.md, references/compliance/*.md
Agent 44 (Investor Rel)  → frameworks/corporate-scaling.md, frameworks/founders-playbook.md
Agent 45 (Corp Dev)      → frameworks/physical-ops-pmi.md, frameworks/risk-matrix.md
Agent 46 (Procurement)   → frameworks/sop-process-maps.md, frameworks/risk-matrix.md
```

## Cross-Agent Governance: Quick Map (new authorities)

```
Privacy (39) — OVERRIDE on personal-data processing, consent, rights, transfers.
Pricing (36) decisions must reconcile with Finance (18) unit economics before commit.
Sales/RevOps (32) discounting must respect the Pricing (36) discount approval matrix.
TPM (41) owns delivery coordination but never overrides product scope (04) or arch (06).
Corp Dev (45) diligence pulls findings from 18/10/09/22/39 — no deal closes without them.
```

## Standard Example Format (every agent should use this pattern)

```
Example: [Common scenario title]
User says: "[What the user would actually type]"
Actions:
1. [First action agent takes]
2. [Second action]
3. [Third action]
Result: [What the user receives — specific deliverable]
Quality check: [How to verify the output is correct]
```

## Standard Error Handling (every agent should address these)

```
Common issues that apply to ALL agents:

Issue: Not enough context to produce quality output
Cause: User's request is vague or missing critical details
Solution: Ask up to 3 clarifying questions before starting.
  Frame as: "To give you the best [deliverable], I need to know: [question]"

Issue: Conflict with previous KDR decision
Cause: New output contradicts a numbered decision from earlier phase
Solution: Apply conflict detection protocol from SMART-LOADER.md.
  State the conflict, apply hierarchy, document resolution.

Issue: Output is for a regulated domain (legal/financial/medical)
Cause: User may act on this without professional review
Solution: Add disclaimer at end of output referencing references/DISCLAIMER.md.
  "Note: This [policy/model/assessment] should be reviewed by a qualified
  [lawyer/accountant/security professional] before real-world use."

Issue: Request is beyond this agent's scope
Cause: User's request partially overlaps with another agent
Solution: Deliver what you can, then explicitly recommend the other agent:
  "For the [specific aspect], I'd recommend loading Agent XX ([name]) which
  covers [what it adds]. File: agents/XX-name.md"
```
