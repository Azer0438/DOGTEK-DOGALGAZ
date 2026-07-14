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
  const payload = {
    lead_type: type,
    event_category: 'lead',
    event_label: label,
    ...extra,
  };

  trackEvent('lead_click', {
    ...payload,
  });

  const adsId = import.meta.env.VITE_GOOGLE_ADS_ID;
  const conversionLabel =
    type === 'phone'
      ? import.meta.env.VITE_GOOGLE_ADS_PHONE_CONVERSION_LABEL
      : import.meta.env.VITE_GOOGLE_ADS_WHATSAPP_CONVERSION_LABEL;

  if (adsId && conversionLabel && typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'conversion', {
      send_to: `${adsId}/${conversionLabel}`,
      ...payload,
    });
  }
}
