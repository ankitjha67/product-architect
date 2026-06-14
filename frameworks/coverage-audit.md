# Coverage Audit — Cross-Functional Gap-Analysis Instrument

A repeatable instrument to answer one question: **"Have we covered everything, or are
there silent gaps?"** Run it across departments, edge cases, and maturity. Output a RAG
status, a prioritized remediation backlog, and a re-run date.

How to use: (1) score each function's maturity 0–4, (2) walk the edge-case master
checklist for each critical surface, (3) set RAG per area, (4) build the backlog, (5)
schedule the next run.

---

## 1. Maturity Scoring Rubric (0–4)

Apply **per function** (not per task). Pick the highest level fully true.

| Level | Name | Definition | Signals |
|:---:|------|------------|---------|
| 0 | **Nonexistent** | Function not performed at all. No owner. | "Who does this?" → silence |
| 1 | **Ad-hoc** | Done reactively, person-dependent, undocumented. | Tribal knowledge, heroics, breaks when person is out |
| 2 | **Defined** | Documented process exists; followed inconsistently. | SOP written, partial adoption, no metrics |
| 3 | **Managed** | Standardized, measured, owned, reviewed on cadence. | KPIs tracked, dashboards, regular review, SLAs |
| 4 | **Optimized** | Continuously improved, automated, predictive, resilient. | Auto-remediation, leading indicators, post-incident learning loops |

**Target by stage:** Pre-seed/seed → most functions at 1–2 (focus 3 on product/security/legal-basics).
Series A → critical functions at 3. Growth/Series B+ → critical at 3–4, all at ≥2.

---

## 2. Department-by-Department Coverage Checklist

Score each. `Owner` = named human. `Mat` = maturity 0–4. `RAG` = R/A/G. Map to agents.

### Product & Discovery
| Function | Agent(s) | Owner | Mat | RAG |
|----------|----------|-------|:---:|:---:|
| Problem/opportunity discovery | Discovery (2) | | | |
| Strategy & positioning | Strategy (3) | | | |
| PRD / spec quality | PRD (4) | | | |
| Roadmap & prioritization | Strategy, Innovation (23) | | | |
| User research & feedback loops | Discovery, Analytics (12) | | | |

### Design & Engineering
| Function | Agent(s) | Owner | Mat | RAG |
|----------|----------|-------|:---:|:---:|
| UX/UI & design system | Design (5) | | | |
| Accessibility & i18n | Design, Platform (31) | | | |
| Architecture & build | Engineering (6) | | | |
| Code quality / review | Chief Reviewer (1), Engineering | | | |
| Testing & QA | Testing (10) | | | |
| DevOps / CI-CD / IaC | DevOps (15) | | | |
| Platform / internal tooling | Platform (31) | | | |

### Security, Trust, Risk
| Function | Agent(s) | Owner | Mat | RAG |
|----------|----------|-------|:---:|:---:|
| AppSec / infra security | Security (7) | | | |
| Privacy & data protection | Compliance (25), Data/AI (28) | | | |
| Trust & Safety / moderation | Trust&Safety (26) | | | |
| Fraud & abuse prevention | Fraud (27) | | | |
| Risk management | Governance (21) + risk-matrix | | | |

### Go-to-Market
| Function | Agent(s) | Owner | Mat | RAG |
|----------|----------|-------|:---:|:---:|
| Launch readiness | Launch (8) | | | |
| Marketing & growth | Marketing (11) | | | |
| PR & comms | PR (20) | | | |
| Analytics & instrumentation | Analytics (12) | | | |
| Customer success / support | Customer Success (13) | | | |

### Corporate & Operations
| Function | Agent(s) | Owner | Mat | RAG |
|----------|----------|-------|:---:|:---:|
| Legal & contracts | Legal (14) | | | |
| Compliance & regulatory | Compliance (25) | | | |
| Finance & FP&A | Finance (16) | | | |
| Operations / BAU | Operations (17), BAU (18) | | | |
| People / HR / hiring | People (19) | | | |
| L&D / enablement | L&D (22) | | | |
| Governance / board / IPO-readiness | Governance (21) | | | |
| Employee wellness | Wellness (24) | | | |
| ESG & sustainability | ESG (29) | | | |
| Government / regulatory relations | GovRelations (30) | | | |
| Data & AI governance | Data/AI (28) | | | |

> **Coverage rule:** every function above must map to ≥1 named owner AND ≥1 agent.
> Any row with blank Owner = automatic RED regardless of maturity.

---

## 3. Edge-Case Master Checklist ("did we cover every state?")

For **each critical surface/feature**, confirm behavior is defined, built, AND tested for:

