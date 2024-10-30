// context/LanguageContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import i18next from '../utils/i18n'; // Asegúrate de importar i18next

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'en'); // Carga el idioma de localStorage o usa 'en' por defecto

  const changeLanguage = (lng) => {
    setLanguage(lng);
    localStorage.setItem('language', lng); // Guarda el idioma en localStorage
    i18next.changeLanguage(lng); // Cambia el idioma de i18next
  };

  // Sincroniza i18next con el idioma actual
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





