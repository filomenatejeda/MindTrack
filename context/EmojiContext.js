// context/EmojiContext.js
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

    return (
        <EmojiContext.Provider value={{ emojiData, addEmoji }}>
            {children}
        </EmojiContext.Provider>
    );
};

export const useEmojiContext = () => {
    return useContext(EmojiContext);
};
