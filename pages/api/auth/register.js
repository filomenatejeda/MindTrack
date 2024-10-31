import { promises as fs } from "fs";
import path from "path";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { username, password, firstName, lastName, email } = req.body;

      // Validar entradas
      if (!username || !password || !firstName || !lastName || !email) {
        return res.status(400).json({ message: "Todos los campos son obligatorios." });
      }

      // Leer el archivo de usuarios
      const filePath = path.join(process.cwd(), "utils/users.json");
      const fileData = await fs.readFile(filePath, "utf8");
      const users = JSON.parse(fileData);

      // Verificar si el usuario ya existe
      const existingUser = users.find((user) => user.username === username || user.email === email);
      if (existingUser) {
        return res.status(400).json({ message: "El usuario o correo electrónico ya existe." });
      }

      // Encriptar la contraseña
      const hashedPassword = await bcrypt.hash(password, 10);

      // Agregar el nuevo usuario
      const newUser = { username, password: hashedPassword, firstName, lastName, email };
      users.push(newUser);

      // Guardar los usuarios en el archivo
      await fs.writeFile(filePath, JSON.stringify(users, null, 2));

      // Generar el JWT sin la contraseña
      const token = jwt.sign({ username, firstName, lastName, email }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });

      return res.status(200).json({ token, username, firstName, lastName, email });
    } catch (error) {
      console.error("Error en el registro:", error);
      return res.status(500).json({ message: "Ocurrió un error al procesar la solicitud." });
    }
  } else {
    // Método no permitido
    return res.status(405).json({ message: "Método no permitido." });
  }
}

