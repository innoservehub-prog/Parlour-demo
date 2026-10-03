import React, { useState } from 'react';
import { Sparkles, Scissors, Sparkle, Palette, Heart, CheckCircle2 } from 'lucide-react';
import { SERVICE_CATEGORIES } from '../../config/business';
import ServiceCard from '../../components/public/ServiceCard';
import PromoBanner from '../../components/public/PromoBanner';

export default function ServicesPage() {
  const [selectedCat, setSelectedCat] = useState('all');

  const filteredCategories = selectedCat === 'all'
    ? SERVICE_CATEGORIES
    : SERVICE_CATEGORIES.filter(cat => cat.id === selectedCat);

  return (
    <div className="min-h-screen bg-parlour-cream">
      
      {/* Header Banner */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-parlour-blush via-parlour-blush-soft/40 to-parlour-cream text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="section-tag">
            <Sparkles className="w-3.5 h-3.5" />
            Complete Service Menu & Pricing
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-parlour-burgundy font-medium leading-tight mb-4">
            Our Services
          </h1>
          <p className="text-xl sm:text-2xl font-serif italic text-parlour-rose-dark max-w-xl mx-auto font-normal">
            Beauty Solutions For Every You
          </p>
        </div>
      </section>

      {/* Category Tabs */}
      <div className="sticky top-[73px] z-30 bg-white/90 backdrop-blur-md border-y border-parlour-rose/15 py-3 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-start sm:justify-center overflow-x-auto gap-2 no-scrollbar py-1">
          <button
            onClick={() => setSelectedCat('all')}
            className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
              selectedCat === 'all'
                ? 'bg-parlour-burgundy text-parlour-gold-light shadow-sm'
                : 'bg-parlour-blush/60 text-parlour-charcoal hover:bg-parlour-blush border border-parlour-rose/20'
            }`}
          >
            All Services
          </button>
          {SERVICE_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCat(cat.id)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                selectedCat === cat.id
                  ? 'bg-parlour-burgundy text-parlour-gold-light shadow-sm'
                  : 'bg-parlour-blush/60 text-parlour-charcoal hover:bg-parlour-blush border border-parlour-rose/20'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Services List */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {filteredCategories.map((category) => (
            <ServiceCard key={category.id} category={category} />
          ))}
        </div>
      </section>

      {/* Promotional Banner */}
      <PromoBanner />
      
    </div>
  );
}
