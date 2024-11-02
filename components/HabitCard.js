// components/HabitCard.js
import { useState } from 'react';
import HabitResources from './HabitResources';

export default function HabitCard({ title, description, resources }) {
  const [completed, setCompleted] = useState(false);

  const toggleCompletion = () => {
    setCompleted(!completed);
    // Guardar el progreso en localStorage o base de datos
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105">
      <h3 className="text-xl font-semibold mb-2 text-blue-600">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <button
        onClick={toggleCompletion}
        className={`px-4 py-2 rounded-lg font-semibold ${completed ? 'bg-green-500 text-white' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
      >
        {completed ? 'Completado' : 'Marcar como Completado'}
      </button>
      <HabitResources resources={resources} />
    </div>
  );
}


  