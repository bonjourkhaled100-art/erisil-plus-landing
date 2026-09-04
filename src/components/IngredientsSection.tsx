import React from 'react';

export const IngredientsSection: React.FC = () => {
  return (
    <section className="bg-white pb-20 px-4 sm:px-6" id="ingredients">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading above the card */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#071836] text-center mb-10">
          Powered by 11 Unique Natural Ingredients
        </h2>

        {/* Soft Blue Ingredients Feature Box */}
        <div className="bg-[#edf5fa] border border-[#d6e7f2] rounded-3xl p-8 sm:p-12 md:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Heading & Descriptive Copy */}
            <div className="lg:col-span-6 space-y-4">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#071836] leading-tight">
                Powered by 11 Unique<br />Natural Ingredients
              </h3>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed max-w-lg">
                A synergistic blend consisting of powerful plant extracts, essential amino acids, vitamins, and minerals combined together to preserve and enhance male sexual function.
              </p>
            </div>

            {/* Right Column: 8 Botanical Line Icons (4x2 grid) */}
            <div className="lg:col-span-6">
              <div className="grid grid-cols-4 gap-4 sm:gap-6 items-center justify-items-center">
                
                {/* 1. Mortar with Pestle & Leaf */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center text-[#189cb3]">
                  <svg className="w-10 h-10 sm:w-12 sm:h-12" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8 22 C8 32, 14 36, 22 36 C30 36, 36 32, 36 22 H8 Z" />
                    <path d="M14 36 H30" />
                    <path d="M28 8 L20 22" strokeWidth="2.5" />
                    <path d="M24 14 C27 12, 31 13, 31 16 C31 18, 28 20, 24 19" />
                  </svg>
                </div>

                {/* 2. Sprout with 3 Round Leaves */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center text-[#189cb3]">
                  <svg className="w-10 h-10 sm:w-12 sm:h-12" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 36 V16" />
                    <path d="M22 16 C22 11, 26 8, 31 8 C32 13, 27 16, 22 16 Z" />
                    <path d="M22 24 C17 24, 13 21, 13 16 C18 16, 22 19, 22 24 Z" />
                    <path d="M22 28 C27 28, 31 25, 31 20 C26 20, 22 23, 22 28 Z" />
                  </svg>
                </div>

                {/* 3. Cluster of Berries & Leaves */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center text-[#189cb3]">
                  <svg className="w-10 h-10 sm:w-12 sm:h-12" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="18" cy="24" r="5" />
                    <circle cx="26" cy="24" r="5" />
                    <circle cx="22" cy="17" r="5" />
                    <path d="M22 12 C22 8, 27 6, 31 6" />
                    <path d="M26 8 C29 9, 32 12, 31 15" />
                  </svg>
                </div>

                {/* 4. Ginseng / Botanical Root */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center text-[#189cb3]">
                  <svg className="w-10 h-10 sm:w-12 sm:h-12" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 8 V16" />
                    <path d="M19 16 C16 22, 17 28, 14 36" />
                    <path d="M25 16 C28 22, 27 28, 30 36" />
                    <path d="M22 16 V32" />
                    <path d="M17 10 C14 8, 11 11, 14 14" />
                    <path d="M27 10 C30 8, 33 11, 30 14" />
                  </svg>
                </div>

                {/* 5. Potted / Cup Sprout */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center text-[#189cb3]">
                  <svg className="w-10 h-10 sm:w-12 sm:h-12" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 26 L15 36 H29 L32 26 H12 Z" />
                    <path d="M10 26 H34" />
                    <path d="M22 26 V14" />
                    <path d="M22 14 C17 14, 15 10, 15 7 C20 7, 22 10, 22 14 Z" />
                    <path d="M22 18 C26 18, 29 15, 29 12 C25 12, 23 15, 22 18 Z" />
                  </svg>
                </div>

                {/* 6. Saffron / Chamomile Flower */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center text-[#189cb3]">
                  <svg className="w-10 h-10 sm:w-12 sm:h-12" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="22" cy="22" r="4.5" />
                    <circle cx="22" cy="11" r="3.5" />
                    <circle cx="22" cy="33" r="3.5" />
                    <circle cx="11" cy="22" r="3.5" />
                    <circle cx="33" cy="22" r="3.5" />
                    <circle cx="14" cy="14" r="3.5" />
                    <circle cx="30" cy="14" r="3.5" />
                    <circle cx="14" cy="30" r="3.5" />
                    <circle cx="30" cy="30" r="3.5" />
                  </svg>
                </div>

                {/* 7. Twin Leaves Branch */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center text-[#189cb3]">
                  <svg className="w-10 h-10 sm:w-12 sm:h-12" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 36 C18 32, 22 26, 26 18" />
                    <path d="M26 18 C26 10, 34 8, 35 8 C35 15, 29 18, 26 18 Z" />
                    <path d="M18 28 C14 26, 11 20, 14 16 C18 17, 19 22, 18 28 Z" />
                  </svg>
                </div>

                {/* 8. Fern Branch with Leaflets */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center text-[#189cb3]">
                  <svg className="w-10 h-10 sm:w-12 sm:h-12" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 36 C16 30, 24 20, 32 8" />
                    <path d="M18 26 C15 24, 15 20, 19 20" />
                    <path d="M21 23 C24 20, 27 21, 26 25" />
                    <path d="M23 18 C21 16, 21 13, 25 13" />
                    <path d="M27 15 C30 13, 32 14, 31 17" />
                  </svg>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
