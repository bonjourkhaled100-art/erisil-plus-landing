import React from 'react';

export const FeaturesSection: React.FC = () => {
  return (
    <section className="bg-white py-16 sm:py-20 px-4 sm:px-6" id="how-it-works">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#071836] text-center mb-12">
          Why Choose Erisil Plus?
        </h2>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Induce & Maintain Erection */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 flex flex-col items-start shadow-xs hover:shadow-md transition-shadow">
            <div className="w-12 h-12 flex items-center justify-center text-[#189cb3] mb-5">
              {/* Mars Male Symbol with Arrow */}
              <svg className="w-9 h-9" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="17" cy="23" r="11" />
                <path d="M25 15 L35 5" />
                <path d="M26 5 H35 V14" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-[#071836] leading-tight mb-2">
              Induce & Main-<br />tain Erection
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Helps you perform with confidence when it matters most.
            </p>
          </div>

          {/* Card 2: Supports Male Fertility */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 flex flex-col items-start shadow-xs hover:shadow-md transition-shadow">
            <div className="w-12 h-12 flex items-center justify-center text-[#189cb3] mb-5">
              {/* Male Symbol with Cross / Caduceus / Health fertility plus */}
              <svg className="w-9 h-9" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="17" cy="23" r="11" />
                <path d="M25 15 L35 5" />
                <path d="M26 5 H35 V14" />
                <path d="M17 18 V28" strokeWidth="2.5" />
                <path d="M12 23 H22" strokeWidth="2.5" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-[#071836] leading-tight mb-2">
              Supports Male<br />Fertility
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Formulated to optimize reproductive functions.
            </p>
          </div>

          {/* Card 3: Prostate Health */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 flex flex-col items-start shadow-xs hover:shadow-md transition-shadow">
            <div className="w-12 h-12 flex items-center justify-center text-[#189cb3] mb-5">
              {/* Prostate Anatomical Silhouette Icon */}
              <svg className="w-9 h-9" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 7 V33" strokeDasharray="1 1" />
                <path d="M20 10 C13 10, 7 14, 7 21 C7 27, 13 32, 20 33 C27 32, 33 27, 33 21 C33 14, 27 10, 20 10 Z" />
                <circle cx="20" cy="21" r="3.5" fill="currentColor" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-[#071836] leading-tight mb-2">
              Prostate Health
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Supports the proper functioning of the prostate for long-term vitality.
            </p>
          </div>

          {/* Card 4: 100% Natural Formula */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 flex flex-col items-start shadow-xs hover:shadow-md transition-shadow">
            <div className="w-12 h-12 flex items-center justify-center text-[#189cb3] mb-5">
              {/* Botanical Twin Leaves Icon */}
              <svg className="w-9 h-9" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 31 C9 31, 11 20, 22 17 C22 17, 24 28, 13 31 Z" />
                <path d="M13 31 C13 31, 23 27, 31 10 C31 10, 31 23, 22 28 C18 30.5, 14 31, 9 31" />
                <path d="M9 31 L6 34" strokeWidth="2.5" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-[#071836] leading-tight mb-2">
              100% Natural<br />Formula
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Safe blend of plant extracts, amino acids, vitamins, and minerals.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
