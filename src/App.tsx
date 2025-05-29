import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Blog from './pages/Blog.jsx';
import Contact from './pages/Contact';
import './styles/style.css';
import './components/custom/CustomButton/styles.module.css';
import './components/custom/Image/styles.module.css';
import FooterTest from './components/Footer';
import ContactSection from './components/connection/Connect';
import QuizPopup from './components/QuizApp';
import ScrollToTop from './components/ScrollToTop';
import BusinessStrategy from './pages/servicesPage/BusinessStrategy';
import BrandingServices from './pages/servicesPage/Branding';
import DigitalPresenceSetup from './pages/servicesPage/DigitalPresence';
import SalesFunnelLeadEngine from './pages/servicesPage/SalesFunnel';
import ContentLeadership from './pages/servicesPage/ContentLeadership';
import MentorshipPage from './pages/servicesPage/Mentorship';
import CaseStudiesPage from './pages/CaseStudies.jsx';
import BlogDetail from './pages/BlogDetail';
import CaseStudyDetails from './pages/CasestudiesDetail';
import QuizUsersDashboard from './pages/QuizUsersList';

function App() {

  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/business-strategy" element={<BusinessStrategy />} />
          <Route path="/services/branding" element={<BrandingServices />} />
          <Route path="/services/digital-presence" element={<DigitalPresenceSetup />} />
          <Route path="/services/sales-funnel" element={<SalesFunnelLeadEngine />} />
          <Route path="/services/content-leadership" element={<ContentLeadership />} />
          <Route path="/services/mentorship" element={<MentorshipPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/case-studies/:slug" element={<CaseStudyDetails />} />
          <Route path="/quiz-dashboard" element={<QuizUsersDashboard />} />
          /
        </Routes>
        <QuizPopup />
        <ContactSection />
        <FooterTest />
      </div>

    </Router>

  );
}

export default App; 