import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles, Phone, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../../config/business';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Bridal', path: '/bridal' },
    { name: 'Offers', path: '/offers' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      {/* Top micro banner for salon hours & quick phone */}
      <div className="bg-parlour-burgundy text-parlour-blush-soft py-2 px-4 text-xs font-medium tracking-wide">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1.5 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-parlour-gold-light" />
            <span>Festive Glow & Bridal Season Bookings Open! Flat 20% OFF</span>
          </div>
          <div className="flex items-center gap-4 text-parlour-blush-soft/80">
            <span className="hidden md:inline-flex items-center gap-1">
              <Clock className="w-3 h-3 text-parlour-gold-light" />
              {BUSINESS_INFO.workingHoursShort}
            </span>
            <a 
              href={`tel:${BUSINESS_INFO.phone}`} 
              className="inline-flex items-center gap-1 hover:text-parlour-gold-light transition-colors"
            >
              <Phone className="w-3 h-3 text-parlour-gold-light" />
              {BUSINESS_INFO.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-parlour-cream/95 backdrop-blur-md shadow-soft border-b border-parlour-rose/15 py-3.5'
            : 'bg-parlour-cream/90 backdrop-blur-sm border-b border-parlour-rose/10 py-4.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-parlour-burgundy to-parlour-rose flex items-center justify-center text-parlour-gold-light shadow-sm group-hover:scale-105 transition-transform duration-300">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl sm:text-2xl font-bold tracking-tight text-parlour-burgundy group-hover:text-parlour-rose-dark transition-colors">
                  AURA
                </span>
                <span className="text-[10px] tracking-[0.25em] uppercase text-parlour-rose-muted font-medium -mt-1">
                  Luxury Salon & Bridal
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`px-3.5 py-2 rounded-full text-sm font-medium transition-all duration-200 relative ${
                      active
                        ? 'text-parlour-burgundy font-semibold bg-parlour-blush border border-parlour-rose/20'
                        : 'text-parlour-charcoal/80 hover:text-parlour-burgundy hover:bg-parlour-blush-soft/50'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action: BOOK NOW button */}
            <div className="hidden sm:flex items-center gap-3">
              <Link
                to="/booking"
                className="btn-primary text-xs sm:text-sm font-semibold tracking-wide uppercase px-6 py-2.5 rounded-full shadow-md"
              >
                <Sparkles className="w-4 h-4 mr-1.5 text-parlour-gold-light" />
                BOOK NOW
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex items-center gap-2 lg:hidden">
              <Link
                to="/booking"
                className="btn-primary text-xs font-semibold uppercase px-3.5 py-2 sm:hidden"
              >
                Book
              </Link>
              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle navigation menu"
                className="p-2 rounded-xl text-parlour-burgundy bg-parlour-blush hover:bg-parlour-blush-soft transition-colors focus:outline-none focus:ring-2 focus:ring-parlour-rose/50"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="lg:hidden bg-parlour-cream border-b border-parlour-rose/20 px-4 pt-3 pb-6 space-y-2 animate-fadeIn shadow-soft-lg">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-3 rounded-xl text-base font-medium transition-all ${
                      active
                        ? 'bg-parlour-blush text-parlour-burgundy font-semibold border-l-4 border-parlour-rose'
                        : 'text-parlour-charcoal hover:bg-parlour-blush/50'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            <div className="pt-4 border-t border-parlour-rose/15 flex flex-col gap-3">
              <Link
                to="/booking"
                onClick={() => setIsOpen(false)}
                className="btn-primary w-full text-center text-sm font-semibold uppercase py-3 rounded-xl"
              >
                <Sparkles className="w-4 h-4 mr-2 text-parlour-gold-light inline" />
                Book Your Appointment
              </Link>
              <div className="flex justify-between items-center text-xs text-parlour-muted px-2">
                <span>{BUSINESS_INFO.workingHoursShort}</span>
                <a href={`tel:${BUSINESS_INFO.phone}`} className="text-parlour-rose-dark font-medium">
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
