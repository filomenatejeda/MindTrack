// pages/index.js
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
      <div className="min-h-screen bg-green-100"> {/* Fondo verde claro */}
        <script src="https://cdn.tailwindcss.com"></script> {/* Carga Tailwind CSS */}
        <Navbar />
        <main className="flex flex-col items-center justify-center py-20">
          <h1 className="text-4xl font-bold text-teal-500 text-center"> {/* Título en turquesa */}
            {t('welcome')}
          </h1>
          <p className="text-gray-700 mt-4 text-center max-w-xl">
            {t('description')}
          </p>
          <Link href="/loginQ/login">
            <button className="mt-8 px-6 py-2 bg-emerald-200 text-green-700 rounded-lg hover:bg-emerald-300"> {/* Botón en verde esmeralda */}
              {t('login')}
            </button>
          </Link>
        </main>
        <ImageCarousel />
        <Footer />
      </div>
    </RootLayout>
  );
}
