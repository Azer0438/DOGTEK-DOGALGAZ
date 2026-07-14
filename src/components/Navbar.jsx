import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, Moon, PhoneCall, Sun, X } from 'lucide-react';
import Logo from './Logo';
import { useTheme } from '@/context/ThemeContext';
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
  const { theme, toggleTheme } = useTheme();

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
          ? 'border-slate-200/80 bg-white/95 shadow-sm backdrop-blur dark:border-white/10 dark:bg-slate-950/95'
          : 'border-transparent bg-white/90 backdrop-blur dark:bg-slate-950/90'
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
                  ? 'bg-blue-50 text-blue-800 dark:bg-blue-500/10 dark:text-blue-300'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-blue-800 dark:text-slate-200 dark:hover:bg-white/10 dark:hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            onClick={toggleTheme}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-700 transition hover:border-blue-200 hover:text-blue-800 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
            aria-label="Tema değiştir"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={theme}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.16 }}
              >
                {theme === 'dark' ? <Moon size={18} /> : <Sun size={18} />}
              </motion.span>
            </AnimatePresence>
          </button>

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
            onClick={toggleTheme}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
            aria-label="Tema değiştir"
          >
            {theme === 'dark' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
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
            className="overflow-hidden border-t border-slate-200 bg-white dark:border-white/10 dark:bg-slate-950 lg:hidden"
          >
            <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
              <div className="grid gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`rounded-md px-4 py-3 text-base font-semibold ${
                      isActive(link.path)
                        ? 'bg-blue-50 text-blue-800 dark:bg-blue-500/10 dark:text-blue-300'
                        : 'text-slate-700 dark:text-slate-200'
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
