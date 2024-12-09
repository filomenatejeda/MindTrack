// /pages/api/server.js
import OpenAI from "openai";

// Configura el cliente de OpenAI
const openai = new OpenAI({
  organization: process.env.OPENAI_ORG_ID, // Tu ID de organización (si tienes)
  apiKey: process.env.OPENAI_API_KEY, // La clave de OpenAI que tienes en .env
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { message } = req.body;

    try {
      // Realiza la solicitud a la API de OpenAI
      const response = await openai.chat.completions.create({
        model: "gpt-4", // Cambia esto a la versión del modelo que prefieras (ej. gpt-4 o gpt-3.5-turbo)
        messages: [
          {
            role: "user",
            content: message,
          },
        ],
      });

      // Envía la respuesta generada
      res.status(200).json({ message: response.choices[0]?.message.content });
    } catch (error) {
      console.error("Error al obtener respuesta de OpenAI:", error);
      res.status(500).json({ error: "Error al obtener respuesta de OpenAI" });
    }
  } else {
    res.status(405).json({ error: "Método no permitido" });
  }
}

