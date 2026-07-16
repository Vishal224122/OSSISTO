import React from 'react';

export default function CareersSectionModern() {
  return (
    <section className="relative w-full overflow-hidden flex items-center justify-start min-h-[480px] md:min-h-[580px] py-24 px-6 md:px-12 lg:px-24 bg-cover bg-center bg-slate-900" style={{ backgroundImage: "url('/ossisto_team_celebration.png')" }}>
      {/* Deep Violet/Dark Overlay */}
      <div className="absolute inset-0 bg-[#0e0c25]/85 z-0" />
      
      {/* Content wrapper */}
      <div className="relative z-10 max-w-2xl space-y-3.5 text-left">
        <span className="block text-xs md:text-sm font-bold uppercase tracking-widest text-slate-300">
          careers
        </span>
        <h2 className="leading-tight tracking-tight font-sans">
          <span className="block text-3xl md:text-5xl font-black text-white">
            The XFactor
          </span>
          <span className="block text-3xl md:text-5xl font-black text-ossisto-blue mt-1">
            At Ossisto
          </span>
        </h2>
        <div className="pt-4">
          <a 
            href="#careers-portal" 
            className="inline-flex items-center gap-1.5 text-xs md:text-sm font-bold text-white hover:text-ossisto-blue transition-colors uppercase tracking-wider"
          >
            Join the team <span className="text-ossisto-blue text-[10px] select-none">▶</span>
          </a>
        </div>
      </div>
    </section>
  );
}
