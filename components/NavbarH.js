// components/Navbar.js
'use client'
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';

function NavbarH() { 
  const { t } = useTranslation();

  return (
    <nav className="bg-teal-500 p-4 flex justify-between items-center shadow-lg"> {/* Fondo verde esmeralda y sombra */}
 <Link href="/home"> {/* Cambiar a la ruta de tu página deseada */}
          <div className="text-green-100 font-bold text-lg cursor-pointer">
            MindTrack
          </div>
        </Link> {/* Texto en verde oscuro */}
      <div className="flex space-x-4 items-center">
      <Link href="/calendar" className="text-green-100 hover:text-green-900"> {/* Hover para un efecto más pronunciado */}
          {t("calendar")} {/* Usa traducción para "Iniciar Sesión" */}
        </Link>
      <Link href="/notas" className="text-green-100 hover:text-green-900"> {/* Hover para un efecto más pronunciado */}
          {t("notess")} {/* Usa traducción para "Iniciar Sesión" */}
        </Link>
        
          {/* Componente de Selección de Idioma */}
        <LanguageSelector />

        <Link href="/" className="text-green-100 hover:text-green-900"> {/* Hover para un efecto más pronunciado */}
          {t("logout")} {/* Usa traducción para "Iniciar Sesión" */}
        </Link>
        
        
      
      </div>
    </nav>
  );
}

export default NavbarH;