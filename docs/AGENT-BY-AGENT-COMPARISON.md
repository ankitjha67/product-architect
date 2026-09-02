# Agent-by-Agent Comparison: product-architect vs agency-agents

A complete, one-row-per-agent mapping of all 258 agents in
[msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents) onto the coverage in this
repository (137 agents: numbered 00 to 100 plus the `verticals/` tree). It is the agent-level companion to
[AGENCY-AGENTS-GAP-ANALYSIS.md](AGENCY-AGENTS-GAP-ANALYSIS.md), which made the same argument at the division level.

The two repositories differ in kind. Theirs is a breadth-first persona catalogue: 258 flat agents across 18
divisions, median around 230 lines, each a compact persona (identity, mission, rules, deliverables). Ours is a
depth-first reasoning system: fewer agents, median around 609 lines, each carrying the full house structure
(Role, Inputs, numbered domain sections, Decision Framework, Enterprise-Grade, Failure Modes, Edge Cases, worked
Example, Output, Quality Standard) under SMART-LOADER routing. So where we cover a thing, we usually cover it
deeper; the interesting question is only ever breadth, which this map answers agent by agent.

How to read the Verdict column:

- **Covered deeper**: we have a direct equivalent that is materially longer and more rigorous.
- **Covered**: direct equivalent at comparable depth.
- **Covered (broader)**: their narrow agent is a slice of one of our wider agents.
- **Partial**: we cover part of it; the row says what we hold and what we lack.
- **Gap (intentional skip)**: deliberately not built (platform-locked, or a single-use utility).
- **Gap (open)**: not covered, and arguably worth adding. Used honestly, not padded.

Note on `Gap (now filled)`: the analysis that preceded this map identified the division-level gaps, and the build
that closed them (numbered agents 80 to 100, and the whole `verticals/` tree) is already merged into the roster
this map is scored against. So those newly built agents appear here as **Covered deeper** / **Covered** rather
than as freshly filled gaps, and the `Gap (now filled)` tally is 0 by construction. What they filled is documented
in the gap analysis; this document scores current-state depth.

## Summary by division

Verdict buckets per division, with their division median line count against the median of our matching agents
(gap rows carry no match, so they are excluded from the "Ours median" column).

| Division | Their agents | Theirs median | Ours median | Covered deeper | Covered | Covered (broader) | Partial | Gap (skip) | Gap (open) |
|---|---|---|---|---|---|---|---|---|---|
| academic | 6 | 125 | 602 | 0 | 0 | 6 | 0 | 0 | 0 |
| design | 10 | 298 | 493 | 0 | 3 | 6 | 0 | 0 | 1 |
| engineering | 59 | 212 | 691 | 24 | 4 | 17 | 2 | 12 | 0 |
| finance | 5 | 261 | 627 | 3 | 1 | 1 | 0 | 0 | 0 |
| game-development | 6 | 220 | 564 | 6 | 0 | 0 | 0 | 0 | 0 |
| gis | 13 | 109 | 523 | 6 | 0 | 5 | 2 | 0 | 0 |
| healthcare | 3 | 313 | 517 | 1 | 1 | 1 | 0 | 0 | 0 |
| marketing | 36 | 211 | 593 | 5 | 1 | 28 | 2 | 0 | 0 |
| paid-media | 7 | 72 | 585 | 0 | 0 | 7 | 0 | 0 | 0 |
| product | 5 | 154 | 547 | 2 | 0 | 3 | 0 | 0 | 0 |
| project-management | 7 | 198 | 522 | 1 | 0 | 5 | 0 | 1 | 0 |
| research | 1 | 137 | 629 | 1 | 0 | 0 | 0 | 0 | 0 |
| sales | 9 | 226 | 618 | 2 | 1 | 6 | 0 | 0 | 0 |
| security | 12 | 450 | 626 | 5 | 1 | 6 | 0 | 0 | 0 |
| spatial-computing | 6 | 44 | 648 | 4 | 0 | 1 | 0 | 1 | 0 |
| specialized | 58 | 384 | 603 | 15 | 6 | 26 | 4 | 5 | 2 |
| support | 6 | 514 | 704 | 4 | 0 | 2 | 0 | 0 | 0 |
| testing | 9 | 305 | 616 | 2 | 0 | 7 | 0 | 0 | 0 |
| **Total** | **258** | | | **81** | **18** | **127** | **10** | **19** | **3** |

The shape is the same everywhere: our matching median is roughly two to five times their division median. Breadth,
not depth, is where any remaining gap lives, and after the 80-to-100 and `verticals/` build there are only three
genuinely open gaps and ten partials left, listed at the foot of this document.

## academic

Their academic personas are worldbuilding-and-method flavoured. Ours collapse them onto three research practices in
`verticals/academic-research/`, so several of theirs map onto one of ours (Covered broader).

| Their agent | Their lines | Our equivalent | Our lines | Verdict |
|---|---|---|---|---|
| Anthropologist | 126 | verticals/academic-research/social-science-field-research | 618 | Covered (broader) |
| Geographer | 128 | verticals/academic-research/social-science-field-research (spatial method also in gis-geospatial) | 618 | Covered (broader) |
| Historian | 124 | verticals/academic-research/qualitative-historical-research | 585 | Covered (broader) |
| Narratologist | 119 | verticals/game-development/narrative-designer | 573 | Covered (broader) |
| Psychologist | 119 | verticals/academic-research/social-science-field-research | 618 | Covered (broader) |
| Statistician | 145 | verticals/academic-research/quantitative-statistical-research (also 79 Data Science) | 585 | Covered (broader) |

