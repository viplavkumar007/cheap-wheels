export default function SectionLabel({ children }) {
  return (
    <div className="inline-flex items-center gap-2 mb-4">
      <span className="h-px w-8 bg-gold-500" />
      <span className="text-xs font-bold uppercase tracking-[0.18em] text-gold-600">
        {children}
      </span>
      <span className="h-px w-8 bg-gold-500" />
    </div>
  );
}
