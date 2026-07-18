export const pricing = {
  currency: 'GBP',
  locale: 'en-GB',
  vatIncluded: false,
  standard: {
    monthlyFee: 69.95,
    documentFee: 0.45,
    trialDays: 30,
    setupFee: 0,
    minimumTermMonths: 0,
  },
  estimator: {
    defaultDocuments: 60,
    maximumDocuments: 5000,
    step: 10,
  },
  switchingOffer: {
    freeDays: 60,
  },
  sandbox: {
    monthlyFee: 0,
  },
  enterprise: {
    priceLabel: 'Private pricing',
  },
} as const;

export const formatPrice = (value: number, minimumFractionDigits = 2) =>
  new Intl.NumberFormat(pricing.locale, {
    style: 'currency',
    currency: pricing.currency,
    minimumFractionDigits,
    maximumFractionDigits: 2,
  }).format(value);

export const pricingDisplay = {
  monthlyFee: formatPrice(pricing.standard.monthlyFee),
  documentFee: formatPrice(pricing.standard.documentFee),
  sandbox: 'Free',
  enterprise: pricing.enterprise.priceLabel,
} as const;