## design

Maps mostly to 05 Design, 35 User Research, 78 Accessibility, and the marketing agents for brand.

| Their agent | Their lines | Our equivalent | Our lines | Verdict |
|---|---|---|---|---|
| Brand Guardian | 322 | 31 Product Marketing (brand within PMM and 25 PR) | 638 | Covered (broader) |
| Image Prompt Engineer | 237 | none: AI image-generation prompt craft not owned by any agent | n/a | Gap (open) |
| Inclusive Visuals Specialist | 72 | 78 Accessibility & Inclusive Design (+12 Trust & Safety) | 754 | Covered (broader) |
| Persona Walkthrough Specialist | 273 | 35 User Research & Insights | 535 | Covered (broader) |
| UI Designer | 383 | 05 Design | 493 | Covered |
| UI Finish-Gate Reviewer | 218 | 05 Design (finish review; also 00 Chief Reviewer) | 493 | Covered (broader) |
| UX Architect | 469 | 05 Design (+50 Frontend & Web Platform) | 493 | Covered |
| UX Researcher | 329 | 35 User Research & Insights | 535 | Covered |
| Visual Storyteller | 149 | 05 Design (+31 Product Marketing) | 493 | Covered (broader) |
| Whimsy Injector | 438 | 05 Design (delight and personality within design) | 493 | Covered (broader) |

## engineering

Their largest division. Maps to 06/08 plus the horizontal engineering agents 80 to 92, and the older 38/48/49/50/65.
Platform-locked and language-locked agents (Drupal, WordPress, GaussDB, Feishu, WeChat, USWDS, Filament, Rust,
OrgScript) are intentional skips: too narrow to carry a full house-structure file, and where relevant they surface
as a capability inside a broader agent.

