import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import Logo from './Logo';
import { getWhatsappUrl, services, siteConfig } from '@/lib/siteData';
import { trackLeadClick } from '@/lib/tracking';

const Footer = () => {
  const quickLinks = [
    { name: 'Anasayfa', path: '/' },
    { name: 'Hakkımızda', path: '/about' },
    { name: 'Hizmetler', path: '/projects' },
    { name: 'Kayseri Hizmet Bölgeleri', path: '/kayseri-dogalgaz-hizmetleri' },
    { name: 'Bayilikler', path: '/contact#dealers' },
    { name: 'İletişim', path: '/contact' },
  ];

  return (
    <footer className="relative bg-slate-950 text-white">
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3 md:bottom-6 md:right-6">
        <a
          href={siteConfig.mapLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-white shadow-lg transition hover:bg-red-700 md:h-14 md:w-14"
          aria-label="Konuma git"
          title="Konuma git"
        >
          <MapPin size={24} />
        </a>
        <a
          href={getWhatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackLeadClick('whatsapp', 'floating_footer')}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-green-600 text-white shadow-lg transition hover:bg-green-700 md:h-14 md:w-14"
          aria-label="WhatsApp"
          title="WhatsApp"
        >
          <MessageCircle size={24} />
        </a>
        <a
          href={`tel:+${siteConfig.phoneRaw}`}
          onClick={() => trackLeadClick('phone', 'floating_footer')}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-white shadow-lg transition hover:bg-orange-600 md:h-14 md:w-14"
          aria-label="Hemen ara"
          title="Hemen ara"
        >
          <Phone size={24} />
        </a>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.9fr_1fr]">
          <div>
            <Logo imageClassName="h-20" />
            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-300">
              {siteConfig.location} genelinde doğalgaz tesisatı, proje çizimi, kaçak kontrolü ve ısıtma sistemi
              uygulamalarını güven odaklı mühendislik disipliniyle yürütüyoruz.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-orange-400">Bağlantılar</h3>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-slate-300 transition hover:text-white">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-orange-400">Hizmetler</h3>
            <ul className="mt-5 space-y-3">
              {services.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link to={service.path} className="text-sm text-slate-300 transition hover:text-white">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-orange-400">İletişim</h3>
            <div className="mt-5 space-y-4 text-sm text-slate-300">
              <a href={siteConfig.mapLink} target="_blank" rel="noopener noreferrer" className="flex gap-3 transition hover:text-white">
                <MapPin size={18} className="mt-0.5 shrink-0 text-orange-400" />
                <span>{siteConfig.address}</span>
              </a>
              <a
                href={`tel:+${siteConfig.phoneRaw}`}
                onClick={() => trackLeadClick('phone', 'footer_contact')}
                className="flex items-center gap-3 transition hover:text-white"
              >
                <Phone size={18} className="shrink-0 text-orange-400" />
                <span>{siteConfig.phoneDisplay}</span>
              </a>
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 break-all transition hover:text-white">
                <Mail size={18} className="shrink-0 text-orange-400" />
                <span>{siteConfig.email}</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.name}. Tüm hakları saklıdır.</p>
          <div className="flex items-center gap-2">
            <Code2 size={16} className="text-blue-300" />
            <span>Software:</span>
            <a
              href="https://barbarossoft.com.tr/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-orange-400 transition hover:text-white"
            >
              BarbarosSoft
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
