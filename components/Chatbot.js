// /components/Chatbot.js
import { useState } from "react";
import axios from "axios";
import { useTranslation } from 'react-i18next';

export default function Chatbot() {
  const { t } = useTranslation();
  const [userMessage, setUserMessage] = useState(""); // Mensaje del usuario
  const [chatMessages, setChatMessages] = useState([]); // Historial de mensajes

  // Maneja el cambio en el input
  const handleChange = (event) => {
    setUserMessage(event.target.value);
  };

  // Envia el mensaje al servidor y obtiene la respuesta
  const handleSendMessage = async () => {
    if (!userMessage.trim()) return; // No enviar mensaje vacío

    // Añadir el mensaje del usuario al historial
    setChatMessages([...chatMessages, { role: "user", content: userMessage }]);

    try {
      // Enviar el mensaje al backend
      const response = await axios.post("/api/server", {
        message: userMessage,
      });

      // Añadir la respuesta de OpenAI al historial
      setChatMessages([
        ...chatMessages,
        { role: "user", content: userMessage },
        { role: "bot", content: response.data.message },
      ]);
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);
    }

    // Limpiar el campo de entrada
    setUserMessage("");
  };

  return (
    <div className="flex flex-col items-center w-full max-w-md mx-auto p-2 bg-white rounded-lg shadow-lg">
      <div className="chatbox overflow-y-auto w-full p-4 bg-gray-100 rounded-lg h-64 space-y-4">
        {chatMessages.map((msg, index) => (
          <div
            key={index}
            className={`message p-2 rounded-lg ${msg.role === "user" ? "bg-teal-500 text-white self-end" : "bg-gray-300 text-black self-start"}`}
          >
            <strong className="font-semibold">{msg.role === "user" ? "Tú" : "Bot"}:</strong>
            <p>{msg.content}</p>
          </div>
        ))}
      </div>
      <div className="input-container flex items-center space-x-1 mt-4 ">
        <input
        suppressHydrationWarning={true}
          type="text"
          value={userMessage}
          onChange={handleChange}
          placeholder={t('write_your')}
          className="flex-1 p-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
        />
        <button
        suppressHydrationWarning={true}
          onClick={handleSendMessage}
          className="px-3 py-1 bg-teal-500 text-white rounded-md hover:bg-teal-600 transition duration-300"
        >
          {t('send_to')}
        </button>
      </div>
    </div>
  );
}

