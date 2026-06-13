# Risk Matrix — Enterprise Risk Instrument

A complete instrument for identifying, scoring, treating, and monitoring risk. Use the
5×5 rubric to score, the register to track, the heat-map to communicate, and the
escalation thresholds to act.

---

## 1. Scoring Rubric — Likelihood × Impact (5×5)

### Likelihood (probability of occurring within the review horizon, ~12 months)

| L | Label | Definition | Rough probability | Frequency feel |
|:-:|-------|------------|:-----------------:|----------------|
| 1 | Rare | Conceivable only in exceptional circumstances | <5% | Once in 10+ yrs |
| 2 | Unlikely | Could happen but not expected | 5–25% | Once in 3–10 yrs |
| 3 | Possible | Might well happen at some point | 25–50% | Once in 1–3 yrs |
| 4 | Likely | Expected to happen | 50–80% | Several times/yr |
| 5 | Almost Certain | Will happen, recurring | >80% | Monthly or more |

### Impact (worst credible outcome if it occurs)

| I | Label | Financial (calibrate to your stage) | Operational | Customer/Reputation | Legal/Compliance |
|:-:|-------|-------------------------------------|-------------|---------------------|------------------|
| 1 | Negligible | <$5K / <0.5% revenue | <1h disruption | Few users, no notice | Minor, internal |
| 2 | Minor | $5K–50K | Hours, recoverable | Localized complaints | Warning/remediation |
| 3 | Moderate | $50K–250K | 1 day, SLA breach | Visible, some churn | Reportable, fine risk |
| 4 | Major | $250K–2M | Multi-day outage | Press, mass churn | Regulator action, lawsuit |
| 5 | Catastrophic | >$2M / existential | Extended/irrecoverable | Brand-defining, exodus | License loss, criminal, shutdown |

### Score = L × I (1–25)

```
       IMPACT →
    1    2    3    4    5
L 5 5    10   15   20   25
I 4 4    8    12   16   20
K 3 3    6    9    12   15
E 2 2    4    6    8    10
L 1 1    2    3    4    5
H↑
```

| Score | Band | Meaning |
|:-----:|------|---------|
| 1–4 | **LOW** | Accept/monitor; routine controls |
| 5–9 | **MEDIUM** | Manage; assign owner, define controls |
| 10–14 | **HIGH** | Active mitigation; leadership visibility |
| 15–25 | **CRITICAL** | Immediate action; exec/board attention |

---

## 2. Heat-Map Rendering (ASCII)

```
        IMPACT
        1     2     3     4     5
      +-----+-----+-----+-----+-----+
   5  |  M  |  H  |  C  |  C  |  C  |   M = MEDIUM (yellow)
      +-----+-----+-----+-----+-----+   H = HIGH   (orange)
L  4  |  L  |  M  |  H  |  C  |  C  |   C = CRITICAL (red)
I     +-----+-----+-----+-----+-----+   L = LOW    (green)
K  3  |  L  |  M  |  M  |  H  |  C  |
E     +-----+-----+-----+-----+-----+   Plot each risk ID in its cell
L  2  |  L  |  L  |  M  |  M  |  H  |   using INHERENT score, then
I     +-----+-----+-----+-----+-----+   re-plot RESIDUAL after controls
H  1  |  L  |  L  |  L  |  L  |  M  |   (arrow shows risk reduction).
      +-----+-----+-----+-----+-----+
```

---

## 3. Risk Categories Taxonomy

| # | Category | Examples |
|:-:|----------|----------|
| 1 | **Strategic** | Wrong market/timing, no PMF, pivot failure, mission drift |
| 2 | **Product** | Feature flop, UX failure, scope creep, tech debt, roadmap miss |
| 3 | **Technical** | Outage, data loss, scalability, architecture limits, dependency risk |
| 4 | **Security** | Breach, ATO, ransomware, supply-chain, secret leak, insider |
| 5 | **Privacy** | DPDP/GDPR/CCPA non-compliance, unconsented processing, retention |
| 6 | **Financial** | Runway, unit economics, CAC/LTV, fraud loss, FX, reconciliation |
| 7 | **Legal/Compliance** | License, regulatory change, IP infringement, contract liability |
| 8 | **Operational** | Process failure, vendor outage, key-person, BAU breakdown |
| 9 | **People** | Attrition, hiring miss, burnout, culture, misconduct, bus factor |
| 10 | **Reputational** | Viral incident, AI harm, moderation failure, exec scandal |
| 11 | **Third-party** | Critical vendor, API provider, partner, cloud, subprocessor |
| 12 | **Market** | Competitor, price war, demand shift, macro, channel dependence |

