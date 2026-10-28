import React from 'react';
import { 
  Sparkles, 
  UtensilsCrossed, 
  UserCheck, 
  HeartHandshake, 
  ShieldCheck, 
  Clock, 
  Leaf, 
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

interface FeaturesProps {
  onOpenTrialModal: () => void;
}

export const Features: React.FC<FeaturesProps> = ({ onOpenTrialModal }) => {
  return (
    <section className="py-16 sm:py-20 bg-white border-b-2 border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#f43f5e] text-white px-4 py-1 rounded-full text-xs font-black uppercase tracking-wider shadow-pop-dark border-2 border-slate-900">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Kyun Dilli Dabba Hai Sabse Alag?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Designed for Modern Corporate Desks in Gurgaon &amp; Noida
          </h2>
          <p className="text-base text-slate-600 font-medium">
            No heavy hotel curries, no mystery restaurant palm oil, and zero messy packaging. Just honest, home-cooked food delivered hot directly to your office desk.
          </p>
        </div>

        {/* The 3 Core Differentiator Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Fresh & Hygienic (Cooked daily morning) */}
          <div className="group relative rounded-3xl bg-amber-50/50 p-8 border-4 border-slate-900 shadow-pop-orange transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#ff5a1f] to-amber-500 text-white flex items-center justify-center text-2xl shadow-pop-dark border-2 border-slate-900 group-hover:scale-110 transition-transform">
                <UtensilsCrossed className="w-7 h-7" />
              </div>

              <div>
                <span className="text-[11px] font-black text-[#ff5a1f] uppercase tracking-wider">
                  Morning 4:30 AM Batches
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
                  Fresh &amp; Hygienic (Cooked daily morning)
                </h3>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed font-medium">
                Har subah local mandi se fresh sabziyan aati hain aur 4:30 AM fresh batch banaya jata hai. No frozen gravies, no overnight stored curries. Everything is cooked using RO-purified water in a sanitized commercial facility.
              </p>

              <ul className="space-y-2 pt-2 text-xs font-bold text-slate-800">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>FSSAI certified commercial kitchen with daily sanitization</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Packed in 304 food-grade stainless steel insulated containers</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Cooked fresh today morning — not reheated leftovers</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t-2 border-slate-300 flex items-center justify-between text-xs font-black text-[#ff5a1f]">
              <span>Zero Pre-Cooked Mixes</span>
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
            </div>
          </div>

          {/* Card 2: Ghar Jaisa Taste (Low oil, low spice) */}
          <div className="group relative rounded-3xl bg-rose-50/50 p-8 border-4 border-slate-900 shadow-pop-pink transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#f43f5e] to-rose-600 text-white flex items-center justify-center text-2xl shadow-pop-dark border-2 border-slate-900 group-hover:scale-110 transition-transform">
                <Leaf className="w-7 h-7 text-white" />
              </div>

              <div>
                <span className="text-[11px] font-black text-[#f43f5e] uppercase tracking-wider">
                  Heart &amp; Digestion Friendly
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
                  Ghar Jaisa Taste (Low oil, low spice)
                </h3>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed font-medium">
                Mummy ke haath ka khana jaise light aur soothing hota hai, bilkul wahi swaad. We use less than 1 teaspoon cold-pressed oil, zero soda, and zero artificial colors. Say goodbye to that bloated 3 PM afternoon sleepiness!
              </p>

              <ul className="space-y-2 pt-2 text-xs font-bold text-slate-800">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Cold-pressed mustard &amp; groundnut oil only (Zero palm oil)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Whole stone-ground spices that soothe digestion</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Zero afternoon food-coma — stay productive at desk</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t-2 border-slate-300 flex items-center justify-between text-xs font-black text-emerald-700">
              <span>&lt; 1 Tsp Oil Guaranteed</span>
              <HeartHandshake className="w-4 h-4 text-emerald-600" />
            </div>
          </div>

          {/* Card 3: No Minimum Order (Perfect for single office workers) */}
          <div className="group relative rounded-3xl bg-teal-50/50 p-8 border-4 border-slate-900 shadow-pop-teal transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0d9488] to-teal-700 text-white flex items-center justify-center text-2xl shadow-pop-dark border-2 border-slate-900 group-hover:scale-110 transition-transform">
                <UserCheck className="w-7 h-7" />
              </div>

              <div>
                <span className="text-[11px] font-black text-[#0d9488] uppercase tracking-wider">
                  Complete Flexibility
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
                  No Minimum Order (Perfect for single office workers)
                </h3>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed font-medium">
                Whether you sit alone at your desk or with an entire squad, you can subscribe for just 1 meal or 22 days. Skip any day, pause on WFH, and carry forward unused balances with zero questions asked.
              </p>

              <ul className="space-y-2 pt-2 text-xs font-bold text-slate-800">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Order 1 meal or flexible monthly passes (₹99 to ₹129)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Pause or skip anytime on WhatsApp before 10:00 AM</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Credits never expire — carry forward to next month</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t-2 border-slate-300 flex items-center justify-between text-xs font-black text-slate-700">
              <span>Carry Forward Guarantee</span>
              <Clock className="w-4 h-4 text-[#ff5a1f]" />
            </div>
          </div>

        </div>

        {/* Bottom Banner callout */}
        <div className="mt-12 bg-slate-900 rounded-3xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-pop-dark border-4 border-slate-900">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xs font-black text-amber-300 uppercase tracking-wider">
              100% Risk Free Office Lunch
            </span>
            <h4 className="text-xl sm:text-2xl font-black">
              Start with a Free Trial Meal Today — 1 Baje Tak Desk Pe Delivery!
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              No payment card needed. Agar pasand aaye tabhi monthly plan lena.
            </p>
          </div>

          <button
            onClick={onOpenTrialModal}
            className="shrink-0 px-8 py-3.5 rounded-2xl bg-[#ff5a1f] hover:bg-orange-600 text-white font-black text-sm sm:text-base shadow-pop-dark border-2 border-white transition-transform hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-2"
          >
            <span>Claim Free Trial Meal</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
