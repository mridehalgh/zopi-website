---
name: EDI Spark
description: A clear, capable design system for effortless retailer EDI.
colors:
  exchange-indigo-deep: "oklch(0.18 0.1 270)"
  exchange-indigo: "oklch(0.27 0.15 270)"
  exchange-indigo-action: "oklch(0.45 0.18 270)"
  exchange-indigo-mid: "oklch(0.62 0.15 270)"
  exchange-indigo-pale: "oklch(0.94 0.025 270)"
  clear-white: "oklch(1 0 0)"
  quiet-surface: "oklch(0.96 0.012 270)"
  technical-ink: "oklch(0.18 0.035 270)"
  supporting-ink: "oklch(0.45 0.025 270)"
  connection-mint: "oklch(0.88 0.13 155)"
  connection-mint-deep: "oklch(0.54 0.15 155)"
  danger: "oklch(0.55 0.19 25)"
typography:
  display:
    fontFamily: "Source Sans 3, Segoe UI, sans-serif"
    fontSize: "clamp(3.25rem, 7vw, 6rem)"
    fontWeight: 700
    lineHeight: 0.92
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Source Sans 3, Segoe UI, sans-serif"
    fontSize: "clamp(2.5rem, 5vw, 4.75rem)"
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Source Sans 3, Segoe UI, sans-serif"
    fontSize: "clamp(1.55rem, 2.4vw, 2.25rem)"
    fontWeight: 700
    lineHeight: 1.05
  body:
    fontFamily: "Source Sans 3, Segoe UI, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Source Sans 3, Segoe UI, sans-serif"
    fontSize: "1rem"
    fontWeight: 600
    lineHeight: 1.1
rounded:
  compact: "0.35rem"
  container: "0.75rem"
  pill: "999px"
spacing:
  xs: "0.25rem"
  sm: "0.5rem"
  md: "0.75rem"
  base: "1rem"
  lg: "1.5rem"
  xl: "2rem"
  2xl: "3rem"
  3xl: "4rem"
  4xl: "6rem"
  5xl: "8rem"
  page-gutter: "clamp(1.25rem, 5vw, 5.5rem)"
  section-block: "clamp(6rem, 11vw, 10rem)"
  section-gap: "clamp(3rem, 9vw, 10rem)"
components:
  button-primary:
    backgroundColor: "{colors.connection-mint}"
    textColor: "{colors.technical-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.compact}"
    padding: "0.85rem 1.5rem"
    height: "3.5rem"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.exchange-indigo}"
    typography: "{typography.label}"
    rounded: "{rounded.compact}"
    padding: "0.85rem 1.5rem"
    height: "3.5rem"
  button-light:
    backgroundColor: "{colors.clear-white}"
    textColor: "{colors.exchange-indigo-deep}"
    typography: "{typography.label}"
    rounded: "{rounded.compact}"
    padding: "0.85rem 1.5rem"
    height: "3.5rem"
  button-ink:
    backgroundColor: "{colors.technical-ink}"
    textColor: "{colors.clear-white}"
    typography: "{typography.label}"
    rounded: "{rounded.compact}"
    padding: "0.85rem 1.5rem"
    height: "3.5rem"
  filter-chip:
    backgroundColor: "{colors.exchange-indigo-pale}"
    textColor: "{colors.exchange-indigo}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0.45rem 0.75rem"
  product-frame:
    backgroundColor: "{colors.clear-white}"
    textColor: "{colors.technical-ink}"
    rounded: "{rounded.container}"
  navigation:
    backgroundColor: "{colors.clear-white}"
    textColor: "{colors.technical-ink}"
    typography: "{typography.label}"
    height: "5.75rem"
---

# Design System: EDI Spark

## 1. Overview

**Creative North Star: "The Clear Exchange"**

EDI Spark feels like a brightly lit logistics control room after the paperwork has disappeared: calm, legible, and quietly powerful, with every connection understandable at a glance. The system gives suppliers immediate relief through plain language and large, decisive hierarchy, then proves capability through structured ledgers, transaction views, network indexes, and precise commercial detail.

The composition is architectural rather than card-led. Committed indigo fields represent dependable exchange infrastructure; white and pale indigo surfaces create breathing room; mint marks successful movement and action. Long sections use rules, asymmetric splits, and generous fluid spacing to establish pace. Desktop layouts become direct single-column stories below 58rem, while the core hierarchy and proof remain intact.

This system explicitly rejects the dated enterprise-software look associated with OpenText and TrueCommerce, jargon-heavy EDI sites, generic AI/SaaS styling, secretive pricing, and any suggestion of long or consultant-led setup.

**Key Characteristics:**

