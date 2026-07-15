import React, { useState } from 'react';
import { AlertCircle, X } from 'lucide-react';

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-[#0f172a] border-b border-xoriant-green/20 text-gray-200 text-sm py-2.5 px-4 transition-all duration-300 relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 mx-auto">
          <AlertCircle className="w-4 h-4 text-xoriant-green shrink-0 animate-pulse" />
          <span className="font-semibold text-xoriant-green tracking-wide text-xs uppercase shrink-0">Recruitment Note</span>
          <span className="text-gray-300 text-xs sm:text-sm text-center">
            Your growth deserves clarity. Please note that all legitimate Xoriant hiring communication is sent only through <span className="text-xoriant-green font-semibold">recruitment@xoriant.com</span>
          </span>
        </div>
        <button 
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white transition-colors shrink-0 p-1 rounded-full hover:bg-gray-800"
          aria-label="Dismiss banner"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
