import React from 'react';
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
import { getWhatsappUrl, services, siteConfig } from '@/lib/siteData';

const serviceIcons = [
  Flame,
  FileCheck2,
  ShieldAlert,
  Building2,
  Sparkles,
  ThermometerSun,
  Waves,
  Fan,
];

const processSteps = [
  'Keşif ve ihtiyaç analizi',
  'Proje çizimi ve resmi takip',
  'Uygulama ve teknik kontrol',
  'Teslim sonrası destek',
];

const Projects = () => {
  const handleWhatsAppClick = () => {
    window.open(getWhatsappUrl('Merhaba, hizmetleriniz için teklif almak istiyorum.'), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="services" className="bg-slate-50 py-16 transition-colors duration-300 dark:bg-slate-950 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.22em] text-orange-500">Hizmetler</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 dark:text-white md:text-5xl">
              Doğalgaz ve ısıtma süreçleri için tek elden çözüm.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 md:text-lg">
            Doğtek Doğalgaz Mühendislik, Kayseri genelinde projelendirme, uygulama, kontrol ve satış sonrası
            destek adımlarını teknik standartlara uygun şekilde yönetir.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = serviceIcons[index] || ClipboardCheck;

            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
                className="group flex min-h-[284px] flex-col border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl dark:border-white/10 dark:bg-slate-900 dark:hover:border-blue-400/40"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md bg-blue-50 text-blue-800 transition group-hover:bg-orange-500 group-hover:text-white dark:bg-blue-500/10 dark:text-blue-300">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-slate-950 dark:text-white">{service.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {service.description}
                </p>
                <button
                  onClick={handleWhatsAppClick}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-800 transition hover:text-orange-600 dark:text-blue-300"
                >
                  Bilgi Al
                  <ArrowRight size={17} />
                </button>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-14 grid overflow-hidden border border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-slate-900 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="bg-blue-950 p-8 text-white md:p-10">
            <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-orange-300">
              <ClipboardCheck size={18} />
              Çalışma modeli
            </span>
            <h3 className="mt-4 text-2xl font-bold md:text-3xl">Resmi süreçleri ve sahayı aynı planla yürütürüz.</h3>
            <p className="mt-4 leading-7 text-blue-100">
              Doğalgaz işlerinde iyi sonuç sadece montajla değil, doğru kapasite hesabı, onay takibi, güvenlik kontrolü
              ve net iletişimle alınır.
            </p>
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

        <div className="mt-12 flex flex-col items-start justify-between gap-5 border-l-4 border-orange-500 bg-white p-6 shadow-sm dark:bg-slate-900 md:flex-row md:items-center">
          <div>
            <h3 className="text-xl font-bold text-slate-950 dark:text-white">Projeniz için hızlı ön görüşme alın.</h3>
            <p className="mt-2 text-slate-600 dark:text-slate-300">
              {siteConfig.location} içinde keşif, proje ve uygulama talepleriniz için doğrudan ekibimizle görüşün.
            </p>
          </div>
          <button
            onClick={handleWhatsAppClick}
            className="inline-flex items-center gap-2 rounded-md bg-green-600 px-5 py-3 font-bold text-white transition hover:bg-green-700"
          >
            <MessageCircle size={19} />
            WhatsApp İletişim
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
