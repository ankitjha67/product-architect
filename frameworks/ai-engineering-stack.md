# AI Engineering Stack - LangGraph, RAG & Agentic Systems

> **⚠️ DISCLAIMER:** This framework reflects the fast-moving GenAI stack as of early
> 2026. Model IDs, API shapes, pricing, and library APIs change frequently -
> **verify against current provider docs before building**. Security/privacy of any
> LLM feature that touches personal or regulated data requires review by Agents 09
> (Security) and 39 (Privacy/DPO). See `references/DISCLAIMER.md`.

The modern product ships intelligence, not just software. This is the reference for
building **LLM-powered features, RAG systems, and agents** - the tooling (LangGraph,
vector DBs, evals, guardrails), the architecture, and the operating discipline. It is
owned jointly by Agent 06 (Engineering), Agent 29 (Data & AI Strategy), and Agent 38
(Data Engineering); every department applies it via `frameworks/ai-department-playbooks.md`.

---

## 0. The Maturity Ladder - climb only as far as the problem needs

Do NOT jump to "agent" because it's exciting. Each rung is more capable, slower,
costlier, and harder to make reliable. Ship the lowest rung that solves the problem.

```
L0  Prompt (single call)        classify / summarize / extract / rewrite / Q&A
L1  Prompt + RAG                answers grounded in YOUR corpus (docs, tickets, code)
L2  Tool use / function calling model calls your functions (lookup, write, compute)
L3  Workflow (code-orchestrated) fixed multi-step pipeline; you own the control flow
L4  Agent (model-orchestrated)  open-ended, model decides steps/tools in a loop
L5  Multi-agent                 supervisor + workers; only when one context can't hold it
```

**Anthropic's own guidance ("Building effective agents"):** most value comes from
**workflows** (L3) - predictable, testable, cheap - not autonomous agents. Reach for
L4/L5 only when the task is genuinely open-ended and hard to specify in advance, the
outcome justifies the cost/latency, and errors are recoverable (tests, review, rollback).

---

## 1. RAG - Retrieval-Augmented Generation (grounding on your data)

RAG is how you make an LLM answer from *your* knowledge (docs, tickets, code, policies)
instead of its training data - fewer hallucinations, current facts, citations, and no
retraining. It is the single highest-ROI GenAI pattern for most products.

### 1a. The pipeline

```
INGEST → CHUNK → EMBED → INDEX → (query) → RETRIEVE → RERANK → ASSEMBLE → GENERATE → CITE
```

| Stage | What it does | Real choices / defaults |
|-------|--------------|--------------------------|
| **Ingest** | Load sources; parse PDFs/HTML/code; clean | Unstructured, LlamaParse, Docling; OCR for scans |
| **Chunk** | Split into retrievable units | ~300–800 tokens, 10–20% overlap; **semantic/structural** > fixed-size; keep headings/metadata |
| **Embed** | Text → vectors | Voyage (voyage-3), OpenAI text-embedding-3-large, Cohere embed-v3, BGE-M3 (OSS). Pick by domain + cost + dim |
| **Index** | Store vectors + metadata | **pgvector** (start here - you already run Postgres), Pinecone, Qdrant, Weaviate, Milvus, Turbopuchi |
| **Retrieve** | Find candidates | **Hybrid = dense (vector) + sparse (BM25)** fused with RRF beats either alone |
| **Rerank** | Reorder top-k for precision | Cohere Rerank, Voyage rerank, cross-encoder (bge-reranker). Retrieve 50 → rerank → keep 5–8 |
| **Assemble** | Build the prompt | Put retrieved context in a cacheable prefix; dedupe; budget tokens |
| **Generate** | LLM answers from context | Instruct: "answer ONLY from context; if not present, say so"; require citations |
| **Cite** | Attribute every claim | Anthropic **Citations** (`citations: {enabled: true}`) returns char/page-level cites automatically |

### 1b. Advanced RAG (use when naive RAG under-retrieves)

```
Query transformation:  multi-query (expand into N variants), HyDE (embed a hypothetical
                       answer), decomposition (break a complex question into sub-queries).
Better chunks:         parent-document / small-to-big (embed small, return the parent),
                       contextual retrieval (prepend an LLM-written context blurb to each
                       chunk before embedding - big precision win).
Self-correcting:       CRAG (grade retrieved docs; if weak, fall back to web search),
                       self-RAG (model decides when to retrieve and critiques its own answer).
Agentic RAG:           the retriever is a TOOL the agent calls in a loop - it reformulates
                       queries, searches multiple indexes, and stops when it has enough.
GraphRAG:              build a knowledge graph from the corpus; retrieve subgraphs. Best for
                       "connect the dots across many docs" and global-summary questions.
```

