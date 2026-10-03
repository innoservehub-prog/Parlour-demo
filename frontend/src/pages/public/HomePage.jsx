import React from 'react';
import Hero from '../../components/public/Hero';
import Highlights from '../../components/public/Highlights';
import FeaturedServices from '../../components/public/FeaturedServices';
import PromoBanner from '../../components/public/PromoBanner';
import Testimonials from '../../components/public/Testimonials';
import CtaSection from '../../components/public/CtaSection';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Highlights />
      <FeaturedServices />
      <PromoBanner />
      <Testimonials />
      <CtaSection />
    </div>
  );
}
