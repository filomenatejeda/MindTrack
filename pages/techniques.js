// pages/techniques.js
'use client';
import React from 'react';
import RelaxationCard from '../components/RelaxationCard';
import NavbarH from '../components/NavbarH';
import { useTranslation } from 'react-i18next';
import Footer from '../components/Footer';



const Techniques = () => {
  const { t } = useTranslation();
  const techniquesList = [
    {
      title: <h suppressHydrationWarning={true}> {t('meditation')}</h>,
      description: <h suppressHydrationWarning={true}>{t('intomeditation')}</h>,
      image: 'https://meditaporelmundo.com/wp-content/uploads/Dibujo-meditando-1-07-scaled-500x507.jpg',
      link: '/ejercicios/meditacion', // URL de destino
    },
    {
      title: <h suppressHydrationWarning={true}> {t('deepbreathing')}</h>,
      description: <h suppressHydrationWarning={true}>{t('intobreathing')} </h>,
      image: 'https://png.pngtree.com/png-clipart/20230914/original/pngtree-deep-breathing-clipart-man-breathing-vector-illustration-on-isolated-background-cartoon-png-image_11244870.png',
      link: '/ejercicios/respiracion', // URL de destino
    },
    {
      title: 'Yoga',
      description: <h suppressHydrationWarning={true}>{t('intoyoga')} </h>,
      image: 'https://contents.mediadecathlon.com/s905225/k$d79639ef928b78aa12799d2733bbbbf4/1920x0/1503pt1228/3005xcr2254/posture_yoga.png?format=auto',
      link: '/ejercicios/yoga', // URL de destino
    },
    {
      title:<h suppressHydrationWarning={true}>{t('visualization')} </h> ,
      description: <h suppressHydrationWarning={true}> {t('intovisualization')} </h>,
      image: 'https://i.ytimg.com/vi/rcb-1cL-ICc/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGH8gMig-MA8=&rs=AOn4CLB4iMbDB9azFPcxIZLfL44JvRNiqQ',
      link: '/ejercicios/visualizacion', // URL de destino
    },
    {
      title: 'Mindfulness',
      description: <h suppressHydrationWarning={true}> {t('intomindfulness')} </h>,
      image: 'https://concienciasaludable.uchile.cl/wp-content/uploads/2024/01/istockphoto-1152830331-612x612-1.jpg',
      link: '/ejercicios/mindfulness', // URL de destino
    },
    {
      title: <h suppressHydrationWarning={true}>{t('muscleprogression')} </h>,
      description: <h suppressHydrationWarning={true}> {t('intomuscle')} </h>,
      image: 'https://www.strong4life.com/-/media/Strong4Life/emotional-wellness/coping/practicing-deep-breathing/deep_breathing_boy.jpg',
      link: '/ejercicios/progresion', // URL de destino
    },
    {
      title: <h suppressHydrationWarning={true}> {t('musiclistening')} </h>,
      description: <h suppressHydrationWarning={true}> {t('intomusic')} </h>,
      image: 'https://img.freepik.com/vector-premium/mujer-escuchar-musica-vector_942421-60.jpg',
      link: '/ejercicios/musica', // URL de destino
    },
    {
      title: <h suppressHydrationWarning={true}> {t('naturewalk')} </h>, 
      description: <h suppressHydrationWarning={true}> {t('intowalk')} </h>, 
      image: 'https://static.vecteezy.com/system/resources/previews/006/409/432/non_2x/adventure-tour-on-the-theme-of-climbing-trekking-hiking-walking-or-vacation-with-forest-and-mountain-views-in-flat-nature-background-poster-illustration-vector.jpg',
      link: '/ejercicios/caminata', // URL de destino
    },
    {
      title: <h suppressHydrationWarning={true}> {t('relaxationtechnique')} </h>, 
      description: <h suppressHydrationWarning={true}> {t('intorelaxation')} </h>, 
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbiAXjoMbfIKwiNZBPskjzfDy8tmzdBkuxPQ&s',
      link: '/ejercicios/tecnica', // URL de destino
    },
    {
      title: <h suppressHydrationWarning={true}> {t('aromatherapy')} </h>, 
      description: <h suppressHydrationWarning={true}> {t('intoaromatherapy')} </h>,
      image: 'https://img.freepik.com/vector-premium/ilustracion-vector-dibujos-animados-aislados-aromaterapia_107173-27880.jpg',
      link: '/ejercicios/arometerapia', // URL de destino
    }
  ];

  return (
    <div>
      <div className="fixed top-0 w-full z-50">
      <NavbarH />
      </div>
      <script src="https://cdn.tailwindcss.com"></script>
      <div suppressHydrationWarning={true} className="bg-gradient-to-b to-blue-200 from-teal-200 min-h-screen p-8 pt-20 ">
        <h1 suppressHydrationWarning={true} className="text-4xl font-bold text-center mb-6 text-teal-800">{t('techniques')}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techniquesList.map((technique, index) => (
            <RelaxationCard 
            key={index} 
            title={technique.title}
            technique={technique} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Techniques;
