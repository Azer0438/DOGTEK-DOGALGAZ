import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, Navigate, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  HelpCircle,
  MapPin,
  MessageCircle,
  PhoneCall,
  ShieldCheck,
} from 'lucide-react';
import {
  getAbsoluteUrl,
  getRelatedServices,
  getServiceBySlug,
  getWhatsappUrl,
  getWorkImagesForService,
  serviceAreas,
  siteConfig,
} from '@/lib/siteData';
import { trackLeadClick } from '@/lib/tracking';

const ServiceDetailPage = () => {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) {
    return <Navigate to="/projects" replace />;
  }

  const relatedServices = getRelatedServices(service.slug, 3);
  const serviceImages = getWorkImagesForService(service.slug, 6);
  const serviceImageUrls = serviceImages.map((image) => getAbsoluteUrl(image.src));
  const canonical = `${siteConfig.domain}${service.path}`;
  const whatsappText = `Merhaba, ${service.shortTitle} hizmeti hakkında bilgi almak istiyorum.`;

  const handleWhatsapp = () => {
    trackLeadClick('whatsapp', `service_${service.slug}`, { service_slug: service.slug });
    window.open(getWhatsappUrl(whatsappText), '_blank', 'noopener,noreferrer');
  };

  const handlePhone = () => {
    trackLeadClick('phone', `service_${service.slug}`, { service_slug: service.slug });
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.metaDescription,
    image: serviceImageUrls.length ? serviceImageUrls : undefined,
    provider: {
      '@type': 'HVACBusiness',
      name: siteConfig.name,
      url: siteConfig.domain,
      image: getAbsoluteUrl(siteConfig.image),
      telephone: `+${siteConfig.phoneRaw}`,
      hasMap: siteConfig.mapLink,
      openingHoursSpecification: siteConfig.openingHoursSpecification,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Kılıçarslan Mahallesi Molla Sokak No:7/A',
        addressLocality: 'Kayseri',
        addressRegion: 'Kayseri',
        addressCountry: 'TR',
      },
    },
    areaServed: serviceAreas.map((area) => ({
      '@type': 'AdministrativeArea',
      name: `${area}, Kayseri`,
    })),
    url: canonical,
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

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
        name: 'Hizmetler',
        item: `${siteConfig.domain}/projects`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: service.shortTitle,
        item: canonical,
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>{service.seoTitle}</title>
        <meta name="description" content={service.metaDescription} />
        <meta name="keywords" content={service.keywords.join(', ')} />
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={service.seoTitle} />
        <meta property="og:description" content={service.metaDescription} />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={serviceImageUrls[0] || getAbsoluteUrl(siteConfig.image)} />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <article className="bg-white pt-20 dark:bg-slate-950">
        <section className="relative overflow-hidden bg-slate-950 text-white">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(30,64,175,0.34)_0%,rgba(15,23,42,0)_45%),radial-gradient(circle_at_top_right,rgba(249,115,22,0.22),transparent_34%)]" />
          <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:48px_48px]" />

          <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_380px] lg:px-8 lg:py-20">
            <div>
              <Link to="/projects" className="inline-flex items-center gap-2 text-sm font-bold text-blue-100 transition hover:text-white">
                <ArrowLeft size={18} />
                Tüm hizmetler
              </Link>
              <div className="mt-8 inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm font-bold text-orange-200">
                <ShieldCheck size={18} />
                {siteConfig.tagline}
              </div>
              <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">{service.heroTitle}</h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-50/90 md:text-xl">{service.lead}</p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={handleWhatsapp}
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-orange-500 px-6 py-4 font-bold text-white transition hover:bg-orange-600"
                >
                  WhatsApp ile Teklif Al
                  <MessageCircle size={19} />
                </button>
                <a
                  href={`tel:+${siteConfig.phoneRaw}`}
                  onClick={handlePhone}
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-white/25 bg-white/10 px-6 py-4 font-bold text-white transition hover:bg-white/20"
                >
                  Hemen Ara
                  <PhoneCall size={19} />
                </a>
              </div>
            </div>

            <aside className="border border-white/15 bg-white/10 p-6 backdrop-blur">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-200">Hizmet özeti</p>
              <p className="mt-3 leading-7 text-blue-50/90">{service.description}</p>
              <div className="mt-6 border-t border-white/10 pt-6">
                <p className="text-sm font-bold text-white">Bu hizmette öne çıkanlar</p>
                <ul className="mt-4 space-y-3">
                  {service.benefits.slice(0, 3).map((benefit) => (
                    <li key={benefit} className="flex gap-2 text-sm leading-6 text-blue-50">
                      <CheckCircle2 size={17} className="mt-1 shrink-0 text-orange-300" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </section>

        <section className="py-16 dark:bg-slate-950 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.22em] text-orange-500">Neden önemli?</span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 dark:text-white md:text-4xl">
                {service.shortTitle} hizmetinde doğru planlama güvenli sonuç sağlar.
              </h2>
              <p className="mt-5 leading-8 text-slate-600 dark:text-slate-300">
                Doğalgaz ve ısıtma işlerinde sağlıklı sonuç için mevcut tesisat, cihaz konumu, yapı tipi ve kullanım
                ihtiyacı birlikte değerlendirilmelidir. Keşif sonrası size en uygun çözüm ve uygulama planı netleşir.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {service.benefits.map((benefit) => (
                <div key={benefit} className="border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-slate-900">
                  <CheckCircle2 className="mb-4 text-orange-500" size={24} />
                  <p className="font-semibold leading-7 text-slate-700 dark:text-slate-200">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {serviceImages.length > 0 && (
          <section className="border-y border-slate-200 bg-slate-50 py-16 dark:border-white/10 dark:bg-slate-900 md:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl">
                <span className="text-sm font-bold uppercase tracking-[0.22em] text-orange-500">Uygulama Görselleri</span>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 dark:text-white md:text-4xl">
                  {service.shortTitle} için sahadan örnek uygulamalar.
                </h2>
                <p className="mt-5 leading-8 text-slate-600 dark:text-slate-300">
                  Kayseri’de yürüttüğümüz işlerden seçilmiş görüntüler, uygulama kalitesi ve saha düzeni hakkında fikir
                  verir.
                </p>
              </div>

              <div className="mt-10 grid gap-5 md:grid-cols-3">
                {serviceImages.map((image) => (
                  <figure
                    key={image.src}
                    className="overflow-hidden border border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-slate-950"
                  >
                    <div className="aspect-[4/3] overflow-hidden bg-slate-900">
                      <img src={image.src} alt={image.alt} loading="lazy" className="h-full w-full object-cover" />
                    </div>
                    <figcaption className="p-5">
                      <h3 className="font-bold text-slate-950 dark:text-white">{image.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{image.description}</p>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="border-y border-slate-200 bg-slate-50 py-16 dark:border-white/10 dark:bg-slate-900 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.22em] text-orange-500">Kayseri Hizmet Bölgeleri</span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 dark:text-white md:text-4xl">
                {service.shortTitle} için Kayseri genelinde keşif ve uygulama desteği.
              </h2>
              <div className="mt-5 space-y-4 leading-8 text-slate-600 dark:text-slate-300">
                <p>
                  {siteConfig.shortName}, {service.shortTitle.toLowerCase()} taleplerinde yalnızca fiyat vermekle
                  kalmaz; tesisatın mevcut durumunu, cihaz konumunu, güvenlik koşullarını ve resmi süreçleri birlikte
                  değerlendirir.
                </p>
                <p>
                  Melikgazi, Kocasinan ve Talas başta olmak üzere Kayseri genelinde konut, apartman, iş yeri ve ticari
                  alanlara yönelik doğalgaz ve ısıtma çözümleri sunuyoruz.
                </p>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {serviceAreas.map((area) => (
                <div key={area} className="border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-slate-950">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-1 shrink-0 text-orange-500" size={21} />
                    <div>
                      <h3 className="font-bold text-slate-950 dark:text-white">{area} {service.shortTitle}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                        Keşif, uygunluk değerlendirmesi ve hizmet kapsamı için ekibimizle iletişime geçebilirsiniz.
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
            <div className="max-w-3xl">
              <span className="text-sm font-bold uppercase tracking-[0.22em] text-orange-500">Süreç</span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 dark:text-white md:text-4xl">
                Başından sonuna kontrollü hizmet süreci.
              </h2>
            </div>
            <div className="mt-10 grid gap-px overflow-hidden border border-slate-200 bg-slate-200 dark:border-white/10 dark:bg-white/10 md:grid-cols-4">
              {service.process.map((step, index) => (
                <div key={step} className="bg-white p-6 dark:bg-slate-950">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-md bg-blue-50 text-blue-800 dark:bg-blue-500/10 dark:text-blue-300">
                    <ClipboardCheck size={21} />
                  </div>
                  <div className="text-sm font-bold text-orange-500">0{index + 1}</div>
                  <h3 className="mt-3 font-bold leading-7 text-slate-950 dark:text-white">{step}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 dark:bg-slate-950 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.22em] text-orange-500">Sık Sorulan Sorular</span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 dark:text-white md:text-4xl">
                Karar vermeden önce en çok sorulanlar.
              </h2>
              <div className="mt-8 space-y-4">
                {service.faq.map((item) => (
                  <div key={item.question} className="border border-slate-200 p-6 dark:border-white/10 dark:bg-slate-900">
                    <div className="flex gap-3">
                      <HelpCircle className="mt-1 shrink-0 text-orange-500" size={22} />
                      <div>
                        <h3 className="font-bold text-slate-950 dark:text-white">{item.question}</h3>
                        <p className="mt-2 leading-7 text-slate-600 dark:text-slate-300">{item.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <aside className="h-fit bg-blue-950 p-7 text-white md:p-8">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-300">Hızlı iletişim</p>
              <h3 className="mt-4 text-2xl font-bold">{service.shortTitle} için aynı gün ön görüşme alın.</h3>
              <p className="mt-4 leading-7 text-blue-100">
                Keşif, fiyat bilgisi, uygun tarih ve hizmet kapsamı için ekibimizle telefon veya WhatsApp üzerinden
                hızlıca görüşebilirsiniz.
              </p>
              <div className="mt-6 grid gap-3">
                <button
                  onClick={handleWhatsapp}
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-orange-500 px-5 py-3 font-bold text-white transition hover:bg-orange-600"
                >
                  WhatsApp ile Yaz
                  <MessageCircle size={19} />
                </button>
                <a
                  href={`tel:+${siteConfig.phoneRaw}`}
                  onClick={handlePhone}
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-3 font-bold text-blue-950 transition hover:bg-blue-50"
                >
                  {siteConfig.phoneDisplay}
                  <PhoneCall size={19} />
                </a>
              </div>
            </aside>
          </div>
        </section>

        <section className="bg-slate-50 py-14 dark:bg-slate-900">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="text-sm font-bold uppercase tracking-[0.22em] text-orange-500">Diğer hizmetler</span>
                <h2 className="mt-3 text-2xl font-bold text-slate-950 dark:text-white">İlgili sayfalara geçin.</h2>
              </div>
              <Link to="/projects" className="inline-flex items-center gap-2 font-bold text-blue-800 dark:text-blue-300">
                Tüm hizmetleri gör
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {relatedServices.map((related) => (
                <Link
                  key={related.slug}
                  to={related.path}
                  className="border border-slate-200 bg-white p-5 transition hover:border-blue-200 hover:shadow-lg dark:border-white/10 dark:bg-slate-950"
                >
                  <h3 className="font-bold text-slate-950 dark:text-white">{related.shortTitle}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{related.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </article>
    </>
  );
};

export default ServiceDetailPage;
