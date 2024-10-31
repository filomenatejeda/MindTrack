'use client';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Navbar from '/components/Navbar';
import Footer from '/components/Footer';
import { useTranslation } from 'react-i18next';

export default function CreateUser() {
  const router = useRouter();
  const { t } = useTranslation();
  
  // Definir estados para cada campo del formulario
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const response = await fetch('/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password, firstName, lastName,  email }),
    });

    if (response.ok) {
      alert('Usuario creado exitosamente');
      router.push('/loginQ/login'); // Redirigir a la página de inicio de sesión
    } else {
      const data = await response.json();
      setError(data.message); // Mostrar el mensaje de error en caso de fallo
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Navbar fija en la parte superior */}
      <div className="w-full fixed top-0 z-50">
        <Navbar />
      </div>
  
      {/* Contenedor central con el formulario ajustado */}
      <div className="flex-grow mt-28 w-full flex justify-center items-start">
        <form onSubmit={handleSubmit} className="p-6 bg-green-100 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-2xl font-bold mb-6 text-center text-green-800">
            {t('register')}
          </h2>
          <input
            type="text"
            placeholder={t('user')}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full mb-4 px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
          <input
            type="password"
            placeholder={t('password')}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-4 px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
          <input
            type="text"
            placeholder={t('name')}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full mb-4 px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
          <input
            type="text"
            placeholder={t('lastname')}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full mb-4 px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
          <input
            type="email"
            placeholder={t('email')}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mb-4 px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
          <button type="submit" className="w-full py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
            {t('register')}
          </button>
          {error && <p className="text-red-600 mt-2 text-center">{error}</p>}
          <div className="mt-4 text-center">
            <Link href="/loginQ/login" className="text-green-600">
              {t('haveanaccount')}
            </Link>
          </div>
        </form>
      </div>
  
      {/* Footer al final de la página */}
      <Footer />
    </div>
  );  
}  




