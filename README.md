# Product Architect

**The most comprehensive open-source product development skill for Claude.**

31 agents · 23 frameworks · 14,800+ lines · Solo founder Day 0 → IPO

> **This is a [Claude Skill](https://docs.anthropic.com/en/docs/agents-and-tools/skills).** Claude reads `SKILL.md`. This README is for human visitors.

---

## Install

### Claude.ai
1. Download this repo as ZIP (Code → Download ZIP)
2. Go to Claude.ai → Settings → Capabilities → Skills
3. Upload the ZIP
4. Test: Ask Claude *"Help me build a product"* or *"Write a PRD for [feature]"*

### Claude Code
```bash
git clone https://github.com/ankitjha67/product-architect.git
# Place in your Claude Code skills directory
```

### API
Use the `/v1/skills` endpoint with the `container.skills` parameter. Requires Code Execution Tool beta.

---

## What's Inside

### 31 Specialized Agents

Organized by product lifecycle — each operates at department-head depth:

| Phase | Agents |
|-------|--------|
| **Audit & Advisory** | 00 Chief Reviewer (6-pass audit, veto power) · 01 Proactive Advisor (blind spots) |
| **Product** | 02 Discovery · 03 Strategy · 04 PRD · 05 Design · 06 Engineering |
| **Build & Test** | 07 Testing & QA · 08 DevOps & SRE |
| **Protect** | 09 Security · 10 Legal & IP · 11 Compliance (14 policies) · 12 Trust & Safety · 13 Fraud |
| **Launch & Grow** | 14 Launch & GTM · 15 Marketing & Sales · 16 Analytics · 17 Customer Success |
| **Operate & Scale** | 18 Finance · 19 Operations (24 SOPs) · 20 BAU · 21 Innovation |
| **People** | 22 People & HR · 23 L&D · 24 Wellness & Performance |
| **Corporate** | 25 PR & Comms · 26 Governance & IPO · 27 ESG · 28 Govt Relations |
| **Specialized** | 29 Data & AI Strategy · 30 Platform & Ecosystem |

### 23 Frameworks

| Framework | What It Does |
|-----------|-------------|
| **Founder's Playbook** | Week-by-week from Day 0 with costs, fundraising, IP, legal |
| **30-Day Launch Engine** | Positioning, channel selection, day-by-day execution |
| **Scenario Playbooks** | 20 tactical guides (breach response, pivot, first 5 hires, fundraise sprint, etc.) |
| **SOP & Process Maps** | 24 SOPs across 10 departments with automation opportunities |
| **Compensation Bands** | Salary by role/level/geography + equity + maintenance process |
| **Consulting Frameworks** | McKinsey 7S, Porter's, Blue Ocean, BCG, JTBD, PESTEL |
| **Stress-Test Framework** | 200+ edge cases across 12 categories |
| **Universal Checklists** | Dynamic generator for any scenario |
| **Institutional Memory** | Decision archaeology, knowledge maps, context handoffs |
| **Corporate Scaling** | Solo founder → IPO with org charts per stage |
| **Global Compliance** | Regulatory overview for 30+ countries |
| *+ 12 more* | PRD, MVP, roadmap, user-flows, risk-matrix, A/B testing, accessibility, product lifecycle, competitive intel, continuous improvement, physical ops, coverage audit |

### Country Compliance Deep-Dives
India · US · EU · UK · Southeast Asia (Singapore, Indonesia, Thailand, Vietnam, Philippines, Malaysia)

---

## Key Architecture

**Smart Loading** — `SMART-LOADER.md` routes each request to only the relevant agents. Scores agents 0-10 on relevance, handles multi-intent requests, supports dynamic mid-conversation loading. Never loads everything at once. Free tier: 3 agents/turn. Pro: 5 agents/turn.

**Cross-Agent Governance** — 4-level authority hierarchy prevents contradictions: Compliance (override) → Security (override) → Finance (veto) → Chief Reviewer (veto). 5-step conflict protocol: stop, state, apply hierarchy, document, flag.

**KDR Memory** — Key Decision Records with sequential numbering, conflict detection (scan-before-record), and SUPERSEDED mechanism. Survives chat compaction. Works on free tier. Paste MASTER KDR into new conversations to resume.

**Agent Standards** — Shared quality protocol inherited by all agents: before/during/after checklists, iterative refinement loops, performance rules, cross-reference table mapping every agent to related frameworks.

---

## Numbers

| Metric | Value |
|--------|-------|
| Agents | 31 |
| Frameworks | 23 |
| Total files | 68 |
| Total lines | 14,800+ |
| Country compliance deep-dives | 5 (covering 11 countries) |
| Complete policies drafted | 14 |
| SOPs with process maps | 24 |
| Tactical scenario playbooks | 20 |
| Stress-test edge cases | 200+ |
| Salary bands | 5 functions × 6 levels × 2 geographies |

---

## Repository Structure

```
product-architect/
├── SKILL.md                     ← Claude reads this (skill entry point)
├── SMART-LOADER.md              ← Context router + memory engine
├── README.md                    ← You are here (for humans)
├── LICENSE                      ← MIT
├── agents/                      ← 31 agent files (00-30)
├── frameworks/                  ← 23 framework files
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

*Built through iterative human-AI collaboration using Claude (Anthropic). Compliant with [Anthropic's official skill guide](https://resources.anthropic.com/hubfs/The-Complete-Guide-to-Building-Skill-for-Claude.pdf). 25/25 skill compliance checks passed.*
