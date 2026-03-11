# Risk Assessment Matrix (Enriched)

## Risk Scoring: Likelihood (1-5) × Impact (1-5)

```
L: 1=Rare 2=Unlikely 3=Possible 4=Likely 5=Almost Certain
I: 1=Negligible 2=Minor 3=Moderate 4=Major 5=Catastrophic
Score: 1-4 LOW | 5-9 MEDIUM | 10-14 HIGH | 15-25 CRITICAL
```

## Pre-Populated Risk Register by Category

### Security Risks
| Risk | L | I | Score | Mitigation |
|------|---|---|-------|-----------|
| Data breach (PII exposed) | 2 | 5 | 10 | Encryption, access controls, pen testing, incident response plan |
| Payment fraud (stolen cards/UPI) | 3 | 5 | 15 | 3DS, fraud scoring, velocity checks, chargeback management |
| Account takeover | 3 | 4 | 12 | MFA, suspicious login detection, brute force protection |
| API abuse / DDoS | 3 | 4 | 12 | Rate limiting, WAF, CDN, auto-scaling |
| Injection attacks (SQL/XSS) | 2 | 5 | 10 | Parameterized queries, CSP, input sanitization |
| Insider threat | 1 | 5 | 5 | Least privilege, audit logs, background checks |
| Supply chain attack (dependency compromise) | 2 | 5 | 10 | Dependency scanning, lockfiles, SBOM monitoring |
| Secret/credential leak | 3 | 5 | 15 | Vault/secrets manager, no secrets in code, git scanning |

### Compliance Risks
| Risk | L | I | Score | Mitigation |
|------|---|---|-------|-----------|
| DPDP/GDPR non-compliance | 3 | 5 | 15 | Privacy by design, consent management, DPO appointment |
| PCI-DSS violation | 2 | 5 | 10 | Tokenized payments, SAQ-A compliance |
| Industry regulation violation | 2 | 4 | 8 | Regulatory mapping, legal review, compliance officer |
| Tax non-compliance | 2 | 4 | 8 | Automated tax calculation, CA review, timely filing |
| POSH/harassment incident | 2 | 5 | 10 | ICC committee, mandatory training, zero tolerance policy |
| Whistleblower retaliation | 1 | 5 | 5 | Anonymous channels, anti-retaliation policy, monitoring |

### Operational Risks
| Risk | L | I | Score | Mitigation |
|------|---|---|-------|-----------|
| Complete service outage | 2 | 5 | 10 | Multi-AZ, auto-scaling, DR plan, status page |
| Payment gateway down | 2 | 5 | 10 | Fallback gateway, circuit breaker, retry logic |
| Database corruption/loss | 1 | 5 | 5 | Hourly backups, PITR, replication, tested restores |
| Third-party API failure | 3 | 3 | 9 | Circuit breakers, caching, graceful degradation |
| Key person dependency | 3 | 3 | 9 | Documentation, cross-training, bus factor ≥ 2 |
| Vendor lock-in | 2 | 4 | 8 | Multi-cloud capability, abstraction layers, exit plans |
| Data loss from deployment | 2 | 5 | 10 | Blue-green deploy, canary, auto-rollback, migration testing |

### Business Risks
| Risk | L | I | Score | Mitigation |
|------|---|---|-------|-----------|
| Product-market fit failure | 3 | 5 | 15 | MVP validation, rapid iteration, user feedback loops |
| Competitor launch / price war | 3 | 3 | 9 | Differentiation moat, switching costs, brand building |
| Unit economics unsustainable | 3 | 4 | 12 | Early modeling, pricing experiments, cost tracking |
| CAC too high | 3 | 4 | 12 | Organic growth loops, referral, content marketing |
| Key partnership loss | 2 | 4 | 8 | Multi-vendor strategy, contractual protections |
| Market timing wrong | 2 | 4 | 8 | Continuous market monitoring, pivot readiness |
| Regulatory change kills business model | 2 | 5 | 10 | Regulatory tracking, adaptive business model |

### Reputational Risks
| Risk | L | I | Score | Mitigation |
|------|---|---|-------|-----------|
| Public data breach | 1 | 5 | 5 | Security measures, crisis comms plan, transparency |
| Viral negative experience | 3 | 3 | 9 | Quality product, responsive support, proactive outreach |
| App Store rejection/removal | 2 | 4 | 8 | Policy compliance review, regular audits |
| Employee misconduct public | 2 | 4 | 8 | Code of conduct, background checks, swift action |
| AI bias/harm incident | 2 | 4 | 8 | Responsible AI governance, bias testing, human oversight |
| Content moderation failure | 3 | 4 | 12 | Trust & Safety team, automated + human review |

### People Risks
| Risk | L | I | Score | Mitigation |
|------|---|---|-------|-----------|
| Key engineer/founder leaves | 3 | 4 | 12 | Equity vesting, documentation, cross-training, retention |
| Mass resignation / toxic culture | 2 | 5 | 10 | Culture monitoring, stay interviews, competitive comp |
| Hiring failure (wrong people) | 3 | 3 | 9 | Structured interviews, probation, reference checks |
| Burnout across team | 3 | 3 | 9 | Wellness programs, workload monitoring, boundaries |

## Industry-Specific Risk Additions

```
FINTECH: RBI license revocation, transaction limits change, banking partner loss
HEALTHCARE: Patient data breach (HIPAA/ABDM), misdiagnosis liability, regulatory audit
E-COMMERCE: Supply chain disruption, counterfeit goods, COD fraud, return abuse
EDTECH: Student data breach (COPPA/FERPA), content quality liability, exam integrity
MARKETPLACE: Seller fraud, buyer protection claims, payment reconciliation errors
SOCIAL/CONTENT: CSAM incident, terrorism content, election misinformation, moderation failure
```

## Risk Review Cadence
```
CRITICAL: Weekly review, owner presents status
HIGH: Bi-weekly
MEDIUM: Monthly
LOW: Quarterly
After any incident: Immediate review of related risks, update scores
```
