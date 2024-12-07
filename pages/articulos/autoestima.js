import React, { useState } from 'react';
import Link from 'next/link';
import NavbarH from '/components/NavbarH';
import Footer from '/components/Footer';
import { useTranslation } from 'react-i18next';

const SelfEsteemPage = () => {
    const { t } = useTranslation();
    const pdfUrl = 'https://www.redalyc.org/journal/279/27957772009/27957772009.pdf'; 
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="fixed top-0 w-full z-50">
                <NavbarH />
                <script src="https://cdn.tailwindcss.com"></script>
            </div>
            <div className="pt-20 p-4">
                <h1 suppressHydrationWarning={true} className="text-4xl font-bold bg-gradient-to-r from-teal-400 to-teal-600 text-white p-6 rounded-lg shadow-lg text-center">
                    {t('self_esteem')}
                </h1>
                <p suppressHydrationWarning={true} className="mt-4 text-teal-500 text-lg p-2 text-center">
                    {t('intoself_esteem')}
                </p>
                <div className="pdf-item mt-6" onClick={() => window.open(pdfUrl, '_blank')}>
                    <img
                        src="/autoestima.png"
                        alt="Portada de documento sobre autoestima"
                        onLoad={() => setImageLoaded(true)}
                        onError={() => setImageLoaded(false)}
                        style={{ width: '300px', height: '400px', cursor: 'pointer' }}
                        className="mx-auto mb-2 rounded-lg shadow-md transition-transform transform hover:scale-105"
                    />
                    <p suppressHydrationWarning={true} className="text-center"> {t('PDF')} </p>
                </div>

                <div className="mt-10 bg-white p-6 rounded-lg shadow-xl transition-shadow hover:shadow-2xl">
                    <h2 suppressHydrationWarning={true} className="text-2xl font-semibold mb-4 text-teal-500">  {t('what_self')} </h2>
                    <p suppressHydrationWarning={true} className="text-gray-700 mb-2">
                    {t('intowhat_self')}
                    </p>
                </div>

                <div className="mt-10 bg-white p-6 rounded-lg shadow-xl transition-shadow hover:shadow-2xl">
                    <h2 suppressHydrationWarning={true} className="text-2xl font-semibold mb-4 text-teal-500"> {t('importance_self')} </h2>
                    <p suppressHydrationWarning={true} className="text-gray-700 mb-2">
                    {t('intoimportance_self')}
                    </p>
                </div>

                <div className="mt-10 bg-white p-6 rounded-lg shadow-xl transition-shadow hover:shadow-2xl">
                    <h2 suppressHydrationWarning={true} className="text-2xl font-semibold mb-4 text-teal-500"> {t('factors_self')} </h2>
                    <p suppressHydrationWarning={true} className="text-gray-700 mb-2">
                    {t('intofactors_self')}
                    </p>
                </div>

                <div className="mt-10 bg-white p-6 rounded-lg shadow-xl transition-shadow hover:shadow-2xl">
                    <h2 suppressHydrationWarning={true} className="text-2xl font-semibold mb-4 text-teal-500"> {t('improve_self')} </h2>
                    <p suppressHydrationWarning={true} className="text-gray-700 mb-2">
                    {t('intoimprove_self')}
                    </p>
                </div>

                <div className="mt-10 bg-white p-6 rounded-lg shadow-xl transition-shadow hover:shadow-2xl text-center">
                    <Link suppressHydrationWarning={true}  href={"/recursos"} className="text-blue-500 hover:underline">
                    {t('educational_resources')} 
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default SelfEsteemPage;
