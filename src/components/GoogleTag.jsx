import { useEffect } from 'react';

const tagIds = [
  import.meta.env.VITE_GA_MEASUREMENT_ID,
  import.meta.env.VITE_GOOGLE_ADS_ID,
].filter(Boolean);

const GoogleTag = () => {
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
      window.gtag('config', id);
    });
  }, []);

  return null;
};

export default GoogleTag;
