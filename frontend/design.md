# CallScribe — Design System v2

> **Design Principle:** A design system is a set of constraints. Every value in this document is a decision against arbitrary variation. If a value isn't in this file, it doesn't go in the codebase.

---

## 0. What This System Is Not

This system deliberately avoids:

- Indigo-to-purple gradients (generic AI tool signal)
- Neon glow blobs as decoration (crypto / hype aesthetic)
- Glassmorphism as a default card treatment
- Rounded corners above 20px on any component
- Gradient text on more than one headline per page
- Section-level background colours that alternate with no semantic purpose

---

## 1. Brand Personality

CallScribe is a **precision tool for professionals**.

It should feel the way a well-designed IDE feels: focused, fast, and completely in control.

| Attribute | Design Expression |
|-----------|-------------------|
| **Professional** | Tight typography, high contrast, no decorative noise |
| **Premium** | Considered whitespace, consistent radius, high-quality micro-interactions |
| **Focused** | One dominant action per section, clear visual hierarchy |
| **Trustworthy** | Neutral backgrounds, restrained colour, no exaggeration |
| **Modern** | Monospace accents for data, sharp component edges, clean grid |
| **Technical** | Monospace used in outputs, structured layouts, data-forward UI |

**Mood references:** Linear, Vercel, Raycast, Stripe Docs  
**Explicitly not:** Synthwave, Web3, Notion-lite, generic AI SaaS purple

---

## 2. Color System

### 2.1 Background Layers

The background system uses a strict elevation model. Dark surfaces get lighter as they elevate — never darker.

| Token | Hex | Usage |
|-------|-----|-------|
| `--bg-base` | `#09090B` | Page root background |
| `--bg-elevated` | `#111115` | Sections with subtle lift (alternating sections) |
| `--bg-surface` | `#18181B` | Card backgrounds, panels |
| `--bg-surface-raised` | `#1F1F23` | Hover states on cards, active states, inline code blocks |

> **Rule:** No section background is more than two elevation steps above `--bg-base`. Do not use `--bg-surface-raised` as a section background.

### 2.2 Border System

| Token | Hex | Usage |
|-------|-----|-------|
| `--border-subtle` | `#27272A` | Default card borders, dividers |
| `--border-default` | `#3F3F46` | Focused inputs, active states |
| `--border-strong` | `#52525B` | Emphasized separators |

> **Rule:** Borders use opacity-based values only in the Navbar (where blur compositing requires it). Everywhere else, use the explicit hex values above.

### 2.3 Text System

| Token | Hex | Usage |
|-------|-----|-------|
| `--text-primary` | `#FAFAFA` | Headings, labels, primary content |
| `--text-secondary` | `#A1A1AA` | Body copy, descriptions, subtitles |
| `--text-muted` | `#52525B` | Placeholder text, meta info, timestamps |
| `--text-inverse` | `#09090B` | Text on light/white backgrounds (primary button label) |

### 2.4 Accent System

The accent is a single, unambiguous colour. It is not a gradient. It is used for interactive elements and attention-directing signals only.

| Token | Hex | Usage |
|-------|-----|-------|
| `--accent-primary` | `#2563EB` | Primary buttons, active tabs, links |
| `--accent-hover` | `#1D4ED8` | Hover state for accent elements |
| `--accent-subtle` | `#1E3A8A1A` | Background tint on accent-adjacent surfaces (10% opacity) |
| `--accent-border` | `#2563EB40` | Border on accent-highlighted cards (25% opacity) |

> **Rule:** Gradient fills on buttons are prohibited. The primary button uses `--accent-primary` as a flat fill.

### 2.5 Semantic Colours

| Token | Hex | Usage |
|-------|-----|-------|
| `--success` | `#10B981` | Transcription complete, action item resolved |
| `--success-subtle` | `#10B98115` | Success state background |
| `--warning` | `#F59E0B` | Processing in progress, pending states |
| `--warning-subtle` | `#F59E0B15` | Warning state background |
| `--destructive` | `#EF4444` | Recording active indicator, errors |
| `--destructive-subtle` | `#EF444415` | Error state background |

### 2.6 Full Palette Token Map (Tailwind)

