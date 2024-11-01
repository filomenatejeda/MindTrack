import React from 'react';
import RelaxationCard from '../components/RelaxationCard';

const techniques = () => {
  const techniquesList = [
    {
      title: 'Meditación',
      description: 'Una técnica que ayuda a calmar la mente y reducir el estrés a través de la atención plena.',
      image: 'https://example.com/meditation.jpg',
    },
    {
      title: 'Respiración Profunda',
      description: 'Ejercicios de respiración para relajar el cuerpo y disminuir la ansiedad.',
      image: 'https://example.com/deep-breathing.jpg',
    },
    {
      title: 'Yoga',
      description: 'Una práctica que combina posturas físicas, respiración y meditación para mejorar el bienestar.',
      image: 'https://example.com/yoga.jpg',
    },
    {
      title: 'Visualización',
      description: 'Técnica que implica imaginar un lugar o situación tranquila para promover la relajación.',
      image: 'https://example.com/visualization.jpg',
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-10">
      <h1 className="text-3xl font-bold text-center mb-6">Ejercicios y Técnicas de Relajación</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {techniquesList.map((technique, index) => (
          <RelaxationCard key={index} technique={technique} />
        ))}
      </div>
    </div>
  );
};

export default techniques;
