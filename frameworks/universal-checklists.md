# Universal Checklist System

## Purpose
A meta-framework for generating checklists for ANY business scenario. When a user asks
"I need a checklist for X," use this system to generate a comprehensive, industry-appropriate,
context-aware checklist — whether X is selecting a vendor, launching a product, hiring an
executive, opening an office, or preparing for an IPO.

## Checklist Generation Methodology

### Step 1: Classify the Scenario

```
| Category | Examples | Typical Depth |
|----------|---------|---------------|
| PROCUREMENT | Vendor selection, supplier evaluation, tool purchase, RFP | 20-40 items |
| LAUNCH | Product launch, market entry, feature release, campaign launch | 30-60 items |
| HIRING | Role opening, interview, onboarding, exit | 15-30 items |
| COMPLIANCE | Regulatory, audit, certification, legal | 20-50 items |
| OPERATIONAL | Process setup, migration, office opening, event planning | 25-50 items |
| FINANCIAL | Budget approval, investment, fundraising, M&A due diligence | 20-40 items |
| CRISIS | Incident response, PR crisis, data breach, legal action | 15-30 items |
| STRATEGIC | Partnership evaluation, market entry, pivot, acquisition target | 20-40 items |
```

### Step 2: Apply the COMPLETE Framework

Every checklist must cover all applicable dimensions:

```
C - CORE REQUIREMENTS: What must this accomplish? (functional requirements)
O - OPERATIONAL FIT: How does this fit into existing operations? (process compatibility)
M - MONEY: What's the total cost? (TCO, hidden costs, ongoing costs)
P - PEOPLE: Who's affected? Who decides? Who implements? (stakeholders)
L - LEGAL: Any contracts, regulations, compliance requirements? (legal review)
E - EVALUATON: How do we measure success? (KPIs, acceptance criteria)
T - TIMELINE: When does each step happen? What are the dependencies? (scheduling)
E - EXIT: What's the exit strategy if this doesn't work? (reversibility, plan B)
```

### Step 3: Generate the Checklist

Use the pre-built templates below, customized to the user's specific context.

---

## Pre-Built Checklist Library

### VENDOR SELECTION CHECKLIST

```
PHASE 1: REQUIREMENTS DEFINITION
□ Business need clearly documented (what problem does this vendor solve?)
□ Functional requirements listed (must-have vs. nice-to-have)
□ Technical requirements listed (integrations, APIs, data formats, security)
□ Compliance requirements identified (data residency, certifications, regulations)
□ Budget range approved by finance
□ Timeline defined (when do we need this operational?)
□ Success criteria defined (how will we know this vendor is working?)
□ Stakeholders identified (who uses it, who pays, who decides)

PHASE 2: MARKET RESEARCH
□ 5-10 potential vendors identified (web research, peer recommendations, analyst reports)
□ Initial screening: Eliminate vendors that don't meet must-have requirements
□ Shortlist 3-5 vendors for detailed evaluation

PHASE 3: EVALUATION
□ Product demo / trial for each shortlisted vendor
□ Security assessment (SOC 2, ISO 27001, pen test reports, data handling policy)
□ Privacy compliance check (GDPR, DPDP Act — where is data stored? Who has access?)
□ Integration assessment (APIs, SDKs, compatibility with current tech stack)
□ Scalability assessment (can it grow with us? Pricing at 10x our current scale)
□ Support quality assessment (response time SLA, dedicated account manager, 24/7 support?)
□ Financial stability check (funding, revenue, customer base, Glassdoor reviews)
□ Reference checks (talk to 2-3 existing customers of similar size/industry)
□ Total Cost of Ownership calculated (license + implementation + training + ongoing + exit)
□ Vendor comparison matrix scored (weighted criteria)

PHASE 4: DECISION & CONTRACT
□ Preferred vendor selected with documented rationale
□ Contract negotiated (pricing, SLA, data ownership, exit clause, auto-renewal terms)
□ Legal review of contract completed
□ Security team sign-off
□ Finance approval on total cost
□ Contract signed

PHASE 5: ONBOARDING & IMPLEMENTATION
□ Project plan with milestones and owners
□ Data migration plan (if applicable)
□ Integration development and testing
□ User training completed
□ Documentation updated (internal wiki, SOPs)
□ Go-live with monitoring
□ 30-day post-implementation review

PHASE 6: ONGOING MANAGEMENT
□ Monthly performance review against SLA
□ Quarterly business review with vendor
□ Annual contract review (renew, renegotiate, or exit)
□ Security reassessment annually
□ Backup vendor identified for critical services
```

