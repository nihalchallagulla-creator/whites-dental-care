import React from 'react';
import { UserCheck, Stethoscope, ShieldCheck, Clock, Calendar, Phone, MessageSquare } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface DoctorsSectionProps {
  onOpenBooking: () => void;
}

export const DoctorsSection: React.FC<DoctorsSectionProps> = ({ onOpenBooking }) => {
  const clinicalSpecialties = [
    {
      title: 'General & Restorative Dental Surgeons',
      focus: 'Preventive Care · Diagnostic Imaging · Composite Restorations',
      description: 'Handling foundational oral examinations, cavity prevention, gentle scaling, and conservative restorations with a focus on preserving natural dental structures.',
    },
    {
      title: 'Consulting Endodontic Specialists',
      focus: 'Rotary Root Canal Therapy · Dental Pulp Preservation',
      description: 'Specialized in single and multi-visit root canal treatments utilizing precision apex locators and rotary instrumentation to comfortably resolve acute tooth pain.',
    },
    {
      title: 'Consulting Orthodontic Specialists',
      focus: 'Clear Aligners · Malocclusion · Bite Realignment',
      description: 'Conducting comprehensive smile evaluations, digital tooth movement staging, and customized alignment therapy for teens and adults. Complimentary initial consultation (₹0 fee) provided.',
    },
    {
      title: 'Consulting Periodontists & Implant Specialists',
      focus: 'Deep Periodontal Therapy · Titanium Dental Implants',
      description: 'Managing gum health, bone architecture preservation, and surgical planning for permanent tooth replacement with dental implants.',
    },
  ];

  return (
    <section id="doctors" className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C5A880] block mb-3">
            Clinical Care & Consultation
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#0F172A] font-normal tracking-tight">
            Consulting dental surgeons & specialists dedicated to your smile.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 font-light leading-relaxed">
            At Whites Dental Care, all care is rendered by qualified dental practitioners and consulting specialists. 
            We maintain an unhurried, patient-centered model where every patient receives dedicated one-on-one attention.
          </p>
        </div>

        {/* Doctor Consultation Philosophy Banner */}
        <div className="bg-[#FAF9F6] border border-slate-200/90 rounded-lg p-6 sm:p-10 mb-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-800">
                <UserCheck className="w-4 h-4 text-[#C5A880]" />
                <span>Our Consultation Standard</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-slate-900 font-medium">
                Personalized, one-on-one doctor time for every appointment.
              </h3>
              <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
                We believe exceptional clinical outcomes require thorough understanding. During your visit, 
                our dental surgeons conduct direct examinations, review digital imaging chairside with you, 
                and formulate tailored options based strictly on your individual oral health.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-2 text-xs font-medium text-slate-700">
                <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded border border-slate-200">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                  Licensed Dental Surgeons
                </span>
                <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded border border-slate-200">
                  <Stethoscope className="w-3.5 h-3.5 text-[#0F172A]" />
                  Multi-Disciplinary Specialists
                </span>
                <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded border border-slate-200">
                  <Clock className="w-3.5 h-3.5 text-slate-600" />
                  Paced, Unhurried Appointments
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-2.5 justify-center">
              <button
                id="doctor-section-book-consultation-btn"
                onClick={onOpenBooking}
                className="w-full flex items-center justify-center gap-2 bg-[#0F172A] hover:bg-[#1E293B] text-white text-xs uppercase tracking-widest font-semibold py-3 px-6 rounded-sm transition-all shadow"
              >
                <Calendar className="w-4 h-4 text-[#C5A880]" />
                <span>Book Specialist Visit</span>
              </button>

              <a
                id="doctor-section-whatsapp-btn"
                href={CLINIC_INFO.whatsappAppointmentLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs uppercase tracking-widest font-bold py-3 px-6 rounded-sm transition-colors text-center shadow-xs"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Appointment</span>
              </a>

              <a
                id="doctor-section-call-clinic-btn"
                href={CLINIC_INFO.phoneTel}
                className="w-full flex items-center justify-center gap-2 bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 text-xs uppercase tracking-widest font-semibold py-2.5 px-6 rounded-sm transition-colors text-center"
                title="Call Whites Dental Care"
              >
                <Phone className="w-4 h-4 text-slate-600" />
                <span>CALL NOW: {CLINIC_INFO.phoneDisplay}</span>
              </a>
            </div>

          </div>
        </div>

        {/* Clinical Disciplines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {clinicalSpecialties.map((spec, index) => (
            <div
              key={index}
              className="p-7 rounded-lg bg-white border border-slate-200 hover:border-slate-300 transition-all duration-200 space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-[#C5A880]">Clinical Focus</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500" title="Consulting Available" />
              </div>
              <h4 className="font-serif text-xl sm:text-2xl text-slate-900 font-semibold">{spec.title}</h4>
              <p className="text-xs uppercase tracking-wider font-semibold text-slate-500">{spec.focus}</p>
              <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed pt-1">
                {spec.description}
              </p>
            </div>
          ))}
        </div>

        {/* Informative transparency note */}
        <div className="mt-8 text-center text-xs text-slate-500">
          To schedule a dedicated appointment with our dental surgeons or consulting specialists for root canal, aligners, or surgical implants, please call or use our online appointment request.
        </div>

      </div>
    </section>
  );
};
