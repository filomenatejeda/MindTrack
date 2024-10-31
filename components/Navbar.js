// components/Navbar.js
import Link from 'next/link';
import { useLanguage } from '/context/LanguageContext';
import { useTranslation } from 'react-i18next'

function Navbar() { 

  const {language, changeLanguage } = useLanguage(); // Obtener y cambiar idioma del contexto
  const { t } = useTranslation(); 

  return (
    <nav className="bg-blue-600 p-4 flex justify-between items-center">
      <div className="text-white font-bold text-lg">MindTrack</div>
      <div className="flex space-x-4">
        <Link href="/" className="text-white">
        {t('home')} {/* Usa traducción para "Inicio" */}
        </Link>
        <Link href="/log/login" className="text-white">
        {t('login')} {/* Usa traducción para "Iniciar Sesión" */}
        </Link>
        <button onClick={() => changeLanguage('es')} className="text-white">Español</button>
      <button onClick={() => changeLanguage('en')} className="text-white"> English</button>
      </div>
    </nav>
  );
}

export default Navbar;
