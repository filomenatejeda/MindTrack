// utils/i18n.js
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

const getInitialLanguage = () => {
  if (typeof window === 'undefined') {
    // Obtener el idioma preferido desde las cabeceras del navegador o usa 'es' por defecto
    return 'es'; 
  } else {
    return localStorage.getItem('language') || 'es';
  }
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
          note: "Note",
          hide: "Hide",
          logout: "Log out",
          notess: "Notes",
          calendar:"Calendar",

          //Emociones
          veryhappy: "Very Happy",
                happy: "Happy",
                neutral: "Neutral",
                sad: "Sad",
                crying: "Crying",

          //Calendario
          emotions_calendar:"Calendar of Emotions",
          intoemotions_calendar:"Monitor your emotions on a daily basis",
          howdoyoufeel: "How do you feel?",
          statistics_emotions:"Statistics Emotions",
          insufficient_data:"There is insufficient data to show.",

          //Recursos educativos
          educational_resources:"Educational Resources",
          intoeducational_resources:"A collection of valuable resources to support your emotional and mental well-being. From informative articles to inspirational videos and podcasts, our goal is to provide you with tools and insights to help you better understand your mental health and develop strategies to improve it. Explore the resources available and choose those that resonate with you on your path to a more balanced and fulfilling life.",

          //Articulos
          anxietydisorders:"Anxiety disorders",
          intoanxiety:"This article provides an in-depth look at anxiety disorders, their prevalence and their impact on daily life.",
          definition_anxiety:"Definition and Perception of Anxiety",
          intodefinition_anxiety:"People often label anxiety sufferers with derogatory terms, which can lead to additional suffering. Anxiety is a normal feeling of fear, but it can become pathological when it occurs for no real reason.",


          stressmanagement:"Stress Management Guide",

          read_more:"Read More",
          PDF:"Click on the cover to view the PDF",

          view_more:"View More",
          show_less:"Show Less",

          // Techniques
          meditation: "Meditation",
          intomeditation: "A technique that helps to calm the mind and reduce stress through mindfulness.",

          deepbreathing: "Deep Breathing", 
          intobreathing: "Breathing exercises to relax the body and reduce anxiety.",

          intoyoga:"A practice that combines physical postures, breathing and meditation to improve well-being. ",

          visualization:"Visualization",
          intovisualization: "Technique that involves imagining a calm place or situation to promote relaxation.",

          intomindfulness:"Practice of being present in the present moment, without judgment, to reduce anxiety and stress.",

          muscleprogression:"Muscle Progression",
          intomuscle: "Technique that consists of tensing and relaxing different muscle groups to release tension.",

          musiclistening: "Music Listening",
          intomusic:"Use relaxing music to improve mood and reduce stress.", 

          naturewalk:"Nature Walk",
          intowalk: "Go for a walk outdoors in a natural environment to relax the mind and body.",

          relaxationtechnique:"Relaxation Technique 5-4-3-2-1", 
          intorelaxation: "Method that uses the senses to reduce anxiety by identifying 5 things you see, 4 things you feel, 3 things you hear, 2 things you smell and 1 thing you can taste.",   
          aromatherapy:"Aromatherapy",
          intoaromatherapy:"Use of essential oils to promote relaxation and emotional well-being.", 


          
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
          
          descriptionvideos:"Mira videos que explican conceptos de salud mental, ofrecen técnicas de relajación y comparten testimonios inspiradores.",
  
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
          homedescription: "En MindTrack, tu bienestar es nuestra prioridad. Este es un lugar seguro para desahogarte y buscar ayuda. Explora nuestras herramientas y recuerda, no estás solo; estamos aquí para apoyarte.",
          feeling: "¿Como estas el dia de hoy?",
          days: "Días Anteriores",
          notes: "Notas Recientes",
          gonotes:"Ir a Notas",
          professionals: "Profesionales",
          techniques: "Ejercicios y Técnicas de Relajación",
          note: "Nota",
          hide: "Esconder",
          logout: "Cerrar Sesion",
          notess: "Notas",
          calendar:"Calendario",

           //Emociones
           veryhappy: "Muy feliz",
           happy: "Feliz",
           neutral: "Neutral",
           sad: "Triste",
           crying: "Llorando",

          //Calendario
          emotions_calendar:"Calendario de Emociones",
          intoemotions_calendar:"Monitorea tus emociones día a día",
          howdoyoufeel: "¿Cómo te sientes?:",
          statistics_emotions:"Estadísticas Emociones",
          insufficient_data:"No hay datos suficientes para mostrar.",


          //Recursos educativos
          educational_resources: "Recursos Educativos",
          intoeducational_resources:"Recopilación de recursos valiosos para apoyar tu bienestar emocional y mental. Desde artículos informativos hasta videos y podcasts inspiradores, nuestro objetivo es proporcionarte herramientas y conocimientos que te ayuden a comprender mejor tu salud mental y a desarrollar estrategias para mejorarla. Explora los recursos disponibles y elige aquellos que más resuenen contigo en tu camino hacia una vida más equilibrada y plena.",
          //Articulos 
          anxietydisorders:"Los trastornos de Ansiedad",
          intoanxiety: "Este artículo proporciona una visión profunda sobre los trastornos de ansiedad, su prevalencia y su impacto en la vida diaria.",
          definition_anxiety:"Definición y Percepción de la Ansiedad",
          intodefinition_anxiety:"A menudo, las personas catalogan a quienes sufren de ansiedad con términos despectivos, lo que puede llevar a un sufrimiento adicional. La ansiedad es un sentimiento normal de temor, pero puede volverse patológica cuando ocurre sin un motivo real.",

          stressmanagement:"Guía de Gestión del Estrés",


          read_more:"Leer más",
          PDF:"Haz clic en la portada para ver el PDF",

          videos: "Videos Educativos",

          podcast: "Podcasts",

          view_more:"Ver más",
          show_less:"Ver menos",


          // Techniques
          meditation: "Meditación",
          meditationtechnique:"Una técnica que ayuda a calmar la mente y reducir el estrés a través de la atención plena.",

          deepbreathing: "Respiración Profunda", 
          breathingexercises: "Ejercicios de respiración para relajar el cuerpo y disminuir la ansiedad.",

          practiceyoga:"Una práctica que combina posturas físicas, respiración y meditación para mejorar el bienestar.",

          visualization:"Visualización",
          visualizationtechnique: "Técnica que implica imaginar un lugar o situación tranquila para promover la relajación.",

          practicemindfulness:"Práctica de estar presente en el momento actual, sin juicio, para reducir la ansiedad y el estrés.",

          muscleprogression:"Progresión Muscular",
          techniquemuscle:"Técnica que consiste en tensar y relajar diferentes grupos musculares para liberar tensión.",

          musiclistening: "Escucha de Música",
          usemusic:"Utilizar música relajante para mejorar el estado de ánimo y reducir el estrés.",

          naturewalk:"Caminata en la Naturaleza",
          walkoutdoors:"Salir a caminar al aire libre en un entorno natural para relajar la mente y el cuerpo.",

          relaxationtechnique:"Técnica de Relajación de 5-4-3-2-1",
          intorelaxation:"Método que utiliza los sentidos para reducir la ansiedad al identificar 5 cosas que ves, 4 que sientes, 3 que oyes, 2 que hueles y 1 que puedes saborear.",

          aromatherapy:"Aromaterapia",
          intoaromatherapy:"Uso de aceites esenciales para promover la relajación y el bienestar emocional.",

        },
      },
    },
  });

export default i18next;





