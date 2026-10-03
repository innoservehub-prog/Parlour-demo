import React from 'react';
import { Star, Sparkles, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../../config/business';

export default function Testimonials() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-tag">
            <Sparkles className="w-3.5 h-3.5" />
            Client Love
          </span>
          <h2 className="section-title">
            What Our Clients Say
          </h2>
          <p className="section-subtitle">
            Cherished stories and heartwarming experiences from the wonderful women who trust Aura for their beauty rituals.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className="bg-parlour-blush/30 rounded-3xl p-8 border border-parlour-rose/20 shadow-soft hover:shadow-soft-lg hover:border-parlour-rose/40 transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div className="space-y-4">
                {/* Rating stars & Quote icon */}
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-parlour-rose/25 group-hover:text-parlour-rose/40 transition-colors" />
                </div>

                {/* Review Text */}
                <p className="text-sm sm:text-base text-parlour-charcoal/90 italic font-serif leading-relaxed font-normal">
                  "{review.comment}"
                </p>
              </div>

              {/* Reviewer Profile */}
              <div className="pt-6 mt-6 border-t border-parlour-rose/15 flex items-center gap-3.5">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-parlour-rose/30 shadow-sm"
                  loading="lazy"
                />
                <div>
                  <h3 className="font-serif font-semibold text-parlour-burgundy text-base">
                    {review.name}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-parlour-rose-dark font-medium">
                    <span>{review.service}</span>
                    <span>•</span>
                    <span className="text-parlour-muted">{review.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
