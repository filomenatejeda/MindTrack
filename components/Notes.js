// components/Notes.js
import React, { useState, useEffect } from 'react';

const Notes = ({ onAddNote, onDeleteNote, onUpdateNote }) => {
  const [notes, setNotes] = useState([]);
  const [noteText, setNoteText] = useState('');
  const [editingIndex, setEditingIndex] = useState(null); // Índice de la nota en edición

  // Cargar notas desde localStorage cuando el componente se monta
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(savedNotes);
  }, []);

  // Guardar notas en localStorage cada vez que cambian
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const handleAddNote = (e) => {
    e.preventDefault();
    if (noteText.trim()) {
      if (editingIndex !== null) {
        // Si estamos editando, actualizamos la nota
        const updatedNotes = notes.map((note, index) =>
          index === editingIndex ? noteText : note
        );
        setNotes(updatedNotes);
        onUpdateNote(editingIndex, noteText); // Notificar a Home sobre la actualización
        setEditingIndex(null); // Limpiar el índice de edición
      } else {
        // Agregar nueva nota
        const newNotes = [noteText, ...notes].slice(0, 5); // Mantener solo 5 notas
        setNotes(newNotes);
        onAddNote(noteText); // Llamar a la función para pasar la nueva nota a Home
      }
      setNoteText(''); // Limpiar el campo de texto
    }
  };

  const handleEditNote = (index) => {
    setNoteText(notes[index]); // Configurar el texto de la nota para editar
    setEditingIndex(index); // Establecer el índice de la nota que se va a editar
  };

  const handleDeleteNote = (index) => {
    const newNotes = notes.filter((_, i) => i !== index);
    setNotes(newNotes);
    onDeleteNote(index); // Notificar a Home sobre la eliminación
  };

  return (
    <div className="bg-white shadow-md rounded p-4 max-w-md mx-auto mt-4">
      <h2 className="text-xl font-bold mb-4">Notas</h2>
      <form onSubmit={handleAddNote} className="mb-4">
        <textarea
          className="w-full p-2 border border-gray-300 rounded"
          rows="4"
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
          placeholder="Escribe tu nota aquí..."
        />
        <button
          type="submit"
          className="mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          {editingIndex !== null ? 'Actualizar Nota' : 'Agregar Nota'}
        </button>
      </form>
      <ul className="list-disc pl-5">
        {notes.map((note, index) => (
          <li key={index} className="flex justify-between items-center mb-2">
            <span>{note}</span>
            <div>
            <div className="text-sm text-gray-500">Nota {index + 1}</div>
              <button
                onClick={() => handleEditNote(index)}
                className="text-yellow-500 hover:text-yellow-700 mr-2"
              >
                Editar
              </button>
              <button
                onClick={() => handleDeleteNote(index)}
                className="text-red-500 hover:text-red-700"
              >
                Eliminar
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notes;

