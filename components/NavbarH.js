// components/Navbar.js
'use client'
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';

function NavbarH() { 
  const { t } = useTranslation();

  return (
    <nav className="bg-teal-500 p-4 flex justify-between items-center shadow-lg"> {/* Fondo verde esmeralda y sombra */}
      <div className="text-green-100 font-bold text-lg">MindTrack</div> {/* Texto en verde oscuro */}
      <div className="flex space-x-4 items-center">
       
        
          {/* Componente de Selección de Idioma */}
        <LanguageSelector />

        <Link href="/" className="text-green-800 hover:text-green-900"> {/* Hover para un efecto más pronunciado */}
          Cerrar Sesion {/* Usa traducción para "Iniciar Sesión" */}
        </Link>
        
      
      </div>
    </nav>
  );
}

export default NavbarH;