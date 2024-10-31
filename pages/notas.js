// pages/notas.js
import React, { useState } from 'react';
import Notes from '../components/Notes'; // Asegúrate de importar el componente Notes

const NotasPage = () => {
  const [notes, setNotes] = useState([]); // Para almacenar las notas

  const handleAddNote = (newNote) => {
    setNotes((prevNotes) => [newNote, ...prevNotes.slice(0, 4)]); // Mantener solo las últimas 5 notas
  };

  const handleDeleteNote = (index) => {
    const newNotes = notes.filter((_, i) => i !== index);
    setNotes(newNotes); // Actualizar las notas en la página al eliminar
  };

  const handleUpdateNote = (index, updatedNote) => {
    const updatedNotes = notes.map((note, i) => (i === index ? updatedNote : note));
    setNotes(updatedNotes); // Actualizar las notas en la página al editar
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
         <script src="https://cdn.tailwindcss.com"></script> 
      <h1 className="text-3xl font-bold text-blue-900">Página de Notas</h1>
      <p className="mt-4 text-gray-700">¡Escribe tus notas aquí!</p>
      <Notes onAddNote={handleAddNote} onDeleteNote={handleDeleteNote} onUpdateNote={handleUpdateNote} />
    </div>
  );
};

export default NotasPage;
