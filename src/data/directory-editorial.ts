export type DirectoryEditorial = {
  status: 'draft' | 'reviewed';
  description: string;
  summary: string;
  reviewedOn: string;
  guidance: { title: string; fact: string; source: { label: string; url: string } }[];
  checks: string[];
};

const reviewedOn = '2026-11-21';

export const directoryEditorial = {
  partners: {
    waitrose: {
      status: 'reviewed', reviewedOn,
      description: 'Plan a Waitrose EDI connection with the John Lewis Partnership supplier guidance for setup and invoices, plus questions for your assessment.',
      summary: 'Preparing to receive Waitrose orders or send invoices by EDI? Bring your supplier account and the messages you need to exchange. We’ll use the published Waitrose instructions to scope setup and testing.',
      guidance: [
        { title: 'New EDI connections', fact: 'The John Lewis Partnership supplier portal covers new Waitrose connections for orders alone or for orders and invoices. It says test files use the live route, so agree the procedure with Waitrose before sending test data.', source: { label: 'Waitrose EDI new connection', url: 'https://www.jlpsuppliers.com/supplier-finance-queries/new-connections/brand-new-set-up-connection-waitrose-edi' } },
        { title: 'Invoice submission', fact: 'The portal publishes separate instructions for submitting a Waitrose EDI invoice and points suppliers to Coupa as an alternative where applicable.', source: { label: 'Waitrose EDI invoice guidance', url: 'https://www.jlpsuppliers.com/supplier-finance-queries/invoice-entry/submit-an-invoice-waitrose-edi' } },
      ],
      checks: ['Confirm which Waitrose supplier account and invoicing route your contact assigned.', 'Ask which invoice references and test cases to use, who will approve the results, and how to handle invoices during testing.'],
    },
    tesco: {
      status: 'reviewed', reviewedOn,
      description: 'Prepare for a Tesco EDI assessment by identifying your Tesco supplier route, buying entity and transaction requirements.',
      summary: 'Start with the Tesco buying entity and supplier account on your paperwork. Once we know which part of Tesco you supply, we can work through the documents and tests for that account.',
      guidance: [
        { title: 'Choose the correct supplier route', fact: 'Tesco’s supplier page separates the UK product application from Ireland and Central Europe, clothing and operations. It also distinguishes marketplace selling from supplying Tesco directly.', source: { label: 'Tesco suppliers and sellers', url: 'https://www.tescoplc.com/contacts/suppliers-sellers' } },
        { title: 'Product data and barcodes', fact: 'Tesco’s supplier training for product induction asks suppliers for information including their supplier number and describes a barcode check. Ask your contact which product data process applies to your range.', source: { label: 'Tesco product data and induction training', url: 'https://digitalcontent.api.tesco.com/v2/media/email-mktg/3df8b175-8f70-4c01-ba78-ba40ad75592a/3_Supplier_Training_Guide-Product_Data_Management_and_myProduct_Induct_ENG.pdf' } },
      ],
      checks: ['Identify the buying entity and supplier account named in your own onboarding instructions.', 'Ask your Tesco contact for the current message guide, test cases and connection instructions for that account.', 'Confirm the document directions and whether your scope includes order responses, despatch advice, receiving advice or business acknowledgements. Check what links a shipment and invoice to the original order.'],
    },
    asda: {
      status: 'reviewed', reviewedOn,
      description: 'Check the difference between Asda’s resale, procurement and George supplier routes before preparing your EDI documents and test scope.',
      summary: 'Supplying Asda groceries, procurement or George? Start with the buying team and account on your paperwork. We’ll work through how orders arrive and what each delivery needs to report.',
      guidance: [
        { title: 'Product submission and purchasing teams', fact: 'Asda directs new food and general merchandise submissions to RangeMe. It provides separate routes for goods and services not for resale and for George clothing.', source: { label: 'Asda becoming a supplier', url: 'https://corporate.asda.com/becoming-a-supplier' } },
      ],
      checks: ['Have the buying team confirm your account and the operational contact for document exchange after product submission.', 'Ask whether the planned exchange covers warehouse deliveries, direct dispatch, or both, and request the applicable test scenarios.'],
    },
    'aldi-uk': {
      status: 'reviewed', reviewedOn,
      description: 'Prepare for an Aldi UK connection by checking your purchase documents, account scope and the transaction instructions for your range.',
      summary: 'Bring the Aldi UK purchase and operating documents for your range. We’ll use them to work out which order, delivery and invoice exchanges need to be reviewed for your account.',
      guidance: [
        { title: 'Supplier operating documents', fact: 'Aldi UK asks new suppliers to review its purchase terms and the accompanying documents covering day-to-day supply policies.', source: { label: 'Aldi UK becoming a supplier', url: 'https://www.aldi.co.uk/corporate/suppliers/becoming-a-supplier' } },
      ],
      checks: ['Identify the purchase agreement and supporting operating documents for your Aldi UK range.', 'Ask whether your product range or temperature class changes delivery references, timing or the documents to include in an exchange test.'],
    },
    'co-op': {
      status: 'reviewed', reviewedOn,
      description: 'Plan an EDI assessment for Co-op and identify whether your purchase orders follow its published Coupa route for goods or services not for resale.',
      summary: 'If your Co-op purchase orders arrive through Coupa, check the invoicing rules for your supplier agreement first. Bring a sample order so we can work through where the invoice should go.',
      guidance: [
        { title: 'Invoicing for goods or services not for resale', fact: 'Co-op instructs suppliers covered by this guidance to invoice through Coupa when the corresponding purchase order is in Coupa.', source: { label: 'Co-op purchase orders and invoicing', url: 'https://www.co-operative.coop/supplier-purchase-orders-and-invoicing' } },
      ],
      checks: ['Confirm whether your agreement covers products for resale or operational goods and services before applying the published Coupa instructions.', 'Check where your first purchase order will arrive and who can confirm the approved invoice channel for that order.'],
    },
    boots: {
      status: 'reviewed', reviewedOn,
      description: 'Prepare a Boots EDI assessment using its supplier account guidance for order and invoice capability, document standards and account selection.',
      summary: 'Setting up with Boots? Its supplier account form asks about order and invoice EDI separately. Bring your account details and a sample of each message so we can review the two directions.',
      guidance: [
        { title: 'Order and invoice readiness', fact: 'Boots asks suppliers whether they can exchange orders and invoices through EDI, and asks those with EDI capability for their document standard.', source: { label: 'Boots supplier account and EDI form', url: 'https://suppliers.boots-uk.com/supplier-account/' } },
      ],
      checks: ['Identify the Boots account named on your onboarding paperwork and confirm which order and invoice standards it expects.', 'Prepare separate order and invoice samples using redacted identifiers, and ask whether each direction needs a separate approval.'],
    },
  },
  integrations: {
    xero: {
      status: 'reviewed', reviewedOn,
      description: 'Scope a Xero EDI workflow around invoice and credit-note data, tax mapping and the accounting checks needed before a trial.',
      summary: 'Work out which retailer invoices and credits should reach Xero and which references finance needs to match them later. Bring a redacted invoice so we can work through tax, coding and approval.',
      guidance: [
        { title: 'Accounting transactions', fact: 'Xero’s Accounting API exposes transactions including invoices and credit notes. The vendor documentation describes the available accounting functionality.', source: { label: 'Xero Accounting API overview', url: 'https://developer.xero.com/documentation/api/accounting/overview/' } },
        { title: 'Invoice status and references', fact: 'Xero’s developer documentation shows reference data on an invoice and states that an invoice created through the API defaults to draft when the status is omitted.', source: { label: 'Xero invoice status guidance', url: 'https://developer.xero.com/documentation/best-practices/user-experience/invoice-status' } },
      ],
      checks: ['Choose the Xero organisation and decide whether incoming documents should create drafts for finance review.', 'Test a credit against an invoice with a retailer reference, then check how tax and account codes reconcile.', 'Decide whether invoices originate in Xero or arrive for review from another system. Agree which source owns the invoice number and how you’ll detect a duplicate.'],
    },
    shopify: {
      status: 'reviewed', reviewedOn,
      description: 'Plan a Shopify EDI workflow around order, inventory and fulfilment data, with checks for locations and split shipments.',
      summary: 'Bring one Shopify order from the store you want to connect. We’ll trace it through stock and fulfilment and check what the retailer needs to receive if the order ships in parts.',
      guidance: [
        { title: 'Orders, inventory and fulfilment', fact: 'Shopify documents how to query orders and inventory levels in its GraphQL Admin API and manage fulfilment using fulfilment order actions.', source: { label: 'Shopify fulfilment solutions', url: 'https://shopify.dev/docs/apps/build/orders-fulfillment/order-management-apps/build-fulfillment-solutions' } },
      ],
      checks: ['Identify which Shopify locations can fulfil the relevant orders and who owns stock updates for each location.', 'Use a split order as a test case and confirm how parcel references and quantities should be represented in the retailer’s despatch advice.'],
    },
    netsuite: {
      status: 'reviewed', reviewedOn,
      description: 'Scope a NetSuite EDI workflow around SuiteTalk sales orders, item mapping and test cases for your specific account.',
      summary: 'Bring a retailer purchase order and a sample NetSuite sales order. We’ll compare items, references and approvals so your team knows what has to carry through to fulfilment.',
      guidance: [
        { title: 'SuiteTalk sales order record', fact: 'Oracle documents a sales order record in NetSuite REST web services and gives examples of working with that resource.', source: { label: 'NetSuite sales order documentation', url: 'https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_159665260887.html' } },
      ],
      checks: ['Identify the target account and subsidiary, then match the retailer’s item identifiers to NetSuite item records.', 'List the custom fields and approval steps that a test sales order needs to satisfy before downstream processing.'],
    },
    'microsoft-business-central': {
      status: 'reviewed', reviewedOn,
      description: 'Plan a Business Central EDI assessment using Microsoft’s sales invoice docs and checks for company, environment and invoice lines.',
      summary: 'Choose the Business Central company you want to connect and bring a sample sales invoice. We’ll check which invoice lines and retailer references must survive the exchange.',
      guidance: [
        { title: 'Company-scoped invoice data', fact: 'Microsoft’s Business Central v2.0 API documents invoice retrieval within a company, with options to include invoice lines and the customer in the response.', source: { label: 'Microsoft Business Central sales invoices', url: 'https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/api-reference/v2.0/api/dynamics_salesinvoice_get' } },
      ],
      checks: ['Name the Business Central company and test environment, and note any extensions that change invoice fields.', 'Compare a sample invoice line and customer purchase-order reference with the retailer’s expected values.'],
    },
    quickbooks: {
      status: 'reviewed', reviewedOn,
      description: 'Plan a QuickBooks Online invoice workflow and prepare customer, item, VAT and duplicate checks for an EDI assessment.',
      summary: 'Using QuickBooks Online for retailer invoices? Bring a sample with your customer and item references so we can check the mapping, VAT and how a repeated import should behave.',
      guidance: [
        { title: 'QuickBooks Online invoices', fact: 'Intuit’s QuickBooks Online API describes its Invoice entity and requires at least one sales item or subtotal line.', source: { label: 'Intuit QuickBooks Online invoice reference', url: 'https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/invoice' } },
      ],
      checks: ['Confirm you are assessing QuickBooks Online, then identify the customer and item records that should match a retailer invoice.', 'Check VAT and rounding on a multi-line invoice and agree which reference prevents a duplicate import.'],
    },
    woocommerce: {
      status: 'reviewed', reviewedOn,
      description: 'Plan a WooCommerce EDI workflow using the vendor’s order and webhook docs, with checks for order status and duplicate events.',
      summary: 'Choose which WooCommerce order status means the order is ready to send. We’ll work through the handoff and test how a later edit or repeated event should be handled.',
      guidance: [
        { title: 'Order access', fact: 'WooCommerce describes order data access as part of its WordPress REST API integration.', source: { label: 'WooCommerce REST API documentation', url: 'https://developer.woocommerce.com/docs/apis/rest-api/' } },
        { title: 'Event notifications', fact: 'WooCommerce documents webhooks that notify another system when resources such as orders change.', source: { label: 'WooCommerce webhook guidance', url: 'https://developer.woocommerce.com/docs/best-practices/urls-and-routing/webhooks/' } },
      ],
      checks: ['Choose the order status that means an order is ready for fulfilment, including how payment or stock changes affect it.', 'Test a repeated event and a later order edit so a retry produces one intended exchange.'],
    },
  },
} satisfies Record<'partners' | 'integrations', Record<string, DirectoryEditorial>>;
