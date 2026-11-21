# Marketing and activation tracking contract

Updated 2026-11-21. This defines the website event contract and pending product integration; it is not evidence that events reach a provider.

## Decisions and ownership

The goal is qualified suppliers reaching their first successful live document and becoming paying accounts. Website clicks explain intent; product and billing records establish outcomes. The website owner implements browser hooks; the product owner emits lifecycle events; the analytics owner chooses the destination, validates receipts and owns reporting. These are responsibilities to assign, not a verified team roster.

No analytics account, production property ID or cross-domain identifier has been supplied. The website implementation supports optional GA4 through `PUBLIC_GA4_ID` and explicit analytics consent. Leave the provider disabled until the owner supplies the approved property. Consent is required before loading analytics or sending a page view or action. Local hook execution alone does not establish delivery.

## Browser interface

The site calls the exported `track(name, properties)` helper in `src/lib/analytics.ts`. It forwards permitted events only when GA4 is configured and the visitor has explicitly consented. Do not add a second dispatcher or duplicate collection path.

```ts
track(eventName, properties);
// Controlled scalar fields only. Paths exclude query strings and fragments.
```

| Event | Trigger | Allowed properties | Use |
|---|---|---|---|
| `cta_clicked` | Explicit trial/demo/sandbox/contact action activation | `page_path`, `placement`, controlled `intent`, `destination` (local path, `email`, or `external`) | Identify page/placement intent; not a completed signup |
| `pricing_estimate_completed` | Committed user change, not initial render or every slider frame | `page_path`, `volume_band`, `estimated_total` | Learn evaluated volume bands; not revenue |
| `directory_searched` | Committed/debounced search, not each keypress | `page_path`, `directory`, `result_count` | Find coverage friction without transmitting free text |
| `directory_item_selected` | User selects a listed retailer/integration | `page_path`, `directory`, `item_slug` from the maintained inventory | Learn interest in known connections |
| `connection_requested` | User opens an email draft from the contact builder | `page_path`, `placement`, `destination` (`email_draft`) | Interest signal only; not delivered request or supported connection |

Search text and freeform contact content may include personal or commercially sensitive information. Do not include them in event payloads. Keep raw email, names, phone numbers, document contents, full URLs and authentication tokens out of analytics. Sanitised destination paths replace full URLs. Do not forward dynamic mailto content.

If a form is added, emit a separate `request_submitted` only after confirmed server acceptance. A mail link click, external redirect, fallback page view or booking button click does not prove receipt or booking. Avoid automatically reporting initial directory rendering as search intent.

## Product/billing interface, pending backend integration

| Event | Authoritative trigger | Required fields |
|---|---|---|
| `sign_up` | Account created successfully; GA4 recommended event | `event_id`, opaque `account_id`, `occurred_at`, `source`, `trial_type` |
| `demo_booked` | Booking provider confirms a real appointment | `event_id`, opaque lead reference, `occurred_at`, `source` |
| `trial_started` | Trial entitlement actually starts | `event_id`, `account_id`, `occurred_at`, `trial_end_at`, `trial_type` |
| `trading_partner_connected` | First partner completes required testing/live enablement | `event_id`, `account_id`, `occurred_at`, `environment`, controlled `partner_id` |
| `first_test_document_exchanged` | First successful sandbox/test business-document exchange | `event_id`, `account_id`, `occurred_at`, `environment`, controlled `document_type` |
| `first_live_document_exchanged` | First successful production business-document exchange | `event_id`, `account_id`, `occurred_at`, `environment`, controlled `document_type` |
| `paid_customer_started` | Paid service begins under billing policy | `event_id`, `account_id`, `occurred_at`, `plan_id`, `pricing_version`, `currency` |

Keep `event_id` stable on retries so ingestion deduplicates; deduplicate account milestones by account and milestone. Use UTC timestamps and distinguish sandbox from production. Subscription start is not recognised revenue: financial reporting must use the billing ledger. Do not send internal account identifiers to a public analytics provider until the approved data policy permits it; choose an opaque pseudonymous mapping.

The product must retain trial start/end dates because a 30-day trial and an eligible 60-day switching trial mature at different times. Define consent-compatible source capture and the website-to-product handoff before attempting account attribution. Unknown attribution stays unknown.

## Funnel and metric definitions

| Metric | Definition |
|---|---|
| Qualified trial accounts | Completed trial accounts confirmed to fit supported retailer/document/service scope; qualification source recorded |
| Website intent | Unique permitted sessions with a trial CTA action / eligible measured sessions in the same period; report tracking coverage |
| Trial-to-activation | Mature trial accounts with a successful production business document before their trial ends / mature trial accounts; sandbox activity excluded |
| Trial-to-paid | Mature trial accounts beginning a paid subscription by seven days after trial end / trial accounts whose seven-day follow-up has closed |
| Time to first live document | Elapsed time from actual trial start to first production success among activated accounts; report median, distribution and number of pending/unactivated accounts |
| Coverage friction | Directory searches with zero results / measured search events; not proof the connection is unsupported |
| Package economics | Contribution margin per account and volume segment using the approved direct-cost definition in the packaging worksheet |
| Acquisition cost | Fully loaded acquisition spend / new paying accounts over matching closed windows; identify attribution limitations |

Report trials still inside the relevant window as pending, not failed. Show raw counts alongside rates and segment standard versus switching trials. Compare equivalent closed windows. Aggregate broad volume bands in reports rather than pretending a calculator estimate is measured business usage. Do not set conversion targets or claim improvements without a clean baseline.

## Validation and operational checks

1. Inspect one event per explicit action on desktop, mobile and keyboard paths; verify no emission on initial calculator render and no duplicate handler execution.
2. Confirm controlled payloads contain no query strings, raw search input or personal information; vendor scripts respect the approved collection policy.
3. Inspect the receiving provider's debug/ingestion records. A console listener proves local dispatch only.
4. Trace one permitted synthetic account through trial start, first partner, production success and paid start; reconcile with authoritative app/billing records.
5. Replay the same backend `event_id` and verify a single outcome; keep development and sandbox events out of production reports.
6. Verify two trials with different end dates enter the correct mature cohort; verify pending accounts do not lower conversion rates prematurely.
7. Review weekly once a clean baseline exists. Watch missing lifecycle stages, duplicate rates, unknown source share and failed ingestion before making marketing decisions.

Supplied destinations: https://zopi.co.uk/ and start@zopi.co.uk. Outstanding: live product/scheduler destinations, approved GA4 property and production configuration, reviewed consent/data policy, backend event producers, attribution handoff, production receipts, baseline and targets. The website hooks do not implement the product/billing events. These require external account/product access; none should be marked complete by website-only work.