```js
// tailwind.config.js — colors.extend
colors: {
  base: {
    bg:         '#09090B',
    elevated:   '#111115',
    surface:    '#18181B',
    raised:     '#1F1F23',
  },
  border: {
    subtle:  '#27272A',
    default: '#3F3F46',
    strong:  '#52525B',
  },
  content: {
    primary:   '#FAFAFA',
    secondary: '#A1A1AA',
    muted:     '#52525B',
    inverse:   '#09090B',
  },
  accent: {
    DEFAULT: '#2563EB',
    hover:   '#1D4ED8',
    subtle:  '#1E3A8A1A',
    border:  '#2563EB40',
  },
  success:     '#10B981',
  warning:     '#F59E0B',
  destructive: '#EF4444',
}
```

---

## 3. Typography System

### 3.1 Typeface

| Role | Typeface | Source |
|------|----------|--------|
| **Display / UI** | `Inter` | Google Fonts — load via `<link>` in `index.html` |
| **Monospace (data)** | `JetBrains Mono` | Google Fonts — load via `<link>` in `index.html` |

Both must be imported with the following weights:
- Inter: 400, 500, 600, 700
- JetBrains Mono: 400, 500

```html
<!-- Required in index.html <head> -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
```

### 3.2 Type Scale

| Role | Size | Line Height | Weight | Tracking | Font |
|------|------|-------------|--------|----------|------|
| **Hero XL** | 64px / `text-6xl` | 1.05 (68px) | 700 | `-0.03em` | Inter |
| **Hero Large** | 48px / `text-5xl` | 1.1 (53px) | 700 | `-0.025em` | Inter |
| **H1** | 36px / `text-4xl` | 1.15 (41px) | 700 | `-0.02em` | Inter |
| **H2** | 28px / `text-3xl` | 1.2 (34px) | 600 | `-0.015em` | Inter |
| **H3** | 20px / `text-xl` | 1.3 (26px) | 600 | `-0.01em` | Inter |
| **Body Large** | 18px / `text-lg` | 1.65 (30px) | 400 | `0em` | Inter |
| **Body** | 16px / `text-base` | 1.6 (26px) | 400 | `0em` | Inter |
| **Small** | 14px / `text-sm` | 1.5 (21px) | 400 | `0em` | Inter |
| **Caption** | 12px / `text-xs` | 1.4 (17px) | 500 | `0.02em` | Inter |
| **Mono Body** | 14px / `text-sm` | 1.6 (22px) | 400 | `0em` | JetBrains Mono |
| **Mono Small** | 12px / `text-xs` | 1.5 (18px) | 400 | `0.01em` | JetBrains Mono |

### 3.3 Typography Rules

- **Gradient text:** Permitted on exactly ONE element per page view — the primary headline of the hero section. Nowhere else.
- **Section headers (H2):** Never use gradient text. Use `--text-primary` with normal weight contrast.
- **Body copy maximum width:** `65ch`. Lines longer than 65 characters are prohibited in body-size text blocks.
- **Monospace usage:** Transcripts, speaker labels, timestamps, processing states, code-adjacent labels. Never for UI copy.
- **All-caps:** Permitted only for Caption-size labels (`text-xs`) with `tracking-widest`. Never at body size or above.

### 3.4 Tailwind Font Config

```js
// tailwind.config.js
fontFamily: {
  sans: ['Inter', 'system-ui', 'sans-serif'],
  mono: ['JetBrains Mono', 'Menlo', 'monospace'],
},
letterSpacing: {
  'hero-xl':  '-0.03em',
  'hero-lg':  '-0.025em',
  'heading':  '-0.02em',
  'subhead':  '-0.015em',
},
```

---

## 4. Radius System

Every border-radius value in the codebase must come from this scale. There are no exceptions.

| Token | Value | Tailwind | Usage |
|-------|-------|----------|-------|
| `radius-none` | `0px` | `rounded-none` | Dividers, full-width separators |
| `radius-sm` | `4px` | `rounded` | Badges, small tags, code chips |
| `radius-md` | `8px` | `rounded-lg` | Input fields, small buttons, tooltips |
| `radius-lg` | `12px` | `rounded-xl` | Cards, dropdowns, nav items |
| `radius-xl` | `16px` | `rounded-2xl` | Feature cards, modals, large panels |
| `radius-2xl` | `20px` | `rounded-[20px]` | Section containers, hero visual |
| `radius-pill` | `9999px` | `rounded-full` | Pill buttons, avatar frames, navbar |

