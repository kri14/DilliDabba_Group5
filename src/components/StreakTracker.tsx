import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Flame, 
  CheckCircle2, 
  Gift, 
  Clock, 
  ArrowRight,
  User
} from 'lucide-react';
import { INITIAL_STREAK } from '../data/mockData';
import { StreakDay } from '../types';

interface StreakTrackerProps {
  onOpenTrialModal: () => void;
  onOpenWhatsApp: () => void;
}

export const StreakTracker: React.FC<StreakTrackerProps> = ({ onOpenTrialModal, onOpenWhatsApp }) => {
  const [days, setDays] = useState<StreakDay[]>(INITIAL_STREAK);
  const [whatsappToast, setWhatsappToast] = useState<string | null>(null);

  const completedCount = days.filter((d) => d.completed && !d.paused).length;
  const isStreakComplete = completedCount === 5;

  const toggleDayCompletion = (index: number) => {
    setDays((prev) => {
      const updated = [...prev];
      const target = updated[index];
      if (target.paused) {
        target.paused = false;
        target.completed = true;
      } else {
        target.completed = !target.completed;
      }
      return updated;
    });

    if (!isStreakComplete && completedCount === 4 && !days[4].completed) {
      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.7 },
          colors: ['#ff5a1f', '#f59e0b', '#10b981']
        });
      } catch {}
    }
  };

  const simulatePauseDay = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setDays((prev) => {
      const updated = [...prev];
      const target = updated[index];
      target.paused = !target.paused;
      if (target.paused) {
        target.completed = false;
      }
      return updated;
    });

    const targetDay = days[index].day;
    setWhatsappToast(
      `💬 WhatsApp Simulation: "${targetDay} meal paused! 1 credit carried forward to next week. Zero wastage!"`
    );
    setTimeout(() => setWhatsappToast(null), 4000);
  };

  return (
    <div id="streak" className="my-14 bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl border-4 border-slate-900 shadow-pop-dark relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-amber-100/60 to-rose-100/50 rounded-full blur-3xl -z-10 pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b-2 border-slate-200">
        <div>
          <div className="inline-flex items-center gap-2 bg-[#f43f5e] text-white px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-2 border-2 border-slate-900 shadow-2xs">
            <Flame className="w-3.5 h-3.5 fill-white" />
            <span>Desi Lunch Streak • 5 Din Ki Consistency</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            5-Day Lunch Streak Tracker (Monday to Friday)
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-2xl font-medium">
            See how real office subscribers track their daily warm dabbas. Complete your 5-day Monday to Friday streak to visibly unlock your <strong>Free Friday Dessert</strong> (Desi Ghee Halwa)!
          </p>
        </div>

        <div className="flex items-center gap-3 bg-amber-50 p-3 rounded-2xl border-2 border-slate-900 shadow-2xs shrink-0">
          <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold">
            <User className="w-5 h-5 text-amber-400" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-black text-slate-900">Aman Verma (DLF Tech)</span>
              <span className="bg-emerald-200 text-emerald-950 text-[10px] font-black px-1.5 rounded border border-emerald-400">
                Active Pass
              </span>
            </div>
            <p className="text-[11px] text-slate-600 font-medium">
              DLF Cyber City Building 10, 4th Floor • Desk 412
            </p>
          </div>
        </div>
      </div>

      {/* Streak Progress & Free Dessert Milestone Bar */}
      <div className="my-6 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white shadow-pop-dark border-2 border-slate-900">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#ff5a1f] flex items-center justify-center text-white font-black text-sm shadow-md border border-slate-900">
              {completedCount}/5
            </div>
            <div>
              <p className="text-xs font-black text-amber-300 uppercase tracking-wider">
                Weekly Lunch Streak
              </p>
              <p className="text-sm sm:text-base font-bold text-white">
                {isStreakComplete
                  ? '🎉 All 5 Days Completed! Free Friday Dessert Unlocked!'
                  : `${5 - completedCount} more healthy meal${5 - completedCount > 1 ? 's' : ''} to unlock your Friday sweet treat!`}
              </p>
            </div>
          </div>

          <div className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider flex items-center gap-2 border-2 transition-all ${
            isStreakComplete
              ? 'bg-gradient-to-r from-amber-400 to-[#ff5a1f] text-slate-950 border-slate-900 shadow-md animate-bounce'
              : 'bg-slate-800 text-slate-300 border-slate-700'
          }`}>
            <Gift className="w-4 h-4" />
            <span>{isStreakComplete ? '🎁 Free Friday Dessert UNLOCKED!' : 'Dessert Locked (Need 5/5)'}</span>
          </div>
        </div>

        <div className="w-full bg-slate-800 rounded-full h-3.5 overflow-hidden p-0.5 border border-slate-700">
          <div
            className="h-full rounded-full bg-gradient-to-r from-orange-500 via-rose-500 to-[#ff5a1f] transition-all duration-500 shadow-sm"
            style={{ width: `${(completedCount / 5) * 100}%` }}
          />
        </div>

        <div className="flex justify-between items-center text-[11px] text-slate-400 mt-2 font-bold">
          <span>Monday Start</span>
          <span className="text-amber-300">
            {completedCount === 5 ? '100% Streak Goal Achieved' : `${(completedCount / 5) * 100}% Progress`}
          </span>
          <span className="text-amber-400">Friday: Hot Gajar Halwa / Gulab Jamun</span>
        </div>
      </div>

      {whatsappToast && (
        <div className="mb-4 bg-emerald-50 border-2 border-emerald-500 text-emerald-900 px-4 py-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-between gap-2 shadow-md">
          <span>{whatsappToast}</span>
          <span className="text-[10px] bg-emerald-200 text-emerald-800 px-2 py-0.5 rounded font-black">
            WhatsApp 10 AM Rule
          </span>
        </div>
      )}

      {/* 5 Days Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 my-6">
        {days.map((day, idx) => {
          const isFriday = idx === 4;
          return (
            <div
              key={day.day}
              onClick={() => toggleDayCompletion(idx)}
              className={`rounded-2xl p-4 transition-all duration-200 cursor-pointer border-2 relative flex flex-col justify-between select-none ${
                day.paused
                  ? 'bg-slate-50 border-dashed border-slate-300 opacity-70'
                  : day.completed
                  ? 'bg-amber-50/80 border-slate-900 shadow-pop-dark hover:scale-[1.02]'
                  : 'bg-white border-slate-300 hover:border-slate-800'
              }`}
            >
              <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                <span className="font-black text-sm text-slate-900">
                  {day.day}
                </span>
                <span
                  className={`text-[10px] font-black px-2 py-0.5 rounded-full ${
                    day.paused
                      ? 'bg-slate-200 text-slate-700'
                      : day.completed
                      ? 'bg-[#ff5a1f] text-white'
                      : 'bg-slate-100 text-slate-500'
                  }`}
                >
                  {day.paused ? 'PAUSED' : day.completed ? 'COMPLETED' : 'PENDING'}
                </span>
              </div>

              <div className="my-3 space-y-1">
                <p className="text-xs font-bold text-slate-800 line-clamp-2">
                  {day.dish}
                </p>
                <div className="flex items-center gap-1.5 text-[11px] text-slate-500 font-bold">
                  <Clock className="w-3 h-3 text-slate-400" />
                  <span>{day.deliveryTime}</span>
                </div>
              </div>

              {isFriday && (
                <div className={`p-2 rounded-xl text-center text-xs font-black mb-2 transition-colors border ${
                  isStreakComplete
                    ? 'bg-amber-400 text-slate-950 border-slate-900 shadow-sm animate-pulse'
                    : 'bg-amber-100 text-amber-900 border-amber-300'
                }`}>
                  🎁 FREE FRIDAY DESSERT
                </div>
              )}

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1 font-black text-slate-800">
                  <CheckCircle2
                    className={`w-4 h-4 ${
                      day.completed ? 'text-[#ff5a1f]' : 'text-slate-300'
                    }`}
                  />
                  <span>{day.completed ? 'Eaten' : 'Click to Check'}</span>
                </div>

                <button
                  onClick={(e) => simulatePauseDay(idx, e)}
                  title="Simulate WhatsApp pause"
                  className="text-[11px] font-black text-slate-600 hover:text-[#ff5a1f] px-1.5 py-0.5 rounded hover:bg-slate-100 transition-colors"
                >
                  {day.paused ? 'Resume' : 'Pause'}
                </button>
              </div>

            </div>
          );
        })}
      </div>

      {/* Unlocked Reward Banner */}
      {isStreakComplete ? (
        <div className="bg-gradient-to-r from-amber-100 via-orange-100 to-amber-100 border-4 border-slate-900 p-5 rounded-3xl shadow-pop-dark flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 text-center sm:text-left">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 text-slate-950 flex items-center justify-center text-3xl shadow-md border-2 border-slate-900 shrink-0">
              🍮
            </div>
            <div>
              <div className="inline-flex items-center gap-1 bg-amber-400 text-slate-950 text-[10px] font-black uppercase px-2 py-0.5 rounded mb-1 border border-slate-900">
                Streak Reward Unlocked!
              </div>
              <h4 className="text-base sm:text-lg font-black text-slate-900">
                Free Friday Dessert Added: Desi Ghee Gajar Ka Halwa
              </h4>
              <p className="text-xs text-slate-700 font-medium">
                Your 5-day consistency bonus is automatically packed into your Friday insulated dabba with zero extra charge!
              </p>
            </div>
          </div>

          <button
            onClick={onOpenTrialModal}
            className="shrink-0 px-6 py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-black flex items-center gap-2 shadow-pop-dark border-2 border-slate-900 cursor-pointer"
          >
            <span>Start My 5-Day Plan</span>
            <ArrowRight className="w-4 h-4 text-orange-400" />
          </button>
        </div>
      ) : (
        <div className="bg-slate-50 p-4 rounded-2xl border-2 border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600 font-medium">
          <div className="flex items-center gap-2">
            <span className="text-base">💡</span>
            <span>
              <strong>Tip:</strong> Click on Friday's card above to simulate completing the 5-day streak and watch your <strong>Free Friday Dessert</strong> unlock instantly!
            </span>
          </div>
          <button
            onClick={() => {
              setDays((prev) => prev.map((d) => ({ ...d, completed: true, paused: false })));
              try {
                confetti({ particleCount: 50, spread: 60, origin: { y: 0.7 } });
              } catch {}
            }}
            className="text-xs font-black text-[#ff5a1f] hover:underline shrink-0 cursor-pointer"
          >
            Auto-Complete All 5 Days
          </button>
        </div>
      )}

      <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 font-bold">
        <span>
          ⚡ <strong>Office flexibility:</strong> Koi meeting ya WFH hai? WhatsApp pe 10 AM se pehle "PAUSE" bhej do.
        </span>
        <button
          onClick={onOpenWhatsApp}
          className="text-[#ff5a1f] font-black hover:underline inline-flex items-center gap-1 cursor-pointer"
        >
          <span>Chat on WhatsApp now</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>

    </div>
  );
};
