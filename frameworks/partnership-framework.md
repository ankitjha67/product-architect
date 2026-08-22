# Partnership & Alliance Framework

Partnerships multiply reach, fill product gaps, and create distribution you can't
buy. But most partnerships are dead weight. This framework gives you the partner
taxonomy, the build-buy-partner decision, program tiers, deal structures with real
ranges, the economics model, the lifecycle runbook, hyperscaler co-sell mechanics,
and the scorecard to keep only the partners that produce.

---

## 1. PARTNER TYPE TAXONOMY

```
| Type                 | What they do                          | You get             | Example          |
|----------------------|---------------------------------------|---------------------|------------------|
| Tech / Integration   | Build integrations with your product  | Stickiness, gaps filled| Stripe×Shopify |
| Channel / Reseller   | Resell your product to their customers| Distribution, reach | VARs, SIs        |
| OEM / Embed          | Embed your product inside theirs       | Volume, white-label | "powered by X"   |
| Co-Sell              | Sell alongside you to shared accounts  | Pipeline, credibility| AWS co-sell     |
| Strategic / Alliance | Deep multi-faceted (product+GTM+capital)| Moat, market access| Microsoft×OpenAI |
| Marketplace          | List your app in their store           | Discovery, easy buy | AWS/Salesforce AppEx|

COMPARISON:
| Dimension       | Tech/Integration | Reseller   | OEM      | Co-Sell  | Marketplace |
|-----------------|------------------|------------|----------|----------|-------------|
| Time to value   | Medium           | Slow       | Slow     | Medium   | Fast        |
| Effort to build | Medium (eng)     | High (GTM) | High     | Medium   | Low-Med     |
| Revenue model   | Indirect/stickiness| Rev-share| License  | Direct   | Listing+fee |
| Who owns customer| You             | Partner    | Partner  | Shared   | You         |
| Scales via      | API/ecosystem    | Partner reps| Volume  | Field    | Self-serve  |
```

---

## 2. BUILD-BUY-PARTNER DECISION TREE

```
Need a capability / market access you don't have. Should you build, buy, or partner?

Is it CORE to your differentiation / moat?
  │ YES ──► BUILD (own it; it's your edge)
  │ NO
  ▼
Do you need it FAST (months, not years)?
  │ NO ──► consider BUILD if cheap, else partner
  │ YES
  ▼
Is there a capable partner who already does it well?
  │ NO ──► is the gap strategic & acquirable? ── YES ──► BUY (acqui-hire/tech)
  │ YES                                          └ NO ──► BUILD minimal version
  ▼
Is the economics/control of partnering acceptable
(rev-share, customer ownership, dependency risk)?
  │ YES ──► PARTNER (fastest, lowest capital)
  │ NO  ──► BUILD or BUY

RULE OF THUMB: Build your core. Partner for reach & adjacent capability.
Buy to acquire a team, a technology leap, or to remove a competitor.
```

---

## 3. PARTNER TIERING & PROGRAM DESIGN

```
| Tier      | To qualify (requirements)              | Benefits                          |
|-----------|----------------------------------------|-----------------------------------|
| Registered| Sign agreement, complete basic training| Listing, deal reg, partner portal |
| Silver    | 1+ certified rep, $X sourced/yr        | Co-marketing funds (small), leads |
| Gold      | Multiple certs, $XX sourced, CSAT bar  | Higher margin, MDF, dedicated PM,  |
|           |                                        | co-sell support, beta access      |
| Platinum  | Top revenue, deep integration, joint GTM| Best margin, exec sponsor, joint  |
|           |                                        | roadmap, marquee co-marketing     |

PROGRAM DESIGN PRINCIPLES:
  ✓ Tiers must be EARNED on outcomes (sourced revenue, certs, CSAT) - not vanity.
  ✓ Each tier up = more margin/benefits AND more commitment. Symmetric.
  ✓ Deal registration protects partners from channel conflict (first to register
    a deal gets the margin / protection for X days).
  ✓ Publish requirements transparently so partners can self-assess and climb.
```

---

## 4. DEAL STRUCTURE MENU (with typical ranges)

