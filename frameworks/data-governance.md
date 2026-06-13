# Data Governance Framework

> **⚠️ DISCLAIMER:** Data handling for PII/PHI/PCI and regulated data is governed
> by law (GDPR, DPDP, HIPAA, PCI-DSS, etc.). This is an operational template, not
> legal advice. Have a qualified privacy/compliance professional review your
> classification, retention, and access rules. See [DISCLAIMER.md](../references/DISCLAIMER.md).

Data governance is the operating system for trustworthy data: who owns it, how
it's classified, what quality it must meet, who can access it, how long it lives,
and what happens when it breaks. This framework gives you the roles, schemes,
contracts, tests, schedules, and the council to run it all.

---

## 1. DATA OWNERSHIP MODEL (Owner vs Steward vs Custodian)

```
| Role           | Who                  | Accountable for                         |
|----------------|----------------------|-----------------------------------------|
| Data OWNER     | Business leader      | Decisions: who can access, classification,|
|                | (e.g. VP Marketing)  | acceptable use, sign-off on quality SLAs |
| Data STEWARD   | Domain expert/analyst| Definitions, quality rules, the meaning  |
|                |                      | of fields, resolving quality issues      |
| Data CUSTODIAN | Data/platform eng    | Storage, pipelines, backups, access      |
|                |                      | enforcement, encryption, infrastructure  |

OWNER = accountable (the "what & why"). STEWARD = manages meaning & quality
(the "definition"). CUSTODIAN = operates the systems (the "how").
```

**RACI for a data domain (example: "Customer" domain):**
```
| Activity                  | Owner | Steward | Custodian | Privacy/DPO |
|---------------------------|-------|---------|-----------|-------------|
| Define classification     |  A    |   R     |    C      |     C       |
| Approve access requests   |  A    |   C     |    R      |     I       |
| Define data quality rules |  C    |   A/R   |    C      |     I       |
| Implement pipelines/storage|  I   |   C     |    A/R    |     I       |
| Set retention schedule    |  A    |   C     |    R      |     C       |
| Handle DSR / deletion req  |  C    |   C     |    R      |    A/R      |
(R=Responsible, A=Accountable, C=Consulted, I=Informed)
```

---

## 2. DATA CLASSIFICATION SCHEME

```
SENSITIVITY TIERS (every dataset/field gets exactly one):
| Tier         | Definition                          | Examples                  |
|--------------|-------------------------------------|---------------------------|
| PUBLIC       | Safe to release publicly            | Marketing content, docs   |
| INTERNAL     | Internal-only, low harm if leaked   | Org charts, internal wikis|
| CONFIDENTIAL | Material harm if leaked             | Contracts, financials, roadmaps|
| RESTRICTED   | Severe harm; legal/regulatory       | PII, PHI, PCI, secrets    |

SPECIAL-CATEGORY TAGS (orthogonal — a field can be CONFIDENTIAL + PII):
  PII  — personally identifiable (name, email, phone, IP, device ID)
  PHI  — protected health information (HIPAA)
  PCI  — payment card data (PAN, CVV) — PCI-DSS scope
  SPI  — sensitive PII (biometrics, religion, sexual orientation, Aadhaar)
  SECRET — credentials, API keys, encryption keys
```

**Handling rules by tier:**
```
| Control          | PUBLIC | INTERNAL | CONFIDENTIAL | RESTRICTED        |
|------------------|--------|----------|--------------|-------------------|
| Encryption at rest| opt   | yes      | yes          | yes (+ field-level)|
| Encryption in transit| yes| yes      | yes          | yes               |
| Access           | all    | all staff| need-to-know | explicit grant+log|
| Masking/tokenize | no     | no       | optional     | yes (PCI/PII)     |
| External sharing | free   | approval | DPA required | legal + DPA + log |
| Logging/audit    | no     | basic    | access logged| full audit trail  |
| Retention        | per biz| per biz  | scheduled    | minimized + DSR   |
```

---

## 3. DATA CONTRACT TEMPLATE

A data contract is an enforceable agreement between a data producer and consumers
defining schema, semantics, quality, and ownership — so downstream doesn't break.

