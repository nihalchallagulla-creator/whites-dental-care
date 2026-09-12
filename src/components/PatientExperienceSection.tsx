import React from 'react';
import { PATIENT_EXPERIENCE_STEPS } from '../data/clinicData';
import { VolumeX, Heart, Eye, ShieldCheck, Calendar, ArrowRight } from 'lucide-react';

interface PatientExperienceSectionProps {
  onOpenBooking: () => void;
}

export const PatientExperienceSection: React.FC<PatientExperienceSectionProps> = ({ onOpenBooking }) => {
  const comfortPrinciples = [
    {
      title: 'Topical Gel Anesthesia First',
      description: 'We apply medical-grade topical numbing gel prior to any injection, ensuring routine and restorative treatments remain virtually painless.',
    },
    {
      title: 'Real-Time Chairside Imaging',
      description: 'Intraoral cameras and monitors let you observe what the doctor observes, making every finding and recommendation completely transparent.',
    },
    {
      title: 'Acoustic & Sensory Calm',
      description: 'A quieter, non-hospital clinic setting designed to reduce the high-pitch anxiety commonly triggered by traditional dental offices.',
    },
    {
      title: 'Zero Sales Pressure Policy',
      description: 'We distinguish necessary clinical treatment from elective cosmetic options with complete honesty. You are never pushed into procedures.',
    },
  ];

  return (
    <section id="experience" className="py-16 sm:py-24 bg-[#FAF9F6] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C5A880] block mb-3">
            Patient Experience
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#0F172A] font-normal tracking-tight">
            Designed to replace apprehension with comfort, clarity, and control.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 font-light leading-relaxed">
            Many patients delay dental care due to past unpleasant experiences or feeling rushed. At Whites Dental Care, 
            every step from reception to aftercare is calibrated around your comfort.
          </p>
        </div>

        {/* The 4-Step Patient Journey (Clean Editorial Flow) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {PATIENT_EXPERIENCE_STEPS.map((step, idx) => (
            <div
              key={step.step}
              className="bg-white p-6 rounded-lg border border-slate-200 flex flex-col justify-between space-y-4"
            >
              <div>
                <span className="text-xs uppercase tracking-widest font-semibold text-[#C5A880] block mb-1">
                  Stage {idx + 1}
                </span>
                <span className="text-xs text-slate-400 font-medium block mb-2">
                  {step.subtitle}
                </span>
                <h3 className="font-serif text-lg text-slate-900 font-medium mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Comfort Standards Panel */}
        <div className="bg-white rounded-lg border border-slate-200 p-8 sm:p-10">
          <div className="max-w-2xl mb-8">
            <span className="text-xs uppercase tracking-widest text-[#C5A880] font-semibold block mb-2">
              Clinical Comfort Commitments
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-slate-900 font-normal">
              Care adapted to your pace and sensitivity.
            </h3>
            <p className="text-sm text-slate-600 font-light mt-2">
              If you experience dental anxiety, a sensitive gag reflex, or specific medical considerations, inform our team. We adjust procedural timing and check in with you constantly throughout the session.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 border-t border-slate-100">
            {comfortPrinciples.map((principle, idx) => (
              <div key={idx} className="space-y-1.5">
                <h4 className="font-serif text-base text-slate-900 font-medium flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
                  <span>{principle.title}</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed pl-3.5">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-500 text-center sm:text-left">
              New to our practice? Dedicated consultation-only appointments are available without same-day procedural pressure.
            </p>
            <button
              id="patient-experience-book-btn"
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 bg-[#0F172A] hover:bg-[#1E293B] text-white text-xs uppercase tracking-widest font-semibold px-6 py-3 rounded-sm transition-colors shrink-0"
            >
              <Calendar className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>Book An Appointment</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
