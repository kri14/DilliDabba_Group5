import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  X, 
  ArrowRight, 
  Tag
} from 'lucide-react';
import { DeliveryZone, FreeTrialFormState, SubscriptionPlan } from '../types';

interface FreeTrialModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCoupon?: string;
  selectedPlan?: SubscriptionPlan | null;
}

export const FreeTrialModal: React.FC<FreeTrialModalProps> = ({
  isOpen,
  onClose,
  initialCoupon,
  selectedPlan
}) => {
  const [formData, setFormData] = useState<FreeTrialFormState>({
    fullName: '',
    phone: '',
    city: 'Gurugram',
    techParkOrArea: 'DLF Cyber City Phase 2',
    companyName: '',
    towerFloorDesk: '',
    dietPreference: 'Standard Ghar Jaisa',
    deliveryDate: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    appliedCoupon: initialCoupon || ''
  });

  const [step, setStep] = useState<'form' | 'success'>('form');
  const [bookingId, setBookingId] = useState('DD-' + Math.floor(1000 + Math.random() * 9000));

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingId('DD-' + Math.floor(1000 + Math.random() * 9000));
    setStep('success');
    try {
      confetti({
        particleCount: 90,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#ff5a1f', '#f43f5e', '#f59e0b', '#0d9488']
      });
    } catch {}
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-xl rounded-3xl bg-white shadow-2xl border-4 border-slate-900 shadow-pop-dark overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white p-5 sm:p-6 flex items-center justify-between border-b-2 border-slate-900">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5a1f]" />
              <span className="text-[11px] font-black uppercase tracking-wider text-amber-300">
                100% Risk Free Trial
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white mt-0.5">
              {selectedPlan ? `Book ${selectedPlan.name}` : 'Start Your 1st Meal Free Trial'}
            </h3>
            <p className="text-xs text-slate-300 font-medium">
              Guaranteed by 1 PM directly to your office desk in Gurugram, Noida or CP.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        {step === 'form' ? (
          <form onSubmit={handleSubmit} className="p-5 sm:p-7 space-y-4 max-h-[75vh] overflow-y-auto">
            
            {formData.appliedCoupon && (
              <div className="bg-amber-50 border-2 border-amber-300 p-3 rounded-2xl flex items-center justify-between gap-2 text-xs font-black text-slate-900 shadow-2xs">
                <div className="flex items-center gap-2">
                  <Tag className="w-4 h-4 text-[#ff5a1f]" />
                  <span>Spin reward applied: <span className="font-mono text-[#ff5a1f]">{formData.appliedCoupon}</span> (First-Week Perk)</span>
                </div>
                <span className="bg-emerald-200 text-emerald-900 text-[10px] px-2 py-0.5 rounded font-black border border-emerald-400">
                  ACTIVE
                </span>
              </div>
            )}

            <div>
              <label className="block text-xs font-black uppercase text-slate-800 tracking-wider mb-1.5">
                1. Select Office Location (City):
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(['Gurugram', 'Noida', 'Connaught Place'] as DeliveryZone[]).map((city) => (
                  <button
                    type="button"
                    key={city}
                    onClick={() => setFormData({ ...formData, city })}
                    className={`py-2 px-2 rounded-xl text-xs font-black border-2 transition-all cursor-pointer text-center ${
                      formData.city === city
                        ? 'bg-slate-900 text-white border-slate-900 shadow-2xs'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    📍 {city}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-black text-slate-800 mb-1">
                Tech Park / Sector / Landmark:
              </label>
              <select
                value={formData.techParkOrArea}
                onChange={(e) => setFormData({ ...formData, techParkOrArea: e.target.value })}
                className="w-full bg-slate-50 border-2 border-slate-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-bold focus:ring-2 focus:ring-[#ff5a1f] focus:outline-none"
              >
                {formData.city === 'Gurugram' && (
                  <>
                    <option value="DLF Cyber City Phase 2 & 3">DLF Cyber City (Building 5, 8, 9, 10, 14)</option>
                    <option value="Cyber Hub & Horizon Centre">Cyber Hub / One Horizon Centre</option>
                    <option value="Udyog Vihar Phase 1 to 5">Udyog Vihar (Phase 1, 2, 3, 4, 5)</option>
                    <option value="Golf Course Road / Extn">Golf Course Road &amp; Extn (Two Horizon, etc.)</option>
                    <option value="Candor TechSpace Sector 48">Candor TechSpace Sector 48 / Sohna Rd</option>
                  </>
                )}
                {formData.city === 'Noida' && (
                  <>
                    <option value="Sector 62 Institutional Area">Sector 62 (Candor, Stellar, Logix Cyber Park)</option>
                    <option value="Sector 18 Commercial Hub">Sector 18 &amp; Atta Commercial Market</option>
                    <option value="Sector 125, 126, 127 Expressway">Sector 125, 126, 127 Tech Boulevard</option>
                    <option value="Sector 135 & 142 Advant Navis">Sector 135 &amp; 142 Advant Navis Business Park</option>
                    <option value="Expressway IT Parks">Noida Expressway Special Economic Zones</option>
                  </>
                )}
                {formData.city === 'Connaught Place' && (
                  <>
                    <option value="Barakhamba Road & Statesman House">Barakhamba Road &amp; Statesman House</option>
                    <option value="Kasturba Gandhi Marg & HT House">Kasturba Gandhi Marg &amp; HT House</option>
                    <option value="Inner & Outer Circle CP">Inner &amp; Outer Circle Corporate Chambers</option>
                    <option value="Tolstoy Marg & Janpath">Tolstoy Marg / Janpath Offices</option>
                  </>
                )}
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-black text-slate-800 mb-1">
                  Full Name:
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full bg-slate-50 border-2 border-slate-300 rounded-xl px-3.5 py-2 text-xs sm:text-sm font-bold focus:ring-2 focus:ring-[#ff5a1f] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-black text-slate-800 mb-1">
                  WhatsApp Number:
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 98110 34221"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-slate-50 border-2 border-slate-300 rounded-xl px-3.5 py-2 text-xs sm:text-sm font-bold focus:ring-2 focus:ring-[#ff5a1f] focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-black text-slate-800 mb-1">
                  Company / Organization Name:
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Google, Paytm, KPMG..."
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  className="w-full bg-slate-50 border-2 border-slate-300 rounded-xl px-3.5 py-2 text-xs sm:text-sm font-bold focus:ring-2 focus:ring-[#ff5a1f] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-black text-slate-800 mb-1">
                  Tower, Floor &amp; Desk Number:
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Tower B, 6th Floor, Desk 614"
                  value={formData.towerFloorDesk}
                  onChange={(e) => setFormData({ ...formData, towerFloorDesk: e.target.value })}
                  className="w-full bg-slate-50 border-2 border-slate-300 rounded-xl px-3.5 py-2 text-xs sm:text-sm font-bold focus:ring-2 focus:ring-[#ff5a1f] focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-black uppercase text-slate-800 tracking-wider mb-1.5">
                Food &amp; Spice Preference:
              </label>
              <div className="grid grid-cols-2 gap-2 text-xs font-bold">
                {[
                  'Standard Ghar Jaisa',
                  'Jain (No Onion & Garlic)',
                  'Less Spicy / High Fiber',
                  'High Protein Fitness'
                ].map((pref) => (
                  <button
                    type="button"
                    key={pref}
                    onClick={() => setFormData({ ...formData, dietPreference: pref as any })}
                    className={`p-2.5 rounded-xl border-2 text-left transition-colors cursor-pointer ${
                      formData.dietPreference === pref
                        ? 'bg-amber-100 border-slate-900 text-slate-900 font-black'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    {formData.dietPreference === pref ? '✓ ' : '○ '}
                    {pref}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-black text-slate-800 mb-1">
                Trial Delivery Date:
              </label>
              <input
                type="date"
                required
                value={formData.deliveryDate}
                onChange={(e) => setFormData({ ...formData, deliveryDate: e.target.value })}
                className="w-full bg-slate-50 border-2 border-slate-300 rounded-xl px-3.5 py-2 text-xs sm:text-sm font-bold focus:ring-2 focus:ring-[#ff5a1f] focus:outline-none"
              />
            </div>

            <div className="pt-3">
              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#ff5a1f] to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-black text-base shadow-pop-dark transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 border-2 border-slate-900"
              >
                <span>Confirm My Free Trial Desk Delivery (₹0)</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <p className="text-[11px] text-center text-slate-500 font-bold mt-2">
                🔒 No payment details required. Guaranteed desk arrival by 1:00 PM or meal is free!
              </p>
            </div>

          </form>
        ) : (
          <div className="p-6 sm:p-8 text-center space-y-5">
            <div className="w-16 h-16 rounded-3xl bg-amber-300 text-slate-950 flex items-center justify-center mx-auto text-3xl shadow-pop-dark border-2 border-slate-900">
              🎉
            </div>

            <div>
              <span className="bg-emerald-200 text-emerald-950 text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full border border-emerald-400">
                Booking Confirmed • Reference #{bookingId}
              </span>
              <h4 className="text-2xl font-black text-slate-900 mt-2">
                Shukriya, {formData.fullName || 'Corporate Friend'}!
              </h4>
              <p className="text-sm text-slate-600 font-medium max-w-md mx-auto mt-1">
                Your first free home-cooked lunch dabba is scheduled for <strong>{formData.deliveryDate}</strong> to your desk at <strong>{formData.companyName || formData.techParkOrArea}</strong>.
              </p>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border-2 border-slate-200 text-left text-xs space-y-1.5 max-w-md mx-auto font-bold">
              <div className="flex justify-between">
                <span className="text-slate-500">Delivery Zone:</span>
                <span className="text-slate-900">{formData.city}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Desk Address:</span>
                <span className="text-slate-900">{formData.towerFloorDesk || 'Main Reception'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Diet Type:</span>
                <span className="text-slate-900">{formData.dietPreference}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Dispatch Timing:</span>
                <span className="text-emerald-700">Desk arrival sharp before 1:00 PM</span>
              </div>
              <div className="flex justify-between border-t-2 border-slate-200 pt-1.5">
                <span className="text-slate-500">Amount Payable:</span>
                <span className="text-emerald-600 font-black">₹0 (Free Trial Promotion)</span>
              </div>
            </div>

            <div className="bg-emerald-50 border-2 border-emerald-300 p-3 rounded-2xl text-xs text-emerald-950 font-bold">
              📲 Our kitchen rider will WhatsApp you at <strong>{formData.phone || '+91 98110 34221'}</strong> when leaving the kitchen at 12:15 PM!
            </div>

            <button
              onClick={onClose}
              className="px-8 py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-black text-sm shadow-pop-dark border-2 border-slate-900 cursor-pointer"
            >
              Done / Return to Website
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
