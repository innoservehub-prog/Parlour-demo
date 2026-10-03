import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Phone, Mail, MapPin, Clock, Instagram, Facebook, MessageCircle, Heart } from 'lucide-react';
import { BUSINESS_INFO } from '../../config/business';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services & Price', path: '/services' },
    { name: 'Bridal Packages', path: '/bridal' },
    { name: 'Offers & Deals', path: '/offers' },
    { name: 'Our Gallery', path: '/gallery' },
    { name: 'Contact & Location', path: '/contact' },
  ];

  const popularServices = [
    { name: 'HD Bridal Makeup', path: '/bridal' },
    { name: 'Keratin & Smoothening', path: '/services' },
    { name: 'Hydra Radiant Facial', path: '/services' },
    { name: 'Balayage & Hair Spa', path: '/services' },
    { name: 'Gel Nail Extensions', path: '/services' },
    { name: 'Pre-Bridal Rejuvenation', path: '/bridal' },
  ];

  return (
    <footer className="bg-parlour-burgundy-deep text-parlour-blush border-t border-parlour-rose/20 relative overflow-hidden">
      {/* Subtle decorative background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-parlour-rose/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-parlour-gold/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          
          {/* Column 1: Brand / Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-parlour-gold to-parlour-rose flex items-center justify-center text-parlour-burgundy shadow-md">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-tight text-white">
                  AURA
                </span>
                <span className="text-[10px] tracking-[0.25em] uppercase text-parlour-gold-light font-medium -mt-1">
                  Luxury Salon & Bridal
                </span>
              </div>
            </div>
            
            <p className="text-sm text-parlour-blush-soft/80 leading-relaxed font-light">
              Elevating personal beauty through artistry, supreme hygiene, and bespoke luxury care. Dedicated to making every woman feel radiant and confident.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-parlour-rose hover:text-white flex items-center justify-center transition-all duration-300"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={BUSINESS_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-parlour-rose hover:text-white flex items-center justify-center transition-all duration-300"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-green-600 hover:text-white flex items-center justify-center transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-serif text-lg font-semibold tracking-wide mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-parlour-gold" />
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-parlour-blush-soft/80 hover:text-parlour-gold-light transition-colors inline-flex items-center gap-1.5"
                  >
                    <span className="text-parlour-rose-muted text-xs">›</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Featured Treatments */}
          <div>
            <h3 className="text-white font-serif text-lg font-semibold tracking-wide mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-parlour-gold" />
              Popular Treatments
            </h3>
            <ul className="space-y-2.5 text-sm">
              {popularServices.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-parlour-blush-soft/80 hover:text-parlour-gold-light transition-colors inline-flex items-center gap-1.5"
                  >
                    <span className="text-parlour-rose-muted text-xs">›</span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Hours */}
          <div className="space-y-3.5">
            <h3 className="text-white font-serif text-lg font-semibold tracking-wide mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-parlour-gold" />
              Visit Aura Salon
            </h3>
            
            <div className="flex items-start gap-3 text-sm text-parlour-blush-soft/80">
              <MapPin className="w-4 h-4 text-parlour-gold-light shrink-0 mt-0.5" />
              <span>{BUSINESS_INFO.address}</span>
            </div>

            <div className="flex items-center gap-3 text-sm text-parlour-blush-soft/80">
              <Phone className="w-4 h-4 text-parlour-gold-light shrink-0" />
              <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-parlour-gold-light transition-colors">
                {BUSINESS_INFO.phoneDisplay}
              </a>
            </div>

            <div className="flex items-center gap-3 text-sm text-parlour-blush-soft/80">
              <Mail className="w-4 h-4 text-parlour-gold-light shrink-0" />
              <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-parlour-gold-light transition-colors">
                {BUSINESS_INFO.email}
              </a>
            </div>

            <div className="flex items-center gap-3 text-sm text-parlour-blush-soft/80">
              <Clock className="w-4 h-4 text-parlour-gold-light shrink-0" />
              <span>{BUSINESS_INFO.workingHours}</span>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-parlour-blush-soft/60">
          <p>© 2026 {BUSINESS_INFO.name}. All Rights Reserved.</p>
          <p className="flex items-center gap-1">
            Crafted with <Heart className="w-3 h-3 text-parlour-rose fill-parlour-rose inline" /> for natural beauty & confidence
          </p>
        </div>
      </div>
    </footer>
  );
}
