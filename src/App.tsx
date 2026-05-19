import React from 'react';
import { StickyHeader } from './components/layout/StickyHeader';
import { StickyMobileCTA } from './components/layout/StickyMobileCTA';
import { Hero } from './components/sections/Hero';
import { PainHook } from './components/sections/PainHook';
import { IncomeTier } from './components/sections/IncomeTier';
import { IncomeStreams } from './components/sections/IncomeStreams';
import { IncomeCalculator } from './components/sections/IncomeCalculator';
import { ComparisonTable } from './components/sections/ComparisonTable';
import { Roadmap } from './components/sections/Roadmap';
import { LiveActivityFeed } from './components/sections/LiveActivityFeed';
import { UrgencyCohort } from './components/sections/UrgencyCohort';
import { Testimonials } from './components/sections/Testimonials';
import { AboutSakuna } from './components/sections/AboutSakuna';
import { FAQ } from './components/sections/FAQ';
import { ContactFooter } from './components/sections/ContactFooter';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F9F6F0] flex flex-col font-sans text-navy-900 selection:bg-gold-500/30">
      {/* Sticky Navigation & CTAs */}
      <StickyHeader />
      <StickyMobileCTA />

      {/* Main Content Sections inside main tag for semantics */}
      <main className="flex-1 w-full">
        {/* 1. Hero / Main Banner */}
        <Hero />
        
        {/* 2. Empathize with user problems */}
        <PainHook />

        {/* 3. Income levels */}
        <IncomeTier />

        {/* 4. How to make money */}
        <IncomeStreams />

        {/* 5. Interactive Calculator */}
        <IncomeCalculator />

        {/* 6. Standard job vs This path */}
        <ComparisonTable />

        {/* 7. 90-day plan */}
        <Roadmap />

        {/* 8. Recent activities / Social proof */}
        <LiveActivityFeed />

        {/* 9. Scarcity & Urgency */}
        <UrgencyCohort />

        {/* 10. Success stories */}
        <Testimonials />

        {/* 11. Story of Sakuna */}
        <AboutSakuna />

        {/* 12. Questions and Answers */}
        <FAQ />
      </main>

      {/* 13. Footer & Legal */}
      <ContactFooter />
    </div>
  );
}
