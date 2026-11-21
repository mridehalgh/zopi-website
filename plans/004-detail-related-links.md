# 004 — Acknowledge related directory links

- **Status** — Implemented
- **Commit** — f1a62ae
- **Severity** — Low
- **Category** — Pointer feedback
- **Scope** — The related-link arrows on both directory templates

## Finding

Directory filters, navigation and enquiry links are frequent controls. The static Astro site already gives them immediate feedback. The new detail templates add a less frequent related-link list, where the directional arrow can acknowledge the pointer without shifting the link target. The homepage already uses this pattern in `src/styles/home.css`.

## Implementation

In `src/styles/directory-detail.css`, transition the child SVG's transform over 160 ms using `--ease-feedback` (`cubic-bezier(0.23, 1, 0.32, 1)`). Apply `translateX(4px)` when the owning link is hovered. Scope both rules to fine pointers with hover and normal motion. Leave the row, keyboard focus, destination and touch interaction fixed.

## Verification

Run `npm run build` and `npm test`. In Chromium hover a related integration link, then verify 4 px of arrow movement and the same link bounds. Repeat under reduced motion and confirm the arrow remains stationary. Tab across related links and confirm visible focus.
