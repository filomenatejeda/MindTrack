import React, { useState } from 'react';
import Link from 'next/link';
import NavbarH from '../components/NavbarH';
import Footer from '../components/Footer';
import { useTranslation } from 'react-i18next';

const EducationResourcesPage = () => {
    const { t } = useTranslation();
    const [showMoreArticles, setShowMoreArticles] = useState(false);
    const [showMoreVideos, setShowMoreVideos] = useState(false);
    const [showMorePodcasts, setShowMorePodcasts] = useState(false);

    const articles = [
        { title: 'Artículos sobre ansiedad', link: '/articulos/ansiedad' },
        { title: 'Guía de manejo del estrés', link: '/articulos/manejo-estres' },
        { title: 'Importancia de la salud mental', link: '/articulos/salud-mental' },
        { title: 'Cómo mejorar la autoestima', link: '/articulos/mejorar-autoestima' },
    ];

    const videos = [
        { title: 'Técnicas de relajación', link: '/videos/relajacion' },
        { title: 'Superar una Depresión', link: '/videos/depresion' },
        { title: 'Manejo de ansiedad', link: '/videos/ansiedad' },
    ];

    const podcasts = [
        { title: 'Podcast sobre autoestima', link: '/podcasts/autoestima' },
        { title: 'Salud mental y bienestar', link: '/podcasts/salud-mental' },
        { title: 'Cómo enfrentar la depresión', link: '/podcasts/enfrentar-depresion' },
    ];

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="fixed top-0 w-full z-50">
                <NavbarH />
                <script src="https://cdn.tailwindcss.com"></script>
            </div>
            <div className="pt-20 p-4">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-teal-400 to-teal-600 text-white p-6 rounded-lg shadow-lg text-center">
                   Recursos Educativos
                </h1>
                <p className="mt-4 text-teal-500 text-lg p-2 text-center ">
                Recopilación de recursos valiosos para apoyar tu bienestar emocional y mental. Desde artículos informativos hasta videos y podcasts inspiradores, nuestro objetivo es proporcionarte herramientas y conocimientos que te ayuden a comprender mejor tu salud mental y a desarrollar estrategias para mejorarla. Explora los recursos disponibles y elige aquellos que más resuenen contigo en tu camino hacia una vida más equilibrada y plena.
                </p>

                {/* Sección de Artículos */}
                <div className="mt-10 bg-white p-6 rounded-lg shadow-xl transition-shadow hover:shadow-2xl">
                    <h2 className="text-2xl font-semibold mb-4 text-teal-500">{t('articles')}</h2>
                    <div className="flex flex-col space-y-4">
                        {articles.slice(0, showMoreArticles ? articles.length : 2).map((article, index) => (
                            <div key={index} className="bg-emerald-200 p-4 rounded-lg shadow-md">
                                <h3 className="text-xl font-bold text-green-600">{article.title}</h3>
                                <Link href={article.link} className="text-blue-500 hover:underline">
                                    Leer más
                                </Link>
                            </div>
                        ))}
                    </div>
                    <div className="mt-4">
                        <button onClick={() => setShowMoreArticles(!showMoreArticles)} className="bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600 transition duration-200">
                            {showMoreArticles ? t('show_less') : t('view_more')}
                        </button>
                    </div>
                </div>

                {/* Sección de Videos */}
                <div className="mt-10 bg-white p-6 rounded-lg shadow-xl transition-shadow hover:shadow-2xl">
                    <h2 className="text-2xl font-semibold mb-4 text-teal-500">{t('videos')}</h2>
                    <div className="flex flex-col space-y-4">
                        {videos.slice(0, showMoreVideos ? videos.length : 2).map((video, index) => (
                            <div key={index} className="bg-emerald-200 p-4 rounded-lg shadow-md">
                                <h3 className="text-xl font-bold text-green-600">{video.title}</h3>
                                <Link href={video.link} className="text-blue-500 hover:underline">
                                   Ver más
                                </Link>
                            </div>
                        ))}
                    </div>
                    <div className="mt-4">
                        <button onClick={() => setShowMoreVideos(!showMoreVideos)} className="bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600 transition duration-200">
                            {showMoreVideos ? t('show_less') : t('view_more')}
                        </button>
                    </div>
                </div>

                {/* Sección de Podcasts */}
                <div className="mt-10 bg-white p-6 rounded-lg shadow-xl transition-shadow hover:shadow-2xl">
                    <h2 className="text-2xl font-semibold mb-4 text-teal-500">{t('podcasts')}</h2>
                    <div className="flex flex-col space-y-4">
                        {podcasts.slice(0, showMorePodcasts ? podcasts.length : 2).map((podcast, index) => (
                            <div key={index} className="bg-emerald-200 p-4 rounded-lg shadow-md">
                                <h3 className="text-xl font-bold text-green-600">{podcast.title}</h3>
                                <Link href={podcast.link} className="text-blue-500 hover:underline">
                                    Escuchar más
                                </Link>
                            </div>
                        ))}
                    </div>
                    <div className="mt-4">
                        <button onClick={() => setShowMorePodcasts(!showMorePodcasts)} className="bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600 transition duration-200">
                            {showMorePodcasts ? t('show_less') : t('view_more')}
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default EducationResourcesPage;
