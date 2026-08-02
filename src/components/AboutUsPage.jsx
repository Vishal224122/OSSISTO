import React, { useEffect } from 'react';
import Footer from './Footer';

export default function AboutUsPage({ onContactClick }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 font-sans select-none pt-20 sm:pt-24 pb-12 sm:pb-16">
      
      {/* Main Content Card Section (Screenshot 1 Format + Screenshot 2 Content) */}
      <section className="bg-slate-50 pt-4 sm:pt-6 pb-16 sm:pb-24 px-4 sm:px-8 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          
          {/* Card Box formatted like Screenshot 1 */}
          <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-white p-6 sm:p-8 md:p-10 lg:p-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Ossisto Global Logo */}
            <div className="lg:col-span-4 flex items-center justify-center p-2 sm:p-4">
              <img 
                src="/logoos.jpeg" 
                alt="Ossisto Global Logo" 
                className="w-full max-w-[240px] sm:max-w-[280px] lg:max-w-[320px] h-auto object-contain drop-shadow-sm"
              />
            </div>

            {/* Right Column: Text Content from Screenshot 2 */}
            <div className="lg:col-span-8 space-y-4 sm:space-y-5 text-left">
              <h2 className="text-2xl sm:text-3xl font-black text-black tracking-tight leading-tight">
                About us
              </h2>

              <div className="space-y-4 text-slate-600 text-xs sm:text-sm leading-relaxed font-medium text-justify">
                <p>
                  Ossisto Global is a technology and business services partner delivering engineering, digital and back-office solutions that help enterprises scale with confidence.
                </p>
                
                <p>
                  Our capabilities span software engineering, product development, data & analytics, cloud, quality engineering and managed support services.
                </p>

                <p>
                  We bring deep, specialized expertise to the <strong className="font-extrabold text-black">Automotive sector</strong> - supporting OEMs and suppliers across embedded systems, connected mobility, ADAS enablement, and digital engineering. We serve clients across manufacturing, retail, and financial services.
                </p>

                <p>
                  <strong className="font-extrabold text-black">A Global Delivery Footprint:</strong> We operate through a distributed model built for proximity and scale. <strong className="font-extrabold text-black">India serves as our offshore hub and Center of Excellence</strong>, powering delivery, innovation, and specialized engineering talent. In the <strong className="font-extrabold text-black">Nordics</strong>, we work closely with automotive and industrial leaders, aligning to local engineering standards and long-term partnership models. Across the <strong className="font-extrabold text-black">United States</strong>, we support clients with onshore engagement, program leadership, and time-zone-aligned collaboration.
                </p>

                <p>
                  <strong className="font-extrabold text-black">Customers at the Core:</strong> Everything we do starts and ends with the customer. We invest the time to understand each client's business, commit to outcomes rather than just outputs, and build teams that feel like an extension of theirs. Long-term trust, responsiveness, and measurable impact are the standards we hold ourselves to — every engagement, every day.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Footer Component */}
      <Footer />

    </div>
  );
}
