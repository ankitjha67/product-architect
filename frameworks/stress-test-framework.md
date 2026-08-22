# Stress Test Framework

## Purpose
This framework contains edge cases and failure scenarios that even experienced product managers
and engineers miss. Apply it to EVERY feature before considering it "specified."

## Universal Edge Cases (Apply to ALL Products)

### Time & Timezone
```
□ User in UTC+5:30 (India) creates order at 23:50 - does the "date" of the order reflect their timezone or server time?
□ User in UTC-8 (US Pacific) and user in UTC+9 (Japan) collaborate - whose timezone wins for deadlines?
□ Daylight Saving Time transition - a scheduled event at 2:30 AM when clocks skip from 2:00 to 3:00
□ User changes timezone on their device mid-session - what happens to time-dependent data?
□ "Today's deals" - today according to whom? Server? User? UTC?
□ "Expires in 24 hours" - from when exactly? Created? Viewed? UTC midnight?
□ Leap year: Feb 29 - scheduled events, birthday fields, age calculations
□ Leap second (rare but real): 23:59:60 - does your timestamp parser handle it?
□ Historical date: User enters birthdate before 1970 (Unix epoch) - does it store correctly?
□ Future date: User accidentally enters date in 2030 - is there reasonable validation?
```

### Identity & Authentication
```
□ User signs up with email, later tries to sign up with same email via Google OAuth - account merge or conflict?
□ User changes their email, then tries to login with old email - what message?
□ User has caps lock on while typing password - do you warn them?
□ User's name contains special characters: O'Brien, María, 松田太郎, Müller, 김민수
□ User's name is a single character - does validation reject it? (Some cultures have single-name naming)
□ User with very long name (Wolfeschlegelsteinhausenbergerdorff) - does UI truncate gracefully?
□ User has no last name (some Indonesian names) - is "Last Name" required?
□ User email has + addressing: user+test@gmail.com - does it work? Is it treated as separate from user@gmail.com?
□ User tries to register with a disposable email (mailinator, guerrillamail) - do you allow it?
□ Shared device: User A logs out, User B logs in - is User A's data fully purged from local storage?
□ User's phone number changes (new SIM) - how do they update it and still maintain account security?
□ User's identity documents expire after KYC - how do you handle re-verification?
```

### Data & Input
```
□ Copy-paste into input fields introduces hidden characters (zero-width spaces, RTL marks)
□ User pastes 50,000 characters into a text field meant for 500 - does it crash or validate gracefully?
□ User pastes an image into a text field
□ User enters ₹10,00,000 (Indian numbering) vs. ₹1,000,000 (Western numbering) - which is accepted?
□ Currency: 0.1 + 0.2 ≠ 0.3 in floating point - are prices stored as integers (paise, cents)?
□ User enters price as "1,500" vs "1500" vs "₹1500" vs "1500.00" - parsing edge cases
□ Negative numbers in quantity fields - can a user order -1 items?
□ Scientific notation: Does entering "1e5" in a price field cause issues?
□ SQL injection in EVERY input field, not just login: search, address, name, review, support ticket
□ XSS in every text display: What if a product name contains <script>alert(1)</script>?
□ Unicode abuse: Combining characters, RTL override, invisible characters in usernames/product names
□ Emoji in unexpected places: Can a user name their product "🔥 Hot Deal 🔥"? Should they be able to?
□ File upload: SVG with embedded JavaScript, image with EXIF GPS data (privacy leak), PDF with malware
□ File upload: 0-byte file, 5GB file, file with no extension, file with double extension (.jpg.exe)
```

### Network & Connectivity
```
□ User starts an action on WiFi, walks out of range, finishes on 3G - does the request complete?
□ Request takes 30 seconds - does the user see a timeout? Can they cancel?
□ User submits a form, network is slow, user clicks submit again - double submission?
□ Airplane mode mid-upload - is the upload resumable or does it restart from scratch?
□ User is on a VPN that changes their apparent country - does geo-restriction apply?
□ User is behind a corporate proxy that blocks WebSocket - does your real-time feature degrade?
□ CDN cache serves stale content after deployment - cache invalidation strategy?
□ DNS propagation delay - user on old DNS sees old version, user on new DNS sees new version
□ Extremely high latency (satellite internet, 500ms+ RTT) - does the UX still work?
□ User has data saver mode enabled - are images appropriately compressed?
```

