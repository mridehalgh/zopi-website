---
name: EDI Spark
description: Retailer EDI in the visual language of a dispatch manifest.
colors:
  electric: "#4228d1"
  indigo-950: "#1d146c"
  indigo-900: "#291c91"
  indigo-700: "#3d2ac4"
  indigo-500: "#6b5ca3"
  on-indigo-muted: "#e6e1ff"
  mint: "#a4f5bc"
  mint-hover: "#86f0a7"
  mint-deep: "#1c5b38"
  danger: "#a12132"
  paper: "#f6f5ff"
  sheet: "#fffefd"
  rule: "#d9d4ef"
  docket: "#e5e0ff"
  ink: "#1c1634"
  muted: "#595170"
typography:
  display:
    fontFamily: "Source Sans 3, Segoe UI, sans-serif"
    fontSize: "clamp(3.05rem, 6.3vw, 6rem)"
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "-0.039em"
  headline:
    fontFamily: "Source Sans 3, Segoe UI, sans-serif"
    fontSize: "clamp(2.25rem, 4vw, 4.4rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Source Sans 3, Segoe UI, sans-serif"
    fontSize: "clamp(1.45rem, 2.4vw, 2.15rem)"
    fontWeight: 700
  body:
    fontFamily: "Source Sans 3, Segoe UI, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Source Sans 3, Segoe UI, sans-serif"
    fontSize: "1rem"
    fontWeight: 600
  action:
    fontFamily: "Source Sans 3, Segoe UI, sans-serif"
    fontSize: "1rem"
    fontWeight: 700
    lineHeight: 1.15
rounded:
  sm: "0.25rem"
  md: "0.5rem"
spacing:
  page-gutter: "clamp(1.125rem, 5.4vw, 6rem)"
  section-block: "clamp(3.5rem, 7.5vw, 7.75rem)"
  section-gap: "clamp(1.75rem, 5.5vw, 6rem)"
components:
  button-primary:
    backgroundColor: "{colors.mint}"
    textColor: "{colors.ink}"
    typography: "{typography.action}"
    rounded: "{rounded.sm}"
    padding: "0.75rem 1.2rem"
    height: "3.25rem"
  button-primary-hover:
    backgroundColor: "{colors.mint-hover}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.indigo-900}"
    typography: "{typography.action}"
    rounded: "{rounded.sm}"
    padding: "0.75rem 1.2rem"
    height: "3.25rem"
  button-light:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.indigo-950}"
    typography: "{typography.action}"
    rounded: "{rounded.sm}"
    padding: "0.75rem 1.2rem"
    height: "3.25rem"
  button-ink:
    backgroundColor: "{colors.indigo-950}"
    textColor: "{colors.sheet}"
    typography: "{typography.action}"
    rounded: "{rounded.sm}"
    padding: "0.75rem 1.2rem"
    height: "3.25rem"
  directory-field:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: "0.625rem 0.75rem"
    height: "2.875rem"
  navigation:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    height: "4.5rem"
  manifest:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
---

# Design System: EDI Spark

## Overview

**Creative North Star: "The Dispatch Manifest"**

The visual system borrows the clarity of shipping paperwork. Indigo and electric violet give the exchange a strong visual identity. Pale lilac, ruled columns and explicit labels make document flows, rates and catalogues easy to scan. Reading pages use a pale masthead and a section index.

**Key Characteristics:**

- Deep indigo mastheads and pale lilac reading surfaces
- Electric violet exchange headings and lilac tool strips
- Strong Source Sans 3 headings and readable prose
- Flat, ruled lists and document sheets with compact corners
- Luminous mint actions and exchange marks, with labelled green success states

## Colors

### Primary

- **Deep Indigo** anchors marketing mastheads, section headings and the footer.
- **Electric Violet** gives the exchange sheet a defining header. **Rich Indigo** supplies outline actions and their invert-on-hover state.
- **Link Violet** marks text links, control focus and the active navigation path. **Rule Violet** supports routing arrows and occasional structural lines.
- **Pale Lavender** carries secondary text on indigo and electric violet.

