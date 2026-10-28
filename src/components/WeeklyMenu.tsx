import React, { useState } from 'react';
import { 
  Utensils, 
  ChevronRight, 
  ShieldCheck 
} from 'lucide-react';
import { WEEKLY_MENU } from '../data/mockData';

interface WeeklyMenuProps {
  onOpenTrialModal: () => void;
}

export const WeeklyMenu: React.FC<WeeklyMenuProps> = ({ onOpenTrialModal }) => {
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);

  const currentItem = WEEKLY_MENU[selectedDayIndex];

  const tabColors = [
    { bg: 'bg-[#ff5a1f]', border: 'border-[#ff5a1f]', shadow: 'shadow-pop-orange' },
    { bg: 'bg-[#f43f5e]', border: 'border-[#f43f5e]', shadow: 'shadow-pop-pink' },
    { bg: 'bg-[#0d9488]', border: 'border-[#0d9488]', shadow: 'shadow-pop-teal' },
    { bg: 'bg-[#f59e0b]', border: 'border-[#f59e0b]', shadow: 'shadow-pop-gold' },
    { bg: 'bg-[#7c3aed]', border: 'border-[#7c3aed]', shadow: 'shadow-pop-dark' }
  ];

  return (
    <section id="menu" className="py-16 bg-gradient-to-b from-white via-amber-50/30 to-white border-b-2 border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#ff5a1f] text-white px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider shadow-pop-dark border-2 border-slate-900">
            <Utensils className="w-3.5 h-3.5" />
            <span>14-Day Zero Repeat Sabzi • Desi Masala Magic</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Weekly Menu Tab Slider: Roz Kuch Naya &amp; Healthy
          </h2>
          <p className="text-base text-slate-600 font-medium">
            Never wonder <em>"Aaj lunch me kya khayein?"</em> again. Our menu rotates across North Indian home favorites, cooked with less than 1 tsp oil so you never get that heavy afternoon 3 PM food coma!
          </p>
        </div>

        {/* Day Selector Tabs (Horizontal Slider Layout) */}
        <div className="flex items-center justify-start sm:justify-center gap-3 overflow-x-auto pb-4 no-scrollbar mb-8">
          {WEEKLY_MENU.map((item, index) => {
            const isSelected = selectedDayIndex === index;
            const style = tabColors[index % tabColors.length];
            return (
              <button
                key={item.day}
                onClick={() => setSelectedDayIndex(index)}
                className={`flex-shrink-0 px-4 sm:px-6 py-3 rounded-2xl font-black text-sm transition-all duration-200 flex flex-col items-center gap-0.5 cursor-pointer border-2 ${
                  isSelected
                    ? `${style.bg} text-white border-slate-950 ${style.shadow} scale-105`
                    : 'bg-white text-slate-800 hover:text-slate-950 border-slate-900 shadow-2xs hover:bg-orange-50'
                }`}
              >
                <span className={`text-[11px] font-black uppercase tracking-wider ${isSelected ? 'text-amber-200' : 'text-[#ff5a1f]'}`}>
                  {item.dayHindi}
                </span>
                <span className="text-sm sm:text-base font-black">
                  {item.day}
                </span>
                {index === 4 && (
                  <span className="text-[10px] bg-amber-300 text-slate-950 px-2 py-0.5 rounded-full font-black mt-0.5 border border-slate-900">
                    Sweet Day 🎁
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Active Day Menu Card Showcase */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl border-4 border-slate-900 shadow-pop-dark grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Dish Imagery and tags */}
          <div className="lg:col-span-5 relative group">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-md border-2 border-slate-900">
              <img
                src={currentItem.image}
                alt={`${currentItem.day} Dilli Dabba Thali`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              
              <div className="absolute top-3 left-3 bg-[#ff5a1f] text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider shadow border border-slate-900">
                {currentItem.theme}
              </div>

              <div className="absolute bottom-3 left-3 right-3 text-white">
                <p className="text-xs text-amber-300 font-bold uppercase">
                  Cooked Fresh Today Morning (5:00 AM)
                </p>
                <p className="text-base sm:text-lg font-black leading-snug">
                  {currentItem.sabzi1}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 mt-3 text-center">
              <div className="bg-slate-50 p-2.5 rounded-xl border-2 border-slate-200">
                <span className="text-[10px] uppercase font-black text-slate-500 block">Calories</span>
                <span className="text-sm font-black text-slate-900">{currentItem.calories} kcal</span>
              </div>
              <div className="bg-emerald-50 p-2.5 rounded-xl border-2 border-emerald-200">
                <span className="text-[10px] uppercase font-black text-emerald-600 block">Oil Control</span>
                <span className="text-xs font-black text-emerald-900">{currentItem.oilLevel}</span>
              </div>
              <div className="bg-orange-50 p-2.5 rounded-xl border-2 border-orange-200">
                <span className="text-[10px] uppercase font-black text-[#ff5a1f] block">Protein</span>
                <span className="text-sm font-black text-slate-900">{currentItem.proteinGrams}g</span>
              </div>
            </div>
          </div>

          {/* Right: Detailed Thali Components */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b-2 border-slate-100">
              <div>
                <span className="text-xs font-black text-[#ff5a1f] uppercase tracking-wider">
                  Complete Homestyle Thali Spread
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                  {currentItem.day}'s Fresh Tiffin Menu
                </h3>
              </div>
              <div className="flex gap-1.5 flex-wrap">
                {currentItem.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-black bg-amber-100 text-amber-950 px-2.5 py-1 rounded-full border border-amber-300"
                  >
                    ✓ {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              
              <div className="p-3.5 rounded-2xl bg-amber-50/60 border-2 border-slate-200 flex items-start gap-3">
                <span className="text-lg">🥘</span>
                <div>
                  <p className="text-[11px] font-black text-slate-500 uppercase">Main Sabzi 1</p>
                  <p className="text-sm font-bold text-slate-900">{currentItem.sabzi1}</p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-amber-50/60 border-2 border-slate-200 flex items-start gap-3">
                <span className="text-lg">🥗</span>
                <div>
                  <p className="text-[11px] font-black text-slate-500 uppercase">Daily Dal / Protein</p>
                  <p className="text-sm font-bold text-slate-900">{currentItem.dal}</p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-amber-50/60 border-2 border-slate-200 flex items-start gap-3">
                <span className="text-lg">🫓</span>
                <div>
                  <p className="text-[11px] font-black text-slate-500 uppercase">Tawa Phulkas</p>
                  <p className="text-sm font-bold text-slate-900">{currentItem.bread}</p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-amber-50/60 border-2 border-slate-200 flex items-start gap-3">
                <span className="text-lg">🍚</span>
                <div>
                  <p className="text-[11px] font-black text-slate-500 uppercase">Rice &amp; Grains</p>
                  <p className="text-sm font-bold text-slate-900">{currentItem.rice}</p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-amber-50/60 border-2 border-slate-200 sm:col-span-2 flex items-start gap-3">
                <span className="text-lg">🥒</span>
                <div>
                  <p className="text-[11px] font-black text-slate-500 uppercase">Fresh Salad &amp; Homemade Achar</p>
                  <p className="text-sm font-bold text-slate-900">{currentItem.saladChutney}</p>
                </div>
              </div>

              {currentItem.specialAddon && (
                <div className="p-3.5 rounded-2xl bg-amber-100 border-2 border-amber-400 sm:col-span-2 flex items-start gap-3">
                  <span className="text-xl">🎁</span>
                  <div>
                    <p className="text-[11px] font-black text-amber-950 uppercase">TGIF Bonus</p>
                    <p className="text-sm font-black text-amber-950">{currentItem.specialAddon}</p>
                  </div>
                </div>
              )}

            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-slate-600 font-bold">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Stainless steel packed • Jain/No Onion-Garlic available</span>
              </div>

              <button
                onClick={onOpenTrialModal}
                className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-[#ff5a1f] hover:bg-orange-600 text-white font-black text-xs sm:text-sm shadow-pop-dark border-2 border-slate-900 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Book This Day on Free Trial</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
