import React, { useState } from 'react';
import { Play, X } from 'lucide-react';

export default function AboutOssistoModern() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const stats = [
    { value: "200 +", label: "Clients" },
    { value: "5000 +", label: "Employees" },
    { value: "20 + Global", label: "Locations" },
    { value: "950 +", label: "Products & Platforms Engineered" }
  ];

  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-24 border-b border-gray-100 font-sans flex flex-col items-center text-center">
      <div className="max-w-7xl mx-auto space-y-16 flex flex-col items-center w-full">
        
        {/* About Ossisto Text Container (Centered) */}
        <div className="space-y-4 max-w-4xl mx-auto flex flex-col items-center">
          <div className="text-sm md:text-base font-bold text-black tracking-wide text-center">
            About <span className="text-ossisto-blue always-blue">Ossisto</span>
          </div>
          <h2 className="text-2xl md:text-3.5xl lg:text-4xl font-black text-black leading-tight tracking-tight text-center animate-fade-in-up">
            We engineer the convergence of applied intelligence and business ambition, accelerating value realization and shaping the AI-native enterprise
          </h2>
          <div className="pt-2 text-center">
            <a 
              href="#contact" 
              className="inline-flex items-center gap-1.5 text-xs md:text-sm font-bold text-ossisto-blue hover:underline uppercase tracking-wider justify-center always-blue"
            >
              Know More <span className="text-[10px] select-none">▶</span>
            </a>
          </div>
        </div>

        {/* Stats Row (Centered) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-4xl w-full justify-center">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-1.5 flex flex-col items-center text-center">
              <span className="block text-2xl md:text-3xl font-black text-ossisto-blue tracking-tight always-blue">
                {stat.value}
              </span>
              <span className="block text-[10px] md:text-xs font-bold text-black uppercase tracking-wider leading-relaxed">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom Centered Headings */}
        <div className="pt-12 text-center space-y-2.5 w-full">
          <span className="block text-xl md:text-2xl font-black text-ossisto-blue tracking-wide always-blue">
            Applying Intelligence
          </span>
          <h3 className="text-3xl md:text-4.5xl font-black text-black leading-none">
            Engineering the Future
          </h3>
        </div>

        {/* Video Case Study Showcase Card (Further reduced width & height to max-w-xl) */}
        <div className="relative w-full max-w-xl mx-auto rounded-xl md:rounded-[16px] overflow-hidden shadow-lg border border-gray-150 group/video aspect-video bg-slate-950">
          {/* Background Thumbnail Image */}
          <img 
            src="/smart_mattress_scan.png" 
            alt="Applying Intelligence - Engineering the Future"
            className="w-full h-full object-cover opacity-90 group-hover/video:scale-102 transition-transform duration-700"
          />

          {/* Top-Right Logo Overlay */}
          <div className="absolute top-2.5 right-2.5 md:top-4 md:right-4 z-20">
            <img 
              src="https://ossisto.com/wp-content/uploads/2023/04/Ossisto_Logo.png"
              alt="Ossisto Logo"
              className="h-3.5 md:h-4.5 object-contain filter brightness-0 invert" 
            />
          </div>

          {/* Left-Side Tech Info Overlay */}
          <div className="absolute inset-y-0 left-0 w-[45%] bg-gradient-to-r from-slate-950/80 via-slate-950/45 to-transparent flex flex-col justify-center pl-3 md:pl-5 space-y-1 md:space-y-2 z-20">
            {/* Item 1 */}
            <div className="flex items-center gap-1.5 md:gap-2">
              <div className="relative w-3 h-3 md:w-4 md:h-4 rounded-full border border-ossisto-blue flex items-center justify-center shrink-0">
                <div className="w-1 h-1 rounded-full bg-ossisto-blue animate-ping absolute" />
                <div className="w-1 h-1 rounded-full bg-ossisto-blue" />
              </div>
              <div className="bg-white text-black text-[7.5px] md:text-[9.5px] font-bold px-1.5 py-0.5 rounded shadow-sm tracking-tight whitespace-nowrap">
                High-resolution Imaging
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-center gap-1.5 md:gap-2">
              <div className="relative w-3 h-3 md:w-4 md:h-4 rounded-full border border-ossisto-blue flex items-center justify-center shrink-0">
                <div className="w-1 h-1 rounded-full bg-ossisto-blue animate-ping absolute" />
                <div className="w-1 h-1 rounded-full bg-ossisto-blue" />
              </div>
              <div className="bg-white text-black text-[7.5px] md:text-[9.5px] font-bold px-1.5 py-0.5 rounded shadow-sm tracking-tight whitespace-nowrap">
                IoT
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-center gap-1.5 md:gap-2">
              <div className="relative w-3 h-3 md:w-4 md:h-4 rounded-full border border-ossisto-blue flex items-center justify-center shrink-0">
                <div className="w-1 h-1 rounded-full bg-ossisto-blue animate-ping absolute" />
                <div className="w-1 h-1 rounded-full bg-ossisto-blue" />
              </div>
              <div className="bg-white text-black text-[7.5px] md:text-[9.5px] font-bold px-1.5 py-0.5 rounded shadow-sm tracking-tight whitespace-nowrap italic">
                Microsoft Azure
              </div>
            </div>
          </div>

          {/* Centered Green Play Button */}
          <button 
            onClick={() => setIsVideoOpen(true)}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-ossisto-blue hover:bg-[#236CB1] text-white w-9 h-7 md:w-12 md:h-9 rounded md:rounded-lg flex items-center justify-center shadow-xl shadow-ossisto-blue/30 hover:scale-110 active:scale-95 transition-all duration-300 z-30 group"
            aria-label="Play case study video"
          >
            <Play className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 fill-white stroke-none ml-0.5 group-hover:scale-105 transition-transform" />
          </button>
        </div>

      </div>

      {/* Video Modal Player */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            onClick={() => setIsVideoOpen(false)}
          />
          <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden aspect-video shadow-2xl z-50 animate-fade-in">
            {/* Close Button */}
            <button 
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 text-white hover:text-ossisto-blue z-50 p-2 bg-slate-950/60 rounded-full border border-slate-800 hover:border-ossisto-blue transition-all"
              aria-label="Close video player"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Video Player Element */}
            <video 
              src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              controls
              autoPlay
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}
    </section>
  );
}
