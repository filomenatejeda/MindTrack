import React, { useEffect, useState } from 'react';

const EmojiIcons = () => {
    // Estado para manejar la selección de los emojis
    const [selectedEmoji, setSelectedEmoji] = useState(null);

    // Cargar el emoji seleccionado desde localStorage cuando el componente se monta
    useEffect(() => {
        const storedEmoji = localStorage.getItem('selectedEmoji');
        if (storedEmoji) {
            setSelectedEmoji(parseInt(storedEmoji, 10));
        }
    }, []);

    // Función para manejar el cambio de color al seleccionar un emoji
    const handleEmojiClick = (index) => {
        // Si el emoji ya está seleccionado, se desmarca
        if (selectedEmoji === index) {
            setSelectedEmoji(null);
            localStorage.removeItem('selectedEmoji'); // Eliminar del localStorage si se desmarca
        } else {
            // Si no está seleccionado, se marca
            setSelectedEmoji(index);
            localStorage.setItem('selectedEmoji', index); // Guardar el índice en localStorage
        }
    };

    // Color de fondo basado en la selección de cada emoji
    const getColor = (index) => {
        switch (index) {
            case 0: // Carita Muy feliz
                return selectedEmoji === index ? 'yellow' : '#d3d3d3';
            case 1: // Carita Feliz
                return selectedEmoji === index ? '#ffeb3b' : '#d3d3d3';
            case 2: // Carita Neutral
                return selectedEmoji === index ? 'gray' : '#d3d3d3';
            case 3: // Carita Llorando
                return selectedEmoji === index ? 'blue' : '#d3d3d3';
            case 4: // Carita Triste
                return selectedEmoji === index ? 'lightblue' : '#d3d3d3';
            default:
                return '#d3d3d3';
        }
    };

    return (
        <div className="flex space-x-2">
            {/* Carita Muy feliz */}
            <svg
                onClick={() => handleEmojiClick(0)}
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" fill={getColor(0)} stroke="black" strokeWidth="2" />
                <circle cx="35" cy="40" r="5" fill="black" />
                <circle cx="65" cy="40" r="5" fill="black" />
                <path d="M30 65 Q50 90 70 65" fill="none" stroke="black" strokeWidth="2" />
            </svg>

            {/* Carita Feliz */}
            <svg
                onClick={() => handleEmojiClick(1)}
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" fill={getColor(1)} stroke="black" strokeWidth="2" />
                <circle cx="35" cy="40" r="5" fill="black" />
                <circle cx="65" cy="40" r="5" fill="black" />
                <path d="M30 60 Q50 80 70 60" fill="none" stroke="black" strokeWidth="2" />
            </svg>

            {/* Carita Neutral */}
            <svg
                onClick={() => handleEmojiClick(2)}
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" fill={getColor(2)} stroke="black" strokeWidth="2" />
                <circle cx="35" cy="40" r="5" fill="black" />
                <circle cx="65" cy="40" r="5" fill="black" />
                <line x1="30" y1="65" x2="70" y2="65" stroke="black" strokeWidth="2" />
            </svg>

            {/* Carita Triste */}
            <svg
                onClick={() => handleEmojiClick(4)}
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" fill={getColor(4)} stroke="black" strokeWidth="2" />
                <circle cx="35" cy="40" r="5" fill="black" />
                <circle cx="65" cy="40" r="5" fill="black" />
                <path d="M70 65 Q50 50 30 65" fill="none" stroke="black" strokeWidth="2" />
            </svg>

            {/* Carita Llorando */}
            <svg
                onClick={() => handleEmojiClick(3)}
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" fill={getColor(3)} stroke="black" strokeWidth="2" />
                <circle cx="35" cy="40" r="5" fill="black" />
                <circle cx="65" cy="40" r="5" fill="black" />
                <path d="M30 65 Q50 50 70 65" fill="none" stroke="black" strokeWidth="2" />
                <path d="M40 45 Q42 50 40 55" fill="black" stroke="black" strokeWidth="2" />
                <path d="M60 45 Q58 50 60 55" fill="black" stroke="black" strokeWidth="2" />
            </svg>
        </div>
    );
};

export default EmojiIcons;
