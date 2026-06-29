import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { faqs } from '../../data/siteContent';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import SectionLabel from '../ui/SectionLabel';

function FAQItem({ q, a, index }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-neutral-200 rounded-2xl overflow-hidden bg-white">
      <button
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-semibold text-dark-900 text-sm md:text-base group-hover:text-gold-600 transition-colors">
          {q}
        </span>
        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-neutral-100 group-hover:bg-gold-500 transition-colors flex items-center justify-center">
          <motion.span animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.2 }}>
            {open ? (
              <Minus size={14} className="text-dark-900" />
            ) : (
              <Plus size={14} className="text-dark-900" />
            )}
          </motion.span>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
          >
            <div className="px-6 pb-5">
              <div className="h-px bg-neutral-100 mb-4" />
              <p className="text-sm text-neutral-600 leading-relaxed">{a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const { ref, isInView } = useScrollReveal();

  return (
    <section id="faq" className="bg-white">
      <div className="max-w-7xl mx-auto container-pad section-pad">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-14 items-start">
          {/* Left label */}
          <div>
            <SectionLabel>Got Questions?</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold text-dark-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-neutral-600 text-sm leading-relaxed">
              Everything you need to know before you book. Can't find an answer? Message us directly on WhatsApp.
            </p>
          </div>

          {/* Accordion */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-3"
          >
            {faqs.map((faq, i) => (
              <FAQItem key={i} {...faq} index={i} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
