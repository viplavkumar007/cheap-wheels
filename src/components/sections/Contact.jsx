import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Mail, Phone, MapPin, Send } from 'lucide-react';
import { brand } from '../../data/siteContent';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import SectionLabel from '../ui/SectionLabel';

const tripTypes = ['One Way', 'Outstation', 'Rental'];

export default function Contact() {
  const { ref, isInView } = useScrollReveal();
  const [form, setForm] = useState({
    name: '', phone: '', tripType: '', pickup: '', drop: '', message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Hi Cheap Wheels,%0A%0AName: ${form.name}%0APhone: ${form.phone}%0ATrip Type: ${form.tripType}%0APickup: ${form.pickup}%0ADrop: ${form.drop}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/${brand.whatsapp}?text=${msg}`, '_blank');
  };

  return (
    <section id="contact" className="bg-neutral-50">
      <div className="max-w-7xl mx-auto container-pad section-pad">
        <div className="text-center mb-14">
          <SectionLabel>Get In Touch</SectionLabel>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-dark-900">
            Contact Us
          </h2>
          <p className="mt-3 text-neutral-600 max-w-lg mx-auto">
            Fill the form below and we'll get back to you instantly on WhatsApp.
          </p>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-[1fr_1.6fr] gap-10"
        >
          {/* Contact info */}
          <div className="flex flex-col gap-5">
            <a
              href={`https://wa.me/${brand.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 bg-white rounded-2xl p-5 shadow-card hover:shadow-card-hover transition-all duration-200 border border-neutral-100 hover:-translate-y-0.5"
            >
              <div className="w-11 h-11 rounded-xl bg-dark-900 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500 transition-colors">
                <MessageCircle size={20} className="text-white group-hover:text-dark-900 transition-colors" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-0.5">WhatsApp / Phone</div>
                <div className="font-semibold text-dark-900">{brand.whatsappDisplay}</div>
                <div className="text-xs text-neutral-500 mt-0.5">Tap to chat instantly</div>
              </div>
            </a>

            <a
              href={`mailto:${brand.email}`}
              className="group flex items-start gap-4 bg-white rounded-2xl p-5 shadow-card hover:shadow-card-hover transition-all duration-200 border border-neutral-100 hover:-translate-y-0.5"
            >
              <div className="w-11 h-11 rounded-xl bg-dark-900 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500 transition-colors">
                <Mail size={20} className="text-white group-hover:text-dark-900 transition-colors" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-0.5">Email</div>
                <div className="font-semibold text-dark-900 text-sm break-all">{brand.email}</div>
              </div>
            </a>

            <div className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-card border border-neutral-100">
              <div className="w-11 h-11 rounded-xl bg-dark-900 flex items-center justify-center flex-shrink-0">
                <MapPin size={20} className="text-white" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-0.5">Service Area</div>
                <div className="font-semibold text-dark-900">{brand.serviceArea}</div>
                <div className="text-xs text-neutral-500 mt-0.5">One Way · Outstation · Rental</div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl shadow-card p-7 border border-neutral-100">
            <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-4">
              {[
                { name: 'name', label: 'Your Name', type: 'text', col: 1 },
                { name: 'phone', label: 'Phone Number', type: 'tel', col: 1 },
                { name: 'pickup', label: 'Pickup Location', type: 'text', col: 1 },
                { name: 'drop', label: 'Drop Location', type: 'text', col: 1 },
              ].map(({ name, label, type, col }) => (
                <div key={name} className={col === 2 ? 'sm:col-span-2' : ''}>
                  <label htmlFor={name} className="block text-xs font-semibold text-neutral-500 mb-1.5 uppercase tracking-wide">
                    {label}
                  </label>
                  <input
                    id={name}
                    name={name}
                    type={type}
                    value={form[name]}
                    onChange={handleChange}
                    required={name === 'name' || name === 'phone'}
                    className="w-full border border-neutral-200 rounded-xl px-4 py-3 text-sm text-dark-900 placeholder-neutral-300 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
                    placeholder={`Enter ${label.toLowerCase()}`}
                  />
                </div>
              ))}

              {/* Trip type */}
              <div className="sm:col-span-2">
                <label htmlFor="tripType" className="block text-xs font-semibold text-neutral-500 mb-1.5 uppercase tracking-wide">
                  Trip Type
                </label>
                <select
                  id="tripType"
                  name="tripType"
                  value={form.tripType}
                  onChange={handleChange}
                  required
                  className="w-full border border-neutral-200 rounded-xl px-4 py-3 text-sm text-dark-900 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all bg-white"
                >
                  <option value="">Select trip type</option>
                  {tripTypes.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-xs font-semibold text-neutral-500 mb-1.5 uppercase tracking-wide">
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full border border-neutral-200 rounded-xl px-4 py-3 text-sm text-dark-900 placeholder-neutral-300 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all resize-none"
                  placeholder="Any specific requirements..."
                />
              </div>

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-dark-900 text-white py-3.5 rounded-xl font-semibold text-sm hover:bg-gold-500 hover:text-dark-900 transition-all duration-200 hover:-translate-y-0.5 shadow-md"
                >
                  <Send size={15} />
                  Send via WhatsApp
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
