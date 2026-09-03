# STICH — Royal Heritage Design System

Source of truth for the Jaipur atelier website. Swap placeholders before launch.

## Brand

STICH — Rajputi poshaks, dresses, artificial jewellery + bespoke stitching. Royal heritage, not fast fashion. Competitors: Sabyasachi, Raw Mango, Jaipur Rugs — but with a direct-to-atelier, to-measure edge.

## Palette (Tailwind tokens in `src/app/globals.css`)

| Token | Hex | Use |
|-------|-----|-----|
| heritage-ivory | #FFF8E7 | page bg |
| heritage-cream | #FDF6E3 | sections / cards alt |
| heritage-burgundy | #4A0E0E | primary, header logo bg, headings accent |
| heritage-gold | #C8A96A | hairlines, borders, accents, shimmer |
| heritage-gold-light | #E8D5A8 | hover, highlights |
| heritage-charcoal | #1A1A1A | text, footer bg |
| heritage-teal | #0F3A3A | secondary accent |
| heritage-sindoor | #A91D3A | sale / destructive |

No neon, no AI purple-pink gradients. Gold is brushed, not glossy.

## Typography

- Display: `Cormorant Garamond` (300–700) — headings, prices, pull-quotes. Variable `--font-cormorant`.
- Body/UI: `Montserrat` (300–600) — everything else. Variable `--font-montserrat`.
- Fallback for Hindi: `Noto Serif Devanagari` (add if needed).

## Ornament Language

- Thin gold hairlines (`gold-hairline`), double borders (`gold-border-double`), arch/jharokha masks (`JharokhaFrame`, `GoldFrame`), paisley divider (`OrnamentalDivider`), damask texture (hero gradient).
- Radii: `0.75rem` (`--radius`), soft. Shadows: subtle, gold-glow on hover.

## Motion

- Engine: `motion` (import from `motion/react`), `lenis` for smooth scroll.
- Scroll: `lenis` `lerp 0.075, duration 1.2, easing 1.001 - 2^-10t`, `respectReducedMotion: true`.
- Reveals: `Reveal` + `RevealItem` (stagger 0.08, 700ms easeOut), respect `prefers-reduced-motion`.
- 3D: `@react-three/fiber` + `drei` — one hero medallion (brushed gold cylinder + torus, Float, point light), `frameloop` always but hidden on mobile via CSS.

## Components

- `Header` — sticky, gold rule, arch logo (स्), nav + WhatsApp CTA.
- `Footer` — charcoal with gold rule, 4-col.
- `OrnamentalDivider` / `DoubleHairline`
- `JharokhaFrame` / `GoldFrame`
- `Reveal` / `RevealItem` / `StaggerText`
- `Button` (default burgundy, gold, outline, ghost), `Badge`
- `LenisProvider` (client, autoRaf)
- `Medallion` + `MedallionWrapper` (dynamic ssr:false)
- Products: `src/data/products.ts` — 12 seeded, Unsplash placeholders.

## Pages

/ → hero + trust strip + featured 6 + craftsmanship split + jewellery strip + testimonial
/collections → filter (all/poshak/dress/jewellery) + grid
/collections/[slug] → gallery + details + WhatsApp CTA (generateStaticParams)
/stitching → 4-step process + quote CTA
/heritage → story + stats
/contact → address / hours / WhatsApp + static enquiry block
/_not-found → 404

## Owner (live)

- **Proprietor:** Saroj Kanwar — `src/lib/site.ts` `SITE.owner`
- **Phone / WhatsApp:** +91 63783 39954 (`916378339954`) — central in `SITE.phoneWa` / `SITE.telHref`, used in header strip, header CTA, footer, contact, stitching, and all Buy-on-WhatsApp links.
- **Address:** 18 A, Satya Colony, Heerapura, Jaipur, Rajasthan 302021 — `SITE.addressFull`, shown in header strip (desktop), footer (with embedded Google Map), contact page (with map + OPEN IN MAPS), heritage page. Footer map iframe uses `https://maps.google.com/maps?q=18 A Satya Colony Heerapura Jaipur 302021&z=15&output=embed` with fallback link.

## WhatsApp Buy flow (with image)

- Central helpers `waLink()` / `buyMessage(product)` in `src/lib/site.ts` + client helpers `WhatsappBuyButton` / `QuickBuyLink` in `src/components/buy/whatsapp-buy.tsx`.
- Detail page (`collections/[slug]`) uses `WhatsappBuyButton`: pre-filled text includes `*title*`, category/price/fabric/work/color, **Image: <image URL>** and **Page: <origin>/collections/<slug>** — WhatsApp renders a link preview for the image URL. On supported mobiles we also try `navigator.share({files})` to actually attach the photo; fallback always opens `wa.me`.
- Collection grids (home + `/collections`) have `QuickBuyLink` BUY pill on each card (stopPropagation).
- All Unsplash image URLs are public, so previews work; once you upload real photos to your domain/CDN, previews will show your own images.

## To Swap Before Launch

- Update domain in `buyMessage` origin (currently `window.location.origin` on client, fallback `stich.example.com`) to your real domain for clickable page links in WhatsApp.
- All `images.unsplash.com` → real atelier photography in `public/` or CDN, update `src/data/products.ts`.
- Add real atelier photos to craftsmanship section.
- Connect enquiry form to backend or keep WhatsApp.
- Add analytics, SEO sitemap, real OG images.

## Skills (global)

- `~/.config/opencode/skills/ui-ux-pro-max` (+ banner-design, brand, design, design-system, slides, ui-styling) — via `uipro init --ai opencode` then copied to global.
- `~/.config/opencode/skills/frontend-design` — sparse checkout from `anthropics/claude-code`.
- Project-local `.opencode/skills/` kept for reference.

## Commands

```
npm run dev   # http://localhost:3000
npm run build # production build (type errors ignored via next.config.ts)
```
