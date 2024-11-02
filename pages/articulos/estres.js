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
                <h1 className="text-4xl font-bold bg-gradient-to-r from-teal-400 to-teal-600 text-white p-6 rounded-lg shadow-lg text-center">
                    Guía de Gestión del Estrés
                </h1>
                <p className="mt-4 text-teal-500 text-lg p-2 text-center">
                    Este artículo proporciona una visión profunda sobre el estrés, su impacto en los adolescentes y su gestión efectiva.
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
                    <p className="text-center">Haz clic en la portada para ver el PDF</p>
                </div>

                <div className="mt-10 bg-white p-6 rounded-lg shadow-xl transition-shadow hover:shadow-2xl">
                    <h2 className="text-2xl font-semibold mb-4 text-teal-500">Introducción al Estrés</h2>
                    <p className="text-gray-700 mb-2">
                        El estrés es una reacción normal y fisiológica del cuerpo que nos permite adaptarnos a situaciones difíciles o amenazantes. 
                        Durante la adolescencia, este puede intensificarse debido a cambios físicos, psicológicos y emocionales.
                    </p>
                </div>

                <div className="mt-10 bg-white p-6 rounded-lg shadow-xl transition-shadow hover:shadow-2xl">
                    <h2 className="text-2xl font-semibold mb-4 text-teal-500">El Estrés en la Adolescencia</h2>
                    <p className="text-gray-700 mb-2">
                        Los cambios hormonales y la búsqueda de identidad pueden generar tensiones que resultan en estrés adaptativo, 
                        afectando el bienestar de los jóvenes.
                    </p>
                </div>

                <div className="mt-10 bg-white p-6 rounded-lg shadow-xl transition-shadow hover:shadow-2xl">
                    <h2 className="text-2xl font-semibold mb-4 text-teal-500">Reconocimiento del Estrés</h2>
                    <p className="text-gray-700 mb-2">
                        Es crucial identificar los elementos que contribuyen al estrés y detectar cuando se vuelve desadaptativo, 
                        lo cual puede interferir con la vida cotidiana.
                    </p>
                </div>

                <div className="mt-10 bg-white p-6 rounded-lg shadow-xl transition-shadow hover:shadow-2xl">
                    <h2 className="text-2xl font-semibold mb-4 text-teal-500">¿Para Quién es Esta Guía?</h2>
                    <p className="text-gray-700 mb-2">
                        Dirigida a educadores, familiares y cualquier persona interesada en el bienestar de adolescentes y jóvenes, 
                        buscando herramientas para gestionar el estrés en entornos escolares y comunitarios.
                    </p>
                </div>

                <div className="mt-10 bg-white p-6 rounded-lg shadow-xl transition-shadow hover:shadow-2xl">
                    <h2 className="text-2xl font-semibold mb-4 text-teal-500">Objetivo de la Guía</h2>
                    <p className="text-gray-700 mb-2">
                        Esta guía busca fortalecer las medidas de prevención ante situaciones de estrés y promover el bienestar emocional 
                        en las escuelas y comunidades.
                    </p>
                </div>

                <div className="mt-10 bg-white p-6 rounded-lg shadow-xl transition-shadow hover:shadow-2xl">
                    <h2 className="text-2xl font-semibold mb-4 text-teal-500">Conclusión</h2>
                    <p className="text-gray-700 mb-2">
                        Comprender el estrés y su impacto es vital para apoyar a los jóvenes en su desarrollo y promover su bienestar.
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

export default StressManagementPage;
