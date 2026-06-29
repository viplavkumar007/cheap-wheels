import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  CalendarDays,
  Car,
  CheckCircle2,
  ChevronDown,
  Clock,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  User,
  Users,
} from 'lucide-react';
import { hero, brand } from '../../data/siteContent';

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease: 'easeOut', delay },
});

const inputClass =
  'w-full rounded-xl border border-neutral-200 bg-neutral-50 px-3.5 py-3 text-sm font-medium text-dark-900 outline-none transition focus:border-gold-500 focus:bg-white';

const FieldLabel = ({ icon, children }) => (
  <span className="mb-1.5 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-neutral-500">
    {icon}
    {children}
  </span>
);

export default function Hero() {
  const waLink = `https://wa.me/${brand.whatsapp}?text=${brand.waMessage}`;
  const [tripForm, setTripForm] = useState({
    pickup: '',
    drop: '',
    date: '',
    time: '',
    passengers: '',
    carType: 'Sedan',
    name: '',
    phone: '',
  });

  const updateTripForm = (event) => {
    const { name, value } = event.target;
    setTripForm((current) => ({ ...current, [name]: value }));
  };

  const submitTripForm = (event) => {
    event.preventDefault();

    const message = [
      'Hi Cheap Wheels, I want to enquire about One Way Intercity Travel.',
      `Pickup city: ${tripForm.pickup || 'Not shared'}`,
      `Drop city: ${tripForm.drop || 'Not shared'}`,
      `Travel date: ${tripForm.date || 'Not shared'}`,
      `Pickup time: ${tripForm.time || 'Not shared'}`,
      `Passengers: ${tripForm.passengers || 'Not shared'}`,
      `Preferred car: ${tripForm.carType || 'Not shared'}`,
      `Name: ${tripForm.name || 'Not shared'}`,
      `Phone: ${tripForm.phone || 'Not shared'}`,
    ].join('\n');

    window.open(`https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
  };

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
          {/* Left - content */}
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
                <span
                  key={label}
                  className="flex items-center gap-1.5 text-xs font-medium text-neutral-600"
                >
                  <CheckCircle2 size={13} className="text-gold-500 flex-shrink-0" />
                  {label}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right - intercity enquiry */}
          <motion.div
            className="order-1 lg:order-2 flex min-w-0 justify-center lg:justify-end"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            <form
              onSubmit={submitTripForm}
              className="w-full max-w-full rounded-2xl bg-white p-5 shadow-2xl border border-neutral-100 sm:max-w-lg sm:p-6 lg:max-w-none lg:p-7"
            >
              <div className="mb-5 flex items-start justify-between gap-4 border-b border-neutral-100 pb-5">
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-gold-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-gold-700">
                    <MapPin size={13} />
                    One Way Intercity
                  </span>
                  <h2 className="mt-3 font-display text-3xl font-extrabold leading-none text-dark-900 sm:text-4xl">
                    Get Trip Quote
                  </h2>
                </div>
                <div className="hidden rounded-2xl bg-dark-900 p-3 text-gold-400 sm:block">
                  <Car size={26} />
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <label className="block">
                  <FieldLabel icon={<MapPin size={13} />}>Pickup</FieldLabel>
                  <input
                    name="pickup"
                    value={tripForm.pickup}
                    onChange={updateTripForm}
                    type="text"
                    placeholder="Patna"
                    className={inputClass}
                  />
                </label>

                <label className="block">
                  <FieldLabel icon={<MapPin size={13} />}>Drop</FieldLabel>
                  <input
                    name="drop"
                    value={tripForm.drop}
                    onChange={updateTripForm}
                    type="text"
                    placeholder="Ranchi"
                    className={inputClass}
                  />
                </label>

                <label className="block">
                  <FieldLabel icon={<CalendarDays size={13} />}>Date</FieldLabel>
                  <input
                    name="date"
                    value={tripForm.date}
                    onChange={updateTripForm}
                    type="date"
                    className={inputClass}
                  />
                </label>

                <label className="block">
                  <FieldLabel icon={<Clock size={13} />}>Time</FieldLabel>
                  <input
                    name="time"
                    value={tripForm.time}
                    onChange={updateTripForm}
                    type="time"
                    className={inputClass}
                  />
                </label>

                <label className="block">
                  <FieldLabel icon={<Users size={13} />}>Passengers</FieldLabel>
                  <input
                    name="passengers"
                    value={tripForm.passengers}
                    onChange={updateTripForm}
                    type="number"
                    min="1"
                    placeholder="4"
                    className={inputClass}
                  />
                </label>

                <label className="block">
                  <FieldLabel icon={<Car size={13} />}>Car Type</FieldLabel>
                  <select
                    name="carType"
                    value={tripForm.carType}
                    onChange={updateTripForm}
                    className={inputClass}
                  >
                    <option>Sedan</option>
                    <option>SUV</option>
                    <option>Innova</option>
                    <option>Tempo Traveller</option>
                  </select>
                </label>

                <label className="block">
                  <FieldLabel icon={<User size={13} />}>Name</FieldLabel>
                  <input
                    name="name"
                    value={tripForm.name}
                    onChange={updateTripForm}
                    type="text"
                    placeholder="Your name"
                    className={inputClass}
                  />
                </label>

                <label className="block">
                  <FieldLabel icon={<Phone size={13} />}>Phone</FieldLabel>
                  <input
                    name="phone"
                    value={tripForm.phone}
                    onChange={updateTripForm}
                    type="tel"
                    placeholder="Mobile number"
                    className={inputClass}
                  />
                </label>
              </div>

              <button
                type="submit"
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-dark-900 px-6 py-3.5 text-sm font-bold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-dark-700 hover:shadow-lg"
              >
                Send Intercity Enquiry
                <Send size={15} />
              </button>

              <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                {['No return fare', 'Quick quote', 'Pan India'].map((item) => (
                  <span
                    key={item}
                    className="rounded-xl bg-gold-50 px-2 py-2 text-[11px] font-bold text-dark-900"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </form>
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
        <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}>
          <ChevronDown size={22} />
        </motion.div>
      </motion.a>
    </section>
  );
}
