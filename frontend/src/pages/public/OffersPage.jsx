import React, { useState } from 'react';
import { Sparkles, Tag, Gift, Percent } from 'lucide-react';
import { OFFERS_DATA } from '../../config/business';
import OfferCard from '../../components/public/OfferCard';

export default function OffersPage() {
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: 'All Offers' },
    { id: 'festive', label: 'Festive Offers' },
    { id: 'combo', label: 'Combo Deals' },
    { id: 'seasonal', label: 'Seasonal Offers' },
  ];

  const filteredOffers = activeTab === 'all'
    ? OFFERS_DATA
    : OFFERS_DATA.filter(offer => offer.category === activeTab);

  return (
    <div className="min-h-screen bg-parlour-cream">
      
      {/* Hero Header */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-parlour-blush via-parlour-blush-soft/50 to-parlour-cream text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="section-tag">
            <Tag className="w-3.5 h-3.5" />
            Exclusive Salon Privileges
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-parlour-burgundy font-medium leading-tight mb-4">
            Offers & Promotions
          </h1>
          <p className="text-xl sm:text-2xl font-serif italic text-parlour-rose-dark max-w-xl mx-auto font-normal">
            Beauty At Better Prices
          </p>
        </div>
      </section>

      {/* Offer Categories Filter */}
      <div className="sticky top-[73px] z-30 bg-white/90 backdrop-blur-md border-y border-parlour-rose/15 py-3 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center overflow-x-auto gap-2 py-1">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-parlour-burgundy text-parlour-gold-light shadow-sm'
                    : 'bg-parlour-blush/60 text-parlour-charcoal hover:bg-parlour-blush border border-parlour-rose/20'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Offers Cards Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredOffers.map((offer) => (
              <OfferCard key={offer.id} offer={offer} />
            ))}
          </div>

          {/* Guarantee / Terms Note */}
          <div className="mt-16 p-6 rounded-3xl bg-white border border-parlour-rose/20 text-center max-w-2xl mx-auto text-xs text-parlour-muted space-y-1">
            <p className="font-semibold text-parlour-burgundy">Terms & Conditions:</p>
            <p>
              Promotions cannot be combined with existing membership discounts. Please mention the coupon code during booking or at the front desk before treatment.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
