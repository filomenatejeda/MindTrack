// pages/home.js
'use client';
import React, { useState, useEffect } from 'react';
import EmojiIcons from '../components/MoodSelector'; // Asegúrate de que la importación sea correcta
import ButtonContainer from '../components/ButtonContainer';
import Link from 'next/link';
import NavbarH from '../components/NavbarH';
import { useAuth } from '../context/AuthContext';
import { useTranslation } from 'react-i18next';

export default function Home() {
    const { user } = useAuth();
    const [selectedEmoji, setSelectedEmoji] = useState(null); // Inicializa el estado para el emoji seleccionado
    const [notes, setNotes] = useState([]);
    const [hiddenNotes, setHiddenNotes] = useState([]);
    const { t } = useTranslation();

    // Cargar notas del localStorage al iniciar
    useEffect(() => {
        const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
        setNotes(savedNotes);

        // Cargar emoji seleccionado del localStorage
        const savedEmoji = localStorage.getItem('selectedEmoji');
        if (savedEmoji) {
            setSelectedEmoji(JSON.parse(savedEmoji)); // Guardar emoji en el estado
        }
    }, []);

    // Manejar selección de estado de ánimo
    const handleEmojiSelect = (emojiIndex) => {
        setSelectedEmoji(emojiIndex); // Actualiza el estado al seleccionar un emoji
        localStorage.setItem('selectedEmoji', JSON.stringify(emojiIndex)); // Guardar emoji seleccionado en localStorage
        console.log(`Emoji seleccionado: ${emojiIndex}`);
    };

    // Manejar adición de nuevas notas
    const handleAddNote = (newNote) => {
        const updatedNotes = [newNote, ...notes].slice(0, 3);
        localStorage.setItem('notes', JSON.stringify(updatedNotes));
        setNotes(updatedNotes);
    };

    // Manejar ocultar notas sin eliminarlas del localStorage
    const handleHideNote = (index) => {
        setHiddenNotes((prevHidden) => [...prevHidden, notes[index]]);
    };

    // Filtrar notas para mostrar solo las que no están ocultas
    const visibleNotes = notes.filter((note) => !hiddenNotes.includes(note));

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="fixed top-0 w-full z-50">
                <NavbarH />
            </div>

            <div className="pt-20 p-4">
                {/* Título con nombre de usuario */}
                <h1 className="text-4xl font-bold bg-gradient-to-r from-teal-400 to-teal-600 text-white p-6 rounded-lg shadow-lg text-center">
                    {t('welcome')} {user ? user : 'Invitado'}
                </h1>

                {/* Descripción */}
                <p className="mt-4 text-teal-500 text-lg p-2 text-center italic">
                    {t('homedescription')}
                </p>

                {/* Contenedor principal */}
                <div className="mt-6 bg-white p-6 rounded-lg shadow-xl transition-shadow hover:shadow-2xl flex flex-col items-center">
                    {/* Selector de estado de ánimo */}
                    <div className="flex flex-col w-full md:w-1/2 mb-4 items-center">
                        <h2 className="text-2xl font-semibold mb-2 text-teal-500 text-center">{t('feeling')}</h2>
                        <EmojiIcons selectedEmoji={selectedEmoji} onEmojiSelect={handleEmojiSelect} /> {/* Aquí se integra */}
                        <Link href="/calendar">
                            <button className="bg-gradient-to-r from-emerald-300 to-emerald-500 text-white py-2 px-5 rounded-full hover:bg-emerald-600 transition duration-200 transform hover:scale-105 mt-2">
                                {t('days')}
                            </button>
                        </Link>
                    </div>

                    {/* Contenedor para las notas */}
                    <div className="bg-emerald-200 px-4 py-2 rounded-lg mt-2 w-full shadow-md">
                        <h2 className="text-xl font-bold text-green-600 text-center">{t('notes')}</h2>
                        <div className="flex space-x-2 overflow-x-auto py-1 justify-center">
                            {visibleNotes.slice(0, 3).map((note, index) => (
                                <div key={index} className="bg-white shadow-lg rounded-lg p-4 w-64 flex-shrink-0 transition-transform transform hover:scale-105">
                                    <p className="text-sm">{note}</p>
                                    <div className="text-xs text-gray-500">{t('note')} {index + 1}</div>

                                    {/* Botón para esconder nota */}
                                    <button 
                                        onClick={() => handleHideNote(index)} 
                                        className="flex items-center mt-2 text-gray-500 hover:text-red-500 transition-colors duration-200"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M12 4.5C7.30558 4.5 3.4089 7.63652 2 12c1.4089 4.36348 5.3056 7.5 10 7.5s8.5911-3.1365 10-7.5c-1.4089-4.36348-5.3056-7.5-10-7.5z" />
                                            <path d="M9.5 9.5a3.5 3.5 0 1 0 5 5" />
                                            <line x1="4" y1="4" x2="20" y2="20" />
                                        </svg>
                                        <span>{t('hide')} </span>
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    <Link href="/notas">
                        <button className="bg-gradient-to-r from-green-400 to-green-600 text-white py-2 px-5 rounded-full hover:bg-green-500 transition duration-200 transform hover:scale-105 mt-4">
                            {t('gonotes')}
                        </button>
                    </Link>
                </div>

                <ButtonContainer onAddNote={handleAddNote} />
            </div>
        </div>
    );
}

