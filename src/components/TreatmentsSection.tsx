import React, { useState } from 'react';
import { TREATMENTS } from '../data/clinicData';
import { Treatment } from '../types';
import {
  ArrowRight,
  Clock,
  Calendar,
  Info,
  Search,
  CheckCircle2,
  Sparkles,
  Shield,
  Activity,
  Smile,
  Zap,
  Layers,
} from 'lucide-react';

interface TreatmentsSectionProps {
  onSelectTreatment: (treatment: Treatment) => void;
  onBookTreatment: (treatmentId: string) => void;
}

type CategoryTab = 'all' | 'preventive' | 'restorative' | 'cosmetic' | 'orthodontics' | 'surgical';

// Clean category badges and icon helpers
const getCategoryIcon = (category: Treatment['category']) => {
  switch (category) {
    case 'preventive':
      return <Shield className="w-5 h-5 text-[#C5A880]" />;
    case 'restorative':
      return <Layers className="w-5 h-5 text-[#C5A880]" />;
    case 'cosmetic':
      return <Sparkles className="w-5 h-5 text-[#C5A880]" />;
    case 'orthodontics':
      return <Smile className="w-5 h-5 text-[#C5A880]" />;
    case 'surgical':
      return <Activity className="w-5 h-5 text-[#C5A880]" />;
    default:
      return <Zap className="w-5 h-5 text-[#C5A880]" />;
  }
};

