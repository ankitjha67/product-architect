# The Founder's Playbook: Zero to Legend

## Purpose
This is the ONE document a solo founder reads on Day 0. It answers: What do I do?
In what order? How much does it cost? When do I hire? When do I raise? How do I
not die? Every other agent and framework provides depth — this provides SEQUENCE.

---

## WEEK 0: Before Writing a Single Line of Code

### Vision, Mission & Values

```
VISION (what the world looks like if you succeed — 10-year horizon):
Template: "A world where [target users] can [desired outcome] without [current pain]."
Example: "A world where every small business in India can accept payments as easily as cash."
Rules: Aspirational. Not about your product — about the WORLD your product creates.
       Should make you emotional. If it doesn't, it's not big enough.

MISSION (how you'll make the vision real — 3-year horizon):
Template: "We [action] for [target users] by [method], enabling them to [outcome]."
Example: "We build instant digital payment tools for India's 60M small businesses,
enabling them to grow revenue and serve customers better."
Rules: Specific, actionable, measurable progress toward the vision.

VALUES (how you behave on the journey — these are your hiring/firing criteria):
DON'T: List generic values ("integrity, innovation, teamwork" — meaningless).
DO: List specific behaviors with examples of what they look like in practice.

EXAMPLE VALUES:
- "Users first, revenue second": We will NEVER ship a dark pattern. If user value and
  revenue conflict, users win. Always.
- "Speed over perfection": Ship in days, not months. 80% today beats 100% next quarter.
  BUT: Never ship security bugs. Speed applies to features, not safety.
- "Disagree then commit": Debate hard in the room. Once decided, execute as one team.
  Passive resistance is worse than open disagreement.
- "Default to transparent": Share metrics, share failures, share context. The only secrets
  are personnel issues and pre-announcement legal matters.

WRITE THESE DOWN DAY 0. Revisit annually. Never violate them, even when it's expensive.
```

### Legal Foundation (Day 0 costs: ₹15-50K)

```
INDIA PATH:
□ Incorporate Private Limited Company via MCA portal
  - Cost: ₹8-15K (via CA/CS, includes government fees)
  - Timeline: 7-15 days
  - Documents: PAN, Aadhaar, address proof, passport-size photo of directors
  - Minimum 2 directors, 2 shareholders (can be same people)
  - Authorized capital: ₹10L initially (sufficient for seed stage)
□ Register for GST (if turnover expected >₹40L goods / ₹20L services)
□ Open current (business) bank account (ICICI Startup, HDFC, Razorpay X)
□ Register on Startup India (DPIIT recognition — free, gives tax benefits)
□ File for trademark of your brand name (₹4,500 government fee)

US PATH:
□ Incorporate C-Corp in Delaware via Stripe Atlas / Clerky / FirstBase
  - Cost: $500-2,000 (including registered agent for 1 year)
  - Timeline: 1-3 days
□ Get EIN from IRS (free, online)
□ Open business bank account (Mercury, Brex, SVB)
□ File 83(b) election within 30 days of receiving founder shares (CRITICAL — saves massive taxes later)

WEBSITE LEGAL REQUIREMENTS (before going live):
□ Privacy Policy — MANDATORY everywhere. What data you collect, why, how you protect it.
  Use a template from iubenda, Termly, or have a lawyer draft (₹10-30K)
□ Terms of Service — MANDATORY. Liability limits, acceptable use, dispute resolution.
□ Cookie Policy + Consent Banner — MANDATORY for EU/UK users, best practice globally.
  Use Cookiebot, OneTrust, or CookieYes
□ Refund/Cancellation Policy — MANDATORY for e-commerce (Consumer Protection Act India)
□ Impressum — MANDATORY for Germany/Austria (company details on website)

WEBSITE FOOTER (what MUST be there legally):
□ © [Year] [Company Name]. All rights reserved.
□ Links: Privacy Policy | Terms of Service | Cookie Policy | Refund Policy
□ Company registration: CIN number (India) or incorporation state (US)
□ GST number (India, if registered)
□ Registered address
□ Grievance Officer contact (India — mandatory for platforms)
□ "Made in India" / country of origin (if applicable)
□ Accessibility statement (increasingly required — EU, US Section 508)
```

---

## WEEK 1-2: Validate Before You Build

