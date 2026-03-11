# Stress Test Framework

## Purpose
This framework contains edge cases and failure scenarios that even experienced product managers
and engineers miss. Apply it to EVERY feature before considering it "specified."

## Universal Edge Cases (Apply to ALL Products)

### Time & Timezone
```
□ User in UTC+5:30 (India) creates order at 23:50 — does the "date" of the order reflect their timezone or server time?
□ User in UTC-8 (US Pacific) and user in UTC+9 (Japan) collaborate — whose timezone wins for deadlines?
□ Daylight Saving Time transition — a scheduled event at 2:30 AM when clocks skip from 2:00 to 3:00
□ User changes timezone on their device mid-session — what happens to time-dependent data?
□ "Today's deals" — today according to whom? Server? User? UTC?
□ "Expires in 24 hours" — from when exactly? Created? Viewed? UTC midnight?
□ Leap year: Feb 29 — scheduled events, birthday fields, age calculations
□ Leap second (rare but real): 23:59:60 — does your timestamp parser handle it?
□ Historical date: User enters birthdate before 1970 (Unix epoch) — does it store correctly?
□ Future date: User accidentally enters date in 2030 — is there reasonable validation?
```

### Identity & Authentication
```
□ User signs up with email, later tries to sign up with same email via Google OAuth — account merge or conflict?
□ User changes their email, then tries to login with old email — what message?
□ User has caps lock on while typing password — do you warn them?
□ User's name contains special characters: O'Brien, María, 松田太郎, Müller, 김민수
□ User's name is a single character — does validation reject it? (Some cultures have single-name naming)
□ User with very long name (Wolfeschlegelsteinhausenbergerdorff) — does UI truncate gracefully?
□ User has no last name (some Indonesian names) — is "Last Name" required?
□ User email has + addressing: user+test@gmail.com — does it work? Is it treated as separate from user@gmail.com?
□ User tries to register with a disposable email (mailinator, guerrillamail) — do you allow it?
□ Shared device: User A logs out, User B logs in — is User A's data fully purged from local storage?
□ User's phone number changes (new SIM) — how do they update it and still maintain account security?
□ User's identity documents expire after KYC — how do you handle re-verification?
```

### Data & Input
```
□ Copy-paste into input fields introduces hidden characters (zero-width spaces, RTL marks)
□ User pastes 50,000 characters into a text field meant for 500 — does it crash or validate gracefully?
□ User pastes an image into a text field
□ User enters ₹10,00,000 (Indian numbering) vs. ₹1,000,000 (Western numbering) — which is accepted?
□ Currency: 0.1 + 0.2 ≠ 0.3 in floating point — are prices stored as integers (paise, cents)?
□ User enters price as "1,500" vs "1500" vs "₹1500" vs "1500.00" — parsing edge cases
□ Negative numbers in quantity fields — can a user order -1 items?
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
□ User starts an action on WiFi, walks out of range, finishes on 3G — does the request complete?
□ Request takes 30 seconds — does the user see a timeout? Can they cancel?
□ User submits a form, network is slow, user clicks submit again — double submission?
□ Airplane mode mid-upload — is the upload resumable or does it restart from scratch?
□ User is on a VPN that changes their apparent country — does geo-restriction apply?
□ User is behind a corporate proxy that blocks WebSocket — does your real-time feature degrade?
□ CDN cache serves stale content after deployment — cache invalidation strategy?
□ DNS propagation delay — user on old DNS sees old version, user on new DNS sees new version
□ Extremely high latency (satellite internet, 500ms+ RTT) — does the UX still work?
□ User has data saver mode enabled — are images appropriately compressed?
```

### Concurrency & Race Conditions
```
□ Two users buy the last item in stock simultaneously — who gets it? What does the other see?
□ User opens cart in two tabs, adds item in tab A, tab B still shows old cart — consistency?
□ Admin changes product price while user is on checkout page — which price is charged?
□ User starts a payment, browser crashes, payment succeeds at gateway but app doesn't know
□ Two support agents assign the same ticket to themselves simultaneously
□ User edits their profile while an admin also edits it — last write wins or conflict resolution?
□ Batch process running while user makes changes to the same data
□ Scheduled job fires twice due to infrastructure hiccup — is the job idempotent?
□ WebSocket reconnection during a real-time update — does the user miss messages?
□ User deletes their account while a background job is processing their data
```

