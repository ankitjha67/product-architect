# Product Architect

**The most comprehensive open-source product development skill for Claude.**

48 agents · 33 frameworks · Research-first, depth to the Mariana Trench · Solo founder Day 0 → IPO → public company

> **This is a [Claude Skill](https://docs.anthropic.com/en/docs/agents-and-tools/skills).** Claude reads `SKILL.md`. This README is for human visitors.

---

## Install

### Claude.ai (Pro, Max, Team, or Enterprise)

> **Skills require a paid plan.** Free tier does not have access to Skills, including "Add from GitHub."

1. Download this repo as ZIP (Code → Download ZIP)
2. Go to Claude.ai → Settings → Capabilities → Skills
3. Upload the ZIP
4. Test: Ask Claude *"Help me build a product"* or *"Write a PRD for [feature]"*

### Claude Code
```bash
git clone https://github.com/ankitjha67/product-architect.git
# Place in your Claude Code skills directory (~/.claude/skills/)
```

### API
Use the `/v1/skills` endpoint with the `container.skills` parameter. Requires Code Execution Tool beta.

### Free Tier Workarounds

If you're on the free plan, you can still use everything in this repo:

1. **Guided mode (recommended)** — Open [`START-HERE.md`](START-HERE.md) on GitHub, click **Raw**, copy everything, paste into a new Claude chat. Describe your idea — Claude will ask what you're building, identify the right agents, give you exact GitHub URLs to paste them one at a time, and guide you through the entire product development process step by step.

2. **Projects** — Create a Project in Claude.ai, paste `SKILL.md` + `SMART-LOADER.md` as project knowledge. Then paste individual agent/framework files as needed per conversation.

3. **Direct paste** — Open any file on GitHub (e.g. `frameworks/founders-playbook.md`), copy the raw content, and paste it into a regular Claude chat. Every file works standalone.

4. **Claude Code** — If you have Claude Code access, clone the repo into your skills directory. Skills load automatically.

---

## What's Inside

### 48 Specialized Agents

Organized by product lifecycle — each operates at department-head depth:

| Phase | Agents |
|-------|--------|
| **Research & Audit** | 47 Deep Research (exists-vs-novel verdict, research-first gate) · 00 Chief Reviewer (6-pass audit, veto power) · 01 Proactive Advisor (blind spots) |
| **Product** | 02 Discovery · 03 Strategy · 04 PRD · 05 Design · 06 Engineering · 35 User Research |
| **Build & Test** | 07 Testing & QA · 08 DevOps & SRE · 41 Technical Program Management |
| **Protect** | 09 Security · 10 Legal & IP · 11 Compliance (14 policies) · 12 Trust & Safety · 13 Fraud · 39 Privacy & Data Protection (DPO) |
| **Launch & Grow** | 14 Launch & GTM · 15 Marketing & Sales · 16 Analytics · 17 Customer Success · 31 Product Marketing · 37 Growth |
| **Commercial** | 32 Sales & RevOps · 33 Partnerships & BizDev · 36 Pricing & Monetization |
| **Operate & Scale** | 18 Finance · 19 Operations (24 SOPs) · 20 BAU · 21 Innovation · 46 Procurement & Supply Chain |
| **People** | 22 People & HR · 23 L&D · 24 Wellness & Performance |
| **Corporate** | 25 PR & Comms · 26 Governance & IPO · 27 ESG · 28 Govt Relations · 44 Investor Relations · 45 Corporate Development & M&A |
| **Data & Platform** | 29 Data & AI Strategy · 30 Platform & Ecosystem · 34 Developer Relations · 38 Data Engineering |
| **Enablement** | 40 IT & Corporate Engineering · 42 Content & Docs · 43 Localization & i18n |

### 33 Frameworks

| Framework | What It Does |
|-----------|-------------|
| **Deep Research Protocol** | End-to-end market existence/novelty engine: exists-vs-novel verdict, citation hygiene, anti-hallucination gate, per-agent depth map |
| **Founder's Playbook** | Week-by-week from Day 0 with costs, fundraising, IP, legal |
| **30-Day Launch Engine** | Positioning, channel selection, day-by-day execution |
| **Scenario Playbooks** | 54 tactical guides across 31 departments (breach response, pivot, MEDDICC discovery call, DSAR runbook, secure offboarding, price increase, launch readiness, investor update, etc.) |
| **SOP & Process Maps** | 24 SOPs across 10 departments with automation opportunities |
| **Compensation Bands** | Salary by role/level/geography + equity + maintenance process |
| **Consulting Frameworks** | McKinsey 7S, Porter's, Blue Ocean, BCG, JTBD, PESTEL |
| **Stress-Test Framework** | 200+ edge cases across 12 categories |
| **OKRs & Goal-Setting** | North Star metric, metrics tree, OKR cascade & cadence |
| **Pricing & Packaging** | Price-metric selection, Van Westendorp, discount governance |
| **Growth Model** | AARRR, growth loops, activation/retention, experiment engine |
| **Sales Playbook** | Sales stages, MEDDICC, discovery scripts, objection handling |
| **Data Governance** | Data contracts, quality SLAs, classification, lineage, catalog |
| **Incident Management** | Severity matrix, on-call, comms, blameless postmortems |
| **Partnership Framework** | Partner tiers, deal structures, co-sell, partner economics |
| **Brand & Messaging** | Positioning statement, messaging house, voice & tone, narrative |
| **Customer Journey** | Lifecycle map, moments of truth, retention/expansion loops |
| **Institutional Memory** | Decision archaeology, knowledge maps, context handoffs |
| **Corporate Scaling** | Solo founder → IPO with org charts per stage |
| **Global Compliance** | Regulatory overview for 30+ countries |
| *+ 13 more* | PRD, MVP, roadmap, user-flows, risk-matrix, A/B testing, accessibility, product lifecycle, competitive intel, continuous improvement, physical ops, coverage audit, universal checklists |

### Country Compliance Deep-Dives
India · US · EU · UK · Southeast Asia (Singapore, Indonesia, Thailand, Vietnam, Philippines, Malaysia)

---

## Key Architecture

**Research-First Depth** — Before recommending building anything, agents run the **Deep Research Protocol** (Agent 47): an end-to-end market investigation that returns a grounded verdict — *"this already exists, here are the competitors + citations, refine it"* or *"this is white-space, no competition/citations in this niche"* (with the honest caveat that absence of evidence isn't proof of novelty, plus a "why is it empty?" analysis). Every agent inherits a Depth Rubric (L0 surface → L4 Mariana Trench), must grade itself L3+, and never fabricates a company, statistic, study, patent, or URL.

**Smart Loading** — `SMART-LOADER.md` routes each request to only the relevant agents. Scores agents 0-10 on relevance, handles multi-intent requests, supports dynamic mid-conversation loading. Never loads everything at once. Free tier: 3 agents/turn. Pro: 5 agents/turn.

**Cross-Agent Governance** — 5-level authority hierarchy prevents contradictions: Compliance (override) → Privacy/DPO (override) → Security (override) → Finance (veto) → Chief Reviewer (veto). 5-step conflict protocol: stop, state, apply hierarchy, document, flag.

**KDR Memory** — Key Decision Records with sequential numbering, conflict detection (scan-before-record), and SUPERSEDED mechanism. Survives chat compaction. Works on free tier. Paste MASTER KDR into new conversations to resume.

**Agent Standards** — Shared quality protocol inherited by all agents: before/during/after checklists, iterative refinement loops, performance rules, cross-reference table mapping every agent to related frameworks.

---

## Numbers

| Metric | Value |
|--------|-------|
| Agents | 48 |
| Frameworks | 33 |
| Total files | 97 |
| Total lines | 24,000+ |
| Country compliance deep-dives | 5 (covering 11 countries) |
| Complete policies drafted | 14 |
| SOPs with process maps | 24 |
| Tactical scenario playbooks | 54 (across 31 departments) |
| Stress-test edge cases | 200+ |
| Salary bands | 5 functions × 6 levels × 2 geographies |

---

## Repository Structure

```
product-architect/
├── SKILL.md                     ← Claude reads this (skill entry point)
├── SMART-LOADER.md              ← Context router + memory engine
├── START-HERE.md                ← Free tier entry point (paste into Claude)
├── README.md                    ← You are here (for humans)
├── ENHANCEMENTS.md              ← Enhancement roadmap (what was added & why)
├── LICENSE                      ← MIT
├── agents/                      ← 48 agent files (00-47)
├── frameworks/                  ← 33 framework files
├── references/
│   ├── compliance/              ← Country deep-dives (5 files)
│   ├── agent-standards.md       ← Quality protocol for all agents
│   ├── DISCLAIMER.md            ← Professional review requirements
│   ├── github-readme.md         ← Extended documentation
│   └── industry-references.md   ← Best-in-class by function
└── tools/
    └── navigator.jsx            ← Interactive web UI for founders
```

## Disclaimer

This is an educational framework created through human-AI collaboration, not professional advice. All legal, financial, security, and HR content requires qualified professional review before real-world use. See [`references/DISCLAIMER.md`](references/DISCLAIMER.md) for full details including AI authorship considerations and human involvement requirements.

## License

MIT — see [LICENSE](LICENSE).

## Contributing

Contributions welcome — new agents, deeper frameworks, industry-specific extensions, country compliance additions, bug fixes.

---

*Built through iterative human-AI collaboration using Claude (Anthropic). Compliant with [Anthropic's official skill guide](https://docs.anthropic.com/en/docs/agents-and-tools/skills). 25/25 skill compliance checks passed.*
