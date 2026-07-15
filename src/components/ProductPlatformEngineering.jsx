import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Cpu, Layers, Shield, Zap, Monitor, Settings, RefreshCw, Sparkles, Code, Play, Plus, Minus } from 'lucide-react';
import ContactAndLocations from './ContactAndLocations';

export default function ProductPlatformEngineering() {
  const [activeTab, setActiveTab] = useState('winning');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [activeResourceTab, setActiveResourceTab] = useState('thought');
  const [expandedFaq, setExpandedFaq] = useState(null);

  const tabs = [
    { id: 'winning', name: 'Winning the digital race' },
    { id: 'capabilities', name: 'Our Capabilities' },
    { id: 'insights', name: 'Featured Insight' },
    { id: 'accelerators', name: 'Accelerators In House' }
  ];

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
      name: "ServiceNow",
      type: "custom",
      render: () => (
        <div className="text-[#81b53c] font-black text-xl tracking-tighter shrink-0 select-none">
          servicenow.
        </div>
      )
    },
    {
      name: "Databricks",
      type: "custom",
      render: () => (
        <div className="flex items-center gap-1 text-[#ff3624] font-black text-lg shrink-0 select-none">
          <span className="w-4 h-4 bg-[#ff3624] transform rotate-45 flex items-center justify-center shrink-0"></span>
          databricks
        </div>
      )
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

  const capabilities = [
    {
      title: "Intelligent product modernization",
      desc: "We modernize products using AI-assisted refactoring and platform modernization services, decoupling monoliths into scalable, cloud-ready product engineering architectures with minimal disruption."
    },
    {
      title: "Technology assessment & selection",
      desc: "We assess your tech stack and platforms using algorithmic scoring and our three decade domain expertise to guide enterprise product engineering decisions aligned to scalability, reliability, and long-term platform evolution."
    },
    {
      title: "Smart technology upgrade",
      desc: "We upgrade platforms while preserving business logic, enabling scalable platform architecture and readiness for AI-driven capabilities across modern ecosystems."
    },
    {
      title: "Generative prototyping",
      desc: "We accelerate ideation using GenAI-powered prototyping to rapidly validate architecture, UX, and core platform flows before full-scale engineering investments."
    },
    {
      title: "Evolutionary architecture & design",
      desc: "We design API-first platform engineering foundations that adapt to new data models, integrations, and performance demands without re-architecture cycles."
    },
    {
      title: "AI-enhanced POC & MVP",
      desc: "We validate complex features through focused minimal viable products (MVPs) that de-risk enterprise product engineering decisions and compress time-to-market."
    },
    {
      title: "Product security & performance optimization",
      desc: "We embed platform reliability engineering and platform performance optimization to ensure security, resilience, and predictable performance under real-world load."
    },
    {
      title: "Cloud-native enablement",
      desc: "We enable cloud-ready product engineering using microservices and serverless architectures designed for elasticity, observability, and continuous scaling."
    },
    {
      title: "Cognitive analytics & automation",
      desc: "We embed intelligence into platforms using analytics-driven automation to reduce manual engineering effort and improve lifecycle efficiency."
    }
  ];

  const thoughtArticles = [
    {
      category: "Article",
      title: "Enterprise Discipline will decide AI Value Gap",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=600&auto=format&fit=crop",
      href: "#keeping-updated"
    },
    {
      category: "Article",
      title: "Partner-Powered Growth: The Model for Delivering Innovation",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=600&auto=format&fit=crop",
      href: "#keeping-updated"
    },
    {
      category: "Article",
      title: "The Salesforce-Linked Breach Wake-Up Call: Wh...",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop",
      href: "#keeping-updated"
    },
    {
      category: "Article",
      title: "The AI-Ready Leader",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop",
      href: "#keeping-updated"
    },
    {
      category: "Article",
      title: "Generative AI: The New Frontier in Engineering",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop",
      href: "#keeping-updated"
    }
  ];

  const insightArticles = [
    {
      category: "Article",
      title: "Building Resilient Cloud Foundations",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600&auto=format&fit=crop",
      href: "#keeping-updated"
    },
    {
      category: "Article",
      title: "Modernizing Legacy Architectures at Scale",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop",
      href: "#keeping-updated"
    },
    {
      category: "Article",
      title: "The Future of Applied AI in Fintech",
      image: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?q=80&w=600&auto=format&fit=crop",
      href: "#keeping-updated"
    },
    {
      category: "Article",
      title: "Securing the Modern Software Supply Chain",
      image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=600&auto=format&fit=crop",
      href: "#keeping-updated"
    },
    {
      category: "Article",
      title: "Designing for Cognitive UX and Interactions",
      image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=600&auto=format&fit=crop",
      href: "#keeping-updated"
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

  const faqs = [
    {
      q: "How does enterprise product engineering support the development of large-scale digital products?",
      a: "Enterprise product engineering provides the foundation for designing, building, and deploying large-scale applications with modern, robust architectures. By incorporating modular microservices, auto-scaling cloud deployments, and continuous delivery systems, it guarantees maximum operational uptime, high security, and fast product feature updates."
    },
    {
      q: "What is the typical process for platform engineering services?",
      a: "The journey begins by analyzing developers' challenges and configuration bottlenecks. We then build custom templates, automate workflows, and develop internal developer portals (IDPs) so development teams can independently spin up new workspaces, pipelines, and compliance monitors without delay."
    },
    {
      q: "How much do platform engineering services cost?",
      a: "The configuration costs are customized based on the scale of your codebase, existing multi-cloud requirements, and your team's size. We provide optimized execution models that ensure you get maximum value and developer velocity at a predictable investment scale."
    },
    {
      q: "How do Platform Engineering Services enhance developer productivity?",
      a: "Platform engineering minimizes developer cognitive load by replacing manual setups with self-service templates and automated validation. This cuts back-and-forth tickets, allowing software engineers to focus entirely on writing business logic."
    },
    {
      q: "What components are included in Platform Engineering Services?",
      a: "It includes cloud-infrastructure automation (Infrastructure as Code), standardized CI/CD pipelines, integrated testing mechanisms, logging/observability nodes, role-based access configurations, and unified developer dashboards."
    },
    {
      q: "How do Platform Engineering Services improve security and compliance?",
      a: "By embedding regulatory policies and corporate security scans directly into base templates, any resource created automatically complies with policies like SOC2, GDPR, or ISO. This removes human errors during production setup."
    },
    {
      q: "How can I measure the success of Platform Engineering Services?",
      a: "We measure success using key software development indices (DORA metrics), such as deployment frequency, lead time for changes, mean time to recovery (MTTR), and overall system availability."
    },
    {
      q: "How do Platform Engineering Services reduce operational costs?",
      a: "Standardization reduces configuration drift and avoids multi-cloud resource over-provisioning. In addition, automated resource scheduling and automated alerts keep support costs to a minimum."
    },
    {
      q: "How do platforms help scale engineering across global product portfolios?",
      a: "Centralized internal platforms ensure all international divisions use unified patterns and libraries. This makes code reuse straightforward and enables global security rollouts across all divisions at once."
    },
    {
      q: "What Does Digital Product Engineering Include?",
      a: "Digital Product Engineering covers the entire lifecycle of software: ideation, UI/UX design, modular software coding, QA automation, secure multi-cloud setup, and continuous iteration using feedback loops."
    }
  ];

  const activeArticles = activeResourceTab === 'thought' ? thoughtArticles : insightArticles;

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

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
      
      {/* 1. Hero Section */}
      <section className="relative bg-slate-950 pt-28 md:pt-36 pb-16 md:pb-24 px-6 sm:px-12 lg:px-24 border-b border-slate-900 overflow-hidden min-h-[65vh] flex items-center">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/75 to-transparent z-0" />
        
        <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <span className="text-xoriant-green text-xs md:text-sm font-extrabold uppercase tracking-widest block">
              Product & Platform Engineering
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] text-white max-w-xl tracking-tight">
              Engineer AI-native product and platforms
            </h1>
            <button className="bg-[#00b23b] hover:bg-[#009632] text-white text-xs font-black uppercase py-4 px-8 rounded flex items-center gap-1.5 w-fit mt-8 transition-all tracking-widest shadow-md shadow-xoriant-green/10 hover:scale-105 active:scale-95 duration-200">
              LET'S CONNECT <span className="text-[10px]">▶</span>
            </button>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-xs">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-xoriant-green to-transparent opacity-20 blur-xl" />
              <img 
                src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=800&auto=format&fit=crop" 
                alt="AR Headset Engineering" 
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
                    activeTab === tab.id ? 'text-black' : 'text-slate-500 hover:text-black'
                  }`}
                >
                  {tab.name}
                  {activeTab === tab.id && (
                    <span className="absolute bottom-0 left-0 w-full h-[3px] bg-xoriant-green rounded-full" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 3. Winning The Digital Race Section */}
      <section id="winning" className="py-16 md:py-24 px-6 md:px-12 lg:px-24 border-b border-gray-150 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left dots decoration */}
          <div className="hidden md:flex md:col-span-3 lg:col-span-4 justify-center">
            <svg className="w-24 h-24 text-slate-200 fill-current opacity-70" viewBox="0 0 100 100">
              {Array.from({ length: 6 }).map((_, r) => 
                Array.from({ length: 6 }).map((_, c) => (
                  <circle key={`${r}-${c}`} cx={15 + c * 14} cy={15 + r * 14} r="2.5" />
                ))
              )}
            </svg>
          </div>
          
          {/* Right Text */}
          <div className="md:col-span-9 lg:col-span-8 space-y-4 text-left">
            <span className="text-xoriant-green text-xs font-black uppercase tracking-wider block">
              Winning the digital race
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-black tracking-tight leading-tight max-w-xl">
              Accelerate product value through platform engineering.
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed max-w-2xl font-medium">
              In a software-defined market, every product must evolve into a platform. From our House of Engineering, Xoriant blends human ingenuity with AI-led enterprise product engineering and platform modernization services to help you lead what's next. Powered by ORIAN Pulse, our agentic AI platform, we strengthen the SDLC with scalable platform architecture, platform performance optimization, and API-first platform engineering, so teams ship faster and platforms stay reliable.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Our Capabilities */}
      <section id="capabilities" className="py-16 md:py-24 px-6 md:px-12 lg:px-24 border-b border-gray-150 bg-slate-50">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-2">
            <span className="text-xoriant-green text-xs uppercase tracking-widest font-black block">
              Our Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-black tracking-tight max-w-2xl mx-auto leading-tight">
              AI-accelerated product and platform engineering
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto pt-4">
            {capabilities.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-xoriant-green/40 transition-all duration-300 border-t-4 border-t-xoriant-green flex flex-col justify-between text-left"
              >
                <h3 className="font-bold text-slate-900 text-base mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Featured Insight */}
      <section id="insights" className="py-16 md:py-24 px-6 md:px-12 lg:px-24 border-b border-gray-150 bg-white">
        <div className="max-w-7xl mx-auto">
          
          <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-xl border border-slate-150 flex flex-col md:flex-row bg-white min-h-[280px]">
            {/* Left Content */}
            <div className="w-full md:w-3/5 p-8 lg:p-10 flex flex-col justify-between text-left">
              <div>
                <span className="text-xoriant-green text-xs font-bold tracking-widest uppercase block mb-3">
                  Featured Insight
                </span>
                <h3 className="text-black text-xl md:text-2xl font-black leading-snug mb-4 max-w-md">
                  How To Measure Engineering Productivity: A Detailed Guide
                </h3>
              </div>
              <div className="space-y-4">
                <span className="block text-slate-400 text-xs font-semibold">
                  By Karthik Pillai | July 8, 2023
                </span>
                <a 
                  href="#keeping-updated" 
                  className="inline-flex items-center gap-1 text-xs font-extrabold text-black hover:text-xoriant-green transition-colors uppercase tracking-widest"
                >
                  Let's Find Out <span className="text-[10px]">▶</span>
                </a>
              </div>
            </div>

            {/* Right Graphic Banner */}
            <div className="w-full md:w-2/5 bg-gradient-to-br from-[#00b23b] to-[#009632] flex items-center justify-center p-8 relative overflow-hidden">
              {/* Background abstract overlays */}
              <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-black/10 rounded-full blur-xl" />

              {/* Glowing Up-Right Arrow */}
              <svg className="w-20 h-20 text-white fill-none stroke-current stroke-2 drop-shadow-[0_0_15px_rgba(255,255,255,0.6)] relative z-10 animate-pulse" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </div>
          </div>

        </div>
      </section>

      {/* 6. Accelerators In House & Collaborators */}
      <section id="accelerators" className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-150">
        <div className="max-w-7xl mx-auto space-y-16">
          
          {/* Part A: Accelerators */}
          <div className="text-left space-y-3">
            <span className="text-xoriant-green text-xs uppercase tracking-widest font-black block">
              Accelerators In House
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-black tracking-tight leading-tight max-w-2xl">
              Product Engineering Accelerators for Digital Journey
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
              {/* iPerform */}
              <div className="bg-[#00b23b] text-white p-6 rounded-2xl shadow-sm flex flex-col justify-between min-h-[200px] hover:scale-[1.02] transition-transform duration-300 text-left">
                <div className="space-y-4">
                  <h3 className="text-2xl font-extrabold">iPerform</h3>
                  <p className="text-xs font-semibold leading-relaxed opacity-95">
                    Platform performance optimization framework
                  </p>
                </div>
              </div>

              {/* iBase */}
              <div className="bg-[#00a3e0] text-white p-6 rounded-2xl shadow-sm flex flex-col justify-between min-h-[200px] hover:scale-[1.02] transition-transform duration-300 text-left">
                <div className="space-y-4">
                  <h3 className="text-2xl font-extrabold">iBase</h3>
                  <p className="text-xs font-semibold leading-relaxed opacity-95">
                    Patented SDLC assistant engine
                  </p>
                </div>
                <a href="#dream-details" className="text-[11px] font-bold uppercase tracking-wider hover:underline flex items-center gap-1">
                  Know More <span className="text-[9px]">▶</span>
                </a>
              </div>

              {/* iAutomate */}
              <div className="bg-[#1e2d5a] text-white p-6 rounded-2xl shadow-sm flex flex-col justify-between min-h-[200px] hover:scale-[1.02] transition-transform duration-300 text-left">
                <div className="space-y-4">
                  <h3 className="text-2xl font-extrabold">iAutomate</h3>
                  <p className="text-xs font-semibold leading-relaxed opacity-95">
                    Tool-agnostic test automation for web, mobile, API apps
                  </p>
                </div>
                <a href="#dream-details" className="text-[11px] font-bold uppercase tracking-wider hover:underline flex items-center gap-1">
                  Know More <span className="text-[9px]">▶</span>
                </a>
              </div>

              {/* iMonitor */}
              <div className="bg-[#2575fc] text-white p-6 rounded-2xl shadow-sm flex flex-col justify-between min-h-[200px] hover:scale-[1.02] transition-transform duration-300 text-left">
                <div className="space-y-4">
                  <h3 className="text-2xl font-extrabold">iMonitor</h3>
                  <p className="text-xs font-semibold leading-relaxed opacity-95">
                    Reliability monitoring and self-healing operations
                  </p>
                </div>
                <a href="#dream-details" className="text-[11px] font-bold uppercase tracking-wider hover:underline flex items-center gap-1">
                  Know More <span className="text-[9px]">▶</span>
                </a>
              </div>
            </div>
          </div>

          {/* Part B: Our Collaborators */}
          <div className="text-left space-y-4 pt-8 border-t border-gray-100">
            <span className="text-xoriant-green text-xs uppercase tracking-widest font-black block">
              Our Collaborators
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-black tracking-tight leading-tight">
              Partners in our Digital Engineering Footsteps
            </h2>

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

            {/* Infinite Horizontal Logo Marquee */}
            <div className="relative flex overflow-hidden w-full bg-[#f8fafc] py-5 rounded-xl border border-slate-100 mt-4 select-none">
              <div className="flex gap-12 shrink-0 items-center animate-marquee-slow">
                {[...partnerLogos, ...partnerLogos].map((logo, lIdx) => (
                  <div key={lIdx} className="h-6 md:h-8 flex items-center justify-center px-2 shrink-0">
                    {logo.type === "image" ? (
                      <img 
                        src={logo.src} 
                        alt={logo.name} 
                        className="h-full object-contain filter opacity-85 hover:opacity-100 transition-opacity duration-300"
                        style={{ maxWidth: '90px' }}
                      />
                    ) : (
                      logo.render()
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

        </div>
      </section>

      {/* 7. Incredible Numbers Section */}
      <section id="outcomes" className="relative py-20 px-6 md:px-12 lg:px-24 overflow-hidden border-b border-gray-150">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop')` }}
        />
        <div className="absolute inset-0 bg-slate-950/85 backdrop-blur-[1px] z-0" />
        
        <div className="max-w-7xl mx-auto relative z-10 text-left space-y-8">
          <div className="space-y-3">
            <span className="text-xoriant-green text-xs uppercase tracking-widest font-black block">
              Incredible Numbers
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight max-w-xl">
              Outcomes driven by ingenuity and intelligence
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
            {/* Card 1 */}
            <div className="bg-[#00b23b] text-white p-6 rounded-2xl shadow-lg flex flex-col justify-center min-h-[160px] text-left hover:scale-[1.02] transition-transform duration-300">
              <span className="text-4xl font-black tracking-tight mb-2">200%</span>
              <p className="text-xs font-semibold leading-relaxed opacity-95">
                Faster mortgage processing across the U.S.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#00b23b] text-white p-6 rounded-2xl shadow-lg flex flex-col justify-center min-h-[160px] text-left hover:scale-[1.02] transition-transform duration-300">
              <span className="text-4xl font-black tracking-tight mb-2">$7 Trillion</span>
              <p className="text-xs font-semibold leading-relaxed opacity-95">
                Daily global settlements enabled
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#1e2d5a] text-white p-6 rounded-2xl shadow-lg flex flex-col justify-center min-h-[160px] text-left hover:scale-[1.02] transition-transform duration-300">
              <span className="text-4xl font-black tracking-tight mb-2">99.99%</span>
              <p className="text-xs font-semibold leading-relaxed opacity-95">
                Satcom uptime for seamless connectivity
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-[#00b23b] text-white p-6 rounded-2xl shadow-lg flex flex-col justify-center min-h-[160px] text-left hover:scale-[1.02] transition-transform duration-300">
              <span className="text-4xl font-black tracking-tight mb-2">60%</span>
              <p className="text-xs font-semibold leading-relaxed opacity-95">
                OPEX savings for smart factory platforms
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Keeping You Updated (Positioned below Incredible Numbers) */}
      <section id="updates" className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-150">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-3">
            <span className="text-xoriant-green text-xs font-black uppercase tracking-wider block">
              Keeping You Updated
            </span>
            <div className="flex justify-center space-x-6 text-sm font-bold border-b border-gray-100 pb-2 max-w-xs mx-auto">
              <button 
                onClick={() => setActiveResourceTab('thought')}
                className={`pb-2 transition-all cursor-pointer ${
                  activeResourceTab === 'thought' ? 'text-black border-b-2 border-xoriant-green' : 'text-slate-400 hover:text-black'
                }`}
              >
                Thought Leadership
              </button>
              <button 
                onClick={() => setActiveResourceTab('insights')}
                className={`pb-2 transition-all cursor-pointer ${
                  activeResourceTab === 'insights' ? 'text-black border-b-2 border-xoriant-green' : 'text-slate-400 hover:text-black'
                }`}
              >
                Insights
              </button>
            </div>
          </div>

          {/* 5-Column Responsive Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto pt-4">
            {activeArticles.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-[#f8fafc] border border-slate-100 rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between hover:shadow-md transition-all duration-300 text-left min-h-[300px]"
              >
                <div className="w-full h-36 overflow-hidden bg-slate-100">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                  />
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="text-xoriant-green text-[10px] font-bold uppercase tracking-wider block">
                      {item.category}
                    </span>
                    <h4 className="text-slate-900 font-extrabold text-xs leading-snug line-clamp-3">
                      {item.title}
                    </h4>
                  </div>
                  <a 
                    href={item.href} 
                    className="text-[10px] font-black text-black hover:text-xoriant-green uppercase tracking-wider flex items-center gap-1 mt-4 transition-colors"
                  >
                    Know More <span className="text-[9px]">▶</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Our other key areas for Digital Engineering Services (Positioned below Keeping You Updated) */}
      <section id="other-services" className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-slate-50 border-b border-gray-150">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left Heading */}
          <div className="md:col-span-5 space-y-4 text-left relative">
            {/* Dots Grid Decoration */}
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

          {/* Right Services Grid */}
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

      {/* 10. Platform Engineering - Questions frequently asked (FAQ Section) */}
      <section id="faq" className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-150">
        <div className="max-w-3xl mx-auto text-left">
          
          <h2 className="text-2xl md:text-3xl font-black text-black tracking-tight mb-4">
            Platform Engineering - Questions frequently asked
          </h2>
          <div className="w-full h-[2px] bg-xoriant-green mb-8" />

          <div className="divide-y divide-gray-200">
            {faqs.map((faq, idx) => {
              const isOpen = expandedFaq === idx;
              return (
                <div key={idx} className="py-4">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full py-2 flex items-center justify-between text-left focus:outline-none group select-none"
                  >
                    <span className="text-xs md:text-[13px] font-black text-slate-900 group-hover:text-xoriant-green transition-colors leading-snug pr-6">
                      {faq.q}
                    </span>
                    <div className={`w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center text-slate-400 group-hover:border-slate-500 group-hover:text-slate-700 transition-all shrink-0`}>
                      {isOpen ? (
                        <Minus className="w-3.5 h-3.5 text-xoriant-green stroke-[3px]" />
                      ) : (
                        <Plus className="w-3.5 h-3.5 stroke-[3px]" />
                      )}
                    </div>
                  </button>

                  <div 
                    className={`overflow-hidden transition-all duration-350 ${
                      isOpen ? 'max-h-[300px] mt-2 pb-4 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                    }`}
                  >
                    <p className="text-slate-650 text-xs leading-relaxed font-medium pl-1 pr-12">
                      {faq.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 11. Contact & Locations Section */}
      <ContactAndLocations title="Disruptions becoming a blocker to your Desired Digital Future?" />

    </div>
  );
}
