import { motion } from 'framer-motion';

export default function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  icon,
  ...props
}) {
  const base =
    'inline-flex items-center gap-2 font-semibold text-sm tracking-wide rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gold-500 select-none cursor-pointer';

  const variants = {
    primary:
      'bg-dark-900 text-white px-7 py-3.5 hover:bg-dark-700 active:scale-95 shadow-md hover:shadow-lg',
    gold:
      'bg-gold-500 text-dark-900 px-7 py-3.5 hover:bg-gold-400 active:scale-95 shadow-gold hover:shadow-lg font-bold',
    outline:
      'border-2 border-dark-900 text-dark-900 px-7 py-3 hover:bg-dark-900 hover:text-white active:scale-95',
    ghost:
      'text-dark-900 underline underline-offset-4 decoration-gold-500 hover:text-gold-600 px-2 py-1',
  };

  const Tag = href ? 'a' : motion.button;
  const extra = href
    ? { href, target: href.startsWith('http') ? '_blank' : undefined, rel: 'noopener noreferrer' }
    : {
        whileHover: { y: -2 },
        whileTap: { scale: 0.96 },
        onClick,
      };

  return (
    <Tag className={`${base} ${variants[variant]} ${className}`} {...extra} {...props}>
      {icon && <span className="w-4 h-4">{icon}</span>}
      {children}
    </Tag>
  );
}
