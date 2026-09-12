import { ClinicInfo, Treatment, GalleryItem, FaqItem } from '../types';

export const CLINIC_INFO: ClinicInfo = {
  name: 'Whites Dental Care',
  tagline: 'Modern, Gentle & Precise Dental Care in Kondapur',
  addressLine1: 'B-Block, No. 243, Kondapur Main Road',
  addressLine2: 'Sri Ramnagar, Kondapur',
  area: 'Kondapur',
  city: 'Hyderabad',
  state: 'Telangana',
  pincode: '500086',
  fullAddress: 'B-Block, No. 243, Kondapur Main Road, Sri Ramnagar, Kondapur, Hyderabad, Telangana 500086, India',
  phone: '+919949232222',
  phoneDisplay: '+91 9949232222',
  phoneTel: 'tel:+919949232222',
  whatsappLink: 'https://wa.me/919949232222',
  whatsappAppointmentLink: 'https://wa.me/919949232222?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20Whites%20Dental%20Care.',
  googleMapsDirectionsUrl: 'https://maps.google.com/?q=Whites+Dental+Care+Kondapur+Hyderabad+500086',
  hours: {
    weekdays: 'Monday–Saturday: 9:00 AM–7:00 PM',
    sunday: 'Sunday: Closed',
  },
};

export const CLINIC_HIGHLIGHTS = [
  {
    title: 'Hospital-Grade Sterilization',
    description: 'Strict multi-stage autoclave sterilization protocols and single-use consumable instruments for uncompromised safety.',
  },
  {
    title: 'Digital Diagnostics',
    description: 'Low-radiation digital radiography and high-resolution intraoral imaging for transparent diagnostic clarity.',
  },
  {
    title: 'Minimally Invasive Dentistry',
    description: 'Focus on preserving natural tooth structure utilizing modern conservative restorative techniques.',
  },
  {
    title: 'Centrally Located in Kondapur',
    description: 'Conveniently situated on Kondapur Main Road with dedicated patient parking and ground-level accessibility.',
  },
];