### Financial & Payment
```
□ User pays ₹0.01 — does the payment gateway accept it? (Minimum transaction amount)
□ Order total is ₹0 (100% coupon) — does checkout skip payment but still create order?
□ User applies two coupons (if allowed) — is the discount calculation correct? (Stacking: absolute + percentage)
□ Coupon makes order total negative — is it handled? (Refund the difference? Cap at ₹0?)
□ User changes cart after applying coupon — does coupon still apply? Is minimum spend still met?
□ Price changes between "Add to Cart" and "Checkout" — which price is used? Is user notified?
□ Tax calculation for items shipped across state/country borders — different tax rates per destination
□ Split payment across two methods — first succeeds, second fails — atomicity? Rollback first?
□ Recurring subscription: Card expires between payments — dunning sequence starts, but user doesn't realize
□ Refund to a closed bank account / expired card — where does the money go?
□ Currency conversion rate changes between order placement and settlement
□ Extremely large order (₹99,99,999) — does the UI, API, and DB handle it?
□ Chargeback/dispute from user's bank — how is it detected, handled, contested?
```

### Platform & Device
```
□ User on a 6-year-old Android phone with 1GB RAM — does the app function?
□ User with Android Go edition — limited app size restrictions
□ User with 16GB free storage tries to download 20GB of offline content
□ iOS: App killed by OS for memory → user returns → state is lost if not persisted
□ Android: System destroys Activity during configuration change (rotation) → data loss if not saved
□ User has root/jailbreak — does your app security depend on device integrity?
□ User cloned the app (Parallel Space, Dual Messenger) — are accounts isolated?
□ Screen readers: Does every interactive element have an accessible name?
□ Keyboard navigation: Can a user complete every flow without a mouse?
□ User with color blindness — is critical information conveyed only through color?
□ User zoomed browser to 200% — does the layout still function?
□ Print CSS: What happens if a user tries to print a page?
□ User with adblocker — does the site still function? Are analytics tracking ethically?
```

### Scale & Volume
```
□ User with 10,000 items in cart (bot? bulk buyer?) — does the cart page load?
□ Product with 100,000 reviews — pagination, infinite scroll, or load on demand?
□ User searches for extremely common term that returns 1M results — response time?
□ Flash sale: 100,000 users hit "Buy Now" at exactly 12:00:00 — database handles it?
□ Notification system: 5M users need to be notified simultaneously — batch or queue?
□ Image upload: 1,000 users uploading 10MB images simultaneously — storage and processing pipeline
□ Audit log: After 2 years, the audit log table has 10 billion rows — query performance?
□ User has been on the platform for 5 years — does their data volume cause profile page slowdowns?
□ A single seller has 50,000 products — does their product management page work?
□ An admin exports all user data — 500MB CSV download — does it timeout or stream?
```

### Business Logic
```
□ User is in two conflicting segments (new user promo + loyalty discount) — which applies?
□ Referral: User refers themselves (different email, same device) — is it detectable?
□ User creates account, gets welcome offer, deletes account, re-creates — gets offer again?
□ Product has a minimum order quantity but is also the last in stock — which rule wins?
□ Scheduled price change at midnight — cache shows old price, API returns new price — inconsistency
□ User in waitlist is notified "item back in stock" — but by the time they click, it's sold out again
□ Flash sale: User adds item during sale, checks out after sale ends — sale price or regular price?
□ Loyalty points expiry: User has 10,000 points, 5,000 expire tomorrow — do you notify? When?
□ A/B test: User in variant A on mobile, variant B on web — consistent or independent?
□ Feature flag: User had feature, flag turns off, user had data in that feature — data access?
```

## Stress Test Execution Process

For every feature in the PRD:
1. Walk through each category above
2. For each applicable edge case, document: the scenario, expected behavior, error message (if any)
3. Flag edge cases that need engineering discussion (no obvious "right" answer)
4. Add edge cases to the Test Agent (09) for automated testing

**The goal: zero surprises in production.** Every weird thing a user could do has a planned response.
