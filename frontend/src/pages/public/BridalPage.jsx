import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, UserCheck, Palette, MapPin, Heart, Phone, ArrowRight, MessageCircle } from 'lucide-react';
import { BRIDAL_PACKAGES, BRIDAL_FEATURES, BUSINESS_INFO } from '../../config/business';
import PackageCard from '../../components/public/PackageCard';

export default function BridalPage() {
  const getFeatureIcon = (icon) => {
    switch (icon) {
      case 'UserCheck':
        return <UserCheck className="w-6 h-6 text-parlour-gold" />;
      case 'Palette':
        return <Palette className="w-6 h-6 text-parlour-rose" />;
      case 'MapPin':
        return <MapPin className="w-6 h-6 text-parlour-gold" />;
      case 'Sparkles':
      default:
        return <Sparkles className="w-6 h-6 text-parlour-rose" />;
    }
  };

  return (
    <div className="min-h-screen bg-parlour-cream">
      
      {/* Hero Header */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-parlour-blush via-parlour-blush-soft/50 to-parlour-cream text-center relative overflow-hidden">
        {/* Ambient Blur */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[20rem] bg-parlour-rose/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-parlour-rose-dark bg-white border border-parlour-rose/20 shadow-sm mb-4">
            <Heart className="w-3.5 h-3.5 text-parlour-rose fill-parlour-rose" />
            <span>Couture Bridal Studio</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-parlour-burgundy font-medium leading-tight mb-4">
            Bridal Packages
          </h1>

          <p className="text-xl sm:text-2xl font-serif italic text-parlour-rose-dark max-w-xl mx-auto font-normal">
            For Your Most Special Day
          </p>

          <p className="text-base text-parlour-muted font-light max-w-2xl mx-auto mt-4 leading-relaxed">
            From timeless traditional opulence to modern dewy elegance, our master artists curate an ethereal bridal experience tailored to you.
          </p>
        </div>
      </section>

      {/* Bridal Highlights / Features */}
      <section className="py-12 bg-white border-y border-parlour-rose/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BRIDAL_FEATURES.map((feature, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-parlour-blush/40 border border-parlour-rose/15 space-y-2 text-center sm:text-left"
              >
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center border border-parlour-rose/15 mx-auto sm:mx-0">
                  {getFeatureIcon(feature.icon)}
                </div>
                <h3 className="font-serif font-semibold text-lg text-parlour-burgundy pt-1">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm text-parlour-muted font-light leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Four Package Cards Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="section-tag">
              <Sparkles className="w-3.5 h-3.5" />
              Tailored Bridal Collections
            </span>
            <h2 className="section-title">
              Choose Your Bridal Package
            </h2>
            <p className="section-subtitle">
              All packages include personalized beauty consultations, long-stay setting, and premium makeup artistry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
            {BRIDAL_PACKAGES.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOM PACKAGES AVAILABLE BANNER */}
      <section className="py-16 bg-white border-t border-parlour-rose/15">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-parlour-blush via-parlour-peach to-parlour-blush rounded-3xl p-8 sm:p-12 border border-parlour-rose/25 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8 shadow-soft">
            <div className="space-y-2 max-w-lg">
              <span className="text-xs font-bold uppercase tracking-widest text-parlour-rose-dark">
                Bespoke Arrangements
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-parlour-burgundy">
                CUSTOM PACKAGES AVAILABLE
              </h3>
              <p className="text-sm text-parlour-muted font-light leading-relaxed">
                Planning a destination wedding, sangeet group glam, or multi-day festivities? We can customize a package tailored specifically to your bridal party needs.
              </p>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row gap-3">
              <Link
                to="/contact"
                className="btn-primary text-xs sm:text-sm font-semibold uppercase tracking-wider px-6 py-3.5 rounded-full"
              >
                Contact Us
              </Link>
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent('Hello Aura Salon, I would like to discuss a custom bridal package for my upcoming wedding.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-xs sm:text-sm font-semibold px-6 py-3.5 rounded-full flex items-center justify-center gap-1.5"
              >
                <MessageCircle className="w-4 h-4 text-green-600" />
                WhatsApp Bridal Desk
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
