import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Calendar, ArrowRight, Star, Heart } from 'lucide-react';
import { BUSINESS_INFO } from '../../config/business';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 bg-gradient-to-b from-parlour-blush via-parlour-cream to-parlour-cream">
      {/* Delicate background decorative gradients */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-parlour-blush-medium/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-parlour-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-parlour-rose-dark bg-white/80 border border-parlour-rose/20 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-parlour-gold" />
              <span>Luxury Beauty & Bridal Experience</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-parlour-burgundy font-medium leading-[1.15] tracking-tight">
              Enhance Your <br />
              <span className="italic font-normal text-gold-gradient font-serif">Natural Beauty</span>
            </h1>

            <p className="text-lg sm:text-xl font-light tracking-wide text-parlour-rose-dark/90 font-sans">
              Hair • Skin • Makeup • Bridal • Self Care
            </p>

            <p className="text-base text-parlour-muted max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
              Step into our serene sanctuary of elegance. From signature hair transformations and restorative hydra-facials to bespoke wedding glamour, we celebrate your unique radiance.
            </p>

            {/* Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                to="/booking"
                className="btn-primary w-full sm:w-auto px-8 py-4 text-sm font-semibold tracking-wide uppercase shadow-lg group"
              >
                <Calendar className="w-4 h-4 mr-2 text-parlour-gold-light group-hover:rotate-12 transition-transform" />
                Book Appointment
              </Link>
              <Link
                to="/services"
                className="btn-secondary w-full sm:w-auto px-8 py-4 text-sm font-semibold tracking-wide group"
              >
                Our Services
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Social Proof Badges */}
            <div className="pt-6 border-t border-parlour-rose/15 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-parlour-charcoal/80">
              <div className="flex items-center gap-1.5">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="font-semibold text-parlour-burgundy">4.9 / 5</span>
                <span className="text-xs text-parlour-muted">(1,200+ Reviews)</span>
              </div>
              <div className="hidden sm:block h-4 w-px bg-parlour-rose/20" />
              <div className="flex items-center gap-1.5 text-xs sm:text-sm">
                <Heart className="w-4 h-4 text-parlour-rose fill-parlour-rose" />
                <span>10,000+ Happy Clients</span>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Salon & Model Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Frame */}
              <div className="absolute -inset-3 rounded-[2.5rem] bg-gradient-to-tr from-parlour-gold/30 via-parlour-rose/20 to-parlour-blush-medium/40 blur-lg" />
              
              <div className="relative rounded-[2rem] overflow-hidden border-2 border-white/80 shadow-2xl bg-white aspect-[4/5] group">
                <img
                  src={BUSINESS_INFO.heroImage}
                  alt="Aura Luxury Beauty Salon and Makeup Artist"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
                
                {/* Floating Overlay Badge: 20% Off Offer */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-soft-lg border border-parlour-rose/20 flex items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-parlour-rose-dark block">Special Glow Deal</span>
                    <h4 className="font-serif font-bold text-parlour-burgundy text-base leading-tight">Flat 20% OFF This Month</h4>
                  </div>
                  <Link
                    to="/offers"
                    className="btn-primary text-xs font-semibold px-4 py-2 rounded-full whitespace-nowrap"
                  >
                    Claim
                  </Link>
                </div>

                {/* Floating Top Pill */}
                <div className="absolute top-5 left-5 bg-parlour-burgundy/90 backdrop-blur-sm text-parlour-gold-light text-xs font-medium px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
                  <Sparkles className="w-3.5 h-3.5 text-parlour-gold" />
                  Premium Salon Studio
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
