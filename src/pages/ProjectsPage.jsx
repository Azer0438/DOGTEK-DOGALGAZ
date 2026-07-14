import React from 'react';
import { Helmet } from 'react-helmet';
import Projects from '@/components/Projects';
import { siteConfig } from '@/lib/siteData';

const ProjectsPage = () => {
  return (
    <>
      <Helmet>
        <title>Hizmetlerimiz | Doğtek Doğalgaz Mühendislik</title>
        <meta
          name="description"
          content="Doğalgaz tesisatı, Aksagaz proje çizimi, kaçak kontrolü, kaskat kazan, petek temizliği, yerden ısıtma ve ısı pompası hizmetleri."
        />
        <link rel="canonical" href={`${siteConfig.domain}/projects`} />
      </Helmet>
      <div className="pt-20">
        <Projects />
      </div>
    </>
  );
};

export default ProjectsPage;
