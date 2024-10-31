// pages/index.js
import Link from 'next/link';
import Navbar from '../components/Navbar';
import { useTranslation } from 'react-i18next';
import Footer from '../components/Footer';
import RootLayout from './layout';

export default function Home() {
  const { t } = useTranslation();
  return (
    <RootLayout >
    <div className="min-h-screen bg-gray-100">
      <script src="https://cdn.tailwindcss.com"></script> {/* Carga Tailwind CSS */}
      <Navbar />
      <main className="flex flex-col items-center justify-center py-20">
        <h1 className="text-4xl font-bold text-center text-blue-900">
         {t('welcome')}
        </h1>
        <p className="text-gray-700 mt-4 text-center max-w-xl">
          {t('description')} 
        </p>
        <Link href="/log/login">
          <button className="mt-8 px-6 py-2 bg-blue-600 text-white rounded-lg">
            {t('login')}
          </button>
        </Link>
      </main>
      <Footer />
    </div>
    </RootLayout>
  );
}