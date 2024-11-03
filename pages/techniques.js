// pages/techniques.js
import React from 'react';
import RelaxationCard from '../components/RelaxationCard';
import NavbarH from '../components/NavbarH';
import { useTranslation } from 'react-i18next';
import Footer from '../components/Footer';

const Techniques = () => {
  const { t } = useTranslation();
  const techniquesList = [
    {
      title: 'Meditación',
      description: 'Una técnica que ayuda a calmar la mente y reducir el estrés a través de la atención plena.',
      image: 'https://meditaporelmundo.com/wp-content/uploads/Dibujo-meditando-1-07-scaled-500x507.jpg',
      link: '/ejercicios/meditacion', // URL de destino
    },
    {
      title: 'Respiración Profunda',
      description: 'Ejercicios de respiración para relajar el cuerpo y disminuir la ansiedad.',
      image: 'https://png.pngtree.com/png-clipart/20230914/original/pngtree-deep-breathing-clipart-man-breathing-vector-illustration-on-isolated-background-cartoon-png-image_11244870.png',
      link: '/deep-breathing', // URL de destino
    },
    {
      title: 'Yoga',
      description: 'Una práctica que combina posturas físicas, respiración y meditación para mejorar el bienestar.',
      image: 'https://contents.mediadecathlon.com/s905225/k$d79639ef928b78aa12799d2733bbbbf4/1920x0/1503pt1228/3005xcr2254/posture_yoga.png?format=auto',
      link: '/yoga', // URL de destino
    },
    {
      title: 'Visualización',
      description: 'Técnica que implica imaginar un lugar o situación tranquila para promover la relajación.',
      image: 'https://i.ytimg.com/vi/rcb-1cL-ICc/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGH8gMig-MA8=&rs=AOn4CLB4iMbDB9azFPcxIZLfL44JvRNiqQ',
      link: '/visualization', // URL de destino
    },
    {
      title: 'Mindfulness',
      description: 'Práctica de estar presente en el momento actual, sin juicio, para reducir la ansiedad y el estrés.',
      image: 'https://concienciasaludable.uchile.cl/wp-content/uploads/2024/01/istockphoto-1152830331-612x612-1.jpg',
      link: '/mindfulness', // URL de destino
    },
    {
      title: 'Progresión Muscular',
      description: 'Técnica que consiste en tensar y relajar diferentes grupos musculares para liberar tensión.',
      image: 'https://www.strong4life.com/-/media/Strong4Life/emotional-wellness/coping/practicing-deep-breathing/deep_breathing_boy.jpg',
      link: '/muscle-relaxation', // URL de destino
    },
    {
      title: 'Escucha de Música',
      description: 'Utilizar música relajante para mejorar el estado de ánimo y reducir el estrés.',
      image: 'https://img.freepik.com/vector-premium/mujer-escuchar-musica-vector_942421-60.jpg',
      link: '/music-listening', // URL de destino
    },
    {
      title: 'Caminata en la Naturaleza',
      description: 'Salir a caminar al aire libre en un entorno natural para relajar la mente y el cuerpo.',
      image: 'https://static.vecteezy.com/system/resources/previews/006/409/432/non_2x/adventure-tour-on-the-theme-of-climbing-trekking-hiking-walking-or-vacation-with-forest-and-mountain-views-in-flat-nature-background-poster-illustration-vector.jpg',
      link: '/nature-walk', // URL de destino
    },
    {
      title: 'Técnica de Relajación de 5-4-3-2-1',
      description: 'Método que utiliza los sentidos para reducir la ansiedad al identificar 5 cosas que ves, 4 que sientes, 3 que oyes, 2 que hueles y 1 que puedes saborear.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbiAXjoMbfIKwiNZBPskjzfDy8tmzdBkuxPQ&s',
      link: '/54321-technique', // URL de destino
    },
    {
      title: 'Aromaterapia',
      description: 'Uso de aceites esenciales para promover la relajación y el bienestar emocional.',
      image: 'https://img.freepik.com/vector-premium/ilustracion-vector-dibujos-animados-aislados-aromaterapia_107173-27880.jpg',
      link: '/aromatherapy', // URL de destino
    }
  ];

  return (
    <div>
      <NavbarH />
      <script src="https://cdn.tailwindcss.com"></script>
      <div className="bg-gradient-to-b to-blue-200 from-teal-200 min-h-screen p-8">
        <h1 className="text-4xl font-bold text-center mb-6 text-teal-800">{t('techniques')}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techniquesList.map((technique, index) => (
            <RelaxationCard key={index} technique={technique} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Techniques;
