import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, MapPin, PhoneCall, ShieldCheck } from 'lucide-react';
import { getWhatsappUrl, siteConfig, stats } from '@/lib/siteData';

const HeroSection = () => {
  const handleWhatsAppClick = () => {
    window.open(getWhatsappUrl(), '_blank', 'noopener,noreferrer');
  };

  const handleContactScroll = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    window.location.href = '/contact';
  };

  return (
    <section className="relative overflow-hidden bg-slate-950 pt-20">
      <div className="absolute inset-0">
        <img
          src={siteConfig.heroImageUrl}
          alt="Doğalgaz tesisatı ve mühendislik hizmetleri"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-slate-950/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-blue-950/80 to-slate-950/40" />
      </div>

      <div className="relative z-10 mx-auto grid min-h-[calc(100svh-7rem)] max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="mb-6 inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm font-semibold text-blue-50 backdrop-blur"
          >
            <ShieldCheck size={18} className="text-orange-400" />
            {siteConfig.tagline}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.05 }}
            className="text-balance text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
          >
            {siteConfig.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.12 }}
            className="mt-6 max-w-2xl text-lg leading-8 text-blue-50/90 sm:text-xl"
          >
            Kayseri’de doğalgaz tesisatı, kaçak onarımı, proje çizimi ve ısıtma sistemleri için yetkili,
            planlı ve güven odaklı mühendislik hizmeti.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.18 }}
            className="mt-7 grid gap-3 text-sm font-medium text-blue-50/90 sm:grid-cols-3"
          >
            {['Yetkili proje takibi', 'Standartlara uygun uygulama', 'Hızlı keşif ve destek'].map((item) => (
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
              <ArrowRight size={19} />
            </button>
            <button
              onClick={handleContactScroll}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/30 bg-white/10 px-6 py-4 text-base font-bold text-white backdrop-blur transition hover:bg-white/20"
            >
              İletişim Bilgileri
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="hidden lg:block"
        >
          <div className="ml-auto max-w-md border border-white/20 bg-white/10 p-6 text-white shadow-2xl backdrop-blur-xl">
            <img
              src={siteConfig.aksaLogoUrl}
              alt="Aksa Gaz yetkili firma"
              className="mb-6 h-24 w-auto rounded bg-white object-contain p-2"
            />
            <h2 className="text-2xl font-bold">Güvenli doğalgaz süreci, tek ekipten yönetim.</h2>
            <p className="mt-4 leading-7 text-blue-50/85">
              Keşif, proje, uygulama, onay takibi ve satış sonrası destek adımlarını aynı kurumsal disiplinle
              yürütüyoruz.
            </p>
            <div className="mt-6 grid gap-4 border-t border-white/10 pt-6">
              <a href={`tel:+${siteConfig.phoneRaw}`} className="flex items-center gap-3 text-sm font-semibold">
                <PhoneCall size={19} className="text-orange-400" />
                {siteConfig.phoneDisplay}
              </a>
              <a
                href={siteConfig.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm font-semibold"
              >
                <MapPin size={19} className="text-orange-400" />
                {siteConfig.address}
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="relative z-10 border-y border-slate-200 bg-white/95 backdrop-blur dark:border-white/10 dark:bg-slate-950/96">
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
