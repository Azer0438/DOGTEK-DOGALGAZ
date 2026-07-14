import React from 'react';
import { Helmet } from 'react-helmet';
import HeroSection from '@/components/HeroSection';
import Projects from '@/components/Projects';
import WorkGallery from '@/components/WorkGallery';
import About from '@/components/About';
import Contact from '@/components/Contact';
import { getAbsoluteUrl, siteConfig } from '@/lib/siteData';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Doğtek Doğalgaz Mühendislik | Kayseri Doğalgaz Tesisatı ve Proje</title>
        <meta
          name="description"
          content="Kayseri'de doğalgaz tesisatı, Aksagaz proje çizimi, kaçak kontrolü, petek temizliği ve ısıtma sistemi çözümleri için Doğtek Doğalgaz Mühendislik."
        />
        <link rel="canonical" href={siteConfig.domain} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Doğtek Doğalgaz Mühendislik | Kayseri Doğalgaz Tesisatı ve Proje" />
        <meta
          property="og:description"
          content="Kayseri'de doğalgaz tesisatı, Aksagaz proje çizimi, kaçak kontrolü, petek temizliği ve ısıtma sistemi çözümleri."
        />
        <meta property="og:url" content={siteConfig.domain} />
        <meta property="og:image" content={getAbsoluteUrl(siteConfig.image)} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <div>
        <HeroSection />
        <Projects />
        <WorkGallery />
        <About />
        <Contact />
      </div>
    </>
  );
};

export default Home;
