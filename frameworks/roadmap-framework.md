# Roadmap Framework

## Roadmap Structure

Every roadmap has 4 horizons. The detail decreases as you look further out — because
certainty decreases. Don't pretend to know what you'll build in 12 months.

```
HORIZON 1 (Now → 8 weeks): HIGH DETAIL
- Specific features with PRDs written
- Engineering estimates assigned
- Design specs complete
- Sprint-level planning

HORIZON 2 (2-4 months): MEDIUM DETAIL
- Features identified and prioritized
- High-level specs (not full PRDs yet)
- Dependencies mapped
- Resource allocation estimated

HORIZON 3 (4-8 months): LOW DETAIL
- Themes and objectives, not specific features
- Tied to business goals and OKRs
- Flexible based on learnings from Horizon 1-2

HORIZON 4 (8-12+ months): VISION ONLY
- Strategic direction
- Market opportunities to explore
- Technology bets to evaluate
- Competitive positioning goals
```

## Phased Roadmap Template

```markdown
# Product Roadmap: [Product Name]
Last Updated: [Date]

## Phase 0: Foundation (Week 1-2)
**Goal**: Technical foundation and team readiness

| Workstream | Tasks | Owner | Status |
|-----------|-------|-------|--------|
| Infrastructure | Cloud setup, CI/CD, environments | Eng | |
| Design System | Typography, colors, components, icons | Design | |
| Auth System | Signup, login, session management | Eng | |
| Database | Schema design, migrations, seed data | Eng | |
| Payments | Gateway account setup, test mode config | Eng | |
| Analytics | SDK integration, event taxonomy defined | Eng | |
| Legal | Privacy policy, ToS, compliance review | Legal | |

**Milestone**: Development environment operational, all team members can run locally.

---

## Phase 1: MVP (Week 3-8)
**Goal**: Core value loop functional end-to-end

| Feature | Priority | Effort | Dependencies | Status |
|---------|----------|--------|-------------|--------|
| [Feature A] | P0 | M | Auth | |
| [Feature B] | P0 | L | Feature A | |
| [Feature C] | P0 | M | None | |
| [Feature D] | P0 | L | Feature B, Payments | |

**Milestone**: 50 beta users can complete core loop. Payment processes successfully.

**Exit Criteria**:
□ Core flow completion rate > 60%
□ Payment success rate > 95%
□ Crash rate < 0.5%
□ P0 bugs: 0 open
□ Beta user feedback collected

---

## Phase 2: Beta & Iteration (Week 9-14)
**Goal**: Validate with broader audience, iterate on feedback

| Feature | Priority | Rationale (from feedback) | Effort |
|---------|----------|--------------------------|--------|
| [Feature E] | P1 | Top user request from beta | M |
| [Feature F] | P1 | 40% drop-off at step X | S |
| [Feature G] | P1 | Competitive parity needed | L |
| Performance optimization | P1 | Load times > 5s on 3G | M |

**Milestone**: 500+ active users. D7 retention > 25%. NPS > 30.

---

## Phase 3: Growth (Month 4-6)
**Goal**: Scale acquisition, improve retention, expand features

| Theme | Features | Business Impact |
|-------|----------|----------------|
| Acquisition | Referral program, ASO, content SEO | 3x signup volume |
| Retention | Push notifications, personalization, rewards | D30 retention > 15% |
| Monetization | Additional payment methods, pricing experiments | ARPU +20% |
| Quality | Performance, accessibility, localization | Broader market reach |

**Milestone**: 5,000+ MAU. Positive unit economics (LTV > 3x CAC).

---

## Phase 4: Scale & Expand (Month 7-12)
**Goal**: Market expansion, platform features, competitive moat

| Theme | Direction |
|-------|-----------|
| Market expansion | [New geography/segment] |
| Platform | [APIs, integrations, marketplace features] |
| AI/Intelligence | [Personalization, recommendations, automation] |
| Operational excellence | [Internal tools, automation, efficiency] |

**Milestone**: [Revenue target]. [User target]. [Market position target].
```

## Dependency Mapping

For complex products, map feature dependencies:

```
Feature A ──────────────────────────────────┐
Feature B ── depends on A ──────────────────┤
Feature C ──────────────────┐               ├── Phase 1 Complete
Feature D ── depends on B+C ┘               │
Payment Setup ──────────────────────────────┘

Feature E ── depends on Phase 1 ────────────┐
Feature F ── depends on analytics data ──────┤── Phase 2 Complete
Feature G ── independent ───────────────────┘
```

## Roadmap Principles

1. **Ship early, learn fast**: A 60% feature shipped today beats a 100% feature shipped next quarter
2. **Date things loosely**: "Q2" not "April 15th" — precision implies false certainty
3. **Kill features that don't earn their place**: If Phase 2 data shows Feature X isn't used, cut it
4. **Leave buffer**: Plan for 70% capacity. The other 30% is bugs, tech debt, and surprises
5. **Review monthly**: Roadmap is a living document, not a contract
