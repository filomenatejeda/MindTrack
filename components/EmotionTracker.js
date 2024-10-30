import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';

const EmotionTracker = () => {
  const { emotions, addEmotion } = useAppContext();
  const [emotion, setEmotion] = useState('');
  const [note, setNote] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (emotion) {
      addEmotion({ emotion, note, date: new Date().toLocaleString() });
      setEmotion('');
      setNote('');
    }
  };

  return (
    <div>
      <h2>Registro Diario de Emociones</h2>
      <form onSubmit={handleSubmit}>
        <select
          value={emotion}
          onChange={(e) => setEmotion(e.target.value)}
          required
        >
          <option value="">Selecciona una emoción</option>
          <option value="Feliz">Feliz</option>
          <option value="Triste">Triste</option>
          <option value="Estresado">Estresado</option>
          <option value="Ansioso">Ansioso</option>
        </select>
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Escribe una nota personal"
        />
        <button type="submit">Registrar Emoción</button>
      </form>

      <h3>Emociones Registradas</h3>
      <ul>
        {emotions.map((entry, index) => (
          <li key={index}>
            <strong>{entry.emotion}</strong> - {entry.note} ({entry.date})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmotionTracker;
