## What this changes

<!-- One or two sentences. Which agents/frameworks does it touch, and why? -->

## Type

- [ ] New agent
- [ ] New framework
- [ ] Deepening existing content (more depth, numbers, edge cases)
- [ ] Country / compliance addition
- [ ] Fix (broken link, stale count, typo, inconsistency)
- [ ] Tooling / docs

## Quality bar

See [CONTRIBUTING.md](../CONTRIBUTING.md). Content is rejected on depth, not length.

- [ ] **L3+ depth** — real numbers, named tools/vendors, edge cases, failure modes.
      No generic best-practice prose.
- [ ] **Reasoning shown** — decision content walks frame → options → evidence →
      trade-offs → recommendation → risks + reversal condition.
- [ ] **No fabrication** — no invented company, statistic, study, patent, or URL.
      Uncertain claims are labeled "verify with counsel / current docs".
- [ ] **Disclaimer** present if the domain is legal, financial, security, HR, or medical.

## Wiring (an unwired agent/framework doesn't exist)

- [ ] `SKILL.md` — directory + quick routing
- [ ] `SMART-LOADER.md` — routing table + "what each agent produces"
- [ ] `references/agent-standards.md` — cross-reference row
- [ ] `README.md`, `START-HERE.md`, `references/github-readme.md` — tables and counts
- [ ] `tools/navigator.jsx` — `agentMap`
- [ ] `frameworks/ai-department-playbooks.md` — row for a new agent
- [ ] `CHANGELOG.md` — entry added

## Verification

- [ ] `python3 tools/validate_repo.py` passes (counts, numbering, links, fences, doc-consistency)
- [ ] Every file still works **standalone** (free-tier users paste single files)
