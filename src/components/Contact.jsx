import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, ExternalLink, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { getWhatsappUrl, partners, siteConfig } from '@/lib/siteData';
import { trackLeadClick } from '@/lib/tracking';

const Contact = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const element = document.getElementById(hash.replace('#', ''));
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 80);
    }
  }, [hash]);

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefon',
      details: [siteConfig.phoneDisplay],
      href: `tel:+${siteConfig.phoneRaw}`,
    },
    {
      icon: Mail,
      title: 'E-posta',
      details: [siteConfig.email],
      href: `mailto:${siteConfig.email}`,
    },
    {
      icon: MapPin,
      title: 'Adres',
      details: siteConfig.addressLines,
      href: siteConfig.mapLink,
    },
    {
      icon: Clock,
      title: 'Çalışma Saatleri',
      details: ['Pzt - Cmt: 09:00 - 18:00', 'Pazar: Kapalı'],
    },
  ];

  return (
    <div className="bg-white transition-colors duration-300 dark:bg-slate-900">
      <section id="dealers" className="scroll-mt-28 border-y border-slate-200 bg-slate-50 py-12 dark:border-white/10 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.22em] text-orange-500">Bayilikler</span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 dark:text-white md:text-4xl">
                Güçlü marka iş ortaklarıyla hizmet veriyoruz.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-slate-600 dark:text-slate-300">
              Cihaz, ısıtma ve uygulama süreçlerinde bilinen markalarla uyumlu, servis sonrası sürdürülebilir çözümler.
            </p>
          </div>

          <div className="mt-9 grid grid-cols-2 gap-px overflow-hidden border border-slate-200 bg-slate-200 dark:border-white/10 dark:bg-white/10 md:grid-cols-4">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex h-28 items-center justify-center bg-white p-5 dark:bg-slate-900 md:h-32"
              >
                <img
                  src={partner.logo}
                  alt={`${partner.name} logosu`}
                  className="max-h-16 max-w-full object-contain grayscale transition hover:grayscale-0"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-28 py-16 dark:bg-slate-900 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr]">
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.22em] text-orange-500">İletişim</span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 dark:text-white md:text-5xl">
                Keşif, proje veya servis talebiniz için bize ulaşın.
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300">
                Doğalgaz kaçağı şüphesi, proje çizimi, tesisat yenileme veya ısıtma sistemi kurulumu için
                ekibimizle hızlıca görüşebilirsiniz.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={getWhatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackLeadClick('whatsapp', 'contact_section')}
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-green-600 px-5 py-3 font-bold text-white transition hover:bg-green-700"
                >
                  <MessageCircle size={19} />
                  WhatsApp
                </a>
                <a
                  href={`tel:+${siteConfig.phoneRaw}`}
                  onClick={() => trackLeadClick('phone', 'contact_section')}
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-900 px-5 py-3 font-bold text-white transition hover:bg-blue-800"
                >
                  <Phone size={19} />
                  Hemen Ara
                </a>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                const Wrapper = item.href ? 'a' : 'div';
                const wrapperProps = item.href
                  ? { href: item.href, target: item.href.startsWith('http') ? '_blank' : undefined, rel: 'noopener noreferrer' }
                  : {};

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <Wrapper
                      {...wrapperProps}
                      className="block h-full border border-slate-200 bg-slate-50 p-6 transition hover:border-blue-200 hover:bg-white hover:shadow-lg dark:border-white/10 dark:bg-slate-950 dark:hover:border-blue-400/40 dark:hover:bg-slate-950"
                    >
                      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md bg-blue-50 text-blue-800 dark:bg-blue-500/10 dark:text-blue-300">
                        <Icon size={23} />
                      </div>
                      <h3 className="text-lg font-bold text-slate-950 dark:text-white">{item.title}</h3>
                      <div className="mt-3 space-y-1">
                        {item.details.map((detail) => (
                          <p key={detail} className="break-words text-sm font-medium leading-6 text-slate-600 dark:text-slate-300">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </Wrapper>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <a
            href={siteConfig.mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 grid overflow-hidden bg-blue-950 text-white shadow-xl transition hover:bg-blue-900 lg:grid-cols-[1fr_auto]"
          >
            <div className="p-7 md:p-9">
              <div className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-orange-300">
                <MapPin size={19} />
                Konum
              </div>
              <h3 className="mt-4 text-2xl font-bold">Ofisimizi Google Haritalar’da görüntüleyin.</h3>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-blue-100">
                Yol tarifi almak, rota oluşturmak veya konumu paylaşmak için harita bağlantısını açabilirsiniz.
              </p>
            </div>
            <div className="flex items-center gap-2 border-t border-white/10 p-7 font-bold md:p-9 lg:border-l lg:border-t-0">
              Yol Tarifi Al
              <ExternalLink size={19} />
            </div>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
