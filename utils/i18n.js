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
          description: "MindTrack is a platform focused on monitoring and improving mental health, focusing on tracking emotions and practicing healthy habits. At MindTrack we offer a safe and accessible space to promote emotional and personal well-being. Our mission is to support you on your path to a more balanced and fulfilling life.",
          footer: "2024 MindTrack. All rights reserved.",
          user: "UserName",
          password: "Password",
          enter: "Enter",
          register: "Register",
          name: "First Name",
          lastname: "Last Name",
          email: "Email",
          haveanaccount:"I already have an account" ,
          begin: "Start now",
          features: "Main Features",
          dailyemotions: "Daily Emotions Log",
          descriptionemotion: "Record your emotions daily, detect patterns and write personal reflections to understand yourself better.",
          exercises: "Relaxation exercises",
          descriptionexercises: "Practice breathing and meditation techniques with reminders to take care of your well-being.",
          habits: "Healthy Habits",
          descriptionhabits: "Create and follow healthy habits that promote your mental and physical well-being.",
          
        
        },
      },
      es: {
        translation: {
          home: "Inicio",
          login: "Iniciar Sesión",
          welcome: "Bienvenido a MindTrack",
          description: "MindTrack es una plataforma centrada en el monitoreo y la mejora de la salud mental, enfocándose en el seguimiento de emociones y la práctica de hábitos saludables. En MindTrack ofrecemos un espacio seguro y accesible para fomentar el bienestar emocional y personal. Nuestra misión es apoyarte en tu camino hacia una vida más equilibrada y plena.",
          footer: "2024 MindTrack. Todos los derechos reservados.",
          user: "Nombre de usuario",
          password: "Contraseña",
          enter: "Entrar",
          register: "Registrarse",
          name: "Nombre",
          lastname: "Apellido",
          email: "Correo electronico",
          haveanaccount:"Ya tengo una cuenta", 
          begin: "Comienza ahora",
          features: "Funcionalidades Principales",
          dailyemotions: "Registro Diario de Emociones",
          descriptionemotion:"Registra tus emociones diariamente, detecta patrones y escribe reflexiones personales para entenderte mejor.",
          exercises: "Ejercicios de Relajación",
          descriptionexercises: "Practica técnicas de respiración y meditación con recordatorios para cuidar tu bienestar.",
          habits: "Hábitos Saludables",
          descriptionhabits: "Crea y sigue hábitos saludables que promuevan tu bienestar mental y físico.",

        },
      },
    },
  });

export default i18next;





