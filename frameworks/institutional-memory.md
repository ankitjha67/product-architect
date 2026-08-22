# Institutional Memory & Context Tracking

## Purpose

KDRs track WHAT was decided. This framework tracks the deeper layer:
- WHY decisions were made (so future team members don't reverse good decisions)
- WHO knows what (so knowledge doesn't leave when people leave)
- HOW the team works (communication styles, preferences, working patterns)
- WHERE knowledge lives (which tool has which information)

Without this, companies lose institutional memory every time someone goes on
vacation, changes roles, or leaves. This framework prevents that.

---

## 1. The Three Layers of Context

```
LAYER 1 - DECISION MEMORY (already exists in KDR system)
What was decided, when, by whom, with what alternatives considered.

LAYER 2 - INSTITUTIONAL MEMORY (this framework adds)
WHY decisions were made. What alternatives were rejected and why.
What context existed at the time that made this the right call.
What changed since then that might make it worth revisiting.

LAYER 3 - PEOPLE & TEAM MEMORY
Who has expertise in what. Who has relationships with whom.
How each person prefers to communicate. What motivates them.
What's on each person's plate right now. Who's overloaded.
```

## 2. Decision Archaeology Record (DAR)

Every significant decision gets a DAR. Not just "we chose PostgreSQL" but the
full archaeology of why, what else was considered, and when to revisit.

```
DECISION ARCHAEOLOGY RECORD (DAR):

DECISION: [What was decided]
DATE: [When]
DECIDER: [Who made the final call]
PARTICIPANTS: [Who was in the discussion]

CONTEXT AT THE TIME:
- Company stage: [Seed / Series A / etc.]
- Team size: [X people]
- Budget constraint: [Monthly burn was ₹X]
- Timeline pressure: [Had to ship by X because Y]
- Key assumption: [We assumed X was true]

ALTERNATIVES CONSIDERED:
| Option | Pros | Cons | Why rejected |
|--------|------|------|-------------|
| [A] | | | |
| [B] | | | |
| [Chosen] | | | ← THIS ONE WON |

DECIDING FACTORS:
- Primary: [The one thing that tipped the decision]
- Secondary: [Other factors that supported it]
- Dissent: [Who disagreed and why - recorded respectfully]

REVISIT TRIGGERS (when should we reconsider this decision?):
□ If [assumption] turns out to be false
□ If team size exceeds [X]
□ If monthly spend on this exceeds [₹X]
□ If a competitor does [Y]
□ Scheduled review: [Date - typically 6 or 12 months]

LINKED DECISIONS: [Other decisions that depend on this one]
Example: "Our choice of PostgreSQL (DAR-007) affects DAR-012 (data pipeline)
and DAR-019 (analytics stack). If we revisit this, review those too."
```

## 3. Team Knowledge Map

```
PURPOSE: Know who knows what. Prevent single points of failure.
Update monthly or when someone joins/leaves.

KNOWLEDGE MAP:
| Domain | Primary Expert | Backup | Documentation | Bus Factor |
|--------|---------------|--------|--------------|-----------|
| Payment integration | [Name] | [Name] | [Link to docs] | 2 |
| User auth system | [Name] | [Nobody] ⚠️ | [None] ⚠️ | 1 ⚠️ |
| Frontend architecture | [Name] | [Name] | [Link] | 2 |
| DevOps / CI/CD | [Name] | [Nobody] ⚠️ | [Partial] | 1 ⚠️ |
| Customer onboarding | [Name] | [Name] | [Link] | 2 |
| Investor relations | [Founder] | [Nobody] ⚠️ | [None] ⚠️ | 1 ⚠️ |
| Legal / compliance | [Name] | [External lawyer] | [Link] | 1 ⚠️ |

BUS FACTOR RULES:
- Bus factor 1 = CRITICAL: One person's absence breaks this function
  → Action: Document their knowledge THIS WEEK. Cross-train someone.
- Bus factor 2 = ACCEPTABLE: Two people can handle this
- Bus factor 3+ = HEALTHY: Well-distributed knowledge

QUARTERLY KNOWLEDGE AUDIT:
□ Review the map. Is it still accurate?
□ Any new domains added? (New features, new tools, new markets)
□ Any bus factor 1 situations? (Assign cross-training within 30 days)
□ Any undocumented tribal knowledge? (Schedule documentation sprints)
```

## 4. Personal Context Profiles

```
PURPOSE: Help the team work better together by understanding how each person
operates. Filled out by each person voluntarily. Never used for evaluation.

PERSONAL WORKING CONTEXT:

Communication:
□ Preferred channel: [Slack DM / Email / In-person / Video call]
□ Response time expectation: [Instant / Within 2 hours / Within 24 hours]
□ Best time for deep work: [Morning / Afternoon / Late night]
□ Meeting preference: [Love meetings / Tolerate meetings / Hate meetings - async first]
□ Feedback style: [Direct and blunt / Gentle with context / Written over verbal]

Working patterns:
□ Peak productivity hours: [e.g., 10 AM - 1 PM]
□ Do not disturb hours: [e.g., before 10 AM, after 7 PM]
□ Working days: [Mon-Fri / Flexible / Compressed 4-day week]
□ Location: [Office / Remote / Hybrid - which days in office]
□ Timezone: [IST / EST / CET - matters for distributed teams]

Decision-making:
□ How I process decisions: [Quick gut + iterate / Need data first / Sleep on it]
□ How I handle conflict: [Direct confrontation / Mediated discussion / Written async]
□ What motivates me: [Impact / Learning / Recognition / Autonomy / Team / Money]
□ What demotivates me: [Micromanagement / Ambiguity / Meetings / Context-switching]

Context for managers:
□ Current capacity: [Underloaded / Just right / Slightly stretched / Overloaded]
□ Current biggest blocker: [X]
□ Skill I want to develop: [X]
□ What I wish my manager knew: [X]

UPDATE CADENCE: Quarterly, or when something changes significantly.
STORAGE: Internal wiki (Notion, Confluence) - private to the team.
RULE: This is voluntary and never used in performance reviews.
```

## 5. Tool Integration Map

```
PURPOSE: One source of truth for where information lives across your tool stack.
Prevents the "I know we discussed this somewhere but I can't find it" problem.

INFORMATION → TOOL MAPPING:
| Information Type | Primary Tool | Search Method | Retention |
|-----------------|-------------|--------------|-----------|
| Product decisions | [Notion / Confluence] | Page search | Permanent |
| Code & architecture | [GitHub] | Code search, PR search | Permanent |
| Design files | [Figma] | Project search | Permanent |
| Customer conversations | [Intercom / Zendesk] | Ticket search | 3 years |
| Sales conversations | [HubSpot / Salesforce] | Contact + deal search | Permanent |
| Internal chat (ephemeral) | [Slack] | Search (limited history on free) | 90 days / Permanent (paid) |
| Internal chat (permanent) | [Slack channels: #decisions, #announcements] | Pin + search | Permanent |
| Meeting notes | [Notion / Google Docs] | Search by date/participant | Permanent |
| Financial data | [Zoho Books / QuickBooks] | Report generation | 8 years |
| HR / People data | [Keka / BambooHR] | Employee search | Duration + 7 years |
| Project tracking | [Linear / Jira] | Issue search, filter | Permanent |
| OKRs / Goals | [Notion / Lattice] | Quarter filter | Permanent |
| Incidents / postmortems | [Notion / PagerDuty] | Tag search | Permanent |
| Competitive intel | [Notion / dedicated page] | Tag search | Permanent |

CRITICAL RULE: Every meeting where a decision is made → decision documented in
[primary tool] within 24 hours. Slack is NOT a documentation tool. If it was
decided in Slack, it must be moved to the permanent record.

INTEGRATION OPPORTUNITIES:
□ Slack → Notion: Use /notion or Zapier to auto-create pages from Slack messages
□ Linear/Jira → Slack: Auto-post ticket updates to relevant channels
□ GitHub → Linear/Jira: Auto-link PRs to tickets
□ CRM → Slack: Auto-notify when deals close or churn risk flagged
□ Calendar → Notion: Auto-create meeting notes templates
□ Monitoring → PagerDuty → Slack: Auto-alert chain for incidents
□ MemoryLane → Claude: Screen activity context for automation building
□ Zapier/Make/n8n: Cross-tool automation for anything not natively integrated

TOOL EVALUATION CRITERIA (before adding any new tool):
□ Does it REPLACE an existing tool, or ADD to the stack? (Prefer replace)
□ Does it integrate with our primary tools? (Non-negotiable for core tools)
□ Is the data exportable? (Never get locked in)
□ Does the team actually WANT to use it? (Shelfware is waste)
□ Total cost including setup/training time? (Not just license fee)
```

## 6. Context Handoff Protocol

```
PURPOSE: When someone goes on vacation, changes roles, or leaves -
their context transfers completely, not partially.

VACATION HANDOFF (>3 days away):
□ List all active projects/tasks with current status
□ Name the backup person for each
□ Share access to any tools/accounts the backup needs
□ Brief the backup in a 30-min call (not just a Slack message)
□ Set out-of-office with backup contact info
□ On return: Backup writes 1-paragraph summary of what happened

ROLE CHANGE HANDOFF (2-4 weeks):
□ Week 1: Document all recurring responsibilities with how-tos
□ Week 2: Shadow sessions - successor watches, asks questions
□ Week 3: Reverse shadow - successor does, predecessor watches and advises
□ Week 4: Successor operates independently, predecessor available for questions
□ Create: "If you're ever stuck, here's what I'd do" cheat sheet
□ Transfer: All relevant tool access, document ownership, meeting invites

EXIT HANDOFF (resignation/termination - see Agent 22):
□ Everything in Role Change PLUS:
□ Write DARs for any undocumented significant decisions
□ Update the Team Knowledge Map - who takes over each domain?
□ Record a 30-min "brain dump" video: Things that aren't written down anywhere
□ Introduce successor to key external contacts (vendors, partners, customers)
□ Ensure all code/docs are in shared repos, not personal accounts
```

## 7. Memory-Enhanced KDR (Upgrade to Existing System)

```
The standard KDR captures: Decision, choice, reason.
The enhanced KDR adds: Context, alternatives, triggers, linked decisions.

ENHANCED KDR FORMAT:

╔══════════════════════════════════════════════════╗
║ KDR: [PRODUCT NAME] - PHASE [X] COMPLETE        ║
╠══════════════════════════════════════════════════╣
║                                                  ║
║ [Standard KDR fields - same as SMART-LOADER.md]  ║
║                                                  ║
║ ─── ENHANCED CONTEXT (new) ───                   ║
║                                                  ║
║ DECISION ARCHAEOLOGY:                            ║
║ D#1: [Decision] → chose [X] over [Y, Z]         ║
║   Context: [Why this made sense at the time]     ║
║   Revisit if: [Trigger condition]                ║
║   Depends on: [Other decision numbers]           ║
║                                                  ║
║ KNOWLEDGE GAPS IDENTIFIED:                       ║
║ • [Topic we realized we don't know enough about] ║
║ • [Question that needs expert input]             ║
║                                                  ║
║ ASSUMPTIONS TO VALIDATE:                         ║
║ • [Assumption #1] - validate by [method] by [date]║
║ • [Assumption #2] - validate by [method] by [date]║
║                                                  ║
║ TEAM CONTEXT:                                    ║
║ • Who was involved: [Names/roles]                ║
║ • Who should be informed: [Names/roles]          ║
║ • Who has the deepest expertise here: [Name]     ║
║                                                  ║
╚══════════════════════════════════════════════════╝

THIS IS THE DIFFERENCE BETWEEN:
"We chose PostgreSQL" (basic KDR)
vs.
"We chose PostgreSQL over MongoDB because our data is relational,
we had 2 engineers with PostgreSQL expertise and 0 with MongoDB,
and our budget didn't allow for a managed MongoDB service. Revisit
if we need document-store patterns for >30% of our data, or if
team composition changes. Linked to DAR-012 (data pipeline)
and DAR-019 (analytics stack)." (enhanced KDR with DAR)
```

## 8. Context Tracking Metrics

```
MONTHLY:
□ Knowledge map coverage: % of critical domains with bus factor ≥ 2
□ Documentation freshness: % of docs updated within last 6 months
□ Decision archaeology coverage: % of significant decisions with DAR
□ Tool fragmentation score: Number of tools where critical info lives (lower = better)
□ Handoff completeness: % of role transitions with full handoff protocol

TARGETS:
□ Bus factor ≥ 2 for all critical domains: 100% (zero single points of failure)
□ Documentation freshness: >80% updated within 6 months
□ DAR coverage: 100% for decisions affecting >₹5L or >2 weeks of work
□ Tool count: <15 core tools (more = fragmentation risk)
□ Handoff completeness: 100% (no exceptions)
```