```
COST: ₹0-5K (mostly your time)

□ Talk to 30 potential users (minimum). Not friends — strangers who have the problem.
  Ask: "Tell me about the last time you experienced [problem]."
  DON'T ask: "Would you use an app that does X?" (everyone says yes, nobody means it)

□ Map the competitive landscape (Agent 02 Discovery)
  - Use every competitor's product personally
  - Read their 1-star App Store reviews (= their failures = your opportunity)

□ Write your ONE-SENTENCE hypothesis:
  "I believe [users] will [behavior] if I provide [solution], and I'll know it's true
  when I see [metric] reach [threshold] within [timeframe]."

□ Decision gate: GO / PIVOT / KILL
  - If 20+ of 30 people describe the problem passionately → GO
  - If 10-20 describe it mildly → PIVOT (maybe different angle on same problem)
  - If <10 care → KILL this idea, find a better problem
```

## WEEK 3-4: Design the MVP (NOT the Full Product)

```
COST: ₹0-30K (design tools, maybe a freelance designer)

□ Define the core value loop (Agent 03 Strategy + MVP Framework):
  [User action] → [System delivers value] → [User gets outcome]
  Example: Browse restaurants → Order food → Food arrives

□ Apply the CUT TEST to every feature:
  "Can a user complete the core loop WITHOUT this?" YES → Cut it.
  Typical MVP: 3-5 screens. Signup + core flow + done.

□ Design the screens (Agent 05 + anti-slop-design skill)
  - Use Figma (free for 3 projects)
  - Design: Default + Loading + Empty + Error states for each screen
  - Don't obsess over pixel-perfection — focus on flow clarity

□ Write the PRD for MVP features ONLY (Agent 04 + PRD Framework)
```

## WEEK 5-10: Build the MVP

```
COST: ₹0-5L (depending on team vs. solo, hosting, tools)

SOLO FOUNDER (no co-founder, building yourself):
- Tech stack: Whatever you know best. Ship speed > architecture perfection.
- Hosting: Vercel/Railway/Render free tier → AWS/GCP when you need scale
- Database: Supabase (free tier) or PlanetScale or Railway Postgres
- Payments: Razorpay (India) or Stripe (global) — sandbox first
- Analytics: PostHog (free, self-hosted) or Mixpanel free tier
- Monitoring: Sentry free tier
- Total monthly cost: ₹0-5K on free tiers

WITH CO-FOUNDER / SMALL TEAM (2-3 people):
- Same stack, faster velocity
- ESOP pool: Set up 10-15% before any external investment
- Founder agreement: Vesting, IP assignment, roles, what happens if someone leaves

OUTSOURCING (if non-technical founder):
- Agency: ₹3-15L for MVP (be VERY specific with requirements)
- Freelancer: ₹1-5L for MVP (higher risk, needs strong project management)
- No-code: ₹0-1L (Bubble, FlutterFlow — fine for validation, plan to rebuild)
- WARNING: Own your code. Ensure contract gives you full IP ownership.

TIMELINE: 6-8 weeks maximum. If it's taking longer, you're building too much.
```

## WEEK 11-14: Launch & Learn

```
COST: ₹5-20K (marketing, tools)

□ Soft launch to 50-200 hand-picked users
  - Friends of friends, communities, early waitlist signups
  - Personal outreach: "I built this to solve [problem]. Would you try it and tell me honestly?"

□ Track these metrics from Day 1 (Agent 16):
  - Signup → First value action (activation rate) — target: >30%
  - D1 / D7 retention — are they coming back?
  - Core action completion rate — does the thing actually work?
  - NPS: "How likely to recommend?" — target: >30

□ Talk to EVERY early user. Not surveys — actual conversations.
  "What almost made you stop? What confused you? What's missing?"

□ Fix the top 3 things that prevent activation or retention. Nothing else matters yet.
```

---

## FUNDRAISING ROADMAP BY STAGE

### Pre-Seed / Friends & Family

```
WHEN: You have an idea + initial validation (30+ user interviews)
RAISE: ₹10-50L ($10-50K)
FROM: Personal savings, friends, family, angel investors
VALUATION: ₹1-5 Cr ($100K-500K) — often a convertible note/SAFE to avoid valuation discussion
WHAT YOU NEED: Pitch (verbal, 5 min), 1-page summary, demo or prototype
WHAT YOU USE IT FOR: Build MVP, survive 4-6 months
```

### Seed

```
WHEN: MVP live, early users (100-1000), initial retention signal
RAISE: ₹50L-5Cr ($50K-500K)
FROM: Angel investors, micro-VCs, accelerators (Y Combinator, Antler, 100X.VC)
VALUATION: ₹5-30 Cr ($500K-3M)
WHAT YOU NEED:
  □ Pitch deck (10-12 slides — see below)
  □ Product demo (live, not screenshots)
  □ Metrics: Users, retention, activation rate, growth rate
  □ Cap table, incorporation docs
  □ Clear plan: What will you do with this money? How does it get you to Series A?
WHAT YOU USE IT FOR: Hire first 3-5 people, achieve product-market fit, prove unit economics
TIMELINE: 2-4 months of fundraising
```

