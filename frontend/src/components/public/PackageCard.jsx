import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Sparkles, Heart } from 'lucide-react';

export default function PackageCard({ pkg }) {
  const isPopular = pkg.highlighted;

  return (
    <div
      className={`rounded-3xl p-8 transition-all duration-500 relative flex flex-col justify-between ${
        isPopular
          ? 'bg-gradient-to-b from-parlour-burgundy to-parlour-burgundy-dark text-white shadow-soft-lg scale-105 border-2 border-parlour-gold/50 z-20'
          : 'bg-white text-parlour-charcoal shadow-soft border border-parlour-rose/20 hover:border-parlour-rose/40 hover:shadow-soft-lg'
      }`}
    >
      {/* Top Tag */}
      {pkg.tag && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span
            className={`px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm flex items-center gap-1.5 ${
              isPopular
                ? 'bg-gradient-to-r from-parlour-gold to-parlour-gold-light text-parlour-burgundy font-bold shadow-glow-gold'
                : 'bg-parlour-blush text-parlour-rose-dark border border-parlour-rose/20'
            }`}
          >
            {isPopular && <Sparkles className="w-3 h-3 text-parlour-burgundy" />}
            {pkg.tag}
          </span>
        </div>
      )}

      <div>
        {/* Package Header */}
        <div className="text-center pt-2 pb-6 border-b border-parlour-rose/20">
          <h3
            className={`font-serif text-2xl font-bold mb-2 ${
              isPopular ? 'text-white' : 'text-parlour-burgundy'
            }`}
          >
            {pkg.name}
          </h3>
          <p
            className={`text-xs font-light leading-relaxed max-w-xs mx-auto mb-4 ${
              isPopular ? 'text-parlour-blush-soft/80' : 'text-parlour-muted'
            }`}
          >
            {pkg.description}
          </p>
          <div className="flex items-baseline justify-center gap-1">
            <span
              className={`font-serif text-4xl font-extrabold ${
                isPopular ? 'text-parlour-gold-light' : 'text-parlour-burgundy'
              }`}
            >
              {pkg.priceDisplay}
            </span>
            <span
              className={`text-xs ${
                isPopular ? 'text-parlour-blush-soft/60' : 'text-parlour-muted'
              }`}
            >
              / package
            </span>
          </div>
        </div>

        {/* Feature List */}
        <div className="py-6 space-y-3">
          <p
            className={`text-xs font-bold uppercase tracking-wider ${
              isPopular ? 'text-parlour-gold-light' : 'text-parlour-rose-dark'
            }`}
          >
            What's Included:
          </p>
          <ul className="space-y-2.5">
            {pkg.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm">
                <div
                  className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                    isPopular
                      ? 'bg-parlour-gold/20 text-parlour-gold-light'
                      : 'bg-parlour-blush text-parlour-rose-dark'
                  }`}
                >
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span
                  className={
                    isPopular ? 'text-parlour-blush-soft/90 font-light' : 'text-parlour-charcoal/80'
                  }
                >
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Book Now Button (Navigates to Booking with preselected service) */}
      <div className="pt-4">
        <Link
          to={`/booking?service=${encodeURIComponent(pkg.name)}`}
          className={`w-full py-3.5 px-6 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider text-center flex items-center justify-center gap-2 transition-all duration-300 shadow-md ${
            isPopular
              ? 'btn-gold shadow-glow-gold'
              : 'btn-primary'
          }`}
        >
          <Sparkles className="w-4 h-4" />
          Book Now
        </Link>
      </div>
    </div>
  );
}
