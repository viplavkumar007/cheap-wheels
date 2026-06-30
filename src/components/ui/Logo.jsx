const logoSizes = {
  sm: 'h-14 w-14',
  mobileNav: 'h-14 w-14',
  nav: 'h-16 w-16',
  default: 'h-12 w-48',
  hero: 'h-28 w-full max-w-md sm:h-32',
};

export default function Logo({ size = 'default' }) {
  return (
    <img
      src="/cheap-wheels-final-logo.png"
      alt="Cheap Wheels Car Rental"
      className={`${logoSizes[size] || logoSizes.default} block select-none rounded-md object-contain`}
      draggable="false"
    />
  );
}
