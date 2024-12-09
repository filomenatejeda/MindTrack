'use client'
import Link from 'next/link';
import Navbar from '../components/Navbar';
import { useTranslation } from 'react-i18next';
import Footer from '../components/Footer';
import RootLayout from './layout';
import ImageCarousel from '../components/ImageCarousel';
import { useState, useEffect } from 'react'
<time datetime="2016-10-25" suppressHydrationWarning />

export default function Home() {
  const { t } = useTranslation();
  const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    setIsClient(true)
  }, [])
  

  return (
    <RootLayout>
      <div className="min-h-screen bg-gradient-to-b from-green-50 via-green-100 to-blue-50 pt-16"> {/* Fondo degradado */}
        <script src="https://cdn.tailwindcss.com"></script>
        <Navbar />
        
        <div className='mt-4 mb-6'> {/* Carrusel de imágenes */}
          <ImageCarousel />
        </div>

        {/* Hero section */}
        <main className="flex flex-col items-center justify-center py-4 mb-16 bg-white rounded-lg shadow-lg max-w-4xl mx-auto p-8">
          <h1 suppressHydrationWarning={true}className="text-5xl font-bold text-teal-600 text-center drop-shadow-md">{t('MindTrack')}</h1>
          <p suppressHydrationWarning={true} className="text-gray-700 mt-4 text-center px-6 md:px-16">{t('description')}</p>
          <Link href="/register/create-user">
            <button suppressHydrationWarning={true}className="mt-4 px-6 py-2 bg-gradient-to-r from-teal-400 to-green-500 text-white rounded-lg shadow-lg hover:from-teal-500 hover:to-green-600 transition-transform transform hover:scale-105">
              {t('begin')}
            </button>
          </Link>
        </main>

        {/* Funcionalidades Clave */}
        <section id="features" className="pt-16 -mt-16 mb-12 px-6 text-center">
  <h2 suppressHydrationWarning={true} className="text-3xl font-semibold text-teal-600 drop-shadow-lg">{t('features')}</h2>
  <div suppressHydrationWarning={true}className="flex flex-wrap justify-center mt-8 gap-6"> {/* Cambiado de space-y-6 a gap-6 */}
    {['dailyemotion', 'exercises', 'habits', 'conextion'].map((feature, index) => (
      <div key={index} className="bg-white rounded-lg shadow-lg p-6 w-full sm:w-72 transition-transform transform hover:scale-105"> {/* Se agregó bg-white para evitar superposición */}
        <h3 suppressHydrationWarning={true}className="text-xl font-bold text-green-600">{t(feature)}</h3>
        <p suppressHydrationWarning={true}className="text-gray-600 mt-2">{t(`description${feature}`)}</p>
      </div>
    ))}
  </div>
</section>

        {/* CTA Secundaria */}
        <div className="text-center mb-12">
          <Link suppressHydrationWarning={true} href="/loginQ/login">
            <button suppressHydrationWarning={true} className="px-6 py-2 bg-teal-600 text-white rounded-lg shadow-lg hover:bg-teal-700 transition-transform transform hover:scale-105">
              {t('login')}
            </button>
          </Link>
        </div>

        {/* Recursos */}
        <section id="resources" className="pt-16 -mt-16 mb-16 px-6 text-center">
          <h2 suppressHydrationWarning={true}className="text-3xl font-semibold text-teal-600 drop-shadow-lg">{t('resourses')}</h2>
          <p suppressHydrationWarning={true}className="text-gray-700 mt-4 max-w-xl mx-auto">{t('descriptionresourses')}</p>
          <div suppressHydrationWarning={true}className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {['articles', 'videos', 'podcast', 'resoursesin'].map((resource, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105">
                <h3 suppressHydrationWarning={true}className="text-xl font-bold text-green-600">{t(resource)}</h3>
                <p suppressHydrationWarning={true}className="text-gray-600 mt-2">{t(`description${resource}`)}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Módulo de Inteligencia Artificial */}
        <section id="ai" className="pt-16 -mt-16 mb-16 px-6 text-center">
          <h2 suppressHydrationWarning={true} className="text-3xl font-semibold text-teal-600 drop-shadow-lg">{t('ia')}</h2>
          <p suppressHydrationWarning={true}className="text-gray-700 mt-4 max-w-xl mx-auto">{t('descriptionia')}</p>
        </section>

        {/* Impacto en el ODS 3 */}
        <section id="impact" className="pt-16 -mt-16 mb-16 px-6">
          <div className="bg-gradient-to-r from-green-50 to-teal-50 py-8 px-6 rounded-lg shadow-lg text-center max-w-2xl mx-auto">
            <h2 suppressHydrationWarning={true} className="text-3xl font-semibold text-teal-600 drop-shadow-lg">{t('odss')}</h2>
            <p  suppressHydrationWarning={true} className="text-gray-700 mt-4">{t('descriptionods')}</p>
          </div>
        </section>

        <Footer />
      </div>
    </RootLayout>
    
  );
}
