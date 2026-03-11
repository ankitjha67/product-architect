# User Flows Framework

## Flow Documentation Standard

Every user flow must document THREE paths:
1. **Happy Path**: Everything works perfectly
2. **Unhappy Paths**: User makes mistakes, changes mind, encounters issues
3. **System Failure Paths**: Technical failures, timeouts, external service errors

## Flow Notation

```
[Screen/State] → (User Action) → [Next Screen/State]
                                → {System Process}
                                → <Decision Point>
                                   ├── YES → [Path A]
                                   └── NO  → [Path B]
                                → ⚠ [Error State] → [Recovery]
```

## Critical Flows to Document

### 1. Signup & Onboarding Flow

```
[App Launch]
→ <First time user?>
   ├── YES → [Welcome Screen]
   │         → (Tap "Get Started")
   │         → [Signup Screen]
   │           → (Enter email/phone)
   │           → {Validate format}
   │             → ⚠ Invalid format → [Inline error, stay on screen]
   │           → {Send OTP}
   │             → ⚠ Rate limited → [Show "try again in X seconds"]
   │             → ⚠ Delivery failed → [Show "didn't receive?" with resend + alternative]
   │           → [OTP Verification Screen]
   │             → (Enter OTP)
   │             → {Verify OTP}
   │               → ⚠ Wrong OTP → [Shake animation, 2 attempts remaining]
   │               → ⚠ OTP expired → [Show "expired" + auto-resend button]
   │               → ⚠ Max attempts → [Cooldown screen, contact support option]
   │             → {Create account}
   │           → [Profile Setup]
   │             → (Enter name)
   │             → (Optional: add photo, preferences)
   │             → (Tap "Continue" or "Skip")
   │           → [Permission Request: Notifications]
   │             → (Allow / Don't Allow)
   │           → [Home Screen — first time state with guidance]
   │
   └── NO  → <Session valid?>
              ├── YES → [Home Screen — personalized]
              └── NO  → [Login Screen]
```

### 2. Core Transaction Flow (E-commerce Example)

```
[Home / Browse]
→ (Tap product)
→ [Product Detail Page]
  → Content: Images (carousel), name, price, description, variants, reviews summary
  → (Select variant/size if applicable)
    → ⚠ Variant out of stock → [Show "Out of Stock" badge, disable "Add to Cart", show "Notify Me"]
  → (Tap "Add to Cart")
    → {Check: is user logged in?}
      → NO → [Login/Signup flow — then return to product page with item added]
    → {Check: is item in stock?}
      → NO → [Toast: "Sorry, this item just went out of stock"]
    → {Add to cart}
    → [Toast confirmation: "Added to cart" with "View Cart" action]
    → [Update cart badge count in nav]

[Cart Screen]
→ Content: Items with image/name/price/quantity, subtotal, taxes estimate
→ (Change quantity)
  → {Validate: max qty per item, stock availability}
  → {Recalculate totals}
  → ⚠ Item stock reduced below qty → [Show warning, adjust qty, explain]
→ (Remove item)
  → [Confirmation: "Remove from cart?" — not just instant delete]
  → {Recalculate totals}
→ (Tap "Proceed to Checkout")
  → {Validate: cart not empty, all items in stock, minimum order met}
  → ⚠ Cart empty → [Empty state with CTA to browse]
  → ⚠ Item unavailable → [Highlight item, suggest alternatives]
  → ⚠ Below minimum → [Show minimum order amount, difference needed]

[Checkout: Address]
→ <Has saved addresses?>
  ├── YES → [Show saved addresses, pre-select default]
  │         → (Select address or "Add new")
  └── NO  → [Address entry form]
            → Fields: Name, Phone, Line 1, Line 2, City, State, Pincode
            → {Pincode validation — auto-fill city/state}
            → ⚠ Unserviceable pincode → [Show "delivery not available" + alternatives]
            → (Save address)
→ (Tap "Continue")

[Checkout: Delivery]
→ Show delivery options with dates and costs
→ (Select delivery method)
→ (Tap "Continue")

[Checkout: Payment Summary]
→ Content: Order items, delivery info, pricing breakdown
→ (Apply promo code)
  → {Validate code}
  → ⚠ Invalid → [Show specific reason: expired/minimum not met/already used]
  → ✓ Valid → [Show discount, recalculate total]
→ Content: Final amount with itemized breakdown (subtotal + tax + delivery - discount = total)
→ (Select payment method)
  → UPI: Enter UPI ID or select app
  → Card: Enter details (in gateway iframe/redirect)
  → Net Banking: Select bank
  → COD: Confirm with verification (OTP if high value)
→ (Tap "Place Order — Pay ₹X,XXX")

[Payment Processing]
→ {Initiate payment with gateway}
→ [Loading state: "Processing your payment..." with animation]
→ {Wait for callback/redirect}
  → ⚠ Timeout (>3 min) → [Show "Payment is taking longer than expected" + check status button]
  → ⚠ User closes app mid-payment → {System checks payment status on next app open}

→ <Payment successful?>
  ├── YES → {Create order, reserve inventory, send confirmation}
  │         → [Order Confirmation Screen]
  │           → Content: Order ID, items, estimated delivery, receipt
  │           → Actions: "Track Order", "Share", "Continue Shopping"
  │           → {Send confirmation email/SMS/WhatsApp}
  │
  └── NO  → [Payment Failed Screen]
            → Content: Reason (if available from gateway), order preserved
            → Actions: "Try Again" (same method), "Try Different Method", "Cancel Order"
            → {Release inventory reservation after 10 min if no retry}
            → ⚠ Repeated failures → [Show support contact, suggest different method]
```

