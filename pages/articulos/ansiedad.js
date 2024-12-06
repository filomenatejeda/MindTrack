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
                    <h2 suppressHydrationWarning={true} className="text-2xl font-semibold mb-4 text-teal-500">Definición y Percepción de la Ansiedad</h2>
                    <p suppressHydrationWarning={true} className="text-gray-700 mb-2">
                        A menudo, las personas catalogan a quienes sufren de ansiedad con términos despectivos, lo que puede llevar a un sufrimiento adicional. 
                        La ansiedad es un sentimiento normal de temor, pero puede volverse patológica cuando ocurre sin un motivo real.
                    </p>
                </div>

                <div className="mt-10 bg-white p-6 rounded-lg shadow-xl transition-shadow hover:shadow-2xl">
                    <h2 suppressHydrationWarning={true} className="text-2xl font-semibold mb-4 text-teal-500">Prevalencia</h2>
                    <p suppressHydrationWarning={true} className="text-gray-700 mb-2">
                        Los trastornos de ansiedad son comunes en México, afectando al 14.8% de la población, con mayor incidencia en mujeres y jóvenes.
                    </p>
                </div>

                <div className="mt-10 bg-white p-6 rounded-lg shadow-xl transition-shadow hover:shadow-2xl">
                    <h2 suppressHydrationWarning={true} className="text-2xl font-semibold mb-4 text-teal-500">Clasificación de los Trastornos de Ansiedad</h2>
                    <p suppressHydrationWarning={true} className="text-gray-700 mb-2">
                        Los trastornos incluyen el trastorno de ansiedad generalizada, agorafobia, crisis de pánico, y fobias sociales y específicas.
                    </p>
                </div>

                <div className="mt-10 bg-white p-6 rounded-lg shadow-xl transition-shadow hover:shadow-2xl">
                    <h2 suppressHydrationWarning={true} className="text-2xl font-semibold mb-4 text-teal-500">Etiología y Fisiología</h2>
                    <p suppressHydrationWarning={true} className="text-gray-700 mb-2">
                        Se discuten causas hereditarias y disfunciones en neurotransmisores, así como la función del sistema nervioso autónomo.
                    </p>
                </div>

                <div className="mt-10 bg-white p-6 rounded-lg shadow-xl transition-shadow hover:shadow-2xl">
                    <h2 suppressHydrationWarning={true} className="text-2xl font-semibold mb-4 text-teal-500">Impacto en la Vida Cotidiana</h2>
                    <p suppressHydrationWarning={true} className="text-gray-700 mb-2">
                        La ansiedad puede afectar la concentración y generar distorsiones que dificultan el funcionamiento diario.
                    </p>
                </div>

                <div className="mt-10 bg-white p-6 rounded-lg shadow-xl transition-shadow hover:shadow-2xl">
                    <h2 suppressHydrationWarning={true} className="text-2xl font-semibold mb-4 text-teal-500">Tipos Específicos de Trastornos</h2>
                    <p suppressHydrationWarning={true} className="text-gray-700 mb-2">
                        Se describen trastornos como la agorafobia y fobias sociales, donde las personas evitan interacciones por miedo a ser evaluadas.
                    </p>
                </div>

                <div className="mt-10 bg-white p-6 rounded-lg shadow-xl transition-shadow hover:shadow-2xl">
                    <h2 suppressHydrationWarning={true} className="text-2xl font-semibold mb-4 text-teal-500">Conclusión y Necesidad de Comprensión</h2>
                    <p suppressHydrationWarning={true} className="text-gray-700 mb-2">
                        Es vital reconocer los trastornos de ansiedad como condiciones de salud mental que requieren atención y tratamiento.
                    </p>
                </div>

                <div suppressHydrationWarning={true} className="mt-10 bg-white p-6 rounded-lg shadow-xl transition-shadow hover:shadow-2xl text-center">
                    <Link href={"/recursos"} className="text-blue-500 hover:underline">
                    {t('educational_resources')} 
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AnxietyAwarenessPage;