| Their agent | Their lines | Our equivalent | Our lines | Verdict |
|---|---|---|---|---|
| AI Data Remediation Engineer | 212 | 38 Data Engineering & Platform | 633 | Covered (broader) |
| AI Engineer | 146 | 49 ML Engineering (MLOps) | 704 | Covered |
| API Platform Engineer | 163 | 80 API Platform Engineering | 736 | Covered deeper |
| Autonomous Optimization Architect | 108 | 08 DevOps & SRE (+68 FinOps guardrails) | 917 | Covered (broader) |
| Backend Architect | 237 | 65 Backend & Distributed Systems | 777 | Covered deeper |
| CMS Developer | 537 | none: platform-locked (Drupal/WordPress) | n/a | Gap (intentional skip) |
| Code Reviewer | 77 | 06 Engineering (+00 Chief Reviewer) | 967 | Covered (broader) |
| Codebase Onboarding Engineer | 174 | 67 Developer Productivity & Internal Platform | 772 | Covered (broader) |
| Data Engineer | 307 | 38 Data Engineering & Platform | 633 | Covered deeper |
| Data Visualization Engineer | 152 | 16 Analytics & Intelligence | 621 | Covered (broader) |
| Database Optimizer | 177 | 83 Database Reliability Engineering | 829 | Covered deeper |
| Database Reliability Engineer | 163 | 83 Database Reliability Engineering | 829 | Covered deeper |
| Desktop App Engineer | 205 | 90 Desktop Application Engineering | 514 | Covered deeper |
| Developer Tooling Engineer | 154 | 67 Developer Productivity & Internal Platform | 772 | Covered (broader) |
| DevOps Automator | 376 | 08 DevOps & SRE | 917 | Covered deeper |
| Drupal Performance Engineer | 348 | none: platform-locked (Drupal) | n/a | Gap (intentional skip) |
| Drupal Shopping Cart Engineer | 361 | none: platform-locked (Drupal Commerce) | n/a | Gap (intentional skip) |
| Email Intelligence Engineer | 354 | 91 RAG & AI Application (extraction) and 38 Data Engineering; no dedicated email-thread parser | 560 | Partial |
| Embedded Firmware Engineer | 174 | 84 Embedded, Firmware & IoT | 689 | Covered deeper |
| Feishu Integration Developer | 599 | none: platform-locked (Feishu/Lark) | n/a | Gap (intentional skip) |
| Filament Optimization Specialist | 284 | none: platform-locked (Filament PHP admin) | n/a | Gap (intentional skip) |
| FinOps Engineer | 154 | 68 FinOps & Cloud Economics | 731 | Covered deeper |
| Frontend Developer | 225 | 50 Frontend & Web Platform | 712 | Covered deeper |
| GaussDB Expert Engineer | 334 | none: platform-locked (Huawei GaussDB) | n/a | Gap (intentional skip) |
| Git Workflow Master | 85 | 67 Developer Productivity (+152-equivalent Jira/Git flow) | 772 | Covered (broader) |
| Internationalization Engineer | 185 | 43 Localization & Internationalization | 549 | Covered deeper |
| Identity & Access Engineer | 197 | 81 Identity & Access Engineering | 707 | Covered deeper |
| Incident Response Commander | 445 | 08 DevOps & SRE (incident command, postmortems, SLO) | 917 | Covered (broader) |
| IoT Fleet Engineer | 149 | 84 Embedded, Firmware & IoT | 689 | Covered deeper |
| IT Service Manager | 562 | 40 IT & Corporate Engineering (ITIL 4, service catalog) | 535 | Covered |
| Knowledge Graph Engineer | 368 | 88 Knowledge Graph & Semantic Data | 529 | Covered deeper |
| LLM Post-Training Engineer | 167 | 49 ML Engineering (SFT/RLHF/post-training) | 704 | Covered (broader) |
| Minimal Change Engineer | 208 | 06 Engineering (minimum-viable-diff discipline) | 967 | Covered (broader) |
| Mobile App Builder | 493 | 48 Mobile Engineering | 675 | Covered deeper |
| Mobile Release Engineer | 164 | 48 Mobile Engineering (signing, fastlane, store submission) | 675 | Covered (broader) |
| Multi-Agent Systems Architect | 601 | 92 Multi-Agent Systems Architecture | 556 | Covered |
| Network Engineer | 240 | 82 Network Engineering | 780 | Covered deeper |
| OrgScript Engineer | 114 | none: proprietary DSL, too narrow to carry a file | n/a | Gap (intentional skip) |
| Payments & Billing Engineer | 195 | 55 Billing & Monetization Engineering | 513 | Covered deeper |
| Privacy Engineer | 153 | 39 Privacy & Data Protection (privacy in code within DPO) | 703 | Covered (broader) |
| Prompt Engineer | 203 | 91 RAG & AI Application (+63 AI Eval) | 560 | Covered (broader) |
| RAG Pipeline Engineer | 438 | 91 RAG & AI Application Engineering | 560 | Covered deeper |
| Rapid Prototyper | 463 | 21 Innovation & Programs (POC/MVP) | 520 | Covered (broader) |
| Realtime Collaboration Engineer | 188 | 86 Streaming & Real-Time Media (WebSocket/CRDT/collab) | 594 | Covered deeper |
| Rust Refactoring Specialist | 314 | none: language-locked (Rust refactoring) | n/a | Gap (intentional skip) |
| Search Relevance Engineer | 238 | 87 Search & Relevance Engineering | 614 | Covered deeper |
| Section 508 Accessibility Specialist | 340 | 78 Accessibility & Inclusive Design (508 is a US-federal slice) | 754 | Covered (broader) |
| Senior Developer | 177 | 06 Engineering (+50 Frontend); stack-specific implementer | 967 | Covered (broader) |
| Software Architect | 113 | 66 Enterprise Architecture (+06 Engineering) | 691 | Covered (broader) |
| Solidity Smart Contract Engineer | 523 | 85 Blockchain & Web3 Engineering | 638 | Covered deeper |
| SRE (Site Reliability Engineer) | 91 | 08 DevOps & SRE | 917 | Covered deeper |
| Technical Writer | 394 | 42 Content, Docs & Technical Writing | 571 | Covered deeper |
| USWDS Developer | 341 | none: platform-locked (US Web Design System) | n/a | Gap (intentional skip) |
| Video Streaming Engineer | 151 | 86 Streaming & Real-Time Media | 594 | Covered deeper |
| Voice AI Integration Engineer | 562 | 89 Voice & Conversational AI | 510 | Covered |
| WebAssembly Engineer | 157 | 50 Frontend and 90 Desktop touch Wasm; no dedicated Wasm-compilation owner | 712 | Partial |
| WeChat Mini Program Developer | 351 | none: platform-locked (WeChat Mini Program) | n/a | Gap (intentional skip) |
| WordPress Performance Engineer | 347 | none: platform-locked (WordPress) | n/a | Gap (intentional skip) |
| WordPress Shopping Cart Engineer | 347 | none: platform-locked (WooCommerce) | n/a | Gap (intentional skip) |

## finance

| Their agent | Their lines | Our equivalent | Our lines | Verdict |
|---|---|---|---|---|
| Bookkeeper & Controller | 261 | 56 Revenue Accounting & Controller | 497 | Covered deeper |
| Financial Analyst | 235 | 18 Finance | 627 | Covered deeper |
| FP&A Analyst | 264 | 18 Finance (budgeting, variance, rolling forecast) | 627 | Covered |
| Investment Researcher | 273 | 47 Deep Research (+45 Corporate Development for diligence/valuation) | 629 | Covered (broader) |
| Tax Strategist | 240 | 57 Tax | 575 | Covered deeper |

## game-development

Maps one-to-one to `verticals/game-development/`, and ours run two to three times longer.

| Their agent | Their lines | Our equivalent | Our lines | Verdict |
|---|---|---|---|---|
| Economy Designer | 157 | verticals/game-development/economy-systems-designer | 614 | Covered deeper |
| Game Audio Engineer | 265 | verticals/game-development/game-audio-engineer | 437 | Covered deeper |
| Game Designer | 168 | verticals/game-development/game-designer | 556 | Covered deeper |
| Level Designer | 209 | verticals/game-development/level-designer | 548 | Covered deeper |
| Narrative Designer | 244 | verticals/game-development/narrative-designer | 573 | Covered deeper |
| Technical Artist | 230 | verticals/game-development/technical-artist | 592 | Covered deeper |

## gis

Their 13 GIS roles collapse onto the six agents in `verticals/gis-geospatial/`. BIM/Revit integration and pure
strategic advisory are the two thin spots.

