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
                <h1 suppressHydrationWarning={true} className="text-4xl font-bold bg-gradient-to-r from-teal-400 to-teal-600 text-white p-6 rounded-lg shadow-lg text-center">
                {t('control_anxiety_techniques')}
                </h1>
                <p suppressHydrationWarning={true} className="mt-4 text-teal-500 text-lg p-2 text-center">
                    {t('intocontrol_anxiety_techniques')}
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
                    <h2 suppressHydrationWarning={true}className="text-2xl font-semibold mb-4 text-teal-500"> {t('summary_techniques')} </h2>
                    <ol className="list-decimal pl-6 space-y-4 text-gray-700">
                        <li suppressHydrationWarning={true}>
                            <strong suppressHydrationWarning={true}> {t('self_instructions')} </strong> {t('identifying_negative')}
                        </li>
                        <li suppressHydrationWarning={true}>
                            <strong suppressHydrationWarning={true}> {t('cognitive_distraction')} </strong> {t('focusing_another_activity')}
                        </li>
                        <li suppressHydrationWarning={true}>
                            <strong suppressHydrationWarning={true}> {t('breating_control')} </strong> {t('practing_show')}
                        </li>
                        <li suppressHydrationWarning={true}>
                            <strong suppressHydrationWarning={true}> {t('jacob_progressive')} </strong> {t('tension_relaxation')}
                        </li>
                        <li suppressHydrationWarning={true}>
                            <strong suppressHydrationWarning={true}> {t('guided_imagery')} </strong> {t('visualizing_calm')}
                        </li>
                    </ol>
                    <p suppressHydrationWarning={true} className="text-gray-700 mt-4">
                        {t('important_remember')}
                    </p>
                </div>
                <div className="mt-10 bg-white p-6 rounded-lg shadow-xl transition-shadow hover:shadow-2xl text-center">
                    <Link suppressHydrationWarning={true} href={"/recursos"} className="text-blue-500 hover:underline">
                    {t('educational_resources')}
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AnxietyControlPage;
