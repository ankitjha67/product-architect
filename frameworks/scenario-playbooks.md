# Scenario Playbooks: Tactical Execution Guides

Every agent has theory. This file has the "I need to do THIS, TODAY" playbooks.
Each scenario is self-contained with exact steps, scripts, timelines, and checklists.

**Coverage: 54 playbooks across 31 departments** — from the original product/launch/
finance/people scenarios through the commercial, developer, data, privacy, internal,
and corporate-finance functions (Agents 31–47). Jump to the `## <DEPARTMENT> SCENARIOS
(Agent NN)` section you need.

---

## DISCOVERY SCENARIOS (Agent 02)

### Scenario: First 50 Customer Interviews

```
GOAL: Validate (or kill) your idea with real user evidence in 2 weeks.

RECRUIT PARTICIPANTS:
□ Target: 50 people who HAVE the problem (not friends, not investors, not builders)
□ Where to find them:
  - Reddit: Post in relevant subreddits asking "Anyone here deal with [problem]?"
  - LinkedIn: Search by job title + industry, send personalized connection + message
  - Twitter/X: Search "[problem] is so frustrating" — DM those people
  - In person: Coffee shops, co-working spaces, industry events, college campuses
□ The ask: "I'm researching [problem area]. Could I ask you 5 questions? Takes 10 min."
  (NOT "I built an app and want feedback" — that biases every answer)

INTERVIEW SCRIPT (15 minutes):
1. "Tell me about the last time you experienced [problem]." (Let them talk. Don't lead.)
2. "What did you do about it?" (Reveals current workaround — your real competitor)
3. "What was the hardest part about that?" (Reveals the ACTUAL pain point)
4. "Have you tried anything else to solve this?" (Maps the competitive landscape)
5. "If you could wave a magic wand, what would the perfect solution look like?"
   (Reveals desired outcome — design your product around THIS answer)

NEVER ASK:
⛔ "Would you use an app that does X?" (Everyone says yes. Nobody means it.)
⛔ "How much would you pay for X?" (Hypothetical answers are worthless.)
⛔ "Do you like this design?" (They'll be polite. Observe behavior instead.)

SYNTHESIZE (Day 13-14):
□ Group responses into themes (affinity mapping)
□ Count: How many mentioned each theme? (Frequency = signal strength)
□ Extract: Top 3 pain points, top 3 desired outcomes, top 3 workarounds
□ Write 1-paragraph summary: "We talked to 50 [people]. [X%] experience [problem]
  when [context]. They currently [workaround], which fails because [frustration].
  They want [desired outcome]. Confidence: [High/Medium/Low]."
```

### Scenario: Competitive Product Teardown (1 Day)

```
PICK ONE COMPETITOR. Spend 8 hours going deep.

HOUR 1-2: USE THE PRODUCT
□ Sign up as a new user. Screenshot every screen.
□ Complete the core task. Time it. Note every friction point.
□ Intentionally trigger errors. What happens?
□ Contact support. How fast? How helpful? How human?

HOUR 3-4: READ THEIR USERS
□ App Store: Read last 100 reviews. Tally 1-star complaint categories.
□ G2/Capterra: Read 20 detailed reviews. What do power users love/hate?
□ Reddit: Search "[competitor] review" or "[competitor] alternative."
□ Twitter: Search "[competitor]" filter by negative sentiment.

HOUR 5-6: STUDY THEIR BUSINESS
□ Crunchbase: Funding, investors, valuation, team size
□ LinkedIn: Headcount by department, growth trend, recent key hires
□ SimilarWeb: Traffic, top channels, geographic split
□ Job postings: What roles? (ML engineer = AI features coming)

HOUR 7-8: DOCUMENT
□ Write: 1-page competitor brief
  Strengths (be honest) | Weaknesses (what users complain about) |
  Their ideal user (who loves them) | Users they're failing (your opportunity) |
  What they can't easily copy (your potential moat)
```

---

## STRATEGY SCENARIOS (Agent 03)

### Scenario: The Pivot Decision Framework

```
WHEN TO CONSIDER A PIVOT:
□ 3+ months of effort with no product-market fit signal
□ Retention: D30 < 10% (consumer) or < 40% (SaaS)
□ Users say "nice" but won't pay or recommend
□ You've talked to 50+ users and can't articulate the #1 problem you solve
□ Your biggest competitor just raised 50x your funding for the same approach

THE PIVOT MATRIX:
| Keep | Change |
|------|--------|
| Problem (validated) | Solution (different approach to same problem) |
| Customer segment | Problem (adjacent problem for same people) |
| Technology | Customer (same tech, different market) |
| Channel | Business model (same product, different monetization) |

PIVOT PROCESS (2 weeks):
Week 1: Diagnose
  Day 1-2: Data review — what metrics say vs. what you assumed
  Day 3-4: 10 user interviews — "Why did you stop using this?"
  Day 5: Competitive scan — has the landscape changed?
  Day 6-7: Brainstorm 3-5 pivot options, score each on evidence strength

Week 2: Validate
  Day 8-10: Quick prototype or landing page test for top pivot option
  Day 11-12: Show to 10 potential users, measure response
  Day 13: Decision meeting — GO (pivot) or STAY (double down on current)
  Day 14: If pivoting — communicate to team, investors, advisors. Rewrite 30-day plan.

COMMUNICATE A PIVOT:
To team: "Here's what we learned, here's the data, here's the new direction."
To investors: "We validated [X], learned [Y], and are now pursuing [Z] based on evidence."
Never: "The old idea failed." Always: "We learned enough to find a better path."
```

### Scenario: Pricing Experiment in 7 Days

```
DAY 1: Define what you're testing
  Variable: Price point? Packaging? Free vs. paid? Annual vs. monthly?
  Hypothesis: "If we change X from A to B, conversion will [increase/decrease] by Y%."

DAY 2: Set up the experiment
  Method A (if enough traffic): A/B test on pricing page (50/50 split)
  Method B (low traffic): Show different prices to different user cohorts
  Method C (B2B): Quote different prices in sales conversations, track close rate
  Tool: PostHog, Optimizely, or even just two landing page variants

DAY 3-6: Run it
  Minimum sample: 100 visitors per variant (for statistical significance)
  Track: Visits → Trial/Signup → Activation → Paid conversion → Revenue per user

DAY 7: Decide
  Winner = variant with higher revenue per visitor (NOT just higher conversion)
  (Lower price may convert more but generate less revenue — revenue per visitor is truth)
  Document: What we tested, what we found, what we're implementing, what we'll test next
```

---

## PRD SCENARIOS (Agent 04)

### Scenario: Emergency 2-Hour PRD

```
When a feature needs to ship THIS WEEK and there's no spec.

MINUTE 0-15: Problem + Context
  □ What user problem does this solve? (1 sentence)
  □ Why now? What triggered urgency?
  □ Who are the users? (1 sentence)

MINUTE 15-45: Requirements
  □ Happy path: Step 1 → Step 2 → Step 3 → Done (max 7 steps)
  □ What data is needed? What's created? What's changed?
  □ Acceptance criteria: 3-5 "it works when..." statements

MINUTE 45-75: Edge Cases + Errors
  □ What if the user has no data? (empty state)
  □ What if the input is invalid? (error state)
  □ What if the network fails? (offline state)
  □ What if two users do this simultaneously? (concurrency)
  □ What if the user goes back mid-flow? (navigation)

MINUTE 75-100: Design + Dependencies
  □ Rough wireframe (hand-drawn or Figma sketch — not pixel-perfect)
  □ What APIs/services does this touch?
  □ What existing components can we reuse?
  □ Who needs to review before we build?

MINUTE 100-120: Ship Criteria
  □ Definition of done: What must be true to call this "shipped"?
  □ What are we explicitly NOT doing? (scope boundary)
  □ Analytics: What event do we fire to know this is working?
  □ Rollback: If this breaks something, how do we undo it?
```

---

## SECURITY SCENARIOS (Agent 09)

### Scenario: Breach Response — First 60 Minutes

```
MINUTE 0: ALERT RECEIVED (monitoring, user report, or third-party notification)
  → Page on-call security engineer via PagerDuty
  → Do NOT panic. Do NOT communicate externally yet.

MINUTE 0-5: VERIFY
  □ Is this a real breach or false positive?
  □ What system/data is affected?
  □ Is the attack still active?

MINUTE 5-15: CONTAIN
  □ If active: Isolate affected systems (pull from network, disable access)
  □ If credentials leaked: Rotate ALL affected credentials immediately
  □ If ongoing data exfiltration: Block source IP, kill session
  □ DO NOT: Delete logs. Shut down servers. Destroy evidence.

MINUTE 15-30: ASSESS SCOPE
  □ What data was accessed? (PII, financial, health, credentials?)
  □ How many users affected? (Exact count or best estimate)
  □ How did they get in? (Vulnerability, stolen credential, social engineering?)
  □ Open incident channel in Slack. Assign Incident Commander.

MINUTE 30-45: ESCALATE
  □ Notify: CTO, CEO, Legal, Compliance
  □ Decision: Is this a reportable breach?
    - GDPR: Likely reportable to DPA within 72 hours
    - DPDP (India): Reportable to DPBI "without delay"
    - PCI: Reportable to card brands + acquiring bank
  □ DO NOT notify affected users YET (legal team advises timing)

MINUTE 45-60: PLAN
  □ Remediation: What's the fix? Who's implementing? ETA?
  □ Communication: Draft holding statement (Agent 25 PR helps)
  □ Legal review: Is notification required? To whom? By when?
  □ Timeline: Document every action with timestamp for regulatory evidence
  □ Schedule: Next check-in in 2 hours

POST-INCIDENT (within 72 hours):
  □ Regulatory notification if required
  □ User notification if high risk to their rights
  □ Post-mortem (blameless — focus on systems, not people)
  □ Fix root cause, not just symptoms
  □ Update security controls to prevent recurrence
```

---

## MARKETING SCENARIOS (Agent 15)

### Scenario: Content Engine — 0 to 30 Posts in 30 Days

```
Inspired by Promarkia's content automation approach: templates + repurposing + AI assist.

WEEK 0 (PREP):
□ Define 5 content pillars aligned with your product (problems you solve)
  Example for invoicing tool: 1) Freelancer finances 2) Getting paid faster
  3) Tax tips 4) Client management 5) Pricing your work
□ Create templates for 4 post types:
  - How-to (problem → steps → result)
  - Listicle (X things about Y)
  - Story (I did X, learned Y, here's how)
  - Hot take (unpopular opinion about your industry)
□ Set up Buffer or Hootsuite (free tier) for scheduling

DAILY ROUTINE (30 minutes):
□ Write 1 post using a template + your expertise (15 min)
□ Engage: Reply to 5 comments/posts in your niche (10 min)
□ Schedule for optimal time (5 min)

CONTENT MULTIPLICATION (1 piece → 5 pieces):
□ Blog post → Extract 3 social posts (key takeaways as standalone posts)
□ Blog post → Create 1 email newsletter summary
□ Blog post → Record 1 short-form video (talking head, 60 seconds)
□ Customer conversation → Anonymized "here's what I learned" post
□ Product update → "Building in public" behind-the-scenes post

DISTRIBUTION CHANNELS (pick 2):
□ LinkedIn (B2B): Post 5x/week. Engage in comments. Join groups.
□ Twitter/X: Post 7x/week. Use threads for depth. Quote-tweet relevant conversations.
□ Instagram: Post 3x/week (carousels perform best). Stories daily.
□ Reddit: 2-3 genuine contributions per week in relevant subreddits.
□ Email: Weekly newsletter to your signup list. Personal, not corporate.
```

### Scenario: Cold Outreach That Converts (B2B)

```
VOLUME: 50 targeted emails per day
TOOLS: Apollo.io / Hunter.io for finding emails. Instantly.ai / Woodpecker for sequences.

THE WINNING EMAIL (73 words average — shorter = better):

Subject: [Specific observation about their company]

Hi [First name],

[1 sentence showing you researched them — specific, not generic]

I built [product] that [specific outcome relevant to their situation].
[1 proof point: number, customer name, or result].

Worth a quick look? [Link]

[Your name]
[No essay. No pitch deck. No "I'd love to schedule a call."]

SEQUENCE:
Email 1 (Day 0): The message above
Email 2 (Day 3): "Bumping this — [add a new proof point or case study]"
Email 3 (Day 7): "Last note — [include a useful resource even if they don't buy]"
(Stop after 3. More = spam.)

METRICS:
□ Open rate target: >50% (if <30%, subject lines need work)
□ Reply rate target: >5% (if <2%, message or targeting is wrong)
□ Meeting rate target: >1% of emails sent
□ Track: Emails sent → Opens → Replies → Meetings → Closed deals
```

---

## CUSTOMER SUCCESS SCENARIOS (Agent 17)

### Scenario: Angry Customer De-escalation

```
THE FRAMEWORK: HEARD
H — Hear them out (don't interrupt, let them vent completely)
E — Empathize ("I understand why that's frustrating")
A — Apologize (for their experience, even if it's not your fault)
R — Resolve (specific action, specific timeline)
D — Delight (do one thing extra they didn't expect)

SCRIPT:
Customer: "This is broken and I've wasted 3 hours!"

WRONG: "I'm sorry you're experiencing issues. Let me check the status."
(Cold, robotic, doesn't acknowledge their emotion)

RIGHT: "That sounds genuinely frustrating — 3 hours is a lot of time
to lose, and I'm sorry that happened. Here's what I'm going to do:
I'm escalating this to our engineering team right now with a priority
flag. I'll personally follow up with you by [specific time] today
with an update. And for the trouble, I'm adding a [credit/free month/
upgrade] to your account."

ESCALATION DECISION TREE:
□ Can you fix it in <15 min? → Fix it live, confirm with customer
□ Needs engineering? → Log bug, give customer a ticket number + personal follow-up ETA
□ Customer threatening to leave? → Offer: retention discount, account credit, call with manager
□ Customer threatening legal/social media? → Stay calm. Document everything. Involve Legal if needed.
□ Customer being abusive? → "I want to help you, but I need us to communicate respectfully."
```

### Scenario: Churn Save Playbook

```
TRIGGER: User cancels subscription or shows churn signals
  Signals: Login frequency dropped >50%, support tickets increasing,
  usage of core feature stopped, billing failed 2x

IMMEDIATE (within 4 hours of cancellation):
□ Send personal email (not automated — from a real person):
  "Hi [Name], I noticed you cancelled. I'd love to understand what
  happened — was it something we could have done better? If you have
  2 minutes, I'd really appreciate hearing your honest feedback."

IF THEY RESPOND:
□ Price issue → Offer: 30% discount for 3 months, or annual plan discount
□ Feature missing → Log the request, give a realistic timeline, offer to notify when shipped
□ Bad experience → Apologize specifically, fix the issue, offer compensation
□ Switched to competitor → Ask what the competitor does better. Thank them. Learn.
□ Just not using it → Offer a guided onboarding session to show the value they're missing

IF THEY DON'T RESPOND:
□ Day 3: Follow-up with a specific resource or tip related to their use case
□ Day 7: "We've made [improvement] since you left. Want to try again? 14 days free."
□ Day 30: "Your data is safe with us. Come back anytime — [link to reactivate]."

METRICS:
□ Churn save rate target: 15-25% of attempted saves
□ Track: Cancellations → Save attempts → Saved → Saved but churned later (false saves)
□ Analyze monthly: Top 3 churn reasons → prioritize product fixes
```

---

## FINANCE SCENARIOS (Agent 18)

### Scenario: 90-Day Fundraise Sprint

```
DAY 1-15: PREPARE
□ Financial model: 3-year P&L with monthly detail for Year 1, quarterly for Year 2-3
□ Pitch deck: 12 slides (see founders-playbook.md for structure)
□ Data room: Create a shared folder with financials, cap table, incorporation docs,
  key contracts, metrics dashboard access, team bios
□ Target list: 30-50 investors who invest in your stage + sector + geography
  Sources: Crunchbase, Signal (by NFX), VC Twitter, your network's introductions
□ Practice pitch: 20+ times. Record yourself. Fix the parts where you hesitate.

DAY 16-45: OUTREACH
□ Week 1: Warm intros (ask advisors, existing investors, founder friends for introductions)
□ Week 2-3: Cold outreach to remaining targets (personalized, reference their portfolio)
□ Batch meetings: Try to compress all first meetings into 2-3 weeks (creates urgency)
□ Track: Outreach → Meeting → Follow-up → Partner meeting → Term sheet

DAY 46-75: CLOSE
□ After first term sheet: Use it to accelerate other conversations
  "We've received a term sheet and are finalizing this week. Would love to include you."
□ Negotiate: Valuation, board seats, liquidation preferences, anti-dilution, vesting acceleration
□ Legal review: ALWAYS have your own lawyer review the term sheet (₹50K-1L well spent)
□ Sign and wire: Close within 2 weeks of term sheet to avoid deals dying

DAY 76-90: POST-CLOSE
□ Announce: Press release, social posts, thank investors publicly
□ Update cap table, board composition, bank account
□ 90-day plan: What EXACTLY will you do with this money?
□ Set up investor update cadence: Monthly email (metrics, wins, asks, challenges)

METRICS:
□ Investor meetings booked: Target 20-30 first meetings
□ Conversion: 30 meetings → 5-8 partner meetings → 1-3 term sheets → 1 close
□ Timeline: 90 days is aggressive but achievable. Plan for 120 to be safe.
```

### Scenario: Cash Crisis — 3 Months of Runway Left

```
THIS IS AN EMERGENCY. Act this week, not next month.

WEEK 1: STOP THE BLEEDING
□ Freeze all non-essential spending immediately (no new tools, no events, no travel)
□ Renegotiate contracts: Call every vendor, ask for payment deferral or discount
□ Defer your own salary (founders first — never ask employees to take a cut before you do)
□ Assess: With zero revenue growth and only essential costs, how many months do you have?

WEEK 2: REVENUE SPRINT
□ Can you monetize anything NOW? (Charge for free features, raise prices, annual pre-pay discount)
□ Can you close any pending deals faster? (Offer discount for payment this month)
□ Can any customer pre-pay for 6-12 months? (Offer 20-30% discount for annual upfront)
□ Can you offer a service/consulting layer using your product expertise?

WEEK 3-4: FUNDRAISE OR RESTRUCTURE
□ Option A — Bridge round: Ask existing investors for a bridge (convertible note, 20% discount to next round)
□ Option B — Revenue-based financing: Faster than equity (Klub, GetVantage in India; Clearco, Pipe globally)
□ Option C — Restructure: If neither works, reduce team to extend runway to 12+ months
  → Cut with empathy: Severance, references, job search help. Over-communicate.
  → Cut ONCE, cut deep enough. Multiple small cuts destroy morale worse than one big one.

COMMUNICATE:
□ To team: Be honest. "We have X months of runway. Here's our plan."
□ To investors: "Here's the situation, here's our plan, here's what we need from you."
□ To customers: Nothing changes for them. Don't create unnecessary alarm.
```

