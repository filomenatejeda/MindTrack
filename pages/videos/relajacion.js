import React from 'react';
import Link from 'next/link';
import NavbarH from '/components/NavbarH';
import Footer from '/components/Footer';
import { useTranslation } from 'react-i18next';

const OvercomeDepressionPage = () => {
    const { t } = useTranslation();
    const videoUrl = 'https://www.youtube.com/embed/MSLLOvsJ4n4'; // URL del video de relajación
    
    return (
        <div className="min-h-screen bg-gray-100">
            <div className="fixed top-0 w-full z-50">
                <NavbarH />
                <script src="https://cdn.tailwindcss.com"></script>
            </div>
            <div className="pt-20 p-4">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-teal-400 to-teal-600 text-white p-6 rounded-lg shadow-lg text-center">
                    Técnicas de Relajación
                </h1>
                <p className="mt-4 text-teal-500 text-lg p-2 text-center">
                    En este video, exploramos diferentes técnicas de relajación que pueden ayudarte a reducir el estrés y mejorar tu bienestar emocional.
                </p>
                <div className="flex justify-center mt-10">
                    <iframe
                        className="rounded-lg shadow-lg"
                        width="560"
                        height="315"
                        src={videoUrl}
                        title="Video sobre relajación"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>

                <div className="mt-10 bg-white p-6 rounded-lg shadow-xl transition-shadow hover:shadow-2xl">
                    <h2 className="text-2xl font-semibold mb-4 text-teal-500">Beneficios de las Técnicas de Relajación</h2>
                    <p className="text-gray-700 mb-2">
                        La relajación puede ayudarte a:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li>Reducir la ansiedad y el estrés.</li>
                        <li>Mejorar la calidad del sueño.</li>
                        <li>Aumentar la concentración y la claridad mental.</li>
                        <li>Promover una sensación de bienestar y calma.</li>
                        <li>Mejorar la respuesta del cuerpo ante situaciones estresantes.</li>
                    </ul>
                </div>

                <div className="mt-10 bg-white p-6 rounded-lg shadow-xl transition-shadow hover:shadow-2xl">
                    <h2 className="text-2xl font-semibold mb-4 text-teal-500">Técnicas Sugeridas</h2>
                    <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                        <li>
                            <strong>Respiración profunda:</strong> Practica inhalar profundamente por la nariz, sosteniendo el aire unos segundos y exhalando lentamente por la boca.
                        </li>
                        <li>
                            <strong>Visualización guiada:</strong> Imagina un lugar tranquilo y relajante, como una playa o un bosque, y sumérgete en esa sensación de paz.
                        </li>
                        <li>
                            <strong>Yoga y estiramientos:</strong> Realiza posturas suaves que liberen tensión acumulada en el cuerpo y ayuden a calmar la mente.
                        </li>
                        <li>
                            <strong>Escucha música relajante:</strong> Selecciona melodías suaves que te ayuden a desconectar y a encontrar un estado de calma.
                        </li>
                        <li>
                            <strong>Meditación:</strong> Dedica unos minutos al día para meditar y enfocar tu mente, permitiendo que los pensamientos fluyan sin juzgarlos.
                        </li>
                    </ol>
                </div>

                <div className="mt-10 bg-white p-6 rounded-lg shadow-xl transition-shadow hover:shadow-2xl text-center">
                    <Link href={"/recursos"}  className="text-blue-500 hover:underline">
                        Recursos Educativos
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default OvercomeDepressionPage;
