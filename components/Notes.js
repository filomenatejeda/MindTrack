// components/Notes.js
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { PlusIcon, TrashIcon, PencilIcon } from '@heroicons/react/24/solid';

const Notes = ({ onAddNote, onDeleteNote, onUpdateNote }) => {
  const { t } = useTranslation();
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
    <div className="bg-white shadow-lg rounded-xl p-6 border border-green-200">
      <h2 suppressHydrationWarning={true} className="text-2xl font-bold mb-4 text-green-700 text-center"> {t('wellness_notes')} </h2>
      <form onSubmit={handleAddNote} className="mb-6">
        <textarea
          className="w-full p-3 border border-gray-200 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-150"
          rows="4"
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
          placeholder={t('new_wellness')}
          suppressHydrationWarning={true} 
        />
        <button
          type="submit"
          className="mt-4 bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition duration-150 flex items-center justify-center w-full"
          suppressHydrationWarning={true}
        >
          <PlusIcon suppressHydrationWarning={true}  className="h-5 w-5 mr-2" />
          { editingIndex !== null ? t('update_note') : t('add_note')}
        </button>
      </form>
      <ul className="space-y-4">
        {notes.map((note, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-green-50 p-4 rounded-lg shadow hover:shadow-lg transition duration-150 border border-green-200"
          >
            <span className="text-gray-800 font-medium">{note}</span>
            <div className="flex space-x-2">
              <button
                onClick={() => handleEditNote(index)}
                className="text-yellow-500 hover:text-yellow-700 transition duration-150"
              >
                <PencilIcon className="h-5 w-5" />
              </button>
              <button
                onClick={() => handleDeleteNote(index)}
                className="text-red-500 hover:text-red-700 transition duration-150"
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








