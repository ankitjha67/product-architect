# Enterprise Edge Cases: What Actually Happens in a Large Organisation

`stress-test-framework.md` covers what breaks in the **product** (empty states, races,
timeouts, abuse). This file covers what breaks around the product: the **organisational**
edge cases that derail plans in companies of 500, 5,000 or 50,000 people. Most plans do
not fail on the technical path. They fail because the sponsor left, the budget moved, a
freeze landed, or two departments held incompatible mandates and nobody reconciled them.

Every agent inherits this file through `references/agent-standards.md`. Before delivering
a plan of any size, run the **Pre-Mortem Sweep** in section 9 against it.

> **How to use this:** do not paste all of it into every deliverable. Select the 3 to 5
> edge cases with a real chance of hitting THIS plan in the next two quarters, and name
> the trigger, the owner, and the pre-agreed response for each. An unnamed risk is a
> surprise; a named risk with an owner is a plan.

---

## 1. People and Org Shocks

The most common cause of a stalled initiative is that the people around it changed.

| Edge case | Early warning signals | Immediate move | Structural fix |
|---|---|---|---|
| **Executive sponsor leaves or loses influence** | Sponsor skips two consecutive reviews; their org is reorganised under someone else; their pet projects get cut | Re-qualify the mandate within 2 weeks. Do not assume inheritance. Get the new sponsor to restate the goal in their own words | Write the business case so it survives a name change. Sponsor by role, not person. Keep a one-page "why this exists" that a stranger can read |
| **Reorg mid-project** | Skip-level meetings appear on calendars; recruiters stop backfilling; an org-design consultant is spotted | Freeze scope, not work. Re-baseline ownership before re-baselining dates | Document decision rights and dependencies so a reorg re-points them instead of erasing them |
| **Key person leaves (bus factor 1)** | One name appears in every escalation; a system has exactly one reviewer; someone declines to take leave | 48-hour knowledge capture: recorded walkthrough, written runbook, credential and access transfer, named successor | Enforce a two-person rule on every critical system. Track bus factor per component as an actual metric |
| **Hiring freeze lands mid-plan** | Finance asks for headcount justification twice; req approvals slow from days to weeks | Re-plan with current heads. Convert the ask from headcount to contractor, reallocation, or descope | Plan every roadmap with a "no new heads" variant already costed |
| **Layoffs or RIF** | Consultant engagement on cost structure; unusual finance data requests; a quiet hiring pause | Assume 4 to 8 weeks of productivity loss beyond the headcount loss. Re-scope publicly rather than silently missing dates | Maintain a ranked descope list so cuts are a decision, not a scramble |
| **Manager changes 3 times in 18 months** | Common in fast-scaling orgs and post-acquisition | Re-establish context each time with a written brief; do not re-litigate settled decisions | Decision log (Agent 62) so history survives the churn |
| **Extended leave (parental, medical, sabbatical)** | Known in advance in most cases, which is exactly why the failure is inexcusable | Named cover with real handover, not "the team will absorb it" | Cover plan mandatory for any role that is a single point of failure |
| **Works council or union consultation required** | Any EU headcount, any change to working conditions, tooling that monitors staff | Start consultation BEFORE the decision is final. Presenting a fait accompli restarts the clock | Build consultation lead time into the plan for EU/works-council jurisdictions by default |
| **Visa, immigration or right-to-work blocks a hire** | Offer accepted but start date keeps sliding | Have a second-choice candidate or a location alternative | Do not put a critical path on a single unstarted visa |

```
THE PATTERN: every one of these is a KNOWN category, not a black swan. The failure is
never "we could not have predicted a reorg." It is "we built a plan with no answer for
one." For any plan longer than a quarter, assume at least one people shock will land.
```

## 2. Budget and Financial Shocks

