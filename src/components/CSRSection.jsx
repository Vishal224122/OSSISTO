import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';

export default function CSRSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      title: "Supporting Education for Underprivileged Children",
      desc: "We sponsor smart classrooms, libraries, and science labs across municipal schools, enabling access to quality tech education.",
      category: "Education",
      image: "__OSSISTO_URL_PLACEHOLDER_0__"
    },
    {
      title: "Primary Healthcare & Vaccination Camps",
      desc: "Establishing mobile clinics and hosting diagnostic screening camps to assist localized rural neighborhoods with essential wellness support.",
      category: "Healthcare",
      image: "__OSSISTO_URL_PLACEHOLDER_1__"
    },
    {
      title: "Afforestation & Renewable Energy Commitments",
      desc: "Contributing to carbon neutrality by planting trees and converting delivery center servers to run on sustainable grid systems.",
      category: "Environment",
      image: "__OSSISTO_URL_PLACEHOLDER_2__"
    }
  ];

  const handlePrev = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="bg-[#0b0f19] py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-900">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4 max-w-2xl">
            <span className="inline-flex items-center gap-1 bg-ossisto-blue/10 text-ossisto-blue text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-md">
              <Heart className="w-3 h-3 animate-pulse" />
              Social Impact
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Corporate Social <span className="text-gradient font-black">Responsibility</span>
            </h2>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
              We believe in co-creating positive social value. Discover our CSR initiatives aimed at nurturing education, health, and clean environment guidelines.
            </p>
          </div>

          {/* Indicators & Arrows */}
          <div className="flex items-center space-x-3 shrink-0">
            <button 
              onClick={handlePrev}
              className="bg-slate-950 hover:bg-ossisto-blue/20 text-gray-400 hover:text-white p-2.5 rounded-lg border border-slate-900 hover:border-ossisto-blue transition-all"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={handleNext}
              className="bg-slate-950 hover:bg-ossisto-blue/20 text-gray-400 hover:text-white p-2.5 rounded-lg border border-slate-900 hover:border-ossisto-blue transition-all"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CSR Slider Card */}
        <div className="bg-slate-950 border border-slate-900 rounded-3xl overflow-hidden shadow-lg grid grid-cols-1 md:grid-cols-2 items-center">
          
          {/* Left panel: Image */}
          <div className="aspect-video md:aspect-auto md:h-80 bg-slate-900 relative">
            <img 
              src={slides[activeSlide].image} 
              alt={slides[activeSlide].title} 
              className="w-full h-full object-contain p-8 md:p-12 opacity-80"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <div className="absolute inset-0 bg-slate-950/20" />
          </div>

          {/* Right panel: text info */}
          <div className="p-8 md:p-12 space-y-4">
            <span className="text-[10px] font-bold text-ossisto-blue uppercase tracking-widest block">
              {slides[activeSlide].category} Campaign
            </span>
            <h3 className="text-xl font-bold text-white tracking-wide">
              {slides[activeSlide].title}
            </h3>
            <p className="text-xs text-gray-400 leading-relaxed font-medium">
              {slides[activeSlide].desc}
            </p>
            <div className="pt-2 flex items-center space-x-1.5">
              {slides.map((_, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveSlide(idx)}
                  className={`h-1 rounded-full transition-all ${idx === activeSlide ? 'w-6 bg-ossisto-blue' : 'w-2 bg-gray-700'}`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
