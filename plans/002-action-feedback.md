# 002 — Give primary actions tactile feedback

- **Status** — Implemented
- **Commit** — a8b818f, with the working-tree shell redesign as the baseline
- **Severity** — Medium
- **Category** — Physicality and accessibility
- **Scope** — Shared button CSS

## Problem

`src/styles/global.css` responds via hover color only. Enabled primary and secondary actions give no distinct pointer-down feedback.

```css
.button:hover { background: #86f0a7; }
```

## Target and steps

1. Add shared `--ease-feedback: cubic-bezier(0.23, 1, 0.32, 1)`.
2. For `.button` with reduced motion disabled, transition only `transform` over 160ms. On `:active` compress to `scale(0.97)` over 100ms. Exclude disabled controls and keyboard focus from the spatial transform. Keep ordinary hover and keyboard focus styling.
3. For reduced motion, use color feedback on presses and no transform. Keep hover colors, focus, button sizing and link destinations intact.

## Conventions and boundaries

Apply centrally beside the existing `.button` states in `src/styles/global.css`. Keep menu, selector and calculator result updates immediate. Add no dependency.

## Verification

Run `npm run build` and `npm test`. In Chromium press and release a homepage CTA and a calculator CTA. The surface should compress immediately and return without layout movement. Keyboard focus must remain visible. Reduced motion should show the pressed color while the computed transform remains none.