### PRODUCT LAUNCH CHECKLIST

```
PRE-LAUNCH (4 WEEKS BEFORE):
□ All P0 features complete and tested
□ QA sign-off: No critical or high bugs open
□ Security review passed
□ Performance benchmarks met
□ Legal review: Privacy policy, ToS, cookie policy updated
□ Analytics instrumented and verified
□ Error tracking live (Sentry/Crashlytics)
□ Support team trained on new product/features
□ FAQ and help documentation updated
□ App Store / Play Store listing prepared (screenshots, description, keywords)
□ Landing page / marketing site updated
□ Press kit updated
□ Launch email drafted and reviewed
□ Social media content scheduled
□ Partner/stakeholder notifications sent

LAUNCH WEEK:
□ Final staging test (full E2E, payment flow, edge cases)
□ Deploy to production (canary → gradual → full)
□ Smoke tests on production
□ Monitor: Error rates, performance, payment success
□ Announce: Email, social media, blog, PR
□ Monitor: User feedback, app store reviews, social mentions
□ Support: Extended hours, escalation paths active
□ Daily stand-up: Launch team sync on issues and metrics

POST-LAUNCH (FIRST 2 WEEKS):
□ Daily metrics review (signups, activation, errors, revenue)
□ User feedback collection and categorization
□ Bug triage and hotfix deployment
□ App store review responses (especially negative reviews)
□ Media/PR follow-up
□ Internal retro: What went well? What to improve?
□ 2-week launch report with metrics and learnings
```

### HIRING CHECKLIST (per role)

```
PRE-HIRING:
□ Role justified (business need documented, budget approved)
□ Job description written (responsibilities, requirements, compensation range)
□ Interview plan defined (stages, interviewers, rubric)
□ Job posted on relevant platforms

SCREENING:
□ Resume review against must-have criteria
□ Phone screen completed (30 min)
□ Screened candidates moved to interview stage

INTERVIEWING:
□ Technical/skill assessment completed
□ Culture fit interview completed
□ Hiring manager interview completed
□ Senior leadership meeting (for senior roles)
□ All interviewers submitted scorecards
□ Debrief meeting held (hire/no-hire decision with reasons)

OFFER:
□ Compensation benchmarked against market
□ Offer letter prepared (salary, equity, benefits, start date)
□ Offer extended and accepted
□ Background verification initiated (if applicable)
□ Pre-boarding: Welcome email, equipment order, account creation

ONBOARDING (FIRST 90 DAYS):
□ Day 1: Welcome, team intro, product walkthrough, tooling setup, buddy assigned
□ Week 1: Understand codebase/product/processes, complete first small task
□ Month 1: Contributing independently, 30-day check-in with manager
□ Month 2: Taking ownership of projects, 60-day check-in
□ Month 3: Fully productive, 90-day performance review, probation confirmation
```

### EVENT / CONFERENCE CHECKLIST

