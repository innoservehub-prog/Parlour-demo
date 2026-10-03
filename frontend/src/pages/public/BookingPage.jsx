import React from 'react';
import { useLocation } from 'react-router-dom';
import { Sparkles, ShieldCheck, Clock, HeartHandshake, Phone, MessageCircle } from 'lucide-react';
import BookingForm from '../../components/public/BookingForm';
import { BUSINESS_INFO } from '../../config/business';

export default function BookingPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialService = queryParams.get('service') || '';
  const initialOffer = queryParams.get('offer') || '';

  const perks = [
    {
      icon: <ShieldCheck className="w-5 h-5 text-parlour-rose" />,
      title: "Hygienic Sterilization",
      desc: "Every tool is sanitized with hospital-grade autoclaves prior to use.",
    },
    {
      icon: <Clock className="w-5 h-5 text-parlour-gold" />,
      title: "Zero Waiting Time",
      desc: "Pre-allocated dedicated slots to value your precious schedule.",
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-parlour-rose" />,
      title: "Free Skin/Hair Consultation",
      desc: "Comprehensive diagnostic assessment before initiating any therapy.",
    },
  ];

  return (
    <div className="min-h-screen bg-parlour-cream">
      
      {/* Hero Header */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-parlour-blush via-parlour-blush-soft/50 to-parlour-cream text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="section-tag">
            <Sparkles className="w-3.5 h-3.5" />
            Seamless Online Booking
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-parlour-burgundy font-medium leading-tight mb-4">
            Book Your Appointment
          </h1>
          <p className="text-xl sm:text-2xl font-serif italic text-parlour-rose-dark max-w-xl mx-auto font-normal">
            Your Radiant Transformation Awaits
          </p>
        </div>
      </section>

      {/* Main Booking Content */}
      <section className="py-12 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left: Booking Form */}
            <div className="lg:col-span-8">
              <BookingForm initialService={initialService} initialOffer={initialOffer} />
            </div>

            {/* Right: Side Info / Salon Assurance */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Salon Perks Card */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-parlour-rose/20 shadow-soft space-y-6">
                <h3 className="font-serif font-bold text-xl text-parlour-burgundy flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-parlour-gold" />
                  Why Book With Aura?
                </h3>
                
                <div className="space-y-4">
                  {perks.map((perk, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="p-2 rounded-xl bg-parlour-blush shrink-0 mt-0.5 border border-parlour-rose/15">
                        {perk.icon}
                      </div>
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-parlour-burgundy">
                          {perk.title}
                        </h4>
                        <p className="text-xs text-parlour-muted font-light leading-relaxed mt-0.5">
                          {perk.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct WhatsApp / Phone Assistance Card */}
              <div className="bg-gradient-to-br from-parlour-burgundy to-parlour-burgundy-dark text-white rounded-3xl p-6 sm:p-8 shadow-soft-lg space-y-4">
                <span className="text-[11px] font-bold uppercase tracking-widest text-parlour-gold-light">
                  Need Immediate Help?
                </span>
                <h3 className="font-serif font-bold text-xl leading-tight">
                  Prefer Booking Over A Call Or Chat?
                </h3>
                <p className="text-xs text-parlour-blush-soft/80 font-light leading-relaxed">
                  Our front desk is available daily from 10 AM to 8 PM to assist with bridal queries, package recommendations, or urgent slots.
                </p>

                <div className="pt-2 space-y-2.5">
                  <a
                    href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-full text-xs font-semibold uppercase tracking-wider text-emerald-950 bg-emerald-400 hover:bg-emerald-300 transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Chat On WhatsApp
                  </a>

                  <a
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="w-full py-3 px-4 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-colors flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-parlour-gold-light" />
                    Call: {BUSINESS_INFO.phoneDisplay}
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
