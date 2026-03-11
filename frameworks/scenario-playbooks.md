# Scenario Playbooks: Tactical Execution Guides

Every agent has theory. This file has the "I need to do THIS, TODAY" playbooks.
Each scenario is self-contained with exact steps, scripts, timelines, and checklists.

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
