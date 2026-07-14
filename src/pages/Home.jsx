import React from 'react';
import { Helmet } from 'react-helmet';
import HeroSection from '@/components/HeroSection';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Contact from '@/components/Contact';
import { siteConfig } from '@/lib/siteData';

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
      </Helmet>
      <div>
        <HeroSection />
        <Projects />
        <About />
        <Contact />
      </div>
    </>
  );
};

export default Home;
