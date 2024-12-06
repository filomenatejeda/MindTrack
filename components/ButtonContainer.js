import React from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link'; // Importa Link de Next.js

const ButtonContainer = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-wrap justify-center space-x-8 mb-4"> {/* Ajustado margen inferior */}
      <Link href="/techniques" passHref>
        <button className="relative w-80 h-80 sm:w-60 sm:h-60 md:w-80 md:h-80 rounded-lg shadow-lg overflow-hidden mb-2"> {/* Responsivo */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://cbd.fakultisupplements.com/wp-content/uploads/2024/08/tecnicas-de-relajacion-para-la-ansiedad.jpg)',
              filter: 'brightness(0.5)', // Controla el brillo de la imagen
            }}
          ></div>
          <span suppressHydrationWarning={true} className="flex items-center justify-center text-lg font-semibold text-white relative z-10">
            {t('techniques')}
          </span>
        </button>
      </Link>

      <Link href="/habits" passHref>
        <button className="relative w-80 h-80 sm:w-60 sm:h-60 md:w-80 md:h-80 rounded-lg shadow-lg overflow-hidden mb-2"> {/* Responsivo */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://media.licdn.com/dms/image/v2/D4E12AQFChmeMPlMnAw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1662419589773?e=2147483647&v=beta&t=uHVdqO5Vqw8HmGTJylLkCaLiZ6QcYCYCwuKjuissum8)',
              filter: 'brightness(0.5)', // Controla el brillo de la imagen
            }}
          ></div>
          <span suppressHydrationWarning={true} className="flex items-center justify-center text-lg font-semibold text-white relative z-10">
            {t('habits')}
          </span>
        </button>
      </Link>

      <Link href="/profesionales" passHref>
        <button className="relative w-80 h-80 sm:w-60 sm:h-60 md:w-80 md:h-80 rounded-lg shadow-lg overflow-hidden mb-2"> {/* Responsivo */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://img.huffingtonpost.es/files/image_1200_720/uploads/2022/12/09/6392a18e36ecf.jpeg)',
              filter: 'brightness(0.5)', // Controla el brillo de la imagen
            }}
          ></div>
          <span suppressHydrationWarning={true} className="flex items-center justify-center text-lg font-semibold text-white relative z-10">
            {t('professionals')}
          </span>
        </button>
      </Link>

      <Link href="/recursos" passHref>
        <button className="relative w-80 h-80 sm:w-60 sm:h-60 md:w-80 md:h-80 rounded-lg shadow-lg overflow-hidden mb-4"> {/* Responsivo */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://observatorio.tec.mx/wp-content/uploads/2023/09/Recursos-educativos-digitales-un-as-bajo-la-manga.jpg)',
              filter: 'brightness(0.5)', // Controla el brillo de la imagen
            }}
          ></div>
          <span suppressHydrationWarning={true} className="flex items-center justify-center text-lg font-semibold text-white relative z-10">
            {t('resourses')}
          </span>
        </button>
      </Link>
    </div>
  );
};

export default ButtonContainer;






