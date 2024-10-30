// components/EmotionLog.js
import { useState, useEffect } from 'react';

export default function EmotionLog() {
  const [emotion, setEmotion] = useState('');
  const [note, setNote] = useState('');
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const savedLogs = JSON.parse(localStorage.getItem('emotionLogs')) || [];
    setLogs(savedLogs);
  }, []);

  const handleSave = () => {
    const newLog = { date: new Date(), emotion, note };
    const updatedLogs = [...logs, newLog];
    setLogs(updatedLogs);
    localStorage.setItem('emotionLogs', JSON.stringify(updatedLogs));
    setEmotion('');
    setNote('');
  };

  return (
    <div>
      <h2>Registro Diario de Emociones</h2>
      <select value={emotion} onChange={(e) => setEmotion(e.target.value)} className="border p-2">
        <option value="">Seleccionar emoción</option>
        <option value="Feliz">Feliz</option>
        <option value="Triste">Triste</option>
        <option value="Estresado">Estresado</option>
        <option value="Ansioso">Ansioso</option>
      </select>
      <textarea value={note} onChange={(e) => setNote(e.target.value)} placeholder="Notas" className="border p-2 mt-2"></textarea>
      <button onClick={handleSave} className="bg-blue-500 text-white p-2 mt-2">Guardar</button>

      <div className="mt-4">
        <h3>Emociones registradas</h3>
        <ul>
          {logs.map((log, index) => (
            <li key={index}>
              {log.date.toString().slice(0, 10)}: {log.emotion} - {log.note}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

