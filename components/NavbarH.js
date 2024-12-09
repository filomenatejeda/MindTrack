// components/Navbar.js
'use client'
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';
import { useState, useEffect } from 'react'

function NavbarH() { 
  const { t } = useTranslation();
  const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <nav className="bg-teal-500 h-16 p-4 flex justify-between items-center shadow-lg"> {/* Fondo verde esmeralda y sombra */}
 <Link href="/home"> {/* Cambiar a la ruta de tu página deseada */}
          <div className="text-green-100 font-bold text-lg cursor-pointer pr-4">
            MindTrack
          </div>
        </Link> {/* Texto en verde oscuro */}
      <div className="flex space-x-4 items-center">
      <Link href="/recursos" suppressHydrationWarning={true} className="text-green-100 hover:text-green-900"> {/* Hover para un efecto más pronunciado */}
          {t("resoursess")} 
        </Link>
      <Link href="/profesionales" suppressHydrationWarning={true} className="text-green-100 hover:text-green-900"> {/* Hover para un efecto más pronunciado */}
          {t("cconextion")} 
        </Link>
      <Link href="/habits" suppressHydrationWarning={true} className="text-green-100 hover:text-green-900"> {/* Hover para un efecto más pronunciado */}
          {t("hhabits")} {/* Usa traducción para "Iniciar Sesión" */}
        </Link>
      <Link href="/techniques" suppressHydrationWarning={true} className="text-green-100 hover:text-green-900"> {/* Hover para un efecto más pronunciado */}
          {t("ttechniques")} {/* Usa traducción para "Iniciar Sesión" */}
        </Link>
      <Link href="/calendar" suppressHydrationWarning={true} className="text-green-100 hover:text-green-900"> {/* Hover para un efecto más pronunciado */}
          {t("calendar")} {/* Usa traducción para "Iniciar Sesión" */}
        </Link>
      <Link href="/notas" suppressHydrationWarning={true} className="text-green-100 hover:text-green-900"> {/* Hover para un efecto más pronunciado */}
          {t("notess")} 
        </Link>
        
          {/* Componente de Selección de Idioma */}
        <LanguageSelector />

        <Link href="/" suppressHydrationWarning={true} className="text-green-100 hover:text-green-900"> {/* Hover para un efecto más pronunciado */}
          {t("logout")} {/* Usa traducción para "Iniciar Sesión" */}
        </Link>
        
        
      
      </div>
    </nav>
  );
}

export default NavbarH;