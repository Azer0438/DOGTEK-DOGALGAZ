import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, PhoneCall, X } from 'lucide-react';
import Logo from './Logo';
import { siteConfig } from '@/lib/siteData';

const navLinks = [
  { name: 'Anasayfa', path: '/' },
  { name: 'Hakkımızda', path: '/about' },
  { name: 'Hizmetler', path: '/projects' },
  { name: 'Bayilikler', path: '/contact#dealers' },
  { name: 'İletişim', path: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname, location.hash]);

  const isActive = (path) => {
    if (path.includes('#')) {
      const [pathname, hash] = path.split('#');
      return location.pathname === pathname && location.hash === `#${hash}`;
    }

    if (path === '/contact') {
      return location.pathname === '/contact' && !location.hash;
    }

    return location.pathname === path;
  };

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 border-b transition-all duration-300 ${
        isScrolled
          ? 'border-white/10 bg-slate-950/95 shadow-sm backdrop-blur'
          : 'border-transparent bg-slate-950/90 backdrop-blur'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex min-w-0 items-center">
          <Logo imageClassName="h-14" showText />
        </Link>

        <div className="hidden items-center gap-2 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`rounded-md px-3 py-2 text-sm font-semibold transition ${
                isActive(link.path)
                  ? 'bg-blue-500/10 text-blue-300'
                  : 'text-slate-200 hover:bg-white/10 hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:+${siteConfig.phoneRaw}`}
            className="inline-flex items-center gap-2 rounded-md bg-orange-500 px-4 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-orange-600"
          >
            <PhoneCall size={18} />
            {siteConfig.phoneDisplay}
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => setIsOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-blue-900 text-white"
            aria-label="Menüyü aç veya kapat"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.24 }}
            className="overflow-hidden border-t border-white/10 bg-slate-950 lg:hidden"
          >
            <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
              <div className="grid gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`rounded-md px-4 py-3 text-base font-semibold ${
                      isActive(link.path)
                        ? 'bg-blue-500/10 text-blue-300'
                        : 'text-slate-200'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <a
                href={`tel:+${siteConfig.phoneRaw}`}
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-md bg-orange-500 px-4 py-3 font-bold text-white"
              >
                <PhoneCall size={19} />
                Hemen Ara
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
