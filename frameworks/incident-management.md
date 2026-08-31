# Incident Management & On-Call Framework

When production breaks, improvisation costs you customers and trust. This is the
runbook: a severity matrix, the incident lifecycle, the roles (ICS model),
on-call program design, comms templates, the blameless postmortem, SLO/error-budget
ties, and the metrics that tell you if you're getting better.

---

## 1. SEVERITY MATRIX

```
| SEV  | Definition                          | Examples                        | Response  | Who's paged              |
|------|-------------------------------------|---------------------------------|-----------|--------------------------|
| SEV1 | Critical: full outage / data loss / | Site down, payments failing,    | <5 min ack| On-call + IC + eng lead  |
|      | security breach. Revenue/safety hit | data breach, mass data corruption| 24/7      | + leadership notified    |
| SEV2 | Major: core feature broken for many;| Login broken for a region,      | <15 min   | On-call + IC             |
|      | severe degradation, no workaround   | checkout slow, key API 5xx spike| 24/7      |                          |
| SEV3 | Minor: partial/feature degraded,    | One non-core feature down,       | <1 hr     | On-call (business hours) |
|      | workaround exists                   | elevated error rate, slow page  | bus. hrs  |                          |
| SEV4 | Low: cosmetic / minor, no user impact| Typo, minor UI glitch, isolated | next day  | Normal backlog           |
|      |                                     | non-critical error              |           |                          |

DECLARE UP, NOT DOWN: when unsure between two levels, pick the HIGHER one.
You can always downgrade. Under-calling a SEV1 is the expensive mistake.
ANY engineer can declare an incident. No permission needed to pull the alarm.
```

---

## 2. THE INCIDENT LIFECYCLE

```
DETECT ──► TRIAGE ──► MITIGATE ──► RESOLVE ──► LEARN

DETECT    Alert fires / user reports / monitoring anomaly.
          ⚡ PagerDuty pages on-call (auto). Acknowledge within SLA.

TRIAGE    Assess severity (matrix above). If SEV1/2: declare incident,
          ⚡ auto-create Slack channel #inc-YYYYMMDD-name, assign roles.
          Update status page → "Investigating."

MITIGATE  STOP THE BLEEDING FIRST - restore service before finding root cause.
          Fastest safe lever: roll back, feature-flag off, failover, scale up,
          drain a bad node. Mitigation ≠ fix. Buy time, reduce impact.
          Status page → "Identified."

RESOLVE   Confirm service restored & metrics healthy. Status → "Monitoring"
          then "Resolved." Implement/verify the real fix. Close the incident.

LEARN     Blameless postmortem within 72h (SEV1/2). Action items with owners
          + dates. Track to completion. Add detection/prevention so it can't recur.

KEY PRINCIPLE: mitigate before you diagnose. A customer doesn't care WHY it's
broken while it's broken - they care that it's fixed.
```

---

## 3. ROLES DURING AN INCIDENT (ICS model)

```
Separate roles so no one is doing two jobs under pressure. For small incidents
one person may wear multiple hats; for SEV1, always split them.

| Role                  | Owns                                                  |
|-----------------------|------------------------------------------------------|
| INCIDENT COMMANDER (IC)| The incident. Coordinates, decides, delegates.       |
|                       | Does NOT fix - keeps the response organized. The      |
|                       | single decision-maker. Everyone reports to the IC.    |
| OPS / RESOLVER(S)     | Hands on keyboard. Investigates and applies fixes.    |
|                       | The only people changing the system.                  |
| COMMS LEAD            | Internal + external updates. Status page, exec brief, |
|                       | customer comms. Shields Ops from "any update?" pings. |
| SCRIBE                | Timestamps every action/decision in the channel →     |
|                       | becomes the postmortem timeline.                      |

IC GOLDEN RULES:
  ✓ The IC owns the incident, not the fix. If the IC starts coding, name a new IC.
  ✓ Drive to "mitigated" relentlessly. Park root-cause debates.
  ✓ Make decisions with incomplete info; reversible decisions fast.
  ✓ Run regular sync points: "Status? Blockers? Next action? Who owns it?"
```

---

## 4. ON-CALL PROGRAM DESIGN

