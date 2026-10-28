import React from 'react';

export const IndianFusionTicker: React.FC = () => {
  const tickerItems = [
    { icon: '🌶️', text: 'ASLI GHAR JAISA TASTE', color: 'bg-[#ff5a1f] text-white' },
    { icon: '🥫', text: '100% GRADE 304 STAINLESS STEEL DABBAS', color: 'bg-slate-900 text-amber-300' },
    { icon: '🫓', text: 'TAWA PHULKAS WITH DESI GHEE', color: 'bg-[#f43f5e] text-white' },
    { icon: '⏰', text: 'DESK PE 1 BAJE TAK PAKKI DELIVERY', color: 'bg-[#f59e0b] text-slate-950' },
    { icon: '🌿', text: 'LESS THAN 1 TSP OIL (ZERO 3 PM FOOD COMA)', color: 'bg-[#0d9488] text-white' },
    { icon: '🎁', text: 'FREE FRIDAY DESSERT UNLOCKED WITH 5-DAY STREAK', color: 'bg-amber-400 text-slate-900' },
    { icon: '💬', text: 'WHATSAPP PE EK PING AUR MEAL PAUSED', color: 'bg-emerald-600 text-white' },
    { icon: '🛵', text: 'SERVING GURGAON • NOIDA • CONNAUGHT PLACE', color: 'bg-[#ec4899] text-white' }
  ];

  return (
    <div className="relative overflow-hidden bg-slate-950 py-3 border-y-4 border-slate-900 select-none">
      <div className="animate-marquee flex items-center gap-4">
        {tickerItems.concat(tickerItems).map((item, idx) => (
          <div
            key={idx}
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider shrink-0 border-2 border-slate-900 shadow-sm ${item.color}`}
          >
            <span className="text-sm">{item.icon}</span>
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