```
| Structure            | What it is                          | Typical range            |
|----------------------|-------------------------------------|--------------------------|
| Referral fee         | Pay for a lead/intro that closes    | 5-15% of first-year ACV  |
| Reseller margin      | Partner buys at discount, resells   | 15-40% off list          |
| Revenue share        | Ongoing % of revenue they drive     | 10-30% recurring         |
| Wholesale/distributor| Deeper discount for volume + 2-tier | 30-50% off list          |
| MDF (market dev funds)| You fund partner's marketing        | 1-5% of partner revenue  |
| Co-marketing         | Shared cost of joint campaigns/events| 50/50 split common       |
| Minimum commitment   | Partner commits to $X or churn tier | negotiated per tier      |
| OEM / license fee    | Per-seat/usage license to embed     | volume-tiered            |

GUARDRAILS:
  ✓ Referral (partner just intros) < Reseller (partner sells & supports) margin.
  ✓ Recurring rev-share should reflect ongoing partner effort, not just the intro.
  ✓ Tie higher margins to higher tiers and verified value-add.
  ⚠ Margins, rev-share, and MDF terms have tax/legal/accounting implications -
    see the disclaimer and Agent 10.
```

---

## 5. PARTNER ECONOMICS MODEL

```
SOURCED vs INFLUENCED (define these crisply or you'll double-count):
  SOURCED   = partner originated the deal (their lead). Full attribution.
  INFLUENCED= partner touched a deal you already had (integration, co-sell assist).
              Partial/assist credit. Track separately - never sum the two as one.

PARTNER CAC:
  Partner CAC = (program cost + MDF + margin given up + partner-team cost)
                ÷ customers acquired via partners
  Compare to direct CAC. Partners win when: lower CAC, OR access to accounts
  you couldn't reach directly, OR higher retention (stickier via integration).

WORKED EXAMPLE:
  Program cost ₹40L/yr + ₹20L MDF + ₹60L margin given up = ₹1.2 Cr.
  Partners sourced 200 customers → partner CAC = ₹60,000.
  Direct CAC = ₹80,000 → partners are cheaper AND incremental. Invest more.

NORTH STAR: partner-sourced revenue as a % of total, growing QoQ, at a CAC
and retention at least as good as direct.
```

---

## 6. PARTNER LIFECYCLE RUNBOOK

```
RECRUIT ──► ONBOARD ──► ENABLE ──► ACTIVATE ──► GROW ──► QBR

RECRUIT   Build a target list (ICP for partners: shared customers, complementary
          product, GTM reach). Pitch the joint value. Sign the agreement (Agent 10).
ONBOARD   Portal access, deal-reg setup, point of contact, success plan with goals.
          Goal: partner understands how to win with you in week 1.
ENABLE    Train + certify their reps/SEs. Provide demo env, battlecards, co-sell
          playbook, integration docs. Goal: they can pitch & demo without you.
ACTIVATE  Drive the FIRST joint deal fast (time-to-first-deal is the key metric).
          Co-sell hands-on the first 1-3 deals to build a repeatable motion.
GROW      Scale what worked: more reps certified, more co-marketing, MDF, expand
          integration depth, move them up a tier.
QBR       Quarterly business review: pipeline, sourced/influenced revenue, joint
          goals next quarter, blockers, roadmap alignment. Mutual accountability.

KILL CRITERIA: a partner with zero sourced/influenced deals after 2 QBRs and
full enablement → deprioritize. 80% of value comes from ~20% of partners.
```

---

## 7. CO-SELL WITH HYPERSCALERS (AWS / Azure / GCP)

```
WHY IT MATTERS: enterprises have committed cloud spend (EDP/MACC). If your
product is on the marketplace, that spend can be DRAWN DOWN to buy you -
removing a procurement battle. Plus co-sell motions with cloud field teams.

MARKETPLACE MECHANICS:
  ✓ List on AWS Marketplace / Azure Marketplace / Google Cloud Marketplace.
  ✓ Private Offers: custom pricing/terms negotiated, transacted via marketplace.
  ✓ Spend drawdown: customer's purchase counts against their committed cloud spend
    (often the single biggest reason an enterprise prefers buying via marketplace).
  ✓ Cloud takes a listing fee (historically ~3% with co-sell, varies by program).
  ✓ CO-SELL programs: AWS ISV Accelerate, Azure IP Co-Sell, Google Partner
    Advantage - get your deals in front of cloud field sellers (they're comped
    on partner ACR/influenced revenue).

PLAY: register opportunities in the cloud's partner portal (ACE for AWS,
Partner Center for Azure) → cloud seller co-sells into their account →
transact via private offer → spend draws down → faster close.
```