```
DATA CONTRACT: <dataset / table / event name>           Version: __  Status: __
─────────────────────────────────────────────────────────────────────────────
OWNER:         <team>     STEWARD: <person>     CUSTODIAN: <team>
CLASSIFICATION: CONFIDENTIAL + PII

SCHEMA:
  | field        | type     | nullable | description / semantics            |
  |--------------|----------|----------|------------------------------------|
  | user_id      | string   | no       | stable UUID, PII-pseudonymous key  |
  | signup_ts    | timestamp| no       | UTC, ISO-8601, event time          |
  | plan         | enum     | no       | one of {free,pro,enterprise}       |
  | email        | string   | yes      | PII — masked in non-prod           |

SEMANTICS:        what a row means (grain), how metrics are derived
SLA:              freshness (e.g. <1h lag), availability (99.9%), completeness
QUALITY GUARANTEES: see §4 dimensions + tests; thresholds the producer commits to
SCHEMA EVOLUTION: backward-compatible only; breaking change → new version + notice
PII HANDLING:     masking rules, retention, deletion behavior
CONSUMERS:        <list of downstream teams/dashboards> (notified on change)
BREACH OF CONTRACT: alerting + producer on-call owns the fix
```

---

## 4. DATA QUALITY DIMENSIONS (with test examples)

```
| Dimension    | Question                          | Example test                       |
|--------------|-----------------------------------|------------------------------------|
| Accuracy     | Does it reflect reality?          | reconcile revenue vs source-of-truth|
| Completeness | Are required values present?      | null rate on email < 0.5%          |
| Consistency  | Same across systems?              | CRM count == warehouse count ±0    |
| Timeliness   | Fresh enough?                     | max(load_ts) within SLA window     |
| Validity     | Conforms to format/rules?         | email regex pass; plan ∈ enum set  |
| Uniqueness   | No unintended duplicates?         | count(distinct user_id)==count(*)  |

TEST IMPLEMENTATION: encode as automated checks (dbt tests, Great Expectations,
Soda). Run on every pipeline load. Failing a hard check blocks promotion to prod;
failing a soft check raises an alert. Track pass rate as a governed SLA (§9).
```

---

## 5. DATA CATALOG & LINEAGE

```
THE CATALOG answers: "What data exists, what does it mean, can I trust it,
who owns it, am I allowed to use it?"
  Each asset entry: name, description, owner/steward, classification, freshness,
  quality score, sample, related assets, certified ☑/✗.

LINEAGE answers: "Where did this come from and what breaks if I change it?"
  source ──► raw ──► staging ──► mart ──► dashboard ──► decision
  Column-level lineage lets you do impact analysis before a schema change and
  root-cause analysis when a metric looks wrong.

TOOLS: DataHub, OpenMetadata, Atlan, Collibra, Alation, Unity Catalog.
GOVERNANCE RULE: an asset with no owner and no description is not "production."
```

---

## 6. METRICS / SEMANTIC LAYER GOVERNANCE

```
THE PROBLEM: "active users" computed 5 ways across 5 dashboards = 5 numbers,
zero trust. The semantic layer is the single governed definition of every metric.

GOVERNED METRIC DEFINITION:
  metric: weekly_active_users
  owner: @growth-steward      certified: ☑
  definition: distinct user_id with ≥1 core_action in trailing 7 days
  source: events.core_action  grain: user-week
  filters: exclude internal/test accounts
  ⚠ change control: edits require steward approval + version bump + changelog

RULES:
  ✓ One definition per metric, in code (LookML / dbt metrics / Cube / MetricFlow)
  ✓ Dashboards reference the semantic layer, never re-implement SQL
  ✓ Renaming/changing a metric → notify consumers (it's a data-contract change)
```

---

## 7. ACCESS CONTROL & LEAST PRIVILEGE

```
PRINCIPLES:
  ✓ Least privilege — grant the minimum needed, default-deny
  ✓ Role-based (RBAC) or attribute-based (ABAC) — never per-person ad hoc grants
  ✓ Just-in-time elevation for restricted data (time-boxed, approved, logged)
  ✓ Separate prod from non-prod; non-prod gets masked/synthetic data only
  ✓ Column- and row-level security for PII (mask email, filter by region/tenant)
  ✓ Every access to RESTRICTED data is logged and auditable

ACCESS REQUEST FLOW:
  Request (with purpose) → Owner approves → Custodian grants role → auto-logged
  → access review every 90 days (revoke unused) → JIT grants auto-expire
```

---

## 8. RETENTION & DELETION SCHEDULES

```
| Data category        | Retain                  | Then           | Driver        |
|----------------------|-------------------------|----------------|---------------|
| Raw event logs       | 13-25 months            | aggregate/delete| analytics need|
| PII (active customer)| life of relationship    | delete on DSR  | DPDP/GDPR     |
| PII (churned)        | 30-90 days post-churn   | delete/anonymize| minimization  |
| Financial records    | 7-8 years               | archive        | tax/statutory |
| Payment card (PAN)   | do NOT store; tokenize  | —              | PCI-DSS       |
| Health records (PHI) | per jurisdiction        | secure delete  | HIPAA/local   |
| Backups              | rolling 30-90 days      | rotate/expire  | recovery      |
| Security/audit logs  | 1 year+                 | archive        | forensics     |

DELETION must be honored across primaries, replicas, backups, caches, and
downstream copies. A Data Subject Request (erasure) triggers a tracked workflow
with a deadline (GDPR ~30 days). Verify region-specific requirements.
```

