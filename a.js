// utils/i18n.js
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

// Define la función getInitialLanguage aquí
const getInitialLanguage = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('language') || 'es';
  }
  return 'es'; // Valor por defecto en servidor
};

i18next
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    lng: getInitialLanguage(), // Aquí utilizamos la función
    resources: {
      en: {
        translation: {
          // Traducciones en inglés
        },
      },
      es: {
        translation: {
          // Traducciones en español
        },
      },
    },
  });

export default i18next;

