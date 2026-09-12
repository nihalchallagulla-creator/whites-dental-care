import React, { useState } from 'react';
import { FAQS } from '../data/clinicData';
import { ChevronDown, HelpCircle, Phone, MessageSquare } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-16 sm:py-24 bg-[#FAF9F6]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C5A880] block mb-3">
            Questions & Answers
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#0F172A] font-normal tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 font-light leading-relaxed">
            Clear, transparent answers about your visit, hygiene standards, and treatments at Whites Dental Care.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                id={`faq-item-${index}`}
                className="bg-white rounded-md border border-slate-200 overflow-hidden transition-all duration-200"
              >
                <button
                  id={`faq-trigger-${index}`}
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none hover:bg-slate-50/70 transition-colors"
                >
                  <span className="font-serif text-base sm:text-lg text-slate-900 font-medium">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-slate-900' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div
                    id={`faq-content-${index}`}
                    className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 font-light leading-relaxed border-t border-slate-100"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions card */}
        <div className="mt-12 p-6 rounded-lg bg-white border border-slate-200 text-center space-y-3">
          <HelpCircle className="w-6 h-6 text-[#C5A880] mx-auto" />
          <h4 className="font-serif text-lg font-semibold text-slate-900">
            Have a specific clinical or scheduling question?
          </h4>
          <p className="text-xs text-slate-500 max-w-md mx-auto font-light">
            Our clinic desk is available Monday through Saturday from 9:00 AM to 7:00 PM to assist you.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              id="faq-call-desk-btn"
              href={CLINIC_INFO.phoneTel}
              className="inline-flex items-center gap-2 bg-[#0F172A] hover:bg-[#1E293B] text-white text-xs uppercase tracking-widest font-semibold px-4 py-2.5 rounded-sm transition-all"
              title="Call Whites Dental Care"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>CALL NOW: {CLINIC_INFO.phoneDisplay}</span>
            </a>

            <a
              id="faq-whatsapp-desk-btn"
              href={CLINIC_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs uppercase tracking-widest font-semibold px-4 py-2.5 rounded-sm transition-all"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Ask on WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
