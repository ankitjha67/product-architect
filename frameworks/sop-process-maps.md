# SOP & Process Maps: Every Department, Every Activity

## SOP Standard Format

Every SOP in this system follows this structure:

```
┌─────────────────────────────────────────────────────────────────────┐
│ SOP-[DEPT]-[NUMBER]: [Process Name]                                │
│ Version: [X.X] | Owner: [Role] | Last Reviewed: [Date]            │
│ Frequency: [Daily/Weekly/Per-event/etc.]                           │
│ Automation Status: [Manual / Partially Automated / Fully Automated]│
├─────────────────────────────────────────────────────────────────────┤
│ TRIGGER: What initiates this process                               │
│ INPUT: What's needed before starting                               │
│ STEPS: Numbered actions with owner, tool, SLA per step             │
│ OUTPUT: Expected deliverable / end state                           │
│ EXCEPTION HANDLING: What to do when things go wrong                │
│ ESCALATION: Who to contact, by when                                │
│ AUTOMATION OPPORTUNITY: What can be automated, with what tool      │
│ METRICS: How to measure this process (time, quality, cost)         │
│ REVIEW CADENCE: When this SOP is next reviewed                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Process Map Notation

```
[Start] → (Action) → <Decision?> → [End]
                        ├── YES → (Path A)
                        └── NO  → (Path B)

⚡ = Automation opportunity
⏱️ = SLA timer starts
🔁 = Loop / retry
⛔ = Blocker / escalation
```

---

## DEPARTMENT 1: ENGINEERING

### SOP-ENG-001: Feature Development Lifecycle

```
TRIGGER: Feature approved in sprint planning
INPUT: PRD, designs, acceptance criteria, engineering estimate

PROCESS MAP:
[PRD Approved] → ⏱️ (Branch created from main)
  → (Developer reads PRD + designs)
  → (Writes technical design doc for M/L/XL tasks) ⚡ Template auto-generated
  → <Tech design review needed?>
     ├── YES → (Peer review, 24hr SLA) → (Revise if needed)
     └── NO  → continue
  → (Implement code)
  → (Write unit tests — min 80% coverage) ⚡ Coverage gate in CI
  → (Self-review: lint, format, test pass) ⚡ Pre-commit hooks auto-run
  → (Open Pull Request) ⚡ PR template auto-populated
  → ⏱️ (Code review — 24hr SLA for first review)
  → <Review approved?>
     ├── YES → continue
     └── NO  → (Address comments) → 🔁 Re-review
  → ⚡ (CI/CD: lint + test + build + security scan — automated)
  → <CI passes?>
     ├── YES → (Merge to main)
     └── NO  → (Fix failures) → 🔁 Re-run CI
  → ⚡ (Auto-deploy to staging)
  → (QA verification on staging — 48hr SLA)
  → <QA passes?>
     ├── YES → (Mark as ready for production)
     └── NO  → (Bug filed, dev fixes, back to QA) → 🔁
  → (Production deploy per SOP-ENG-003)
  → [Feature live]

AUTOMATION OPPORTUNITIES:
⚡ PR template with checklist auto-generated from Jira/Linear ticket
⚡ CI/CD runs all checks automatically on PR open
⚡ Coverage gate: Block merge if coverage < 80%
⚡ Auto-deploy to staging on merge to main
⚡ Slack notification to QA when staging deploy completes
⚡ Auto-close Jira/Linear ticket when PR merges

METRICS:
- Lead time: PR opened → merged (target: <48 hours)
- Review turnaround: PR opened → first review (target: <24 hours)
- CI pass rate: % of CI runs that pass first time (target: >85%)
- Deployment frequency: Deploys per week (target: 5+)
```

### SOP-ENG-002: Bug Fix Lifecycle

```
TRIGGER: Bug reported (by user, support, QA, monitoring)
INPUT: Bug report with reproduction steps, severity, affected users

PROCESS MAP:
[Bug reported] → ⚡ (Auto-triaged by severity keywords/error type)
  → ⏱️ <Severity?>
     ├── SEV1 (Critical) → (Page on-call engineer — 15 min response)
     │   → (War room opened) → (Hotfix branch created)
     │   → (Fix implemented) → (Emergency code review — 1hr SLA)
     │   → (Deploy direct to production — skip staging if needed)
     │   → (Verify fix in production) → (Post-mortem within 72hrs)
     ├── SEV2 (High) → (Assign to current sprint — 24hr response)
     │   → (Standard dev flow: fix → test → review → deploy)
     ├── SEV3 (Medium) → (Add to next sprint backlog)
     └── SEV4 (Low) → (Add to backlog, prioritize in monthly grooming)
  → (Update reporter on fix status) ⚡ Auto-notification on ticket status change
  → (Close ticket with resolution notes)
  → [Bug resolved]