---

## PEOPLE & HR SCENARIOS (Agent 22)

### Scenario: Your First 5 Hires

```
HIRE ORDER (most common for tech startups):
1. Engineer #1 (can build your core product)
2. Engineer #2 (complements #1's skills — frontend if #1 is backend, etc.)
3. Designer OR Growth/Marketing (depends: beautiful product vs. more users first?)
4. Support / Ops (when you personally can't handle support volume anymore)
5. Another engineer OR first salesperson (B2B) / community manager (B2C)

FOR EACH HIRE:
□ Write a job description that describes the PROBLEM they'll solve, not just a title
  BAD: "Senior Frontend Engineer — React, TypeScript, 5+ years"
  GOOD: "We need someone who can take our Figma designs and turn them into a
  production app that handles 10K concurrent users. You'll own the entire frontend."
□ Where to post: LinkedIn, YourStory (India), AngelList/Wellfound, HN Who's Hiring,
  Twitter, relevant Slack/Discord communities, college placement cells
□ Interview process (keep it SHORT — 3 steps max, 1 week total):
  Step 1: 30-min video call (culture + motivation + basics)
  Step 2: Take-home project OR 90-min live coding/design challenge
  Step 3: Final call with founder (team fit, comp discussion, close)
□ Close fast: Best candidates have 3-5 options. Decide within 48 hours of final interview.
□ Comp: Use compensation-bands.md. Early employees get below-market cash + meaningful equity.

RED FLAGS IN CANDIDATES:
⛔ Can't explain what they built vs. what the team built
⛔ "I need a spec to start working" (early-stage needs self-starters)
⛔ Badmouths previous employer extensively
⛔ Asks only about perks, never about the product or problem
```

### Scenario: Termination with Dignity

```
BEFORE THE CONVERSATION:
□ Documentation: Specific performance issues, dates, conversations had, support provided
□ Legal review: Ensure compliance with notice period, severance, local labor law
□ Logistics ready: Final settlement calculation, IT access revocation plan, equipment return

THE CONVERSATION (private, in-person or video, never email/Slack):
□ Be direct in the first 30 seconds: "I've made the decision that we need to part ways."
  Don't bury the lead. Don't start with small talk or a compliment sandwich.
□ State the reason briefly: "Despite the coaching and support plan we discussed on [date],
  the performance hasn't reached the level we need for this role."
□ Show empathy: "I know this is difficult, and I want to handle this respectfully."
□ Outline the package: Notice period, severance, insurance continuation, equity treatment
□ Next steps: "HR will walk you through the details. Your last day will be [date]."
□ Listen: They may be upset, relieved, or surprised. Give them space to respond.
□ End with respect: "I genuinely wish you well, and I'm happy to be a reference
  for the skills where you excelled."

AFTER:
□ Team communication (same day): "X has left the team. We wish them well.
  Here's how responsibilities will be covered." (Brief, factual, respectful. No details.)
□ Access revocation: Within 1 hour of conversation (pre-scheduled with IT)
□ Final settlement: Process within 30 days (India) or per local law
□ Never: Badmouth the departed employee. To anyone. Ever.
```

---

## PR & CRISIS SCENARIOS (Agent 25)

### Scenario: Crisis Communications — First 4 Hours

```
HOUR 0: INCIDENT DETECTED (data breach, product harm, executive misconduct, viral complaint)

MINUTE 0-30: ASSESS
□ What happened? (Facts only — no speculation)
□ Who is affected? (Users, employees, partners, public?)
□ Is it public yet? (Social media, press, forums?)
□ Who needs to know internally? (CEO, Legal, Comms, relevant department head)
□ Activate crisis team: CEO + GC + Head of Comms + relevant department head

MINUTE 30-60: DECIDE RESPONSE LEVEL
□ Level 1 (Contained): Internal fix, no public impact → Fix quietly, monitor
□ Level 2 (Limited): Small group affected, may go public → Proactive outreach to affected
□ Level 3 (Public): Already public or will be → Full public response needed

HOUR 1-2: DRAFT HOLDING STATEMENT (for Level 2-3)
Template: "We're aware of [issue]. We're investigating and will share more information
as soon as we have it. [What we've done so far]. [Where to find updates]."
Rules:
□ Acknowledge the issue (never "no comment")
□ Show you're taking it seriously (specific action, not just words)
□ Don't speculate or blame (facts only)
□ Don't over-promise a timeline you can't keep
□ Designate ONE spokesperson (everyone else redirects to them)

HOUR 2-4: COMMUNICATE
□ Internal first: All-hands email or Slack message BEFORE external statement
□ Then affected users (direct email/notification — personal, not corporate)
□ Then public (social media statement, blog post, press statement)
□ Then press (only if they're asking — don't proactively pitch a crisis story)

POST-CRISIS:
□ Daily updates until resolved
□ Post-mortem: What happened, what we did, what we're changing
□ Public post-mortem if trust-building matters (transparency wins long-term)
```

---

## DATA & AI SCENARIOS (Agent 29)

### Scenario: Ship Your First ML Feature in 2 Weeks

```
DAY 1-2: DEFINE
□ What business metric will this improve? (conversion, engagement, relevance, etc.)
□ What's the current baseline WITHOUT ML? (rule-based or manual)
□ Minimum viable model: What's the SIMPLEST ML that beats the baseline?
  Often: Logistic regression, XGBoost, or simple embedding similarity
  NOT: A 7-layer transformer trained on 100M examples

DAY 3-5: DATA
□ What training data do you have? List all potential features.
□ Quick quality check: Missing values? Class imbalance? Data leakage?
□ Split: 70% train, 15% validation, 15% test (time-based split if temporal)
□ Feature engineering: 10-20 features max for v1. Keep it simple.

DAY 6-8: BUILD
□ Start with scikit-learn logistic regression (it's not sexy, but it ships fast)
□ If that beats baseline → great, skip to Day 9
□ If not → try XGBoost/LightGBM with same features
□ Evaluate: Precision, recall, F1 on test set. Does it beat baseline by >10%?

DAY 9-10: VALIDATE
□ Bias check: Does model perform equally across user segments?
□ Edge cases: What happens with missing data? New users? Extreme values?
□ Explainability: Can you explain why the model made a specific decision?
□ Latency: Can inference run within your SLA? (<100ms for real-time features)

DAY 11-12: DEPLOY
□ Shadow mode: Run model in parallel, log predictions but don't show to users
□ Compare: Shadow predictions vs. current system. Any surprises?
□ A/B test: If shadow looks good, serve model to 10% of users

DAY 13-14: MONITOR AND LAUNCH
□ Monitor: Prediction distribution, error rate, latency, business metric impact
□ If A/B test positive: Roll out to 100%
□ Set up alerts: Model drift (input distribution change), performance degradation
□ Document: What model, what features, what performance, what to watch

THE KEY INSIGHT:
Your first ML feature should be embarrassingly simple. A logistic regression
that ships in 2 weeks beats a transformer that ships in 6 months.
Iterate after you have production data and user feedback.
```

---

## PLATFORM SCENARIOS (Agent 30)

### Scenario: Developer-Ready API Launch in 30 Days

```
WEEK 1: DESIGN
□ Day 1-2: Define your API surface (what resources? what operations?)
  RESTful: GET /v1/orders, POST /v1/orders, GET /v1/orders/{id}
□ Day 3: Write the OpenAPI/Swagger spec BEFORE any code
□ Day 4-5: Build 3 key endpoints that demonstrate core value
  (Not all endpoints — just enough for a developer to build something useful)
□ Day 5: Authentication: API keys for simplicity. OAuth later if needed.

WEEK 2: BUILD
□ Day 6-8: Implement the 3 core endpoints with proper error handling
  Every error: { "error": { "code": "INVALID_AMOUNT", "message": "...", "status": 400 } }
□ Day 9: Rate limiting (100 requests/minute free tier) with clear headers
□ Day 10: Webhook system for 2-3 key events (order.created, payment.completed)

WEEK 3: DOCUMENT
□ Day 11-13: Interactive API docs (Swagger UI or Redoc)
  Every endpoint: Description, parameters, example request, example response, error codes
□ Day 14: Quickstart guide: "Make your first API call in 5 minutes"
□ Day 15: 1 SDK (Python or JavaScript — whichever your users prefer)

WEEK 4: LAUNCH
□ Day 16-17: Sandbox environment with test credentials
□ Day 18-19: Beta invite to 10-20 developers. Get feedback.
□ Day 20-21: Fix top 3 issues from beta feedback
□ Day 22: Landing page: /developers with docs, quickstart, pricing, signup
□ Day 23-25: Soft launch: Post on Hacker News, dev communities, Twitter
□ Day 26-30: Support early developers personally. Every question = a docs improvement.
```

---

## OPERATIONS SCENARIOS (Agent 19)

### Scenario: Vendor Negotiation Playbook

```
BEFORE THE CALL:
□ Know your BATNA (Best Alternative To Negotiated Agreement) — what do you do if this fails?
□ Research: What do others pay? (Ask in founder communities, check G2 pricing)
□ Know your leverage: How much business are you giving them? Are you growing?
□ Set your walk-away point: Below this price/above this price, you don't proceed.

THE NEGOTIATION:
□ Never accept the first offer. Ever. Even if it seems reasonable.
□ Start with: "I like the product, but the pricing doesn't work for our stage."
□ Ask for their BEST price upfront: "What's the best you can do for a [stage] startup?"
□ Use annual pre-payment as leverage: "If I pay annually, what discount can you offer?"
□ Use competitor pricing: "We're also evaluating [competitor] at [price]. Can you match?"
□ Ask for extras instead of discounts: Free onboarding, extended trial, more seats, premium support
□ If they won't budge: "Can we revisit in 6 months when we've scaled? What would the price be at [volume]?"

AFTER:
□ Get everything in writing (email confirmation of negotiated terms)
□ Set calendar reminder: Renegotiate 60 days before renewal (not on renewal day)
□ Track: Annual vendor spend, top vendors by cost, upcoming renewals
```

---

## WELLNESS SCENARIOS (Agent 24)

### Scenario: Burnout Emergency Response

```
RECOGNITION (the person may not know they're burned out):
□ Previously high performer suddenly delivering late or sloppy work
□ Visible cynicism in meetings ("What's the point?" / "Nothing will change")
□ Withdrawal: Canceling 1:1s, turning off camera, shorter messages
□ Physical: Mentions headaches, insomnia, "always tired"
□ Emotional: Disproportionate reaction to small setbacks

RESPONSE (manager's job — within 48 hours of noticing):

Step 1: Private conversation (NOT a performance discussion)
  "Hey, I've noticed you seem [exhausted/stressed/overwhelmed] lately.
  I'm not here to judge — I want to understand and help. What's going on?"
  → LISTEN. Don't problem-solve immediately. Just hear them.

Step 2: Reduce load (not "take it easy" — SPECIFIC reductions)
  □ Remove 1-2 responsibilities for the next 2 weeks
  □ Cancel non-essential meetings
  □ Extend current deadlines by 1 week
  □ Assign a buddy to handle urgent incoming while they decompress

Step 3: Offer resources
  □ "We have [X] counseling sessions through our EAP — completely confidential."
  □ "Take [1-3] mental health days this week. No questions asked."
  □ "Would adjusting your schedule help? Flexible hours, WFH, compressed week?"

Step 4: Follow up (weekly for 4 weeks)
  □ Check in casually — not formally. "How's this week feeling?"
  □ Watch for improvement or continued decline
  □ If no improvement after 4 weeks: Involve HR for additional support options

WHAT NOT TO DO:
⛔ "Everyone's stressed, just push through" (dismissive)
⛔ "Take a vacation" without reducing their workload (they'll return to the same pile)
⛔ Add MORE check-ins and meetings about their burnout (ironic overload)
⛔ Share their situation with the team without permission
```

---

## GOVERNANCE SCENARIOS (Agent 26)

### Scenario: Board Meeting Prep in 48 Hours

```
HOUR 0-4: COLLECT
□ Finance: Latest P&L, cash position, burn rate, runway (CFO/finance team)
□ Product: Key metrics dashboard, roadmap update, major launches since last meeting
□ Team: Headcount, key hires, departures, org changes
□ Sales/Revenue: Pipeline, closed deals, churn, expansion revenue
□ Risks: Any legal, compliance, security, or operational issues to flag

HOUR 4-12: BUILD THE BOARD PACK
□ 1-page executive summary (this is what busy board members actually read):
  - Revenue/MRR this month vs. target vs. last month
  - Cash position and runway in months
  - Key wins since last meeting (2-3 bullets)
  - Key challenges / risks (2-3 bullets)
  - Decisions needed from the board
□ Financial statements: P&L, cash flow, balance sheet (if available)
□ KPI dashboard: 1 page, 8-10 metrics with trend arrows
□ Department updates: 1 paragraph each from Product, Engineering, Sales, Marketing
□ Board resolutions: Draft any resolutions that need formal board approval

HOUR 12-24: REVIEW AND DISTRIBUTE
□ CEO reviews full pack for consistency and messaging
□ Legal/Company Secretary reviews resolutions
□ Distribute to all directors at least 24 hours before meeting

HOUR 24-48: PREPARE FOR QUESTIONS
□ Anticipate the 5 hardest questions a board member could ask
□ Prepare data-backed answers for each
□ Rehearse the executive summary presentation (10 minutes, not 45)
□ Prepare backup slides for deep-dive topics (show only if asked)

IN THE MEETING:
□ First 10 min: Executive summary (CEO presents)
□ Next 20 min: Discussion and questions
□ Next 15 min: Specific agenda items requiring board input/approval
□ Last 15 min: Forward-looking discussion + action items
□ Total: 60 minutes. Not 3 hours. Respect everyone's time.
```

---

**Extended playbooks — departments added in v3 (Agents 31-47).** Same format: self-contained, do-it-today, with exact steps, scripts, timelines, and checklists.

---

## PRODUCT MARKETING SCENARIOS (Agent 31)

### Scenario: Tier-1 Feature Launch in 2 Weeks

```
GOAL: Ship a flagship feature with full cross-functional GTM in 14 days — message
locked, reps certified, day-of coordinated, adoption instrumented.

DAY 1: TIER + BRIEF (don't skip the tier decision)
□ Confirm it's actually Tier 1: new product / category / flagship. If it's a
  major feature → Tier 2 (lighter). If incremental → Tier 3 (changelog only).
□ Write the 1-page launch brief and circulate to Product, Sales, Demand-gen, PR:
  - What is it (1 sentence) / Who is it for (the buyer + the user)
  - The compelling reason-to-care (the "so what", an outcome not a feature)
  - Launch date + tier + named spokesperson (you, the PMM)
  - Success metrics: 30/60/90d adoption %, pipeline influenced $, win-rate delta
⛔ Don't start asset production before the brief is signed — you'll redo everything.

DAY 2-3: POSITIONING + MESSAGING HOUSE
□ Positioning (April Dunford, internal, never a tagline):
  "For [target] who [need], [product] is a [category] that [benefit], unlike
   [alternative], because [proof]."
□ Messaging house: roof = value prop (one sentence). 3 pillars, each a customer
  OUTCOME. Under each, 3 PROVABLE proof points (a number, a named customer, a
  benchmark, a feature). If you can't prove it, it's a claim — cut it (Legal Agent 10).
□ Message-tier the altitude: economic buyer = ROI/risk; champion = workflow/"looks
  good"; technical evaluator = specs/SOC2/API; consumer = feeling + simple demo.

DAY 4-7: ASSETS (parallelize with Design Agent 05)
□ Landing page (hero + 3 pillars + proof + CTA) — A/B test 2 headlines (Agent 15)
□ 90-second demo video + demo environment (golden path + 1 branch per persona)
□ First-call deck (10-12 slides, problem-led not feature-led)
□ One-pager / solution brief (PDF leave-behind)
□ FAQ + "how to talk about it" (incl. what NOT to promise)
□ Blog post + email copy + in-app announcement + Product Hunt assets

DAY 8-10: INTERNAL ENABLEMENT (this is a certification, not a slide dump)
□ Enablement session #1: walk Sales + CS through positioning, demo, objections
□ Update the battlecard vs the incumbent (see next scenario)
□ Objection-handling guide: top 10 objections, feel-felt-found responses
□ CERTIFY reps: they demo back to you + pass before the deal desk lets them quote
□ Load every asset into Highspot/Seismic/Guru so reps reach it mid-deal

DAY 11-12: EXTERNAL PRE-WORK
□ Analyst pre-briefs under embargo (Gartner/Forrester/G2) — AR
□ Lock 2 beta-customer references + quotes (PR Agent 25)
□ Press/influencer outreach under embargo; stage in-app messaging (Agent 15)
□ Go/no-go checklist owner = Agent 14 (Launch/GTM)

DAY 13 (T-1): FINAL CHECKS
□ Links live and staged-not-published; UTMs set; analytics events firing in staging
□ Run-of-show doc owned, every owner pinged

DAY 14 (T-0): RUN-OF-SHOW (times are illustrative, IST)
  06:00  Blog post + docs go live
  06:30  Product Hunt post live (hunter + team upvote window)
  07:00  Email blast to base + waitlist
  08:00  In-app announcement flips on; social posts (founder + brand)
  09:00  Paid campaigns switch on (Agent 15)
  09:30  Press embargo lifts; spokesperson available for press
  10:00  #launch Slack war-room open — watch errors, support volume, sentiment
  All day Field office hours; log every objection + question that comes in

T+7d: FAQ v2 from real objections; kill assets reps never opened (<40% usage).
T+30d: LAUNCH RETRO — adoption vs target, pipeline influenced, win-rate delta,
       content usage. Feed product gaps to Agent 06/04, message gaps back to the house.
```

