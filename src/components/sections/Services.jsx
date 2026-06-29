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
            One way intercity travel is our core focus, with outstation and rental options when
            your plans need them.
          </p>
        </div>

        <motion.div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-7">
          {services.map(({ id, title, description, icon, image }, i) => {
            const Icon = iconMap[icon] || Car;
            const isFeatured = id === 'one-way';

            return (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 32 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.12, ease: 'easeOut' }}
                className={`group relative bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1.5 ${
                  isFeatured
                    ? 'md:col-span-2 lg:col-span-4 border-2 border-gold-500 shadow-[0_18px_55px_rgba(245,158,11,0.24)]'
                    : 'lg:col-span-2 border border-neutral-100'
                }`}
              >
                {isFeatured && (
                  <div className="absolute top-3 right-3 z-10 rounded-full bg-dark-900 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-gold-400 sm:top-4 sm:right-4 sm:text-xs">
                    Most Booked
                  </div>
                )}

                {/* Image */}
                <div
                  className={`relative overflow-hidden ${
                    isFeatured ? 'aspect-[3/2] h-auto sm:aspect-[16/9] lg:aspect-auto lg:h-[36rem]' : 'h-48'
                  }`}
                >
                  <img
                    src={image}
                    alt={title}
                    className={`w-full h-full transition-transform duration-500 ${
                      isFeatured
                        ? 'object-cover object-center group-hover:scale-105'
                        : 'object-cover group-hover:scale-105'
                    }`}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/50 to-transparent" />
                  {/* Icon badge */}
                  <div className="absolute bottom-4 left-4 bg-gold-500 rounded-xl p-2.5">
                    <Icon size={18} className="text-dark-900" strokeWidth={2.5} />
                  </div>
                </div>

                {/* Content */}
                <div className={isFeatured ? 'p-5 sm:p-7 md:p-8' : 'p-6'}>
                  <h3
                    className={`font-display font-bold text-dark-900 mb-2 ${
                      isFeatured ? 'text-2xl leading-none md:text-3xl' : 'text-xl'
                    }`}
                  >
                    {title}
                  </h3>
                  <p
                    className={`text-neutral-600 leading-relaxed mb-5 ${
                      isFeatured ? 'text-base max-w-xl' : 'text-sm'
                    }`}
                  >
                    {description}
                  </p>
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 font-semibold transition-colors group/link ${
                      isFeatured
                        ? 'rounded-full bg-gold-500 px-5 py-3 text-sm text-dark-900 hover:bg-gold-400'
                        : 'text-sm text-dark-900 hover:text-gold-600'
                    }`}
                  >
                    {isFeatured ? 'Book One Way Intercity' : 'Explore Now'}
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
