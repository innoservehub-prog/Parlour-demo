import React, { useEffect } from 'react';
import { X, Sparkles } from 'lucide-react';

export default function ImageLightbox({ item, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-white/20 animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close lightbox"
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-parlour-burgundy/80 hover:bg-parlour-burgundy text-white flex items-center justify-center transition-colors shadow-md"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 max-h-[85vh]">
          {/* Image */}
          <div className="md:col-span-8 bg-black flex items-center justify-center overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full max-h-[70vh] object-contain"
            />
          </div>

          {/* Details */}
          <div className="md:col-span-4 p-6 sm:p-8 flex flex-col justify-between bg-parlour-cream overflow-y-auto">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-parlour-rose-dark bg-parlour-blush border border-parlour-rose/20">
                <Sparkles className="w-3 h-3" />
                {item.categoryName}
              </span>

              <h3 className="font-serif text-2xl font-bold text-parlour-burgundy leading-tight">
                {item.title}
              </h3>

              <p className="text-sm text-parlour-muted font-light leading-relaxed">
                {item.caption}
              </p>
            </div>

            <div className="pt-6 border-t border-parlour-rose/15 mt-6 space-y-3">
              <a
                href="/booking"
                className="btn-primary w-full py-3 text-xs font-semibold uppercase tracking-wider text-center block rounded-full"
              >
                Book Similar Look
              </a>
              <button
                onClick={onClose}
                className="w-full py-2.5 text-xs text-parlour-muted hover:text-parlour-burgundy text-center font-medium"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
