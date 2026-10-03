import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { BUSINESS_INFO } from '../../config/business';

export default function WhatsAppFloatingButton() {
  const [showTooltip, setShowTooltip] = useState(true);

  const defaultMessage = encodeURIComponent(
    `Hello, I would like to book an appointment / enquire at ${BUSINESS_INFO.name}.\n\nPlease let me know your available slots.`
  );

  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${defaultMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-auto">
      {/* Tooltip bubble */}
      {showTooltip && (
        <div className="mb-2.5 bg-white text-parlour-burgundy shadow-soft-lg rounded-2xl px-4 py-2 text-xs font-medium border border-parlour-rose/20 max-w-[200px] sm:max-w-xs flex items-center justify-between gap-2 animate-bounce">
          <span>Need quick booking or hair/skin advice? Chat with us!</span>
          <button 
            onClick={() => setShowTooltip(false)}
            aria-label="Close tooltip"
            className="text-parlour-muted hover:text-parlour-burgundy"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Aura Salon on WhatsApp"
        className="w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 to-green-500 text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 relative group"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400"></span>
        </span>
        <MessageCircle className="w-7 h-7 fill-white/10" />
      </a>
    </div>
  );
}
