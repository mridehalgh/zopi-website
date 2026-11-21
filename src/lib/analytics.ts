type Properties = Record<string, string | number>;
declare global {
  interface Window { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void }
}
let enabled = false;

export function track(eventName: string, properties: Properties = {}) {
  if (enabled) window.gtag?.('event', eventName, { page_path: window.location.pathname, ...properties });
}

export function initAnalytics() {
  const consent = document.querySelector<HTMLElement>('[data-analytics-consent]');
  const id = consent?.dataset.ga4Id;
  if (!consent || !id) return;
  let choice: string | null = null;
  try { choice = localStorage.getItem('edispark:analytics'); } catch { /* Consent stays session-only if storage is unavailable. */ }
  const activate = () => {
    if (enabled) return;
    enabled = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer!.push(arguments); };
    window.gtag('js', new Date());
    // Query strings can contain contact context; only send the canonical path.
    window.gtag('config', id, { send_page_view: false, page_location: `${location.origin}${location.pathname}`, page_referrer: document.referrer ? new URL(document.referrer).origin : '' });
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`;
    document.head.append(script);
    track('page_view');
  };
  if (choice === 'accepted') activate();
  consent.hidden = choice === 'accepted' || choice === 'declined';
  consent.querySelectorAll<HTMLButtonElement>('[data-consent]').forEach((button) => {
    button.addEventListener('click', () => {
      const accepted = button.dataset.consent === 'accepted';
      try { localStorage.setItem('edispark:analytics', accepted ? 'accepted' : 'declined'); } catch { /* Session choice still applies. */ }
      consent.hidden = true;
      if (accepted) activate();
      else if (enabled) location.reload();
      document.querySelector<HTMLButtonElement>('[data-analytics-settings]')?.focus();
    });
  });
  document.querySelector('[data-analytics-settings]')?.addEventListener('click', () => {
    consent.hidden = false;
    consent.querySelector<HTMLButtonElement>('button')?.focus();
  });
  document.addEventListener('click', (event) => {
    const link = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>('a[href]') : null;
    if (!link) return;
    const destination = new URL(link.href);
    const namedEvent = link.dataset.analyticsEvent;
    if (namedEvent === 'directory_item_selected') {
      track(namedEvent, { directory: link.dataset.directory || '', item_slug: link.dataset.itemSlug || '' });
    }
    if (destination.pathname === '/contact' || link.dataset.cta !== undefined) {
      const requestedIntent = link.dataset.cta || destination.searchParams.get('intent') || 'contact';
      const intent = ['trial', 'demo', 'enterprise', 'developer', 'technical', 'connection', 'switching', 'documentation', 'contact'].includes(requestedIntent) ? requestedIntent : 'contact';
      track('cta_clicked', { intent, destination: destination.protocol === 'mailto:' ? 'email' : destination.origin === location.origin ? destination.pathname : 'external', placement: link.closest('header') ? 'header' : link.closest('footer') ? 'footer' : 'body' });
    }
  });
}
