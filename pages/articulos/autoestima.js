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
                <h1 className="text-4xl font-bold bg-gradient-to-r from-teal-400 to-teal-600 text-white p-6 rounded-lg shadow-lg text-center">
                    Guía Práctica para Mejorar la Autoestima
                </h1>
                <p className="mt-4 text-teal-500 text-lg p-2 text-center">
                    Explora cómo mejorar la autoestima a través de hábitos saludables, autoconfianza y valoración personal.
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
                    <p className="text-center">Haz clic en la portada para ver el PDF</p>
                </div>

                <div className="mt-10 bg-white p-6 rounded-lg shadow-xl transition-shadow hover:shadow-2xl">
                    <h2 className="text-2xl font-semibold mb-4 text-teal-500">¿Qué es la Autoestima?</h2>
                    <p className="text-gray-700 mb-2">
                        La autoestima es la percepción y valoración que cada persona tiene de sí misma, influenciada por la autoconfianza, el respeto propio y la satisfacción personal.
                    </p>
                </div>

                <div className="mt-10 bg-white p-6 rounded-lg shadow-xl transition-shadow hover:shadow-2xl">
                    <h2 className="text-2xl font-semibold mb-4 text-teal-500">Importancia de la Autoestima</h2>
                    <p className="text-gray-700 mb-2">
                        Una autoestima sana permite enfrentar desafíos, tomar decisiones seguras y tener una mejor relación con uno mismo y con los demás. Fortalecerla mejora nuestro bienestar general.
                    </p>
                </div>

                <div className="mt-10 bg-white p-6 rounded-lg shadow-xl transition-shadow hover:shadow-2xl">
                    <h2 className="text-2xl font-semibold mb-4 text-teal-500">Factores que Influyen en la Autoestima</h2>
                    <p className="text-gray-700 mb-2">
                        Factores como las experiencias personales, la crianza y el entorno social pueden influir en cómo una persona se valora a sí misma y percibe sus propias capacidades.
                    </p>
                </div>

                <div className="mt-10 bg-white p-6 rounded-lg shadow-xl transition-shadow hover:shadow-2xl">
                    <h2 className="text-2xl font-semibold mb-4 text-teal-500">Cómo Mejorar la Autoestima</h2>
                    <p className="text-gray-700 mb-2">
                        Mejorar la autoestima implica reconocer nuestras fortalezas, aceptar nuestras debilidades y cultivar pensamientos positivos. Prácticas como la gratitud y el autocuidado pueden ser beneficiosas.
                    </p>
                </div>

                <div className="mt-10 bg-white p-6 rounded-lg shadow-xl transition-shadow hover:shadow-2xl text-center">
                    <Link href={"/recursos"} className="text-blue-500 hover:underline">
                        Recursos Educativos
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default SelfEsteemPage;
