import React, { useState, useEffect } from 'react';
import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import ContactModal from './components/ContactModal';
import Hero from './components/Hero';
import AboutXoriantModern from './components/AboutXoriantModern';
import DreamDetails from './components/DreamDetails';
import SuccessStories from './components/SuccessStories';
import CareersSectionModern from './components/CareersSectionModern';
import CSRSectionModern from './components/CSRSectionModern';
import ResourceCenter from './components/ResourceCenter';
import ContactAndLocations from './components/ContactAndLocations';
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
    <div className="bg-[#0b0f19] text-gray-200 min-h-screen font-sans selection:bg-xoriant-green selection:text-white overflow-x-hidden antialiased">
      {/* Top Banner Alert */}
      <AnnouncementBar />

      {/* Navigation Header */}
      <Navbar
        onContactClick={() => setIsContactOpen(true)}
        onNavigate={handleNavigate}
        currentView={currentView}
      />

      {/* Contact Sliding Drawer */}
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />

      {currentView === 'home' ? (
        <>
          {/* Hero Banner Slider */}
          <Hero />

          {/* About Narrative and Stats Section */}
          <AboutXoriantModern />

          {/* Capabilities Grids */}
          <DreamDetails />

          {/* Case studies & Marquee */}
          <SuccessStories />

          {/* Careers modern banner */}
          <CareersSectionModern />

          {/* CSR modern section */}
          <CSRSectionModern />

          {/* Applied Intelligence Resource Center */}
          <ResourceCenter />

          {/* Get Started Contact Form & Global Locations Map */}
          <ContactAndLocations title="Get Started" />
        </>
      ) : currentView === 'product-engineering' ? (
        <ProductPlatformEngineering />
      ) : currentView === 'application-development' ? (
        <ApplicationDevelopmentManagement />
      ) : currentView === 'cloud-modernization' ? (
        <CloudApplicationModernization />
      ) : currentView === 'data-modernization' ? (
        <DataAnalyticsModernization />
      ) : currentView === 'data-security' ? (
        <DataApplicationSecurity />
      ) : (
        <BankingFinancialServices />
      )}

      {/* Newsletter, Badge Certs, Footer columns */}
      <Footer />
    </div>
  );
}

export default App;
