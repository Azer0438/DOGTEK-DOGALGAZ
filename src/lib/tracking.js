export function trackEvent(eventName, params = {}) {
  if (typeof window === 'undefined') return;

  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  }

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: eventName,
    ...params,
  });
}

export function trackLeadClick(type, label, extra = {}) {
  trackEvent('lead_click', {
    lead_type: type,
    event_category: 'lead',
    event_label: label,
    ...extra,
  });
}
