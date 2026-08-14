import React, { useState, useEffect } from 'react';
import { Cpu, Layers, Shield, Zap, Monitor, Settings, RefreshCw, Sparkles, Code, Plus, Minus } from 'lucide-react';
import ContactAndLocations from './ContactAndLocations';

export default function TestingValidationSupport() {
  const [activeTab, setActiveTab] = useState('intro');
  const [isScrolled, setIsScrolled] = useState(false);

  const capabilities = [
    {
      desc: "We support validation planning, helping map requirements to test methods, acceptance criteria and sample sizes in a single working document."
    },
    {
      desc: "We assist with test procedure writing to your internal and customer standards, so expectations are clear and agreed before testing begins."
    },
    {
      desc: "We help with test data reduction and reporting, turning results into the summaries, analysis and traceability records your customers and auditors ask for."
    },
    {
      desc: "We work alongside your own or third-party test facilities rather than operating laboratories ourselves, and can coordinate documentation across a test programme."
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
    { name: "Application Development", icon: <Monitor className="w-6 h-6 text-slate-800" /> },
    { name: "DevOps", icon: <Layers className="w-6 h-6 text-slate-800" /> },
    { name: "Quality Engineering", icon: <Settings className="w-6 h-6 text-slate-800" /> },
    { name: "Application Modernization", icon: <RefreshCw className="w-6 h-6 text-slate-800" /> },
    { name: "Experience Transformation", icon: <Sparkles className="w-6 h-6 text-slate-800" /> },
    { name: "Engineering Frameworks", icon: <Code className="w-6 h-6 text-slate-800" /> }
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
              TESTING AND VALIDATION SUPPORT
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] text-white max-w-xl tracking-tight">
              Prove It Before Launch
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
              VALIDATION SUPPORT
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-black tracking-tight leading-tight max-w-2xl mx-auto">
              From test plan to signed report
            </h2>
            <div className="space-y-4 text-slate-500 text-sm leading-relaxed max-w-3xl font-medium mx-auto text-justify">
              <p>
                Validation is where optimistic schedules meet physics. Ossisto Global provides the capacity and the structure to plan, execute and document product testing properly, across mechanical, electrical, environmental and software validation.
              </p>
              <p>
                Our work is built around evidence chains. We start with your requirements as they exist today and construct a validation plan that maps each one to a test method, an acceptance criterion, a sample size and an owner. That single document usually exposes more risk than any individual test. We then support execution through instrumentation plans, rig and fixture specification, procedure writing, witness support at external laboratories and disciplined data capture.
              </p>
              <p>
                Our engineers also handle the part most teams postpone: turning raw data into conclusions and writing reports an auditor or certification body will accept. Reusable procedure libraries and automated data processing shorten each subsequent programme and give your quality team a searchable history rather than a folder tree.
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
                  Importance of structured validation
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed font-medium max-w-md text-justify">
                  Validation determines whether you launch with confidence or with hope. Under-tested products generate warranty cost, recalls and lost customer trust; over-tested products generate schedule delay and capital tied up in rigs. The difference between the two is not effort but planning - a rational coverage matrix, correct sample sizes, and the discipline to test to failure where it matters. There is also a growing compliance dimension, as OEM customers, regulators and certification bodies increasingly ask for traceable evidence rather than summary assurances, and gaps surface at exactly the wrong moment. Structured validation support delivers coverage you can demonstrate, earlier detection of design weakness while changes are still cheap, and a reusable test asset base. It also produces the clean, structured test data that later feeds reliability models and predictive analytics.
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
              <span className="text-[#236CB1]">Ossisto</span> services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto pt-0">
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
              Our key areas for Testing and validation support
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
