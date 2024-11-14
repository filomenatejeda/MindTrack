import React from 'react';
import Link from 'next/link';
import NavbarH from '/components/NavbarH';
import Footer from '/components/Footer';
import { useTranslation } from 'react-i18next';

const SelfEsteemPage = () => {
    const { t } = useTranslation();
    const videoUrl = 'https://www.youtube.com/embed/tMz6Aw3IFEU'; // Cambia a la URL adecuada para el iframe

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="fixed top-0 w-full z-50">
                <NavbarH />
                <script src="https://cdn.tailwindcss.com"></script>
            </div>
            <div className="pt-20 p-4">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-teal-400 to-teal-600 text-white p-6 rounded-lg shadow-lg text-center">
                    {t('Podcast Depresión')}
                </h1>
                <p className="mt-4 text-teal-500 text-lg p-2 text-center">
                    {t('En este podcast, explora técnicas y estrategias para desarrollar una autoestima sana y equilibrada.')}
                </p>
                <div className="flex justify-center mt-10">
                    <iframe
                        className="rounded-lg shadow-lg w-full max-w-2xl"
                        height="315"
                        src={videoUrl}
                        title={t('Video sobre autoestima')}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>

                <div className="mt-10 bg-white p-6 rounded-lg shadow-xl transition-shadow hover:shadow-2xl">
                    <h2 className="text-2xl font-semibold mb-4 text-teal-500">{t('¿Qué es la Autoestima?')}</h2>
                    <p className="text-gray-700 mb-2">
                        {t('La autoestima es la valoración que cada persona tiene de sí misma. Es clave para el bienestar emocional, pues influye en cómo nos relacionamos con los demás y cómo enfrentamos los desafíos diarios.')}
                    </p>
                </div>

                <div className="mt-10 bg-white p-6 rounded-lg shadow-xl transition-shadow hover:shadow-2xl">
                    <h2 className="text-2xl font-semibold mb-4 text-teal-500">{t('Importancia de una Autoestima Sana')}</h2>
                    <p className="text-gray-700 mb-2">
                        {t('Una autoestima equilibrada nos permite aceptarnos tal y como somos, con nuestras fortalezas y debilidades. Nos ayuda a establecer límites, tener relaciones sanas y alcanzar nuestras metas.')}
                    </p>
                </div>

                <div className="mt-10 bg-white p-6 rounded-lg shadow-xl transition-shadow hover:shadow-2xl">
                    <h2 className="text-2xl font-semibold mb-4 text-teal-500">{t('Consejos para Fortalecer la Autoestima')}</h2>
                    <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                        <li>
                            <strong>{t('Practica la autocompasión:')}</strong> {t('Trátate con amabilidad y comprensión, especialmente cuando cometas errores.')}
                        </li>
                        <li>
                            <strong>{t('Desarrolla habilidades personales:')}</strong> {t('Realiza actividades que disfrutes y en las que quieras mejorar.')}
                        </li>
                        <li>
                            <strong>{t('Evita compararte:')}</strong> {t('Recuerda que cada persona tiene un camino diferente.')}
                        </li>
                        <li>
                            <strong>{t('Establece metas alcanzables:')}</strong> {t('Definir metas realistas te ayudará a avanzar paso a paso.')}
                        </li>
                        <li>
                            <strong>{t('Rodéate de personas positivas:')}</strong> {t('Las relaciones saludables contribuyen a una buena autoestima.')}
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

export default SelfEsteemPage;
