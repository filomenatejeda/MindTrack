'use client';
import React, { useState, useEffect } from 'react';
import NavbarH from '/components/NavbarH';
import Footer from '/components/Footer';
import { useTranslation } from 'react-i18next';

export default function AromatherapyPage() {
    const { t } = useTranslation();

    const instructions = [
        "Instrucción 1: Elige tu aceite esencial favorito. Los aceites como la lavanda, la menta o el eucalipto son perfectos para relajarte.",
        "Instrucción 2: Prepara un difusor o un quemador de aceites. Si no tienes un difusor, puedes usar una vela que libere el aroma lentamente.",
        "Instrucción 3: Respira profundamente mientras el aroma llena el aire. Inhala por la nariz, mantén el aire por unos segundos y exhala lentamente por la boca.",
        "Instrucción 4: Cierra los ojos y visualiza un lugar tranquilo mientras sigues respirando. Deja que el aroma te relaje y libere cualquier tensión.",
        "Instrucción 5: Disfruta del ambiente creado. Permítete un momento para relajarte, dejando que el aceite esencial calme tu mente y cuerpo.",
        "Cierre de la sesión: Finaliza la sesión con unas respiraciones profundas y abre los ojos cuando te sientas listo."
    ];

    const [currentInstructionIndex, setCurrentInstructionIndex] = useState(0);
    const [timeLeft, setTimeLeft] = useState(60); // Tiempo en segundos
    const [isRunning, setIsRunning] = useState(false); // Estado del temporizador
    const [aromatherapyStarted, setAromatherapyStarted] = useState(false); // Estado de inicio de aromaterapia
    const [isPaused, setIsPaused] = useState(false); // Estado de pausa

    useEffect(() => {
        if (isRunning && timeLeft > 0) {
            const timer = setInterval(() => {
                setTimeLeft((prevTime) => prevTime - 1);
            }, 1000);

            return () => clearInterval(timer);
        } else if (timeLeft === 0) {
            if (currentInstructionIndex < instructions.length - 1) {
                setCurrentInstructionIndex((prevIndex) => prevIndex + 1);
                setTimeLeft(60); 
            } else {
                stopAromatherapy();
            }
        }
    }, [isRunning, timeLeft, currentInstructionIndex]);

    const startAromatherapy = () => {
        setIsRunning(true);
        setIsPaused(false); 
        setTimeLeft(60); 
        setAromatherapyStarted(true); 
    };

    const pauseAromatherapy = () => {
        setIsRunning(false); 
        setIsPaused(true); 
    };

    const continueAromatherapy = () => {
        setIsRunning(true); 
        setIsPaused(false); 
    };

    const stopAromatherapy = () => {
        setIsRunning(false); 
        setCurrentInstructionIndex(0); 
        setTimeLeft(60); 
        setAromatherapyStarted(false); 
        setIsPaused(false); 
    };

    const nextInstruction = () => {
        if (currentInstructionIndex < instructions.length - 1) {
            setCurrentInstructionIndex((prevIndex) => {
                const nextIndex = (prevIndex + 1) % instructions.length;
                setTimeLeft(60);
                return nextIndex;
            });
        } else {
            stopAromatherapy(); 
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <div className="fixed top-0 w-full z-50">
                <NavbarH />
                <script src="https://cdn.tailwindcss.com"></script>
            </div>
            <div className="flex-grow pt-20 p-4">
                <h1 suppressHydrationWarning={true}  className="text-4xl font-bold bg-gradient-to-r from-teal-400 to-teal-600 text-white p-6 rounded-lg shadow-lg text-center">
                    {t('aromatherapy')}
                </h1>
                <p suppressHydrationWarning={true}  className="mt-4 text-teal-500 text-lg p-2 text-center italic">
                {t('introaromatherapy')}
                </p>
                
                <div className="mt-6 bg-white p-6 rounded-lg shadow-xl flex flex-col items-center">
                    <h3 suppressHydrationWarning={true}  className="text-xl font-bold text-green-600 mt-6 mb-2 text-center">{t('additional')}</h3>
                    <ul className="list-disc list-inside space-y-2">
                        <li suppressHydrationWarning={true} ><strong suppressHydrationWarning={true} >{t('duration')}</strong> {t('aromatime')}</li>
                        <li suppressHydrationWarning={true} ><strong suppressHydrationWarning={true} >{t('environment')}</strong> {t('makesurearoma')}</li>
                        <li suppressHydrationWarning={true} ><strong suppressHydrationWarning={true} >{t('oil')}</strong> {t('oils')}</li>
                    </ul>

                    <h2 suppressHydrationWarning={true}  className="text-2xl mt-5 font-semibold text-teal-500 text-center mb-4">{t('excercisearoma')}</h2>
                    
                    {aromatherapyStarted ? (
                        <>
                            <h3 
                            suppressHydrationWarning={true} className="text-xl font-bold text-green-600 mb-2 text-center">{t('current')}</h3>
                            <p className="text-center mb-4 text-lg">
                                {instructions[currentInstructionIndex]}
                            </p>

                            <h3 suppressHydrationWarning={true} className="text-xl font-bold text-green-600 mb-2 text-center">{t('time_remaining')}</h3>
                            <p className="text-center text-lg">{timeLeft} {t('seconds')}</p>

                            <div className="flex space-x-4 mt-4">
                                <button 
                                suppressHydrationWarning={true} 
                                    onClick={pauseAromatherapy} 
                                    className="bg-yellow-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-yellow-600"
                                >
                                    {t('pause')}
                                </button>
                                <button 
                                suppressHydrationWarning={true} 
                                    onClick={stopAromatherapy} 
                                    className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600"
                                >
                                    {t('stop')}
                                </button>
                                <button
                                suppressHydrationWarning={true}  
                                    onClick={nextInstruction} 
                                    className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600"
                                >
                                    {t('next')}
                                </button>
                                {isPaused && (
                                    <button
                                    suppressHydrationWarning={true}  
                                        onClick={continueAromatherapy} 
                                        className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600"
                                    >
                                        {t('continue')}
                                    </button>
                                )}
                            </div>
                        </>
                    ) : (
                        <button suppressHydrationWarning={true} 
                            onClick={startAromatherapy} 
                            className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600"
                        >
                            {t('start')}
                        </button>
                    )}

                    {/* Sección de información sobre los olores */}
                    <div className="mt-6 bg-gray-50 p-6 rounded-lg shadow-xl">
                        <h3 suppressHydrationWarning={true}  className="text-xl font-bold text-green-600 mb-4 text-center">{t('informationaroma')}</h3>
                        <p suppressHydrationWarning={true}  className="text-lg mb-4">
                            {t('descriptionaroma')}
                        </p>
                        <ul className="list-disc list-inside space-y-2">
                            <li suppressHydrationWarning={true} ><strong suppressHydrationWarning={true} >{t('lavander')}</strong> {t('dlavander')}</li>
                            <li suppressHydrationWarning={true} ><strong suppressHydrationWarning={true} >{t('mint')}</strong> {t('dmint')}</li>
                            <li suppressHydrationWarning={true} ><strong suppressHydrationWarning={true} >{t('rosehip')}</strong> {t('drosehip')}</li>
                            <li suppressHydrationWarning={true} ><strong suppressHydrationWarning={true} >{t('citronella')}</strong> {t('dcitronella')}</li>
                            <li suppressHydrationWarning={true} ><strong suppressHydrationWarning={true} >{t('eucalyptus')}</strong>{t('deucalyptus')}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
