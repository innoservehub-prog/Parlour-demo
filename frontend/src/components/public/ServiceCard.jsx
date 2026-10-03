import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Sparkles, ArrowRight } from 'lucide-react';

export default function ServiceCard({ category }) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-parlour-rose/20 shadow-soft hover:shadow-soft-lg transition-all duration-300">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        
        {/* Left: Category Photo & Intro */}
        <div className="lg:col-span-4 relative min-h-[220px] lg:min-h-full">
          <img
            src={category.image}
            alt={category.name}
            className="w-full h-full object-cover object-center absolute inset-0"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-parlour-burgundy-deep/80 via-parlour-burgundy/40 to-transparent flex flex-col justify-end p-6 text-white">
            <span className="text-xs font-semibold uppercase tracking-widest text-parlour-gold-light">Category</span>
            <h3 className="text-2xl font-serif font-bold">{category.name}</h3>
            <p className="text-xs text-parlour-blush-soft/80 mt-1 font-light leading-relaxed">
              {category.subtitle}
            </p>
          </div>
        </div>

        {/* Right: Service Items & Pricing Table */}
        <div className="lg:col-span-8 p-6 sm:p-8 flex flex-col justify-between">
          <div className="divide-y divide-parlour-rose/15">
            {category.items.map((item, index) => (
              <div
                key={index}
                className="py-3.5 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-center justify-between gap-2 group/item hover:bg-parlour-blush/30 px-3 -mx-3 rounded-xl transition-colors"
              >
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <h4 className="font-serif font-semibold text-base text-parlour-burgundy group-hover/item:text-parlour-rose-dark transition-colors">
                      {item.name}
                    </h4>
                    {item.duration && (
                      <span className="text-[11px] text-parlour-muted inline-flex items-center gap-1 bg-parlour-blush px-2 py-0.5 rounded-full">
                        <Clock className="w-3 h-3 text-parlour-rose" />
                        {item.duration}
                      </span>
                    )}
                  </div>
                  {item.desc && (
                    <p className="text-xs text-parlour-muted font-light leading-relaxed">
                      {item.desc}
                    </p>
                  )}
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-3 pt-1 sm:pt-0">
                  <span className="font-serif font-bold text-parlour-burgundy text-lg whitespace-nowrap">
                    ₹{item.price}
                  </span>
                  <Link
                    to={`/booking?service=${encodeURIComponent(item.name)}`}
                    className="text-xs font-semibold uppercase tracking-wider text-parlour-rose-dark hover:text-parlour-burgundy bg-parlour-blush/60 hover:bg-parlour-blush px-3 py-1.5 rounded-full border border-parlour-rose/20 transition-all flex items-center gap-1"
                  >
                    Book
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-parlour-rose/15 flex items-center justify-between text-xs text-parlour-muted">
            <span className="italic">* Prices are inclusive of tax & consultation</span>
            <Link
              to={`/booking?service=${encodeURIComponent(category.name)}`}
              className="text-parlour-burgundy font-semibold hover:underline inline-flex items-center gap-1"
            >
              Book from {category.name} <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
