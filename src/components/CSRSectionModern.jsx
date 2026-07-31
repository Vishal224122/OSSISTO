import React, { useState } from 'react';

export default function CSRSectionModern() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      name: "Education",
      title: "Proudly Contributing To The Mission Of Education For All",
      image: "/csr_education.png"
    },
    {
      name: "Healthcare",
      title: "Partnering To Deliver Quality Healthcare & Medical Aid",
      image: "/csr_healthcare.png"
    },
    {
      name: "Environment",
      title: "Restoring Ecosystems And Driving Carbon Neutrality",
      image: "/csr_environment.png"
    }
  ];

  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-24 border-b-0 md:border-b border-gray-100 font-sans flex flex-col items-center">
      <div className="max-w-5xl w-full mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3.5xl lg:text-4.5xl font-black text-black leading-tight tracking-tight">
            Driven By Purpose & Committed To Responsibility
          </h2>
          <p className="text-xs md:text-sm font-extrabold text-black uppercase tracking-wider">
            Doing our bit for Sustainability, Diversity & Inclusion and Social Impact
          </p>
        </div>

        {/* CSR Showcase Card (Width & Height reduced by 20%) */}
        <div className="relative w-full max-w-3xl mx-auto rounded-2xl md:rounded-[20px] overflow-hidden shadow-2xl border border-gray-150 group/csr aspect-video bg-slate-950 flex flex-col justify-between p-6 md:p-8">
          
          {/* Background Image */}
          <img 
            src={tabs[activeTab].image} 
            alt={tabs[activeTab].name}
            className="absolute inset-0 w-full h-full object-cover opacity-85 z-0 transition-transform duration-1000 scale-100 group-hover/csr:scale-[1.01]"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60 z-10" />

          {/* Center Content Overlay */}
          <div className="relative z-20 flex-1 flex flex-col items-center justify-center text-center space-y-3 px-4 mt-6 md:mt-10">
            <h3 className="text-base md:text-2.5xl font-black text-white max-w-2xl leading-snug drop-shadow-md">
              {tabs[activeTab].title}
            </h3>
            <a 
              href="#know-more"
              className="inline-flex items-center gap-1.5 text-xs md:text-sm font-extrabold text-ossisto-blue hover:text-[#236CB1] uppercase tracking-wider transition-colors pt-1"
            >
              Know More <span className="text-[10px] select-none">▶</span>
            </a>
          </div>

          {/* Bottom Tab Selectors */}
          <div className="relative z-20 w-full flex gap-4 md:gap-8 border-b border-white/20 pb-2 mt-auto pl-2 md:pl-4">
            {tabs.map((tab, idx) => {
              const isActive = activeTab === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`text-[10px] md:text-xs font-extrabold tracking-wider uppercase transition-colors pb-2 relative ${
                    isActive ? 'text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {tab.name}
                  {isActive && (
                    <div className="absolute bottom-[-10px] left-0 right-0 h-[2.5px] bg-ossisto-blue rounded-full animate-fade-in" />
                  )}
                </button>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
