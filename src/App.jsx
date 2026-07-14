import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import AboutPage from '@/pages/AboutPage';
import ProjectsPage from '@/pages/ProjectsPage';
import ContactPage from '@/pages/ContactPage';
import ServiceDetailPage from '@/pages/ServiceDetailPage';
import LocalSeoPage from '@/pages/LocalSeoPage';
import { Toaster } from '@/components/ui/toaster';
import GoogleTag from '@/components/GoogleTag';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [pathname]);

  return null;
}

function App() {
  useEffect(() => {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }, []);

  return (
    <Router>
      <GoogleTag />
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-gray-900 transition-colors duration-300">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/services" element={<ProjectsPage />} />
            <Route path="/hizmetler/:slug" element={<ServiceDetailPage />} />
            <Route path="/kayseri-dogalgaz-hizmetleri" element={<LocalSeoPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
