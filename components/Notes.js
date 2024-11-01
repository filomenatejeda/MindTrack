// components/Notes.js
import React, { useState, useEffect } from 'react';
import { PencilIcon, TrashIcon, PlusIcon } from '@heroicons/react/24/solid'; // Importar desde la ruta correcta

const Notes = ({ onAddNote, onDeleteNote, onUpdateNote }) => {
  const [notes, setNotes] = useState([]);
  const [noteText, setNoteText] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(savedNotes);
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const handleAddNote = (e) => {
    e.preventDefault();
    if (noteText.trim()) {
      if (editingIndex !== null) {
        const updatedNotes = notes.map((note, index) =>
          index === editingIndex ? noteText : note
        );
        setNotes(updatedNotes);
        onUpdateNote(editingIndex, noteText);
        setEditingIndex(null);
      } else {
        // Agregar nueva nota sin límite en el número de notas
        const newNotes = [...notes, noteText];
        setNotes(newNotes);
        onAddNote(noteText);
      }
      setNoteText('');
    }
  };

  const handleEditNote = (index) => {
    setNoteText(notes[index]);
    setEditingIndex(index);
  };

  const handleDeleteNote = (index) => {
    const newNotes = notes.filter((_, i) => i !== index);
    setNotes(newNotes);
    onDeleteNote(index);
  };

  return (
    <div className="bg-green-50 shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-green-700">Notas personales</h2>
      <form onSubmit={handleAddNote} className="mb-6">
        <textarea
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-200"
          rows="4"
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
          placeholder="Escribe tu nota aquí..."
        />
        <button
          type="submit"
          className="mt-3 flex items-center bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-200"
        >
          <PlusIcon className="h-5 w-5 mr-1" />
          {editingIndex !== null ? 'Actualizar Nota' : 'Agregar Nota'}
        </button>
      </form>
      <ul className="space-y-4">
        {notes.map((note, index) => (
          <li key={index} className="flex justify-between items-center bg-white p-4 rounded-lg shadow hover:shadow-md transition duration-200">
            <span className="text-gray-800">{note}</span>
            <div className="flex space-x-2">
              <button
                onClick={() => handleEditNote(index)}
                className="text-green-500 hover:text-green-700 transition duration-200"
              >
                <PencilIcon className="h-5 w-5" />
              </button>
              <button
                onClick={() => handleDeleteNote(index)}
                className="text-blue-400 hover:text-red-700 transition duration-200"
              >
                <TrashIcon className="h-5 w-5" />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notes;







