import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Car } from 'lucide-react';
import { services, brand } from '../../data/siteContent';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import SectionLabel from '../ui/SectionLabel';

const iconMap = { ArrowRight, MapPin, Car };

export default function Services() {
  const { ref, isInView } = useScrollReveal();
  const waLink = `https://wa.me/${brand.whatsapp}?text=${brand.waMessage}`;

  return (
    <section id="services" className="bg-neutral-50">
      <div className="max-w-7xl mx-auto container-pad section-pad">
        <div className="text-center mb-14">
          <SectionLabel>What We Offer</SectionLabel>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-dark-900">
            Our Services
          </h2>
          <p className="mt-3 text-neutral-600 max-w-xl mx-auto">
            Three flexible travel options designed around your journey — not the other way around.
          </p>
        </div>

        <motion.div
          ref={ref}
          className="grid md:grid-cols-3 gap-7"
        >
          {services.map(({ id, title, description, icon, image }, i) => {
            const Icon = iconMap[icon] || Car;
            return (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 32 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.12, ease: 'easeOut' }}
                className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1.5"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/50 to-transparent" />
                  {/* Icon badge */}
                  <div className="absolute bottom-4 left-4 bg-gold-500 rounded-xl p-2.5">
                    <Icon size={18} className="text-dark-900" strokeWidth={2.5} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-dark-900 mb-2">{title}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed mb-5">{description}</p>
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-dark-900 hover:text-gold-600 transition-colors group/link"
                  >
                    Explore Now
                    <ArrowRight
                      size={15}
                      className="group-hover/link:translate-x-1 transition-transform"
                    />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
