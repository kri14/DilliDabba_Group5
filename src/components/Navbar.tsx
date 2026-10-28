import React, { useState, useEffect } from 'react';
import { Utensils, MessageSquare, PhoneCall, Sparkles, MapPin, Clock, ShieldCheck, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenTrialModal: () => void;
  onOpenWhatsApp: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTrialModal, onOpenWhatsApp }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Banner with Hinglish trust message */}
      <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white text-xs sm:text-sm py-2 px-4 border-b border-slate-700/60 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="inline-flex items-center gap-1 bg-[#ff5a1f] text-white px-2 py-0.5 rounded-full font-bold text-[11px] uppercase tracking-wider">
              <Clock className="w-3 h-3 inline" /> 1 PM Guarantee
            </span>
            <span className="font-bold text-slate-200 hidden md:inline">
              Guaranteed by 1 PM or your meal is FREE!
            </span>
            <span className="text-slate-400 hidden sm:inline">•</span>
            <span className="text-amber-300 font-bold text-xs sm:text-sm truncate">
              Desk delivery in Gurugram, Noida &amp; CP 🚀
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs shrink-0">
            <button
              onClick={onOpenWhatsApp}
              className="hidden lg:flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors font-medium cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp: +91 98110 34221</span>
            </button>
            <div className="flex items-center gap-1.5 text-slate-300 bg-slate-800/80 px-2.5 py-0.5 rounded-full border border-slate-700">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="font-bold text-[11px]">Today's Batch: Dispatched</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header
        className={`sticky top-[37px] z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5 border-b-2 border-slate-900'
            : 'bg-white py-3.5 border-b-2 border-slate-900'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-br from-slate-950 to-slate-800 p-2 text-white flex items-center justify-center shadow-pop-orange relative overflow-hidden group-hover:scale-105 transition-transform border-2 border-slate-900">
              <Utensils className="w-5 h-5 sm:w-6 sm:h-6 text-[#ff5a1f]" />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#f43f5e] rounded-full flex items-center justify-center text-[9px] font-black text-white">
                DD
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                  Dilli<span className="text-[#ff5a1f]">Dabba</span>
                </span>
                <span className="bg-[#f59e0b] text-slate-950 text-[10px] font-black px-1.5 py-0.5 rounded border border-slate-900 shadow-2xs">
                  OFFICE TIFFIN
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-bold hidden sm:block">
                Ghar Jaisa Lunch • Gurugram, Noida &amp; CP
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-extrabold text-slate-800">
            <a href="#menu" className="hover:text-[#ff5a1f] transition-colors py-1">
              Weekly Menu
            </a>
            <a href="#spin" className="hover:text-[#f43f5e] transition-colors py-1 flex items-center gap-1 text-[#f43f5e]">
              <Sparkles className="w-3.5 h-3.5" />
              Spin the Thali
            </a>
            <a href="#streak" className="hover:text-[#ff5a1f] transition-colors py-1">
              5-Day Streak
            </a>
            <a href="#pricing" className="hover:text-[#ff5a1f] transition-colors py-1">
              Subscription (₹99 - ₹129)
            </a>
            <a href="#hygiene" className="hover:text-[#ff5a1f] transition-colors py-1">
              Kitchen Hygiene
            </a>
            <a href="#faqs" className="hover:text-[#ff5a1f] transition-colors py-1">
              FAQs
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <button
              onClick={onOpenWhatsApp}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-black text-slate-900 bg-emerald-100 hover:bg-emerald-200 transition-colors border-2 border-slate-900 shadow-2xs cursor-pointer"
              title="Pause or Customise via WhatsApp"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-800" />
              <span>WhatsApp</span>
            </button>

            <button
              onClick={onOpenTrialModal}
              className="px-5 py-2.5 rounded-2xl bg-[#ff5a1f] hover:bg-orange-600 text-white font-black text-xs sm:text-sm border-2 border-slate-900 shadow-pop-dark hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-white" />
              <span className="tracking-wide">Start Free Trial</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-800 hover:bg-slate-100"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b-2 border-slate-900 px-4 pt-3 pb-5 space-y-3 shadow-xl">
            <div className="grid grid-cols-2 gap-2 pb-2 border-b border-slate-100">
              <a
                href="#menu"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-sm font-black text-slate-800 rounded-xl hover:bg-orange-50"
              >
                🍱 Weekly Menu
              </a>
              <a
                href="#spin"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-sm font-black text-[#f43f5e] rounded-xl hover:bg-rose-50"
              >
                🎡 Spin the Thali
              </a>
              <a
                href="#streak"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-sm font-black text-slate-800 rounded-xl hover:bg-orange-50"
              >
                🔥 5-Day Streak
              </a>
              <a
                href="#pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-sm font-black text-slate-800 rounded-xl hover:bg-orange-50"
              >
                💳 Plans (₹99-₹129)
              </a>
              <a
                href="#hygiene"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-sm font-black text-slate-800 rounded-xl hover:bg-orange-50"
              >
                ✨ Kitchen Hygiene
              </a>
              <a
                href="#faqs"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-sm font-black text-slate-800 rounded-xl hover:bg-orange-50"
              >
                ❓ FAQs
              </a>
            </div>

            <div className="flex flex-col gap-2 pt-1">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTrialModal();
                }}
                className="w-full py-3 rounded-xl bg-[#ff5a1f] hover:bg-orange-600 text-white font-black text-sm shadow-pop-dark border-2 border-slate-900 text-center"
              >
                Start Free Trial (1st Meal Free)
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenWhatsApp();
                }}
                className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-xs flex items-center justify-center gap-2 border-2 border-slate-900"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>Pause or Customise via WhatsApp</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
