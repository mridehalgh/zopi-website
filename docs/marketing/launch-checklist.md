# Launch readiness and 90-day improvement plan

Updated 2026-11-21. This is an implementation handoff. Website source changes do not establish production readiness, working backend destinations, operational coverage or analytics delivery.

## Release gates

| Gate | Evidence required | Readiness at handoff |
|---|---|---|
| Real commercial destinations | Approved HTTPS trial, booking, login and sandbox URLs; complete each destination through success/error states | Owner supplied start@zopi.co.uk; static email-draft enquiry implemented. Live trial, booking, login, docs and sandbox destinations not supplied; enquiry is not a completed trial funnel |
| Canonical domain | Approved production origin; deployed canonical links, robots and sitemap checked on that origin | Owner supplied https://zopi.co.uk/; canonical, sitemap and robots implemented; verify on deployed origin |
| Legal/company information | Owner-approved company identity, privacy notice, terms and billing/cancellation policy with working destinations | Approval/evidence outstanding; do not publish draft legal assurances |
| Commercial terms | Written trial start/end, included usage, card policy, cancellation, switching eligibility and migration scope | Existing prices visible; detailed billing rules unverified |
| Coverage | Per-retailer and per-integration evidence described below | Product brief assertions and directory entries alone are insufficient |
| Product/developer proof | Runnable sandbox example, matching endpoint/schema/version and docs links | Backend operation and SDK examples not independently verified |
| Accessibility/functionality | Keyboard/mobile review, visible focus, reduced motion, estimator boundaries and meaningful no-JavaScript content | Complete against final site build; do not infer from design intent |
| Analytics | Approved provider/destination and privacy configuration; event receipts plus completed account lifecycle joins | Event hooks alone do not deliver analytics; provider and product lifecycle integration outstanding |

Site changes may ship to review while gates remain open. Do not buy traffic or announce general availability until commercial destinations, claims and required customer-facing policies pass their gates.

## Claims register and proof needed

| Claim | Evidence required before publication | Safe interim treatment |
|---|---|---|
| “Every major UK retailer” / “connect to any retailer” | Named coverage inventory, supported documents/protocols, successful conformance/test records, last review and delivery owner | Name only evidenced coverage; offer a connection assessment |
| “300+ integrations” | Counted unique integrations with maintained scope, authentication, supported actions and tested status | Distinguish available connectors, configurable connections and planned work; do not imply all are turnkey |
| Retailer logos | Right to use assets and a factual connection relationship | Label as retailer coverage, never customers/endorsements without evidence |
| “Live” / “ready to connect” | Environment-specific successful exchange, supported documents and current onboarding prerequisites | Use reviewed status labels or request confirmation |
| “Start today” / “in 30 days or less” | Dated completed onboarding sample, clock definition and conditions outside provider control | Describe steps and confirm a timeline after assessment |
| “Unlimited support” | Written channel/hours/scope policy and capacity to deliver | State verified support availability only |
| “No setup fee” | Commercial policy defining included setup, mapping, testing and exclusions | Qualify to standard service; disclose separately scoped work |
| “60 days free” / “switch for free” | Eligibility, start date, included fees/usage/labour, overlap with standard trial and cancellation terms | Ask for a switching assessment without promising unapproved work |
| Uptime, security, residency, certification or SLA | Operational records, architecture/vendor agreements or valid certificates matching the legal service entity | Link factual technical information; omit unsupported badges/percentages |
| Savings or customer results | Customer permission, baseline, denominator, time period and auditable calculation | Demonstrate product behavior; do not invent testimonials or results |
| API/SDK/MCP capability | Working documented endpoints, released package/version and repeatable example | Explicitly label illustrative examples; avoid suggesting fictional SDKs are downloadable |

Keep a named owner, source link/record, approval date and next review date for each approved claim. Unknown or planned status is preferable to a checkmark with no evidence.

## 90-day sequence

Owners below are roles to assign, not existing team members or commitments. Spending and outbound communications remain unapproved until the owner supplies a budget and authorises execution.