> **Banned values:** `rounded-[32px]`, `rounded-[40px]`, `rounded-[48px]`, `rounded-3xl` (24px), or any arbitrary bracket value not in the table above.

---

## 5. Shadow System

Shadows communicate elevation and focus. They are not decorative.

| Token | Value | Usage |
|-------|-------|-------|
| `shadow-subtle` | `0 1px 2px rgba(0,0,0,0.4), 0 1px 6px rgba(0,0,0,0.2)` | Cards at rest, inputs |
| `shadow-medium` | `0 4px 12px rgba(0,0,0,0.5), 0 2px 4px rgba(0,0,0,0.3)` | Dropdowns, modals, floating elements |
| `shadow-glow` | `0 0 0 1px #2563EB40, 0 4px 24px rgba(37,99,235,0.15)` | Active/focused accent elements only |
| `shadow-glow-sm` | `0 0 0 1px #2563EB40, 0 2px 8px rgba(37,99,235,0.12)` | Hovered accent buttons |

> **Rule:** Glow shadows are accent-coloured only. There are no purple, pink, or multi-colour glow effects in this system. A glow is a focus indicator, not decoration.

```js
// tailwind.config.js
boxShadow: {
  'subtle': '0 1px 2px rgba(0,0,0,0.4), 0 1px 6px rgba(0,0,0,0.2)',
  'medium': '0 4px 12px rgba(0,0,0,0.5), 0 2px 4px rgba(0,0,0,0.3)',
  'glow':    '0 0 0 1px rgba(37,99,235,0.25), 0 4px 24px rgba(37,99,235,0.15)',
  'glow-sm': '0 0 0 1px rgba(37,99,235,0.25), 0 2px 8px rgba(37,99,235,0.12)',
},
```

---

## 6. Spacing System

Based on a 4px base unit. All spacing in the codebase must use Tailwind's built-in scale (which maps to this grid). No arbitrary bracket spacing values.

| Steps to use | px value | Tailwind token | Semantic name |
|---|---|---|---|
| 1 | 4px | `p-1` / `m-1` | Micro |
| 2 | 8px | `p-2` / `m-2` | XSmall |
| 3 | 12px | `p-3` / `m-3` | Small |
| 4 | 16px | `p-4` / `m-4` | Base |
| 5 | 20px | `p-5` / `m-5` | Medium-Small |
| 6 | 24px | `p-6` / `m-6` | Medium |
| 8 | 32px | `p-8` / `m-8` | Large |
| 10 | 40px | `p-10` / `m-10` | XLarge |
| 12 | 48px | `p-12` / `m-12` | 2XL |
| 16 | 64px | `p-16` / `m-16` | 3XL |
| 20 | 80px | `p-20` / `m-20` | Section-Small |
| 24 | 96px | `p-24` / `m-24` | Section |
| 32 | 128px | `p-32` / `m-32` | Section-Large |

### Section Vertical Rhythm

Each section has a specific vertical padding assignment. Sections are NOT all `py-24`.

| Section | Top Padding | Bottom Padding | Rationale |
|---------|------------|----------------|-----------|
| Hero | `pt-32` | `pb-24` | Offset for fixed navbar |
| Trust Bar | `py-10` | `py-10` | Compact — not a full section |
| Output Preview | `pt-20` | `pb-24` | Key section, breathes |
| How It Works | `py-20` | `py-20` | Supporting section |
| Features | `pt-20` | `pb-20` | Dense grid, less padding |
| CTA | `pt-24` | `pb-24` | High emphasis close |
| Footer | `pt-20` | `pb-12` | Compact footer |

---

## 7. UI Primitives

### 7.1 Buttons

Three variants. No others.

#### Primary Button
```
Background:   --accent-primary (#2563EB)
Text:         --text-inverse (#09090B) — NO, white text on blue: #FAFAFA
Border:       none
Radius:       radius-md (8px)
Padding:      12px 20px (py-3 px-5)
Font:         14px / Inter 600
Hover:        background → --accent-hover (#1D4ED8)
Focus:        shadow-glow
Active:       scale(0.98)
Transition:   150ms ease
```

