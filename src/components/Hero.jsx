import React, { useState, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Hero() {
  const [hoveredIdx, setHoveredIdx] = useState(null); // Defaults to null (all panels equal width)
  const hoverTimeout = useRef(null);

  const handleMouseEnter = (idx) => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    hoverTimeout.current = setTimeout(() => {
      setHoveredIdx(idx);
    }, 800); // 800ms hover delay
  };

  const handleMouseLeave = () => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    setHoveredIdx(null);
  };

  const panels = [
    {
      image: "/1.png",
      letter: "A",
      wordSuffix: "utomotive",
      greenWord: "Manufacturing",
      description: "Accelerating the digital transformation journey of your manufacturing enterprise.",
      link: "#dream-details"
    },
    {
      image: "/2.png",
      letter: "P",
      wordSuffix: "harma",
      greenWord: "Healthcare",
      description: "Cognitive AI operations and data platform engineering for life sciences.",
      link: "#dream-details"
    },
    {
      image: "/3.png",
      letter: "E",
      wordSuffix: "lectronics",
      greenWord: "Specialty Steel",
      description: "Niche engineering expertise across electronics, steel, and food processing.",
      link: "#dream-details"
    },
    {
      image: "/4.png",
      letter: "G",
      wordSuffix: "lobal",
      greenWord: "Capabilities",
      description: "Empowering global enterprises with adaptive AI and cloud solutions.",
      link: "#dream-details"
    }
  ];

  return (
    <div
      className="relative h-screen w-full overflow-hidden bg-ossisto-dark"
      onMouseLeave={handleMouseLeave} // Reset to null (all panels equal width) when mouse leaves
    >

      {/* 4 Vertical Columns Panels */}
      <div className="flex flex-col lg:flex-row h-full w-full">
        {panels.map((panel, idx) => {
          const isHovered = hoveredIdx === idx;
          return (
            <div
              key={idx}
              onMouseEnter={() => handleMouseEnter(idx)}
              className={`relative h-1/5 lg:h-full transition-all duration-700 ease-in-out overflow-hidden border-b lg:border-b-0 lg:border-r border-slate-900/40 cursor-pointer ${isHovered ? 'flex-[2] lg:flex-[2.2]' : 'flex-1 lg:flex-[0.7]'
                }`}
            >

              {/* Background Image with crisp contrast and full image text visibility */}
              <div
                className={`absolute inset-0 bg-cover bg-center scale-100 transition-all duration-700 ${isHovered ? 'contrast-[1.12] brightness-[1.08] saturate-[1.12]' : 'contrast-[1.02] brightness-[1.02]'
                  }`}
                style={{ backgroundImage: `url(${panel.image})` }}
              />

              {/* Top-left Orange Text Overlay for the first panel (Automotive) */}
              {idx === 0 && (
                <div className={`absolute top-20 left-8 md:top-28 md:left-10 z-20 pointer-events-none select-none text-left max-w-md md:max-w-lg lg:max-w-xl transition-all duration-500 ${
                  isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                }`}>
                  <h3 className="text-2xl md:text-3.5xl lg:text-4xl font-normal text-[#f05a28] leading-tight font-sans tracking-tight">
                    Solutions for mobility<br />ecosystems
                  </h3>
                </div>
              )}

              {/* Top-left Blue/Cyan Text Overlay for the second panel (Pharma) */}
              {idx === 1 && (
                <div className={`absolute top-20 left-8 md:top-28 md:left-10 z-20 pointer-events-none select-none text-left max-w-md md:max-w-lg lg:max-w-xl transition-all duration-500 ${
                  isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                }`}>
                  <h3 className="text-2xl md:text-3.5xl lg:text-4xl font-normal text-[#00aeef] leading-tight font-sans tracking-tight">
                    Pharma DX & compliance<br />management
                  </h3>
                </div>
              )}

              {/* Text Overlay for the third panel (Electronics / Manufacturing Sectors) */}
              {idx === 2 && (
                <div className={`absolute top-20 left-1/2 -translate-x-1/2 z-20 pointer-events-none select-none text-center max-w-md md:max-w-lg lg:max-w-xl w-[90%] transition-all duration-500 ${
                  isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                }`}>
                  {/* Top Header */}
                  <h3 className="text-2xl md:text-3.5xl lg:text-4xl font-normal leading-tight font-sans tracking-tight text-center">
                    <span className="text-[#c084fc]">Serving across all</span><br />
                    <span className="text-[#00aeef]">manufacturing sectors</span>
                  </h3>

                  {/* Service List */}
                  <div className="mt-6 md:mt-10 space-y-1.5 font-bold font-sans text-white text-xl md:text-2xl leading-tight text-center">
                    <div>Electronics</div>
                    <div>Specialty Steel</div>
                    <div>Food processing</div>
                    <div>Construction material</div>
                    <div className="opacity-60 text-sm mt-0.5">... etc.</div>
                  </div>
                </div>
              )}

              {/* Text Overlay for the fourth panel (Global / Value addition) */}
              {idx === 3 && (
                <div className={`absolute top-20 left-1/2 -translate-x-1/2 z-20 pointer-events-none select-none text-center max-w-md md:max-w-lg lg:max-w-xl w-[90%] transition-all duration-500 ${
                  isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                }`}>
                  <h3 className="text-2xl md:text-3.5xl lg:text-4xl font-normal leading-tight font-sans tracking-tight text-center">
                    <span className="text-gray-500">Aspiring to add value</span><br />
                    <span className="text-slate-800">to manufacturing sector</span>
                  </h3>
                </div>
              )}



              {/* Dynamic Overlay Gradient based on hover state (Opposite: dim by default, bright on hover) */}
              <div className={`absolute inset-0 transition-all duration-500 ${
                hoveredIdx === null 
                  ? 'bg-black/40 opacity-100' 
                  : isHovered 
                    ? 'bg-transparent opacity-0' 
                    : 'bg-black/70 opacity-100'
              }`} />

              {/* Content Box (Keeps expanding titles: AUTOMOTIVE, PHARMA, etc.) */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 pb-16 md:pb-20 z-10">
                <div className="space-y-2.5 max-w-xl md:max-w-2xl">

                  {/* Letter Header: Displays single letter when normal (A, P, E, G), expands to full word on hover */}
                  <div className="flex flex-col leading-none">
                    <div className="flex items-baseline leading-none">
                      <span className={`font-black select-none tracking-tight transition-all duration-500 text-slate-300 ${
                        isHovered ? 'text-5xl md:text-6xl lg:text-7xl' : 'text-3xl md:text-4xl lg:text-[42px]'
                      }`}>
                        {panel.letter}
                      </span>
                      <span className={`font-black tracking-tight transition-all duration-500 origin-left overflow-hidden max-w-2xl opacity-100 text-slate-300 ${
                        isHovered ? 'text-4xl md:text-5xl lg:text-6xl' : 'text-2xl md:text-3xl lg:text-[32px]'
                      }`}>
                        {panel.wordSuffix}
                      </span>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          );
        })}
      </div>

      {/* Floating Left Search Button Overlay (Fixed viewport position) */}
      <div className="fixed bottom-6 right-20 md:right-24 z-30 w-full max-w-[210px] hidden md:block">
        {/* Custom Search Box converted to a button */}
        <button
          onClick={() => {
            const el = document.getElementById('dream-details');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          className="w-full bg-ossisto-blue border border-ossisto-blue px-5 py-2.5 rounded-full flex items-center justify-center shadow-2xl hover:bg-[#236CB1] transition-all duration-200 cursor-pointer text-center"
        >
          <span className="text-white text-[11px] font-bold tracking-wide">
            Open positions – Apply
          </span>
        </button>
      </div>

      {/* Bullet Indicators aligned to panels (Absolute to Hero, scrolls away) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex justify-center items-center space-x-2 hidden md:flex">
        {panels.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setHoveredIdx(idx)}
            className={`h-2 rounded-full transition-all duration-300 border ${hoveredIdx === idx
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
