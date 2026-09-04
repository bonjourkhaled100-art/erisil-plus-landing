import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { AFFILIATE_LINK } from '../types';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-slate-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 h-20 flex items-center justify-between">
        {/* Brand Logo strictly as in image: ERISIL in cyan, PLUS in navy */}
        <a href="#" className="flex items-center select-none" id="brand-logo">
          <span className="text-2xl sm:text-[26px] font-black tracking-tight text-[#189cb3]">
            ERISIL
          </span>
          <span className="text-2xl sm:text-[26px] font-black tracking-tight text-[#071836] ml-1.5">
            PLUS
          </span>
        </a>

        {/* Desktop Navigation Links matching the image */}
        <nav className="hidden md:flex items-center space-x-8 lg:space-x-10">
          <a
            href="#how-it-works"
            className="text-[15px] font-semibold text-slate-800 hover:text-[#189cb3] transition-colors"
            id="nav-how-it-works"
          >
            How It Works
          </a>
          <a
            href="#ingredients"
            className="text-[15px] font-semibold text-slate-800 hover:text-[#189cb3] transition-colors"
            id="nav-ingredients"
          >
            Ingredients
          </a>
          <a
            href="#faq"
            className="text-[15px] font-semibold text-slate-800 hover:text-[#189cb3] transition-colors"
            id="nav-faq"
          >
            FAQ
          </a>
          <a
            href={AFFILIATE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-2.5 bg-[#071836] text-white text-[15px] font-semibold rounded-full hover:bg-slate-800 transition-colors shadow-xs"
            id="nav-contact-btn"
          >
            Contact
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-[#071836]"
            aria-label="Toggle menu"
            id="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-6 py-4 space-y-3">
          <a
            href="#how-it-works"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-semibold text-slate-800 hover:text-[#189cb3]"
          >
            How It Works
          </a>
          <a
            href="#ingredients"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-semibold text-slate-800 hover:text-[#189cb3]"
          >
            Ingredients
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-semibold text-slate-800 hover:text-[#189cb3]"
          >
            FAQ
          </a>
          <a
            href={AFFILIATE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="inline-block px-6 py-2.5 bg-[#071836] text-white text-sm font-semibold rounded-full hover:bg-slate-800"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
};
