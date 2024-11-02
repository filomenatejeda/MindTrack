import React, { createContext, useContext, useState, useEffect } from 'react';

const EmojiContext = createContext();

export const EmojiProvider = ({ children }) => {
    const [emojiData, setEmojiData] = useState({});

    useEffect(() => {
        const storedData = localStorage.getItem('emojiData');
        if (storedData) {
            setEmojiData(JSON.parse(storedData));
        }
    }, []);

    const addEmoji = (date, emojiIndex) => {
        setEmojiData(prevData => {
            const newData = { ...prevData, [date]: emojiIndex };
            localStorage.setItem('emojiData', JSON.stringify(newData));
            return newData;
        });
    };

    const removeEmoji = (date) => {
        setEmojiData(prevData => {
            const newData = { ...prevData };
            delete newData[date]; // Elimina el emoji del objeto
            localStorage.setItem('emojiData', JSON.stringify(newData)); // Actualiza el almacenamiento local
            return newData;
        });
    };

    return (
        <EmojiContext.Provider value={{ emojiData, addEmoji, removeEmoji }}>
            {children}
        </EmojiContext.Provider>
    );
};

export const useEmojiContext = () => {
    return useContext(EmojiContext);
};
