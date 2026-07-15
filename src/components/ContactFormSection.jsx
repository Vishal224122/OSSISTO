import React, { useState, useEffect } from 'react';
import { Mail, CheckCircle, AlertCircle } from 'lucide-react';

export default function ContactFormSection() {
  const [activeForm, setActiveForm] = useState('Business'); // Business, Careers, General
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    message: '',
    resume: null,
    subject: 'General Inquiry',
    captchaInput: ''
  });

  const [captcha, setCaptcha] = useState({ num1: 0, num2: 0, result: 0 });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 5) + 1;
    const num2 = Math.floor(Math.random() * 5) + 1;
    setCaptcha({ num1, num2, result: num1 + num2 });
  };

  useEffect(() => {
    generateCaptcha();
    setSubmitted(false);
    setErrors({});
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      company: '',
      message: '',
      resume: null,
      subject: 'General Inquiry',
      captchaInput: ''
    });
  }, [activeForm]);

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (activeForm === 'Business' && !formData.company.trim()) {
      newErrors.company = 'Company name is required';
    }
    if (!formData.message.trim()) newErrors.message = 'Message content is required';
    if (parseInt(formData.captchaInput) !== captcha.result) {
      newErrors.captchaInput = 'Math answer is incorrect';
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
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          message: '',
          resume: null,
          subject: 'General Inquiry',
          captchaInput: ''
        });
        generateCaptcha();
      }, 4000);
    } else {
      generateCaptcha();
    }
  };

  const tabs = ['Business', 'Careers', 'General'];

  return (
    <section className="bg-slate-950 py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-900 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Side Info Panel */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-4">
            <span className="text-xoriant-green text-xs font-bold uppercase tracking-widest block">Get In Touch</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Ready to Accelerate Your <span className="text-gradient font-black">Technology Transformation</span>?
            </h2>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
              Reach out to our global consulting cells. Share your engineering parameters, and let's configure a delivery model tailored for your enterprise needs.
            </p>
          </div>

          <div className="space-y-4 pt-4 border-t border-slate-900">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center shrink-0">
                <Mail className="w-4.5 h-4.5 text-xoriant-green" />
              </div>
              <div>
                <span className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider">Business Consulting</span>
                <span className="block text-xs text-white font-bold">connect@xoriant.com</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center shrink-0">
                <Mail className="w-4.5 h-4.5 text-xoriant-green" />
              </div>
              <div>
                <span className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider">Careers Inquiries</span>
                <span className="block text-xs text-white font-bold">recruitment@xoriant.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Inline Interactive Form */}
        <div className="lg:col-span-7 bg-slate-900/60 border border-slate-900 rounded-3xl p-6 md:p-8 shadow-xl">
          
          {/* Form Tabs */}
          <div className="flex bg-slate-950 border border-slate-900 p-1.5 rounded-xl space-x-1 mb-6">
            {tabs.map((tab, idx) => (
              <button 
                key={idx}
                onClick={() => setActiveForm(tab)}
                className={`flex-1 text-center py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors ${
                  activeForm === tab 
                    ? 'bg-xoriant-green text-white shadow-md' 
                    : 'bg-transparent text-gray-400 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {submitted ? (
            <div className="flex flex-col items-center justify-center text-center py-16 space-y-4 animate-fade-in">
              <CheckCircle className="w-16 h-16 text-xoriant-green animate-bounce" />
              <h3 className="text-lg font-bold text-white uppercase tracking-wider">Inquiry Logs Registered</h3>
              <p className="text-xs text-gray-400 max-w-sm">
                Success! Your details have been submitted. An engineering cell representative will connect with you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">First Name *</label>
                  <input 
                    type="text" 
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    placeholder="First Name"
                    className={`w-full bg-slate-950 border ${errors.firstName ? 'border-red-500' : 'border-slate-800 focus:border-xoriant-green'} text-white rounded-lg p-3 text-xs focus:outline-none transition-colors`}
                  />
                  {errors.firstName && <p className="text-[10px] text-red-500 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.firstName}</p>}
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">Last Name *</label>
                  <input 
                    type="text" 
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    placeholder="Last Name"
                    className={`w-full bg-slate-950 border ${errors.lastName ? 'border-red-500' : 'border-slate-800 focus:border-xoriant-green'} text-white rounded-lg p-3 text-xs focus:outline-none transition-colors`}
                  />
                  {errors.lastName && <p className="text-[10px] text-red-500 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.lastName}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">Email Address *</label>
                  <input 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Email Address"
                    className={`w-full bg-slate-950 border ${errors.email ? 'border-red-500' : 'border-slate-800 focus:border-xoriant-green'} text-white rounded-lg p-3 text-xs focus:outline-none transition-colors`}
                  />
                  {errors.email && <p className="text-[10px] text-red-500 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.email}</p>}
                </div>
                <div>
                  {activeForm === 'Business' ? (
                    <>
                      <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">Company Name *</label>
                      <input 
                        type="text" 
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Company Name"
                        className={`w-full bg-slate-950 border ${errors.company ? 'border-red-500' : 'border-slate-800 focus:border-xoriant-green'} text-white rounded-lg p-3 text-xs focus:outline-none transition-colors`}
                      />
                      {errors.company && <p className="text-[10px] text-red-500 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.company}</p>}
                    </>
                  ) : activeForm === 'Careers' ? (
                    <>
                      <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">Upload Resume (Mockup)</label>
                      <input 
                        type="file" 
                        onChange={(e) => setFormData({ ...formData, resume: e.target.files[0] })}
                        className="w-full bg-slate-950 border border-slate-800 text-gray-400 rounded-lg p-2.5 text-xs focus:outline-none focus:border-xoriant-green file:mr-4 file:py-1.5 file:px-3 file:rounded-md file:border-0 file:text-[10px] file:font-bold file:uppercase file:bg-xoriant-green/10 file:text-xoriant-green file:cursor-pointer hover:file:bg-xoriant-green/20"
                      />
                    </>
                  ) : (
                    <>
                      <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">Inquiry Subject</label>
                      <select 
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 focus:border-xoriant-green text-white rounded-lg p-3 text-xs focus:outline-none transition-colors"
                      >
                        <option>General Support</option>
                        <option>Media Inquiry</option>
                        <option>Security Reporting</option>
                      </select>
                    </>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">Inquiry Details *</label>
                <textarea 
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share details regarding your tech transformation goals..."
                  rows={4}
                  className={`w-full bg-slate-950 border ${errors.message ? 'border-red-500' : 'border-slate-800 focus:border-xoriant-green'} text-white rounded-lg p-3 text-xs focus:outline-none transition-colors resize-none`}
                />
                {errors.message && <p className="text-[10px] text-red-500 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.message}</p>}
              </div>

              {/* Math Verification Captcha */}
              <div className="border border-slate-900 bg-slate-950 p-4 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider">Captcha Solver *</span>
                  <p className="text-xs font-semibold text-white mt-1">Please solve: {captcha.num1} + {captcha.num2} = ?</p>
                </div>
                <div className="shrink-0">
                  <input 
                    type="number" 
                    value={formData.captchaInput}
                    onChange={(e) => setFormData({ ...formData, captchaInput: e.target.value })}
                    placeholder="Your Answer"
                    className={`w-28 bg-slate-900 border ${errors.captchaInput ? 'border-red-500' : 'border-slate-800 focus:border-xoriant-green'} text-white text-center rounded-lg p-2.5 text-xs focus:outline-none transition-colors`}
                  />
                  {errors.captchaInput && <p className="text-[10px] text-red-500 mt-1 text-center font-semibold">{errors.captchaInput}</p>}
                </div>
              </div>

              <button 
                type="submit"
                className="w-full bg-xoriant-green hover:bg-[#009632] text-white font-bold py-3 rounded-lg text-xs tracking-wider uppercase transition-all duration-300 shadow-md shadow-xoriant-green/10"
              >
                Send Message
              </button>

            </form>
          )}

        </div>

      </div>
    </section>
  );
}
