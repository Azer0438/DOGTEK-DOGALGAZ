import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Building2,
  ClipboardCheck,
  Fan,
  FileCheck2,
  Flame,
  MessageCircle,
  ShieldAlert,
  Sparkles,
  ThermometerSun,
  Waves,
} from 'lucide-react';
import { featuredServiceSlugs, getServiceBySlug, getWhatsappUrl, serviceAreas, services, siteConfig } from '@/lib/siteData';
import { trackLeadClick } from '@/lib/tracking';

const serviceIconMap = {
  'dogalgaz-tesisati': Flame,
  'aksagaz-proje-cizimi': FileCheck2,
  'dogalgaz-kacak-kontrolu': ShieldAlert,
  'kaskat-kazan-sistemleri': Building2,
  'petek-temizligi': Sparkles,
  'kat-kaloriferi-kurulumu': ThermometerSun,
  'yerden-isitma-sistemleri': Waves,
  'isi-pompasi-sistemleri': Fan,
};

const processSteps = [
  'Keşif ve ihtiyaç analizi',
  'Proje çizimi ve resmi takip',
  'Uygulama ve teknik kontrol',
  'Teslim sonrası destek',
];

const featuredServices = featuredServiceSlugs.map(getServiceBySlug).filter(Boolean);

const Projects = () => {
  const handleWhatsAppClick = () => {
    trackLeadClick('whatsapp', 'services_section_offer');
    window.open(getWhatsappUrl('Merhaba, hizmetleriniz için teklif almak istiyorum.'), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="services" className="bg-slate-50 py-16 transition-colors duration-300 dark:bg-slate-950 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.22em] text-orange-500">Hizmetler</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 dark:text-white md:text-5xl">
              Doğalgaz ve ısıtma hizmetlerinde güvenilir çözüm.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 md:text-lg">
            Kayseri’de tesisat, proje çizimi, kaçak kontrolü ve ısıtma sistemi ihtiyaçlarınız için her hizmeti
            ayrı ayrı planlıyor, süreci anlaşılır şekilde yönetiyoruz.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featuredServices.map((service, index) => {
            const Icon = serviceIconMap[service.slug] || ClipboardCheck;

            return (
              <motion.article
                key={service.slug}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
                className="group flex min-h-[330px] flex-col border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl dark:border-white/10 dark:bg-slate-900 dark:hover:border-blue-400/40"
              >
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-blue-50 text-blue-800 transition group-hover:bg-orange-500 group-hover:text-white dark:bg-blue-500/10 dark:text-blue-300">
                    <Icon size={24} />
                  </div>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-500 dark:bg-white/10 dark:text-slate-300">
                    Kayseri
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-950 dark:text-white">{service.shortTitle}</h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {service.description}
                </p>
                <div className="mt-5 border-t border-slate-100 pt-5 dark:border-white/10">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-orange-500">Hizmet kapsamı</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{service.benefits[0]}</p>
                </div>
                <Link
                  to={service.path}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-800 transition hover:text-orange-600 dark:text-blue-300"
                >
                  Detaylı Hizmet Sayfası
                  <ArrowRight size={17} />
                </Link>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="border border-slate-200 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-slate-900 md:p-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-orange-500 text-white">
              <ClipboardCheck size={24} />
            </div>
            <h3 className="mt-5 text-2xl font-bold text-slate-950 dark:text-white">
              İhtiyacınıza göre hizmet seçin
            </h3>
            <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
              Doğalgazla ilgili her iş aynı kapsamda değildir. Tesisat, proje çizimi, kaçak kontrolü, petek
              temizliği ve merkezi sistem taleplerinizi ayrı ayrı değerlendiriyoruz.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {services.slice(0, 8).map((service) => (
                <Link
                  key={service.slug}
                  to={service.path}
                  className="rounded-full border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-600 transition hover:border-blue-300 hover:text-blue-800 dark:border-white/10 dark:text-slate-300 dark:hover:text-white"
                >
                  {service.shortTitle}
                </Link>
              ))}
            </div>
          </div>

          <div className="overflow-hidden border border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-slate-900">
            <div className="bg-blue-950 p-7 text-white md:p-8">
              <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-orange-300">
                <ClipboardCheck size={18} />
                Çalışma modeli
              </span>
              <h3 className="mt-4 text-2xl font-bold">Resmi süreçleri ve sahayı aynı planla yürütürüz.</h3>
            </div>
            <div className="grid gap-px bg-slate-200 dark:bg-white/10 sm:grid-cols-2">
              {processSteps.map((step, index) => (
                <div key={step} className="bg-white p-7 dark:bg-slate-900">
                  <div className="text-sm font-bold text-orange-500">0{index + 1}</div>
                  <div className="mt-3 text-lg font-bold text-slate-950 dark:text-white">{step}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-5 border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-slate-900 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h3 className="text-xl font-bold text-slate-950 dark:text-white">Hizmet bölgeleri</h3>
            <p className="mt-2 text-slate-600 dark:text-slate-300">
              {siteConfig.location} ve çevresinde keşif, proje ve uygulama talepleri için hızlı dönüş sağlıyoruz.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {serviceAreas.map((area) => (
                <span key={area} className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-600 dark:bg-white/10 dark:text-slate-300">
                  {area}
                </span>
              ))}
            </div>
          </div>
          <button
            onClick={handleWhatsAppClick}
            className="inline-flex items-center justify-center gap-2 rounded-md bg-green-600 px-5 py-3 font-bold text-white transition hover:bg-green-700"
          >
            <MessageCircle size={19} />
            Teklif Al
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
