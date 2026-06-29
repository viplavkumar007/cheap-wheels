import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function Section({ id, className = '', children, bg = 'white' }) {
  const { ref, isInView } = useScrollReveal();

  const bgs = {
    white: 'bg-white',
    grey: 'bg-neutral-50',
    dark: 'bg-dark-900',
  };

  return (
    <section id={id} className={`${bgs[bg]} ${className}`}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 32 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="max-w-7xl mx-auto container-pad section-pad"
      >
        {children}
      </motion.div>
    </section>
  );
}