| Edge case | Trigger point | Response |
|---|---|---|
| **Mid-year budget cut (typically 10 to 30%)** | Revenue miss, macro shift, new CFO, cost-optimisation programme | Have the ranked descope list ready before you are asked. The team that responds in 24 hours keeps more of its budget than the team that argues for two weeks |
| **Capex versus opex reclassification** | Finance policy change, or auditor challenge on software capitalisation (tie: Agent 56) | Can change whether a project is fundable at all. Confirm treatment with the controller BEFORE committing spend, not after |
| **Cost-centre reassignment after a reorg** | Your project is now funded by a department that did not approve it | Re-secure funding explicitly. Budget does not follow work automatically |
| **Procurement or spend freeze** | Quarter-end, fiscal year-end, cash-preservation mode | Vendor renewals during a freeze become emergencies. Map every renewal date against known freeze windows (tie: Agent 46) |
| **Use-it-or-lose-it year-end** | Q4 in most annual-budget orgs | Creates rushed, low-quality purchases and shelfware. Pre-plan what you would buy well, so the rush spends on something real |
| **FX swing changes offshore economics** | 10%+ currency move against a build-location assumption | A model built on a stale rate is a model that lies. Re-run the location decision annually (tie: Agents 58, 18) |
| **Unexpected audit finding forces remediation spend** | Internal audit or external auditor (tie: Agent 59) | Remediation jumps every other priority because it has a regulator-facing deadline. Reserve capacity |

## 3. Governance, Approval and Control Gates

The single most underestimated source of delay in large organisations.

```
APPROVAL PATHOLOGIES AND THEIR COUNTERS:
□ SERIAL APPROVAL CHAIN. Five sign-offs at 3 days each is 15 days minimum, and one
  holiday makes it 25. Counter: parallelise approvals, define who is Approve versus
  Consult (RAPID/DACI, Agent 62), set an escalation clock per stage.
□ ABSENT APPROVER. The one required signatory is on leave with no delegate. Counter:
  every approval role has a named standing delegate in the delegation-of-authority matrix.
□ ARCHITECTURE REVIEW BOARD REJECTION. Late-stage design rejection after build started.
  Counter: pre-read the design at concept stage, not at completion.
□ CHANGE ADVISORY BOARD CADENCE. CAB meets weekly; miss the slot and you wait. Counter:
  book the CAB slot when you start the work, not when you finish it.
□ CHANGE FREEZE. Holiday freeze, quarter-end, peak retail, exam season, election period,
  regulatory filing window. Counter: publish the freeze calendar at planning time and
  treat it as an immovable constraint, not a surprise (tie: Agent 20).
□ SECURITY REVIEW BLOCKS LAUNCH. Pen test findings land two weeks before go-live.
  Counter: threat-model at design, security review at 60% build, not at 100% (Agent 09).
□ LEGAL HOLD. Litigation freezes deletion, retention and sometimes migration of specific
  data. Overrides your data-lifecycle plan and your privacy deletion SLA. Counter: the
  legal-hold flag must be a real field in the data model (Agents 10, 39).
□ REGULATORY EXAMINATION. A supervisor arrives; senior time evaporates for weeks.
  Counter: keep evidence continuously audit-ready so an exam is retrieval, not creation.
```

## 4. Legacy, Technical and Vendor Constraints

| Edge case | Why it bites in large orgs | Handling |
|---|---|---|
| **The legacy system cannot do it** | The system of record is 20 years old, owned by another group, changes need a 6-month queue | Design the integration around it (anti-corruption layer, event bridge). Do not plan on modifying it inside your timeline |
| **No environment that matches production** | Test data is scrubbed, scaled down, or stale; prod has 200 integrations, staging has 12 | Assume integration bugs will only appear in prod. Budget for canary, feature flags, and fast rollback (Agents 08, 48) |
| **Shared database owned by another team** | Schema change requires their roadmap slot | Negotiate the contract early; treat their schema as an external API with versioning |
| **A dependency is deprecated with 90 days notice** | Vendor or internal platform sunset | Maintain a dependency inventory with EOL dates. A surprise EOL is an inventory failure |
| **Vendor lock-in with contract term remaining** | 3 years left on a contract you have outgrown | Model the exit cost honestly (data extraction, retraining, dual-run). Negotiate exit terms at renewal, not at exit (Agent 46) |
| **Vendor is acquired, changes terms, or fails** | Roadmap freezes, prices reset, support degrades | Concentration risk is real. Know your top 5 single points of vendor failure and the fallback for each |
| **Undocumented dependency found mid-migration** | The nightly job nobody owns that finance depends on | Migration discovery must include "what reads this?" not just "what writes it" |
| **Dual-run period is longer than planned** | Reconciliation mismatches keep appearing | Plan dual-run with an explicit exit criterion (for example 100% invoice match for 2 cycles) rather than a date (Agent 55) |

