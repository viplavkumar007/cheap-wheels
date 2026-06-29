import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MessageCircle } from 'lucide-react';
import Logo from '../ui/Logo';
import { nav, brand } from '../../data/siteContent';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { threshold: 0.4 }
    );
    nav.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const waLink = `https://wa.me/${brand.whatsapp}?text=${brand.waMessage}`;
  const goToSection = (href) => {
    const target = document.querySelector(href);
    if (!target) return;

    setOpen(false);
    window.setTimeout(() => {
      const offset = 76;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
      window.history.pushState(null, '', href);
    }, 80);
  };

  const handleNavClick = (event, href) => {
    event.preventDefault();
    goToSection(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-neutral-100' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <a href="#home" className="flex-shrink-0">
            <Logo />
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {nav.map(({ label, href }) => {
              const id = href.replace('#', '');
              const isActive = active === id;
              return (
                <a
                  key={href}
                  href={href}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive ? 'text-dark-900' : 'text-neutral-600 hover:text-dark-900'
                  }`}
                >
                  {label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-gold-500 rounded-full"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-dark-900 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-dark-700 transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
            >
              <MessageCircle size={15} />
              Enquire Now
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="relative z-[70] lg:hidden flex h-11 w-11 items-center justify-center rounded-lg text-dark-900 hover:bg-neutral-100"
            onClick={() => setOpen((current) => !current)}
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="fixed left-0 right-0 top-16 z-[60] lg:hidden bg-white border-t border-neutral-100 shadow-xl"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {nav.map(({ label, href }) => (
                <button
                  key={href}
                  type="button"
                  onClick={(event) => handleNavClick(event, href)}
                  className="w-full rounded-lg px-3 py-3 text-left text-sm font-medium text-neutral-700 hover:bg-neutral-50 hover:text-dark-900 transition-colors"
                >
                  {label}
                </button>
              ))}
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center justify-center gap-2 bg-dark-900 text-white px-5 py-3 rounded-full text-sm font-semibold"
              >
                <MessageCircle size={15} />
                Enquire on WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
