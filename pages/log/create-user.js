// pages/log/create-user.js
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function CreateUser() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verifica si el usuario ya existe
    const existingUser = localStorage.getItem(username);
    if (existingUser) {
      alert('Este nombre de usuario ya está en uso');
      return;
    }

    // Almacenar el nuevo usuario y su contraseña
    localStorage.setItem(username, password);
    alert('Usuario creado con éxito');
    router.push('/log/login'); // Redirigir a la página de inicio de sesión
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <script src="https://cdn.tailwindcss.com"></script> {/* Carga Tailwind CSS */}
      <form onSubmit={handleSubmit} className="p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-900">Crear Usuario</h2>
        <input
          type="text"
          placeholder="Nombre de usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full mb-4 px-4 py-2 border rounded-lg"
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 px-4 py-2 border rounded-lg"
        />
        <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded-lg">
          Crear Usuario
        </button>
      </form>
    </div>
  );
}


