import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Search, Linkedin, Instagram, Facebook, Twitter, Youtube, ArrowRight } from 'lucide-react';

export default function Navbar({ onContactClick, onNavigate, currentView }) {
  const isScrolled = true;
  const [activeDropdown, setActiveDropdown] = useState(null);
  const timeoutRef = useRef(null);
  const enterTimeoutRef = useRef(null);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);
  const [activeSideSub, setActiveSideSub] = useState(null);
  const [activeTab, setActiveTab] = useState('DIGITAL');

  const handleMouseEnter = (index) => {
    if (menuItems[index]?.title === "CAREER") return;
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    if (enterTimeoutRef.current) {
      clearTimeout(enterTimeoutRef.current);
      enterTimeoutRef.current = null;
    }
    enterTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(index);
    }, 500); // 500ms hover open delay
  };

  const handleMouseLeave = () => {
    if (enterTimeoutRef.current) {
      clearTimeout(enterTimeoutRef.current);
      enterTimeoutRef.current = null;
    }
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150); // 150ms delay to bridge the transition gap
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (enterTimeoutRef.current) clearTimeout(enterTimeoutRef.current);
    };
  }, []);

  const menuItems = [
    {
      title: "INDUSTRY 4.0",
      headerTitle: "Industry 4.0 ",
      desc: "Bridge physical manufacturing assets with cognitive cloud frameworks to build connected, smart industrial spaces.",
      links: [
        { name: "MES services", href: "#dream-details" },
        { name: "Connected Factory (IIOT)", href: "#dream-details" },
        { name: "Connected Workforce", href: "#dream-details" },
        { name: "Manufacturing analytics & OEE", href: "#dream-details" },
        { name: "Predictive maintenance", href: "#dream-details" },
        { name: "Supply Chain Digitization", href: "#dream-details" }
      ],
      featured: {
        category: "Overview",
        title: "Smart Manufacturing Blueprint",
        desc: "A framework guide to digital twin and shopfloor automation.",
        image: "https://www.xoriant.com/cdn/ff/mdvIcgUZhbbMQczMvbsjbPz6X0qrifA-bXuSpv-nBi4/1735031350/public/Bodhi-Images/Banner%20Image.jpg"
      }
    },
    {
      title: "ENGINEERING SERVICES",
      headerTitle: "Engineering Services",
      desc: "Implement scalable and resilient database management architectures, modular resource planning systems, and customized support pipelines.",
      links: [
        { name: "Product Engineering Support", href: "#dream-details" },
        { name: "Embedded Software & Firmware", href: "#dream-details" },
        { name: "E/E Systems Engineering Support", href: "#dream-details" },
        { name: "Product Sustenance & Lifecycle Support", href: "#dream-details" },
        { name: "Testing and validation support", href: "#dream-details" },
        { name: "Engineering documentation & drafting support", href: "#dream-details" }
      ],
      featured: {
        category: "Case Study",
        title: "Accelerating Mortgage Processing with Document Automation",
        desc: "Reducing lifecycle overheads by 70% with intelligent processing.",
        image: "https://www.xoriant.com/cdn/ff/caTR1zNKWw-48WXXuCHM7xARmfsJvEbyLdj-0ccie_8/1771476514/public/styles/100/public/2026-02/Xoriant-Document-Automation-Platform-Development-for-Mortgage-ISV_100x50_2.jpg.webp?itok=G_aoqKyR"
      }
    },
    {
      title: "AI & DATA",
      headerTitle: "AI & Data Solutions",
      desc: `Governed Data foundations, trusted analytics, business intelligence, grounded Gen AI, intelligent automation, applied machine learning and machine vision.

Applied AI scoped by measurable payback and validated against the method you use today.`,
      links: [
        { name: "Data Engineering & integration", href: "#dream-details" },
        { name: "Analytics, BI and dashboards", href: "#dream-details" },
        { name: "Gen AI solutions", href: "#dream-details" },
        { name: "Intelligent Automation", href: "#dream-details" },
        { name: "Applied AI and Machine Learning", href: "#dream-details" },
        { name: "Computer & Machine Vision", href: "#dream-details" }
      ],
      featured: {
        category: "POV",
        title: "Gen AI: A Reality Check",
        desc: "Separating AI hype from real implementation blueprints.",
        image: "https://www.xoriant.com/cdn/ff/mWUn7udaliJWNZOZU5lSTqdazMIBoo7U9P54qTpL73o/1771476514/public/styles/100/public/2026-02/Webpage%20Banner-Desktop.jpg_100x50_2.jpg.webp?itok=hcBXFAEN"
      }
    },
    {
      title: "ENTERPRISE DIGITAL & IT",
      headerTitle: "Digital Engineering",
      desc: `The industrial world is changing at a pace that paper-based processes, disconnected systems, and on-premise-only thinking simply cannot match.

Ossisto Global brings together cloud infrastructure, digital twin technology, and industrial IoT to give asset-heavy and engineering-led businesses a single, connected view of their operations — in real time, at scale, from anywhere. We don't digitise for the sake of it. We build digital capability that makes your physical operations faster, smarter, and harder to disrupt.`,
      links: [
        { name: "Digital Transformation Consulting", href: "#dream-details" },
        { name: "SAP Consulting & Services", href: "#dream-details" },
        { name: "Application Development & Modernization", href: "#dream-details" },
        { name: "Cloud, DevOps & Infra", href: "#dream-details" },
        { name: "Enterprise integration", href: "#dream-details" },
        { name: "PLM Services", href: "#dream-details" },
        { name: "Quality engineering and test automation", href: "#dream-details" }
      ],
      featured: {
        category: "News",
        title: "Ossisto Acquires TestDevLab to Expand European Reach",
        desc: "Expanding presence in EU for AI-driven Quality Engineering.",
        image: "https://www.xoriant.com/cdn/ff/5hii6a26ufChGUjvX3c1n1H8r-6QIlwHLpZONHr00_Q/1771476515/public/styles/100/public/2026-02/Acquisition%20news%20%281%29.png_100x50_2.jpg.webp?itok=pf_clXkg"
      }
    },
    {
      title: "AUTOMOTIVE",
      headerTitle: "Automotive Co-Engineering",
      desc: "Delivering business success through tailored software engineering for next-generation software-defined vehicles.",
      links: [
        { name: "SDV Platform", href: "#dream-details" },
        { name: "Electric Powertrain", href: "#dream-details" },
        { name: "ADAS & Autonomy", href: "#dream-details" },
        { name: "Connected Vehicle", href: "#dream-details" },
        { name: "Infotainment", href: "#dream-details" },
        { name: "Diagnostics", href: "#dream-details" }
      ],
      featured: {
        category: "Domain Expertise",
        title: "Domain Accelerators & Solutions",
        desc: "Preset framework parameters tailored for ADAS and connected platforms.",
        image: "https://www.xoriant.com/cdn/ff/GtZ1Doo7yII823_hfAETiQaeuDlL0YFKW4GbC9hQ3tA/1781711862/public/styles/webp/public/2026-06/Home%20Page%20Banner%20Orian.png.webp?itok=_etsdsBM"
      }
    },
    {
      title: "PHARMA & FOOD",
      headerTitle: "Life Sciences, Pharma & Food",
      desc: "Leverage automated compliance frameworks, serialization systems, and laboratory digitization models to streamline auditing workflows.",
      links: [
        { name: "Pharma 4.0", href: "#dream-details" },
        { name: "Quality Intelligence", href: "#dream-details" },
        { name: "Regulatory & Compliance", href: "#dream-details" },
        { name: "Serialisation & Traceability", href: "#dream-details" },
        { name: "Lab Digitalisation", href: "#dream-details" },
        { name: "Pharmacovigilance", href: "#dream-details" }
      ],
      featured: {
        category: "Ecosystem",
        title: "Pharma 4.0 Readiness Assessment",
        desc: "Best practices for digitization across compliance-heavy biotech industries.",
        image: "https://www.xoriant.com/cdn/ff/mdvIcgUZhbbMQczMvbsjbPz6X0qrifA-bXuSpv-nBi4/1735031350/public/Bodhi-Images/Banner%20Image.jpg"
      }
    },

    {
      title: "CAREER",
      headerTitle: "Careers at Ossisto",
      desc: "Join our team of global co-creators, where every engineer builds technology that reshapes industries.",
      links: [
        { name: "Open roles", href: "#dream-details" },
        { name: "Graduate programme", href: "#dream-details" },
        { name: "Learning & development", href: "#dream-details" }
      ],
      featured: {
        category: "Careers",
        title: "Graduate and Professional Paths",
        desc: "Explore current opportunities, internship systems, and training plans.",
        image: "https://www.xoriant.com/cdn/ff/5hii6a26ufChGUjvX3c1n1H8r-6QIlwHLpZONHr00_Q/1771476515/public/styles/100/public/2026-02/Acquisition%20news%20%281%29.png_100x50_2.jpg.webp?itok=pf_clXkg"
      }
    },
    {
      title: "ABOUT US",
      headerTitle: "About Ossisto Group",
      desc: "Review our journey of engineering innovation and leadership in enterprise software delivery.",
      links: [
        { name: "About US", href: "#about-ossisto" },
        { name: "Leadership", href: "#about-ossisto" },
        { name: "Global presence", href: "#contact" }
      ],
      featured: {
        category: "Company",
        title: "Our Engineering Footprint",
        desc: "Over three decades of global delivery and customer satisfaction.",
        image: "https://www.xoriant.com/cdn/ff/mWUn7udaliJWNZOZU5lSTqdazMIBoo7U9P54qTpL73o/1771476514/public/styles/100/public/2026-02/Webpage%20Banner-Desktop.jpg_100x50_2.jpg.webp?itok=hcBXFAEN"
      }
    }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white border-b border-slate-200 shadow-sm">
      <div className="w-full px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">

          {/* Logo Section */}
          <div className="flex items-center space-x-6 flex-shrink-0">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('home');
              }}
              className="flex items-center space-x-3 group py-1.5"
            >
              <img
                src="/logoos.jpeg"
                alt="Ossisto Logo"
                className="h-8 sm:h-10 md:h-12 lg:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          </div>

          {/* Desktop Menu links */}
          <div className="hidden lg:flex items-center space-x-5 xl:space-x-8 ml-8 xl:ml-16">
            {menuItems.map((item, index) => {
              const isCareerDisabled = item.title === "CAREER";
              return (
                <div
                  key={index}
                  className="group"
                  onMouseEnter={() => !isCareerDisabled && handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    onClick={(e) => {
                      if (isCareerDisabled) {
                        e.preventDefault();
                        return;
                      }
                      if (item.title === 'ABOUT US') {
                        onNavigate('about-us');
                        setActiveDropdown(null);
                      } else {
                        setActiveTab(item.title);
                      }
                    }}
                    className={`relative flex items-center font-black text-[10.5px] xl:text-[11.5px] py-4 transition-colors whitespace-nowrap uppercase tracking-wider ${
                      isCareerDisabled
                        ? (isScrolled ? 'text-slate-900' : 'text-white') + ' cursor-default pointer-events-none select-none'
                        : isScrolled ? 'text-slate-900 hover:text-ossisto-blue' : 'text-white hover:text-ossisto-blue'
                    }`}
                  >
                    {item.title}
                    {!isCareerDisabled && (
                      <span className={`absolute bottom-0 left-0 w-full h-[3px] bg-ossisto-blue rounded-full transition-transform duration-300 origin-left ${
                        activeDropdown === index || (activeDropdown === null && ((currentView === 'about-us' && item.title === 'ABOUT US') || (currentView !== 'about-us' && activeTab === item.title)))
                          ? 'scale-x-100'
                          : 'scale-x-0 group-hover:scale-x-100'
                      }`} />
                    )}
                  </button>

                  {/* Mega Dropdown Drawer */}
                  {activeDropdown === index && !isCareerDisabled && (
                    <div
                      className="absolute left-0 right-0 top-full w-screen bg-white shadow-2xl animate-slide-down-menu z-50 overflow-hidden"
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="w-full px-4 sm:px-6 lg:px-8 grid grid-cols-12">

                         {/* Column 1: Narrative */}
                        <div className={`col-span-7 p-8 flex flex-col justify-center relative z-10 text-left transition-colors duration-300 border-b ${
                          (item.title === "AI & DATA" || item.title === "ABOUT US")
                            ? "bg-[#236CB1] text-white lg:py-12 lg:pl-36 lg:pr-12 [box-shadow:-100vw_0_0_100vw_#236CB1] border-[#236CB1]" 
                            : "bg-white text-black lg:p-12 border-slate-200"
                        }`}>
                          <h2 className={`text-2xl lg:text-3xl font-black tracking-tight mb-4 ${
                            (item.title === "AI & DATA" || item.title === "ABOUT US") ? "text-white" : "text-black"
                          }`}>
                            {item.headerTitle}
                          </h2>
                          <p className={`text-xs lg:text-sm leading-relaxed font-medium whitespace-pre-line ${
                            (item.title === "AI & DATA" || item.title === "ABOUT US") ? "text-slate-300 max-w-xl" : "text-gray-600 mb-6 max-w-md"
                          }`}>
                            {item.desc}
                          </p>
                        </div>

                        {/* Column 2: Sub-links Services List */}
                        <div className="col-span-5 bg-white p-8 lg:py-12 lg:pl-32 lg:pr-12 border-l border-b border-gray-100 flex flex-col justify-center relative z-10 text-left">
                          <ul className="space-y-4">
                            {item.links.map((link, idx) => {
                              const isEnabled = link.name === "Data Engineering & integration" || link.name === "About US";
                              return (
                                <li key={idx}>
                                  <a
                                    href={link.href}
                                    onClick={(e) => {
                                      e.preventDefault();
                                      if (!isEnabled) return;

                                      if (link.name === "Data Engineering & integration") {
                                        onNavigate('cloud-modernization');
                                        setActiveDropdown(null);
                                      } else if (link.name === "About US") {
                                        onNavigate('about-us');
                                        setActiveDropdown(null);
                                      }
                                    }}
                                    className={`text-xs lg:text-sm font-bold grid grid-cols-[280px_auto] items-center group/sublink transition-colors ${
                                      isEnabled
                                        ? "text-slate-800 hover:text-ossisto-blue cursor-pointer"
                                        : "text-slate-800 cursor-default pointer-events-none select-none"
                                    }`}
                                  >
                                    <span>{link.name}</span>
                                    <span className={`text-[9px] transition-colors ${
                                      isEnabled ? "text-slate-400 group-hover/sublink:text-ossisto-blue" : "text-slate-400 opacity-60"
                                    }`}>▶</span>
                                  </a>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right section: CONTACT button & Mobile Hamburger Toggle */}
          <div className="flex items-center gap-3 lg:-mr-4">

            {/* LET'S CONNECT Button */}
            <button
              onClick={onContactClick}
              className="bg-ossisto-blue text-white text-[11px] sm:text-xs font-bold px-3.5 sm:px-4.5 py-1.5 sm:py-2 rounded hover:bg-blue-700 transition-all tracking-wide shadow-sm hover:shadow flex items-center justify-center leading-none whitespace-nowrap active:scale-95"
            >
              <span>Let's Connect</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsSidePanelOpen(!isSidePanelOpen)}
              className="lg:hidden p-2 text-slate-800 hover:text-ossisto-blue transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isSidePanelOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isSidePanelOpen && (
        <div className="fixed inset-0 z-50 flex justify-end animate-fade-in">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            onClick={() => setIsSidePanelOpen(false)}
          />

          {/* Sidebar Drawer container */}
          <div className="relative w-80 sm:w-96 bg-white border-l border-slate-100 h-full flex flex-col justify-between p-6 shadow-2xl z-10 overflow-hidden">

            {/* Header */}
            <div className="flex-shrink-0 flex items-center justify-between pb-4">
              <img
                src="/logoos.jpeg"
                alt="Ossisto Logo"
                className="h-7 sm:h-8 object-contain"
              />
              <button
                onClick={() => setIsSidePanelOpen(false)}
                className="text-slate-500 hover:text-slate-900 p-2 rounded-full hover:bg-slate-100 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Menu Items List */}
            <div className="flex-1 overflow-y-auto py-6 space-y-3 pr-1">

              {/* Main Services Navigation Links */}
              {menuItems.map((item, idx) => {
                const isCareerDisabled = item.title === "CAREER";
                const isOpen = activeSideSub === idx;
                return (
                  <div key={idx} className="pb-2.5">
                    <button
                      onClick={() => !isCareerDisabled && setActiveSideSub(isOpen ? null : idx)}
                      className={`w-full flex items-center justify-between text-xs sm:text-sm font-extrabold text-left uppercase tracking-wider py-1 ${
                        isCareerDisabled
                          ? "text-slate-900 cursor-default pointer-events-none select-none"
                          : "text-slate-900 hover:text-ossisto-blue transition-colors"
                      }`}
                    >
                      <span>{item.title}</span>
                      {!isCareerDisabled && (
                        <span className="text-xs text-ossisto-blue font-mono font-bold">
                          {isOpen ? '−' : '+'}
                        </span>
                      )}
                    </button>

                    {/* Sub-links dropdown */}
                    {isOpen && !isCareerDisabled && (
                      <div className="mt-3 space-y-3 animate-fade-in">

                        {/* Narrative Header Box */}
                        <div className={`p-4 rounded-xl text-left transition-all ${
                          (item.title === "AI & DATA" || item.title === "ABOUT US")
                            ? "bg-[#236CB1] text-white shadow-md"
                            : "bg-slate-50 text-slate-900 border border-slate-100"
                        }`}>
                          <h4 className={`text-sm sm:text-base font-black tracking-tight mb-1.5 ${
                            (item.title === "AI & DATA" || item.title === "ABOUT US") ? "text-white" : "text-black"
                          }`}>
                            {item.headerTitle}
                          </h4>
                          <p className={`text-[11px] sm:text-xs leading-relaxed font-medium whitespace-pre-line ${
                            (item.title === "AI & DATA" || item.title === "ABOUT US") ? "text-slate-100" : "text-slate-600"
                          }`}>
                            {item.desc}
                          </p>
                        </div>

                        {/* Sub-links List */}
                        <div className="pl-2 space-y-2 border-l-2 border-ossisto-blue/30 pt-1">
                          {item.links.map((link, lIdx) => {
                            const isEnabled = link.name === "Data Engineering & integration" || link.name === "About US";
                            return (
                              <a
                                key={lIdx}
                                href={link.href}
                                onClick={(e) => {
                                  e.preventDefault();
                                  if (!isEnabled) return;
                                  setIsSidePanelOpen(false);

                                  if (link.name === "Data Engineering & integration") {
                                    onNavigate('cloud-modernization');
                                  } else if (link.name === "About US") {
                                    onNavigate('about-us');
                                  }
                                }}
                                className={`flex items-center justify-between text-xs font-bold py-1 transition-colors group/m-link ${
                                  isEnabled
                                    ? "text-slate-800 hover:text-ossisto-blue cursor-pointer"
                                    : "text-slate-800 cursor-default pointer-events-none select-none"
                                }`}
                              >
                                <span>{link.name}</span>
                                <span className={`text-[9px] transition-colors ${
                                  isEnabled ? "text-slate-400 group-hover/m-link:text-ossisto-blue" : "text-slate-400 opacity-60"
                                }`}>▶</span>
                              </a>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      )}
    </header>
  );
}
