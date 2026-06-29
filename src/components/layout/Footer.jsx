import { MessageCircle, Mail, Phone } from 'lucide-react';
import Logo from '../ui/Logo';
import { brand, nav, services } from '../../data/siteContent';

const quickLinks = nav.slice(0, 5);

export default function Footer() {
  const waLink = `https://wa.me/${brand.whatsapp}?text=${brand.waMessage}`;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark-900 text-neutral-400">
      <div className="max-w-7xl mx-auto container-pad pt-16 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Logo size="sm" />
            </div>
            <p className="text-sm text-neutral-500 leading-relaxed mb-5">
              Reliable, affordable car rental services for every Indian journey. One Way, Outstation & Rental.
            </p>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gold-500 text-dark-900 px-5 py-2.5 rounded-full text-sm font-bold hover:bg-gold-400 transition-colors"
            >
              <MessageCircle size={14} />
              WhatsApp Us
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-base font-bold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-sm text-neutral-500 hover:text-gold-500 transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-base font-bold text-white uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="flex flex-col gap-2.5">
              {services.map(({ id, title }) => (
                <li key={id}>
                  <a
                    href="#services"
                    className="text-sm text-neutral-500 hover:text-gold-500 transition-colors"
                  >
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-base font-bold text-white uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="flex flex-col gap-3.5">
              <li>
                <a
                  href={`https://wa.me/${brand.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm text-neutral-500 hover:text-gold-500 transition-colors"
                >
                  <Phone size={14} className="text-gold-500 flex-shrink-0" />
                  {brand.whatsappDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${brand.email}`}
                  className="flex items-center gap-2.5 text-sm text-neutral-500 hover:text-gold-500 transition-colors break-all"
                >
                  <Mail size={14} className="text-gold-500 flex-shrink-0" />
                  {brand.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-neutral-500">
                <MessageCircle size={14} className="text-gold-500 flex-shrink-0 mt-0.5" />
                Pan India Service
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-neutral-800 mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-600">
          <span>© {year} Cheap Wheels. All rights reserved.</span>
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
            Reliable · Affordable · Always With You
          </span>
        </div>
      </div>
    </footer>
  );
}