## 5. Political and Cross-Functional Reality

```
□ CONFLICTING MANDATES. Growth is told to increase signups; Trust and Safety is told to
  reduce fraud; the same friction control moves both metrics in opposite directions.
  Counter: escalate to the governance hierarchy (Compliance > Privacy > Security >
  Finance > Review) rather than negotiating a private compromise that nobody owns.
□ THE COMPETING INTERNAL PROJECT. Another team is solving the same problem with different
  funding. Counter: find it during discovery, not at launch. Merge, kill one, or draw an
  explicit boundary in writing.
□ SHADOW IT ALREADY SOLVED IT. A department bought a SaaS tool and has 200 users on it.
  Counter: treat existing adoption as evidence of real demand, and migration as a change
  management problem, not a compliance crackdown (Agent 40).
□ NOT-INVENTED-HERE RESISTANCE. The receiving team rejects the platform solution.
  Counter: co-design with them or accept that adoption will not happen. Mandates without
  buy-in produce compliance theatre.
□ REGIONAL ENTITY REFUSES THE GLOBAL STANDARD. Local law, local market, or local pride.
  Counter: separate what is genuinely legally required to differ from what is preference,
  then standardise the rest (Agents 43, 57, 11).
□ MATRIX REPORTING CONFLICT. Functional manager and product manager give opposite
  priorities. Counter: one written priority list per person per quarter, agreed by both.
□ THE HIPPO REVERSAL. A senior leader overturns an evidence-backed decision in a hallway.
  Counter: decision log with the evidence attached, and a re-open requires new evidence.
```

## 6. External Shocks

| Shock | Typical effect on in-flight work | Preparation |
|---|---|---|
| **M&A announced (you are acquiring or acquired)** | Hiring freeze, spend freeze, roadmap freeze, key people distracted for 3 to 9 months. Integration work jumps the queue | Know which of your plans are "must continue" versus "can pause". Tie: Agent 45 |
| **Divestiture or carve-out** | Systems must be separated on a legal deadline. Everything else stops | Carve-out readiness depends on how cleanly entities and data are separated in the first place |
| **Competitor ships your feature first** | Pressure to rush; the worst instinct | Re-check the plan against evidence rather than reacting. Speed matters, panic does not (Agents 47, 31) |
| **Regulation changes mid-build** | Requirements shift after design is locked | Horizon scanning (Agent 28) so this is a 12-month signal, not a 12-day one |
| **Security incident or breach** | The whole engineering org is consumed for 1 to 4 weeks | Incident response capacity is a real tax on the roadmap. Reserve it (Agent 09, incident-management) |
| **Public or PR crisis** | Comms and legal take over; product decisions become reputational decisions | Agent 25 owns the response; product owns not making it worse |
| **Major customer threatens churn unless X** | Roadmap hijack risk, especially if they are >10% of revenue | Concentration risk policy decided in advance, not per-threat (Agents 17, 32) |
| **Disaster, outage or BCP event** | Region down, office inaccessible, key supplier offline | Tested BCP, not a document that has never been exercised (Agent 20) |

## 7. Scale Pathologies (the process that worked at 50 breaks at 500)

```
□ DECISION LATENCY. Same decision that took a day now takes six weeks. Symptom of unclear
  decision rights, not of bad people. Fix: RAPID/DACI plus a documented escalation clock.
□ MEETING LOAD. ICs at 20+ hours per week of meetings ship nothing. Fix: the meeting-cost
  audit in Agent 20; kill, merge or shorten by default.
□ DOCUMENTATION ROT. Confluence has four versions of the truth, three stale. Fix: an owner
  and a review date on every load-bearing page; delete rather than archive.
□ ONBOARDING TAKES A QUARTER. New hires cannot ship for 12 weeks. Fix: measure ramp time
  as a first-class metric and treat it as an engineering problem (Agents 23, 60).
□ TICKET QUEUE AS A BLACK HOLE. Requests to platform teams disappear. Fix: publish SLAs
  and a visible queue, or expect the org to route around you via shadow IT.
□ COORDINATION COST EXCEEDS THE WORK. Six teams needed to ship one feature. Fix: this is
  an architecture and org-design smell (Conway's law). Re-cut team boundaries, not the plan.
□ POLICY ACCRETION. Controls are added after every incident and never removed. Fix: every
  policy gets an expiry or a review date (Agent 20 policy-exception governance).
```

