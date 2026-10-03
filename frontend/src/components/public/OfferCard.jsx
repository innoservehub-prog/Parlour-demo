import React from 'react';
import { Link } from 'react-router-dom';
import { Tag, Calendar, Sparkles, ArrowRight } from 'lucide-react';

export default function OfferCard({ offer }) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-parlour-rose/20 shadow-soft hover:shadow-soft-lg transition-all duration-300 flex flex-col justify-between group">
      <div>
        {/* Card Top Image & Badges */}
        <div className="relative aspect-[16/9] overflow-hidden">
          <img
            src={offer.image}
            alt={offer.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-parlour-burgundy-deep/70 via-transparent to-transparent" />
          
          <div className="absolute top-3 left-3 bg-parlour-burgundy/90 text-parlour-gold-light text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
            {offer.badge}
          </div>

          <div className="absolute bottom-3 left-3 right-3 text-white">
            <span className="text-[11px] uppercase tracking-widest text-parlour-gold-light block font-medium">
              {offer.subtitle}
            </span>
            <h3 className="font-serif font-bold text-xl leading-tight">
              {offer.title}
            </h3>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-6 space-y-3">
          <p className="text-sm text-parlour-muted font-light leading-relaxed">
            {offer.description}
          </p>

          <div className="flex items-center justify-between pt-2 text-xs">
            <div className="flex items-center gap-1.5 text-parlour-rose-dark font-medium bg-parlour-blush px-2.5 py-1 rounded-full border border-parlour-rose/15">
              <Tag className="w-3.5 h-3.5" />
              <span>Code: <strong>{offer.code}</strong></span>
            </div>
            <span className="text-parlour-muted italic">
              {offer.validity}
            </span>
          </div>
        </div>
      </div>

      {/* Card CTA */}
      <div className="px-6 pb-6 pt-1">
        <Link
          to={`/booking?offer=${encodeURIComponent(offer.code)}&service=${encodeURIComponent(offer.title)}`}
          className="btn-primary w-full text-xs font-semibold uppercase tracking-wider py-3 rounded-full flex items-center justify-center gap-1.5 shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-parlour-gold-light" />
          Claim Offer & Book
        </Link>
      </div>
    </div>
  );
}