### Scenario: Build a Competitive Battlecard in 1 Day

```
GOAL: A field-ready battlecard reps trust, built in 8 hours, that lifts win rate
against one specific competitor.

HOUR 0: PICK THE RIGHT COMPETITOR
□ Pull win/loss data (Agent 32 CRM): which competitor shows up most in LOST deals?
  That's your target — not the one you fear, the one actually costing you revenue.
□ Pull the loss-reason codes for deals lost to them (price? feature? champion?).

HOUR 1-3: GATHER INTEL (8 source layers, real artifacts only)
□ Their site + pricing page (screenshot tiers + price metric — per seat? usage?)
□ G2 / Capterra: read their 1-star + 3-star reviews — tally complaint themes
□ Reddit / X: search "[competitor] alternative", "[competitor] sucks", "switched from"
□ Their case studies (who loves them = where you'll LOSE) + their docs/changelog
□ Job postings (hiring ML eng = AI features coming) + Crunchbase funding/headcount
□ #competitive Slack channel: pull recent field intel from reps who lost to them
□ Run their free trial if one exists — time the core task, note where it's clunky
□ Klue/Crayon if you have it (automated monitoring); otherwise do it by hand
⛔ Don't write from memory or marketing pages alone — reps smell a card built on vibes.

HOUR 4-7: FILL THE TEMPLATE (one card, refreshed quarterly)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
HOW TO POSITION AGAINST [Competitor X]

THEIR PITCH (steelman it in 1 line):
  "[Their honest best claim]" — reps must trust the card, so don't strawman.

WHY WE WIN (3 landmines tied to our pillars):
  1. [Our differentiator] — they can't easily copy because [reason/moat]
  2. [Gap their 1-star reviews confirm] — e.g., "onboarding takes weeks"
  3. [Our proof point: number / named customer / benchmark]

WHERE THEY'RE GENUINELY BETTER (be honest):
  - [Real strength] — if you hide this and a rep gets caught, the card dies.
  - Concede it, then redirect: "True, and here's why it matters less for [ICP]."

TRAP-SETTING / DISCOVERY QUESTIONS (expose their weakness):
  - "How long did your last [competitor] implementation take to go live?"
  - "How do you handle [thing their reviews complain about]?"
  - "What happens when you need [feature they lack]?"

OBJECTION HANDLING (feel-felt-found):
  "We're already looking at [Competitor]."
  → "Makes sense — a lot of our customers evaluated them too (felt). What they
     found was [specific gap]. Worth a 15-min side-by-side on [your strength]?"

PROOF POINTS:
  - Win rate vs them this quarter: [X%] (from CRM)
  - Named switcher customer + 1-line quote
  - Third-party benchmark / G2 grid position

PRICING INTEL: their list price + typical discount behavior + price metric
MIGRATION PATH: how a customer moves FROM them TO us (data export, importer, timeline)
DO NOT SAY: [legally risky or unverifiable claims] — cleared with Legal (Agent 10)

HOUR 8: SHIP IT
□ Load into Highspot/Seismic/Guru (NOT a Google Doc nobody opens)
□ 20-min field walkthrough; tell reps to log new intel in #competitive
□ Calendar a quarterly refresh from the next win/loss review.
```


---

## SALES & REVOPS SCENARIOS (Agent 32)

### Scenario: Run a Discovery Call (MEDDICC in 30 Minutes)

```
GOAL: Run a 30-min discovery call that fills every MEDDICC field and ends with a
booked, specific next step — not "I'll send some info."

PRE-CALL (10 min of research):
□ LinkedIn: prospect's title, tenure, who they report to, what they're measured on
□ Company: recent funding/hire/regulation/growth = the Compelling Event candidate
□ Their tech stack (BuiltWith/job posts) + which competitor they likely use
□ Set ONE call goal: confirm pain + EB + a next step. Don't try to close.

TALK/LISTEN RATIO: aim 30/70 (you talk 30%, they talk 70%). Gong benchmark for
won deals = rep talks ~46% or less; top discovery calls go lower. Shut up and dig.

QUESTION BANK BY MEDDICC LETTER (ask, then go quiet):
M — METRICS (quantify the pain in their numbers)
  "What does [problem] cost you today — hours, headcount, churn, rupees?"
  "If this worked, what number on your dashboard moves, and by how much?"
E — ECONOMIC BUYER (find who signs)
  "Who owns the budget for this?" / "Who else needs to say yes besides you?"
  "Walk me through how a purchase like this gets approved here."
D — DECISION CRITERIA (how they'll judge)
  "What are the must-haves vs nice-to-haves when you evaluate a tool like this?"
  "Who defined those criteria — you or someone above you?"
D — DECISION PROCESS (the steps + timeline)
  "After today, what are the actual steps to a signed contract?"
  "Does this go through procurement / security review / legal?"
I — IDENTIFY PAIN (the real, costly pain)
  "What made you take this call now, this week?" (surfaces the trigger)
  "What happens if you do nothing and stay on [current workaround]?"
C — CHAMPION (someone who sells internally for you)
  "Are you the person who'd push this forward internally?"
  "What would you need from me to make the case to your boss?"
C — COMPETITION (incl. status quo + 'do nothing')
  "What else are you evaluating?" / "Is doing nothing an option on the table?"

CRITICAL EVENT: the single best close predictor. If there's no compelling event
(renewal, deadline, regulation, audit, funding), the deal WILL slip. Pin a date.

CLOSE THE NEXT STEP (last 3 min — never end vague):
□ Summarize the pain back in their words ("So if I heard you right...")
□ Propose a specific next step with a calendar invite ON the call:
  "Let's get your [SE/champion/EB] on a 30-min technical deep-dive Thursday 3pm —
   sending the invite now. Sound good?"
⛔ Never accept "send me an email." Book the meeting live or the deal stalls.

POST-CALL MEDDICC SCORECARD (fill in CRM within 1 hour):
  Letter | Filled? | Notes
  M  ✅/❌  [metric + number]
  E  ✅/❌  [name + title of economic buyer]
  D  ✅/❌  [decision criteria]
  D  ✅/❌  [steps + procurement?]
  I  ✅/❌  [pain + cost of inaction]
  C  ✅/❌  [champion name]
  C  ✅/❌  [competitors + do-nothing risk]
  COMPELLING EVENT (required field): [date] or "NONE → deal at risk"
  → 3+ ❌ = it's not real discovery yet; book a second call, don't advance the stage.
```

### Scenario: Weekly Pipeline Review & Forecast in Half a Day

```
GOAL: A 4-hour weekly cadence that produces a forecast landing within ±5-10% of
actual, with clean hygiene and a defensible commit number to the CRO.

HOUR 0: PULL THE PIPELINE (CRM report, all open opps this quarter)
□ Columns: account, amount, stage, close date, forecast category, next step +
  date, days-in-stage, last activity, champion, competitor, compelling event
□ Tools: Salesforce/HubSpot report → Clari/BoostUp for the roll-up if you have it.

HOUR 1: STAGE HYGIENE (clean before you forecast — garbage in, garbage forecast)
□ STALE: no activity in 14 days → auto-flag "at risk", task the rep to update or push
□ MISSING GATES: deal in Stage 4 with no economic buyer/champion → bump back to Stage 3
□ SANDBAGGING/STUCK: close date pushed >2x → flag for deal review
□ NO COMPELLING EVENT in late stage → it's a slip risk, recategorize down
□ Probability is set by STAGE, not the rep's gut (1=10%, 2=20%, 3=40%, 4=60%, 5=80%)
□ Field completeness <95% = the forecast is fiction. Fix it now.

HOUR 2: CATEGORIZE EVERY DEAL
  COMMIT     — rep bets their job on it, >90%, signed-this-period likely
  BEST CASE  — plausible upside if things break right
  PIPELINE   — in-stage, real, but not committed this period
  OMITTED    — in CRM but not closing this period
⛔ A "commit" with no verbal yes + no procurement in motion is not a commit. Demote it.

HOUR 3: INSPECT — 5 QUESTIONS PER COMMIT/BEST-CASE DEAL
  1. What's the compelling event and its date? (no date = not commit)
  2. Have we met the economic buyer, or only the champion?
  3. What has to be TRUE this week for it to close? (paper out? security done?)
  4. What's the single biggest risk, and what's the mitigation?
  5. Is the close date real or aspirational? (check days-in-stage vs avg cycle)

COVERAGE MATH (do this before you trust any number):
□ Gap to target = quarter target − already-closed
□ Required coverage = 3-4x the gap (because ~25-33% win rate)
□ Open pipeline ÷ gap = your coverage ratio
  → <3x at quarter start = YOU WILL MISS. Generate/pull-forward pipeline NOW.
  → Example: ₹2Cr gap, 30% win rate → need ~₹6-7Cr open pipeline to be safe.

HOUR 4: THE FORECAST CALL (roll-up discipline)
□ Rep number → manager judgment overlay → RevOps data overlay → CRO commit
□ Each rep defends their commit against the 5 inspection questions live
□ Lock the commit number; log it to measure accuracy: |actual − commit| ÷ commit
□ A forecast always sandbagged (actual >> commit) is as broken as one that misses —
  call that out too.
□ Output: 1-line CRO summary — "Commit ₹X, Best Case ₹Y, coverage Zx, top 3 risks."
```


---

## PARTNERSHIPS & BIZDEV SCENARIOS (Agent 33)

### Scenario: Land Your First Integration Partner in 30 Days

```
GOAL: Sign and ship one integration with a complementary product that both sides
will co-promote — from cold target to live integration in 30 days.

DAY 1-3: BUILD THE TARGET LIST (pick complementary, not competitive)
□ List tools your customers ALREADY use alongside you (ask CS / check your own
  integrations-requested log / survey 10 customers: "what else is in your stack?")
□ Score each on: audience overlap, non-competitive, their API maturity, their
  partner program existence, reachability (do you know anyone there?)
□ Pick 5 targets. Rank by mutual value, not logo size — a smaller eager partner
  ships faster than a big one that ignores you.
⛔ Don't chase the biggest name first; you'll wait 6 months in their partner queue.

DAY 4-7: OUTREACH
□ Find the partnerships/BD owner (LinkedIn Sales Nav: "Partnerships" + company)
□ Warm intro if possible (mutual investor, shared customer, founder network)
□ Cold script (short — partnerships people get pitched constantly):
  "Hi [Name] — we're [product], used by [N] [shared-ICP] customers, many of whom
   also run [their product]. We keep getting asked to integrate. A [their]↔[ours]
   integration would [specific mutual value]. Worth a 20-min call to scope it?"
□ Lead with THEIR upside (their customers' retention/value), not yours.

DAY 8-10: THE PARTNER PITCH + MUTUAL VALUE MODEL
□ One-page mutual value model (make the win obvious for both):
  - For THEM: [stickier product / new use case / co-marketing reach / referral rev]
  - For US: [their distribution / credibility / fills a gap]
  - For the SHARED customer: [the actual workflow that gets better]
□ Quantify: "Your X customers using our integration retain Y% better" (cite if you can)

DAY 11-14: SCOPE TECHNICAL + GTM TOGETHER
□ Technical scope: which direction(s) data flows, auth (OAuth vs API key), which
  3 endpoints/events ship in v1 (NOT everything — just enough to be useful), who
  hosts the integration, who handles support tickets
□ GTM scope: listing in both marketplaces, a joint blog post, co-email to overlapping
  customers, optional referral/revshare, who announces and when
□ Name a DRI on each side + a shared Slack/Notion channel.

DAY 15-17: LIGHTWEIGHT AGREEMENT (don't over-lawyer v1)
□ A 1-2 page MOU or mutual NDA + simple partnership terms covers most v1 integrations:
  - Scope, IP ownership (each keeps its own), data handling/privacy (DPDP/GDPR),
    support responsibilities, co-marketing rights, term + termination, no exclusivity
□ Loop Legal (Agent 10) only for data-sharing/privacy clauses. Save the 30-page
  reseller MSA for when there's real revenue (see next scenario).

DAY 18-27: BUILD + TEST
□ Build the v1 (3 endpoints/events). Sandbox test on both sides. Get 2-3 mutual
  customers to beta it. Fix the top 3 issues.

DAY 28-30: LAUNCH THE INTEGRATION
□ Go live in both marketplaces/directories on the same day
□ Joint blog post + co-email to overlapping customers + both social accounts
□ Brief both sales/CS teams so they pitch it
□ Set a 30-day check-in: installs, attach rate, support load, revenue influenced.
```

### Scenario: Structure a Reseller / Channel Deal

```
GOAL: Structure a reseller/channel agreement with economics that work, enablement
that makes the partner productive, and guardrails that prevent channel conflict.

STEP 1: DECIDE THE MODEL (they're not the same — pick deliberately)
□ REFERRAL/AFFILIATE: partner sends a lead, you close + bill. Pay 10-20% of first-year
  ACV. Lowest commitment, you keep the customer relationship.
□ RESELLER: partner buys at a discount and sells at their price, you bill the partner.
  They own billing + tier-1 support. Higher margin to them, you lose direct contact.
□ VAR / SI (value-added reseller / system integrator): resells + implements/customizes.
  Common in India enterprise (the partner's relationships ARE the moat).
□ OEM/EMBED: your product white-labeled inside theirs (different beast — heavy legal).

STEP 2: THE ECONOMICS MENU (typical ranges — set floors with Finance Agent 18 / Pricing 36)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Referral fee:        10-20% of first-year ACV (sometimes recurring 5-10%)
  Reseller margin/discount: 20-40% off list (20-30% typical; 30-40% for VARs who
                           implement). Deeper only for committed volume.
  Renewal margin:      often lower than new-logo (e.g., 15-20%) — they did less work
  MDF (market dev funds): 1-5% of partner-sourced revenue, claimable for co-marketing
  Minimums/commitments: annual revenue or deal-count minimum to KEEP the tier/discount
  Tiering: Silver/Gold/Platinum — bigger discount + more MDF as they hit volume
⛔ Don't give your best discount on day one — leave room to reward performance.

STEP 3: TERM-SHEET CHECKLIST (the reseller agreement)
□ Discount/margin schedule + how renewals are priced
□ Exclusivity? (default: NON-exclusive, both ways — exclusivity kills you if they underperform)
□ Territory + segment (which geos/verticals are theirs)
□ Minimum commitments + what happens if missed (tier drops, not lawsuit)
□ Deal registration process (THIS is your conflict shield — see step 5)
□ Lead/account ownership rules; who owns the customer relationship + data
□ Support split (partner tier-1, you tier-2/3) + SLAs
□ Branding/co-marketing rights + MDF claim process
□ Term, renewal, termination + transition (who keeps the customer if it ends?)
□ Payment terms + GST/tax handling (India: GST invoicing, TDS; cross-border: withholding)
→ This one IS worth real legal review (Agent 10) — reseller MSAs create renewal liability.

STEP 4: ENABLEMENT (an un-enabled partner sells nothing)
□ Partner portal: deck, battlecards, demo env, pricing, deal-reg form
□ Certify their reps (same bar as your own — demo-back + pass)
□ A named partner manager + a shared pipeline view
□ Quarterly business review: their pipeline, attainment, MDF usage.

STEP 5: AVOID CHANNEL CONFLICT (the #1 reason channel programs implode)
□ DEAL REGISTRATION: first to register a named account owns it for N days (e.g., 90).
  This is the core anti-conflict mechanism — protects the partner who found the deal.
□ Clear rules of engagement: direct sales vs partner — who gets inbound on a logo?
□ Don't undercut your partner's price on direct deals (price parity or you destroy trust)
□ Don't let two partners fight over the same account (named-account lists)
□ Compensate your direct reps NEUTRALLY on partner deals so they don't sabotage the channel.
```


---

## DEVELOPER RELATIONS SCENARIOS (Agent 34)

### Scenario: Cut Time-to-First-Hello-World in Half (1-Week DevEx Sprint)

```
GOAL: Halve TTFHW (signup → first successful API call) in 5 working days by
instrumenting the funnel and fixing the top friction points yourself.

DAY 1 — INSTRUMENT + BASELINE:
□ Fire 3 events (with Agent 16): signup_completed, first_api_call (200 on a core
  endpoint), activation_event. Stamp each with timestamp + language/SDK + request_id.
□ Pull the current numbers: TTFHW p50 and p90, segmented by SDK (Node/Python/Go/curl).
  A 4-min Node p50 hiding a 40-min Go p50 means the Go SDK is the bug.
□ Write the baseline on the wall: "TTFHW p50 = __ min, p90 = __ min, activation = __%."

DAY 2 — RUN THE COLD-START TEST YOURSELF:
□ Open an incognito window. New email. Stopwatch running. No internal shortcuts,
  no Slack-ing an engineer — only the public docs and your keyboard.
□ Narrate aloud + screen-record every step. Log every second of friction:
  - Signup: forms vs GitHub OAuth? email verification wall? sales-call gate?
  - Test key: visible on the dashboard in <10s, or "contact sales to get a key"?
  - Quickstart: curl-first (trustworthy) or SDK-first (hidden magic, install detour)?
  - First call: does the copy-paste snippet actually return a 200 unmodified?
  - Error messages: trigger a missing `amount` — useful code+param+doc_url, or "bad request"?
□ Stop the clock at the first 200. That is your honest TTFHW. It will hurt.

DAY 3 — FIX THE TOP 3 (ranked by seconds lost):
□ Test key: auto-provision an `sk_test_` key on signup, visible in 10s, pre-filled
  into a runnable curl snippet on the dashboard ("Run this →" button).
□ Quickstart: rewrite curl-first, then the SDK. One canonical quickstart per language.
  Remove every "now go generate a key" detour — the key is already on the page.
□ Error objects: ship the standard shape — type, code, human message that says what
  to DO, param, doc_url, request_id. This is the most-read doc you'll ever write.

DAY 4 — KILL SDK ROT + ADD THE NUDGE:
□ Put every quickstart code sample into CI: compile + run it against the sandbox on
  every commit. A sample that can't rot is the only sample worth shipping.
□ Add the Aha nudge: first 200 → confetti + "you made your first call." Fire an
  email sequence: "you made your first test call — here's how to go live."

DAY 5 — RE-MEASURE WITH A REAL STRANGER:
□ Grab a developer who has never seen your product. Hand them the public docs only.
  Stopwatch. Time signup → first 200. No helping, no rescuing.
□ Compare before/after p50 + p90 per SDK. Target: p50 < 5 min (Stripe-grade), and
  at least halved from baseline. Publish the delta. Re-run the cold-start monthly.

⛔ Counting the call YOU make in a demo as TTFHW (must be a key the dev created)
⛔ Reporting a single blended TTFHW that hides one broken SDK — always segment by language
⛔ SDK-first quickstart (install + auth detour before the dev sees a single 200)
⛔ Gating the test key behind a sales call — devs leave before they ever sign up
⛔ "Fixing" docs without re-timing a real stranger — if you didn't time it, you didn't fix it

TOOLS: PostHog/Amplitude (events), Redoc/Swagger UI (try-it), Stainless/Speakeasy
(SDK gen), Algolia DocSearch (search), Statuspage/Instatus (status).
BENCHMARK: TTFHW p50 < 5 min, first_api_call > 60% within 24h, activation > 40% in 7d.
```

