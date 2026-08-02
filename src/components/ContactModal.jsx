import React from 'react';
import { X } from 'lucide-react';

export default function ContactModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Center Modal / Slide Drawer matching Screenshot 2 */}
      <div className="relative w-full max-w-md bg-black border border-slate-800 rounded-2xl p-8 sm:p-10 shadow-2xl z-10 text-center flex flex-col items-center justify-center min-h-[360px] animate-fade-in-up">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 rounded-full hover:bg-slate-900 transition-colors"
          aria-label="Close contact modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 tracking-tight">
          Contact us
        </h2>

        {/* Details Container matching Screenshot 2 */}
        <div className="space-y-6 text-sm sm:text-base font-medium text-left w-full max-w-xs mx-auto">
          
          {/* Address Line */}
          <div className="flex items-start gap-2.5 leading-relaxed">
            <span className="font-bold text-white shrink-0">Address:</span>
            <span className="text-slate-300 font-normal">
              Forum Wework, Cybercity,<br />
              DLF Ph III, Gurugram – 122002
            </span>
          </div>

          {/* Email Line */}
          <div className="flex items-start sm:items-center gap-2.5 pt-1">
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
    </div>
  );
}
