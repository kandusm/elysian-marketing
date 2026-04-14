# Elysian Money — Marketing Site Brief
*This brief is for the `elysian-marketing` Next.js project deployed at `elysian.money` and `www.elysian.money`.*
*This is a separate project from the main `elysian` app. Do not modify the app project.*

---

## Goal

Replace the current waitlist page entirely with a full marketing site that:
- Communicates Elysian's positioning as a financial intelligence system
- Drives signups at `app.elysian.money/signup`
- Publishes all required legal and compliance documentation
- Matches the dark aesthetic of the app (`#080C14` background)
- Uses the Elysian crystal mark and Cinzel wordmark

At the end of this brief, `elysian.money` is a complete marketing site with all legal pages required for Plaid production approval.

---

## Font Setup

```bash
npm install @fontsource/cinzel
```

In root layout:
```typescript
import '@fontsource/cinzel/400.css'
import '@fontsource/cinzel/300.css'
```

---

## The ElysianLogo Component

Copy the `ElysianLogo` component from the app project into the marketing project at `src/components/ElysianLogo.tsx`. It uses inline SVG paths — no external asset dependency needed. The mark SVG is also available at `public/images/elysian-mark.svg` if needed for og:image generation.

---

## Design Tokens

Same tokens as the app:

```typescript
const tokens = {
  bg: {
    base:    '#080C14',
    surface: '#0F1622',
    raised:  '#162030',
  },
  text: {
    primary:   'rgba(224, 233, 248, 0.92)',
    secondary: 'rgba(224, 233, 248, 0.55)',
    tertiary:  'rgba(224, 233, 248, 0.28)',
  },
  border: {
    subtle:  'rgba(255, 255, 255, 0.06)',
    default: 'rgba(255, 255, 255, 0.10)',
  },
  accent: {
    primary: 'rgba(100, 130, 220, 0.80)',
    muted:   'rgba(100, 130, 220, 0.15)',
  },
}
```

---

## Site Structure

```
elysian.money/           → Landing page (home)
elysian.money/pricing    → Pricing page
elysian.money/privacy    → Privacy policy
elysian.money/terms      → Terms of service
elysian.money/security   → Security page
```

All paths redirect to `app.elysian.money` for authenticated app actions (sign in, sign up).

---

## Page 1: Landing Page (`/`)

### Layout — top to bottom

**Navigation bar (sticky)**
```
[ElysianLogo md]                    [Sign in] [Start free trial →]
```
- Dark background, subtle bottom border
- "Sign in" links to `https://app.elysian.money/login`
- "Start free trial" links to `https://app.elysian.money/signup` — styled as accent button

---

**Hero section**
- Full viewport height
- Center-aligned content
- Large ElysianLogo (lg size) at top
- Headline (large, Cinzel or system serif):

```
Your household's
financial intelligence.
```

- Subheadline (body size, secondary color):

```
A real double-entry ledger. AI that learns your financial patterns.
Privacy-aware household visibility. Built for the way families actually work.
```

- Two CTAs side by side:
  - Primary: "Start free trial" → `https://app.elysian.money/signup`
  - Secondary: "Sign in" → `https://app.elysian.money/login`

- Subtle disclaimer below CTAs:
  ```
  Not financial advice. 14-day free trial on paid plans. Card required.
  ```

---

**Problem statement section**
Dark surface card, max-width 680px, centered:

```
Most finance apps show you where your money went.

Elysian shows your household where it's going — and gets smarter every month.
```

---

**Three core differentiators**
Three columns, each with a small geometric accent mark, a short title, and 2-3 sentences:

**Real Accounting**
Most apps track transactions. Elysian records them as balanced journal entries in a double-entry ledger — the same accounting foundation used by every serious business. Your household deserves the same rigor.

**Privacy-Aware Household**
Share what you want, keep private what you don't. Every account has granular visibility controls — private, aggregated, or fully shared with household members. Privacy is enforced at the database layer, not just the UI.

**AI That Knows Your Numbers**
The AI CFO has access to your actual financial data — not generic advice. Ask it when you can retire, how long your savings would last if you lost your income, or what your burn rate means for your goals.

---

**How it works — three steps**
Numbered, horizontal on desktop, stacked on mobile:

```
1. Connect your accounts
   Link your bank accounts via Plaid or import statements manually.
   Transactions are normalized and ready for review in minutes.

2. Confirm and categorize
   Review imported transactions, confirm them into your ledger,
   and watch your net worth update in real time.

3. Ask your CFO
   Your AI CFO has access to your complete financial picture.
   Ask forward-looking questions and get answers grounded in your real data.
```

---

**Pricing preview**
Brief tier overview — not the full pricing page, just enough to set expectations:

```
Plans from $1/month.
14-day free trial on Solo, Household, and Power plans.
```

Link: "See full pricing →" → `/pricing`

---

**Footer**
```
[ElysianLogo sm]

elysian.money

Privacy Policy    Terms of Service    Security

© 2026 CommVergent Automation LLC · Pflugerville, TX
Not financial advice.
```

---

## Page 2: Pricing (`/pricing`)

### Navigation
Same sticky nav as landing page.

