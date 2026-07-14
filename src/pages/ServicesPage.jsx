import React from 'react';
import { Helmet } from 'react-helmet';
import Services from '@/components/Services';
import { siteConfig } from '@/lib/siteData';

const ServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>Doğalgaz Hizmetleri | Doğtek Doğalgaz Mühendislik</title>
        <meta
          name="description"
          content="Kayseri doğalgaz tesisatı, proje çizimi, kaçak kontrolü ve ısıtma sistemi çözümleri."
        />
        <link rel="canonical" href={`${siteConfig.domain}/services`} />
      </Helmet>
      <div className="pt-20">
        <Services />
      </div>
    </>
  );
};

export default ServicesPage;
