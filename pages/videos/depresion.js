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
                <h1 suppressHydrationWarning={true} className="text-4xl font-bold bg-gradient-to-r from-teal-400 to-teal-600 text-white p-6 rounded-lg shadow-lg text-center">
                {t('overcoming_depression')}
                </h1>
                <p suppressHydrationWarning={true} className="mt-4 text-teal-500 text-lg p-2 text-center">
                    {t('intoovercoming_depression')}
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
                    <h2 suppressHydrationWarning={true} className="text-2xl font-semibold mb-4 text-teal-500">  {t('key_aspects_depression')} </h2>
                    <p suppressHydrationWarning={true} className="text-gray-700 mb-2">
                        {t('depression_just_sadness')}
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li suppressHydrationWarning={true}> {t('loss_interest')} </li>
                        <li suppressHydrationWarning={true}> {t('concentration_problems')} </li>
                        <li suppressHydrationWarning={true}> {t('feelings_worthlessness')} </li>
                        <li suppressHydrationWarning={true}> {t('sleep_disturbances')} .</li>
                        <li suppressHydrationWarning={true}> {t('significant_weight')} </li>
                        <li suppressHydrationWarning={true}> {t('recurrent_thoughts')} </li>
                    </ul>
                </div>
                

                <div className="mt-10 bg-white p-6 rounded-lg shadow-xl transition-shadow hover:shadow-2xl">
                    <h2 suppressHydrationWarning={true} className="text-2xl font-semibold mb-4 text-teal-500">  {t('steps_address_depression')} </h2>
                    <ol  className="list-decimal pl-6 space-y-2 text-gray-700">
                        <li suppressHydrationWarning={true}>
                            <strong suppressHydrationWarning={true}> {t('seek_professional')} </strong> {t('guidance_psychologist')}
                        </li>
                        <li suppressHydrationWarning={true}>
                            <strong suppressHydrationWarning={true}> {t('consider_therapy')} </strong> {t('cognitive_behavioral')}
                        </li>
                        <li suppressHydrationWarning={true}>
                            <strong suppressHydrationWarning={true}> {t('medication')} </strong> {t('alhought_necessary')}
                        </li>
                        <li suppressHydrationWarning={true}>
                            <strong suppressHydrationWarning={true}> {t('activity_planning')} </strong> {t('recapturing_pleasurable')}
                        </li>
                        <li suppressHydrationWarning={true}>
                            <strong suppressHydrationWarning={true}> {t('physical_exercise')} </strong> {t('moderate_physical')}
                        </li>
                    </ol>
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

export default OvercomeDepressionPage;
