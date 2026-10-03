import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Heart, Target, Compass, Gem, Calendar, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO, TEAM_MEMBERS, GALLERY_ITEMS } from '../../config/business';

export default function AboutPage() {
  const ambiencePhotos = GALLERY_ITEMS.filter(item => item.category === 'ambience').concat(
    GALLERY_ITEMS.slice(0, 2)
  );

  return (
    <div className="min-h-screen bg-parlour-cream">
      
      {/* Hero Header */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-parlour-blush via-parlour-blush-soft/40 to-parlour-cream text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="section-tag">
            <Sparkles className="w-3.5 h-3.5" />
            Discover Our Essence
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-parlour-burgundy font-medium leading-tight mb-4">
            About Us
          </h1>
          <p className="text-xl sm:text-2xl font-serif italic text-parlour-rose-dark max-w-xl mx-auto font-normal">
            More Than A Salon — A Place To Feel Like You
          </p>
        </div>
      </section>

      {/* Salon Interior Spotlight & Story */}
      <section className="py-16 bg-white border-y border-parlour-rose/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual Collage */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-soft-lg border-2 border-parlour-rose/20 aspect-[4/3]">
                <img
                  src={BUSINESS_INFO.aboutInteriorImage}
                  alt="Aura Salon Interior Ambience"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="hidden sm:block absolute -bottom-8 -right-6 w-52 h-52 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src={BUSINESS_INFO.aboutSecondaryImage}
                  alt="Styling treatments at Aura"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Our Story Copy */}
            <div className="lg:col-span-6 space-y-6">
              <span className="section-tag">
                <Heart className="w-3.5 h-3.5" />
                Our Story
              </span>
              <h2 className="section-title text-left">
                Redefining The Art Of Pampering & Beauty
              </h2>
              <p className="text-base text-parlour-muted font-light leading-relaxed">
                Founded with a singular vision to blend couture aesthetics with deeply therapeutic self-care, Aura Luxury Salon began as an intimate boutique sanctuary. Today, we stand as a premier beauty haven trusted by thousands of women for their daily grooming, skincare resets, and milestone bridal celebrations.
              </p>
              <p className="text-base text-parlour-muted font-light leading-relaxed">
                Every element of our parlour—from the warm peach lighting and plush rose velvet seating to the soothing botanical fragrances and sterilized precision tools—is curated to give you an unforgettable sensory retreat.
              </p>
              <div className="pt-2">
                <Link to="/booking" className="btn-primary text-xs uppercase tracking-wider font-semibold px-7 py-3 rounded-full">
                  Experience Aura Salon
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-parlour-blush/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="section-title">
              Our Core Philosophy
            </h2>
            <p className="section-subtitle">
              The guiding principles that shape every haircut, facial therapy, and bridal transformation we create.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Mission */}
            <div className="card-luxury flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-parlour-blush text-parlour-burgundy flex items-center justify-center border border-parlour-rose/20">
                  <Target className="w-6 h-6 text-parlour-rose-dark" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-parlour-burgundy">
                  Our Mission
                </h3>
                <p className="text-sm text-parlour-muted font-light leading-relaxed">
                  To deliver bespoke luxury beauty services that accentuate individuality, nurture confidence, and provide an empowering space of relaxation for every guest.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="card-luxury flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-parlour-blush text-parlour-burgundy flex items-center justify-center border border-parlour-rose/20">
                  <Compass className="w-6 h-6 text-parlour-gold" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-parlour-burgundy">
                  Our Vision
                </h3>
                <p className="text-sm text-parlour-muted font-light leading-relaxed">
                  To be India's benchmark bridal and luxury salon brand, revered for supreme craftsmanship, ethical beauty practices, and warm personalized hospitality.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="card-luxury flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-parlour-blush text-parlour-burgundy flex items-center justify-center border border-parlour-rose/20">
                  <Gem className="w-6 h-6 text-parlour-rose" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-parlour-burgundy">
                  Our Values
                </h3>
                <p className="text-sm text-parlour-muted font-light leading-relaxed">
                  Uncompromised Hygiene, Continuous Artistry Mastery, Premium Cruelty-Free Products, and Genuine Customer Delight in every touchpoint.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* MEET OUR EXPERT TEAM */}
      <section className="py-20 bg-white border-y border-parlour-rose/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="section-tag">
              <Sparkles className="w-3.5 h-3.5" />
              Artisans & Stylists
            </span>
            <h2 className="section-title">
              Meet Our Expert Team
            </h2>
            <p className="section-subtitle">
              Passionate, certified professionals dedicated to mastering current international beauty trends and tailored wellness.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.id}
                className="bg-parlour-cream rounded-3xl overflow-hidden border border-parlour-rose/20 shadow-soft hover:shadow-soft-lg transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-parlour-burgundy text-[11px] font-semibold px-2.5 py-1 rounded-full shadow-sm">
                      {member.experience}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-serif font-bold text-xl text-parlour-burgundy mb-1">
                      {member.name}
                    </h3>
                    <p className="text-xs font-semibold uppercase tracking-wider text-parlour-rose-dark mb-3">
                      {member.role}
                    </p>
                    <p className="text-xs text-parlour-muted font-light leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2">
                  <Link
                    to={`/booking?service=${encodeURIComponent(member.role)}`}
                    className="w-full py-2.5 px-4 rounded-full text-xs font-semibold uppercase tracking-wider text-parlour-burgundy bg-white hover:bg-parlour-rose hover:text-white border border-parlour-rose/20 transition-all flex items-center justify-center gap-1"
                  >
                    Book with {member.name.split(' ')[0]}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR SALON AMBIENCE GALLERY */}
      <section className="py-20 bg-parlour-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-tag">
              <Sparkles className="w-3.5 h-3.5" />
              The Aura Atmosphere
            </span>
            <h2 className="section-title">
              Our Salon Ambience
            </h2>
            <p className="section-subtitle">
              Immerse yourself in our tranquil spaces designed for ultimate relaxation and pampering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ambiencePhotos.map((photo, idx) => (
              <div
                key={idx}
                className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-soft group border border-parlour-rose/15"
              >
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-parlour-burgundy-deep/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end text-white">
                  <h4 className="font-serif font-bold text-lg">{photo.title}</h4>
                  <p className="text-xs text-parlour-blush-soft/80 font-light">{photo.caption}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/gallery" className="btn-secondary px-8 py-3 text-sm font-semibold inline-flex items-center gap-2">
              View Full Gallery
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
