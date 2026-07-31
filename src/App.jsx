import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ContactModal from './components/ContactModal';
import Hero from './components/Hero';
import AboutOssistoModern from './components/AboutOssistoModern';
import DreamDetails from './components/DreamDetails';
import Footer from './components/Footer';
import ProductPlatformEngineering from './components/ProductPlatformEngineering';
import ApplicationDevelopmentManagement from './components/ApplicationDevelopmentManagement';
import CloudApplicationModernization from './components/CloudApplicationModernization';
import DataAnalyticsModernization from './components/DataAnalyticsModernization';
import DataApplicationSecurity from './components/DataApplicationSecurity';
import BankingFinancialServices from './components/BankingFinancialServices';

function App() {
  const getInitialView = () => {
    const path = window.location.pathname;
    if (path.includes('product-platform-engineering')) return 'product-engineering';
    if (path.includes('application-development-management')) return 'application-development';
    if (path.includes('cloud-application-modernization')) return 'cloud-modernization';
    if (path.includes('data-analytics-modernization')) return 'data-modernization';
    if (path.includes('data-application-security')) return 'data-security';
    if (path.includes('banking-financial-services')) return 'banking-services';
    return 'home';
  };

  // Main view router state ('home' | 'product-engineering' | 'application-development' | 'cloud-modernization')
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [currentView, setCurrentView] = useState(getInitialView);

  const handleNavigate = (view) => {
    setCurrentView(view);
    let path = '/';
    if (view === 'product-engineering') {
      path = '/digital-engineering-services/product-platform-engineering';
    } else if (view === 'application-development') {
      path = '/digital-engineering-services/application-development-management';
    } else if (view === 'cloud-modernization') {
      path = '/digital-engineering-services/cloud-application-modernization';
    } else if (view === 'data-modernization') {
      path = '/data-ai/data-analytics-modernization';
    } else if (view === 'data-security') {
      path = '/cyber-security/data-application-security';
    } else if (view === 'banking-services') {
      path = '/industries/banking-financial-services';
    }
    window.history.pushState({ view }, '', path);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  useEffect(() => {
    const handlePopState = (event) => {
      const path = window.location.pathname;
      if (path.includes('product-platform-engineering')) {
        setCurrentView('product-engineering');
      } else if (path.includes('application-development-management')) {
        setCurrentView('application-development');
      } else if (path.includes('cloud-application-modernization')) {
        setCurrentView('cloud-modernization');
      } else if (path.includes('data-analytics-modernization')) {
        setCurrentView('data-modernization');
      } else if (path.includes('data-application-security')) {
        setCurrentView('data-security');
      } else if (path.includes('banking-financial-services')) {
        setCurrentView('banking-services');
      } else {
        setCurrentView('home');
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return (
    <div className="bg-[#0b0f19] text-gray-200 min-h-screen font-sans selection:bg-ossisto-blue selection:text-white overflow-x-hidden antialiased">


      {/* Navigation Header */}
      <Navbar
        onContactClick={() => setIsContactOpen(true)}
        onNavigate={handleNavigate}
        currentView={currentView}
      />

      {/* Contact Sliding Drawer */}
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />

      {currentView === 'home' ? (
        <div className="bg-white text-slate-900 w-full">
          {/* Hero Banner Slider */}
          <Hero />

          {/* About Narrative and Stats Section */}
          <AboutOssistoModern />

          {/* Capabilities Grids */}
          <DreamDetails />
        </div>
      ) : currentView === 'product-engineering' ? (
        <div className="bg-white text-slate-900 w-full">
          <ProductPlatformEngineering />
        </div>
      ) : currentView === 'application-development' ? (
        <div className="bg-white text-slate-900 w-full">
          <ApplicationDevelopmentManagement />
        </div>
      ) : currentView === 'cloud-modernization' ? (
        <div className="bg-white text-slate-900 w-full">
          <CloudApplicationModernization />
        </div>
      ) : currentView === 'data-modernization' ? (
        <div className="bg-white text-slate-900 w-full">
          <DataAnalyticsModernization />
        </div>
      ) : currentView === 'data-security' ? (
        <div className="bg-white text-slate-900 w-full">
          <DataApplicationSecurity />
        </div>
      ) : (
        <div className="bg-white text-slate-900 w-full">
          <BankingFinancialServices />
        </div>
      )}

      {/* Footer wrapped in white container to prevent dark subpixel line leakage */}
      <div className="bg-white w-full -mt-px relative z-10">
        <Footer />
      </div>
    </div>
  );
}

export default App;
