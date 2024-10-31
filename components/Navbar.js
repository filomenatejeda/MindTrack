// components/Navbar.js
import Link from 'next/link';
import { useLanguage } from '/context/LanguageContext';
import { useTranslation } from 'react-i18next';

function Navbar() { 
  const { language, changeLanguage } = useLanguage(); // Obtener y cambiar idioma del contexto
  const { t } = useTranslation(); 

  return (
    <nav className="bg-emerald-200 p-4 flex justify-between items-center shadow-lg"> {/* Fondo verde esmeralda y sombra */}
      <div className="text-green-700 font-bold text-lg">MindTrack</div> {/* Texto en verde oscuro */}
      <div className="flex space-x-4">
        <Link href="/" className="text-green-700 hover:text-green-900"> {/* Hover para un efecto más pronunciado */}
          {t('home')} {/* Usa traducción para "Inicio" */}
        </Link>
        <Link href="/log/login" className="text-green-700 hover:text-green-900"> {/* Hover para un efecto más pronunciado */}
          {t('login')} {/* Usa traducción para "Iniciar Sesión" */}
        </Link> 
        <button onClick={() => changeLanguage('es')} className="text-green-700 hover:text-green-900">Español</button> {/* Hover para un efecto más pronunciado */}
        <button onClick={() => changeLanguage('en')} className="text-green-700 hover:text-green-900">English</button> {/* Hover para un efecto más pronunciado */}
      </div>
    </nav>
  );
}

export default Navbar;

