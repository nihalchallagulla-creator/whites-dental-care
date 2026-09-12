import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, Phone, User, CheckCircle2, MessageSquare, AlertCircle, Sparkles } from 'lucide-react';
import { CLINIC_INFO, TREATMENTS } from '../data/clinicData';
import { AppointmentBooking } from '../types';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedTreatmentId?: string;
  onBookingSuccess?: (booking: AppointmentBooking) => void;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  preselectedTreatmentId,
  onBookingSuccess,
}) => {
  const [treatmentId, setTreatmentId] = useState<string>(preselectedTreatmentId || 'comprehensive-exam');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTimeSlot, setPreferredTimeSlot] = useState('10:00 AM');
  const [notes, setNotes] = useState('');
  const [dateError, setDateError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState<AppointmentBooking | null>(null);

  // Time slot options within 9:00 AM to 7:00 PM
  const timeSlots = [
    { label: '09:30 AM', period: 'Morning' },
    { label: '10:30 AM', period: 'Morning' },
    { label: '11:30 AM', period: 'Morning' },
    { label: '12:30 PM', period: 'Morning' },
    { label: '02:30 PM', period: 'Afternoon' },
    { label: '03:30 PM', period: 'Afternoon' },
    { label: '04:30 PM', period: 'Afternoon' },
    { label: '05:30 PM', period: 'Evening' },
    { label: '06:15 PM', period: 'Evening' },
  ];

  // Calculate default date (tomorrow or next weekday)
  useEffect(() => {
    if (preselectedTreatmentId) {
      setTreatmentId(preselectedTreatmentId);
    }

    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    // If tomorrow is Sunday (0), move to Monday
    if (tomorrow.getDay() === 0) {
      tomorrow.setDate(tomorrow.getDate() + 1);
    }
    const isoDate = tomorrow.toISOString().split('T')[0];
    setPreferredDate(isoDate);
  }, [preselectedTreatmentId, isOpen]);

  if (!isOpen) return null;

  const handleDateChange = (val: string) => {
    setPreferredDate(val);
    if (!val) return;
    const selected = new Date(val);
    // getDay in local timezone
    const day = selected.getDay();
    if (day === 0) {
      // Sunday
      setDateError('Whites Dental Care is closed on Sundays. Please choose Monday through Saturday.');
    } else {
      setDateError(null);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim() || !preferredDate) return;

    const selected = new Date(preferredDate);
    if (selected.getDay() === 0) {
      setDateError('Please pick a date from Monday to Saturday (Sunday is closed).');
      return;
    }

    setIsSubmitting(true);

    const selectedTreatment = TREATMENTS.find((t) => t.id === treatmentId);
    const treatmentName = selectedTreatment ? selectedTreatment.title : 'General Dental Consultation';

    const newBooking: AppointmentBooking = {
      id: `WDC-${Date.now().toString().slice(-6)}`,
      fullName: fullName.trim(),
      phone: phone.trim(),
      email: email.trim() || undefined,
      treatmentId,
      treatmentName,
      preferredDate,
      preferredTimeSlot,
      notes: notes.trim() || undefined,
      createdAt: new Date().toISOString(),
      status: 'Pending Confirmation',
    };

    // Save to localStorage
    try {
      const existing = JSON.parse(localStorage.getItem('whites_dental_appointments') || '[]');
      localStorage.setItem('whites_dental_appointments', JSON.stringify([newBooking, ...existing]));
    } catch {
      // ignore
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setConfirmedBooking(newBooking);
      if (onBookingSuccess) {
        onBookingSuccess(newBooking);
      }
    }, 400);
  };

  const resetForm = () => {
    setConfirmedBooking(null);
    setFullName('');
    setPhone('');
    setEmail('');
    setNotes('');
    onClose();
  };

  // WhatsApp pre-filled appointment text
  const getWhatsAppBookingLink = (booking: AppointmentBooking) => {
    const text = encodeURIComponent(
      `Hello, I would like to book an appointment at Whites Dental Care. (Ref: ${booking.id}, Patient: ${booking.fullName}, Treatment: ${booking.treatmentName}, Date: ${booking.preferredDate}, Slot: ${booking.preferredTimeSlot})`
    );
    return `https://wa.me/919949232222?text=${text}`;
  };

  return (
    <div
      id="appointment-booking-modal-backdrop"
      className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fade-in"
      onClick={onClose}
    >
      <div
        id="appointment-booking-modal-container"
        className="bg-white rounded-lg max-w-xl w-full overflow-hidden shadow-2xl border border-slate-200 my-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#0F172A] text-white p-6 relative">
          <button
            id="appointment-modal-close-btn"
            onClick={resetForm}
            className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C5A880] font-semibold mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Whites Dental Care · Kondapur</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-normal">
            {confirmedBooking ? 'Appointment Request Received' : 'Schedule Your Dental Visit'}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 font-light mt-1">
            {confirmedBooking 
              ? 'Our clinic team will confirm your preferred timing shortly.' 
              : 'Monday–Saturday: 9:00 AM – 7:00 PM · Closed on Sundays'}
          </p>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 max-h-[calc(85vh-160px)] overflow-y-auto">
          {confirmedBooking ? (
            /* Confirmation Screen */
            <div className="space-y-6 text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center border border-emerald-200">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs uppercase tracking-widest text-slate-400 font-semibold">
                  Reference: {confirmedBooking.id}
                </span>
                <h4 className="font-serif text-2xl text-slate-900 font-semibold mt-1">
                  Thank You, {confirmedBooking.fullName}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-md mx-auto font-light">
                  Your appointment request for <strong>{confirmedBooking.treatmentName}</strong> on{' '}
                  <strong>{confirmedBooking.preferredDate}</strong> ({confirmedBooking.preferredTimeSlot}) has been logged.
                </p>
              </div>

              {/* Booking Summary Card */}
              <div className="p-5 rounded-lg bg-[#FAF9F6] border border-slate-200 text-left space-y-2.5 text-xs sm:text-sm text-slate-700">
                <div className="flex justify-between border-b border-slate-200/60 pb-2">
                  <span className="text-slate-500 font-medium">Clinic Location:</span>
                  <span className="font-semibold text-right text-slate-900">Kondapur Main Road, Hyderabad</span>
                </div>
                <div className="flex justify-between border-b border-slate-200/60 pb-2">
                  <span className="text-slate-500 font-medium">Contact Phone:</span>
                  <span className="font-semibold">{confirmedBooking.phone}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200/60 pb-2">
                  <span className="text-slate-500 font-medium">Slot Requested:</span>
                  <span className="font-semibold">{confirmedBooking.preferredDate} · {confirmedBooking.preferredTimeSlot}</span>
                </div>
                {confirmedBooking.treatmentId === 'orthodontics-aligners' && (
                  <div className="flex justify-between border-b border-emerald-200 pb-2 bg-emerald-50/60 -mx-2 px-2 py-1 rounded">
                    <span className="text-emerald-800 font-medium">Initial Consultation Fee:</span>
                    <span className="font-bold text-emerald-800">FREE (₹0 Special Offer)</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-slate-500 font-medium">Direct Clinic Desk:</span>
                  <span className="font-semibold text-[#0F172A]">{CLINIC_INFO.phoneDisplay}</span>
                </div>
              </div>

              {/* Instant WhatsApp Verification Button */}
              <div className="space-y-3 pt-2">
                <a
                  id="appointment-confirm-whatsapp-btn"
                  href={getWhatsAppBookingLink(confirmedBooking)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs uppercase tracking-widest font-bold py-3.5 px-6 rounded-sm transition-all shadow"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Confirmation on WhatsApp</span>
                </a>

                 <a
                  id="appointment-confirm-call-btn"
                  href={CLINIC_INFO.phoneTel}
                  className="w-full inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs uppercase tracking-widest font-semibold py-3 px-6 rounded-sm transition-colors"
                >
                  <Phone className="w-4 h-4 text-slate-600" />
                  <span>Call Reception ({CLINIC_INFO.phoneDisplay})</span>
                </a>

                <button
                  id="appointment-done-btn"
                  onClick={resetForm}
                  className="text-xs text-slate-500 hover:text-slate-800 font-medium underline block mx-auto pt-2"
                >
                  Close and return to website
                </button>
              </div>
            </div>
          ) : (
            /* Booking Form */
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Quick WhatsApp Booking Option */}
              <div className="p-3 bg-emerald-50/70 border border-emerald-200 rounded-sm flex flex-col sm:flex-row items-center justify-between gap-2.5">
                <div className="flex items-center gap-2 text-xs text-emerald-900">
                  <MessageSquare className="w-4 h-4 text-[#25D366] shrink-0" />
                  <span>Prefer fast booking via WhatsApp?</span>
                </div>
                <a
                  id="appointment-modal-quick-whatsapp-btn"
                  href={CLINIC_INFO.whatsappAppointmentLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 bg-[#25D366] hover:bg-[#20bd5a] text-white text-[11px] uppercase tracking-wider font-bold px-3.5 py-1.5 rounded-sm transition-colors shadow-2xs"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Book on WhatsApp</span>
                </a>
              </div>

              {/* Treatment Selection */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-slate-700 mb-1.5">
                  Select Treatment / Reason for Visit
                </label>
                <select
                  id="appointment-treatment-select"
                  value={treatmentId}
                  onChange={(e) => setTreatmentId(e.target.value)}
                  className="w-full bg-[#FAF9F6] border border-slate-200 rounded-sm px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-slate-800 transition-colors"
                  required
                >
                  {TREATMENTS.map((t) => (
                    <option key={t.id} value={t.id}>
                      {t.title} {t.isFreeConsultation ? '— ★ FREE CONSULTATION (₹0)' : `(${t.visitDuration})`}
                    </option>
                  ))}
                  <option value="general-consultation">First Visit Consultation & Checkup</option>
                  <option value="urgent-ache">Acute Toothache / Urgent Concern</option>
                </select>

                {treatmentId === 'orthodontics-aligners' && (
                  <div className="mt-2 p-2.5 rounded bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse shrink-0" />
                    <span><strong>Complimentary Consultation Applied:</strong> Initial smile assessment and clear aligner evaluation is 100% free with ₹0 doctor fee.</span>
                  </div>
                )}
              </div>

              {/* Date and Time Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-slate-700 mb-1.5">
                    Preferred Date (Mon–Sat)
                  </label>
                  <input
                    id="appointment-date-input"
                    type="date"
                    min={new Date().toISOString().split('T')[0]}
                    value={preferredDate}
                    onChange={(e) => handleDateChange(e.target.value)}
                    className="w-full bg-[#FAF9F6] border border-slate-200 rounded-sm px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-slate-800 transition-colors"
                    required
                  />
                  {dateError && (
                    <div className="flex items-center gap-1 text-[11px] text-red-600 mt-1.5">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{dateError}</span>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-slate-700 mb-1.5">
                    Preferred Time Slot
                  </label>
                  <select
                    id="appointment-time-select"
                    value={preferredTimeSlot}
                    onChange={(e) => setPreferredTimeSlot(e.target.value)}
                    className="w-full bg-[#FAF9F6] border border-slate-200 rounded-sm px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-slate-800 transition-colors"
                    required
                  >
                    {timeSlots.map((slot) => (
                      <option key={slot.label} value={slot.label}>
                        {slot.label} ({slot.period})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Patient Full Name */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-slate-700 mb-1.5">
                  Patient Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    id="appointment-name-input"
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-[#FAF9F6] border border-slate-200 rounded-sm pl-10 pr-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-slate-800 transition-colors"
                  />
                </div>
              </div>

              {/* Phone & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-slate-700 mb-1.5">
                    Phone Number (+91) *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      id="appointment-phone-input"
                      type="tel"
                      required
                      placeholder="+91 9949232222"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-[#FAF9F6] border border-slate-200 rounded-sm pl-10 pr-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-slate-800 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-slate-700 mb-1.5">
                    Email Address (Optional)
                  </label>
                  <input
                    id="appointment-email-input"
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#FAF9F6] border border-slate-200 rounded-sm px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-slate-800 transition-colors"
                  />
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-slate-700 mb-1.5">
                  Symptoms, Concerns, or Medical Notes (Optional)
                </label>
                <textarea
                  id="appointment-notes-input"
                  rows={2}
                  placeholder="e.g. Sensitivity to cold water on lower right molar, anxiety with needles, etc."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-[#FAF9F6] border border-slate-200 rounded-sm p-3 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-slate-800 transition-colors resize-none"
                />
              </div>

              {/* Notice */}
              <div className="p-3 bg-slate-50 rounded border border-slate-200 text-[11px] text-slate-500">
                Clinic Hours: Monday–Saturday, 9:00 AM–7:00 PM. We will reach out to confirm your timing. For urgent toothaches, you can also call directly at +91 9949232222.
              </div>

              {/* Submit */}
              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  id="appointment-cancel-btn"
                  onClick={resetForm}
                  className="px-4 py-2.5 text-xs uppercase tracking-wider font-semibold text-slate-500 hover:text-slate-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  id="appointment-submit-btn"
                  disabled={isSubmitting || !!dateError}
                  className="inline-flex items-center gap-2 bg-[#0F172A] hover:bg-[#1E293B] disabled:bg-slate-400 text-white text-xs uppercase tracking-widest font-semibold px-6 py-3 rounded-sm transition-all shadow"
                >
                  <Calendar className="w-4 h-4 text-[#C5A880]" />
                  <span>{isSubmitting ? 'Submitting...' : 'Request Appointment'}</span>
                </button>
              </div>

            </form>
          )}
        </div>
      </div>
    </div>
  );
};
