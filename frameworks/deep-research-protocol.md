# Deep Research Protocol — Market Existence & Novelty Engine

> **⚠️ DISCLAIMER:** Research verdicts are decision-support, not proof. "No competitor
> found" never means "no competitor exists" — see the Honesty Doctrine (§9). Patent,
> regulatory, and freedom-to-operate conclusions require qualified professional review.
> See `references/DISCLAIMER.md`.

This is the engine that makes every agent operate at depth. When anyone builds a
feature, product, or capability, the system **automatically researches it end to
end** and returns a grounded verdict:

- **"This already exists"** → who ships it, how, pricing, gaps, with real citations → *refine, don't reinvent.*
- **"This is white-space"** → no competition or citations found in the niche → *novel, with the honest caveats about why it might be empty.*

It is loaded by Agent 47 (Deep Research) and referenced by every other agent via
the Depth Doctrine in `references/agent-standards.md`.

---

## 0. When This Fires (Auto-Trigger Conditions)

Run the protocol — without being asked — whenever a request implies building or
betting on something:

```
ALWAYS TRIGGER ON:
□ "build / add / create / design / launch [feature|product|capability]"
□ Any PRD, MVP, roadmap item, or strategy bet (Agents 02, 03, 04, 37)
□ "is there a market for…", "does this exist", "who else does this", "is this novel"
□ A pricing, positioning, or GTM decision (needs competitor reality, Agents 31/32/36)
□ A technical approach decision (needs prior-art / reference architectures, Agent 06)
□ Any claim of "first", "only", "no one does this" — these MUST be verified, never asserted

DEPTH BY STAKES:
  Reversible / cheap decision  → Tier-1 scan (15-min equivalent): products + app stores + search
  Significant / costly bet     → Tier-2 scan: + GitHub/OSS + funding + reviews + forums
  Irreversible / "category"    → Tier-3 scan: + patents + academic literature + regulatory + expert sources
```

If the request is *not* a build/bet (e.g. "fix this typo"), skip the protocol but
still apply the Depth Rubric (§8) to whatever you produce.

---

## 1. Decompose the Feature into Research Objects

Never search the user's phrasing verbatim. Translate it into canonical, searchable
objects first — most "novel" ideas are just unfamiliar vocabulary.

```
FEATURE: "<what the user wants to build, in their words>"

→ CANONICAL NAME(S): the industry term(s) for this. Brainstorm 3-6 synonyms.
   e.g. "let users split a bill by scanning" → "bill splitting", "expense splitting",
   "group payments", "shared tab", "settle up", "P2P split payments"
→ JOB IT DOES (JTBD): the underlying job, abstracted from the mechanism.
→ ADJACENT MECHANISMS: other ways this job is solved today (incl. manual/offline).
→ CONSTRAINTS: geography, platform, regulation, segment that scope the search.
→ RESEARCH QUESTIONS (the things we must answer):
   Q1 Does a direct equivalent ship today? Who, where, since when?
   Q2 What do the substitutes / workarounds look like?
   Q3 What is the pricing & business model of incumbents?
   Q4 Where do incumbents fail (the refinement wedge)?
   Q5 Is there prior art / patents / research that bounds the space?
   Q6 Is there demand evidence (search volume, funding, communities, complaints)?
   Q7 If it truly doesn't exist — WHY not? (the most important question)
```

## 2. Source Layers — Search All That The Stakes Require

Cover layers top-to-bottom. Higher layers = market reality; lower = signal & prior art.

| Layer | What you're looking for | Where (use real tools when available) |
|------|--------------------------|----------------------------------------|
| **Direct products** | Companies shipping the exact thing | Web search, product sites, G2/Capterra, Product Hunt |
| **App stores** | Mobile equivalents, install scale, reviews | App Store, Play Store, Sensor Tower |
| **Open source** | Free/DIY equivalents, dev mindshare | GitHub, GitLab, npm/PyPI, awesome-lists |
| **Funding/market** | Who's backed, how big, momentum | Crunchbase, PitchBook signals, news, SimilarWeb |
| **Voice of customer** | Real demand & unmet need | Reddit, X/Twitter, Hacker News, forums, review 1-stars |
| **Prior art / patents** | Has it been invented/claimed before | Google Patents, USPTO, Espacenet |
| **Academic / technical** | Is it researched, is it feasible | Google Scholar, arXiv, ACM/IEEE |
| **Regulatory** | Is it allowed / why it may not exist | Regulator sites, `references/compliance/*` |

