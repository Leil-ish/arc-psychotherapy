# Constructive Therapy of Round Rock (Marketing Site)

Production-ready Next.js App Router marketing website for a boutique private-pay psychotherapy practice in Downtown Round Rock, TX.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Server Components by default
- Cloudflare Workers deploy via OpenNext adapter

## Requirements

- Node.js 20 LTS recommended (Node 22 can work, but 20 is safer for toolchain compatibility)
- npm 10+

## Quick Start

1. Install dependencies:

```bash
npm install
```

2. Run local development:

```bash
npm run dev
```

3. Typecheck + build:

```bash
npm run typecheck
npm run build
```

## Core Content + Settings

Edit centralized copy and constants here:

- `/Users/leilaanderson/Documents/arc-psychotherapy/lib/content.ts`

Key fields:

- `siteConfig.brand`
- `siteConfig.legalEntityNote` (replace with legal entity details)
- `siteConfig.bookingUrl` (Schedule button target)
- `siteConfig.contactEndpoint`
- `siteConfig.phone`, `siteConfig.email`, `siteConfig.addressLine1`
- `pricing.standardSession`
- `pricing.constructiveTrack.arc6`
- `pricing.constructiveTrack.arc10`

## SEO + Schema

- Page metadata helper: `/Users/leilaanderson/Documents/arc-psychotherapy/lib/seo.ts`
- Site-level metadata + JSON-LD insertion: `/Users/leilaanderson/Documents/arc-psychotherapy/app/layout.tsx`
- Sitemap: `/Users/leilaanderson/Documents/arc-psychotherapy/app/sitemap.ts`
- Robots: `/Users/leilaanderson/Documents/arc-psychotherapy/app/robots.ts`

JSON-LD type: `ProfessionalService` with Round Rock, TX placeholder address.

## Contact Form (No PHI)

- UI: `/Users/leilaanderson/Documents/arc-psychotherapy/components/contact-form.tsx`
- Endpoint (mock): `/Users/leilaanderson/Documents/arc-psychotherapy/app/api/contact/route.ts`

Form includes required warning:

- “Please do not include sensitive clinical details (PHI) in this form.”
- Emergency guidance for `988` and `911`.

Current API route is a placeholder and returns success for valid fields. Integrate secure email/CRM workflow before launch.

## Design System

- Global tokens + utilities: `/Users/leilaanderson/Documents/arc-psychotherapy/app/globals.css`
- Tailwind theme: `/Users/leilaanderson/Documents/arc-psychotherapy/tailwind.config.ts`
- Reusable UI components in `/Users/leilaanderson/Documents/arc-psychotherapy/components`

Palette is warm neutral with muted green/clay accents and no toy-primary visual language.

## Pages

- `/` Home
- `/about`
- `/services`
- `/constructive`
- `/fees`
- `/faq`
- `/contact`
- `/resources`
- `/privacy`
- `/terms`
- `/good-faith-estimate`
- `/accessibility`

## Optional Analytics (Off by default)

No tracking pixels are enabled by default.

To add analytics later:

1. Open `/Users/leilaanderson/Documents/arc-psychotherapy/app/layout.tsx`
2. Add provider script where the comment indicates
3. Update privacy disclosures and consent flow before enabling

## Accessibility + Performance Notes

- Mobile-first layout
- Keyboard-visible focus states (`.focus-ring`)
- Skip link to main content
- Semantic headings and landmarks
- Optimized local placeholder SVG imagery

## Cloudflare Deploy (Full-stack Next.js)

This app uses a server route (`/api/contact`), so deploy as full-stack Next on Cloudflare Workers.

1. Authenticate Wrangler locally:

```bash
npx wrangler login
```

2. (Optional) Generate Cloudflare env types:

```bash
npm run cf-typegen
```

3. Preview Cloudflare build locally:

```bash
npm run preview
```

4. Deploy:

```bash
npm run deploy
```

5. In Cloudflare dashboard, set your custom domain and HTTPS.

Important files:

- `/Users/leilaanderson/Documents/arc-psychotherapy/open-next.config.ts`
- `/Users/leilaanderson/Documents/arc-psychotherapy/wrangler.toml`
- `/Users/leilaanderson/Documents/arc-psychotherapy/next.config.mjs`

After deploy, update `siteConfig.siteUrl` in `/Users/leilaanderson/Documents/arc-psychotherapy/lib/content.ts` to your production domain.

## Final Pre-Launch Checklist

- Replace placeholder legal language on `/privacy`, `/terms`, `/good-faith-estimate`
- Replace placeholder testimonials with compliant, consented text
- Insert final legal entity name
- Verify phone/email/address
- Connect secure contact workflow
- Review copy with clinical/legal compliance