export const TREATMENTS: Treatment[] = [
  {
    id: 'comprehensive-exam',
    title: 'Comprehensive Examination & Digital Diagnostics',
    category: 'preventive',
    shortDescription: 'Detailed assessment of teeth, gums, bite alignment, and oral tissues with low-radiation digital radiography.',
    fullDescription: 'A thorough clinical examination forms the foundation of all effective dental care. Using digital intraoral cameras and diagnostics, we examine every tooth, evaluate periodontal health, screen oral mucosal tissues, and discuss all findings openly with you before formulating any plan.',
    indications: [
      'Routine annual or bi-annual oral health check-up',
      'Assessment of unexplained tooth sensitivity or discomfort',
      'Pre-treatment evaluation for aligners or restorations',
      'Baseline oral cancer and soft tissue screening'
    ],
    procedureSteps: [
      'Visual examination and medical history review',
      'High-resolution digital radiographs (if indicated)',
      'Intraoral camera view shared directly on operatory monitor',
      'Personalized consultation and discussion of preventive findings'
    ],
    visitDuration: '30–45 minutes',
    recommendedFrequency: 'Every 6 months',
    image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'cleaning-polishing',
    title: 'Professional Dental Cleaning & Scaling',
    category: 'preventive',
    shortDescription: 'Ultrasonic calculus removal and gentle stain polishing to maintain healthy gums and fresh breath.',
    fullDescription: 'Even with diligent brushing and flossing, hardened dental tartar (calculus) develops beneath the gum line and between teeth. Our ultrasonic scaling gently removes mineralized deposits without damaging enamel, followed by polishing to restore tooth smoothness and reduce plaque accumulation.',
    indications: [
      'Bleeding gums during brushing or flossing',
      'Visible yellowish or brownish calculus deposits along gums',
      'Persistent breath odor despite oral hygiene',
      'Routine preventive maintenance every 6 months'
    ],
    procedureSteps: [
      'Periodontal tissue and pocket depth assessment',
      'Gentle ultrasonic scaling to detach hardened tartar',
      'Fine subgingival hand scaling for smooth root contours',
      'Air polishing with gentle prophy paste for a clean finish'
    ],
    visitDuration: '30–45 minutes',
    recommendedFrequency: 'Every 6 months',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'restorative-fillings',
    title: 'Composite Tooth-Colored Restorations',
    category: 'restorative',
    shortDescription: 'Biocompatible, shade-matched resin fillings to seamlessly repair cavities and chipped tooth edges.',
    fullDescription: 'Modern dental restorations mimic the natural translucency, shade, and strength of organic dental enamel. We remove active decay cleanly while preserving healthy tooth structure, then meticulously layer and sculpt biocompatible composite resins under blue curing light.',
    indications: [
      'Dental decay (cavities) identified during clinical check',
      'Minor fractures, chipped incisors, or enamel erosion',
      'Replacement of old, compromised, or leaking fillings',
      'Closing minor gaps or uneven tooth surfaces'
    ],
    procedureSteps: [
      'Local topical comfort application if required',
      'Conservative removal of decayed or weakened enamel',
      'Conditioning and adhesive bonding application',
      'Shade-matched incremental composite placement, curing, and polishing'
    ],
    visitDuration: '30–60 minutes per tooth',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'root-canal-treatment',
    title: 'Root Canal Treatment (Endodontics)',
    category: 'restorative',
    shortDescription: 'Modern, gentle root canal therapy to relieve dental infection, eliminate pain, and save the natural tooth.',
    fullDescription: 'When deep decay or dental trauma reaches the inner pulp chamber, endodontic therapy removes infected nerve tissue while preserving your natural tooth root. Utilizing rotary endodontic instruments and digital apex locators, modern root canal therapy is comfortable and highly effective.',
    indications: [
      'Spontaneous, throbbing, or lingering toothache',
      'Intense sensitivity to hot or cold foods and beverages',
      'Pain or tenderness when chewing or pressing on the tooth',
      'Localized gum swelling, pimple, or abscess near the tooth root'
    ],
    procedureSteps: [
      'Comprehensive digital radiograph & vitality testing',
      'Profound local anesthesia ensuring complete patient comfort',
      'Micro-access and precision mechanical cleaning of root canals',
      'Biocompatible gutta-percha filling and post-endodontic sealing'
    ],
    visitDuration: '45–60 minutes (1–2 visits based on infection stage)',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'orthodontics-aligners',
    title: 'Clear Aligners & Orthodontics',
    category: 'orthodontics',
    shortDescription: 'Custom orthodontic alignment solutions including discrete clear aligners and braces. Complimentary initial consultation.',
    fullDescription: 'Straight teeth enhance your smile aesthetics and significantly improve bite mechanics and cleanability. Whites Dental Care offers a 100% complimentary initial orthodontic consultation to assess crowding, spacing, and clear aligner suitability with ₹0 consultation fee.',
    indications: [
      'Complimentary initial orthodontic consultation (₹0 Fee)',
      'Crowded, overlapping, or rotated front teeth',
      'Unwanted gaps or spacing between teeth',
      'Adults and teens seeking discreet alignment without bulky metal wires'
    ],
    procedureSteps: [
      'Complimentary smile alignment assessment',
      'Dental impressions and high-resolution photo evaluation',
      'Customized digital alignment simulation mapping tooth movement',
      'Regular progress monitoring and refinement visits'
    ],
    visitDuration: 'Consultation: 30 minutes (Free)',
    isFreeConsultation: true,
    badge: 'FREE CONSULTATION',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'teeth-whitening',
    title: 'Professional In-Clinic Teeth Whitening',
    category: 'cosmetic',
    shortDescription: 'Controlled, clinically supervised whitening to safely lighten stubborn tea, coffee, and age-related enamel stains.',
    fullDescription: 'Over time, dietary pigments, coffee, tea, and natural aging darken tooth enamel. Our in-office whitening procedure uses protective barriers for gums and pH-balanced whitening agents that penetrate enamel micro-pores to oxidize deep stains safely without damaging tooth structure.',
    indications: [
      'Enamel discoloration caused by tea, coffee, or smoking',
      'Preparation for weddings, special life events, or professional milestones',
      'Age-related yellowing of natural enamel',
      'Desire for a brighter, more confident smile appearance'
    ],
    procedureSteps: [
      'Baseline shade recording and gentle surface polish',
      'Application of specialized gingival barrier to protect gums',
      'Controlled application of active professional whitening gel',
      'Post-treatment desensitizing rinse and maintenance guidance'
    ],
    visitDuration: '60 minutes',
    image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'dental-implants',
    title: 'Dental Implants Consultation & Restorations',
    category: 'surgical',
    shortDescription: 'Titanium root replacement solutions for stable, long-lasting replacement of missing teeth.',
    fullDescription: 'Dental implants represent the modern gold standard for replacing missing teeth. A biocompatible titanium fixture integrates naturally with jawbone tissue, creating a permanent, secure foundation that looks, feels, and functions like a natural tooth.',
    indications: [
      'Single or multiple missing teeth from injury or decay',
      'Desire for permanent, standalone tooth replacement',
      'Unstable, loose, or uncomfortable removable dentures',
      'Bone preservation following recent tooth extraction'
    ],
    procedureSteps: [
      'Detailed bone density and panoramic radiograph assessment',
      'Surgical placement consultation with our implant specialist',
      'Healing phase allowing osseointegration with bone',
      'Placement of custom abutment and final prosthetic tooth restoration'
    ],
    visitDuration: 'Consultation: 45 minutes',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'emergency-pain-relief',
    title: 'Prompt Dental Relief & Emergency Care',
    category: 'restorative',
    shortDescription: 'Compassionate same-day triage and gentle pain alleviation for toothaches, chipped teeth, or sudden discomfort.',
    fullDescription: 'Dental discomfort requires gentle, rapid intervention to relieve pain and restore peace of mind. We provide calm, same-day attention during clinic hours for toothaches, cracked teeth, lost restorations, or sudden sensitivity.',
    indications: [
      'Sudden toothache or throbbing discomfort requiring prompt relief',
      'Chipped, cracked, or fractured tooth needing gentle repair',
      'Dislodged filling or loosened crown causing sensitivity',
      'Priority same-day appointment during practice hours'
    ],
    procedureSteps: [
      'Gentle triage and clinical symptom assessment',
      'Fast-acting local comfort application and stabilization',
      'Focused digital radiograph to identify the underlying cause',
      'Immediate gentle intervention and tailored home care instructions'
    ],
    visitDuration: '30–45 minutes',
    image: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=800&q=80',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'ortho-consultation',
    title: 'Orthodontic & Aligners Assessment',
    category: 'orthodontics',
    categoryLabel: 'Orthodontics',
    description: 'Complimentary smile alignment check (₹0 fee) and clear aligner treatment feasibility planning.',
    imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'sterilization-bay',
    title: 'Sterilization & Autoclave Protocol',
    category: 'sterilization',
    categoryLabel: 'Sterilization',
    description: 'Class-B autoclave sterilization, sterile barrier pouching, and clinical disinfectant protocols.',
    imageUrl: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'chairside-consultation',
    title: 'Chairside Doctor Consultation',
    category: 'consultation',
    categoryLabel: 'Consultation',
    description: 'Unhurried one-on-one discussion with your dental surgeon reviewing tooth structure and oral health.',
    imageUrl: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'diagnostics-suite',
    title: 'Digital Diagnostics & Imaging',
    category: 'diagnostics',
    categoryLabel: 'Diagnostics',
    description: 'Low-dose digital sensor imaging and intraoral cameras for transparent diagnostic verification.',
    imageUrl: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'consultation-room',
    title: 'One-on-One Consultation Suite',
    category: 'reception',
    categoryLabel: 'Consultation',
    description: 'Dedicated private space to discuss treatment plans, view radiograph findings, and ask questions.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'hygiene-tools',
    title: 'Precision Micro-Instrumentation',
    category: 'operatory',
    categoryLabel: 'Instrumentation',
    description: 'Specialized periodontal ultrasonic tips and rotary endodontic equipment maintained to hospital standards.',
    imageUrl: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80',
  },
];

