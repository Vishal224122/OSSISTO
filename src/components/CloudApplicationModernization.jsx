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
      title: "Cloud App Assessment & Planning",
      desc: "Thinking about modernizing your legacy apps? We'll assess your apps and craft a roadmap for a robust modernization strategy, and chart the course for cloud-native transformation."
    },
    {
      title: "Cloud Migration",
      desc: "Ready to make the move to the cloud? From lift-and-shift to re-hosting, we make the move without missing a beat. Our specialty is seamless migration powered by zero downtime."
    },
    {
      title: "Refactoring",
      desc: "Apps feeling a bit sluggish? It's time for a code rejuvenation. Our experts dive deep into your apps, fine-tuning them for peak efficiency, scalability, and innovation."
    },
    {
      title: "Containerization & Kubernetes",
      desc: "Package applications with their dependencies into isolated containers to run reliably across multi-cloud environments, managed by scalable Kubernetes orchestration."
    },
    {
      title: "DevSecOps Integration",
      desc: "Embed automated security scanning, policy compliance checks, and high-velocity continuous integration and deployment pipelines directly into your cloud delivery fabric."
    },
    {
      title: "Cloud-Native Re-Architecture",
      desc: "Deconstruct legacy monolithic applications into modern serverless functions and microservices, maximizing compute elasticity and reducing operational resource overheads."
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
      <section className="relative bg-slate-950 pt-28 md:pt-36 pb-16 md:pb-24 px-6 sm:px-12 lg:px-24 border-b border-slate-900 overflow-hidden min-h-[65vh] flex items-center">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/75 to-transparent z-0" />

        <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <span className="text-ossisto-blue text-xs md:text-sm font-extrabold uppercase tracking-widest block">
              Cloud Application Modernization
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] text-white max-w-xl tracking-tight">
              Modernize Your Cloud
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

          {/* Right Text Block matching the screenshot mockup exactly */}
          <div className="md:col-span-9 lg:col-span-8 space-y-5 text-left">
            <span className="text-ossisto-blue text-xs font-black uppercase tracking-wider block">
              Modernize, Optimize, Excel
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-black tracking-tight leading-tight max-w-2xl">
              Elevate Your Cloud: Transforming Legacy Apps for Tomorrow's Success.
            </h2>

            <div className="space-y-4 text-slate-500 text-sm leading-relaxed max-w-3xl font-medium">
              <p>
                Your cloud's creaking under the weight of yesterday's tech and tomorrow's expectations. It's like running a relay race with your legs tied. You're stuck in a loop of "keep it running" when what you really need is to "kick it up a notch".
              </p>
              <p>
                You're battling aging code, wrestling with scalability, and there's that ever-looming shadow of downtime that haunts your every move.
              </p>
              <p>
                But between us, those legacy apps aren't getting any younger. With Ossisto, it's not about band-aiding; it's about future-proofing. We don't just lift and shift; we innovate and engineer.
              </p>
              <p>
                We transform each application, employing strategies from rehosting to refactoring, ensuring that your cloud infrastructure is not just updated, but uniquely optimized for a future where it doesn't just function, it excels.
              </p>
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
              Revolutionize Your Cloud Applications: Re-imagining Legacy Solutions
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
      <section id="differentiators" className="py-16 md:py-24 px-6 md:px-12 lg:px-24 border-b border-gray-150 bg-white">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-2">
            <span className="text-ossisto-blue text-xs uppercase tracking-widest font-black block">
              Our Key Differentiators
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-black tracking-tight leading-tight">
              Our Edge in Cloud Application Modernization
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto pt-4">
            {differentiators.map((item, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-150 rounded-2xl p-6 text-left flex flex-col justify-between hover:shadow-md transition-shadow duration-300 min-h-[240px]">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h3 className="font-black text-slate-900 text-[16px] leading-snug">{item.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed font-medium">{item.desc}</p>
                </div>
              </div>
            ))}
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
                <span className="text-ossisto-blue text-xs font-bold tracking-widest uppercase block mb-3">
                  Featured Insight
                </span>
                <h3 className="text-black text-xl md:text-2xl font-black leading-snug mb-4 max-w-md">
                  Cloud Spending Soars: Are You Ready?
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed font-medium max-w-md">
                  Discover why global cloud services spending is expected to reach a staggering 1.3 trillion dollars by 2026. Learn how the cloud is redefining IT landscapes and driving innovation.
                </p>
              </div>
              <div className="space-y-4 pt-4">
                <a
                  href="#keeping-updated"
                  className="inline-flex items-center gap-1 text-xs font-extrabold text-black hover:text-ossisto-blue transition-colors uppercase tracking-widest"
                >
                  Let's Find Out <span className="text-[10px]">▶</span>
                </a>
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

      {/* 7. How We Deliver (Playbook Section) */}
      <section id="delivery" className="py-12 md:py-20 px-6 md:px-12 lg:px-24 border-b border-gray-150 bg-white">
        <div className="max-w-5xl mx-auto space-y-10">
          {/* Header */}
          <div className="text-left space-y-2">
            <span className="text-ossisto-blue text-xs uppercase tracking-widest font-black block">
              How We Deliver
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-black tracking-tight leading-tight">
              Our Cloud-Native Application Modernization Playbook
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

      {/* 8. Accelerators In House (Management Frameworks) */}
      <section id="accelerators" className="py-16 md:py-20 px-6 md:px-12 lg:px-24 bg-slate-50 border-b border-gray-150">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Frameworks cards */}
          <div className="text-left space-y-3">
            <span className="text-ossisto-blue text-xs uppercase tracking-widest font-black block">
              Accelerators In House
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-black tracking-tight leading-tight">
              Our Cloud Application Management Frameworks
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
              {frameworks.map((fw, idx) => (
                <div
                  key={idx}
                  className={`${fw.bg} text-white p-6 rounded-2xl shadow-sm flex flex-col justify-between min-h-[220px] hover:scale-[1.02] transition-transform duration-300 text-left`}
                >
                  <div className="space-y-4">
                    <h3 className="text-lg font-black leading-snug">{fw.name}</h3>
                    <p className="text-[11px] font-semibold leading-relaxed opacity-90">
                      {fw.desc}
                    </p>
                  </div>
                  {fw.link && (
                    <a
                      href={fw.link}
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

      {/* 9. Our Collaborators (Moved just above Success Stories) */}
      <section className="py-12 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-150">
        <div className="max-w-4xl mx-auto text-left space-y-4">
          <span className="text-ossisto-blue text-xs uppercase tracking-widest font-black block">
            Our Collaborators
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-black tracking-tight leading-tight">
            Partners in Cloud Operations & Data Center Services
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

          {/* Infinite Horizontal Logo Marquee */}
          <div className="relative flex overflow-hidden w-full bg-[#f8fafc] py-5 rounded-xl border border-slate-100 mt-4 select-none">
            <div className="flex gap-12 shrink-0 items-center animate-marquee-slow">
              {[...partners, ...partners, ...partners].map((p, idx) => (
                <div key={idx} className="h-8 flex items-center justify-center shrink-0 px-2">
                  {p.type === "custom" ? (
                    p.render()
                  ) : (
                    <img
                      src={p.src}
                      alt={p.name}
                      className="h-full object-contain filter opacity-85 hover:opacity-100 transition-opacity duration-300 max-w-[120px]"
                    />
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

      {/* 10. Our Success Stories (Carousel Selector - Width Reduced by 20%) */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-slate-50 border-b border-gray-150">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-left space-y-2">
            <span className="text-ossisto-blue text-xs uppercase tracking-widest font-black block">
              Our Success Stories
            </span>
          </div>

          {/* Carousel Body */}
          <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-xl border border-slate-100 flex flex-col md:flex-row bg-white min-h-[300px] text-left">
            {/* Left column (reduced by 10% to 50%) */}
            <div className="w-full md:w-1/2 p-8 lg:p-10 flex flex-col justify-between">
              <div className="space-y-4">
                <h3 className="text-black text-xl md:text-2xl font-black leading-snug">
                  {successStories[activeStoryIdx].title}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed font-medium">
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

            {/* Right column (increased by 10% to 50%) */}
            <div className="w-full md:w-1/2 relative min-h-[220px] md:min-h-auto">
              <img
                src="/financial_success_globe.png"
                alt="Success Globe"
                className="w-full h-full object-cover absolute inset-0"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 11. Keeping You Updated (Width Reduced by 20%) */}
      <section id="updates" className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-150">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-left space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-black tracking-tight leading-tight">
              Keeping You Updated
            </h2>
            <div className="flex space-x-6 text-sm font-bold border-b border-gray-150 pb-2 max-w-xs text-left justify-start">
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

          {/* Cards list matching the mockup layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto pt-4">
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
                    {item.category && (
                      <span className="text-ossisto-blue text-[10px] font-bold uppercase tracking-wider block">
                        {item.category}
                      </span>
                    )}
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

      {/* 12. Questions frequently asked (FAQ Section) */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-150">
        <div className="max-w-3xl mx-auto text-left">

          <h2 className="text-2xl md:text-3xl font-black text-black tracking-tight mb-4">
            Cloud Modernization - Questions frequently asked
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

      {/* 13. Contact & Locations Section */}
      <ContactAndLocations title="Move to Cloud or Make the most of Existing Cloud Setup for the Next- phase-of-growth." />

    </div>
  );
}
