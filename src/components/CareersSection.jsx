import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function CareersSection() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 overflow-hidden border-b border-slate-900">
      
      {/* Decorative vector overlays */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-grid-pattern opacity-10 pointer-events-none hidden md:block" />
      <div className="absolute -left-12 top-1/4 w-96 h-96 bg-xoriant-green/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Callout text */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-1.5 bg-xoriant-green/10 border border-xoriant-green/20 text-xoriant-green text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
              <Sparkles className="w-3.5 h-3.5" />
              Careers At Xoriant
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
              Discover the <span className="text-gradient font-black">XFactor</span>. Build Your Engineering Legacy.
            </h2>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
              We cultivate an environment of continuous learning, architectural freedom, and client value co-creation. Build SaaS products, optimize enterprise systems, and orchestrate generative AI models alongside global technology experts.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-900">
              <span className="block text-sm font-bold text-white">Continuous Upskilling</span>
              <span className="block text-[10px] text-gray-500 mt-1">Access advanced certificates in AI, AWS, Azure, and Snowflake.</span>
            </div>
            <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-900">
              <span className="block text-sm font-bold text-white">Innovation Lab</span>
              <span className="block text-[10px] text-gray-500 mt-1">Develop blueprints in our AI Sandbox and Orian orchestration cells.</span>
            </div>
            <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-900">
              <span className="block text-sm font-bold text-white">Collaborative Ethos</span>
              <span className="block text-[10px] text-gray-500 mt-1">Work within cross-functional cells directly cooperating with client architects.</span>
            </div>
          </div>

          <div className="pt-2">
            <a 
              href="#contact"
              className="inline-flex items-center gap-2 bg-xoriant-green hover:bg-[#009632] text-white font-bold text-xs md:text-sm px-6 py-3.5 rounded-lg transition-all duration-300 shadow-lg shadow-xoriant-green/10"
            >
              Explore Open Positions
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Right Side: Image Callout */}
        <div className="lg:col-span-5 relative">
          <div className="relative aspect-video lg:aspect-square rounded-2xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-900">
            <img 
              src="https://www.xoriant.com/cdn/ff/15m_4GscW-0jXG1z-Fm9H8rV4_P5Q2c-90hS23g_QoE/1771476515/public/styles/webp/public/2026-02/Board-Announcement-banner-Desktop.jpg.webp?itok=38s4e1_Q" 
              alt="Xoriant Employees Collaborating" 
              className="w-full h-full object-cover opacity-80"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex items-end p-6">
              <div className="space-y-1">
                <span className="text-[10px] text-xoriant-green font-bold uppercase tracking-wider">Xoriant Life</span>
                <p className="text-xs md:text-sm text-white font-bold">"Building SaaS platforms that power modern digital commerce."</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