export const PATIENT_EXPERIENCE_STEPS = [
  {
    step: '01',
    title: 'Unhurried Consultation',
    subtitle: 'Listening first',
    description: 'We listen to your specific dental history, concerns, and comfort preferences without rushing.',
  },
  {
    step: '02',
    title: 'Transparent Examination',
    subtitle: 'Clear visualization',
    description: 'High-definition intraoral images show you exactly what we see on screen before any procedure begins.',
  },
  {
    step: '03',
    title: 'Gentle, Calibrated Care',
    subtitle: 'Pain-free approach',
    description: 'Modern local anesthesia and gentle micro-dentistry techniques minimize discomfort throughout.',
  },
  {
    step: '04',
    title: 'Preventive Aftercare',
    subtitle: 'Long-term oral health',
    description: 'Clear post-treatment instructions and customized home care guidance to protect your investment.',
  },
];

export const FAQS: FaqItem[] = [
  {
    category: 'Orthodontics',
    question: 'Is the orthodontic and clear aligners consultation really free?',
    answer: 'Yes, absolutely! At Whites Dental Care, your initial orthodontic evaluation and clear aligner feasibility assessment is 100% complimentary (₹0 consultation fee). We examine your bite, discuss teeth alignment options, and explain estimated treatment durations with zero pressure or obligation.',
  },
  {
    category: 'Appointments',
    question: 'How do I schedule an appointment at Whites Dental Care?',
    answer: 'You can use the interactive booking form on this website, call us directly at +91 9949232222, or send a message on WhatsApp. We confirm slots promptly during clinic hours (Monday–Saturday, 9:00 AM to 7:00 PM).',
  },
  {
    category: 'Consultation',
    question: 'What happens during my first dental visit?',
    answer: 'Your first appointment begins with a comprehensive oral evaluation. We examine your teeth, gums, and oral tissues, take digital radiographs if clinically necessary, and review our findings with you on screen before discussing any recommendations.',
  },
  {
    category: 'Comfort',
    question: 'I experience dental anxiety. How do you ensure a comfortable visit?',
    answer: 'We prioritize patient comfort with unhurried visits, gentle handling, effective topical numbing before any injections, and clear communication where you are in control of pauses throughout the appointment.',
  },
  {
    category: 'Hygiene & Safety',
    question: 'What sterilization protocols do you follow?',
    answer: 'We adhere to multi-tier autoclave sterilization for all non-disposable instruments. Handpieces and tools are sealed in sterile packaging and opened in front of you. All examination consumables are strictly single-use.',
  },
  {
    category: 'Location & Access',
    question: 'Where is the clinic located in Kondapur?',
    answer: 'We are situated at B-Block, No. 243, Kondapur Main Road, Sri Ramnagar, Kondapur, Hyderabad 500086. We are easily reachable from Hitec City, Gachibowli, and Madhapur.',
  },
  {
    category: 'Emergency',
    question: 'What should I do in case of a dental emergency or severe toothache?',
    answer: 'Please call us immediately at +91 9949232222 during opening hours (Mon–Sat 9AM–7PM). We prioritize acute pain and dental trauma for same-day evaluation.',
  },
];