### 3. Payment Failure & Recovery Flow

```
[Payment Failed]
→ <Was money debited?>
  ├── UNKNOWN → [Show: "If money was debited, it will be auto-refunded in 5-7 business days"]
  │             → [Show: "Check your bank/UPI app" + "Verify Payment" button]
  │             → (Tap "Verify Payment")
  │               → {Poll gateway for status}
  │               → <Actually succeeded?>
  │                 ├── YES → [Order Confirmation]
  │                 └── NO  → [Confirm failure, offer retry]
  │
  ├── YES (rare — failed after capture) → {Auto-initiate refund}
  │   → [Show: "Your payment of ₹X,XXX will be refunded in 5-7 business days"]
  │   → [Show refund reference ID]
  │   → {Send refund confirmation email/SMS}
  │
  └── NO → [Show retry options]
           → (Tap "Try Again") → [Back to payment method selection]
           → (Tap "Cancel") → [Cart preserved, return to cart]
```

### 4. Account Recovery Flow

```
[Login Screen]
→ (Tap "Forgot Password" / "Can't login")
→ [Account Recovery Screen]
  → (Enter email or phone)
  → {Look up account}
    → ⚠ No account found → [Show "No account with this email/phone. Sign up?"]
  → {Send reset link/OTP}
  → [Verification Screen]
    → (Enter OTP or tap email link)
    → {Verify}
      → ⚠ Wrong code → [3 attempts, then cooldown]
    → [New Password Screen]
      → (Enter new password + confirm)
      → {Validate: length, complexity, not same as last 3 passwords}
      → {Update password, invalidate all sessions}
    → [Success Screen: "Password updated. Please login."]
    → {Send email notification: "Your password was changed"}
```

## Flow Documentation Checklist

For every documented flow, verify:
```
□ Happy path is complete (start to end, no gaps)
□ Every decision point has all branches documented
□ Every error has a specific user-facing message
□ Every error has a recovery action
□ Loading states are specified at every async point
□ Back/cancel behavior is defined (can user go back? what's preserved?)
□ Deep link behavior defined (what if user lands mid-flow from a notification?)
□ Session expiry handling (what if session expires during the flow?)
□ Multi-device behavior (started on mobile, continue on web?)
□ Accessibility flow (screen reader can navigate the entire flow)
```