| Their agent | Their lines | Our equivalent | Our lines | Verdict |
|---|---|---|---|---|
| 3D & Scene Developer | 112 | verticals/gis-geospatial/web-gis-developer | 522 | Covered (broader) |
| GIS Analyst | 92 | verticals/gis-geospatial/geoprocessing-analysis | 423 | Covered (broader) |
| BIM/GIS Specialist | 109 | GIS side in spatial-data-engineer; BIM/Revit/IFC not deeply covered | 561 | Partial |
| Cartography Designer | 151 | verticals/gis-geospatial/cartography-visualization | 526 | Covered deeper |
| Drone/Reality Mapping Specialist | 121 | verticals/gis-geospatial/remote-sensing-photogrammetry | 516 | Covered deeper |
| GeoAI/ML Engineer | 106 | verticals/gis-geospatial/geoai-ml-engineer | 523 | Covered deeper |
| Geoprocessing Specialist | 98 | verticals/gis-geospatial/geoprocessing-analysis | 423 | Covered deeper |
| GIS QA Engineer | 134 | verticals/gis-geospatial/spatial-data-engineer (data integrity, CRS, topology) | 561 | Covered (broader) |
| Solution Engineer | 102 | verticals/gis-geospatial/web-gis-developer (prototype builds) | 522 | Covered (broader) |
| Spatial Data Engineer | 98 | verticals/gis-geospatial/spatial-data-engineer | 561 | Covered deeper |
| Spatial Data Scientist | 112 | verticals/gis-geospatial/geoai-ml-engineer (spatial stats/ML) | 523 | Covered (broader) |
| Technical Consultant | 87 | GIS advisory is spread across the vertical (+33 Partnerships); no dedicated consultant agent | 561 | Partial |
| Web GIS Developer | 109 | verticals/gis-geospatial/web-gis-developer | 522 | Covered deeper |

## healthcare

| Their agent | Their lines | Our equivalent | Our lines | Verdict |
|---|---|---|---|---|
| Clinical Evidence Agent | 232 | verticals/healthcare-clinical/clinical-evidence-informatics | 563 | Covered deeper |
| Healthcare Innovation Strategist | 434 | verticals/healthcare-clinical/health-systems-strategy | 517 | Covered |
| Sovereign Health Systems Agent | 313 | verticals/healthcare-clinical/health-systems-strategy (+28 Government Relations) | 517 | Covered (broader) |

## marketing

Maps to 97 SEO/AEO, 98 Social & Channel, 99 Lifecycle/Email, 31 PMM, 37 Growth, 42 Content, 25 PR, and 76 Market
Expansion. The large China cluster (Baidu, Douyin, WeChat, Xiaohongshu, Weibo, Bilibili, Kuaishou, Zhihu,
cross-border and domestic e-commerce, livestream commerce) folds into 98 for the channel playbook and 76 for the
market-entry mechanics, so most of the division reads Covered (broader). The two partials are craft-level slices
(book ghostwriting, hands-on video editing) that no agent owns end to end.

