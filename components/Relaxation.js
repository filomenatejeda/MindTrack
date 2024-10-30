// components/Relaxation.js
import { useState } from 'react';

export default function Relaxation() {
  const exercises = [
    { name: 'Respiración Profunda', description: 'Inhala y exhala profundamente durante 5 minutos.' },
    { name: 'Meditación Guiada', description: 'Escucha esta meditación guiada para relajarte.' },
    { name: 'Relajación Muscular', description: 'Aprieta y suelta cada grupo muscular lentamente.' },
  ];

  const setReminder = (time) => {
    setTimeout(() => {
      alert("¡Hora de realizar tu ejercicio de relajación!");
    }, time);
  };

  return (
    <div>
      <h2>Ejercicios de Relajación</h2>
      <ul>
        {exercises.map((exercise, index) => (
          <li key={index}>
            <h3>{exercise.name}</h3>
            <p>{exercise.description}</p>
            <button onClick={() => setReminder(60000)} className="bg-blue-500 text-white p-2 mt-2">Recordar en 1 minuto</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
