import React, { useState, useEffect } from 'react';

export default function ContactAndLocations({ title }) {
  // Contact Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    lookingFor: '',
    message: '',
    agree: false,
    captchaInput: ''
  });
  
  const [captcha, setCaptcha] = useState({ num1: 5, num2: 8, result: 13 });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Locations Map State
  const [activeRegion, setActiveRegion] = useState('All');

  const regions = [
    { name: 'All Locations', count: 17, id: 'All' },
    { name: 'Asia', count: 9, id: 'Asia' },
    { name: 'Europe', count: 2, id: 'Europe' },
    { name: 'North America', count: 6, id: 'North America' }
  ];

  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 5) + 1;
    const num2 = Math.floor(Math.random() * 9) + 1;
    setCaptcha({ num1, num2, result: num1 + num2 });
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.agree) newErrors.agree = 'You must agree to the policies';
    if (parseInt(formData.captchaInput) !== captcha.result) {
      newErrors.captchaInput = 'Incorrect captcha';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          lookingFor: '',
          message: '',
          agree: false,
          captchaInput: ''
        });
        generateCaptcha();
      }, 3500);
    }
  };

  const getActiveCount = () => {
    const region = regions.find(r => r.id === activeRegion);
    return region ? region.count : 17;
  };

  const renderMapContent = () => {
    if (activeRegion === 'Asia') {
      return (
        <div className="relative w-full aspect-[1.8/1] mt-4 border border-slate-50 bg-[#fafcfd] rounded-2xl p-4 flex items-center justify-center select-none overflow-hidden">
          {/* Detailed Green/Grey India dot map */}
          <img 
            src="/india_dot_map.png" 
            alt="Asia Location Map" 
            className="w-full h-full object-contain opacity-95"
          />

          {/* India detailed office pins */}
          {/* Delhi */}
          <div className="absolute top-[31%] left-[37%] animate-fade-in">
            <div className="w-3.5 h-3.5 rounded-full bg-white border border-ossisto-blue flex items-center justify-center text-[8px] font-black text-ossisto-blue shadow-sm select-none">x</div>
          </div>
          {/* Noida */}
          <div className="absolute top-[36%] left-[39%] animate-fade-in">
            <div className="w-3.5 h-3.5 rounded-full bg-white border border-ossisto-blue flex items-center justify-center text-[8px] font-black text-ossisto-blue shadow-sm select-none">x</div>
          </div>
          {/* Mumbai */}
          <div className="absolute top-[59%] left-[32%] animate-fade-in">
            <div className="w-3.5 h-3.5 rounded-full bg-white border border-ossisto-blue flex items-center justify-center text-[8px] font-black text-ossisto-blue shadow-sm select-none">x</div>
          </div>
          {/* Pune */}
          <div className="absolute top-[65%] left-[35%] animate-fade-in">
            <div className="w-3.5 h-3.5 rounded-full bg-white border border-ossisto-blue flex items-center justify-center text-[8px] font-black text-ossisto-blue shadow-sm select-none">x</div>
          </div>
          {/* Bengaluru */}
          <div className="absolute top-[75%] left-[39%] animate-fade-in">
            <div className="w-3.5 h-3.5 rounded-full bg-white border border-ossisto-blue flex items-center justify-center text-[8px] font-black text-ossisto-blue shadow-sm select-none">x</div>
          </div>
          {/* Chennai */}
          <div className="absolute top-[76%] left-[43%] animate-fade-in">
            <div className="w-3.5 h-3.5 rounded-full bg-white border border-ossisto-blue flex items-center justify-center text-[8px] font-black text-ossisto-blue shadow-sm select-none">x</div>
          </div>
          {/* Hyderabad */}
          <div className="absolute top-[61%] left-[44%] animate-fade-in">
            <div className="w-3.5 h-3.5 rounded-full bg-white border border-ossisto-blue flex items-center justify-center text-[8px] font-black text-ossisto-blue shadow-sm select-none">x</div>
          </div>
          {/* Kolkata */}
          <div className="absolute top-[48%] left-[51%] animate-fade-in">
            <div className="w-3.5 h-3.5 rounded-full bg-white border border-ossisto-blue flex items-center justify-center text-[8px] font-black text-ossisto-blue shadow-sm select-none">x</div>
          </div>
          {/* Singapore */}
          <div className="absolute top-[82%] left-[67%] animate-fade-in">
            <div className="w-3.5 h-3.5 rounded-full bg-white border border-ossisto-blue flex items-center justify-center text-[8px] font-black text-ossisto-blue shadow-sm select-none">x</div>
          </div>
        </div>
      );
    }

    if (activeRegion === 'Europe') {
      return (
        <div className="relative w-full aspect-[1.8/1] mt-4 border border-slate-50 bg-[#fafcfd] rounded-2xl p-4 flex items-center justify-center select-none overflow-hidden">
          {/* Detailed Green/Grey Europe dot map */}
          <img 
            src="/europe_dot_map.png" 
            alt="Europe Location Map" 
            className="w-full h-full object-contain opacity-95"
          />

          {/* Europe Pins */}
          {/* London */}
          <div className="absolute top-[38%] left-[40%] animate-fade-in">
            <div className="w-3.5 h-3.5 rounded-full bg-white border border-ossisto-blue flex items-center justify-center text-[8px] font-black text-ossisto-blue shadow-sm select-none">x</div>
          </div>
          {/* Dublin */}
          <div className="absolute top-[35%] left-[28%] animate-fade-in">
            <div className="w-3.5 h-3.5 rounded-full bg-white border border-ossisto-blue flex items-center justify-center text-[8px] font-black text-ossisto-blue shadow-sm select-none">x</div>
          </div>
        </div>
      );
    }

    if (activeRegion === 'North America') {
      return (
        <div className="relative w-full aspect-[1.8/1] mt-4 border border-slate-50 bg-[#fafcfd] rounded-2xl p-4 flex items-center justify-center select-none overflow-hidden">
          {/* Detailed Green/Grey North America dot map */}
          <img 
            src="/na_dot_map.png" 
            alt="North America Location Map" 
            className="w-full h-full object-contain opacity-95"
          />

          {/* North America Pins */}
          {/* Sunnyvale */}
          <div className="absolute top-[52%] left-[22%] animate-fade-in">
            <div className="w-3.5 h-3.5 rounded-full bg-white border border-ossisto-blue flex items-center justify-center text-[8px] font-black text-ossisto-blue shadow-sm select-none">x</div>
          </div>
          {/* Toronto */}
          <div className="absolute top-[42%] left-[62%] animate-fade-in">
            <div className="w-3.5 h-3.5 rounded-full bg-white border border-ossisto-blue flex items-center justify-center text-[8px] font-black text-ossisto-blue shadow-sm select-none">x</div>
          </div>
          {/* Boston */}
          <div className="absolute top-[40%] left-[76%] animate-fade-in">
            <div className="w-3.5 h-3.5 rounded-full bg-white border border-ossisto-blue flex items-center justify-center text-[8px] font-black text-ossisto-blue shadow-sm select-none">x</div>
          </div>
          {/* New Jersey */}
          <div className="absolute top-[48%] left-[72%] animate-fade-in">
            <div className="w-3.5 h-3.5 rounded-full bg-white border border-ossisto-blue flex items-center justify-center text-[8px] font-black text-ossisto-blue shadow-sm select-none">x</div>
          </div>
          {/* Dallas */}
          <div className="absolute top-[68%] left-[42%] animate-fade-in">
            <div className="w-3.5 h-3.5 rounded-full bg-white border border-ossisto-blue flex items-center justify-center text-[8px] font-black text-ossisto-blue shadow-sm select-none">x</div>
          </div>
          {/* Chicago */}
          <div className="absolute top-[50%] left-[55%] animate-fade-in">
            <div className="w-3.5 h-3.5 rounded-full bg-white border border-ossisto-blue flex items-center justify-center text-[8px] font-black text-ossisto-blue shadow-sm select-none">x</div>
          </div>
        </div>
      );
    }

    // Default: 'All' (World Map with regional badges)
    return (
      <div className="relative w-full aspect-[1.8/1] mt-4 border border-slate-50 bg-[#fafcfd] rounded-2xl p-4 flex items-center justify-center select-none overflow-hidden">
        <svg viewBox="0 0 450 250" className="w-full h-full text-slate-200 fill-current opacity-85" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="worldMapDots" x="0" y="0" width="5" height="5" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" className="fill-slate-300" />
            </pattern>
          </defs>
          <path d="M40 30 c20 5, 40 15, 50 35 c10 20, 2 40, -10 60 c-12 20, -5 30, 2 50 c10 30, 20 40, -5 65 c-5 5, -15 -10, -10 -25 c5 -15, -10 -25, -20 -40 c-10 -15, -30 -30, -35 -50 c-5 -20, 10 -40, 20 -60 c10 -20, 0 -45, -15 -60 c-10 -10, 3 -30, 23 -25 Z" fill="url(#worldMapDots)" />
          <path d="M170 30 c30 -5, 60 5, 80 15 c20 10, 40 5, 60 15 c20 10, 45 5, 65 25 c20 20, -10 40, 10 60 c15 15, 30 10, 45 25 c15 15, 10 30, -10 40 c-20 10, -40 -15, -55 -5 c-15 10, -25 30, -40 45 c-15 15, -30 10, -45 -5 c-15 -15, 2 -30, -10 -45 c-12 -15, -30 -5, -45 -20 c-15 -15, -5 -35, 10 -45 c15 -10, -10 -25, -20 -40 c-10 -15, -35 -20, -45 -35 c-10 -15, -2 -30, 20 -27 Z" fill="url(#worldMapDots)" />
          <path d="M370 170 c10 -5, 25 5, 30 15 c5 10, -5 20, -15 25 c-10 5, -25 -5, -30 -15 c-5 -10, 5 -20, 15 -25 Z" fill="url(#worldMapDots)" />
        </svg>

        {/* regional badges */}
        <div className="absolute top-[38%] left-[16%] flex items-center justify-center group">
          <span className="absolute w-6 h-6 rounded-full bg-ossisto-blue/20 animate-ping duration-1000" />
          <div className="w-5.5 h-5.5 rounded-full bg-white border border-ossisto-blue text-[9px] font-black text-black flex items-center justify-center shadow-md relative z-10 hover:scale-110 transition-transform">6</div>
        </div>
        <div className="absolute top-[34%] left-[46%] flex items-center justify-center group">
          <span className="absolute w-6 h-6 rounded-full bg-ossisto-blue/20 animate-ping duration-1000" />
          <div className="w-5.5 h-5.5 rounded-full bg-white border border-ossisto-blue text-[9px] font-black text-black flex items-center justify-center shadow-md relative z-10 hover:scale-110 transition-transform">2</div>
        </div>
        <div className="absolute top-[55%] left-[64%] flex items-center justify-center group">
          <span className="absolute w-6 h-6 rounded-full bg-ossisto-blue/20 animate-ping duration-1000" />
          <div className="w-5.5 h-5.5 rounded-full bg-white border border-ossisto-blue text-[9px] font-black text-black flex items-center justify-center shadow-md relative z-10 hover:scale-110 transition-transform">9</div>
        </div>
      </div>
    );
  };

  return (
    <section id="contact-locations" className="bg-white py-16 px-6 md:px-12 lg:px-24 border-b-0 md:border-b border-gray-100 font-sans">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Panel: Contact Form */}
        <div className="lg:col-span-6 space-y-4">
          <div className="space-y-1.5">
            <h2 className="text-2xl sm:text-3xl font-black text-black tracking-tight leading-tight">
              {title || "Get Started"}
            </h2>
            <p className="text-xs font-bold text-slate-500">
              Talk to our Client Experts
            </p>
          </div>

          {submitted ? (
            <div className="bg-[#f8fafc] border border-gray-150 rounded-2xl p-8 text-center space-y-3 animate-fade-in">
              <div className="w-12 h-12 bg-ossisto-blue/10 text-ossisto-blue rounded-full flex items-center justify-center mx-auto text-xl font-bold">✓</div>
              <h3 className="text-base font-extrabold text-black">Message Sent!</h3>
              <p className="text-xs text-slate-500 max-w-xs mx-auto">
                Thank you for reaching out. An engineering cell consultant will connect with you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Form Fields Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                {/* Column 1 */}
                <div className="space-y-6">
                  {/* Name */}
                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-slate-400">Name</label>
                    <input 
                      type="text" 
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-transparent border-b border-gray-300 focus:border-ossisto-blue py-1.5 text-xs text-black focus:outline-none transition-colors"
                    />
                    {errors.name && <span className="block text-[10px] text-red-500 font-semibold">{errors.name}</span>}
                  </div>
                  
                  {/* Phone */}
                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-slate-400">Phone</label>
                    <input 
                      type="text" 
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-transparent border-b border-gray-300 focus:border-ossisto-blue py-1.5 text-xs text-black focus:outline-none transition-colors"
                    />
                  </div>

                  {/* We are looking for */}
                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-slate-400">We are looking for</label>
                    <input 
                      type="text" 
                      value={formData.lookingFor}
                      onChange={(e) => setFormData({ ...formData, lookingFor: e.target.value })}
                      className="w-full bg-transparent border-b border-gray-300 focus:border-ossisto-blue py-1.5 text-xs text-black focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Column 2 */}
                <div className="space-y-6">
                  {/* Email */}
                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-slate-400">Email</label>
                    <input 
                      type="email" 
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-transparent border-b border-gray-300 focus:border-ossisto-blue py-1.5 text-xs text-black focus:outline-none transition-colors"
                    />
                    {errors.email && <span className="block text-[10px] text-red-500 font-semibold">{errors.email}</span>}
                  </div>
                  
                  {/* Company */}
                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-slate-400">Company</label>
                    <input 
                      type="text" 
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-transparent border-b border-gray-300 focus:border-ossisto-blue py-1.5 text-xs text-black focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-slate-400">Message</label>
                    <input 
                      type="text" 
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-transparent border-b border-gray-300 focus:border-ossisto-blue py-1.5 text-xs text-black focus:outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Policy Checkbox */}
              <div className="flex items-center gap-2 pt-2 select-none">
                <input 
                  type="checkbox" 
                  id="agree-checkbox"
                  checked={formData.agree}
                  onChange={(e) => setFormData({ ...formData, agree: e.target.checked })}
                  className="rounded border-gray-300 text-ossisto-blue focus:ring-ossisto-blue w-3.5 h-3.5"
                />
                <label htmlFor="agree-checkbox" className="text-[11px] font-bold text-slate-700">
                  I agree to your <a href="#privacy" className="text-ossisto-blue hover:underline">privacy policy</a>.
                </label>
              </div>
              {errors.agree && <span className="block text-[10px] text-red-500 font-semibold">{errors.agree}</span>}

              {/* Captcha Solver */}
              <div className="flex items-center gap-3 pt-2">
                <div className="flex items-center bg-black text-white text-xs font-black px-3.5 py-2 rounded-lg border border-black shrink-0">
                  {captcha.num1} + {captcha.num2} =
                </div>
                <input 
                  type="number" 
                  value={formData.captchaInput}
                  onChange={(e) => setFormData({ ...formData, captchaInput: e.target.value })}
                  className="w-32 bg-transparent border border-gray-300 rounded-lg py-2 px-3 text-center text-xs font-bold text-black focus:outline-none focus:border-ossisto-blue"
                  placeholder="Answer"
                />
                {errors.captchaInput && <span className="text-[10px] text-red-500 font-semibold">{errors.captchaInput}</span>}
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 bg-ossisto-blue hover:bg-[#236CB1] text-white font-extrabold text-xs tracking-wider uppercase py-3 px-6 rounded-md shadow-sm transition-colors"
                >
                  SUBMIT <span className="text-[10px] select-none">▶</span>
                </button>
              </div>

            </form>
          )}
        </div>

        {/* Divider line */}
        <div className="hidden lg:block w-px bg-gray-200 self-stretch my-2" />

        {/* Right Panel: Global Locations */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-1.5">
            <span className="block text-xs font-bold text-ossisto-blue uppercase tracking-wider">
              Globally Presence
            </span>
            <h3 className="text-2xl font-black text-black leading-tight tracking-tight">
              Across Americas, Europe, and Asia
            </h3>
          </div>

          {/* Region Tabs */}
          <div className="flex border-b border-gray-200 gap-4 md:gap-5 pb-2">
            {regions.map((reg, idx) => {
              const isActive = activeRegion === reg.id;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveRegion(reg.id)}
                  className={`text-[11px] font-extrabold tracking-tight uppercase transition-colors pb-1 relative ${
                    isActive ? 'text-black' : 'text-slate-400 hover:text-black'
                  }`}
                >
                  {reg.name}
                  {isActive && (
                    <div className="absolute bottom-[-10px] left-0 right-0 h-[2.5px] bg-ossisto-blue rounded-full" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Location counts */}
          <div className="text-xs font-extrabold text-black">
            {getActiveCount()} Locations
          </div>

          {/* Dynamic Map Content */}
          {renderMapContent()}

        </div>

      </div>
    </section>
  );
}
