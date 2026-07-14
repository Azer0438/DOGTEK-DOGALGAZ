import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const defaultGaMeasurementId = 'G-FW0E6Q908M';

const tagIds = [
  import.meta.env.VITE_GA_MEASUREMENT_ID || defaultGaMeasurementId,
  import.meta.env.VITE_GOOGLE_ADS_ID,
].filter(Boolean);

const GoogleTag = () => {
  const location = useLocation();

  useEffect(() => {
    if (!tagIds.length || typeof window === 'undefined') return;

    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function gtag() {
      window.dataLayer.push(arguments);
    };

    const existingScript = document.querySelector('script[data-google-tag="true"]');
    if (!existingScript) {
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${tagIds[0]}`;
      script.dataset.googleTag = 'true';
      document.head.appendChild(script);
    }

    window.gtag('js', new Date());
    tagIds.forEach((id) => {
      window.gtag('config', id, {
        send_page_view: false,
      });
    });
  }, []);

  useEffect(() => {
    if (!tagIds.length || typeof window === 'undefined' || typeof window.gtag !== 'function') return;

    const pagePath = `${location.pathname}${location.search}${location.hash}`;
    tagIds.forEach((id) => {
      window.gtag('event', 'page_view', {
        send_to: id,
        page_path: pagePath,
        page_location: window.location.href,
        page_title: document.title,
      });
    });
  }, [location.pathname, location.search, location.hash]);

  return null;
};

export default GoogleTag;
