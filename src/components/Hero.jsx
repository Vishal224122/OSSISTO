import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Hero() {
  const [hoveredIdx, setHoveredIdx] = useState(null); // Defaults to null (all panels equal width)

  const panels = [
    {
      image: "/1.png",
      link: "#dream-details"
    },
    {
      image: "/2.png",
      link: "#dream-details"
    },
    {
      image: "/3.png",
      link: "#dream-details"
    },
    {
      image: "/4.png",
      link: "#dream-details"
    }
  ];

  return (
    <div
      className="relative h-screen w-full overflow-hidden bg-ossisto-dark"
      onMouseLeave={() => setHoveredIdx(null)} // Reset to null (all panels equal width) when mouse leaves
    >

      {/* 4 Vertical Columns Panels */}
      <div className="flex flex-col lg:flex-row h-full w-full">
        {panels.map((panel, idx) => {
          const isHovered = hoveredIdx === idx;
          return (
            <div
              key={idx}
              onMouseEnter={() => setHoveredIdx(idx)}
              className={`relative h-1/5 lg:h-full transition-all duration-700 ease-in-out overflow-hidden border-b lg:border-b-0 lg:border-r border-slate-900/40 cursor-pointer ${isHovered ? 'flex-[2] lg:flex-[2.2]' : 'flex-1 lg:flex-[0.7]'
                }`}
            >

              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-10000 scale-105"
                style={{ backgroundImage: `url(${panel.image})` }}
              />

              {/* Dark Overlay (gets lighter when hovered) */}
              <div className={`absolute inset-0 transition-colors duration-500 ${isHovered ? 'bg-black/45' : 'bg-black/75'
                }`} />

              {/* Content Box */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 z-10">
                <div className="space-y-3 max-w-sm">

                  {/* Letter Header */}
                  {/* <div className="flex items-baseline leading-none">
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
                  </div> */}

                  {/* Description text */}
                  {/* <p className={`text-xs md:text-sm text-gray-300 font-semibold leading-relaxed transition-opacity duration-300 ${
                    isHovered ? 'opacity-100' : 'opacity-85 lg:opacity-75'
                  }`}>
                    {panel.description}
                  </p> */}

                  {/* Know More CTA Link */}
                  {/* <div className="pt-1.5">
                    <a 
                      href={panel.link}
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-ossisto-blue hover:text-white uppercase tracking-wider transition-colors"
                    >
                      Know More 
                      <span className="text-[10px] select-none">▶</span>
                    </a>
                  </div> */}

                </div>
              </div>

            </div>
          );
        })}
      </div>

      {/* Floating Left Search Button Overlay (Fixed viewport position) */}
      <div className="fixed bottom-12 left-8 md:left-12 z-30 w-full max-w-[285px] hidden md:block">
        {/* Custom Search Box converted to a button */}
        <button
          onClick={() => {
            const el = document.getElementById('dream-details');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          className="w-full bg-slate-950/85 backdrop-blur-md border border-ossisto-blue/30 px-4 py-2.5 rounded-full flex items-center justify-between gap-2 shadow-2xl hover:bg-slate-900/90 transition-all duration-200 cursor-pointer text-left"
        >
          <div className="flex items-center gap-2 flex-1">
            {/* Sparkle star icon */}
            <span className="text-ossisto-blue text-xs font-bold animate-pulse">✦</span>
            <span className="text-gray-300 text-[11px] font-semibold tracking-wide">
              Search the intelligent future...
            </span>
          </div>

          {/* Arrow icon container */}
          <div
            className="w-7 h-7 rounded-full bg-ossisto-blue flex items-center justify-center text-white shrink-0 shadow-md shadow-ossisto-blue/10"
          >
            <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </div>
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
