import React, { useState, useEffect } from 'react';
import { Cpu, Layers, Shield, Zap, Monitor, Settings, RefreshCw, Sparkles, Code, Plus, Minus, Lock, CheckCircle, ArrowRight } from 'lucide-react';
import ContactAndLocations from './ContactAndLocations';

export default function BankingFinancialServices() {
  const [activeTab, setActiveTab] = useState('futurifying-finance');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [activeStoryIdx, setActiveStoryIdx] = useState(1); // 1 corresponds to "Fortifying the Banking Frontlines" as active (2nd dot) in screenshot
  const [activeResourceTab, setActiveResourceTab] = useState('thought');

  const tabs = [
    { id: 'futurifying-finance', name: 'Futurifying Finance' },
    { id: 'factsheet', name: 'Factsheet' },
    { id: 'those-we-serve', name: 'Those We Serve' },
    { id: 'accelerators', name: 'Accelerators' },
    { id: 'success-stories', name: 'Success Stories' }
  ];

  const serveAreas = [
    {
      title: "Capital Markets",
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=600&auto=format&fit=crop",
      desc: "Enable high-frequency algorithmic execution, real-time portfolio risk scoring, and next-generation clearing fabrics."
    },
    {
      title: "Retail Banking",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=600&auto=format&fit=crop",
      desc: "Create immersive consumer lending systems, automated mobile credit decisions, and smart retail wallets."
    },
    {
      title: "Wholesale & Corporate Banking",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop",
      desc: "Streamline multi-currency treasury orchestration, cross-border corporate payments, and letters of credit."
    },
    {
      title: "Wealth & Asset Management",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop",
      desc: "Leverage AI-driven hyper-personalized portfolio advisors and automated client investment portals."
    },
    {
      title: "Risk & Compliance Systems",
      image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=600&auto=format&fit=crop",
      desc: "Upgrade transaction monitoring nodes to automate KYC/AML policies and prevent compliance errors."
    },
    {
      title: "Digital Payments & Wallets",
      image: "https://images.unsplash.com/photo-1563013544-824ae1d704d3?q=80&w=600&auto=format&fit=crop",
      desc: "Scale core payment engines to support secure zero-latency microtransactions and instant settle pipelines."
    }
  ];

  const accelerators = [
    {
      name: "X-CELERATE Invoice",
      desc: "Smart Invoice Processing",
      color: "bg-[#00a3e0]"
    },
    {
      name: "CloudIO",
      desc: "Enabling real-time visualization with Low-code/No-code",
      color: "bg-[#1e2d5a]"
    },
    {
      name: "Xoriant CDi",
      desc: "Data Enrichment and Governance solution",
      color: "bg-[#2575fc]"
    },
    {
      name: "Xonnect",
      desc: "Composable Banking Solution for Corporate Payments, Lending, Trade Finance",
      color: "bg-[#00b23b]"
    }
  ];

  const successStories = [
    {
      title: "Real-time Operations Intelligence for a Smart City Infrastructure",
      desc: "Implemented predictive maintenance pipelines and real-time Kafka streams to monitor over 12,000 grid sensors and reduce critical system offline incidents by 35%."
    },
    {
      title: "Fortifying the Banking Frontlines with Improved Network and Security",
      desc: "Automated device hardening from weeks to minutes without errors."
    },
    {
      title: "Global Supply Chain Inventory Optimization using Agentic Workflows",
      desc: "Engineered multi-agent collaboration frameworks to coordinate supplier forecasts, reducing catalog stockouts by 18% and automating requisition drafting based on live demand."
    }
  ];

  const thoughtArticles = [
    {
      category: "Article",
      title: "Reimagining Payments & Routing with Agentic Intelligence",
      image: "https://images.unsplash.com/photo-1563013544-824ae1d704d3?q=80&w=600&auto=format&fit=crop",
      href: "#keeping-updated"
    },
    {
      category: "Article",
      title: "AI@Scale in Banking: Make Pilots Successful - Faster to Production",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600&auto=format&fit=crop",
      href: "#keeping-updated"
    },
    {
      category: "Article",
      title: "Cracking the Code of Compliance: The Future of...",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop",
      href: "#keeping-updated"
    },
    {
      category: "Article",
      title: "What Next-Gen Treasury Management Will...",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop",
      href: "#keeping-updated"
    },
    {
      category: "Article",
      title: "Fintech Disruption and Ecosystem Synergies...",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=600&auto=format&fit=crop",
      href: "#keeping-updated"
    }
  ];

  const insightArticles = [
    {
      category: "Case Study",
      title: "Securing Financial Transactions on Public Networks",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600&auto=format&fit=crop",
      href: "#keeping-updated"
    },
    {
      category: "Case Study",
      title: "Leveraging Graph Databases for Fraud Ring Analysis",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop",
      href: "#keeping-updated"
    },
    {
      category: "POV",
      title: "The Shift toward Open Banking Regulations",
      image: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?q=80&w=600&auto=format&fit=crop",
      href: "#keeping-updated"
    },
    {
      category: "POV",
      title: "Sovereign Cloud Architectures for Banking Regulations",
      image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=600&auto=format&fit=crop",
      href: "#keeping-updated"
    },
    {
      category: "POV",
      title: "Zero-Knowledge Proofs in Customer Onboarding",
      image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=600&auto=format&fit=crop",
      href: "#keeping-updated"
    }
  ];

  const activeArticles = activeResourceTab === 'thought' ? thoughtArticles : insightArticles;

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
            <span className="text-xoriant-green text-xs md:text-sm font-extrabold uppercase tracking-widest block font-sans">
              Banking & Financial Services
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] text-white max-w-xl tracking-tight">
              The Future of Finance is Here
            </h1>
            <button className="bg-[#00b23b] hover:bg-[#009632] text-white text-xs font-black uppercase py-4 px-8 rounded flex items-center gap-1.5 w-fit mt-8 transition-all tracking-widest shadow-md shadow-xoriant-green/10 hover:scale-105 active:scale-95 duration-200">
              LET'S CONNECT <span className="text-[10px]">▶</span>
            </button>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-xs md:max-w-md">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-xoriant-green to-transparent opacity-20 blur-xl" />
              <img 
                src="/banking_hero.png" 
                alt="Banking analytics visualization hero" 
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

      {/* 3. Futurifying Finance & Featured Insight (Screenshot 1 & 2 details) */}
      <section id="futurifying-finance" className="py-16 md:py-24 px-6 md:px-12 lg:px-24 border-b border-gray-150 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Main Content centered */}
          <div className="space-y-8 text-center max-w-4xl mx-auto flex flex-col items-center">
            <div className="space-y-4">
              <span className="text-xoriant-green text-xs font-black uppercase tracking-wider block">
                Futurifying Finance
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-black tracking-tight leading-tight max-w-2xl font-sans mx-auto">
                Financial firms are dealing with big changes. They must save money, manage risks & invest in digital services for delivering hyper-personalized financial services.
              </h2>
              
              <div className="space-y-4 text-slate-500 text-sm leading-relaxed max-w-3xl font-medium mx-auto">
                <p>
                  Xoriant brings together strong engineering expertise and the latest technology know-how to drive digital transformation and update applications. We are here to support the world's leading financial services providers in achieving better revenue, operational efficiency, and a competitive advantage. Our commitment lies in helping these providers grow, cut costs, and stay ahead in the market. By infusing innovation into everything we do, we're playing a key role in shaping a brighter and more advanced future for the financial industry.
                </p>
              </div>
            </div>

            {/* Featured Insight Container inside Screenshot 2 */}
            <div className="max-w-3xl w-full rounded-3xl overflow-hidden shadow-xl border border-slate-150 flex flex-col md:flex-row bg-[#f8fafc] min-h-[260px] mt-10 text-left">
              {/* Left text */}
              <div className="w-full md:w-3/5 p-8 flex flex-col justify-between">
                <div>
                  <span className="text-xoriant-green text-xs font-bold tracking-widest uppercase block mb-3">
                    Featured Insight
                  </span>
                  <h3 className="text-black text-base md:text-lg font-black leading-snug mb-4 max-w-sm">
                    Banks, Fintechs, And Others Aim To Boost Security And Efficiency By Adopting Cloud Technology For Streamlined Banking Processes.
                  </h3>
                </div>
                <div className="pt-4">
                  <a 
                    href="#keeping-updated" 
                    className="inline-flex items-center gap-1.5 text-xs font-extrabold text-black hover:text-xoriant-green transition-colors uppercase tracking-widest"
                  >
                    Let's Find Out <span className="text-[10px]">▶</span>
                  </a>
                </div>
              </div>

              {/* Right image */}
              <div className="w-full md:w-2/5 relative overflow-hidden min-h-[200px] md:min-h-auto bg-slate-900">
                <img 
                  src="/banking_insight.png" 
                  alt="Banking Cloud Highrise Insight" 
                  className="w-full h-full object-cover absolute inset-0" 
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. BFS Factsheet Section (Screenshot 3 Part A: Statistics) */}
      <section id="factsheet" className="py-16 px-6 md:px-12 lg:px-24 border-b border-gray-150 bg-slate-50">
        <div className="max-w-5xl mx-auto space-y-12 text-left">
          <span className="text-xoriant-green text-xs uppercase tracking-widest font-black block">
            Facts for BFS
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-black tracking-tight leading-tight">
            Numbers share our Expertise in the Banking space
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
            {/* Stat 1 */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center shrink-0">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-xoriant-green fill-none stroke-current stroke-2" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                </svg>
              </div>
              <div className="space-y-1">
                <span className="text-3xl font-black text-slate-900 block leading-none">22+ Years</span>
                <p className="text-slate-500 text-xs font-semibold">of banking and financial sector expertise</p>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center shrink-0">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-xoriant-green fill-none stroke-current stroke-2" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9s2.015-9 4.5-9m0 0a9.003 9.003 0 018.716 6.747M12 3a9.003 9.003 0 00-8.716 6.747M12 9h.008v.008H12V9zm0 3h.008v.008H12V12zm0 3h.008v.008H12V15z" />
                </svg>
              </div>
              <div className="space-y-1">
                <span className="text-3xl font-black text-slate-900 block leading-none">9 Of Top 10</span>
                <p className="text-slate-500 text-xs font-semibold">Global banks trust us as an engineering partner</p>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center shrink-0">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-xoriant-green fill-none stroke-current stroke-2" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6L9 12.75l4.286-4.286L21.75 15M2.25 6h4.5M21.75 15V10.5m0 4.5h-4.5" />
                </svg>
              </div>
              <div className="space-y-1">
                <span className="text-3xl font-black text-slate-900 block leading-none">Upto 95%</span>
                <p className="text-slate-500 text-xs font-semibold">Reduction in OFAC compliance errors</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Those We Serve Section (Screenshot 3 Part B: Capability Grids) */}
      <section id="those-we-serve" className="py-16 md:py-24 px-6 md:px-12 lg:px-24 border-b border-gray-150 bg-white">
        <div className="max-w-6xl mx-auto space-y-12 text-left">
          <div>
            <span className="text-xoriant-green text-xs uppercase tracking-widest font-black block">
              Those We Serve
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-black tracking-tight leading-tight">
              Engineering Banking Software Solutions for everyone
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto pt-4">
            {serveAreas.map((area, idx) => (
              <div 
                key={idx}
                className="bg-white border border-slate-150 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between text-left min-h-[300px]"
              >
                <div className="w-full h-40 overflow-hidden bg-slate-100">
                  <img 
                    src={area.image} 
                    alt={area.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="text-slate-900 font-extrabold text-sm leading-snug">
                      {area.title}
                    </h3>
                    <p className="text-slate-500 text-[11px] leading-relaxed font-semibold">
                      {area.desc}
                    </p>
                  </div>
                  <a 
                    href="#dream-details" 
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

      {/* 6. BFS Accelerators Section (Screenshot 4 Part A: Cards) */}
      <section id="accelerators" className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-slate-50 border-b border-gray-150 relative">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-left space-y-3">
            <span className="text-xoriant-green text-xs uppercase tracking-widest font-black block">
              Accelerators
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-black tracking-tight leading-tight">
              Technical Edge Driving Digital Financial Services
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
                  <a 
                    href="#dream-details" 
                    className="text-[11px] font-bold uppercase tracking-wider hover:underline flex items-center gap-1 mt-4"
                  >
                    Know More <span className="text-[9px]">▶</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Matrix decoration on the right */}
        <div className="hidden xl:block absolute -right-4 top-1/2 transform -translate-y-1/2">
          <svg className="w-12 h-20 text-slate-200 fill-current opacity-70" viewBox="0 0 50 100">
            {Array.from({ length: 7 }).map((_, r) => 
              Array.from({ length: 3 }).map((_, c) => (
                <circle key={`${r}-${c}`} cx={10 + c * 14} cy={10 + r * 14} r="2" />
              ))
            )}
          </svg>
        </div>
      </section>

      {/* 7. Success Stories Section (Screenshot 4 Part B: Banking active default) */}
      <section id="success-stories" className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-150 relative">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-left space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-black tracking-tight leading-tight font-sans">
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
              {activeStoryIdx === 1 ? (
                <img 
                  src="/security_success_banking.png" 
                  alt="Banking Corridor Security visual" 
                  className="w-full h-full object-cover absolute inset-0 opacity-95"
                />
              ) : (
                <img 
                  src="/financial_success_globe.png" 
                  alt="Success Globe Visualization" 
                  className="w-full h-full object-cover absolute inset-0 opacity-90"
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 8. Keeping You Updated Section (Screenshot 5: Resource Articles) */}
      <section id="updates" className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-slate-50 border-b border-gray-150">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-left space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-black tracking-tight leading-tight">
              Keeping You Updated
            </h2>
            <div className="flex space-x-6 text-sm font-bold border-b border-gray-100 pb-2 max-w-xs text-left justify-start">
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

          {/* Grid of Articles - 3 Cards in first row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto pt-4">
            {activeArticles.slice(0, 3).map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-slate-150 rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between hover:shadow-md transition-all duration-300 text-left min-h-[320px]"
              >
                <div className="w-full h-40 overflow-hidden bg-slate-100">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
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

          {/* Row 2 of Articles grid: showing 4th and 5th article */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto mt-6">
            {activeArticles.slice(3, 5).map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-slate-150 rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between hover:shadow-md transition-all duration-300 text-left min-h-[320px]"
              >
                <div className="w-full h-40 overflow-hidden bg-slate-100">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
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

      {/* 9. Global Contact Form & Locations Map Section */}
      <ContactAndLocations title="Get Started" />

    </div>
  );
}
