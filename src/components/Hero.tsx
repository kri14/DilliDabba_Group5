import React, { useState } from 'react';
import { 
  Clock, 
  Sparkles, 
  ArrowRight, 
  MapPin, 
  Flame, 
  ChevronRight, 
  Box, 
  Image as ImageIcon 
} from 'lucide-react';
import { CORPORATE_CLIENTS } from '../data/mockData';
import { ThreeDabbaScene } from './ThreeDabbaScene';

interface HeroProps {
  onOpenTrialModal: () => void;
  onScrollToSpin: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTrialModal, onScrollToSpin }) => {
  const [activeVisualTab, setActiveVisualTab] = useState<'3d' | 'photo'>('3d');

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-12 lg:pb-20 bg-gradient-to-b from-amber-50/40 via-white to-orange-50/30 border-b-2 border-orange-200/80">
      
      {/* Indian Fusion Festive Pop Ambient Blobs */}
      <div className="absolute top-0 right-0 -z-10 translate-x-1/4 -translate-y-1/4 w-[550px] h-[550px] bg-gradient-to-br from-[#ff5a1f]/20 via-[#f43f5e]/15 to-[#f59e0b]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -z-10 -translate-x-1/4 translate-y-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-[#0d9488]/15 via-[#ff5a1f]/10 to-amber-200/30 rounded-full blur-3xl pointer-events-none" />

      {/* Indian Fusion Truck-Art Pop Accent Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs font-black">
          <span className="bg-[#f43f5e] text-white px-3 py-1 rounded-full uppercase tracking-wider shadow-pop-dark flex items-center gap-1.5 border border-slate-900">
            <span>🌶️</span>
            <span>Desi Fusion Pop</span>
          </span>
          <span className="bg-[#f59e0b] text-slate-950 px-3 py-1 rounded-full uppercase tracking-wider shadow-pop-dark flex items-center gap-1.5 border border-slate-900">
            <span>✨</span>
            <span>Mummy Swaad, Desk Speed</span>
          </span>
          <span className="bg-[#0d9488] text-white px-3 py-1 rounded-full uppercase tracking-wider shadow-pop-dark flex items-center gap-1.5 border border-slate-900">
            <span>🥫</span>
            <span>3D Interactive Stainless Tiffin</span>
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Core Value Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7 text-center lg:text-left">
            
            {/* PROMINENT TRUST BADGE (Requested Callout) */}
            <div className="inline-flex items-center gap-2.5 bg-gradient-to-r from-orange-50 via-white to-amber-50 border-2 border-[#ff5a1f] px-4 py-2 rounded-2xl shadow-pop-orange text-xs sm:text-sm font-extrabold text-slate-900 hover:scale-[1.02] transition-transform">
              <span className="w-6 h-6 rounded-xl bg-[#ff5a1f] text-white flex items-center justify-center shrink-0 shadow-sm">
                <Clock className="w-3.5 h-3.5" />
              </span>
              <span className="text-[#ff5a1f] uppercase tracking-wider font-black">
                Trust Badge:
              </span>
              <span className="text-slate-900 font-bold">
                Guaranteed by 1 PM or your meal is FREE!
              </span>
            </div>

            {/* MANDATORY EXACT H1 */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[52px] font-black text-slate-900 leading-[1.15] tracking-tight">
              Dilli Dabba | Home Cooked Tiffin Service in Gurgaon and Noida for Office Lunch
            </h1>

            {/* MANDATORY EXACT SUBHEADING */}
            <p className="text-lg sm:text-xl text-slate-700 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Ghar jaisa lunch, desk pe, 1 baje tak. Healthy, low-oil meals cooked fresh daily and delivered guaranteed by 1 PM.
            </p>

            {/* Vibrant Indian Fusion Value Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 text-xs sm:text-sm text-slate-900 font-bold">
              <div className="flex items-center gap-1.5 bg-white px-3.5 py-2 rounded-xl border-2 border-slate-900 shadow-pop-dark">
                <span className="text-base">🫒</span>
                <span>Kam Tel, No Soda (&lt; 1 tsp oil)</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white px-3.5 py-2 rounded-xl border-2 border-slate-900 shadow-pop-dark">
                <span className="text-base">🥘</span>
                <span>Zero Repeat Sabzi in 14 Days</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white px-3.5 py-2 rounded-xl border-2 border-slate-900 shadow-pop-dark">
                <span className="text-base">⏰</span>
                <span>Desk Delivery till 1:00 PM Pakki</span>
              </div>
            </div>

            {/* CTAs: Steel Grey and Vibrant Orange */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-4">
              
              {/* PRIMARY CTA: Large, high-contrast steel grey and orange button text */}
              <button
                onClick={onOpenTrialModal}
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 text-base sm:text-lg font-black rounded-2xl bg-slate-900 text-white shadow-pop-orange border-2 border-slate-900 hover:bg-[#ff5a1f] transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 cursor-pointer"
              >
                <span className="w-3 h-3 rounded-full bg-[#ff5a1f] group-hover:bg-white" />
                <span className="text-white tracking-wide font-black">Start Free Trial</span>
                <span className="text-xs bg-[#f43f5e] text-white px-2.5 py-1 rounded-md font-black uppercase tracking-wider ml-1 shadow-sm">
                  1st Meal ₹0
                </span>
                <ArrowRight className="w-5 h-5 text-orange-400 group-hover:text-white group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Secondary CTA: Spin the Thali interactive reward */}
              <button
                onClick={onScrollToSpin}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-white hover:bg-orange-50 text-slate-900 font-extrabold text-sm sm:text-base border-2 border-slate-900 shadow-pop-dark hover:shadow-pop-pink transition-all cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#f43f5e]" />
                <span>Spin the Thali for Reward</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </button>
            </div>

            <p className="text-xs text-slate-600 font-semibold flex items-center justify-center lg:justify-start gap-1.5">
              <span className="text-base">🌼</span>
              <span>No credit card required. Ek click pe WhatsApp se order pause ya cancel karo.</span>
            </p>

            <div className="pt-3 border-t-2 border-slate-200">
              <div className="flex items-center justify-center lg:justify-start gap-2 text-xs font-black text-slate-600 uppercase tracking-wider mb-2">
                <MapPin className="w-3.5 h-3.5 text-[#ff5a1f]" />
                <span>Delivering Hot Lunch Daily To Office Desks Across:</span>
              </div>
              <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                <span className="bg-white text-slate-900 text-xs font-bold px-3 py-1.5 rounded-xl border-2 border-slate-800 shadow-2xs">
                  📍 Gurugram (Cyber City, Udyog Vihar, Golf Course Rd)
                </span>
                <span className="bg-white text-slate-900 text-xs font-bold px-3 py-1.5 rounded-xl border-2 border-slate-800 shadow-2xs">
                  📍 Noida (Sector 62, 18, 125, Expressway IT Parks)
                </span>
                <span className="bg-white text-slate-900 text-xs font-bold px-3 py-1.5 rounded-xl border-2 border-slate-800 shadow-2xs">
                  📍 Connaught Place &amp; Barakhamba Road (CP)
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: 3D Interactive Tiffin Dabba with Visual Toggle */}
          <div className="lg:col-span-5 relative">
            <div className="flex items-center justify-center gap-2 mb-3">
              <button
                onClick={() => setActiveVisualTab('3d')}
                className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer border-2 ${
                  activeVisualTab === '3d'
                    ? 'bg-slate-900 text-white border-slate-900 shadow-pop-orange'
                    : 'bg-white text-slate-700 border-slate-300 hover:border-slate-800'
                }`}
              >
                <Box className="w-3.5 h-3.5 text-[#ff5a1f]" />
                <span>🎮 Interactive 3D Dabba</span>
              </button>

              <button
                onClick={() => setActiveVisualTab('photo')}
                className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer border-2 ${
                  activeVisualTab === 'photo'
                    ? 'bg-slate-900 text-white border-slate-900 shadow-pop-orange'
                    : 'bg-white text-slate-700 border-slate-300 hover:border-slate-800'
                }`}
              >
                <ImageIcon className="w-3.5 h-3.5 text-[#0d9488]" />
                <span>📸 Today's Live Dispatch</span>
              </button>
            </div>

            {activeVisualTab === '3d' ? (
              <div className="relative">
                <ThreeDabbaScene />
                <p className="text-[11px] text-center text-slate-500 font-bold mt-2">
                  👆 Drag to inspect in 360° • Click "Explode 3 Tiers" to peek inside food layers
                </p>
              </div>
            ) : (
              <div className="relative rounded-3xl bg-white p-4 sm:p-5 shadow-2xl border-2 border-slate-900 shadow-pop-dark overflow-hidden">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-emerald-500" />
                    <span className="text-xs font-extrabold uppercase tracking-wide text-slate-700">
                      Today's Live Dispatch
                    </span>
                  </div>
                  <span className="text-[11px] font-bold text-[#ff5a1f] bg-orange-50 px-2 py-0.5 rounded border border-orange-200">
                    Target: 12:45 PM Desk Arrival
                  </span>
                </div>

                <div className="relative my-3 rounded-2xl overflow-hidden aspect-[4/3] group shadow-inner">
                  <img
                    src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80"
                    alt="Dilli Dabba Fresh Home Cooked Tiffin Thali"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                  <div className="absolute top-3 left-3 bg-slate-900/90 text-white text-xs font-bold px-3 py-1 rounded-full border border-slate-700 flex items-center gap-1.5 shadow-lg">
                    <Flame className="w-3.5 h-3.5 text-orange-400" />
                    <span>Fresh Made at 5:00 AM Today</span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="text-xs font-bold text-orange-300 uppercase tracking-wider">
                      Today's Classic Thali
                    </p>
                    <p className="text-base sm:text-lg font-extrabold drop-shadow-sm leading-tight">
                      Slow-simmered Maa Ki Dal + Desi Ghee Phulkas + Jeera Rice &amp; Crisp Salad
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center py-2 bg-slate-50 rounded-xl border border-slate-200/80">
                  <div className="px-2">
                    <p className="text-[10px] uppercase font-bold text-slate-500">Next Slot</p>
                    <p className="text-sm font-extrabold text-slate-900">1:00 PM Today</p>
                  </div>
                  <div className="px-2 border-x border-slate-200">
                    <p className="text-[10px] uppercase font-bold text-slate-500">Oil per Meal</p>
                    <p className="text-sm font-extrabold text-emerald-600">&lt; 1 Tsp Mustard</p>
                  </div>
                  <div className="px-2">
                    <p className="text-[10px] uppercase font-bold text-slate-500">Subscription</p>
                    <p className="text-sm font-extrabold text-[#ff5a1f]">From ₹99/meal</p>
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>

        <div className="mt-14 pt-8 border-t-2 border-slate-200 text-center">
          <p className="text-xs uppercase font-black tracking-widest text-slate-700 mb-4 flex items-center justify-center gap-2">
            <span>✨</span>
            <span>Trusted daily by 4,200+ corporate professionals across Delhi NCR</span>
            <span>✨</span>
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2.5">
            {CORPORATE_CLIENTS.map((corp, i) => (
              <span
                key={corp}
                className={`text-xs sm:text-sm font-black px-3.5 py-1.5 rounded-xl border-2 border-slate-900 shadow-2xs ${
                  i % 3 === 0
                    ? 'bg-amber-100 text-amber-950'
                    : i % 3 === 1
                    ? 'bg-rose-100 text-rose-950'
                    : 'bg-teal-100 text-teal-950'
                }`}
              >
                {corp}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
