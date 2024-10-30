// utils/i18n.js
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

const getInitialLanguage = () => {
  // Comprobación para asegurarse de que estamos en el cliente
  if (typeof window !== 'undefined') {
    return localStorage.getItem('language') || 'en'; // Carga el idioma de localStorage o usa 'en' por defecto
  }
  return 'en'; // Fallback en el servidor
};

i18next
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    lng: getInitialLanguage(), // Usa la función para obtener el idioma
    resources: {
      en: {
        translation: {
          home: "Home",
          login: "Login",
          welcome: "Welcome",
        },
      },
      es: {
        translation: {
          home: "Inicio",
          login: "Iniciar Sesión",
          welcome: "Bienvenido",
        },
      },
    },
  });

export default i18next;





