// pages/notas.js
import React, { useState } from 'react';
import Notes from '../components/Notes';
import NavbarH from '../components/NavbarH';
import { useTranslation } from 'react-i18next';
import Footer from '/components/Footer';

const NotasPage = () => {
  const [notes, setNotes] = useState([]);
  const { t } = useTranslation();

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
    <div>
      <title>{t('notess')}</title>
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-green-200">
      <NavbarH />
      <script src="https://cdn.tailwindcss.com"></script>
      <div className="flex flex-col items-center py-10 px-4">
        <h1 suppressHydrationWarning={true} className="text-4xl font-bold text-teal-800 mb-2">
        {t('writethoughts')} 
        </h1>
        <p suppressHydrationWarning={true} className="text-lg text-gray-700  text-center mx-4">
        {t('intowritethoughts')} 
      </p>
      <p suppressHydrationWarning={true} className="text-lg text-gray-700 mb-8 text-center mx-4">
      {t('iintowritethoughts')}
      </p>

        <div className="w-full max-w-2xl p-6 bg-white shadow-lg rounded-md">
          <Notes onAddNote={handleAddNote} onDeleteNote={handleDeleteNote} onUpdateNote={handleUpdateNote} />
        </div>
        
      </div>
      <Footer />
    </div>
    </div>
  );
};

export default NotasPage;

