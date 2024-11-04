// context/LanguageContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import i18next from '../utils/i18n';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedLanguage = localStorage.getItem('language');
      const lang = storedLanguage || 'en'; // Fallback a 'en' si no hay ninguno
      setLanguage(lang);
      i18next.changeLanguage(lang);
    }
  }, []);

  const changeLanguage = (lng) => {
    setLanguage(lng);
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lng); // Guarda el idioma solo en el cliente
    }
    i18next.changeLanguage(lng);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