| Their agent | Their lines | Our equivalent | Our lines | Verdict |
|---|---|---|---|---|
| AEO Foundations Architect | 265 | 97 SEO & Answer-Engine Optimization | 609 | Covered |
| Agentic Search Optimizer | 314 | 97 SEO & Answer-Engine Optimization (agent-readiness within AEO) | 609 | Covered (broader) |
| AI Citation Strategist | 173 | 97 SEO & Answer-Engine Optimization (AI answer-engine visibility) | 609 | Covered (broader) |
| App Store Optimizer | 321 | 96 Performance & Paid Media (+48 Mobile for store metadata) | 585 | Covered (broader) |
| Baidu SEO Specialist | 227 | 98 Social & Channel Marketing (+76 Market Expansion) | 593 | Covered (broader) |
| Bilibili Content Strategist | 200 | 98 Social & Channel Marketing (+76 Market Expansion) | 593 | Covered (broader) |
| Book Co-Author | 111 | thought-leadership authoring lives in 25 PR; no dedicated book/ghostwriting collaborator | 653 | Partial |
| Carousel Growth Engine | 200 | 98 Social & Channel Marketing (short-form content) | 593 | Covered (broader) |
| China E-Commerce Operator | 284 | 76 Market Expansion (+98 Social & Channel) | 784 | Covered (broader) |
| China Market Localization Strategist | 284 | 76 Market Expansion (+43 Localization) | 784 | Covered (broader) |
| Content Creator | 54 | 42 Content, Docs & Technical Writing (+98 Social) | 571 | Covered (broader) |
| Cross-Border E-Commerce Specialist | 260 | 76 Market Expansion & Country Launch | 784 | Covered (broader) |
| Douyin Strategist | 150 | 98 Social & Channel Marketing (+76 Market Expansion) | 593 | Covered (broader) |
| Email Marketing Strategist | 250 | 99 Lifecycle & Email Marketing | 569 | Covered deeper |
| Global Podcast Strategist | 207 | 98 Social & Channel Marketing (podcast as a channel) | 593 | Covered (broader) |
| Growth Hacker | 54 | 37 Growth (PLG & Growth Engineering) | 598 | Covered deeper |
| Instagram Curator | 113 | 98 Social & Channel Marketing | 593 | Covered (broader) |
| Kuaishou Strategist | 224 | 98 Social & Channel Marketing (+76 Market Expansion) | 593 | Covered (broader) |
| LinkedIn Content Creator | 215 | 98 Social & Channel Marketing | 593 | Covered (broader) |
| Livestream Commerce Coach | 306 | 98 Social & Channel Marketing (+76 Market Expansion) | 593 | Covered (broader) |
| Multi-Platform Publisher | 218 | 98 Social & Channel Marketing (multi-channel syndication) | 593 | Covered (broader) |
| Podcast Strategist | 278 | 98 Social & Channel Marketing (+76 for the China audio platforms) | 593 | Covered (broader) |
| PR & Communications Manager | 474 | 25 PR & Communications | 653 | Covered deeper |
| Private Domain Operator | 309 | 99 Lifecycle & Email Marketing (+76 Market Expansion for WeCom) | 569 | Covered (broader) |
| Reddit Community Builder | 123 | 54 Community (+98 Social) | 463 | Covered (broader) |
| SEO Specialist | 371 | 97 SEO & Answer-Engine Optimization | 609 | Covered deeper |
| Short-Video Editing Coach | 413 | short-video strategy in 98; hands-on CapCut/Premiere editing craft not owned | 593 | Partial |
| Social Media Strategist | 126 | 98 Social & Channel Marketing | 593 | Covered deeper |
| TikTok Strategist | 125 | 98 Social & Channel Marketing | 593 | Covered (broader) |
| Twitter Engager | 126 | 98 Social & Channel Marketing | 593 | Covered (broader) |
| Video Optimization Specialist | 120 | 98 Social & Channel Marketing (YouTube channel play) | 593 | Covered (broader) |
| WeChat Official Account Manager | 146 | 98 Social & Channel Marketing (+76 Market Expansion) | 593 | Covered (broader) |
| Weibo Strategist | 241 | 98 Social & Channel Marketing (+76 Market Expansion) | 593 | Covered (broader) |
| X/Twitter Intelligence Analyst | 162 | 47 Deep Research & Market Intelligence (+98 Social) | 629 | Covered (broader) |
| Xiaohongshu Specialist | 139 | 98 Social & Channel Marketing (+76 Market Expansion) | 593 | Covered (broader) |
| Zhihu Strategist | 163 | 98 Social & Channel Marketing (+76 Market Expansion) | 593 | Covered (broader) |

## paid-media

Their seven 72-line paid-media agents are all facets of one owner, 96 Performance & Paid Media, which is eight
times longer than any of them.

| Their agent | Their lines | Our equivalent | Our lines | Verdict |
|---|---|---|---|---|
| Paid Media Auditor | 72 | 96 Performance & Paid Media | 585 | Covered (broader) |
| Ad Creative Strategist | 72 | 96 Performance & Paid Media | 585 | Covered (broader) |
| Paid Social Strategist | 72 | 96 Performance & Paid Media | 585 | Covered (broader) |
| PPC Campaign Strategist | 72 | 96 Performance & Paid Media | 585 | Covered (broader) |
| Programmatic & Display Buyer | 72 | 96 Performance & Paid Media | 585 | Covered (broader) |
| Search Query Analyst | 72 | 96 Performance & Paid Media | 585 | Covered (broader) |
| Tracking & Measurement Specialist | 72 | 96 Performance & Paid Media (+16 Analytics) | 585 | Covered (broader) |

## product

| Their agent | Their lines | Our equivalent | Our lines | Verdict |
|---|---|---|---|---|
| Behavioral Nudge Engine | 81 | 37 Growth (behavioural design within growth) | 598 | Covered (broader) |
| Feedback Synthesizer | 119 | 35 User Research & Insights | 535 | Covered (broader) |
| Product Manager | 470 | 03 Strategy + 04 PRD (our 02-04 product suite) | 547 | Covered deeper |
| Sprint Prioritizer | 154 | 41 Technical Program Management | 522 | Covered (broader) |
| Trend Researcher | 159 | 47 Deep Research & Market Intelligence | 629 | Covered deeper |

## project-management

| Their agent | Their lines | Our equivalent | Our lines | Verdict |
|---|---|---|---|---|
| Experiment Tracker | 198 | 79 Data Science & Experimentation | 780 | Covered (broader) |
| Jira Workflow Steward | 231 | 41 Technical Program Management (+67 Developer Productivity) | 522 | Covered (broader) |
| Meeting Notes Specialist | 96 | none: single-use utility (transcript-to-summary) | n/a | Gap (intentional skip) |
| Project Shepherd | 194 | 41 Technical Program Management | 522 | Covered deeper |
| Studio Operations | 200 | 19 Operations (+20 BAU) | 666 | Covered (broader) |
| Studio Producer | 203 | 41 Technical Program Management (+62 Chief of Staff for portfolio) | 522 | Covered (broader) |
| Senior Project Manager | 136 | 41 Technical Program Management | 522 | Covered (broader) |

## research

| Their agent | Their lines | Our equivalent | Our lines | Verdict |
|---|---|---|---|---|
| Research Synthesist | 137 | 47 Deep Research & Market Intelligence | 629 | Covered deeper |

## sales

Maps to 100 Sales Enablement & Deal Strategy, 51 Solutions Engineering, 32 Sales/RevOps, and 17 Customer Success
for post-sale.

