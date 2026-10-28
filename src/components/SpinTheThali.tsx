import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, Trophy, ArrowRight, Check, RotateCw, Copy, Tag } from 'lucide-react';

interface SpinTheThaliProps {
  onClaimDiscount: (code: string) => void;
}

const SECTORS = [
  { label: 'First-Week Discount!', color: '#ff5a1f', textColor: '#ffffff', icon: '🎁', isWinner: true },
  { label: 'Free Gulab Jamun', color: '#e11d48', textColor: '#ffffff', icon: '🍮' },
  { label: 'Extra Roti Pass', color: '#f59e0b', textColor: '#0f172a', icon: '🫓' },
  { label: '₹100 Office Cash', color: '#0d9488', textColor: '#ffffff', icon: '💵' },
  { label: 'Chilled Sweet Lassi', color: '#0284c7', textColor: '#ffffff', icon: '🥛' },
  { label: 'Chef Special Achar', color: '#7c3aed', textColor: '#ffffff', icon: '🥭' }
];

export const SpinTheThali: React.FC<SpinTheThaliProps> = ({ onClaimDiscount }) => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [hasWon, setHasWon] = useState(false);
  const [rewardCode] = useState('FIRSTWEEK50');
  const [copied, setCopied] = useState(false);

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#ff5a1f', '#f43f5e', '#f59e0b', '#0d9488', '#ffffff']
      });
    } catch {}
  };

  const handleSpin = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    setHasWon(false);

    const fullSpins = 6;
    const targetDeg = fullSpins * 360; 
    const finalRotation = rotation + targetDeg + (360 - (rotation % 360));

    setRotation(finalRotation);

    setTimeout(() => {
      setIsSpinning(false);
      setHasWon(true);
      triggerConfetti();
    }, 3600);
  };

  const copyCoupon = () => {
    navigator.clipboard.writeText(rewardCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div id="spin" className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white rounded-3xl p-6 sm:p-10 shadow-2xl border-4 border-slate-900 shadow-pop-dark relative overflow-hidden my-12">
      
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#ff5a1f]/25 to-[#f43f5e]/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#0d9488]/25 to-[#f59e0b]/25 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-8">
          <div className="inline-flex items-center gap-2 bg-[#ff5a1f] text-white px-4 py-1 rounded-full text-xs font-black uppercase tracking-wider shadow-pop-dark border-2 border-slate-900">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Desi Swag Gamification</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
            Spin the Thali: Unlock Your Daily Office Perk!
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-medium">
            Kismat aazmao, desk pe swaad badhao. Click the royal stainless steel thali below to spin and win an exclusive first-week subscription reward.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 flex flex-col items-center justify-center">
            <div className="relative w-72 h-72 sm:w-88 sm:h-88 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-amber-500 via-slate-300 to-amber-600 p-4 shadow-2xl border-4 border-slate-800">
                <div className="w-full h-full rounded-full bg-slate-950 p-2 shadow-inner">
                  <div
                    className="w-full h-full rounded-full relative overflow-hidden transition-transform duration-[3600ms] cubic-bezier(0.15, 0.9, 0.2, 1)"
                    style={{ transform: `rotate(${rotation}deg)` }}
                  >
                    {SECTORS.map((sector, index) => {
                      const angle = (360 / SECTORS.length) * index;
                      return (
                        <div
                          key={sector.label}
                          className="absolute inset-0 origin-center"
                          style={{
                            transform: `rotate(${angle}deg)`,
                            clipPath: 'polygon(50% 50%, 21% 0%, 79% 0%)'
                          }}
                        >
                          <div
                            className="w-full h-full flex flex-col items-center pt-3 text-center border-r border-white/20"
                            style={{ backgroundColor: sector.color, color: sector.textColor }}
                          >
                            <span className="text-xl sm:text-2xl filter drop-shadow">
                              {sector.icon}
                            </span>
                            <span className="text-[10px] sm:text-xs font-black tracking-tight px-1 mt-1 uppercase max-w-[85px] leading-tight drop-shadow-sm">
                              {sector.label}
                            </span>
                          </div>
                        </div>
                      );
                    })}

                    <div className="absolute inset-0 m-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-amber-400 via-amber-200 to-amber-500 p-1.5 shadow-xl flex items-center justify-center border-2 border-slate-900">
                      <div className="w-full h-full rounded-full bg-slate-950 flex flex-col items-center justify-center text-center p-1">
                        <span className="text-[9px] font-black tracking-widest text-[#ff5a1f] uppercase">
                          DILLI
                        </span>
                        <span className="text-[8px] font-black text-amber-300">
                          THALI
                        </span>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              <div className="absolute -top-3 z-20 flex flex-col items-center">
                <div className="w-6 h-9 bg-gradient-to-b from-[#f43f5e] to-[#ff5a1f] shadow-lg border-2 border-white"
                     style={{ clipPath: 'polygon(50% 100%, 0 0, 100% 0)' }}>
                </div>
                <div className="w-3.5 h-3.5 rounded-full bg-amber-400 shadow-md -mt-1 border-2 border-slate-900" />
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={handleSpin}
                disabled={isSpinning}
                className={`px-8 py-3.5 rounded-2xl font-black text-sm sm:text-base flex items-center gap-2.5 shadow-pop-dark transition-all duration-300 cursor-pointer border-2 border-slate-900 ${
                  isSpinning
                    ? 'bg-slate-700 text-slate-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-[#ff5a1f] to-[#f43f5e] hover:from-[#f43f5e] hover:to-[#ff5a1f] text-white hover:scale-105 active:scale-95'
                }`}
              >
                <RotateCw className={`w-5 h-5 ${isSpinning ? 'animate-spin' : ''}`} />
                <span>{isSpinning ? 'Thali Ghum Rahi Hai...' : 'Spin the Thali Now! 🎯'}</span>
              </button>

              <span className="text-xs text-amber-300 font-bold">
                ✨ 100% Free spin for new office subscribers
              </span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className={`rounded-3xl p-6 transition-all duration-500 border-2 ${
              hasWon 
                ? 'bg-gradient-to-b from-orange-500/20 via-slate-900 to-slate-950 border-[#ff5a1f] shadow-pop-orange'
                : 'bg-slate-900/80 border-slate-800'
            }`}>
              
              <div className="flex items-center justify-between pb-3 border-b border-slate-700">
                <div className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-amber-400" />
                  <span className="text-xs font-black uppercase tracking-wider text-slate-300">
                    Reward Reveal Status
                  </span>
                </div>
                <span className="text-xs font-black px-2.5 py-0.5 rounded-full bg-amber-400 text-slate-950">
                  {hasWon ? 'Reward Unlocked 🎉' : 'Awaiting Spin'}
                </span>
              </div>

              {hasWon ? (
                <div className="mt-5 space-y-4 animate-in fade-in zoom-in-95 duration-500">
                  <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 text-xs font-black px-3 py-1 rounded-full border border-emerald-500/40">
                    <Check className="w-3.5 h-3.5" />
                    <span>Jackpot Revealed!</span>
                  </div>

                  <div>
                    <p className="text-xs text-orange-300 font-black uppercase tracking-wider">
                      You Won:
                    </p>
                    <h3 className="text-2xl sm:text-3xl font-black text-white mt-0.5">
                      "First-Week Discount!"
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                      Badhaai ho! You got <strong>50% off</strong> on your trial week subscription or an extra ₹150 instant voucher for your Gurgaon/Noida office lunch plan.
                    </p>
                  </div>

                  <div className="bg-slate-950 p-3.5 rounded-2xl border-2 border-dashed border-[#ff5a1f] flex items-center justify-between gap-2 shadow-inner">
                    <div className="flex items-center gap-2">
                      <Tag className="w-4 h-4 text-[#ff5a1f]" />
                      <div>
                        <p className="text-[10px] text-slate-400 uppercase font-black">Coupon Code</p>
                        <p className="font-mono text-base font-extrabold text-white tracking-widest">
                          {rewardCode}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={copyCoupon}
                      className="bg-slate-800 hover:bg-slate-700 text-xs text-white font-black px-3.5 py-2 rounded-xl border border-slate-600 flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copied ? 'Copied!' : 'Copy'}</span>
                    </button>
                  </div>

                  <button
                    onClick={() => onClaimDiscount(rewardCode)}
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#ff5a1f] via-rose-500 to-orange-600 hover:from-orange-600 hover:to-rose-600 text-white font-black text-sm flex items-center justify-center gap-2 shadow-pop-dark border-2 border-slate-900 cursor-pointer transform hover:scale-[1.02] active:scale-98 transition-all"
                  >
                    <span>Claim First-Week Discount in Free Trial</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  
                  <p className="text-[11px] text-center text-slate-400 font-medium">
                    No payment required upfront. Auto-applied to your delivery desk booking.
                  </p>
                </div>
              ) : (
                <div className="mt-6 text-center py-6 space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 mx-auto flex items-center justify-center text-3xl shadow-lg border-2 border-slate-900">
                    🎡
                  </div>
                  <div className="space-y-1">
                    <p className="font-black text-white text-base">
                      Spin the Thali wheel to unlock!
                    </p>
                    <p className="text-xs text-slate-400 max-w-xs mx-auto">
                      All new corporate signups get guaranteed goodies: <strong>"First-Week Discount!"</strong>, dessert passes, and cashback rewards.
                    </p>
                  </div>
                  <button
                    onClick={handleSpin}
                    className="inline-flex items-center gap-2 text-xs font-black text-[#ff5a1f] hover:text-orange-400 cursor-pointer pt-2"
                  >
                    <span>Click here to test your lunch luck</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
