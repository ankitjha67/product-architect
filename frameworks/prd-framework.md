# PRD Framework

Use this template for every PRD. Fill every section — if a section isn't applicable,
state why rather than leaving it blank.

---

```markdown
# Product Requirements Document: [Feature/Module Name]

**Version**: [1.0]
**Author**: [Name]
**Date**: [Date]
**Status**: [Draft / In Review / Approved / In Development]
**Priority**: [P0 / P1 / P2 / P3]

---

## 1. Overview

### 1.1 Problem Statement
[2-3 sentences. What problem does this solve? For whom? What evidence do we have that
this problem is real and worth solving?]

### 1.2 Goals
- **Primary goal**: [Measurable outcome this feature should achieve]
- **Secondary goals**: [Additional benefits]

### 1.3 Non-Goals (Explicitly Out of Scope)
- [Thing we are NOT doing, and why]
- [Thing we are NOT doing, and why]

### 1.4 Success Metrics
| Metric | Current | Target | Measurement Method |
|--------|---------|--------|-------------------|
| [Metric name] | [Baseline or N/A] | [Target value] | [How we'll measure] |

---

## 2. User Stories

### 2.1 Primary Personas
[Reference personas from Discovery Brief. List the 1-2 personas this feature serves.]

### 2.2 User Stories
| ID | As a... | I want to... | So that... | Priority |
|----|---------|-------------|------------|----------|
| US-001 | [persona] | [action] | [outcome] | P0 |
| US-002 | [persona] | [action] | [outcome] | P0 |

### 2.3 Acceptance Criteria
For each user story:
```
US-001:
- GIVEN [precondition] WHEN [action] THEN [expected outcome]
- GIVEN [precondition] WHEN [action] THEN [expected outcome]
- GIVEN [edge case] WHEN [action] THEN [expected outcome]
```

---

## 3. Functional Requirements

### 3.1 Feature Specification
[For each feature within this module:]

#### Feature: [Name]
- **Description**: [What it does]
- **Trigger**: [What initiates this feature]
- **Input**: [What data/action is needed from the user]
- **Processing**: [What the system does]
- **Output**: [What the user sees/receives]
- **Validation Rules**: [Input validation, business rules]

### 3.2 User Flows

#### Happy Path
1. [Step] → [System response]
2. [Step] → [System response]
3. [Step] → [System response]

#### Alternative Paths
- [Condition] → [Alternative flow]

#### Error Paths
- [Error condition] → [Error handling] → [Recovery path]

### 3.3 Business Rules
| Rule ID | Rule | Condition | Action |
|---------|------|-----------|--------|
| BR-001 | [Rule name] | [When this condition] | [Do this] |

---

## 4. UI/UX Requirements

### 4.1 Screens Required
| Screen | Description | States |
|--------|-------------|--------|
| [Screen name] | [What it shows] | Loaded, Loading, Empty, Error |

### 4.2 Screen-Level Specifications
[For each screen, specify:]
- Content elements and hierarchy
- Interactive elements and behaviors
- Navigation paths (where can user go from here?)
- Loading behavior (skeleton, spinner, progressive)
- Empty state (what to show when no data)
- Error state (what to show when something breaks)

### 4.3 Interaction Specifications
| Interaction | Trigger | Behavior | Feedback |
|------------|---------|----------|----------|
| [Name] | [Tap/swipe/scroll] | [What happens] | [Visual/haptic] |

---

## 5. Data Requirements

### 5.1 Data Model
| Entity | Fields | Type | Required | Notes |
|--------|--------|------|----------|-------|
| [Entity] | [field_name] | [string/int/etc] | [Y/N] | [Validation, constraints] |

### 5.2 API Endpoints
| Method | Endpoint | Auth | Description | Request | Response |
|--------|----------|------|-------------|---------|----------|
| POST | /api/v1/... | Yes | [What it does] | [Body] | [Shape] |

---

## 6. Non-Functional Requirements
- **Performance**: [Response time, load time targets]
- **Scalability**: [Expected load, growth expectations]
- **Availability**: [Uptime requirements]
- **Security**: [Auth requirements, data protection needs]
- **Accessibility**: [WCAG level, specific requirements]
- **Localization**: [Languages, currencies, formats]

---

## 7. Edge Cases & Error Handling
| Scenario | Expected Behavior | User Feedback |
|----------|------------------|---------------|
| [Edge case] | [System behavior] | [What user sees] |
| Network failure during [action] | [Behavior] | [Message] |
| Concurrent access to [resource] | [Behavior] | [Message] |

---

## 8. Dependencies & Risks
| Dependency/Risk | Type | Impact | Mitigation |
|----------------|------|--------|------------|
| [Dependency] | [External/Internal] | [What if unavailable] | [Fallback plan] |

---

## 9. Release Plan
- **Phase**: [Which roadmap phase]
- **Estimated effort**: [T-shirt size with justification]
- **Dependencies**: [What must be built/available first]
- **Feature flag**: [Will this be behind a flag?]
- **Rollback plan**: [How to undo if issues arise]

---

## 10. Open Questions
| Question | Owner | Due Date | Resolution |
|----------|-------|----------|------------|
| [Question] | [Who needs to answer] | [When] | [Answer when resolved] |

---

## Appendix
- Wireframes / mockups (link to design files)
- Technical architecture references
- Research data supporting decisions
- Competitive analysis screenshots
```
