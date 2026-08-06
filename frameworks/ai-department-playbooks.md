# AI for Every Department — Applied LLM / RAG / Agent Playbooks

This is the concrete, department-by-department map of how each of the 48 agents applies
modern AI (LLMs, RAG, LangGraph/agents) in real work — so "every department gets an AI
upgrade" means something specific. For the **how** (the maturity ladder, RAG pipeline,
LangGraph, evals, guardrails, OWASP LLM Top 10), see `frameworks/ai-engineering-stack.md`;
this file is the **where**. The discipline is the same everywhere: pick the **lowest
maturity rung** that solves it (L0 prompt → L1 RAG → L2 tools → L3 workflow → L4 agent →
L5 multi-agent), always add **guardrails + evals**, and **Security (09) & Privacy (39)
sign off** on anything touching untrusted input or personal data.

> **How to read the Pattern column:** RAG = grounded retrieval; tool = function calling;
> workflow = code-orchestrated multi-step (L3, usually the right answer); agent = model
> decides steps in a loop (L4/L5 — justify it). Default to the latest Claude with adaptive
> thinking; prefer MCP for integrations. Every use case assumes RAG-grounding on YOUR data
> before generating.

---

## Product & Strategy (00, 01, 02, 03, 04, 05, 35, 47)

*AI theme: turn unstructured signal (interviews, market noise, past specs) into grounded,
cited insight — synthesis and red-teaming, never autonomous decision-making. Humans still
own the bets, the acceptance criteria, and the roadmap.*

| Agent | High-value AI use case (specific, real) | Pattern | Stack / tools | Guardrail & metric |
|-------|------------------------------------------|---------|---------------|--------------------|
| **02 Discovery** | Synthesize 100 user interviews into ranked themes + supporting quotes | RAG + clustering | Transcripts in pgvector, embed + LLM theme clustering | Cite the source quote for every theme; metric: theme coverage vs. manual coding |
| **03 Strategy** | Competitive teardown + "what breaks our bet" scenario simulation from market data | Agentic RAG + web | Web search tool + RAG over market docs; LangGraph plan→retrieve→synthesize | Cite every claim; human sets the bets; metric: assumption traceability |
| **04 PRD** | Draft PRD and red-team edge cases from similar past PRDs | RAG | pgvector over PRD corpus; structured-output draft | Human approves acceptance criteria; metric: edge-cases caught pre-build |
| **05 Design** | Generate UI variants and heuristic-critique them against the design system | tool + RAG | RAG over design tokens/component library; vision model critique | WCAG check + designer sign-off; metric: a11y pass rate, rework loops |
| **35 User Research** | Interview transcription + thematic analysis; synthetic-user pretest (with caveats) | RAG | Whisper/Otter transcription → RAG synthesis; insights repo | Cite quotes; synthetic answers are a pretest, never ground truth; metric: insight reuse |
| **47 Deep Research** | Agentic RAG + web search to produce the exists-vs-novel feature dossier | agent (L4) | LangGraph agent, web + RAG tools, reranked sources | Cite every claim with a live URL; metric: source quality + recall of prior art |
| **01 Advisor** | Blind-spot detection — surface missed best practices from the playbook corpus | RAG + workflow | RAG over frameworks/past-product KDRs | Output as *suggestions*, never silent decisions; metric: suggestion acceptance rate |
| **00 Chief Review** | Cross-agent consistency audit — detect contradictions across all KDRs/artifacts | RAG + workflow | RAG over KDR chain; LLM-as-judge conflict grader | Cite the conflicting decision numbers; metric: conflicts caught vs. manual audit |

---

## Engineering, Platform & Data (06, 07, 08, 29, 30, 34, 38, 40, 41, 42, 43)

*AI theme: this bucket both **builds** the AI platform (38 owns the vector pipeline, 29 owns
evals & governance) and **consumes** it (code review, docs bots, incident copilots). Every
generated artifact — code, SDK snippet, sample, migration — is verified by a test or a human
before it ships.*

