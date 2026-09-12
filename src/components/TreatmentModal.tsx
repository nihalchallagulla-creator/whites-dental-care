import React from 'react';
import { X, Clock, Calendar, CheckCircle2, ChevronRight, Shield, Layers, Sparkles, Smile, Activity, Zap } from 'lucide-react';
import { Treatment } from '../types';

interface TreatmentModalProps {
  treatment: Treatment | null;
  onClose: () => void;
  onBookTreatment: (treatmentId: string) => void;
}

const getCategoryIcon = (category: Treatment['category']) => {
  switch (category) {
    case 'preventive':
      return <Shield className="w-6 h-6 text-[#C5A880]" />;
    case 'restorative':
      return <Layers className="w-6 h-6 text-[#C5A880]" />;
    case 'cosmetic':
      return <Sparkles className="w-6 h-6 text-[#C5A880]" />;
    case 'orthodontics':
      return <Smile className="w-6 h-6 text-[#C5A880]" />;
    case 'surgical':
      return <Activity className="w-6 h-6 text-[#C5A880]" />;
    default:
      return <Zap className="w-6 h-6 text-[#C5A880]" />;
  }
};

export const TreatmentModal: React.FC<TreatmentModalProps> = ({
  treatment,
  onClose,
  onBookTreatment,
}) => {
  if (!treatment) return null;

  return (
    <div
      id="treatment-detail-modal-backdrop"
      className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fade-in"
      onClick={onClose}
    >
      <div
        id="treatment-detail-modal-content"
        className="bg-white rounded-lg max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200 my-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header: Clean Clinical & Architectural Title Banner */}
        <div className="relative">
          {/* Realistic Treatment Photo Header */}
          <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-slate-900">
            <img
              src={treatment.image}
              alt={treatment.title}
              className="w-full h-full object-cover opacity-85"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/60 to-transparent" />
            
            <button
              id="treatment-modal-close-btn"
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors z-10"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {treatment.isFreeConsultation && (
              <div className="absolute top-4 left-4 bg-emerald-700 text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded shadow-md z-10 flex items-center gap-1">
                <span>★</span>
                <span>FREE INITIAL CONSULTATION</span>
              </div>
            )}
          </div>

          <div className="p-6 bg-[#0F172A] text-white -mt-10 relative z-10 rounded-t-xl">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-md bg-white/10 border border-white/20 flex items-center justify-center">
                {getCategoryIcon(treatment.category)}
              </div>
              <div>
                <span className="text-[10px] uppercase font-semibold tracking-widest text-[#C5A880] block">
                  {treatment.category} · Whites Dental Care
                </span>
              </div>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-semibold leading-snug max-w-xl">
              {treatment.title}
            </h3>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[calc(85vh-260px)] overflow-y-auto">
          {/* Free Ortho Callout inside Modal if applicable */}
          {treatment.isFreeConsultation && (
            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-md text-emerald-950 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
              <div>
                <h5 className="font-semibold text-sm text-emerald-900">Complimentary Initial Consultation (₹0 Fee)</h5>
                <p className="text-xs text-emerald-800 leading-relaxed mt-0.5">
                  At Whites Dental Care, initial smile assessments and clear aligner evaluations are provided completely free with zero consultation charge and zero procedure obligation.
                </p>
              </div>
            </div>
          )}

          {/* Quick Meta */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-600 pb-4 border-b border-slate-100">
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#C5A880]" />
              <span>Typical Duration: {treatment.visitDuration}</span>
            </div>
            {treatment.recommendedFrequency && (
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#C5A880]" />
                <span>Recommended: {treatment.recommendedFrequency}</span>
              </div>
            )}
          </div>

          {/* Description */}
          <div className="space-y-2">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-slate-400">Clinical Overview</h4>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-light">
              {treatment.fullDescription}
            </p>
          </div>

          {/* When Is It Indicated */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-slate-400">When Is This Recommended?</h4>
            <div className="space-y-2">
              {treatment.indications.map((ind, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                  <span>{ind}</span>
                </div>
              ))}
            </div>
          </div>

          {/* What to Expect / Procedure Steps */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-slate-400">What to Expect During Your Visit</h4>
            <div className="space-y-2.5">
              {treatment.procedureSteps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 bg-slate-50 p-3 rounded border border-slate-100">
                  <span className="font-serif font-bold text-[#0F172A] text-sm shrink-0">0{idx + 1}.</span>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Clinical note */}
          <div className="p-3.5 bg-[#FAF9F6] rounded border border-slate-200 text-xs text-slate-500 italic">
            * Note: Every patient's oral anatomy is unique. A clinical examination and diagnostic radiograph at Whites Dental Care is conducted before finalizing any procedure plan.
          </div>
        </div>

        {/* Footer actions */}
        <div className="p-6 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-500 text-center sm:text-left">
            <span>Consultation hours: Mon–Sat 9AM–7PM</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              id="treatment-modal-back-btn"
              onClick={onClose}
              className="w-1/2 sm:w-auto px-4 py-2.5 text-xs uppercase tracking-widest font-semibold text-slate-600 hover:text-slate-900 transition-colors"
            >
              Close
            </button>
            <button
              id="treatment-modal-book-this-btn"
              onClick={() => {
                onClose();
                onBookTreatment(treatment.id);
              }}
              className={`w-1/2 sm:w-auto inline-flex items-center justify-center gap-2 text-white text-xs uppercase tracking-widest font-semibold px-6 py-2.5 rounded-sm transition-all shadow ${
                treatment.isFreeConsultation ? 'bg-emerald-800 hover:bg-emerald-700' : 'bg-[#0F172A] hover:bg-[#1E293B]'
              }`}
            >
              <span>{treatment.isFreeConsultation ? 'Book Free Ortho Consult' : 'Book Appointment'}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