---

## 8. PARTNERSHIP AGREEMENT TERM CHECKLIST (Agent 10)

```
☐ Scope of partnership & responsibilities of each party
☐ Term, renewal, termination (for cause / convenience / notice period)
☐ Economics: fees, margins, rev-share %, payment terms, MDF rules
☐ Deal registration & channel-conflict rules
☐ Exclusivity (territory/vertical?) - avoid blanket exclusivity early
☐ IP ownership & license grants (who owns what, white-label rights)
☐ Data sharing, privacy, security obligations (tie to data-governance.md)
☐ Branding / trademark usage rights & approval
☐ SLAs & support responsibilities (who supports the end customer)
☐ Liability, indemnification, limitation of liability
☐ Confidentiality (NDA terms)
☐ Compliance, anti-bribery (FCPA/UKBA), export controls
☐ Dispute resolution & governing law
⚠ Always have legal counsel draft/review. See Agent 10 and the disclaimer.
```

---

## 9. PARTNER SCORECARD

```
Score each partner quarterly. Drives tier moves and invest/divest decisions.

| Dimension                | Weight | Score (1-5) | Notes              |
|--------------------------|--------|-------------|--------------------|
| Sourced revenue          | 30%    |             |                    |
| Influenced revenue       | 15%    |             |                    |
| Certified reps / capability| 15%  |             |                    |
| Integration depth/quality| 10%    |             |                    |
| Joint pipeline created   | 15%    |             |                    |
| Customer CSAT on partner | 10%    |             |                    |
| Engagement (QBRs, responsiveness)| 5% |          |                    |
| WEIGHTED TOTAL           |        |             | → tier action      |

ACTION: top quartile → invest (MDF, exec sponsor, tier up). Bottom → coach
or sunset. Don't spread resources evenly; concentrate on producers.
```

---

## 10. METRICS

```
| Metric                       | Definition                          | Target/benchmark |
|------------------------------|-------------------------------------|------------------|
| Partner-sourced revenue %    | partner-sourced ÷ total revenue     | grow QoQ (20-40%+ mature)|
| Partner-influenced revenue % | deals partners touched ÷ total      | track separately |
| Attach rate                  | % of deals with a partner attached  | rising            |
| Time-to-first-deal           | partner onboard → first sourced deal| minimize (<90d)  |
| Active-partner %             | partners with a deal in last 2 quarters| >50% of program|
| Partner CAC vs direct CAC    | acquisition cost via partners       | ≤ direct          |
| Certified reps per partner   | enablement depth                    | rising            |
| Partner NPS                  | partner satisfaction with program   | >40               |
| % revenue from top 20% partners| concentration                     | expected ~80%    |
```

---

## ONE-PAGE PARTNER PLAN

```
PARTNER: ____________  TYPE: ____________  TIER: ____________
JOINT VALUE PROP (why customers win with both): ____________________
DEAL STRUCTURE: ____________  Margin/rev-share: ______  MDF: ______
TARGET ACCOUNTS / SEGMENT: ____________________
ENABLEMENT STATUS: certs ___ / demo env ___ / playbook ___
THIS-QUARTER GOAL: ___ sourced deals / ₹___ pipeline
TIME-TO-FIRST-DEAL: ______   PARTNER PM: ______   NEXT QBR: ______
TOP BLOCKER: ____________   INVEST / MAINTAIN / SUNSET: ____________
```

> Partnership economics, rev-share, and agreement terms carry legal, tax, and
> accounting consequences. Have agreements drafted and reviewed by qualified
> counsel (see Agent 10). See [DISCLAIMER.md](../references/DISCLAIMER.md).
