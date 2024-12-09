'use client';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Navbar from '/components/Navbar';
import Footer from '/components/Footer';
import { useTranslation } from 'react-i18next';
import { FaUser, FaLock } from 'react-icons/fa'; // Iconos para los campos

export default function Login() {
  const router = useRouter();
  const { t } = useTranslation();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (!username || !password) {
      setError('Por favor completa todos los campos.');
      setLoading(false);
      return;
    }

    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    setLoading(false);

    if (response.ok) {
      const data = await response.json();
      localStorage.setItem('token', data.token);
      window.location.href = '/home';
    } else {
      const data = await response.json();
      setError(data.message);
    }
  };

  return (
    <div className="flex flex-col min-h-screen justify-between bg-gray-50 relative">
      <title>{t('login')}</title>
      {/* Imagen de fondo sutil */}
      <div className="absolute inset-0 bg-[url('https://img.freepik.com/vector-gratis/fondo-plano-dia-mundial-salud-mental_23-2149671209.jpg')] bg-cover bg-center opacity-30"></div>
      <script src="https://cdn.tailwindcss.com"></script>
      <div className="w-full fixed top-0 z-50">
        <Navbar />
      </div>

      <div className="flex-grow mt-16 w-full flex justify-center items-center">
        <form onSubmit={handleSubmit} className="relative p-8 bg-white rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 z-10">
          <h2 suppressHydrationWarning={true} className="text-3xl font-bold mb-6 text-center text-green-800">
            {t('login')}
          </h2>
          <div className="relative mb-4">
            <FaUser className="absolute left-3 top-2 text-gray-400" />
            <input
              suppressHydrationWarning={true}
              type="text"
              placeholder={t('user')}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300"
              required
            />
          </div>
          <div className="relative mb-4">
            <FaLock className="absolute left-3 top-2 text-gray-400" />
            <input
              suppressHydrationWarning={true}
              type="password"
              placeholder={t('password')}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300"
              required
            />
          </div>
          <button 
            type="submit" 
            className={`w-full py-2 rounded-lg ${loading ? 'bg-gray-400' : 'bg-green-600'} text-white hover:bg-green-700 transition duration-300`}
            disabled={loading}
            suppressHydrationWarning={true}
          >
            {loading ? t('loading') : t('enter')}
          </button>
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-4" role="alert">
              <strong className="font-bold">Error: </strong>
              <span className="block sm:inline">{error}</span>
            </div>
          )}
          <div className="mt-4 text-center">
            <Link suppressHydrationWarning={true} href="/register/create-user" className="text-green-600 hover:underline transition duration-300">
              {t('register')}
            </Link>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
}
