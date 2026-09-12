import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/clinicData';
import { GalleryItem } from '../types';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Spaces' },
    { id: 'operatory', label: 'Operatory Suites' },
    { id: 'sterilization', label: 'Hygiene & Sterilization' },
    { id: 'reception', label: 'Reception & Lounge' },
    { id: 'diagnostics', label: 'Diagnostics & Imaging' },
  ];

  const filteredItems = GALLERY_ITEMS.filter((item) =>
    activeFilter === 'all' ? true : item.category === activeFilter
  );

  const openLightbox = (item: GalleryItem) => {
    const index = filteredItems.findIndex((p) => p.id === item.id);
    setSelectedPhotoIndex(index !== -1 ? index : 0);
  };

  const closeLightbox = () => {
    setSelectedPhotoIndex(null);
  };

  const handlePrevPhoto = () => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((prev) => (prev! > 0 ? prev! - 1 : filteredItems.length - 1));
    }
  };

  const handleNextPhoto = () => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((prev) => (prev! < filteredItems.length - 1 ? prev! + 1 : 0));
    }
  };

  const currentPhoto = selectedPhotoIndex !== null ? filteredItems[selectedPhotoIndex] : null;

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C5A880] block mb-3">
              Practice Environment
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#0F172A] font-normal tracking-tight">
              A meticulously clean, tranquil clinic aesthetic.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-600 font-light leading-relaxed">
              Every detail of Whites Dental Care has been thoughtfully arranged—from sound-dampened 
              operatory rooms to hospital-grade sterilization bays—to guarantee your safety and comfort.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                id={`gallery-filter-${tab.id}`}
                onClick={() => setActiveFilter(tab.id)}
                className={`whitespace-nowrap px-3.5 py-1.5 rounded-sm text-xs uppercase tracking-wider font-semibold transition-all ${
                  activeFilter === tab.id
                    ? 'bg-[#0F172A] text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Masonry / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              id={`gallery-item-${item.id}`}
              onClick={() => openLightbox(item)}
              className="group cursor-pointer rounded-lg overflow-hidden bg-white border border-slate-200 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <div className="relative h-64 overflow-hidden bg-slate-900">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                <div className="absolute top-3 right-3 p-2 rounded-full bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>

                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <span className="text-[10px] uppercase tracking-widest font-semibold text-[#C5A880] block mb-1">
                    {item.categoryLabel}
                  </span>
                  <h3 className="font-serif text-lg font-semibold leading-tight">{item.title}</h3>
                </div>
              </div>

              <div className="p-4 bg-white flex-1">
                <p className="text-xs text-slate-600 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {currentPhoto && (
        <div
          id="gallery-lightbox-modal"
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fade-in"
          onClick={closeLightbox}
        >
          <button
            id="gallery-lightbox-close-btn"
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Controls */}
          <button
            id="gallery-lightbox-prev-btn"
            onClick={(e) => {
              e.stopPropagation();
              handlePrevPhoto();
            }}
            className="absolute left-4 sm:left-8 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            id="gallery-lightbox-next-btn"
            onClick={(e) => {
              e.stopPropagation();
              handleNextPhoto();
            }}
            className="absolute right-4 sm:right-8 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div
            className="max-w-4xl w-full max-h-[88vh] flex flex-col bg-slate-900 rounded-lg overflow-hidden border border-slate-800 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden min-h-[300px] sm:min-h-[480px]">
              <img
                src={currentPhoto.imageUrl}
                alt={currentPhoto.title}
                className="max-h-[70vh] w-auto object-contain mx-auto"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-6 bg-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-slate-800">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#C5A880] font-semibold">
                  {currentPhoto.categoryLabel} · Image {(selectedPhotoIndex ?? 0) + 1} of {filteredItems.length}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-semibold mt-0.5">{currentPhoto.title}</h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1 font-light">{currentPhoto.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
