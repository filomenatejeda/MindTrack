'use client';
import React, { useState, useEffect } from 'react';
import NavbarH from '../components/NavbarH';
import Link from 'next/link'; // Importa Link desde next/link
import { useTranslation } from 'react-i18next';
import Footer from '../components/Footer';

const professionals = [
    { id: 1, name: 'Dr. Ana Pérez', specialty: 'Psicología', contact: 'ana.perez@example.com' },
    { id: 2, name: 'Lic. Juan López', specialty: 'Psiquiatría', contact: 'juan.lopez@example.com' },
    { id: 3, name: 'Dra. María García', specialty: 'Terapia Ocupacional', contact: 'maria.garcia@example.com' },
    // Agrega más profesionales según sea necesario
];

export default function ContactProfessionals() {
    const { t } = useTranslation();

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="fixed top-0 w-full z-50">
                <NavbarH />
                <script src="https://cdn.tailwindcss.com"></script>
            </div>
            <div className="pt-20 p-4">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-teal-400 to-teal-600 text-white p-6 rounded-lg shadow-lg text-center">
                    Contacto con Profesionales
                </h1>
                <p className="mt-4 text-black text-lg p-2 text-center ">
                Encontrarás una lista de profesionales de la salud mental disponibles para brindarte el apoyo que necesitas. Cada uno de ellos está especializado en diferentes áreas, desde psicología hasta terapia ocupacional, asegurando que puedas encontrar la ayuda adecuada para tus necesidades. No dudes en ponerte en contacto con ellos para recibir orientación, consejos y recursos que te acompañen en tu camino hacia el bienestar emocional.
                </p>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {professionals.map(professional => (
                        <div key={professional.id} className="bg-white p-6 rounded-lg shadow-lg transition-shadow hover:shadow-2xl">
                            <h2 className="text-2xl font-semibold mb-2 text-teal-500">{professional.name}</h2>
                            <p className="text-lg text-gray-700">{professional.specialty}</p>
                            <p className="text-gray-600">{professional.contact}</p>
                            
                            <Link href="mailto:profesional@ejemplo.com">
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
