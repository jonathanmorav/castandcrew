# Cakewalk Investor Deck — Design Guidelines

## Purpose
- Document a single source of truth for visual, motion, and content decisions across the investor deck.
- Provide reusable patterns so future slides can be composed quickly without breaking brand continuity.
- Reflect the existing React + Tailwind + Framer Motion implementation, keeping guidance developer friendly.

## Brand System

### Logo & Wordmark
- Primary mark: `src/assets/cakewalk-logo.png` (wide logotype). Use on cover and high-visibility hero areas.
- Maintain generous whitespace (≥ 1× logotype cap height) and apply a soft drop shadow (`0 2px 20px rgba(0,0,0,0.15)`) when placed on ambient or photographic backgrounds.
- Avoid recoloring the logo; instead, adjust background luminosity to preserve contrast.

### Color Palette
**Core brand colors**

| Token | Hex | Usage |
| --- | --- | --- |
| `brand.blue` | `#005DFE` | Primary brand, section headers, CTA arrow, tab actives |
| `brand.mint` | `#53EDBE` | Accent gradients, success cues, hover glows |
| `brand.purple` | `#7966F8` | Secondary accent, gradients, data viz fills |
| `brand.teal` | `#15CB94` | Positive metrics, callout bullets |
| `brand.darkBlue` | `#181E2A` | Default heading/body text on light surfaces |
| `brand.gray` | `#6B7280` | Supporting copy, axes, secondary UI text |

**Supporting tints & washes**

| Token | Hex | Usage |
| --- | --- | --- |
| `brand.lightBlue` | `#99BEFF` | Soft backgrounds, blur glows |
| `brand.lightMint` | `#C8FFEF` | Gradient stops, cards |
| `brand.cream` | `#EEEFE1` | Global page gradient base |
| `soft.purple` | `#E5DEFF` | Icon plates, tab surfaces |
| `soft.blue` | `#D3E4FD` | KPI tiles, backgrounds |
| `soft.green` | `#F2FCE2` | Positive stats |
| `soft.yellow` | `#FEF7CD` | Risk/attention callouts |
| `soft.orange` | `#FDE1D3` | Warnings, blockers |
| `soft.pink` | `#FFDEE2` | Cultural or people-focused notes |

**Neutrals & UI tokens**
- `--background`: pure white base (`0 0% 100%`).
- `--foreground`: near-black (`#050816` equivalent) used for the darkest text.
- `--card`: white with subtle border (`#E5E7EB`) and 16px radius.
- Use translucency (`rgba(255,255,255,0.88)`) plus backdrop blur for overlay cards on textured backgrounds.

### Gradient & Glow Patterns
- Hero gradients mix `brand.blue → brand.mint` at ~135°. Class: `.bg-primary-gradient`.
- Section atmospheres employ large, blurred circles (400–700px) at 2–5% opacity positioned off-canvas for softness.
- Radial backgrounds (e.g., Benefits Barrier) lean on mint/teal tints from center out to white.
- Maintain subtle motion where applied (e.g., animated `animate-pulse-subtle` for glow pulsing).

## Typography

### Font Families
- **Headlines & deck titles:** `Space Grotesk` (`font-grotesk`).
- **Body copy & UI:** `DM Sans` (`font-sans`).
- **Data-heavy / interface labels:** `Inter` for legibility in tables, charts, forms.

### Type Scale (Tailwind tokens)

| Role | Token | Size & Weight | Usage |
| --- | --- | --- | --- |
| Cover headline | `text-h1` | 60px / 700 | Section transitions, hero statements |
| Section headline | `text-h2` | 48px / 700 | Slide titles (`<h2>`) |
| Sub-headline | `text-h3` | 36px / 600 | Section sub-headers |
| Card title | `text-h4` | 24px / 600 | Card & column headings |
| Emphasis body | `text-h5` | 20px / 600 | Pull quotes, stats labels |
| Body L | `text-body-large` | 18px / normal | Long-form paragraphs |
| Body | `text-body` | 16px / normal | Default copy |
| Body S | `text-body-small` | 14px / normal | Captions, annotations |

Guidelines
- Line height: `normal` (≈120–140%) to match existing global reset.
- Align body copy left except for the cover and large numeric callouts.
- Use bold weight (`font-semibold`/`font-bold`) for key numbers, keep supporting text medium for hierarchy.

