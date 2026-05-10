# Top Cut Landscaping — Marketing Site

The editorial marketing site for **Top Cut Landscaping, LLC** (Henrico, VA).

Built with Next.js 14 (App Router) + Tailwind CSS + Framer Motion + Radix
UI. All copy, images, and data are seeded; everything is editable from a few
typed content files.

> **The pitch:** "A small Henrico crew, doing the work right, since 2008."

---

## Stack

| Concern         | Tool                                                 |
| --------------- | ---------------------------------------------------- |
| Framework       | Next.js 14 (App Router, TypeScript, `/src` dir)      |
| Styling         | Tailwind CSS 3.4 + `tailwind-merge` + `cva`          |
| Motion          | Framer Motion 12 (eases match brand motion language) |
| UI primitives   | Radix UI (Accordion, Label, Slot)                    |
| Icons           | `lucide-react`                                       |
| Forms           | Native `useState` + Zod (server-side validation)     |
| Email           | Resend (`/api/lead` route)                           |
| Image opt.      | `next/image` with AVIF + WebP                        |

---

## Get started

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # production build (49 routes, fully static)
npm run lint
```

### Environment variables (optional)

Create `.env.local`:

```env
# Sends leads to Carson via Resend (skipped silently if missing)
RESEND_API_KEY=
LEAD_NOTIFY_EMAIL=carson@topcutlandscaping804.com

# Pulls @topcutlandscaping804 posts in the home IG strip
INSTAGRAM_ACCESS_TOKEN=

# Optional analytics
NEXT_PUBLIC_GA_ID=

# Override for sitemap / canonical URLs (default: topcutlandscaping.com)
NEXT_PUBLIC_SITE_URL=https://topcutlandscaping.com
```

Without any env vars, every form submits successfully (logs to server
console) and the IG strip falls back to a curated set of generated photos.

---

## Brand tokens

Defined as CSS variables in `src/app/globals.css` and exposed to Tailwind in
`tailwind.config.ts`:

| Token                | Color     | Use                                    |
| -------------------- | --------- | -------------------------------------- |
| `--tc-deep-navy`     | `#0E2742` | logo ring, headers                     |
| `--tc-fresh-cut`     | `#6BBE3C` | primary green — CTAs, accents          |
| `--tc-deep-forest`   | `#1F4D2A` | secondary green — depth, hover         |
| `--tc-warm-cream`    | `#F5F0E6` | page background, cards                 |
| `--tc-fog`           | `#E8E4DA` | dividers, subtle fills                 |
| `--tc-stone`         | `#8A8475` | body subtext, captions                 |
| `--tc-soil`          | `#3A2A1F` | serif display text accent              |
| `--tc-charcoal`      | `#14161A` | near-black for body copy               |
| `--tc-pure-white`    | `#FFFFFF` | inset cards                            |

**Typefaces** (loaded via `next/font/google` in `src/app/layout.tsx`):

- **Display** — Fraunces (variable serif, optical size axis) — headlines.
- **Body / UI** — Inter — paragraphs, nav, forms, buttons.
- **Numerals / labels** — JetBrains Mono — small caps, eyebrows, stats.
- **Script accent** — Caveat — used very sparingly.

---

## Repo layout

```
src/
  app/
    (marketing)/
      layout.tsx                # nav + footer + sticky quote bar
      page.tsx                  # / — Home
      services/
        page.tsx                # /services
        [slug]/page.tsx         # /services/<slug>
      portfolio/
        page.tsx                # /portfolio (filterable)
        [slug]/page.tsx         # /portfolio/<slug>
      about/page.tsx
      reviews/page.tsx
      service-areas/
        page.tsx
        [slug]/page.tsx
      journal/
        page.tsx
        [slug]/page.tsx
      contact/page.tsx
      quote/page.tsx
      privacy/page.tsx
    api/
      lead/route.ts             # POST quote/contact submissions
      instagram/route.ts        # cached IG feed JSON
    layout.tsx                  # root, fonts, JSON-LD
    sitemap.ts                  # /sitemap.xml
    robots.ts                   # /robots.txt
    globals.css                 # tokens + base styles
  components/
    ui/                         # button, input, textarea, label, badge, accordion
    sections/                   # Navbar, Footer, FounderQuote, CTABand, …
      home/                     # home-only sections (HomeHero, TheCut, …)
    media/                      # BeforeAfterSlider, InstagramGrid, ReviewWall, PortfolioCard
  content/                      # ALL editable copy + data lives here
    services.ts                 # 8 services
    portfolio.ts                # 8 case studies
    reviews.ts                  # 30 reviews
    service-areas.ts            # 9 neighborhoods
    journal.ts                  # 6 posts (typed content blocks)
  lib/
    utils.ts                    # cn() helper
    seo.ts                      # buildMetadata() + LocalBusiness JSON-LD
public/
  logo.png                      # round badge logo
  og/og-default.png             # social share image
  images/                       # all photography (kebab-case)
```

---

## Editing content

The whole site is data-driven. Everything below is plain TypeScript — no
CMS, no MDX bundler.

### Add a service

