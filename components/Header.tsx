import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const LanguageSwitcher: React.FC = () => {
    const { language, setLanguage } = useLanguage();

    const switchLanguage = (lang: 'en' | 'gr') => {
        setLanguage(lang);
    };

    return (
        <div className="flex items-center space-x-1">
            <button
                onClick={() => switchLanguage('en')}
                className={`px-2 py-1 text-sm rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary ${language === 'en' ? 'font-bold text-primary' : 'text-text-secondary hover:text-text-primary'}`}
                aria-pressed={language === 'en'}
            >
                EN
            </button>
            <span className="text-text-secondary">|</span>
            <button
                onClick={() => switchLanguage('gr')}
                className={`px-2 py-1 text-sm rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary ${language === 'gr' ? 'font-bold text-primary' : 'text-text-secondary hover:text-text-primary'}`}
                aria-pressed={language === 'gr'}
            >
                GR
            </button>
        </div>
    );
};


const Header: React.FC = () => {
  const { translations } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isMenuOpen) {
      const firstFocusable = menuRef.current?.querySelector('a') as HTMLAnchorElement | null;
      firstFocusable?.focus();

      const handleEscape = (e: KeyboardEvent) => {
          if (e.key === 'Escape') {
              setIsMenuOpen(false);
          }
      };
      document.addEventListener('keydown', handleEscape);

      return () => {
          document.removeEventListener('keydown', handleEscape);
          menuButtonRef.current?.focus();
      };
    }
  }, [isMenuOpen]);
  
  const navLinks = [
    { path: '/', label: translations.nav.home },
    { path: '/about', label: translations.nav.about },
    { path: '/services', label: translations.nav.services },
    { path: '/portfolio', label: translations.nav.portfolio },
    { path: '/contact', label: translations.nav.contact },
  ];

  const linkClasses = "px-3 py-2 rounded-md text-sm font-medium transition-colors";
  const activeLinkClasses = "bg-blue-50 text-primary";
  const inactiveLinkClasses = "text-text-secondary hover:bg-gray-100 hover:text-text-primary";

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="flex-shrink-0 text-primary font-bold text-lg" aria-label="Homepage">
                Peter Lamb
            </NavLink>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) => `${linkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`}
                >
                  {link.label}
                </NavLink>
              ))}
               <LanguageSwitcher />
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
             <div className="mr-4">
                <LanguageSwitcher />
             </div>
            <button
              ref={menuButtonRef}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="bg-white inline-flex items-center justify-center p-2 rounded-md text-text-secondary hover:text-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu" ref={menuRef}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? activeLinkClasses : inactiveLinkClasses}`}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;