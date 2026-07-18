export const integrationCategories = [
  'ERP & operations',
  'Finance & payments',
  'Commerce',
  'Procurement',
  'Documents & storage',
  'Logistics',
  'CRM & service',
  'Data & automation',
] as const;

export type IntegrationCategory = (typeof integrationCategories)[number];

export interface Integration {
  name: string;
  category: IntegrationCategory;
  description: string;
  capabilities: string[];
  featured?: boolean;
}

export const integrations: Integration[] = [
  { name: 'Acumatica', category: 'ERP & operations', description: 'Move orders, stock and invoices between Acumatica and trading partners.', capabilities: ['Orders', 'Invoices', 'Inventory'] },
  { name: 'Cin7 Core', category: 'ERP & operations', description: 'Keep sales orders, purchasing and inventory aligned with EDI flows.', capabilities: ['Orders', 'Inventory', 'Dispatch'] },
  { name: 'Exact Online', category: 'ERP & operations', description: 'Connect order processing and finance records to your EDI exchange.', capabilities: ['Orders', 'Invoices'] },
  { name: 'Microsoft Business Central', category: 'ERP & operations', description: 'Exchange orders, invoices and stock updates with Business Central.', capabilities: ['Orders', 'Invoices', 'Inventory'], featured: true },
  { name: 'Microsoft Dynamics 365 F&O', category: 'ERP & operations', description: 'Connect enterprise finance and operations processes to retailer EDI.', capabilities: ['Orders', 'Invoices', 'Dispatch'], featured: true },
  { name: 'NetSuite', category: 'ERP & operations', description: 'Automate order-to-cash documents without maintaining point integrations.', capabilities: ['Orders', 'Invoices', 'Inventory'], featured: true },
  { name: 'Odoo', category: 'ERP & operations', description: 'Synchronise sales, purchasing, inventory and invoices with EDI partners.', capabilities: ['Orders', 'Invoices', 'Inventory'] },
  { name: 'Oracle Fusion Cloud', category: 'ERP & operations', description: 'Route business documents into Oracle finance and supply-chain workflows.', capabilities: ['Orders', 'Invoices', 'Procurement'] },
  { name: 'Sage 200', category: 'ERP & operations', description: 'Bring retailer orders and invoice updates into Sage 200.', capabilities: ['Orders', 'Invoices'] },
  { name: 'Sage Intacct', category: 'ERP & operations', description: 'Keep invoice and payment data consistent across EDI and finance.', capabilities: ['Invoices', 'Payments'] },
  { name: 'SAP Business One', category: 'ERP & operations', description: 'Connect purchasing, sales and inventory documents for growing operations.', capabilities: ['Orders', 'Invoices', 'Inventory'] },
  { name: 'SAP S/4HANA Cloud', category: 'ERP & operations', description: 'Exchange high-volume business documents with SAP S/4HANA Cloud.', capabilities: ['Orders', 'Invoices', 'Dispatch'], featured: true },

  { name: 'Adyen', category: 'Finance & payments', description: 'Reconcile payment events with invoices and order records.', capabilities: ['Payments', 'Invoices'] },
  { name: 'Avalara', category: 'Finance & payments', description: 'Apply tax calculation and compliance data to commerce documents.', capabilities: ['Tax', 'Invoices'] },
  { name: 'Bill', category: 'Finance & payments', description: 'Connect supplier bills, approvals and payment status to document flows.', capabilities: ['Invoices', 'Payments', 'Approvals'] },
  { name: 'Braintree', category: 'Finance & payments', description: 'Match payment events with commerce orders and invoices.', capabilities: ['Payments', 'Orders'] },
  { name: 'FreeAgent', category: 'Finance & payments', description: 'Send invoice and payment information into small-business accounts.', capabilities: ['Invoices', 'Payments'] },
  { name: 'Pennylane', category: 'Finance & payments', description: 'Synchronise supplier invoices and accounting records.', capabilities: ['Invoices', 'Files'] },
  { name: 'PayPal', category: 'Finance & payments', description: 'Link payment activity to orders, invoices and fulfilment events.', capabilities: ['Payments', 'Orders'] },
  { name: 'QuickBooks', category: 'Finance & payments', description: 'Create invoices and keep customer and payment records aligned.', capabilities: ['Invoices', 'Payments'], featured: true },
  { name: 'Stripe', category: 'Finance & payments', description: 'Connect payments and billing events with order-to-cash workflows.', capabilities: ['Payments', 'Invoices'], featured: true },
  { name: 'Wise', category: 'Finance & payments', description: 'Reconcile international business payments against invoice records.', capabilities: ['Payments', 'Invoices'] },
  { name: 'Xero', category: 'Finance & payments', description: 'Synchronise invoices, contacts and payments with your EDI documents.', capabilities: ['Invoices', 'Payments'], featured: true },
  { name: 'Zoho Books', category: 'Finance & payments', description: 'Connect sales, invoices and payments to customer document flows.', capabilities: ['Invoices', 'Payments'] },

  { name: 'Adobe Commerce', category: 'Commerce', description: 'Turn commerce orders into validated documents for fulfilment and finance.', capabilities: ['Orders', 'Inventory', 'Dispatch'] },
  { name: 'Amazon Selling Partner', category: 'Commerce', description: 'Exchange marketplace orders, inventory and fulfilment updates.', capabilities: ['Orders', 'Inventory', 'Dispatch'], featured: true },
  { name: 'BigCommerce', category: 'Commerce', description: 'Connect storefront orders and inventory with operational systems.', capabilities: ['Orders', 'Inventory'] },
  { name: 'Commercetools', category: 'Commerce', description: 'Compose document workflows around headless commerce events.', capabilities: ['Orders', 'Inventory', 'Webhooks'] },
  { name: 'eBay', category: 'Commerce', description: 'Bring marketplace orders and shipping updates into one exchange.', capabilities: ['Orders', 'Dispatch'] },
  { name: 'Lightspeed Retail', category: 'Commerce', description: 'Synchronise retail sales and stock with back-office systems.', capabilities: ['Orders', 'Inventory'] },
  { name: 'Sellercloud', category: 'Commerce', description: 'Coordinate multichannel orders, inventory and fulfilment documents.', capabilities: ['Orders', 'Inventory', 'Dispatch'] },
  { name: 'Shopify', category: 'Commerce', description: 'Connect orders, inventory and fulfilment across channels and partners.', capabilities: ['Orders', 'Inventory', 'Dispatch'], featured: true },
  { name: 'Shopware', category: 'Commerce', description: 'Transform storefront activity into reliable operational documents.', capabilities: ['Orders', 'Inventory'] },
  { name: 'VTEX', category: 'Commerce', description: 'Route enterprise commerce orders and fulfilment events through EDI Spark.', capabilities: ['Orders', 'Inventory', 'Dispatch'] },
  { name: 'Walmart Marketplace', category: 'Commerce', description: 'Exchange marketplace orders, inventory and shipment notices.', capabilities: ['Orders', 'Inventory', 'Dispatch'], featured: true },
  { name: 'WooCommerce', category: 'Commerce', description: 'Move web orders into accounting, warehouse and partner workflows.', capabilities: ['Orders', 'Inventory'] },

  { name: 'Coupa', category: 'Procurement', description: 'Connect purchase orders, invoices and supplier transactions.', capabilities: ['Procurement', 'Orders', 'Invoices'], featured: true },
  { name: 'Ironclad', category: 'Procurement', description: 'Connect approved contracts to supplier and purchasing workflows.', capabilities: ['Contracts', 'Approvals'] },
  { name: 'Ramp', category: 'Procurement', description: 'Link purchasing, expenses and approvals with supplier documents.', capabilities: ['Procurement', 'Approvals'] },
  { name: 'SAP Ariba', category: 'Procurement', description: 'Exchange sourcing, purchase-order and invoice documents with suppliers.', capabilities: ['Procurement', 'Orders', 'Invoices'], featured: true },
  { name: 'SAP Concur', category: 'Procurement', description: 'Route expense and invoice records into finance workflows.', capabilities: ['Invoices', 'Approvals'] },
  { name: 'SAP Fieldglass', category: 'Procurement', description: 'Connect external workforce and service-procurement transactions.', capabilities: ['Procurement', 'Invoices'] },

  { name: 'Azure Blob Storage', category: 'Documents & storage', description: 'Read and write business documents from secure object storage.', capabilities: ['Files', 'Archive', 'Automation'] },
  { name: 'Box', category: 'Documents & storage', description: 'Move approved business documents into EDI processing and archive results.', capabilities: ['Files', 'Archive'] },
  { name: 'DocuSign', category: 'Documents & storage', description: 'Connect signed agreements to order, supplier and compliance workflows.', capabilities: ['Contracts', 'Approvals'] },
  { name: 'DocuWare', category: 'Documents & storage', description: 'Process and archive invoices, orders and supporting documents.', capabilities: ['Files', 'Invoices', 'Archive'] },
  { name: 'Dropbox', category: 'Documents & storage', description: 'Pick up and deliver business files through managed folders.', capabilities: ['Files', 'Automation'] },
  { name: 'Egnyte', category: 'Documents & storage', description: 'Exchange controlled business documents with governed storage.', capabilities: ['Files', 'Archive'] },
  { name: 'Google Cloud Storage', category: 'Documents & storage', description: 'Trigger document processing from cloud buckets at scale.', capabilities: ['Files', 'Automation'] },
  { name: 'Google Drive', category: 'Documents & storage', description: 'Turn shared files into structured, tracked document workflows.', capabilities: ['Files', 'Automation'], featured: true },
  { name: 'OneDrive for Business', category: 'Documents & storage', description: 'Connect Microsoft 365 files to validation and exchange workflows.', capabilities: ['Files', 'Archive'] },
  { name: 'SharePoint Online', category: 'Documents & storage', description: 'Move controlled documents between SharePoint and business partners.', capabilities: ['Files', 'Approvals', 'Archive'], featured: true },

  { name: 'EasyPost', category: 'Logistics', description: 'Connect label, tracking and delivery events to order workflows.', capabilities: ['Dispatch', 'Tracking'] },
  { name: 'Gebrüder Weiss', category: 'Logistics', description: 'Exchange shipment and transport data with logistics operations.', capabilities: ['Dispatch', 'Tracking'] },
  { name: 'IDS Fulfillment', category: 'Logistics', description: 'Send orders to fulfilment and receive inventory and dispatch updates.', capabilities: ['Orders', 'Inventory', 'Dispatch'] },
  { name: 'ShipBob', category: 'Logistics', description: 'Coordinate fulfilment orders, stock and shipment events.', capabilities: ['Orders', 'Inventory', 'Dispatch'], featured: true },
  { name: 'Shippo', category: 'Logistics', description: 'Add shipping labels, tracking and carrier events to document flows.', capabilities: ['Dispatch', 'Tracking'] },
  { name: 'ShipStation', category: 'Logistics', description: 'Turn orders into shipments and return dispatch status automatically.', capabilities: ['Orders', 'Dispatch', 'Tracking'], featured: true },
  { name: 'Starshipit', category: 'Logistics', description: 'Automate multicarrier fulfilment and delivery updates.', capabilities: ['Dispatch', 'Tracking'] },

  { name: 'Freshdesk', category: 'CRM & service', description: 'Create service workflows for document exceptions and partner queries.', capabilities: ['Exceptions', 'Customers'] },
  { name: 'HubSpot', category: 'CRM & service', description: 'Keep companies, orders and commercial activity connected.', capabilities: ['Customers', 'Orders'], featured: true },
  { name: 'Pipedrive', category: 'CRM & service', description: 'Move won deals into fulfilment and customer document workflows.', capabilities: ['Customers', 'Orders'] },
  { name: 'Salesforce', category: 'CRM & service', description: 'Connect accounts, opportunities and orders to EDI operations.', capabilities: ['Customers', 'Orders'], featured: true },
  { name: 'ServiceNow', category: 'CRM & service', description: 'Route integration incidents and document exceptions to service teams.', capabilities: ['Exceptions', 'Automation'] },
  { name: 'Zendesk', category: 'CRM & service', description: 'Turn failed documents and partner queries into trackable support work.', capabilities: ['Exceptions', 'Customers'] },

  { name: 'Airtable', category: 'Data & automation', description: 'Use structured tables to stage, review or enrich business records.', capabilities: ['Data', 'Automation'] },
  { name: 'Databricks', category: 'Data & automation', description: 'Bring document and transaction data into governed analytics workflows.', capabilities: ['Data', 'Analytics'] },
  { name: 'Google BigQuery', category: 'Data & automation', description: 'Analyse document volumes, outcomes and partner performance.', capabilities: ['Data', 'Analytics'] },
  { name: 'Google Sheets', category: 'Data & automation', description: 'Use familiar spreadsheets for lightweight imports, exports and review.', capabilities: ['Data', 'Files'] },
  { name: 'Make', category: 'Data & automation', description: 'Compose low-code workflows around EDI Spark events and APIs.', capabilities: ['Automation', 'Webhooks'] },
  { name: 'Microsoft Excel', category: 'Data & automation', description: 'Import and export structured business data without manual rekeying.', capabilities: ['Data', 'Files'] },
  { name: 'Microsoft Power BI', category: 'Data & automation', description: 'Report on document traffic, exceptions and operational performance.', capabilities: ['Analytics', 'Data'] },
  { name: 'n8n', category: 'Data & automation', description: 'Build self-hosted automations around documents, events and approvals.', capabilities: ['Automation', 'Webhooks'] },
  { name: 'Pipedream', category: 'Data & automation', description: 'Connect custom API workflows to document and partner events.', capabilities: ['Automation', 'Webhooks', 'API'] },
  { name: 'Snowflake', category: 'Data & automation', description: 'Centralise exchange data for governed reporting and analysis.', capabilities: ['Data', 'Analytics'], featured: true },
  { name: 'Tableau', category: 'Data & automation', description: 'Visualise transaction health, exceptions and partner performance.', capabilities: ['Analytics', 'Data'] },
  { name: 'Workato', category: 'Data & automation', description: 'Orchestrate enterprise workflows across EDI and business applications.', capabilities: ['Automation', 'API'], featured: true },
  { name: 'Zapier', category: 'Data & automation', description: 'Trigger straightforward actions from document and workflow events.', capabilities: ['Automation', 'Webhooks'] },
];

export const featuredIntegrations = integrations.filter((integration) => integration.featured);
