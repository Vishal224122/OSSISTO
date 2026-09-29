import React, { useState, useEffect } from 'react';
import { Cpu, Layers, Shield, Zap, Monitor, Settings, RefreshCw, Sparkles, Code, Plus, Minus } from 'lucide-react';
import ContactAndLocations from './ContactAndLocations';

export default function ApplicationDevelopmentManagement() {
  const [activeTab, setActiveTab] = useState('intro');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [activeResourceTab, setActiveResourceTab] = useState('thought');
  const [expandedFaq, setExpandedFaq] = useState(null);

  const tabs = [
    { id: 'intro', name: 'Strategic Guidance & Execution' },
    { id: 'capabilities', name: 'Our Capabilities' },
    { id: 'differentiators', name: 'Our Key Differentiators' },
    { id: 'insights', name: 'Featured Insight' },
    { id: 'delivery', name: 'How We Deliver' }
  ];

  const capabilities = [
    {
      desc: "We make the build-or-configure judgement honestly first, including when the answer is to configure a standard product and remove our own scope."
    },
    {
      desc: "We build focused custom applications only where they genuinely differentiate, such as distinctive processes, gaps between systems, shop-floor operations and customer or supplier portals."
    },
    {
      desc: "We assess legacy systems candidly, recommending replace, re-platform, wrap with an interface or leave alone, since rewriting a stable system rarely justifies its risk."
    },
    {
      desc: "We integrate with your enterprise, engineering and shop-floor systems from the first release rather than as a later phase, modernising the databases underneath where needed."
    },
    {
      desc: "We deliver a working increment within four to six weeks and then fortnightly, because manufacturing requirements clarify through use far more reliably than through specification documents."
    },
    {
      desc: "Code, pipelines and documentation sit in your accounts from day one, with delivery from India or developers placed onsite in Europe and the US where user proximity is essential."
    }
  ];

  const differentiators = [
    {
      title: "Outcome-Driven Advisory",
      icon: <Cpu className="w-6 h-6 text-ossisto-blue" />,
      desc: "We anchor every transformation initiative to tangible business metrics—reducing cycle times, cutting operational debt, and accelerating value."
    },
    {
      title: "Enterprise Integration Fabrics",
      icon: <Layers className="w-6 h-6 text-ossisto-blue" />,
      desc: "We connect siloed ERP, MES, and cloud platforms with standardized APIs, ensuring real-time visibility across complex operations."
    },
    {
      title: "DevSecOps & Governance",
      icon: <Shield className="w-6 h-6 text-ossisto-blue" />,
      desc: "We embed security, compliance, and risk management into transformation blueprints from day one for continuous operational safety."
    }
  ];

  const playbookSteps = [
    {
      label: "Assess & Align",
      desc: "Comprehensive evaluation of existing technology assets, operational workflows, and strategic business goals."
    },
    {
      label: "Architect & Roadmap",
      desc: "Designing modular, future-ready enterprise architectures with clear execution milestones and fundable increments."
    },
    {
      label: "Execute & Integrate",
      desc: "Deploying solutions using agile frameworks, connecting legacy core systems with modern cloud infrastructure."
    },
    {
      label: "Govern & Scale",
      desc: "Establishing enterprise data and software governance to sustain long-term digital growth and operational resilience."
    }
  ];

  const otherKeyAreas = [
    { name: "Digital Transformation Consulting", icon: <Sparkles className="w-6 h-6 text-slate-800" /> },
    { name: "SAP Consulting & Services", icon: <Settings className="w-6 h-6 text-slate-800" /> },
    { name: "Application Development & Modernization", icon: <Monitor className="w-6 h-6 text-slate-800" /> },
    { name: "Cloud, DevOps & Infra", icon: <Layers className="w-6 h-6 text-slate-800" /> },
    { name: "PLM Services", icon: <RefreshCw className="w-6 h-6 text-slate-800" /> },
    { name: "Quality engineering and test automation", icon: <Shield className="w-6 h-6 text-slate-800" /> }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
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
              APPLICATION DEVELOPMENT & MODERNIZATION
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] text-white max-w-xl tracking-tight">
              Build What You Really Need
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

      {/* 2. Intro Section */}
      <section id="intro" className="py-16 md:py-24 px-12 sm:px-16 md:px-24 lg:px-32 border-b-0 lg:border-b border-gray-150 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-12 lg:col-span-12 space-y-5 text-center">
            <span className="text-ossisto-blue text-xs font-black uppercase tracking-wider block">
              APPLICATIONS THAT FIT
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-black tracking-tight leading-tight max-w-2xl mx-auto">
              Custom applications and legacy modernisation
            </h2>
            <div className="space-y-4 text-slate-500 text-sm leading-relaxed max-w-3xl font-medium mx-auto text-justify">
              <p>
                Some processes are too specific to your business for packaged software. Some existing applications are too important to retire and too fragile to extend. Ossisto Global handles both and starts by telling you honestly which situation you are in, including when the right answer is to configure a standard product instead of building anything.
              </p>
              <p>
                Where custom development is justified, we scope tightly around the workflow and connect to your enterprise and shop-floor systems from the first release rather than as a later phase. Our bias is towards the smallest application that solves the problem, because the long-term cost of software is driven by how much there is to maintain.
              </p>
              <p>
                For older systems we assess candidly what should be replaced, rebuilt on a current platform, wrapped with a modern interface, or simply left alone, since rewriting something stable rarely justifies the risk. Throughout, we use conventional engineering practice such as version control, automated testing and documented architecture, so the result can be maintained by your own team or any other supplier.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Importance of data foundation Section */}
      <section id="insights" className="py-6 md:py-8 lg:py-10 px-12 sm:px-16 md:px-24 lg:px-32 border-b-0 lg:border-b border-gray-150 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-xl border border-slate-150 flex flex-col md:flex-row bg-white min-h-[280px]">
            {/* Left Content */}
            <div className="w-full md:w-3/5 p-8 lg:p-10 flex flex-col justify-between text-left">
              <div>
                <h3 className="text-black text-xl md:text-2xl font-black leading-snug mb-4 max-w-md">
                  Why it matters
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed font-medium max-w-md text-justify">
                  Manufacturers accumulate application debt quietly. An Access database running production scheduling, a VB tool nobody can modify, a customer portal on an unsupported framework, an integration held together by scheduled file transfers - each works until it does not, and each concentrates operational risk. Meanwhile genuine process advantages go unsupported because no packaged product fits and internal capacity does not exist. Addressing both sides has direct value: reduced operational risk from unsupported technology, and process capabilities competitors buying standard software cannot easily replicate. Modernisation also removes constraints on everything else, since integration, analytics, cloud migration and mobile access are all considerably harder against legacy applications. The discipline that matters is restraint - building only what genuinely differentiates, and configuring standard products for everything else.
                </p>
              </div>
            </div>

            {/* Right Graphic Banner Video */}
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

      {/* 3. Capabilities */}
      <section id="capabilities" className="py-16 md:py-24 px-12 sm:px-16 md:px-24 lg:px-32 border-b-0 lg:border-b border-gray-150 bg-slate-50">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <span className="text-ossisto-blue text-xs uppercase tracking-widest font-black block">
              Our Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-black tracking-tight max-w-2xl mx-auto leading-tight">
              <span className="text-[#236CB1]">Ossisto</span>  services
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

      {/* 4. Playbook */}
      <section id="delivery" className="py-12 md:py-20 px-12 sm:px-16 md:px-24 lg:px-32 border-b-0 lg:border-b border-gray-150 bg-white">
        <div className="max-w-5xl mx-auto space-y-4">
          <div className="text-left space-y-2">
            <span className="text-ossisto-blue text-xs uppercase tracking-widest font-black block">
              OUR METHODOLOGY
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-black tracking-tight leading-tight">
              Transformation Execution Framework
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

      {/* 5. Key Areas */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-slate-50 border-none">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5 space-y-4 text-left relative">
            <h2 className="text-2xl sm:text-3xl font-black text-black tracking-tight leading-tight max-w-sm relative z-10 pt-4">
              Our key areas for Enterprise Digital & IT

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
