import React, { useState } from 'react';
import { MapPin, Phone, Clock, Navigation, MessageSquare, Copy, Check, Calendar } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { getClinicStatusIST } from '../utils/timeUtils';

interface LocationContactSectionProps {
  onOpenBooking: () => void;
}

export const LocationContactSection: React.FC<LocationContactSectionProps> = ({ onOpenBooking }) => {
  const [copied, setCopied] = useState(false);
  const status = getClinicStatusIST();

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(CLINIC_INFO.fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scheduleRows = [
    { day: 'Monday', hours: '9:00 AM – 7:00 PM', isOpenDay: true },
    { day: 'Tuesday', hours: '9:00 AM – 7:00 PM', isOpenDay: true },
    { day: 'Wednesday', hours: '9:00 AM – 7:00 PM', isOpenDay: true },
    { day: 'Thursday', hours: '9:00 AM – 7:00 PM', isOpenDay: true },
    { day: 'Friday', hours: '9:00 AM – 7:00 PM', isOpenDay: true },
    { day: 'Saturday', hours: '9:00 AM – 7:00 PM', isOpenDay: true },
    { day: 'Sunday', hours: 'Closed', isOpenDay: false },
  ];

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C5A880] block mb-3">
            Visit & Contact
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#0F172A] font-normal tracking-tight">
            Conveniently located on Kondapur Main Road.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 font-light leading-relaxed">
            Accessible from Hitec City, Madhapur, and Gachibowli with dedicated parking and a quiet, tranquil clinic environment.
          </p>
        </div>

        {/* 2-Column Grid: Contact Information & Interactive Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Full Details & Quick Triggers */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Address Card */}
            <div className="p-6 sm:p-8 rounded-lg bg-[#FAF9F6] border border-slate-200 space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-full bg-white text-[#0F172A] border border-slate-200 shadow-2xs mt-0.5">
                    <MapPin className="w-5 h-5 text-[#C5A880]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl text-slate-900 font-semibold">Whites Dental Care</h3>
                    <p className="text-xs uppercase tracking-wider font-semibold text-slate-500 mt-0.5">
                      Kondapur Branch · Hyderabad
                    </p>
                    <address className="not-italic text-sm text-slate-700 leading-relaxed font-light mt-3 space-y-0.5">
                      <p className="font-medium text-slate-900">{CLINIC_INFO.addressLine1}</p>
                      <p>{CLINIC_INFO.addressLine2}</p>
                      <p>{CLINIC_INFO.city}, {CLINIC_INFO.state} {CLINIC_INFO.pincode}</p>
                      <p className="text-slate-500 text-xs mt-1">India</p>
                    </address>
                  </div>
                </div>

                <button
                  id="contact-copy-address-btn"
                  onClick={handleCopyAddress}
                  className="flex items-center gap-1.5 text-xs text-slate-600 hover:text-slate-900 bg-white hover:bg-slate-100 border border-slate-200 px-3 py-1.5 rounded-sm transition-colors shrink-0"
                  title="Copy full address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-medium">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* 3 Prominent Actions: CALL, WHATSAPP, GET DIRECTIONS */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-3 border-t border-slate-200/80">
                <a
                  id="contact-call-btn"
                  href={CLINIC_INFO.phoneTel}
                  className="flex items-center justify-center gap-2 bg-white hover:bg-slate-50 border border-slate-300 text-slate-900 text-xs uppercase tracking-widest font-bold py-3.5 px-3 rounded-sm transition-all shadow-xs"
                  title="Call Whites Dental Care"
                >
                  <Phone className="w-4 h-4 text-slate-800" />
                  <span>CALL</span>
                </a>

                <a
                  id="contact-whatsapp-btn"
                  href={CLINIC_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs uppercase tracking-widest font-bold py-3.5 px-3 rounded-sm transition-all shadow-xs"
                  title="Chat with Whites Dental Care on WhatsApp (+91 9949232222)"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WHATSAPP</span>
                </a>

                <a
                  id="contact-directions-btn"
                  href={CLINIC_INFO.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#0F172A] hover:bg-[#1E293B] text-white text-xs uppercase tracking-widest font-bold py-3.5 px-3 rounded-sm transition-all shadow-xs"
                  title="Get Directions to Whites Dental Care"
                >
                  <Navigation className="w-4 h-4 text-[#C5A880]" />
                  <span>GET DIRECTIONS</span>
                </a>
              </div>
            </div>

            {/* Direct Phone & Appointment Card */}
            <div className="p-6 rounded-lg bg-[#FAF9F6] border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <div className="p-2.5 rounded-full bg-white text-[#0F172A] border border-slate-200">
                  <Phone className="w-5 h-5 text-slate-800" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-widest text-slate-400 font-semibold block">
                    Direct Reception
                  </span>
                  <a
                    id="contact-phone-direct-link"
                    href={CLINIC_INFO.phoneTel}
                    className="font-serif text-xl sm:text-2xl font-semibold text-slate-900 hover:text-[#0D2B45] transition-colors"
                  >
                    {CLINIC_INFO.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <a
                  id="contact-phone-callnow-btn"
                  href={CLINIC_INFO.phoneTel}
                  className="w-1/2 sm:w-auto inline-flex items-center justify-center gap-1.5 bg-white hover:bg-slate-100 border border-slate-300 text-slate-800 text-xs uppercase tracking-wider font-semibold px-4 py-3 rounded-sm transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-slate-700" />
                  <span>Call Now</span>
                </a>

                <button
                  id="contact-book-appointment-btn"
                  onClick={onOpenBooking}
                  className="w-1/2 sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0F172A] hover:bg-[#1E293B] text-white text-xs uppercase tracking-widest font-semibold px-5 py-3 rounded-sm transition-colors shrink-0"
                >
                  <Calendar className="w-4 h-4 text-[#C5A880]" />
                  <span>Book Slot</span>
                </button>
              </div>
            </div>

            {/* Operating Hours Table Card */}
            <div className="p-6 rounded-lg bg-[#FAF9F6] border border-slate-200 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#C5A880]" />
                  <h4 className="font-serif text-lg font-semibold text-slate-900">Clinic Working Hours</h4>
                </div>

                <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${
                  status.isOpen ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                }`}>
                  {status.isOpen ? 'Open Now' : 'Closed'}
                </span>
              </div>

              <div className="divide-y divide-slate-200/70 text-xs">
                {scheduleRows.map((row) => (
                  <div key={row.day} className="py-2 flex items-center justify-between">
                    <span className={`font-medium ${status.currentDayName === row.day ? 'text-[#0F172A] font-bold' : 'text-slate-600'}`}>
                      {row.day} {status.currentDayName === row.day && <span className="text-[10px] text-[#C5A880] ml-1">(Today)</span>}
                    </span>
                    <span className={`${row.isOpenDay ? 'text-slate-800' : 'text-rose-600 font-semibold'}`}>
                      {row.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Live Interactive Google Map Embed & Landmark Guide */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Map Container */}
            <div className="rounded-lg overflow-hidden border border-slate-200 shadow-sm bg-slate-100 h-[380px] sm:h-[440px] relative">
              <iframe
                title="Whites Dental Care Location Map"
                src="https://maps.google.com/maps?q=B-Block,+No.+243,+Kondapur+Main+Road,+Sri+Ramnagar,+Kondapur,+Hyderabad,+Telangana+500086&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
              <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded shadow-md border border-slate-200 text-xs">
                <p className="font-semibold text-slate-900">Whites Dental Care</p>
                <p className="text-slate-500 text-[11px]">Kondapur Main Road, Hyderabad</p>
              </div>
            </div>

            {/* Landmark & Connectivity Guidance */}
            <div className="p-6 rounded-lg bg-[#FAF9F6] border border-slate-200 space-y-3">
              <h4 className="font-serif text-lg font-semibold text-slate-900">Landmarks & Connectivity</h4>
              <ul className="text-xs sm:text-sm text-slate-600 font-light space-y-2 list-disc list-inside">
                <li>Situated along Kondapur Main Road near Sri Ramnagar.</li>
                <li>Approximately 8–10 minutes drive from Hitec City Cyber Towers & Mindspace.</li>
                <li>Convenient access from Botanical Garden road & Gachibowli ORR junction.</li>
                <li>Dedicated street and building parking available for dental clinic visitors.</li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
