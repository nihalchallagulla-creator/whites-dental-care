import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, Phone, Trash2, MessageSquare, CheckCircle2 } from 'lucide-react';
import { AppointmentBooking } from '../types';
import { CLINIC_INFO } from '../data/clinicData';

interface MyBookingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNewBooking: () => void;
}

export const MyBookingsModal: React.FC<MyBookingsModalProps> = ({
  isOpen,
  onClose,
  onNewBooking,
}) => {
  const [bookings, setBookings] = useState<AppointmentBooking[]>([]);

  const loadBookings = () => {
    try {
      const data = JSON.parse(localStorage.getItem('whites_dental_appointments') || '[]');
      setBookings(data);
    } catch {
      setBookings([]);
    }
  };

  useEffect(() => {
    if (isOpen) {
      loadBookings();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleDeleteBooking = (id: string) => {
    const updated = bookings.filter((b) => b.id !== id);
    setBookings(updated);
    localStorage.setItem('whites_dental_appointments', JSON.stringify(updated));
  };

  return (
    <div
      id="my-bookings-modal-backdrop"
      className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fade-in"
      onClick={onClose}
    >
      <div
        id="my-bookings-modal-container"
        className="bg-white rounded-lg max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200 my-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#0F172A] text-white p-6 relative">
          <button
            id="my-bookings-close-btn"
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <span className="text-xs uppercase tracking-widest text-[#C5A880] font-semibold block mb-1">
            Patient Portal
          </span>
          <h3 className="font-serif text-2xl font-normal">Your Scheduled Requests</h3>
          <p className="text-xs text-slate-300 font-light mt-0.5">
            Track appointments scheduled with Whites Dental Care
          </p>
        </div>

        {/* List of Bookings */}
        <div className="p-6 max-h-[calc(75vh-120px)] overflow-y-auto space-y-4">
          {bookings.length === 0 ? (
            <div className="text-center py-10 space-y-3">
              <Calendar className="w-10 h-10 text-slate-300 mx-auto" />
              <p className="text-slate-600 font-serif text-lg">No appointments scheduled yet.</p>
              <p className="text-xs text-slate-400 font-light max-w-xs mx-auto">
                Schedule your oral checkup or treatment consultation with Whites Dental Care in Kondapur.
              </p>
              <button
                id="my-bookings-book-first-btn"
                onClick={() => {
                  onClose();
                  onNewBooking();
                }}
                className="mt-2 inline-flex items-center gap-2 bg-[#0F172A] text-white text-xs uppercase tracking-widest font-semibold px-5 py-2.5 rounded-sm"
              >
                <span>Book Your First Slot</span>
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {bookings.map((item) => (
                <div
                  key={item.id}
                  className="p-4 rounded-lg bg-[#FAF9F6] border border-slate-200 space-y-3 relative"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded bg-white text-slate-700 border border-slate-200">
                        {item.id}
                      </span>
                      <h4 className="font-serif text-lg text-slate-900 font-semibold mt-1.5">
                        {item.treatmentName}
                      </h4>
                      <p className="text-xs text-slate-500 font-medium">Patient: {item.fullName}</p>
                    </div>

                    <button
                      onClick={() => handleDeleteBooking(item.id)}
                      className="p-1 text-slate-400 hover:text-red-600 transition-colors"
                      title="Cancel / Remove record"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs text-slate-600 pt-1 border-t border-slate-200/60">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#C5A880]" />
                      <span>{item.preferredDate}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#C5A880]" />
                      <span>{item.preferredTimeSlot}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-1.5 text-[11px] text-emerald-700 font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>{item.status}</span>
                    </div>

                    <a
                      href={`https://wa.me/919949232222?text=Hello%20Whites%20Dental%20Care%2C%20following%20up%20on%20my%20booking%20${item.id}%20for%20${encodeURIComponent(item.fullName)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] text-emerald-700 hover:text-emerald-800 font-medium inline-flex items-center gap-1"
                    >
                      <MessageSquare className="w-3 h-3" />
                      <span>Follow-up on WhatsApp</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <span className="text-xs text-slate-500">
            For modifications, call{' '}
            <a href={CLINIC_INFO.phoneTel} className="text-slate-700 hover:text-slate-900 font-medium underline">
              {CLINIC_INFO.phoneDisplay}
            </a>
          </span>
          <button
            onClick={onClose}
            className="text-xs uppercase tracking-wider font-semibold text-slate-700 hover:text-slate-900"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