- Committed violet-indigo infrastructure balanced by true white and a pale indigo surface
- Mint used as a purposeful signal for action, connection, and success
- One open humanist typeface with strong scale contrast and plain-English rhythm
- Product evidence, trading-network coverage, and transparent pricing as the visual material
- Flat, rule-led compositions with compact corners and almost no decorative elevation
- Responsive motion that confirms exchange without gating access to content

## 2. Colors

The palette is a committed violet-indigo system with mint as a precise operational signal, never as decoration.

### Primary

- **Exchange Indigo:** The defining infrastructure field for the hero ledger, workflow story, enterprise section, and important brand text. Use the deep and action variants for footer depth, links, borders, and interactive states.
- **Exchange Indigo Pale:** The quiet structural line and chip color. It separates rows and groups information without creating floating cards.

### Secondary

- **Connection Mint:** The primary action surface and positive status color. It identifies active routes, successful exchanges, checks, bullets, and the final conversion field.
- **Connection Mint Deep:** The accessible signal for status text, focus, and small indicators on light surfaces.

### Neutral

- **Clear White:** The default reading surface and light text on deep indigo.
- **Quiet Surface:** A pale indigo-tinted field for partner coverage and the product workspace section.
- **Technical Ink:** The default body text and darkest neutral field. It carries the business-outcomes section without becoming generic black.
- **Supporting Ink:** Secondary copy on light surfaces. It remains dark enough for comfortable body reading.
- **Danger:** Reserved for genuine errors and destructive states; it is not used decoratively on the marketing page.

### Named Rules

**The Committed Indigo Rule.** Indigo must carry major structural surfaces, not appear as a timid accent scattered across a generic white SaaS page.

**The Signal Mint Rule.** Mint means action, connection, or a successful state. If an element has none of those meanings, it does not earn mint.

**The Infrastructure, Not AI Rule.** Purple gradients, neon glows, cosmic imagery, and synthetic AI symbolism are prohibited.

## 3. Typography

**Display Font:** Source Sans 3 (with Segoe UI and sans-serif fallbacks)  
**Body Font:** Source Sans 3 (with Segoe UI and sans-serif fallbacks)

**Character:** One humanist family keeps the voice approachable across supplier-facing copy and product evidence. Capability comes from disciplined weight, tabular pricing numerals, compact display leading, and a large contrast between body and headline sizes—not from a decorative technical font.

### Hierarchy

- **Display** (700, fluid 3.25–6rem, 0.92 line-height): Hero claims only. Keep headings under 12 characters per line where practical and never tighten tracking beyond -0.035em.
- **Headline** (700, fluid 2.5–4.75rem, 0.98 line-height): Major section arguments. Use balanced wrapping and limit headings to a focused business outcome.
- **Title** (700, fluid 1.55–2.25rem, 1.05 line-height): Workflow steps and prominent component titles.
- **Body** (400, 1rem, 1.55 line-height): Plain-English explanations. Cap primary reading lines at roughly 65–75 characters; larger lead copy may rise to 1.2–1.55rem.
- **Label** (600–700, 0.86–1.05rem): Navigation, statuses, prices, and short interface metadata. Sentence case is the default; uppercase tracking is prohibited.

### Named Rules

**The Plain-English Hierarchy Rule.** Outcome first, evidence second, implementation detail on demand. Never simulate authority with dense jargon or walls of small text.

**The One Human Voice Rule.** Source Sans 3 is the brand voice. Monospace is reserved for genuine protocol or code data, never as decorative shorthand for technical credibility.

**The Numerical Confidence Rule.** Prices and document references use tabular numerals so transparent commercial information reads as stable infrastructure.

## 4. Elevation

The system is flat by default and defines depth through tonal fields, section scale, solid rules, and containment. Static marketing content has no drop shadow. The product frame uses a single pale border and compact radius; the integration signal uses one tight tonal ring. Functional overlays such as the mobile navigation may sit above the page through the documented z-index scale, but they do not gain decorative blur or glass effects.

### Shadow Vocabulary

- **Signal Ring** (`0 0 0 0.35rem var(--indigo-100)`): A tight, flat halo used only around the small integration status dot.

### Named Rules

**The Grounded Surface Rule.** Sections and product evidence stay flat at rest. A shadow is allowed only when an element has genuinely moved above the page or when a compact ring communicates state.

**The One Depth Mechanism Rule.** Never combine a border with a wide decorative shadow. Use a rule, a tonal change, or elevation—one mechanism at a time.

## 5. Components

Components are compact, legible, and structurally honest. Rounded corners soften interaction without turning the interface into a field of pills or floating cards.

### Buttons