### Concurrency & Race Conditions
```
□ Two users buy the last item in stock simultaneously - who gets it? What does the other see?
□ User opens cart in two tabs, adds item in tab A, tab B still shows old cart - consistency?
□ Admin changes product price while user is on checkout page - which price is charged?
□ User starts a payment, browser crashes, payment succeeds at gateway but app doesn't know
□ Two support agents assign the same ticket to themselves simultaneously
□ User edits their profile while an admin also edits it - last write wins or conflict resolution?
□ Batch process running while user makes changes to the same data
□ Scheduled job fires twice due to infrastructure hiccup - is the job idempotent?
□ WebSocket reconnection during a real-time update - does the user miss messages?
□ User deletes their account while a background job is processing their data
```

### Financial & Payment
```
□ User pays ₹0.01 - does the payment gateway accept it? (Minimum transaction amount)
□ Order total is ₹0 (100% coupon) - does checkout skip payment but still create order?
□ User applies two coupons (if allowed) - is the discount calculation correct? (Stacking: absolute + percentage)
□ Coupon makes order total negative - is it handled? (Refund the difference? Cap at ₹0?)
□ User changes cart after applying coupon - does coupon still apply? Is minimum spend still met?
□ Price changes between "Add to Cart" and "Checkout" - which price is used? Is user notified?
□ Tax calculation for items shipped across state/country borders - different tax rates per destination
□ Split payment across two methods - first succeeds, second fails - atomicity? Rollback first?
□ Recurring subscription: Card expires between payments - dunning sequence starts, but user doesn't realize
□ Refund to a closed bank account / expired card - where does the money go?
□ Currency conversion rate changes between order placement and settlement
□ Extremely large order (₹99,99,999) - does the UI, API, and DB handle it?
□ Chargeback/dispute from user's bank - how is it detected, handled, contested?
```

### Platform & Device
```
□ User on a 6-year-old Android phone with 1GB RAM - does the app function?
□ User with Android Go edition - limited app size restrictions
□ User with 16GB free storage tries to download 20GB of offline content
□ iOS: App killed by OS for memory → user returns → state is lost if not persisted
□ Android: System destroys Activity during configuration change (rotation) → data loss if not saved
□ User has root/jailbreak - does your app security depend on device integrity?
□ User cloned the app (Parallel Space, Dual Messenger) - are accounts isolated?
□ Screen readers: Does every interactive element have an accessible name?
□ Keyboard navigation: Can a user complete every flow without a mouse?
□ User with color blindness - is critical information conveyed only through color?
□ User zoomed browser to 200% - does the layout still function?
□ Print CSS: What happens if a user tries to print a page?
□ User with adblocker - does the site still function? Are analytics tracking ethically?
```

### Scale & Volume
```
□ User with 10,000 items in cart (bot? bulk buyer?) - does the cart page load?
□ Product with 100,000 reviews - pagination, infinite scroll, or load on demand?
□ User searches for extremely common term that returns 1M results - response time?
□ Flash sale: 100,000 users hit "Buy Now" at exactly 12:00:00 - database handles it?
□ Notification system: 5M users need to be notified simultaneously - batch or queue?
□ Image upload: 1,000 users uploading 10MB images simultaneously - storage and processing pipeline
□ Audit log: After 2 years, the audit log table has 10 billion rows - query performance?
□ User has been on the platform for 5 years - does their data volume cause profile page slowdowns?
□ A single seller has 50,000 products - does their product management page work?
□ An admin exports all user data - 500MB CSV download - does it timeout or stream?
```

