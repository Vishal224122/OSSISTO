import React, { useState, useEffect } from 'react';
import { Cpu, Layers, Shield, Zap, Monitor, Settings, RefreshCw, Sparkles, Code, Plus, Minus } from 'lucide-react';
import ContactAndLocations from './ContactAndLocations';

export default function CloudApplicationModernization() {
  const [activeTab, setActiveTab] = useState('intro');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [activeResourceTab, setActiveResourceTab] = useState('thought');
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [activeStoryIdx, setActiveStoryIdx] = useState(1); // 1 corresponds to "Modernizing Financial Systems" as active in screenshot

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
      title: "Data Landscape Mapping",
      desc: "We map the data landscape first - source systems, ownership, refresh cycles and the reports built on exports nobody maintains - and anchor the first build to one decision that is currently poorly served."
    },
    {
      title: "Ingestion Pipeline Engineering",
      desc: "We build ingestion pipelines from your enterprise, manufacturing, commercial and machine data sources into a governed layer, working on your existing cloud environment and licences rather than proposing a new stack."
    },
    {
      title: "Master Data Alignment",
      desc: "We align master data across product, part, plant, customer and asset hierarchies, then define a semantic layer so every report calculates business terms identically."
    },
    {
      title: "Manufacturing Data Design",
      desc: "We design for manufacturing realities such as time-series machine volume, batch genealogy and unit-of-measure conversion, with automated quality tests and exception reporting owned by named people."
    },
    {
      title: "Historical Data Cleansing",
      desc: "We migrate and cleanse historical data from legacy systems and spreadsheets, applying access controls and lineage documentation aligned to your privacy and customer confidentiality obligations."
    },
    {
      title: "Global Quality Delivery",
      desc: "Every pipeline ships with tests, runbooks and a data dictionary, delivered offshore from India or onsite in Europe and the US where data residency or source-system knowledge requires local presence."
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

  const frameworks = [
    {
      name: "Security as Code (SaC)",
      bg: "bg-[#1e40af]", // blue
      desc: "Automating the configuration of required security policies for a more secure and resilient infrastructure."
    },
    {
      name: "Observability as a Services",
      bg: "bg-[#065f46]", // green
      desc: "Optimize your cloud migration with real-time insights and proactive issue resolution for a trouble-free experience."
    },
    {
      name: "CloudIO",
      bg: "bg-[#0369a1]", // sky blue
      desc: "Enabling real-time visualization with Low-code/No-code.",
      link: "#dream-details"
    },
    {
      name: "Infrastructure as Code (IaC)",
      bg: "bg-[#0f172a]", // dark navy
      desc: "Optimize your cloud migration with IaC. Ensure consistency and cost reduction by declaring assets, services, and controls precisely."
    }
  ];

  const partners = [
    {
      name: "AWS",
      src: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
    },
    {
      name: "Google Cloud",
      src: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg"
    },
    {
      name: "Microsoft Solutions Partner",
      src: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg"
    },
    {
      name: "Salesforce",
      src: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg"
    },
    {
      name: "Matilda Cloud",
      type: "custom",
      render: () => (
        <div className="flex items-center gap-1.5 text-slate-800 shrink-0 select-none">
          <svg viewBox="0 0 24 24" className="w-5.5 h-5.5 text-blue-600 fill-current" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 18V6c0-1.1.9-2 2-2h2.5c1.1 0 2 .9 2 2v12h-2V6H5v12H3zm8 0V6c0-1.1.9-2 2-2h2.5c1.1 0 2 .9 2 2v12h-2V6h-2.5v12h-2z" />
          </svg>
          <div className="flex flex-col leading-none font-sans text-left">
            <span className="text-[12px] font-black tracking-tight text-slate-900">matilda</span>
            <span className="text-[9px] font-medium text-slate-500">cloud</span>
          </div>
        </div>
      )
    }
  ];

  const successStories = [
    {
      title: "Smarter Procurement Platform for a Global Software Leader",
      desc: "Discover how Ossisto enabled a global software leader transform its procurement experience with a smart, web-based platform—enabling seamless supplier management, sourcing, and compliance."
    },
    {
      title: "Modernizing Financial Systems for a Global Bank",
      desc: "Ahead of Bulgaria's legally mandated Euro (EUR) adoption on 1 January 2026, a leading global bank faced a non-negotiable regulatory deadline requiring currency conversion."
    },
    {
      title: "How a Global Bank Achieved 60% Faster Deployments",
      desc: "Ossisto empowered the bank to achieve agile, error-free releases by engineering a scalable RelOps automation framework."
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
      title: "The Salesforce-Linked Breach Wake-Up Call: Why Configuration and Access...",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop",
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
      q: "Which applications are best suited for modernization?",
      a: "Applications that are critical to business operations, experience high scaling volatility, suffer from performance bottlenecks, or incur heavy maintenance costs are ideal candidates. Monolithic systems that block developer velocity are prime candidates for microservices refactoring."
    },
    {
      q: "What are the key approaches to modernization?",
      a: "The industry standard options include: Rehosting (Lift-and-shift to cloud VM), Re-platforming (Moving to managed database/runtime services without code changes), Refactoring (Re-architecting code for cloud-native frameworks like Kubernetes/Serverless), Repurposing, Retiring, and Retaining."
    },
    {
      q: "How much does application modernization cost?",
      a: "Costs vary depending on application complexity, size, code quality, and target cloud state. While refactoring requires upfront engineering investments, it pays off rapidly by eliminating legacy software licensing and reducing runtime hosting costs by up to 40%."
    },
    {
      q: "Which industries benefit the most from cloud application modernization?",
      a: "Highly regulated and transaction-heavy industries like Financial Services, Healthcare, Retail/E-commerce, Logistics, and High-Tech SaaS platforms gain the most significant improvements in performance, security compliance, and market release speeds."
    },
    {
      q: "What are the different cloud application modernization strategies?",
      a: "Strategies are mapped via the 6 R's framework: Repurpose, Rehost, Re-platform, Refactor, Retire, and Retain. Choosing the correct strategy balances time-to-market constraints against long-term architectural benefits."
    },
    {
      q: "How long does app modernization take?",
      a: "Simple rehosting or re-platforming projects can take as little as 4 to 8 weeks. Comprehensive re-architecting and code refactoring for complex legacy enterprise monoliths typically range from 3 to 9 months, structured in agile releases."
    },
    {
      q: "What happens if you don't modernize apps?",
      a: "Failing to modernize leads to technical debt, mounting maintenance costs, critical security vulnerabilities, vendor lock-in on obsolete operating systems, and an inability to integrate modern features like AI/ML automation."
    },
    {
      q: "How do you modernize apps without disrupting operations?",
      a: "By employing blue-green deployments, canary rollouts, and the strangler fig pattern—where monolithic services are incrementally replaced by microservices behind an API gateway—ensuring continuous system availability."
    },
    {
      q: "What's the difference between modernizing a web app and a mobile app?",
      a: "Web app modernization focuses on breaking backend systems into elastic APIs and containers, whereas mobile app modernization focuses on optimizing network payloads, integrating secure edge authentication, and transitioning to cross-platform codebases."
    },
    {
      q: "How do you modernize apps for AI? Why does architecture matter?",
      a: "Modernizing for AI involves exposing backend application interfaces as secure REST/gRPC endpoints, constructing real-time data pipelines (like event-driven Kafka), and setting up vector databases, which requires a scalable microservices foundation."
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
      <section className="relative bg-slate-950 pt-20 md:pt-28 pb-12 md:pb-16 px-6 sm:px-12 lg:px-24 border-b border-slate-900 overflow-hidden min-h-[52vh] flex items-center">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/75 to-transparent z-0" />

        <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <span className="text-ossisto-blue text-xs md:text-sm font-extrabold uppercase tracking-widest block">
              DATA ENGINEERING & INTEGRATION
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] text-white max-w-xl tracking-tight">
              FIX The Data Foundation
            </h1>
            <button className="bg-[#236CB1] hover:bg-[#1A5185] text-white text-xs font-black uppercase py-4 px-8 rounded flex items-center gap-1.5 w-fit mt-8 transition-all tracking-widest shadow-md shadow-ossisto-blue/10 hover:scale-105 active:scale-95 duration-200">
              LET'S CONNECT <span className="text-[10px]">▶</span>
            </button>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-xs">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-ossisto-blue to-transparent opacity-20 blur-xl" />
              <img
                src="/cloud_modernization_hero.png"
                alt="Cloud Modernization Hover Model"
                className="relative w-full h-auto object-contain max-h-[245px] lg:max-h-[315px] filter drop-shadow-2xl rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Sub-Navbar Tab Menu Wrapper (Anchor-Relative Docking) */}
      <div id="subnav-anchor" className="w-full h-[56px] relative z-30">
        <div className={`bg-white border-b border-gray-200 shadow-sm transition-all duration-150 ${isSticky
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
      <section id="intro" className="py-16 md:py-24 px-6 md:px-12 lg:px-24 border-b border-gray-150 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Right Text Block matching the screenshot mockup exactly */}
          <div className="md:col-span-12 lg:col-span-12 space-y-5 text-center">
            <span className="text-ossisto-blue text-xs font-black uppercase tracking-wider block">
              DATA FOUNDATION
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-black tracking-tight leading-tight max-w-2xl mx-auto">
              Pipelines,models and governance
            </h2>
            <div className="space-y-4 text-slate-500 text-sm leading-relaxed max-w-3xl font-medium mx-auto">
              <p>
                Analytics and AI depend on reliable data. Ossisto helps organizations unify scattered information across ERP, MES, CRM, plant historians and machine systems into a governed, queryable data layer.
              </p>
              <p>
                We begin by mapping data sources, master records, duplicate identities and inconsistent business definitions. We then build connectors, staging layers, governed pipelines, conformed dimensions and semantic models that create a consistent view of products, plants, customers and assets.
              </p>
              <p>
                For manufacturing environments, we also address time-series machine data, batch genealogy, production context and unit-of-measure conversions. We work with existing platforms wherever practical and deliver documented, testable pipelines that internal teams can maintain and extend.
              </p>
            </div>
          </div>
        </div>
      </section>





      {/* 6. Featured Insight */}
      <section id="insights" className="py-16 md:py-24 px-6 md:px-12 lg:px-24 border-b border-gray-150 bg-slate-50">
        <div className="max-w-7xl mx-auto">

          <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-xl border border-slate-150 flex flex-col md:flex-row bg-white min-h-[280px]">
            {/* Left Content */}
            <div className="w-full md:w-3/5 p-8 lg:p-10 flex flex-col justify-between text-left">
              <div>

                <h3 className="text-black text-xl md:text-2xl font-black leading-snug mb-4 max-w-md">
                  Importance of data foundation
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed font-medium max-w-md">
                  Data integration is the tax every digital initiative pays, and paying it repeatedly is what makes transformation programmes expensive. When each new dashboard, planning tool or AI model requires its own extract, the cost of the tenth use case is as high as the first. A governed data layer inverts that, because the marginal cost of each new question falls once the joins, definitions and quality rules already exist. There are direct operational effects too. Reconciled master data reduces incorrect BOMs, duplicate part numbers and inventory discrepancies. Consistent definitions end the meetings spent debating whose number is right. And machine learning is largely a data-quality exercise in practice, since models trained on inconsistent, poorly labelled manufacturing data fail quietly and then get blamed on the algorithm.
                </p>
              </div>

            </div>

            {/* Right Graphic Banner */}
            <div className="w-full md:w-2/5 relative overflow-hidden min-h-[240px] md:min-h-auto">
              <img
                src="/cloud_spending_dashboard.png"
                alt="Cloud Spending Analysis"
                className="w-full h-full object-cover absolute inset-0"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 4. Our Capabilities */}
      <section id="capabilities" className="py-16 md:py-24 px-6 md:px-12 lg:px-24 border-b border-gray-150 bg-slate-50">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-2">
            <span className="text-ossisto-blue text-xs uppercase tracking-widest font-black block">
              Our Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-black tracking-tight max-w-2xl mx-auto leading-tight">
              <span className="text-[#236CB1]">Ossisto</span> delivery strategy
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto pt-4">
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
      <section id="delivery" className="py-12 md:py-20 px-6 md:px-12 lg:px-24 border-b border-gray-150 bg-white">
        <div className="max-w-5xl mx-auto space-y-10">
          {/* Header */}
          <div className="text-left space-y-2">
            <span className="text-ossisto-blue text-xs uppercase tracking-widest font-black block">
              OUR STRENGTHS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-black tracking-tight leading-tight">
              Our AI & Data Playbook
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4">
            {/* Left Column Playbook Image */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm overflow-hidden rounded-3xl shadow-lg border border-slate-100 max-h-[380px]">
                <img
                  src="/modernization_playbook.png"
                  alt="Modernization Playbook"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Column Playbook Steps */}
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
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-slate-50 border-b border-gray-150">
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
