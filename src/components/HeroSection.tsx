import React from 'react';
import { AFFILIATE_LINK } from '../types';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* 1. White Product Showcase Stage (Exact match to the uploaded screenshot) */}
      <div className="relative bg-white pt-6 sm:pt-10 pb-0 px-4 sm:px-6 overflow-hidden">
        <div className="max-w-5xl mx-auto relative flex items-end justify-center min-h-[320px] sm:min-h-[380px] md:min-h-[440px]">
          
          {/* Left Dot Grid: Exact 6 columns x 4 rows, placed mid-left */}
          <div className="hidden sm:grid grid-cols-6 gap-3 sm:gap-4 absolute left-2 md:left-8 lg:left-12 top-[60%] -translate-y-1/2 select-none pointer-events-none opacity-65">
            {Array.from({ length: 24 }).map((_, i) => (
              <span
                key={`dot-left-${i}`}
                className="w-1.5 h-1.5 rounded-full bg-[#7faebb]"
              />
            ))}
          </div>

          {/* Right Top Dot Grid: Exact 6 columns x 4 rows, placed upper-right */}
          <div className="hidden sm:grid grid-cols-6 gap-3 sm:gap-4 absolute right-4 md:right-10 lg:right-16 top-6 sm:top-8 select-none pointer-events-none opacity-65 z-10">
            {Array.from({ length: 24 }).map((_, i) => (
              <span
                key={`dot-right-${i}`}
                className="w-1.5 h-1.5 rounded-full bg-[#7faebb]"
              />
            ))}
          </div>

          {/* Right Large Mars Male Symbol (♂) Watermark */}
          <div className="absolute right-2 sm:right-8 md:right-16 top-1/2 -translate-y-1/2 select-none pointer-events-none opacity-40 z-0">
            <svg
              className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 text-[#8ec5d6]"
              viewBox="0 0 100 100"
              fill="none"
              stroke="currentColor"
              strokeWidth="5"
            >
              <circle cx="40" cy="60" r="26" strokeWidth="5.5" />
              <path d="M58 42 L88 12" strokeLinecap="round" strokeWidth="6" />
              <path d="M64 12 H88 V36" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6" />
            </svg>
          </div>

          {/* Product Packshot: Cobalt Bottle on Left + Angled White Box on Right */}
          <div className="relative z-20 flex items-end justify-center w-full max-w-xl mx-auto">
            <img
              src="/erisil_hero_product.png"
              alt="Erisil Plus Supplement Bottle and Packaging Box"
              className="max-h-72 sm:max-h-88 md:max-h-[420px] w-auto object-contain"
              loading="eager"
              referrerPolicy="no-referrer"
            />
          </div>

        </div>
      </div>

      {/* 2. Deep Midnight Navy Banner (Exact match to the uploaded screenshot) */}
      <div className="bg-[#021b3e] text-white pt-12 sm:pt-16 pb-16 sm:pb-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          
          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.2] mb-5">
            Unlock Your Peak Performance<br />with Erisil Plus
          </h1>

          {/* Subtitle / Description */}
          <p className="text-slate-200 text-sm sm:text-base md:text-lg max-w-2xl font-normal leading-relaxed mb-9">
            The ultimate multi-ingredient natural supplement designed for sexually active men to support erection, vitality, and male fertility.
          </p>

          {/* Order Now Button linked directly to Affiliate Offer */}
          <a
            href={AFFILIATE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            id="hero-order-now-btn"
            className="inline-flex items-center justify-center px-12 py-4 rounded-full bg-[#189cb3] hover:bg-[#14879b] text-white text-base sm:text-lg font-bold transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#189cb3]/20 cursor-pointer"
          >
            Order Now
          </a>

        </div>
      </div>
    </section>
  );
};