### Business Logic
```
□ User is in two conflicting segments (new user promo + loyalty discount) - which applies?
□ Referral: User refers themselves (different email, same device) - is it detectable?
□ User creates account, gets welcome offer, deletes account, re-creates - gets offer again?
□ Product has a minimum order quantity but is also the last in stock - which rule wins?
□ Scheduled price change at midnight - cache shows old price, API returns new price - inconsistency
□ User in waitlist is notified "item back in stock" - but by the time they click, it's sold out again
□ Flash sale: User adds item during sale, checks out after sale ends - sale price or regular price?
□ Loyalty points expiry: User has 10,000 points, 5,000 expire tomorrow - do you notify? When?
□ A/B test: User in variant A on mobile, variant B on web - consistent or independent?
□ Feature flag: User had feature, flag turns off, user had data in that feature - data access?
```

## Extended Catalogue (Deep Dives by Failure Class)

The categories above are the sweep. These are the deep dives: the specific mechanisms
that produce production incidents, with the rule or threshold that prevents each one.

### Idempotency & Exactly-Once
```
□ Double submit: user double-clicks "Pay" within 300ms - are both processed? Rule: every mutating POST carries a client-generated Idempotency-Key (UUIDv4); server stores key + response for >=24h and replays the stored response
□ Idempotency key reused with a DIFFERENT request body - return 4xx, never silently apply either version (Stripe semantics)
□ Lost update: A reads balance 100, B reads 100, both write 90 - result is 90 instead of 80. Fix: optimistic locking (version column, compare-and-swap) or SELECT ... FOR UPDATE
□ Scheduled job fires on two nodes after a leader-election flap - guard with a distributed lock (Redis SET NX PX, Postgres advisory lock) whose TTL exceeds max job runtime, plus a fencing token
□ Inventory oversell: reserve stock at add-to-cart with a TTL or at payment-intent creation, not at order creation
□ Webhook races the client: the payment webhook arrives BEFORE the browser's confirm call returns. Both paths must converge on one state, and neither may create a duplicate order
```

### Time, Dates & Clocks (deep dive)
```
□ Store UTC; store the user's IANA zone id ("Asia/Kolkata"), never a fixed offset - offsets change when governments change DST rules
□ Spring-forward: 02:30 does not exist that day. A job scheduled at 02:30 local skips or doubles. Decide which, write it in the PRD
□ Leap day: a trial started Feb 29 ends when in a non-leap year? A subscription created Jan 31 renews Feb 28 or Mar 1? State the clamp rule and use it in billing AND reminders
□ Expiry boundary: does "expires 2026-03-01" die at 00:00:00.000 or 23:59:59.999? Use exclusive upper bounds: valid_from <= t < valid_to
□ Clock skew: client clocks drift by minutes. Never trust client timestamps for ordering, expiry, or rate limits; allow ~60s leeway on JWT nbf/exp
□ "Valid until midnight" - whose midnight? A user at UTC+13 and one at UTC-11 differ by 24 hours on the same coupon
```

### Money & Currency (deep dive)
```
□ Never floats. Store minor units as integers (paise, cents) or fixed-precision decimal (NUMERIC(19,4) in Postgres)
□ State the rounding mode: half-up, half-even (banker's), or always-down. Tax authorities and card networks may each require a different one
□ Discount allocation must make line items sum EXACTLY to the order total. ₹100 across 3 items = 33.33 x 3 = 99.99; use the largest-remainder method to place the stray paisa
□ FX has three rates: quoted, captured, settled. Persist the rate and its timestamp on the transaction; never recompute a historical amount
□ Zero-amount is a valid case: ₹0 order from a 100% coupon, ₹0 invoice, and a $0 card-verification auth are three different flows
□ Refund exceeding the original must be impossible at the data layer: sum(refunds) <= captured_amount as a constraint, not app logic
□ Partial refunds: several partials summing to the original must flip status to fully_refunded exactly once, never twice
□ Refund after the settlement window (card networks commonly allow 120-180 days; verify with your PSP) falls back to bank transfer or store credit
```