export const TreatmentsSection: React.FC<TreatmentsSectionProps> = ({
  onSelectTreatment,
  onBookTreatment,
}) => {
  const [activeTab, setActiveTab] = useState<CategoryTab>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: { id: CategoryTab; label: string }[] = [
    { id: 'all', label: 'All Treatments' },
    { id: 'preventive', label: 'Preventive & Cleaning' },
    { id: 'restorative', label: 'Restorative & Endodontics' },
    { id: 'cosmetic', label: 'Cosmetic & Whitening' },
    { id: 'orthodontics', label: 'Aligners & Orthodontics' },
    { id: 'surgical', label: 'Implants & Surgery' },
  ];

  const filteredTreatments = TREATMENTS.filter((item) => {
    const matchesCategory = activeTab === 'all' || item.category === activeTab;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="treatments" className="py-16 sm:py-24 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C5A880] block mb-3">
              Clinical Treatments & Services
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#0F172A] font-normal tracking-tight">
              Comprehensive dental care, delivered with precision.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-600 font-light leading-relaxed">
              From preventive prophylaxis to intricate root canal therapies and aligners, all treatments 
              at Whites Dental Care adhere to international clinical protocols and patient-first comfort.
            </p>
          </div>

          {/* Search bar */}
          <div className="w-full md:w-72 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              id="treatments-search-input"
              type="text"
              placeholder="Search treatments..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-slate-200 rounded-sm pl-10 pr-4 py-2 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-800 transition-colors shadow-2xs"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((tab) => (
            <button
              key={tab.id}
              id={`treatment-filter-${tab.id}`}
              onClick={() => setActiveTab(tab.id)}
              className={`whitespace-nowrap px-4 py-2 rounded-sm text-xs uppercase tracking-wider font-semibold transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-[#0F172A] text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200/80'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Free Orthodontic Consultation Callout Card */}
        <div className="mb-8 p-5 sm:p-6 rounded-lg bg-emerald-950 text-white border border-emerald-800/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-sm">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="bg-emerald-400 text-slate-950 text-[10px] uppercase font-extrabold tracking-wider px-2 py-0.5 rounded">
                Zero Fee
              </span>
              <span className="text-emerald-300 text-xs font-semibold uppercase tracking-wider">
                Clear Aligners & Orthodontics
              </span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl text-white font-normal">
              Complimentary Orthodontic Consultation & Smile Assessment
            </h3>
            <p className="text-xs sm:text-sm text-emerald-200 font-light max-w-2xl">
              Thinking about straightening crowded teeth or closing gaps with clear aligners? Visit Whites Dental Care for a complete smile alignment evaluation at ₹0 fee with zero treatment obligation.
            </p>
          </div>

          <button
            id="free-ortho-banner-book-btn"
            onClick={() => onBookTreatment('orthodontics-aligners')}
            className="inline-flex items-center gap-2 bg-[#C5A880] hover:bg-[#b89a70] text-[#0F172A] text-xs uppercase tracking-widest font-bold px-5 py-3 rounded-sm transition-colors shrink-0 cursor-pointer shadow-xs"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Free Ortho Consult</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Treatment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTreatments.map((treatment) => (
            <div
              key={treatment.id}
              id={`treatment-card-${treatment.id}`}
              className="group bg-white rounded-lg overflow-hidden border border-slate-200/90 hover:border-slate-400 transition-all duration-300 flex flex-col hover:shadow-md"
            >
              {/* Realistic Treatment Procedure Photo (Close-ups of instruments / models, not big rooms) */}
              <div className="relative h-44 w-full overflow-hidden bg-slate-100 border-b border-slate-100">
                <img
                  src={treatment.image}
                  alt={treatment.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                
                {/* Category and Free Consultation Badge */}
                <div className="absolute top-3 left-3 flex items-center gap-2 flex-wrap">
                  <span className="px-2.5 py-1 rounded bg-white/95 backdrop-blur-xs text-[10px] uppercase font-bold tracking-wider text-slate-800 border border-white/50 shadow-xs">
                    {treatment.category}
                  </span>
                  {treatment.isFreeConsultation && (
                    <span className="px-2.5 py-1 rounded bg-emerald-700 text-white text-[10px] uppercase font-bold tracking-widest shadow-xs flex items-center gap-1">
                      <span>★</span>
                      <span>FREE CONSULTATION</span>
                    </span>
                  )}
                </div>

                <div className="absolute bottom-2.5 right-3 flex items-center gap-1.5 text-xs text-white bg-slate-900/80 backdrop-blur-xs px-2.5 py-0.5 rounded">
                  <Clock className="w-3 h-3 text-[#C5A880]" />
                  <span>{treatment.visitDuration}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2.5">
                  <h3 className="font-serif text-xl sm:text-2xl text-slate-900 font-semibold leading-snug group-hover:text-[#0D2B45] transition-colors">
                    {treatment.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed line-clamp-3">
                    {treatment.shortDescription}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-4">
                  {/* Indications list preview */}
                  <div className="space-y-1.5 hidden sm:block">
                    {treatment.indications.slice(0, 2).map((ind, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-500">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A880] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{ind}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-between gap-2 pt-2">
                    <button
                      id={`treatment-view-details-${treatment.id}`}
                      onClick={() => onSelectTreatment(treatment)}
                      className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-slate-700 hover:text-slate-900 transition-colors p-1"
                    >
                      <Info className="w-3.5 h-3.5 text-[#C5A880]" />
                      <span>Procedure Details</span>
                    </button>

                    <button
                      id={`treatment-book-${treatment.id}`}
                      onClick={() => onBookTreatment(treatment.id)}
                      className={`inline-flex items-center gap-1.5 text-[11px] uppercase tracking-widest font-semibold px-4 py-2.5 rounded-sm transition-all shadow-xs ${
                        treatment.isFreeConsultation
                          ? 'bg-emerald-800 hover:bg-emerald-700 text-white'
                          : 'bg-[#0F172A] hover:bg-[#1E293B] text-white'
                      }`}
                    >
                      <span>{treatment.isFreeConsultation ? 'Book Free Slot' : 'Book Slot'}</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredTreatments.length === 0 && (
          <div className="text-center py-16 bg-white rounded-lg border border-slate-200 p-8">
            <p className="text-base text-slate-600 font-serif">No dental treatments match your filter or search query.</p>
            <button
              onClick={() => {
                setActiveTab('all');
                setSearchQuery('');
              }}
              className="mt-4 text-xs uppercase tracking-widest font-semibold text-[#0F172A] underline"
            >
              View all treatments
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
