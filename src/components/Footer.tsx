import React from 'react';
import { Utensils, MessageSquare, MapPin, ShieldCheck, Clock } from 'lucide-react';
import { DELIVERY_HUBS } from '../data/mockData';

interface FooterProps {
  onOpenTrialModal: () => void;
  onOpenWhatsApp: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTrialModal, onOpenWhatsApp }) => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t-4 border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Brand & CTA Strip */}
        <div className="pb-12 border-b-2 border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border-2 border-slate-700 p-2 flex items-center justify-center text-[#ff5a1f]">
                <Utensils className="w-6 h-6" />
              </div>
              <span className="text-2xl font-black text-white tracking-tight">
                Dilli<span className="text-[#ff5a1f]">Dabba</span>
              </span>
              <span className="text-[10px] bg-[#f59e0b] text-slate-950 font-black px-2 py-0.5 rounded border border-slate-900">
                OFFICE TIFFIN SUBSCRIPTION
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-xl leading-relaxed font-medium">
              Ghar jaisa lunch, desk pe, 1 baje tak. Fresh morning cooked low-oil healthy tiffins for corporate workers across Gurugram, Noida Sector 62 &amp; CP.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col sm:flex-row items-stretch sm:items-center justify-start lg:justify-end gap-3">
            <button
              onClick={onOpenWhatsApp}
              className="px-5 py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-2 border-2 border-slate-700 transition-colors cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp: +91 98110 34221</span>
            </button>
            <button
              onClick={onOpenTrialModal}
              className="px-6 py-3 rounded-2xl bg-[#ff5a1f] hover:bg-orange-600 text-white font-black text-xs sm:text-sm shadow-pop-dark border-2 border-slate-900 cursor-pointer transition-all"
            >
              Start Free Trial (1st Meal Free)
            </button>
          </div>
        </div>

        {/* Delivery Hubs Directory */}
        <div className="py-12 border-b-2 border-slate-800">
          <p className="text-xs font-black uppercase text-amber-400 tracking-wider mb-6 flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>Dedicated Office Desk Delivery Hubs (Delhi NCR):</span>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {DELIVERY_HUBS.map((hub) => (
              <div key={hub.city} className="bg-slate-900/80 p-5 rounded-3xl border-2 border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-black text-white text-base">
                    📍 {hub.city}
                  </h4>
                  <span className="text-[10px] bg-slate-800 text-emerald-400 px-2.5 py-0.5 rounded-full font-black border border-slate-700">
                    Active Route
                  </span>
                </div>
                <p className="text-[11px] text-orange-300 font-bold">
                  {hub.timing}
                </p>
                <ul className="space-y-1.5 text-xs text-slate-400 font-medium">
                  {hub.hubs.map((loc, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-orange-400">•</span>
                      <span>{loc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Hinglish Slogans & Badges */}
        <div className="py-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left text-xs text-slate-400">
          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <Clock className="w-5 h-5 text-[#ff5a1f] shrink-0" />
            <div>
              <p className="font-black text-white">1:00 PM Guarantee</p>
              <p className="text-[11px]">Agar late hua toh us din ka lunch FREE</p>
            </div>
          </div>

          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
            <div>
              <p className="font-black text-white">FSSAI Kitchen Compliant</p>
              <p className="text-[11px]">100% RO water &amp; cold-pressed oil only</p>
            </div>
          </div>

          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <MessageSquare className="w-5 h-5 text-emerald-400 shrink-0" />
            <div>
              <p className="font-black text-white">WhatsApp 10 AM Rule</p>
              <p className="text-[11px]">Instant pause, skip or diet customisation</p>
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 border-t-2 border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-bold">
          <p>
            © {new Date().getFullYear()} Dilli Dabba Technologies Pvt Ltd. All rights reserved. Indian Fusion Edition 🌶️
          </p>
          <div className="flex gap-4">
            <a href="#menu" className="hover:text-amber-300">Menu</a>
            <a href="#spin" className="hover:text-amber-300">Spin the Thali</a>
            <a href="#streak" className="hover:text-amber-300">Streak Tracker</a>
            <a href="#pricing" className="hover:text-amber-300">Pricing (₹99-₹129)</a>
            <a href="#faqs" className="hover:text-amber-300">FAQs</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
