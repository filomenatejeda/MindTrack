const translations = {
    en: {
      welcome: "Welcome",
      login: "Login",
      dashboard: "Dashboard",
      logout: "Logout"
    },
    es: {
      welcome: "Bienvenido",
      login: "Iniciar Sesión",
      dashboard: "Tablero",
      logout: "Cerrar Sesión"
    }
  };
  
  export const translate = (key, language) => {
    return translations[language][key] || translations['en'][key];
  };
  