| Agent | High-value AI use case (specific, real) | Pattern | Stack / tools | Guardrail & metric |
|-------|------------------------------------------|---------|---------------|--------------------|
| **06 Engineering** | AI code review grounded in the codebase + ADRs; agentic test generation | agent + RAG | Agent SDK, RAG over repo/ADRs, MCP to CI | Tests must pass; human merges; metric: defect escape rate, review latency |
| **07 Testing** | Generate test cases from acceptance criteria; triage & cluster flaky tests | workflow | LLM from AC → test skeletons; failure-log clustering | Coverage gate in CI; metric: coverage %, escaped defects |
| **08 DevOps** | Incident copilot — RAG over runbooks/logs, ranked root-cause hypotheses | agentic RAG | RAG over runbooks + log store; MCP to observability | Human runs remediation (irreversible); metric: MTTR, hypothesis hit-rate |
| **29 Data/AI** | Own the eval harness, model routing, and responsible-AI scorecards for all AI features | workflow (meta) | LLM-as-judge, RAGAS/promptfoo, model gateway | Eval-in-CI gates every prompt/model change; metric: eval pass rate, drift |
| **30 Platform** | Partner/API support copilot + spec-driven SDK snippet generation | RAG | RAG over OpenAPI spec + API docs; codegen | Schema-validate generated calls; metric: TTFHW, API-ticket deflection |
| **34 DevRel** | Docs Q&A bot + runnable code samples; community-question triage | RAG | RAG over docs + repo; samples executed in CI | Run every sample in CI before publishing; metric: TTFHW, deflection rate |
| **38 Data Eng** | Build & maintain the embeddings + vector pipeline; data-quality anomaly agent | workflow/agent | Ingest→chunk→embed→index; scheduled re-embed; dbt tests | Schema/contract tests block bad data; metric: freshness SLA, quality pass rate |
| **40 IT/Corp Eng** | Internal helpdesk bot + access-request triage over the IT knowledge base | RAG | RAG over IT KB/SOPs; MCP to ticketing/IdP | Least-privilege; human approves access grants; metric: deflection, resolution time |
| **41 TPM/PMO** | Status rollups + RAID/dependency-risk detection from raw project updates | RAG | RAG over Jira/Linear + status docs | PM confirms flagged risks; metric: on-time delivery, risk lead time |
| **42 Content/Docs** | Docs assistant (RAG over docs) + auto-draft from code diffs and changelogs | RAG | RAG over doc corpus; diff→draft workflow | SME review before publish; metric: doc coverage, freshness lag |
| **43 Localization** | MT + LLM post-edit constrained by glossary/TM; automated locale QA | RAG | MT + RAG over TM/glossary; TMS integration | Human linguist reviews high-visibility strings; metric: edit distance, locale defects |

---

## Trust, Risk, Legal & Compliance (09, 10, 11, 12, 13, 28, 39)

*AI theme: the highest-stakes bucket — AI accelerates triage and drafting, but a qualified
human (analyst, lawyer, DPO) always makes the call. Every output cites the clause, policy,
or regulation it relies on. This bucket also **defends** the product's own AI (09 owns OWASP
LLM Top 10; 39 owns PII across prompts/logs/embeddings).*