### Secondary

- **Action Mint** marks primary actions, selection and the point of exchange. Its brighter hover variant confirms pointer feedback.
- **Success Green** marks completed exchanges on light surfaces.

### Tertiary

- **Error Red** is available for error text.

### Neutral

- **Lilac Paper** is the default background. **Sheet** holds document rows, fields and the navigation bar.
- **Docket Lilac** groups table headers, calculator formulas and filter controls.
- **Paper Rule** separates adjacent records. **Ink** carries primary text and **Supporting Ink** carries explanatory and contextual text.

**The Signal Color Rule.** Use mint for action, selection and the exchange marker. Pair successful status color with a visible label.

## Typography

Use locally hosted Source Sans 3 for display, prose and controls. Keep the type scale compact on utility and reading pages and allow sales headlines to fill their available width. Use monospace for code examples.

- **Display** uses the shared fluid scale at weight 700. The homepage uses tightly set lines with tracking of −0.039em.
- **Headline and title** step down to clear section and component sizes. Use weight and spacing to establish ordering.
- **Body and controls** inherit 1rem type with 1.55 line height. Editorial articles step up to 1.125rem and use a constrained reading column.
- **Labels** use weight 600 for navigation and 700 for prominent actions, fields and statuses.

**The Numeral Alignment Rule.** Use tabular numerals for prices and comparable counts.

## Layout

Use the fluid page gutter and give adjacent content one consistent alignment line. Split marketing intros and enquiry layouts into unequal columns when supporting information earns its place. Group recurring records in a table or ruled list. Editorial sections pair a contents rail with a constrained text column.

At wide widths a solid electric-violet diagonal connects the homepage masthead and exchange sheet. The shared header opens into a labelled menu at 65rem and below. Route-specific grids adapt between 54rem and 44rem, bringing the main action or form into the natural mobile reading order. Stack compact data by record while keeping labels and their values associated. The footer stacks at 44rem and below.

## Elevation & Depth

Paper, sheet, lilac and indigo supply the layers. Keep sheets flat and use a full border or row rules to separate content. A global focus marker pairs a violet outline with a sheet-colored spacer to stay visible across pale and dark surfaces. Hover, selection and disclosures update immediately. A one-shot route line (450ms) indicates direction for visitors whose motion preference allows it.

## Shapes

Buttons and fields use tight corners (0.25rem). The exchange sheet has a compact 0.5rem corner. Many ruled panels and directory rows are rectangular. Use the spark wordmark intact. Simple line geometry connects the named exchange lanes through the central spark mark.

## Components

### Buttons

Use mint for the main next step and indigo for a local task such as preparing an email draft. Outline and sheet variants support alternate actions. Full buttons are at least 3.25rem tall and compact header actions are at least 2.75rem tall. Keep visible focus and hover feedback.

### Fields and filters

Use sheet fields with a supporting-ink border and nearby persistent labels. Directory bars group search and selects on docket lilac. Keep status text and recovery actions alongside filtered results.

### Navigation

Use the sheet header in document flow and a midnight footer. Underline the current header route and provide an explicit Menu control on small screens. Editorial pages use a short list of section links.

### Manifest and directories

Use a saturated header for the exchange manifest and lilac for directory headings and column labels. Give Supplier, EDI Spark and Retailer distinct positions in the exchange lane. On narrow screens display the direction in text. Use sheet rows, hairline rules, clear document names and visible status labels. Directory rows align comparable details and retain the enquiry action with each listing. Label sample exchanges and distinguish an enquiry listing from an established connection.

## Do's and Don'ts

- **Do** Put the primary action and strongest evidence early in the page.
- **Do** Keep pricing and example values identifiable and easy to compare.
- **Do** Use semantic headings, persistent labels, visible focus and readable contrast.
- **Don't** Imply a live retailer connection through an illustration or directory listing.
- **Don't** Use neon gradients, glass effects or decorative technology imagery.
- **Don't** Add visual ornament that competes with document names, prices and statuses.
