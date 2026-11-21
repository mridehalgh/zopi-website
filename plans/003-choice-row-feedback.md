# 003 — Make choice rows acknowledge the pointer

- **Status** — Implemented
- **Commit** — a8b818f, with the working-tree home redesign as the baseline
- **Severity** — Low
- **Category** — Feedback and responsiveness
- **Scope** — Homepage connection links

## Problem

`src/styles/home.css` changes row color on hover. The existing arrow gives no sense of which link is about to take the visitor onward.

```css
.home-link-list a:hover { background: var(--sheet); }
```

## Target and steps

1. Keep the row’s bounds and its focus styling fixed.
2. On hover with a fine pointer and normal motion preference, move only the child arrow 4px right using `translateX(4px)` over 160ms with `cubic-bezier(0.23, 1, 0.32, 1)`. Hover-out should interrupt cleanly. Keep color as the feedback for touch, keyboard and reduced motion.
3. Keep the arrow decorative and retain the link’s current name and destination.

## Conventions and boundaries

Use the inline SVG already present in `src/pages/index.astro`. Use CSS in `src/styles/home.css` and the shared feedback easing from plan 002, or spell out that exact curve if the token has yet to land. Directory record rows remain static.

## Verification

Run `npm run build` and `npm test`. Move the pointer across the first link’s edges and off it before the arrow settles. Only the arrow should move. Focus the link with Tab and test reduced motion. Both paths must preserve visible feedback and the arrow’s static position.