```
ROTATION:
  ✓ Primary + secondary (backup) on every shift
  ✓ Weekly rotation, handoff every Monday with a written summary of open issues
  ✓ Follow-the-sun for global teams (no one paged at 3am if avoidable)
  ✓ Compensate on-call (stipend / time-off) - it's real labor

ESCALATION POLICY:
  Page primary → no ack in X min → page secondary → no ack → page eng lead → manager
  ⚡ Automated in PagerDuty/Opsgenie. Never rely on a human to notice a missed page.

PAGING TOOLS: PagerDuty, Opsgenie, Grafana OnCall, incident.io.
  Configure: schedules, escalation chains, alert routing, mobile push/SMS/call.

ALERT HYGIENE (the #1 on-call killer is noise):
  ✓ Every alert must be ACTIONABLE and URGENT. If you can't act on it now,
    it's a ticket or a dashboard, not a page.
  ✓ Symptom-based alerts (user-facing: error rate, latency) > cause-based.
  ✓ Tune thresholds; delete alerts that page but never need action.
  ✓ Target: <2 actionable pages per on-call shift. Above that = alert debt.

TOIL: manual, repetitive, automatable operational work. Track it; cap it
(SRE norm: <50% of time on toil). Convert recurring toil into automation/runbooks.
```

---

## 5. INCIDENT COMMS TEMPLATES

```
INTERNAL UPDATE CADENCE: SEV1 every 30 min, SEV2 every hour, even if "no change."
Silence makes people assume the worst and DM the responders.

INTERNAL UPDATE (Slack):
  [SEV1][UPDATE 14:30] Impact: checkout failing for ~30% of users since 14:05.
  Current status: identified - bad deploy v2.3.1, rolling back now.
  ETA to mitigation: ~10 min. Next update: 15:00. IC: @alice  Comms: @bob

STATUS PAGE (external, customer-facing - calm, factual, no internal jargon):
  "We're investigating reports of errors during checkout. Some users may be
   unable to complete purchases. We're working on it and will update shortly."
  → Identified → Monitoring a fix → Resolved (with brief recap).

CUSTOMER COMMS (proactive email for material impact):
  "Between 14:05–14:40 IST, some checkouts failed. The issue is resolved.
   No payment was charged for failed attempts. We're sorry for the disruption."

EXEC BRIEF (1-liner to leadership):
  "SEV1: checkout outage ~35 min, ~X affected, root cause = bad deploy, mitigated
   via rollback, no data loss, postmortem Thursday. Customer comms sent."
```

---

## 6. BLAMELESS POSTMORTEM TEMPLATE

```
POSTMORTEM: <incident title>        Date: ____   SEV: ___   Authors: ____
Status: Draft / Reviewed / Action-items-tracked

SUMMARY (2-3 sentences): what happened, impact, how it was resolved.

IMPACT:
  Duration: ___ (detection → resolution)   Users affected: ___
  Revenue/SLA impact: ___   Data impact: ___

TIMELINE (from the scribe's log, with timestamps):
  14:05  Bad deploy v2.3.1 reaches 100% traffic
  14:11  Error-rate alert fires; on-call paged
  14:14  Incident declared SEV1; IC assigned
  14:22  Root cause hypothesized (null-pointer in checkout service)
  14:31  Rollback to v2.3.0 initiated
  14:40  Error rate normal; status → Monitoring
  14:55  Resolved

ROOT CAUSE (5-whys + contributing factors):
  Why did checkout fail? → null deref on a new field.
  Why null? → field optional in prod data but assumed present.
  Why not caught? → tests used seeded data that always had the field.
  Why deployed to 100% fast? → canary window too short to surface it.
  Why no auto-rollback? → alert threshold above the canary error spike.
  CONTRIBUTING FACTORS: thin test data; aggressive rollout; alert threshold gap.

WHAT WENT WELL: fast detection; clean rollback; clear comms.
WHAT WENT POORLY: canary too short; missing test case; alert tuned too high.

ACTION ITEMS (every one has an owner + due date + ticket):
  | Action                                   | Owner | Due   | Ticket |
  |------------------------------------------|-------|-------|--------|
  | Add null-field test case                 | @x    | 6/20  | ENG-1  |
  | Lengthen canary window to 15 min         | @y    | 6/22  | ENG-2  |
  | Add canary auto-rollback on error spike  | @z    | 6/30  | ENG-3  |

BLAMELESS RULE: name systems and gaps, never people. "The deploy process
allowed X" not "Alice broke X." Psychological safety = honest postmortems =
real fixes. Blame = hidden incidents = repeats.
```

