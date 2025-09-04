
import React, { createContext, useState, useContext, ReactNode, useCallback } from 'react';
import { Language, Content } from '../types';
import { content } from '../constants/content';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  translations: Content;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const handleSetLanguage = useCallback((lang: Language) => {
    setLanguage(lang);
  }, []);

  const value = {
    language,
    setLanguage: handleSetLanguage,
    translations: content[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
