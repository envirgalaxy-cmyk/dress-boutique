# Design Brief

## Direction

New Age Feminine — a soft, contemporary ladies' dress boutique with pastel aesthetics and smooth, modern interactions. Approachable luxury for fashion-forward shoppers.

## Tone

Calm, contemporary, refined but welcoming — geometric sans-serifs with warm pastels and rounded forms create a modern, soft aesthetic that avoids both cliché femininity and sterile minimalism.

## Differentiation

Product cards with lift-on-hover animations, soft shadow depth, and integrated WhatsApp action buttons make shopping intuitive and socially connected. Discount badges and price transparency build trust while maintaining visual harmony.

## Color Palette

| Token      | OKLCH           | Role                                        |
| ---------- | --------------- | ------------------------------------------- |
| background | 0.98 0.008 60   | Warm off-white, light beige backdrop        |
| foreground | 0.18 0.015 30   | Deep neutral text, excellent contrast       |
| primary    | 0.70 0.18 15    | Warm rose/pink for key UI, buttons          |
| accent     | 0.65 0.20 345   | Vivid rose-pink, highlights, CTAs           |
| secondary  | 0.92 0.12 230   | Sky blue, supporting accents                |
| muted      | 0.92 0.08 60    | Subtle backgrounds, disabled states         |
| destructive| 0.55 0.22 25    | Red alerts, removals                        |

## Typography

- Display: **Bricolage Grotesque** — geometric, modern sans-serif for headings, hero text, and product names. Bold, confident, contemporary.
- Body: **Figtree** — warm, readable sans-serif for paragraphs, descriptions, and UI labels. Friendly, approachable tone.
- Scale: Hero `text-5xl md:text-7xl font-bold tracking-tight` | H2 `text-3xl md:text-5xl font-bold tracking-tight` | Label `text-sm font-semibold tracking-widest uppercase` | Body `text-base`

## Elevation & Depth

Card-based layout with subtle, colorful shadows (`shadow-card` in soft pink tones) and three-tier elevation: subtle (muted backgrounds), elevated (white cards with `shadow-subtle`), and hero (large imagery with `shadow-elevated`). No harsh, flat surfaces.

## Structural Zones

| Zone    | Background              | Border              | Notes                                  |
| ------- | ----------------------- | ------------------- | -------------------------------------- |
| Header  | `bg-card` with `shadow-card` | `border-b border-border` | Fixed navbar, logo, nav links, WhatsApp icon |
| Hero    | Soft gradient primary→secondary | —               | Large hero image or gradient, CTA button |
| Content | Alternating `bg-background` and `bg-card` | —        | Product grid, sections with breathing room |
| Footer  | `bg-muted` with `shadow-subtle` | `border-t border-border` | Shop info, social links, copyright       |

## Spacing & Rhythm

Spacious layout (1.5rem gaps between sections, 1rem micro-spacing) creates visual rest and luxury feel. Product cards spaced generously on grid; footer features breathing room with generous padding.

## Component Patterns

- **Product Card**: rounded-lg, `bg-card shadow-card`, hover lift, discount badge overlay top-right
- **Buttons**: rounded-lg, CTA in `accent` with `button-primary` utility, secondary in `ghost` style
- **Badges**: `badge-discount` utility, bold text, small rounded pill shape
- **WhatsApp Button**: integrated into card footer, green accent with icon + text

## Motion

- **Entrance**: Fade-in on page load (0.4s), staggered slide-up for product cards (0.3s)
- **Hover**: Card lift (scale 1.05, -4px translate-y) with smooth 0.3s easing; shadow deepens on hover
- **Decorative**: None (focus on functional, refined motion; no bouncing or floating elements)

## Constraints

- No animations that distract from product focus
- Maintain 1.5–2.0:1 contrast minimum on all text
- Use primary and accent sparingly; let background and card surfaces do the work
- All interactive elements must have clear hover/active states
- WhatsApp integration must be frictionless (pre-filled message)

## Signature Detail

Soft pastel gradient overlays on hero and product cards using `gradient-soft` utility — pink-to-sky-blue fades that reinforce the new age aesthetic while keeping product imagery as the focal point. This subtle detail differentiates from generic e-commerce templates while remaining tasteful and on-brand.
