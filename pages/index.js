
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
      <Navbar />
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6 text-center">Bienvenido a MindTrack</h1>

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