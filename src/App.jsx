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
import AnalyticsBiDashboards from './components/AnalyticsBiDashboards';
import GenAiSolutions from './components/GenAiSolutions';
import IntelligentAutomation from './components/IntelligentAutomation';
import AppliedAiMachineLearning from './components/AppliedAiMachineLearning';
import ComputerMachineVision from './components/ComputerMachineVision';
import DataApplicationSecurity from './components/DataApplicationSecurity';
import BankingFinancialServices from './components/BankingFinancialServices';
import DigitalTransformationConsulting from './components/DigitalTransformationConsulting';
import SapConsultingServices from './components/SapConsultingServices';
import PlmServices from './components/PlmServices';
import QualityEngineeringTestAutomation from './components/QualityEngineeringTestAutomation';
import ProductEngineeringSupport from './components/ProductEngineeringSupport';
import EmbeddedSoftwareFirmware from './components/EmbeddedSoftwareFirmware';
import EeSystemsEngineering from './components/EeSystemsEngineering';
import ProductSustenanceLifecycle from './components/ProductSustenanceLifecycle';
import TestingValidationSupport from './components/TestingValidationSupport';
import EngineeringDocumentationDrafting from './components/EngineeringDocumentationDrafting';
import AboutUsPage from './components/AboutUsPage';

