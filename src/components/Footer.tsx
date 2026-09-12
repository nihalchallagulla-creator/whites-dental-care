import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { Phone, MapPin, Clock, ArrowUp, MessageSquare } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#0A101D] text-slate-400 text-xs">
      
      {/* Emergency & Acute Pain Notice Banner */}
      <div className="bg-[#111C33] border-b border-slate-800 py-4 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="text-slate-300 text-xs">
            <strong className="text-white font-semibold">Acute Toothache or Dental Trauma?</strong> We prioritize dental emergencies during clinic operating hours.
          </div>
          <div className="flex items-center gap-3">
            <a
              id="footer-emergency-call-btn"
              href={CLINIC_INFO.phoneTel}
              className="inline-flex items-center gap-1.5 bg-rose-600 hover:bg-rose-700 text-white font-semibold px-3.5 py-1.5 rounded-sm uppercase tracking-wider text-[11px] transition-colors"
              title="Emergency Dental Care Kondapur"
            >
              <Phone className="w-3 h-3" />
              <span>CALL NOW: {CLINIC_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex flex-col tracking-wider">
              <span className="font-serif text-2xl font-bold tracking-[0.18em] text-white uppercase leading-tight">
                WHITES
              </span>
              <span className="text-[11px] uppercase tracking-[0.28em] text-[#C5A880] font-medium leading-tight">
                DENTAL CARE
              </span>
            </div>

            <p className="text-slate-400 font-light leading-relaxed text-xs sm:text-sm max-w-sm">
              A modern, patient-first dental clinic on Kondapur Main Road, Hyderabad. 
              Delivering gentle preventive dentistry, modern endodontics, clear aligners, and restorative smile care.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <button
                id="footer-book-btn"
                onClick={onOpenBooking}
                className="bg-white hover:bg-slate-100 text-[#0F172A] font-semibold uppercase tracking-widest text-[11px] px-4 py-2.5 rounded-sm transition-colors"
              >
                Book Appointment
              </button>
              <a
                id="footer-whatsapp-btn"
                href={CLINIC_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold uppercase tracking-widest text-[11px] px-4 py-2.5 rounded-sm transition-colors inline-flex items-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-white">Explore</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Practice</a></li>
              <li><a href="#treatments" className="hover:text-white transition-colors">Treatments</a></li>
              <li><a href="#doctors" className="hover:text-white transition-colors">Clinical Specialists</a></li>
              <li><a href="#experience" className="hover:text-white transition-colors">Patient Experience</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Visit & Contact</a></li>
            </ul>
          </div>

          {/* Col 3: Key Treatments */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-white">Dental Services</h4>
            <ul className="space-y-2 text-xs">
              <li><span className="text-slate-400">Oral Health Examination & X-Rays</span></li>
              <li><span className="text-slate-400">Professional Teeth Cleaning & Scaling</span></li>
              <li><span className="text-slate-400">Root Canal Treatment (Endodontics)</span></li>
              <li><span className="text-slate-400">Composite Aesthetic Restorations</span></li>
              <li><span className="text-slate-400">Clear Aligners & Orthodontics</span></li>
              <li><span className="text-slate-400">In-Office Teeth Whitening</span></li>
              <li><span className="text-slate-400">Dental Implants Consultation</span></li>
            </ul>
          </div>

          {/* Col 4: Location & Operating Hours */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-white">Clinic Details</h4>
            
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                <address className="not-italic leading-relaxed">
                  B-Block, No. 243, Kondapur Main Road,<br />
                  Sri Ramnagar, Kondapur,<br />
                  Hyderabad, Telangana 500086
                </address>
              </div>

              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="w-4 h-4 text-[#C5A880] shrink-0" />
                <a href={CLINIC_INFO.phoneTel} className="hover:text-white transition-colors font-medium">
                  Call: {CLINIC_INFO.phoneDisplay}
                </a>
              </div>

              <div className="flex items-start gap-2 text-slate-300 pt-1">
                <Clock className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-white">Monday–Saturday: 9:00 AM–7:00 PM</p>
                  <p className="text-slate-400 text-[11px]">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Regulatory / Medical Transparency Notice */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} Whites Dental Care. All rights reserved. Located at Kondapur Main Road, Hyderabad.
          </p>

          <div className="flex items-center gap-6">
            <span className="text-slate-500">Hospital-Grade Sterilization Protocols</span>
            <button
              id="footer-back-to-top-btn"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
