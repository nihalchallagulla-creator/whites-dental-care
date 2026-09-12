import React from 'react';
import { Calendar, Phone, ArrowRight, ShieldCheck, Clock, MapPin, CheckCircle2, ChevronRight, MessageSquare } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { getClinicStatusIST } from '../utils/timeUtils';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const status = getClinicStatusIST();

  return (
    <section id="home" className="relative pt-6 pb-16 lg:pt-12 lg:pb-20 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Editorial Typography & Actions */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            
            {/* Location Pill & Free Ortho Benefit */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-medium text-slate-700 tracking-wide">
                <span className="flex h-2 w-2 rounded-full bg-[#C5A880]" />
                <span>Kondapur Main Road · Hyderabad</span>
                <span className="text-slate-300">|</span>
                <span className="text-slate-500">Family & Specialist Dentistry</span>
              </div>

              <button
                onClick={() => onOpenBooking('orthodontics-aligners')}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-semibold tracking-wide transition-colors cursor-pointer"
              >
                <span className="flex h-2 w-2 rounded-full bg-emerald-600 animate-pulse" />
                <span>Free Orthodontic Consultation</span>
                <span className="text-[10px] bg-emerald-700 text-white font-bold px-1.5 py-0.5 rounded">₹0 Fee</span>
              </button>
            </div>

            {/* Main Title */}
            <div className="space-y-3">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#0F172A] font-normal leading-[1.12] tracking-tight">
                Gentle, conservative <br />
                <span className="italic font-light text-[#334155]">dental care</span> <br />
                in Kondapur.
              </h1>
              <p className="text-base sm:text-lg text-slate-600 max-w-xl font-light leading-relaxed pt-2">
                At Whites Dental Care, we prioritize preserving your natural tooth structure through thorough diagnostics, 
                strict Class-B sterilization, and an unhurried, gentle clinical approach.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 pt-2">
              <button
                id="hero-book-appointment-btn"
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2.5 bg-[#0F172A] hover:bg-[#1E293B] text-white text-xs sm:text-sm uppercase tracking-[0.14em] font-semibold px-6 py-3.5 rounded-sm transition-all duration-200 shadow-sm active:scale-[0.99] group"
              >
                <Calendar className="w-4 h-4 text-[#C5A880]" />
                <span>BOOK AN APPOINTMENT</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <a
                id="hero-whatsapp-btn"
                href={CLINIC_INFO.whatsappAppointmentLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs sm:text-sm uppercase tracking-[0.12em] font-semibold px-5 py-3.5 rounded-sm transition-all duration-200 shadow-sm active:scale-[0.99]"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                id="hero-call-clinic-btn"
                href={CLINIC_INFO.phoneTel}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 text-xs sm:text-sm uppercase tracking-[0.12em] font-semibold px-5 py-3.5 rounded-sm transition-colors"
                title="Call Whites Dental Care"
              >
                <Phone className="w-4 h-4 text-slate-700" />
                <span>CALL NOW: {CLINIC_INFO.phoneDisplay}</span>
              </a>
            </div>

            {/* Key Clinical Commitments */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 font-semibold text-slate-900">
                  <ShieldCheck className="w-4 h-4 text-emerald-700" />
                  <span>Class-B Sterilization</span>
                </div>
                <p className="text-slate-500 font-normal leading-relaxed">Sealed pouches opened chairside</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 font-semibold text-slate-900">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A880]" />
                  <span>Conservative Care</span>
                </div>
                <p className="text-slate-500 font-normal leading-relaxed">Focus on saving natural teeth</p>
              </div>

              <div className="col-span-2 sm:col-span-1 space-y-1">
                <div className="flex items-center gap-1.5 font-semibold text-slate-900">
                  <Clock className="w-4 h-4 text-slate-700" />
                  <span>Mon–Sat Hours</span>
                </div>
                <p className="text-slate-500 font-normal leading-relaxed">9:00 AM to 7:00 PM</p>
              </div>
            </div>

          </div>

          {/* Right Column: Architectural & Honest Clinical Practice Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
              
              {/* Card Header with real-time status */}
              <div className="p-6 bg-[#0F172A] text-white">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] uppercase tracking-widest font-semibold text-[#C5A880]">
                    Clinic Registry & Hours
                  </span>
                  <span
                    className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium ${
                      status.isOpen
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                        : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        status.isOpen ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'
                      }`}
                    />
                    <span>{status.message}</span>
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-normal">Whites Dental Care</h3>
                <p className="text-xs text-slate-300 font-light mt-1 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                  <span>B-Block, No. 243, Kondapur Main Road, Hyderabad</span>
                </p>
              </div>

              {/* Realistic Consultation Photo (Authentic close-up, zero exaggerated suites) */}
              <div className="relative h-44 w-full overflow-hidden bg-slate-100 border-b border-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80"
                  alt="Doctor and patient consultation at Whites Dental Care"
                  className="w-full h-full object-cover"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />
                <div className="absolute bottom-2.5 left-4 right-4 flex items-center justify-between text-white text-xs">
                  <span className="text-[11px] font-light text-slate-200 drop-shadow-xs">One-on-one chairside dental consultation</span>
                  <span className="bg-emerald-700 text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded shadow-xs">
                    Free Ortho Consult
                  </span>
                </div>
              </div>

              {/* Card Body: Honest Care Commitments & Scheduling Trigger */}
              <div className="p-6 space-y-4">
                
                <div className="space-y-2.5 text-xs">
                  {/* Special Free Ortho Commitment */}
                  <div className="flex items-start gap-3 p-3 rounded bg-emerald-50 border border-emerald-200/90 text-emerald-950">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-emerald-950 text-xs">Free Orthodontic Assessment</h4>
                        <span className="text-[10px] uppercase font-bold text-emerald-800 bg-emerald-100 px-1.5 py-0.2 rounded border border-emerald-300">
                          ₹0 Fee
                        </span>
                      </div>
                      <p className="text-emerald-800 text-[11px] mt-0.5 leading-relaxed">
                        Comprehensive smile alignment & clear aligners check with zero consultation charge.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded bg-[#FAF9F6] border border-slate-200/80">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-slate-900">Direct Doctor Consultation</h4>
                      <p className="text-slate-500 mt-0.5 leading-relaxed">
                        Every examination and treatment is conducted by qualified dental surgeons and consulting specialists.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded bg-[#FAF9F6] border border-slate-200/80">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-slate-900">Paced & Gentle Numbing</h4>
                      <p className="text-slate-500 mt-0.5 leading-relaxed">
                        We apply topical numbing gel first, keeping treatments comfortable for sensitive patients.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded bg-[#FAF9F6] border border-slate-200/80">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-slate-900">Transparent Estimates First</h4>
                      <p className="text-slate-500 mt-0.5 leading-relaxed">
                        Clear explanation of necessary treatments versus optional care before any procedure commences.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Direct Slot Trigger */}
                <div className="pt-2 border-t border-slate-100 flex flex-col gap-2.5">
                  <button
                    onClick={onOpenBooking}
                    className="w-full flex items-center justify-between bg-[#0F172A] hover:bg-[#1E293B] text-white text-xs uppercase tracking-wider font-semibold py-3 px-4 rounded-sm transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-[#C5A880]" />
                      <span>Select Preferred Day & Slot</span>
                    </span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </button>

                  <a
                    id="hero-card-whatsapp-btn"
                    href={CLINIC_INFO.whatsappAppointmentLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-[#25D366]/10 hover:bg-[#25D366]/20 text-emerald-900 border border-[#25D366]/30 text-xs font-semibold py-2.5 px-4 rounded-sm transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                    <span>Quick Booking on WhatsApp</span>
                  </a>

                  <p className="text-[11px] text-slate-400 text-center">
                    Appointments scheduled by confirmation · Walk-ins accommodated
                  </p>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