### Scenario: Run a Developer Launch / Hackathon

```
GOAL: Launch a new API/SDK with a hackathon that produces working apps and
post-event activation, not just a hype spike that decays in 72 hours.

T-3 WEEKS — PRE-LAUNCH READINESS (nothing ships until these are green):
□ Docs: quickstart (TTFHW < 5 min), API reference, top-10 how-to guides live.
□ Sandbox: test keys auto-provisioned in 10s; deterministic test triggers for every
  error path (Stripe-style "4000...0002 = declined" so devs can hit every branch).
□ Sample apps: 2-3 open-source starter repos on GitHub (clone → run in <10 min),
  one flagship that shows the core value end to end.
□ Cold-start test: a real stranger ships a working integration with public docs only.
□ Support rota + #help channel staffed; GitHub issue SLAs published (triage <1 biz day).

T-1 WEEK — HACKATHON MECHANICS:
□ Format: 48h online (Devpost/MLH) or 1-day in-person (cross-ref Agent 21).
□ Prizes: real money, not swag. e.g. ₹1L / ₹50K / ₹25K (or $2k/$1k/$500) + API
  credits + a "Built with Acme" feature on your blog/newsletter for winners.
□ Judging rubric (publish it up front, score 1-5 each): Use of our API (40%),
  Working demo (30%), Originality (20%), Polish/docs (10%). 3-4 judges, no ties.
□ Tracks/prompts so devs don't stare at a blank page: "best fintech integration,"
  "best use of webhooks," "most creative misuse."
□ Office hours scheduled: 2x daily 30-min live (Zoom/Discord stage) during the event.

LAUNCH-DAY RUN-OF-SHOW (hour-by-hour):
□ T-2h: final smoke test — sandbox up, keys provisioning, docs links not 404, status green.
□ T-0 (kickoff): 15-min live demo (build a real thing on stream), rules, prizes,
  judging rubric, where to get help. Drop the starter repos + Discord invite in chat.
□ T+0 to T+44h: advocates rotate office hours; triage #help; every recurring question
  becomes a docs PR THAT DAY (a question asked twice is a docs bug).
□ T+44h: submissions close on Devpost. T+45h: judging. T+47h: winners announced live.

POST-LAUNCH FOLLOW-UP (the part everyone skips):
□ Within 48h: personal thank-you to every team; ship promised prizes/credits fast.
□ Feature 2-3 best builds on the blog + monthly newsletter (they'll reshare → reach).
□ Convert: email every participant a "go-live" path; offer to feature production apps.
□ Feed product: file the top 5 DevEx friction points hit during the hackathon to
  Agent 30/06 — a hackathon is the cheapest usability lab you'll ever run.

⛔ Launching before the cold-start test passes (devs hit 404s live = permanent churn)
⛔ Swag-only prizes (serious builders won't lose a weekend for a t-shirt)
⛔ Hidden/subjective judging (publish the rubric or you'll spend the after-party arguing)
⛔ No post-event follow-up — the apps die, activation flatlines, and you funded a vanity spike

METRICS: apps submitted, % teams that hit a working demo, post-event 30-day activation
of participants vs matched control, samples reused ("I started from your repo").
```


---

## USER RESEARCH SCENARIOS (Agent 35)

### Scenario: Run a Usability Test in 3 Days (5 Users)

```
GOAL: Find ~85% of usability defects in one segment with 5 users in 3 days, and hand
engineering a severity-ranked fix list — not folklore.

DAY 1 — RECRUIT + DESIGN THE STUDY:
□ Frame the decision first: what ships/changes based on this? (e.g. "ship redesign or patch")
□ Recruit 5 users from ONE homogeneous segment (3 segments → run 5 each, don't mix).
  Sources: in-app intercept (Sprig/Pendo), UserInterviews/Respondent, India vernacular
  via BorderlessAccess. Over-recruit 7 to land 5 (no-show buffer).
□ Screener (8-12 Qs max): qualify by BEHAVIOR not demographics; add one disqualifying
  behavior Q and a "red herring" to catch professional respondents.
□ Incentive: 30-min consumer ₹800-1,500 / $40-75. Pay everyone who shows.
□ Write 3-6 TASKS as GOALS, never instructions:
  GOOD: "You want to send ₹2,000 to your sister. Do that."
  BAD:  "Click Send Money, enter 2000, tap Confirm." (you just gave away the answer)
□ Define success criteria per task up front: success / partial / fail.

DAY 2 — MODERATE THE SESSIONS:
□ Per session (45 min): consent + recording permission FIRST. Frame: "We're testing
  the product, not you. There are no wrong answers. Think aloud — narrate everything,
  including confusion."
□ THINK-ALOUD PROTOCOL: keep them verbalizing. When they go silent: "What are you
  thinking right now?" When they ask you a question, echo it back, never answer:
  "What would you expect to happen if you tapped that?"
□ Measure per task: success/partial/fail, time on task, errors, assists needed,
  then SEQ (Single Ease Question, 1-7). At the end: SUS (0-100; >68 = above average).

WHAT NOT TO SAY (the moderator's discipline):
⛔ "Just click the button at the top right" (rescuing — you've destroyed the data point)
⛔ "Most people find this easy" (acquiescence pressure — they'll fake success)
⛔ "Did you like that?" (leading + yes-bias → ask "walk me through what just happened")
⛔ Filling silence — embrace 5 seconds of quiet; struggle IS the finding
⛔ Nodding/frowning at their choices (stay neutral-faced; your face is an instruction)

DAY 3 — SEVERITY-RATE + READOUT:
□ List every issue observed. Rate each on the Nielsen scale:
  0 = not a problem  1 = cosmetic  2 = minor  3 = major  4 = catastrophe
□ Prioritize by (frequency × impact × persistence): a "4" hitting every user in the
  core flow jumps the queue ahead of any new feature.
□ Readout (1 page + 3 clips): each finding = Observation → Interpretation →
  Implication → Recommendation, with a timestamped clip and N stated.
□ Do NOT write "75% of users" on n=5 — that's malpractice. Use "most / several /
  a few" and show the evidence.

TOOLS: Lookback/Zoom (moderated record), Maze/UserTesting (if you scale to unmoderated),
Dovetail/Condens (clip + tag nuggets).
BENCHMARK: 5 users ≈ 85% of issues in one segment (Nielsen). SUS > 68 above average.
```

### Scenario: Synthesize Interviews into Insights in 1 Day

```
GOAL: Turn a stack of raw interviews into evidenced, decision-changing insights in
8 hours, logged to the repository so the org stops re-running this study every 9 months.

HOUR 0-1 — PREP THE RAW MATERIAL:
□ Get transcripts (auto via Dovetail/Otter/Notably; clean the worst errors only).
□ One observation = one unit. Pull verbatim quotes + timestamps. Tag each with
  segment + source study. Do NOT paraphrase into your own words yet (that's where bias enters).

HOUR 1-4 — AFFINITY MAPPING (bottom-up, let themes emerge):
□ Board in FigJam/Miro: one observation per sticky, color-coded by participant.
□ Cluster bottom-up by similarity — do NOT start from your pre-existing hypotheses.
□ When a cluster forms, name it as a FINDING (e.g. "users distrust auto-renew because
  a past app silently charged them").
□ COUNT supporting evidence per cluster: frequency = signal strength. Note how many
  DISTINCT participants (not quotes) support each — 6 quotes from 1 person is n=1.

HOUR 4-6 — THEME FREQUENCY + INSIGHT STATEMENTS:
□ Build the frequency table: theme | # participants | confidence (High/Med/Low).
□ Confidence = (how many participants) × (consistency) × (behavioral vs stated).
  Revealed behavior ("here's what I did") outranks stated preference ("I would...").
□ Write each insight to the quality bar — surprising/decision-changing, evidenced,
  actionable. Frame: Observation → Interpretation → Implication → Recommendation.
  Kill non-insights like "users want it faster" — that changes no decision.

HOUR 6-7 — LOG NUGGETS TO THE REPOSITORY:
□ Atomic nuggets in Dovetail/Condens/EnjoyHQ: clip/quote tagged with theme, segment,
  source study, confidence. Nuggets → findings → insights, each linked to evidence.
□ De-identify before anything leaves the secure store — never raw PII in a shared repo.

HOUR 7-8 — SHARE THE READOUT:
□ 1-page summary: "We talked to N [segment]. [Theme] appeared in X of N. They currently
  [behavior], which fails because [pain]. They want [outcome]. Confidence: [H/M/L]."
□ Map each recommendation to an OWNER (Agent 04/05/06) with a next step.
□ Send to the actual decision owner against their deadline — async doc + a 15-min walk-through.

⛔ Top-down coding (forcing quotes into your hypotheses) — cluster bottom-up
⛔ "We talked to 3 customers and they all wanted X" → folklore; require method + sample + confidence
⛔ Percentages on a qual sample ("80% said...") — use most/several/a few
⛔ Naked claims with no clip/verbatim attached — every finding links to evidence
⛔ A readout with no recommendation and no owner — research that changes no decision is theater
```


---

## CONTENT & DOCS SCENARIOS (Agent 42)

### Scenario: Ship API Reference + Quickstart Before Launch (1 Week)

```
GOAL: Ship a complete API reference + a 5-minute quickstart on a docs-as-code
pipeline with CI link-checking, ready for launch day in 5 working days.

DAY 1 — STRUCTURE (Diátaxis split):
□ Split docs into the four modes — do NOT blend them:
  - Tutorial (learning-oriented): "Build your first X" — holds the reader's hand
  - How-to (task-oriented): "How to refund a payment" — for someone who knows the basics
  - Reference (information-oriented): every endpoint, param, error — dry and complete
  - Explanation (understanding-oriented): "How idempotency works" — the why
□ A quickstart is a TUTORIAL. The endpoint list is REFERENCE. Never mix them — the
  #1 docs failure is reference prose pretending to be a tutorial.

DAY 2 — GENERATE REFERENCE FROM OPENAPI:
□ Source of truth = the OpenAPI/Swagger spec (so docs can't drift from the API).
□ Render with Redoc / Swagger UI / Stainless / Mintlify. Every endpoint auto-gets:
  description, params, example request, example response, error codes.
□ Hand-enrich the spec where it's thin: every param needs a one-line "what + why,"
  every endpoint a runnable example, every error its code + doc_url.
□ Wire a live "Try it" using the reader's OWN test key (not a shared sandbox key).

DAY 3 — WRITE THE 5-MINUTE QUICKSTART:
□ Curl-first, then the SDK (devs trust curl — no hidden magic). Copy-paste must run
  UNMODIFIED and return a 200 (test key pre-filled for logged-in readers).
□ Structure: 1) get your test key (already on the page) 2) make one call 3) see the
  result 4) "you just did X." One outcome, no detours, no "now go configure...".
□ Time it yourself with a stranger: signup → first 200 must be < 5 min, or cut steps.

DAY 4 — DOCS-AS-CODE PIPELINE + CI:
□ Docs in the repo as Markdown/MDX, reviewed via PR like code (docs-as-code).
□ CI on every PR: (a) link-checker (lychee / markdown-link-check) — zero broken links;
  (b) compile + RUN every code sample against the sandbox (no sample can rot);
  (c) lint prose (Vale) for style-guide + terminology consistency.
□ Auto-deploy on merge to main (Mintlify/Docusaurus/GitHub Pages + Algolia DocSearch).

DAY 5 — REVIEW + LAUNCH-DAY DOCS CHECKLIST:
□ SME review (an engineer) for accuracy; editor pass for voice; DevRel cold-start pass.
LAUNCH-DAY DOCS CHECKLIST (all green or launch slips):
  □ Quickstart returns a 200 unmodified, timed < 5 min by a real stranger
  □ Every reference endpoint has a runnable example + documented error codes
  □ CI link-check passing (0 broken), all code samples compile + run in CI
  □ Search works; top-10 expected queries return the right page (track zero-result Qs)
  □ Versioned + changelog page live; "edit this page" + feedback widget on every page
  □ hreflang/lang tags if multi-locale; mobile renders; no 404s in the nav

⛔ Hand-writing the reference (it drifts from the API in a week — generate from OpenAPI)
⛔ Blending tutorial + reference (the classic Diátaxis violation that confuses everyone)
⛔ Quickstart that needs edits before it runs, or starts with the SDK install
⛔ No CI on samples — rotted code in docs is worse than no code
⛔ Shipping with broken links — run the link-checker in CI, fail the build on red

TOOLS: Redoc/Mintlify/Docusaurus (render), Stainless/Speakeasy (SDK+ref), Vale (prose
lint), lychee (link-check), Algolia DocSearch (search).
BENCHMARK: quickstart TTFHW < 5 min, docs "helpful" rating > 80%, zero-result search < 5%.
```

### Scenario: Fix a Confusing Onboarding Flow (UX-Writing Audit in 2 Days)

```
GOAL: Audit and rewrite the microcopy across a leaky onboarding flow, A/B the new
copy, and prove the change moved task success / drop-off — in 2 days.

DAY 1 AM — SCREENSHOT EVERY STEP + EVERY STATE:
□ Walk the flow as a brand-new user. Screenshot every screen AND every state:
  default, empty, loading, error, success. Most confusion lives in the states nobody designed.
□ Annotate every piece of microcopy: button labels, headers, helper text, placeholders,
  error messages, empty-state copy, tooltips, system/toast messages.
□ Overlay the funnel data (with Agent 16): which step has the biggest drop-off? Start there.

DAY 1 PM — APPLY THE PRINCIPLES (rewrite, screen by screen):
□ CLEAR > CLEVER: "Verify your email" beats "Let's get you sorted!"
□ ACTION-ORIENTED buttons: verb + object. "Create account" not "Submit" / "OK" / "Continue".
□ TELL THEM WHAT TO DO, not what went wrong:
  BAD:  "Error: invalid input"
  GOOD: "Enter a 10-digit mobile number (no country code)"
□ Front-load value, cut filler: drop "Welcome! We're so excited..." — say what to do next.
□ Plain language, no jargon/internal product names; one idea per sentence.
EMPTY / ERROR / LOADING STATES (rewrite each deliberately):
  □ EMPTY: don't show a blank — say what goes here + the one action to fill it
    ("No transactions yet. Send your first payment to see it here. [Send money]")
  □ ERROR: name the cause + the fix + a way out (retry / contact), never a raw code
  □ LOADING: set expectation ("Confirming your payment — this takes a few seconds"),
    especially after redirects (UPI/3DS return states read as failure if blank)

DAY 2 AM — A/B THE NEW COPY:
□ Ship old vs new copy as a 50/50 split (PostHog / Optimizely / VWO / GrowthBook).
□ Change COPY ONLY — hold layout/flow constant so the copy is the only variable.
□ Primary metric = step completion / task success; guardrail = downstream activation
  (don't win the click but lose the outcome).
□ Run to power: ≥ ~100 completions per variant for a ±10% read; don't peek-and-stop early.

DAY 2 PM — MEASURE + DECIDE:
□ Compare task success rate and step drop-off, old vs new, with the SEQ if you ran one.
□ Winner = higher completion AND non-negative downstream activation. Ship it.
□ Document: which copy changed, the lift, what you'll test next (one screen at a time).

⛔ Rewriting only the happy path — empty/error/loading states are where users actually rage-quit
⛔ Clever copy that adds a beat of "wait, what?" — onboarding is not the place for jokes
⛔ Generic errors ("something went wrong") that don't tell the user what to fix
⛔ Changing copy AND layout together (you'll never know which moved the metric)
⛔ Calling a 30-user A/B "significant" — underpowered tests lie; hit the sample or don't claim a win

TOOLS: PostHog/Optimizely/VWO (A/B), FullStory/Hotjar (replay the confusion), Vale (consistency).
BENCHMARK: target +5-15% step completion on the worst-leaking step; SEQ up, drop-off down.
```


---

## LOCALIZATION & I18N SCENARIOS (Agent 43)

### Scenario: Launch Your First New Locale in 3 Weeks

