import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Cpu, Layers, Shield, Zap, Monitor, Settings, RefreshCw, Sparkles, Code, Play, Plus, Minus } from 'lucide-react';
import ContactAndLocations from './ContactAndLocations';

export default function ApplicationDevelopmentManagement() {
  const [activeTab, setActiveTab] = useState('future-ready');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [activeResourceTab, setActiveResourceTab] = useState('thought');
  const [expandedFaq, setExpandedFaq] = useState(null);

  const tabs = [
    { id: 'future-ready', name: 'Future Ready Apps' },
    { id: 'capabilities', name: 'Our Capabilities' },
    { id: 'differentiators', name: 'Our Key Differentiators' },
    { id: 'insights', name: 'Featured Insights' },
    { id: 'delivery', name: 'How We Deliver' },
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
          <span className="text-[13px] font-bold">Digital<span className="text-ossisto-blue font-black">Ex</span></span>
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
      title: "Custom Application Development",
      desc: "Tailored enterprise application development using modern engineering practices and AI-driven insights to build faster and align precisely with user requirements."
    },
    {
      title: "Application Modernization",
      desc: "Transform legacy portfolios into secure, cloud-native platforms through refactoring, re-engineering, and componentization, breaking monolithic codebases into containerized microservices."
    },
    {
      title: "Application Lifecycle Management",
      desc: "End-to-end support for enterprise applications, including governance, maintenance, updates, and regular performance audits to ensure systems adapt to evolving requirements."
    },
    {
      title: "Packaged Application Enablement",
      desc: "Simplify onboarding, configuration, and adoption of packaged enterprise solutions using automation and AI-assisted custom connectors to reduce time-to-value."
    },
    {
      title: "UI/UX Modernization",
      desc: "Enhance user experiences through responsive, modern frontends, adaptive layouts, and predictive interfaces across all web and mobile platforms."
    },
    {
      title: "Quality Assurance & Testing",
      desc: "AI-driven quality engineering, including self-healing automation frameworks and predictive defect analysis, to guarantee robust reliability and security."
    }
  ];

  const differentiators = [
    {
      title: "Full spectrum delivery",
      desc: "We deliver end-to-end enterprise application development and modernization across the full lifecycle, reducing vendor dependency, eliminating duplication, and lowering modernization costs."
    },
    {
      title: "30+ years of modernization expertise",
      desc: "With decades of experience in refactoring legacy systems and modern application engineering, we help enterprises anticipate change and modernize with confidence."
    },
    {
      title: "360° value-driven modernization",
      desc: "Our app modernization consulting approach maps technology decisions directly to business outcomes—from cost optimization to long-term competitive advantage."
    },
    {
      title: "Cloud-native by design",
      desc: "We preserve existing investments while enabling cloud-native app modernization through containerization, microservices, and scalable architectures."
    }
  ];

  const deliveryModels = [
    {
      phase: "BUILD (Innovation)",
      desc: "Capitalize on new opportunities with timely app innovation and best-in-class solutioning. Ossisto BUILD services position us as your future-ready engineering partner."
    },
    {
      phase: "RUN (Efficiency)",
      desc: "Drive peak efficiency for your IT operations. Ossisto RUN Services don’t just keep the lights on; we unlock value at every step by maximizing your resources and our expertise."
    },
    {
      phase: "TRANSFORM (Transformation)",
      desc: "Innovation doesn’t sleep and with Ossisto TRANSFORM Services, you are inspired to keep pace. Our frameworks and accelerators help execute large-scale digital transformation."
    }
  ];

  const accelerators = [
    {
      name: "Orian Pulse",
      desc: "Agentic SDLC suite accelerating software product lifecycle services"
    },
    {
      name: "ORIAN.AI Studio",
      desc: "Marketplace of enterprise-grade AI engineering use cases"
    },
    {
      name: "CloudIO",
      desc: "Enabling real-time visualization with Low-code/No-code"
    },
    {
      name: "iQEAssist",
      desc: "GenAI-driven quality intelligence"
    },
    {
      name: "iPerform",
      desc: "Performance Testing Model built for API and web applications"
    },
    {
      name: "iBase",
      desc: "Patented SDLC assistant that provides deep performance insights"
    }
  ];

  const successStories = [
    {
      title: "Modernizing Financial Systems for a Global Bank",
      desc: "Ahead of Bulgaria’s legally mandated Euro (EUR) adoption on 1 January 2026, a leading global bank faced a non-negotiable regulatory deadline requiring enterprise-wide currency conversion."
    },
    {
      title: "How a Global Bank Achieved 60% Faster Deployments",
      desc: "Ossisto empowered the bank to achieve agile, error-free releases by engineering a scalable RelOps automation framework."
    },
    {
      title: "Smarter Procurement Platform for a Global Software Leader",
      desc: "Discover how Ossisto enabled a global software leader transform its procurement experience with a smart, web-based platform—enabling seamless supplier management, sourcing, and compliance."
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
      title: "Navigating Salesforce DevOps: From ANT to Modern CI/CD",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop",
      href: "#keeping-updated"
    }
  ];

  const insightArticles = [
    {
      category: "Blog",
      title: "Why AI Is Transforming Software Testing",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600&auto=format&fit=crop",
      href: "#keeping-updated"
    },
    {
      category: "Blog",
      title: "Multi-Agentic RAG: AI Brain Powering Supply Chain Decisions",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop",
      href: "#keeping-updated"
    },
    {
      category: "Case Study",
      title: "Strengthening Salesforce Performance and Scalability",
      image: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?q=80&w=600&auto=format&fit=crop",
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
      q: "Why choose Ossisto for web application development?",
      a: "Ossisto delivers enterprise-grade web applications that are secure, scalable, and aligned with modern digital business needs. As a digital engineering services company, we focus on building solutions that are not just functional but also optimized for performance, user experience, and long-term maintainability."
    },
    {
      q: "Why is web app security important?",
      a: "Web application security is critical because modern applications handle sensitive business and customer data that can be targeted by cyber threats. Ossisto’s digital engineering services embed security into every phase of development to reduce vulnerabilities and ensure compliance."
    },
    {
      q: "How long does it take to develop a web application?",
      a: "The timeline depends on complexity, integrations, and scalability requirements. Simple applications may take a few weeks, while enterprise-grade systems built using digital engineering solutions can take several months due to architecture design, testing, and deployment cycles."
    },
    {
      q: "What factors influence the cost of web app development?",
      a: "Several elements impact overall development cost, including feature complexity, technology stack, and scalability requirements. Ossisto’s digital engineering service approach ensures optimized cost through efficient architecture and reusable components."
    },
    {
      q: "How long does enterprise web app development take?",
      a: "Enterprise applications require more structured planning due to security, scalability, and compliance requirements. With Ossisto’s digital engineering services, delivery is typically phased to ensure stability and faster incremental releases."
    },
    {
      q: "What factors influence web development cost estimation?",
      a: "Cost estimation is shaped by both technical and business considerations. As a digital engineering services company, Ossisto evaluates requirements holistically to provide realistic and transparent estimates."
    },
    {
      q: "How do you ensure the security of web applications?",
      a: "Security is ensured through secure architecture design, code reviews, penetration testing, and continuous monitoring. Ossisto’s digital engineering solutions integrate DevSecOps practices to minimize vulnerabilities throughout the application lifecycle."
    },
    {
      q: "How can web applications benefit businesses?",
      a: "Web applications enable businesses to improve accessibility, scalability, and operational efficiency. With Ossisto’s digital engineering services, organizations can modernize legacy systems and deliver seamless digital experiences."
    },
    {
      q: "How to optimize web app performance?",
      a: "Performance optimization includes caching strategies, code optimization, load balancing, and cloud scaling. Ossisto applies digital engineering service best practices to ensure fast, responsive, and highly available applications."
    },
    {
      q: "What are the 7 stages of web development?",
      a: "Web development follows a structured lifecycle to ensure quality and scalability. Ossisto’s digital engineering services ensure disciplined execution across each phase: requirement gathering, system analysis/design, UI/UX design, development, testing, deployment, and maintenance."
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
      <section className="relative bg-slate-950 pt-20 md:pt-28 pb-12 md:pb-16 pl-12 pr-6 sm:pl-16 sm:pr-12 lg:px-24 border-b border-slate-900 overflow-hidden min-h-[52vh] flex items-center">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/75 to-transparent z-0" />

        <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <span className="text-ossisto-blue text-xs md:text-sm font-extrabold uppercase tracking-widest block">
              Application Development & Modernization
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] text-white max-w-xl tracking-tight">
              Modernize faster, build smarter, lead with AI.
            </h1>
            <button className="bg-[#236CB1] hover:bg-[#236CB1] text-white text-[11px] sm:text-xs font-black uppercase py-2.5 px-5 sm:py-4 sm:px-8 rounded flex items-center gap-1.5 w-fit mt-8 transition-all tracking-widest shadow-md shadow-ossisto-blue/10 hover:scale-105 active:scale-95 duration-200">
              LET'S CONNECT <span className="text-[10px]">▶</span>
            </button>
          </div>

          {/* Right Video */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-xs md:max-w-sm aspect-video rounded-2xl overflow-hidden shadow-2xl bg-slate-900 border border-slate-800">
              <video
                src="/Ossisto - Industry 4.0.mp4"
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

      {/* 2. Sub-Navbar Tab Menu Wrapper (Hidden as requested) */}
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

      {/* 3. Future Ready Apps Section */}
      <section id="future-ready" className="py-16 md:py-24 px-6 md:px-12 lg:px-24 border-b-0 lg:border-b border-gray-150 bg-white">
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
            <span className="text-ossisto-blue text-xs font-black uppercase tracking-wider block">
              Future Ready Apps
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-black tracking-tight leading-tight max-w-xl">
              Modern apps must evolve faster and smarter with AI.
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed max-w-2xl font-medium">
              Enterprise software landscapes require quick releases, deep data integrations, and scalable cloud setups. To stay ahead of disruption, traditional architectures must evolve. Ossisto transforms core applications with custom cloud-native engineering, migrating monoliths into containerized microservices, setting up unified DevSecOps pipelines, and integrating enterprise-grade cognitive layers to prepare your apps for the age of AI.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Our Capabilities */}
      <section id="capabilities" className="py-16 md:py-24 px-6 md:px-12 lg:px-24 border-b-0 lg:border-b border-gray-150 bg-slate-50">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-2">
            <span className="text-ossisto-blue text-xs uppercase tracking-widest font-black block">
              Our Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-black tracking-tight max-w-2xl mx-auto leading-tight">
              Full spectrum application development and modernization
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto pt-4">
            {capabilities.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-ossisto-blue/40 transition-all duration-300 border-t-4 border-t-ossisto-blue flex flex-col justify-between text-left"
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

      {/* 5. Our Key Differentiators */}
      <section id="differentiators" className="py-16 md:py-24 px-6 md:px-12 lg:px-24 border-b-0 lg:border-b border-gray-150 bg-white">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-2">
            <span className="text-ossisto-blue text-xs uppercase tracking-widest font-black block">
              Our Key Differentiators
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-black tracking-tight leading-tight">
              Why leading enterprises partner with Ossisto
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto pt-4">
            {differentiators.map((item, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-150 rounded-2xl p-6 text-left flex flex-col justify-between hover:shadow-md transition-shadow duration-300">
                <h3 className="font-black text-slate-900 text-[17px] mb-3">{item.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Featured Insights */}
      <section id="insights" className="py-16 md:py-24 px-6 md:px-12 lg:px-24 border-b-0 lg:border-b border-gray-150 bg-slate-50">
        <div className="max-w-7xl mx-auto">

          <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-xl border border-slate-150 flex flex-col md:flex-row bg-white min-h-[280px]">
            {/* Left Content */}
            <div className="w-full md:w-3/5 p-8 lg:p-10 flex flex-col justify-between text-left">
              <div>
                <span className="text-ossisto-blue text-xs font-bold tracking-widest uppercase block mb-3">
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
                  className="inline-flex items-center gap-1 text-xs font-extrabold text-black hover:text-ossisto-blue transition-colors uppercase tracking-widest"
                >
                  Let's Find Out <span className="text-[10px]">▶</span>
                </a>
              </div>
            </div>

            {/* Right Graphic Banner */}
            <div className="w-full md:w-2/5 bg-gradient-to-br from-[#236CB1] to-[#236CB1] flex items-center justify-center p-8 relative overflow-hidden">
              <span className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
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

      {/* 7. How We Deliver */}
      <section id="delivery" className="py-16 md:py-24 px-6 md:px-12 lg:px-24 border-b-0 lg:border-b border-gray-150 bg-white">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-2">
            <span className="text-ossisto-blue text-xs uppercase tracking-widest font-black block">
              How We Deliver
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-black tracking-tight leading-tight">
              Structured lifecycle execution built to scale
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto pt-4">
            {deliveryModels.map((item, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-100 rounded-2xl p-6 text-left flex flex-col justify-between min-h-[180px] hover:scale-[1.02] transition-transform duration-300">
                <h3 className="font-extrabold text-slate-900 text-[15px] mb-3 border-b-2 border-ossisto-blue pb-1.5 w-fit">{item.phase}</h3>
                <p className="text-slate-500 text-xs leading-relaxed font-medium flex-1 pt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Accelerators In House */}
      <section id="accelerators" className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-slate-50 border-b-0 lg:border-b border-gray-150">
        <div className="max-w-7xl mx-auto space-y-16">

          <div className="text-left space-y-3">
            <span className="text-ossisto-blue text-xs uppercase tracking-widest font-black block">
              Accelerators In House
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-black tracking-tight leading-tight max-w-2xl">
              Frameworks and agents driving transformation velocity
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
              {accelerators.map((acc, idx) => (
                <div key={idx} className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 text-left flex flex-col justify-between min-h-[160px]">
                  <div className="space-y-3">
                    <h3 className="text-lg font-extrabold text-slate-900">{acc.name}</h3>
                    <p className="text-xs font-semibold leading-relaxed text-slate-500">
                      {acc.desc}
                    </p>
                  </div>
                  <a href="#dream-details" className="text-[11px] font-bold text-ossisto-blue uppercase tracking-wider hover:underline flex items-center gap-1 mt-4">
                    Know More <span className="text-[9px]">▶</span>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Our Collaborators Marquee */}
          <div className="text-left space-y-4 pt-8 border-t border-gray-200">
            <span className="text-ossisto-blue text-xs uppercase tracking-widest font-black block">
              Our Collaborators
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-black tracking-tight leading-tight">
              Partners in our Digital Engineering Footsteps
            </h2>

            <style dangerouslySetInnerHTML={{
              __html: `
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

            <div className="relative flex overflow-hidden w-full bg-white py-5 rounded-xl border border-slate-100 mt-4 select-none">
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
              <a href="#ecosystem" className="inline-flex items-center gap-1 text-xs font-extrabold text-black hover:text-ossisto-blue transition-colors uppercase tracking-widest">
                All Partners <span className="text-[10px]">▶</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 9. Incredible Numbers Section */}
      <section className="relative py-20 px-6 md:px-12 lg:px-24 overflow-hidden border-b-0 lg:border-b border-gray-150">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop')` }}
        />
        <div className="absolute inset-0 bg-slate-950/85 backdrop-blur-[1px] z-0" />

        <div className="max-w-7xl mx-auto relative z-10 text-left space-y-8">
          <div className="space-y-3">
            <span className="text-ossisto-blue text-xs uppercase tracking-widest font-black block">
              Incredible Numbers
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight max-w-xl">
              Outcomes driven by ingenuity and intelligence
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
            <div className="bg-[#236CB1] text-white p-6 rounded-2xl shadow-lg flex flex-col justify-center min-h-[160px] text-left hover:scale-[1.02] transition-transform duration-300">
              <span className="text-4xl font-black tracking-tight mb-2">40%</span>
              <p className="text-xs font-semibold leading-relaxed opacity-95">
                Faster time-to-market for custom applications
              </p>
            </div>

            <div className="bg-[#236CB1] text-white p-6 rounded-2xl shadow-lg flex flex-col justify-center min-h-[160px] text-left hover:scale-[1.02] transition-transform duration-300">
              <span className="text-4xl font-black tracking-tight mb-2">35%</span>
              <p className="text-xs font-semibold leading-relaxed opacity-95">
                OpEx reduction through automated application management
              </p>
            </div>

            <div className="bg-[#1e2d5a] text-white p-6 rounded-2xl shadow-lg flex flex-col justify-center min-h-[160px] text-left hover:scale-[1.02] transition-transform duration-300">
              <span className="text-4xl font-black tracking-tight mb-2">99.99%</span>
              <p className="text-xs font-semibold leading-relaxed opacity-95">
                Application uptime for global digital operations
              </p>
            </div>

            <div className="bg-[#236CB1] text-white p-6 rounded-2xl shadow-lg flex flex-col justify-center min-h-[160px] text-left hover:scale-[1.02] transition-transform duration-300">
              <span className="text-4xl font-black tracking-tight mb-2">70%</span>
              <p className="text-xs font-semibold leading-relaxed opacity-95">
                Decrease in application deployment cycle times
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Success Stories */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-white border-b-0 lg:border-b border-gray-150">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-left space-y-2">
            <span className="text-ossisto-blue text-xs uppercase tracking-widest font-black block">
              Our Success Stories
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-black tracking-tight leading-tight">
              Real world engineering impact delivered
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto pt-4">
            {successStories.map((story, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-150 rounded-2xl p-6 text-left flex flex-col justify-between hover:shadow-md transition-shadow duration-300 min-h-[220px]">
                <div className="space-y-4">
                  <h3 className="text-slate-900 font-extrabold text-[15px] leading-snug">{story.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed font-medium">{story.desc}</p>
                </div>
                <a href="#case-studies" className="text-ossisto-blue text-xs font-extrabold uppercase hover:underline mt-4 block">
                  Read Case Study
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Keeping You Updated */}
      <section id="updates" className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-slate-50 border-b-0 lg:border-b border-gray-150">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <span className="text-ossisto-blue text-xs font-black uppercase tracking-wider block">
              Keeping You Updated
            </span>
            <div className="flex justify-center space-x-6 text-sm font-bold border-b-0 lg:border-b border-gray-150 pb-2 max-w-xs mx-auto">
              <button
                onClick={() => setActiveResourceTab('thought')}
                className={`pb-2 transition-all cursor-pointer ${activeResourceTab === 'thought' ? 'text-black border-b-2 border-ossisto-blue' : 'text-slate-400 hover:text-black'
                  }`}
              >
                Thought Leadership
              </button>
              <button
                onClick={() => setActiveResourceTab('insights')}
                className={`pb-2 transition-all cursor-pointer ${activeResourceTab === 'insights' ? 'text-black border-b-2 border-ossisto-blue' : 'text-slate-400 hover:text-black'
                  }`}
              >
                Insights
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto pt-4">
            {activeArticles.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-150 rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between hover:shadow-md transition-all duration-300 text-left min-h-[300px]"
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
                    <span className="text-ossisto-blue text-[10px] font-bold uppercase tracking-wider block">
                      {item.category}
                    </span>
                    <h4 className="text-slate-900 font-extrabold text-xs leading-snug line-clamp-3">
                      {item.title}
                    </h4>
                  </div>
                  <a
                    href={item.href}
                    className="text-[10px] font-black text-black hover:text-ossisto-blue uppercase tracking-wider flex items-center gap-1 mt-4 transition-colors"
                  >
                    Know More <span className="text-[9px]">▶</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. Our other key areas for Digital Engineering Services */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-white border-b-0 lg:border-b border-gray-150">
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
                <div className="w-12 h-12 flex items-center justify-center bg-slate-50 shadow-sm border border-slate-100 rounded-2xl">
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

      {/* 13. Questions frequently asked (FAQ Section) */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-slate-50 border-none">
        <div className="max-w-3xl mx-auto text-left">

          <h2 className="text-2xl md:text-3xl font-black text-black tracking-tight mb-4">
            Application Development & Management - Questions frequently asked
          </h2>
          <div className="w-full h-[2px] bg-ossisto-blue mb-8" />

          <div className="divide-y divide-gray-200">
            {faqs.map((faq, idx) => {
              const isOpen = expandedFaq === idx;
              return (
                <div key={idx} className="py-4">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full py-2 flex items-center justify-between text-left focus:outline-none group select-none"
                  >
                    <span className="text-xs md:text-[13px] font-black text-slate-900 group-hover:text-ossisto-blue transition-colors leading-snug pr-6">
                      {faq.q}
                    </span>
                    <div className={`w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center text-slate-400 group-hover:border-slate-500 group-hover:text-slate-700 transition-all shrink-0`}>
                      {isOpen ? (
                        <Minus className="w-3.5 h-3.5 text-ossisto-blue stroke-[3px]" />
                      ) : (
                        <Plus className="w-3.5 h-3.5 stroke-[3px]" />
                      )}
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-350 ${isOpen ? 'max-h-[300px] mt-2 pb-4 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
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

      {/* 14. Contact & Locations Section */}
      <ContactAndLocations title="Disruptions becoming a blocker to your Desired Digital Future?" />

    </div>
  );
}
