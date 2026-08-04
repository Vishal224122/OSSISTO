import React, { useState, useRef } from 'react';
import { ArrowUpRight, ChevronDown } from 'lucide-react';

export default function Hero() {
  const [hoveredIdx, setHoveredIdx] = useState(null); // Defaults to null (all panels equal width)
  const hoverTimeout = useRef(null);
  const lastTouchTime = useRef(0);

  const handleMouseEnter = (idx) => {
    if (Date.now() - lastTouchTime.current < 800) return;
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    hoverTimeout.current = setTimeout(() => {
      setHoveredIdx(idx);
    }, 350); // 350ms hover delay
  };

  const handleMouseLeave = () => {
    if (Date.now() - lastTouchTime.current < 800) return;
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    setHoveredIdx(null);
  };

  const handleTouch = (idx) => {
    lastTouchTime.current = Date.now();
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    setHoveredIdx((prev) => (prev === idx ? null : idx));
  };

  const handlePanelClick = (idx) => {
    if (Date.now() - lastTouchTime.current < 500) return; // Ignore synthetic click following touch
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    setHoveredIdx((prev) => (prev === idx ? null : idx));
  };

  const panels = [
    {
      image: "/1.png",
      letter: "D",
      wordSuffix: "igital",
      greenWord: "Manufacturing",
      description: "Accelerating the digital transformation journey of your manufacturing enterprise.",
      link: "#dream-details"
    },
    {
      image: "/2.png",
      letter: "T",
      wordSuffix: "ransformation",
      greenWord: "Healthcare",
      description: "Cognitive AI operations and data platform engineering for life sciences.",
      link: "#dream-details"
    },
    {
      image: "/3.png",
      letter: "T",
      wordSuffix: "hat",
      greenWord: "Specialty Steel",
      description: "Niche engineering expertise across manufacturing, steel, and food processing.",
      link: "#dream-details"
    },
    {
      image: "/4.png",
      letter: "W",
      wordSuffix: "orks",
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
              onClick={() => handlePanelClick(idx)}
              onTouchStart={() => handleTouch(idx)}
              onTouchMove={() => handleTouch(idx)}
              className={`relative h-1/4 lg:h-full transition-all duration-700 ease-in-out overflow-hidden border-b-0 lg:border-r border-slate-900/40 cursor-pointer ${isHovered ? 'flex-[2] lg:flex-[1.8]' : 'flex-1 lg:flex-[0.85]'
                }`}
            >

              {/* Background Image with crisp contrast and full image text visibility */}
              <div
                className={`absolute inset-0 bg-cover bg-center scale-100 transition-all duration-700 ${isHovered ? 'contrast-100 brightness-100 saturate-100' : 'contrast-[1.02] brightness-[1.02]'
                  }`}
                style={{ backgroundImage: `url(${panel.image})` }}
              />

              {/* Mobile Drop Arrow (Smoothly glides down below text overlay when row expands, glides back up when collapsed) */}
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  handlePanelClick(idx);
                }}
                onTouchStart={(e) => {
                  e.stopPropagation();
                  handleTouch(idx);
                }}
                className={`lg:hidden absolute left-6 z-30 cursor-pointer pointer-events-auto transition-all duration-300 ${!isHovered
                  ? 'top-1/2 -translate-y-1/2'
                  : (idx === 0 ? 'top-40 sm:top-44' : idx === 3 ? 'top-52 sm:top-56' : 'top-48 sm:top-52')
                  }`}
              >
                <div className={`transition-transform duration-300 ${isHovered ? 'rotate-180 text-ossisto-blue' : 'rotate-0 text-white/90'
                  }`}>
                  <ChevronDown className="w-5 h-5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]" strokeWidth={2.5} />
                </div>
              </div>

              {/* Top-left Orange Text Overlay for the first panel (Automotive) */}
              {idx === 0 && (
                <div className={`absolute top-16 left-6 sm:top-20 sm:left-8 md:top-28 md:left-10 z-20 pointer-events-none select-none text-left max-w-[52vw] sm:max-w-md md:max-w-lg lg:max-w-xl transition-all duration-500 ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                  }`}>
                  <h3 className="text-sm sm:text-lg md:text-2.5xl lg:text-4xl font-bold text-white leading-tight font-sans tracking-tight mb-0.5 sm:mb-2 drop-shadow-[0_4px_12px_rgba(0,0,0,0.95)]">
                    Automotive
                  </h3>
                  <h3 className="text-xs sm:text-base md:text-2xl lg:text-3.5xl font-bold text-[#f05a28] leading-tight font-sans tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.95)]">
                    Solutions for mobility<br />ecosystems
                  </h3>
                </div>
              )}

              {/* Top-left Blue/Cyan Text Overlay for the second panel (Pharma) */}
              {idx === 1 && (
                <div className={`absolute top-16 left-6 sm:top-20 sm:left-8 md:top-28 md:left-10 z-20 pointer-events-none select-none text-left max-w-[52vw] sm:max-w-md md:max-w-lg lg:max-w-xl transition-all duration-500 ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                  }`}>
                  <h3 className="text-sm sm:text-lg md:text-2.5xl lg:text-4xl font-bold text-white leading-tight font-sans tracking-tight mb-0.5 sm:mb-2 drop-shadow-[0_4px_12px_rgba(0,0,0,0.95)]">
                    Pharma
                  </h3>
                  <h3 className="text-xs sm:text-base md:text-2xl lg:text-3.5xl font-bold text-[#00aeef] leading-tight font-sans tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.95)]">
                    Pharma DX &<br />compliance management
                  </h3>
                </div>
              )}

              {/* Text Overlay for the third panel (Electronics / Manufacturing Sectors) */}
              {idx === 2 && (
                <div className={`absolute top-16 left-6 sm:top-20 sm:left-8 md:top-28 md:left-10 z-20 pointer-events-none select-none text-left max-w-[52vw] sm:max-w-md md:max-w-lg lg:max-w-xl transition-all duration-500 ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                  }`}>
                  <h3 className="text-sm sm:text-lg md:text-2.5xl lg:text-4xl font-bold text-white leading-tight font-sans tracking-tight mb-0.5 sm:mb-2 drop-shadow-[0_4px_12px_rgba(0,0,0,0.95)]">
                    Chemicals
                  </h3>
                  <h3 className="text-xs sm:text-base md:text-2xl lg:text-3.5xl font-bold text-[#8bc53f] leading-tight font-sans tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.95)]">
                    Process Digital<br />transformation
                  </h3>
                </div>
              )}

              {/* Text Overlay for the fourth panel (Global / Value addition) */}
              {idx === 3 && (
                <div className={`absolute top-16 left-6 sm:top-20 sm:left-8 md:top-28 md:left-10 z-20 pointer-events-none select-none text-left max-w-[52vw] sm:max-w-md md:max-w-lg lg:max-w-xl transition-all duration-500 ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                  }`}>
                  <h3 className="text-sm sm:text-lg md:text-2.5xl lg:text-4xl font-bold leading-tight font-sans tracking-tight text-left text-white mb-1 sm:mb-4 drop-shadow-[0_4px_12px_rgba(0,0,0,0.95)]">
                    Serving across all sectors
                  </h3>
                  <div className="grid grid-cols-3 gap-x-2 gap-y-0.5 sm:block sm:space-y-1 font-normal font-sans text-[#c084fc] text-[10px] sm:text-lg md:text-xl lg:text-[22px] tracking-tight leading-snug sm:leading-normal text-left drop-shadow-[0_4px_12px_rgba(0,0,0,0.95)]">
                    <div>✓ Food</div>
                    <div>✓ Electronics</div>
                    <div>✓ Machinery</div>
                    <div>✓ Metals</div>
                    <div>✓ Appliances</div>
                    <div>✓ Plastic</div>
                    <div>✓ Rubber</div>
                    <div>✓ Packaging</div>
                    <div className="pl-1 sm:pl-4">etc.</div>
                  </div>
                </div>
              )}

              {/* Dynamic Overlay Gradient based on hover state */}
              <div className={`absolute inset-0 transition-all duration-500 ${hoveredIdx === null
                ? 'bg-black/80 lg:bg-black/65 opacity-100'
                : isHovered
                  ? 'bg-transparent opacity-0'
                  : 'bg-black/90 lg:bg-black/70 opacity-100'
                }`} />

              {/* Content Box (Keeps expanding titles: AUTOMOTIVE, PHARMA, etc.) */}
              <div className={`absolute inset-0 flex flex-col items-end pr-4 sm:pr-8 lg:py-8 lg:px-2 lg:justify-end z-10 text-right ${idx === 0 ? 'justify-start pt-24 sm:pt-28 lg:pt-0 lg:justify-end lg:pb-20' : 'justify-center pb-0 lg:pb-20'
                }`}>
                <div className="space-y-0 lg:space-y-2.5 w-auto flex flex-col items-end justify-end text-right">

                  {/* Letter Header: Displays single letter when normal (D, T, T, W), expands to full word on hover */}
                  <div className="w-auto flex flex-col items-end justify-end text-right leading-normal pb-0 lg:pb-2">
                    <div className="w-auto flex items-baseline justify-end text-right leading-normal tracking-tight max-lg:font-['Arial_Narrow',sans-serif]">
                      <span className={`select-none transition-all duration-500 text-white drop-shadow-[0_4px_14px_rgba(0,0,0,0.98)] text-[27px] sm:text-[33px] max-lg:font-normal lg:font-black ${isHovered ? 'lg:text-7xl' : 'lg:text-[36px] xl:text-[40px]'
                        }`}>
                        {panel.letter}
                      </span>
                      <span className={`transition-all duration-500 origin-left opacity-100 text-white drop-shadow-[0_4px_14px_rgba(0,0,0,0.98)] text-[25px] sm:text-[31px] max-lg:font-normal lg:font-black pb-0 lg:pb-3 ${isHovered ? 'lg:text-6xl' : 'lg:text-[26px] xl:text-[30px] tracking-tight'
                        }`}>
                        {panel.wordSuffix}
                      </span>
                      {panel.wordSuffix.length < 13 && (
                        <span className="lg:hidden opacity-0 select-none pointer-events-none text-[25px] sm:text-[31px] max-lg:font-normal pb-0 inline-block">
                          {"ransformation".slice(panel.wordSuffix.length)}
                        </span>
                      )}
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
          className="w-full bg-[#0019EB] border border-[#0019EB] px-5 py-2.5 rounded-full flex items-center justify-center shadow-2xl hover:bg-[#0014bd] transition-all duration-200 cursor-pointer text-center"
        >
          <span className="text-white text-[11px] font-bold tracking-wide">
            Apply to Open positions
          </span>
        </button>
      </div>

      {/* Bullet Indicators aligned to panels with downward pointed scroll arrow */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col justify-center items-center space-y-2.5 hidden md:flex">
        {/* Pagination Dots */}
        <div className="flex justify-center items-center space-x-2">
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

        {/* Scroll Down Arrow */}
        <button
          onClick={() => {
            const el = document.getElementById('about-ossisto-modern');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          className="animate-bounce transition-colors duration-200 cursor-pointer text-[#D9D9D9] hover:text-white"
          aria-label="Scroll down"
        >
          <svg className="w-5 h-5 stroke-[2.5px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </button>
      </div>

    </div>
  );
}