### Monthly/Annual toggle
Toggle at top — annual shows ~15% savings badge.

### Four tier cards

Display in a 2×2 grid on desktop, stacked on mobile.

**Starter — $1/month or $10/year**
- 2 bank connections
- Manual entry unlimited
- CSV/OFX import
- Basic net worth dashboard
- No AI features
- No household

**Solo — $8/month or $84/year**
- 5 bank connections
- Full transaction history
- PDF extraction (AI)
- AI classification
- Email alerts
- No household

**Household — $20/month or $204/year** ← highlight as "Most popular"
- 15 bank connections
- Up to 6 household members
- Full visibility controls
- PDF extraction (AI)
- AI-powered household recommendations
- Advanced categorization

**Power — $40/month or $408/year**
- Unlimited connections
- Unlimited household members
- Everything in Household
- Monte Carlo simulation
- AI CFO chat interface
- Full data export

### CTA per card
"Start free trial" → `https://app.elysian.money/signup`
(Starter shows "Get started" — no trial)

### Note below cards
```
All plans include a 14-day free trial (card required).
Cancel anytime. No contracts.
Prices in USD, billed as selected.
```

---

## Page 3: Privacy Policy (`/privacy`)

Render the full privacy policy text. The content is provided below — implement as a clean, readable page with:
- Max-width 680px content area
- Left-aligned text
- Clear heading hierarchy
- Last updated date at top
- Same dark background as the rest of the site

**Content:** Use the complete text from `elysian-privacy-policy.md` (already written). Insert today's date as both the effective date and last updated date.

The page must be publicly accessible without authentication and must be crawlable by search engines (no noindex).

---

## Page 4: Terms of Service (`/terms`)

Same layout as the privacy policy page. 

**Content:** Use the complete text from `elysian-terms-of-service.md` (already written). Insert today's date as both the effective date and last updated date.

---

## Page 5: Security (`/security`)

Same layout as the privacy policy page.

**Content:** Use the complete text from `commvergent-security-page.md` (already written).

Note: The security page describes CommVergent Automation's security practices and references all platforms including Elysian Money. This is the correct scope — it's a company-level security page, not app-specific.

---

## Metadata and SEO

Add to each page's metadata:

```typescript
// Landing
export const metadata = {
  title: 'Elysian Money — Household Financial Intelligence',
  description: 'A real double-entry ledger, privacy-aware household visibility, and an AI CFO that knows your actual numbers. Built for families who take their finances seriously.',
  openGraph: {
    title: 'Elysian Money',
    description: 'Household financial intelligence. Built on a real ledger.',
    url: 'https://elysian.money',
    images: [{ url: '/images/elysian-mark.svg' }],
  },
}

// Privacy
export const metadata = {
  title: 'Privacy Policy — Elysian Money',
  description: 'How Elysian Money collects, uses, and protects your personal and financial data.',
}

// Terms
export const metadata = {
  title: 'Terms of Service — Elysian Money',
  description: 'Terms governing your use of Elysian Money.',
}

// Security
export const metadata = {
  title: 'Security — CommVergent Automation',
  description: 'Security practices and controls for CommVergent Automation platforms.',
}
```

---

## Redirects

Keep the existing redirect behavior in `next.config.ts` — non-root paths on `elysian.money` that aren't handled by the marketing site should redirect to `app.elysian.money`.

Update the redirect to exclude the new marketing paths:

```typescript
async redirects() {
  return [
    {
      source: '/:path((?!pricing|privacy|terms|security|_next|images|favicon).*)',
      destination: 'https://app.elysian.money/:path*',
      permanent: false,
    },
  ]
}
```

---

## Waitlist

Remove the waitlist form and `marketing.waitlist` table reference from the landing page. The current waitlist data in Supabase can remain — just remove the form from the new landing page. Signups now go directly to the app.

---

## Completion Criteria

- [ ] `elysian.money` shows the new dark landing page
- [ ] `www.elysian.money` shows the same (both domains point to this project)
- [ ] Navigation links to `app.elysian.money` for sign in and sign up
- [ ] `/pricing` page renders all four tiers with monthly/annual toggle
- [ ] `/privacy` page renders the full privacy policy text
- [ ] `/terms` page renders the full terms of service text
- [ ] `/security` page renders the security documentation
- [ ] All legal pages are publicly accessible without authentication
- [ ] All legal pages have correct metadata titles
- [ ] Footer includes links to all three legal pages
- [ ] ElysianLogo renders correctly with Cinzel font
- [ ] Dark aesthetic consistent throughout (`#080C14` background)
- [ ] TypeScript compiles with zero errors
- [ ] No console errors on any page

---

## Policy Content Files

The following documents are already written and available in the project root.
Claude Code should use their content verbatim for the legal pages:

- `elysian-privacy-policy.md` → `/privacy` page
- `elysian-terms-of-service.md` → `/terms` page
- `commvergent-security-page.md` → `/security` page

Insert `April 14, 2026` as the effective date and last updated date in both the privacy policy and terms of service where `[INSERT DATE BEFORE PUBLISHING]` appears.

---

*End of Marketing Site Brief.*