---

## 4. Treatment Strategies (the 4 Ts)

| Strategy | When to use | Example |
|----------|-------------|---------|
| **Treat** (mitigate/reduce) | Risk above appetite, controllable | Add MFA, rate limits, redundancy, testing |
| **Tolerate** (accept) | Within appetite, cost of control > benefit | Accept rare low-impact bug class; document decision + owner |
| **Transfer** (share/insure) | Quantifiable, insurable, outsourceable | Cyber insurance, indemnities, SLAs, use licensed BaaS partner |
| **Terminate** (avoid) | Risk unacceptable, no viable control | Exit a market, drop a feature, sunset a risky integration |

> Every CRITICAL/HIGH risk needs an explicit treatment decision + owner. "Do nothing"
> is only valid as a documented **Tolerate** with sign-off at the right level.

---

## 5. Risk Register Template

| ID | Category | Description | Owner | L | I | Inherent | Controls (existing) | Resid L | Resid I | Residual | Treatment | KRI / trigger | Review date |
|----|----------|-------------|-------|:-:|:-:|:-------:|---------------------|:------:|:------:|:--------:|-----------|---------------|-------------|
| R-01 | Security | PII data breach | CTO | 2 | 5 | 10 | Encryption, RBAC, pentest, IR plan | 1 | 5 | 5 | Treat + Transfer (cyber ins.) | # failed-auth spikes | Qtr |
| R-02 | Financial | <6mo runway | CEO | 3 | 5 | 15 | Monthly burn review, raise plan | 2 | 5 | 10 | Treat | Cash < 9mo | Monthly |
| R-03 | Privacy | No DSR/deletion flow | DPO | 4 | 4 | 16 | (none yet) | 2 | 4 | 8 | Treat | DSR backlog > 0 | Monthly |

**Field definitions:** Inherent = L×I before/without controls. Residual = L×I after controls
applied. Treatment chosen against residual vs appetite. Review date set by band (§7).

---

## 6. Risk Appetite & Tolerance

- **Risk appetite** = how much risk we *willingly accept* in pursuit of objectives (set by leadership/board).
- **Risk tolerance** = acceptable *variation* around appetite per category (the threshold that triggers action).

| Category | Appetite | Tolerance threshold (escalate above) |
|----------|----------|--------------------------------------|
| Security | **Low** — minimize | Any residual ≥ 10, or any breach of customer PII |
| Privacy/Compliance | **Very low** — near-zero | Any residual ≥ 9; any reportable regulatory gap |
| Financial (runway) | **Low** | Runway < 9 months |
| Product/Strategic | **Moderate–High** — we bet to win | Residual ≥ 15 |
| Reputational | **Low** | Any residual ≥ 12 |
| Third-party | **Moderate** | Single-vendor dependency with residual ≥ 12 |

> State appetite explicitly per company stage. Early-stage tolerates more product/strategic
> risk (you must, to find PMF) but should keep security/privacy/financial appetite low.

---

## 7. Review Cadence & Escalation Thresholds

| Band | Score | Review cadence | Escalation |
|------|:-----:|----------------|------------|
| CRITICAL | 15–25 | **Weekly**, owner presents status | CEO + board notified; treatment plan with dates |
| HIGH | 10–14 | **Bi-weekly** | Exec/leadership review |
| MEDIUM | 5–9 | **Monthly** | Function lead owns |
| LOW | 1–4 | **Quarterly** | Logged, monitored |
| Any | Post-incident | **Immediate** re-score of related risks | Per band above |

**Escalation triggers (regardless of band):** a KRI breaches its threshold; residual rises a
band between reviews; a Tolerate decision needs renewal; a new regulation changes the impact.

---

## 8. Key Risk Indicators (KRIs) — examples

Leading metrics that warn *before* a risk materializes. Pair each top risk with ≥1 KRI + threshold.

