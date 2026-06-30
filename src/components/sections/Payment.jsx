import { useState } from 'react';
import { motion } from 'framer-motion';
import { BadgeIndianRupee, Check, Copy, QrCode, Smartphone } from 'lucide-react';
import { brand, payment } from '../../data/siteContent';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import SectionLabel from '../ui/SectionLabel';

export default function Payment() {
  const { ref, isInView } = useScrollReveal();
  const [copied, setCopied] = useState(false);

  const copyUpiId = async () => {
    try {
      await navigator.clipboard.writeText(payment.upiId);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="payment" className="bg-white">
      <div className="max-w-7xl mx-auto container-pad section-pad">
        <div className="text-center mb-14">
          <SectionLabel>Easy Payment</SectionLabel>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-dark-900">
            Pay Securely With UPI
          </h2>
          <p className="mt-3 text-neutral-600 max-w-xl mx-auto">
            Scan the Paytm QR code or use the UPI ID below to complete your Cheap Wheels booking payment.
          </p>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-[0.95fr_1.05fr] gap-8 lg:gap-12 items-center"
        >
          <div className="bg-neutral-50 border border-neutral-100 rounded-2xl p-4 sm:p-6 shadow-card">
            <div className="bg-white rounded-xl border border-neutral-100 p-3 sm:p-4">
              <img
                src={payment.qrImage}
                alt={`${payment.provider} QR code for ${payment.merchant}`}
                className="w-full max-w-md mx-auto rounded-lg"
                loading="lazy"
              />
            </div>
          </div>

          <div className="space-y-5">
            <div className="bg-dark-900 rounded-2xl p-6 sm:p-8 text-white shadow-card">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-12 w-12 rounded-xl bg-gold-500 flex items-center justify-center">
                  <QrCode size={23} className="text-dark-900" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gold-300">Accepted Here</p>
                  <h3 className="font-display text-2xl font-extrabold">{payment.provider} UPI Payment</h3>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="rounded-xl bg-white/10 p-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-1">Merchant</p>
                  <p className="font-semibold text-white leading-snug">{payment.merchant}</p>
                </div>
                <div className="rounded-xl bg-white/10 p-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-1">Phone</p>
                  <p className="font-semibold text-white">{payment.phone}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-card border border-neutral-100">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="min-w-0">
                  <p className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-1">UPI ID</p>
                  <p className="font-semibold text-dark-900 break-all">{payment.upiId}</p>
                </div>
                <button
                  type="button"
                  onClick={copyUpiId}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-5 py-3 text-sm font-bold text-dark-900 transition-all duration-200 hover:-translate-y-0.5 hover:bg-gold-400"
                  aria-label="Copy UPI ID"
                >
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                  {copied ? 'Copied' : 'Copy UPI ID'}
                </button>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <a
                href={`upi://pay?pa=${payment.upiId}&pn=${encodeURIComponent(payment.merchant)}`}
                className="group flex items-center gap-4 rounded-2xl bg-neutral-50 p-5 border border-neutral-100 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card-hover"
              >
                <div className="h-11 w-11 rounded-xl bg-dark-900 flex items-center justify-center group-hover:bg-gold-500 transition-colors">
                  <BadgeIndianRupee size={20} className="text-white group-hover:text-dark-900 transition-colors" />
                </div>
                <div>
                  <p className="font-semibold text-dark-900">Open UPI App</p>
                  <p className="text-xs text-neutral-500">Pay using installed apps</p>
                </div>
              </a>

              <a
                href={`https://wa.me/${brand.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl bg-neutral-50 p-5 border border-neutral-100 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card-hover"
              >
                <div className="h-11 w-11 rounded-xl bg-dark-900 flex items-center justify-center group-hover:bg-gold-500 transition-colors">
                  <Smartphone size={20} className="text-white group-hover:text-dark-900 transition-colors" />
                </div>
                <div>
                  <p className="font-semibold text-dark-900">Share Screenshot</p>
                  <p className="text-xs text-neutral-500">Send payment proof on WhatsApp</p>
                </div>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