### Identity, Sessions & Authorization Lifecycle
```
□ User deleted or suspended while holding a valid 60-minute access token - is every request re-checked against the user store, or does the JWT ride to expiry?
□ Permission revoked mid-action: a bulk export started as admin, role lost at step 3 of 10. Abort, complete, or partial? Decide and log
□ Role change mid-session: promotion must not require re-login; demotion MUST take effect within a stated bound (state it: <=5 minutes, via short token TTL plus a revocation list)
□ Support impersonation ("log in as user"): labelled in the UI, logged to a separate audit stream, and blocked for privileged actions such as changing payout details
□ Ownership succession: the sole admin of a workspace leaves the company. Every resource needs a documented path out of orphanhood
□ Deleted user's artifacts: comments, orders, audit rows. Hard delete breaks referential integrity - use a tombstone user and preserve legally required records (see data-governance.md §8)
□ Re-registration with the same email after deletion must NOT inherit the old account's data
□ IDOR: an object id from tenant A requested by tenant B. Filter by tenant at the data layer; never trust the URL
```

### Cardinality: Zero, One, Many, Too Many
```
□ ZERO: every list needs an empty state with a next action, not a blank box - zero results, zero orders, zero teammates, zero permissions
□ MANY: a 10,000-option picker must be searchable and virtualized or the browser hangs
□ Pagination boundaries: exactly page_size (phantom next page?), page_size + 1, a last page holding 1 item, and a page number past the end
□ Offset pagination drifts when rows are inserted or deleted between requests - items get skipped or repeated. Use keyset/cursor pagination for mutable user-facing lists
□ Payload limits must be set and documented: common defaults are nginx 1MB body, API Gateway 10MB, Lambda 6MB synchronous
□ Large export (5M rows): stream it or generate async and hand back a pre-signed link. Never build in memory, never hold an HTTP connection for 10 minutes
```

### Failure, Retries & Delivery Semantics
```
□ Timeout budget must decrease inward: client 30s > gateway 29s > service 10s > DB 5s. An inner timeout longer than the outer one means the user sees failure while work continues
□ Partial write: order row committed, inventory decrement failed. Use one transaction, or an outbox plus a reconciliation job. Two writes and hope is not a design
□ Retry storm: 10,000 clients retrying on the same interval re-kill the service on recovery. Exponential backoff + full jitter + circuit breaker + a retry budget (cap retries near 10% of traffic)
□ Duplicate webhooks: Stripe, GitHub, Twilio, and Shopify all document at-least-once delivery. Dedupe on event id and retain processed ids for >=30 days
□ Out-of-order webhooks: subscription.updated arriving before subscription.created, or an old state overwriting a newer one. Compare event timestamps or versions and drop stale events
□ Endpoint down for 6 hours: know the provider's retry window, and run an independent reconciliation job that pulls authoritative state
□ Degraded-not-down dependency (p99 at 5s): an over-generous timeout propagates someone else's outage. Fail fast and degrade
□ Backfill and replay must not re-send 3 months of emails - every consumer needs a replay-safe mode and side effects gated behind it
```

### Encoding, Unicode & Injection
```
□ UTF-8 everywhere. MySQL "utf8" is 3-byte and cannot store emoji - use utf8mb4 with an explicit collation
□ Length in characters vs bytes vs grapheme clusters: the family emoji is 1 grapheme, 7 code points, 25 UTF-8 bytes. Say which one your 50-char limit means
□ Normalization: precomposed "é" (U+00E9) and "e" + U+0301 are not equal byte-wise. Normalize to NFC on input for identifiers and dedupe
□ Bidi overrides (U+202E) visually reverse text so "gpj.exe" renders as "exe.jpg" - strip bidi controls from display names and filenames
□ Null byte (\x00) truncates in C-based parsers, is rejected by Postgres text columns, and defeats naive extension checks ("a.php\x00.jpg")
□ Fire these at EVERY field including headers and filenames: ' OR 1=1--, <script>alert(1)</script>, {{7*7}}, ${jndi:ldap://x}, ../../etc/passwd, ;id, and a 5,000-character string
□ CSV formula injection: a cell beginning with =, +, -, or @ executes on open in Excel. Prefix on export or quote defensively
```

