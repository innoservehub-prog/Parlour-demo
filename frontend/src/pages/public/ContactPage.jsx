import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Instagram, Sparkles, Send, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../../config/business';

export default function ContactPage() {
  const [msgSent, setMsgSent] = useState(false);
  const [inquiry, setInquiry] = useState({ name: '', email: '', phone: '', message: '' });

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    setMsgSent(true);
    setTimeout(() => {
      setInquiry({ name: '', email: '', phone: '', message: '' });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-parlour-cream">
      
      {/* Hero Header */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-parlour-blush via-parlour-blush-soft/50 to-parlour-cream text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="section-tag">
            <Sparkles className="w-3.5 h-3.5" />
            We’d Love To Hear From You
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-parlour-burgundy font-medium leading-tight mb-4">
            Get In Touch
          </h1>
          <p className="text-xl sm:text-2xl font-serif italic text-parlour-rose-dark max-w-xl mx-auto font-normal">
            Visit Our Salon Or Send Us A Message
          </p>
        </div>
      </section>

      {/* Main Info Cards & Social CTAs */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Top 4 Contact Info Tiles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Phone */}
            <div className="bg-white rounded-3xl p-6 border border-parlour-rose/20 shadow-soft flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-parlour-blush text-parlour-rose-dark flex items-center justify-center border border-parlour-rose/20">
                  <Phone className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-lg text-parlour-burgundy">Call Us</h3>
                <p className="text-xs text-parlour-muted font-light leading-relaxed">
                  Direct phone inquiries and quick slot reservations.
                </p>
              </div>
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="mt-4 text-sm font-semibold text-parlour-burgundy hover:text-parlour-rose-dark transition-colors"
              >
                {BUSINESS_INFO.phoneDisplay}
              </a>
            </div>

            {/* Email */}
            <div className="bg-white rounded-3xl p-6 border border-parlour-rose/20 shadow-soft flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-parlour-blush text-parlour-rose-dark flex items-center justify-center border border-parlour-rose/20">
                  <Mail className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-lg text-parlour-burgundy">Email Us</h3>
                <p className="text-xs text-parlour-muted font-light leading-relaxed">
                  For collaborations, bridal inquiries and feedback.
                </p>
              </div>
              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="mt-4 text-sm font-semibold text-parlour-burgundy hover:text-parlour-rose-dark transition-colors"
              >
                {BUSINESS_INFO.email}
              </a>
            </div>

            {/* Location */}
            <div className="bg-white rounded-3xl p-6 border border-parlour-rose/20 shadow-soft flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-parlour-blush text-parlour-rose-dark flex items-center justify-center border border-parlour-rose/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-lg text-parlour-burgundy">Our Location</h3>
                <p className="text-xs text-parlour-muted font-light leading-relaxed">
                  {BUSINESS_INFO.address}
                </p>
              </div>
              <span className="mt-4 text-xs font-semibold uppercase tracking-wider text-parlour-rose-dark">
                Valet Parking Available
              </span>
            </div>

            {/* Business Hours */}
            <div className="bg-white rounded-3xl p-6 border border-parlour-rose/20 shadow-soft flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-parlour-blush text-parlour-gold flex items-center justify-center border border-parlour-rose/20">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-lg text-parlour-burgundy">Business Hours</h3>
                <p className="text-xs text-parlour-muted font-light leading-relaxed">
                  Open 7 days a week for your convenience.
                </p>
              </div>
              <span className="mt-4 text-sm font-semibold text-parlour-burgundy">
                {BUSINESS_INFO.workingHours}
              </span>
            </div>

          </div>

          {/* Social Cards: WHATSAPP CARD & INSTAGRAM CARD */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* WHATSAPP CARD */}
            <div className="rounded-3xl p-8 bg-gradient-to-tr from-emerald-900 to-emerald-700 text-white shadow-soft flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center sm:text-left">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mx-auto sm:mx-0">
                  <MessageCircle className="w-6 h-6 text-emerald-300" />
                </div>
                <h3 className="font-serif font-bold text-2xl">Chat with us on WhatsApp</h3>
                <p className="text-xs text-emerald-100 font-light max-w-sm">
                  Instant replies for slot availability, package rates, and quick consultations.
                </p>
              </div>
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent('Hello Aura Salon, I would like to chat with you regarding salon services.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold bg-emerald-300 text-emerald-950 hover:bg-emerald-200 px-7 py-3 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap shadow-md"
              >
                Chat Now
              </a>
            </div>

            {/* INSTAGRAM CARD */}
            <div className="rounded-3xl p-8 bg-gradient-to-tr from-rose-900 via-purple-900 to-pink-800 text-white shadow-soft flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center sm:text-left">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mx-auto sm:mx-0">
                  <Instagram className="w-6 h-6 text-pink-300" />
                </div>
                <h3 className="font-serif font-bold text-2xl">Follow Us on Instagram</h3>
                <p className="text-xs text-pink-100 font-light max-w-sm">
                  Explore daily client transformations, beauty tutorials, and behind-the-scenes stories.
                </p>
              </div>
              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold bg-pink-300 text-pink-950 hover:bg-pink-200 px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap shadow-md"
              >
                Follow
              </a>
            </div>

          </div>

          {/* Form & Google Maps Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            
            {/* Quick Contact Form */}
            <div className="lg:col-span-6 bg-white rounded-3xl p-8 border border-parlour-rose/20 shadow-soft">
              <h3 className="font-serif font-bold text-2xl text-parlour-burgundy mb-2">
                Send Us A Note
              </h3>
              <p className="text-xs text-parlour-muted font-light mb-6">
                Have a customized question or query? Fill in the details below.
              </p>

              {msgSent ? (
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h4 className="font-serif font-bold text-lg">Thank You!</h4>
                  <p className="text-xs leading-relaxed">
                    Your message has been received. Our salon team will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleInquirySubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-parlour-burgundy mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      value={inquiry.name}
                      onChange={(e) => setInquiry({ ...inquiry, name: e.target.value })}
                      placeholder="e.g. Priya Sharma"
                      className="w-full px-4 py-3 rounded-2xl border border-parlour-rose/25 bg-parlour-blush/20 text-sm focus:outline-none focus:ring-2 focus:ring-parlour-rose/40"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-parlour-burgundy mb-1">Email</label>
                      <input
                        type="email"
                        required
                        value={inquiry.email}
                        onChange={(e) => setInquiry({ ...inquiry, email: e.target.value })}
                        placeholder="priya@example.com"
                        className="w-full px-4 py-3 rounded-2xl border border-parlour-rose/25 bg-parlour-blush/20 text-sm focus:outline-none focus:ring-2 focus:ring-parlour-rose/40"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-parlour-burgundy mb-1">Phone</label>
                      <input
                        type="tel"
                        required
                        value={inquiry.phone}
                        onChange={(e) => setInquiry({ ...inquiry, phone: e.target.value })}
                        placeholder="9876543210"
                        className="w-full px-4 py-3 rounded-2xl border border-parlour-rose/25 bg-parlour-blush/20 text-sm focus:outline-none focus:ring-2 focus:ring-parlour-rose/40"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-parlour-burgundy mb-1">Message</label>
                    <textarea
                      rows={4}
                      required
                      value={inquiry.message}
                      onChange={(e) => setInquiry({ ...inquiry, message: e.target.value })}
                      placeholder="Tell us what you'd like to know..."
                      className="w-full px-4 py-3 rounded-2xl border border-parlour-rose/25 bg-parlour-blush/20 text-sm focus:outline-none focus:ring-2 focus:ring-parlour-rose/40"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-primary w-full py-3.5 text-xs font-semibold uppercase tracking-wider rounded-full shadow-md flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Embedded Google Maps */}
            <div className="lg:col-span-6 rounded-3xl overflow-hidden border border-parlour-rose/20 shadow-soft bg-white flex flex-col">
              <div className="p-4 bg-parlour-blush border-b border-parlour-rose/15 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-parlour-burgundy">
                  <MapPin className="w-4 h-4 text-parlour-rose-dark" />
                  <span>Interactive Map & Directions</span>
                </div>
                <span className="text-[11px] text-parlour-muted">{BUSINESS_INFO.shortName}</span>
              </div>
              <div className="flex-1 min-h-[350px]">
                <iframe
                  title="Aura Luxury Salon Location Map"
                  src={BUSINESS_INFO.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '350px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
