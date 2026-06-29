import { motion } from 'framer-motion';
import { Users, Fuel, Settings, MessageCircle } from 'lucide-react';
import { fleet, brand } from '../../data/siteContent';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import SectionLabel from '../ui/SectionLabel';

export default function Fleet() {
  const { ref, isInView } = useScrollReveal();
  const waLink = (car) =>
    `https://wa.me/${brand.whatsapp}?text=Hi%20Cheap%20Wheels%2C%20I%20want%20to%20enquire%20about%20${encodeURIComponent(car)}%20rental.`;

  return (
    <section id="fleet" className="bg-white">
      <div className="max-w-7xl mx-auto container-pad section-pad">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <SectionLabel>Our Fleet</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold text-dark-900">
              Popular Cars for Rent
            </h2>
          </div>
          <p className="text-sm text-neutral-500 max-w-xs text-right hidden md:block">
            All vehicles are well-maintained, sanitised and driven by verified drivers.
          </p>
        </div>

        <motion.div
          ref={ref}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {fleet.map((car, i) => (
            <motion.div
              key={car.name}
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07, ease: 'easeOut' }}
              className="group bg-white border border-neutral-100 rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
            >
              {/* Car image */}
              <div className="relative h-44 bg-neutral-50 overflow-hidden">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-dark-900/80 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                  {car.type}
                </div>
              </div>

              {/* Details */}
              <div className="p-4">
                <h3 className="font-display text-lg font-bold text-dark-900 mb-3">{car.name}</h3>

                <div className="grid grid-cols-2 gap-x-3 gap-y-2 mb-4">
                  <div className="flex items-center gap-1.5 text-xs text-neutral-500">
                    <Users size={12} className="text-gold-500" />
                    {car.seats} Seats
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-neutral-500">
                    <Fuel size={12} className="text-gold-500" />
                    {car.fuel}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-neutral-500 col-span-2">
                    <Settings size={12} className="text-gold-500" />
                    {car.transmission}
                  </div>
                </div>

                <a
                  href={waLink(car.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-dark-900 text-white text-xs font-semibold py-2.5 rounded-xl hover:bg-gold-500 hover:text-dark-900 transition-all duration-200"
                >
                  <MessageCircle size={13} />
                  Enquire Now
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
