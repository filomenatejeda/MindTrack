<<<<<<< HEAD

=======
// pages/index.js
import { useRouter } from 'next/router';

import Link from 'next/link';
>>>>>>> e34879f308e3258c9a76b67804ea56c0b0229634
import Navbar from '../components/Navbar';
import EmotionLog from '/components/EmotionLog';
import Relaxation from '../components/Relaxation';
import Habits from '../components/Habits';
import Professionals from '../components/Professionals';
import Resources from '../components/Resources';
import Footer from '../components/Footer'
import EmotionTracker from '../components/EmotionTracker';

export default function HomePage() {
  return (
    <>
<<<<<<< HEAD
      <Navbar />
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6 text-center">Bienvenido a MindTrack</h1>
=======
      <div>
        <title>Inicio</title> {/* Título de la página */}
        <script src="https://cdn.tailwindcss.com"></script> {/* Carga Tailwind CSS */}
      </div>
      <div>
      <Navbar />
      <main className="flex flex-col items-center justify-center py-20">
        <h1 className="text-4xl font-bold text-center text-blue-900">
          Bienvenido a MindTrack
          <script src="https://cdn.tailwindcss.com"></script> {/* Carga Tailwind CSS */}
        </h1>
        <p className="text-gray-700 mt-4 text-center max-w-xl">
          Una plataforma para mejorar tu bienestar emocional y mental a través de seguimiento diario, hábitos saludables y conexión con profesionales.
        </p>
        <Link href="/login.js">
          <button className="mt-8 px-6 py-2 bg-blue-600 text-white rounded-lg">
            Iniciar Sesión
          </button>
        </Link>
      </main>
      <Footer />
    </div>
    </>
  );
}
>>>>>>> e34879f308e3258c9a76b67804ea56c0b0229634

        {/* Registro Diario de Emociones */}
        <section id="emotion-log" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Registro Diario de Emociones</h2>
          <EmotionLog />
        </section>

        {/* Ejercicios de Relajación */}
        <section id="relaxation" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Ejercicios de Relajación</h2>
          <Relaxation />
        </section>

        {/* Hábitos Saludables */}
        <section id="habits" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Hábitos Saludables</h2>
          <Habits />
        </section>

        {/* Conexión con Profesionales */}
        <section id="professionals" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Conexión con Profesionales</h2>
          <Professionals />
        </section>

        {/* Recursos Educativos */}
        <section id="resources" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Recursos Educativos</h2>
          <Resources />
        </section>

        <section id = "support" className = "mb-12">
          <h2 className="text-2xl font-semibold mb-4">Apoyo Diario</h2>
          <DailySupport />
        </section>

        {/* Botón de Inicio de Sesión */}
        <div className="text-center mt-8">
          <Link href="/login" className="bg-blue-500 text-white px-4 py-2 rounded">
          Iniciar Sesión
          </Link>
        </div>
      </main>
        <Footer/> 
      </>
  );
}