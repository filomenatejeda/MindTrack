// components/Navbar.js
'use client';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';

function Navbar() { 
  const { t } = useTranslation();

  return (
    <nav className="bg-emerald-200 p-4 flex justify-between items-center fixed w-full top-0 z-50 shadow-lg">
  <Link href="/"> {/* Cambiar a la ruta de tu página deseada */}
          <div className="text-green-700 font-bold text-lg cursor-pointer">
            MindTrack
          </div>
        </Link> {/* Texto en verde oscuro */}
  <div className="flex space-x-4 items-center">
  
    <Link href="#features" className="text-green-700 hover:text-green-900"> {/* Enlace a funcionalidades */}
      {t('features')}
    </Link>
    <Link href="#resources" className="text-green-700 hover:text-green-900"> {/* Enlace a recursos */}
      {t('resourses')}
    </Link>
    <Link href="#ai" className="text-green-700 hover:text-green-900"> {/* Enlace al módulo de IA */}
      {t('ai')}
    </Link>
    <Link href="#impact" className="text-green-700 hover:text-green-900"> {/* Enlace al impacto ODS 3 */}
      {t('ods')}
    </Link>
    <Link href="/loginQ/login" className="text-green-700 hover:text-green-900">
      {t('login')}
    </Link>
    <LanguageSelector />
  </div>
</nav>

  );
}

export default Navbar;

