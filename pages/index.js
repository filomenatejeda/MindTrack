// pages/index.js
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <script src="https://cdn.tailwindcss.com"></script> {/* Carga Tailwind CSS */}
      <Navbar />
      <main className="flex flex-col items-center justify-center py-20">
        <h1 className="text-4xl font-bold text-center text-blue-900">
          Bienvenido a MindTrack
        </h1>
        <p className="text-gray-700 mt-4 text-center max-w-xl">
          Una plataforma para mejorar tu bienestar emocional y mental a través de seguimiento diario, hábitos saludables y conexión con profesionales.
        </p>
        <Link href="/log/login">
          <button className="mt-8 px-6 py-2 bg-blue-600 text-white rounded-lg">
            Iniciar Sesión
          </button>
        </Link>
      </main>
      <Footer />
    </div>
  );
}