## 8. Data, Privacy and Multi-Jurisdiction Edge Cases

```
□ DATA RESIDENCY BLOCKS THE ARCHITECTURE. The design assumes one global database; a market
  requires in-country storage. Discover this at design, not at launch (Agents 39, 57, 11).
□ CROSS-BORDER TRANSFER MECHANISM CHANGES. The legal basis for moving data shifts.
  Principle: know which transfers you depend on and what the fallback is. Verify current
  mechanisms with counsel; this area changes frequently.
□ DELETION REQUEST COLLIDES WITH LEGAL HOLD OR FINANCIAL RETENTION. Privacy says delete,
  tax and audit say retain for years. The resolution is documented per data category in
  advance, not improvised per request (Agents 39, 56, 10).
□ BACKUP AND ARCHIVE ARE NOT COVERED BY THE DELETION PIPELINE. The classic gap. Deletion
  that misses backups is not deletion.
□ A SUBPROCESSOR CHANGE REQUIRES CUSTOMER NOTICE. Enterprise DPAs often grant objection
  rights. Vendor swaps become customer-communication projects (Agents 39, 46).
□ EMPLOYEE MONITORING RULES DIFFER BY COUNTRY. Tooling that is normal in one market is
  unlawful or requires consultation in another (Agents 40, 22).
```

## 9. The Pre-Mortem Sweep (run before delivering any plan)

```
Imagine it is 6 months from now and this failed. Which of these was the cause?

□ PEOPLE:      sponsor gone, key person gone, freeze, reorg, leave, consultation required
□ MONEY:       cut, reclassified, cost-centre moved, frozen, FX, audit remediation
□ APPROVAL:    serial chain, absent approver, ARB/CAB, change freeze, security gate, legal hold
□ TECHNICAL:   legacy limits, no prod-like environment, shared ownership, EOL dependency, vendor lock
□ POLITICAL:   conflicting mandate, competing project, shadow IT, NIH, regional refusal, HiPPO reversal
□ EXTERNAL:    M&A, divestiture, competitor, regulation, incident, crisis, customer threat, disaster
□ SCALE:       decision latency, meeting load, doc rot, onboarding, queue, coordination cost
□ DATA/LEGAL:  residency, transfers, deletion-versus-retention conflict, backups, subprocessor, monitoring

FOR EACH ONE YOU MARK AS PLAUSIBLE (aim for the top 3 to 5, not all 40):
  Trigger:        the observable event that means it is happening
  Owner:          the named person who watches for it
  Pre-agreed move: what we do in the first 48 hours, decided NOW while calm
  Reversal:       what would make us stop or re-plan entirely

⛔ A plan with zero named organisational risks has not been pre-mortemed. It has been
   written optimistically. In an organisation above roughly 500 people, the probability
   that none of the above lands during a two-quarter initiative is close to zero.
```

## 10. Which Agent Owns the Response

| Category | Primary | Supporting |
|---|---|---|
| People, reorg, leave, freeze, layoffs | 22 People and HR | 60, 61, 62, 24 |
| Budget, cuts, reclassification | 18 Finance | 56, 58, 62 |
| Approval gates, change freeze, cadence | 20 BAU | 41, 62, 08 |
| Legal hold, contracts, IP | 10 Legal | 11, 39, 59 |
| Security gate, incident | 09 Security | 08, 63, 25 |
| Vendor, lock-in, EOL, concentration | 46 Procurement | 40, 06, 55 |
| Regulatory change, examination | 28 Government Relations | 11, 57, 59 |
| M&A, divestiture, carve-out | 45 Corporate Development | 26, 44, 56 |
| Crisis and public communication | 25 PR and Communications | 44, 12, 17 |
| Cross-functional conflict, decision rights | 62 Chief of Staff | 00, 03, 41 |
| Data residency, deletion conflicts | 39 Privacy and DPO | 38, 56, 11 |
| Scale pathologies, process debt | 20 BAU | 19, 62, 23 |

---

> **Professional-review note:** several categories here (legal hold, works-council
> consultation, data-transfer mechanisms, employment monitoring, retention conflicts) are
> jurisdiction-specific and change over time. Treat the principle as durable and verify the
> current rule with qualified counsel before acting. See `references/DISCLAIMER.md`.