> **Primary button is NOT pill-shaped.** Rounded-full buttons are reserved for the navbar CTA only. Primary buttons use `radius-md`.

#### Secondary Button
```
Background:   transparent
Text:         --text-primary (#FAFAFA)
Border:       1px solid --border-default (#3F3F46)
Radius:       radius-md (8px)
Padding:      12px 20px (py-3 px-5)
Font:         14px / Inter 600
Hover:        background → --bg-surface-raised (#1F1F23), border → --border-strong
Focus:        shadow-glow
Active:       scale(0.98)
```

#### Ghost Button
```
Background:   transparent
Text:         --text-secondary (#A1A1AA)
Border:       none
Radius:       radius-md (8px)
Padding:      8px 12px
Font:         14px / Inter 500
Hover:        background → --bg-surface (#18181B), text → --text-primary
```

**Forbidden:** Gradient-fill buttons. White-background buttons used inside dark sections. `rounded-full` on non-navbar buttons.

---

### 7.2 Badges

Two variants: Status and Label.

#### Status Badge
```
Background:   semantic-subtle (e.g., --success-subtle for "complete")
Text:         semantic colour (e.g., --success)
Border:       1px solid semantic colour at 20% opacity
Radius:       radius-sm (4px)
Padding:      2px 8px (py-0.5 px-2)
Font:         12px / Inter 500 / tracking-wider / uppercase
```

#### Label Badge
```
Background:   --bg-surface-raised (#1F1F23)
Text:         --text-secondary (#A1A1AA)
Border:       1px solid --border-subtle (#27272A)
Radius:       radius-sm (4px)
Padding:      2px 8px
Font:         12px / Inter 500
```

**Forbidden:** Pill-shaped badges (rounded-full). Gradient-background badges. Animated ping dots except for the single "live recording" state indicator.

---

### 7.3 Cards

Cards communicate elevation. They are not decorative containers.

#### Default Card
```
Background:   --bg-surface (#18181B)
Border:       1px solid --border-subtle (#27272A)
Radius:       radius-xl (16px)
Shadow:       shadow-subtle
Padding:      24px (p-6)
```

#### Interactive Card (hover state)
```
Background:   --bg-surface (#18181B) → --bg-surface-raised (#1F1F23) on hover
Border:       --border-subtle → --border-default on hover
Shadow:       shadow-subtle → shadow-medium on hover
Transition:   border-color 150ms ease, box-shadow 200ms ease, background 150ms ease
Transform:    none — no translateY on hover (this is a 2D design, not skeuomorphic)
```

#### Accent-highlighted Card (for selected/active state)
```
Background:   --bg-surface (#18181B)
Border:       1px solid --accent-border (rgba(37,99,235,0.25))
Shadow:       shadow-glow-sm
```

**Forbidden:** `backdrop-blur` glassmorphism as the default card treatment. Glass is permitted only on the Navbar. All other cards use solid opaque backgrounds.

---

### 7.4 Feature Cards

A specific sub-type of card used in the Features section.

```
Layout:        Vertical stack — icon → title → description
Icon container: 40px × 40px, background --bg-surface-raised, radius-lg (12px)
Icon:          20px, colour --text-secondary at rest, --accent-primary on card hover
Title:         H3 (20px / Inter 600), --text-primary
Description:   Body (16px / Inter 400), --text-secondary, max-w: 40ch
Card:          Default card rules + interactive card hover rules
Padding:       24px (p-6)
Gap (inner):   16px between icon container, title, description (space-y-4)
```

---

### 7.5 CTA Block

The final conversion section. One per page. It is not a card — it is a full-width section.

```
Background:     --bg-elevated (#111115)
Top border:     1px solid --border-subtle (#27272A)
Layout:         Centered, max-w-2xl for text content
Headline:       Hero Large (48px / Inter 700 / tracking-hero-lg)
Subtext:        Body Large (18px / Inter 400 / --text-secondary)
Primary CTA:    Primary button (see 7.1)
Secondary CTA:  Ghost button (see 7.1) — "Log in" or equivalent. NOT "Talk to Sales."
Trust signals:  Displayed as inline text chips, NOT at reduced opacity — full visibility
```