```
GOAL: Ship your first new locale to GA in 3 weeks on a TMS-to-CI pipeline, with
in-context QA and per-locale conversion tracking — not "we translated the buttons."

WEEK 0 (DAYS 1-2) — PICK THE LOCALE BY ROI + GATE i18n:
□ Score candidates: Market size (TAM) × Strategic priority × Ease (script/payment/legal
  lift) ÷ Cost to maintain. Pick by your actual user geography, not prestige.
□ Confirm you can SUPPORT it: local-language support, local payment, legal entity. If
  not, don't — half-localization erodes trust more than English-only.
□ Key on the FULL locale (BCP 47): en-IN ≠ en-US, pt-BR ≠ pt-PT, zh-Hans ≠ zh-Hant.
□ i18n READINESS GATE: run the §1 checklist + pseudo-loc. If it fails (un-externalized
  or concatenated strings), BLOCK translation until Agent 06 fixes it. Retrofitting
  l10n onto a non-i18n'd product is 5-10× more expensive — the cardinal rule.

WEEK 1 — EXTERNALIZE + SET UP THE PIPELINE:
□ Externalize EVERY user-facing string to resource files (JSON/.po/.xliff). Zero
  concatenation — "You have " + n + " new" is forbidden.
□ ICU MessageFormat for plurals/gender/select (plural RULES aren't English — Arabic 6
  forms, Polish 4): "{count, plural, =0 {No items} one {# item} other {# items}}".
□ Stand up the TMS (Lokalise/Phrase/Crowdin); wire CI push (new keys) + pull
  (translations). Build the GLOSSARY (lock "Wallet", "UPI", brand names) and seed the
  Translation Memory. Upload screenshots so linguists see context (with Agent 42).

WEEK 2 — TRANSLATE (MT+post-edit vs human, by tier):
□ Tier 1 UI / marketing / legal → full in-country native linguist (never bilingual
  staff "helping out"; marketing/legal copy is NEVER raw MT).
□ Tier 2 bulk UI / docs → MT + human post-edit (MTPE): DeepL/Google draft, linguist edits.
□ Apply glossary + TM so you pay full rate once per unique segment, fuzzy-match after.

WEEK 3 — QA, ADAPT, RELEASE:
□ IN-CONTEXT QA: linguist reviews strings IN the running UI (not a spreadsheet — the
  #1 source of mistranslation is missing context). File bugs back into the TMS.
□ Pseudo-loc + (if RTL) pseudo-RTL pass; functional QA: dates/numbers/currency via
  Intl APIs (India grouping 1,23,456; money as integer minor units, format at display).
□ LOCALE ADAPTATION: local payment methods first (UPI/RuPay India, Pix/boleto Brazil,
  iDEAL NL, Alipay/WeChat China); localized SMS/OTP/email/push/PDF; date/address/name
  formats; legal — Terms/Privacy/consent + tax format (GST/VAT) + DATA RESIDENCY check
  with Agent 39/11 BEFORE launch.
□ Support ready: local-language help docs (Agent 42) + support coverage (Agent 17).
□ STAGED ROLLOUT: beta to a slice of in-market users, watch metrics/feedback → GA.
□ MEASURE: locale-specific conversion/activation/retention vs the EN baseline. If the
  locale doesn't convert, you mistranslated the VALUE (payment/imagery/tone), not the words.

⛔ Translating before the i18n gate passes (you'll re-engineer mid-translation)
⛔ Localizing into a market you can't support/pay/legally serve
⛔ Linguists translating in a spreadsheet with no screenshots (context-free = wrong)
⛔ Raw MT on legal/marketing copy
⛔ GA without local payment methods (the single biggest conversion killer)
⛔ Skipping the data-residency check — that's an infra+legal requirement, not a string

TOOLS: Lokalise/Phrase/Crowdin (TMS), DeepL (MT draft), Intl.* / CLDR (formatting).
BENCHMARK: 100% Tier-1 strings translated+approved before GA; "untranslated keys in prod" = 0.
```

### Scenario: i18n Readiness Audit in 1 Day

```
GOAL: Determine in 8 hours whether the codebase can support ANY locale, and output a
prioritized fix list — before a single word is translated.

HOUR 0-1 — RUN PSEUDO-LOCALIZATION FIRST (highest-leverage test that exists):
□ Generate a pseudo-locale from source EN that: expands length ~40%
  ([!!! Ŝàĝē çháñĝéŝ !!!]), adds accents/diacritics, wraps every string in brackets.
□ Run it in staging and click through every screen:
  - Plain ASCII English still on screen = a HARDCODED, un-externalized string (file it)
  - Truncated/overflowing labels = text-expansion failures (file it)
  - Tofu boxes (□□□) or missing glyphs = encoding / font-coverage gaps (file it)

HOUR 1-4 — THE CHECKLIST (mark each PASS/FAIL with the offending file):
□ UTF-8 EVERYWHERE: storage, transport, DB collation, HTTP headers, file I/O.
□ STRINGS EXTERNALIZED: every user-facing string in resource files; translator
  context/comment on each key ("Order" = noun or verb?).
□ NO CONCATENATION: grep for `"..." + var + "..."` patterns — each is a plural/word-order bug.
□ LOCALE-AWARE FORMATTING via Intl/CLDR (never hand-rolled):
  - Numbers: Intl.NumberFormat (India 1,23,456 vs US 123,456)
  - Currency: symbol position/decimals/spacing; money stored as integer minor units
  - Dates/times: Intl.DateTimeFormat; time stored ISO-8601 UTC, formatted at display
□ PLURAL RULES via ICU (not English assumptions — Arabic 6 forms, Polish 4, Japanese 1).
□ RTL ARCHITECTURE: CSS logical properties (margin-inline-start, not -left), dir="rtl"
  support, bidi handling for mixed LTR/RTL (numbers stay LTR inside RTL text).
□ TEXT-EXPANSION BUDGET: layouts tolerate +30-40%; no fixed-width containers around
  translatable text; no flags-as-language icons.
□ LOCALE PLUMBING: resolution chain (user setting → account → Accept-Language → geo-IP
  → default; user choice wins + persists); locale propagates to web/API/email/push/PDF/SMS.
□ CASE-FOLDING/SORTING locale-aware (German ß, Turkish dotless ı — the "Turkey test").

HOUR 4-7 — TRIAGE INTO A PRIORITIZED FIX LIST:
□ P0 (blocks ALL locales — fix before any translation): not UTF-8 end-to-end;
  un-externalized strings; concatenation; no Intl formatting. These are 5-10× cheaper now.
□ P1 (blocks SPECIFIC locales): no ICU plurals (blocks Arabic/Polish/Slavic); no RTL
  (blocks Arabic/Hebrew/Urdu/Farsi); font gaps (blocks Indic/CJK).
□ P2 (polish): expansion truncation, sort order, minor format edge cases.
□ Each item: file/line, what's wrong, the fix, the locales it blocks, owner (Agent 06).

HOUR 7-8 — REPORT:
□ One page: overall PASS/FAIL gate verdict + the P0/P1/P2 list. The headline:
  "No locale ships until P0 is clear and pseudo-loc renders clean."

⛔ Auditing in a spreadsheet instead of running pseudo-loc (it finds hardcoded strings instantly)
⛔ Hand-rolling number/date/currency formatting instead of Intl/CLDR
⛔ Treating "supports plurals" as English-only (test a 6-form language)
⛔ Declaring ready without clicking every screen in the pseudo-locale
⛔ Calling RTL "later work" when the architecture (logical properties) must land up front

TOOLS: pseudo-loc via your TMS or a CI script, Intl.* APIs, grep for concatenation,
BrowserStack (font/script rendering across devices).
BENCHMARK: pseudo-loc renders with zero plain-English (un-externalized) strings and zero
overflow before any real locale is greenlit.
```

---

## PRICING & MONETIZATION SCENARIOS (Agent 36)

> Pricing/financial content below is an illustrative framework, not financial or legal
> advice. Verify localization, discounts, and revenue recognition with a CA/CPA + counsel.

### Scenario: Run a Van Westendorp Willingness-to-Pay Study in 1 Week

```
GOAL: Convert "what should we charge?" from a gut number into a defensible price range
backed by 40-60 buyer responses, in 7 days, for <₹20K.

DAY 1: SAMPLE + RECRUIT
□ Define the respondent: must be a real BUYER of your value-metric unit (not a "builder,"
  not a "would be cool" tire-kicker). For B2B = the budget holder/economic buyer.
□ Sample size: 40 minimum, 60+ ideal. Below 30 the intersection curves get noisy.
□ Recruit from (cheapest → priciest):
  - Existing trial users / waitlist / churned users (email blast, ₹0)
  - Your niche communities: relevant subreddit, LinkedIn search by title, Slack/Discord
  - Panel: Prolific (~$1.50/response), Respondent.io (B2B, ~$30-75/response for niche)
□ Screener Q at the top: "Have you bought/paid for [category] in the last 12 months?"
  → kill anyone who hasn't. Stated WTP from non-buyers is fiction.
□ Incentive: ₹100-200 voucher or entry into a draw. Skip for warm/existing users.

DAY 2: WRITE THE 4 PSM QUESTIONS (anchor them to your value-metric unit)
Frame: "Imagine [product] does [core value]. Priced per [seat/mo / 1000 calls / etc.]."
  Q1 (TOO EXPENSIVE): "At what price would it be so expensive you would NOT consider it?"
  Q2 (EXPENSIVE):     "At what price is it getting expensive, but you'd still consider it?"
  Q3 (CHEAP/BARGAIN): "At what price is it a BARGAIN — great value for the money?"
  Q4 (TOO CHEAP):     "At what price is it so cheap you'd QUESTION the quality?"
⛔ Don't ask "how much would you pay?" directly — that single number is meaningless.
⛔ Don't show your current price first — anchors every answer. Describe value, not price.
□ Use open numeric fields (₹), not dropdowns (dropdowns cap and bias the range).

DAY 3: FIELD IT (Typeform / Google Forms / SurveyMonkey)
□ Typeform: one question per screen, numeric input, currency mask. ~3 min completion.
□ Add 2 segmentation Qs (company size / use case) so you can cut the data later.
□ Soft-launch to 5 people first → check for confused responses, then send to all.
□ Target: ship by Day 3 morning so you have 4 days to collect.

DAY 4-5: COLLECT + CLEAN
□ Chase non-responders once on Day 5. Aim for 40+ completes.
□ Clean: drop responses where Too Cheap > Cheap > Expensive > Too Expensive ordering is
  broken (logically inconsistent — they didn't read). Usually 5-15% get dropped.

DAY 6: PLOT THE 4 INTERSECTIONS (Excel/Sheets — it's just cumulative % curves)
□ For each price point, compute cumulative % who said each. Plot 4 lines:
  - "Too Cheap" (descending) and "Cheap" (descending)
  - "Expensive" (ascending) and "Too Expensive" (ascending)
□ Read the 4 intersections:
  • PMC (Point of Marginal Cheapness)   = "Too Cheap" × "Expensive"     → LOWER bound
  • PME (Point of Marginal Expensiveness)= "Too Expensive" × "Cheap"     → UPPER bound
  • OPP (Optimal Price Point)           = "Too Cheap" × "Too Expensive"  → resistance balanced
  • IPP (Indifference Price Point)      = "Cheap" × "Expensive"          → the "expected" price
□ Range of Acceptable Pricing = PMC → PME. (Tool shortcut: van-westendorp.com plots free.)

DAY 7: DECIDE THE PRICE
□ Set list price near OPP. Lean toward IPP (higher) for premium positioning, toward PMC
  for land-grab / PLG acquisition.
□ DISCOUNT the result ~20-30%: stated WTP runs above actual paid WTP. PSM is a RANGE
  finder, not a revenue-maximizer — pair with a Gabor-Granger pass for the exact point.
□ Triangulate against reality before committing: win/loss notes, current discount depth,
  nearest competitor's list. If PSM says ₹6,000 but you lose every deal at ₹4,000, trust
  the deals.
□ Output 1-pager: "n=[X] qualified buyers. Acceptable range ₹[PMC]–₹[PME]. OPP ₹[Y],
  IPP ₹[Z]. Recommend list ₹[OPP-discounted]. Confidence: [H/M/L]."
⛔ Don't treat PSM as gospel — it measures sensitivity, not purchase intent or volume.
```

### Scenario: Raise Prices Without Losing Customers (Rollout Runbook)

```
GOAL: Lift ARPA via a price increase with <2% net churn impact, fully reversible, over
~60 days — the cheapest revenue you'll ever book if you don't torch trust.

WEEK 1: DECIDE THE INCREASE + BUILD THE VALUE JUSTIFICATION
□ Size it: typical SaaS list increase is 5-15%/yr. >20% needs a real value story or a
  repackage, not just a number bump.
□ Tie EVERY rupee to shipped value: list the features/capacity/integrations added since
  the last price (or since the cohort joined). "Since you joined we shipped X, Y, Z."
⛔ Never justify with "due to rising costs" alone — customers don't care about your COGS.
□ Confirm the new price clears the gross-margin floor (Agent 18) AND sits inside your
  WTP range (run the Van Westendorp study above if you don't have one).

WEEK 1: SEGMENT + GRANDFATHERING DECISION
□ NEW customers: new price applies immediately. No grandfather needed.
□ EXISTING customers — pick one (most → least customer-love):
  - Time-boxed grandfather: locked 12 months, then migrate on renewal ← most common
  - Migrate at a SMALLER increase than new-customer price
  - Permanent grandfather (loyalty moat, but a legacy-pricing liability forever)
□ NEVER raise mid-term on an annual contract. Raise on RENEWAL only.
□ Edge cases: honor contractual price-lock clauses; delay customers mid-implementation;
  sunset discontinued legacy plans gracefully (don't strand them).

WEEK 2-3: COMMS SEQUENCE (30-60 days notice; personal for top accounts)
□ T-45 days — top 20 accounts get a personal email or call from CSM/founder FIRST.
□ T-30 days — broad announcement email:
  Subject: "An update to your [Product] plan"
  "Hi [Name] — over the past year we've shipped [X, Y, Z] and your plan now does far more
   than when you joined. On [DATE], your price moves from ₹[old] to ₹[new]. As a thank-you
   for being with us, your current price is LOCKED if you switch to annual before [DATE] —
   that also saves you [%]. Questions? Just reply, I read every one. — [Founder]"
□ T-14 days — reminder email (annual-lock offer expiring → pulls cash forward).
□ T-0 — change goes live; in-app banner confirms.
⛔ Don't bury the increase in a footer. Lead with value, state the number plainly.

ROLLOUT TIMELINE
  Day 0:    New customers see new price (cohort-based — clean, fair).
  Day 30:   Existing-customer notices sent.
  Day 30-90: Existing migrate on their renewal dates.

MONITOR + ABORT CRITERIA (watch by cohort for 90 days)
□ Track daily: downgrade rate, cancellation rate, annual-lock take-rate, support sentiment,
  reply tone, new-business conversion (did the higher price scare off new buyers?).
□ ABORT / PAUSE triggers — if ANY breach, stop the rollout and reassess:
  - Voluntary churn in the affected cohort up >50% vs. trailing baseline
  - Net revenue from the cohort DOWN after 30 days (increase didn't cover churn)
  - Support-ticket sentiment cratering / public backlash
□ Have a save-offer ready (Agent 17): keep old price for annual commit, pause plan,
  downgrade tier — catch them BEFORE they cancel.

MEASURE PRICE REALIZATION (Day 90)
□ Price realization = avg actual sell price ÷ list price. Target >85%.
□ Net = (ARPA lift × retained accounts) − (revenue lost to churn). If net < 0, you raised
  too far or justified too weakly — roll back the next cohort, keep grandfathered ones.
□ Watch discount leakage didn't spike as reps "save" deals: (List ARR − Booked ARR) ÷
  List ARR should stay <15%.
```


---

## GROWTH SCENARIOS (Agent 37)

### Scenario: Define Your Activation "Aha Moment" in 1 Week

```
GOAL: Replace "I think onboarding is fine" with a concrete, measurable activation event
("X actions in Y days") proven to predict retention — then redesign onboarding to it.

PRE-REQ: ≥8-12 weeks of cohort data and a working event stream (Agent 16). If events
aren't tracked, fix that FIRST — you can't find an aha you don't log.

DAY 1: PULL COHORT DATA
□ Define retained vs. churned cleanly for YOUR frequency:
  - Daily-use product → D30 retention (active on/after day 30)
  - Weekly B2B → W4 retention (active in week 4)
  - Don't use D1 for a monthly product — it will lie to you.
□ Export, per user: signup date, every early action + timestamp, and the retention label.
  Tools: Amplitude/Mixpanel (have this built-in), or SQL on your warehouse + a notebook.

DAY 2-3: FIND THE ACTION CORRELATED WITH RETENTION
□ List 8-15 candidate early actions (invited a teammate, created a project, connected a
  data source, sent first message, completed setup, hit feature X).
□ For each: split users who DID it in the first N days vs. who didn't; compare retention.
  Pick the action with the BIGGEST retention gap between doers and non-doers.
  (Amplitude "Compass" / Mixpanel correlation reports do this; or a SQL group-by.)
□ Real benchmarks to calibrate the magic number method:
  - Facebook: 7 friends in 10 days   - Slack: 2,000 team messages
  - Dropbox: 1 file in 1 folder on 1 device   - Twitter: follow ~30 accounts

DAY 4: THE "X IN Y DAYS" MAGIC-NUMBER METHOD
□ Take the winning action. Sweep the threshold N (1, 2, 3, 5, 10...) and the window Y
  (3, 7, 14 days). For each (N, Y) plot retention of users who hit it vs. who didn't.
□ Find the KNEE: the point where retention jumps sharply, and beyond which more N stops
  adding much. That knee = your magic number. E.g. "2 teammates invited + 1 shared action
  within 3 days → 55% retain vs 9%."

DAY 5: VALIDATE CAUSATION (not just correlation)
⛔ Correlation trap: maybe engaged users do the action AND retain — the action isn't the
  cause. Heavy users naturally do more of everything.
□ Sanity checks: does the gap survive when you control for early session count? Is there a
  plausible mechanism (the action delivers real value)?
□ The real test: run a small experiment NEXT sprint — nudge a random group toward the
  action. If their retention rises vs. control, it's causal. If not, it was just a proxy
  for "already engaged." Don't bet the onboarding redesign on correlation alone.

DAY 6-7: SET THE METRIC + REDESIGN ONBOARDING TO IT
□ Declare the activation metric: "% of new users who [magic number] within [window]."
  Set a target activation rate (B2B SaaS 40-70%, consumer 20-40%) and a time-to-value
  (TTV) target — best-in-class hit value in the FIRST SESSION.
□ Redesign onboarding so the MAX % reach the aha as FAST as possible:
  - Strip every step not load-bearing toward the aha (progressive disclosure for the rest)
  - Show value before asking for work: templates, sample data, a "magic first result"
  - Setup checklist (goal-gradient effect) that ends AT the aha action
  - Day-1/Day-2 lifecycle nudge for users who stalled before the aha
□ Instrument drop-off at each step → signup → setup → aha. Watch activation rate
  cohort-over-cohort (weekly), not blended. Each new cohort's curve must sit above the last.
```

### Scenario: Ship a Growth Experiment in One Sprint

