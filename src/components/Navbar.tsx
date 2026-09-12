import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar, Clock, MapPin, MessageSquare } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { getClinicStatusIST, ClinicStatus } from '../utils/timeUtils';

interface NavbarProps {
  onOpenBooking: (treatmentId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [status, setStatus] = useState<ClinicStatus>(getClinicStatusIST());

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Refresh status every minute
    const interval = setInterval(() => {
      setStatus(getClinicStatusIST());
    }, 60000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Treatments', href: '#treatments' },
    { label: 'Doctors', href: '#doctors' },
    { label: 'Patient Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top micro-bar with clinic coordinates and live status */}
      <div id="top-announcement-bar" className="bg-[#0F172A] text-slate-300 text-xs py-2 px-4 sm:px-8 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center space-x-4 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>Kondapur Main Road, Sri Ramnagar, Hyderabad</span>
            </span>
            <span className="hidden md:inline-block text-slate-600">|</span>
            <span className="hidden md:flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>Mon–Sat: 9:00 AM – 7:00 PM</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* Free Ortho Consultation badge */}
            <button
              onClick={() => onOpenBooking('orthodontics-aligners')}
              className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-950/90 hover:bg-emerald-900 text-emerald-300 border border-emerald-700/70 text-[11px] font-medium transition-colors cursor-pointer"
              title="Click to book a complimentary orthodontic consultation"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Free Ortho Consultation</span>
            </button>

            {/* Live Status Pill */}
            <div className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium transition-colors ${
              status.isOpen 
                ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-800/50' 
                : 'bg-amber-950/60 text-amber-300 border border-amber-800/50'
            }`}>
              <span className={`w-1.5 h-1.5 rounded-full ${status.isOpen ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`} />
              <span>{status.isOpen ? 'Open Now' : 'Closed'}</span>
              <span className="hidden lg:inline text-slate-400">· {status.subtext}</span>
            </div>

            {/* WhatsApp Link in Top Bar */}
            <a
              id="top-bar-whatsapp-link"
              href={CLINIC_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#25D366]/20 hover:bg-[#25D366]/30 text-emerald-300 text-[11px] font-medium transition-colors"
              title="Chat on WhatsApp (+91 9949232222)"
            >
              <MessageSquare className="w-3 h-3 text-[#25D366]" />
              <span>WhatsApp</span>
            </a>

            {/* Clickable Phone */}
            <a
              id="top-bar-phone-link"
              href={CLINIC_INFO.phoneTel}
              className="inline-flex items-center gap-1 text-slate-200 hover:text-white transition-colors ml-1 font-medium text-[11px]"
              title="Call Whites Dental Care"
            >
              <Phone className="w-3 h-3 text-[#C5A880]" />
              <span>Call: {CLINIC_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        id="main-navigation-bar"
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3'
            : 'bg-[#FAF9F6] border-b border-slate-200/60 py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            id="brand-logo"
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex flex-col tracking-wider focus:outline-none"
          >
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-[0.18em] text-[#0F172A] group-hover:text-[#0D2B45] transition-colors uppercase leading-tight">
              WHITES
            </span>
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-[#64748B] font-medium leading-tight">
              DENTAL CARE
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav-links" className="hidden lg:flex items-center space-x-7 text-[13px] font-medium tracking-wide text-slate-700">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="hover:text-[#0F172A] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#0F172A] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action: CTA Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              id="nav-whatsapp-btn"
              href={CLINIC_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs uppercase tracking-[0.12em] font-semibold px-4 py-2.5 rounded-sm transition-all duration-200 shadow-sm hover:shadow active:scale-[0.98]"
              title="Chat with Whites Dental Care on WhatsApp"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            <a
              id="nav-call-btn"
              href={CLINIC_INFO.phoneTel}
              className="hidden xl:inline-flex items-center gap-1.5 border border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 text-slate-800 text-xs uppercase tracking-[0.12em] font-semibold px-3.5 py-2.5 rounded-sm transition-colors"
              title="Call Whites Dental Care"
            >
              <Phone className="w-3.5 h-3.5 text-slate-700" />
              <span>CALL NOW</span>
            </a>

            <button
              id="nav-book-appointment-btn"
              onClick={() => onOpenBooking()}
              className="inline-flex items-center gap-2 bg-[#0F172A] hover:bg-[#1E293B] text-white text-xs uppercase tracking-[0.14em] font-semibold px-5 py-2.5 rounded-sm transition-all duration-200 shadow-sm hover:shadow active:scale-[0.98]"
            >
              <Calendar className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>BOOK AN APPOINTMENT</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              id="mobile-quick-book-btn"
              onClick={() => onOpenBooking()}
              className="sm:hidden text-xs bg-[#0F172A] text-white font-semibold px-3 py-1.5 rounded-sm tracking-wider uppercase"
            >
              Book
            </button>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 rounded-md focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Animated Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-menu"
          className="lg:hidden fixed inset-0 top-[96px] z-50 bg-slate-900/40 backdrop-blur-sm animate-fade-in"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="bg-white border-b border-slate-200 shadow-xl px-6 py-6 max-h-[calc(100vh-100px)] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-base font-medium text-slate-800 hover:text-[#0F172A] py-2 border-b border-slate-100 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 space-y-3">
              <button
                id="mobile-menu-drawer-book-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center gap-2 bg-[#0F172A] text-white text-xs uppercase tracking-widest font-semibold py-3 rounded-sm shadow"
              >
                <Calendar className="w-4 h-4 text-[#C5A880]" />
                <span>BOOK AN APPOINTMENT</span>
              </button>

              <a
                id="mobile-menu-drawer-whatsapp-btn"
                href={CLINIC_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs uppercase tracking-widest font-bold py-3 rounded-sm shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>CHAT ON WHATSAPP</span>
              </a>

              <a
                id="mobile-menu-drawer-call-btn"
                href={CLINIC_INFO.phoneTel}
                className="w-full flex items-center justify-center gap-2 bg-slate-100 text-slate-800 hover:bg-slate-200 text-xs uppercase tracking-widest font-semibold py-3 rounded-sm"
              >
                <Phone className="w-4 h-4 text-[#0F172A]" />
                <span>CALL NOW: {CLINIC_INFO.phoneDisplay}</span>
              </a>

              <div className="text-center pt-2 text-xs text-slate-500">
                <p>Monday–Saturday: 9:00 AM–7:00 PM</p>
                <p>Kondapur Main Road, Hyderabad</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