- [ ] **Empty state** — no data yet, first-run, zero results, new account
- [ ] **Error state** — validation, 4xx/5xx, timeout, partial failure, retry, user-facing message
- [ ] **Loading / latency** — slow network, skeletons, optimistic UI, stale data
- [ ] **Concurrent state** — two users/tabs/devices editing same resource; race conditions; idempotency; double-submit
- [ ] **Scale state** — 10×/100× volume, pagination, large lists, hot keys, N+1, rate limits, backpressure
- [ ] **Security state** — authn/authz on every path, IDOR, injection, secrets, least privilege, audit log
- [ ] **Privacy state** — consent, data minimization, retention/deletion, DSR/export, PII in logs, third-party sharing
- [ ] **Legal / compliance state** — jurisdiction-specific rules, age gating, disclosures, T&Cs, licensing
- [ ] **Financial state** — money math (rounding, currency, tax), reconciliation, refunds, double-charge, ledger integrity
- [ ] **Abuse state** — spam, fraud, scraping, automation/bots, content harms, sybil, velocity
- [ ] **Accessibility state** — keyboard, screen reader, contrast, focus, ARIA, captions (WCAG 2.x AA)
- [ ] **i18n / l10n state** — translations, RTL, date/number/currency formats, timezones, locale fallbacks
- [ ] **Offline / degraded state** — no connectivity, third-party dependency down, graceful degradation, queue & sync
- [ ] **Migration / upgrade state** — schema changes, backfills, rollback, versioning, deprecation, data import/export
- [ ] **Lifecycle / deletion state** — account closure, churn, data export-then-delete, tombstoning, legal holds

> Score each surface: count of confirmed checkboxes / 15. <10 = RED, 10–13 = AMBER, 14–15 = GREEN.

---

## 4. RAG Status Template

| Area | Maturity (0–4) | Edge-case coverage | RAG | Trend | One-line rationale |
|------|:---:|:---:|:---:|:---:|--------------------|
| Product | | /15 | | ↑→↓ | |
| Engineering | | /15 | | | |
| Security | | /15 | | | |
| Privacy/Compliance | | /15 | | | |
| Trust & Safety / Fraud | | /15 | | | |
| GTM (Launch/Mktg/CS) | | /15 | | | |
| Finance | | /15 | | | |
| People / Ops | | /15 | | | |
| Data & AI governance | | /15 | | | |

**RAG definitions:**
- **GREEN** — owned, maturity ≥3 (or stage-appropriate), edge coverage ≥14/15, no critical gaps.
- **AMBER** — owned but maturity below target OR 1–2 known gaps with a dated plan.
- **RED** — no owner, OR maturity ≤1 on a critical function, OR an unmitigated catastrophic gap.

---

## 5. Prioritized Remediation Backlog Template

Rank by **(Severity × Likelihood-of-bite) ÷ Effort**. Severity uses risk-matrix impact scale.

| ID | Gap | Area | Severity (1–5) | Likelihood (1–5) | Effort (S/M/L) | Priority | Owner | Target date | Status |
|----|-----|------|:---:|:---:|:---:|:---:|-------|------------|--------|
| G-01 | e.g. No deletion/DSR flow (privacy state missing) | Privacy | 5 | 4 | M | P0 | | | Open |
| G-02 | e.g. No idempotency on payment endpoint | Financial | 5 | 3 | S | P0 | | | Open |
| G-03 | e.g. No accessibility audit done | Design | 3 | 4 | M | P1 | | | Open |
| G-04 | e.g. Single-person bus factor on infra | People/Ops | 4 | 3 | L | P1 | | | Open |

**Priority bands:** P0 = fix before next release / now; P1 = this cycle; P2 = next quarter; P3 = backlog/watch.
**Rule:** every RED in §4 must produce ≥1 P0/P1 backlog item.

---

## 6. Cadence for Re-Running the Audit

| Trigger | Scope |
|---------|-------|
| **Quarterly** (default) | Full audit — all departments + edge-case sweep of top surfaces |
| **Pre-launch / pre-GA** | Edge-case master checklist for the launching surface + Security/Privacy/Legal RAG |
| **Pre-fundraise / due diligence** | Full audit; aim all critical functions ≥ maturity 3 |
| **Post-incident** | Re-score the affected area + adjacent ones; add gaps to backlog |
| **Major scaling event (10×)** | Scale + Concurrent + Operational states across all critical surfaces |
| **New market / jurisdiction** | Legal/Privacy/Compliance + i18n + tax/financial states |
| **Org change (key departure / new function)** | Re-confirm owners; any newly-blank owner → RED |

**Operating rhythm:** owner of each RED/AMBER presents status at the cadence in risk-matrix
(RED weekly, AMBER bi-weekly/monthly). Audit deltas (new gaps, closed gaps, trend arrows)
reviewed each quarter; keep a running history to show maturity trajectory over time.

---

## 7. Anti-Patterns (audit smells)

- "Everything is GREEN" with no evidence → re-score with proof, not optimism.
- Maturity claimed at 3+ but no metric/owner named → cap at 2.
- Edge cases marked done in design but never tested → counts as NOT covered.
- Backlog with no dates/owners → it's a wish list, not a plan.
- Same gaps reappear every quarter → systemic; escalate to Governance, treat as a process risk.
