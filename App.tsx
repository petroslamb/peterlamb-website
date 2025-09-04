import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';

const AppContent: React.FC = () => {
  const { language, translations } = useLanguage();
  const [announcement, setAnnouncement] = React.useState('');
  const isInitialMount = React.useRef(true);


  React.useEffect(() => {
    document.documentElement.lang = language;
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      setAnnouncement(translations.announcements.languageChanged);
    }
  }, [language, translations.announcements.languageChanged]);

  return (
    <div className="flex flex-col min-h-screen bg-secondary">
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {announcement}
      </div>
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <HashRouter>
        <AppContent />
      </HashRouter>
    </LanguageProvider>
  );
};

export default App;