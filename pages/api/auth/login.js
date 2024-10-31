import { promises as fs } from "fs";
import path from "path";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      // Obtener el cuerpo de la solicitud
      const { username, password } = req.body;

      // Validar entradas
      if (!username || !password) {
        return res.status(400).json({ message: "El nombre de usuario y la contraseña son obligatorios." });
      }

      // Ruta del archivo de usuarios
      const filePath = path.join(process.cwd(), "utils/users.json");
      const fileData = await fs.readFile(filePath, "utf8");
      const users = JSON.parse(fileData);

      // Buscar el usuario en el archivo JSON
      const user = users.find((u) => u.username === username);

      // Verificar la contraseña
      if (user && (await bcrypt.compare(password, user.password))) {
        // Generar el JWT
        const token = jwt.sign({ username }, process.env.JWT_SECRET, {
          expiresIn: "1h",
        });

        res.status(200).json({ token, username });
      } else {
        res.status(401).json({ message: "Credenciales inválidas." });
      }
    } catch (error) {
      console.error("Error en el inicio de sesión:", error);
      res.status(500).json({ message: "Error interno del servidor." });
    }
  } else {
    res.status(405).json({ message: "Método no permitido." });
  }
}









