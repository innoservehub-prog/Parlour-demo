import React, { useState } from 'react';
import { Sparkles, Eye, ZoomIn } from 'lucide-react';
import { GALLERY_ITEMS } from '../../config/business';
import ImageLightbox from '../common/ImageLightbox';

export default function GalleryGrid() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const filterTabs = [
    { id: 'all', label: 'All' },
    { id: 'bridal', label: 'Bridal Makeup' },
    { id: 'party', label: 'Party Makeup' },
    { id: 'hair', label: 'Hair Styles' },
    { id: 'skin', label: 'Skin Care' },
    { id: 'ambience', label: 'Salon Ambience' },
  ];

  const filteredItems = activeFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <div className="space-y-10">
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        {filterTabs.map((tab) => {
          const isActive = activeFilter === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                isActive
                  ? 'bg-parlour-burgundy text-parlour-gold-light shadow-md scale-105'
                  : 'bg-white text-parlour-charcoal/80 hover:text-parlour-burgundy hover:bg-parlour-blush border border-parlour-rose/20'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Responsive Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedImage(item)}
            className="group relative rounded-3xl overflow-hidden cursor-pointer shadow-soft hover:shadow-soft-lg transition-all duration-500 bg-white border border-parlour-rose/15 aspect-[4/5]"
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              loading="lazy"
            />

            {/* Hover Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-parlour-burgundy-deep/90 via-parlour-burgundy/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 text-white">
              
              <div className="flex justify-end">
                <span className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  <ZoomIn className="w-5 h-5" />
                </span>
              </div>

              <div className="space-y-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-[11px] font-semibold uppercase tracking-widest text-parlour-gold-light block">
                  {item.categoryName}
                </span>
                <h3 className="font-serif font-bold text-lg leading-tight text-white">
                  {item.title}
                </h3>
                <p className="text-xs text-parlour-blush-soft/80 font-light line-clamp-2">
                  {item.caption}
                </p>
              </div>

            </div>

            {/* Bottom Tag when not hovering */}
            <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[11px] font-medium text-parlour-burgundy shadow-sm border border-parlour-rose/20 group-hover:opacity-0 transition-opacity">
              {item.categoryName}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <ImageLightbox
          item={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  );
}
