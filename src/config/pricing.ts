export const pricing = {
  currency: 'GBP',
  locale: 'en-GB',
  vatIncluded: false,
  standard: {
    monthlyFee: 49.50,
    documentFee: 0.45,
    trialDays: 30,
    setupFee: 0,
    minimumTermMonths: 0,
  },
  estimator: {
    defaultDocuments: 100,
    maximumDocuments: 5000,
    step: 1,
  },
  switchingOffer: {
    freeDays: 60,
  },
  sandbox: {
    monthlyFee: 0,
  },
  enterprise: {
    priceLabel: 'Tailored pricing',
  },
} as const;

export const estimateMonthlyCost = (documents: number) => {
  if (!Number.isSafeInteger(documents) || documents < 0) {
    throw new RangeError('Enter a non-negative whole number of documents.');
  }
  const totalPence = Math.round(pricing.standard.monthlyFee * 100) + Math.round(pricing.standard.documentFee * 100) * documents;
  if (!Number.isSafeInteger(totalPence)) throw new RangeError('Volume is too large to estimate.');
  return totalPence / 100;
};

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
