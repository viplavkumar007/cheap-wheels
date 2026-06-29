import { motion } from 'framer-motion';
import { brand } from '../../data/siteContent';

export default function WhatsAppFloat() {
  const waLink = `https://wa.me/${brand.whatsapp}?text=${brand.waMessage}`;

  return (
    <motion.a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: 'spring', stiffness: 300, damping: 20 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200"
    >
      {/* Pulse ring */}
      <motion.span
        className="absolute inset-0 rounded-full bg-[#25D366]"
        animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
        transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
      />
      <svg
        className="relative z-10 h-7 w-7 text-white"
        viewBox="0 0 32 32"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M16.02 3.2c-7.02 0-12.73 5.7-12.73 12.72 0 2.25.59 4.44 1.7 6.37L3.2 28.8l6.68-1.75a12.7 12.7 0 0 0 6.14 1.56c7.02 0 12.73-5.7 12.73-12.72S23.04 3.2 16.02 3.2Zm0 23.25c-1.9 0-3.75-.51-5.37-1.48l-.39-.23-3.96 1.04 1.06-3.86-.25-.4a10.48 10.48 0 0 1-1.61-5.6c0-5.8 4.72-10.52 10.52-10.52s10.52 4.72 10.52 10.52-4.72 10.53-10.52 10.53Zm5.77-7.88c-.32-.16-1.87-.92-2.16-1.03-.29-.11-.5-.16-.71.16-.21.32-.82 1.03-1 1.24-.18.21-.37.24-.69.08-.32-.16-1.34-.49-2.55-1.57-.94-.84-1.58-1.88-1.76-2.2-.18-.32-.02-.49.14-.65.14-.14.32-.37.48-.55.16-.18.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.71-1.71-.98-2.34-.26-.61-.52-.53-.71-.54h-.61c-.21 0-.56.08-.85.4-.29.32-1.11 1.08-1.11 2.63s1.14 3.06 1.29 3.27c.16.21 2.24 3.42 5.42 4.79.76.33 1.35.52 1.81.67.76.24 1.45.21 2 .13.61-.09 1.87-.76 2.13-1.5.26-.74.26-1.37.18-1.5-.08-.14-.29-.22-.61-.38Z" />
      </svg>
    </motion.a>
  );
}