## Layout & Spacing
- Slides occupy `min-h-screen` with vertical centering when feasible.
- Primary container: Tailwind `container` (centered, padding 2rem, max width 1400px at `2xl`). Supplement with `px-4` (`16px`) on mobile.
- Section padding: `py-16` (desktop `py-24`+) to create space for glows and navigation arrow.
- Grid defaults:
  - Cards: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` with `gap-6` or `gap-8`.
  - KPI blocks: `grid-cols-2` on desktop for balanced white space.
- Maintain consistent vertical rhythm: stack major modules with `mt-12–16`.
- Navigation arrow sits `bottom-8`, centered; leave clearance underneath main content.

## Backgrounds & Atmosphere
- Use tinted gradients per slide theme (Problem = blue, Solution = deep blue, Benefits Barrier = mint, Distribution = indigo/purple wash).
- Employ blurred circular divs (400–600px diameter, 2–6% opacity) anchored to corners for depth.
- Cover slide: `VantaAnimation` starfield (Three.js) layered under logotype; avoid additional overlays that compete with the particle field.
- Body background (`body`) keeps a soft diagonal gradient `linear-gradient(128deg, rgba(238,239,225,0.8) → rgba(238,239,225,0.3))`—maintain this global wash for continuity.

## Components & Patterns

### Cards & Containers
- Border radius: 16px (`rounded-xl`); occasionally `rounded-2xl` (Opportunity Highlight) for hero cards.
- Shadows: default `0 10px 30px rgba(67,83,255,0.1)`; intensify on hover to `0 15px 30px` with colored tint matching card accent.
- Interior padding: 24–32px desktop, 16–24px mobile.
- Apply gradient or tinted backgrounds for icon pills (`bg-soft-*`).

### Tabs & Toggles
- Tab lists use pill-shaped white surfaces with subtle shadow (`shadow-sm`) and 14px height.
- Active state: solid `brand.blue` background, white text, bold weight; transitions at 200ms.
- When toggling views (e.g., Cakewalk model), auto-switch from legacy to Cakewalk state after 3s to demonstrate transformation.

### Stats & KPI Blocks
- Hero metrics (Opportunity Highlight, Benefit cards) use large numerals (`text-4xl`–`text-6xl`), centered, and colored `brand.blue`.
- Surround numbers with supporting copy in `text-gray-700` and maintain consistent spacing (12–16px) between value and label.

### Tables & Lists
- `KeyPerformanceTable` leverages `@/components/ui/table` inside a white `rounded-lg` container with `shadow-md`.
- Column headers center aligned; keep table width fluid with `overflow-x-auto` fallback on mobile.
- Bullet lists use `list-disc` with 16px indent; keep list items to ≤2 lines for scannability.

### Charts & Data Blocks
- Pricing comparisons rely on Recharts. Bars are rounded (5px radius) with gradient fill, clickable to reveal breakdown.
- Maintain color mapping (see Data Visualization section) and include `LabelList` for currency labels.
- Provide textual breakdown on the right with small `flex` entries colored by the same swatch.

### Workflow & Processes
- `WorkflowVisualizer` uses a browser-frame motif.
- Step icons use circular backgrounds tinted by step type; maintain 16px spacing between icon, title, description.
- Use simple form mockups (rounded inputs, neutral tones) to demonstrate UX.

### Team & People
- Leadership cards: white `Card` components with avatar (64px circle, 2px light border) and italic pull quote.
- Use `Mail` icon for contact details; ensure `mailto:` links remain brand blue.
- Advisors list appears in a white block with `shadow-md`, 32px padding.

### Navigation & View Controls
- `NavigationArrow`: bouncing `ChevronDown` with brand color, repeat animation, bottom center.
- Floating nav pill (previous/menu/next) sits above arrow; maintain slight opacity (0.7) when idle.
- Content edit/view toggles (top-right by default) remain secondary to avoid interfering with slide visuals.

### Slide Archetypes
- **Cover:** Full-screen hero, centered logotype, multi-line value statement, date/round details, starfield background.
- **Problem/Beneﬁts:** Radial gradients + staggered cards; highlight key metric first, follow with supporting cards and stats.
- **Solution/Cakewalk Model:** Split layout (text left, visualization right) with deep blue background and luminous blurs.
- **Distribution:** Multi-module page (header, tabs, timeline, economics) stacked with consistent spacing to support storytelling.
- **Financials (Unit Economics/Use of Funds):** Light neutral background, white cards, emphasis on tables/charts with callout ribbons.
- **Team:** Light gray backdrop, stacked modules (leadership cards → advantage grid → advisors → contact) with clear hierarchy.

## Motion & Interaction Principles
- Use `framer-motion` for entrance fades/slides (duration 0.3–0.8s, ease `easeOut` or `[0.22,1,0.36,1]`).
- Parallax background elements (Problem background blurs, Cakewalk glows) animate slowly (18–24s loops) with translations under 25% to avoid distraction.
- Hover states gently scale cards (`scale-102` max) and lift them by -4px to signal interactivity.
- Section transitions (`SectionTransition`) briefly cover screen with `brand.blue` circle wipe; limit to 1.5s.
- Navigation arrow bounces indefinitely (0.5s tween, 1s delay) to encourage scroll.

## Iconography & Imagery
- Icon set: `lucide-react`, stroke width 1.5–2.0, sized 24–40px depending on container.
- Place icons on rounded backgrounds using soft palette tokens; avoid standalone black icons on white to maintain friendly tone.
- Avatars load from `/public` assets; fallback initials use `brand.blue` background with white text.
- Avoid stock photography inside cards; rely on vector-friendly illustrations, gradients, or product mockups.

## Data Visualization Guidelines
- Color assignments (`src/components/competitive-edge/data/pricingData.ts`):
  - `Expected Claims` → `#8B5CF6`
  - `Carrier Admin/ROC` → `#3B82F6`
  - `External Admin Tools` → `#0EA5E9`
  - `External Distribution` → `#06B6D4`
