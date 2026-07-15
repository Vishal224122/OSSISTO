import React, { useState } from 'react';

export default function SuccessStories() {
  const [activeStory, setActiveStory] = useState(4); // Default to index 4 (number 5) to match screenshot exactly

  const stories = [
    {
      bgTitle: "Building The Next-Gen CRM",
      linkTitle: "Salesforce Instance Pipeline Optimization",
      description: "For a leading cloud security vendor, Xoriant engineered decoupled Apex triggers and customized routing configurations, boosting sales velocity by 45%.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop"
    },
    {
      bgTitle: "Unifying Supply Chain Data",
      linkTitle: "Tableau Cloud & Snowflake Data Pipeline",
      description: "Consolidated scattered dashboards for a global CPG retailer, reducing decision-making latency and database query overheads by 60%.",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop"
    },
    {
      bgTitle: "Enforcing Compliance Rigor",
      linkTitle: "Basel III Compliance Automation for Tier-1 Bank",
      description: "Designed automated data ledgers and auditing pipelines, reducing operational risk assessment cycles by 50% without regulatory drift.",
      image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=800&auto=format&fit=crop"
    },
    {
      bgTitle: "AI-Native Underwriting",
      linkTitle: "Cognitive Document Processor for Loan Auditing",
      description: "Built custom LLM extraction flows to process mortgage files, saving loan officers up to 80% on document validation times.",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop"
    },
    {
      bgTitle: "Modernizing Financial Systems For A Global Bank",
      linkTitle: "EAB's Zero-Incident Deployments with Xoriant",
      description: "Ahead of Bulgaria's legally mandated Euro (EUR) adoption on 1 January 2026, a leading financial institution partnered with Xoriant to execute zero-incident system migrations.",
      image: "/neon_mortarboard.png"
    },
    {
      bgTitle: "Zero-Trust Cloud Shielding",
      linkTitle: "SaaS Application Security Orchestration",
      description: "Architected containerized firewall filters and granular role-based identity nodes, shielding critical APIs from scraping threats.",
      image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section id="success-stories" className="bg-white py-20 px-6 md:px-12 lg:px-24 border-b border-gray-100 font-sans flex flex-col items-center">
      <div className="max-w-3xl w-full mx-auto space-y-10">
        
        {/* Section Header */}
        <div className="text-center space-y-2">
          <span className="block text-xl md:text-2xl font-black text-xoriant-green tracking-wide">
            D.R.E.A.M. Realized
          </span>
          <h2 className="text-sm md:text-base font-extrabold text-black uppercase tracking-wider">
            Success Stories
          </h2>
        </div>

        {/* Spotlight Card */}
        <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl border border-gray-150 grid grid-cols-1 md:grid-cols-12 min-h-[165px] bg-slate-950">
          
          {/* Left Panel */}
          <div className="md:col-span-6 bg-[#f8fafc] border-t-[5px] border-xoriant-green p-4 md:p-5 flex flex-col justify-between relative min-h-[165px]">
            
            {/* Watermark & Content Area */}
            <div className="relative flex-1 flex flex-col justify-center">
              
              {/* Watermark background title */}
              <div className="absolute inset-0 flex items-center select-none pointer-events-none overflow-hidden">
                <h3 className="text-2.5xl md:text-3.5xl font-black text-[#eaecef] leading-tight uppercase tracking-tight w-full">
                  {stories[activeStory].bgTitle}
                </h3>
              </div>
              
              {/* Content overlay */}
              <div className="relative z-10 space-y-3.5">
                {/* Active story link */}
                <a 
                  href="#case-study"
                  className="inline-block text-xs md:text-[13px] font-extrabold text-[#1a83b7] hover:underline bg-[#f8fafc]/80 py-0.5 rounded"
                >
                  {stories[activeStory].linkTitle}
                </a>
                
                {/* Active story description */}
                <p className="text-[13px] md:text-[14px] font-bold text-[#7a889b] leading-relaxed max-w-sm bg-[#f8fafc]/95 rounded pr-4">
                  {stories[activeStory].description}
                </p>
              </div>

            </div>

            {/* Bottom Navigation Pagination */}
            <div className="flex items-center space-x-2 pt-6">
              {stories.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveStory(idx)}
                  className={`w-7 h-7 rounded-full flex items-center justify-center font-extrabold text-xs transition-all border ${
                    activeStory === idx
                      ? 'bg-xoriant-green border-xoriant-green text-white shadow-md shadow-xoriant-green/10'
                      : 'bg-white border-gray-200 text-slate-700 hover:border-slate-400'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                >
                  {idx + 1}
                </button>
              ))}
            </div>

          </div>

          {/* Right Panel (Graphic Image) */}
          <div className="md:col-span-6 relative overflow-hidden bg-slate-900 aspect-square md:aspect-auto">
            <img 
              src={stories[activeStory].image} 
              alt={stories[activeStory].linkTitle}
              className="w-full h-full object-cover opacity-90 transition-all duration-700 hover:scale-102"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