> **Tool use is mandatory when available.** If `WebSearch`/`WebFetch` or the
> `deep-research` skill exists in the environment, USE them — run real queries, open
> real sources, capture real URLs. If they do NOT exist, you MUST say so explicitly
> (see §9) and downgrade every claim to a clearly-labeled hypothesis. Never invent a
> citation, statistic, company, or URL to fill the gap.

## 3. Capture Evidence in a Citation Ledger

Every finding gets a row. No row → it does not enter the verdict.

```
[E#] CLAIM: <one factual claim>
     SOURCE: <publication / company / author>
     URL: <exact, openable link>            ACCESSED: <date>
     TIER: T1 primary | T2 reputable secondary | T3 community/anecdotal
     RECENCY: <date of the source's info>   FRESHNESS: current | aging(>2y) | stale(>4y)
     CONFIDENCE: High | Medium | Low
```

**Source quality tiering (use to weight, not just collect):**
- **T1 (primary):** the company's own product/pricing page, the patent, the filing, the dataset, the paper.
- **T2 (reputable secondary):** established press, analyst notes, well-run review platforms.
- **T3 (community/anecdotal):** Reddit/forum/social — great for demand & pain signals, weak for facts.

A verdict of "exists" needs ≥1 T1 or ≥2 T2 sources. A verdict of "novel" requires a
*documented, exhausted* search (§5), not silence.

## 4. Adversarial Verification (Anti-Hallucination Gate)

Before anything reaches the dossier, run the red-team pass:

```
FOR EACH claim/citation:
□ Does the URL actually exist and open? (If you can't verify it, mark UNVERIFIED — do not cite it.)
□ Does the source actually say what you claim, or did you pattern-match a title?
□ Is the company/product real and currently operating (not dead/renamed/fictional)?
□ Is the number traceable to a primary source, or is it folklore repeated everywhere?
□ Am I forcing a "novel" verdict by under-searching, or an "exists" verdict by over-stretching analogies?

IF a claim cannot survive this pass → DROP it or label it "UNVERIFIED — needs confirmation".
A smaller set of true, cited claims beats a large set of confident guesses. Always.
```

## 5. The Verdict Engine (Exists vs. Novel)

Classify into exactly one verdict, with the evidence that forces it.

```
DECISION TREE:

Found ≥1 product doing the SAME job for the SAME user, verifiable?
├── YES → is it mature (funded/scaled/many reviews)?
│        ├── YES → VERDICT A: ESTABLISHED MARKET
│        └── NO  → VERDICT B: EMERGING MARKET (early entrants, room to win)
└── NO  → Found products doing the same job a DIFFERENT way, or for an adjacent user?
         ├── YES → VERDICT C: ADJACENT / SUBSTITUTES EXIST (no direct equal)
         └── NO  → Did you run a Tier-appropriate, EXHAUSTED search (≥3 synonyms × ≥4 layers)?
                  ├── NO  → VERDICT E: INCONCLUSIVE (must search more before deciding)
                  └── YES → VERDICT D: WHITE-SPACE / NO EVIDENCE OF AN EQUIVALENT
```

### Verdict output banners (always lead the dossier with one)

```
╔════════════════════════════════════════════════════════════╗
║ 🟥 VERDICT A — THIS ALREADY EXISTS (ESTABLISHED)            ║
║ N direct competitors found. This is a refine-not-reinvent   ║
║ play. Your edge must come from differentiation (§6), not    ║
║ novelty. Top players: [X, Y, Z]. See citations [E1…En].     ║
╚════════════════════════════════════════════════════════════╝

╔════════════════════════════════════════════════════════════╗
║ 🟧 VERDICT B — EMERGING (EARLY MARKET)                      ║
║ A few early entrants exist but none dominant. Window is open.║
║ Differentiate on [gap] and move faster. Citations [E1…En].  ║
╚════════════════════════════════════════════════════════════╝

╔════════════════════════════════════════════════════════════╗
║ 🟨 VERDICT C — ADJACENT SOLUTIONS ONLY                      ║
║ No direct equivalent, but the job is solved differently by  ║
║ [substitutes]. You're competing with a workaround, not a    ║
║ product. Beating "good enough" is the real bar. [E1…En].    ║
╚════════════════════════════════════════════════════════════╝

╔════════════════════════════════════════════════════════════╗
║ 🟩 VERDICT D — WHITE-SPACE (NO EVIDENCE OF AN EQUIVALENT)   ║
║ An exhausted search across [synonyms]×[layers] surfaced NO  ║
║ direct competitor and NO citations for this niche.          ║
║ ⚠️ Absence of evidence ≠ proof of novelty. Before you       ║
║ celebrate, answer §7: WHY does it not exist?                ║
╚════════════════════════════════════════════════════════════╝

╔════════════════════════════════════════════════════════════╗
║ ⬜ VERDICT E — INCONCLUSIVE                                  ║
║ Not enough searched/verified to rule either way. Listed     ║
║ exactly what was checked and the next queries to run.       ║
╚════════════════════════════════════════════════════════════╝
```

