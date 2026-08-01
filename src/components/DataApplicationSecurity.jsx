import React, { useState, useEffect } from 'react';
import { Cpu, Layers, Shield, Zap, Monitor, Settings, RefreshCw, Sparkles, Code, Plus, Minus, Lock, CheckCircle, ArrowRight } from 'lucide-react';
import ContactAndLocations from './ContactAndLocations';

export default function DataApplicationSecurity() {
  const [activeTab, setActiveTab] = useState('digital-armor');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [activeStoryIdx, setActiveStoryIdx] = useState(1); // 1 corresponds to "Fortifying the Banking Frontlines" as active (2nd dot) in screenshot
  const [activeResourceTab, setActiveResourceTab] = useState('thought');
  const [expandedFaq, setExpandedFaq] = useState(null);

  const tabs = [
    { id: 'digital-armor', name: 'Your Digital Armor' },
    { id: 'capabilities', name: 'Our Capabilities' },
    { id: 'differentiators', name: 'Our Key Differentiators' },
    { id: 'insight', name: 'Featured Insight' },
    { id: 'delivery', name: 'How We Deliver' },
    { id: 'collaborators', name: 'Collaborators' },
    { id: 'updates', name: 'Keeping You Updated' },
    { id: 'faq', name: 'FAQs' }
  ];

  const capabilities = [
    {
      title: "Adversarial Engineering (Red Teaming)",
      desc: "We simulate real-world attacks using Red Teams and adversarial AI. We stress-test applications, APIs, and data flows to expose logic flaws, privilege abuse, and attack paths before production release."
    },
    {
      title: "Gamified Security Innovation (Hackathons)",
      desc: "We run security hackathons that challenge teams to break and fix their own systems. This hands-on approach embeds secure coding, threat awareness, and shared ownership into engineering culture."
    },
    {
      title: "Intelligent Data Loss Prevention (DLP)",
      desc: "We deploy context-aware data loss prevention solutions using classification, behavioral analytics, and policy enforcement to block unauthorized data exfiltration without disrupting business workflows."
    },
    {
      title: "AI-Driven DevSecOps",
      desc: "We automate security gates across pipelines using AI-driven scans, secret detection, and policy checks. Secure DevOps / DevSecOps becomes continuous, invisible, and aligned to delivery velocity."
    },
    {
      title: "Predictive Threat Modeling",
      desc: "We apply predictive modeling to analyze architectures, APIs, and data paths. We identify attack vectors early and help teams design inherent resilience into applications and platforms."
    },
    {
      title: "Automated VAPT (Penetration Testing)",
      desc: "We combine automated VAPT with expert testing to simulate continuous attacks. Vulnerabilities are identified in real time, prioritized intelligently, and fed directly into remediation workflows."
    },
    {
      title: "Cognitive Code Analysis (SAST/DAST)",
      desc: "We analyze code continuously during coding and execution to locate security vulnerabilities like injection attacks and cross-site scripting."
    },
    {
      title: "Secure Software Supply Chain",
      desc: "We trace and audit all dependencies, open source libraries, and build components to ensure no compromised packages enter development."
    }
  ];

  const differentiators = [
    {
      title: "Shift-Left Velocity",
      desc: "We embed AI-powered scanners into CI/CD pipelines, enabling continuous application security testing during development. Teams fix issues early, slash remediation costs, and release secure code faster.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-ossisto-blue fill-none stroke-current stroke-2" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Data-Centric Protection",
      desc: "We secure data at rest, in motion, and in use using dynamic masking, encryption & key management, and database activity monitoring, ensuring protection even within AI models and analytics workflows.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-ossisto-blue fill-none stroke-current stroke-2" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.746 3.746 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
        </svg>
      )
    },
    {
      title: "Self-Healing Resilience",
      desc: "We use AI-driven monitoring to detect anomalies and trigger automated isolation and recovery. Threats are neutralized in real time, reducing dwell time and strengthening operational resilience 24/7.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-ossisto-blue fill-none stroke-current stroke-2" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      )
    }
  ];

  const deliverySteps = [
    {
      title: "Proactive Monitoring and Support",
      desc: "Palo Alto Network and Cisco Systems offer proactive monitoring and support that's like having a friend watch over your security, ready to act at a moment's notice."
    },
    {
      title: "Compliance and Standards Adherence",
      desc: "Navigating the complex world of compliance can be daunting. Symantec Corporation and IBM Security not only help you adhere to regulations but also make it feel like a breeze."
    },
    {
      title: "Advanced Technology",
      desc: "When it comes to security, staying ahead is everything. Palo Alto Networks and IBM Security is a full toolkit at your disposal, ready to tackle any security challenge."
    },
    {
      title: "Comprehensive Solution Suite",
      desc: "Imagine having the best of both worlds. With Symantec Corporation and Cisco Systems, Inc., you get a comprehensive solution suite that covers every security aspect."
    }
  ];

  const partners = [
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
        <div className="flex items-center gap-1.5 text-[#ff3624] font-black text-lg select-none">
          <span className="w-4 h-4 bg-[#ff3624] transform rotate-45 flex items-center justify-center shrink-0"></span>
          databricks
        </div>
      )
    },
    {
      name: "AWS Partner Network",
      type: "custom",
      render: () => (
        <div className="flex flex-col items-start leading-none select-none shrink-0">
          <span className="text-[12px] font-black text-slate-800">aws</span>
          <span className="text-[7px] tracking-wider uppercase font-bold text-slate-500 mt-0.5">partner</span>
          <span className="text-[7px] tracking-wider uppercase font-bold text-slate-500">network</span>
        </div>
      )
    },
    {
      name: "Google Cloud Partner",
      type: "custom",
      render: () => (
        <div className="flex items-center gap-1 shrink-0 select-none">
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg" className="h-5 object-contain" alt="GCP" />
          <div className="flex flex-col leading-none font-sans text-left">
            <span className="text-[9px] font-black text-slate-700">Google Cloud</span>
            <span className="text-[9px] font-semibold text-slate-500">Partner</span>
          </div>
        </div>
      )
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
      title: "Why AI Is Transforming Software Testing",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600&auto=format&fit=crop",
      href: "#keeping-updated"
    },
    {
      category: "Article",
      title: "Multi-Agentic RAG: AI Brain Powering Supply Chain Decisions",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop",
      href: "#keeping-updated"
    },
    {
      category: "Article",
      title: "Strengthening Salesforce Performance and Scalability",
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

  const faqs = [
    {
      q: "How can I detect security risks in my applications?",
      a: "Implementing automated static and dynamic analysis tools (SAST/DAST) in your CI/CD pipeline enables early vulnerability detection. Conducting regular red-teaming simulations, dependency scans, and automated VAPT (Vulnerability Assessment and Penetration Testing) can expose logic flaws and architectural paths that automated tools might miss."
    },
    {
      q: "What's the impact of enabling Application Security?",
      a: "Enabling application security minimizes the risk of data breaches, prevents downtime from security incidents, and secures company reputation. It also speeds up developer velocity in the long run by embedding automated policies, preventing expensive late-stage hotfixes and codebase refactoring."
    },
    {
      q: "Why a Data-Centric Security Strategy Matters ?",
      a: "Traditional perimeter defense cannot protect workloads when data flows across APIs and AI models. A data-centric strategy protects the data itself using dynamic masking, field-level encryption, and continuous monitoring, ensuring security even if network walls are compromised."
    },
    {
      q: "What is the cost difference between \"Perimeter Security\" and \"Data-Centric Security\"?",
      a: "Perimeter security requires heavy initial capital for firewalls and gateways but can be bypassed. Data-centric security utilizes scalable cloud keys and automated policies, resulting in up to 40% lower operational overhead while preventing costly regulatory non-compliance penalties."
    },
    {
      q: "What is security testing in software testing?",
      a: "Security testing validates that an application's design, code implementation, and network configuration prevent unauthorized data access or functional privilege abuse, covering vulnerability scans, authorization validation, and supply-chain auditing."
    },
    {
      q: "How do vulnerability management tools work?",
      a: "Vulnerability management tools automatically scan software libraries and configurations against global CVE databases, prioritize vulnerabilities based on risk scores, and route them to developers with automated code patch recommendations."
    },
    {
      q: "What are the types of application security testing?",
      a: "Key application security testing includes Static Application Security Testing (SAST), Dynamic Application Security Testing (DAST), Software Composition Analysis (SCA) for open-source libraries, and interactive pen-testing (VAPT)."
    },
    {
      q: "What are the security solutions for data centers?",
      a: "Data center security relies on Zero-Trust access controls, network micro-segmentation, real-time intrusion detection systems, database access firewalls, and hardware security modules (HSM) for cryptographic key storage."
    },
    {
      q: "Can application security solutions protect against Zero-Day vulnerabilities?",
      a: "Yes, by utilizing AI-driven runtime application self-protection (RASP) and behavior monitoring, systems can automatically isolate anomalous compute calls, neutralizing Zero-Day exploits before a signature-based patch is released."
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
              Data and Application Security
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] text-white max-w-xl tracking-tight uppercase">
              Secure by Design, Protected by Intelligence
            </h1>
            <button className="bg-[#236CB1] hover:bg-[#236CB1] text-white text-[11px] sm:text-xs font-black uppercase py-2.5 px-5 sm:py-4 sm:px-8 rounded flex items-center gap-1.5 w-fit mt-8 transition-all tracking-widest shadow-md shadow-ossisto-blue/10 hover:scale-105 active:scale-95 duration-200">
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
                controls
                className="w-full h-full object-cover opacity-90"
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
                  className={`relative py-2 font-extrabold text-xs md:text-sm whitespace-nowrap transition-colors ${activeTab === tab.id ? 'text-black font-black' : 'text-slate-500 hover:text-black font-bold'
                    }`}
                >
                  {tab.name}
                  {activeTab === tab.id && (
                    <span className="absolute bottom-0 left-0 w-full h-[3px] bg-ossisto-blue rounded-full animate-fade-in" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 3. Your Digital Armor / Secure Your Applications and Data by Design (Screenshot 1 details) */}
      <section id="digital-armor" className="py-16 md:py-24 px-6 md:px-12 lg:px-24 border-b-0 lg:border-b border-gray-150 bg-white">
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
            <span className="text-ossisto-blue text-xs font-black uppercase tracking-wider block">
              Your Digital Armor
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-black tracking-tight leading-tight max-w-2xl font-sans">
              Secure Your Applications and Data by Design
            </h2>

            <div className="space-y-4 text-slate-500 text-sm leading-relaxed max-w-3xl font-medium">
              <p className="text-slate-900 font-extrabold text-xs tracking-tight">
                In a world of GenAI, APIs, and distributed cloud systems, the application perimeter no longer exists. Data flows through code, pipelines, and models at machine speed. Securing it after deployment is too late.
              </p>
              <p>
                Ossisto applies AI-led application security testing, enterprise data privacy controls, and secure DevOps / DevSecOps practices directly into the SDLC. We help enterprises prevent data exposure, protect sensitive workloads, and ensure applications are engineered secure from the first line of code to runtime, without slowing innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Our Capabilities Section (Screenshot 2: 8 cards grid) */}
      <section id="capabilities" className="py-16 md:py-24 px-6 md:px-12 lg:px-24 border-b-0 lg:border-b border-gray-150 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-2">
            <span className="text-ossisto-blue text-xs uppercase tracking-widest font-black block">
              Our Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-black tracking-tight max-w-3xl mx-auto leading-tight">
              Engineering the Fortress: Advanced App & Data Security
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-4 max-w-7xl mx-auto">
            {capabilities.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border-2 border-ossisto-blue rounded-2xl p-6 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between text-left min-h-[220px]"
              >
                <div className="space-y-4">
                  <h3 className="font-extrabold text-slate-900 text-[13px] leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-[11px] leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right decoration grid */}
        <div className="hidden xl:block absolute right-8 top-1/3">
          <svg className="w-12 h-20 text-slate-200 fill-current opacity-70" viewBox="0 0 50 100">
            {Array.from({ length: 7 }).map((_, r) =>
              Array.from({ length: 3 }).map((_, c) => (
                <circle key={`${r}-${c}`} cx={10 + c * 14} cy={10 + r * 14} r="2" />
              ))
            )}
          </svg>
        </div>
      </section>

      {/* 5. Key Differentiators Section (Screenshot 3 Part A) */}
      <section id="differentiators" className="py-16 md:py-24 px-6 md:px-12 lg:px-24 border-b-0 lg:border-b border-gray-150 bg-white">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-2">
            <span className="text-ossisto-blue text-xs uppercase tracking-widest font-black block">
              Our Key Differentiators
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-black tracking-tight leading-tight">
              The Ossisto Engineering Advantage
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto pt-4">
            {differentiators.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-150 rounded-2xl p-6 hover:shadow-md transition-shadow duration-300 flex flex-col justify-between text-left min-h-[240px]"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h3 className="font-black text-slate-900 text-[15px] leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-[11.5px] leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Featured Insight Section (Screenshot 3 Part B) */}
      <section id="insight" className="py-16 md:py-24 px-6 md:px-12 lg:px-24 border-b-0 lg:border-b border-gray-150 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-xl border border-slate-150 flex flex-col md:flex-row bg-white min-h-[280px]">
            {/* Left Content */}
            <div className="w-full md:w-3/5 p-8 lg:p-10 flex flex-col justify-between text-left">
              <div>
                <span className="text-ossisto-blue text-xs font-bold tracking-widest uppercase block mb-3">
                  Featured Insight
                </span>
                <h3 className="text-black text-xl md:text-2xl font-black leading-snug mb-4 max-w-md">
                  IDC Spotlight: Foundational Layers for Security Shifting Left and Shielding Right
                </h3>
              </div>
              <div className="pt-4">
                <a
                  href="#keeping-updated"
                  className="inline-flex items-center gap-1.5 text-xs font-extrabold text-black hover:text-ossisto-blue transition-colors uppercase tracking-widest"
                >
                  Let's Find Out <span className="text-[10px]">▶</span>
                </a>
              </div>
            </div>

            {/* Right Graphic Banner */}
            <div className="w-full md:w-2/5 relative overflow-hidden min-h-[240px] md:min-h-auto bg-slate-900">
              <img
                src="/security_insight.png"
                alt="Security Shield Spotlight Graphic"
                className="w-full h-full object-cover absolute inset-0 opacity-90"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 7. How We Deliver Section (Screenshot 4 Part A) */}
      <section id="delivery" className="py-16 md:py-24 px-6 md:px-12 lg:px-24 border-b-0 lg:border-b border-gray-150 bg-white relative">
        <div className="max-w-5xl mx-auto space-y-10">
          {/* Header */}
          <div className="text-left space-y-2">
            <span className="text-ossisto-blue text-xs uppercase tracking-widest font-black block">
              How We Deliver
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-black tracking-tight leading-tight">
              How Ossisto Safeguards Your Data and Applications
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4">
            {/* Left Column Image */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm overflow-hidden rounded-3xl shadow-lg border border-slate-100 min-h-[220px]">
                <img
                  src="/security_deliver.png"
                  alt="Security engineering dashboards"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Column Steps */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {deliverySteps.map((step, idx) => (
                <div key={idx} className="space-y-1 pl-4 border-l-2 border-slate-200 hover:border-ossisto-blue transition-all duration-300">
                  <h4 className="text-sm font-black text-slate-900">{step.title}</h4>
                  <p className="text-xs leading-relaxed text-slate-550 font-semibold">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. Our Collaborators Section (New Screenshot 1 Part A: Logo Slider) */}
      <section id="collaborators" className="py-16 px-6 md:px-12 lg:px-24 bg-slate-50 border-b-0 lg:border-b border-gray-150">
        <div className="max-w-5xl mx-auto text-left space-y-4">
          <span className="text-ossisto-blue text-xs uppercase tracking-widest font-black block">
            Our Collaborators
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-black tracking-tight leading-tight">
            We Co-create Secured Enterprises of Tomorrow
          </h2>

          {/* Infinite Horizontal Logo Marquee */}
          <div className="relative flex overflow-hidden w-full bg-white py-6 rounded-xl border border-slate-100 mt-4 select-none">
            <div className="flex gap-16 shrink-0 items-center animate-marquee">
              {[...partners, ...partners, ...partners, ...partners].map((p, idx) => (
                <div key={idx} className="h-8 flex items-center justify-center shrink-0 px-2 min-w-[110px]">
                  {p.type === "image" ? (
                    <img
                      src={p.src}
                      alt={p.name}
                      className="h-full object-contain filter opacity-80 hover:opacity-100 transition-opacity duration-300 max-w-[110px]"
                    />
                  ) : (
                    p.render()
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
      </section>

      {/* 9. Our Success Stories Section (New Screenshot 1 Part B: Banking active default) */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-white border-b-0 lg:border-b border-gray-150 relative">
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
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black border transition-all ${activeStoryIdx === idx
                        ? 'bg-ossisto-blue border-ossisto-blue text-white'
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

      {/* 10. Keeping You Updated Section (New Screenshot 2: Resource Articles) */}
      <section id="updates" className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-slate-50 border-b-0 lg:border-b border-gray-150">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-left space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-black tracking-tight leading-tight">
              Keeping You Updated
            </h2>
            <div className="flex space-x-6 text-sm font-bold border-b border-gray-100 pb-2 max-w-xs text-left justify-start">
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

          {/* Grid of Articles - 5 Cards exactly as in layout screenshot */}
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

      {/* 11. FAQAccordion Section (New Screenshot 3: 9 FAQ items) */}
      <section id="faq" className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-white border-none">
        <div className="max-w-3xl mx-auto text-left">
          <h2 className="text-xl md:text-2xl font-black text-black tracking-tight mb-4">
            Data and Application Security - Questions Frequently Asked
          </h2>
          <div className="w-full h-[1.5px] bg-ossisto-blue mb-8" />

          <div className="divide-y divide-gray-200">
            {faqs.map((faq, idx) => {
              const isOpen = expandedFaq === idx;
              return (
                <div key={idx} className="py-4">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full py-2 flex items-center justify-between text-left focus:outline-none group select-none"
                  >
                    <span className="text-[13px] font-black text-slate-900 group-hover:text-ossisto-blue transition-colors leading-snug pr-6">
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
                    className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[300px] mt-2 pb-4 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                      }`}
                  >
                    <p className="text-slate-600 text-xs leading-relaxed font-semibold pl-1 pr-12">
                      {faq.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 12. Global Contact Form */}
      <ContactAndLocations title="Get Started" />

    </div>
  );
}
