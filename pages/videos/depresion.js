import React from 'react';
import Link from 'next/link';
import NavbarH from '/components/NavbarH';
import Footer from '/components/Footer';
import { useTranslation } from 'react-i18next';

const OvercomeDepressionPage = () => {
    const { t } = useTranslation();
    const videoUrl = 'https://www.youtube.com/embed/qWS6lZqdfu4'; // Usar el formato adecuado para el iframe
    
    return (
        <div className="min-h-screen bg-gray-100">
            <div className="fixed top-0 w-full z-50">
                <NavbarH />
                <script src="https://cdn.tailwindcss.com"></script>
            </div>
            <div className="pt-20 p-4">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-teal-400 to-teal-600 text-white p-6 rounded-lg shadow-lg text-center">
                    Superar una Depresión
                </h1>
                <p className="mt-4 text-teal-500 text-lg p-2 text-center">
                    En este video, se discute la diferencia entre la tristeza y la depresión, explicando cómo la depresión es una enfermedad que afecta gravemente la vida de una persona.
                </p>
                <div className="flex justify-center mt-10">
                    <iframe
                        className="rounded-lg shadow-lg"
                        width="560"
                        height="315"
                        src={videoUrl}
                        title="Video sobre salud mental"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>

                <div className="mt-10 bg-white p-6 rounded-lg shadow-xl transition-shadow hover:shadow-2xl">
                    <h2 className="text-2xl font-semibold mb-4 text-teal-500">Aspectos Clave de la Depresión</h2>
                    <p className="text-gray-700 mb-2">
                        La depresión no es solo tristeza; implica sentir que no puedes con la vida y experimentar una serie de síntomas que pueden incapacitar. Algunos de estos síntomas incluyen:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li>Pérdida de interés en actividades que antes disfrutabas.</li>
                        <li>Problemas de concentración y fatiga constante.</li>
                        <li>Sentimientos de inutilidad o culpa excesiva.</li>
                        <li>Alteraciones en el sueño (insomnio o hipersomnia).</li>
                        <li>Pérdida significativa de peso sin dieta.</li>
                        <li>Pensamientos recurrentes sobre la muerte o el suicidio.</li>
                    </ul>
                </div>

                <div className="mt-10 bg-white p-6 rounded-lg shadow-xl transition-shadow hover:shadow-2xl">
                    <h2 className="text-2xl font-semibold mb-4 text-teal-500">Pasos para Abordar la Depresión</h2>
                    <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                        <li>
                            <strong>Buscar ayuda profesional:</strong> Es esencial contar con la guía de un psicólogo o psiquiatra para un diagnóstico adecuado y tratamiento efectivo.
                        </li>
                        <li>
                            <strong>Considerar la terapia:</strong> La terapia cognitivo-conductual es una de las formas más efectivas de tratamiento, que ayuda a identificar y cambiar pensamientos distorsionados.
                        </li>
                        <li>
                            <strong>Medicación:</strong> Aunque no siempre es necesaria, en algunos casos los antidepresivos pueden ser recetados. Es importante no automedicarse.
                        </li>
                        <li>
                            <strong>Planificación de actividades:</strong> Recuperar actividades placenteras puede mejorar el estado de ánimo. La programación ayuda a evitar la pasividad y el aislamiento.
                        </li>
                        <li>
                            <strong>Ejercicio físico:</strong> La actividad física moderada también contribuye a la mejora del bienestar emocional.
                        </li>
                    </ol>
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

export default OvercomeDepressionPage;