```
GOAL: Run one rigorous growth experiment end-to-end in ~2 weeks — hypothesis to a defensible
ship/kill/iterate call — without fooling yourself with a peeked, underpowered result.

DAY 1: THE HYPOTHESIS BACKLOG
□ Each backlog item is ONE row: hypothesis, the INPUT metric it moves, funnel stage,
  expected impact. Format: "If we [change], then [input metric] improves by [X%] because
  [reason]." Vague "improve engagement" is not a hypothesis.
□ Keep it living — add ideas from data, support, sales, churn surveys.

DAY 1: SCORE WITH ICE / RICE → pull from the top
  ICE  = Impact × Confidence × Ease            (1-10 each; fast, for big backlogs)
  RICE = (Reach × Impact × Confidence) ÷ Effort (when reach varies a lot across ideas)
□ Score every candidate, rank, take #1. Re-score as you learn — it's not a one-time rank.

DAY 2: WRITE THE EXPERIMENT DOC (before any code)
□ Hypothesis (the row above) | Primary metric (ONE) | Guardrail metrics | Variants
  (control vs treatment) | Audience + % split | Duration | Decision rule (pre-committed).
□ Pre-commit the decision rule NOW so you can't rationalize later: "Ship if treatment lifts
  [metric] by ≥MDE at p<0.05 with no guardrail breach."

DAY 2-3: MDE + SAMPLE SIZE (don't run a test you can't read)
□ Pick the Minimum Detectable Effect — the smallest lift worth shipping (e.g. +5% relative).
□ Compute sample size per variant for 80% power, 95% confidence. Tools: Evan Miller's
  calculator, statsig.com, or your platform's built-in. Baseline 10% → +5% relative MDE
  typically needs ~tens of thousands per arm; small MDEs need huge n.
□ REALITY CHECK: if your traffic can't reach n in ≤2-3 weeks, you must either (a) pick a
  bigger, bolder change (larger MDE), (b) move the test upstream to a higher-traffic step,
  or (c) accept it's directional, not significant. Underpowered tests waste sprints.

DAY 3: GUARDRAILS + HOLDOUT
□ Guardrail metrics protect what you're NOT optimizing: retention, revenue/ARPA, NPS,
  latency. A conversion win that quietly tanks retention is a LOSS — measure net.
□ Hold back a global holdout (~5% never sees growth changes) to measure TRUE cumulative
  impact across all experiments and catch death-by-a-thousand-local-wins.

DAY 4-12: RUN IT (behind a feature flag)
□ Tools: PostHog / Statsig / GrowthBook / Optimizely / LaunchDarkly. 50/50 split, random
  at the right unit (user or account — account-level for B2B to avoid cross-talk).
□ Run ≥1 full business cycle (≥1 week, often 2) regardless of when "significance" appears.
⛔ NO PEEKING and stopping early at the first p<0.05 — repeated looks inflate false
  positives massively. Wait for the pre-set n AND duration.
□ Check SRM (sample ratio mismatch): if the 50/50 split is actually 53/47, the test is
  broken (flag bug, bot traffic) — fix and restart, don't analyze it.

DAY 13: READ IT
□ Did treatment beat control on the PRIMARY metric by ≥MDE at p<0.05? Check the confidence
  interval, not just the point estimate.
□ Did any GUARDRAIL breach? If yes → it's a loss even if the headline won.
□ Segment-check for surprises (new vs returning, mobile vs desktop) but don't go p-hacking
  for a winning slice after a flat overall result.

DAY 14: SHIP / KILL / ITERATE
□ SHIP: significant win, no guardrail breach → roll to 100% (keep the holdout). Document.
□ KILL: flat or negative, or guardrail breach → revert the flag. A kill is a WIN — you
  learned cheaply. ~70% of growth tests don't win; that's expected.
□ ITERATE: directional-but-not-significant, or a hint in a segment → refine the hypothesis
  and re-queue (e.g. bigger change, narrower audience). Log the learning either way.
□ Track team metrics: tests-shipped/week (velocity is the real moat) and win rate. Keep
  the portfolio ~70% iterative, ~30% bold bets to escape local maxima.
```


---

## DATA ENGINEERING SCENARIOS (Agent 38)

### Scenario: Stand Up the Modern Data Stack in 2 Weeks

```
GOAL: Go from "data scattered in 6 SaaS tools + a prod DB" to one trusted, governed
dashboard the team actually believes — in 2 weeks, with cost guardrails from day one.

DAY 1: MAP SOURCES + PICK THE STARTING QUESTION
□ Inventory sources: prod Postgres/MySQL, Stripe, your CRM (HubSpot/Salesforce), product
  analytics (Amplitude/Mixpanel), ad platforms, support (Zendesk), spreadsheets.
□ DON'T boil the ocean. Pick the ONE question the first dashboard answers (e.g. "weekly
  revenue + active users by cohort"). Only ingest the sources that question needs.

DAY 2-4: INGESTION (Fivetran / Airbyte / CDC)
□ Managed SaaS sources → Fivetran (least ops, ~$/MAR cost) or Airbyte (cheaper/OSS, more
  ops). Use prebuilt connectors — never hand-write API pulls for standard SaaS.
□ Prod database → CDC (change-data-capture) via Fivetran/Airbyte log-based replication or
  Debezium. CDC reads the WAL → low load on prod, near-real-time. Avoid hammering prod
  with full-table SELECTs.
□ Land everything RAW (schema-on-load, append) in the warehouse. Don't transform on ingest.

DAY 4-5: WAREHOUSE (BigQuery / Snowflake)
□ BigQuery: serverless, pay-per-query-scanned, fastest to start, great for GCP shops.
  Snowflake: separate compute warehouses, per-second credits, easy multi-cluster scaling.
□ Set up 3 schemas/datasets: RAW (landing), STAGING (cleaned), MARTS (business-ready).
□ Region: pin to your data-residency requirement (India region if DPDP/RBI localization
  applies — coordinate Agent 39).

DAY 6-9: TRANSFORM (dbt — medallion architecture)
□ dbt Core (free, you run it) or dbt Cloud (managed scheduler + IDE).
□ Medallion layers as dbt models:
  - BRONZE (staging): 1:1 with raw, light cleaning, renaming, types, dedupe.
  - SILVER (intermediate): joined/conformed entities (a clean `customers`, `orders`).
  - GOLD (marts): business metrics, one table per consumption use (`weekly_revenue`).
□ Add tests in dbt from day one: `unique`, `not_null`, `relationships`, `accepted_values`
  on keys and critical columns. Document models (`description:`) so the dashboard is trusted.

DAY 9-10: ORCHESTRATION
□ Schedule the pipeline: dbt Cloud scheduler (simplest), or Airflow / Dagster / Prefect if
  you have complex DAGs/dependencies. Order: ingest sync → dbt run → dbt test → notify.
□ Alert on failure to Slack/PagerDuty. A silent failed run = stale dashboard = lost trust.

DAY 11-12: BI + THE FIRST TRUSTED DASHBOARD
□ BI tool: Metabase (free/cheap, fast), Looker (governed semantic layer), Preset/Superset
  (OSS), or Lightdash/Omni (dbt-native).
□ Build the ONE dashboard for the Day-1 question, sourced ONLY from a GOLD mart (never raw).
□ Trust ritual: reconcile every number against the source of truth (Stripe dashboard,
  prod count) to the rupee before you share it. One wrong number kills trust in all of them.

DAY 13-14: COST GUARDRAILS
□ BigQuery: set per-user/per-project query byte limits; partition + cluster big tables so
  queries scan less; set a billing budget alert. Snowflake: auto-suspend warehouses after
  60s idle, set resource monitors with credit quotas + alerts.
□ Fivetran/Airbyte: watch MAR/row volume — sync only needed tables, not whole schemas.
□ Set a monthly spend alert in the cloud console. Review top-cost queries weekly.
⛔ Don't `SELECT *` on a full unpartitioned table — that's how a $10 dashboard becomes a
  $4,000 bill.
```

### Scenario: Diagnose & Fix a Broken Pipeline (Data Incident Runbook)

```
GOAL: From "the dashboard looks wrong" to root-caused, safely backfilled, and prevented —
without making it worse with a panicked re-run.

DETECT (the tests that should catch it before a human does)
□ FRESHNESS: is the table newer than its SLA? (dbt source freshness, or "max(updated_at)
  within last N hours"). Stale data is the #1 silent failure.
□ VOLUME: row count today within expected band vs. trailing average? A 90% drop or 5x spike
  = anomaly. (dbt test, Monte Carlo / Elementary / Soda anomaly detection.)
□ SCHEMA: did an upstream source add/drop/rename a column or change a type? Schema-change
  tests + Fivetran/Airbyte schema-drift alerts.
□ Alert routes to a #data-incidents channel, not someone's inbox.

TRIAGE SEVERITY (decide blast radius first)
□ SEV1: a board/exec/billing/regulatory number is wrong or a customer-facing data product
  is broken → all-hands, comms now.
□ SEV2: internal dashboards wrong, decisions being made on bad data → fix today.
□ SEV3: a downstream dev table stale, no decisions affected → fix this week.
□ FREEZE consumption if SEV1/2: post in the dashboard / pause it so no one acts on bad data.

DATA-INCIDENT ROLES (even on a small team, name them)
□ Incident Commander (coordinates, owns comms) | Investigator (digs into root cause) |
  Scribe (timestamps every action for the postmortem). One person can hold two, but name them.

ROOT-CAUSE (5-WHYS — go up the lineage)
□ Walk the lineage from broken GOLD mart → SILVER → BRONZE → raw → source. Where does the
  number first go wrong? (dbt lineage graph / column-level lineage makes this fast.)
□ 5-Whys example: Revenue is low → because orders table is short → because the Stripe sync
  failed → because Stripe rotated an API key → because no one updated the connector secret
  → because there's no secret-rotation alert. (The real fix is the LAST why, not the first.)
□ Common causes: upstream schema change, a bad source backfill, a logic bug in a new dbt
  PR, duplicate rows from a non-idempotent load, timezone/late-arriving data, deleted source.

BACKFILL SAFELY (this is where people make it worse)
□ Reproduce in a DEV/staging schema first — never test the fix in prod marts.
□ Make loads IDEMPOTENT before re-running: dedupe on a natural/idempotency key so a re-run
  doesn't double-count. (Re-running a non-idempotent append is how you get 2x revenue.)
□ Backfill the AFFECTED partition/date-range only — don't full-refresh a huge table if a
  3-day window broke.
□ Re-run downstream models in dependency order; re-run tests; reconcile to source before
  un-freezing the dashboard.

PREVENT (data contract + test — so it can't recur silently)
□ Add the specific test that would have caught THIS incident (the freshness/volume/schema/
  uniqueness check that was missing). A postmortem without a new test is theatre.
□ Data CONTRACT with the upstream source/team: agreed schema, types, freshness SLA, and a
  "warn before breaking changes" commitment. Enforce in CI (dbt contracts / schema checks
  on the source) so a breaking change fails the build, not the dashboard.

DATA-INCIDENT POSTMORTEM (blameless, within 48h)
□ Timeline (from the scribe), impact (which numbers/decisions, for how long), root cause
  (the last why), the fix, and the prevention (new test + contract). Focus on the SYSTEM
  that let bad data through silently, never on the person who shipped the PR.
```


---

## PRIVACY & DATA PROTECTION SCENARIOS (Agent 39)

> Privacy content below is an operational framework, not legal advice. DSAR handling, DPIAs,
> refusal grounds, and regulator consultation must be reviewed by qualified privacy counsel;
> privacy law is jurisdiction-specific and evolving.

### Scenario: Fulfill a DSAR in 30 Days (Runbook)

```
GOAL: Take a data-subject access/deletion request from intake to delivered + logged, within
the statutory deadline, without leaking third-party PII or deleting data you must keep.

INTAKE + CLOCK START (Day 0)
□ A DSAR can arrive ANYWHERE — support email, in-app form, a tweet, a letter. Train every
  team to recognize and forward it. The clock starts the day it ARRIVES, not when it
  reaches the DPO.
□ Log immediately in a DSAR register: requester, channel, date received, request type
  (access / deletion / portability / rectification / objection), deadline.
□ SLAs (the clock you're racing):
  - GDPR: 1 month (+2 months for complex — but you must tell them within the first month)
  - DPDP (India): design for ~30 days; act on correction/erasure promptly
  - CCPA/CPRA: 45 days (+45 for complex)

IDENTITY VERIFICATION (the hard part — match effort to risk)
□ Low-risk (account you only know by email) → confirm via the registered email / in-app
  auth. DON'T demand a passport scan for a low-risk account — over-verification is itself a
  privacy harm and collects MORE sensitive data.
□ Higher-risk / sensitive data → stronger verification proportionate to the harm of getting
  it wrong.
□ EDGE CASES:
  - Authorized agent / lawyer requesting on someone's behalf → must prove authority.
  - Parent requesting a child's data → verify parental authority.
  - Someone requesting data ABOUT a third party (not themselves) → refuse; that's not their
    DSAR.
  - Deceased person → rights generally lapse; check jurisdiction.

LOCATE DATA ACROSS SYSTEMS (Day 1-15)
□ This is impossible without a PII inventory / deletion map (Agent 38). Search EVERY system:
  prod DB, warehouse, backups, CRM, support tool, email/marketing platform, analytics,
  logs, every SaaS processor, and embedded SDKs.
□ Don't forget the forgotten processors: the ad pixel, the analytics SDK, the spreadsheet.

REDACTION + THIRD-PARTY RULES
□ REDACT other people's PII caught in the response (e.g. a support thread mentioning another
  customer, names in shared documents). The requester gets THEIR data, not others'.
□ Don't expose internal-only commentary or trade secrets beyond what the right requires.

ACT BY TYPE + CHECK CARVE-OUTS
□ ACCESS → assemble a copy + plain-language context (what you hold, why, who you share with).
□ DELETION → erase, BUT honor legal-retention carve-outs: tax/KYC records, an unpaid balance,
  a live fraud investigation, ongoing litigation/legal hold. Don't silently ignore — explain
  what you're keeping and the legal basis.
□ PORTABILITY → export in machine-readable format (JSON/CSV).
□ Remember backups: a deletion from prod doesn't purge 90 days of backups — policy is
  backups age out on their cycle and pending deletions re-apply on restore. Document this.

REFUSAL GROUNDS (you CAN refuse/charge — but document why)
□ Manifestly unfounded, vexatious, or repetitive requests → may charge a reasonable fee or
  refuse, with a documented justification and notice to the requester.
□ Where deletion conflicts with a legal obligation to retain → partial refusal with the
  cited law.
⛔ Never just go silent. Silence is the violation; a reasoned, documented refusal is defensible.

PACKAGE + DELIVER + LOG
□ Deliver securely (authenticated download / encrypted), in plain language, within SLA.
□ Close the DSAR register entry: completion date, what was provided/deleted/refused, who
  approved. This log is your proof of compliance to a regulator. Target: 100% within SLA.
```

### Scenario: Run a DPIA in 1 Week

```
GOAL: Produce a signed, defensible Data Protection Impact Assessment for a high-risk
processing activity in 5 working days — and know when you must call the regulator first.

DAY 1: CONFIRM A DPIA IS REQUIRED (any ONE trigger → mandatory)
□ Large-scale special-category data (health, biometric, religion, sexual orientation)
□ Systematic monitoring / tracking (location, behavioural profiling, CCTV)
□ Automated decisions with legal/significant effect (credit, hiring, content bans)
□ New/novel tech with unclear privacy impact (facial recognition, novel AI/LLM use)
□ Children's data at scale
□ Combining/matching datasets from different sources
□ If none clearly trigger but it FEELS intrusive → run a short screening DPIA anyway and
  record the "not required" conclusion. Cheap insurance.

DAY 1-2: DESCRIBE THE PROCESSING
□ Pull from the RoPA + Agent 38 lineage: what data, what categories, whose data, the flows
  (collect → use → store → share → retain → delete), purpose, recipients/processors,
  cross-border transfers, retention. Diagram the data flow. You can't assess what you can't
  describe.

DAY 2: NECESSITY + PROPORTIONALITY
□ Necessity: is this processing actually NEEDED for the purpose, or just convenient?
□ Proportionality: is there a LESS INTRUSIVE way to achieve the same outcome?
  - Need precise 24/7 GPS, or city-level + last-known? Store the minimum.
  - Need date-of-birth, or just "over 18"? Store the boolean.
□ A feature can be perfectly SECURE (encrypted, access-controlled) and still FAIL here for
  being disproportionate. Security ≠ proportionality.

DAY 3: SCORE RISK TO INDIVIDUALS (to the people, NOT to the company)
□ For each risk:  Risk score = Likelihood (1-5) × Severity-of-harm-to-individual (1-5)
□ Harm types to enumerate: discrimination, identity theft, financial loss, reputational
  damage, loss of confidentiality, re-identification of "anonymized" data, physical safety.
⛔ Don't score fines/PR risk to the company — that's not what a DPIA measures.

DAY 4: MITIGATIONS → RESIDUAL RISK
□ For each high score, apply mitigations: minimize/drop a field, pseudonymize early, shorten
  retention, add granular consent, truncate at collection, add human review to an automated
  decision, restrict access.
□ Re-score residual risk AFTER mitigation.

DAY 5: SIGN-OFF + WHEN TO CONSULT THE REGULATOR
□ If residual risk is HIGH even after mitigation → you must CONSULT THE REGULATOR (GDPR Art.
  36 "prior consultation") BEFORE you start processing. Don't ship and hope.
□ If residual risk is acceptable → DPO signs off, sets a review date. The DPIA is a LIVING
  document — revisit it whenever the processing materially changes.
□ File it: add/update the RoPA entry, attach the DPIA, record the lawful basis (+ LIA if
  legitimate-interest). A regulator asking "did you assess this?" gets the signed document.
□ Reminder: have privacy counsel review the lawful-basis call and any regulator consultation.
```

---

## IT & CORPORATE ENGINEERING SCENARIOS (Agent 40)

### Scenario: Secure Employee Offboarding in 1 Hour (Critical Runbook)

