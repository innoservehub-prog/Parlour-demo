import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { FEATURED_SERVICES } from '../../config/business';

export default function FeaturedServices() {
  return (
    <section className="py-20 bg-parlour-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-tag">
            <Sparkles className="w-3.5 h-3.5" />
            Signature Treatments
          </span>
          <h2 className="section-title">
            Our Featured Services
          </h2>
          <p className="section-subtitle">
            Crafted with passion and precision to pamper you from head to toe using premier luxury formulations.
          </p>
        </div>

        {/* 4 Featured Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURED_SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl overflow-hidden border border-parlour-rose/20 shadow-soft hover:shadow-soft-lg transition-all duration-500 group flex flex-col justify-between"
            >
              <div>
                {/* Card Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-parlour-burgundy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-parlour-burgundy text-xs font-semibold px-3 py-1 rounded-full shadow-sm border border-parlour-rose/20">
                    Starts {service.priceStarts}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <h3 className="font-serif font-semibold text-xl text-parlour-burgundy mb-2 group-hover:text-parlour-rose-dark transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-sm text-parlour-muted font-light leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="px-6 pb-6 pt-2">
                <Link
                  to={`/booking?service=${encodeURIComponent(service.name)}`}
                  className="w-full py-2.5 px-4 rounded-full text-xs font-semibold uppercase tracking-wider text-parlour-burgundy bg-parlour-blush hover:bg-parlour-rose hover:text-white border border-parlour-rose/20 transition-all duration-300 flex items-center justify-center gap-1.5"
                >
                  Book Service
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Services Link */}
        <div className="mt-12 text-center">
          <Link
            to="/services"
            className="btn-secondary px-8 py-3 text-sm font-semibold tracking-wide inline-flex items-center gap-2"
          >
            Explore Full Menu & Prices
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
