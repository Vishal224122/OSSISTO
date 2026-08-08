import React, { useState, useEffect } from 'react';
import { Cpu, Layers, Shield, Zap, Monitor, Settings, RefreshCw, Sparkles, Code, Plus, Minus } from 'lucide-react';
import ContactAndLocations from './ContactAndLocations';

export default function ComputerMachineVision() {
  const [activeTab, setActiveTab] = useState('intro');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [activeResourceTab, setActiveResourceTab] = useState('thought');
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [activeStoryIdx, setActiveStoryIdx] = useState(1);

  const tabs = [
    { id: 'intro', name: 'Modernize, Optimize, Excel' },
    { id: 'capabilities', name: 'Our Capabilities' },
    { id: 'differentiators', name: 'Our Key Differentiators' },
    { id: 'insights', name: 'Featured Insight' },
    { id: 'delivery', name: 'How We Deliver' },
    { id: 'accelerators', name: 'Accelerators In House' }
  ];

  const capabilities = [
    {
      desc: "We begin in your plant with real parts and known defect samples, trialling lighting and fixturing, because part presentation determines success far more than model sophistication."
    },
    {
      desc: "We define defect classes precisely with your quality team, since disagreement between inspectors about what constitutes a reject is common and fatal to accuracy targets."
    },
    {
      desc: "We specify cameras, optics, lighting and fixturing vendor-neutrally, to your maintenance team's existing standards and spares strategy rather than a preferred supplier relationship."
    },
    {
      desc: "We deliver inspection for surface defects, assembly and presence verification, dimensional checking, and label and marking readability, combining deterministic measurement with learned models as each case requires."
    },
    {
      desc: "We integrate with line controls for real-time reject handling, and give operators a review interface for borderline cases that feeds directly back into retraining."
    },
    {
      desc: "Feasibility is proven or disproven on one inspection point within four to six weeks before capital is released, with engineers onsite for installation and operator training."
    }
  ];

  const differentiators = [
    {
      title: "AI-Augmented Engineering",
      icon: <Cpu className="w-6 h-6 text-ossisto-blue" />,
      desc: "We use AI to write automation 3x faster and refactor root causes, not patch symptoms. So, your CloudOps team prevents issues while competitors still react."
    },
    {
      title: "Automated Delivery Fabrics",
      icon: <Layers className="w-6 h-6 text-ossisto-blue" />,
      desc: "We eliminate that with IaC templates and automated pipelines that profile data centers and orchestrate AI workloads flawlessly. Your CloudOps team ships weekly instead of quarterly."
    },
    {
      title: "Predictive Security (DevSecOps)",
      icon: <Shield className="w-6 h-6 text-ossisto-blue" />,
      desc: "We code GDPR/CCPA directly into your AI-native pipelines with predictive threat monitoring for data lakes. Your security team knows breaches get blocked proactively."
    }
  ];

  const playbookSteps = [
    {
      label: "Repurpose",
      desc: "Revive and rejuvenate your legacy applications. We take your tried-and-true software and transform it into cloud-native champions, ready to take on the world."
    },
    {
      label: "Rehost",
      desc: "Seamless migrations, zero downtime. Think of it as moving day for your apps, to a better neighborhood in the cloud, without the hassle."
    },
    {
      label: "Re-platform",
      desc: "Turbocharge your applications. We tweak, tune, and enhance them to sing in the cloud environment, ensuring they're ready for whatever the future holds."
    },
    {
      label: "Refactor",
      desc: "A wellness retreat for your apps. They come out leaner, meaner, and more agile. We redefine your application's architecture for peak performance."
    },
    {
      label: "Retire",
      desc: "Bid farewell to the past. Some apps have run their race; we help you gracefully retire them, freeing up resources for what truly matters."
    },
    {
      label: "Retain",
      desc: "For the gems that still shine. We ensure that your critical applications stay in tip-top shape, so they continue to be assets, not liabilities."
    }
  ];

  const otherKeyAreas = [
    { name: "Application Development", icon: <Monitor className="w-6 h-6 text-slate-800" /> },
    { name: "DevOps", icon: <Layers className="w-6 h-6 text-slate-800" /> },
    { name: "Quality Engineering", icon: <Settings className="w-6 h-6 text-slate-800" /> },
    { name: "Application Modernization", icon: <RefreshCw className="w-6 h-6 text-slate-800" /> },
    { name: "Experience Transformation", icon: <Sparkles className="w-6 h-6 text-slate-800" /> },
    { name: "Engineering Frameworks", icon: <Code className="w-6 h-6 text-slate-800" /> }
  ];

  const scrollToSection = (id) => {
    setActiveTab(id);
    const el = document.getElementById(id);
    if (el) {
      const offset = 140;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const anchor = document.getElementById('subnav-anchor');
      if (anchor) {
        const rect = anchor.getBoundingClientRect();
        const headerHeight = window.scrollY > 50 ? 64 : 80;
        setIsSticky(rect.top <= headerHeight);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans select-none">

      {/* 1. Hero Section */}
      <section className="relative bg-slate-950 pt-20 md:pt-28 pb-12 md:pb-16 pl-12 pr-6 sm:pl-16 sm:pr-12 lg:px-24 border-b border-slate-900 overflow-hidden min-h-[52vh] flex items-center">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/75 to-transparent z-0" />

        <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <span className="text-ossisto-blue text-xs md:text-sm font-extrabold uppercase tracking-widest block">
              COMPUTER & MACHINE VISION
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] text-white max-w-xl tracking-tight">
              Inspection That Never Blinks
            </h1>
            <button className="bg-[#236CB1] hover:bg-[#1A5185] text-white text-[11px] sm:text-xs font-black uppercase py-2.5 px-5 sm:py-4 sm:px-8 rounded flex items-center gap-1.5 w-fit mt-8 transition-all tracking-widest shadow-md shadow-ossisto-blue/10 hover:scale-105 active:scale-95 duration-200">
              LET'S CONNECT <span className="text-[10px]">▶</span>
            </button>
          </div>

          {/* Right Video */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-xs md:max-w-sm aspect-video rounded-2xl overflow-hidden shadow-2xl bg-slate-900 border border-slate-800">
              <video
                src="/Ossisto - AI & Data.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="w-full h-full object-cover opacity-90 pointer-events-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Sub-Navbar Tab Menu Wrapper (Hidden) */}
      <div id="subnav-anchor" className="hidden w-full h-[56px] relative z-30">
        <div className={`bg-white border-b-0 lg:border-b border-gray-200 shadow-none lg:shadow-sm transition-all duration-150 ${isSticky
          ? `fixed left-0 w-full ${isScrolled ? 'top-[64px]' : 'top-[80px]'}`
          : 'absolute top-0 left-0 w-full'
          }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex space-x-8 md:space-x-12 overflow-x-auto scrollbar-none py-4 justify-start sm:justify-center">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => scrollToSection(tab.id)}
                  className={`relative py-2 font-extrabold text-xs md:text-sm whitespace-nowrap transition-colors ${activeTab === tab.id ? 'text-black' : 'text-slate-500 hover:text-black'
                    }`}
                >
                  {tab.name}
                  {activeTab === tab.id && (
                    <span className="absolute bottom-0 left-0 w-full h-[3px] bg-ossisto-blue rounded-full" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 3. Modernize, Optimize, Excel Section */}
      <section id="intro" className="py-16 md:py-24 px-12 sm:px-16 md:px-24 lg:px-32 border-b-0 lg:border-b border-gray-150 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-12 lg:col-span-12 space-y-5 text-center">
            <span className="text-ossisto-blue text-xs font-black uppercase tracking-wider block">
              PROVEN VISION SOLUTIONS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-black tracking-tight leading-tight max-w-2xl mx-auto">
              Defect detection, assembly verification and dimensional checks
            </h2>
            <div className="space-y-4 text-slate-500 text-sm leading-relaxed max-w-3xl font-medium mx-auto text-justify">
              <p>
                Machine vision delivers the greatest value where manual inspection becomes inconsistent, such as detecting surface defects, verifying assembly, checking dimensions, validating labels, and monitoring safety. Ossisto Global helps in developing vision systems that perform reliably in real production environments. We begin by assessing feasibility with actual parts because lighting, fixturing, and clear defect definitions have a far greater impact on success than the choice of AI model. If machine vision is not the right solution, we identify that early before unnecessary investment is made.
              </p>
              <p>
                Our approach starts on the factory floor with sample parts, including known defects, and practical trials to optimise lighting and part positioning. We work closely with your quality team to define defect criteria, ensuring consistent inspection standards before development begins. Depending on the application, we use classical machine vision, deep learning, or a combination of both to achieve accurate and reliable results. The result is a robust machine vision solution that delivers consistent quality, reduces inspection errors, and integrates seamlessly into your manufacturing operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Featured Insight */}
      <section id="insights" className="py-6 md:py-8 lg:py-10 px-12 sm:px-16 md:px-24 lg:px-32 border-b-0 lg:border-b border-gray-150 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-xl border border-slate-150 flex flex-col md:flex-row bg-white min-h-[280px]">
            <div className="w-full md:w-3/5 p-8 lg:p-10 flex flex-col justify-between text-left">
              <div>
                <h3 className="text-black text-xl md:text-2xl font-black leading-snug mb-4 max-w-md">
                  Importance of Vision solutions
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed font-medium max-w-md text-justify">
                  Escaped defects are costly in direct and reputational terms, and manual inspection is both inconsistent and difficult to staff. Human inspectors detect only a limited proportion of subtle surface defects reliably at line rate, and performance varies by individual, shift and fatigue. Machine vision provides consistent inspection at speed with a permanent record of every part, which matters increasingly as automotive and industrial customers require inspection evidence rather than assurance. Second-order benefits are often worth as much as the defect catch. Continuous measurement makes process drift visible before it produces rejects, image archives support warranty claim defence and root-cause investigation, and inspection data feeds directly into yield analytics. Reassigning inspectors to higher-judgement work also relieves a recruitment pressure most plants currently feel                </p>
              </div>
            </div>

            <div className="w-full md:w-2/5 p-4 sm:p-5 flex items-center justify-center bg-white">
              <div className="relative w-full h-full min-h-[200px] rounded-2xl overflow-hidden shadow-lg aspect-video md:aspect-auto">
                <video
                  src="/1.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover rounded-2xl scale-[1.08] transform pointer-events-none"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Our Capabilities */}
      <section id="capabilities" className="py-16 md:py-24 px-12 sm:px-16 md:px-24 lg:px-32 border-b-0 lg:border-b border-gray-150 bg-slate-50">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <span className="text-ossisto-blue text-xs uppercase tracking-widest font-black block">
              OUR APPROACH
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-black tracking-tight max-w-2xl mx-auto leading-tight">
              <span className="text-[#236CB1]">Ossisto's </span>Consultative approach
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto pt-0">
            {capabilities.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-ossisto-blue/40 transition-all duration-300 border-t-4 border-t-ossisto-blue flex flex-col justify-center text-left"
              >
                <p className="text-slate-600 text-xs leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. How We Deliver (Playbook Section) */}
      <section id="delivery" className="py-12 md:py-20 px-12 sm:px-16 md:px-24 lg:px-32 border-b-0 lg:border-b border-gray-150 bg-white">
        <div className="max-w-5xl mx-auto space-y-4">
          <div className="text-left space-y-2">
            <span className="text-ossisto-blue text-xs uppercase tracking-widest font-black block">
              OUR STRENGTHS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-black tracking-tight leading-tight">
              Our AI & Data Playbook
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-0">
            <div className="lg:col-span-5 flex justify-center p-2 sm:p-4">
              <div className="relative w-full max-w-sm overflow-hidden rounded-3xl shadow-xl aspect-video sm:aspect-square">
                <video
                  src="/2.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover rounded-3xl scale-[1.08] transform pointer-events-none"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6 text-left">
              {playbookSteps.map((step, idx) => (
                <div key={idx} className="space-y-1">
                  <h4 className="text-sm font-black text-slate-900">{step.label}</h4>
                  <p className="text-xs leading-relaxed text-slate-500 font-medium">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 11. Our other key areas for Digital Engineering Services */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-slate-50 border-none">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5 space-y-4 text-left relative">
            <div className="absolute -left-8 -top-12 flex flex-col gap-1.5 opacity-40">
              {[1, 2, 3, 4, 5].map((count, rIdx) => (
                <div key={rIdx} className="flex gap-1.5">
                  {Array.from({ length: count }).map((_, cIdx) => (
                    <div key={cIdx} className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                  ))}
                </div>
              ))}
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-black tracking-tight leading-tight max-w-sm relative z-10 pt-4">
              Our other key areas for Digital Engineering Services
            </h2>
          </div>

          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {otherKeyAreas.map((area, idx) => (
              <div key={idx} className="flex flex-col items-center text-center space-y-3">
                <div className="w-12 h-12 flex items-center justify-center bg-white shadow-sm border border-slate-100 rounded-2xl">
                  {area.icon}
                </div>
                <h4 className="text-xs font-black text-slate-900 leading-snug max-w-[125px]">
                  {area.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
