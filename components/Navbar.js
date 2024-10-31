// components/Navbar.js
'use client'
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';

function Navbar() { 
  const { t } = useTranslation();

  return (
    <nav className="bg-emerald-200 p-4 flex justify-between items-center shadow-lg"> {/* Fondo verde esmeralda y sombra */}
      <div className="text-green-700 font-bold text-lg">MindTrack</div> {/* Texto en verde oscuro */}
      <div className="flex space-x-4 items-center">
        <Link href="/" className="text-green-700 hover:text-green-900"> {/* Hover para un efecto más pronunciado */}
          {t('home')} {/* Usa traducción para "Inicio" */}
        </Link>
        <Link href="loginQ/login" className="text-green-700 hover:text-green-900"> {/* Hover para un efecto más pronunciado */}
          {t('login')} {/* Usa traducción para "Iniciar Sesión" */}
        </Link>
        
        {/* Componente de Selección de Idioma */}
        <LanguageSelector />
      </div>
    </nav>
  );
}

export default Navbar;

