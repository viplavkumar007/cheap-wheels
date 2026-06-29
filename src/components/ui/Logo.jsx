export default function Logo({ size = 'default' }) {
  const textSize = size === 'sm' ? 'text-xl' : 'text-2xl';

  return (
    <div className="flex items-center gap-2 select-none">
      {/* SVG Car silhouette with gold arc — inline recreation of the logo mark */}
      <svg
        width={size === 'sm' ? 40 : 52}
        height={size === 'sm' ? 32 : 40}
        viewBox="0 0 52 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Gold arc top */}
        <path
          d="M4 20 C 4 5, 48 5, 48 20"
          stroke="#F0B429"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
        {/* Gold arc bottom */}
        <path
          d="M8 26 C 8 38, 44 38, 44 26"
          stroke="#F0B429"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
        {/* Car body */}
        <path
          d="M5 25 L8 25 L10 19 L16 15 L30 14 L38 18 L44 19 L46 25 L47 25"
          stroke="#1A1A1A"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Roof */}
        <path
          d="M12 19 L16 14 L32 13 L38 18"
          stroke="#1A1A1A"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Windows */}
        <path
          d="M14 18.5 L17 15 L24 14.5 L24 18.5 Z"
          stroke="#1A1A1A"
          strokeWidth="1.2"
          fill="none"
        />
        <path
          d="M25 14.5 L33 14.5 L37 18.5 L25 18.5 Z"
          stroke="#1A1A1A"
          strokeWidth="1.2"
          fill="none"
        />
        {/* Wheels */}
        <circle cx="14" cy="25.5" r="3" stroke="#1A1A1A" strokeWidth="1.8" fill="none" />
        <circle cx="37" cy="25.5" r="3" stroke="#1A1A1A" strokeWidth="1.8" fill="none" />
      </svg>

      <div className="leading-none">
        <div className={`font-display font-extrabold leading-none tracking-tight ${textSize}`}>
          <span className="text-dark-900">CHEAP </span>
          <span className="text-gold-500">WHEELS</span>
        </div>
        {size !== 'sm' && (
          <div className="text-[9px] tracking-widest text-neutral-600 mt-0.5 font-medium uppercase">
            Reliable · Affordable · Always With You
          </div>
        )}
      </div>
    </div>
  );
}
