# Accessibility & Internationalization Framework

## Accessibility (A11y)

### WCAG 2.1 AA Requirements (minimum standard)

```
PERCEIVABLE:
□ Text alternatives for all non-text content (images, icons, charts)
□ Captions for video content, transcripts for audio
□ Content adaptable: Semantic HTML, proper heading hierarchy (h1 → h2 → h3, no skipping)
□ Color contrast: 4.5:1 for normal text, 3:1 for large text (18pt+ or 14pt+ bold)
□ Content NOT conveyed by color alone (add icons, text, patterns)
□ Text resizable to 200% without loss of content
□ Responsive to 320px viewport width (no horizontal scrolling)

OPERABLE:
□ All functionality available via keyboard (Tab, Enter, Space, Escape, Arrow keys)
□ Focus indicators visible on ALL interactive elements (not removed for aesthetics)
□ No keyboard traps (user can always Tab out of any component)
□ Skip navigation link ("Skip to main content")
□ Touch targets: minimum 44×44 CSS pixels (mobile)
□ No seizure-inducing flashing content (< 3 flashes/second)
□ Animations respect prefers-reduced-motion media query
□ Sufficient time: Extend, adjust, or turn off time limits

UNDERSTANDABLE:
□ Page language declared (<html lang="en">)
□ Form labels associated with inputs (<label for="id">)
□ Error messages: Specific, descriptive, suggesting correction
□ Consistent navigation across pages
□ Input purpose identified (autocomplete attributes on common fields)

ROBUST:
□ Valid HTML (no duplicate IDs, proper nesting)
□ ARIA attributes used correctly (aria-label, aria-describedby, role, aria-live)
□ Name, Role, Value available for all UI components
□ Status messages announced to screen readers (aria-live="polite" for non-urgent, "assertive" for urgent)
```

### Accessibility Testing Process

```
AUTOMATED (catch ~30% of issues):
- axe DevTools (browser extension)
- Lighthouse accessibility audit
- jest-axe / pa11y for CI/CD integration

MANUAL (catch ~70% of remaining issues):
□ Full keyboard navigation test: Can you complete every flow with ONLY keyboard?
□ Screen reader test: VoiceOver (Mac/iOS), TalkBack (Android), NVDA (Windows)
□ Color blindness simulation: Use browser tools or Stark plugin
□ Zoom test: Browser at 200%, does layout still work?
□ High contrast mode: Windows High Contrast, macOS Increase Contrast

USER TESTING:
- Include users with disabilities in beta testing
- Consult with accessibility specialists for complex interactions
```

### Accessibility by Component

```
BUTTONS:
- Descriptive text (not just "Click here" or icon-only)
- Icon-only buttons need aria-label
- Disabled buttons need aria-disabled="true" AND visual indication

FORMS:
- Every input has a visible <label>
- Required fields marked with text (not just * or color)
- Error messages associated with input via aria-describedby
- Group related fields with <fieldset> and <legend>
- Auto-complete attributes for common fields (name, email, address, cc-number)

MODALS/DIALOGS:
- Focus trapped inside modal when open
- Focus returns to trigger element when closed
- Escape key closes modal
- role="dialog", aria-modal="true", aria-labelledby for title

NAVIGATION:
- Landmark roles: <nav>, <main>, <header>, <footer>, <aside>
- Current page indicated with aria-current="page"
- Mobile: Bottom sheet navigation accessible, swipe gestures have button alternatives

IMAGES:
- Decorative images: alt="" (empty alt, not missing alt)
- Informative images: Descriptive alt text
- Complex images (charts, infographics): Detailed text alternative or data table

DYNAMIC CONTENT:
- Live regions for updates: aria-live="polite" or "assertive"
- Loading states announced to screen readers
- Toast notifications auto-announced, not reliant on visual only
```

## Internationalization (i18n) & Localization (l10n)

### Language Support

```
ARCHITECTURE:
- All user-facing strings in translation files (JSON/YAML), never hardcoded
- Key format: "module.component.element" (e.g., "cart.checkout.button_pay")
- Pluralization support (1 item vs. 2 items — rules vary by language)
- Gender support where needed (languages with gendered nouns)
- Context for translators ("Save" button vs. "Save" as noun — different translations)

LANGUAGE-SPECIFIC CHALLENGES:
German: Compound words can be very long (Geschwindigkeitsbegrenzung) — UI must handle
Japanese/Chinese/Korean (CJK): No word boundaries, different line-breaking rules
Arabic/Hebrew (RTL): Entire layout mirrors, numbers remain LTR
Hindi/Tamil/Bengali (Indic): Complex script rendering, conjuncts, line breaking
Thai: No spaces between words, different line-breaking algorithm
```

### Right-to-Left (RTL) Support

```
IF serving Arabic, Hebrew, Urdu, Farsi, or Persian users:

□ CSS logical properties: Use margin-inline-start instead of margin-left
□ Flexbox direction: dir="rtl" on <html> + CSS direction
□ Icon mirroring: Arrows, navigation icons should flip (except: play/pause, media controls, clocks)
□ Text alignment: start instead of left
□ Bidirectional text: Mix of RTL and LTR (Arabic text with English brand names)
□ Number direction: Numbers are always LTR, even in RTL context
□ Testing: Full manual test of every screen in RTL mode
```

### Currency, Date, Number Formatting

```
CURRENCY:
- India: ₹1,23,456.78 (Indian numbering system: lakhs, crores)
- US: $123,456.78
- EU: €123.456,78 (comma as decimal, period as thousands)
- Japan: ¥123,456 (no decimal places)
- Use Intl.NumberFormat() API, never manual formatting
- Store as integer (smallest unit: paise, cents) to avoid floating point

DATES:
- US: MM/DD/YYYY (March 11, 2026)
- Most of world: DD/MM/YYYY (11 March 2026)
- Japan: YYYY/MM/DD (2026年3月11日)
- Use Intl.DateTimeFormat() API
- Store as ISO 8601 (2026-03-11T00:00:00Z) with timezone

NUMBERS:
- India: 1,23,456 (Indian grouping)
- US/UK: 123,456
- Germany: 123.456
- Use Intl.NumberFormat() with locale

NAMES:
- Western: First name + Last name
- East Asian: Family name + Given name
- Indonesia/Brazil: Single name common
- Iceland: Patronymic system (not family names)
- Don't assume "First Name" + "Last Name" structure is universal
- Safest: "Full name" single field, or "Given name" + "Family name"

ADDRESSES:
- Formats vary wildly by country
- Japan: Prefecture → City → District → Block → Building (large to small)
- US: Street → City → State → ZIP (small to large)
- India: Flat → Building → Street → Area → City → State → Pincode
- Use Google Places Autocomplete or country-specific address forms
```

### Localization Workflow

```
1. EXTRACT: All strings in source code → translation management system (Crowdin, Lokalise, Phrase)
2. TRANSLATE: Professional translators (not Google Translate) for primary languages
3. REVIEW: Native speaker review of translations in context (screenshots)
4. TEST: Pseudo-localization test (expand strings by 30%, add accents) to find UI overflow
5. DEPLOY: Language detection: browser setting → user preference → geo-IP fallback
6. ITERATE: Collect feedback from local users, update translations quarterly
```
