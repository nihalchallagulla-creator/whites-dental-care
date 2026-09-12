import React from 'react';
import { Phone, MessageSquare, Navigation } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface QuickActionBarProps {
  onOpenBooking?: () => void;
}

export const QuickActionBar: React.FC<QuickActionBarProps> = () => {
  return (
    <div
      id="floating-quick-action-bar"
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/95 backdrop-blur-md border-t border-slate-200/90 py-2 px-3 shadow-2xl safe-area-bottom"
    >
      <div className="max-w-md mx-auto grid grid-cols-3 gap-2">
        {/* CALL button */}
        <a
          id="mobile-bar-call-btn"
          href={CLINIC_INFO.phoneTel}
          className="flex flex-col items-center justify-center py-2 px-2 rounded-md bg-slate-100 hover:bg-slate-200 active:bg-slate-300 text-slate-900 text-center transition-colors min-h-[48px]"
          title="Call Whites Dental Care"
        >
          <Phone className="w-4 h-4 text-slate-800 mb-0.5" />
          <span className="text-[11px] font-bold uppercase tracking-wider">Call</span>
        </a>

        {/* WHATSAPP button - prominent and large enough to tap easily */}
        <a
          id="mobile-bar-whatsapp-btn"
          href={CLINIC_INFO.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-2 rounded-md bg-[#25D366] hover:bg-[#20bd5a] active:bg-[#1da850] text-white text-center transition-colors shadow-sm min-h-[48px]"
          title="Chat on WhatsApp (+91 9949232222)"
        >
          <MessageSquare className="w-4 h-4 text-white mb-0.5" />
          <span className="text-[11px] font-bold uppercase tracking-wider">WhatsApp</span>
        </a>

        {/* DIRECTIONS button */}
        <a
          id="mobile-bar-directions-btn"
          href={CLINIC_INFO.googleMapsDirectionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-2 rounded-md bg-[#0F172A] hover:bg-slate-800 active:bg-slate-900 text-white text-center transition-colors shadow-sm min-h-[48px]"
          title="Get Directions to Whites Dental Care"
        >
          <Navigation className="w-4 h-4 text-[#C5A880] mb-0.5" />
          <span className="text-[11px] font-bold uppercase tracking-wider">Directions</span>
        </a>
      </div>
    </div>
  );
};
