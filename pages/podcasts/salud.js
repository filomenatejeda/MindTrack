import React from 'react';
import Link from 'next/link';
import NavbarH from '/components/NavbarH';
import Footer from '/components/Footer';
import { useTranslation } from 'react-i18next';

const EmotionalBurnoutPage = () => {
    const { t } = useTranslation();
    const videoUrl = 'https://www.youtube.com/embed/vUTfy8dP8vM'; // Cambia a la URL adecuada para el iframe

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="fixed top-0 w-full z-50">
                <NavbarH />
                <script src="https://cdn.tailwindcss.com"></script>
            </div>
            <div className="pt-20 p-4">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-teal-400 to-teal-600 text-white p-6 rounded-lg shadow-lg text-center">
                    {t('¿Cómo lidiar con el agotamiento emocional y mental?')}
                </h1>
                <p className="mt-4 text-teal-500 text-lg p-2 text-center">
                    {t('En este video, exploramos el agotamiento emocional y mental, sus causas y cómo abordarlo de manera saludable.')}
                </p>
                <div className="flex justify-center mt-10">
                    <iframe
                        className="rounded-lg shadow-lg w-full max-w-2xl"
                        height="315"
                        src={videoUrl}
                        title={t('Video sobre agotamiento emocional')}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>

                <div className="mt-10 bg-white p-6 rounded-lg shadow-xl transition-shadow hover:shadow-2xl">
                    <h2 className="text-2xl font-semibold mb-4 text-teal-500">{t('¿Qué es el Agotamiento Emocional?')}</h2>
                    <p className="text-gray-700 mb-2">
                        {t('El agotamiento emocional es una sensación de estar completamente exhausto en el aspecto mental y emocional. Puede ser causado por el estrés constante, las responsabilidades abrumadoras o situaciones personales difíciles.')}
                    </p>
                </div>

                <div className="mt-10 bg-white p-6 rounded-lg shadow-xl transition-shadow hover:shadow-2xl">
                    <h2 className="text-2xl font-semibold mb-4 text-teal-500">{t('Signos de Agotamiento Emocional')}</h2>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li>{t('Sensación de fatiga constante y falta de energía.')}</li>
                        <li>{t('Dificultad para concentrarse y tomar decisiones.')}</li>
                        <li>{t('Sentimientos de desmotivación y desesperanza.')}</li>
                        <li>{t('Irritabilidad o cambios de humor frecuentes.')}</li>
                        <li>{t('Tendencia al aislamiento o deseo de alejarse de los demás.')}</li>
                    </ul>
                </div>

                <div className="mt-10 bg-white p-6 rounded-lg shadow-xl transition-shadow hover:shadow-2xl">
                    <h2 className="text-2xl font-semibold mb-4 text-teal-500">{t('Consejos para Manejar el Agotamiento Emocional')}</h2>
                    <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                        <li>
                            <strong>{t('Practica el autocuidado:')}</strong> {t('Dedica tiempo para actividades que disfrutes y te relajen.')}
                        </li>
                        <li>
                            <strong>{t('Establece límites:')}</strong> {t('Evita comprometerte en exceso y aprende a decir no cuando sea necesario.')}
                        </li>
                        <li>
                            <strong>{t('Realiza ejercicio físico:')}</strong> {t('El ejercicio ayuda a reducir el estrés y a mejorar el estado de ánimo.')}
                        </li>
                        <li>
                            <strong>{t('Conéctate con los demás:')}</strong> {t('Hablar con amigos o familiares puede ser una gran fuente de apoyo emocional.')}
                        </li>
                        <li>
                            <strong>{t('Busca ayuda profesional:')}</strong> {t('Si el agotamiento persiste, considera la posibilidad de hablar con un terapeuta o consejero.')}
                        </li>
                    </ol>
                </div>

                <div className="mt-10 bg-white p-6 rounded-lg shadow-xl transition-shadow hover:shadow-2xl text-center">
                    <Link href="/recursos" className="text-blue-500 hover:underline">
                        {t('Recursos Educativos')}
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default EmotionalBurnoutPage;
