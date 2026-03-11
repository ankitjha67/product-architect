# Strategic Consulting Frameworks

## When to Use Which Framework

| Situation | Framework | What It Answers |
|-----------|-----------|----------------|
| "Should we enter this market?" | Porter's Five Forces + PESTEL | Market attractiveness |
| "Where should we compete?" | Blue Ocean Strategy | Differentiation strategy |
| "What's our competitive advantage?" | VRIO Analysis | Sustainable advantages |
| "How should we prioritize?" | ICE + RICE + MoSCoW | Feature/initiative prioritization |
| "Is our organization aligned?" | McKinsey 7S | Organizational readiness |
| "Where do we allocate resources?" | BCG Growth-Share Matrix | Portfolio strategy |
| "What are macro risks?" | PESTEL | External environment scan |
| "Why are users choosing us/competitors?" | Jobs-to-be-Done | True user motivations |
| "Where is the market heading?" | Wardley Mapping | Technology evolution positioning |
| "What's our flywheel?" | Amazon Flywheel | Self-reinforcing growth loops |

---

## 1. Porter's Five Forces (Market Attractiveness)

```
Apply BEFORE entering a market or pricing a product.

THREAT OF NEW ENTRANTS: [Low/Medium/High]
- Capital requirements to enter
- Regulatory barriers
- Brand loyalty of existing players
- Network effects (if any)
→ High barrier = good for you if you're in, bad if you're entering

SUPPLIER POWER: [Low/Medium/High]
- How many alternative suppliers exist?
- How differentiated are supplier offerings?
- Cost of switching suppliers?
→ For tech: cloud providers, payment gateways, API dependencies

BUYER POWER: [Low/Medium/High]
- How many alternatives do buyers have?
- How price-sensitive are they?
- What's the switching cost for buyers?
→ Low switching cost = you must constantly deliver value

THREAT OF SUBSTITUTES: [Low/Medium/High]
- Can users solve this problem differently? (Not just direct competitors)
- Example: Uber's substitute isn't just Ola — it's public transport, walking, working from home

COMPETITIVE RIVALRY: [Low/Medium/High]
- Number of competitors, their relative size
- Market growth rate (growing markets have less rivalry)
- Product differentiation (commodity = intense rivalry)
- Exit barriers (hard to leave = desperate competition)
```

## 2. PESTEL Analysis (Macro Environment)

```
Apply to EVERY product to understand external factors.

POLITICAL: Government stability, trade policies, taxation, regulatory bodies
ECONOMIC: Growth rate, inflation, exchange rates, disposable income, unemployment
SOCIAL: Demographics, cultural norms, lifestyle trends, education, health consciousness
TECHNOLOGICAL: Innovation rate, digital infrastructure, mobile penetration, AI adoption
ENVIRONMENTAL: Climate policies, sustainability expectations, carbon footprint pressure
LEGAL: Consumer protection, data privacy, employment law, IP law, industry regulation

FOR INDIA SPECIFICALLY:
- Political: Digital India push, Make in India, startup-friendly policies, state-level variation
- Economic: Rising middle class, UPI adoption (10B+ monthly transactions), rural digitization
- Social: Young population (median age 28), mobile-first (not mobile-too), language diversity
- Technological: 800M+ internet users, Jio effect, India Stack (Aadhaar, UPI, DigiLocker)
- Environmental: Growing sustainability awareness, government renewable push
- Legal: DPDP Act, IT Act amendments, RBI digital lending guidelines, SEBI regulations
```

## 3. Blue Ocean Strategy (Differentiation)

```
Apply when competing in a crowded market.

FOUR ACTIONS FRAMEWORK:
ELIMINATE: What factors that the industry competes on should be eliminated?
REDUCE: What factors should be reduced well below the industry standard?
RAISE: What factors should be raised well above the industry standard?
CREATE: What factors should be created that the industry has never offered?

EXAMPLE (budget airline):
- ELIMINATE: First class, airport lounges, meals
- REDUCE: Seat comfort, check-in baggage, layover options
- RAISE: Frequency of flights, on-time performance, direct routes
- CREATE: Point-to-point routes to secondary airports, web-only booking

Apply this to YOUR product. What does the competition waste effort on that users don't
actually value? What do users desperately want that no one provides?
```

## 4. Jobs-to-be-Done (User Motivation)

