# Contributing to Product Architect

Contributions are welcome — new agents, deeper frameworks, industry extensions,
country compliance additions, and fixes. This guide encodes the conventions that
keep the system coherent. **Read it before opening a PR.**

## Repo anatomy (what plugs into what)

```
SKILL.md            Claude's entry point — routing, governance, directories
SMART-LOADER.md     The brain: request classification, agent scoring, phase plans, KDR memory
START-HERE.md       Free-tier guided mode (self-contained paste-in)
agents/NN-name.md   48 department-head playbooks (00-47, sequential, no gaps)
frameworks/*.md     35 tactical operating systems (templates, runbooks, decision trees)
references/         agent-standards (quality + reasoning protocol), DISCLAIMER, compliance/
tools/              navigator.jsx (web UI) + validate_repo.py (structure checker)
```

Every content file must work **standalone** (free-tier users paste single files) *and*
as part of the routed system.

## The quality bar (non-negotiable)

All content inherits `references/agent-standards.md`:

- **Depth Rubric L3 minimum** — real numbers, named tools/vendors (India + global where
  relevant), edge cases, failure modes, second-order effects. Generic best-practice
  prose is rejected regardless of length.
- **Enterprise Reasoning Protocol** — decision content shows its reasoning: frame →
  options (≥2) → evidence → quantified trade-offs → recommendation → risks + reversal
  condition.
- **No fabrication** — never invent a company, statistic, study, patent, or URL.
  Uncertain claims are labeled "verify with counsel/current docs".
- **Disclaimers** — legal/financial/security/HR/medical content carries a
  professional-review disclaimer referencing `references/DISCLAIMER.md`.

## Adding or editing an agent

1. Follow the house format: `# Agent NN: Name` → `## Role` (second person) →
   `## Inputs Required` (cross-reference other agents by number) → numbered process
   sections with tables/code blocks → a **Decision Framework** section → an
   **Enterprise-Grade** section → **Failure Modes** (⛔) → a worked `## Example`
   (User says / Actions / Result / Quality check) → `## Output:` → `## Quality Standard`.
2. New agents take the next number (48, 49, …). Never renumber existing agents.
3. Wire it in — an unwired agent doesn't exist: SKILL.md directories + quick routing,
   SMART-LOADER routing table + "what each agent produces", agent-standards
   cross-reference table, README table, START-HERE directory, navigator.jsx agentMap,
   and a row in `frameworks/ai-department-playbooks.md`.

## Adding a framework

Practical over theoretical: copy-paste templates, decision trees with thresholds,
runbooks with owners and clocks, worked examples with real numbers. Wire into
SKILL.md framework directory, SMART-LOADER routing, and the agent-standards
cross-reference row of any agent it supports.

## Before you open a PR

CI runs `tools/validate_repo.py` on every push and PR
(`.github/workflows/validate.yml`) — a red check blocks the merge. Run it locally first:

```
□ python3 tools/validate_repo.py passes (counts, numbering, internal links,
  code-fence balance, doc-consistency)
□ Counts updated everywhere if you added files (README, SKILL.md, START-HERE,
  references/github-readme.md, navigator.jsx)
□ Code fences balanced; no duplicate section numbers
□ Every agents/*.md or frameworks/*.md path you reference actually exists
□ Disclaimer present if the domain is regulated
□ CHANGELOG.md entry added under [Unreleased]
```

## Style

Terse and dense — every line carries a fact, number, rule, or edge case. Tables over
prose. `□` for checklists, `⛔` for anti-patterns. India-specific AND global options
where the domain differs by geography. No marketing filler.

## Licensing

MIT. By contributing you agree your contribution is MIT-licensed. This is an
educational framework built through human-AI collaboration — see
`references/DISCLAIMER.md`; professional review is required before real-world use
of regulated content.