| Their agent | Their lines | Our equivalent | Our lines | Verdict |
|---|---|---|---|---|
| Account Strategist | 228 | 17 Customer Success (land-and-expand, NRR; +100) | 540 | Covered (broader) |
| Sales Coach | 272 | 100 Sales Enablement & Deal Strategy | 618 | Covered |
| Deal Strategist | 181 | 100 Sales Enablement & Deal Strategy (MEDDPICC, win planning) | 618 | Covered deeper |
| Discovery Coach | 226 | 100 Sales Enablement & Deal Strategy (discovery methodology) | 618 | Covered (broader) |
| Sales Engineer | 183 | 51 Solutions Engineering (Pre-Sales) | 602 | Covered deeper |
| Offer & Lead Gen Strategist | 258 | 32 Sales & Revenue Operations (+37 Growth) | 641 | Covered (broader) |
| Outbound Strategist | 202 | 32 Sales & Revenue Operations (+100 Enablement) | 641 | Covered (broader) |
| Pipeline Analyst | 268 | 32 Sales & Revenue Operations (pipeline health, forecast) | 641 | Covered (broader) |
| Proposal Strategist | 218 | 100 Sales Enablement & Deal Strategy (+51 for RFP responses) | 618 | Covered (broader) |

## security

Maps to 09 Security, 93 Offensive Security, 94 Threat Intelligence & Detection, 95 Application & Product Security,
plus 11 Compliance, 81 Identity, and 85 Blockchain.

| Their agent | Their lines | Our equivalent | Our lines | Verdict |
|---|---|---|---|---|
| AI-Generated Code Security Auditor | 208 | 95 Application & Product Security (+93 Offensive) | 622 | Covered (broader) |
| Application Security Engineer | 491 | 95 Application & Product Security | 622 | Covered deeper |
| Security Architect | 305 | 09 Security | 1125 | Covered deeper |
| Blockchain Security Auditor | 464 | 85 Blockchain & Web3 (chain security within the engineering owner; +93) | 638 | Covered (broader) |
| Cloud Security Architect | 523 | 09 Security (cloud zero-trust; +08 DevOps, +95 AppSec) | 1125 | Covered (broader) |
| Compliance Auditor | 159 | 11 Compliance & Ethics (SOC2/ISO/HIPAA/PCI; +59 Internal Audit) | 1164 | Covered (broader) |
| Incident Responder | 437 | 94 Threat Intelligence & Detection (DFIR, breach response) | 607 | Covered deeper |
| Penetration Tester | 399 | 93 Offensive Security & Penetration Testing | 629 | Covered deeper |
| Secrets & Credential Hygiene Engineer | 177 | 81 Identity & Access Engineering (+95 AppSec) | 707 | Covered (broader) |
| Senior SecOps Engineer | 750 | 95 Application & Product Security (+94 Detection for the SOC side) | 622 | Covered (broader) |
| Threat Detection Engineer | 535 | 94 Threat Intelligence & Detection | 607 | Covered deeper |
| Threat Intelligence Analyst | 644 | 94 Threat Intelligence & Detection | 607 | Covered |

## spatial-computing

Maps to `verticals/spatial-xr/`. Terminal Integration (a SwiftTerm emulator utility) is an intentional skip: it is
not really a spatial role at all.

| Their agent | Their lines | Our equivalent | Our lines | Verdict |
|---|---|---|---|---|
| macOS Spatial/Metal Engineer | 337 | verticals/spatial-xr/spatial-platform-engineer | 648 | Covered deeper |
| Terminal Integration Specialist | 70 | none: narrow SwiftTerm terminal-emulation utility | n/a | Gap (intentional skip) |
| visionOS Spatial Engineer | 54 | verticals/spatial-xr/spatial-platform-engineer | 648 | Covered deeper |
| XR Cockpit Interaction Specialist | 33 | verticals/spatial-xr/xr-interaction-designer | 671 | Covered (broader) |
| XR Immersive Developer | 33 | verticals/spatial-xr/immersive-experience-developer | 643 | Covered deeper |
| XR Interface Architect | 33 | verticals/spatial-xr/xr-interaction-designer | 671 | Covered deeper |

## specialized

Their catch-all division. Each row is judged individually. It holds most of the vertical-industry agents (legal,
real estate, loan officer, medical billing, hospitality, retail, civil engineering, master planning), a run of
executive C-suite functions that map cleanly onto our numbered core, a cluster of agent-infrastructure roles that
map to 92 Multi-Agent Systems, and the residue of single-use utilities and two open gaps.