function App() {
  const getInitialView = () => {
    const path = window.location.pathname;
    if (path.includes('product-platform-engineering')) return 'product-engineering';
    if (path.includes('application-development-management')) return 'application-development';
    if (path.includes('cloud-application-modernization')) return 'cloud-modernization';
    if (path.includes('analytics-bi-dashboards')) return 'analytics-bi';
    if (path.includes('gen-ai-solutions')) return 'gen-ai';
    if (path.includes('intelligent-automation')) return 'intelligent-automation';
    if (path.includes('applied-ai-machine-learning')) return 'applied-ai';
    if (path.includes('computer-machine-vision')) return 'computer-vision';
    if (path.includes('data-analytics-modernization')) return 'data-modernization';
    if (path.includes('data-application-security')) return 'data-security';
    if (path.includes('banking-financial-services')) return 'banking-services';
    if (path.includes('digital-transformation-consulting')) return 'digital-transformation';
    if (path.includes('sap-consulting-services')) return 'sap-consulting';
    if (path.includes('plm-services')) return 'plm-services';
    if (path.includes('quality-engineering')) return 'quality-engineering';
    if (path.includes('product-engineering-support')) return 'product-engineering-support';
    if (path.includes('embedded-software-firmware')) return 'embedded-software-firmware';
    if (path.includes('ee-systems-engineering')) return 'ee-systems-engineering';
    if (path.includes('product-sustenance-lifecycle')) return 'product-sustenance-lifecycle';
    if (path.includes('testing-validation-support')) return 'testing-validation-support';
    if (path.includes('engineering-documentation-drafting')) return 'engineering-documentation-drafting';
    if (path.includes('about-us')) return 'about-us';
    return 'home';
  };

  // Main view router state ('home' | 'product-engineering' | 'application-development' | 'cloud-modernization' | 'analytics-bi' | 'gen-ai' | 'intelligent-automation' | 'applied-ai' | 'computer-vision')
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
    } else if (view === 'analytics-bi') {
      path = '/data-ai/analytics-bi-dashboards';
    } else if (view === 'gen-ai') {
      path = '/data-ai/gen-ai-solutions';
    } else if (view === 'intelligent-automation') {
      path = '/data-ai/intelligent-automation';
    } else if (view === 'applied-ai') {
      path = '/data-ai/applied-ai-machine-learning';
    } else if (view === 'computer-vision') {
      path = '/data-ai/computer-machine-vision';
    } else if (view === 'data-modernization') {
      path = '/data-ai/data-analytics-modernization';
    } else if (view === 'data-security') {
      path = '/cyber-security/data-application-security';
    } else if (view === 'banking-services') {
      path = '/industries/banking-financial-services';
    } else if (view === 'digital-transformation') {
      path = '/digital-engineering-services/digital-transformation-consulting';
    } else if (view === 'sap-consulting') {
      path = '/digital-engineering-services/sap-consulting-services';
    } else if (view === 'plm-services') {
      path = '/digital-engineering-services/plm-services';
    } else if (view === 'quality-engineering') {
      path = '/digital-engineering-services/quality-engineering-test-automation';
    } else if (view === 'product-engineering-support') {
      path = '/engineering-services/product-engineering-support';
    } else if (view === 'embedded-software-firmware') {
      path = '/engineering-services/embedded-software-firmware';
    } else if (view === 'ee-systems-engineering') {
      path = '/engineering-services/ee-systems-engineering';
    } else if (view === 'product-sustenance-lifecycle') {
      path = '/engineering-services/product-sustenance-lifecycle';
    } else if (view === 'testing-validation-support') {
      path = '/engineering-services/testing-validation-support';
    } else if (view === 'engineering-documentation-drafting') {
      path = '/engineering-services/engineering-documentation-drafting';
    } else if (view === 'about-us') {
      path = '/company/about-us';
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
      } else if (path.includes('analytics-bi-dashboards')) {
        setCurrentView('analytics-bi');
      } else if (path.includes('gen-ai-solutions')) {
        setCurrentView('gen-ai');
      } else if (path.includes('intelligent-automation')) {
        setCurrentView('intelligent-automation');
      } else if (path.includes('applied-ai-machine-learning')) {
        setCurrentView('applied-ai');
      } else if (path.includes('computer-machine-vision')) {
        setCurrentView('computer-vision');
      } else if (path.includes('data-analytics-modernization')) {
        setCurrentView('data-modernization');
      } else if (path.includes('data-application-security')) {
        setCurrentView('data-security');
      } else if (path.includes('banking-financial-services')) {
        setCurrentView('banking-services');
      } else if (path.includes('digital-transformation-consulting')) {
        setCurrentView('digital-transformation');
      } else if (path.includes('sap-consulting-services')) {
        setCurrentView('sap-consulting');
      } else if (path.includes('plm-services')) {
        setCurrentView('plm-services');
      } else if (path.includes('quality-engineering')) {
        setCurrentView('quality-engineering');
      } else if (path.includes('product-engineering-support')) {
        setCurrentView('product-engineering-support');
      } else if (path.includes('embedded-software-firmware')) {
        setCurrentView('embedded-software-firmware');
      } else if (path.includes('ee-systems-engineering')) {
        setCurrentView('ee-systems-engineering');
      } else if (path.includes('product-sustenance-lifecycle')) {
        setCurrentView('product-sustenance-lifecycle');
      } else if (path.includes('testing-validation-support')) {
        setCurrentView('testing-validation-support');
      } else if (path.includes('engineering-documentation-drafting')) {
        setCurrentView('engineering-documentation-drafting');
      } else if (path.includes('about-us')) {
        setCurrentView('about-us');
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
      ) : currentView === 'analytics-bi' ? (
        <div className="bg-white text-slate-900 w-full">
          <AnalyticsBiDashboards />
        </div>
      ) : currentView === 'gen-ai' ? (
        <div className="bg-white text-slate-900 w-full">
          <GenAiSolutions />
        </div>
      ) : currentView === 'intelligent-automation' ? (
        <div className="bg-white text-slate-900 w-full">
          <IntelligentAutomation />
        </div>
      ) : currentView === 'applied-ai' ? (
        <div className="bg-white text-slate-900 w-full">
          <AppliedAiMachineLearning />
        </div>
      ) : currentView === 'computer-vision' ? (
        <div className="bg-white text-slate-900 w-full">
          <ComputerMachineVision />
        </div>
      ) : currentView === 'data-modernization' ? (
        <div className="bg-white text-slate-900 w-full">
          <DataAnalyticsModernization />
        </div>
      ) : currentView === 'data-security' ? (
        <div className="bg-white text-slate-900 w-full">
          <DataApplicationSecurity />
        </div>
      ) : currentView === 'digital-transformation' ? (
        <div className="bg-white text-slate-900 w-full">
          <DigitalTransformationConsulting />
        </div>
      ) : currentView === 'sap-consulting' ? (
        <div className="bg-white text-slate-900 w-full">
          <SapConsultingServices />
        </div>
      ) : currentView === 'plm-services' ? (
        <div className="bg-white text-slate-900 w-full">
          <PlmServices />
        </div>
      ) : currentView === 'quality-engineering' ? (
        <div className="bg-white text-slate-900 w-full">
          <QualityEngineeringTestAutomation />
        </div>
      ) : currentView === 'product-engineering-support' ? (
        <div className="bg-white text-slate-900 w-full">
          <ProductEngineeringSupport />
        </div>
      ) : currentView === 'embedded-software-firmware' ? (
        <div className="bg-white text-slate-900 w-full">
          <EmbeddedSoftwareFirmware />
        </div>
      ) : currentView === 'ee-systems-engineering' ? (
        <div className="bg-white text-slate-900 w-full">
          <EeSystemsEngineering />
        </div>
      ) : currentView === 'product-sustenance-lifecycle' ? (
        <div className="bg-white text-slate-900 w-full">
          <ProductSustenanceLifecycle />
        </div>
      ) : currentView === 'testing-validation-support' ? (
        <div className="bg-white text-slate-900 w-full">
          <TestingValidationSupport />
        </div>
      ) : currentView === 'engineering-documentation-drafting' ? (
        <div className="bg-white text-slate-900 w-full">
          <EngineeringDocumentationDrafting />
        </div>
      ) : currentView === 'banking-services' ? (
        <div className="bg-white text-slate-900 w-full">
          <BankingFinancialServices />
        </div>
      ) : (
        <div className="bg-white text-slate-900 w-full">
          <AboutUsPage onContactClick={() => setIsContactOpen(true)} />
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