### Series A

```
WHEN: Product-market fit proven, ₹10-50L MRR or equivalent traction, clear growth path
RAISE: ₹5-50 Cr ($500K-5M)
FROM: Institutional VCs (Sequoia, Accel, Matrix, Elevation for India)
VALUATION: ₹50-200 Cr ($5-20M)
WHAT YOU NEED:
  □ Pitch deck (12-15 slides, data-heavy)
  □ Detailed financial model (3-year P&L, unit economics, cohort analysis) — Agent 18
  □ Data room: Financials, legal docs, cap table, contracts, metrics dashboard access
  □ Clear answer to: "Why will this be a $100M+ company?"
WHAT YOU USE IT FOR: Scale team (15-40 people), grow 3-5x, build competitive moat
```

### Series B+

```
WHEN: Proven growth engine, strong unit economics, clear market leadership path
RAISE: ₹50-500 Cr ($5-50M)
FROM: Growth-stage VCs, PE firms, strategic investors
WHAT YOU NEED:
  □ Everything from Series A, plus:
  □ Audited financials (Ind AS / IFRS)
  □ Board governance in place (Agent 26)
  □ Compliance infrastructure (Agent 11)
  □ International expansion plan (if applicable)
```

### Pitch Deck Structure (10-12 slides)

```
SLIDE 1: Title — Company name, one-line description, your name
SLIDE 2: Problem — Specific, painful, validated with data
SLIDE 3: Solution — Your product, clear value proposition
SLIDE 4: Demo / Product — Screenshots or live demo (NOT mockups if product is live)
SLIDE 5: Market — TAM/SAM/SOM with credible sources (bottom-up, not fantasy)
SLIDE 6: Business Model — How you make money, pricing, unit economics
SLIDE 7: Traction — Metrics graph going up and to the right (if you have it)
SLIDE 8: Competition — Honest positioning (matrix, not "we have no competitors")
SLIDE 9: Team — Why THIS team? Relevant experience, unfair advantage
SLIDE 10: Financials — Revenue projection, key assumptions, path to profitability
SLIDE 11: Ask — How much, what you'll do with it, milestones it enables
SLIDE 12: Appendix — Detailed metrics, customer quotes, technical architecture

RULES:
- Less text, more visuals. If you can't explain a slide in 30 seconds, simplify it.
- No clip art, no stock photos, no AI-generated images. Real product, real data, real team.
- Practice 50+ times. Record yourself. Fix the parts where you hesitate.
```

---

## COST ESTIMATION BY COMPANY STAGE

```
STAGE: Solo Founder (pre-revenue)
Monthly burn: ₹20-50K
  Hosting/tools: ₹2-5K (free tiers)
  Domain/email: ₹500
  Legal/compliance: ₹2-5K (amortized)
  Your living costs: ₹15-40K
Runway needed: 6-12 months = ₹1.2-6L

STAGE: Seed (3-5 people)
Monthly burn: ₹3-8L
  Salaries: ₹2-5L (early employees accept below-market + equity)
  Hosting/tools: ₹10-30K (graduated from free tiers)
  Office/coworking: ₹20-50K (or remote = ₹0)
  Marketing: ₹20-50K (initial experiments)
  Legal/accounting: ₹10-20K
Runway needed: 12-18 months = ₹36L-1.5Cr

STAGE: Series A (15-30 people)
Monthly burn: ₹20-50L
  Salaries: ₹12-35L (see compensation-bands.md for exact ranges)
  Hosting/infra: ₹1-3L (scaling)
  Office: ₹1-3L
  Marketing: ₹3-10L
  Tools/software: ₹1-3L
  Legal/compliance: ₹50K-1L
Runway needed: 18-24 months = ₹3.6-12 Cr → raise accordingly

STAGE: Series B (40-100 people)
Monthly burn: ₹60L-2Cr
  Salaries: ₹40L-1.5Cr
  Infra: ₹3-10L
  Marketing: ₹10-30L
  Office: ₹3-8L
  Everything else: ₹5-15L
Runway needed: 18-24 months = ₹10-48 Cr

RULE OF THUMB:
Raise enough for 18-24 months of runway.
Start fundraising when you have 6-9 months left.
Fundraising takes 3-6 months. Don't start too late.
```

---

## THE COMPLETE WEBSITE CHECKLIST (Zero to Legend)

### Legal & Compliance Pages (MANDATORY before launch)

