import { motion } from 'framer-motion';
import {
  BadgeIndianRupee,
  Sparkles,
  Clock,
  UserCheck,
  MessageCircle,
  Route,
} from 'lucide-react';
import { whyUs } from '../../data/siteContent';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import SectionLabel from '../ui/SectionLabel';

const iconMap = { BadgeIndianRupee, Sparkles, Clock, UserCheck, MessageCircle, Route };

export default function WhyUs() {
  const { ref, isInView } = useScrollReveal();

  return (
    <section id="why-us" className="bg-neutral-50">
      <div className="max-w-7xl mx-auto container-pad section-pad">
        <div className="text-center mb-14">
          <SectionLabel>Why Cheap Wheels</SectionLabel>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-dark-900">
            Why Choose Cheap Wheels
          </h2>
          <p className="mt-3 text-neutral-600 max-w-lg mx-auto">
            We built Cheap Wheels around one idea: making reliable travel accessible for every Indian traveller.
          </p>
        </div>

        <motion.div
          ref={ref}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {whyUs.map(({ icon, title, desc }, i) => {
            const Icon = iconMap[icon];
            return (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.09, ease: 'easeOut' }}
                className="group bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-neutral-100"
              >
                <div className="w-12 h-12 rounded-xl bg-dark-900 flex items-center justify-center mb-4 group-hover:bg-gold-500 transition-colors duration-300">
                  <Icon size={22} className="text-white group-hover:text-dark-900 transition-colors duration-300" />
                </div>
                <h3 className="font-display text-lg font-bold text-dark-900 mb-2">{title}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">{desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
