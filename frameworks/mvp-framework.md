# MVP Framework

## What an MVP Actually Is

An MVP is NOT a crappy version of your full product. It is the **smallest possible product
that tests your riskiest assumption** while delivering real value to real users.

## MVP Scoping Process

### Step 1: Identify the Core Hypothesis
What is the ONE thing that must be true for this product to succeed?

```
HYPOTHESIS FORMAT:
We believe that [target users] have [this problem] and would [desired behavior]
if we provided [proposed solution], which we'll know is true when we see [measurable signal].

Example:
We believe that busy professionals in Bengaluru have difficulty finding healthy lunch options
and would order at least 3x/week if we provided a curated healthy meal subscription,
which we'll know is true when 40% of beta users order 3+ times in their first 2 weeks.
```

### Step 2: Define the Core Value Loop
What is the minimum set of actions for a user to get value?

```
CORE LOOP: [User action] → [System delivers value] → [User gets outcome]

Example (food delivery):
Browse menu → Place order → Receive food

Example (SaaS):
Input data → System processes → User sees insight

The MVP MUST complete this loop end-to-end. Everything else is optional.
```

### Step 3: Apply the Cut Test
For every proposed feature, ask:

```
CUT TEST:
1. Can a user complete the core value loop WITHOUT this feature?
   YES → Cut it from MVP
   NO → Keep it

2. Is this feature testing our core hypothesis?
   YES → Keep it
   NO → Cut it from MVP

3. Will removing this feature make the product DANGEROUS or ILLEGAL?
   YES → Keep it (security, compliance, payment integrity)
   NO → Apply test 1 and 2

4. Will removing this feature make the product EMBARRASSING?
   Not a valid reason to keep it. Ship embarrassing. Learn fast.
```

### Step 4: MVP Feature Matrix

| Feature | Core Loop? | Tests Hypothesis? | Legal/Security? | MVP? | Effort |
|---------|-----------|-------------------|-----------------|------|--------|
| User signup | No (could use invite-only) | No | No | Cut | S |
| Email signup only | Yes (need accounts) | No | No | Keep | S |
| Social login | No | No | No | Cut | M |
| Browse products | Yes | Yes | No | Keep | M |
| Advanced filters | No | No | No | Cut | M |
| Basic search | Yes | No | No | Keep | S |
| Add to cart | Yes | Yes | No | Keep | M |
| Checkout | Yes | Yes | Yes | Keep | L |
| Payment (UPI only) | Yes | Yes | Yes | Keep | M |
| Multiple payment methods | No | No | No | Cut (add card/NB in v1.1) | L |
| Order tracking | No | No | No | Cut (SMS updates instead) | L |
| Reviews & ratings | No | No | No | Cut | M |
| Referral program | No | No | No | Cut | M |
| Push notifications | No | No | No | Cut (use SMS/email) | M |
| Admin dashboard | Yes (ops need it) | No | No | Keep (basic) | M |

### Step 5: MVP Timeline

```
HARD RULE: If your MVP takes more than 8 weeks to build, it's not an MVP.

Week 1-2: Foundation
- Auth (simplest possible — email + OTP or magic link)
- Core data models
- Basic API structure
- Design system setup

Week 3-5: Core Loop
- Primary screens (3-5 screens maximum)
- Core business logic
- Payment integration (one method)
- Basic admin operations

Week 6-7: Polish & Test
- Error handling
- Loading states
- Basic performance optimization
- Internal testing, bug fixes

Week 8: Soft Launch
- Deploy to production
- Invite 50-100 beta users
- Monitor, fix critical issues
- Begin collecting feedback
```

### Step 6: What "Done" Looks Like for MVP

```
MVP IS DONE WHEN:
□ A new user can sign up in < 2 minutes
□ A new user can complete the core value loop in < 5 minutes
□ Payment works end-to-end (with at least one method)
□ Errors are handled gracefully (no crashes, no blank screens)
□ Data is stored securely (encryption, access controls)
□ Basic analytics are tracking (signup, core action, payment)
□ At least 10 users have completed the full flow successfully
□ No known critical or high-severity bugs

MVP IS NOT DONE WHEN:
✗ "It works on my machine"
✗ Only the happy path is tested
✗ Analytics aren't instrumented
✗ Error states show raw error messages
✗ There's no way for users to contact support
```

## Common MVP Anti-Patterns

1. **The "We need feature parity" MVP**: Trying to match competitors before launching.
   You don't. You need to be 10x better at ONE thing.

2. **The "But what about scale" MVP**: Building for 1M users when you have 0.
   Optimize for learning, not load.

3. **The "Design-perfect" MVP**: Pixel-perfect designs for a product no one's validated.
   Clean and functional > beautiful and unvalidated.

4. **The "Kitchen sink" MVP**: 30 features, none finished properly.
   3 features, all bulletproof > 30 features, all half-baked.

5. **The "No-code MVP we'll rebuild later"**: Sometimes right, often a trap.
   Only if the rebuild is planned and budgeted from day one.
