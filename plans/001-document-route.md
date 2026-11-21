# 001 — Show a document travelling through the exchange

- **Status** — Implemented
- **Commit** — a8b818f, with the working-tree manifest redesign as the baseline
- **Severity** — Medium
- **Category** — Purpose and physicality
- **Scope** — Home page markup and stylesheet

## Problem

The existing `src/styles/home.css:114` scales all route lines together while their arrowheads stay put. It looks like bars changing width. The actual direction is only clear after you read the labels. The animation also finishes before a visitor may look at it.

```css
.exchange-route__line::before { animation: exchange-travel 450ms var(--ease-out) both; transform-origin: left; }
.exchange-row--incoming .exchange-route__line::before { transform-origin: right; }
```

## Target and steps

1. Keep the original HTML document names, directions, references and statuses readable on load and in reduced motion. Group directional marks in each sample row. Add one overlapping decorative packet to each lane with a static center position, hidden at rest.
2. Near the sample heading add a “Replay exchange” button. Leave it hidden until the Astro script binds it. The first time the sample enters view and explicit activation of Replay play the route. Replay is an animation control, so pressing Enter has the same effect as clicking.
3. Animate each packet from one end of its lane to the other. Use `cubic-bezier(0.77, 0, 0.175, 1)`, 600ms for movement and an offset of 60ms per row. Start on the retailer side for the purchase order and on the supplier side for the other rows. Animate transform and opacity. Cancel any in-flight run on an explicit restart and when reduced motion changes.
4. Keep route labels visible with or without JavaScript. When reduced motion is on, hide the replay button and leave the diagram complete.

## Conventions and boundaries

Use the existing inline Astro script pattern from `src/components/SiteHeader.astro` and the existing motion preference check in home.css. Keep other pages, document facts and connection links out of the replay logic. Use CSS and native browser APIs. Keep the animation finite and its width reads outside of animation frames.

## Verification

Build with `npm run build` and run `npm test`. At 1440px and 390px, observe the purchase order move in the opposite direction from the return documents. Replay twice and confirm the final geometry stays stable. Turn on reduced motion, then verify the sample remains readable and replay is absent. Press Enter on Replay and verify it plays the same directional sequence as a pointer click.