---

## 9. MASTER & REFERENCE DATA MANAGEMENT (MDM)

```
MASTER DATA = the core entities everyone shares: Customer, Product, Account,
Employee, Vendor. One golden record per entity, deduplicated and reconciled.

REFERENCE DATA = controlled vocabularies: country codes, currency, plan tiers,
status enums. Centrally maintained, versioned, single source.

GOLDEN RECORD PROCESS:
  ingest from sources → match/dedup (deterministic + fuzzy) → merge/survivorship
  rules → golden record → publish to consumers. Steward resolves conflicts.
PROBLEM IT SOLVES: "Is 'Acme Inc', 'Acme, Inc.', and 'ACME' the same account?"
```

---

## 10. DATA QUALITY INCIDENT PROCESS

```
[Quality check fails OR consumer reports bad data]
  → Triage severity (DQ-SEV1: feeds revenue/billing/exec decisions; DQ-SEV4: minor)
  → Assign data steward as incident owner; notify affected consumers
  → Contain: pause downstream / flag dashboards as "data issue" / quarantine bad rows
  → Root cause (5-whys): upstream change? pipeline bug? source error? contract breach?
  → Fix + backfill corrected data
  → Postmortem (blameless) + add a test so it can't recur (see incident-management.md)
  → Communicate "all clear" to consumers
METRIC: mean time to detect/resolve DQ incidents; repeat-incident rate.
```

---

## 11. PRIVACY HOOKS (Agent 39)

```
GOVERNANCE FEEDS PRIVACY — these are the integration points:
  ☐ Data inventory / RoPA (Record of Processing) built from the catalog
  ☐ Classification tags drive privacy controls (PII → consent, masking, DSR)
  ☐ Lineage powers DSR fulfillment (find every copy of a person's data)
  ☐ Retention schedules enforce minimization & right-to-erasure
  ☐ Lawful basis & purpose-limitation tags per dataset
  ☐ DPIA triggered for new RESTRICTED/high-risk processing
  ☐ Cross-border transfer flags (SCCs, adequacy) per dataset
See Agent 39 (Privacy) for consent management, DSR workflows, and DPIAs.
```

---

## 12. OPERATING MODEL & DATA GOVERNANCE COUNCIL

```
THE COUNCIL (meets monthly):
  Chair: Head of Data / CDO
  Members: domain data owners, lead stewards, security, privacy/DPO, platform eng
  Mandate: approve policies, classification standards, resolve cross-domain
  disputes, prioritize quality investments, review metrics & incidents.

FEDERATED MODEL (scales best — central standards, domain execution):
  CENTRAL team: sets policy, owns the catalog/platform, runs the council.
  DOMAIN teams: own their data products, stewards, and quality (data mesh style).

POLICY CHANGE PROCESS: propose → council review → approve → publish + version →
communicate → train. Never delete old versions; keep an audit trail.
```

---

## 13. METRICS

```
| Metric                      | Definition                          | Target      |
|-----------------------------|-------------------------------------|-------------|
| Catalog coverage            | % of prod assets cataloged + owned  | >90%        |
| Certified-asset %           | % of key assets steward-certified   | grow QoQ    |
| Quality SLA pass rate       | % of DQ checks passing              | >98%        |
| Time-to-access              | request → granted (governed)        | <2 days     |
| DSR fulfillment time        | erasure/access request → done       | < deadline  |
| Stale-grant rate            | access grants unused 90d            | <5%         |
| Schema-break incidents      | contract-breaking changes/quarter   | trending → 0|
| % RESTRICTED data masked    | in non-prod environments            | 100%        |
| Mean time to resolve DQ incident | detect → fixed                 | trending ↓  |
```

---

## ONE-PAGE DATA DOMAIN CHARTER

```
DOMAIN: ____________  OWNER: ____  LEAD STEWARD: ____  CUSTODIAN TEAM: ____
KEY DATASETS: ______________________  CLASSIFICATION(S): ____________
SEMANTIC METRICS OWNED: ____________
QUALITY SLAs: freshness ___  completeness ___  accuracy ___
RETENTION: ____________  PII PRESENT? Y/N → privacy controls: __________
ACCESS POLICY: ____________  REVIEW CADENCE: __________
TOP RISK: ____________  COUNCIL REP: ____________
```
