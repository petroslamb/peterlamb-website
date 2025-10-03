import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import ThemeSwitcher from './ThemeSwitcher';

const LanguageSwitcher: React.FC = () => {
    const { language, setLanguage, translations } = useLanguage();

    const switchLanguage = (lang: 'en' | 'gr') => {
        setLanguage(lang);
    };

    return (
        <div className="flex items-center space-x-1">
            <button
                onClick={() => switchLanguage('en')}
                className={`px-2 py-1 text-sm rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary ${language === 'en' ? 'font-bold text-primary dark:text-cyan-400' : 'text-text-secondary dark:text-slate-400 hover:text-text-primary dark:hover:text-white'}`}
                aria-pressed={language === 'en'}
                aria-label={translations.ariaLabels.switchToEnglish}
            >
                EN
            </button>
            <span className="text-text-secondary dark:text-slate-600" aria-hidden="true">|</span>
            <button
                onClick={() => switchLanguage('gr')}
                className={`px-2 py-1 text-sm rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary ${language === 'gr' ? 'font-bold text-primary dark:text-cyan-400' : 'text-text-secondary dark:text-slate-400 hover:text-text-primary dark:hover:text-white'}`}
                aria-pressed={language === 'gr'}
                aria-label={translations.ariaLabels.switchToGreek}
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
    if (isMenuOpen && menuRef.current) {
      const focusableElements = Array.from(
        menuRef.current.querySelectorAll('a[href]:not([disabled])')
      ) as HTMLElement[];
      
      if (focusableElements.length === 0) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      firstElement.focus();

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setIsMenuOpen(false);
          return;
        }

        if (e.key === 'Tab') {
          if (e.shiftKey) { // Shift + Tab
            if (document.activeElement === firstElement) {
              lastElement.focus();
              e.preventDefault();
            }
          } else { // Tab
            if (document.activeElement === lastElement) {
              firstElement.focus();
              e.preventDefault();
            }
          }
        }
      };
      
      const menuNode = menuRef.current;
      menuNode.addEventListener('keydown', handleKeyDown);

      return () => {
        menuNode.removeEventListener('keydown', handleKeyDown);
        menuButtonRef.current?.focus();
      };
    }
  }, [isMenuOpen]);
  
  const navLinks = [
    { path: '/', label: translations.nav.home },
    { path: '/about', label: translations.nav.about },
    { path: '/services', label: translations.nav.services },
    { path: '/portfolio', label: translations.nav.portfolio },
    { path: '/blog', label: translations.nav.blog },
    { path: '/contact', label: translations.nav.contact },
  ];

  const focusStyles = "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary dark:focus-visible:ring-offset-slate-800";
  const linkClasses = `px-3 py-2 rounded-md text-sm font-medium transition-colors ${focusStyles}`;
  const activeLinkClasses = "bg-cyan-50 text-primary dark:bg-slate-700 dark:text-cyan-400";
  const inactiveLinkClasses = "text-text-secondary hover:bg-slate-100 hover:text-text-primary dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white";

  return (
    <header className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200 dark:border-slate-700">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label={translations.ariaLabels.mainNav}>
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className={`flex-shrink-0 text-slate-800 dark:text-white font-bold text-lg rounded-md ${focusStyles}`} aria-label="Peter Lamb - Homepage">
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
               <div className="flex items-center space-x-2 pl-2 border-l border-gray-200 dark:border-gray-600">
                <LanguageSwitcher />
                <ThemeSwitcher />
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden items-center">
             <div className="mr-4 flex items-center space-x-2">
                <LanguageSwitcher />
                <ThemeSwitcher />
             </div>
            <button
              ref={menuButtonRef}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="bg-white dark:bg-slate-800 inline-flex items-center justify-center p-2 rounded-md text-text-secondary dark:text-slate-400 hover:text-primary dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-slate-700" id="mobile-menu" ref={menuRef}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium transition-colors ${focusStyles} ${isActive ? activeLinkClasses : inactiveLinkClasses}`}
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
