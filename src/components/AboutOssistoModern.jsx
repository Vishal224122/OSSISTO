import React from 'react';

export default function AboutOssistoModern() {
  return (
    <section id="about-ossisto-modern" className="bg-white pt-16 sm:pt-24 md:pt-40 pb-6 sm:pb-8 md:pb-12 px-6 md:px-12 lg:px-24 font-sans flex flex-col items-center text-center border-none border-b-0 border-t-0 outline-none">
      <div className="max-w-5xl mx-auto flex flex-col items-center w-full">

        {/* About Ossisto Text Container (Centered) */}
        <div className="space-y-6 max-w-4xl mx-auto flex flex-col items-center">
          <h2 className="text-2xl md:text-3.5xl lg:text-4xl font-black text-black leading-tight tracking-tight text-center animate-fade-in-up">
            Accelerate the Digital Transformation journey of <span className="text-ossisto-blue always-blue">your</span> manufacturing enterprise
          </h2>
          <p className="text-2xl md:text-3.5xl lg:text-4xl font-black text-black leading-tight tracking-tight text-center mt-6 sm:mt-8 md:mt-10">
            <span className="text-ossisto-blue always-blue">Your</span> success is how we measure <span className="text-ossisto-blue always-blue">our</span> success!
          </p>
        </div>

      </div>
    </section>
  );
}
