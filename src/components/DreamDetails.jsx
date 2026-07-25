import React, { useState } from 'react';
import { Play, X, Monitor, RefreshCw, Cpu, Zap, Settings, TrendingUp, HeartPulse, Store, Factory, Car, Pill, Utensils, Hammer, Package } from 'lucide-react';

export default function DreamDetails() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [engineerTab, setEngineerTab] = useState(3);

  const steps = [
    {
      letter: "SERVICES",
      subtitle: "One Partner for your complete manufacturing Stack",
      isServicesSection: true,
      cards: [
        {
          title: "AI & Data",
          image: "/AI & Data.png"
        },
        {
          title: "Engineering Services",
          image: "/Engineering Services.png"
        },
        {
          title: "Enterprise Digital & IT",
          image: "/Enterprise Digital & IT_v02.jpg"
        },
        {
          title: "Industry 4.0",
          image: "/Industry 4.0_ver3.png"
        }
      ]
    },
    {
      letter: "SERVICES IN DETAIL",
      subtitle: "We serve your IT and Digital needs in a comprehensive manner",
      isEngineerSection: true,
      icon: Cpu,
      description: "A complete spectrum of modern engineering services built on a strong foundation of AI and deep technology expertise.",
      tabs: [
        {
          name: "Digital",
          title: "Digital Engineering",
          image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=800&auto=format&fit=crop",
          text: "From emerging possibilities to an agile cycle of intelligent solution development – discover how everything connects through our strong engineering DNA, product engineering expertise, and trusted partner ecosystem.",
          services: [
            { title: "Product & Platform Engineering", desc: "Next-generation solutions engineered through software innovation, built and scaled at speed." },
            { title: "Application Development & Management", desc: "AI-native application architectures designed while systematically reducing legacy technical debt." },
            { title: "Modernization", desc: "Build resilient, AI-ready IT environments with improved efficiency, adaptability, and scalability." },
            { title: "Quality Engineering", desc: "Achieve engineering excellence through AI assurance and automation." },
            { title: "Experience Transformation", desc: "Unlock new opportunities through intelligent experiences engineered for evolving user expectations." },
            { title: "API & Integrations", desc: "Enable applications and systems to connect, orchestrate, and exchange data seamlessly." },
            { title: "Global Capability Centers", desc: "Build and scale high-performance GCCs powered by top engineering talent." },
            { title: "Engineering Platforms For Growth", desc: "Ossisto: Engineering Scalable Platforms for Business Growth." }
          ]
        },
        {
          name: "Cloud",
          title: "Cloud & Infrastructure",
          image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=800&auto=format&fit=crop",
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
          image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
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
          image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop",
          text: "Enforce zero-trust principles across all applications, APIs, and infrastructure. Continuous auditing to secure your digital core.",
          services: [
            { title: "Identity & Access Management", desc: "Enforce zero-trust controls, single sign-on (SSO), and role-based permissions." },
            { title: "Application & API Shielding", desc: "Block API scraping and application threats using dynamic firewalls." },
            { title: "Compliance & Drift Monitoring", desc: "Continuous auditing to track compliance drift against SOC2/ISO metrics." },
            { title: "24/7 Security Operations (SOC)", desc: "Proactive threat hunting and incident response handled by experts." },
            { title: "Penetration Testing", desc: "Simulate cyber attacks to find vulnerabilities before adversaries do." },
            { title: "Cloud Security Posture (CSPM)", desc: "Audit container configurations and cloud permissions in real-time." },
            { title: "Vulnerability Auditing", desc: "" },
            { title: "Disaster Recovery Operations", desc: "" }
          ]
        }
      ]
    },
    {
      letter: "FOCUS SECTORS",
      isFocusSectorsSection: true,
      description: [
        "Focus creates specialization.",
        "We have created niche expertise in several manufacturing sectors.",
        "However, we stay dedicated to all sectors."
      ],
      sectors: [
        { name: "Automotive", icon: Car, bg: "bg-[#3292C3]", text: "text-white" },
        { name: "Pharma", icon: Pill, bg: "bg-[#66B6E0]", text: "text-slate-900" },
        { name: "Food processing", icon: Utensils, bg: "bg-[#8ED0EE]", text: "text-slate-900" },
        { name: "Speciality Steel", icon: Hammer, bg: "bg-[#CEE8F5]", text: "text-slate-900" },
        { name: "Packaging Industry", icon: Package, bg: "bg-[#E2F2FC]", text: "text-slate-900" }
      ]
    }
  ];

  return (
    <section id="dream-details" className="bg-white py-16 px-6 md:px-12 lg:px-24 font-sans relative overflow-hidden">
      
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



      <div className="max-w-6xl mx-auto relative mt-20 pb-20">
        
        {/* Roadmap Steps */}
        <div className="space-y-24 pl-0 md:pl-20">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isEngineer = step.letter === "SERVICES IN DETAIL" || step.letter === "ENGINEER";
            const isFocusSectors = step.isFocusSectorsSection;
            const isServices = step.isServicesSection;

            return (
              <div key={idx} className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Node circle on the timeline */}
                {!isServices && !isEngineer && !isFocusSectors && Icon && (
                  <div className="hidden md:flex absolute left-[-57px] top-1.5 w-8 h-8 rounded-full bg-black border-2 border-ossisto-blue items-center justify-center z-10 shadow-md">
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                )}

                {/* Left part: Heading details */}
                <div className="lg:col-span-4 space-y-5 pr-4">
                  {isServices ? (
                    <div className="space-y-4">
                      <span className="block text-lg font-black text-ossisto-blue tracking-wider uppercase">
                        SERVICES
                      </span>
                      <h3 className="text-2xl lg:text-3.5xl font-black text-black tracking-tight leading-tight">
                        One Partner for your complete manufacturing Stack
                      </h3>
                    </div>
                  ) : isEngineer ? (
                    <div className="space-y-4">
                      <span className="block text-lg font-black text-ossisto-blue tracking-wider uppercase">
                        SERVICES IN DETAIL
                      </span>
                      <h3 className="text-2xl lg:text-3.5xl font-black text-black tracking-tight leading-tight">
                        We serve your IT and Digital needs in a comprehensive manner
                      </h3>
                    </div>
                  ) : isFocusSectors ? (
                    <div className="space-y-4">
                      <span className="block text-lg font-black text-ossisto-blue tracking-wider uppercase">
                        FOCUS SECTORS
                      </span>
                      <div className="space-y-4 text-[15px] font-bold text-slate-800 leading-relaxed pt-1">
                        <p>Focus creates specialization.</p>
                        <p>We have created niche expertise in several manufacturing sectors.</p>
                        <p>However, we stay dedicated to all sectors.</p>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="space-y-2">
                        <span className="block text-4xl lg:text-5xl font-black text-ossisto-blue tracking-tight uppercase leading-none">
                          {step.letter}
                        </span>
                        <h3 className="text-2xl lg:text-3.5xl font-extrabold text-black tracking-tight leading-none">
                          {step.subtitle}
                        </h3>
                      </div>
                      <p className="text-[15px] font-bold text-slate-800 leading-relaxed pt-1">
                        {step.description}
                      </p>
                    </>
                  )}

                  {/* Vertical domain selectors for ENGINEER Next */}
                  {isEngineer && (
                    <div className="flex flex-col gap-3 pt-6 border-t border-slate-100 mt-4">
                      {step.tabs.map((tab, tIdx) => {
                        const isActive = engineerTab === tIdx;
                        return (
                          <button
                            key={tIdx}
                            onClick={() => setEngineerTab(tIdx)}
                            className={`flex items-center gap-2 text-left font-extrabold text-lg md:text-xl py-1 transition-all always-blue ${
                              isActive 
                                ? 'pl-0' 
                                : 'pl-5'
                            }`}
                            style={{
                              color: isActive ? '#236CB1' : 'rgba(35, 108, 177, 0.5)'
                            }}
                          >
                            {isActive && <span className="text-ossisto-blue text-sm">▶</span>}
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
                      {/* Highlighted Domain Card (Rounded Card Banner) */}
                      <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-md bg-slate-950">
                        <video 
                          src="/Services in detail video.mp4"
                          loop
                          playsInline
                          controls
                          className="w-full h-full object-cover opacity-80"
                        />
                      </div>

                    </div>
                  ) : isFocusSectors ? (
                    // FOCUS SECTORS horizontal stack
                    <div className="flex flex-col gap-3.5 max-w-xl">
                      {step.sectors.map((sec, sIdx) => {
                        const SecIcon = sec.icon;
                        return (
                          <div key={sIdx} className="flex items-center gap-6">
                            {/* Icon column */}
                            <div className="w-10 h-10 flex items-center justify-center text-slate-900 shrink-0">
                              {SecIcon && <SecIcon className="w-8 h-8 stroke-[1.75] text-slate-900" />}
                            </div>
                            {/* Colored rectangle */}
                            <div className={`flex-1 flex items-center justify-start pl-8 h-12 rounded-lg font-black text-lg md:text-xl tracking-wide shadow-sm hover:shadow-md transition-shadow duration-300 ${sec.bg} ${sec.text}`}>
                              {sec.name}
                            </div>
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
                            className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl group aspect-[4/3] bg-slate-950 transition-all duration-300 hover:-translate-y-1"
                          >
                            {/* Background Thumbnail Image */}
                            <img 
                              src={card.image} 
                              alt={card.title}
                              className="w-full h-full object-cover scale-[1.04] group-hover:scale-110 transition-transform duration-700"
                            />

                            {/* Dark Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                            {/* Border Overlay */}
                            <div className="absolute inset-0 border-2 border-slate-300/90 group-hover:border-[#236CB1] rounded-2xl pointer-events-none z-20 transition-colors duration-300" />

                            {/* Play Button if active */}
                            {card.hasPlayButton && (
                              <button 
                                onClick={() => setIsVideoOpen(true)}
                                className="absolute top-4 left-4 bg-ossisto-blue hover:bg-[#236CB1] text-white p-2.5 rounded-lg shadow-md hover:scale-110 active:scale-95 transition-all duration-200 z-10"
                                aria-label="Play case study"
                              >
                                <Play className="w-4 h-4 fill-white stroke-none ml-0.5" />
                              </button>
                            )}

                            {/* Title Text centered at the bottom */}
                            <div className="absolute bottom-5 left-5 right-5 text-center z-10">
                              <h4 className="text-base md:text-lg font-bold text-white leading-tight tracking-tight">
                                {card.title}
                              </h4>
                            </div>
                          </div>
                        ))}
                      </div>

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
