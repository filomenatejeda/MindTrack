import React from 'react';
import { useTranslation } from 'react-i18next';

// Definición de los emojis con expresiones directamente traducidas

export const emojis = [
    { color: '#FFD700', expression: 'veryhappy' },  // Clave que se traducirá
    { color: '#FFEB3B', expression: 'happy' },      // Clave que se traducirá
    { color: '#B0C4DE', expression: 'neutral' },    // Clave que se traducirá
    { color: '#6495ED', expression: 'sad' },        // Clave que se traducirá
    { color: '#87CEFA', expression: 'crying' }      // Clave que se traducirá
];

// Crear y exportar el array de emojis traducidos
export const getTranslatedEmojis = (t) => {
    return emojis.map((emoji, index) => ({
        ...emoji,
        translatedExpression: t(emoji.expression),  // Traducción de la expresión
        index  // Añadimos el índice para poder usarlo en el mapeo
    }));
};

const EmojiIcons = ({ selectedEmoji, onEmojiSelect }) => {
    const { t } = useTranslation();

    // Usar la función getTranslatedEmojis para obtener los emojis traducidos
    const translatedEmojis = getTranslatedEmojis(t);

    return (
        <div className="flex space-x-2">
            {translatedEmojis.map((emoji) => (
                <div key={emoji.index}>
                    <svg
                        onClick={() => onEmojiSelect(emoji.index)} // Usar emoji.index
                        xmlns="http://www.w3.org/2000/svg"
                        width="70" height="70"
                        viewBox="0 0 100 100"
                        className={`transition-transform duration-200 ${selectedEmoji === emoji.index ? 'scale-110' : ''}`}
                    >
                        <circle cx="50" cy="50" r="40" fill={selectedEmoji === emoji.index ? emoji.color : '#d3d3d3'} stroke="black" strokeWidth="2" />
                        <circle cx="35" cy="40" r="5" fill="black" />
                        <circle cx="65" cy="40" r="5" fill="black" />
                        {emoji.index === 0 && <path d="M30 65 Q50 90 70 65" fill="none" stroke="black" strokeWidth="2" />} {/* Muy feliz */}
                        {emoji.index === 1 && <path d="M30 60 Q50 80 70 60" fill="none" stroke="black" strokeWidth="2" />} {/* Feliz */}
                        {emoji.index === 2 && <line x1="30" y1="65" x2="70" y2="65" stroke="black" strokeWidth="2" />} {/* Neutral */}
                        {emoji.index === 3 && <path d="M30 65 Q50 50 70 65" fill="none" stroke="black" strokeWidth="2" />} {/* Llorando */}
                        {emoji.index === 4 && <path d="M70 65 Q50 50 30 65" fill="none" stroke="black" strokeWidth="2" />} {/* Triste */}
                    </svg>
                </div>
            ))}
        </div>
    );
};

export default EmojiIcons;
