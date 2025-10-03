import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import PortfolioItemPage from './pages/PortfolioItemPage';

const AppContent: React.FC = () => {
  const { language, translations } = useLanguage();
  const [announcement, setAnnouncement] = React.useState('');
  const isInitialMount = React.useRef(true);
  const location = useLocation();


  React.useEffect(() => {
    document.documentElement.lang = language;
    if (isInitialMount.current) {
      // Don't announce on first render
    } else {
      setAnnouncement(translations.announcements.languageChanged);
    }
  }, [language, translations.announcements.languageChanged]);

  React.useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    const timer = setTimeout(() => {
      // Announce the new page title to screen readers
      if (document.title) {
        setAnnouncement(document.title);
      }
    }, 200); // Delay to allow the new page to render and title to update

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-secondary dark:bg-slate-900">
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {announcement}
      </div>
      <Header />
      <main key={location.pathname} className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 animate-fade-in">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/portfolio/:slug" element={<PortfolioItemPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <HashRouter>
          <AppContent />
        </HashRouter>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;