import React from 'react';
import { ShieldCheck, CheckCircle2, Award, Droplets, ThermometerSun } from 'lucide-react';
import { HYGIENE_PHOTOS } from '../data/mockData';

export const HygieneShowcase: React.FC = () => {
  return (
    <section id="hygiene" className="py-16 sm:py-20 bg-white border-b-2 border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-900 border-2 border-slate-900 px-4 py-1 rounded-full text-xs font-black uppercase tracking-wider shadow-pop-dark">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
            <span>FSSAI Certified Commercial Kitchen</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Our Kitchen Hygiene Photos &amp; Standards
          </h2>
          <p className="text-base text-slate-600 font-medium">
            Khana wahi jo hum apne ghar walon ko khila sakein. Take a look inside our clean, commercial-grade kitchens in Gurugram &amp; Noida where your lunch is freshly cooked every single morning.
          </p>
        </div>

        {/* 4 Hygiene Showcase Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {HYGIENE_PHOTOS.map((item, idx) => (
            <div
              key={idx}
              className="group rounded-3xl bg-amber-50/40 border-4 border-slate-900 overflow-hidden shadow-pop-dark hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-200">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                <div className="absolute top-2.5 left-2.5 bg-slate-950/90 text-white text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider border border-slate-700">
                  {item.tag}
                </div>

                <div className="absolute bottom-2.5 right-2.5 bg-[#ff5a1f] text-white text-[11px] font-black px-2 py-0.5 rounded-lg border border-slate-900 shadow">
                  {item.stat}
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-3 bg-white">
                <div>
                  <h4 className="text-base font-black text-slate-900 leading-snug group-hover:text-[#ff5a1f] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-600 font-medium mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 border-t-2 border-slate-100 flex items-center gap-1.5 text-[11px] font-black text-emerald-800">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Inspected Daily by Food Safety Officer</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Stats Counter Strip */}
        <div className="mt-12 rounded-3xl bg-slate-950 text-white p-6 sm:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center shadow-pop-dark border-4 border-slate-900">
          <div>
            <div className="flex items-center justify-center text-amber-400 mb-1">
              <Droplets className="w-5 h-5" />
            </div>
            <p className="text-2xl sm:text-3xl font-black text-white">100%</p>
            <p className="text-[11px] text-slate-400 uppercase font-black mt-0.5">RO Water For Cooking &amp; Washing</p>
          </div>

          <div>
            <div className="flex items-center justify-center text-orange-400 mb-1">
              <ThermometerSun className="w-5 h-5" />
            </div>
            <p className="text-2xl sm:text-3xl font-black text-white">68°C+</p>
            <p className="text-[11px] text-slate-400 uppercase font-black mt-0.5">Insulated Packing Temp</p>
          </div>

          <div>
            <div className="flex items-center justify-center text-rose-400 mb-1">
              <Award className="w-5 h-5" />
            </div>
            <p className="text-2xl sm:text-3xl font-black text-white">0%</p>
            <p className="text-[11px] text-slate-400 uppercase font-black mt-0.5">Palm Oil / Artificial Color / MSG</p>
          </div>

          <div>
            <div className="flex items-center justify-center text-teal-400 mb-1">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <p className="text-2xl sm:text-3xl font-black text-white">4.9 / 5</p>
            <p className="text-[11px] text-slate-400 uppercase font-black mt-0.5">Kitchen Cleanliness Rating</p>
          </div>
        </div>

      </div>
    </section>
  );
};