| Agent | High-value AI use case (specific, real) | Pattern | Stack / tools | Guardrail & metric |
|-------|------------------------------------------|---------|---------------|--------------------|
| **09 Security** | LLM-powered triage/enrichment of security alerts + OWASP LLM Top 10 defense for the product's own AI | workflow + RAG | SIEM + RAG over past incidents; injection/PII filters | Analyst confirms before action; metric: false-positive reduction, injection catch rate |
| **10 Legal** | Contract review — RAG over the negotiation playbook/templates, flag deviations | RAG | RAG over template + prior redlines; clause extraction | Lawyer signs; cite the clause; metric: review cycle time, deviations missed |
| **11 Compliance** | Map a feature to its regulatory obligations — RAG over the regulations | RAG | RAG over regulation corpus (DPDP/GDPR/etc.) | Lawyer review; cite the specific clause; metric: obligation coverage |
| **12 Trust & Safety** | Policy-grounded content moderation (multimodal) with classification + rationale | tool + RAG | Vision/text classifier + RAG over policy | Human appeal path; metric: precision/recall, appeal overturn rate |
| **13 Fraud** | Anomaly explanation + auto-drafted SAR/case narratives from transaction signals | tool + LLM | Feature store + LLM narration over flagged events | Analyst decides; numbers verified vs. source; metric: fraud recall, false-positive rate |
| **28 Gov Relations** | Monitor regulatory changes and auto-draft impact briefs | agentic RAG + web | Web + RAG over filings/regulations | Legal reviews; cite the regulation; metric: change-to-brief lead time |
| **39 Privacy/DPO** | DSAR discovery via RAG over the data map; PII detection in prompts, logs & embeddings | RAG + tool | RAG over RoPA/data map; PII classifier on I/O | DPO sign-off (override authority); metric: DSAR SLA, PII leak rate |

---

## Growth & Revenue (14, 15, 16, 31, 32, 33, 36, 37)

*AI theme: content and analysis at volume — brand-voice drafting, call intelligence, and
natural-language analytics. The two recurring guardrails: **no hallucinated claims** (about
the product or competitors) and **every number verified against source**.*

| Agent | High-value AI use case (specific, real) | Pattern | Stack / tools | Guardrail & metric |
|-------|------------------------------------------|---------|---------------|--------------------|
| **14 Launch** | Generate the GTM asset set + run an automated launch-readiness check against the plan | RAG + workflow | RAG over launch playbook/prior launches | Human approves each asset; metric: readiness-checklist completeness |
| **15 Marketing** | Content drafting with brand-voice RAG + on-brand / no-hallucinated-claims eval | RAG | RAG over brand guide + approved copy; LLM-judge eval | Eval blocks off-brand & unverifiable claims; metric: on-brand score |
| **16 Analytics** | Natural-language → metric/insight narration; auto-explain dashboard anomalies | NL→SQL tool | Semantic layer + NL→SQL; guarded query exec | Numbers verified against source; read-only least-privilege; metric: query accuracy |
| **31 Product Marketing** | Positioning drafts + battlecards from win/loss and competitor intel | RAG | RAG over win/loss + competitor corpus | Eval rejects fabricated competitor claims; PMM approves; metric: on-message score |
| **32 Sales/RevOps** | Call summary + MEDDICC auto-fill from Gong transcripts; next-best-action agent | RAG + agent | RAG over call transcripts + CRM; MCP to CRM | Rep verifies CRM fields before save; metric: forecast accuracy, data completeness |
| **33 Partnerships** | Partner-fit scoring + co-sell brief generation from account and partner data | RAG + tool | RAG over partner profiles + account data | Human owns the deal decision; metric: partner-sourced pipeline |
| **36 Pricing** | Willingness-to-pay analysis from survey/usage + packaging simulation | tool + LLM | Warehouse query tools + LLM synthesis | Numbers verified vs. source; no fabrication; metric: margin, conversion lift |
| **37 Growth** | Experiment ideation + funnel-drop analysis narration from product analytics | NL→analytics | RAG over experiment log + NL→SQL | Stat-sig gate; human ships the change; metric: experiment win rate |

---

## Customer, Operations & Programs (17, 19, 20, 21, 46)

*AI theme: deflection and throughput — grounded assistants over docs/SOPs/tickets that
resolve the routine and cleanly hand off the rest. The failure mode to design against is a
confident wrong answer, so "I don't know → human" is a first-class path.*

