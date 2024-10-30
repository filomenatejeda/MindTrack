// pages/log/login.js
import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Recuperar la contraseña del localStorage
    const storedPassword = localStorage.getItem(username);

    // Verificar si la contraseña ingresada es correcta
    if (storedPassword && storedPassword === password) {
      // Redirigir a la página de inicio
      router.push('/log/home'); // Asegúrate de que esta ruta sea correcta
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <script src="https://cdn.tailwindcss.com"></script> {/* Carga Tailwind CSS */}
      <form onSubmit={handleSubmit} className="p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-900">Iniciar Sesión</h2>
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
          Entrar
        </button>
        
        {/* Botón para crear un nuevo usuario */}
        <div className="mt-4 text-center">
          <Link href="/log/create-user" className="text-blue-600">
            Crear Usuario
          </Link>
        </div>
      </form>
    </div>
  );
}

