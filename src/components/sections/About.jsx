import { motion } from 'framer-motion';
import { about } from '../../data/siteContent';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import SectionLabel from '../ui/SectionLabel';

export default function About() {
  const { ref, isInView } = useScrollReveal();

  return (
    <section id="about" className="bg-white">
      <div className="max-w-7xl mx-auto container-pad section-pad">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -32 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, ease: 'easeOut' }}
          >
            <SectionLabel>Our Story</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold text-dark-900 mb-6">
              {about.heading}
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-10 text-base md:text-lg">
              {about.body}
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-5">
              {about.stats.map(({ value, label }) => (
                <div
                  key={label}
                  className="bg-neutral-50 rounded-2xl px-6 py-5 border border-neutral-100"
                >
                  <div className="font-display text-3xl font-extrabold text-dark-900 mb-1">
                    {value}
                  </div>
                  <div className="text-xs font-medium text-neutral-500 uppercase tracking-wide">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Logo image */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, ease: 'easeOut', delay: 0.15 }}
            className="relative"
          >
            <div className="relative flex h-[360px] items-center justify-center overflow-hidden rounded-2xl border border-neutral-100 bg-white px-6 shadow-2xl md:h-[420px] lg:h-[520px]">
              <img
                src="/cheap-wheels-hero-logo.png"
                alt="Cheap Wheels"
                className="w-full max-w-[560px] object-contain"
                loading="lazy"
              />
            </div>
            {/* Gold accent bar */}
            <div className="absolute -bottom-3 -left-3 w-24 h-24 border-4 border-gold-500 rounded-2xl -z-10" />
            <div className="absolute -top-3 -right-3 w-16 h-16 bg-gold-500/20 rounded-xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