```
□ Privacy Policy page (/privacy)
  - What personal data you collect (exhaustive list)
  - Legal basis for processing (consent, contract, legitimate interest)
  - How data is used, stored, protected, shared
  - User rights (access, deletion, portability, objection)
  - Cookie usage details
  - Data retention periods
  - DPO/contact information
  - Last updated date

□ Terms of Service page (/terms)
  - Acceptance of terms
  - Service description and limitations
  - User responsibilities and acceptable use
  - Intellectual property (your IP and user-generated content)
  - Payment terms, refunds, cancellation
  - Limitation of liability and warranty disclaimers
  - Dispute resolution (arbitration clause, jurisdiction)
  - Termination conditions
  - Modification policy (how you'll notify of changes)
  - Governing law

□ Cookie Policy page (/cookies)
  - Categories: Essential, functional, analytics, marketing
  - Specific cookies listed with purpose and expiry
  - How to opt out / manage preferences
  - Cookie consent mechanism (not just a banner — actual consent)

□ Refund/Cancellation Policy (/refund)
  - Eligibility criteria
  - Process and timeline
  - Method of refund (original payment method)
  - Non-refundable items/services
  - Cooling-off period (where legally required)

□ Accessibility Statement (/accessibility)
  - WCAG conformance level (target: AA)
  - Known limitations
  - How to report accessibility issues
  - Contact information

□ Security page (/security) — optional but builds trust
  - How you protect user data
  - Certifications (SOC 2, ISO 27001 if obtained)
  - Responsible disclosure / bug bounty program
  - Contact for security issues
```

### Website Footer Requirements

```
EVERY PAGE FOOTER MUST INCLUDE:
□ © [Year] [Legal Entity Name]. All rights reserved.
□ Navigation: Privacy Policy | Terms | Cookies | Refund Policy | Accessibility
□ Company information:
  - CIN: [Company Identification Number] (India Pvt Ltd)
  - GSTIN: [GST Number] (if registered)
  - Registered Office: [Full address]
□ Contact: support@company.com or contact page link
□ Grievance Officer: [Name, email] (MANDATORY in India for intermediaries/e-commerce)
□ Social links (if applicable)
□ "Made with ♥ in [City]" — optional, adds personality

FOR SPECIFIC INDUSTRIES:
□ Financial products: "Investments are subject to market risk..." disclaimers
□ Healthcare: "Not a substitute for medical advice" disclaimers
□ Food: FSSAI license number (India)
□ Real estate: RERA registration number (India)
□ E-commerce: Return/exchange policy link, customer care number
```

---

## SCALING MILESTONES CHECKLIST

```
□ 100 USERS: You exist. Get qualitative feedback from every single one.
□ 1,000 USERS: Product-market fit signal. Measure retention seriously.
□ 10,000 USERS: Growth engine needs to work. Hire your first marketer.
□ 50,000 USERS: Operations matter. Hire ops/support. Formalize processes.
□ 100,000 USERS: You're a real company. Need proper finance, legal, HR.
□ 500,000 USERS: Scale challenges are real. SRE team, performance optimization.
□ 1,000,000 USERS: Platform thinking. Ecosystem. International expansion.
□ 10,000,000 USERS: IPO territory. Full governance, compliance, audit.
```

---

## INTELLECTUAL PROPERTY CHECKLIST

```
TRADEMARKS:
□ Brand name search (India TM Registry, USPTO, WIPO) BEFORE committing
□ Domain: .com (mandatory), .in (India), country-specific TLDs
□ Social: @brandname on Instagram, Twitter/X, LinkedIn, YouTube, TikTok
□ App stores: Name available on App Store and Play Store
□ File TM application: India ₹4,500 (online), US $250-350 per class
□ Monitor for infringement: Google Alerts, trademark watch services

PATENTS (if applicable):
□ Provisional patent: 12-month priority, cheaper (₹8-15K India, $2-3K US)
□ Full patent: ₹50K-2L India, $8-15K US (including attorney)
□ Freedom-to-operate search: Ensure you're not infringing others

COPYRIGHTS:
□ Code: Automatically copyrighted. Register for statutory damages.
□ Content: All original content (blog, docs, marketing) is yours
□ Open source: Audit ALL dependencies for license compatibility (especially AGPL)
□ Employee agreements: IP assignment clause in every employment contract
□ Contractor agreements: "Work for hire" clause — IP belongs to company

TRADE SECRETS:
□ NDA with every employee, contractor, advisor, investor (before sharing details)
□ Access controls: Proprietary algorithms/data on need-to-know basis
□ Non-compete: Where enforceable (not in California; limited in India)
□ Exit checklist: Return all materials, confirm deletion of proprietary data
```