- Chart background grid stroke: `#f5f5f5`; axes and labels use `#6B7280` for readability.
- Rounded bar corners (5px) and gradient fills reinforce premium feel.
- Tooltips render inside white cards with drop shadow; keep copy concise (≤2 lines).
- Always accompany charts with textual insight (callout block or bullet list) for narrative clarity.

## Content & Tone
- Voice: confident, empathetic to SMB challenges, avoid jargon; frame benefits as outcomes.
- Lead with the problem or opportunity, follow with quantified proof, finish with implication or next step (seen in Opportunity Highlight, Use of Funds).
- Maintain sentence case for headings and buttons; uppercase only for short labels or stat tags.

## Accessibility & Contrast
- Ensure text over gradients meets 4.5:1 contrast; apply translucent white backplates (`rgb(255 255 255 / 88%)`) when necessary.
- Provide `alt` text for all imagery/logos (already present for cover logo).
- Interaction targets (tabs, nav buttons) are ≥44px; keep this standard for new controls.
- Avoid conveying meaning through color alone—pair colored bullets with descriptive text.

## Implementation Notes
- Tailwind config defines custom font tokens (`fontFamily.sans`, `fontFamily.grotesk`, `fontSize` scale). Use these semantic classes instead of raw pixel utilities where possible.
- Border radius tokens: `rounded-xl` (16px) default; `rounded-2xl` (24px) for hero cards.
- Container remains centered with `padding 2rem`; avoid overriding on desktop to keep consistent gutters.
- Animations rely on `framer-motion`; keep new interactions declarative for maintainability.

## Checklist for New Slides
1. Define the narrative goal and pick a background atmosphere aligned with theme (blue for trust, mint for innovation, neutral for financials).
2. Use the established type hierarchy (`h2` headline, optional `h3` subhead, `text-body` paragraphs).
3. Build layouts with existing grid patterns; reuse card/table/chart components when possible to inherit styling.
4. Apply brand colors intentionally—limit any one slide to 2 dominant hues plus neutrals.
5. Add motion thoughtfully: entrance animations for key modules, subtle hover states for interactive elements.
6. Verify accessibility: contrast, focus order (if interactive), descriptive text.
7. Leave space at bottom for navigation arrow and floating nav controls.

Following these guidelines will keep future slides visually cohesive while preserving the refined, tech-forward tone of the current investor deck.