Open `src/content/services.ts` and add an object to the `services` array.
Required fields: `slug`, `name`, `short`, `tagline`, `paragraphs`, `image`,
`imageAlt`, `included`, `pricing`, `cadence`, `founderNote`, `faqs`. The
service auto-appears on:

- the home page asymmetric grid
- the `/services` long-form index (with sticky side-rail)
- a generated `/services/<slug>` page
- the footer nav
- the quote calculator service options
- the `LocalBusiness` JSON-LD `areaServed`

### Add a portfolio piece

`src/content/portfolio.ts` — push a new `CaseStudy` to `caseStudies`. Drop
the hero image (and any before/after pair) in `public/images/`. The piece
auto-appears in the filterable grid, the home carousel, and "related"
suggestions across the site.

### Add a review

`src/content/reviews.ts` — push a `Review` object. Source must be one of
`Google`, `Nextdoor`, or `LawnStarter`. Aggregate stats update automatically.

### Add a journal post

`src/content/journal.ts` — push a `Post` with a typed `body: Block[]`.
Block types are `p`, `h2`, `ul`, `ol`, and `quote`. The first paragraph
gets a magazine drop-cap automatically. The post is then linked from
`/journal`, the related-post strip, and any matching service detail page.

### Swap an image

Drop the new file in `public/images/<kebab-name>.jpg` (the existing path is
referenced from the content file). Re-run `npm run dev`. `next/image` will
generate the AVIF/WebP variants on the fly.

---

## How key features work

### Quote calculator

`src/components/sections/QuoteCalculator.tsx` is a 6-step wizard with a
live progress bar. The pricing logic (transparent, in-source) lives at the
top of that file. On submit it POSTs to `/api/lead`, which validates with
Zod and dispatches a Resend email + auto-reply when configured.

The wizard renders in two variants:

- `variant="page"` — full standalone (`/quote`)
- `variant="embed"` — compact home preview

### Before/after slider

`src/components/media/BeforeAfterSlider.tsx` — pure React + CSS clip-path.
Pointer drag, touch drag, and arrow-key support. Caption mono-cap below.

### Instagram strip

`src/components/media/InstagramGrid.tsx` is a server component that fetches
@topcutlandscaping804 via the Instagram Basic Display API (revalidate 1
hour). When `INSTAGRAM_ACCESS_TOKEN` is missing it gracefully falls back
to a curated set of in-house photos — the design never breaks.

### Sticky quote bar

Appears after the hero scrolls out of view. Mobile-only on purpose; the top
nav already has the same CTAs on desktop.

### Motion

All entrances use the brand ease `cubic-bezier(0.22, 1, 0.36, 1)` and a
700ms duration. The shared `<Reveal>` component handles 16px Y-offset +
opacity, staggered manually via `delay` props (~80ms between siblings).
`prefers-reduced-motion` is respected by `framer-motion` automatically.

### SEO

- `src/lib/seo.ts → buildMetadata()` — every page exports `metadata` from
  this helper, ensuring consistent OG + Twitter cards.
- `LocalBusiness` JSON-LD lives in `src/app/layout.tsx` (root).
- `BlogPosting` JSON-LD on each journal post.
- Sitemap and robots are generated at build time from the content layer.

---

## Deploy

Vercel works out of the box.

```bash
git push origin main
```

After the first deploy, set the env vars above (`RESEND_API_KEY`, etc.)
in the Vercel dashboard, then re-deploy.

DNS — when `topcutlandscaping.com` points to Vercel, add SPF + DKIM
records for Resend (the Resend dashboard generates these).

---

## Performance + accessibility

- Brand-colored focus ring on every interactive element.
- Skip-to-content link on every page.
- Color contrast 4.5:1+ for body text (navy-on-cream, charcoal-on-cream).
- Semantic HTML: one `<h1>` per page; `<section aria-labelledby>` blocks.
- Alt text on every image, descriptive (not "image of lawn").
- `next/image` everywhere with width/height/sizes set, AVIF + WebP variants.
- Lighthouse target: **95+** on Performance / SEO / Accessibility / Best
  Practices on Home and `/services/mowing`.

---

## Carson's checklist (one-time setup)

1. Add the real domain in Vercel and verify SPF/DKIM with Resend.
2. Set `RESEND_API_KEY` and confirm a test lead lands in the inbox.
3. Connect the Instagram Basic Display app and paste the long-lived token
   into `INSTAGRAM_ACCESS_TOKEN`.
4. Add a Google Analytics 4 property and paste its ID into
   `NEXT_PUBLIC_GA_ID` (analytics wiring deliberately lightweight).

---

## Pricing logic — at a glance

Lives in `src/components/sections/QuoteCalculator.tsx` so it's easy to
update. Mowing per-visit ranges:

| Lot size       | Per-visit range  |
| -------------- | ---------------- |
| Under ¼ acre   | $40 – $55        |
| ¼ – ½ acre     | $55 – $80        |
| ½ – 1 acre     | $80 – $140       |
| 1+ acre        | $140 – $240+     |

Multipliers: weekly = base, bi-weekly = +10%, monthly = +25%.

Mulch installed: $90/yd. Cleanups: $250–$600. Aeration + overseed:
$180–$400. Installs / drainage: custom on-walk.

---

## License

© Top Cut Landscaping, LLC. All rights reserved.
