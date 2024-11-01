// pages/home.js
'use client';
import React, { useState, useEffect } from 'react';
import MoodSelector from '../components/MoodSelector';
import ButtonContainer from '../components/ButtonContainer';
import Link from 'next/link';
import NavbarH from '../components/NavbarH';
import { useAuth } from '../context/AuthContext'; // Asegúrate de la ruta correcta
import { useTranslation } from 'react-i18next';


export default function Home() {
  const { user } = useAuth(); // Obtener el usuario del contexto
  const [selectedMood, setSelectedMood] = useState('');
  const [notes, setNotes] = useState([]);
  const { t } = useTranslation();

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
      const updatedNotes = [newNote, ...prevNotes].slice(0, 3); // Muestra solo 3 notas
      localStorage.setItem('notes', JSON.stringify(updatedNotes));
      return updatedNotes;
    });
  };

  const handleDeleteNote = (index) => {
    setNotes((prevNotes) => {
      const updatedNotes = prevNotes.filter((_, i) => i !== index).slice(0, 3);
      localStorage.setItem('notes', JSON.stringify(updatedNotes));
      return updatedNotes;
    });
  };

  const handleUpdateNote = (index, updatedNote) => {
    setNotes((prevNotes) => {
      const updatedNotes = prevNotes.map((note, i) =>
        i === index ? updatedNote : note
      );
      localStorage.setItem('notes', JSON.stringify(updatedNotes));
      return updatedNotes;
    });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="w-full fixed top-0 z-50">
        <NavbarH />
      </div>

      <div className="pt-20 p-8">
        {/* Título con nombre de usuario */}
        <h1 className="text-4xl font-bold bg-teal-500 text-white p-4 rounded-lg">
          {t('welcome')} {user ? user : 'Invitado'}
        </h1>

        {/* Descripción */}
        <p className="mt-4 text-teal-500 text-lg p-2">
         {t('homedescription')}
        </p>

        <div className="flex justify-between mt-6 bg-white p-6 rounded-lg shadow-lg transition-shadow hover:shadow-xl">
          <div className="flex flex-col">
            <h2 className="text-2xl font-semibold mb-2 text-teal-500">{t('feeling')} </h2>
            <MoodSelector onMoodSelect={handleMoodSelect} />
            <Link href="/notas">
              <button className="bg-emerald-200 text-green-700 py-2 px-4 rounded-full hover:bg-green-500 mt-4 transition-colors duration-200">
                {t('days')}
              </button>
            </Link>
          </div>

          <div className="flex flex-col justify-center items-center bg-green-50 p-4 rounded-lg shadow-md transition-shadow hover:shadow-lg">
            <h2 className="text-xl font-bold text-green-600">{t('notes')} </h2>
            <div className="flex space-x-4 overflow-x-auto py-4">
              {notes.slice(0, 3).map((note, index) => (
                <div key={index} className="bg-white shadow-md rounded p-4 w-64 flex-shrink-0">
                  <p>{note}</p>
                  <div className="text-sm text-gray-500">Nota {index + 1}</div>
                </div>
              ))}
            </div>
            <Link href="/notas">
              <button className="bg-green-400 text-white py-2 px-4 rounded hover:bg-green-500 mt-4 transition-colors duration-200">
                {t('gonotes')}
              </button>
            </Link>
          </div>
        </div>

        <div className="mt-8">
          <ButtonContainer />
        </div>
      </div>
    </div>
  );
}

