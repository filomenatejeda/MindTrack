// pages/calendar.js
import React, { useState } from 'react';
import { useEmojiContext } from '../context/EmojiContext';
import EmojiIcons from '../components/MoodSelector';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Estilos predeterminados
import NavbarH from '../components/NavbarH'; // Asegúrate de que el componente NavbarH exista
import Footer from '../components/Footer'; // Asegúrate de que el componente Footer exista

const CalendarPage = () => {
    const { emojiData, addEmoji } = useEmojiContext();
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedEmoji, setSelectedEmoji] = useState(emojiData[selectedDate.toISOString().split('T')[0]] || null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
        setSelectedEmoji(emojiData[date.toISOString().split('T')[0]] || null);
    };

    const handleEmojiSelect = (index) => {
        setSelectedEmoji(index);
        addEmoji(selectedDate.toISOString().split('T')[0], index);
    };

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-r from-green-300 to-blue-300">
            <NavbarH /> {/* Incluye la barra de navegación */}
            <div className="flex flex-col items-center justify-center flex-grow p-6">
                <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
                    <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">Calendario de Emojis</h1>
                    <p className="text-center text-gray-600 mb-4">Monitorea tus emociones día a día</p>
                    
                    <Calendar
                        onChange={handleDateChange}
                        value={selectedDate}
                        className="mb-4"
                        tileClassName={({ date }) => {
                            const dateString = date.toISOString().split('T')[0];
                            return emojiData[dateString] ? 'bg-yellow-200' : '';
                        }}
                    />
                    
                    <div className="flex justify-center mb-4">
                        <EmojiIcons selectedEmoji={selectedEmoji} onEmojiSelect={handleEmojiSelect} />
                    </div>
                    <div className="text-center">
                        {selectedEmoji !== null && (
                            <p className="text-gray-600">Emoji seleccionado: {selectedEmoji}</p>
                        )}
                    </div>
                </div>
            </div>
            <Footer /> {/* Incluye el pie de página */}
        </div>
    );
};

export default CalendarPage;