- **Shape:** Gently compact corners (0.35rem), a minimum height of 3.5rem, and 0.85rem × 1.5rem padding. Mobile conversion groups become full-width below 40rem.
- **Primary:** Connection Mint with Technical Ink, bold label text, and no decorative shadow.
- **Hover / Focus:** Hover moves upward by 2px with the exponential ease; active compresses to 98%. Keyboard focus uses a 0.2rem Connection Mint Deep outline with 0.25rem offset.
- **Outline:** Transparent with an Exchange Indigo Action border; hover fills with the same indigo and switches to white text.
- **Light / Ink:** White buttons serve deep-indigo fields; ink buttons serve mint fields. Their hover state changes tone rather than adding elevation.

### Chips

- **Style:** The transaction filter is the only full-pill primitive. It uses Exchange Indigo Pale, Exchange Indigo text, compact 0.45rem × 0.75rem padding, and a semibold 0.86rem label.
- **State:** Pills indicate filtering or compact status only. They never become the default container shape for arbitrary content.

### Cards / Containers

- **Corner Style:** Product frames use a compact 0.75rem radius; document and outcome containers use 0.35rem or less.
- **Background:** Clear White on Quiet Surface, or a tonal surface inside a committed indigo field.
- **Shadow Strategy:** None at rest. Separation comes from one-pixel pale-indigo rules and background contrast.
- **Border:** A single 1px Exchange Indigo Pale border is allowed for functional product containment.
- **Internal Padding:** Product content uses fluid 1.5–3rem padding; dense transaction rows retain generous 6rem minimum height on desktop.

### Navigation

- **Desktop:** A 5.75rem white header with a pale-indigo bottom rule. Links are semibold and reveal a 2px Exchange Indigo Action underline from the left on hover or keyboard focus.
- **Mobile:** Below 58rem, the header becomes fixed at 4.75rem and opens a full-viewport white navigation surface. Links become 4rem rows; the primary action spans the available width.
- **Layering:** Header and menu use the semantic levels 20 and 30. The menu button sits one level above the menu while expanded.

### Product Frame

The product frame is the signature evidence component: a white, bordered transaction workspace with a deep-indigo rail, explicit success status, ruled document rows, and tabular references. It should look like real operational software, not a decorative dashboard mock-up.

### Network Index and Price Ledger

Trading-partner coverage and pricing use ruled indexes rather than cards. A strong 2px opening rule establishes the section, followed by aligned rows with 1px dividers, clear labels, and large factual values. On narrow screens, columns stack without hiding or abbreviating the proof.

### Motion and Responsive Behaviour

Hero copy rises 1.5rem over 700ms; the ledger enters from 3rem over 850ms; connection dots travel along the route over 2.4s. Hover movement uses the shared exponential ease. Below 72rem the decorative route is removed; below 58rem complex splits become single-column; below 40rem actions and dense records stack. Reduced-motion mode collapses all animations and transitions to 0.01ms and disables smooth scrolling.

## 6. Do's and Don'ts

### Do:

- **Do** make complexity feel handled: lead with faster onboarding, less admin, fewer errors, and clearer document visibility.
- **Do** prove coverage with hundreds of trading partners, every major UK retailer, and more than 300 SaaS integrations.
- **Do** make exchange tangible through real product UI, structured document flows, trading-network indexes, and transparent price ledgers.
- **Do** let Exchange Indigo carry major structural surfaces and reserve Connection Mint for action, connection, and success.
- **Do** keep the canonical prices and offer durations from `src/config/pricing.ts`, plus the no-setup-fee and no-annual-contract terms, close to conversion actions.
- **Do** preserve semantic structure, visible keyboard focus, WCAG 2.2 AA contrast, and the global reduced-motion alternative.
- **Do** route technical evaluators toward API, A2A, agentic, MCP, and UBL detail without forcing that vocabulary into the supplier journey.

### Don't:

- **Don't** reproduce the dated enterprise-software look associated with OpenText or TrueCommerce.
- **Don't** build a jargon-heavy EDI website that asks suppliers to understand implementation before business value.
- **Don't** use generic AI/SaaS styling: purple gradients, neon glows, glass cards, decorative network orbs, interchangeable rounded-card grids, or synthetic AI imagery are forbidden.
- **Don't** hide pricing or suggest long setup times, consultant-led implementation, secretive sales qualification, or inflexible annual contracts.
- **Don't** imply an established customer history. This is a new startup; establish trust through specific, supportable product and integration evidence.
- **Don't** use product-free decoration where real coverage, interface evidence, or technical artifacts can establish trust.
- **Don't** repeat tiny uppercase eyebrows, decorative numbered section markers, gradient text, side-stripe accents, wide ghost-card shadows, or decorative grid backgrounds as scaffolding.
- **Don't** exceed 0.75rem corner radii on functional containers. Full pills are reserved for filters and compact statuses.
