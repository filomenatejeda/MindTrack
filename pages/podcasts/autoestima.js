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
                <h1 suppressHydrationWarning={true} className="text-4xl font-bold bg-gradient-to-r from-teal-400 to-teal-600 text-white p-6 rounded-lg shadow-lg text-center">
                    {t('healthy_self_esteem')}
                </h1>
                <p suppressHydrationWarning={true} className="mt-4 text-teal-500 text-lg p-2 text-center">
                {t('intohealthy_self_esteem')}
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
                    <h2 suppressHydrationWarning={true} className="text-2xl font-semibold mb-4 text-teal-500">{t('what_self_esteem')}</h2>
                    <p suppressHydrationWarning={true} className="text-gray-700 mb-2">
                        {t('intowhat_self_esteem')}
                    </p>
                </div>

                <div suppressHydrationWarning={true} className="mt-10 bg-white p-6 rounded-lg shadow-xl transition-shadow hover:shadow-2xl">
                    <h2 suppressHydrationWarning={true} className="text-2xl font-semibold mb-4 text-teal-500">{t('importance_self_esteem')}</h2>
                    <p suppressHydrationWarning={true} className="text-gray-700 mb-2">
                        {t('intoimportance_self_esteem')}
                    </p>
                </div>
                
                <div className="mt-10 bg-white p-6 rounded-lg shadow-xl transition-shadow hover:shadow-2xl">
                    <h2 suppressHydrationWarning={true} className="text-2xl font-semibold mb-4 text-teal-500">{t('tips_strengthening')}</h2>
                    <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                        <li suppressHydrationWarning={true}>
                            <strong suppressHydrationWarning={true}>{t('practice_self_compassion')}</strong> {t('treat_yourself_kidness')}
                        </li>
                        <li suppressHydrationWarning={true}>
                            <strong suppressHydrationWarning={true}>{t('devolep_personal')}</strong> {t('engage_activities')}
                        </li>
                        <li suppressHydrationWarning={true}>
                            <strong suppressHydrationWarning={true}>{t('avoid_comparing')}</strong> {t('Rremember_everyones')}
                        </li>
                        <li suppressHydrationWarning={true}>
                            <strong suppressHydrationWarning={true}>{t('set_achievable')}</strong> {t('setting_realistic')}
                        </li>
                        <li suppressHydrationWarning={true}>
                            <strong suppressHydrationWarning={true}>{t('surround_yourself')}</strong> {t('healthy_relationships')}
                        </li>
                    </ol>
                </div>

                <div className="mt-10 bg-white p-6 rounded-lg shadow-xl transition-shadow hover:shadow-2xl text-center">
                    <Link suppressHydrationWarning={true} href="/recursos" className="text-blue-500 hover:underline">
                        {t('educational_resources')}
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default SelfEsteemPage;