## 6. If It EXISTS → Competitor Teardown + Refinement Wedge

```
PER DIRECT COMPETITOR (deepest for the top 3):
  WHO: company, stage, funding, headcount trend, geography
  PRODUCT: how the feature actually works (you walked the flow / read the docs)
  PRICING: exact tiers, the price metric, what's gated
  TRACTION: installs/reviews/ratings/traffic — orders of magnitude
  STRENGTH: what they're genuinely good at (don't fight here)
  WEAKNESS: the 1-star themes, the ignored segment, the clunky flow ← YOUR WEDGE
  MOAT: what would be hard for you to replicate (and for them to copy you)

REFINEMENT OUTPUT — "here's how to do it better":
  • Differentiation thesis: the one axis where you'll be clearly better
  • Underserved segment they ignore
  • The 3 concrete things to do differently (feature/price/experience)
  • What NOT to copy (their tech debt / wrong bets)
  • The "10x not 10%" test: is your wedge a real leap or a tweak?
```

## 7. If It's NOVEL → Novelty Assessment (Why Is It Empty?)

A white-space verdict is the *start* of work, not a trophy. Empty niches are usually
empty for a reason. Interrogate it:

```
WHY MIGHT THIS NOT EXIST? (rule each in/out with evidence)
  □ NO DEMAND — people don't actually want this (check: search volume, communities, prior failed startups)
  □ TRIED & FAILED — it existed and died (search "[idea] shut down / dead pool / acquihire")
  □ REGULATORY WALL — it's not legal / licensable yet (Agents 10/11/28, compliance refs)
  □ TECHNICALLY INFEASIBLE / TOO EXPENSIVE — until recently (what just changed? "why now?")
  □ TOO SMALL — real but sub-scale market (size it, Agent 02/18)
  □ INCUMBENT-OWNED ADJACENT — a giant would crush it as a feature (platform risk)
  □ GENUINELY EARLY — a real "why now" unlock (new tech, regulation, behavior shift)

NOVELTY VALIDATION PLAN (cheapest test first):
  1. Demand test: landing page / fake-door / pre-orders / interviews (target: N signals)
  2. The "why now" must be nameable in one sentence, or it's probably "no demand"
  3. Smallest experiment that would change your mind → run it before building
```

## 8. Depth Rubric — What "Mariana Trench" Means (0–4)

Every agent grades its own output before delivering. Below Level 3 is not shippable.

```
L0 SURFACE (REJECT): generic best-practices, no specifics, no sources, "it depends".
L1 SHALLOW: named tools/competitors but no numbers, no citations, no edge cases.
L2 WORKING: specifics + structure, but claims unsourced and edge cases thin.
L3 DEEP (minimum bar): every non-obvious claim cited or labeled; real numbers;
   competitor/prior-art reality; edge cases, failure modes, and second-order effects covered.
L4 TRENCH (target): L3 + the non-consensus insight; what everyone gets wrong here;
   quantified trade-offs; the thing that only shows up after you've shipped it;
   an explicit "what would make this wrong" and the test that would reveal it.
```

## 9. Honesty Doctrine (Non-Negotiable)

```
1. ABSENCE OF EVIDENCE ≠ EVIDENCE OF ABSENCE. "I found no competitor" is a statement
   about your search, not the world. Always say which it is.
2. NO FABRICATION. Never invent a company, product, statistic, study, patent, or URL.
   An honest "unverified / I couldn't confirm this" is worth more than a confident fake.
3. DECLARE YOUR TOOLS. If you could not run live searches, say so at the top of the
   dossier and label all market claims as hypotheses to verify.
4. SHOW THE SEARCH. For a novelty verdict, list the synonyms and layers you actually
   covered, so the user can judge whether it was exhausted.
5. SEPARATE FACT FROM INFERENCE. Cited fact, reasoned inference, and speculation get
   different labels. Never let them blur.
6. STALE IS A RISK. Flag when your knowledge may predate the market; recommend a live
   re-check for anything time-sensitive (funding, shutdowns, pricing, regulation).
```

## 10. Per-Agent Depth Map (every agent's domain-specific deep dive)

This is how "every agent goes deep" — each has a required research move set and a
depth definition. Agents consult their row before producing output.