### State Machines & Lifecycle
```
□ Draw the state machine. Every entity (order, subscription, ticket, KYC case, refund) has one, and each legal transition should be an explicit row in a table
□ Illegal transitions attempted directly via API: cancel a shipped order, refund a pending payment, publish a deleted post. Enforce in the service or DB, never only in the UI
□ Stuck states: anything named pending, processing, or in_review needs a max dwell time, an alert, and an operator action. Standing query: count of rows in state X older than N minutes
□ Concurrent transitions: approve and reject clicked at the same moment. Make the transition a conditional update (UPDATE ... WHERE status = 'pending') and check rows-affected
□ No true cross-system rollback - define the saga compensation for each step (refund, unreserve, notify)
□ Timeout transitions are owned by jobs, not hope: cart expires in 30 min, invite in 7 days, OTP in 5 min
□ Audit every transition with who, when, from, to, reason, and request id. Without it, disputes are unwinnable
```

### Abuse & Adversarial Use
```
□ Enumeration: /users/1, /orders/1000..2000. Use non-sequential ids (UUIDv7, ULID) AND per-object authorization - unguessable ids alone are not access control
□ Account-existence oracle: "email not found" at login, or a measurably faster response for known accounts. Return a uniform message and normalize timing
□ Credential stuffing: rate-limit per IP, per account, and per device; add exponential lockout and a breached-password check (Have I Been Pwned k-anonymity API)
□ OTP abuse: unlimited resend becomes an SMS-pumping fraud bill. Cap sends per number per hour, attempts per code (5), and expire the code (5 min)
□ Scraping signals: high rate, no asset loads, sequential ids, datacenter ASN. Response: rate limits, bot management (Cloudflare, hCaptcha), plus a sanctioned API so legitimate users stop scraping
□ Promo abuse: define what "one per customer" means - per email, per card fingerprint, per device, per normalized address, per phone. Pick several and stack them
□ Cost-amplification: one request fanning out to 100 downstream calls or an expensive model invocation. Meter and cap per API key
```

---

## Stress Test Execution Process

For every feature in the PRD:
1. Walk through each category above
2. For each applicable edge case, document: the scenario, expected behavior, error message (if any)
3. Flag edge cases that need engineering discussion (no obvious "right" answer)
4. Add edge cases to the Test Agent (09) for automated testing

**The goal: zero surprises in production.** Every weird thing a user could do has a planned response.

---

## Running a Stress-Test Session (team exercise)

A stress test is a 90-minute facilitated session, not a solo read-through. Run it once per
significant feature, after the PRD draft exists and before engineering estimates are final.

```
WHO (5-7 people, no more):
  FACILITATOR   Runs the clock, keeps it generative, blocks solutioning debates
  PM / author   Owns the feature, answers "what is supposed to happen"
  ENGINEER      Knows where the concurrency, retries, and data model actually bite
  QA            Turns accepted cases into test cases (Agent 07)
  DESIGNER      Owns the empty, loading, error, and partial states
  SCRIBE        Fills one row per case in the log; never the facilitator

PREP (facilitator, 30 min before):
  ☐ Pick the 4-6 relevant categories from this file - never all of them in one session
  ☐ Open the log with columns: ID / Category / Scenario / Expected behavior / Message / Severity / Owner / Decision

AGENDA (90 min, timeboxed hard):
  0-10   Walk the happy path out loud, screen by screen. No critique yet.
  10-55  Category sweep. 6-8 min per category, round-robin so the loudest voice
         does not set the agenda. Rule: capture the case, do NOT design the fix.
  55-70  Silent solo pass. Everyone writes cases alone for 5 min, then reads them
         out. This is where the non-obvious ones surface (groups converge too early).
  70-85  Triage each case with the rubric below. Assign severity and owner live.
  85-90  Confirm the S1/S2 list, the decisions needed, and the follow-up date.

FACILITATION RULES:
  ✓ "What breaks?" not "how do we fix it?" - fixes are a separate meeting
  ✓ Every case ends as a testable sentence: GIVEN / WHEN / THEN
  ✓ "It can't happen" is not a resolution. Write it down as an assumption to verify

VARIANTS:
  PRE-MORTEM (30 min)   "It is 6 months post-launch and this feature failed. Why?"
  RED TEAM (60 min)     Half the room's only job is to abuse the feature (see Abuse section)
  BUG BASH (2 hours)    Post-build, hands on the real build, prize for the nastiest find

OUTPUT (within 24h, non-negotiable):
  1. Every case in the tracker, linked to the PRD section it amends
  2. PRD §7 (Edge Cases) updated with the accepted behaviors and messages
  3. S1/S2 cases converted into acceptance criteria before estimation
  4. Deferred cases logged with the accepted risk and a review trigger, not deleted
```

