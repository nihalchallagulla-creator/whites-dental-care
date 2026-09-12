import React from 'react';
import { ShieldCheck, Stethoscope, ArrowRight, Eye, Sparkles } from 'lucide-react';

interface AboutSectionProps {
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBooking }) => {
  const clinicalProtocols = [
    {
      label: 'Sterilization Protocol',
      title: 'Hospital-Grade Class-B Autoclave',
      detail: 'Vacuum-assisted sterilization with temperature and pressure data logging. Instruments are sealed in sterile barrier pouches and unsealed directly at your chairside.',
    },
    {
      label: 'Diagnostic Standard',
      title: 'Shared Intraoral Visualization',
      detail: 'High-definition digital sensors allow you to see what the doctor sees on chairside monitors before any procedure is recommended or started.',
    },
    {
      label: 'Clinical Ethos',
      title: 'Conservative Tooth Preservation',
      detail: 'Our primary objective is protecting natural enamel, dentin, and tooth vitality. We only recommend restorations when clinically indicated, never for aggressive overtreatment.',
    },
    {
      label: 'Financial Clarity',
      title: 'Transparent Written Estimates',
      detail: 'Clear, itemized treatment plans provided prior to care. You always know procedure steps, expected visits, and exact costs with zero surprise billing.',
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C5A880] block mb-3">
            Practice Philosophy
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#0F172A] font-normal tracking-tight leading-tight">
            A quiet, principled approach to dental health on Kondapur Main Road.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-light leading-relaxed">
            Whites Dental Care is built on patient autonomy, unhurried consultations, and rigorous clinical hygiene. 
            We replace dental anxiety with open communication and gentle technique.
          </p>
        </div>

        {/* 2-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pb-14 border-b border-slate-100">
          
          {/* Left Column: Clinic Story & Stance */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="font-serif text-2xl sm:text-3xl text-slate-900 font-normal leading-snug">
              Dentistry should be conservative, preventative, and completely transparent.
            </h3>
            
            <p className="text-slate-600 leading-relaxed font-light text-sm sm:text-base">
              Too often, dental visits feel rushed, intimidating, or pushy. At Whites Dental Care, every appointment begins with genuine listening. Whether you are visiting for routine tartar scaling, a persistent toothache, or a second opinion on an alignment concern, we give you uninterrupted doctor time.
            </p>

            <p className="text-slate-600 leading-relaxed font-light text-sm sm:text-base">
              We discuss the underlying cause of your dental condition, explain the advantages and limitations of each treatment choice, and let you decide how to proceed at your own pace.
            </p>

            <div className="p-5 rounded-lg bg-[#FAF9F6] border border-slate-200/90 text-slate-800 space-y-2">
              <div className="text-xs uppercase tracking-wider font-semibold text-[#C5A880]">Our Promise To Every Patient</div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                No aggressive upselling, no hurried appointments, and no hidden charges. Every procedure is performed with hospital-level cleanliness and gentle anesthetic protocols.
              </p>
            </div>

            <div className="pt-2">
              <button
                id="about-schedule-consultation-btn"
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#0F172A] hover:text-[#C5A880] transition-colors border-b-2 border-[#0F172A] pb-1 hover:border-[#C5A880]"
              >
                <span>Schedule a Consultation Slot</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: 4 Clinical Hygiene & Care Protocols */}
          <div className="lg:col-span-6 space-y-4">
            {clinicalProtocols.map((protocol, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-lg bg-[#FAF9F6] border border-slate-200 hover:border-slate-300 transition-colors"
              >
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-[#C5A880]">
                    {protocol.label}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                </div>
                <h4 className="font-serif text-lg sm:text-xl font-medium text-slate-900 mb-1.5">
                  {protocol.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                  {protocol.detail}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* Realistic Clinical Practice Visuals (Close-ups, instruments, models - NO big suites or luxury lounges) */}
        <div className="pt-14">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C5A880] block mb-2">
                Inside Whites Dental Care
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#0F172A] font-normal">
                Authentic Clinical Details & Hygiene in Practice
              </h3>
            </div>
            <p className="text-xs text-slate-500 max-w-sm font-light">
              We present an honest, authentic glimpse of our clinic — focusing on sterilized micro-tools, diagnostic models, and patient consultations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Image 1: Sealed Sterilized Instruments */}
            <div className="group rounded-lg overflow-hidden border border-slate-200 bg-[#FAF9F6]">
              <div className="relative h-52 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80"
                  alt="Precision dental instruments and sterile tray"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 text-[11px] uppercase tracking-wider font-semibold text-white bg-slate-900/80 px-2 py-0.5 rounded">
                  Sterilization Standards
                </span>
              </div>
              <div className="p-4 space-y-1">
                <h4 className="font-serif text-base text-slate-900 font-medium">Autoclaved Micro-Instruments</h4>
                <p className="text-xs text-slate-600 font-light leading-relaxed">
                  Hospital-grade Class-B sterilization. All non-disposable tools are sealed in barrier pouches and unsealed chairside.
                </p>
              </div>
            </div>

            {/* Image 2: Orthodontic & Aligners Assessment */}
            <div className="group rounded-lg overflow-hidden border border-slate-200 bg-[#FAF9F6]">
              <div className="relative h-52 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80"
                  alt="Clear aligners and dental alignment study model"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 text-[11px] uppercase tracking-wider font-semibold text-emerald-300 bg-emerald-950/90 border border-emerald-700/60 px-2 py-0.5 rounded">
                  ★ Free Consultation Offered
                </span>
              </div>
              <div className="p-4 space-y-1">
                <h4 className="font-serif text-base text-slate-900 font-medium">Orthodontics & Clear Aligners</h4>
                <p className="text-xs text-slate-600 font-light leading-relaxed">
                  Bite assessments and digital tooth movement models. We offer a 100% complimentary initial consultation (₹0 fee).
                </p>
              </div>
            </div>

            {/* Image 3: Doctor Consultation */}
            <div className="group rounded-lg overflow-hidden border border-slate-200 bg-[#FAF9F6]">
              <div className="relative h-52 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80"
                  alt="One-on-one dental consultation and discussion"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 text-[11px] uppercase tracking-wider font-semibold text-white bg-slate-900/80 px-2 py-0.5 rounded">
                  Chairside Consultation
                </span>
              </div>
              <div className="p-4 space-y-1">
                <h4 className="font-serif text-base text-slate-900 font-medium">Unhurried Discussion</h4>
                <p className="text-xs text-slate-600 font-light leading-relaxed">
                  Transparent conversation about your teeth, gums, and radiographs so you stay in total control of your care.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
