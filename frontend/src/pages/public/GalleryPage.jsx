import React from 'react';
import { Sparkles, Camera } from 'lucide-react';
import GalleryGrid from '../../components/public/GalleryGrid';

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-parlour-cream">
      
      {/* Hero Header */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-parlour-blush via-parlour-blush-soft/50 to-parlour-cream text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="section-tag">
            <Camera className="w-3.5 h-3.5" />
            Visual Portfolio
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-parlour-burgundy font-medium leading-tight mb-4">
            Our Gallery
          </h1>
          <p className="text-xl sm:text-2xl font-serif italic text-parlour-rose-dark max-w-xl mx-auto font-normal">
            Real Transformations. Real Happiness.
          </p>
        </div>
      </section>

      {/* Gallery Grid Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GalleryGrid />
        </div>
      </section>

    </div>
  );
}
