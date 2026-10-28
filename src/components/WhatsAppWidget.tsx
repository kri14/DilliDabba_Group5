import React, { useState } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';

interface WhatsAppWidgetProps {
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}

export const WhatsAppWidget: React.FC<WhatsAppWidgetProps> = ({ isOpen, onToggle, onClose }) => {
  const [customText, setCustomText] = useState('');
  const [simulatedMessageSent, setSimulatedMessageSent] = useState(false);

  const quickActions = [
    { label: '⏸️ Pause tomorrow\'s lunch (WFH)', text: 'Hi Dilli Dabba, I want to PAUSE my lunch for tomorrow. Please carry forward my credit!' },
    { label: '🥗 Switch to Jain / No-Onion meal', text: 'Hi Dilli Dabba, please make tomorrow\'s thali Jain (no onion, no garlic).' },
    { label: '📍 Change desk / tower location', text: 'Hi Dilli Dabba, I am moving to another floor/tower. Updating my desk delivery details.' },
    { label: '🎁 Claim Free Trial / Promo code', text: 'Hi! I want to start my Free Trial meal in Gurgaon/Noida office.' }
  ];

  const handleSend = (textToSend: string) => {
    const encoded = encodeURIComponent(textToSend);
    const whatsappUrl = `https://wa.me/919811034221?text=${encoded}`;
    
    setSimulatedMessageSent(true);
    setTimeout(() => {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }, 400);

    setTimeout(() => {
      setSimulatedMessageSent(false);
      setCustomText('');
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      
      {/* Floating Popover Drawer when open */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 rounded-3xl bg-white shadow-2xl border-4 border-slate-900 shadow-pop-dark overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          
          <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white p-4 flex items-center justify-between border-b-2 border-slate-900">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center font-bold text-lg relative border border-white/30">
                <MessageSquare className="w-5 h-5 text-white" />
                <span className="w-3 h-3 bg-emerald-300 rounded-full absolute bottom-0 right-0 border-2 border-emerald-700" />
              </div>
              <div>
                <p className="font-black text-sm">
                  Dilli Dabba WhatsApp Concierge
                </p>
                <p className="text-[11px] text-emerald-100 flex items-center gap-1 font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-300" />
                  <span>Online • Instant replies before 10 AM</span>
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1 rounded-full hover:bg-white/20 text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-4 bg-slate-50 space-y-3 max-h-[360px] overflow-y-auto">
            <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-xs border-2 border-slate-200 text-xs text-slate-800 space-y-1">
              <p className="font-black text-[#ff5a1f]">Dilli Dabba Kitchen Captain:</p>
              <p className="font-medium">
                Namaste! 🙏 Aaj ya kal ke dabba me koi change chahiye? WFH hai toh pause karo, ya Jain meal request bhejo!
              </p>
              <p className="text-[10px] text-slate-400 text-right">Just now</p>
            </div>

            {simulatedMessageSent ? (
              <div className="bg-emerald-100 border border-emerald-300 text-emerald-900 p-3 rounded-xl text-center text-xs font-bold space-y-1">
                <p className="text-emerald-700 text-sm">✓ Opening WhatsApp Chat...</p>
                <p className="text-[11px]">Your request has been prepared!</p>
              </div>
            ) : (
              <>
                <p className="text-[11px] uppercase font-black text-slate-600 tracking-wider">
                  Quick Actions (1 Tap Tap):
                </p>

                <div className="space-y-1.5">
                  {quickActions.map((qa, i) => (
                    <button
                      key={i}
                      onClick={() => handleSend(qa.text)}
                      className="w-full text-left p-2.5 rounded-xl bg-white hover:bg-emerald-50 hover:border-emerald-400 border-2 border-slate-200 text-xs font-bold text-slate-800 transition-all flex items-center justify-between group cursor-pointer"
                    >
                      <span>{qa.label}</span>
                      <Send className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-600 transition-colors" />
                    </button>
                  ))}
                </div>

                <div className="pt-2">
                  <p className="text-[11px] uppercase font-black text-slate-600 tracking-wider mb-1">
                    Or type custom message:
                  </p>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="e.g. Please send less spicy sabzi today..."
                      value={customText}
                      onChange={(e) => setCustomText(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && customText.trim()) {
                          handleSend(customText);
                        }
                      }}
                      className="flex-1 bg-white border-2 border-slate-300 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-emerald-500 font-medium"
                    />
                    <button
                      onClick={() => {
                        if (customText.trim()) handleSend(customText);
                      }}
                      className="bg-emerald-600 hover:bg-emerald-700 text-white px-3.5 py-2 rounded-xl text-xs font-bold flex items-center justify-center shrink-0 cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </>
            )}

            <div className="text-[10px] text-center text-slate-400 font-bold pt-1">
              Guaranteed cutoff: 10:00 AM on delivery day
            </div>
          </div>

        </div>
      )}

      {/* Floating Button with EXACT LABEL */}
      <button
        onClick={onToggle}
        className="group flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-3.5 rounded-full shadow-pop-dark transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer border-2 border-slate-900"
        aria-label="Pause or Customise via WhatsApp"
      >
        <div className="w-6 h-6 rounded-full bg-white text-emerald-600 flex items-center justify-center font-bold">
          <MessageSquare className="w-4 h-4 fill-emerald-600" />
        </div>
        <span className="font-black text-xs sm:text-sm tracking-wide">
          Pause or Customise via WhatsApp
        </span>
      </button>

    </div>
  );
};
