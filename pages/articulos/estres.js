import React, { useState } from 'react';
import Link from 'next/link';
import NavbarH from '/components/NavbarH';
import Footer from '/components/Footer';
import { useTranslation } from 'react-i18next';

const StressManagementPage = () => {
    const { t } = useTranslation();
    const pdfUrl = 'https://www.gob.mx/cms/uploads/attachment/file/816626/Guia_Gestion_Estres.pdf'; 
    const [imageLoaded, setImageLoaded] = useState(false);
    
    return (
        <div className="min-h-screen bg-gray-100">
            <div className="fixed top-0 w-full z-50">
                <NavbarH />
                <script src="https://cdn.tailwindcss.com"></script>
            </div>
            <div className="pt-20 p-4">
                <h1 suppressHydrationWarning={true} className="text-4xl font-bold bg-gradient-to-r from-teal-400 to-teal-600 text-white p-6 rounded-lg shadow-lg text-center">
                {t('stressmanagement')}
                </h1>
                <p suppressHydrationWarning={true} className="mt-4 text-teal-500 text-lg p-2 text-center">
                {t('intostressmanagement')}
                </p>
                <div className="pdf-item mt-6" onClick={() => window.open(pdfUrl, '_blank')}>
                    <img
                        src="/estres.png" // Asegúrate de que el nombre y la ruta sean correctos
                        alt="Descripción de la imagen"
                        onLoad={() => setImageLoaded(true)}
                        onError={() => setImageLoaded(false)}
                        style={{ width: '300px', height: '400px', cursor: 'pointer' }} // Ajusta el tamaño según sea necesario
                        className="mx-auto mb-2 rounded-lg shadow-md transition-transform transform hover:scale-105" // Clases de Tailwind para efectos
                    />
                    <p suppressHydrationWarning={true} className="text-center"> {t('PDF')} </p>
                </div>

                <div className="mt-10 bg-white p-6 rounded-lg shadow-xl transition-shadow hover:shadow-2xl">
                    <h2 suppressHydrationWarning={true} className="text-2xl font-semibold mb-4 text-teal-500"> {t('introduction_stress')} </h2>
                    <p suppressHydrationWarning={true} className="text-gray-700 mb-2">
                    {t('intointroduction_stress')}
                    </p>
                </div>

                <div className="mt-10 bg-white p-6 rounded-lg shadow-xl transition-shadow hover:shadow-2xl">
                    <h2 suppressHydrationWarning={true} className="text-2xl font-semibold mb-4 text-teal-500"> {t('stress_adolescence')} </h2>
                    <p suppressHydrationWarning={true} className="text-gray-700 mb-2">
                    {t('intostress_adolescence')}
                    </p>
                </div>

                <div className="mt-10 bg-white p-6 rounded-lg shadow-xl transition-shadow hover:shadow-2xl">
                    <h2 suppressHydrationWarning={true} className="text-2xl font-semibold mb-4 text-teal-500"> {t('stress_recognition')} </h2>
                    <p suppressHydrationWarning={true} className="text-gray-700 mb-2">
                    {t('intostress_recognition')}
                    </p>
                </div>

                <div className="mt-10 bg-white p-6 rounded-lg shadow-xl transition-shadow hover:shadow-2xl">
                    <h2 suppressHydrationWarning={true} className="text-2xl font-semibold mb-4 text-teal-500"> {t('guide_stress')} </h2>
                    <p suppressHydrationWarning={true} className="text-gray-700 mb-2">
                    {t('intoguide_stress')}
                    </p>
                </div>

                <div className="mt-10 bg-white p-6 rounded-lg shadow-xl transition-shadow hover:shadow-2xl">
                    <h2 suppressHydrationWarning={true} className="text-2xl font-semibold mb-4 text-teal-500"> {t('objective_stress')} </h2>
                    <p suppressHydrationWarning={true} className="text-gray-700 mb-2">
                    {t('intobjective_stress')}
                    </p>
                </div>

                <div className="mt-10 bg-white p-6 rounded-lg shadow-xl transition-shadow hover:shadow-2xl">
                    <h2 suppressHydrationWarning={true} className="text-2xl font-semibold mb-4 text-teal-500"> {t('conclusion')} </h2>
                    <p suppressHydrationWarning={true} className="text-gray-700 mb-2">
                        {t('conclusion_stress')}
                    </p>
                </div>

                <div  className="mt-10 bg-white p-6 rounded-lg shadow-xl transition-shadow hover:shadow-2xl text-center">
                    <Link suppressHydrationWarning={true}  href={"/recursos"} className="text-blue-500 hover:underline">
                    {t('educational_resources')} 
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default StressManagementPage;