| Agent | High-value AI use case (specific, real) | Pattern | Stack / tools | Guardrail & metric |
|-------|------------------------------------------|---------|---------------|--------------------|
| **17 Customer Success** | RAG deflection bot over docs + resolved tickets; escalation routing | RAG | RAG over KB + ticket history; MCP to helpdesk | "I don't know" → human handoff; metric: deflection rate, CSAT, escalation accuracy |
| **19 Operations** | SOP copilot + exception routing grounded in the process maps | RAG | RAG over `sop-process-maps` + ops runbooks | Human approves exception handling; metric: cycle time, exception rate |
| **20 BAU** | Meeting-notes → action items + weekly status rollups across teams | workflow | Transcription → structured extraction | Owner confirms each action item; metric: action-item closure rate |
| **21 Innovation** | Idea triage + prior-art search for hackathons / R&D intake | agentic RAG + web | Web + RAG over idea backlog + patents | Cite sources; dedupe against backlog; metric: duplicate-idea rate |
| **46 Procurement** | RFP response analysis + contract/vendor-risk clause extraction | RAG | RAG over RFPs + vendor contracts | Numbers verified; human negotiates; metric: savings, sourcing cycle time |

---

## People & Culture (22, 23, 24)

*AI theme: the most sensitive personal data in the company. AI drafts and screens, but
bias audits are mandatory, decisions stay human, and anything touching an individual's
wellbeing is aggregate-only and Privacy-reviewed (39).*

| Agent | High-value AI use case (specific, real) | Pattern | Stack / tools | Guardrail & metric |
|-------|------------------------------------------|---------|---------------|--------------------|
| **22 People** | JD drafting + resume screening (bias-audited) + interview-notes synthesis | RAG | RAG over role rubrics + past hires; structured scoring | Bias/adverse-impact eval; human decides; metric: adverse-impact ratio, time-to-screen |
| **23 L&D** | Personalized learning paths + course generation from internal knowledge | RAG | RAG over internal wiki + LMS content | SME reviews generated modules; metric: completion, competency lift |
| **24 Wellness** | Aggregate sentiment analysis of anonymous pulse surveys (never individual) | LLM classification | Classifier over anonymized free-text, aggregate-only | No individual re-identification (Privacy 39); metric: eNPS trend, burnout signal |

---

## Finance, Governance, Comms & Corporate (18, 25, 26, 27, 44, 45)

*AI theme: numbers and narrative for the highest-trust audiences (board, investors,
regulators, press). NL→SQL and document RAG do the heavy lifting; a named human owner
(CFO, Company Secretary, comms lead) approves before anything leaves the building. Zero
tolerance for fabricated figures.*

| Agent | High-value AI use case (specific, real) | Pattern | Stack / tools | Guardrail & metric |
|-------|------------------------------------------|---------|---------------|--------------------|
| **18 Finance** | Natural-language → SQL over the warehouse + a variance-explanation agent | NL→SQL + agent | Semantic layer + NL→SQL; LangGraph explain workflow | Every number verified against source; **no fabrication**; metric: query accuracy |
| **25 PR** | Crisis-statement drafting + real-time media/sentiment monitoring | RAG + web | RAG over messaging house; web sentiment feed | Comms lead approves; no speculation; metric: response time, sentiment shift |
| **26 Governance** | Board-pack summarization + first-draft minutes from prior packs | RAG | RAG over prior board packs + minutes | Company Secretary reviews; cite source; metric: prep time saved |
| **27 ESG** | Emissions/data extraction + report drafting to a framework (GRI/CSRD) | RAG | RAG over source data + framework requirements | Assurance/auditor sign-off; cite source data; metric: disclosure completeness |
| **44 Investor Relations** | Investor-update drafting from metrics + data-room Q&A bot | RAG | RAG over metrics + data room; MCP to BI | CFO approves all numbers; metric: prep time, data-room response speed |
| **45 Corp Dev** | Target sourcing + diligence document analysis over the data room | agentic RAG | LangGraph agent + RAG over data-room docs | Numbers verified; banker/lawyer review; metric: diligence coverage, cycle time |

---

## The shared AI platform — build once, every department reuses

