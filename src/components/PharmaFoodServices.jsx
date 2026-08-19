import React from 'react';
import ContactAndLocations from './ContactAndLocations';

export default function PharmaFoodServices() {
  return (
    <div className="w-full bg-white pt-24 min-h-screen text-slate-800 font-sans">
      {/* Content Container matching screenshot typography and styling */}
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 py-12 space-y-14 text-left">

        {/* 1. Header Section */}
        <section className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1E3B70] tracking-tight uppercase">
              PHARMA & FOOD
            </h1>
            <p className="text-sm sm:text-base italic text-slate-500 font-medium leading-relaxed">
              Digital Engineering and IT Services for Compliance-Driven Industries
            </p>
          </div>

          <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed font-normal text-justify">
            <p>
              Pharmaceutical and food manufacturing operate under some of the most demanding regulatory frameworks in any industry. Every system that touches production, quality, or patient safety must be validated, documented, and audit-ready — from shop-floor MES to enterprise QMS, from lab instruments to serialisation platforms. At the same time, these industries are under pressure to modernise: adopt Pharma 4.0 principles, digitise paper-heavy quality processes, and extract value from data while maintaining strict GxP compliance.
            </p>
            <p>
              Ossisto Global provides digital engineering, IT services, and staffing solutions to pharmaceutical manufacturers, CDMO/CMOs, food and nutrition companies, and life sciences technology vendors.
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
              The core challenge in pharma and food IT is not just building systems — it is building them in a way that satisfies regulators. Every implementation carries a validation burden. Every change needs documented impact assessment. Every data migration requires evidence of integrity. This means the IT workload in regulated companies is structurally heavier than in other industries, and the people doing the work need to understand not just the technology but the regulatory context around it.
            </p>
            <p>
              Ossisto Global addresses this from two directions. First, we provide engineering and compliance services — CSV, system implementation, documentation, and data integrity remediation — delivered by teams that understand GxP expectations and work within standard pharma validation lifecycles. Second, we provide IT staffing and managed team solutions that let clients scale capacity for validation campaigns, system rollouts, and ongoing application support — without scaling permanent headcount.
            </p>
          </div>
        </section>

        {/* Divider */}
        <hr className="border-slate-200" />

        {/* 3. OUR COMPLIANCE & DOCUMENTATION FOCUS */}
        <section className="space-y-6">
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#1E3B70] tracking-wide uppercase">
            OUR COMPLIANCE & DOCUMENTATION FOCUS
          </h2>

          <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-normal text-justify">
            In regulated industries, the documentation is not a by-product of the work — it is the work. Systems that cannot demonstrate validated state, data integrity, and audit trails are systems that put your licence at risk. Our teams are trained to treat documentation with the same rigour as code and configuration:
          </p>

          <div className="space-y-5 text-slate-700 text-sm sm:text-base leading-relaxed text-justify">
            <p>
              <strong className="text-slate-900 font-bold">Validation lifecycle management.</strong> We prepare and execute validation documentation across the full V-model: User Requirements Specifications, Functional and Design Specifications, IQ/OQ/PQ protocols, Requirements Traceability Matrices, and validation summary reports — aligned to GAMP 5 risk-based approaches.
            </p>

            <p>
              <strong className="text-slate-900 font-bold">Data integrity and 21 CFR Part 11.</strong> We assess systems against ALCOA+ principles and Part 11 technical controls (audit trails, electronic signatures, access controls) and prepare remediation documentation where gaps exist.
            </p>

            <p>
              <strong className="text-slate-900 font-bold">Change control and periodic review.</strong> We support change control documentation, periodic review of validated systems, and maintain system lifecycle records to keep your validated estate current.
            </p>

            <p>
              <strong className="text-slate-900 font-bold">SOP and process documentation.</strong> We draft, review, and maintain standard operating procedures, work instructions, and training materials for IT and quality systems — written to pass regulatory scrutiny, not just fill a binder.
            </p>
          </div>
        </section>

        {/* Divider */}
        <hr className="border-slate-200" />

        {/* 4. DOMAINS WE WORK ACROSS */}
        <section className="space-y-6">
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#1E3B70] tracking-wide uppercase">
            DOMAINS WE WORK ACROSS
          </h2>

          <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-normal text-justify">
            Our pharma and food practice spans manufacturing IT, quality systems, lab informatics, and enterprise applications:
          </p>

          <div className="space-y-6 text-slate-700 text-sm sm:text-base leading-relaxed text-justify">
            <div className="space-y-1">
              <h3 className="text-slate-900 font-bold text-base sm:text-lg">
                Manufacturing & Plant IT
              </h3>
              <p>
                MES, DCS/SCADA integration, batch record automation, serialisation, IT/OT convergence, and Pharma 4.0 digital plant initiatives.
              </p>
            </div>

            <div className="space-y-1">
              <h3 className="text-slate-900 font-bold text-base sm:text-lg">
                Quality & Regulatory Systems
              </h3>
              <p>
                QMS, document management, CAPA/deviation workflows, regulatory information management, CSV, and pharmacovigilance system support.
              </p>
            </div>

            <div className="space-y-1">
              <h3 className="text-slate-900 font-bold text-base sm:text-lg">
                Lab Informatics
              </h3>
              <p>
                LIMS, ELN, CDS, lab instrument integration, stability study data management, and paperless QC lab programmes.
              </p>
            </div>

            <div className="space-y-1">
              <h3 className="text-slate-900 font-bold text-base sm:text-lg">
                Enterprise IT
              </h3>
              <p>
                SAP AMS, cloud infrastructure (GxP-qualified), application support, cybersecurity, and IT helpdesk for validated environments.
              </p>
            </div>
          </div>
        </section>

      </div>

      {/* Footer Contact & Locations */}
      <ContactAndLocations />
    </div>
  );
}