```
TRIGGER: HR (Agent 22) confirms a termination — especially an involuntary exit. The clock
starts at the EXACT termination minute, not when you "get to it." The #1 breach enabler is an
offboarding that killed email but left GitHub / AWS / a SaaS app live. Measure COMPLETENESS,
not speed.

MINUTE 0 — KILL THE MASTER SWITCH:
□ DISABLE the IdP account (Okta / Entra / Google Workspace) — do NOT delete it (you need it for
  audit + data transfer). Disable cascades SSO everywhere via SCIM.
□ Do this BEFORE the HR conversation ends for high-risk exits (coordinate timing with Agent 22).

MINUTE 0–10 — REVOKE LIVE SESSIONS & TOKENS (disabling alone does NOT end active sessions):
□ Force global sign-out / clear sessions in the IdP ("Clear user sessions" in Okta).
□ Revoke OAuth grants, refresh tokens, API keys, personal access tokens (GitHub PATs), app
  passwords, SSH keys.
□ Reset/rotate any SHARED credentials they knew (shared admin, service accounts, vault items
  in 1Password/Bitwarden, root/break-glass).

MINUTE 10–25 — MDM LOCK / WIPE THE DEVICE:
□ In MDM (Jamf / Kandji / Intune), issue Remote Lock immediately; remote-wipe on confirmed
  non-return. BYOD → wipe ONLY the work container (MAM), never the personal phone.
□ Confirm FileVault/BitLocker key is escrowed in MDM before wipe (so you can still recover data).

MINUTE 25–40 — REMOVE SaaS ACCESS (SCIM + the non-SSO long tail):
□ Verify SCIM deprovisioned the connected apps (Slack, Zoom, Notion, Figma, Salesforce).
□ Walk the NON-SSO long tail manually — the apps SCIM doesn't reach. Keep this list in the CMDB.
□ Remove from privileged groups, admin consoles, AWS/GCP IAM, GitHub org, prod DB, Retool.

MINUTE 40–50 — DATA HANDOVER & EMAIL:
□ Transfer Drive/email/docs ownership to the manager (Google "transfer", M365 mailbox delegate).
□ Set mail forwarding + auto-reply ("X has left; contact Y"). Convert to a shared/forwarding box.

MINUTE 50–60 — PHYSICAL + CONFIRM & LOG:
□ Disable badge/building access; revoke VPN/ZTNA (Cloudflare Access / Tailscale).
□ Arrange hardware return (courier + tracking; mark asset "recovery pending" in CMDB).
□ ACCESS-REVIEW CONFIRMATION: from an INDEPENDENT admin account, hunt for ANY surviving access
  across IdP, SSO apps, GitHub, cloud IAM, VPN, shared vaults. Log each revocation with timestamp.

WHAT GETS MISSED (the residual-access graveyard):
⛔ Personal access tokens / CI secrets / deploy keys in GitHub & CI — survive an account disable
⛔ AWS IAM access keys, long-lived service-account JSON keys
⛔ Non-SSO SaaS bought on a personal card (shadow IT — Nudge Security / expense reports find it)
⛔ Shared logins never rotated; a Slack/Notion guest account; recovery email/phone on MFA
⛔ Calendar/drive shares, third-party OAuth apps they authorized, forwarding rules they set

OFFBOARDING IS "DONE" ONLY WHEN VERIFIED — not when initiated.
```

### Scenario: Roll Out SSO + SCIM in 2 Weeks

```
GOAL: Every app behind one identity with phishing-resistant MFA + auto-deprovisioning, so the
next offboarding is one click. SSO coverage is the metric that makes offboarding survivable.

DAY 1–2 — PICK THE IdP & INVENTORY:
□ Pick ONE IdP: Okta (best app catalog), Microsoft Entra (if you're M365), Google Workspace
  (if you're Google + simple), JumpCloud (SMB + device). Don't run two.
□ Inventory every app: SSO/expense/browser signals + Nudge Security/Torii for shadow IT.
□ Tag each: supports SAML/OIDC? supports SCIM? holds sensitive data? # of users?

DAY 3 — PRIORITIZE BY RISK:
□ Rank: (data sensitivity × user count). SSO-first targets = GitHub, AWS, Slack, Salesforce,
  Notion, the HRIS, the finance tools.
□ Note the "SSO tax" apps (SSO behind an enterprise tier) — pay it for anything sensitive.
□ List the no-SSO long tail → plan to retire or replace them.

DAY 4–8 — CONFIGURE SAML/OIDC + SCIM (work the top 15 apps):
□ For each: configure SAML 2.0 or OIDC from the IdP catalog; map attributes; test login.
□ Turn on SCIM provisioning where supported → IdP becomes source of truth for create/update/
  DEPROVISION. Without SCIM, offboarding stays a manual checklist that WILL miss an app.
□ Build role-based access groups (Engineering, Sales, Finance) → app bundles, not per-person grants.

DAY 9–10 — ENFORCE MFA + CONDITIONAL ACCESS:
□ Mandatory MFA for everyone. Phishing-resistant first: FIDO2/passkeys (YubiKey) > TOTP > NEVER SMS.
□ Conditional access: allow from managed+compliant device & known location; step-up or block on
  unmanaged device / impossible-travel / risky sign-in. Admins get JIT elevation + strongest factor.

DAY 11–12 — MIGRATE USERS:
□ Communicate the cutover date + enroll users in MFA before broad access. Office hours for stragglers.
□ Flip each app to "SSO required"; verify SCIM sync created the right accounts.

DAY 13 — DECOMMISSION SHARED LOGINS:
□ Hunt and kill every shared/generic login (admin@, the team Canva account). Replace with named
  SSO identities or a vaulted credential with checkout + audit. Shared logins break offboarding.

DAY 14 — MEASURE:
□ SSO coverage = % apps behind SSO (target the high-value apps to ~100%).
□ MFA coverage = % accounts on phishing-resistant MFA (100% of privileged).
□ SCIM coverage = % apps auto-deprovisioning. Run a TEST offboarding and confirm cascade.
⛔ Don't boil the ocean — 80% of risk sits in 15 apps. Ship those; tail later.
```


---

## TECHNICAL PROGRAM MANAGEMENT SCENARIOS (Agent 41)

### Scenario: Run a Launch Readiness / Go-No-Go Review

```
GOAL: A gated decision where each function attests READY, with a tested rollback — converting a
launch from a bet into a plan. Run the LRR 3–5 days before launch; the go/no-go 24h before.

T-5 DAYS — LAUNCH READINESS CHECKLIST (each owner attests GO / NO-GO / GO-WITH-CONDITIONS):
□ Product (Agent 04): scope LOCKED, success metrics + instrumentation live (Agent 16).
□ Engineering (Agent 06): code complete, tested, staged; feature flags wired; load-tested.
□ QA: test plan passed, P1/P2 bugs closed, regression green, edge/empty/error states covered.
□ DevOps/SRE (Agent 08): deploy plan, monitoring + alerts, ON-CALL assigned, rollback TESTED.
□ Security (Agent 09): pen-test / audit passed, sign-off in hand.
□ Privacy (Agent 39): data-handling reviewed, consent/DPA cleared, data-residency OK.
□ Legal/Compliance (Agent 10/11): cleared — T&C, claims, regulated-market sign-off.
□ Support (Agent 17): trained, runbook + macros ready, staffed for launch-day volume.
□ Docs: help center / changelog / API docs published and accurate.
□ Marketing/GTM (Agent 14/15): assets ready, timed to launch, embargo set.
□ Data (Agent 38): pipelines ready to measure the launch from minute one.

T-3 DAYS — RAID REVIEW (clear the board before the gate):
□ Walk the RAID log: every open RISK has owner + mitigation + trigger; every ISSUE has a
  resolution date; no unconfirmed DEPENDENCY on the critical path; ASSUMPTIONS validated.
□ Any unretired launch-blocking item → escalate NOW, not at the meeting.

T-1 DAY — CUTOVER + ROLLBACK PLAN (write before launch, not during):
□ CUTOVER: minute-by-minute runbook — who does what, in what order, with VERIFICATION steps and
  named owners. Include comms (status page, internal channel).
□ ROLLBACK: explicit triggers ("if error rate > 1% OR payment success < 98% for 10 min, roll
  back"), the steps, and WHO has authority to pull the trigger.

GO/NO-GO MEETING (30 min, ONE accountable decision-maker):
□ Each function states GO / NO-GO / GO-WITH-CONDITIONS out loud. ONE no-go on a launch-blocking
  item = no launch. Record every vote + conditions in writing.
□ Confirm the launch window respects freeze rules (no shipping during a sale / quarter-close).
□ Decide explicit GO criteria and the abort criteria. Set the next check-in (T+2h, T+24h).

LAUNCH COMMS:
□ Internal first (channel: "we're live, here's the dashboard, here's the rollback owner").
□ Then customers (in-app / email), then public (blog / social), then press only if asked.
⛔ A "soft yes" from a function = a NO-GO. Vague readiness is how launches blow up at 2am.
⛔ No tested rollback = no launch. A rollback first attempted during an incident isn't a plan.
```

### Scenario: Unblock a Stalled Cross-Team Program in 1 Week (RAID)

```
GOAL: Make the invisible visible — find the REAL blocker on the critical path and force the one
decision that determines the date. A program slips at the SEAMS between teams, not inside them.

DAY 1 — BUILD THE DEPENDENCY MAP:
□ For every cross-team need: Provider team → Consumer team → What → Need-by date → Status
  (requested / committed / at-risk / done). Interview each team lead; don't trust the wiki.
□ Derive the CRITICAL PATH = the longest chain of dependent work. If it slips, the program slips.
□ Flag DEPENDENCY AGING: any dependency "requested but not committed" for >5 days on the
  critical path is your best leading indicator of a coming slip.

DAY 2 — STAND UP / REFRESH THE RAID LOG:
□ RISK: might happen, would hurt — likelihood × impact, owner, mitigation, TRIGGER.
□ ASSUMPTION: treated as true, unverified ("vendor sandbox is ready") — go validate it TODAY.
□ ISSUE: hurting now — owner + resolution date + escalation path.
□ DEPENDENCY: from the map. Score risks 1–5 × 1–5; work only the top of the list.

DAY 3 — SURFACE THE REAL BLOCKER:
□ Separate the LOUD blocker from the LOAD-BEARING one. The thing everyone complains about is
  often not on the critical path; the quiet unconfirmed API date usually is.
□ Name it in one sentence: "We make the date IF the platform team commits the API by Friday;
  here's the fallback if they can't."

DAY 4 — ESCALATE THE DECISION (not the drama):
□ Escalation script: "ISSUE: payments dependency blocked 9 days. IMPACT: slips launch 1 week.
  DECISION I NEED: approve fallback-provider spend (~₹X, Agent 18) OR accept the 1-week slip.
  OPTIONS: (A) parallel-track fallback — cost ₹X, saves the date; (B) wait — free, slips a week.
  RECOMMENDATION: A. Need your call by EOD Friday."
□ Route to the right level: team-to-team → EM/PM → Director (trade-off) → VP (budget/strategic).

DAY 5 — RE-BASELINE + SAY/DO RATIO:
□ With the decision made, re-plan from the launch date backward. Add targeted buffer on the
  risky links (integration, vendors, approvals) — not uniform padding.
□ Recompute SAY/DO ratio (committed vs. delivered last cycle): <70% = over-committing (cut
  scope); ~100% every time = sandbagging. Use it to right-size the new commitment.

DAY 5 — SHIP THE EXEC STATUS (RAG + the WHY, one page, lead with the ask):
  OVERALL: 🟡 AMBER — on track IF platform commits the API by Fri.
  🟢 Localization — done, ahead.
  🟡 Payments — vendor slipped 1 wk; mitigation: parallel fallback; DECISION needed by Fri.
  🔴 Legal review — blocked 9 days; ESCALATING to GC; on critical path.
  THE ASK: approve fallback spend OR accept a 1-week slip.
⛔ Don't become a status-update scribe — surface the trade-off, force the decision, own delivery.
⛔ Never let a status jump green→red in one week. That means you weren't surfacing risk early.
```


---

## INVESTOR RELATIONS SCENARIOS (Agent 44)

> Investor communications are governed by securities law (Reg FD / SEBI LODR). Have securities
> counsel + your CFO clear any external statement before sending. Frameworks, not legal advice.

### Scenario: Write the Monthly Investor Update in 90 Minutes

```
GOAL: A lowlights-first update that arrives like clockwork, so investors re-up, make intros, and
defend you in their partner meetings. The investor who goes dark on you did so because you went
dark on them first.

MIN 0–15 — LOCK THE NUMBERS (you narrate Finance's numbers; you never invent them):
□ Pull from Agent 18: MRR/ARR, net new MRR, logo + $ churn, NRR, cash, net burn, runway, headcount.
□ Use the SAME metric definitions as last month. Changing definitions to flatter a bad month
  destroys credibility permanently.

MIN 15–25 — TL;DR (3 lines max, write it FIRST):
  "Good month / hard month. MRR +14% to ₹X. Lost our biggest customer. Hiring a VP Eng."

MIN 25–45 — ⚠️ LOWLIGHTS & RISKS (FIRST, always — this builds trust no spin ever will):
□ What broke, what you're behind on, what you're worried about — in plain language.
□ The thing you're tempted to bury goes HERE. Highlights-first trains investors to distrust you.

MIN 45–60 — METRICS DASHBOARD (consistency > completeness):
  | Metric        | This | Last | Plan | Δ vs Plan |
  | MRR / ARR     |      |      |      |           |
  | Net new MRR   |      |      |      |           |
  | Logo / $ churn|      |      |      |           |
  | NRR           |      |      |      |           |
  | Cash balance  |      |      |      |           |
  | Net burn      |      |      |      |           |
  | Runway (mo)   |      |      |      |           |
  | Headcount     |      |      |      |           |

MIN 60–75 — HIGHLIGHTS + THE ASKS:
□ Wins: named customers, product shipped (2–4 bullets).
□ ASKS — specific, named, makeable (never "let me know if you can help"):
  - "Intro to [named person] at [company]?"
  - "Anyone hiring-warm on a Staff backend eng in Bangalore?"
  - "Feedback on this pricing change before we ship Friday?"

MIN 75–85 — RUNWAY + KUDOS:
□ State runway in months plainly. If <9 months, say so and name the plan (raise / cut / revenue).
□ Kudos: one teammate who crushed it — humanizes the company.

MIN 85–90 — SEND:
□ Tool: a plain email (Visible.vc / DocSend if you want read receipts). Same day every month, ±2.
□ TONE: candid, operator-to-operator, no corporate gloss. Write as if it'll be screenshotted.

WHAT TO NEVER HIDE:
⛔ A bad month (that's exactly the month they remember). ⛔ A churned anchor customer.
⛔ A runway problem. ⛔ A key departure. Bury none of it — surfacing it early IS the trust.
```

### Scenario: Deliver Bad News to Investors (Miss / Down Round / Bridge)

```
> Down-round mechanics, anti-dilution, and any public disclosure require securities counsel
> (Agent 10) + Agent 26 sign-off before you communicate. Framework, not legal advice.

PRINCIPLE: Tell them EARLY, no surprises. Silence reads as "they're hiding something worse." A
board member or top holder should NEVER hear bad news first in a meeting or from the press.

STEP 1 — LOCK THE FACTS (before you call anyone):
□ With Agent 18: the actual miss, root cause, $ impact, revised runway / revised forecast.
□ With Agent 26 + Agent 10 (if down round): new terms, anti-dilution impact (full-ratchet vs
  broad-based weighted-average), the recap math, the new cap-table waterfall.

STEP 2 — THE STRUCTURE (every bad-news message, in this order):
  1. WHAT HAPPENED — fast, plain, no spin. "MRR grew 6% against an 18% plan; our biggest
     customer churned."
  2. WHY — the honest root cause, not a deflection.
  3. WHAT WE'RE DOING — the recovery plan, with dates.
  4. WHAT WE NEED — the specific ask (bridge participation, pro-rata, a decision, an intro).

STEP 3 — THE CALL SEQUENCE (1:1 by phone, BEFORE anything circulates in writing):
□ Lead investor FIRST, today — your closest ally in a crisis; align them before others hear.
□ Then major investors / board members, 1:1, by phone.
□ THEN the written update / board pack goes out. The meeting is for discussion, not disclosure.
□ ONE channel, ONE message — never let two investors hear two versions.

BRIDGE / EXTENSION:
□ Frame honestly: "Raising a bridge to reach [specific milestone] before a priced round."
□ NEVER dress survival up as a "strategic top-up" — they see through it and you lose the
  credibility you need to actually raise it.
□ Get INSIDERS committed FIRST — outside money follows a led insider round.

DOWN ROUND — MANAGING THE CAP-TABLE CONVERSATION:
□ Tell existing investors 1:1, by phone, before any term sheet circulates.
□ Walk the math: new money's terms, anti-dilution hit to prior rounds, the recap.
□ Give existing investors their PRO-RATA first — letting insiders defend their ownership
  preserves goodwill even in a painful round.
□ Coordinate Agent 26 (SHA anti-dilution mechanics) + Agent 18 (waterfall) + Agent 25 if public.

QUALITY CHECK: Would any director be SURPRISED by anything in the deck? If yes, you've failed —
go make the call you're avoiding.
⛔ Don't go silent in the bad month. ⛔ Don't spin. ⛔ Don't let them read it cold in a deck.
```


---

## CORPORATE DEVELOPMENT SCENARIOS (Agent 45)

> M&A involves binding agreements, antitrust, securities and tax law. Every term, valuation, and
> structure requires qualified M&A counsel + a CA/CPA before execution. Framework, not advice.

### Scenario: Run Acquisition Due Diligence in 2 Weeks

