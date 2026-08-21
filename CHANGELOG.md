# Changelog

All notable changes to Product Architect. Format follows [Keep a Changelog](https://keepachangelog.com/);
versions follow semver as declared in `SKILL.md` metadata.

## [3.2.1] — 2026-07

### Added
- **README `## About` section** — the repo previously opened straight into install
  instructions with no explanation of what it is. Now states the premise (48 department
  heads, not one generalist), what makes it different, who it's for, and the honest
  scope limits.
- **`.github/` scaffolding**: a CI workflow running the validator on every push and PR
  (a red check blocks merge), a PR template mirroring the CONTRIBUTING quality bar and
  wiring checklist, and issue templates for content gaps and bugs.

### Changed
- **`tools/validate_repo.py` upgraded** — now also verifies every relative markdown
  link resolves and every code fence is balanced, alongside the existing count,
  numbering, and doc-consistency checks. One source of truth for CI and local runs.

### Fixed
- Unbalanced code fence in `frameworks/ai-engineering-stack.md` (a stray closing fence
  after the RAG pipeline table) — caught by the new validator check on its first run.

## [3.2.0] — 2026-07

### Added
- **Enterprise Reasoning Protocol** in `references/agent-standards.md`, inherited by all
  48 agents: frame → options (≥2, incl. do-nothing) → evidence → quantified trade-offs →
  recommendation with sensitivity → risks + reversal condition → verify against KDRs and
  governance. Plus six enterprise-mode lenses (compliance & audit, scale/SLA, integration,
  procurement/security review, change management, 3-year TCO).
- **Per-agent Decision Frameworks, Enterprise-Grade sections, failure modes, and worked
  reasoning examples** added in place to the 25 agents that predated the bar:
  00–03, 05, 07, 08, 10, 12–17, 19–28, 30.
- Repo scaffolding: `CONTRIBUTING.md` (conventions + wiring checklist), `CHANGELOG.md`.

## [3.1.0] — 2026-07

### Added
- **AI-native layer**: `frameworks/ai-engineering-stack.md` (L0–L5 maturity ladder, RAG
  deep-dive incl. hybrid retrieval/rerank/GraphRAG/evals, LangGraph orchestration,
  Anthropic-native options, OWASP LLM Top 10) and `frameworks/ai-department-playbooks.md`
  (a concrete LLM/RAG/agent use case for every one of the 48 departments).
- Inline AI sections on Agents 06, 09, 16, 17, 29, 34, 38, 39.

## [3.0.0] — 2026-06

### Added
- **17 new agents (31–47)**: Product Marketing, Sales & RevOps, Partnerships, DevRel,
  User Research, Pricing & Monetization, Growth, Data Engineering, Privacy/DPO,
  IT & Corporate Engineering, Technical Program Management, Content & Docs,
  Localization & i18n, Investor Relations, Corporate Development & M&A,
  Procurement & Supply Chain, and **Deep Research** (exists-vs-novel market verdicts).
- **10 new frameworks**: OKRs, pricing & packaging, growth model, sales playbook, data
  governance, incident management, partnerships, brand & messaging, customer journey,
  and the **Deep Research Protocol** (research-first gate, citation ledger,
  anti-hallucination verdict engine, Depth Rubric L0→L4).
- **Scenario playbooks extended** 20 → 54 tactical guides across 31 departments.
- Governance hierarchy extended to 5 levels (Privacy/DPO override added).
- Extended full-product phase plan (Phase 0 research gate; phases G–K).
- `tools/validate_repo.py` structure validator (counts, numbering, doc-consistency).
- Country compliance deep-dives (IN/US/EU/UK/SEA) expanded ~3x; coverage-audit and
  risk-matrix rebuilt as full instruments.

## [2.0.0] and earlier — 2026 H1

- Original system: 31 agents (00–30), 23 frameworks, SMART-LOADER routing, KDR memory,
  4-level governance, compliance deep-dives, navigator UI, Anthropic skill-guide
  compliance pass, DISCLAIMER framework.
