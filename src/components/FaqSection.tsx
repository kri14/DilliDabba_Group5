import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, MessageSquare, CheckCircle2 } from 'lucide-react';
import { FAQ_DATA } from '../data/mockData';

interface FaqSectionProps {
  onOpenWhatsApp: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenWhatsApp }) => {
  const [openIndices, setOpenIndices] = useState<number[]>([0, 1, 2]);

  const toggleIndex = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section id="faqs" className="py-16 sm:py-24 bg-amber-50/30 border-b-2 border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 bg-[#f59e0b] text-slate-950 px-4 py-1 rounded-full text-xs font-black uppercase tracking-wider shadow-pop-dark border-2 border-slate-900">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>AEO-Optimized Crisp Answers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Frequently Asked Questions (Seedhe Jawaab)
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium">
            Everything you need to know about delivery timings, meal hygiene, and WhatsApp flexibility in clear 2-sentence answers.
          </p>
        </div>

        {/* FAQs Accordion */}
        <div className="space-y-4">
          {FAQ_DATA.map((item, index) => {
            const isOpen = openIndices.includes(index);
            const isFeatured = index < 3;

            return (
              <div
                key={index}
                className={`rounded-2xl transition-all duration-200 border-2 overflow-hidden ${
                  isOpen
                    ? 'bg-white border-slate-900 shadow-pop-orange'
                    : 'bg-white border-slate-900 shadow-2xs hover:shadow-sm'
                }`}
              >
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-black shrink-0 border-2 border-slate-900 ${
                        isOpen
                          ? 'bg-[#ff5a1f] text-white shadow-xs'
                          : 'bg-amber-100 text-slate-900'
                      }`}
                    >
                      Q{index + 1}
                    </span>
                    <span className="text-base sm:text-lg font-black text-slate-900">
                      {item.question}
                    </span>
                  </div>

                  <span className="text-slate-400 shrink-0">
                    {isOpen ? <ChevronUp className="w-5 h-5 text-[#ff5a1f]" /> : <ChevronDown className="w-5 h-5" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 border-t-2 border-slate-100 mt-1">
                    <div className="p-4 rounded-xl bg-orange-50 border-2 border-orange-200 flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-emerald-200 text-emerald-950 flex items-center justify-center text-xs font-black shrink-0 mt-0.5 border border-emerald-400">
                        A
                      </div>
                      <p className="text-sm sm:text-base text-slate-900 font-bold leading-relaxed">
                        {item.answer}
                      </p>
                    </div>

                    {isFeatured && (
                      <div className="mt-2 text-[11px] text-slate-500 font-bold flex items-center gap-1.5 px-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        <span>AEO Verified Answer: 2 plain sentences for voice &amp; search snippet clarity</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Need more help WhatsApp Strip */}
        <div className="mt-10 p-6 rounded-3xl bg-white border-4 border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-pop-dark">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 border-2 border-slate-900 flex items-center justify-center shrink-0">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div>
              <p className="text-base font-black text-slate-900">Have a custom office requirement?</p>
              <p className="text-xs text-slate-600 font-medium">Jain food, bulk corporate team lunch, or special timing?</p>
            </div>
          </div>

          <button
            onClick={onOpenWhatsApp}
            className="shrink-0 px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs flex items-center gap-2 shadow-pop-dark border-2 border-slate-900 transition-colors cursor-pointer"
          >
            <span>Ask on WhatsApp (+91 98110 34221)</span>
          </button>
        </div>

      </div>
    </section>
  );
};