```
PLANNING (8-12 WEEKS BEFORE):
□ Event objectives defined (leads? brand? hiring? community?)
□ Budget approved
□ Venue / virtual platform booked
□ Speakers confirmed (internal + external)
□ Agenda finalized
□ Registration page live
□ Promotion plan: Email, social, partner channels, paid ads

PREPARATION (2-4 WEEKS BEFORE):
□ Attendee communication: Agenda, logistics, what to bring/expect
□ Collateral: Slides, handouts, swag, business cards, demo setup
□ AV/tech check: Projector, mic, camera, internet, backup equipment
□ Catering: Food, beverages, dietary accommodations
□ Staffing: Booth staff, registration desk, AV support, photographer
□ Contingency: Backup speaker, backup internet, rain plan (outdoor events)

DAY OF:
□ Early setup and tech check (2 hours before start)
□ Registration and welcome
□ Event runs per agenda (with time buffers built in)
□ Photo/video documentation
□ Live social media coverage
□ Feedback collection (in-app survey or paper forms)

POST-EVENT (WITHIN 1 WEEK):
□ Thank you email to attendees (with slides, resources, recording)
□ Lead follow-up (within 48 hours)
□ Social media recap and content
□ Internal debrief: What worked, what didn't, ROI assessment
□ Expense reconciliation
□ Learnings document for future events
```

### OFFICE OPENING / EXPANSION CHECKLIST

```
□ Location scouting (proximity to talent, cost, infrastructure, transit)
□ Lease negotiation and legal review
□ Interior design and furniture procurement
□ IT infrastructure: Internet, WiFi, networking, server room
□ Security: Access control, CCTV, visitor management
□ Utilities: Electricity, water, backup power (UPS/generator in India)
□ Compliance: Fire safety certificate, local business license, GST registration
□ Insurance: Property, liability, contents
□ HR: Employment contracts updated for new location, local labor law compliance
□ Finance: New cost center, budget allocation
□ Operations: Housekeeping, pantry supplies, maintenance contracts
□ Communication: Announce to team, update address on website/legal docs/invoices
```

### DUE DILIGENCE CHECKLIST (M&A / Investment)

```
FINANCIAL:
□ 3-5 years audited financial statements
□ Monthly P&L and balance sheet (last 24 months)
□ Revenue breakdown by product/customer/geography
□ Customer concentration analysis (any customer >10% of revenue?)
□ Cash flow statements and burn rate
□ Outstanding debts, loans, convertible instruments
□ Cap table with all shareholders, options, warrants
□ Tax filings and any pending tax disputes

LEGAL:
□ Corporate structure and subsidiaries
□ All material contracts (customers, vendors, partners, employees)
□ IP portfolio (patents, trademarks, copyrights, trade secrets)
□ Litigation: Pending, threatened, or settled in last 3 years
□ Regulatory licenses and compliance status
□ Data processing agreements with all vendors

TECHNICAL:
□ Architecture documentation and tech stack
□ Code repository access and review
□ Technical debt assessment
□ Security audit results (last pen test, vulnerability scan)
□ Infrastructure costs and scaling capacity
□ Key technical dependencies and risks

TEAM:
□ Org chart with all roles
□ Key person dependencies (bus factor analysis)
□ Employee contracts, non-competes, IP assignment
□ Compensation benchmarking
□ Turnover rate and exit interview themes
□ Open positions and hiring pipeline

COMMERCIAL:
□ Customer list with contract values and renewal dates
□ Churn rate and retention metrics
□ Sales pipeline and conversion rates
□ Competitive positioning analysis
□ Market size and growth trajectory
```

## Checklist Quality Standards

Every generated checklist must:
1. Be ACTIONABLE: Each item starts with a verb or has a clear action
2. Be SPECIFIC: "Review contract terms" not "Look at contract"
3. Be ORDERED: Logical sequence, dependencies respected
4. Have OWNERS: Each section should have a responsible role/person
5. Have TIMELINES: Phase-based with clear milestones
6. Be COMPLETE: Cover COMPLETE framework dimensions (Core, Ops, Money, People, Legal, Eval, Time, Exit)
7. Be CONTEXTUAL: Adapted to user's industry, geography, company stage, and specific scenario
