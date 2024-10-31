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
          welcome: "Welcome to MindTrack",
          description: "A platform to improve your emotional and mental well-being through daily monitoring, healthy habits and connection with professionals.",
          footer: "2024 MindTrack. All rights reserved.",
          user: "UserName",
          password: "Password",
          enter: "Enter",
          register: "Register",
          name: "First Name",
          lastname: "Last Name",
          email: "Email",
          haveanaccount:"I already have an account" 

        
        },
      },
      es: {
        translation: {
          home: "Inicio",
          login: "Iniciar Sesión",
          welcome: "Bienvenido a MindTrack",
          description: "Una plataforma para mejorar tu bienestar emocional y mental a través de seguimiento diario, hábitos saludables y conexión con profesionales.",
          footer: "2024 MindTrack. Todos los derechos reservados.",
          user: "Nombre de usuario",
          password: "Contraseña",
          enter: "Entrar",
          register: "Registrarse",
          name: "Nombre",
          lastname: "Apellido",
          email: "Correo electronico",
          haveanaccount:"Ya tengo una cuenta" 
        },
      },
    },
  });

export default i18next;