Do not let 48 departments each build their own RAG stack. Agents 06/29/38 stand up **one**
platform; everyone above plugs into it. This is what keeps the "AI upgrade" consistent,
governed, and cheap.

```
┌─ Ingestion & vector pipeline (Agent 38) ── sources → chunk → embed → index → re-embed on change
├─ LLM gateway (Agent 06) ─────────────────── routing, keys, rate-limit, cost caps, PII redaction
├─ Eval + guardrail layer (Agent 29) ──────── golden sets, LLM-as-judge, injection/PII filters, CI gate
├─ Observability (Agents 06/08) ───────────── traces, tokens, cost per feature (LangSmith/Langfuse)
├─ Security review (Agent 09) ─────────────── OWASP LLM Top 10 sign-off on untrusted-input features
└─ Privacy review (Agent 39) ──────────────── PII in prompts/logs/embeddings; DSAR-discoverable data map
```

Each department brings its **corpus** (its docs, tickets, transcripts, contracts) and its
**prompts/evals**; it should not be re-implementing chunking, retrieval, guardrails, or
tracing. When a department's use case needs a new tool, register it via **MCP** so every
other department (and every agent) can reuse it under the same least-privilege controls.

## Rollout sequence — where every department should start

Most departments over-reach to "agent" on day one and ship something unreliable. Sequence it:

```
STEP 1  Pick ONE painful, high-volume, low-risk task (deflection, drafting, synthesis).
STEP 2  Solve it at the LOWEST rung — usually L1 RAG or an L3 workflow, not an agent.
STEP 3  Build a golden eval set from real examples BEFORE tuning; wire it into CI.
STEP 4  Add guardrails (input: injection/PII; output: schema/citation/hallucination).
STEP 5  Ship to a human-in-the-loop pilot; measure the department metric in this file.
STEP 6  Only then climb: add tools, then a workflow, then an agent — if the metric demands it.
```

A department is "AI-upgraded" when it has (1) a grounded feature in production, (2) an eval
set gating changes, (3) guardrails in and out, and (4) a metric trending the right way —
**not** when it has an impressive demo. Regulated departments add a required human sign-off
gate at STEP 5 (see disclaimer below).

## Cross-cutting rules

- **RAG-ground first.** Always retrieve from YOUR data (docs, tickets, code, policies) before generating — never answer from model memory when a corpus exists.
- **Cite, never fabricate.** Every claim traces to a source; force explicit "not found / I don't know" behavior when context is empty.
- **Guardrail both ends.** INPUT: prompt-injection, jailbreak, and PII/secret scrubbing. OUTPUT: schema/format validation, hallucination & citation checks, PII-leak checks.
- **Eval-in-CI.** A frozen, versioned eval set gates every prompt/model/index change — "it looked fine in the demo" is not a release gate.
- **Least-privilege tools.** Scope every tool narrowly; treat all model output and retrieved content as untrusted (OWASP LLM01/LLM08).
- **Human-in-the-loop for irreversible actions.** Money movement, data deletion, production changes, legal commitments, and access grants always require human confirmation.
- **Log & trace everything.** Every step, token, and cost is observable (LangSmith/Langfuse/Phoenix) — you cannot debug an agent you can't see.
- **Climb the ladder only when forced.** Ship the lowest rung that solves it; most value is a tight L1–L3 (RAG + workflow), not an autonomous agent.
- **Model & integration defaults.** Latest Claude with adaptive thinking + tuned effort; prompt caching on repeated context; prefer MCP for tool/data integrations.
- **Sign-offs.** Security (09) & Privacy (39) sign off on anything touching untrusted input or personal data; Data/AI (29) owns eval policy and responsible-AI governance.

> **Professional-review disclaimer:** These playbooks are starting points, not certified
> advice. Regulated departments (Legal 10, Compliance 11, Finance 18, Privacy 39, ESG 27,
> Gov Relations 28) require qualified human sign-off before anything ships. See
> `references/DISCLAIMER.md`.
