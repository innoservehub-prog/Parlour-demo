import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Sparkles, Heart } from 'lucide-react';
import { BUSINESS_INFO } from '../../config/business';

export default function CtaSection() {
  return (
    <section className="py-20 bg-parlour-blush relative overflow-hidden">
      {/* Background soft ambient blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[36rem] h-[36rem] bg-parlour-rose/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-parlour-rose-dark bg-white border border-parlour-rose/20 shadow-sm mb-6">
          <Heart className="w-3.5 h-3.5 text-parlour-rose fill-parlour-rose" />
          <span>Your Sanctuary Of Wellness</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-parlour-burgundy font-medium leading-tight mb-6">
          Because You Deserve <br />
          <span className="italic font-serif text-gold-gradient font-normal">To Feel Beautiful Every Day</span>
        </h2>

        <p className="text-base sm:text-lg text-parlour-muted max-w-xl mx-auto mb-10 leading-relaxed font-light">
          Whether it’s a quick rejuvenating facial, a complete hair transformation, or wedding day bridal styling, our expert team is ready to welcome you.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/booking"
            className="btn-primary px-9 py-4 text-sm font-semibold tracking-wider uppercase shadow-xl hover:scale-105 transition-transform group"
          >
            <Calendar className="w-4 h-4 mr-2 text-parlour-gold-light group-hover:rotate-12 transition-transform" />
            Book Your Appointment
          </Link>
          <a
            href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent('Hello Aura Salon, I would like to enquire about your services.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary px-8 py-4 text-sm font-semibold tracking-wide"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
