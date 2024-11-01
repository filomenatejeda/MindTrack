// pages/notas.js
import React, { useState } from 'react';
import Notes from '../components/Notes';
import NavbarH from '../components/NavbarH';

const NotasPage = () => {
  const [notes, setNotes] = useState([]);

  const handleAddNote = (newNote) => {
    setNotes((prevNotes) => [newNote, ...prevNotes]);
  };

  const handleDeleteNote = (index) => {
    const newNotes = notes.filter((_, i) => i !== index);
    setNotes(newNotes);
  };

  const handleUpdateNote = (index, updatedNote) => {
    const updatedNotes = notes.map((note, i) => (i === index ? updatedNote : note));
    setNotes(updatedNotes);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-green-200">
      <NavbarH />
      <div className="flex flex-col items-center py-10 px-4">
        <h1 className="text-4xl font-bold text-teal-800 mb-2">
          ¡Escribe tus pensamientos!
        </h1>
        <p className="text-lg text-gray-700  text-center mx-4">
        Utiliza estas notas como una herramienta para explorar tus emociones y fomentar tu crecimiento personal.
      </p>
      <p className="text-lg text-gray-700 mb-8 text-center mx-4">
      Recuerda, cada palabra cuenta en tu viaje hacia el bienestar.
      </p>

        <div className="w-full max-w-2xl p-6 bg-white shadow-lg rounded-md">
          <Notes onAddNote={handleAddNote} onDeleteNote={handleDeleteNote} onUpdateNote={handleUpdateNote} />
        </div>
      </div>
    </div>
  );
};

export default NotasPage;

