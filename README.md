# Bluelite Concept LTD

Next.js 14 (App Router) website for Bluelite Concept LTD — a Nigerian
recycled PET materials supplier and exporter.

## Design concept

- **Palette**: navy `#0B2545` (primary, ~50%), white (~35%), emerald
  `#10A05A` (~10%, sustainability accent), light grey `#F2F4F6` (~5%) —
  matching the brand's specified colour split.
- **Type**: Manrope (display), Inter (body), JetBrains Mono (batch codes,
  spec numbers) — self-hosted via `@fontsource`, no external font requests.
- **Signature element**: the "spec tag" — a die-cut-corner card with a
  monospace batch code, used for material grades, process steps and quality
  checkpoints. It's built to read like an industrial shipping/material tag
  rather than a generic marketing card.
- **No stock photography of "real" operations.** Since actual site/product
  photos weren't available, product and process content is illustrated with
  icons and typography instead of fabricated stock images. Swap in real
  photos as they become available — see "Adding real photos" below.

## Pages

- `/` — Home
- `/about` — About Us (vision, mission, why Nigeria, supplier network, sustainability commitment)
- `/services` — PET Bottles, PET Flakes, PET Shredding and PET Washing, all
  on one scrollable page with a sticky jump-to sub-nav (`#pet-bottles`,
  `#pet-flakes`, `#pet-shredding`, `#pet-washing`)
- `/our-process` — 9-step process + Quality Assurance
- `/export-logistics` — FOB/CIF terms, ports, export support, global markets
- `/quote` — Request a Quote (full RFQ form)
- `/contact` — Contact Us (company info + general enquiry form)

The old separate `/pet-bottles`, `/pet-flakes`, `/pet-shredding` and
`/pet-washing` routes redirect (301) to the matching `/services#...` anchor,
so any old links or bookmarks still land in the right place.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Setting up email (RFQ + contact forms)

Both forms send email via [Resend](https://resend.com).

1. Create a free Resend account (3,000 emails/month free).
2. Get an API key: dashboard → API Keys → Create API Key.
3. Copy the env template: `cp .env.local.example .env.local`
4. Fill in `.env.local`:
   - `RESEND_API_KEY` — your key.
   - `QUOTE_TO_EMAIL` / `CONTACT_TO_EMAIL` — already defaulted to
     `gabriel@blueliteconceptltd.com` and `info@blueliteconceptltd.com` per
     your content brief. Change if needed.
   - `QUOTE_CC_EMAIL` — optional, defaults to the MD's address so RFQs reach
     both Sales and the MD.
   - `QUOTE_FROM_EMAIL` / `CONTACT_FROM_EMAIL` — leave blank at first. Without
     these, mail sends from Resend's shared test address, which **only
     delivers to the email you signed up to Resend with**. To receive mail
     from real customers, verify your own domain in Resend (dashboard →
     Domains → Add Domain, then add the DNS records they give you) and set
     these to something like `Bluelite Concept LTD <quotes@blueliteconceptltd.com>`.
5. Restart `npm run dev` and test both forms.

When deploying, add the same environment variables in your host's dashboard
(Vercel, Netlify, etc.) — `.env.local` is never uploaded.

## Adding real photos

The site currently uses dashed-border placeholder boxes (`components/ImagePlaceholder.tsx`)
everywhere a photo should eventually go — the hero, each product/material
card on `/services`, the sustainability section on `/`, `/about`, `/our-process`,
and `/export-logistics`. Each placeholder's caption describes exactly what
photo belongs there (e.g. "Photo: baled clear PET bottles").

To swap one in once you have the real photo:

1. Drop the image file into `public/images/`.
2. Replace the `<ImagePlaceholder label="..." aspect="..." />` call at that
   spot with a Next.js `<Image>` (or plain `<img>`) pointing at
   `/images/your-file.jpg`, keeping the same `aspect-*` wrapper class so the
   layout doesn't shift.

Recommended order, per your own guidance: PET bottles/flakes closeups on
`/services` first, then processing/site photos on `/our-process`, then a
facility or team photo for `/about`.

## Customizing

- **Copy, product grades, spec fields**: edit the arrays at the top of each
  `app/**/page.tsx` file.
- **Colors/fonts**: `tailwind.config.ts` and `app/globals.css`.
- **RFQ form fields**: `components/QuoteForm.tsx` (client) and
  `app/api/quote/route.ts` (the `FIELDS` array controls what's emailed).
- **Logo mark**: the small square-and-notch icon in `Header.tsx` /
  `Footer.tsx` is a placeholder — swap in your real logo when ready.
- **WhatsApp number**: currently shown as "available on request" in
  `app/contact/page.tsx` — add the real number once confirmed.