### 1c. RAG evaluation (you cannot improve what you don't measure)

```
RETRIEVAL:  context precision (are retrieved chunks relevant?), context recall (did we get
            all needed chunks?), hit-rate, MRR. Build a golden Q→relevant-doc set.
GENERATION: faithfulness (is the answer grounded in context - no hallucination?),
            answer relevancy, answer correctness vs ground truth.
TOOLS:      RAGAS, TruLens, DeepEval, promptfoo; LLM-as-judge for open-ended scoring.
DISCIPLINE: freeze an eval set BEFORE tuning; run it in CI on every prompt/model/chunk change.
```

**RAG failure modes to design against:** retrieval misses (fix chunking/hybrid/rerank),
context stuffed but ignored ("lost in the middle" - put key facts first/last, use fewer
better chunks), stale index (schedule re-embedding on source change), and the model
answering confidently from training when context is empty (force "not found" behavior).

---

## 2. LangGraph - orchestrating agents & workflows

LangGraph (by LangChain) models an LLM app as a **stateful graph**: nodes do work, edges
route, and a shared **state** object flows through. Unlike a linear chain, graphs support
cycles (agent loops), branching, human-in-the-loop pauses, and durable checkpointing -
which is why it's the popular OSS choice for anything beyond a single call.

### 2a. Core concepts

```
StateGraph      the graph; typed shared state (TypedDict / Pydantic) merged by reducers
Node            a function (or LLM call, or tool) that reads state and returns an update
Edge            static (A→B) or CONDITIONAL (route on state - this is what enables loops/branch)
Checkpointer    persists state after each step → resume, time-travel, durability (SQLite/Postgres/Redis)
Interrupt       pause for human approval, then resume with injected input (human-in-the-loop)
Store           long-term memory across threads (per-user facts) vs. short-term thread state
Streaming       stream tokens AND intermediate state/steps to the UI
Subgraph        compose a graph as a node inside another graph
```

### 2b. Multi-agent patterns (LangGraph)

```
Supervisor:   a router agent delegates to specialized workers, collects results. Most common.
Swarm:        agents hand off control to each other peer-to-peer based on the task.
Hierarchical: supervisors of supervisors - teams of teams for large problems.
Network:      any agent can call any agent (powerful, hard to control - use sparingly).
```

Rule of thumb: **start with a single agent + good tools.** Add a second agent only when a
single context window genuinely can't hold the job, or when specialized system prompts /
tool sets must not bleed into each other.

### 2c. Choose your orchestrator honestly (no lock-in dogma)

| Option | When it fits | Notes |
|--------|--------------|-------|
| **LangGraph** | Complex control flow, cycles, HITL, durable long-running graphs, multi-agent | Most flexible OSS; steeper curve; LangSmith for tracing; LangGraph Platform to deploy |
| **Anthropic Agent SDK** | Batteries-included coding/filesystem agent on your infra | Ships the Claude Code harness + built-in tools (read/write/bash/grep/web) |
| **Anthropic Managed Agents** | You want Anthropic to run the loop AND host a per-session sandbox | No loop code; versioned agent configs; MCP + Skills; scheduled deployments |
| **Anthropic Tool Runner** | Custom-tool agent without hand-writing the loop | Thin helper over the Messages API; per-turn hooks for approval/interception |
| **Plain code + Messages API** | Fixed workflow (L3), a handful of steps | Often the right answer - the loop you own is trivial and fully testable |
| CrewAI / AutoGen / LlamaIndexWF / OpenAI Agents SDK | Team preference / ecosystem fit | Evaluate; don't cargo-cult |

**Model default:** build on the latest Claude - **`claude-opus-4-8`** (Opus 4.8) for the
hardest reasoning/agentic work; **`claude-sonnet-5`** for high-volume production; **`claude-haiku-4-5`**
for cheap/fast classification and routing. Use **adaptive thinking** (`thinking: {type: "adaptive"}`)
and the `effort` parameter (`low`→`max`) to trade cost for depth. **MCP** (Model Context
Protocol) is the open standard for connecting tools/data to any model - prefer it for
integrations. (Verify current IDs/params against provider docs - this space moves fast.)

---

## 3. Reference architecture - an agentic RAG feature

