import React from 'react';

// Definición de los emojis
const emojis = [
    { color: '#FFD700', expression: 'Muy feliz' },
    { color: '#FFEB3B', expression: 'Feliz' },
    { color: '#B0C4DE', expression: 'Neutral' },
    { color: '#6495ED', expression: 'Triste' },
    { color: '#87CEFA', expression: 'Llorando' }
];

const EmojiIcons = ({ selectedEmoji, onEmojiSelect }) => {
    return (
        <div className="flex space-x-2">
            {emojis.map((emoji, index) => (
                <svg
                    key={index}
                    onClick={() => onEmojiSelect(index)}
                    xmlns="http://www.w3.org/2000/svg"
                    width="70" height="70"
                    viewBox="0 0 100 100"
                    className={`transition-transform duration-200 ${selectedEmoji === index ? 'scale-110' : ''}`}
                >
                    <circle cx="50" cy="50" r="40" fill={selectedEmoji === index ? emoji.color : '#d3d3d3'} stroke="black" strokeWidth="2" />
                    <circle cx="35" cy="40" r="5" fill="black" />
                    <circle cx="65" cy="40" r="5" fill="black" />
                    {index === 0 && <path d="M30 65 Q50 90 70 65" fill="none" stroke="black" strokeWidth="2" />} {/* Muy feliz */}
                    {index === 1 && <path d="M30 60 Q50 80 70 60" fill="none" stroke="black" strokeWidth="2" />} {/* Feliz */}
                    {index === 2 && <line x1="30" y1="65" x2="70" y2="65" stroke="black" strokeWidth="2" />} {/* Neutral */}
                    {index === 3 && <path d="M30 65 Q50 50 70 65" fill="none" stroke="black" strokeWidth="2" />} {/* Llorando */}
                    {index === 4 && <path d="M70 65 Q50 50 30 65" fill="none" stroke="black" strokeWidth="2" />} {/* Triste */}
                </svg>
            ))}
        </div>
    );
};

// Exportar los emojis para usarlos en otro componente
export { emojis };

export default EmojiIcons;