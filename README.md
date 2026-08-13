# BlueLite Concepts

A Next.js 14 (App Router) marketing site for BlueLite Concepts, a dry cleaning business.

## Design concept

Everything is built around the physical object at the center of a dry cleaner's
world: the claim ticket. Service listings, pricing, and testimonials all use a
"ticket stub" card (perforated edges, punch-hole notches, monospace ticket
numbers) instead of generic cards. The four-stage process section (pickup →
clean → press → deliver) is a real operational sequence, so it's the one place
numbered steps are used.

- **Colors**: deep navy ink, blueprint blue, pale steam-cyan ("lite"), warm
  linen paper — defined as Tailwind tokens in `tailwind.config.ts`.
- **Type**: Space Grotesk (display), Inter (body), JetBrains Mono (ticket
  numbers / prices), self-hosted via `@fontsource` so no external font
  requests are made at build or run time.

## Pages

- `/` — Home: hero, service ticket strip, process, pricing preview, testimonial, CTA
- `/services` — full service catalogue by ticket series
- `/pricing` — per-item rate card + subscription plans
- `/about` — brand story and values
- `/contact` — pickup request form + hours/location

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build for production

```bash
npm run build
npm start
```

## Customizing

- **Copy & prices**: edit the arrays at the top of each file in `app/*/page.tsx`.
- **Colors/fonts**: `tailwind.config.ts` and `app/globals.css`.
- **Contact form**: `components/ContactForm.tsx` currently just shows a
  confirmation state on submit — wire the `handleSubmit` function up to your
  email service, CRM, or API route to actually receive requests.
- **Logo mark**: the small dot-in-square icon in `Header.tsx` / `Footer.tsx`
  is placeholder — swap in a real logo when you have one.
