import React from 'react';
import Link from 'next/link';
import NavbarH from '/components/NavbarH';
import Footer from '/components/Footer';
import { useTranslation } from 'react-i18next';

const AnxietyControlPage = () => {
    const { t } = useTranslation();
    const videoUrl = 'https://www.youtube.com/embed/6gkZLHtMN_M'; // URL embebida para el video

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="fixed top-0 w-full z-50">
                <NavbarH />
                <script src="https://cdn.tailwindcss.com"></script>
            </div>
            <div className="pt-20 p-4">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-6 rounded-lg shadow-lg text-center">
                    5 Técnicas para Controlar la Ansiedad
                </h1>
                <p className="mt-4 text-indigo-500 text-lg p-2 text-center">
                    En este video, el psicólogo Gonzalo Ramírez explica cinco técnicas que puedes utilizar para calmar la ansiedad en tu día a día.
                </p>
                <div className="flex justify-center mt-10">
                    <iframe
                        className="rounded-lg shadow-lg"
                        width="560"
                        height="315"
                        src={videoUrl}
                        title="5 Técnicas para Controlar la Ansiedad"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>

                <div className="mt-10 bg-white p-6 rounded-lg shadow-xl transition-shadow hover:shadow-2xl">
                    <h2 className="text-2xl font-semibold mb-4 text-indigo-500">Resumen de las Técnicas</h2>
                    <ol className="list-decimal pl-6 space-y-4 text-gray-700">
                        <li>
                            <strong>Autoinstrucciones:</strong> Identificar pensamientos negativos y cambiarlos por afirmaciones positivas como "soy capaz" o "voy a hacerlo bien".
                        </li>
                        <li>
                            <strong>Distracción Cognitiva:</strong> Centrar la mente en otra actividad, como contar objetos alrededor, para reducir los síntomas de ansiedad.
                        </li>
                        <li>
                            <strong>Control de la Respiración:</strong> Practicar respiraciones lentas y profundas para reducir síntomas como palpitaciones y nerviosismo.
                        </li>
                        <li>
                            <strong>Relajación Progresiva de Jacobson:</strong> Tensión y relajación de diferentes grupos musculares, combinada con respiración profunda.
                        </li>
                        <li>
                            <strong>Imaginación Guiada:</strong> Visualizar un lugar tranquilo y seguro para reducir el estrés y la ansiedad.
                        </li>
                    </ol>
                    <p className="text-gray-700 mt-4">
                        Es importante recordar que estas técnicas no son un tratamiento completo para la ansiedad. Para casos intensos, considera acudir a un profesional de la salud.
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

export default AnxietyControlPage;