```
GOAL: Hunt for what KILLS the deal, not what confirms your hope. Diligence theater is confirming
what you wanted; real diligence finds the landmine. Saying "no" is a success metric.

DAY 0 — SET UP (before the data flows):
□ Confirm the one-sentence thesis (Agent 03): which named gap, worth ₹Y, integrated how?
□ Stand up a clean data room (the seller's) + a diligence tracker (workstream → owner → status →
  findings → red/amber/green). Mutual NDA + clean-team for competitive info.
□ Set the WALK-AWAY PRICE in writing, now, before emotion enters.

DAY 1–8 — CROSS-FUNCTIONAL CHECKLIST (each workstream led by its agent, hunting for the kill):
  | Workstream  | Lead   | Hunting for                                              |
  | Financial   | 18     | Quality of earnings; ARR vs billings; hidden churn; cash |
  | Legal       | 10     | IP ownership; change-of-control clauses; litigation      |
  | Tech        | 06     | Architecture debt; scalability; open-source license risk |
  | Security    | 09     | Past breaches; posture; data-handling liabilities        |
  | People      | 22     | Key-person dependency; vested equity; comp liabilities   |
  | Commercial  | 03/33  | Customer concentration; pipeline reality; contract terms |
  | Compliance  | 11     | Regulatory exposure; data-protection posture             |

DAY 9 — THE RED-FLAGS LIST (any ONE can kill or re-price the deal):
⚠ "ARR" is billings, not recognized revenue — includes one-time fees
⚠ One customer = >25% of revenue (concentration)
⚠ Core IP was contractor-built without proper assignment — it's not theirs to sell
⚠ Key engineers' equity already vested — no retention left to structure against
⚠ A change-of-control clause lets their biggest customer walk on the deal
⚠ Undisclosed litigation, tax exposure, or a data-breach history

DAY 10–11 — VALUATION SANITY (with Agent 18, triangulate ≥2 methods):
□ Comps + precedent transactions + (for team buys) acqui-hire $/engineer.
□ Acqui-hire heuristic: value ≈ (RETAINED engineers × $/engineer), NOT headcount × number.
□ The only question that matters: what does this do to dilution / cash / the post-deal model?

DAY 12–13 — RETENTION & INTEGRATION RISK:
□ Of the team, how many are LOAD-BEARING and how much of their equity is already vested? That,
  not the headcount, is what you're buying.
□ Name the Integration Lead + draft the 100-day plan (physical-ops-pmi.md) BEFORE the go/no-go.
□ Diligence the culture as hard as the cash — culture clash is the #1 value-destroyer.

DAY 14 — GO/NO-GO:
□ Recommendation memo: thesis, triangulated valuation, top red flags + mitigations, proposed
  structure (most consideration in a 24-month retention pool, 10–15% escrow, earnout on the
  integrated feature shipping), dilution view, Integration Lead named.
□ GO only if the thesis survives the red flags AND the price is below the written walk-away.

QUALITY CHECK: If the 4 engineers who matter quit the day after close, did you still get value?
If "no" and the structure paid out at close, the deal is wrong — fix the structure or kill it.
⛔ Deal fever + an auction = the winner's curse. The walk-away price is your seatbelt.
```

### Scenario: Make the Build-Buy-Partner Decision

```
GOAL: Force a number before assuming "acquire." Run this BEFORE you fall in love with a target.
M&A serves strategy, never the reverse — the thesis traces to an Agent 03 gap.

STEP 1 — NAME THE GAP (one sentence, Agent 03):
□ "We need [capability] to close [strategic gap], worth ₹Y in [revenue / cost / time]."
□ If you can't write it, you don't have a decision — you have an itch. Stop.

STEP 2 — THE SCORING FRAMEWORK (weight to YOUR situation; force a number, don't hand-wave):
  | Factor                     | Weight | Build | Partner | Buy |
  | Time-to-market             | 25%    |       |         |     |
  | Strategic control needed   | 20%    |       |         |     |
  | Cost (TCO over 3 yrs)      | 20%    |       |         |     |
  | Talent / IP scarcity       | 15%    |       |         |     |
  | Integration risk           | 10%    |       |         |     |
  | Execution capacity (yours) | 10%    |       |         |     |
□ Score each option 1–5 per factor × weight → a weighted total per option. Highest wins, but
  read the WHY, not just the number.

STEP 3 — WHEN EACH WINS:
□ BUILD when: it's core/differentiating, you have the talent, and time-to-market is acceptable.
  (Don't outsource your moat.)
□ PARTNER when: you need the capability but not ownership, and exit optionality matters → hand
  to Agent 33 (a contract, two cap tables).
□ BUY when: time-to-market is the BINDING constraint, the talent/tech/market is genuinely
  scarce, AND you have the capacity to integrate it. (Buying without integration capacity =
  buying a problem.)

STEP 4 — THE COMPARISON TABLE (concrete, not abstract):
  | Dimension        | Build              | Partner            | Buy                 |
  | Time to value    | 9–12 mo            | 6–8 wks            | 3 mo + integration  |
  | 3-yr TCO         | ₹X (eng salaries)  | ₹Y (contract)      | ₹Z (price+integ.)   |
  | Control          | Full               | Contractual        | Full (post-integ.)  |
  | Key risk         | Opportunity cost   | Dependency / exit  | Retention / culture |
  | Reversibility    | High               | High               | Low (one-way door)  |

STEP 5 — THE RECOMMENDATION MEMO:
□ The gap, the scored table, the recommendation + the WHY, the key risk + mitigation, the
  walk-away condition. For BUY: triangulated valuation + dilution view (Agent 18) + Integration
  Lead named.
□ One page. A decision the board can make in the meeting, not a 40-page deck.

QUALITY CHECK: Is "buy" winning because it's the right answer, or because the target is sitting
in front of you (thesis drift)? Re-run the score with the target removed from view.
⛔ Buying because it's available, not because it closes a named gap, is the most expensive mistake.
```


---

## PROCUREMENT & SUPPLY CHAIN SCENARIOS (Agent 46)

> Vendor contracts, SLAs, and DPAs are binding documents with jurisdiction-specific consequences.
> Have qualified counsel review any contract before signing. Framework, not legal advice.

### Scenario: Run an RFP and Select a Vendor in 3 Weeks

```
GOAL: A scored decision (not a "good feeling" buy) with security and exit terms locked before you
sign. Match the instrument to the spend: RFP for complex/strategic, RFQ for commodity, RFI to scope.

WEEK 1 — REQUIREMENTS, SHORTLIST, WEIGHTED SCORECARD:
DAY 1–2 — Requirements (with the budget owner + Agent 19 Ops):
□ Write must-haves vs. nice-to-haves; the integration list; the data the tool will touch
  (sensitivity drives the security gate); the 3-year volume/seat projection (drives TCO).
DAY 3 — Build the weighted scorecard BEFORE you talk to vendors (so vendors don't anchor you):
  | Criterion               | Weight | Vendor A | Vendor B | Vendor C |
  | Solution / feature fit  | 30%    |          |          |          |
  | Total cost (TCO 3yr)    | 25%    |          |          |          |
  | Security / compliance   | 15%    |          |          |          |
  | Implementation / support| 15%    |          |          |          |
  | Financial viability     | 10%    |          |          |          |
  | Exit / portability      | 5%     |          |          |          |
DAY 4–5 — RFI (if the market's unknown) → shortlist to 3 vendors for the RFP. Issue the RFP
  with a clear response template + deadline (so answers are comparable, not free-form).

WEEK 2 — DEMOS / POC + REFERENCE CHECKS:
□ Run scripted demos against YOUR use cases (not the vendor's canned demo). Same script per vendor.
□ POC where stakes are high: a 1–2 week trial on real data with a pass/fail success criterion.
□ REFERENCE CHECKS — call 2–3 customers of similar size/stage. Ask: "What broke? What would you
  not buy again? How's renewal pricing?" The off-list reference (you find them) is the honest one.
□ SECURITY / VENDOR-RISK GATE (Agent 09 — gating, not advisory, for Tier-1 / sensitive data):
  SOC 2 / ISO 27001 report, breach history, DPA, data-residency, subprocessor list. No pass, no buy.

WEEK 3 — EVALUATION, NEGOTIATION, AWARD:
DAY 11–12 — Fill the scorecard from demos + POC + references + security. Force the number.
  The weighted total picks the winner; document WHY (audit trail + kills the "vibe" buy).
DAY 13–15 — Negotiate from the runner-up as your BATNA ("we're also evaluating [B] at [price]"):
  □ Levers: longer term for lower price; ramped seats; price-uplift CAP (≤5%/yr); SLAs WITH
    credits; net-45/60 payment terms (Agent 18); MFN if you can get it.
  □ Read the contract for the TRAPS: auto-renewal window, "then-current pricing", data hostage,
    overage rates, termination-for-convenience. Get DATA PORTABILITY + transition assistance
    BEFORE you sign — never after.
DAY 15 — Award + onboarding:
  □ Issue the PO (no PO, no payment — the 3-way match holds). Legal (Agent 10) signs the redline.
  □ Hand the live vendor to Ops (Agent 19); the live SaaS to IT (Agent 40) for SSO + provisioning.
  □ Set a 120-day renewal alert the day you sign.
⛔ Don't run an RFP for a commodity (waste) or an RFQ for a strategic platform (you'll buy the
  cheapest wrong thing). ⛔ Don't sign before the security gate clears for Tier-1.
```

### Scenario: Beat the SaaS Auto-Renewal Trap (Renewal Runbook)

```
GOAL: Never let a contract auto-renew at the old price uncontested. The renewal is where vendors
get you back — a 60–90 day notice window quietly re-locks you for another year.

T-120 DAYS — CALENDAR EVERY RENEWAL (the single most valuable control):
□ Inventory all contracts with their renewal date + notice window + ACV. Set an alert 120 days
  out on EVERY one (vendors hide a 90-day notice clause; 120 gives you room to negotiate or exit).
□ Tools: a renewal calendar (Spendflo / Tropic / Vendr / a tracked spreadsheet) + Agent 40's
  utilization data feeding it.

T-90 DAYS — RIGHTSIZE (with Agent 40's usage/license telemetry):
□ Reclaim idle seats (last-login data — usually 10–30% of spend is waste).
□ Right-size the tier — you may have grown INTO or OUT of the plan.
□ Check for redundancy — is another tool already doing this? Kill the overlap.
□ This is your negotiation ammo: "We're using 60 of 100 seats; we're renewing for 60."

T-75 DAYS — ASSEMBLE THE NEGOTIATION LEVERS + BATNA:
□ Levers: multi-year commit for a discount (only if you're sure); ramped seats; PRICE LOCK / cap
  (≤5%/yr — kill "then-current pricing"); a COMPETITIVE QUOTE from a real alternative.
□ BATNA: line up the credible alternative + estimate switching cost. "We will leave" only works
  if you actually can — and they can smell when you can't.
□ Check the CANCEL CLAUSE + DATA-EXPORT terms NOW: can you get your data out, in a usable
  format, with transition help? If the answer is "no," that's a leverage problem to fix at renewal.

T-60 DAYS — NEGOTIATE FROM A CREDIBLE "WE WILL LEAVE" POSITION:
□ Open with the rightsized number + the competitive quote. Ask for their BEST price for a
  [stage] company. Never accept the first offer.
□ Trade what's cheap for them: multi-year, case study, logo rights → for price + a cap.
□ Time it to quarter/year-end when reps chase quota.

T-45 DAYS — FILE NOTICE IF NEEDED + CLOSE BEFORE AUTO-RENEW FIRES:
□ If exiting OR if the notice window is closing, send written non-renewal notice to STOP the
  auto-renew (you can still renew on new terms after — but you've defused the auto-lock).
□ Get the renegotiated terms IN WRITING (uplift cap, seat count, payment terms, exit clause).
□ Validate the savings with Agent 18 — hard savings (real reduction) vs. cost avoidance (smaller
  increase than proposed); never conflate the two and inflate your number.

QUALITY CHECK: Did any tool auto-renew at the old price during the cycle? If yes, the alert
process failed — fix the calendar, not just the one renewal.
⛔ "We'll deal with it at renewal" = you already lost. The window closed 90 days before the date.
```

---

## DEEP RESEARCH SCENARIOS (Agent 47)

### Scenario: Pressure-Test a "No One Does This" Claim in 1 Day

```
GOAL: In one day, prove or disprove a founder's "no one does this" claim with a
documented, exhausted search — and return a verdict you'd stake your name on.
(Operates frameworks/deep-research-protocol.md.)

HOUR 0: TOOLING HONESTY (do this first, every time)
□ State what you can actually do in THIS environment:
  - Live tools available (WebSearch/WebFetch/deep-research skill) → run real queries,
    open real sources, capture real URLs.
  - NOT available → say so at the top, label every market claim "HYPOTHESIS TO VERIFY",
    list the competitors you'd EXPECT and the exact searches to run. Never invent citations.
⛔ A confident answer with no live search and no caveat is hallucination, not research.

HOUR 1: DECOMPOSE — DON'T SEARCH THE USER'S WORDS
□ Derive 3-6 canonical names/synonyms the INDUSTRY uses (not the founder's phrasing)
  e.g. "photo bill split" → "receipt OCR line-item splitting", "itemized expense share"
□ Name the underlying JOB ("fairly divide a shared bill without math")
□ List adjacent mechanisms that solve it differently
□ Most "brand-new ideas" die the instant you find the industry's word for them.

HOUR 2-5: THE 8 SOURCE LAYERS (sweep each, to the stakes tier)
□ 1. Direct products — search each synonym + the job, not just synonym #1
□ 2. App stores — Play/App Store: does it exist? install scale? ratings?
□ 3. Open source — GitHub/npm/PyPI: is the hard part already a library?
□ 4. Funding/market — Crunchbase/Tracxn (India): who raised for this? who shut down?
□ 5. Voice-of-customer — Reddit/X/forums: "why is there no app for X", complaints
□ 6. Patents — Google Patents: prior art on the mechanism
□ 7. Academic — Scholar/arXiv: is it feasible? benchmarks?
□ 8. Regulatory — is it legal where they'll ship? (geo-specific: India DPDP, EU, US)
□ Localize: the incumbent in India/SEA/EU is often invisible from a US-default search.
□ Search the NEGATIVE explicitly: "[X] startup shut down", "why no app for [X]".

HOUR 6: CITATION LEDGER + ADVERSARIAL VERIFY
  Claim | URL | Tier (T1 primary / T2 secondary / T3 anecdote) | Recency | Confidence
□ Every finding gets a row. Then run the anti-hallucination gate: drop or down-label
  anything you can't open and stand behind.
□ Verdict bar: "EXISTS" needs ≥1 T1 or ≥2 T2 sources. "NOVEL" needs a DOCUMENTED,
  EXHAUSTED search — not just "I didn't find anything."

HOUR 7: THE VERDICT (decision tree → one banner)
  🟥 A Established  — ≥1 mature direct competitor verified → "don't reinvent, find the wedge"
  🟧 B Emerging     — early entrants, none dominant → "window open, differentiate fast"
  🟨 C Adjacent     — job solved differently/for another user → "you're beating a workaround"
  🟩 D White-space  — exhausted search, no equivalent, no citations → "novel, but prove why empty"
  ⬜ E Inconclusive — under-searched → "can't rule yet; here's exactly what to check next"

HOUR 8: IF 🟩 D — INTERROGATE "WHY IS IT EMPTY?" (§7)
□ Empty is usually a GRAVEYARD, not a goldmine. Rule each reason in or out:
  - No real demand?  - Tried-and-failed (find the corpses)?  - Regulatory wall?
  - Infeasible/too-expensive-until-now?  - Market too small?  - Incumbent-adjacent
    (they'd add it as a feature)?  - Or a genuine "why now" (new tech/law/behavior)?
□ Hand back the CHEAPEST experiment that would change the founder's mind BEFORE they
  write code (fake-door, landing-page test, 10 customer calls).
□ Absence of evidence is NEVER dressed up as proof. A white-space banner with no
  "why is it empty" section is a FAILED verdict.
```

### Scenario: Produce a Full Feature Research Dossier

```
GOAL: A skeptical founder finishes the dossier knowing exactly whether to BUILD,
REFINE, or KILL — trusting every claim because it's cited or honestly flagged.
(Operates frameworks/deep-research-protocol.md §1-11.)

STEP 0: TOOLING LINE + STAKES TIER
□ State tools-used in one line (live search? or hypotheses-to-verify?).
□ Set the stakes tier: reversible decision → lighter search; irreversible/expensive
  → deepest tier. The tier sets how far you sweep before stopping.

STEP 1: DECOMPOSE (§1)
□ 3-6 canonical synonyms + the underlying job + adjacent mechanisms
□ The 7 research questions: Q1 does it exist? … Q7 if not, why not?

STEP 2: LAYERED SEARCH TO THE TIER (§2)
□ Sweep all 8 source layers (products, app stores, OSS, funding, VoC, patents,
  academic, regulatory). Search each synonym + the job + the negative. Localize.
□ Stop only when the verdict is FORCED and the search is exhausted for the tier.

STEP 3: LEDGER + ADVERSARIAL VERIFICATION (§3-4)
□ Citation Ledger: every claim → URL, tier (T1/T2/T3), recency, confidence.
□ Anti-hallucination gate: drop anything unconfirmable; down-label T3 anecdotes.
□ Verify adversarially — try to DISPROVE your own emerging verdict.

STEP 4: RENDER VERDICT A-E (§5)
  🟥A Established / 🟧B Emerging / 🟨C Adjacent / 🟩D White-space / ⬜E Inconclusive

STEP 5a: IF EXISTS (A/B/C) → COMPETITOR TEARDOWN (§6)
□ Who they are + how the feature ACTUALLY works (not their marketing copy)
□ Exact pricing + price metric (per seat? usage? flat?)
□ Traction in orders-of-magnitude (installs, ARR, headcount — ranges, cited)
□ The 1-star/3-star weakness themes (the gap you'd attack)
□ The moat (what they can't easily copy)
□ REFINEMENT WEDGE: the ONE differentiation axis, the ignored segment, 3 concrete
  things to do differently, and the "10x not 10%" test (is your edge an order of
  magnitude or just a tweak?).

STEP 5b: IF NOVEL (D) → "WHY IS IT EMPTY?" + VALIDATION PLAN (§7)
□ Rule in/out each empty-niche reason (no demand / tried-and-failed / regulatory /
  infeasible / too-small / incumbent-adjacent / genuine why-now).
□ The cheapest experiment that changes the builder's mind before code (fake-door,
  landing page, smoke test, 10 customer calls) + the kill criteria.

STEP 6: ASSEMBLE THE DOSSIER (§11) + DEPTH GRADE (§8)
□ Tools-used line | search coverage | verdict banner | evidence ledger |
  teardown-OR-novelty section | demand signals | prior art & regulation |
  risks/unknowns | clear Refine / Build-and-validate / Don't-build recommendation
□ Depth self-grade L0-L4 (Mariana Trench). Below L3 is NOT shippable — go deeper.
□ Final line = the decision: BUILD / REFINE / KILL, in one sentence, with the
  single reason. Every market claim cited to an openable source or flagged unverified.
```