---

## Severity Triage Rubric (fix before launch vs after)

```
Score each case on three axes, then take the highest applicable band.

IMPACT       What happens to the user or the business if it occurs
  Catastrophic  Money lost or misdirected, data loss/corruption, PII exposure,
                safety harm, regulatory breach, permanent account lockout
  Serious       Core flow blocked with no workaround, silent wrong data shown,
                material trust damage, support cannot resolve it
  Moderate      Degraded flow with a workaround; confusing but recoverable
  Cosmetic      Visual or copy defect, no functional consequence

LIKELIHOOD   Honest expected frequency at launch volume
  Certain   Will occur in the first week (>1% of sessions)
  Likely    Will occur in the first quarter (0.1-1%)
  Rare      Needs an unusual combination (<0.1%)
  Exotic    Requires a determined attacker or a once-a-year condition

DETECTABILITY  Would you find out without a customer telling you?
  Silent      No alert, no log, no metric moves. Treat as one band MORE severe
  Detectable  A dashboard or alert catches it within an hour; Loud = it pages someone

BANDS:
| Band | Trigger                                              | Action                          |
|------|------------------------------------------------------|---------------------------------|
| S1   | Catastrophic impact at ANY likelihood, incl. exotic   | BLOCKS LAUNCH. Fix + test + alert|
| S2   | Serious + Likely/Certain, or Catastrophic-but-mitigated| BLOCKS LAUNCH unless a documented|
|      | with a manual control                                 | manual control exists on day one|
| S3   | Serious + Rare, or Moderate + Certain                 | Ship with a monitor and a named  |
|      |                                                       | owner; fix within 30 days        |
| S4   | Moderate + Rare/Exotic, or Cosmetic at any likelihood | Backlog with a review trigger    |

ALWAYS S1 REGARDLESS OF LIKELIHOOD (the "no exotic excuse" list):
  ☐ Money can be charged twice, refunded twice, or refunded above the original
  ☐ One user can read or modify another user's data (IDOR, tenant leak)
  ☐ Data can be silently lost or overwritten with no audit trail
  ☐ PII can leak to logs, URLs, analytics, or another customer
  ☐ Auth can be bypassed, or a revoked user retains access beyond the stated bound
  ☐ A stuck state exists with no operator recovery path
  ☐ The system can enter a state from which the user cannot exit without support

SHIP-WITH-MITIGATION IS A REAL ANSWER. Record it explicitly:
  CASE ___ deferred. Mitigation: [feature flag / rate cap / manual daily report /
  support macro / alert threshold]. Owner: ___. Review trigger: [volume X, date Y].
  Unmitigated deferrals are not decisions, they are surprises with a delay.

EXIT CHECKLIST BEFORE "SPECIFIED":
  ☐ Zero open S1. Every S2 has a fix merged or a documented manual control
  ☐ Every accepted case has an expected behavior AND the exact user-facing message
  ☐ Every S1/S2 has a corresponding automated test (Agent 07) and, where silent, an alert (Agent 08)
```
