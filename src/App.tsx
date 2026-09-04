import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FeaturesSection } from './components/FeaturesSection';
import { IngredientsSection } from './components/IngredientsSection';
import { FooterCTA } from './components/FooterCTA';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans antialiased selection:bg-[#189cb3] selection:text-white">
      {/* 1. Header Navigation Bar */}
      <Navbar />

      {/* Main Content Divided into Semantic Sections */}
      <main className="flex-1">
        {/* 2. Hero Section: Product Presentation & Order Call-to-Action */}
        <HeroSection />

        {/* 3. Features Section: Why Choose Erisil Plus? (4 Benefit Cards) */}
        <FeaturesSection />

        {/* 4. Ingredients Section: Powered by 11 Unique Natural Ingredients */}
        <IngredientsSection />
      </main>

      {/* 5. Footer / Final CTA Section: Ready to Boost Your Confidence? */}
      <FooterCTA />
    </div>
  );
}