**Forbidden:** Glass card wrapping the CTA content. The current `glass rounded-[48px]` treatment makes the CTA look like just another section card. The CTA needs to feel architecturally different.

---

### 7.6 Navigation

```
Position:     Fixed, top-0, full-width. NOT floating pill. Full-width bar.
Background:   --bg-base (#09090B) at 80% opacity + backdrop-blur-md
Border:       Bottom — 1px solid --border-subtle (#27272A)
Height:       56px (h-14)
Layout:       Logo left, nav links center, auth right — standard 3-column
Logo text:    H3 size (20px / Inter 700), --text-primary
Nav links:    Small (14px / Inter 500), --text-secondary, hover → --text-primary
CTA button:   Primary button, pill shape ONLY in navbar context (rounded-full), compact (py-2 px-4)
```

> **The current floating pill navbar is being replaced.** The floating pill creates a sense of playfulness that conflicts with the professional brand. A full-width sticky bar with a bottom border is structurally cleaner and universally understood.

---

### 7.7 Inputs

```
Background:   --bg-surface (#18181B)
Border:       1px solid --border-subtle (#27272A)
Radius:       radius-md (8px)
Padding:      10px 14px (py-2.5 px-3.5)
Font:         Body (16px / Inter 400), --text-primary
Placeholder:  --text-muted (#52525B)
Focus:        border → --border-default (#3F3F46) + shadow-glow
Error:        border → --destructive (#EF4444)
Disabled:     background → --bg-base, text → --text-muted, cursor-not-allowed
```

---

### 7.8 Section Headers

The pattern for introducing each major section.

```
Layout:         Centered, or left-aligned depending on section layout
Eyebrow label:  Caption (12px / Inter 500 / uppercase / tracking-widest), --accent-primary
Headline:       H1 or H2 (depending on section weight), --text-primary
Subheadline:    Body Large (18px / Inter 400), --text-secondary, max-w: 52ch
Spacing:        eyebrow → headline: 8px (gap-2), headline → subheadline: 12px (gap-3)
```

> **The eyebrow label replaces the current gradient text headline style.** Instead of making the last word of every H2 gradient-coloured, use an eyebrow category label above a plain H2. This is cleaner and eliminates the gradient overuse problem.

Example:
```
TRANSCRIPTION                    ← accent-coloured eyebrow, 12px caps
Your words. Instantly.           ← H2, plain text-primary
No lag. No corrections needed.   ← Body Large, text-secondary
```

---

## 8. Glow Orb System

The current page has 14 individually hand-coded background glow blobs. This is replaced by a controlled system.

### Rules

1. Maximum of **2 glow orbs visible** at any scroll position.
2. Glow orbs use only `--accent-primary` at `5% opacity` (`#2563EB0D`). No purple, no secondary blobs.
3. Orbs are positioned at the **page level** (fixed or scroll-relative at the `<main>` wrapper), not inside individual sections.
4. Orb size: maximum `600px × 600px`. No `800px` or `1000px` orbs.
5. Blur: `blur-[120px]` maximum.
6. `pointer-events-none`, `z-index: -1`, `aria-hidden: true`.

### Tailwind config extension

```js
// A single reusable pattern, not inline duplication
// Use a <GlowOrb> component with position props
```

---

## 9. Motion System

### Principles

- Animations communicate state change — they do not decorate.
- Entry animations exist only for above-the-fold content (Hero).
- Scroll-triggered animations use `framer-motion`'s `whileInView` with `viewport={{ once: true }}`.
- Duration: 200–350ms for UI interactions. 400–600ms for section reveals.
- Easing: `ease-out` for entries. `ease-in-out` for transitions. No `spring` physics unless it reflects physical behaviour (e.g., drawer slide).

### Permitted Animations

| Trigger | Animation | Duration | Easing |
|---------|-----------|----------|--------|
| Button hover | none (colour/shadow only) | 150ms | ease |
| Card hover | background, border, shadow | 150ms–200ms | ease |
| Page section reveal | `opacity: 0→1, y: 16→0` | 500ms | ease-out |
| Tab switch | `opacity: 0→1` crossfade | 200ms | ease |
| Recording active | pulse on indicator dot | continuous | sine |
| Modal open | `opacity: 0→1, scale: 0.97→1` | 200ms | ease-out |

