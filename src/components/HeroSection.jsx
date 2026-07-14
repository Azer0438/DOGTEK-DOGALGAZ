import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, MapPin, MessageCircle, PhoneCall, ShieldCheck } from 'lucide-react';
import { featuredServiceSlugs, getServiceBySlug, getWhatsappUrl, siteConfig, stats } from '@/lib/siteData';
import { trackLeadClick } from '@/lib/tracking';

const heroServices = featuredServiceSlugs.slice(0, 4).map(getServiceBySlug).filter(Boolean);

const HeroSection = () => {
  const handleWhatsAppClick = () => {
    trackLeadClick('whatsapp', 'hero_primary');
    window.open(getWhatsappUrl(), '_blank', 'noopener,noreferrer');
  };

  const handlePhoneClick = () => {
    trackLeadClick('phone', 'hero_phone');
  };

  return (
    <section className="relative overflow-hidden bg-slate-950 pt-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(37,99,235,0.36),transparent_30%),radial-gradient(circle_at_82%_15%,rgba(249,115,22,0.22),transparent_28%),linear-gradient(135deg,#020617_0%,#0f172a_48%,#082f49_100%)]" />
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:44px_44px]" />
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-white to-transparent dark:from-slate-950" />

      <div className="relative z-10 mx-auto grid min-h-[calc(100svh-5rem)] max-w-7xl items-center gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:py-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="mb-6 inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm font-semibold text-blue-50 backdrop-blur"
          >
            <ShieldCheck size={18} className="text-orange-400" />
            {siteConfig.tagline} · Kayseri
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.05 }}
            className="text-balance text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl"
          >
            Kayseri doğalgaz tesisatı, proje çizimi ve kaçak kontrolü.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.12 }}
            className="mt-6 max-w-2xl text-lg leading-8 text-blue-50/90 sm:text-xl"
          >
            {siteConfig.name}, keşiften proje onayına, tesisat uygulamasından kaçak kontrolüne kadar süreci
            güvenli ve anlaşılır şekilde yönetir.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.18 }}
            className="mt-7 grid gap-3 text-sm font-medium text-blue-50/90 sm:grid-cols-3"
          >
            {['Aksagaz proje takibi', 'Yetkili uygulama', 'Hızlı keşif ve destek'].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2 size={18} className="shrink-0 text-orange-400" />
                <span>{item}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.24 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <button
              onClick={handleWhatsAppClick}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-orange-500 px-6 py-4 text-base font-bold text-white shadow-lg shadow-orange-950/20 transition hover:bg-orange-600"
            >
              WhatsApp ile Ulaş
              <MessageCircle size={19} />
            </button>
            <a
              href={`tel:+${siteConfig.phoneRaw}`}
              onClick={handlePhoneClick}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/30 bg-white/10 px-6 py-4 text-base font-bold text-white backdrop-blur transition hover:bg-white/20"
            >
              Hemen Ara
              <PhoneCall size={19} />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <div className="border border-white/15 bg-white/10 p-4 shadow-2xl backdrop-blur-xl sm:p-5">
            <div className="grid gap-4 bg-white p-4 text-slate-950 dark:bg-slate-900 dark:text-white">
              <div className="grid gap-4 sm:grid-cols-[1fr_150px]">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">Ana hizmetler</p>
                  <h2 className="mt-2 text-2xl font-bold leading-tight">İhtiyacınız olan hizmete hızlı ulaşın.</h2>
                </div>
                <img
                  src={siteConfig.aksaLogoUrl}
                  alt="Aksa Gaz yetkili firma"
                  className="h-20 w-full rounded bg-slate-50 object-contain p-2"
                />
              </div>

              <div className="grid gap-3">
                {heroServices.map((service) => (
                  <Link
                    key={service.slug}
                    to={service.path}
                    className="group flex items-center justify-between gap-4 border border-slate-200 p-4 transition hover:border-orange-300 hover:bg-orange-50 dark:border-white/10 dark:hover:bg-white/5"
                  >
                    <div>
                      <h3 className="font-bold">{service.shortTitle}</h3>
                      <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">{service.keywords[0]}</p>
                    </div>
                    <ArrowRight className="shrink-0 text-blue-800 transition group-hover:translate-x-1 group-hover:text-orange-600 dark:text-blue-300" size={20} />
                  </Link>
                ))}
              </div>

              <div className="grid gap-3 border-t border-slate-200 pt-4 text-sm dark:border-white/10">
                <a href={`tel:+${siteConfig.phoneRaw}`} onClick={handlePhoneClick} className="flex items-center gap-3 font-bold">
                  <PhoneCall size={18} className="text-orange-500" />
                  {siteConfig.phoneDisplay}
                </a>
                <a href={siteConfig.mapLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 font-bold">
                  <MapPin size={18} className="text-orange-500" />
                  {siteConfig.address}
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="relative z-10 border-y border-slate-200 bg-white/95 backdrop-blur dark:border-white/10 dark:bg-slate-950/95">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
          {stats.map((stat) => (
            <div key={stat.label} className="py-5 text-center lg:text-left">
              <div className="text-2xl font-bold text-blue-900 dark:text-blue-300">{stat.value}</div>
              <div className="mt-1 text-sm font-medium text-slate-500 dark:text-slate-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
