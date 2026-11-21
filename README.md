# EDI Spark website

Static Astro marketing site for suppliers evaluating retailer EDI, with dedicated enterprise and developer journeys.

## Run and check

Use Node **22.23.4 or newer** (the installed Astro version requires it).

```sh
npm install
npm run dev
npm run build
npm test
```

`npm test` checks the built `dist/` output, including pricing arithmetic and invalid volumes, internal destinations, canonical URLs, sitemap coverage, JSON-LD, headings and landmarks. Rebuild before running it after changes. It is a functional check, not a claim of accessibility conformance or production readiness.

## Production configuration

The owner supplied `https://zopi.co.uk/` and `start@zopi.co.uk`; these are the defaults. Copy `.env.example` to `.env` to override them or configure optional services, then rebuild.

- `PUBLIC_SITE_URL`: production HTTPS origin, with no path.
- `PUBLIC_CONTACT_EMAIL`: enquiry recipient. Contact drafts open in the visitor’s email application; the site does not submit to a form backend or confirm delivery.
- `PUBLIC_BOOKING_URL`: verified demo scheduling destination.
- `PUBLIC_TRIAL_URL`: verified live trial signup. Configuring it enables trial CTAs; confirm the advertised trial terms first.
- `PUBLIC_SIGN_IN_URL`, `PUBLIC_DOCS_URL`, `PUBLIC_SANDBOX_URL`: verified product access destinations. Unconfigured access routes use enquiries or remain hidden.
- `PUBLIC_GA4_ID`: optional Google Analytics property. With no ID there is no analytics loader, collection or consent storage. With an ID, analytics loads only after explicit opt-in. Configure the property to avoid automatic form/outbound event collection; only the documented controlled events are intended here. Provider receipt and product attribution still require validation.

The sitemap and robots file use the same production origin. Social previews use the supplied `public/social-preview.svg` source and its 1200 × 630 PNG export.

## What is implemented

Supplier homepage, standard price calculator and worked examples; enterprise and developer evaluation pages; trading-partner and software enquiry directories; EDI cost and onboarding guides; contact, security/service questions, website privacy and service information; shared navigation/footer and optional consent-gated analytics.

Directory listings require assessment. Their optional evidence fields are intentionally unfilled until actual connectivity is verified. Workspace and mapping examples are labelled illustrations. Standard rates remain £49.50/month + £0.45/document, excluding VAT; this site update does not change billing or launch new tariffs.

## Launch and research handoff

- [Launch gates and 90-day sequence](docs/marketing/launch-checklist.md)
- [Competitor evidence and package research](docs/marketing/research-and-packaging.md)
- [Website and product tracking contract](docs/marketing/tracking-plan.md)

Still required before claiming full live-service readiness: verified product/trial destinations, operational connection evidence, actual product walkthrough, approved detailed commercial/data policies and company particulars. The website privacy/service information pages describe this implementation and evaluation scope; they do not replace a service agreement or data-processing agreement.

Retailer-specific operational guides, new package prices, customer interviews, outreach, paid campaigns and backend lifecycle integrations have not been fabricated or executed by the website build.
