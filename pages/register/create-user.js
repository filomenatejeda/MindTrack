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
      body: JSON.stringify({ username, password, firstName, lastName, email }),
    });

    if (response.ok) {
      alert('Usuario creado exitosamente');
      router.push('/loginQ/login'); // Redirigir a la página de inicio de sesión
    } else {
      const data = await response.json();
      setError(data.message);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 relative">
      <title>{t('register')}</title>
       <div className="absolute inset-0 bg-[url('https://img.freepik.com/vector-gratis/fondo-plano-dia-mundial-salud-mental_23-2149671209.jpg')] bg-cover bg-center opacity-30"></div>
      {/* Navbar fija en la parte superior */}
      <div className="w-full fixed top-0 z-50">
        <Navbar />
        <script src="https://cdn.tailwindcss.com"></script>
      </div>
  
      {/* Contenedor central con el formulario ajustado */}
      <div className="flex-grow mt-28 w-full flex justify-center items-start relative">
        {/* Imagen de fondo sutil */}
       
        
        <form onSubmit={handleSubmit} className="relative p-8 bg-white rounded-lg shadow-lg max-w-md w-full z-10 transition-transform duration-300 transform hover:scale-105">
          <h2 suppressHydrationWarning={true} className="text-3xl font-bold mb-6 text-center text-green-800">
            {t('register')}
          </h2>
          <input
            type="text"
            suppressHydrationWarning={true}
            placeholder={t('user')}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full mb-4 px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-300"
            required
          />
          <input
            type="password"
            suppressHydrationWarning={true}
            placeholder={t('password')}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-4 px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-300"
            required
          />
          <input
            type="text"
            suppressHydrationWarning={true}
            placeholder={t('name')}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full mb-4 px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-300"
            required
          />
          <input
            type="text"
            suppressHydrationWarning={true}
            placeholder={t('lastname')}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full mb-4 px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-300"
            required
          />
          <input
            type="email"
            suppressHydrationWarning={true}
            placeholder={t('email')}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mb-4 px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-300"
            required
          />
          <button suppressHydrationWarning={true} type="submit" className="w-full py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300">
            {t('register')}
          </button>
          {error && <p className="text-red-600 mt-2 text-center">{error}</p>}
          <div className="mt-4 text-center">
            <Link suppressHydrationWarning={true} href="/loginQ/login" className="text-green-600 hover:underline transition duration-300">
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





