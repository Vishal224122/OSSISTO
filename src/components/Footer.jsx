import React, { useState, useEffect } from 'react';
import { ArrowUp, Mail, CheckCircle, Cookie, Linkedin, Instagram, Facebook, Youtube } from 'lucide-react';

const XIcon = () => (
  <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function Footer() {
  const [email, setEmail] = useState('');
  const [captchaVal, setCaptchaVal] = useState('');
  const [captcha, setCaptcha] = useState({ num1: 0, num2: 0, result: 0 });
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');
  const [showScroll, setShowScroll] = useState(false);

  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 6); // 0 to 5
    const num2 = Math.floor(Math.random() * 6); // 0 to 5
    setCaptcha({ num1, num2, result: num1 + num2 });
  };

  useEffect(() => {
    generateCaptcha();

    const handleScrollButton = () => {
      setShowScroll(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScrollButton);
    return () => window.removeEventListener('scroll', handleScrollButton);
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      setError('Enter a valid email address');
      return;
    }
    if (parseInt(captchaVal) !== captcha.result) {
      setError('Captcha solver answer is incorrect');
      generateCaptcha();
      return;
    }
    setError('');
    setSubscribed(true);
    setEmail('');
    setCaptchaVal('');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white pt-16 pb-28 px-4 sm:px-6 lg:px-8 relative select-none">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Top Section: Newsletter Subscribe & Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* Left Column: Newsletter Subscribe */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-2xl sm:text-3xl font-black text-black tracking-tight">
              Subscribe to our Newsletter
            </h3>
            
            {subscribed ? (
              <div className="flex items-center gap-2 text-xoriant-green bg-green-50 border border-green-200 py-3 px-6 rounded-md text-xs font-bold uppercase tracking-wider animate-fade-in w-fit">
                <CheckCircle className="w-4 h-4" /> Subscription Activated Successfully
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-4">
                {/* Email input field wrapper */}
                <div className="flex items-center bg-white border border-gray-300 rounded-md p-1.5 w-full max-w-md shadow-sm focus-within:border-xoriant-green focus-within:ring-1 focus-within:ring-xoriant-green transition-all">
                  <input 
                    type="email" 
                    placeholder="Enter Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-transparent px-3 py-2 text-sm text-black outline-none placeholder-gray-400"
                    required
                  />
                  <button 
                    type="submit"
                    className="bg-[#00b23b] hover:bg-[#009632] text-white font-extrabold text-xs py-2.5 px-6 rounded flex items-center gap-1.5 shrink-0 transition-colors uppercase tracking-wider"
                  >
                    Subscribe <span className="text-[10px]">▶</span>
                  </button>
                </div>

                {/* Math Solver Block */}
                <div className="flex items-center gap-2 mt-3">
                  <div className="flex items-stretch rounded border border-gray-300 overflow-hidden w-fit h-9 bg-white shadow-sm">
                    <span className="bg-black text-white px-3 flex items-center text-xs font-bold select-none font-mono">
                      {captcha.num1} + {captcha.num2} =
                    </span>
                    <input 
                      type="number" 
                      value={captchaVal}
                      onChange={(e) => setCaptchaVal(e.target.value)}
                      placeholder=""
                      className="w-16 text-center text-sm font-semibold text-black bg-white focus:outline-none"
                      required
                    />
                  </div>
                </div>

                {error && <p className="text-xs text-red-500 font-semibold">{error}</p>}
              </form>
            )}
          </div>

          {/* Right Columns: Services & Quick Links */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-8 lg:gap-12">
            
            {/* Column 1: Services */}
            <div className="space-y-4">
              <h4 className="text-sm font-extrabold text-black uppercase tracking-wider">
                Services
              </h4>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="#dream-details" 
                    className="text-sm text-zinc-500 hover:text-xoriant-green transition-colors font-semibold"
                  >
                    Digital
                  </a>
                </li>
                <li>
                  <a 
                    href="#dream-details" 
                    className="text-sm text-zinc-500 hover:text-xoriant-green transition-colors font-semibold"
                  >
                    Cloud
                  </a>
                </li>
                <li>
                  <a 
                    href="#dream-details" 
                    className="text-sm text-zinc-500 hover:text-xoriant-green transition-colors font-semibold"
                  >
                    Data
                  </a>
                </li>
                <li>
                  <a 
                    href="#dream-details" 
                    className="text-sm text-zinc-500 hover:text-xoriant-green transition-colors font-semibold"
                  >
                    Security
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2: Quick Links */}
            <div className="space-y-4">
              <h4 className="text-sm font-extrabold text-black uppercase tracking-wider">
                Quick Links
              </h4>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="#dream-details" 
                    className="text-sm text-zinc-500 hover:text-xoriant-green transition-colors font-semibold"
                  >
                    Industries
                  </a>
                </li>
                <li>
                  <a 
                    href="#about-xoriant" 
                    className="text-sm text-zinc-500 hover:text-xoriant-green transition-colors font-semibold"
                  >
                    Company
                  </a>
                </li>
                <li>
                  <a 
                    href="#careers" 
                    className="text-sm text-zinc-500 hover:text-xoriant-green transition-colors font-semibold"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a 
                    href="#contact" 
                    className="text-sm text-zinc-500 hover:text-xoriant-green transition-colors font-semibold"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom Section: Policies, Copyright, Social Icons & Certifications */}
        <div className="flex flex-col xl:flex-row justify-between items-center gap-8 pt-8 border-t border-gray-200 mt-12">
          
          {/* Left Side: Compliance Certifications */}
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            {/* Certification Badges */}
            <div className="flex items-center gap-2">
              <div className="h-9 flex items-center justify-center p-1">
                <img 
                  src="https://www.xoriant.com/sites/default/files/styles/webp/public/Bodhi-Images/ISO.png.webp?itok=yiVuHCzM" 
                  alt="ISO 27001 Certification" 
                  className="max-h-full object-contain filter contrast-125" 
                />
              </div>
              <div className="h-9 flex items-center justify-center p-1">
                <img 
                  src="https://www.xoriant.com/sites/default/files/styles/webp/public/Bodhi-Images/SOC.png.webp?itok=hII8CyXk" 
                  alt="SOC2 Compliance" 
                  className="max-h-full object-contain filter contrast-125" 
                />
              </div>
              <div className="h-9 flex items-center justify-center p-1">
                <img 
                  src="https://www.xoriant.com/sites/default/files/styles/webp/public/Bodhi-Images/PSI.png.webp?itok=XFTiaMiT" 
                  alt="PCI DSS Certification" 
                  className="max-h-full object-contain filter contrast-125" 
                />
              </div>
              <div className="h-9 flex items-center justify-center p-1">
                <img 
                  src="https://www.xoriant.com/sites/default/files/styles/webp/public/Bodhi-Images/CDP.png.webp?itok=gI9-sgy-" 
                  alt="CDP Rating" 
                  className="max-h-full object-contain filter contrast-125" 
                />
              </div>
            </div>
          </div>

          {/* Center: Policies & Copyright */}
          <div className="flex flex-col items-center gap-2 text-center">
            <div className="flex flex-wrap justify-center gap-x-2 gap-y-1 text-[10px] font-bold text-gray-400 tracking-wider">
              <a href="#contact" className="hover:text-xoriant-green transition-colors underline">TERMS OF USE</a>
              <span>|</span>
              <a href="#contact" className="hover:text-xoriant-green transition-colors underline">COOKIE POLICY</a>
              <span>|</span>
              <a href="#contact" className="hover:text-xoriant-green transition-colors underline">PRIVACY POLICY</a>
              <span>|</span>
              <a href="#contact" className="hover:text-xoriant-green transition-colors underline">SITEMAP</a>
              <span>|</span>
              <a href="#contact" className="hover:text-xoriant-green transition-colors underline">ETHICS</a>
              <span>|</span>
              <a href="#contact" className="hover:text-xoriant-green transition-colors underline">BRAND POLICY</a>
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
              className="text-black hover:text-xoriant-green transition-colors" 
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-black hover:text-xoriant-green transition-colors" 
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-black hover:text-xoriant-green transition-colors" 
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-black hover:text-xoriant-green transition-colors" 
              aria-label="X"
            >
              <XIcon />
            </a>
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-black hover:text-xoriant-green transition-colors" 
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5" />
            </a>
          </div>

        </div>

      </div>

      {/* Fixed Cookie settings button on bottom left corner */}
      <button 
        onClick={() => alert("Cookie settings saved!")} 
        className="fixed bottom-6 left-6 z-40 bg-[#00b23b] hover:bg-[#009632] text-white p-2.5 rounded-full hover:scale-105 active:scale-95 transition-all shadow-lg flex items-center justify-center w-10 h-10"
        aria-label="Cookie Settings"
      >
        <Cookie className="w-5 h-5" />
      </button>

      {/* Floating Scroll to Top button */}
      {showScroll && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 bg-xoriant-green hover:bg-[#009632] text-white p-3 rounded-full shadow-lg hover:scale-105 active:scale-95 transition-all animate-fade-in"
          aria-label="Scroll back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

    </footer>
  );
}
