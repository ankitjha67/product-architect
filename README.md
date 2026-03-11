# Product Architect

**The most comprehensive open-source product development system ever built.**

31 specialized AI agents. 20 strategic frameworks. 5 country compliance deep-dives. 12,000+ lines of actionable content. An interactive navigator. A complete founder's playbook. Everything a solo founder needs to build a world-class company from Day 0 to IPO — and everything a product team needs to operate at Fortune 500 caliber.

---

## What Is This?

Product Architect is a multi-agent skill system for [Claude](https://claude.ai) that transforms any product idea into a complete, executable blueprint. It covers **every department, function, process, and policy** that exists in a world-class company.

Think of it as having the entire C-suite — CPO, CTO, CFO, COO, CMO, CISO, GC, CHRO, and 22 more department heads — available as specialized agents that work together, review each other's output, and ensure nothing falls through the cracks.

### Who Is This For?

- **Solo founders** — A complete roadmap from Day 0 with costs, timelines, and what to do at each stage
- **Product managers** — Production-grade PRDs, user flows, edge case coverage, A/B testing frameworks
- **Engineering leads** — Architecture docs, test strategies, DevOps plans, security audits
- **Startup teams** — Financial models, hiring plans, compliance checklists, governance structures
- **Anyone building a product** — The reference library you wish existed when you started

---

## Quick Start

### With Claude (recommended)

Upload the `product-architect/` folder to your Claude project's knowledge or skills directory. Then:

```
"I want to build [your product idea]"     → Full system activates in phases
"Write a PRD for [feature]"               → PRD agent + framework loads
"How much should I raise?"                → Finance agent + founder's playbook
"Security audit for my payment system"    → Security + compliance agents
"I need a checklist for vendor selection"  → Universal checklist generator
```

### As Standalone Reference

Every file is self-contained. Browse `agents/` and `frameworks/` for any topic:

| I need... | Read this |
|-----------|-----------|
| A week-by-week founder guide | `frameworks/founders-playbook.md` |
| A PRD template | `frameworks/prd-framework.md` |
| Salary benchmarks | `frameworks/compensation-bands.md` |
| India compliance guide | `references/compliance/india.md` |
| A vendor selection checklist | `frameworks/universal-checklists.md` |
| IPO preparation timeline | `agents/26-governance-ipo.md` |

---

## The 31 Agents

Organized by lifecycle phase — the natural order of building a company:

### 🔍 Audit & Advisory
| # | Agent | What It Does |
|---|-------|-------------|
| 00 | Chief Reviewer | Final audit with veto — reviews ALL other agents |
| 01 | Proactive Advisor | Surfaces ideas and blind spots you didn't think of |

### 📐 Product Development
| # | Agent | What It Does |
|---|-------|-------------|
| 02 | Discovery | Market research, personas, competitive intelligence |
| 03 | Strategy | Vision, business model, roadmap, feature prioritization |
| 04 | PRD | Requirements with every edge case and error state |
| 05 | Design | Production-grade UI/UX (zero AI slop aesthetic) |
| 06 | Engineering | System architecture, APIs, database schema, tech stack |

### 🔧 Build & Test
| # | Agent | What It Does |
|---|-------|-------------|
| 07 | Testing & QA | Unit/integration/E2E/load/pen/chaos testing |
| 08 | DevOps & SRE | CI/CD, monitoring, alerting, disaster recovery |

### 🛡️ Protect & Comply
| # | Agent | What It Does |
|---|-------|-------------|
| 09 | Security | PCI-DSS, OWASP, data protection, pen testing |
| 10 | Legal & IP | Trademarks, patents, contracts, open source compliance |
| 11 | Compliance & Ethics | 14 complete policies, anti-corruption, whistleblower |
| 12 | Trust & Safety | Content moderation, abuse prevention, platform integrity |
| 13 | Fraud Operations | Transaction fraud, chargebacks, abuse ring detection |

### 🚀 Launch & Grow
| # | Agent | What It Does |
|---|-------|-------------|
| 14 | Launch & GTM | Go-to-market, growth loops, phased rollout |
| 15 | Marketing & Sales | Full-funnel marketing, brand, sales playbook |
| 16 | Analytics | Data pipelines, dashboards, A/B testing, metrics |
| 17 | Customer Success | Support tiers, NPS, churn prevention, community |

### ⚙️ Operate & Scale
| # | Agent | What It Does |
|---|-------|-------------|
| 18 | Finance | P&L modeling, unit economics, pricing, fundraising |
| 19 | Operations | 20+ SOPs with process maps, vendor management |
| 20 | BAU | Daily/weekly/monthly rhythms, governance, BCP |
| 21 | Innovation | Hackathons, bug bounty, R&D, procurement |

### 👥 People & Culture
| # | Agent | What It Does |
|---|-------|-------------|
| 22 | People & HR | Hiring, culture, performance, org design |
| 23 | L&D | Training, career ladders, knowledge management |
| 24 | Wellness | Mental health, productivity coaching, burnout prevention |

### 🏛️ Corporate & Governance
| # | Agent | What It Does |
|---|-------|-------------|
| 25 | PR & Communications | Media, crisis comms, CSR, employer branding |
| 26 | Governance & IPO | Board, governance, IPO readiness, roadshows |
| 27 | ESG & Sustainability | Carbon tracking, DEI, ESG reporting frameworks |
| 28 | Government Relations | Regulatory affairs, sandboxes, policy engagement |

### 🧠 Specialized
| # | Agent | What It Does |
|---|-------|-------------|
| 29 | Data & AI | ML lifecycle, responsible AI, LLM integration strategy |
| 30 | Platform & Ecosystem | API-as-product, marketplace dynamics, dev ecosystems |

---

## Key Features

**Smart Loading** — The system is 12,000+ lines but never loads everything at once. `SMART-LOADER.md` routes each request to only the relevant agents, keeping Claude fast and context-efficient.

**Memory That Survives** — The KDR (Key Decision Record) system outputs structured state summaries after every phase. These survive chat compaction and can be pasted into new conversations to resume exactly where you left off. Works on free tier.

**Global by Default** — Dedicated compliance deep-dives for India, US, EU, UK, and 6 Southeast Asian countries. Payment methods, tax rules, employment law, and industry regulations per market.

**Founder's Playbook** — A week-by-week guide from Day 0 with exact costs at each stage, fundraising amounts by round, pitch deck structure, website legal requirements, and scaling milestones.

**20+ SOPs with Process Maps** — Step-by-step processes for every department with automation opportunities flagged and recommended tools.

**14 Complete Policies** — Code of conduct, anti-harassment (POSH), whistleblower, information security, data protection, anti-bribery, conflict of interest, insider trading, and more. Not templates — actual policies ready to customize.

---

## Repository Structure

```
product-architect/
├── README.md                    You are here
├── LICENSE                      MIT License
├── SKILL.md                     Master orchestrator
├── SMART-LOADER.md              Context router + memory engine
├── agents/                      31 specialized agents (00-30)
├── frameworks/                  20 strategic & operational frameworks
├── references/
│   ├── industry-references.md   Best-in-class by function & industry
│   └── compliance/              Country deep-dives (IN, US, EU, UK, SEA)
└── tools/
    └── navigator.jsx            Interactive web UI for founders
```

## Numbers

| Metric | Value |
|--------|-------|
| Agents | 31 |
| Frameworks | 20 |
| Country deep-dives | 5 (covering 11 countries) |
| Total files | 62 |
| Total lines | 12,000+ |
| Coverage areas audited | 250+ |
| Complete policies | 14 |
| SOPs with process maps | 20+ |
| Edge cases cataloged | 200+ |
| Salary bands | 5 functions × 6 levels × 2 geographies |
| Gaps found | 0 |

---

## Contributing

Contributions welcome:
- **New agents** for uncovered domains
- **Deeper frameworks** with more edge cases or country coverage
- **Industry-specific extensions** (healthcare, fintech, edtech starter packs)
- **Translations** of frameworks into other languages
- **Bug fixes** for any inconsistencies

## License

MIT — use it however you want. Build great products.

---

*Built through iterative collaboration between a human product thinker and Claude (Anthropic). Each agent was refined across multiple sessions until every department, function, and process was covered with consulting-grade depth.*
