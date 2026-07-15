import React, { useState, useEffect } from 'react';
import { X, CheckCircle, AlertCircle } from 'lucide-react';

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    purpose: 'Business Inquiries',
    message: '',
    captchaInput: ''
  });

  const [captcha, setCaptcha] = useState({ num1: 0, num2: 0, result: 0 });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 9) + 1;
    const num2 = Math.floor(Math.random() * 9) + 1;
    setCaptcha({ num1, num2, result: num1 + num2 });
  };

  useEffect(() => {
    if (isOpen) {
      generateCaptcha();
      setSubmitted(false);
      setErrors({});
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        purpose: 'Business Inquiries',
        message: '',
        captchaInput: ''
      });
    }
  }, [isOpen]);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
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
        onClose();
      }, 2500);
    } else {
      generateCaptcha();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end animate-fade-in">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Slide-out Drawer */}
      <div className="relative w-full max-w-lg bg-slate-900 border-l border-slate-800 h-full flex flex-col justify-between p-6 md:p-8 shadow-2xl z-10 animate-fade-in-up">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div>
            <h2 className="text-xl font-bold text-white tracking-wide">Connect With Xoriant</h2>
            <p className="text-xs text-gray-400 mt-1">Our engineering consultants will respond within 24 hours.</p>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-slate-850 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Form */}
        <div className="flex-1 overflow-y-auto py-6 pr-2">
          {submitted ? (
            <div className="flex flex-col items-center justify-center text-center h-full space-y-4 animate-fade-in">
              <CheckCircle className="w-16 h-16 text-xoriant-green animate-bounce" />
              <h3 className="text-lg font-bold text-white">Inquiry Received Successfully!</h3>
              <p className="text-sm text-gray-400 max-w-sm">
                Thank you for reaching out. A representative from the Xoriant engineering cell will get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5">Full Name *</label>
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. John Doe"
                  className={`w-full bg-slate-950 border ${errors.name ? 'border-red-500' : 'border-slate-800 focus:border-xoriant-green'} text-white rounded-lg p-3 text-sm focus:outline-none transition-colors`}
                />
                {errors.name && <p className="text-xs text-red-500 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.name}</p>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5">Email Address *</label>
                  <input 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. john@company.com"
                    className={`w-full bg-slate-950 border ${errors.email ? 'border-red-500' : 'border-slate-800 focus:border-xoriant-green'} text-white rounded-lg p-3 text-sm focus:outline-none transition-colors`}
                  />
                  {errors.email && <p className="text-xs text-red-500 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.email}</p>}
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5">Phone Number</label>
                  <input 
                    type="tel" 
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +1 555-0199"
                    className="w-full bg-slate-950 border border-slate-800 focus:border-xoriant-green text-white rounded-lg p-3 text-sm focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5">Company Name</label>
                  <input 
                    type="text" 
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Enterprise Ltd"
                    className="w-full bg-slate-950 border border-slate-800 focus:border-xoriant-green text-white rounded-lg p-3 text-sm focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5">Inquiry Purpose</label>
                  <select 
                    value={formData.purpose}
                    onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 focus:border-xoriant-green text-white rounded-lg p-3 text-sm focus:outline-none transition-colors"
                  >
                    <option>Business Inquiries</option>
                    <option>Careers & Jobs</option>
                    <option>Partnership Programs</option>
                    <option>Media & Press Relations</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5">Message / Details *</label>
                <textarea 
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="How can we help your business engineer capability?"
                  rows={4}
                  className={`w-full bg-slate-950 border ${errors.message ? 'border-red-500' : 'border-slate-800 focus:border-xoriant-green'} text-white rounded-lg p-3 text-sm focus:outline-none transition-colors resize-none`}
                />
                {errors.message && <p className="text-xs text-red-500 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.message}</p>}
              </div>

              {/* Math Captcha */}
              <div className="border border-slate-800 bg-slate-950 p-4 rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider">Math Verification *</span>
                  <p className="text-sm font-semibold text-white mt-1">Please solve: {captcha.num1} + {captcha.num2} = ?</p>
                </div>
                <div className="shrink-0">
                  <input 
                    type="number" 
                    value={formData.captchaInput}
                    onChange={(e) => setFormData({ ...formData, captchaInput: e.target.value })}
                    placeholder="Your Answer"
                    className={`w-28 bg-slate-900 border ${errors.captchaInput ? 'border-red-500' : 'border-slate-800 focus:border-xoriant-green'} text-white text-center rounded-lg p-2.5 text-sm focus:outline-none transition-colors`}
                  />
                  {errors.captchaInput && <p className="text-[10px] text-red-500 mt-1 text-center font-semibold">{errors.captchaInput}</p>}
                </div>
              </div>

              <button 
                type="submit"
                className="w-full bg-xoriant-green hover:bg-[#009632] text-white font-bold py-3 rounded-lg text-sm transition-all duration-300 shadow-lg shadow-xoriant-green/10"
              >
                Submit Inquiry
              </button>

            </form>
          )}
        </div>

        {/* Footer info */}
        <div className="border-t border-slate-800 pt-4 text-center">
          <span className="text-[10px] text-gray-500 tracking-wider font-semibold block">
            © 2026 XORIANT CORPORATION. ALL COMPLIANCES ACTIVE.
          </span>
        </div>

      </div>
    </div>
  );
}