| Their agent | Their lines | Our equivalent | Our lines | Verdict |
|---|---|---|---|---|
| Accounts Payable Agent | 186 | 46 Procurement & Supply Chain (+56 Controller for the ledger) | 601 | Covered (broader) |
| Agentic Identity & Trust Architect | 388 | 92 Multi-Agent Systems Architecture (+81 Identity) | 556 | Covered (broader) |
| Agents Orchestrator | 367 | 92 Multi-Agent Systems Architecture | 556 | Covered (broader) |
| Automation Governance Architect | 217 | 40 IT & Corporate Engineering (automation governance; +92) | 535 | Covered (broader) |
| Business Strategist | 489 | 03 Strategy | 585 | Covered deeper |
| Change Management Consultant | 498 | change touched in 22 People/HR and 74 Internal Comms; no dedicated ADKAR/Kotter agent | 611 | Partial |
| Chief Financial Officer | 389 | 18 Finance | 627 | Covered deeper |
| Corporate Training Designer | 193 | 23 Learning & Development (+53 Customer Education) | 561 | Covered (broader) |
| Customer Service | 399 | 64 Customer Support | 780 | Covered deeper |
| Customer Success Manager | 461 | 17 Customer Success | 540 | Covered |
| Data Consolidation Agent | 61 | none: single-use utility (sales-data consolidation) | n/a | Gap (intentional skip) |
| Data Privacy Officer | 413 | 39 Privacy & Data Protection (DPO) | 703 | Covered deeper |
| ESG & Sustainability Officer | 397 | 27 ESG & Sustainability | 625 | Covered deeper |
| Government Digital Presales Consultant | 364 | 28 Government Relations (+76 Market Expansion, +51 Solutions Eng) | 643 | Covered (broader) |
| Grant Writer | 512 | none: nonprofit/research grant writing not owned (proposal craft in 100/25 is adjacent, not equivalent) | n/a | Gap (open) |
| Aging Parent Care Companion | 415 | verticals/healthcare-clinical/patient-access-services | 514 | Covered (broader) |
| Healthcare Customer Service | 390 | verticals/healthcare-clinical/patient-access-services (+64 Support) | 514 | Covered (broader) |
| Healthcare Marketing Compliance Specialist | 396 | verticals/healthcare-clinical/healthcare-compliance-hipaa (+76 for China ad law) | 603 | Covered (broader) |
| Hospitality Guest Services | 604 | verticals/service-industries/hospitality-guest-services | 556 | Covered |
| HR Onboarding | 452 | 22 People & HR | 611 | Covered (broader) |
| Identity Graph Operator | 261 | 92 Multi-Agent Systems Architecture (+88 Knowledge Graph) | 556 | Covered (broader) |
| Language Translator | 265 | 43 Localization & Internationalization | 549 | Covered (broader) |
| Legal Billing & Time Tracking | 570 | verticals/legal-practice/legal-billing-practice-operations | 565 | Covered |
| Legal Client Intake | 493 | verticals/legal-practice/client-intake-matter-management | 633 | Covered deeper |
| Legal Document Review | 455 | verticals/legal-practice/document-review-ediscovery | 609 | Covered deeper |
| Loan Officer Assistant | 556 | verticals/financial-services/lending-mortgage-advisory | 580 | Covered |
| LSP/Index Engineer | 314 | 67 Developer Productivity & Internal Platform (code-intelligence tooling) | 772 | Covered (broader) |
| M&A Integration Manager | 428 | 45 Corporate Development & M&A | 616 | Covered deeper |
| Medical Billing & Coding Specialist | 492 | verticals/healthcare-clinical/medical-billing-coding | 529 | Covered |
| Operations Manager | 400 | 19 Operations | 666 | Covered deeper |
| Organizational Psychologist | 392 | 24 Wellness & Performance (+22 People & HR) | 590 | Covered (broader) |
| Personal Growth Mentor | 160 | 24 Wellness & Performance (individual growth within wellbeing) | 590 | Covered (broader) |
| Real Estate Buyer & Seller | 597 | verticals/real-estate/buyer-seller-representation | 631 | Covered |
| Recruitment Specialist | 510 | 60 Talent Acquisition | 580 | Covered deeper |
| Report Distribution Agent | 66 | none: single-use utility (report distribution) | n/a | Gap (intentional skip) |
| Resume Tailor | 231 | none: candidate-side single-use utility | n/a | Gap (intentional skip) |
| Retail Customer Returns | 567 | verticals/service-industries/retail-operations-merchandising (returns is one slice) | 575 | Covered (broader) |
| Sales Data Extraction Agent | 68 | none: single-use utility (Excel sales-metric extraction) | n/a | Gap (intentional skip) |
| Sales Outreach | 426 | 32 Sales & Revenue Operations (+100 Enablement) | 641 | Covered (broader) |
| Chief of Staff | 280 | 62 Chief of Staff & Business Operations | 614 | Covered deeper |
| Civil Engineer | 357 | verticals/aec-built-environment/civil-structural-engineering | 633 | Covered deeper |
| Codebase Archaeologist | 341 | 67 Developer Productivity & Internal Platform (+06 Engineering) | 772 | Covered (broader) |
| Cultural Intelligence Strategist | 89 | 78 Accessibility & Inclusive Design (+43 Localization) | 754 | Covered (broader) |
| Developer Advocate | 318 | 34 Developer Relations & Developer Experience | 626 | Covered deeper |
| Document Generator | 56 | none: single-use utility (PDF/PPTX/DOCX/XLSX generation) | n/a | Gap (intentional skip) |
| FedRAMP & RMF Compliance Engineer | 379 | 11 Compliance & Ethics (+72 Regulatory Affairs) | 1164 | Covered (broader) |
| French Consulting Market Navigator | 195 | 76 Market Expansion at principle level; France ESN/portage specifics not covered | 784 | Partial |
| Korean Business Navigator | 217 | 76 Market Expansion at principle level; Korea-specific etiquette/process not covered | 784 | Partial |
| Master Plan Architect | 158 | 06 Engineering (ADRs, implementation plans) + 00 Chief Reviewer / 01 Proactive Advisor (red-team critique) | 967 / 528 | Covered (broader) |
| MCP Builder | 248 | 92 Multi-Agent Systems Architecture (tool/server design) | 556 | Covered (broader) |
| Model QA Specialist | 489 | 63 AI Evaluation & Red-Teaming (+49 ML Engineering) | 547 | Covered (broader) |
| Pricing Analyst | 244 | 36 Pricing & Monetization | 704 | Covered deeper |
| Salesforce Architect | 183 | CRM/RevOps in 32; Salesforce-specific platform architecture not owned | 641 | Partial |
| Strategy Duel Agent | 131 | 03 Strategy (game-theory framing within strategy) | 585 | Covered (broader) |
| Workflow Architect | 598 | 92 Multi-Agent Systems Architecture (workflow-tree design) | 556 | Covered (broader) |
| Study Abroad Advisor | 283 | none: study-abroad advising not covered (academic-research is method, not admissions) | n/a | Gap (open) |
| Supply Chain Strategist | 583 | 46 Procurement & Supply Chain | 601 | Covered deeper |
| ZK Steward | 212 | 88 Knowledge Graph & Semantic Data (knowledge-base method) | 529 | Covered (broader) |