AUTOMATION:
⚡ Sentry/Crashlytics auto-creates bug tickets from production errors
⚡ Severity auto-assigned based on error rate, user impact, endpoint criticality
⚡ PagerDuty auto-pages on-call for SEV1
⚡ Slack notification to team channel for all bugs SEV1-2
⚡ Auto-email to reporter when bug status changes
⚡ Weekly bug metrics auto-generated (open/closed/aging)
```

### SOP-ENG-003: Production Deployment

```
TRIGGER: Feature/fix merged to main and ready for production
INPUT: Merged code, passing CI, QA sign-off

PROCESS MAP:
[Code merged to main]
  → ⚡ (Build Docker image, tag with commit SHA — automated)
  → ⚡ (Push to container registry — automated)
  → ⚡ (Deploy to staging — automated)
  → ⚡ (Run smoke tests on staging — automated)
  → <Smoke tests pass?>
     ├── YES → (Deployment approval request — Slack/Teams)
     │   → <Tech lead approves?>
     │   │   ├── YES → continue
     │   │   └── NO  → (Investigate, fix, re-run) → 🔁
     │   → ⚡ (Canary deploy — 5% traffic for 15 minutes)
     │   → ⚡ (Automated health check: error rate, latency, business metrics)
     │   → <Health check passes?>
     │   │   ├── YES → ⚡ (Gradual rollout: 25% → 50% → 100% every 10 min)
     │   │   └── NO  → ⚡ (Auto-rollback to previous version)
     │   │        → ⛔ (Alert team, investigate failure)
     │   → ⚡ (Post-deploy smoke tests on production)
     │   → (Update deployment log)
     │   → ⚡ (Slack notification: "Deployed vX.Y.Z — [changelog]")
     └── NO  → ⛔ (Block deploy, notify team, investigate)
  → [Deployment complete]

AUTOMATION:
⚡ Entire build-push-stage pipeline automated via CI/CD
⚡ Canary health check automated (error rate, p95 latency, payment success rate)
⚡ Auto-rollback if canary metrics degrade beyond threshold
⚡ Deployment notification with changelog auto-posted to Slack
⚡ Deployment log auto-updated (who, what, when, commit SHA)
⚡ Feature flags auto-synced with deployment
```

### SOP-ENG-004: On-Call Rotation

```
TRIGGER: Weekly rotation change (every Monday 10 AM)
PROCESS:
  → ⚡ (PagerDuty rotates to next engineer automatically)
  → ⚡ (Slack bot announces new on-call person)
  → (On-call engineer reviews open alerts, runbooks, recent deployments)
  → During on-call: Respond to pages within 15 min
  → End of shift: Hand off any ongoing issues to next on-call (written summary)
  → ⚡ (Weekly on-call summary auto-generated: pages, incidents, resolution times)

AUTOMATION:
⚡ Rotation managed by PagerDuty (no manual scheduling)
⚡ Escalation auto-triggers if primary doesn't acknowledge in 15 min
⚡ On-call report auto-generated weekly
```

---

## DEPARTMENT 2: PRODUCT & DESIGN

### SOP-PROD-001: Feature Request Processing

```
TRIGGER: Feature request received (user feedback, support ticket, internal idea, sales request)
INPUT: Description of requested feature/change

PROCESS MAP:
[Request received] → ⚡ (Logged in feedback tool — Productboard/Canny/spreadsheet)
  → ⚡ (Auto-tagged by category, source, customer segment)
  → <Duplicate of existing request?>
     ├── YES → ⚡ (Merge, increment vote count)
     └── NO  → continue
  → (Weekly feedback triage — PM reviews top requests by vote/frequency)
  → (PM evaluates: problem validity, user impact, strategic alignment)
  → <Worth investigating?>
     ├── YES → (Add to discovery backlog)
     │   → (User research / data analysis to validate)
     │   → <Validated?>
     │   │   ├── YES → (Write PRD, prioritize using RICE/ICE, add to roadmap)
     │   │   └── NO  → (Document learnings, close request with explanation)
     │   → (Notify requester of status) ⚡ Auto-notification on status change
     └── NO  → (Document reason for declining)
          → (Notify requester with explanation) ⚡ Auto-notification
  → [Request processed]

AUTOMATION:
⚡ Auto-dedup: Match new requests to existing by keyword/embedding similarity
⚡ Auto-tag by product area, user segment, sentiment
⚡ Weekly digest of top requests auto-generated
⚡ Auto-notify requesters on status changes
⚡ Quarterly "most requested features" report auto-compiled
```

### SOP-PROD-002: Sprint Planning

```
TRIGGER: Every 2 weeks (or weekly for weekly sprints)
INPUT: Roadmap, backlog, previous sprint retro, bug queue, stakeholder requests

