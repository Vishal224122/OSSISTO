import React from 'react';

export default function AutomotiveServices() {
  return (
    <div className="w-full bg-white pt-24 min-h-screen text-slate-800 font-sans">
      {/* Content Container matching screenshot typography and styling */}
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 py-12 space-y-14 text-left">

        {/* 1. Header Section */}
        <section className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1E3B70] tracking-tight uppercase">
              Automotive Digital Services
            </h1>
            <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
              Working closely with automotive OEMs, Tier-1 suppliers and mobility technology companies, we provide digital engineering, IT and talent solution services.
            </p>
          </div>

          <hr className="border-dashed border-slate-300 my-6" />

          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-[#1E3B70] tracking-tight">
              Automotive co-engineering support
            </h2>
            <p className="text-sm sm:text-base italic text-slate-500 font-medium leading-relaxed">
              Engineering the Digital Backbone of Next-Generation Vehicles
            </p>
          </div>

          <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed font-normal text-justify">
            <p>
              The automotive industry is in the middle of a structural shift. Software content per vehicle is growing at multiples of hardware cost. OEMs and Tier-1 suppliers are re-architecting platforms around software-defined vehicle (SDV) principles, electrified powertrains, and connected ecosystems — while managing legacy systems, regulatory compliance, and relentless cost pressure across global operations.
            </p>
          </div>
        </section>

        {/* Divider */}
        <hr className="border-slate-200" />

        {/* 2. HOW WE CAN HELP */}
        <section className="space-y-6">
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#1E3B70] tracking-wide uppercase">
            HOW WE CAN HELP
          </h2>

          <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed font-normal text-justify">
            <p>
              We solve Automotive companies’ prevalent problem: the engineering and IT workload is growing faster than their ability to hire, onboard and retain the right people - especially for software-intensive domains like SDV, electrification, and ADAS. The gap is not just in headcount; it is in access to engineers who understand both the automotive domain and modern software practices.
            </p>
            <p>
              Ossisto Global addresses this by providing teams that work within automotive-standard processes and toolchains. Our delivery centre in India gives clients access to a deep talent pool across embedded systems, cloud and data engineering, enterprise IT, and DevOps — with engagement models designed for both short-term projects and long-running programmes.
            </p>
          </div>
        </section>

        {/* Divider */}
        <hr className="border-slate-200" />

        {/* 3. DOMAINS WE WORK ACROSS */}
        <section className="space-y-6">
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#1E3B70] tracking-wide uppercase">
            DOMAINS WE WORK ACROSS
          </h2>

          <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-normal text-justify">
            Our automotive practice spans both the vehicle engineering and enterprise IT sides of the business:
          </p>

          <div className="space-y-6 text-slate-700 text-sm sm:text-base leading-relaxed text-justify">
            <div className="space-y-1">
              <h3 className="text-slate-900 font-bold text-base sm:text-lg">
                Vehicle Software & Electronics
              </h3>
              <p>
                SDV platforms, ADAS, electric powertrain, infotainment, diagnostics, connected vehicle, telematics, and cybersecurity support.
              </p>
            </div>

            <div className="space-y-1">
              <h3 className="text-slate-900 font-bold text-base sm:text-lg">
                Enterprise & Manufacturing IT
              </h3>
              <p>
                PLM/ALM administration, SAP AMS, MES integration, data engineering, cloud infrastructure, and DevOps for automotive CI/CD pipelines.
              </p>
            </div>

            <div className="space-y-1">
              <h3 className="text-slate-900 font-bold text-base sm:text-lg">
                Quality & Compliance
              </h3>
              <p>
                Functional safety process support (ISO 26262), ASPICE assessment readiness, cybersecurity engineering (ISO/SAE 21434), and test management.
              </p>
            </div>
          </div>
        </section>

        {/* Divider */}
        <hr className="border-slate-200" />

        {/* 4. GET IN TOUCH */}
        <section className="space-y-6">
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#1E3B70] tracking-wide uppercase">
            GET IN TOUCH
          </h2>

          <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-normal text-justify">
            Whether you need a team of embedded engineers for a one year SDV programme, a managed pod to handle ongoing SAP support, or a staffing partner who understands automotive — we are keen to have a conversation about what you need.
          </p>
        </section>

      </div>
    </div>
  );
}
