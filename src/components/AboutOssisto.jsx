import React, { useState, useEffect } from 'react';
import { Play, PlayCircle, X, Award, ShieldAlert, FileCheck, CheckCircle } from 'lucide-react';

export default function AboutOssisto() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [counters, setCounters] = useState({ clients: 0, employees: 0, offices: 0, products: 0 });

  // Milestone Counter Animation
  useEffect(() => {
    let start = 0;
    const targetClients = 200;
    const targetEmployees = 5000;
    const targetOffices = 20;
    const targetProducts = 950;
    const duration = 2000; // ms
    const stepTime = 30; // ms
    const steps = duration / stepTime;
    
    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      setCounters({
        clients: Math.min(Math.round((targetClients / steps) * currentStep), targetClients),
        employees: Math.min(Math.round((targetEmployees / steps) * currentStep), targetEmployees),
        offices: Math.min(Math.round((targetOffices / steps) * currentStep), targetOffices),
        products: Math.min(Math.round((targetProducts / steps) * currentStep), targetProducts)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  const stats = [
    {
      value: `${counters.clients}+`,
      label: "Active Clients",
      desc: "Including 15+ Fortune 100 leaders.",
      icon: "__OSSISTO_URL_PLACEHOLDER_0__"
    },
    {
      value: `${counters.employees}+`,
      label: "Global Engineers",
      desc: "Skilled in advanced AI, Cloud and SaaS.",
      icon: "__OSSISTO_URL_PLACEHOLDER_1__"
    },
    {
      value: `${counters.offices}+`,
      label: "Delivery Centers",
      desc: "Providing 24/7 engineering redundancy.",
      icon: "__OSSISTO_URL_PLACEHOLDER_2__"
    },
    {
      value: `${counters.products}+`,
      label: "Products Engineered",
      desc: "Deployed at scale globally.",
      icon: "__OSSISTO_URL_PLACEHOLDER_3__"
    }
  ];

  return (
    <section id="about-ossisto" className="bg-[#0b0f19] py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-900 relative">
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-40 pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left column: Narrative & Counters */}
        <div className="lg:col-span-8 space-y-8">
          <div className="space-y-4">
            <span className="text-ossisto-blue text-xs font-bold uppercase tracking-widest block">About Ossisto</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
              We engineer the convergence of <span className="text-gradient font-black">Applied Intelligence</span> and business ambition.
            </h2>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
              For over three decades, Ossisto has partnered with enterprise technology leaders to architect, build, and scale digital products. We offer end-to-end capabilities across Cloud Application Modernization, Advanced AI, Cybersecurity, and Quality Engineering.
            </p>
          </div>

          {/* Dynamic Counters Grid */}
          <div className="grid grid-cols-2 gap-6 pt-4">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-slate-950 border border-slate-900 hover:border-ossisto-blue/45 p-5 rounded-2xl transition-all duration-300 group shadow-md"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center p-1.5 shrink-0 group-hover:scale-105 transition-transform">
                    <img 
                      src={stat.icon} 
                      alt={stat.label}
                      className="w-full h-full object-contain filter brightness-110"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                  <div>
                    <span className="block text-2xl md:text-3xl font-black text-ossisto-blue always-blue">
                      {stat.value}
                    </span>
                    <span className="block text-xs font-bold text-gray-300 uppercase tracking-wide">
                      {stat.label}
                    </span>
                  </div>
                </div>
                <p className="text-[11px] text-gray-500 mt-2 font-medium">
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right column: Video Case Study Showcase */}
        <div className="lg:col-span-4 relative">
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-slate-800 group/video bg-slate-900">
            {/* Background Thumbnail Image */}
            <img 
              src="__OSSISTO_URL_PLACEHOLDER_4__" 
              alt="Sleep Number Video Case Study Thumbnail"
              className="w-full h-full object-cover opacity-80 group-hover/video:scale-105 transition-transform duration-500"
            />
            
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-950/45 group-hover/video:bg-slate-950/60 transition-colors p-4">
              <button 
                onClick={() => setIsVideoOpen(true)}
                className="text-white hover:text-ossisto-blue transition-all transform hover:scale-110 active:scale-95 duration-300"
                aria-label="Play sleep number video case study"
              >
                <PlayCircle className="w-12 h-12 stroke-[1.25]" />
              </button>
              <div className="text-center mt-2 space-y-1">
                <span className="block text-[10px] text-ossisto-blue font-bold uppercase tracking-widest">Case Study Video</span>
                <h4 className="text-xs md:text-sm font-bold text-white max-w-xs leading-snug">
                  Re-engineering Sleep Number's IoT Platform
                </h4>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Video Modal Player (Portal representation) */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            onClick={() => setIsVideoOpen(false)}
          />
          <div className="relative w-full max-w-4xl bg-ossisto-dark border border-slate-800 rounded-2xl overflow-hidden aspect-video shadow-2xl z-10 animate-fade-in">
            {/* Close Button */}
            <button 
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 text-white hover:text-ossisto-blue z-20 p-2 bg-slate-900/60 rounded-full border border-slate-850 hover:border-ossisto-blue transition-all"
              aria-label="Close video player"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Video Player Element */}
            <video 
              src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="w-full h-full object-cover pointer-events-none"
            />
          </div>
        </div>
      )}

    </section>
  );
}
