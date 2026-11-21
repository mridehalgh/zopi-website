import { pricing } from './pricing';

const webUrl = (value: string | undefined) => {
  if (!value) return undefined;
  const url = new URL(value);
  if (url.protocol !== 'https:' || url.username || url.password || /(^|\.)example\.(com|net|org)$/.test(url.hostname) || url.hostname.endsWith('.example')) {
    throw new Error('Public destinations must use a real HTTPS URL.');
  }
  return url.href;
};

export const site = {
  origin: webUrl(import.meta.env.PUBLIC_SITE_URL?.trim() || 'https://zopi.co.uk/'),
  contactEmail: import.meta.env.PUBLIC_CONTACT_EMAIL?.trim() || 'start@zopi.co.uk',
  bookingUrl: webUrl(import.meta.env.PUBLIC_BOOKING_URL),
  trialUrl: webUrl(import.meta.env.PUBLIC_TRIAL_URL),
  signInUrl: webUrl(import.meta.env.PUBLIC_SIGN_IN_URL),
  docsUrl: webUrl(import.meta.env.PUBLIC_DOCS_URL),
  sandboxUrl: webUrl(import.meta.env.PUBLIC_SANDBOX_URL),
  ga4Id: import.meta.env.PUBLIC_GA4_ID,
};

if (site.contactEmail && !/^[^\s@?&#]+@[^\s@?&#]+\.[^\s@?&#]+$/.test(site.contactEmail)) {
  throw new Error('PUBLIC_CONTACT_EMAIL must be a valid email address.');
}
if (site.ga4Id && !/^G-[A-Z0-9]+$/.test(site.ga4Id)) {
  throw new Error('PUBLIC_GA4_ID must be a GA4 measurement ID.');
}

export const trialHref = site.trialUrl ?? '/contact?intent=trial';
export const trialLabel = site.trialUrl ? `Start your ${pricing.standard.trialDays}-day free trial` : 'Discuss your first connection';
export const demoHref = site.bookingUrl ?? '/contact?intent=demo';