## support

| Their agent | Their lines | Our equivalent | Our lines | Verdict |
|---|---|---|---|---|
| Analytics Reporter | 365 | 16 Analytics & Intelligence | 621 | Covered deeper |
| Executive Summary Generator | 213 | 62 Chief of Staff & Business Operations (+47 Deep Research) | 614 | Covered (broader) |
| Finance Tracker | 442 | 18 Finance (+20 BAU) | 627 | Covered (broader) |
| Infrastructure Maintainer | 618 | 08 DevOps & SRE | 917 | Covered deeper |
| Legal Compliance Checker | 588 | 11 Compliance & Ethics | 1164 | Covered deeper |
| Support Responder | 585 | 64 Customer Support | 780 | Covered deeper |

## testing

Maps to 07 Testing & QA, 78 Accessibility, 08 DevOps for performance, and 00 Chief Reviewer for the
certification-gate personas.

| Their agent | Their lines | Our equivalent | Our lines | Verdict |
|---|---|---|---|---|
| Accessibility Auditor | 317 | 78 Accessibility & Inclusive Design | 754 | Covered deeper |
| API Tester | 306 | 07 Testing & QA (+80 API Platform) | 616 | Covered (broader) |
| Evidence Collector | 211 | 07 Testing & QA (evidence-based QA) | 616 | Covered (broader) |
| Performance Benchmarker | 268 | 07 Testing & QA (+08 DevOps for load/perf) | 616 | Covered (broader) |
| Reality Checker | 250 | 00 Chief Reviewer (evidence-based certification gate) | 528 | Covered (broader) |
| Test Automation Engineer | 180 | 07 Testing & QA (Playwright/Cypress E2E) | 616 | Covered deeper |
| Test Results Analyzer | 305 | 07 Testing & QA (quality-metrics analysis) | 616 | Covered (broader) |
| Tool Evaluator | 394 | 40 IT & Corporate Engineering (+21 Innovation for assessment) | 535 | Covered (broader) |
| Workflow Optimizer | 450 | 19 Operations (process improvement; +20 BAU) | 666 | Covered (broader) |

## Verdict tally (all 258 audited)

| Verdict | Count |
|---|---|
| Covered deeper | 81 |
| Covered | 18 |
| Covered (broader) | 127 |
| Partial | 10 |
| Gap (now filled) | 0 |
| Gap (intentional skip) | 19 |
| Gap (open) | 3 |
| **Total** | **258** |

Covered-at-any-depth (deeper + comparable + broader) is 226 of 258, or 88 percent. The reason `Gap (now filled)`
reads 0 is explained in the intro: the agents that filled the division-level gaps (80 to 100 and the `verticals/`
tree) are already in the roster this map scores, so they surface as Covered rather than as gaps.

### The three genuinely open gaps (the useful list)

1. **Image Prompt Engineer** (design, 237): crafting prompts for AI image/video generation. Our 05 Design owns
   visual direction and 91 owns LLM prompting, but nobody owns image-generation prompt craft.
2. **Grant Writer** (specialized, 512): nonprofit, research and social-enterprise grant writing (prospect research,
   letters of inquiry, full proposals, reporting). Proposal craft in 100 and 25 is adjacent but not equivalent.
3. **Study Abroad Advisor** (specialized, 283): admissions strategy and application planning across US/UK/CA/AU/EU
   and APAC. Our academic-research vertical is research method, not admissions advising.

### The ten partials (covered in part)

Email Intelligence Engineer (email-thread parsing), WebAssembly Engineer (no dedicated Wasm-compilation owner),
BIM/GIS Specialist (BIM/Revit side), GIS Technical Consultant (no dedicated GIS advisory agent), Book Co-Author
(book ghostwriting), Short-Video Editing Coach (hands-on editing craft), Change Management Consultant (no dedicated
ADKAR/Kotter agent), French Consulting Market Navigator (France-specific), Korean Business Navigator
(Korea-specific), and Salesforce Architect (Salesforce-specific platform architecture).

These thirteen non-covered rows (3 open, 10 partial), plus the 19 deliberate single-use or platform-locked skips,
are the entire remaining delta against a 258-agent breadth catalogue.
