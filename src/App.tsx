import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { TreatmentsSection } from './components/TreatmentsSection';
import { TreatmentModal } from './components/TreatmentModal';
import { DoctorsSection } from './components/DoctorsSection';
import { PatientExperienceSection } from './components/PatientExperienceSection';
import { LocationContactSection } from './components/LocationContactSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';
import { MyBookingsModal } from './components/MyBookingsModal';
import { QuickActionBar } from './components/QuickActionBar';
import { Treatment, AppointmentBooking } from './types';
import { CalendarCheck, ShieldCheck } from 'lucide-react';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedTreatmentForBooking, setSelectedTreatmentForBooking] = useState<string | undefined>(undefined);
  const [selectedTreatmentForDetails, setSelectedTreatmentForDetails] = useState<Treatment | null>(null);
  const [isMyBookingsOpen, setIsMyBookingsOpen] = useState(false);
  const [hasSavedBookings, setHasSavedBookings] = useState(false);

  // Check if patient has any bookings in localStorage
  const checkSavedBookings = () => {
    try {
      const data = JSON.parse(localStorage.getItem('whites_dental_appointments') || '[]');
      setHasSavedBookings(data && data.length > 0);
    } catch {
      setHasSavedBookings(false);
    }
  };

  useEffect(() => {
    checkSavedBookings();
  }, [isBookingOpen]);

  const handleOpenBooking = (treatmentId?: string) => {
    setSelectedTreatmentForBooking(treatmentId);
    setIsBookingOpen(true);
  };

  const handleSelectTreatmentForDetails = (treatment: Treatment) => {
    setSelectedTreatmentForDetails(treatment);
  };

  const handleBookFromModal = (treatmentId: string) => {
    setSelectedTreatmentForDetails(null);
    handleOpenBooking(treatmentId);
  };

  const handleBookingSuccess = (_booking: AppointmentBooking) => {
    checkSavedBookings();
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#1E293B]">
      
      {/* Sticky Navigation */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Floating My Bookings pill button if patient has saved bookings */}
      {hasSavedBookings && (
        <button
          id="floating-my-bookings-pill"
          onClick={() => setIsMyBookingsOpen(true)}
          className="fixed bottom-20 lg:bottom-6 right-6 z-30 inline-flex items-center gap-2 bg-[#0F172A] hover:bg-slate-800 text-white text-xs font-semibold px-4 py-2.5 rounded-full shadow-xl border border-slate-700 transition-transform active:scale-95"
        >
          <CalendarCheck className="w-4 h-4 text-[#C5A880]" />
          <span>My Scheduled Requests</span>
        </button>
      )}

      {/* Main Content Sections */}
      <main className="flex-1 pb-16 lg:pb-0">
        {/* Hero Section */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* About Practice & Philosophy */}
        <AboutSection onOpenBooking={() => handleOpenBooking()} />

        {/* Clinical Treatments & Interactive Details */}
        <TreatmentsSection
          onSelectTreatment={handleSelectTreatmentForDetails}
          onBookTreatment={(id) => handleOpenBooking(id)}
        />

        {/* Clinical Specialists & Consultation Standard */}
        <DoctorsSection onOpenBooking={() => handleOpenBooking()} />

        {/* Patient Experience Journey & Comfort Amenities */}
        <PatientExperienceSection onOpenBooking={() => handleOpenBooking()} />

        {/* Location (Kondapur Main Road), Live Map, Directions & Direct Contact */}
        <LocationContactSection onOpenBooking={() => handleOpenBooking()} />

        {/* Frequently Asked Questions */}
        <FaqSection />
      </main>

      {/* Footer with Complete Coordinates and Emergency Priority Notice */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Mobile Sticky Quick Action Bar (Call, WhatsApp, Book) */}
      <QuickActionBar onOpenBooking={() => handleOpenBooking()} />

      {/* Treatment Details Modal */}
      <TreatmentModal
        treatment={selectedTreatmentForDetails}
        onClose={() => setSelectedTreatmentForDetails(null)}
        onBookTreatment={handleBookFromModal}
      />

      {/* Interactive Appointment Booking Modal */}
      <AppointmentModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedTreatmentId={selectedTreatmentForBooking}
        onBookingSuccess={handleBookingSuccess}
      />

      {/* Patient Portal / My Bookings Modal */}
      <MyBookingsModal
        isOpen={isMyBookingsOpen}
        onClose={() => setIsMyBookingsOpen(false)}
        onNewBooking={() => handleOpenBooking()}
      />

    </div>
  );
}