PROCESS:
  → (PM reviews roadmap priorities and upcoming milestones)
  → (PM reviews bug queue — SEV1/2 bugs mandatory in sprint)
  → (PM drafts sprint proposal: features + bugs + tech debt allocation)
     Rule: 70% features, 20% bugs, 10% tech debt (adjust per phase)
  → (Sprint planning meeting — PM + Engineering + Design, 60 min max)
     → (Review each ticket: scope, dependencies, estimate)
     → (Team capacity check: vacations, on-call, meetings)
     → (Commit to sprint scope — never exceed 80% of capacity)
  → (Sprint board updated with committed items) ⚡ Auto-populated from planning tool
  → ⚡ (Daily standup: 15 min, async-first option via Slack bot)
  → (Mid-sprint check: Are we on track? Any blockers?)
  → (Sprint review: Demo completed work to stakeholders)
  → (Sprint retro: What went well, what didn't, actions for next sprint)
  → ⚡ (Sprint metrics auto-calculated: velocity, completion rate, carryover)

AUTOMATION:
⚡ Sprint capacity auto-calculated from team calendar
⚡ Carryover items auto-moved to new sprint
⚡ Daily standup via Slack bot (async) for remote teams
⚡ Sprint velocity trend auto-charted
⚡ Retro action items auto-tracked and reminded
```

### SOP-PROD-003: User Research Session

```
TRIGGER: Scheduled research (bi-weekly) or ad-hoc for specific feature validation
PROCESS:
  → (Define research question and methodology)
  → (Recruit participants — 5-8 per study) ⚡ Recruitment via panel tool (UserTesting, Respondent)
  → (Prepare discussion guide / task list)
  → (Conduct sessions — 30-45 min each, recorded with consent)
  → ⚡ (Transcript auto-generated by Otter.ai/Grain)
  → (Synthesize findings — affinity mapping)
  → (Write research brief: insights, evidence, recommendations)
  → (Share with team in weekly product sync)
  → (Add insights to research repository) ⚡ Tagged and searchable
  → [Research complete, insights actionable]
```

### SOP-DESIGN-001: Design Handoff to Engineering

```
TRIGGER: Design approved by PM and stakeholders
PROCESS:
  → (Designer finalizes all states: default, hover, active, loading, empty, error, disabled)
  → (Design tokens documented: colors, spacing, typography, components used)
  → (All assets exported: icons as SVG, images optimized) ⚡ Figma auto-export
  → (Interactive prototype linked in Jira/Linear ticket)
  → (Handoff meeting: Designer walks engineers through flows, interactions, edge cases — 30 min)
  → (Engineer asks questions, designer documents answers in ticket)
  → (Design QA after implementation: Designer reviews build against specs)
  → <Matches design?>
     ├── YES → (Approve)
     └── NO  → (File design bug with screenshot comparison) → 🔁
  → [Handoff complete]

AUTOMATION:
⚡ Figma auto-generates CSS/style code snippets
⚡ Design tokens auto-synced to code via Style Dictionary/Figma Tokens
⚡ Asset export automated via Figma plugin
⚡ Visual regression testing (Chromatic/Percy) catches unintended UI changes
```

---

## DEPARTMENT 3: MARKETING & GROWTH

### SOP-MKT-001: Content Publishing Pipeline

```
TRIGGER: Content calendar slot (weekly for blog, daily for social)
PROCESS MAP:
[Content slot due]
  → (Writer drafts content per brief) ⚡ Brief auto-generated from content calendar
  → (SEO optimization: keywords, meta description, internal links) ⚡ SurferSEO/Clearscope
  → (Editor review — 24hr SLA)
  → <Approved?>
     ├── YES → continue
     └── NO  → (Revisions) → 🔁
  → (Designer creates visuals/graphics) ⚡ Canva template or Figma component
  → (Final review by marketing lead)
  → ⚡ (Schedule via CMS/Buffer/Hootsuite)
  → ⚡ (Published at optimal time per platform analytics)
  → ⚡ (Auto-shared to social channels with platform-specific formatting)
  → ⏱️ (Performance review at 48 hours: views, engagement, conversions)
  → ⚡ (Monthly content performance report auto-generated)
  → [Content cycle complete]

AUTOMATION:
⚡ Content calendar auto-populated from quarterly theme planning
⚡ SEO analysis automated via tools
⚡ Social scheduling automated via Buffer/Hootsuite
⚡ Performance metrics auto-pulled into dashboard
⚡ Top-performing content auto-identified for repurposing/amplification
```

### SOP-MKT-002: Paid Campaign Management

```
TRIGGER: Campaign approved with budget allocation
PROCESS:
  → (Define objective, audience, budget, timeline, success criteria)
  → (Create ad variations: 3-5 headlines × 3-5 creatives = 9-25 combinations)
  → (Set up tracking: UTM parameters, conversion pixels, attribution) ⚡ UTM builder
  → (Launch campaign on platform: Meta/Google/LinkedIn)
  → ⚡ (Daily automated performance check: CPC, CTR, CPA, ROAS)
  → <CPA within target?>
     ├── YES → (Scale budget gradually, 20% per day max)
     └── NO  → <CPA within 150% of target AND improving?>
                ├── YES → (Wait 48 more hours, optimize audiences/creatives)
                └── NO  → (Pause underperformers, reallocate to winners)
  → ⚡ (Weekly campaign report: spend, results, CPA, ROAS by channel/campaign/ad)
  → (Monthly strategy review: top channels, top creatives, learnings)
  → [Campaign managed]

AUTOMATION:
⚡ UTM parameters auto-generated per campaign naming convention
⚡ Daily performance alerts: email/Slack if CPA exceeds threshold
⚡ Auto-pause ads exceeding 200% of target CPA (via platform rules)
⚡ Weekly report auto-compiled from Meta/Google Ads APIs
⚡ Attribution dashboard auto-updated (Google Analytics 4 / Mixpanel)
```

### SOP-MKT-003: Lead Follow-Up (B2B)

```
TRIGGER: New lead enters CRM (form fill, demo request, trial signup)
PROCESS:
  → ⚡ (Lead auto-scored based on: company size, role, industry, behavior)
  → <Score > threshold?>
     ├── HIGH → ⏱️ (Sales rep follow-up within 4 hours)
     │   → (Personalized email + meeting invite)
     │   → <Response within 48hr?>
     │   │   ├── YES → (Discovery call → pipeline)
     │   │   └── NO  → ⚡ (Auto-sequence: 3 follow-up emails over 10 days)
     ├── MEDIUM → ⚡ (Auto-nurture email sequence: 5 emails over 14 days)
     │   → (Re-score after sequence) → <Upgraded to HIGH?> → route to sales
     └── LOW → ⚡ (Add to monthly newsletter, re-engage in 90 days)
  → [Lead processed]

AUTOMATION:
⚡ Lead scoring automated in CRM (HubSpot/Salesforce)
⚡ Nurture email sequences auto-triggered
⚡ Meeting scheduling via Calendly/Cal.com (zero back-and-forth)
⚡ CRM auto-logs all email interactions
⚡ Sales rep notified via Slack when high-score lead enters
```

---

## DEPARTMENT 4: CUSTOMER SUPPORT

### SOP-SUP-001: Ticket Handling

```
TRIGGER: Support ticket created (email, chat, WhatsApp, in-app, social)
PROCESS MAP:
[Ticket created] → ⚡ (Auto-assigned to queue based on: channel, category, language, VIP status)
  → ⚡ (Auto-response: "We've received your request. Ticket #XXX. Expected response: X hours.")
  → ⚡ (AI auto-suggests resolution to agent based on similar past tickets)
  → ⏱️ (Agent picks up ticket — SLA timer running)
     SLAs: Chat < 2 min, Email < 4 hr, WhatsApp < 1 hr, Social < 2 hr
  → (Agent diagnoses issue using knowledge base + internal tools)
  → <Can resolve at Tier 1?>
     ├── YES → (Resolve, document resolution, close ticket)
     │   → ⚡ (Auto-send satisfaction survey — CSAT)
     └── NO  → (Escalate to Tier 2 with notes)
          → <Can resolve at Tier 2?>
          │   ├── YES → (Resolve, close)
          │   └── NO  → (Escalate to Tier 3 / Engineering)
          │        → (Engineering investigates, fixes, updates ticket)
          │        → (Agent closes ticket, notifies customer)
  → ⚡ (Ticket data auto-feeds into: weekly analysis, trending issues, knowledge base gaps)
  → [Ticket lifecycle complete]

AUTOMATION:
⚡ Multi-channel inbox auto-aggregated (Freshdesk/Zendesk/Intercom)
⚡ Auto-categorization by AI (topic, sentiment, urgency)
⚡ Auto-routing to appropriate agent/team
⚡ Auto-response with ticket number and ETA
⚡ AI-suggested responses from knowledge base
⚡ CSAT survey auto-sent after resolution
⚡ SLA breach alert auto-sent to team lead
⚡ Weekly ticket analysis auto-generated (volume, categories, resolution time, CSAT)
```

### SOP-SUP-002: Refund Processing

```
TRIGGER: Customer requests refund
PROCESS:
  → (Agent verifies order details and refund eligibility per policy)
  → <Eligible per refund policy?>
     ├── YES → <Refund amount < ₹5,000?>
     │   │   ├── YES → (Agent processes directly) ⚡ One-click refund in admin
     │   │   └── NO  → (Supervisor approval required — 4hr SLA)
     │   → ⚡ (Refund initiated via payment gateway API)
     │   → ⚡ (Confirmation email/SMS sent to customer)
     │   → ⚡ (Refund logged in finance reconciliation system)
     │   → ⏱️ (Refund tracking: 5-7 business days for card, instant for UPI to wallet)
     └── NO  → (Agent explains reason per approved response template)
          → <Customer disputes?>
          │   ├── YES → (Escalate to supervisor for exception review)
          │   └── NO  → (Close ticket)
  → [Refund processed]

AUTOMATION:
⚡ Refund eligibility auto-checked against policy rules
⚡ One-click refund for amounts under threshold
⚡ Refund status auto-tracked and customer auto-notified
⚡ Daily refund reconciliation auto-run against gateway records
⚡ Monthly refund analysis: reasons, amounts, repeat refunders flagged
```

---

## DEPARTMENT 5: FINANCE

### SOP-FIN-001: Monthly Financial Close

```
TRIGGER: Last day of month
TIMELINE: Complete within 10 business days of month end

PROCESS:
  Day 1-2:
  → ⚡ (Revenue recognition auto-calculated from billing system)
  → ⚡ (Payment gateway reconciliation auto-run — match every transaction)
  → (Flag and investigate mismatches)
  → ⚡ (Expense categorization auto-suggested from transaction descriptions)
  → (Manual review of uncategorized or large expenses)

  Day 3-5:
  → (Accounts payable: Verify all vendor invoices received and recorded)
  → (Accounts receivable: Verify all outstanding invoices, follow up on overdue)
  → ⚡ (Payroll auto-processed — Keka/Darwinbox/Gusto)
  → (Prepaid expense amortization — recognize monthly portion)
  → (Depreciation entries — auto-calculated per asset register)

  Day 6-8:
  → ⚡ (Bank reconciliation — auto-matched via accounting software)
  → (Investigate unmatched transactions)
  → (Inter-company reconciliation if applicable)
  → (Review accruals and provisions)

  Day 9-10:
  → (Generate P&L, Balance Sheet, Cash Flow statement)
  → (Finance controller review and approval)
  → (Variance analysis: Actual vs. Budget, with explanations for >10% variances)
  → (Finance review meeting with leadership)
  → ⚡ (Financial dashboard auto-updated)
  → [Month closed]

AUTOMATION:
⚡ Revenue recognition auto-calculated from subscription/order data
⚡ Gateway reconciliation automated (Razorpay/Stripe → internal records)
⚡ Bank reconciliation auto-matched (Zoho Books/QuickBooks/Xero)
⚡ Payroll auto-processed with statutory deductions
⚡ Financial statements auto-generated from accounting software
⚡ Variance report auto-calculated (actual vs. budget)
⚡ Dashboard auto-refreshed with latest financials
```

### SOP-FIN-002: Expense Reimbursement

```
TRIGGER: Employee submits expense claim
PROCESS:
  → (Employee submits via expense tool with receipt photo) ⚡ Mobile app capture
  → ⚡ (OCR auto-extracts: amount, vendor, date, category)
  → ⚡ (Auto-checked against expense policy: within limits? valid category? receipt attached?)
  → <Passes auto-check?>
     ├── YES → ⚡ (Routed to manager for approval — push notification)
     │   → ⏱️ (Manager approves/rejects — 48hr SLA)
     │   → <Approved?>
     │   │   ├── YES → ⚡ (Queued for next payroll cycle or direct reimbursement)
     │   │   └── NO  → (Rejection reason shared with employee)
     └── NO  → (Returned to employee with specific policy violation noted)
  → ⚡ (Reimbursement processed, employee notified)
  → ⚡ (Auto-categorized in accounting system for tax purposes)
  → [Expense processed]

AUTOMATION:
⚡ Receipt OCR via expense management tool (Fyle, Zoho Expense, Expensify)
⚡ Policy auto-check (amount limits, category rules, duplicate detection)
⚡ Manager approval via mobile push notification
⚡ Auto-integration with payroll for reimbursement
⚡ Tax categorization automated
```

---

## DEPARTMENT 6: HR & PEOPLE

### SOP-HR-001: New Employee Onboarding

```
TRIGGER: Offer accepted, start date confirmed
TIMELINE: Pre-joining to Day 90

PRE-JOINING (Day -14 to Day -1):
  → ⚡ (Welcome email auto-sent with: start date, office/remote info, Day 1 schedule)
  → ⚡ (IT provisions auto-triggered: laptop order, email creation, tool access)
  → ⚡ (HR system: Employee record created, payroll setup, insurance enrollment)
  → (Manager assigns buddy/mentor)
  → (Manager prepares 30-60-90 day plan)
  → ⚡ (Slack: New hire intro auto-posted to team channel with photo and fun fact)

DAY 1:
  → (HR welcome: Culture values, policies, benefits walkthrough — 60 min)
  → (IT setup: Laptop, accounts, 2FA, VPN — 30 min) ⚡ Pre-configured laptop image
  → (Team introduction: Meet the team, office tour or virtual meet)
  → (Manager 1:1: Role expectations, 30-60-90 plan review, first task assignment)
  → (Buddy lunch/coffee: Informal welcome)
  → (Product walkthrough: Guided demo of own product — 45 min)
  → ⚡ (Onboarding checklist auto-tracked: each step marked complete in HRIS)

WEEK 1:
  → (Codebase/product deep-dive with team lead)
  → (First small task assigned and completed)
  → (Attend team ceremonies: standup, planning, retro)
  → (Read company handbook, sign policies)
  → ⚡ (Day 5 check-in survey auto-sent: "How's your first week?")

MONTH 1:
  → (30-day check-in with manager: progress, blockers, feedback)
  → (Complete mandatory training: security, compliance, POSH) ⚡ Auto-assigned in LMS
  → (Contribute to at least 1 team project independently)
  → ⚡ (30-day survey auto-sent: onboarding experience, suggestions)

MONTH 2-3:
  → (60-day check-in: Taking ownership, increasing scope)
  → (90-day performance review: Formal probation assessment)
  → <Probation confirmed?>
     ├── YES → ⚡ (Confirmation letter auto-generated)
     └── NO  → (PIP or extension discussion)
  → ⚡ (90-day survey: comprehensive onboarding feedback for process improvement)
  → [Onboarding complete]

AUTOMATION:
⚡ Welcome email + pre-boarding materials auto-sent on offer acceptance
⚡ IT provisioning auto-triggered via HRIS → IT ticketing system integration
⚡ Onboarding checklist auto-tracked with reminders for incomplete items
⚡ Mandatory training auto-assigned in LMS on Day 1
⚡ Check-in surveys auto-sent at Day 5, Day 30, Day 90
⚡ Probation confirmation letter auto-generated on manager approval
```

### SOP-HR-002: Leave Management

```
TRIGGER: Employee requests leave
PROCESS:
  → (Employee submits leave request via HRIS) ⚡ Mobile app or Slack bot
  → ⚡ (Auto-check: Leave balance, blackout dates, team coverage)
  → ⚡ (Routed to manager — push notification)
  → ⏱️ (Manager approves/rejects — 24hr SLA for planned, 4hr for emergency)
  → ⚡ (Calendar auto-updated, team notified, out-of-office auto-set)
  → ⚡ (Payroll auto-adjusted for unpaid leave)
  → [Leave processed]

AUTOMATION: Entire flow automated via HRIS (Keka/Darwinbox/BambooHR/Gusto)
```

### SOP-HR-003: Performance Review Cycle

```
TRIGGER: Quarterly (check-in) / Annual (comprehensive)
PROCESS:
  → ⚡ (Review cycle kicked off in HRIS — auto-notifications to all participants)
  → (Employee writes self-assessment)
  → (Peers submit 360 feedback — anonymized) ⚡ Auto-requested from system
  → (Manager writes assessment based on goals, self-review, peer feedback)
  → (Calibration meeting: Managers align ratings across teams)
  → (Manager delivers review in 1:1 — discuss performance, development, goals)
  → (Compensation adjustment recommendations submitted to HR)
  → ⚡ (New goals set for next period — tracked in system)
  → ⚡ (Review documents auto-archived)

AUTOMATION:
⚡ Review cycle scheduling and notifications automated
⚡ 360 feedback collection automated with reminders
⚡ Goal tracking integrated with project management tools
⚡ Compensation recommendations routed to finance for budget check
```

### SOP-HR-004: Employee Exit / Offboarding

```
TRIGGER: Resignation submitted or termination decision made
PROCESS:
  → (Manager acknowledges resignation, discusses last working day)
  → (HR initiates offboarding checklist) ⚡ Auto-triggered in HRIS
  → (Knowledge transfer plan created — documented handover of all responsibilities)
  → (Exit interview scheduled — HR, not manager) ⚡ Auto-scheduled
  → (IT access revocation scheduled for last day) ⚡ Auto-scheduled in IT system
  → (Final settlement calculation: salary, leave encashment, gratuity, ESOP status)
  → (Equipment return: laptop, access cards, any company property)
  → ⚡ (Last day: All access revoked at EOD — email, Slack, GitHub, cloud, admin)
  → ⚡ (Final settlement processed within 30 days)
  → (Alumni network invitation sent)
  → [Exit complete]

AUTOMATION:
⚡ Offboarding checklist auto-created with department-specific items
⚡ Access revocation auto-scheduled for last working day across all systems
⚡ Final settlement auto-calculated per employment terms
⚡ Exit interview feedback auto-aggregated for quarterly analysis
```

---

## DEPARTMENT 7: OPERATIONS & SUPPLY CHAIN

### SOP-OPS-001: Order Fulfillment (E-commerce)

```
[Order placed]
  → ⚡ (Payment verified — auto-confirmed by gateway webhook)
  → ⚡ (Order created in OMS — auto)
  → ⚡ (Inventory reserved — auto)
  → ⚡ (Warehouse notified — auto)
  → (Picker picks items from shelf — guided by WMS)
  → (Packer verifies items, packs with invoice + brand inserts)
  → (Quality check: Item matches order, packaging intact)
  → ⚡ (Shipping label generated — auto from logistics partner API)
  → ⚡ (Tracking number assigned, customer notified — auto email/SMS/WhatsApp)
  → (Package handed to logistics partner)
  → ⚡ (Tracking updates auto-synced from logistics API)
  → (Delivery attempted)
  → <Delivered?>
     ├── YES → ⚡ (Delivery confirmation, proof of delivery captured)
     │   → ⚡ (Post-delivery email: rating prompt, cross-sell, feedback)
     └── NO  → (Reattempt next day, max 3 attempts)
          → <3 attempts failed?> → (Return to Origin, refund initiated)
  → [Order lifecycle complete]

AUTOMATION:
⚡ 90%+ of this flow is automated in a modern OMS (Unicommerce, Increff, custom)
⚡ Manual steps: pick, pack, quality check (unless robotics warehouse)
⚡ Every status change auto-communicated to customer
⚡ Exception handling auto-escalated (stuck orders, delayed shipments)
```

### SOP-OPS-002: Vendor Onboarding (Marketplace)

```
TRIGGER: New vendor/seller application
PROCESS:
  → (Vendor fills application form) ⚡ Self-service portal
  → ⚡ (Auto-verification: Business registration, GST, bank account)
  → (Manual review: Product catalog quality, pricing, brand authorization)
  → <Approved?>
     ├── YES → (Onboarding: Training on platform, listing guidelines, SLAs)
     │   → (First 10 orders monitored closely for quality)
     │   → (Vendor moves to regular status after satisfactory performance)
     └── NO  → (Rejection with specific reasons and re-application criteria)
  → [Vendor onboarded or rejected]

AUTOMATION:
⚡ Application form and document upload via self-service portal
⚡ GST/business registration auto-verified via government APIs
⚡ Bank account auto-verified via penny drop test (Razorpay/Cashfree)
⚡ Automated email sequences for onboarding training
```

---

## DEPARTMENT 8: LEGAL & COMPLIANCE

### SOP-LEG-001: Contract Review & Approval

```
TRIGGER: Contract received for review (vendor, customer, partner, employee)
PROCESS:
  → (Requester submits contract via legal intake form) ⚡ Jira Service Mgmt / Google Form
  → ⚡ (Auto-classified by type: vendor, customer, NDA, employment, partnership)
  → ⚡ (Standard contracts: Auto-compared against approved templates, deviations flagged)
  → ⏱️ <Contract type?>
     ├── Standard (NDA, vendor <₹5L) → (Paralegal review — 48hr SLA)
     ├── Significant (vendor >₹5L, customer, partner) → (Lawyer review — 5 day SLA)
     └── Critical (>₹25L, strategic, M&A) → (GC review — 10 day SLA)
  → (Review findings: Acceptable / Needs changes / Reject)
  → <Needs changes?>
     ├── YES → (Redlines shared with counterparty → Negotiate → Re-review) → 🔁
     └── NO  → (Approved for signature)
  → ⚡ (E-signature via DocuSign/PandaDoc)
  → ⚡ (Signed contract auto-stored in contract repository, tagged, indexed)
  → ⚡ (Key dates auto-calendared: renewal, termination notice period, milestones)
  → [Contract executed]

AUTOMATION:
⚡ Contract intake auto-routed by type and value
⚡ Standard contracts auto-compared to templates, deviations highlighted
⚡ E-signature eliminates print-sign-scan cycle
⚡ Contract repository with full-text search
⚡ Renewal/expiry reminders auto-triggered 90/60/30 days before
```

---

## DEPARTMENT 9: DEVOPS & SRE

### SOP-SRE-001: Incident Management

```
TRIGGER: Alert fires OR user reports issue OR monitoring detects anomaly

[Alert fires]
  → ⚡ (PagerDuty pages on-call engineer — 5 min to acknowledge)
  → ⏱️ (On-call acknowledges and begins investigation)
  → (Assess severity: SEV1/2/3/4 per severity matrix)
  → <SEV1 or SEV2?>
     ├── YES → (Open incident channel in Slack) ⚡ Auto-created by bot
     │   → (Assign Incident Commander + Communications Lead)
     │   → (Status page updated: "Investigating") ⚡ Statuspage.io API
     │   → (Investigate → Identify root cause → Implement fix)
     │   → (Status page: "Identified → Monitoring → Resolved") ⚡ Auto-updates
     │   → (User communication: Email/in-app notification) ⚡ Auto-sent on resolution
     │   → (Post-mortem within 72 hours — blameless format)
     │   → (Action items tracked to completion)
     └── NO  → (Fix in normal workflow, document in incident log)
  → [Incident resolved]

AUTOMATION:
⚡ Alert → PagerDuty → Slack channel — fully automated
⚡ Status page updates via API (no manual website edits during crisis)
⚡ Incident timeline auto-logged from Slack messages
⚡ Post-mortem template auto-generated with timeline, impact, and action items
⚡ Weekly incident review auto-compiled
```

---

## DEPARTMENT 10: GOVERNANCE & ADMINISTRATION

### SOP-GOV-001: Board Meeting Preparation

```
TRIGGER: 14 days before quarterly board meeting
PROCESS:
  → ⏱️ Day -14: (Company Secretary sends agenda request to all presenters)
  → Day -10: (Finance submits quarterly financials + management commentary)
  → Day -10: (Product submits KPI dashboard + roadmap update)
  → Day -10: (Each department submits board note for agenda items)
  → Day -7: ⚡ (Board pack compiled and distributed to all directors via secure portal)
     Contents: Agenda, minutes of last meeting, financials, KPI dashboard,
     department updates, proposals for approval, compliance status
  → Day 0: (Board meeting conducted — minutes recorded)
  → Day +2: (Draft minutes circulated to directors for comment)
  → Day +15: (Minutes finalized and signed)
  → ⚡ (Action items tracked and assigned with due dates)
  → ⚡ (Resolutions filed with ROC if required — India)
  → [Board meeting cycle complete]

AUTOMATION:
⚡ Board pack compilation auto-assembled from department submissions
⚡ Secure board portal (Diligent/BoardPAC) for distribution
⚡ Action items auto-tracked with reminders
⚡ Compliance calendar auto-generates filing deadlines
```

---

## MASTER AUTOMATION INDEX

### Automation by Category

```
FULLY AUTOMATED (zero human touch):
□ CI/CD pipeline (build, test, deploy)
□ Monitoring alerts and escalation
□ Payment gateway reconciliation
□ Email/SMS/WhatsApp transactional notifications
□ Leave balance tracking and payroll deductions
□ Certificate expiry monitoring
□ Log aggregation and error tracking
□ Deployment notifications
□ Sprint velocity calculations
□ Customer satisfaction survey sending

PARTIALLY AUTOMATED (human review/approval needed):
□ Code review (CI runs auto, human reviews code)
□ Bug triage (auto-classified, human assigns priority)
□ Expense reimbursement (OCR auto-extracts, manager approves)
□ Content publishing (auto-scheduled, human writes/reviews)
□ Lead scoring (auto-scored, human follows up)
□ Contract review (auto-compared to template, lawyer reviews deviations)
□ Refund processing (auto-checked eligibility, human approves over threshold)
□ Vendor onboarding (auto-verified docs, human reviews quality)

RECOMMENDED AUTOMATION TOOLS:
| Function | Tool Options |
|----------|-------------|
| CI/CD | GitHub Actions, GitLab CI, CircleCI |
| Monitoring | Datadog, Grafana, Sentry, PagerDuty |
| Helpdesk | Freshdesk, Zendesk, Intercom (with AI) |
| CRM | HubSpot, Salesforce (with workflow automation) |
| HRIS | Keka, Darwinbox (India), BambooHR, Gusto (US) |
| Accounting | Zoho Books, QuickBooks, Xero (with bank feeds) |
| Marketing | HubSpot, Mailchimp, Buffer (scheduling) |
| Contracts | DocuSign, PandaDoc (e-signature + templates) |
| Project Mgmt | Linear, Jira (with automation rules) |
| Workflow | Zapier, Make.com, n8n (cross-tool automation) |
| Notifications | MSG91, Twilio, SendGrid, WhatsApp Business API |
```

---

## SOP GOVERNANCE

```
SOP REVIEW CADENCE:
□ Critical SOPs (payments, security, incidents): Review quarterly
□ Operational SOPs: Review bi-annually
□ Administrative SOPs: Review annually
□ Any SOP involved in an incident: Review immediately after post-mortem

SOP CHANGE PROCESS:
1. Propose change (document what and why)
2. Review by SOP owner + affected teams
3. Approve (department head for operational, VP for cross-functional)
4. Update document, version bump, changelog entry
5. Communicate change to all affected personnel
6. Training if process change is significant
7. Archive old version (never delete — maintain history)

SOP METRICS:
□ SOP compliance rate (sampled quarterly via audit)
□ Process cycle time (is each SOP getting faster over time?)
□ Exception rate (how often does the process require escalation?)
□ Automation coverage (% of steps automated — track and increase quarterly)
```
