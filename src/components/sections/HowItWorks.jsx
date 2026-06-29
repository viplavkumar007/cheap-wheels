import { motion } from 'framer-motion';
import { howItWorks } from '../../data/siteContent';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import SectionLabel from '../ui/SectionLabel';

export default function HowItWorks() {
  const { ref, isInView } = useScrollReveal();

  return (
    <section id="how-it-works" className="bg-dark-900">
      <div className="max-w-7xl mx-auto container-pad section-pad">
        <div className="text-center mb-14">
          <SectionLabel>Simple Process</SectionLabel>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white">
            How It Works
          </h2>
          <p className="mt-3 text-neutral-400 max-w-lg mx-auto">
            Booking your ride with Cheap Wheels takes under two minutes.
          </p>
        </div>

        <motion.div
          ref={ref}
          className="relative grid md:grid-cols-4 gap-8"
        >
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-neutral-700" />

          {howItWorks.map(({ step, title, desc }, i) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.13, ease: 'easeOut' }}
              className="relative flex flex-col items-center text-center md:items-center"
            >
              {/* Step circle */}
              <div className="relative z-10 w-20 h-20 rounded-full bg-dark-800 border-2 border-neutral-700 flex items-center justify-center mb-5 group-hover:border-gold-500">
                <span className="font-display text-2xl font-extrabold text-gold-500">{step}</span>
              </div>

              <h3 className="font-display text-lg font-bold text-white mb-2">{title}</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">{desc}</p>

              {/* Mobile connector */}
              {i < howItWorks.length - 1 && (
                <div className="md:hidden w-px h-8 bg-neutral-700 mt-5" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
