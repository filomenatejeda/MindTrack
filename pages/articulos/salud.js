import React, { useState } from 'react';
import Link from 'next/link';
import NavbarH from '/components/NavbarH';
import Footer from '/components/Footer';
import { useTranslation } from 'react-i18next';

const MentalHealthPage = () => {
    const { t } = useTranslation();
    const pdfUrl = 'https://www.redalyc.org/journal/279/27957772009/27957772009.pdf'; 
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="fixed top-0 w-full z-50">
                <NavbarH />
                <script src="https://cdn.tailwindcss.com"></script>
            </div>
            <div className="pt-20 p-4">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-teal-400 to-teal-600 text-white p-6 rounded-lg shadow-lg text-center">
                    ¿Qué es la salud mental y por qué es importante?
                </h1>
                <p className="mt-4 text-teal-500 text-lg p-2 text-center">
                    Este artículo explora el concepto de salud mental, su relevancia en nuestras vidas y cómo influye en el bienestar general.
                </p>
                <div className="pdf-item mt-6" onClick={() => window.open(pdfUrl, '_blank')}>
                    <img
                        src="/salud.png"
                        alt="Portada de documento sobre salud mental"
                        onLoad={() => setImageLoaded(true)}
                        onError={() => setImageLoaded(false)}
                        style={{ width: '300px', height: '400px', cursor: 'pointer' }}
                        className="mx-auto mb-2 rounded-lg shadow-md transition-transform transform hover:scale-105"
                    />
                    <p className="text-center">Haz clic en la portada para ver el PDF</p>
                </div>

                <div className="mt-10 bg-white p-6 rounded-lg shadow-xl transition-shadow hover:shadow-2xl">
                    <h2 className="text-2xl font-semibold mb-4 text-teal-500">¿Qué es la Salud Mental?</h2>
                    <p className="text-gray-700 mb-2">
                        La salud mental es un estado de bienestar en el cual la persona es consciente de sus capacidades, puede afrontar las tensiones normales de la vida, trabajar de forma productiva y contribuir a su comunidad.
                    </p>
                </div>

                <div className="mt-10 bg-white p-6 rounded-lg shadow-xl transition-shadow hover:shadow-2xl">
                    <h2 className="text-2xl font-semibold mb-4 text-teal-500">Importancia de la Salud Mental</h2>
                    <p className="text-gray-700 mb-2">
                        La salud mental afecta cómo pensamos, sentimos y actuamos en cada etapa de nuestra vida. Mantener un equilibrio en esta área permite un desarrollo personal, social y emocional adecuado.
                    </p>
                </div>

                <div className="mt-10 bg-white p-6 rounded-lg shadow-xl transition-shadow hover:shadow-2xl">
                    <h2 className="text-2xl font-semibold mb-4 text-teal-500">Factores que Afectan la Salud Mental</h2>
                    <p className="text-gray-700 mb-2">
                        Existen diversos factores que pueden influir en la salud mental, incluyendo factores biológicos como la genética, experiencias de vida como trauma o abuso, y antecedentes familiares de problemas de salud mental.
                    </p>
                </div>

                <div className="mt-10 bg-white p-6 rounded-lg shadow-xl transition-shadow hover:shadow-2xl">
                    <h2 className="text-2xl font-semibold mb-4 text-teal-500">Promoción y Cuidado de la Salud Mental</h2>
                    <p className="text-gray-700 mb-2">
                        Cuidar nuestra salud mental implica reconocer nuestras emociones, buscar apoyo en momentos de necesidad y adoptar hábitos saludables, como la meditación, el ejercicio regular y el tiempo de descanso adecuado.
                    </p>
                </div>

                <div className="mt-10 bg-white p-6 rounded-lg shadow-xl transition-shadow hover:shadow-2xl text-center">
                    <Link href={"/recursos"} className="text-blue-500 hover:underline">
                        Recursos Educativos
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default MentalHealthPage;
