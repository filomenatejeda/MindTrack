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
                <h1 suppressHydrationWarning={true} className="text-4xl font-bold bg-gradient-to-r from-teal-400 to-teal-600 text-white p-6 rounded-lg shadow-lg text-center">
                {t('relaxation_techniques')}
                </h1>
                <p suppressHydrationWarning={true} className="mt-4 text-teal-500 text-lg p-2 text-center">
                {t('intorelaxation_techniques')}
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
                    <h2 suppressHydrationWarning={true} className="text-2xl font-semibold mb-4 text-teal-500"> {t('benefits_relaxation')} </h2>
                    <p suppressHydrationWarning={true} className="text-gray-700 mb-2">
                    {t('relaxation_can_help_you')}
                    </p>
                    <ul  className="list-disc pl-6 space-y-2 text-gray-700">
                        <li suppressHydrationWarning={true}>{t('reduce_anxiety_and_stress')}</li>
                        <li suppressHydrationWarning={true}>{t('improve_sleep_quality')}</li>
                        <li suppressHydrationWarning={true}> {t('increase_concentration_mental')} </li>
                        <li suppressHydrationWarning={true}>  {t('promote_sense_well')} </li>
                        <li suppressHydrationWarning={true}>  {t('improve_response')} </li>
                    </ul>
                </div>
                
                <div suppressHydrationWarning={true} className="mt-10 bg-white p-6 rounded-lg shadow-xl transition-shadow hover:shadow-2xl">
                    <h2 suppressHydrationWarning={true} className="text-2xl font-semibold mb-4 text-teal-500"> {t('suggested_techniques')} </h2>
                    <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                        <li suppressHydrationWarning={true}>
                            <strong suppressHydrationWarning={true}> {t('deep_breathing')} </strong> {t('practice_inhaling')}
                        </li>
                        <li suppressHydrationWarning={true}>
                            <strong suppressHydrationWarning={true}> {t('guided_visualization')} </strong> {t('imagine_quiet_relaxing')}
                        </li>
                        <li suppressHydrationWarning={true}>
                            <strong suppressHydrationWarning={true}> {t('yoga_stretching')} </strong> {t('perform_gentle_postures')}
                        </li>
                        <li suppressHydrationWarning={true}>
                            <strong suppressHydrationWarning={true}> {t('listen_relaxing')} </strong> {t('select_soft_melodies')}
                        </li>
                        <li suppressHydrationWarning={true}>
                            <strong suppressHydrationWarning={true}>{t('meditation')}:</strong> {t('spend_few_minutes')}
                        </li>
                    </ol>
                </div>

                <div className="mt-10 bg-white p-6 rounded-lg shadow-xl transition-shadow hover:shadow-2xl text-center">
                    <Link suppressHydrationWarning={true} href={"/recursos"}  className="text-blue-500 hover:underline">
                    {t('educational_resources')}
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default OvercomeDepressionPage;
