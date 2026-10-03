import React from 'react';
import { Sparkles, ShieldCheck, Award, HeartHandshake } from 'lucide-react';
import { HIGHLIGHTS } from '../../config/business';

export default function Highlights() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-parlour-gold" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-parlour-rose" />;
      case 'Award':
        return <Award className="w-6 h-6 text-parlour-gold" />;
      case 'HeartHandshake':
      default:
        return <HeartHandshake className="w-6 h-6 text-parlour-rose" />;
    }
  };

  return (
    <section className="py-12 bg-white border-y border-parlour-rose/15 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {HIGHLIGHTS.map((item) => (
            <div
              key={item.id}
              className="flex items-start gap-4 p-5 rounded-2xl bg-parlour-blush/40 hover:bg-parlour-blush/80 border border-parlour-rose/10 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0 border border-parlour-rose/15 group-hover:scale-110 transition-transform duration-300">
                {getIcon(item.icon)}
              </div>
              <div className="space-y-1">
                <h3 className="font-serif font-semibold text-parlour-burgundy text-lg">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-parlour-muted leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
