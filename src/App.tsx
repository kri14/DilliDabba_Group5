import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { IndianFusionTicker } from './components/IndianFusionTicker';
import { SpinTheThali } from './components/SpinTheThali';
import { StreakTracker } from './components/StreakTracker';
import { WeeklyMenu } from './components/WeeklyMenu';
import { Features } from './components/Features';
import { PricingSection } from './components/PricingSection';
import { HygieneShowcase } from './components/HygieneShowcase';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { FreeTrialModal } from './components/FreeTrialModal';
import { SubscriptionPlan } from './types';

export default function App() {
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false);
  const [activeCoupon, setActiveCoupon] = useState<string | undefined>(undefined);
  const [selectedPlan, setSelectedPlan] = useState<SubscriptionPlan | null>(null);

  const handleOpenTrial = (coupon?: string, plan?: SubscriptionPlan | null) => {
    if (coupon) setActiveCoupon(coupon);
    if (plan !== undefined) setSelectedPlan(plan);
    setIsTrialModalOpen(true);
  };

  const handleClaimDiscount = (code: string) => {
    setActiveCoupon(code);
    setIsTrialModalOpen(true);
  };

  const handleSelectPlan = (plan: SubscriptionPlan) => {
    setSelectedPlan(plan);
    setIsTrialModalOpen(true);
  };

  const handleScrollToSpin = () => {
    const el = document.getElementById('spin');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#faf5ff] text-slate-900 flex flex-col font-sans selection:bg-[#ff5a1f] selection:text-white">
      {/* Navbar with Sticky guarantee and quick links */}
      <Navbar
        onOpenTrialModal={() => handleOpenTrial()}
        onOpenWhatsApp={() => setIsWhatsAppOpen(true)}
      />

      <main className="flex-1">
        {/* 1. HERO SECTION (Includes 3D Interactive Tiffin Dabba) */}
        <Hero
          onOpenTrialModal={() => handleOpenTrial()}
          onScrollToSpin={handleScrollToSpin}
        />

        {/* Indian Fusion Marquee Ticker */}
        <IndianFusionTicker />

        {/* 2. INTERACTIVE GAMIFICATION SECTION */}
        <section className="py-12 bg-amber-50/40 border-b-2 border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Spin the Thali Widget (Wheel spinning to First-Week Discount!) */}
            <SpinTheThali onClaimDiscount={handleClaimDiscount} />

            {/* Dynamic Customer Dashboard Simulation (5-Day Lunch Streak Tracker) */}
            <StreakTracker
              onOpenTrialModal={() => handleOpenTrial()}
              onOpenWhatsApp={() => setIsWhatsAppOpen(true)}
            />
          </div>
        </section>

        {/* 3. MENU & FLEXIBILITY SECTION */}
        {/* Weekly Menu Tab Slider */}
        <WeeklyMenu onOpenTrialModal={() => handleOpenTrial()} />

        {/* Feature Cards emphasizing core differentiators */}
        <Features onOpenTrialModal={() => handleOpenTrial()} />

        {/* Pricing Section with exact H2: Affordable Monthly Tiffin Subscription Noida & Gurugram */}
        <PricingSection
          onSelectPlan={handleSelectPlan}
          onOpenTrialModal={() => handleOpenTrial()}
        />

        {/* High-quality Kitchen Hygiene Showcase Photos & Certifications */}
        <HygieneShowcase />

        {/* 4. AEO-OPTIMIZED FAQ SECTION (Exact Q1, Q2, Q3 + Two plain sentences) */}
        <FaqSection onOpenWhatsApp={() => setIsWhatsAppOpen(true)} />
      </main>

      {/* 5. PERSISTENT WIDGETS & FOOTER */}
      <Footer
        onOpenTrialModal={() => handleOpenTrial()}
        onOpenWhatsApp={() => setIsWhatsAppOpen(true)}
      />

      {/* Floating WhatsApp chat widget labeled "Pause or Customise via WhatsApp" */}
      <WhatsAppWidget
        isOpen={isWhatsAppOpen}
        onToggle={() => setIsWhatsAppOpen(!isWhatsAppOpen)}
        onClose={() => setIsWhatsAppOpen(false)}
      />

      {/* Free Trial / Plan Booking Modal */}
      <FreeTrialModal
        isOpen={isTrialModalOpen}
        onClose={() => {
          setIsTrialModalOpen(false);
          setSelectedPlan(null);
        }}
        initialCoupon={activeCoupon}
        selectedPlan={selectedPlan}
      />
    </div>
  );
}
