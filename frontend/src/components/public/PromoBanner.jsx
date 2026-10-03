import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Calendar, Tag } from 'lucide-react';

export default function PromoBanner() {
  return (
    <section className="py-12 bg-parlour-blush relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[2.5rem] bg-gradient-to-r from-parlour-burgundy-dark via-parlour-burgundy to-parlour-rose-dark text-white p-8 sm:p-12 lg:p-16 overflow-hidden shadow-soft-lg">
          
          {/* Decorative glowing circles */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 rounded-full bg-parlour-gold/20 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-80 h-80 rounded-full bg-parlour-rose/30 blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-parlour-gold/20 text-parlour-gold-light border border-parlour-gold/30">
                <Tag className="w-3.5 h-3.5" />
                Special Limited Offer
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white">
                FLAT 20% OFF
              </h2>

              <p className="text-lg sm:text-2xl font-light text-parlour-blush-soft tracking-wide font-sans">
                ON ALL SALON & BRIDAL SERVICES
              </p>

              <p className="text-sm sm:text-base text-parlour-blush-soft/80 font-light max-w-lg">
                Pamper yourself with our signature facials, hair therapies, or bridal makeovers at an exclusive celebratory discount. Use code <span className="font-semibold text-parlour-gold-light bg-black/30 px-2 py-0.5 rounded border border-parlour-gold/30">BEAUTY20</span> upon arrival.
              </p>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row gap-4 items-center">
              <Link
                to="/booking"
                className="btn-gold px-9 py-4 text-sm font-bold uppercase tracking-wider rounded-full shadow-glow-gold hover:scale-105 transition-all"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Book Now
              </Link>
              <Link
                to="/offers"
                className="px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider text-parlour-blush hover:text-white border border-white/20 hover:border-white/50 transition-colors"
              >
                View All Offers
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
