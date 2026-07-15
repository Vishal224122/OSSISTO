import React, { useState } from 'react';
import { Play, X, Monitor, RefreshCw, Cpu, Zap, Settings, TrendingUp, HeartPulse, Store, Factory } from 'lucide-react';

export default function DreamDetails() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [engineerTab, setEngineerTab] = useState(0);

  const partnerLogos = [
    {
      name: "Salesforce",
      type: "image",
      src: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg"
    },
    {
      name: "Matilda Cloud",
      type: "custom",
      render: () => (
        <div className="flex items-center gap-1.5 text-slate-850 shrink-0 select-none">
          <svg viewBox="0 0 24 24" className="w-5.5 h-5.5 text-blue-600 fill-current" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 18V6c0-1.1.9-2 2-2h2.5c1.1 0 2 .9 2 2v12h-2V6H5v12H3zm8 0V6c0-1.1.9-2 2-2h2.5c1.1 0 2 .9 2 2v12h-2V6h-2.5v12h-2z" />
          </svg>
          <div className="flex flex-col leading-none font-sans">
            <span className="text-[12px] font-black tracking-tight text-slate-900">matilda</span>
            <span className="text-[9px] font-medium text-slate-500">cloud</span>
          </div>
        </div>
      )
    },
    {
      name: "Ab Initio",
      type: "custom",
      render: () => (
        <div className="flex items-center gap-0.5 text-[#2272b4] font-semibold text-[14px] italic font-sans tracking-tight shrink-0 select-none">
          <span className="text-red-500 text-base font-black not-italic">ab</span>
          <span className="text-slate-800 font-extrabold not-italic">initio</span>
        </div>
      )
    },
    {
      name: "DigitalEx",
      type: "custom",
      render: () => (
        <div className="flex items-center gap-1 font-sans font-black text-slate-900 shrink-0 select-none">
          <div className="w-5.5 h-5.5 rounded-md bg-[#111625] flex items-center justify-center text-white font-serif text-[10px]">D</div>
          <span className="text-[13px] font-bold">Digital<span className="text-xoriant-green font-black">Ex</span></span>
        </div>
      )
    },
    {
      name: "Snowflake",
      type: "image",
      src: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Snowflake_Logo.svg"
    },
    {
      name: "AWS",
      type: "image",
      src: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
    },
    {
      name: "Google Cloud",
      type: "image",
      src: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg"
    },
    {
      name: "Microsoft Azure",
      type: "image",
      src: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg"
    }
  ];

  const steps = [
    {
      letter: "DEFINE",
      subtitle: "Tomorrow",
      icon: Monitor,
      description: "We translate your vision into an intelligent roadmap, engineering adaptive, AI-native platforms built for measurable outcomes.",
      cards: [
        {
          title: "Engineering For The Intelligent Enterprise",
          image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=600&auto=format&fit=crop",
          hasPlayButton: true
        },
        {
          title: "Process & AI Consulting",
          image: "https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?q=80&w=600&auto=format&fit=crop"
        }
      ]
    },
    {
      letter: "REVITALIZE",
      subtitle: "Today",
      icon: RefreshCw,
      description: "Revitalizing systems with AI and data readiness, modernizing legacy foundations for cognitive operations.",
      cards: [
        {
          title: "Legacy Migration & Re-platforming",
          image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=600&auto=format&fit=crop"
        },
        {
          title: "Data Platform Engineering",
          image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop"
        }
      ]
    },
    {
      letter: "ENGINEER",
      subtitle: "Next",
      icon: Cpu,
      description: "A complete spectrum of modern engineering services built on a strong foundation of AI and deep technology expertise.",
      tabs: [
        {
          name: "Digital",
          title: "Digital Engineering",
          text: "From emerging possibilities to an agile cycle of intelligent solution development – discover how everything connects through our strong engineering DNA, product engineering expertise, and trusted partner ecosystem.",
          services: [
            { title: "Product & Platform Engineering", desc: "Next-generation solutions engineered through software innovation, built and scaled at speed." },
            { title: "Application Development & Management", desc: "AI-native application architectures designed while systematically reducing legacy technical debt." },
            { title: "Modernization", desc: "Build resilient, AI-ready IT environments with improved efficiency, adaptability, and scalability." },
            { title: "Quality Engineering", desc: "Achieve engineering excellence through AI assurance and automation." },
            { title: "Experience Transformation", desc: "Unlock new opportunities through intelligent experiences engineered for evolving user expectations." },
            { title: "API & Integrations", desc: "Enable applications and systems to connect, orchestrate, and exchange data seamlessly." },
            { title: "Global Capability Centers", desc: "Build and scale high-performance GCCs powered by top engineering talent." },
            { title: "Engineering Platforms For Growth", desc: "Xoriant: Engineering Scalable Platforms for Business Growth." }
          ]
        },
        {
          name: "Cloud",
          title: "Cloud & Infrastructure",
          text: "Accelerate your transition to cloud-native systems with engineered pipelines, zero-trust cloud architectures, and proactive FinOps governance.",
          services: [
            { title: "Cloud Migration & Re-platforming", desc: "Re-host, re-platform, and decouple workloads to AWS, Azure, and Google Cloud." },
            { title: "FinOps & Infrastructure Audit", desc: "Audit compute workloads and reduce unnecessary multi-cloud overheads." },
            { title: "DevSecOps Pipeline Automation", desc: "Automate security scanning directly into your CI/CD delivery pipelines." },
            { title: "Site Reliability (SRE)", desc: "Maintain 99.99% availability with automated alerts and auto-healing services." },
            { title: "Serverless Architectures", desc: "Optimize compute scaling and pay only for actual execution runtime." },
            { title: "Multi-Cloud Governance", desc: "Centralize access control, security policies, and resource logging." },
            { title: "Infrastructure as Code (IaC)", desc: "Define and provision infrastructure using Terraform and Ansible." },
            { title: "Managed Cloud Services", desc: "24/7 proactive monitoring, backup management, and environment patching." }
          ]
        },
        {
          name: "Data & AI",
          title: "Data Foundations & Applied AI",
          text: "Transition from raw analytics to cognitive operations. We design agentic workflows, clean data warehouses, and secure enterprise LLMs.",
          services: [
            { title: "Agentic AI Orchestration", desc: "Deploy intelligent agents that execute tasks and workflows autonomously." },
            { title: "Data Foundation & Pipelines", desc: "Consolidate databases using Snowflake, Databricks, and dbt." },
            { title: "Cognitive Document Audits", desc: "Automate mortgage, invoice, and contract processing using custom LLMs." },
            { title: "MLOps & Model Protection", desc: "Train, validate, deploy, and safeguard models against prompt injection." },
            { title: "Business Intelligence & Reporting", desc: "Build real-time dashboards to drive data-informed decisions." },
            { title: "Vector DB & RAG Setup", desc: "Enable semantic search across internal corporate knowledge bases." },
            { title: "Predictive Data Science", desc: "Forecast user churn, asset failures, and sales trends using regression models." },
            { title: "Data Governance & Quality", desc: "Track lineage, enforce compliance, and maintain clean master data catalogs." }
          ]
        },
        {
          name: "Security",
          title: "Cyber Security & Compliance",
          text: "Enforce zero-trust principles across all applications, APIs, and infrastructure. Continuous auditing to secure your digital core.",
          services: [
            { title: "Identity & Access Management", desc: "Enforce zero-trust controls, single sign-on (SSO), and role-based permissions." },
            { title: "Application & API Shielding", desc: "Block API scraping and application threats using dynamic firewalls." },
            { title: "Compliance & Drift Monitoring", desc: "Continuous auditing to track compliance drift against SOC2/ISO metrics." },
            { title: "24/7 Security Operations (SOC)", desc: "Proactive threat hunting and incident response handled by experts." },
            { title: "Penetration Testing", desc: "Simulate cyber attacks to find vulnerabilities before adversaries do." },
            { title: "Cloud Security Posture (CSPM)", desc: "Audit container configurations and cloud permissions in real-time." },
            { title: "Vulnerability Auditing", desc: "Automate package scanning to block supply-chain dependencies risks." },
            { title: "Disaster Recovery Operations", desc: "Guarantee data redundancy and fast recovery times for critical workloads." }
          ]
        }
      ]
    },
    {
      letter: "ACCELERATE",
      subtitle: "Value",
      icon: Zap,
      description: "Accelerating time-to-value with Xoriant accelerators, proven frameworks, and automated delivery pipelines.",
      cards: [
        {
          title: "CORE Accelerator Frameworks",
          image: "https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=600&auto=format&fit=crop"
        },
        {
          title: "DevSecOps Pipeline Automation",
          image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=600&auto=format&fit=crop"
        }
      ]
    },
    {
      letter: "MANAGE",
      subtitle: "Change",
      icon: Settings,
      description: "Industries are experiencing rapid technology shifts as AI reshapes how businesses operate. We help bridge the gap between today’s systems and tomorrow’s capabilities through structured transformation and continuous innovation.",
      industries: [
        { name: "Banking & Financial Services", icon: TrendingUp },
        { name: "Hi-Tech", icon: Cpu },
        { name: "Healthcare & Life Sciences", icon: HeartPulse },
        { name: "Retail & CPG", icon: Store },
        { name: "Manufacturing", icon: Factory }
      ]
    }
  ];

  return (
    <section id="dream-details" className="bg-white py-16 px-6 md:px-12 lg:px-24 border-b border-gray-100 font-sans relative overflow-hidden">
      
      {/* Inline styles for the horizontal logo marquee */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-slow {
          display: flex;
          width: max-content;
          animation: marquee-scroll 28s linear infinite;
        }
        .animate-marquee-slow:hover {
          animation-play-state: paused;
        }
      `}} />

      {/* Decorative Top-Left Dots Grid */}
      <div className="absolute top-8 left-8 hidden lg:grid grid-cols-4 gap-1.5 opacity-20 pointer-events-none">
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-slate-500" />
        ))}
      </div>

      {/* Decorative Right-Side Dots Columns */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:grid grid-cols-2 gap-2 opacity-20 pointer-events-none">
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-slate-500" />
        ))}
      </div>

      {/* Decorative Bottom-Right Arrowheads Grid */}
      <div className="absolute bottom-16 right-16 hidden lg:flex flex-col gap-2 items-end opacity-20 pointer-events-none">
        {[1, 2, 3, 4, 5].map((count, rIdx) => (
          <div key={rIdx} className="flex gap-2">
            {Array.from({ length: count }).map((_, cIdx) => (
              <svg key={cIdx} className="w-2.5 h-2.5 text-slate-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            ))}
          </div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative mt-20 pb-20">
        
        {/* S-curve Connector at the very top (Responsive HTML/CSS) */}
        <div className="hidden md:block absolute top-[-100px] left-[39px] right-1/2 h-[100px] pointer-events-none z-0">
          {/* Top Dot in the center */}
          <div className="absolute right-[-4px] top-0 w-2 h-2 rounded-full bg-black" />
          {/* Right curve (vertical down to left) */}
          <div className="absolute right-0 top-0 w-1/2 h-1/2 border-r-2 border-b-2 border-xoriant-green rounded-br-[24px]" />
          {/* Left curve (horizontal left to down) */}
          <div className="absolute left-0 bottom-0 w-1/2 h-1/2 border-l-2 border-t-2 border-xoriant-green rounded-tl-[24px]" />
        </div>

        {/* Continuous Vertical Timeline Line */}
        <div className="hidden md:block absolute left-[39px] top-0 bottom-0 w-0.5 bg-xoriant-green" />

        {/* S-curve Connector at the very bottom (Responsive HTML/CSS) */}
        <div className="hidden md:block absolute bottom-0 left-[39px] right-1/2 h-[100px] pointer-events-none z-0">
          {/* Left curve (vertical down to right) */}
          <div className="absolute left-0 top-0 w-1/2 h-1/2 border-l-2 border-b-2 border-xoriant-green rounded-bl-[24px]" />
          {/* Right curve (horizontal right to down) */}
          <div className="absolute right-0 bottom-0 w-1/2 h-1/2 border-r-2 border-t-2 border-xoriant-green rounded-tr-[24px]" />
          {/* Bottom Dot in the center */}
          <div className="absolute right-[-4px] bottom-0 w-2 h-2 rounded-full bg-black" />
        </div>

        {/* Roadmap Steps */}
        <div className="space-y-24 pl-0 md:pl-20">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isEngineer = step.letter === "ENGINEER";
            const isManage = step.letter === "MANAGE";

            return (
              <div key={idx} className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Node circle on the timeline */}
                <div className="hidden md:flex absolute left-[-57px] top-1.5 w-8 h-8 rounded-full bg-black border-2 border-xoriant-green items-center justify-center z-10 shadow-md">
                  <Icon className="w-4 h-4 text-white" />
                </div>

                {/* Left part: Heading details */}
                <div className="lg:col-span-4 space-y-5 pr-4">
                  <div className="space-y-2">
                    <span className="block text-4xl lg:text-5xl font-black text-xoriant-green tracking-tight uppercase leading-none">
                      {step.letter}
                    </span>
                    <h3 className="text-2xl lg:text-3.5xl font-extrabold text-black tracking-tight leading-none">
                      {step.subtitle}
                    </h3>
                  </div>
                  
                  <p className="text-[15px] font-bold text-slate-800 leading-relaxed pt-1">
                    {step.description}
                  </p>

                  {/* Vertical domain selectors for ENGINEER Next */}
                  {isEngineer && (
                    <div className="flex flex-col gap-3 pt-6 border-t border-slate-100 mt-4">
                      {step.tabs.map((tab, tIdx) => {
                        const isActive = engineerTab === tIdx;
                        return (
                          <button
                            key={tIdx}
                            onClick={() => setEngineerTab(tIdx)}
                            className={`flex items-center gap-2 text-left font-extrabold text-lg md:text-xl py-1 transition-all ${
                              isActive 
                                ? 'text-black pl-0' 
                                : 'text-slate-400 hover:text-slate-600 pl-5'
                            }`}
                          >
                            {isActive && <span className="text-xoriant-green text-sm">▶</span>}
                            {tab.name}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Right part: Cards Grid or Engineer Dashboard or Manage Industries */}
                <div className="lg:col-span-8">
                  {isEngineer ? (
                    // ENGINEER Next Dashboard layout
                    <div className="space-y-8">
                      {/* Highlighted Domain Card */}
                      <div className="bg-[#f8fafc] border border-slate-100 p-6 md:p-8 rounded-2xl space-y-4 shadow-sm">
                        <h4 className="text-2xl font-black text-xoriant-green">
                          {step.tabs[engineerTab].title}
                        </h4>
                        <p className="text-xs md:text-sm text-slate-600 font-medium leading-relaxed">
                          {step.tabs[engineerTab].text}
                        </p>
                        <a 
                          href="#contact"
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-xoriant-green hover:text-[#009632] uppercase tracking-wider transition-colors pt-1"
                        >
                          Learn More <span className="text-[10px]">▶</span>
                        </a>
                      </div>

                      {/* Services Grid (8 offerings) */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 border-t border-slate-100 pt-6">
                        {step.tabs[engineerTab].services.map((service, sIdx) => (
                          <div key={sIdx} className="space-y-1">
                            <h5 className="text-sm font-extrabold text-black">
                              {service.title}
                            </h5>
                            <p className="text-xs text-slate-500 font-medium leading-relaxed">
                              {service.desc}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : isManage ? (
                    // MANAGE Change Industries grid
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-12 pt-4">
                      {step.industries.map((ind, iIdx) => {
                        const IndIcon = ind.icon;
                        return (
                          <div key={iIdx} className="flex flex-col items-start space-y-4 max-w-[200px]">
                            <div className="w-12 h-12 flex items-center justify-center text-black shrink-0">
                              <IndIcon className="w-10 h-10 stroke-[1.25]" />
                            </div>
                            <h4 className="text-sm font-extrabold text-black leading-tight">
                              {ind.name}
                            </h4>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    // Standard Cards Grid (2 columns side-by-side)
                    <div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {step.cards.map((card, cidx) => (
                          <div 
                            key={cidx} 
                            className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-gray-100 group aspect-[4/3] bg-slate-950 transition-all duration-300 hover:-translate-y-1"
                          >
                            {/* Background Thumbnail Image */}
                            <img 
                              src={card.image} 
                              alt={card.title}
                              className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                            />

                            {/* Dark Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

                            {/* Play Button if active */}
                            {card.hasPlayButton && (
                              <button 
                                onClick={() => setIsVideoOpen(true)}
                                className="absolute top-4 left-4 bg-xoriant-green hover:bg-[#009632] text-white p-2.5 rounded-lg shadow-md hover:scale-110 active:scale-95 transition-all duration-200 z-10"
                                aria-label="Play case study"
                              >
                                <Play className="w-4 h-4 fill-white stroke-none ml-0.5" />
                              </button>
                            )}

                            {/* Title Text bottom aligned */}
                            <div className="absolute bottom-5 left-5 right-5 z-10">
                              <h4 className="text-base md:text-lg font-bold text-white leading-tight tracking-tight">
                                {card.title}
                              </h4>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Collaborators / Partners Widget for DEFINE Tomorrow */}
                      {idx === 0 && (
                        <div className="mt-12 border-t border-slate-100 pt-8 space-y-4">
                          <span className="block text-sm font-bold text-xoriant-green uppercase tracking-wider">
                            Our Collaborators
                          </span>
                          <h4 className="text-xl md:text-2xl font-extrabold text-black leading-tight tracking-tight">
                            Partners in our Digital Engineering Footsteps
                          </h4>
                          
                          {/* Infinite Horizontal Logo Marquee */}
                          <div className="relative flex overflow-hidden w-full bg-[#f8fafc] py-5 rounded-xl border border-slate-100 mt-4 select-none">
                            <div className="flex gap-12 shrink-0 items-center animate-marquee-slow">
                              {[...partnerLogos, ...partnerLogos].map((logo, lIdx) => (
                                <div key={lIdx} className="h-6 md:h-8 flex items-center justify-center px-2 shrink-0">
                                  {logo.type === "image" ? (
                                    <img 
                                      src={logo.src} 
                                      alt={logo.name} 
                                      className="h-full object-contain filter opacity-80 hover:opacity-100 transition-opacity duration-300"
                                      style={{ maxWidth: '90px' }}
                                    />
                                  ) : (
                                    logo.render()
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* All Partners Button */}
                          <div className="pt-2">
                            <a 
                              href="#contact"
                              className="inline-flex items-center gap-1 text-xs md:text-sm font-bold text-black hover:text-xoriant-green uppercase tracking-wider transition-colors"
                            >
                              All Partners <span className="text-[10px] select-none">▶</span>
                            </a>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>

              </div>
            );
          })}
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
              className="absolute top-4 right-4 text-white hover:text-xoriant-green z-50 p-2 bg-slate-950/60 rounded-full border border-slate-800 hover:border-xoriant-green transition-all"
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
