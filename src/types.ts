export interface Treatment {
  id: string;
  title: string;
  category: 'preventive' | 'restorative' | 'cosmetic' | 'orthodontics' | 'surgical';
  shortDescription: string;
  fullDescription: string;
  indications: string[];
  procedureSteps: string[];
  visitDuration: string;
  recommendedFrequency?: string;
  image: string;
  isFreeConsultation?: boolean;
  badge?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'operatory' | 'sterilization' | 'reception' | 'diagnostics' | 'orthodontics' | 'consultation';
  categoryLabel: string;
  description: string;
  imageUrl: string;
}

export interface AppointmentBooking {
  id: string;
  fullName: string;
  phone: string;
  email?: string;
  treatmentId: string;
  treatmentName: string;
  preferredDate: string;
  preferredTimeSlot: string;
  notes?: string;
  createdAt: string;
  status: 'Pending Confirmation' | 'Confirmed';
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export interface ClinicInfo {
  name: string;
  tagline: string;
  addressLine1: string;
  addressLine2: string;
  area: string;
  city: string;
  state: string;
  pincode: string;
  fullAddress: string;
  phone: string;
  phoneDisplay: string;
  phoneTel: string;
  whatsappLink: string;
  whatsappAppointmentLink: string;
  googleMapsDirectionsUrl: string;
  hours: {
    weekdays: string;
    sunday: string;
  };
}
