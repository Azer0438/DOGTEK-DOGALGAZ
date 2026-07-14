import React from 'react';
import { Helmet } from 'react-helmet';
import Contact from '@/components/Contact';
import { siteConfig } from '@/lib/siteData';

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>İletişim | Doğtek Doğalgaz Mühendislik</title>
        <meta
          name="description"
          content="Doğtek Doğalgaz Mühendislik iletişim bilgileri: +90 536 644 96 42, destek@dogtekdogalgazmuhendislik.com, Kılıçarslan Mahallesi Molla Sokak No:7/A, Kayseri."
        />
        <link rel="canonical" href={`${siteConfig.domain}/contact`} />
      </Helmet>
      <div className="pt-20">
        <Contact />
      </div>
    </>
  );
};

export default ContactPage;
