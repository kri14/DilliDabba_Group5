import React, { useState } from 'react';
import { 
  Check, 
  Sparkles, 
  ArrowRight, 
  Calculator, 
  ShieldCheck, 
  Clock 
} from 'lucide-react';
import { SUBSCRIPTION_PLANS } from '../data/mockData';
import { SubscriptionPlan } from '../types';

interface PricingSectionProps {
  onSelectPlan: (plan: SubscriptionPlan) => void;
  onOpenTrialModal: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan, onOpenTrialModal }) => {
  const [selectedDays, setSelectedDays] = useState<number>(22);

  const avgDilliDabbaPrice = 115;
  const foodAppPrice = 320;
  const canteenPrice = 180;

  const monthlyDilliDabbaCost = avgDilliDabbaPrice * selectedDays;
  const monthlyFoodAppCost = foodAppPrice * selectedDays;
  const monthlyCanteenCost = canteenPrice * selectedDays;

  const savingsVsFoodApps = monthlyFoodAppCost - monthlyDilliDabbaCost;

  return (
    <section id="pricing" className="py-16 sm:py-24 bg-gradient-to-b from-white via-amber-50/20 to-white border-b-2 border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with EXACT MANDATORY H2 */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#ff5a1f] text-white px-4 py-1 rounded-full text-xs font-black uppercase tracking-wider shadow-pop-dark border-2 border-slate-900">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Seedha Hisaab • No Hidden Charges</span>
          </div>

          {/* EXACT REQUESTED H2 */}
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-slate-900 tracking-tight leading-tight">
            Affordable Monthly Tiffin Subscription Noida &amp; Gurugram
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-medium">
            Transparent pricing between <strong>Rs. 99 to Rs. 129 per meal</strong>. Cooked fresh daily morning, packed in insulated stainless steel, and delivered guaranteed by 1 PM to your office desk.
          </p>
        </div>

        {/* Office Days Selector Pill Toggle */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
          <span className="text-xs font-black uppercase tracking-wider text-slate-600">
            Select Your Office Schedule:
          </span>
          <div className="bg-slate-200 p-1.5 rounded-2xl flex items-center gap-1.5 border-2 border-slate-900">
            <button
              onClick={() => setSelectedDays(10)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer ${
                selectedDays === 10
                  ? 'bg-slate-900 text-white shadow-2xs'
                  : 'text-slate-800 hover:text-slate-950'
              }`}
            >
              10 Days (Flexi Pass)
            </button>
            <button
              onClick={() => setSelectedDays(22)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer ${
                selectedDays === 22
                  ? 'bg-[#ff5a1f] text-white shadow-pop-dark border border-slate-900'
                  : 'text-slate-800 hover:text-slate-950'
              }`}
            >
              22 Days (Mon - Fri Standard) ⭐
            </button>
            <button
              onClick={() => setSelectedDays(26)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer ${
                selectedDays === 26
                  ? 'bg-slate-900 text-white shadow-2xs'
                  : 'text-slate-800 hover:text-slate-950'
              }`}
            >
              26 Days (Mon - Sat)
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid (Rs. 99 to Rs. 129) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16">
          {SUBSCRIPTION_PLANS.map((plan, idx) => {
            const isPopular = plan.popular;
            const planTotal = plan.pricePerMeal * selectedDays;

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 border-4 border-slate-900 ${
                  isPopular
                    ? 'bg-gradient-to-b from-amber-50/50 via-white to-orange-50/40 shadow-pop-orange lg:-translate-y-2'
                    : idx === 0
                    ? 'bg-white shadow-pop-gold'
                    : 'bg-white shadow-pop-teal'
                }`}
              >
                {/* Popular Ribbon */}
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#ff5a1f] via-[#f43f5e] to-orange-600 text-white text-[11px] font-black uppercase tracking-wider px-5 py-1.5 rounded-full shadow-pop-dark border-2 border-slate-900">
                    {plan.badge || 'MOST POPULAR'}
                  </div>
                )}

                <div>
                  <div className="border-b-2 border-slate-100 pb-5">
                    <span className="text-xs font-black text-[#ff5a1f] uppercase tracking-wider">
                      {plan.idealFor}
                    </span>
                    <h3 className="text-2xl font-black text-slate-900 mt-1">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-slate-600 font-medium mt-1">
                      {plan.tagline}
                    </p>

                    <div className="mt-4 flex items-baseline gap-2">
                      <span className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
                        ₹{plan.pricePerMeal}
                      </span>
                      <div className="text-xs text-slate-500">
                        <span className="font-black text-slate-800">/ meal</span>
                        <p className="font-bold text-emerald-600">Zero Delivery Fee</p>
                      </div>
                    </div>

                    <div className="mt-3 p-3 rounded-2xl bg-slate-50 border-2 border-slate-200 flex items-center justify-between text-xs font-bold">
                      <span className="text-slate-600">
                        For {selectedDays} office meals:
                      </span>
                      <span className="font-black text-slate-900 text-sm">
                        ₹{planTotal.toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>

                  <div className="my-5 p-4 rounded-2xl bg-amber-50/80 border-2 border-amber-300">
                    <p className="text-[11px] font-black uppercase text-[#ff5a1f] tracking-wide mb-1">
                      What's Inside The Dabba:
                    </p>
                    <p className="text-xs font-black text-slate-800 leading-snug">
                      {plan.servingsDesc}
                    </p>
                  </div>

                  <ul className="space-y-2.5 text-xs text-slate-800 font-bold">
                    {plan.includes.map((inc, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-300">
                          <Check className="w-3 h-3" />
                        </div>
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 space-y-2.5">
                  <button
                    onClick={() => onSelectPlan(plan)}
                    className={`w-full py-4 rounded-2xl font-black text-sm flex items-center justify-center gap-2 transition-all cursor-pointer border-2 border-slate-900 shadow-pop-dark ${
                      isPopular
                        ? 'bg-gradient-to-r from-[#ff5a1f] to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white hover:scale-[1.02]'
                        : 'bg-slate-900 hover:bg-slate-800 text-white hover:scale-[1.01]'
                    }`}
                  >
                    <span>Choose {plan.name}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={onOpenTrialModal}
                    className="w-full py-2 text-xs font-black text-slate-700 hover:text-[#ff5a1f] transition-colors text-center cursor-pointer"
                  >
                    Or test with 1 Free Trial Meal first →
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Dynamic ROI & Savings Calculator vs Swiggy/Zomato & Cafeteria */}
        <div className="rounded-3xl bg-slate-950 text-white p-6 sm:p-10 shadow-2xl border-4 border-slate-900 shadow-pop-dark">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-slate-800">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#ff5a1f] text-white px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-2 border border-slate-800">
                <Calculator className="w-3.5 h-3.5" />
                <span>Monthly Budget Analysis</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                How Much Money &amp; Health Do You Save Every Month?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
                Comparing Dilli Dabba (avg ₹115) vs Daily Food Delivery Apps (₹320) vs Greasy Office Cafeteria (₹180).
              </p>
            </div>

            <div className="bg-gradient-to-br from-emerald-500 to-teal-700 text-white px-6 py-4 rounded-2xl shadow-pop-dark border-2 border-emerald-300 shrink-0 text-center sm:text-left">
              <span className="text-[11px] font-black uppercase tracking-wider block opacity-95">
                Net Monthly Savings vs Apps
              </span>
              <span className="text-3xl sm:text-4xl font-black tracking-tight">
                ₹{savingsVsFoodApps.toLocaleString('en-IN')}
              </span>
              <span className="text-[11px] font-bold block mt-0.5 opacity-90">
                + Zero afternoon acid reflux / 3 PM fatigue!
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
            <div className="bg-slate-900 rounded-2xl p-5 border-2 border-[#ff5a1f] shadow-pop-orange relative">
              <span className="absolute top-3 right-3 text-[10px] font-black bg-[#ff5a1f] text-white px-2 py-0.5 rounded">
                RECOMMENDED
              </span>
              <p className="text-xs font-black text-amber-300 uppercase">Dilli Dabba Subscription</p>
              <p className="text-3xl font-black text-white mt-1">
                ₹{monthlyDilliDabbaCost.toLocaleString('en-IN')}
              </p>
              <p className="text-xs text-slate-300 mt-0.5">{selectedDays} office days @ ₹115/meal</p>
              
              <ul className="mt-4 space-y-1.5 text-xs text-slate-300 font-bold">
                <li className="flex items-center gap-2 text-emerald-400">
                  <span>✓ 100% Home style (&lt; 1 tsp cold pressed oil)</span>
                </li>
                <li className="flex items-center gap-2 text-emerald-400">
                  <span>✓ Guaranteed by 1:00 PM to your desk</span>
                </li>
                <li className="flex items-center gap-2 text-emerald-400">
                  <span>✓ Carry forward unused meals via WhatsApp</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-900/60 rounded-2xl p-5 border-2 border-slate-800">
              <p className="text-xs font-black text-slate-400 uppercase">Food Apps (Zomato / Swiggy)</p>
              <p className="text-3xl font-black text-rose-400 mt-1">
                ₹{monthlyFoodAppCost.toLocaleString('en-IN')}
              </p>
              <p className="text-xs text-slate-400 mt-0.5">{selectedDays} days @ ₹320 (Meal + Packaging + Surge)</p>

              <ul className="mt-4 space-y-1.5 text-xs text-slate-400 font-medium">
                <li className="flex items-center gap-2 text-rose-300">
                  <span>✕ Excessive restaurant palm oil &amp; MSG</span>
                </li>
                <li className="flex items-center gap-2 text-rose-300">
                  <span>✕ 45-60 min delivery delays during peak lunch</span>
                </li>
                <li className="flex items-center gap-2 text-rose-300">
                  <span>✕ Heavy plastic waste at office desk</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-900/60 rounded-2xl p-5 border-2 border-slate-800">
              <p className="text-xs font-black text-slate-400 uppercase">Office Food Court / Canteen</p>
              <p className="text-3xl font-black text-amber-300 mt-1">
                ₹{monthlyCanteenCost.toLocaleString('en-IN')}
              </p>
              <p className="text-xs text-slate-400 mt-0.5">{selectedDays} days @ ₹180 average tray price</p>

              <ul className="mt-4 space-y-1.5 text-xs text-slate-400 font-medium">
                <li className="flex items-center gap-2 text-amber-200">
                  <span>✕ Same boring repetitive sabzi everyday</span>
                </li>
                <li className="flex items-center gap-2 text-amber-200">
                  <span>✕ 20 min standing in crowded cafeteria queues</span>
                </li>
                <li className="flex items-center gap-2 text-amber-200">
                  <span>✕ Heavy baking soda &amp; heartburn after lunch</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800 text-xs">
            <span className="text-slate-400 font-bold text-center sm:text-left">
              💡 <em>"Mahine ka ₹4,500+ bachaao aur pet bhi ekdum shaant!"</em>
            </span>
            <button
              onClick={onOpenTrialModal}
              className="bg-[#ff5a1f] hover:bg-orange-600 text-white font-black px-6 py-2.5 rounded-xl shadow-pop-dark border-2 border-slate-900 cursor-pointer transition-all"
            >
              Start Free Trial (1st Meal Free)
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