```
Apply during Discovery and PRD phases.

FRAMEWORK: Users don't buy products. They hire products to do a job.

JOB STATEMENT FORMAT:
"When [situation], I want to [motivation], so I can [expected outcome]."

THREE DIMENSIONS:
- Functional job: The practical task (get food delivered)
- Emotional job: How they want to feel (not stressed about dinner)
- Social job: How they want to be perceived (good parent feeding family well)

EXAMPLE:
Functional: "When I'm working late, I want to order dinner quickly."
Emotional: "I want to feel like I'm not failing at feeding my family."
Social: "I want my family to enjoy a good meal even when I'm busy."

→ This changes how you design the product. It's not about fast delivery.
  It's about removing guilt and maintaining quality of life.

COMPETING AGAINST NON-CONSUMPTION:
The biggest competitor is often "do nothing" or "manual workaround."
If 80% of your target market isn't using ANY solution, your real job is to
convince them the problem is worth solving, not that your solution is better.
```

## 5. McKinsey 7S (Organizational Alignment)

```
Apply when assessing organizational readiness to execute.

HARD ELEMENTS (easier to define and manage):
- Strategy: The plan to build and sustain competitive advantage
- Structure: How the organization is arranged (teams, reporting, roles)
- Systems: Processes and tools (CI/CD, meetings, decision-making frameworks)

SOFT ELEMENTS (harder but more impactful):
- Shared Values: Core beliefs that drive behavior (speed? quality? user-first?)
- Skills: Capabilities the team has (and gaps that need filling)
- Style: Leadership approach and organizational culture
- Staff: People — hiring, development, retention

ALL 7 MUST ALIGN. Strategy without skills = failure. Structure without culture = dysfunction.
```

## 6. BCG Growth-Share Matrix (Portfolio Strategy)

```
Apply when managing multiple products or features.

              High Market Growth
                    |
    QUESTION MARK   |   STAR
    (invest or kill) |  (invest heavily)
                    |
    ────────────────┼────────────────
                    |
    DOG             |   CASH COW
    (divest/sunset) |  (harvest profits)
                    |
              Low Market Growth
    Low Market Share   High Market Share

STARS: High growth, high share → Invest to maintain position
CASH COWS: Low growth, high share → Milk for profit, fund stars
QUESTION MARKS: High growth, low share → Invest selectively or kill
DOGS: Low growth, low share → Divest, sunset, or pivot
```

## 7. RICE / ICE Scoring (Prioritization)

```
RICE (for features with data):
- Reach: How many users will this impact? (per quarter)
- Impact: How much will it move the target metric? (0.25/0.5/1/2/3)
- Confidence: How sure are we about the estimates? (0-100%)
- Effort: How many person-months? (fewer = better)
RICE Score = (Reach × Impact × Confidence) / Effort

ICE (for ideas with less data):
- Impact: How much will this move the needle? (1-10)
- Confidence: How sure are we? (1-10)
- Ease: How easy to implement? (1-10)
ICE Score = Impact × Confidence × Ease

MoSCoW (for scope definition):
- Must have: Product doesn't work without it
- Should have: Important but not critical for launch
- Could have: Nice to have, do if time allows
- Won't have: Explicitly out of scope (for this version)
```

## 8. Amazon Flywheel (Self-Reinforcing Growth)

```
Apply to identify and strengthen virtuous cycles.

Identify your flywheel:
More users → More data → Better product → More users → ...
More sellers → More selection → More buyers → More sellers → ...
More content → Better SEO → More traffic → More content → ...

KEY QUESTIONS:
- What's the first turn? (How do you start the flywheel with zero momentum?)
- What's the friction? (Where does the flywheel slow down?)
- What accelerates it? (What investment has the highest flywheel impact?)
- Is it defensible? (Can a competitor start their own flywheel easily?)
```

## How to Apply These

1. **Phase 1 (Discovery)**: Use Porter's + PESTEL + JTBD to understand the market
2. **Phase 2 (Strategy)**: Use Blue Ocean + BCG Matrix + Flywheel to define positioning
3. **Phase 3 (PRD)**: Use RICE/ICE/MoSCoW for feature prioritization
4. **Phase 5 (Engineering)**: Use 7S to assess team readiness
5. **Phase 8 (Advisor)**: Use VRIO to validate competitive advantages
6. **Phase 15 (Chief Review)**: Use all frameworks to stress-test the strategy
