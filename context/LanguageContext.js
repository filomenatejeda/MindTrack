import React, { createContext, useContext, useState, useEffect } from 'react';
import i18next from '../utils/i18n';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // Verifica si estamos en el navegador antes de acceder a localStorage
    if (typeof window !== 'undefined') {
      return localStorage.getItem('language') || 'en';
    }
    return 'en'; // Idioma por defecto en el servidor
  });

  const changeLanguage = (lng) => {
    setLanguage(lng);
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lng); // Guarda el idioma en localStorage
    }
    i18next.changeLanguage(lng); // Cambia el idioma de i18next
  };

  useEffect(() => {
    i18next.changeLanguage(language);
  }, [language]);

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

