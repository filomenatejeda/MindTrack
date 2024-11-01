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
          dailyemotion: "Daily Emotions Log",
          descriptiondailyemotion: "Record your emotions daily, detect patterns and write personal reflections to understand yourself better.",
          exercises: "Relaxation exercises",
          descriptionexercises: "Practice breathing and meditation techniques with reminders to take care of your well-being.",
          habits: "Healthy Habits",
          descriptionhabits: "Create and follow healthy habits that promote your mental and physical well-being.",
          conextion: "Connection with Professionals",
          descriptionconextion: "Connect with psychologists and therapists to get the professional support you need.",
          resourses: "Educational Resources",
          descriptionresourses:"Discover articles, videos and podcasts about mental health and receive personalized recommendations based on your emotional records.",
          articles: "Articles",
          descriptionarticles: "Access a wide variety of articles addressing topics such as anxiety, depression, stress management, and self-compassion techniques.",
          videos: "Educational Videos",
          descriptionvideos: "Watch videos that explain mental health concepts, offer relaxation techniques, and share inspiring testimonials.",
          podcast: "Podcasts",
          descriptionpodcast: "Listen to episodes about emotional well-being, coping strategies, and interviews with mental health experts.",
          resoursesi: "Interactive Resources",
          descriptioniresourses: "Use interactive tools such as quizzes, reflection exercises and self-help guides to improve your well-being.",
          communities: "Support Communities",
          descriptioncommunities: "Connect with support groups where you can share experiences and learn from others facing similar challenges.",
          recommendatios: "Personalized Recommendations",
          descriptionrecommendatios: "Receive suggestions for educational content and exercises based on your emotional records and personal needs.",
          ia: "Artificial Intelligence Module",
          descriptionia: "Our AI system detects emotional patterns and suggests personalized content, such as articles or exercises, based on your needs.",
          odss: "Impact on SDG 3",
          ods: "SDG 3", 
          descriptionods: "MindTrack contributes to SDG 3 by providing an affordable tool to improve mental health and overall well-being.",
          ai: "AI",
          homedescription: "At MindTrack, your wellbeing is our priority. This is a safe place to vent and seek help. Explore our tools and remember, you are not alone; we are here to support you.",
          feeling: "How are you today?",
          days: "Previous Days",
          notes: "Recent Notes",
          gonotes: "Go to Notes",
          professionals: "Professionals",
          techniques: "Relaxation exercises and techniques",


        
        },
      },
      es: {
        translation: {
          home: "Inicio",
          login: "Iniciar Sesión",
          welcome: "Bienvenido",
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
          dailyemotion: "Registro Diario de Emociones",
          descriptiondailyemotion:"Registra tus emociones diariamente, detecta patrones y escribe reflexiones personales para entenderte mejor.",
          exercises: "Ejercicios de Relajación",
          descriptionexercises: "Practica técnicas de respiración y meditación con recordatorios para cuidar tu bienestar.",
          habits: "Hábitos Saludables",
          descriptionhabits: "Crea y sigue hábitos saludables que promuevan tu bienestar mental y físico.",
          conextion: "Conexión con Profesionales",
          descriptionconextion: "Conéctate con psicólogos y terapeutas para obtener el apoyo profesional que necesitas.",
          resourses: "Recursos Educativos",
          descriptionresourses:"Descubre artículos, videos y podcasts sobre salud mental y recibe recomendaciones personalizadas basadas en tus registros emocionales.",
          articles: "Artículos",
          descriptionarticles: "Accede a una amplia variedad de artículos que abordan temas como la ansiedad, la depresión, el manejo del estrés y técnicas de autocompasión.",
          videos: "Videos Educativos",
          descriptionvideos:"Mira videos que explican conceptos de salud mental, ofrecen técnicas de relajación y comparten testimonios inspiradores.",
          podcast: "Podcasts",
          descriptionpodcast: "Escucha episodios sobre bienestar emocional, estrategias de superación y entrevistas con expertos en salud mental.",
          resoursesin: "Recursos Interactivos",
          descriptionresoursesin: "Utiliza herramientas interactivas como cuestionarios, ejercicios de reflexión y guías de autoayuda para mejorar tu bienestar.",
          communities: "Comunidades de Apoyo",
          descriptioncommunities: "Conéctate con grupos de apoyo donde puedes compartir experiencias y aprender de otros que enfrentan desafíos similares.",
          recommendations: "Recomendaciones Personalizadas",
          descriptionrecommendations: "Recibe sugerencias de contenido educativo y ejercicios basados en tus registros emocionales y necesidades personales.",
          ia: "Módulo de Inteligencia Artificial",
          descriptionia: "Nuestro sistema de IA detecta patrones emocionales y te sugiere contenido personalizado, como artículos o ejercicios, basado en tus necesidades.",
          odss: "Impacto en el ODS 3",
          ods: "ODS 3",
          descriptionods: "MindTrack contribuye al ODS 3, proporcionando una herramienta asequible para mejorar la salud mental y el bienestar general.",
          ai:"IA",
          homadescription: "En MindTrack, tu bienestar es nuestra prioridad. Este es un lugar seguro para desahogarte y buscar ayuda. Explora nuestras herramientas y recuerda, no estás solo; estamos aquí para apoyarte.",
          feeling: "¿Como estas el dia de hoy?",
          days: "Días Anteriores",
          notes: "Notas Recientes",
          gonotes:"Ir a Notas",
          professionals: "Profesionales",
          techniques: "Ejercicios y Técnicas de Relajación"



        },
      },
    },
  });

export default i18next;





