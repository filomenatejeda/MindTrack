// pages/home.js
'use client'
import React, { useState, useEffect } from 'react'; // Asegúrate de importar React y useState
import MoodSelector from '../components/MoodSelector';
import Notes from '../components/Notes';
import ButtonContainer from '../components/ButtonContainer';
import Link from 'next/link'; // Importa Link de Next.js

export default function Home() {
  const [selectedMood, setSelectedMood] = useState('');
  const [notes, setNotes] = useState([]); // Para almacenar las notas

  // Cargar notas desde localStorage cuando el componente se monta
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(savedNotes);
  }, []);

  const handleMoodSelect = (mood) => {
    setSelectedMood(mood);
    console.log(`Estado de ánimo seleccionado: ${mood}`);
  };

  const handleAddNote = (newNote) => {
    setNotes((prevNotes) => {
      const updatedNotes = [newNote, ...prevNotes].slice(0, 5); // Mantener solo las últimas 5 notas
      localStorage.setItem('notes', JSON.stringify(updatedNotes)); // Actualizar localStorage
      return updatedNotes;
    });
  };

  const handleDeleteNote = (index) => {
    setNotes((prevNotes) => {
      const updatedNotes = prevNotes.filter((_, i) => i !== index).slice(0, 5); // Mantener solo las últimas 5 notas
      localStorage.setItem('notes', JSON.stringify(updatedNotes)); // Actualizar localStorage
      return updatedNotes;
    });
  };

  const handleUpdateNote = (index, updatedNote) => {
    setNotes((prevNotes) => {
      const updatedNotes = prevNotes.map((note, i) =>
        i === index ? updatedNote : note
      );
      localStorage.setItem('notes', JSON.stringify(updatedNotes)); // Actualizar localStorage
      return updatedNotes;
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <script src="https://cdn.tailwindcss.com"></script> {/* Carga Tailwind CSS */}
      <h1 className="text-4xl font-bold text-teal-500 text-center">Bienvenido a Home</h1>
      <p className="mt-4 text-gray-700">¡Disfruta de tu experiencia en MindTrack!</p>
      <div className="App">
        <h1>Selecciona tu estado de ánimo</h1>
        <MoodSelector onMoodSelect={handleMoodSelect} />
      </div>
       {/* Botón para ir a la página de estado de animo */}
       <div className="mt-4">
          <Link href="/notas">
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              Días Anteriores
            </button>
          </Link>
        </div>
      
      <div className="mt-8">
        <h2 className="text-xl font-bold">Notas Recientes</h2>
        <div className="flex space-x-4 overflow-x-auto">
          {notes.map((note, index) => (
            <div key={index} className="bg-white shadow-md rounded p-4 w-64 flex-shrink-0">
              <p>{note}</p>
              <div className="text-sm text-gray-500">Nota {index + 1}</div>
            </div>
          ))}
        </div>
         {/* Botón para ir a la página de notas */}
         <div className="mt-4">
          <Link href="/notas">
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              Ir a Notas
            </button>
          </Link>
        </div>
        <ButtonContainer/>
      </div>
    </div>
    
  );
}


