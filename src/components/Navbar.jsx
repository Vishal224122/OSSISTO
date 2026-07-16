import React, { useState, useEffect } from 'react';
import { X, Search, Linkedin, Instagram, Facebook, Twitter, Youtube, ArrowRight } from 'lucide-react';

export default function Navbar({ onContactClick, onNavigate, currentView }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [timeoutId, setTimeoutId] = useState(null);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);
  const [activeSideSub, setActiveSideSub] = useState(null);
  const [activeTab, setActiveTab] = useState('DIGITAL');

  const handleMouseEnter = (index) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
    setActiveDropdown(index);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setActiveDropdown(null);
    }, 150); // 150ms delay to bridge the transition gap
    setTimeoutId(id);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [timeoutId]);

  const menuItems = [
    {
      title: "DIGITAL",
      headerTitle: "Digital Engineering",
      desc: "From digital possibilities to an agile cycle of digital solution development - explore how everything connects under our robust technology DNA, product engineering footprint, and dependable partner network.",
      links: [
        { name: "Cloud", href: "#dream-details" },
        { name: "Digital twin", href: "#dream-details" },
        { name: "IIoT", href: "#dream-details" }
      ],
      featured: {
        category: "News",
        title: "Ossisto Acquires TestDevLab to Expand European Reach",
        desc: "Expanding presence in EU for AI-driven Quality Engineering.",
        image: "https://www.xoriant.com/cdn/ff/5hii6a26ufChGUjvX3c1n1H8r-6QIlwHLpZONHr00_Q/1771476515/public/styles/100/public/2026-02/Acquisition%20news%20%281%29.png_100x50_2.jpg.webp?itok=pf_clXkg"
      }
    },
    {
      title: "AI & DATA",
      headerTitle: "AI & Data Solutions",
      desc: "Harness cognitive engineering frameworks to build enterprise-scale intelligent automation pipelines and models.",
      links: [
        { name: "Generative AI", href: "#dream-details" },
        { name: "Machine learning", href: "#dream-details" },
        { name: "Computer vision", href: "#dream-details" },
        { name: "Data engineering", href: "#dream-details" },
        { name: "AI agents", href: "#dream-details" },
        { name: "Responsible AI", href: "#dream-details" }
      ],
      featured: {
        category: "POV",
        title: "Gen AI: A Reality Check",
        desc: "Separating AI hype from real implementation blueprints.",
        image: "https://www.xoriant.com/cdn/ff/mWUn7udaliJWNZOZU5lSTqdazMIBoo7U9P54qTpL73o/1771476514/public/styles/100/public/2026-02/Webpage%20Banner-Desktop.jpg_100x50_2.jpg.webp?itok=hcBXFAEN"
      }
    },
    {
      title: "IT SERVICES",
      headerTitle: "Enterprise IT Services",
      desc: "Implement scalable and resilient database management architectures, modular resource planning systems, and customized support pipelines.",
      links: [
        { name: "SAP", href: "#dream-details" },
        { name: "ERP", href: "#dream-details" },
        { name: "Manufacturing IT", href: "#dream-details" },
        { name: "Development", href: "#dream-details" }
      ],
      featured: {
        category: "Case Study",
        title: "Accelerating Mortgage Processing with Document Automation",
        desc: "Reducing lifecycle overheads by 70% with intelligent processing.",
        image: "https://www.xoriant.com/cdn/ff/caTR1zNKWw-48WXXuCHM7xARmfsJvEbyLdj-0ccie_8/1771476514/public/styles/100/public/2026-02/Xoriant-Document-Automation-Platform-Development-for-Mortgage-ISV_100x50_2.jpg.webp?itok=G_aoqKyR"
      }
    },
    {
      title: "Industry 4.0 Solutions",
      headerTitle: "Industry 4.0 Solutions",
      desc: "Bridge physical manufacturing assets with cognitive cloud frameworks to build connected, smart industrial spaces.",
      links: [
        { name: "Smart factory", href: "#dream-details" },
        { name: "Predictive maintenance", href: "#dream-details" },
        { name: "Supply chain x.x", href: "#dream-details" },
        { name: "Quality 4.0", href: "#dream-details" },
        { name: "AR/MR", href: "#dream-details" },
        { name: "Lean & sustainability", href: "#dream-details" }
      ],
      featured: {
        category: "Overview",
        title: "Smart Manufacturing Blueprint",
        desc: "A framework guide to digital twin and shopfloor automation.",
        image: "https://www.xoriant.com/cdn/ff/mdvIcgUZhbbMQczMvbsjbPz6X0qrifA-bXuSpv-nBi4/1735031350/public/Bodhi-Images/Banner%20Image.jpg"
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
      title: "COE",
      headerTitle: "Ossisto Centers of Excellence",
      desc: "Core capabilities that power next-generation software development across embedded systems, AI, and cybersecurity platforms.",
      links: [
        { name: "Embedded systems", href: "#dream-details" },
        { name: "AI & ML", href: "#dream-details" },
        { name: "Cybersecurity", href: "#dream-details" },
        { name: "Testing & validation", href: "#dream-details" }
      ],
      featured: {
        category: "Resources",
        title: "Applied Intelligence Research Publications",
        desc: "Review our engineering manuals, white papers, and guides.",
        image: "https://www.xoriant.com/cdn/ff/GtZ1Doo7yII823_hfAETiQaeuDlL0YFKW4GbC9hQ3tA/1781711862/public/styles/webp/public/2026-06/Home%20Page%20Banner%20Orian.png.webp?itok=_etsdsBM"
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
        { name: "Our story", href: "#about-ossisto" },
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

  const sidebarGroups = {
    company: [
      { name: "Our Story", href: "#about-ossisto" },
      { name: "Leadership Team", href: "#contact" },
      { name: "News & Announcements", href: "#keeping-updated" },
      { name: "Events", href: "#contact" },
      { name: "Awards", href: "#contact" },
      { name: "Social Responsibility", href: "#contact" }
    ],
    thoughtLeadership: [
      { name: "Articles", href: "#keeping-updated" },
      { name: "Interviews", href: "#keeping-updated" },
      { name: "POV Reports", href: "#keeping-updated" }
    ]
  };

  return (
    <nav className={`fixed w-full top-0 z-40 transition-all duration-500 ${isScrolled
      ? 'bg-white shadow-md border-b border-slate-100 py-3'
      : 'bg-black/20 backdrop-blur-[2px] border-b border-white/10 py-5'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('home');
              }}
              className="flex items-center"
            >
              <img
                src="https://ossisto.com/wp-content/uploads/2023/04/Ossisto_Logo.png"
                alt="Ossisto Logo"
                className={`h-8 md:h-10 object-contain transition-all duration-300 ${isScrolled ? '' : 'brightness-0 invert'}`}
              />
            </a>
          </div>

          {/* Desktop Menu links exactly as requested */}
          <div className="hidden lg:flex items-center space-x-3.5 xl:space-x-5.5 ml-8 xl:ml-16">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="group"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  onClick={() => setActiveTab(item.title)}
                  className={`relative flex items-center font-black text-[10.5px] xl:text-[11.5px] py-4 transition-colors whitespace-nowrap uppercase tracking-wider ${isScrolled ? 'text-slate-900 hover:text-ossisto-blue' : 'text-white hover:text-ossisto-blue'
                    }`}
                >
                  {item.title}
                  {/* Underline matching the screenshot */}
                  <span className={`absolute bottom-0 left-0 w-full h-[3px] bg-ossisto-blue rounded-full transition-transform duration-300 origin-left ${activeDropdown === index || (activeDropdown === null && activeTab === item.title)
                    ? 'scale-x-100'
                    : 'scale-x-0 group-hover:scale-x-100'
                    }`} />
                </button>

                {/* Mega Dropdown Drawer */}
                {activeDropdown === index && (
                  <div
                    className="absolute left-0 right-0 top-full w-screen bg-white border-b border-slate-200 shadow-2xl animate-slide-down-menu z-50 overflow-hidden"
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-12">

                      {/* Column 1: Featured Insights (Green background with left bleed) */}
                      <div className="col-span-3 bg-[#236CB1] [box-shadow:-100vw_0_0_100vw_#236CB1] p-6 lg:p-8 text-white flex flex-col justify-between relative z-10">
                        <div>
                          <h3 className="text-sm lg:text-base font-extrabold tracking-wider mb-5 uppercase text-white">
                            Featured Insights
                          </h3>

                          <div className="space-y-4">
                            {/* Insight 1 */}
                            <div className="flex gap-3 items-start text-left">
                              <img
                                src="https://www.xoriant.com/cdn/ff/5hii6a26ufChGUjvX3c1n1H8r-6QIlwHLpZONHr00_Q/1771476515/public/styles/100/public/2026-02/Acquisition%20news%20%281%29.png_100x50_2.jpg.webp?itok=pf_clXkg"
                                alt="Acquisition News"
                                className="w-16 h-10 object-cover rounded bg-white/10 shrink-0 mt-0.5"
                              />
                              <div>
                                <span className="block text-[8px] font-extrabold uppercase text-green-100 tracking-wider">News</span>
                                <a href="#keeping-updated" className="block text-[11px] font-bold leading-tight hover:underline line-clamp-2">
                                  Ossisto Acquires TestDevLab to Expand European Reach
                                </a>
                              </div>
                            </div>

                            {/* Insight 2 */}
                            <div className="flex gap-3 items-start text-left">
                              <img
                                src="https://www.xoriant.com/cdn/ff/mWUn7udaliJWNZOZU5lSTqdazMIBoo7U9P54qTpL73o/1771476514/public/styles/100/public/2026-02/Webpage%20Banner-Desktop.jpg_100x50_2.jpg.webp?itok=hcBXFAEN"
                                alt="Gen AI POV"
                                className="w-16 h-10 object-cover rounded bg-white/10 shrink-0 mt-0.5"
                              />
                              <div>
                                <span className="block text-[8px] font-extrabold uppercase text-green-100 tracking-wider">Thought Leadership POV</span>
                                <a href="#keeping-updated" className="block text-[11px] font-bold leading-tight hover:underline line-clamp-2">
                                  Gen AI: A Reality Check
                                </a>
                              </div>
                            </div>

                            {/* Insight 3 */}
                            <div className="flex gap-3 items-start text-left">
                              <img
                                src="https://www.xoriant.com/cdn/ff/caTR1zNKWw-48WXXuCHM7xARmfsJvEbyLdj-0ccie_8/1771476514/public/styles/100/public/2026-02/Xoriant-Document-Automation-Platform-Development-for-Mortgage-ISV_100x50_2.jpg.webp?itok=G_aoqKyR"
                                alt="Document Automation"
                                className="w-16 h-10 object-cover rounded bg-white/10 shrink-0 mt-0.5"
                              />
                              <div>
                                <span className="block text-[8px] font-extrabold uppercase text-green-100 tracking-wider">Case Study</span>
                                <a href="#keeping-updated" className="block text-[11px] font-bold leading-tight hover:underline line-clamp-2">
                                  Accelerating Mortgage Processing with Document Automation
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Column 2: Digital Engineering Narrative */}
                      <div className="col-span-5 bg-white p-8 lg:p-12 flex flex-col justify-center relative z-10 text-left">
                        <h2 className="text-2xl lg:text-3xl font-black text-black tracking-tight mb-4">
                          {item.headerTitle}
                        </h2>
                        <p className="text-xs lg:text-sm text-gray-600 leading-relaxed mb-6 max-w-md font-medium">
                          {item.desc}
                        </p>
                        <a
                          href="#dream-details"
                          className="inline-flex items-center gap-1.5 text-xs lg:text-sm font-extrabold text-black hover:text-ossisto-blue transition-colors uppercase tracking-wider"
                        >
                          Know More <span className="text-[10px]">▶</span>
                        </a>
                      </div>

                      {/* Column 3: Sub-links Services List */}
                      <div className="col-span-4 bg-white p-8 lg:p-12 border-l border-gray-100 flex flex-col justify-center relative z-10 text-left">
                        <ul className="space-y-4">
                          {item.links.map((link, idx) => (
                            <li key={idx}>
                              <a
                                href={link.href}
                                onClick={(e) => {
                                  if (link.name === "IIoT") {
                                    e.preventDefault();
                                    onNavigate('product-engineering');
                                    setActiveDropdown(null);
                                  } else if (link.name === "Development") {
                                    e.preventDefault();
                                    onNavigate('application-development');
                                    setActiveDropdown(null);
                                  } else if (link.name === "Cloud") {
                                    e.preventDefault();
                                    onNavigate('cloud-modernization');
                                    setActiveDropdown(null);
                                  } else if (link.name === "Data engineering") {
                                    e.preventDefault();
                                    onNavigate('data-modernization');
                                    setActiveDropdown(null);
                                  } else if (link.name === "Cybersecurity") {
                                    e.preventDefault();
                                    onNavigate('data-security');
                                    setActiveDropdown(null);
                                  } else if (link.name === "Banking & Financial Services") {
                                    e.preventDefault();
                                    onNavigate('banking-services');
                                    setActiveDropdown(null);
                                  } else {
                                    // Let anchor scrolling behave normally on home view
                                    onNavigate('home');
                                    setActiveDropdown(null);
                                  }
                                }}
                                className="text-xs lg:text-sm font-bold text-slate-800 hover:text-ossisto-blue flex items-center justify-between group/sublink transition-colors"
                              >
                                <span>{link.name}</span>
                                <span className="text-[9px] text-slate-400 group-hover/sublink:text-ossisto-blue transition-colors">▶</span>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right section: Sidebar Hamburger, Search Icon, and CONTACT button */}
          <div className="flex items-center space-x-3.5">

            {/* Sidebar Toggle Burger (☰) */}
            <button
              onClick={() => setIsSidePanelOpen(true)}
              className={`p-2 transition-colors group flex items-center justify-center ${isScrolled ? 'text-slate-900 hover:text-ossisto-blue' : 'text-white hover:text-ossisto-blue'
                }`}
              aria-label="Open sidebar menu"
            >
              <svg
                className="w-6 h-5"
                viewBox="0 0 24 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="0" width="24" height="2.5" rx="1.25" className={`${isScrolled ? 'fill-slate-900' : 'fill-white'} group-hover:fill-ossisto-blue transition-colors duration-200`} />
                <rect y="7.5" width="24" height="2.5" rx="1.25" className={`${isScrolled ? 'fill-slate-900' : 'fill-white'} group-hover:fill-ossisto-blue transition-colors duration-200`} />
                <rect y="15" width="24" height="2.5" rx="1.25" className={`${isScrolled ? 'fill-slate-900' : 'fill-white'} group-hover:fill-ossisto-blue transition-colors duration-200`} />
              </svg>
            </button>

            {/* Search Box / Icon */}
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`bg-slate-900/60 border border-slate-700/50 text-white text-xs rounded-full py-1.5 pl-4 pr-10 focus:outline-none focus:border-ossisto-blue transition-all duration-300 ${isSearchExpanded ? 'w-40 opacity-100' : 'w-0 opacity-0 pointer-events-none'
                  }`}
              />
              <button
                onClick={() => setIsSearchExpanded(!isSearchExpanded)}
                className={`p-2 transition-colors relative ${isScrolled ? 'text-slate-700 hover:text-ossisto-blue' : 'text-white hover:text-ossisto-blue'
                  }`}
              >
                <Search className="w-4.5 h-4.5" />
              </button>
            </div>

            {/* CONTACT ▶ Button */}
            <button
              onClick={onContactClick}
              className="bg-ossisto-blue always-blue-bg hover:bg-[#236CB1] text-white font-bold py-2 px-4.5 text-xs rounded uppercase tracking-wider flex items-center gap-1.5 transition-all duration-300 shadow-md shadow-ossisto-blue/10 shrink-0"
            >
              CONTACT <span className="text-[9px] select-none">▶</span>
            </button>

          </div>

        </div>
      </div>

      {/* Side Navigation Panel Drawer (Slide in from right) */}
      {isSidePanelOpen && (
        <div className="fixed inset-0 z-50 flex justify-end animate-fade-in">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            onClick={() => setIsSidePanelOpen(false)}
          />

          {/* Sidebar Drawer container */}
          <div className="relative w-80 bg-white border-l border-slate-100 h-full flex flex-col justify-between p-6 shadow-2xl z-10">

            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <img
                src="https://ossisto.com/wp-content/uploads/2023/04/Ossisto_Logo.png"
                alt="Ossisto Logo"
                className="h-7 object-contain"
              />
              <button
                onClick={() => setIsSidePanelOpen(false)}
                className="text-slate-400 hover:text-slate-800 p-2 rounded-full hover:bg-slate-50 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Menu Sections */}
            <div className="flex-1 overflow-y-auto py-6 space-y-6">

              {/* Category 1: Thought Leadership */}
              <div className="space-y-2">
                <button
                  onClick={() => setActiveSideSub(activeSideSub === 'thought' ? null : 'thought')}
                  className="w-full flex items-center justify-between text-base font-bold text-slate-900 hover:text-ossisto-blue transition-colors text-left"
                >
                  <span>Thought Leadership</span>
                  <span className="text-xs text-slate-400 font-mono">{activeSideSub === 'thought' ? '[-]' : '[+]'}</span>
                </button>
                {activeSideSub === 'thought' && (
                  <div className="pl-4 space-y-2 border-l border-slate-100 mt-2 animate-fade-in">
                    {sidebarGroups.thoughtLeadership.map((item, idx) => (
                      <a
                        key={idx}
                        href={item.href}
                        onClick={() => setIsSidePanelOpen(false)}
                        className="block text-sm text-slate-600 hover:text-ossisto-blue py-1 transition-colors font-medium"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Category 2: Company */}
              <div className="space-y-2">
                <button
                  onClick={() => setActiveSideSub(activeSideSub === 'company' ? null : 'company')}
                  className="w-full flex items-center justify-between text-base font-bold text-slate-900 hover:text-ossisto-blue transition-colors text-left"
                >
                  <span>Company</span>
                  <span className="text-xs text-slate-400 font-mono">{activeSideSub === 'company' ? '[-]' : '[+]'}</span>
                </button>
                {activeSideSub === 'company' && (
                  <div className="pl-4 space-y-2 border-l border-slate-100 mt-2 animate-fade-in">
                    {sidebarGroups.company.map((item, idx) => (
                      <a
                        key={idx}
                        href={item.href}
                        onClick={() => setIsSidePanelOpen(false)}
                        className="block text-sm text-slate-600 hover:text-ossisto-blue py-1 transition-colors font-medium"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Category 3: Direct Career & Contact pages */}
              <div className="space-y-3 pt-4 border-t border-slate-100">
                <a
                  href="#contact"
                  onClick={() => setIsSidePanelOpen(false)}
                  className="block text-base font-bold text-slate-900 hover:text-ossisto-blue transition-colors"
                >
                  Careers
                </a>
                <a
                  href="#contact"
                  onClick={() => {
                    setIsSidePanelOpen(false);
                    onContactClick();
                  }}
                  className="block text-base font-bold text-slate-900 hover:text-ossisto-blue transition-colors"
                >
                  Contact Us
                </a>
              </div>

            </div>

            {/* Footer with social media channels */}
            <div className="border-t border-slate-100 pt-4 space-y-4">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block font-sans">
                Follow Ossisto Life
              </span>
              <div className="flex justify-between text-slate-400">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-ossisto-blue transition-colors"><Linkedin className="w-5 h-5" /></a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-ossisto-blue transition-colors"><Instagram className="w-5 h-5" /></a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-ossisto-blue transition-colors"><Facebook className="w-5 h-5" /></a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-ossisto-blue transition-colors"><Twitter className="w-5 h-5" /></a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-ossisto-blue transition-colors"><Youtube className="w-5 h-5" /></a>
              </div>
            </div>

          </div>
        </div>
      )}
    </nav>
  );
}
