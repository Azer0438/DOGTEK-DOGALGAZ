import React from 'react';
import { Helmet } from 'react-helmet';
import About from '@/components/About';
import { siteConfig } from '@/lib/siteData';

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>Hakkımızda | Doğtek Doğalgaz Mühendislik</title>
        <meta
          name="description"
          content="Doğtek Doğalgaz Mühendislik, Kayseri'de doğalgaz tesisatı, proje çizimi ve ısıtma sistemlerinde güven odaklı hizmet verir."
        />
        <link rel="canonical" href={`${siteConfig.domain}/about`} />
      </Helmet>
      <div className="pt-20">
        <About />
      </div>
    </>
  );
};

export default AboutPage;