| When | Work and owner | Acceptance evidence |
|---|---|---|
| Days 1–14 | Website owner: finish supplier-first copy, consistent pricing, meaningful estimator, honest coverage states and next-step paths. Commercial/product owner: close release gates and approve inclusions. | Final build and browser checks; production destination receipts; signed-off claims/terms; supplier can explain the offer and estimate their bill |
| Days 1–14 | Analytics/product owner: approve event contract and destination, wire permitted collection and backend lifecycle events. | One traced synthetic journey from site action to completed trial and product milestones, with duplicate and personal-data checks |
| Days 15–30 | Founder/research owner: conduct eight interviews from research protocol and fill cost scenarios. | Anonymised notes, segment objections, real effort/cost data and a dated package decision; no price rollout without approval |
| Days 15–30 | Product/support owner: capture a truthful product walkthrough and onboarding checklist. | Real order → response/despatch → invoice example, explicit provider/customer responsibilities, recoverable error demonstration |
| Days 31–60 | Content owner: publish one UK EDI cost guide and retailer/integration pages only where unique evidence exists. | Accurate worked examples, maintained sources, useful document requirements and a relevant next step; avoid thin directory multiplication |
| Days 31–60 | Founder/commercial owner: prepare retailer/ERP implementer referral materials and assess potential partners. | Reviewed one-page offer and shortlist with fit/reason; outreach separately authorised and logged |
| Days 61–90 | Marketing/product owners: assess mature trial cohorts, objections and activation bottlenecks; change the highest-friction step. | Cohort report with pending trials separated; first-live-document rate and time; follow-up comprehension interviews |
| Days 61–90 | Commercial owner: pilot approved volume packaging on eligible new accounts only; document existing-customer treatment. | Approved prices/margins/terms, effective date, comparable cohorts and rollback criteria; otherwise keep existing pricing |

## Acquisition defaults

Prioritise high-intent retailer requirements, integration questions and EDI cost/switching guidance before broad awareness campaigns. Publish a concise migration explanation covering validation, parallel testing, cutover and ownership only to the extent the service actually provides them. Named comparisons require refreshed primary sources and honest fit criteria.

Use founder-led conversations and partner preparation to learn language and buying triggers. A contact list is not permission to send messages. Paid campaigns, partner outreach, public launch announcements, CRM changes and production analytics configuration have not been executed here.

Set numeric targets after the first clean baseline: qualified trials, first successful live documents, paid conversions and contribution margin. Do not invent uplift forecasts. At low traffic, use recorded interviews and sequential releases; do not split a tiny sample into an underpowered A/B test.

## Local implementation verification — 21 November 2026

- Production defaults set from the owner’s replies: https://zopi.co.uk/ and start@zopi.co.uk. This does not establish DNS, deployment or inbox delivery.
- Built all 13 pages with Node 26.13.1. The repeatable `npm test` check passes pricing arithmetic, invalid/large volumes, public-origin rejection, 978 internal links, headings/landmarks, canonical URLs, sitemap membership and JSON-LD parsing.
- Headless Chromium checked all 13 routes at 1440, 1024 and 390 pixels: no horizontal overflow or JavaScript exceptions. Verified calculator presets/zero/invalid/10,000 documents, directory search/no-results, special-character contact prefilling, mobile menu/Escape and keyboard focus restoration.
- No-JavaScript mobile navigation and static price examples were checked. Reviewed desktop homepage, mobile homepage, pricing and enterprise screenshots; pricing CTA remains in the 1440 × 1000 viewport.
- A separate GA4-configured build passed opt-in, decline, withdrawal, single-loader/page-view, committed-estimate and controlled-CTA payload checks. Query strings and email addresses were excluded. Google requests were blocked deliberately; no property receipt or backend lifecycle integration is claimed.
- Contact action prepares an email draft. A delivered enquiry, booked appointment, completed signup, live document exchange or paid conversion was not performed.
- Retailer-specific guides, real product walkthrough, operational evidence, new tariff approval, interviews, outreach and deployment remain gated by the evidence and external work above.