### Forbidden Animations

- `animate-ping` except on the single "recording active" red dot indicator
- Scale transforms on card hover
- Parallax scroll effects
- Staggered list animations (all items animate at once, not in sequence)
- `transition-all` (use explicit property names)

---

## 10. Implementation Recommendations

### Priority 0 — Fix Before Anything Else

These are broken and must be resolved before any visual work:

1. **Add font imports to `index.html`.**  
   Inter and JetBrains Mono are not loaded. The current page renders in system fallback font.

2. **Fix the "Watch Demo" button.**  
   It has no `onClick` handler. It must either open a modal with a pre-recorded video or be removed entirely.

3. **Fix or remove the `#pricing` navbar link.**  
   No pricing section exists. Remove the link until the section is built.

4. **Remove the `useEffect` smooth-scroll implementation in `Home.jsx`.**  
   Replace with `scroll-behavior: smooth` in `index.css` on the `html` element. The current implementation leaks event listeners.

5. **Fix social links in `Footer.jsx`.**  
   All social icon links point to `href="#"`. These need real URLs or must be removed.

---

### Priority 1 — System Migration

6. **Replace `tailwind.config.js` entirely** with the new token definitions from Section 2.6, 3.4, 4, and 5.

7. **Replace `index.css`** — keep `@tailwind` directives, remove `glass` as a universal utility, add new utilities:
   ```css
   .card { @apply bg-base-surface border border-border-subtle rounded-2xl shadow-subtle; }
   .section-header-eyebrow { @apply text-xs font-mono font-medium uppercase tracking-widest text-accent; }
   ```

8. **Create a `<GlowOrb>` component** that replaces all 14 inline glow blobs. Accept `position`, `size`, `opacity` props. Render it once in `Home.jsx`.

9. **Migrate Navbar to full-width sticky bar.** Remove the `w-[90%] max-w-5xl rounded-full` floating pill treatment.

---

### Priority 2 — Component Cleanup

10. **Merge `ProductExperience` and `OutputPreview`.**  
    The interactive widget should contain the output tabs. One component, not two sections.

11. **Delete `HowItWorks.jsx`.**  
    The section communicates nothing that the merged demo section doesn't already show, and it appears after the demo has already run.

12. **Extract the "Why CallScribe?" comparison block from `Features.jsx`.**  
    It is a separate section embedded in the wrong component. Either elevate it to its own section or remove it.

13. **Audit `Features.jsx` card copy.**  
    All six card descriptions are interchangeable with any transcription tool's marketing copy. Each must be rewritten to describe a specific, verifiable behaviour of the CallScribe product.

---

### Priority 3 — Structural

14. **Remove production API code from the landing page demo.**  
    `ProductExperience.jsx` makes live `axios` calls to the backend from the marketing page. The landing page should show a pre-loaded, pre-recorded demo that works without a backend connection. Move the functional recording tool to an authenticated app route.

15. **Add `<meta>` tags to `index.html`.**  
    Currently missing: `description`, `og:title`, `og:description`, `og:image`, `twitter:card`. A landing page with no meta tags is invisible to sharing and weakly indexed.

16. **Add an `id` to the Hero section** for the navbar "Features" anchor link. Current `href="#features"` in the navbar works, but `href="#how-it-works"` target exists while `#pricing` does not.

---

## 11. Component Inventory After Cleanup

| File | Status | Action |
|------|--------|--------|
| `Navbar.jsx` | Modify | New full-width sticky design |
| `Hero.jsx` | Rewrite | New copy, remove mock visual, fix CTA |
| `ProductExperience.jsx` | Merge + Restructure | Merge with OutputPreview, remove live API |
| `OutputPreview.jsx` | Merge into ProductExperience | Remove as standalone section |
| `HowItWorks.jsx` | Delete | Section is redundant |
| `Features.jsx` | Split | Extract comparison block; rewrite card copy |
| `CTA.jsx` | Modify | New copy, remove Talk to Sales, fix trust badges |
| `Footer.jsx` | Modify | Remove vanity copy, fix dead links |
| `GlowOrb.jsx` | New | Replaces 14 inline glow blobs |

---

*This document is the single source of truth for visual decisions in CallScribe. Any value not defined here requires an explicit addition to this document before it enters the codebase.*
