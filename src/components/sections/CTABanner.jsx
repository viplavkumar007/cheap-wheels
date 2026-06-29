import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { brand } from '../../data/siteContent';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function CTABanner() {
  const { ref, isInView } = useScrollReveal();
  const waLink = `https://wa.me/${brand.whatsapp}?text=${brand.waMessage}`;

  return (
    <section className="relative overflow-hidden bg-dark-900">
      {/* Gold glow */}
      <motion.div
        animate={{ scale: [1, 1.12, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
        className="absolute inset-0 pointer-events-none flex items-center justify-center"
      >
        <div
          className="w-[600px] h-[300px] rounded-full"
          style={{ background: 'radial-gradient(ellipse, rgba(240,180,41,0.3) 0%, transparent 70%)' }}
        />
      </motion.div>

      {/* Diagonal stripe */}
      <div
        className="absolute top-0 right-0 w-1/3 h-full opacity-5"
        style={{
          background: 'repeating-linear-gradient(45deg, #F0B429 0px, #F0B429 1px, transparent 1px, transparent 20px)',
        }}
      />

      <div className="relative max-w-7xl mx-auto container-pad py-20 md:py-24 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-gold-500 mb-5">
            <span className="h-px w-8 bg-gold-500" />
            Book Your Ride
            <span className="h-px w-8 bg-gold-500" />
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-extrabold text-white mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-neutral-400 max-w-xl mx-auto mb-8 text-base">
            Book your ride with Cheap Wheels and enjoy affordable, comfortable and reliable travel across India.
          </p>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gold-500 text-dark-900 px-8 py-4 rounded-full font-bold text-sm hover:bg-gold-400 transition-all duration-200 hover:-translate-y-0.5 shadow-gold hover:shadow-lg"
          >
            <MessageCircle size={16} />
            Enquire on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
