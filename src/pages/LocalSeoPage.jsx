import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, MapPin, MessageCircle, PhoneCall } from 'lucide-react';
import { getWhatsappUrl, serviceAreas, services, siteConfig } from '@/lib/siteData';
import { trackLeadClick } from '@/lib/tracking';

const LocalSeoPage = () => {
  const canonical = `${siteConfig.domain}/kayseri-dogalgaz-hizmetleri`;

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Anasayfa',
        item: siteConfig.domain,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Kayseri Doğalgaz Hizmetleri',
        item: canonical,
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Kayseri Doğalgaz Hizmetleri | Doğtek Doğalgaz Mühendislik</title>
        <meta
          name="description"
          content="Kayseri Melikgazi, Kocasinan, Talas ve çevresinde doğalgaz tesisatı, Aksagaz proje çizimi, kaçak kontrolü ve ısıtma sistemi hizmetleri."
        />
        <link rel="canonical" href={canonical} />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <main className="bg-white pt-20 dark:bg-slate-950">
        <section className="bg-slate-950 py-16 text-white md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <span className="text-sm font-bold uppercase tracking-[0.22em] text-orange-400">Kayseri Hizmet Bölgeleri</span>
            <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
              Kayseri’de doğalgaz tesisatı, proje çizimi ve ısıtma çözümleri.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-50/90">
              Doğtek Doğalgaz Mühendislik; Melikgazi, Kocasinan, Talas ve Kayseri merkez çevresinde doğalgaz
              tesisatı, Aksagaz proje çizimi, kaçak kontrolü ve ısıtma sistemi hizmetleri sunar.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={getWhatsappUrl('Merhaba, Kayseri doğalgaz hizmetleri hakkında bilgi almak istiyorum.')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackLeadClick('whatsapp', 'local_seo_page')}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-orange-500 px-6 py-4 font-bold text-white transition hover:bg-orange-600"
              >
                WhatsApp ile Görüş
                <MessageCircle size={19} />
              </a>
              <a
                href={`tel:+${siteConfig.phoneRaw}`}
                onClick={() => trackLeadClick('phone', 'local_seo_page')}
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/25 bg-white/10 px-6 py-4 font-bold text-white transition hover:bg-white/20"
              >
                Hemen Ara
                <PhoneCall size={19} />
              </a>
            </div>
          </div>
        </section>

        <section className="py-16 dark:bg-slate-950 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.22em] text-orange-500">Yerel Servis</span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 dark:text-white md:text-4xl">
                İlçe ve mahalleye göre hızlı keşif planı.
              </h2>
              <p className="mt-5 leading-8 text-slate-600 dark:text-slate-300">
                Doğalgaz işlerinde yapı tipi, tesisat güzergahı, cihaz konumu ve resmi süreçler her adreste farklılık
                gösterebilir. Bu yüzden talepleri önce hizmet kapsamına ve konuma göre değerlendiriyor, ardından net
                keşif ve uygulama planı çıkarıyoruz.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {serviceAreas.map((area) => (
                <div key={area} className="border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-slate-900">
                  <div className="flex gap-3">
                    <MapPin className="mt-1 shrink-0 text-orange-500" size={21} />
                    <div>
                      <h3 className="font-bold text-slate-950 dark:text-white">{area} doğalgaz hizmetleri</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                        Tesisat, proje, kaçak kontrolü ve ısıtma sistemi talepleriniz için ön görüşme alabilirsiniz.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-slate-50 py-16 dark:border-white/10 dark:bg-slate-900 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <span className="text-sm font-bold uppercase tracking-[0.22em] text-orange-500">Hizmetler</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 dark:text-white md:text-4xl">
              Kayseri’de en çok talep edilen doğalgaz hizmetleri.
            </h2>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  to={service.path}
                  className="group flex min-h-[230px] flex-col border border-slate-200 bg-white p-5 transition hover:border-blue-200 hover:shadow-lg dark:border-white/10 dark:bg-slate-950"
                >
                  <h3 className="text-lg font-bold text-slate-950 dark:text-white">{service.shortTitle}</h3>
                  <p className="mt-3 flex-1 text-sm leading-7 text-slate-600 dark:text-slate-300">{service.description}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue-800 dark:text-blue-300">
                    Detaylı incele
                    <ArrowRight size={17} className="transition group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 dark:bg-slate-950 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-5 md:grid-cols-3">
              {[
                'Yetkili proje ve resmi süreç takibi',
                'Konut, apartman ve ticari alanlara uygun çözüm',
                'Telefon ve WhatsApp üzerinden hızlı ön görüşme',
              ].map((item) => (
                <div key={item} className="border border-slate-200 p-6 dark:border-white/10 dark:bg-slate-900">
                  <CheckCircle2 className="mb-4 text-orange-500" size={24} />
                  <h3 className="font-bold leading-7 text-slate-950 dark:text-white">{item}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default LocalSeoPage;
