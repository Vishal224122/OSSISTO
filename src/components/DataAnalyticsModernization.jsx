import React, { useState, useEffect } from 'react';
import { Cpu, Layers, Shield, Zap, Monitor, Settings, RefreshCw, Sparkles, Code, Plus, Minus, LineChart, Eye, ArrowRight } from 'lucide-react';
import ContactAndLocations from './ContactAndLocations';

export default function DataAnalyticsModernization() {
  const [activeTab, setActiveTab] = useState('future-ready');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [activeService, setActiveService] = useState('migration');
  const [activeStoryIdx, setActiveStoryIdx] = useState(2); // 2 corresponds to Basel III (3rd dot) in screenshot

  const tabs = [
    { id: 'future-ready', name: 'Future Ready' },
    { id: 'differentiators', name: 'Our Key Differentiators' },
    { id: 'services', name: 'Our Services' },
    { id: 'how-it-works', name: 'How it Works' },
    { id: 'accelerators', name: 'Our Accelerators' },
    { id: 'collaborators', name: 'Collaborators' }
  ];

  const differentiators = [
    {
      title: "Accelerated Cloud Modernization",
      desc: "Migrate legacy systems to modern, cloud-native platforms with pre-built frameworks and proven methodologies.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-xoriant-green fill-none stroke-current stroke-2" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
        </svg>
      )
    },
    {
      title: "BI Optimization at Scale",
      desc: "Streamline and modernize reporting with automated dashboard rationalization, metadata discovery, and visualization upgrades.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-xoriant-green fill-none stroke-current stroke-2" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
        </svg>
      )
    },
    {
      title: "Built-In Observability & Governance",
      desc: "Ensure data quality, lineage, and compliance with embedded observability and governance across the data lifecycle.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-xoriant-green fill-none stroke-current stroke-2" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      )
    }
  ];

  const services = {
    migration: {
      menuName: "Legacy To Cloud Migration",
      title: "Legacy to Cloud Migration",
      desc: "We help enterprises modernize their data foundations by migrating from on-premise and legacy systems to scalable, secure, and AI-ready cloud environments.",
      col1Title: "Accelerate Time-To-Insight",
      col1Desc: "Enable faster analytics by eliminating silos and streamlining cloud data access.",
      col2Title: "Reduce Total Cost Of Ownership",
      col2Desc: "Lower infrastructure costs through platform consolidation and elastic cloud resources."
    },
    optimization: {
      menuName: "Cloud-To-Cloud Optimization",
      title: "Cloud-To-Cloud Optimization",
      desc: "Maximize compute performance and reduce unnecessary data storage overheads across heterogeneous multi-cloud environments.",
      col1Title: "Compute Orchestration",
      col1Desc: "Dynamically scale analytics workloads, avoiding compute idling charges.",
      col2Title: "Data Fabric Pipelines",
      col2Desc: "Synchronize data structures across storage networks without redundant bandwidth costs."
    },
    bi: {
      menuName: "Modern BI & Visualization",
      title: "Modern BI & Visualization",
      desc: "Transform archaic, static database reports into real-time self-service dashboards powered by intuitive NLP query search.",
      col1Title: "Self-Service Intelligence",
      col1Desc: "Empower business units to customize visualization reports without drafting engineering requests.",
      col2Title: "Embedded AI Predictive Insights",
      col2Desc: "Automatically highlight trend anomalies and future forecasting vectors in existing BI reports."
    },
    observability: {
      menuName: "AI Observability For Data Pipelines",
      title: "AI Observability for Data Pipelines",
      desc: "Trace data schemas and pipeline health in real-time, catching anomalies before they skew downstream reports.",
      col1Title: "Schema Drift Alerts",
      col1Desc: "Receive instant notifications when incoming api data structure drifts from standard formats.",
      col2Title: "Data Lineage Analysis",
      col2Desc: "Map historical data ingestion paths to debug data corruption sources within seconds."
    },
    marketplace: {
      menuName: "Insights Marketplace Platform",
      title: "Insights Marketplace Platform",
      desc: "Establish a secure, compliance-ready repository to package and distribute analytical insights across business groups.",
      col1Title: "Secure Data Cataloging",
      col1Desc: "Tag datasets with corporate governance criteria, preventing unauthorized access.",
      col2Title: "Instant API Endpoint Provisioning",
      col2Desc: "Generate secure REST connections instantly for internal consumers to ingest data streams."
    }
  };

  const playbooks = [
    {
      title: "Accelerated Implementation",
      desc: "Pre-built frameworks and proven methodologies reduce time-to-value and simplify modernization."
    },
    {
      title: "Enterprise Integration",
      desc: "Seamless alignment with your existing systems, governance models, and security standards."
    },
    {
      title: "Continuous Optimization",
      desc: "Feedback loops and observability ensure your data ecosystem evolves with business needs."
    }
  ];

  const accelerators = [
    {
      name: "BI Lytics",
      desc: "BI optimization and cost reduction toolkit",
      color: "bg-[#00a3e0]"
    },
    {
      name: "Xor - DQR",
      desc: "AI-Assisted Data Quality Refinery",
      color: "bg-[#1e2d5a]"
    },
    {
      name: "Optimize Graph",
      desc: "Code optimization and Master data management in Ab Initio",
      color: "bg-[#2575fc]"
    },
    {
      name: "ORIAN.AI Studio",
      desc: "Marketplace of advanced AI business use cases",
      color: "bg-[#00b23b]",
      hasLink: true
    }
  ];

  const partners = [
    {
      name: "Databricks",
      type: "custom",
      render: () => (
        <div className="flex items-center gap-1.5 text-[#ff3624] font-black text-lg select-none">
          <span className="w-4 h-4 bg-[#ff3624] transform rotate-45 flex items-center justify-center shrink-0"></span>
          databricks
        </div>
      )
    },
    {
      name: "Ab Initio",
      type: "custom",
      render: () => (
        <div className="flex items-center gap-0.5 text-[#2272b4] font-semibold text-[15px] italic font-sans tracking-tight shrink-0 select-none">
          <span className="text-red-500 text-base font-black not-italic">ab</span>
          <span className="text-slate-800 font-extrabold not-italic">initio</span>
        </div>
      )
    },
    {
      name: "Oracle",
      type: "custom",
      render: () => (
        <div className="text-[#f80000] font-black tracking-widest text-lg select-none">
          ORACLE
        </div>
      )
    },
    {
      name: "Salesforce",
      type: "image",
      src: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg"
    },
    {
      name: "AWS Partner Network",
      type: "custom",
      render: () => (
        <div className="flex flex-col items-start leading-none select-none">
          <span className="text-[12px] font-black text-slate-800">aws</span>
          <span className="text-[7px] tracking-wider uppercase font-bold text-slate-500 mt-0.5">partner</span>
          <span className="text-[7px] tracking-wider uppercase font-bold text-slate-500">network</span>
        </div>
      )
    },
    {
      name: "Google Cloud",
      type: "image",
      src: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg"
    }
  ];

  const successStories = [
    {
      title: "Real-time Operations Intelligence for a Smart City Infrastructure",
      desc: "Implemented predictive maintenance pipelines and real-time Kafka streams to monitor over 12,000 grid sensors and reduce critical system offline incidents by 35%."
    },
    {
      title: "Global Supply Chain Inventory Optimization using Agentic Workflows",
      desc: "Engineered multi-agent collaboration frameworks to coordinate supplier forecasts, reducing catalog stockouts by 18% and automating requisition drafting based on live demand."
    },
    {
      title: "Accelerating Basel III Compliance with First Time Right Regulatory Submissions",
      desc: "How a global bank leveraged GenAI to automate 7,000+ rules, standardize reporting, and minimize penalty risk across jurisdictions."
    }
  ];

  const scrollToSection = (id) => {
    setActiveTab(id);
    const el = document.getElementById(id);
    if (el) {
      const offset = 140; // Height of fixed navbar + tab sub-nav
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

  useEffect(() => {
    const handleScrollActive = () => {
      const scrollPos = window.scrollY + 160;

      for (let i = 0; i < tabs.length; i++) {
        const el = document.getElementById(tabs[i].id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveTab(tabs[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollActive);
    return () => window.removeEventListener('scroll', handleScrollActive);
  }, []);

  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans select-none">
      
      {/* 1. Hero Section (Screenshot 1: Banner + Let's Connect) */}
      <section className="relative bg-slate-950 pt-28 md:pt-36 pb-16 md:pb-24 px-6 sm:px-12 lg:px-24 border-b border-slate-900 overflow-hidden min-h-[65vh] flex items-center">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/75 to-transparent z-0" />
        
        <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <span className="text-xoriant-green text-xs md:text-sm font-extrabold uppercase tracking-widest block">
              Data & Analytics Modernization
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] text-white max-w-xl tracking-tight">
              From Legacy to AI-Ready Data Ecosystems
            </h1>
            <button className="bg-[#00b23b] hover:bg-[#009632] text-white text-xs font-black uppercase py-4 px-8 rounded flex items-center gap-1.5 w-fit mt-8 transition-all tracking-widest shadow-md shadow-xoriant-green/10 hover:scale-105 active:scale-95 duration-200">
              LET'S CONNECT <span className="text-[10px]">▶</span>
            </button>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-xs md:max-w-sm">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-xoriant-green to-transparent opacity-20 blur-xl" />
              <img 
                src="/data_modernization_hero.png" 
                alt="Data Ecosystem Visualization" 
                className="relative w-full h-auto object-contain max-h-[245px] lg:max-h-[315px] filter drop-shadow-2xl rounded-2xl" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Sub-Navbar Tab Menu Wrapper (Anchor-Relative Docking) */}
      <div id="subnav-anchor" className="w-full h-[56px] relative z-30">
        <div className={`bg-white border-b border-gray-200 shadow-sm transition-all duration-150 ${
          isSticky 
            ? `fixed left-0 w-full ${isScrolled ? 'top-[64px]' : 'top-[80px]'}` 
            : 'absolute top-0 left-0 w-full'
        }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex space-x-8 md:space-x-12 overflow-x-auto scrollbar-none py-4 justify-start sm:justify-center">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => scrollToSection(tab.id)}
                  className={`relative py-2 font-extrabold text-xs md:text-sm whitespace-nowrap transition-colors ${
                    activeTab === tab.id ? 'text-black font-black' : 'text-slate-500 hover:text-black font-bold'
                  }`}
                >
                  {tab.name}
                  {activeTab === tab.id && (
                    <span className="absolute bottom-0 left-0 w-full h-[3px] bg-xoriant-green rounded-full animate-fade-in" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 3. Future Ready / Confidence You Can Trust Section */}
      <section id="future-ready" className="py-16 md:py-24 px-6 md:px-12 lg:px-24 border-b border-gray-150 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left pattern decoration */}
          <div className="hidden md:flex md:col-span-3 lg:col-span-4 flex-col items-center justify-center gap-6">
            <div className="flex gap-2">
              <div className="w-3 h-3 border-b-2 border-r-2 border-slate-300 transform rotate-45" />
              <div className="w-3 h-3 border-b-2 border-r-2 border-slate-300 transform rotate-45" />
              <div className="w-3 h-3 border-b-2 border-r-2 border-slate-300 transform rotate-45" />
            </div>
            <svg className="w-24 h-24 text-slate-200 fill-current opacity-70" viewBox="0 0 100 100">
              {Array.from({ length: 6 }).map((_, r) => 
                Array.from({ length: 6 }).map((_, c) => (
                  <circle key={`${r}-${c}`} cx={15 + c * 14} cy={15 + r * 14} r="2.5" />
                ))
              )}
            </svg>
          </div>
          
          {/* Right Content */}
          <div className="md:col-span-9 lg:col-span-8 space-y-5 text-left">
            <span className="text-xoriant-green text-xs font-black uppercase tracking-wider block">
              Confidence You Can Trust
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-black tracking-tight leading-tight max-w-2xl font-sans">
              Turn Old Data into Smart Possibilities
            </h2>
            <p className="text-slate-900 font-extrabold text-xs tracking-tight">
              Data is your enterprise's most powerful asset, it harnessed right.
            </p>
            
            <div className="space-y-4 text-slate-500 text-sm leading-relaxed max-w-3xl font-medium">
              <p>
                Yet legacy systems, fragmented pipelines, and reactive reporting often stand in the way of agility and innovation. Data & Analytics Modernization empowers you to migrate, optimize, and elevate your data ecosystem, unlocking real-time insights, embedded AI observability, and scalable intelligence.
              </p>
              <p>
                From cloud-native transitions to modern BI platforms and insight marketplaces, we lay the foundation for enterprises to become truly AI-ready.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Our Key Differentiators Section (Screenshot 2 Part A) */}
      <section id="differentiators" className="py-16 md:py-24 px-6 md:px-12 lg:px-24 border-b border-gray-150 bg-slate-50">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-2">
            <span className="text-xoriant-green text-xs uppercase tracking-widest font-black block">
              Our Key Differentiators
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-black tracking-tight max-w-3xl mx-auto leading-tight">
              Deliver cloud native governed data and analytics ready for AI
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto pt-4">
            {differentiators.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-xoriant-green/40 transition-all duration-300 flex flex-col justify-between text-left min-h-[220px]"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h3 className="font-black text-slate-900 text-sm leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Our Services Section (Screenshot 2 Part B: Interactive Tabs) */}
      <section id="services" className="py-16 md:py-24 px-6 md:px-12 lg:px-24 border-b border-gray-150 bg-white">
        <div className="max-w-6xl mx-auto space-y-10">
          {/* Header */}
          <div className="text-left space-y-2">
            <span className="text-xoriant-green text-xs uppercase tracking-widest font-black block">
              Our Services
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-black tracking-tight leading-tight">
              Cloud-Native Data Solutions, Built for Business Agility
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pt-4">
            {/* Left Sidebar Menu */}
            <div className="md:col-span-5 lg:col-span-4 space-y-2 text-left">
              {Object.keys(services).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveService(key)}
                  className={`w-full py-3.5 px-4 font-bold text-sm text-left transition-all rounded-lg flex items-center justify-between ${
                    activeService === key
                      ? 'text-slate-900 bg-slate-50'
                      : 'text-slate-400 hover:text-slate-900'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {activeService === key && (
                      <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-xoriant-green border-b-[6px] border-b-transparent shrink-0" />
                    )}
                    <span className={activeService === key ? 'pl-0' : 'pl-4'}>
                      {services[key].menuName}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* Right Detailed Container */}
            <div className="md:col-span-7 lg:col-span-8 bg-[#f8fafc] border border-slate-100 rounded-2xl p-8 text-left space-y-6 min-h-[300px] flex flex-col justify-between shadow-sm">
              <div className="space-y-4">
                <h3 className="text-xoriant-green text-lg font-black tracking-tight leading-snug">
                  {services[activeService].title}
                </h3>
                <p className="text-slate-600 text-xs font-semibold leading-relaxed">
                  {services[activeService].desc}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-200/60">
                <div className="space-y-2">
                  <h4 className="text-slate-900 font-extrabold text-xs">
                    {services[activeService].col1Title}
                  </h4>
                  <p className="text-slate-500 text-[11px] leading-relaxed font-medium">
                    {services[activeService].col1Desc}
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-slate-900 font-extrabold text-xs">
                    {services[activeService].col2Title}
                  </h4>
                  <p className="text-slate-500 text-[11px] leading-relaxed font-medium">
                    {services[activeService].col2Desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. How it Works Section (Screenshot 3 Part A) */}
      <section id="how-it-works" className="py-16 md:py-24 px-6 md:px-12 lg:px-24 border-b border-gray-150 bg-slate-50">
        <div className="max-w-5xl mx-auto space-y-10">
          {/* Header */}
          <div className="text-left space-y-2">
            <span className="text-xoriant-green text-xs uppercase tracking-widest font-black block">
              How it Works
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-black tracking-tight leading-tight">
              From Strategy to Scale, Seamlessly
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4 relative">
            {/* Left Column Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm overflow-hidden rounded-3xl shadow-lg border border-slate-100 bg-slate-950 p-6 flex items-center justify-center min-h-[220px]">
                <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
                <img 
                  src="/data_modernization_hero.png" 
                  alt="Modernization Network flow" 
                  className="w-full h-auto object-contain max-h-[180px] rounded-lg" 
                />
              </div>
            </div>

            {/* Right Column Steps */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {playbooks.map((step, idx) => (
                <div key={idx} className="space-y-1 pl-4 border-l-2 border-slate-200 hover:border-xoriant-green transition-all duration-300">
                  <h4 className="text-sm font-black text-slate-900">{step.title}</h4>
                  <p className="text-xs leading-relaxed text-slate-500 font-medium">{step.desc}</p>
                </div>
              ))}
            </div>

            {/* Matrix decoration on the right */}
            <div className="hidden xl:block absolute -right-16 top-1/2 transform -translate-y-1/2">
              <svg className="w-12 h-20 text-slate-200 fill-current opacity-70" viewBox="0 0 50 100">
                {Array.from({ length: 7 }).map((_, r) => 
                  Array.from({ length: 3 }).map((_, c) => (
                    <circle key={`${r}-${c}`} cx={10 + c * 14} cy={10 + r * 14} r="2" />
                  ))
                )}
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Our Accelerators Section (Screenshot 3 Part B) */}
      <section id="accelerators" className="py-16 md:py-20 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-150">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-left space-y-3">
            <span className="text-xoriant-green text-xs uppercase tracking-widest font-black block">
              Our Accelerators
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-black tracking-tight leading-tight">
              Frameworks & Accelerators
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
              {accelerators.map((fw, idx) => (
                <div 
                  key={idx} 
                  className={`${fw.color} text-white p-6 rounded-2xl shadow-sm flex flex-col justify-between min-h-[220px] hover:scale-[1.02] transition-transform duration-300 text-left`}
                >
                  <div className="space-y-4">
                    <h3 className="text-lg font-black leading-snug">{fw.name}</h3>
                    <p className="text-[11px] font-semibold leading-relaxed opacity-90">
                      {fw.desc}
                    </p>
                  </div>
                  {fw.hasLink && (
                    <a 
                      href="#dream-details" 
                      className="text-[11px] font-bold uppercase tracking-wider hover:underline flex items-center gap-1 mt-4"
                    >
                      Know More <span className="text-[9px]">▶</span>
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. Collaborators Section (Screenshot 4 Part A: Continuous Scrolling Marquee) */}
      <section id="collaborators" className="py-16 px-6 md:px-12 lg:px-24 bg-slate-50 border-b border-gray-150">
        <div className="max-w-5xl mx-auto text-left space-y-4">
          <span className="text-xoriant-green text-xs uppercase tracking-widest font-black block">
            Our Collaborators
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-black tracking-tight leading-tight">
            Technology Partners in Our Product & Platform Engineering
          </h2>

          {/* Infinite Horizontal Logo Marquee */}
          <div className="relative flex overflow-hidden w-full bg-white py-6 rounded-xl border border-slate-100 mt-4 select-none">
            <div className="flex gap-16 shrink-0 items-center animate-marquee">
              {/* Multiplying partner array to ensure layout overflows screen width for seamless wrapping */}
              {[...partners, ...partners, ...partners, ...partners].map((p, idx) => (
                <div key={idx} className="h-8 flex items-center justify-center shrink-0 px-2 min-w-[110px]">
                  {p.type === "custom" ? (
                    p.render()
                  ) : (
                    <img 
                      src={p.src} 
                      alt={p.name} 
                      className="h-full object-contain filter opacity-80 hover:opacity-100 transition-opacity duration-300 max-w-[110px]" 
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4">
            <a href="#ecosystem" className="inline-flex items-center gap-1 text-xs font-extrabold text-black hover:text-xoriant-green transition-colors uppercase tracking-widest">
              All Partners <span className="text-[10px]">▶</span>
            </a>
          </div>
        </div>
      </section>

      {/* 9. Success Stories Section (Screenshot 4 Part B: Basel III active default) */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-150 relative">
        {/* Left and right decorations */}
        <div className="hidden xl:block absolute left-8 top-1/2 transform -translate-y-1/2">
          <svg className="w-12 h-20 text-slate-200 fill-current opacity-70" viewBox="0 0 50 100">
            {Array.from({ length: 7 }).map((_, r) => 
              Array.from({ length: 3 }).map((_, c) => (
                <circle key={`${r}-${c}`} cx={10 + c * 14} cy={10 + r * 14} r="2" />
              ))
            )}
          </svg>
        </div>
        <div className="hidden xl:block absolute right-8 top-1/2 transform -translate-y-1/2">
          <div className="flex flex-col gap-1 items-end opacity-40">
            <div className="w-2.5 h-2.5 border-t-2 border-r-2 border-slate-300 transform rotate-[135deg]" />
            <div className="w-2.5 h-2.5 border-t-2 border-r-2 border-slate-300 transform rotate-[135deg]" />
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-left space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-black tracking-tight leading-tight">
              Our Success Stories
            </h2>
          </div>

          {/* Carousel Body */}
          <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-xl border border-slate-100 flex flex-col md:flex-row bg-[#f8fafc] min-h-[300px] text-left">
            {/* Left Content column */}
            <div className="w-full md:w-1/2 p-8 lg:p-10 flex flex-col justify-between bg-slate-50">
              <div className="space-y-4">
                <h3 className="text-black text-lg md:text-xl font-black leading-snug">
                  {successStories[activeStoryIdx].title}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed font-semibold">
                  {successStories[activeStoryIdx].desc}
                </p>
              </div>

              {/* Selector dots */}
              <div className="flex space-x-2 mt-8 items-center">
                {successStories.map((_, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveStoryIdx(idx)}
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black border transition-all ${
                      activeStoryIdx === idx 
                        ? 'bg-xoriant-green border-xoriant-green text-white' 
                        : 'bg-white border-gray-300 text-slate-500 hover:border-slate-500'
                    }`}
                  >
                    {idx + 1}
                  </button>
                ))}
              </div>
            </div>

            {/* Right column with Image */}
            <div className="w-full md:w-1/2 relative min-h-[220px] md:min-h-auto bg-slate-900">
              <img 
                src="/financial_success_globe.png" 
                alt="Success Globe Visualization" 
                className="w-full h-full object-cover absolute inset-0 opacity-90"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 10. Global Contact Form */}
      <ContactAndLocations title="Get Started" />

    </div>
  );
}
