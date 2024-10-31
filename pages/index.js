'use client'
import Link from 'next/link';
import Navbar from '../components/Navbar';
import { useTranslation } from 'react-i18next';
import Footer from '../components/Footer';
import RootLayout from './layout';
import ImageCarousel from '../components/ImageCarousel';

export default function Home() {
  const { t } = useTranslation();

  return (
    <RootLayout>
      
      <div className="min-h-screen bg-green-100 pt-16"> {/* Fondo verde claro */}
        <script src="https://cdn.tailwindcss.com"></script> {/* Carga Tailwind CSS */}
        <Navbar />
<div className='mt-4'> {/* Carrusel de imágenes: Representación visual */}
<ImageCarousel /></div>

        {/* Hero section: Nombre y Objetivo del Proyecto */}
        <main className="flex flex-col items-center justify-center py-4">
          <h1 className="text-4xl font-bold text-teal-500 text-center">{t('MindTrack')}</h1>
          <p className="text-gray-700 mt-4 text-center px-60">
            {t('description')}
          </p>
          <Link href="/register/create-user">
            <button className="mt-8 px-6 py-2 bg-emerald-200 text-green-700 rounded-lg hover:bg-emerald-300"> {/* Botón CTA */}
              {t('begin')}
            </button>
          </Link>
        </main>

       

        {/* Funcionalidades Clave */}
        <section id="features" className="mt-10 px-6 text-center">
          <h2  className="text-3xl font-semibold text-teal-600">{t('features')}</h2>
          <div className="flex flex-wrap justify-center mt-6">
            <div className="m-4 p-4 bg-white rounded-lg shadow-md w-72">
              <h3 className="text-xl font-bold text-green-700">{t('dailyemotions')}</h3>
              <p className="text-gray-600">{t('descriptionemotion')}</p>
            </div>
            <div className="m-4 p-4 bg-white rounded-lg shadow-md w-72">
              <h3 className="text-xl font-bold text-green-700">{t('exercises')}</h3>
              <p className="text-gray-600">{t('descriptionexercises')}</p>
            </div>
            <div className="m-4 p-4 bg-white rounded-lg shadow-md w-72">
              <h3 className="text-xl font-bold text-green-700">{t('habits')}</h3>
              <p className="text-gray-600">{t('descriptionhabits')}</p>
            </div>
            <div className="m-4 p-4 bg-white rounded-lg shadow-md w-72">
              <h3 className="text-xl font-bold text-green-700">{t('Conexión con Profesionales')}</h3>
              <p className="text-gray-600">{t('Conéctate con psicólogos y terapeutas para obtener el apoyo profesional que necesitas.')}</p>
            </div>
          </div>
        </section>

        {/* CTA Secundaria */}
        <div className="text-center mt-8">
          <Link href="/loginQ/login">
            <button className="px-6 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600">
              {t('Inicia Sesión')}
            </button>
          </Link>
        </div>

        <section id="resources"className="mt-10 px-6 text-center">
  <h2  className="text-3xl font-semibold text-teal-600">{t('Recursos Educativos')}</h2>
  <p className="text-gray-700 mt-4 max-w-xl mx-auto">
    {t('Descubre artículos, videos y podcasts sobre salud mental y recibe recomendaciones personalizadas basadas en tus registros emocionales.')}
  </p>
  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* Tarjeta 1: Artículos */}
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-xl font-bold text-green-700">{t('Artículos')}</h3>
      <p className="text-gray-600 mt-2">
        {t('Accede a una amplia variedad de artículos que abordan temas como la ansiedad, la depresión, el manejo del estrés y técnicas de autocompasión.')}
      </p>
      
    </div>

    {/* Tarjeta 2: Videos */}
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-xl font-bold text-green-700">{t('Videos Educativos')}</h3>
      <p className="text-gray-600 mt-2">
        {t('Mira videos que explican conceptos de salud mental, ofrecen técnicas de relajación y comparten testimonios inspiradores.')}
      </p>
      
    </div>

    {/* Tarjeta 3: Podcasts */}
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-xl font-bold text-green-700">{t('Podcasts')}</h3>
      <p className="text-gray-600 mt-2">
        {t('Escucha episodios sobre bienestar emocional, estrategias de superación y entrevistas con expertos en salud mental.')}
      </p>
     
    </div>

    {/* Tarjeta 4: Recursos Interactivos */}
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-xl font-bold text-green-700">{t('Recursos Interactivos')}</h3>
      <p className="text-gray-600 mt-2">
        {t('Utiliza herramientas interactivas como cuestionarios, ejercicios de reflexión y guías de autoayuda para mejorar tu bienestar.')}
      </p>
      
    </div>

    {/* Tarjeta 5: Comunidades de Apoyo */}
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-xl font-bold text-green-700">{t('Comunidades de Apoyo')}</h3>
      <p className="text-gray-600 mt-2">
        {t('Conéctate con grupos de apoyo donde puedes compartir experiencias y aprender de otros que enfrentan desafíos similares.')}
      </p>
      
    </div>

    {/* Tarjeta 6: Recomendaciones Personalizadas */}
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-xl font-bold text-green-700">{t('Recomendaciones Personalizadas')}</h3>
      <p className="text-gray-600 mt-2">
        {t('Recibe sugerencias de contenido educativo y ejercicios basados en tus registros emocionales y necesidades personales.')}
      </p>
      
    </div>
  </div>
</section>

        {/* Módulo de Inteligencia Artificial */}
        <section id="ai"className="mt-10 px-6 text-center">
          <h2  className="text-3xl font-semibold text-teal-600">{t('Módulo de Inteligencia Artificial')}</h2>
          <p className="text-gray-700 mt-4 max-w-xl mx-auto">
            {t('Nuestro sistema de IA detecta patrones emocionales y te sugiere contenido personalizado, como artículos o ejercicios, basado en tus necesidades.')}
          </p>
        </section>

        {/* Impacto en el ODS 3 */}
        <section id="impact"className="mt-10 px-6 text-center bg-emerald-50 py-6">
          <h2 className="text-3xl font-semibold text-teal-600">{t('Impacto en el ODS 3')}</h2>
          <p className="text-gray-700 mt-4 max-w-xl mx-auto">
            {t('MindTrack contribuye al ODS 3, proporcionando una herramienta asequible para mejorar la salud mental y el bienestar general.')}
          </p>
        </section>

        {/* Pie de página */}
        <Footer />
      </div>
    </RootLayout>
  );
}