```
                    ┌────────────────────────────────────────────────┐
[User] ── query ──▶ │  App / API                                     │
                    │   └─ LLM Gateway (routing, keys, rate-limit,    │
                    │      cost caps, fallback, PII redaction)        │
                    └───────────────┬────────────────────────────────┘
                                    ▼
                    ┌───────────────────────────────┐   ┌─────────────────────┐
                    │ LangGraph agent (StateGraph)  │──▶│ Tools               │
                    │  nodes: plan → retrieve →      │   │  • retrieve(RAG)    │
                    │  grade → generate → cite       │   │  • sql / api / calc │
                    │  checkpointer (Postgres)       │◀──│  • MCP servers      │
                    └───────┬───────────────┬────────┘   └─────────────────────┘
                            ▼               ▼
                 ┌────────────────┐  ┌──────────────────────────────────────────┐
                 │ Vector store   │  │ Guardrails (in + out) · Observability     │
                 │ (pgvector) +   │  │  PII/secret filter, jailbreak & injection │
                 │ BM25 + rerank  │  │  detection, output validation, citations, │
                 └────────────────┘  │  LangSmith/Langfuse traces, evals-in-CI   │
                                      └──────────────────────────────────────────┘
   Data pipeline (Agent 38): sources → chunk → embed → index → schedule re-embed on change
```

---

## 4. Production concerns (the part that separates demos from products)

```
OBSERVABILITY:  trace every step, token, and cost. LangSmith, Langfuse, Arize Phoenix,
                Helicone. You cannot debug an agent you can't see.
EVALS-IN-CI:    a versioned eval set gates every prompt/model/index change (promptfoo,
                RAGAS, DeepEval). "It looked fine in the demo" is not a release gate.
GUARDRAILS:     INPUT - prompt-injection & jailbreak detection, PII/secret scrubbing, topic
                limits. OUTPUT - schema/format validation (structured outputs), hallucination
                & toxicity checks, citation enforcement, PII leak checks. (Agents 09, 12, 39.)
COST/LATENCY:   prompt caching (up to ~90% off repeated context - Anthropic cache_control),
                semantic caching of answers, model routing (cheap model first, escalate),
                streaming, batching, context editing/compaction for long agent runs.
RELIABILITY:    retries + backoff, timeouts, fallbacks (server-side or client middleware),
                idempotency, graceful "I don't know", circuit-breakers on tool calls.
SECURITY:       treat all model output and retrieved content as UNTRUSTED (see §5).
```

## 5. The AI-specific risk surface (OWASP LLM Top 10 - abbreviated)

```
LLM01 Prompt injection      - retrieved/user content overrides instructions. Never let
                              tool output or RAG chunks issue commands; sandbox tools;
                              least-privilege; confirm destructive actions.
LLM02 Insecure output       - model output flows into eval()/SQL/shell/HTML. Validate &
                              escape everything downstream.
LLM06 Sensitive disclosure  - PII/secrets in prompts, logs, embeddings, or memory. Redact
                              before send; classify data; don't embed regulated PII without a basis.
LLM04 Data/model poisoning  - untrusted docs in the RAG corpus. Vet ingestion sources.
LLM08 Excessive agency      - over-broad tools/permissions. Scope tools; human-in-the-loop
                              for high-impact actions; audit every tool call.
LLM10 Unbounded consumption - cost/DoS via runaway loops. Token budgets, step caps, rate limits.
```
Agent 09 (Security) and Agent 39 (Privacy/DPO) own sign-off on any LLM feature touching
untrusted input or personal data. Agent 29 owns responsible-AI governance and eval policy.

---

## 6. Build checklist (before shipping an LLM feature)

```
□ Lowest maturity rung that solves it (L0→L5) - justify anything above L3
□ RAG: golden eval set exists; hybrid retrieval + rerank; citations on; "not found" behavior
□ Orchestrator chosen deliberately (LangGraph vs Anthropic-native vs plain code)
□ Latest Claude model + adaptive thinking + effort tuned; prompt caching on repeated context
□ Guardrails in + out; prompt-injection & PII handled; tools least-privilege
□ Observability + tracing wired; eval set gates CI; cost & latency budgets set with alerts
□ Human-in-the-loop on irreversible/high-impact actions
□ Security (09) + Privacy (39) sign-off; responsible-AI check (29); fallback + graceful degrade
□ A rollback path and a kill switch
```

---

*The winning move is usually **RAG + a tight workflow**, not an autonomous agent. Ship the
simplest thing that's grounded, evaluated, guardrailed, and observable - then climb the
ladder only when the problem forces you to.*
