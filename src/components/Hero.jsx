import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Hero() {
  const [hoveredIdx, setHoveredIdx] = useState(1); // Defaults to R expanded to match the user screenshot exactly
  const [searchQuery, setSearchQuery] = useState('');

  const panels = [
    {
      letter: "D",
      wordSuffix: "EFINE",
      description: "Defining the blueprint of the intelligent enterprise",
      image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=800&auto=format&fit=crop",
      link: "#dream-details"
    },
    {
      letter: "R",
      wordSuffix: "EVITALIZE",
      greenWord: "Today",
      description: "Revitalizing systems with AI and data readiness",
      image: "https://images.unsplash.com/photo-1615655406736-b37c4fabf923?q=80&w=800&auto=format&fit=crop",
      link: "#dream-details"
    },
    {
      letter: "E",
      wordSuffix: "NGINEER",
      description: "Engineering the future using Applied Intelligence",
      image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=800&auto=format&fit=crop",
      link: "#dream-details"
    },
    {
      letter: "A",
      wordSuffix: "CCELERATE",
      description: "Accelerating time-to-value with Ossisto accelerators",
      image: "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?q=80&w=800&auto=format&fit=crop",
      link: "#dream-details"
    },
    {
      letter: "M",
      wordSuffix: "ANAGE",
      description: "Managing evolution through predictive ops and governance",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
      link: "#dream-details"
    }
  ];

  return (
    <div 
      className="relative h-screen w-full overflow-hidden bg-ossisto-dark"
      onMouseLeave={() => setHoveredIdx(1)} // Reset to match screenshot state (R expanded)
    >
      
      {/* 5 Vertical Columns Panels */}
      <div className="flex flex-col lg:flex-row h-full w-full">
        {panels.map((panel, idx) => {
          const isHovered = hoveredIdx === idx;
          return (
            <div 
              key={idx}
              onMouseEnter={() => setHoveredIdx(idx)}
              className={`relative h-1/5 lg:h-full transition-all duration-700 ease-in-out overflow-hidden border-b lg:border-b-0 lg:border-r border-slate-900/40 cursor-pointer ${
                isHovered ? 'flex-[2] lg:flex-[2.2]' : 'flex-1 lg:flex-[0.7]'
              }`}
            >
              
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-10000 scale-105"
                style={{ backgroundImage: `url(${panel.image})` }}
              />

              {/* Dark Overlay (gets lighter when hovered) */}
              <div className={`absolute inset-0 transition-colors duration-500 ${
                isHovered ? 'bg-black/45' : 'bg-black/75'
              }`} />

              {/* Content Box */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 z-10">
                <div className="space-y-3 max-w-sm">
                  
                  {/* Letter Header */}
                  <div className="flex items-baseline leading-none">
                    <span className="text-5xl md:text-6xl lg:text-7xl font-black text-white select-none">
                      {panel.letter}
                    </span>
                    <span className={`text-xl md:text-2xl font-black text-ossisto-blue uppercase tracking-wide transition-all duration-500 origin-left overflow-hidden ${
                      isHovered ? 'max-w-xs opacity-100 ml-0.5' : 'max-w-0 opacity-0'
                    }`}>
                      {panel.wordSuffix}
                    </span>
                    {panel.greenWord && isHovered && (
                      <span className="text-xl md:text-2xl font-black text-ossisto-blue uppercase tracking-wide ml-2 animate-fade-in">
                        {panel.greenWord}
                      </span>
                    )}
                  </div>

                  {/* Description text */}
                  <p className={`text-xs md:text-sm text-gray-300 font-semibold leading-relaxed transition-opacity duration-300 ${
                    isHovered ? 'opacity-100' : 'opacity-85 lg:opacity-75'
                  }`}>
                    {panel.description}
                  </p>

                  {/* Know More CTA Link */}
                  <div className="pt-1.5">
                    <a 
                      href={panel.link}
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-ossisto-blue hover:text-white uppercase tracking-wider transition-colors"
                    >
                      Know More 
                      <span className="text-[10px] select-none">▶</span>
                    </a>
                  </div>

                </div>
              </div>

            </div>
          );
        })}
      </div>

      {/* Floating Center Search Bar Overlay (Fixed viewport position) */}
      <div className="fixed bottom-12 left-1/2 -translate-x-1/2 z-30 w-full max-w-lg px-4 hidden md:block">
        {/* Custom Search Box */}
        <div className="bg-slate-950/85 backdrop-blur-md border border-ossisto-blue/30 px-5 py-3 rounded-full flex items-center justify-between gap-3 shadow-2xl">
          <div className="flex items-center gap-2.5 flex-1">
            {/* Sparkle star icon */}
            <span className="text-ossisto-blue text-sm font-bold animate-pulse">✦</span>
            <input 
              type="text" 
              placeholder="Search the intelligent future..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent border-0 text-white placeholder-gray-500 text-xs md:text-sm focus:outline-none w-full font-medium"
            />
          </div>
          
          {/* Green Go Button */}
          <button 
            className="w-8 h-8 rounded-full bg-ossisto-blue hover:bg-[#236CB1] flex items-center justify-center text-white shrink-0 shadow-md shadow-ossisto-blue/10 transition-colors duration-200"
            aria-label="Submit search query"
          >
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>
      </div>

      {/* Bullet Indicators aligned to panels (Absolute to Hero, scrolls away) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex justify-center items-center space-x-2 hidden md:flex">
        {panels.map((_, idx) => (
          <button 
            key={idx}
            onClick={() => setHoveredIdx(idx)}
            className={`h-2 rounded-full transition-all duration-300 border ${
              hoveredIdx === idx 
                ? 'w-6 bg-white border-white' 
                : 'w-2 bg-transparent border-gray-600 hover:border-white'
            }`}
            aria-label={`Go to panel ${idx + 1}`}
          />
        ))}
      </div>

    </div>
  );
}