---

## 7. ERROR BUDGETS & SLOs (tie to Agent 08)

```
SLI  = a measured signal of health (e.g. % successful requests, p99 latency).
SLO  = the target (e.g. 99.9% success over 30 days).
ERROR BUDGET = 100% − SLO = allowed unreliability (99.9% → 0.1% ≈ 43 min/month).

HOW IT DRIVES BEHAVIOR:
  Budget remaining → ship features fast, take risks.
  Budget exhausted → freeze risky launches, spend the sprint on reliability.
  This makes "how reliable is reliable enough?" a data-driven, shared decision
  between product and engineering instead of an argument.

BURN-RATE ALERTS: page when the budget is being consumed too fast (e.g. 2% of
30-day budget burned in 1 hour) - catches slow-bleed incidents early.
See Agent 08 (SRE/Reliability) for SLO definition and budget policy.
```

---

## 8. RUNBOOK TEMPLATE

```
RUNBOOK: <alert / scenario name>                          Owner: ___  Updated: ___
TRIGGERS: which alert(s) lead here
IMPACT: what users experience when this fires
DASHBOARDS: <links to the graphs to check first>
DIAGNOSIS STEPS:
  1. Check ___ (expected: ___; if abnormal → ___)
  2. Check ___
MITIGATION (in order of preference):
  1. <fastest safe action - e.g. "feature-flag X off">
  2. <rollback / failover / scale>
ESCALATION: if not resolved in ___ min, page <team/owner>
ROLLBACK: how to undo any change made here
RELATED: links to past incidents / postmortems
RULE: a runbook a tired on-call engineer can't follow at 3am is not done.
```

---

## 9. GAME DAYS & CHAOS ENGINEERING

```
GAME DAY: a scheduled, simulated incident. Inject a realistic failure in a
controlled window; let on-call respond using real tools and runbooks.
  Goals: validate runbooks, train ICs, find gaps before customers do.
  Run a blameless postmortem on the GAME DAY itself.

CHAOS ENGINEERING: deliberately inject failure in production-like systems
(kill instances, add latency, drop a dependency) to prove resilience.
  Start small, in staging, with a hypothesis and a blast-radius limit.
  Tools: Gremlin, AWS FIS, Chaos Mesh, Litmus.
CADENCE: quarterly game days minimum; chaos experiments as systems mature.
```

---

## 10. METRICS

```
| Metric                  | Definition                              | Target          |
|-------------------------|-----------------------------------------|-----------------|
| MTTD (detect)           | issue start → detected                  | minimize (<5m)  |
| MTTA (acknowledge)      | paged → acknowledged                    | < SEV SLA       |
| MTTR (resolve)          | detected → resolved                     | trending ↓      |
| Incident count by SEV   | per month, by severity                  | trending ↓      |
| Repeat incidents        | same root cause recurring               | → 0             |
| Action-item closure rate| postmortem actions done on time         | >90%            |
| Pages per on-call shift | actionable pages per shift              | <2 (alert health)|
| % incidents with postmortem (SEV1/2)| coverage                    | 100%            |
| Error-budget burn       | budget consumed vs SLO                  | within budget   |

NORTH STAR: MTTR down AND repeat incidents down AND pages-per-shift down,
together. Improving one by ignoring the others (e.g. fast MTTR via heroics
while burning out on-call) is not real progress.
```

---

## ONE-PAGE INCIDENT QUICK CARD

```
1. DECLARE  - any engineer; pick severity (when unsure, go HIGHER)
2. ASSIGN   - IC first, then Comms + Scribe (SEV1/2)
3. COMMUNICATE - open the channel, update status page "Investigating"
4. MITIGATE - stop the bleeding (rollback / flag off / failover) BEFORE root cause
5. UPDATE   - every 30 min (SEV1) / 60 min (SEV2), internal + external
6. RESOLVE  - confirm healthy, status "Resolved," verify the real fix
7. LEARN    - blameless postmortem in 72h, action items with owners + dates
```