```
02 Discovery   → primary market data + 5+ walked competitors + bottom-up TAM from sources
03 Strategy    → prior strategic bets in category, why winners won/losers lost, real "why now"
04 PRD         → existing-feature teardown (how others built it) + full edge/error/abuse states
05 Design      → real UI pattern precedents (Mobbin-style), a11y specs, every state designed
06 Engineering → reference architectures, real benchmark numbers, documented failure post-mortems
07 Testing     → real defect taxonomies, prod incident classes, coverage math, not generic pyramids
08 DevOps/SRE  → published SLO/error-budget practices, real outage post-mortems, cost numbers
09 Security    → CVE/CWE specifics, real breach case studies, exploited-in-the-wild patterns
10 Legal/IP    → actual statutes/case law/patents cited, FTO search, not generic "consult a lawyer"
11 Compliance  → the specific clause/article/section + regulator guidance, not "be compliant"
12 Trust&Safety→ documented abuse vectors & platform policy precedents
13 Fraud       → real fraud typologies, chargeback data, ring patterns, loss-rate benchmarks
14 Launch/GTM  → comparable launch case studies, channel CAC benchmarks with sources
15 Marketing   → channel benchmark data, real CAC/CTR/conv ranges by channel & geo
16 Analytics   → metric definitions used by leaders, instrumentation precedents
17 Cust Success→ NPS/churn/retention benchmarks by segment with sources
18 Finance     → comparable-company multiples, real unit-economics benchmarks, sourced
19 Operations  → industry SOP standards, real throughput/quality benchmarks
20 BAU         → operating-cadence precedents from scaled orgs
21 Innovation  → bug-bounty/hackathon precedents, payout benchmarks
22 People/HR   → real comp data, attrition benchmarks, org-design case studies
23 L&D         → skills frameworks, ramp-time benchmarks
24 Wellness    → burnout/engagement research with citations
25 PR/Comms    → comparable crisis case studies, message-testing precedents
26 Governance  → real board/cap-table/IPO precedents and rules
27 ESG         → reporting-standard specifics (GRI/SASB/CSRD), real disclosure examples
28 GovRelations→ specific sandbox programs, consultation precedents, regulator track record
29 Data/AI     → SOTA model/benchmark reality, responsible-AI incident case studies
30 Platform    → ecosystem economics case studies, API/marketplace precedents
31 Product Mktg→ real positioning teardowns, win/loss data, analyst-report specifics
32 Sales/RevOps→ benchmark win rates / cycle / NRR by segment, sourced
33 Partnerships→ comparable deal structures & partner economics
34 DevRel      → developer-funnel benchmarks (TTFHW), community health precedents
35 Research    → method validity evidence, sample-size math, bias literature
36 Pricing     → real pricing teardowns, WTP study methods, elasticity evidence
37 Growth      → loop/retention benchmarks by category, real experiment write-ups
38 Data Eng    → reference data architectures, cost & reliability benchmarks
39 Privacy/DPO → the exact legal basis/article, DPA precedents, real enforcement actions
40 IT/Corp Eng → zero-trust/identity reference designs, real tooling benchmarks
41 TPM/PMO     → delivery-predictability benchmarks, real program post-mortems
42 Content/Docs→ docs-quality benchmarks, real IA/findability studies
43 Localization→ locale ROI data, real i18n failure case studies
44 Investor Rel→ comparable update/letter precedents, real disclosure rules
45 Corp Dev    → comparable M&A multiples, integration success/failure case studies
46 Procurement → category price benchmarks, supplier-risk case studies
47 Deep Research→ runs THIS protocol end to end and grades everyone else's depth
```

## 11. Output: Feature Research Dossier (the deliverable)

```
# Feature Research Dossier: <feature>
TOOLS USED: <WebSearch/WebFetch/deep-research skill / NONE — claims are hypotheses>
SEARCH COVERAGE: synonyms [..] × layers [..]  (exhausted? Y/N)

## VERDICT  → [A/B/C/D/E banner + one-paragraph "so what"]

## Evidence Ledger        [E1…En with URLs, tiers, recency, confidence]
## If it exists           [competitor teardown + the refinement wedge (§6)]
## If it's novel          [why-empty assessment + validation plan (§7)]
## Demand signals         [search/funding/community/complaint evidence]
## Prior art & regulation [patents/papers/regulatory bounds, or "none found + how I looked"]
## Risks & unknowns       [what would change the verdict]
## Recommendation         [Refine X / Build & validate Y / Don't build because Z]
## Depth self-grade       [L3/L4 + what would push it deeper]
```

---

*This protocol is the spine of the system's depth. An agent that produces an
uncited, edge-case-free, "it depends" answer has failed it — regardless of length.*
