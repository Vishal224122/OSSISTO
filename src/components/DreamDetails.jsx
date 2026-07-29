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
          name: "ENTERPRISE DIGITAL & IT",
          title: "Enterprise Digital & IT",
          image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=800&auto=format&fit=crop",
          text: "From emerging possibilities to an agile cycle of intelligent solution development – discover how everything connects through our strong engineering DNA, product engineering expertise, and trusted partner ecosystem.",
          services: [
            { title: "Digital Transformation Consulting", desc: "Consulting strategies for scaling enterprise software ecosystems." },
            { title: "SAP Consulting & Services", desc: "Resilient systems, custom implementations, and SAP ecosystem maintenance." },
            { title: "Application Development & Modernization", desc: "Build modular, cloud-native apps while systematically reducing technical debt." },
            { title: "Cloud, DevOps & Infra", desc: "CI/CD automated pipelines, zero-trust cloud orchestration, and cloud audit paths." },
            { title: "Enterprise integration", desc: "Connecting distinct software applications and pipelines securely." },
            { title: "PLM Services", desc: "Deploying secure lifecycle management systems for engineering platforms." },
            { title: "Quality engineering and test automation", desc: "Next-gen test automation using AI-native testing architectures." }
          ]
        },
        {
          name: "AI & DATA",
          title: "AI & Data Solutions",
          image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
          text: "Transition from raw analytics to cognitive operations. We design agentic workflows, clean data warehouses, and secure enterprise LLMs.",
          services: [
            { title: "Data Engineering & integration", desc: "Extracting, transforming, and loading clean datasets via modern pipelines." },
            { title: "Analytics, BI and dashboards", desc: "Visualizing analytics, metrics, and shopfloor KPIs in real-time." },
            { title: "Gen AI solutions", desc: "Building, fine-tuning, and scaling generative enterprise systems." },
            { title: "Intelligent Automation", desc: "Automating administrative and production tasks with cognitive agents." },
            { title: "Applied AI and Machine Learning", desc: "Deploying production ML models to optimize business operations." },
            { title: "Computer & Machine Vision", desc: "Defect inspection, visual auditing, and spatial analytics using smart cameras." }
          ]
        },
        {
          name: "ENGINEERING SERVICES",
          title: "Engineering Services",
          image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=800&auto=format&fit=crop",
          text: "Modular resource planning, custom support pipelines, and hardware-software system engineering.",
          services: [
            { title: "Product Engineering Support", desc: "Tailored co-engineering and support systems for digital products." },
            { title: "Embedded Software & Firmware", desc: "Embedded coding, firmware flashing, and RTOS configurations." },
            { title: "E/E Systems Engineering Support", desc: "Electrical and electronic systems engineering for modern vehicles." },
            { title: "Product Sustenance & Lifecycle Support", desc: "Auditing, patching, updating, and scaling mature software products." },
            { title: "Testing and validation support", desc: "Assurance pipelines and regulatory audits for mission-critical apps." },
            { title: "Engineering documentation & drafting support", desc: "Technical documentation, standards compilation, and drafting." }
          ]
        },
        {
          name: "Industry 4.0",
          title: "Smart Factory & Industry 4.0",
          image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop",
          text: "Bridge physical manufacturing assets with cognitive cloud frameworks to build connected, smart industrial spaces.",
          services: [
            { title: "MES services", desc: "Implementing and optimizing Manufacturing Execution Systems." },
            { title: "Connected Factory (IIOT)", desc: "Integrating plant sensors, legacy machines, and cloud storage." },
            { title: "Connected Workforce", desc: "Empowering plant floor workers with digital analytics and logs." },
            { title: "Manufacturing analytics & OEE", desc: "Optimizing overall equipment effectiveness via cognitive dashboards." },
            { title: "Predictive maintenance", desc: "Predicting asset and component failure before they happen." },
            { title: "Supply Chain Digitization", desc: "Zero-latency supply chain traceability, shipping, and routing." }
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

            if (isEngineer) {
              return (
                <div key={idx} className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-start !mt-[18rem] !mb-[18rem]">
                  
                  {/* Top Row: Left Heading & Right Video */}
                  <div className="lg:col-span-4 space-y-4 pr-4">
                    <span className="block text-lg font-black text-ossisto-blue tracking-wider uppercase">
                      SERVICES IN DETAIL
                    </span>
                    <h3 className="text-2xl lg:text-3.5xl font-black text-black tracking-tight leading-tight">
                      We serve your IT and Digital needs in a comprehensive manner
                    </h3>
                  </div>

                  <div className="lg:col-span-8 flex justify-end">
                    <div className="relative w-full md:w-3/4 aspect-video rounded-2xl overflow-hidden shadow-md bg-slate-950">
                      <video 
                        src="/Services in detail video.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        controls
                        className="w-full h-full object-cover opacity-80"
                      />
                    </div>
                  </div>

                  {/* Bottom Row: Left Tab selectors & Right Services Grid */}
                  <div className="lg:col-span-4 pr-4 mt-6">
                    <div className="flex flex-col gap-3 pt-6 border-t border-slate-100">
                      {step.tabs.map((tab, tIdx) => {
                        const isActive = engineerTab === tIdx;
                        return (
                          <button
                            key={tIdx}
                            onClick={() => setEngineerTab(tIdx)}
                            className={`flex items-center gap-2 text-left font-extrabold text-[11px] sm:text-xs md:text-sm py-1 transition-all always-blue ${
                              isActive 
                                ? 'pl-0' 
                                : 'pl-4'
                            }`}
                            style={{
                              color: isActive ? '#236CB1' : 'rgba(35, 108, 177, 0.5)'
                            }}
                          >
                            {isActive && <span className="text-ossisto-blue text-xs">▶</span>}
                            {tab.name}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="lg:col-span-8 mt-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
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

                </div>
              );
            }

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
                </div>

                {/* Right part: Cards Grid or Manage Industries */}
                <div className="lg:col-span-8">
                  {isFocusSectors ? (
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
