import React, { useState } from 'react';
import Link from 'next/link';
import NavbarH from '/components/NavbarH';
import Footer from '/components/Footer';
import { useTranslation } from 'react-i18next';

const AnxietyAwarenessPage = () => {
    const { t } = useTranslation();
    const pdfUrl = 'https://www.revista.unam.mx/vol.6/num11/art109/nov_art109.pdf'; 
    const [imageLoaded, setImageLoaded] = useState(false);
    
    return (
        <div className="min-h-screen bg-gray-100">
            <div className="fixed top-0 w-full z-50">
                <NavbarH />
                <script src="https://cdn.tailwindcss.com"></script>
            </div>
            <div className="pt-20 p-4">
                <h1 suppressHydrationWarning={true} className="text-4xl font-bold bg-gradient-to-r from-teal-400 to-teal-600 text-white p-6 rounded-lg shadow-lg text-center">
                 {t('anxietydisorders')}
                </h1>
                <p suppressHydrationWarning={true} className="mt-4 text-teal-500 text-lg p-2 text-center">
                {t('intoanxiety')}
                </p>
                <div className="pdf-item mt-6" onClick={() => window.open(pdfUrl, '_blank')}>
                    <img
                        src="/ansiedad.png" // Asegúrate de que el nombre y la ruta sean correctos
                        alt="Descripción de la imagen"
                        onLoad={() => setImageLoaded(true)}
                        onError={() => setImageLoaded(false)}
                        style={{ width: '300px', height: '400px', cursor: 'pointer' }} // Ajusta el tamaño según sea necesario
                        className="mx-auto mb-2 rounded-lg shadow-md transition-transform transform hover:scale-105" // Clases de Tailwind para efectos
                    />
                    <p suppressHydrationWarning={true} className="text-center"> {t('PDF')} </p>
                </div>

                <div className="mt-10 bg-white p-6 rounded-lg shadow-xl transition-shadow hover:shadow-2xl">
                    <h2 suppressHydrationWarning={true} className="text-2xl font-semibold mb-4 text-teal-500"> 
                        {t('definition_anxiety')} </h2>
                    <p suppressHydrationWarning={true} className="text-gray-700 mb-2">
                    {t('intodefinition_anxiety')}
                    </p>
                </div>

                <div className="mt-10 bg-white p-6 rounded-lg shadow-xl transition-shadow hover:shadow-2xl">
                    <h2 suppressHydrationWarning={true} className="text-2xl font-semibold mb-4 text-teal-500"> {t('prevalence')} </h2>
                    <p suppressHydrationWarning={true} className="text-gray-700 mb-2">
                    {t('intoprevalence')}
                    </p>
                </div>

                <div className="mt-10 bg-white p-6 rounded-lg shadow-xl transition-shadow hover:shadow-2xl">
                    <h2 suppressHydrationWarning={true} className="text-2xl font-semibold mb-4 text-teal-500"> {t('anxiety_disorders')} </h2>
                    <p suppressHydrationWarning={true} className="text-gray-700 mb-2">
                    {t('intoanxiety_disorders')}
                    </p>
                </div>

                <div className="mt-10 bg-white p-6 rounded-lg shadow-xl transition-shadow hover:shadow-2xl">
                    <h2 suppressHydrationWarning={true} className="text-2xl font-semibold mb-4 text-teal-500"> {t('etiology')} </h2>
                    <p suppressHydrationWarning={true} className="text-gray-700 mb-2">
                    {t('intoetiology')} 
                    </p>
                </div>

                <div className="mt-10 bg-white p-6 rounded-lg shadow-xl transition-shadow hover:shadow-2xl">
                    <h2 suppressHydrationWarning={true} className="text-2xl font-semibold mb-4 text-teal-500"> {t('daily_life')} </h2>
                    <p suppressHydrationWarning={true} className="text-gray-700 mb-2">
                    {t('intodaily_life')}
                    </p>
                </div>

                <div className="mt-10 bg-white p-6 rounded-lg shadow-xl transition-shadow hover:shadow-2xl">
                    <h2 suppressHydrationWarning={true} className="text-2xl font-semibold mb-4 text-teal-500"> {t('specific_types')} </h2>
                    <p suppressHydrationWarning={true} className="text-gray-700 mb-2">
                    {t('intospecific_types')}
                    </p>
                </div>

                <div className="mt-10 bg-white p-6 rounded-lg shadow-xl transition-shadow hover:shadow-2xl">
                    <h2 suppressHydrationWarning={true} className="text-2xl font-semibold mb-4 text-teal-500">{t('conclusion')}</h2>
                    <p suppressHydrationWarning={true} className="text-gray-700 mb-2">
                    {t('conclusion_anxiety')}
                    </p>
                </div>

                <div className="mt-10 bg-white p-6 rounded-lg shadow-xl transition-shadow hover:shadow-2xl text-center">
                    <Link suppressHydrationWarning={true}  href={"/recursos"} className="text-blue-500 hover:underline">
                    {t('educational_resources')} 
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AnxietyAwarenessPage;
