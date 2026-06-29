import { motion } from 'framer-motion';
import { MessageCircle, ChevronDown, CheckCircle2 } from 'lucide-react';
import { hero, brand } from '../../data/siteContent';

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease: 'easeOut', delay },
});

export default function Hero() {
  const waLink = `https://wa.me/${brand.whatsapp}?text=${brand.waMessage}`;

  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden bg-white pt-16"
    >
      {/* Background geometry */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[60%] h-full bg-neutral-50 clip-hero" />
        <div
          className="absolute top-20 right-10 w-[480px] h-[480px] rounded-full opacity-30"
          style={{
            background:
              'radial-gradient(circle, rgba(240,180,41,0.18) 0%, transparent 70%)',
          }}
        />
        {/* Diagonal lines decoration */}
        <svg
          className="absolute bottom-0 left-0 w-full h-24 text-neutral-100"
          preserveAspectRatio="none"
          viewBox="0 0 1440 96"
        >
          <path d="M0 96 L1440 0 L1440 96 Z" fill="currentColor" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center py-12 md:py-20">
          {/* Left — content */}
          <div className="order-2 lg:order-1">
            <motion.div {...fade(0.1)}>
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-gold-600 mb-6">
                <span className="h-px w-8 bg-gold-500" />
                {hero.eyebrow}
                <span className="h-px w-8 bg-gold-500" />
              </span>
            </motion.div>

            <motion.h1
              {...fade(0.22)}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold text-dark-900 leading-[0.92] mb-6"
              style={{ letterSpacing: '-0.02em' }}
            >
              {hero.heading.split('\n').map((line, i) => (
                <span key={i} className="block">
                  {i === 1 ? (
                    <>
                      <span className="text-gold-500">Our</span> Priority.
                    </>
                  ) : (
                    line
                  )}
                </span>
              ))}
            </motion.h1>

            <motion.p
              {...fade(0.34)}
              className="text-neutral-600 text-base md:text-lg leading-relaxed max-w-lg mb-8"
            >
              {hero.subheading}
            </motion.p>

            <motion.div {...fade(0.44)} className="flex flex-wrap gap-3 mb-10">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-dark-900 text-white px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-dark-700 hover:-translate-y-0.5 transition-all duration-200 shadow-md hover:shadow-lg"
              >
                <MessageCircle size={16} />
                {hero.cta1}
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 border-2 border-dark-900 text-dark-900 px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-dark-900 hover:text-white transition-all duration-200"
              >
                {hero.cta2}
              </a>
            </motion.div>

            {/* Trust points */}
            <motion.div {...fade(0.52)} className="flex flex-wrap gap-x-5 gap-y-2">
              {hero.trustPoints.map(({ label }) => (
                <span key={label} className="flex items-center gap-1.5 text-xs font-medium text-neutral-600">
                  <CheckCircle2 size={13} className="text-gold-500 flex-shrink-0" />
                  {label}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right — car image */}
          <motion.div
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            <div className="relative w-full max-w-lg lg:max-w-none">
              {/* Image frame */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={hero.heroImage}
                  alt="Premium rental car — Cheap Wheels"
                  className="w-full h-[340px] md:h-[440px] lg:h-[520px] object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/20 to-transparent" />
              </div>

              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.4 }}
                className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-card px-5 py-3 border border-neutral-100"
              >
                <div className="text-2xl font-display font-extrabold text-dark-900">500+</div>
                <div className="text-xs text-neutral-500 font-medium">Happy Customers</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.85, duration: 0.4 }}
                className="absolute -top-4 -right-4 bg-gold-500 rounded-2xl shadow-gold px-5 py-3"
              >
                <div className="text-2xl font-display font-extrabold text-dark-900">4.8★</div>
                <div className="text-xs text-dark-900 font-semibold">Customer Rating</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#services"
        aria-label="Scroll down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-neutral-400 hover:text-gold-500 transition-colors"
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
        >
          <ChevronDown size={22} />
        </motion.div>
      </motion.a>
    </section>
  );
}
