'use client';
import React from 'react';
import NavbarH from '../components/NavbarH';
import Link from 'next/link'; // Importa Link desde next/link
import { useTranslation } from 'react-i18next';
import Footer from '../components/Footer';

const professionals = [
    {
        id: 1,
        name: 'Dr. Ana Pérez',
        specialty: 'psychology',
        contact: 'ana.perez@example.com',
        image: 'https://i.pinimg.com/originals/16/e3/16/16e31690d95888a1532ea992b8f3ddf4.jpg', // Ruta de la imagen
        description:
            'ana_descripcion',
    },
    {
        id: 2,
        name: 'Lic. Juan López',
        specialty: 'psychiatry',
        contact: 'juan.lopez@example.com',
        image: 'https://i.pinimg.com/originals/16/e3/16/16e31690d95888a1532ea992b8f3ddf4.jpg', // Ruta de la imagen
        description:
            'juan_descripcion',
    },
    {
        id: 3,
        name: 'Dra. María García',
        specialty: 'therapy_occupational',
        contact: 'maria.garcia@example.com',
        image: 'https://i.pinimg.com/236x/d9/d8/8e/d9d88e3d1f74e2b8ced3df051cecb81d.jpg', // Ruta de la imagen
        description:
            'maria_descripcion',
    },
    // Agrega más profesionales según sea necesario
];

export default function ContactProfessionals() {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <title>{t('contact_professionals')}</title>
            <div className="fixed top-0 w-full z-50">
                <NavbarH />
                <script src="https://cdn.tailwindcss.com"></script>
            </div>
            <div className="flex-grow p-2 pt-24 sm:pt-20 lg:pt-22 ">
                <h1
                    suppressHydrationWarning={true}
                    className="text-4xl font-bold bg-gradient-to-r from-teal-400 to-teal-600 text-white p-6 rounded-lg shadow-lg text-center"
                >
                    {t('contact_professionals')}
                </h1>
                <p className="mt-4 text-black text-lg p-2 text-center">
                   {t('intocontact_professionals')}
                </p>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {professionals.map((professional) => (
                        <div
                            key={professional.id}
                            className="bg-white p-6 rounded-lg shadow-lg transition-shadow hover:shadow-2xl"
                        >
                            <div className="flex items-center mb-4">
                                <img
                                    src={professional.image}
                                    alt={professional.name}
                                    className="w-16 h-16 rounded-full mr-4 border-2 border-teal-500"
                                />
                                <div>
                                    <h2 className="text-2xl font-semibold text-teal-500">
                                        {professional.name}
                                    </h2>
                                    <p suppressHydrationWarning={true} className="text-lg text-gray-700">
                                        {t(professional.specialty)}
                                    </p>
                                </div>
                            </div>
                            <p suppressHydrationWarning={true} className="text-gray-600 mb-4">
                                {t(professional.description)}
                                </p>
                            <p className="text-gray-400 mb-4">{professional.contact}</p>
                            <Link suppressHydrationWarning={true} href={`mailto:${professional.contact}`}>
                                <button className="mt-4 bg-gradient-to-r from-blue-400 to-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-500 transition duration-200 transform hover:scale-105">
                                    {t('contact')}
                                </button>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}
