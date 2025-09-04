import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Footer: React.FC = () => {
  const { translations } = useLanguage();
  return (
    <footer className="bg-white dark:bg-slate-800 border-t border-gray-200 dark:border-slate-700">
      <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-sm text-text-secondary dark:text-slate-400">
        <nav aria-label={translations.ariaLabels.socialNav} className="mb-4">
            <ul className="flex justify-center space-x-6">
                <li>
                    <a href="mailto:petroslamb@gmail.com" className="hover:text-primary dark:hover:text-cyan-400 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary rounded-sm" aria-label="Email">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0a2.25 2.25 0 00-2.25-2.25h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                    </a>
                </li>
                <li>
                    <a href="https://linkedin.com/in/petroslamb" target="_blank" rel="noopener noreferrer" className="hover:text-primary dark:hover:text-cyan-400 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary rounded-sm" aria-label="LinkedIn">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" fill="currentColor" /></svg>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/petroslamb" target="_blank" rel="noopener noreferrer" className="hover:text-primary dark:hover:text-cyan-400 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary rounded-sm" aria-label="GitHub">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6.1 0-1.3-.5-2.4-1.3-3.2.1-.3.5-1.5-.1-3.2 0 0-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1c-.6 1.7-.2 2.9-.1 3.2-.8.8-1.3 1.9-1.3 3.2 0 4.7 2.7 5.8 5.5 6.1-.6.5-.9 1.4-.9 2.8v4.2" /></svg>
                    </a>
                </li>
            </ul>
        </nav>
        <p>{translations.footer.copyright}</p>
        <p>{translations.footer.availability}</p>
      </div>
    </footer>
  );
};

export default Footer;
