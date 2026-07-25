import React, { useState, useEffect } from 'react';
import { ArrowUp, Linkedin, Instagram, Facebook, Youtube } from 'lucide-react';

const XIcon = () => (
  <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function Footer() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScrollButton = () => {
      setShowScroll(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScrollButton);
    return () => window.removeEventListener('scroll', handleScrollButton);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white pt-10 pb-36 px-4 sm:px-6 lg:px-8 relative select-none">
      <div className="max-w-7xl mx-auto">

        {/* Bottom Section: Policies, Copyright, Social Icons */}
        <div className="flex flex-col xl:flex-row justify-between items-center gap-8">

          {/* Left Side: Empty space / placeholder to balance the layout if needed, or simply left empty to let Center stay centered or justified */}
          <div className="hidden xl:block w-36"></div>

          {/* Center: Policies & Copyright */}
          <div className="flex flex-col items-center gap-2 text-center">
            <div className="flex flex-wrap justify-center gap-x-2 gap-y-1 text-[10px] font-bold text-gray-400 tracking-wider">
              <a href="#contact" className="hover:text-ossisto-blue transition-colors underline">TERMS OF USE</a>
              <span>|</span>
              <a href="#contact" className="hover:text-ossisto-blue transition-colors underline">PRIVACY POLICY</a>
              <span>|</span>
              <a href="#contact" className="hover:text-ossisto-blue transition-colors underline">BRAND POLICY</a>
            </div>

            <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">
              © 2026 - ALL RIGHTS RESERVED
            </div>
          </div>

          {/* Right: Social Media Channels */}
          <div className="flex items-center gap-4 justify-center">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-ossisto-blue transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-ossisto-blue transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-ossisto-blue transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-ossisto-blue transition-colors"
              aria-label="X"
            >
              <XIcon />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-ossisto-blue transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5" />
            </a>
          </div>

        </div>

      </div>



      {/* Floating Scroll to Top button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 bg-ossisto-blue always-blue-bg hover:bg-[#236CB1] text-white p-3 rounded-full shadow-lg hover:scale-105 active:scale-95 transition-all animate-fade-in"
          aria-label="Scroll back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

    </footer>
  );
}
