import React from 'react';
import { AFFILIATE_LINK } from '../types';

export const FooterCTA: React.FC = () => {
  return (
    <footer className="bg-[#021b3e] text-white py-16 sm:py-20 px-4 sm:px-6" id="faq">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center" id="order">
        
        {/* Main CTA Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-3">
          Ready to Boost Your Confidence?
        </h2>

        {/* Subtitle */}
        <p className="text-slate-200 text-sm sm:text-base md:text-lg max-w-xl font-normal leading-relaxed mb-8">
          Join thousands of men who trust Erisil Plus for their intimate health.
        </p>

        {/* Claim Your Discount Button linking to Affiliate URL */}
        <a
          href={AFFILIATE_LINK}
          target="_blank"
          rel="noopener noreferrer"
          id="claim-discount-btn"
          className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-[#189cb3] hover:bg-[#14879b] text-white text-base sm:text-lg font-bold transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#189cb3]/25 cursor-pointer"
        >
          Claim Your Discount Today
        </a>

      </div>
    </footer>
  );
};
