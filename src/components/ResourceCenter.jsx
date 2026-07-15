import React, { useState } from 'react';

export default function ResourceCenter() {
  const [activeType, setActiveType] = useState('All');
  const [activeTopic, setActiveTopic] = useState('All');

  const contentTypes = [
    'All', 'Thought Leadership', 'Blog', 'Brochure', 'Case study', 'Infographic', 'Event', 'Webinar and Podcast', 'Whitepaper'
  ];

  const topics = [
    'All', 'Big Data and Analytics', 'Cloud and Infrastructure', 'Product Engineering', 'Digital'
  ];

  // 4 Featured resources matching the screenshot
  const resources = [
    {
      id: 1,
      type: "Infographic",
      topic: "Digital",
      title: "5-Phase Framework for Healthcare Digital Delivery",
      image: "https://images.unsplash.com/photo-1530026405186-ed1ea0ac7a63?q=80&w=600&auto=format&fit=crop",
      isTall: true
    },
    {
      id: 2,
      type: "Webinar and Podcast",
      topic: "Big Data and Analytics",
      title: "Real-time treasury: Multi-bank Intelligence",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=600&auto=format&fit=crop",
      isTall: true
    },
    {
      id: 3,
      type: "Article",
      topic: "Cloud and Infrastructure",
      title: "Enterprise Discipline will decide AI Value...",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=600&auto=format&fit=crop",
      isTall: false
    },
    {
      id: 4,
      type: "Article",
      topic: "Product Engineering",
      title: "Partner-Powered Growth: The Model for...",
      image: "https://images.unsplash.com/photo-1522163182402-834f871fd851?q=80&w=600&auto=format&fit=crop",
      isTall: false
    }
  ];

  return (
    <section id="keeping-updated" className="bg-white py-12 md:py-16 px-6 md:px-12 lg:px-24 border-b border-gray-100 font-sans flex flex-col items-center">
      <div className="max-w-4xl w-full mx-auto space-y-10">
        
        {/* Section Title */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3.5xl font-black text-black leading-tight tracking-tight">
            Through Our Applied Intelligence Lens
          </h2>
        </div>

        {/* Dual Filters Toggles Bar */}
        <div className="space-y-5 flex flex-col items-center">
          {/* Row 1: Content Type */}
          <div className="flex flex-wrap gap-2 justify-center w-full max-w-4xl">
            {contentTypes.map((type, idx) => {
              const isActive = activeType === type;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveType(type)}
                  className={`text-[10px] md:text-xs font-bold px-4 py-1.5 rounded-full border transition-all ${
                    isActive 
                      ? 'bg-xoriant-green border-xoriant-green text-white shadow-sm' 
                      : 'bg-white border-gray-250 text-slate-700 hover:border-slate-400 hover:text-black'
                  }`}
                >
                  {type}
                </button>
              );
            })}
          </div>

          {/* Row 2: Topics */}
          <div className="flex flex-wrap gap-2 justify-center w-full max-w-2xl">
            {topics.map((topic, idx) => {
              const isActive = activeTopic === topic;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveTopic(topic)}
                  className={`text-[10px] md:text-xs font-bold px-4 py-1.5 rounded-full border transition-all ${
                    isActive 
                      ? 'bg-xoriant-green border-xoriant-green text-white shadow-sm' 
                      : 'bg-white border-gray-250 text-slate-700 hover:border-slate-400 hover:text-black'
                  }`}
                >
                  {topic}
                </button>
              );
            })}
          </div>
        </div>

        {/* Asymmetric Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-4">
          
          {/* Column 1: Infographic (Tall Card) */}
          <div className="rounded-2xl overflow-hidden border border-gray-100 bg-[#f8fafc] shadow-sm flex flex-col justify-between transition-all duration-300 hover:shadow-md">
            <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100">
              <img 
                src={resources[0].image} 
                alt={resources[0].title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-102"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-[10px] md:text-xs font-extrabold text-xoriant-green uppercase tracking-wider">
                  {resources[0].type}
                </span>
                <h3 className="text-base md:text-lg font-extrabold text-black leading-snug">
                  {resources[0].title}
                </h3>
              </div>
              <div className="pt-6">
                <a 
                  href="#resource"
                  className="inline-flex items-center gap-1 text-[11px] font-extrabold text-black hover:text-xoriant-green uppercase tracking-wider transition-colors"
                >
                  Know More <span className="text-[10px] select-none">▶</span>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Webinar and Podcast (Tall Card) */}
          <div className="rounded-2xl overflow-hidden border border-gray-100 bg-[#f8fafc] shadow-sm flex flex-col justify-between transition-all duration-300 hover:shadow-md">
            <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100">
              <img 
                src={resources[1].image} 
                alt={resources[1].title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-102"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-[10px] md:text-xs font-extrabold text-xoriant-green uppercase tracking-wider">
                  {resources[1].type}
                </span>
                <h3 className="text-base md:text-lg font-extrabold text-black leading-snug">
                  {resources[1].title}
                </h3>
              </div>
              <div className="pt-6">
                <a 
                  href="#resource"
                  className="inline-flex items-center gap-1 text-[11px] font-extrabold text-black hover:text-xoriant-green uppercase tracking-wider transition-colors"
                >
                  Know More <span className="text-[10px] select-none">▶</span>
                </a>
              </div>
            </div>
          </div>

          {/* Column 3: Two Split Stacked Cards */}
          <div className="flex flex-col gap-5">
            
            {/* Top Stacked split Card */}
            <div className="grid grid-cols-2 rounded-2xl overflow-hidden border border-gray-100 bg-[#f8fafc] shadow-sm transition-all duration-300 hover:shadow-md flex-1">
              <div className="w-full h-full bg-slate-100 overflow-hidden">
                <img 
                  src={resources[2].image} 
                  alt={resources[2].title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-102"
                />
              </div>
              <div className="p-5 flex flex-col justify-between">
                <div className="space-y-1.5">
                  <span className="text-[10px] font-extrabold text-xoriant-green uppercase tracking-wider">
                    {resources[2].type}
                  </span>
                  <h3 className="text-sm font-extrabold text-black leading-snug line-clamp-3">
                    {resources[2].title}
                  </h3>
                </div>
                <div className="pt-4">
                  <a 
                    href="#resource"
                    className="inline-flex items-center gap-1 text-[10px] font-extrabold text-black hover:text-xoriant-green uppercase tracking-wider transition-colors"
                  >
                    Know More <span className="text-[9px] select-none">▶</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Stacked split Card */}
            <div className="grid grid-cols-2 rounded-2xl overflow-hidden border border-gray-100 bg-[#f8fafc] shadow-sm transition-all duration-300 hover:shadow-md flex-1">
              <div className="w-full h-full bg-slate-100 overflow-hidden">
                <img 
                  src={resources[3].image} 
                  alt={resources[3].title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-102"
                />
              </div>
              <div className="p-5 flex flex-col justify-between">
                <div className="space-y-1.5">
                  <span className="text-[10px] font-extrabold text-xoriant-green uppercase tracking-wider">
                    {resources[3].type}
                  </span>
                  <h3 className="text-sm font-extrabold text-black leading-snug line-clamp-3">
                    {resources[3].title}
                  </h3>
                </div>
                <div className="pt-4">
                  <a 
                    href="#resource"
                    className="inline-flex items-center gap-1 text-[10px] font-extrabold text-black hover:text-xoriant-green uppercase tracking-wider transition-colors"
                  >
                    Know More <span className="text-[9px] select-none">▶</span>
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