| Risk area | KRI | Green | Amber | Red |
|-----------|-----|-------|-------|-----|
| Financial | Runway (months) | >12 | 9–12 | <9 |
| Security | Critical/High vulns open | 0 | 1–3 | >3 / any >30 days |
| Reliability | Error budget burn | <50% | 50–90% | >90% |
| People | Regretted attrition (TTM) | <8% | 8–15% | >15% |
| Privacy | Open DSRs past SLA | 0 | 1–5 | >5 |
| Fraud | Chargeback / fraud rate | <0.5% | 0.5–1% | >1% |
| Vendor | % traffic on single SPOF vendor | <40% | 40–70% | >70% |
| Compliance | Overdue regulatory filings | 0 | 1 | >1 |

---

## 9. Worked Example — Seed-Stage Fintech Startup

| ID | Category | Risk | L | I | Inherent | Band | Controls | Residual | Treatment |
|----|----------|------|:-:|:-:|:-------:|:----:|----------|:--------:|-----------|
| R-1 | Legal/Compliance | Operating payments without proper license (MTL/PA) | 3 | 5 | 15 | CRIT | Use licensed BaaS/bank partner; legal review | 5 | Transfer + Treat |
| R-2 | Security | Card/PII breach | 2 | 5 | 10 | HIGH | Tokenization (no PAN storage), encryption, pentest, cyber insurance | 5 | Treat + Transfer |
| R-3 | Financial | <6-month runway | 4 | 5 | 20 | CRIT | Monthly burn review, fundraise process, cost guardrails | 10 | Treat |
| R-4 | Strategic | No product-market fit | 4 | 5 | 20 | CRIT | MVP validation, weekly user feedback, fast iteration | 12 | Tolerate (bet) + Treat |
| R-5 | Third-party | Banking/gateway partner pulls support | 2 | 5 | 10 | HIGH | Dual-rail fallback gateway, contractual notice period | 6 | Treat + Transfer |
| R-6 | Financial | Payment fraud / chargebacks | 3 | 4 | 12 | HIGH | 3DS, velocity checks, fraud scoring, manual review queue | 6 | Treat |
| R-7 | People | Sole founder-engineer bus factor | 3 | 4 | 12 | HIGH | Documentation, hire #2, cross-train, equity vesting | 6 | Treat |
| R-8 | Operational | Complete outage | 2 | 5 | 10 | HIGH | Multi-AZ, backups+PITR, DR runbook, status page | 5 | Treat |
| R-9 | Reputational | Viral support failure | 3 | 3 | 9 | MED | SLAs, escalation path, proactive comms | 4 | Treat |
| R-10 | Privacy | DPDP/GDPR non-compliance (consent, DSR) | 3 | 5 | 15 | CRIT | Consent mgmt, DSR flow, DPO, data map, retention policy | 8 | Treat |

> Read-out: R-1, R-3, R-4, R-10 are CRITICAL inherent — these get weekly review and a
> dated plan. After controls, R-3/R-4 remain HIGH residual (runway + PMF are the real
> startup killers) → keep at the top of the register until residual drops a band.

---

## 10. Industry-Specific Risk Additions

```
FINTECH:    License revocation, txn-limit/regulatory change, banking-partner loss, FLDG cap
HEALTHCARE: Patient-data breach (HIPAA/ABDM), misdiagnosis liability, regulatory audit
E-COMMERCE: Supply-chain disruption, counterfeit goods, COD/return fraud, marketplace policy
EDTECH:     Student-data breach (COPPA/FERPA), content-quality liability, exam integrity
MARKETPLACE: Seller fraud, buyer-protection claims, payment reconciliation, liability allocation
SOCIAL/UGC: CSAM/terrorism content, election misinfo, moderation failure, OSA/DSA duties
AI/ML:      Model bias/harm, hallucination liability, training-data IP, AI Act high-risk classification
```

---

## 11. Anti-Patterns

- Scoring everything "3×3 medium" → forces no decisions; calibrate L and I honestly.
- Only tracking inherent risk → controls are invisible; always show residual + the delta.
- Risks with no owner or no review date → it's a list, not management.
- Never re-scoring after incidents → the register goes stale and loses trust.
- Treating "Tolerate" as "ignore" → tolerate must be a *documented, signed-off* decision.
- Confusing risk appetite with reality → appetite is a target; the register is the truth.
