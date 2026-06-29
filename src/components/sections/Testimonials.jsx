import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../../data/siteContent';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import SectionLabel from '../ui/SectionLabel';

export default function Testimonials() {
  const { ref, isInView } = useScrollReveal();

  return (
    <section id="testimonials" className="bg-neutral-50">
      <div className="max-w-7xl mx-auto container-pad section-pad">
        <div className="text-center mb-14">
          <SectionLabel>Customer Stories</SectionLabel>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-dark-900">
            What Our Riders Say
          </h2>
        </div>

        <motion.div
          ref={ref}
          className="grid md:grid-cols-3 gap-7"
        >
          {testimonials.map(({ name, city, rating, text }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-neutral-100 relative"
            >
              <Quote size={28} className="text-gold-200 absolute top-5 right-5" />
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: rating }).map((_, j) => (
                  <Star key={j} size={14} className="text-gold-500 fill-gold-500" />
                ))}
              </div>
              <p className="text-neutral-700 text-sm leading-relaxed mb-5 italic">"{text}"</p>
              <div>
                <div className="font-semibold text-dark-900 text-sm">{name}</div>
                <div className="text-xs text-neutral-400">{city}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
