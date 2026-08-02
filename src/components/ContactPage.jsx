import React, { useEffect } from 'react';
import Footer from './Footer';

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-slate-950 min-h-screen text-white font-sans select-none flex flex-col justify-between pt-24 sm:pt-32">
      
      {/* Centered Minimal Contact Info Matching Screenshot Exactly */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12 text-center max-w-xl mx-auto w-full">
        
        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-10 sm:mb-14 tracking-tight">
          Contact us
        </h1>

        {/* Details Container */}
        <div className="space-y-6 sm:space-y-8 text-sm sm:text-base md:text-lg font-medium text-left">
          
          {/* Address Line */}
          <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-3 leading-relaxed">
            <span className="font-bold text-white shrink-0">Address:</span>
            <span className="text-slate-300 font-normal">
              Forum Wework, Cybercity,<br />
              DLF Ph III, Gurugram – 122002
            </span>
          </div>

          {/* Email Line */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 pt-2">
            <span className="font-bold text-white shrink-0">Email:</span>
            <a 
              href="mailto:connect@ossistoglobal.com" 
              className="text-slate-300 hover:text-ossisto-blue transition-colors font-normal underline-offset-4 hover:underline"
            >
              connect@ossistoglobal.com
            </a>
          </div>

        </div>

      </div>

      {/* Clean Dark Footer */}
      <Footer />

    </div>
  );
}
