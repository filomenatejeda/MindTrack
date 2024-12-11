'use client';
import React, { useState, useEffect } from 'react';
import NavbarH from '/components/NavbarH';
import Footer from '/components/Footer';
import { useTranslation } from 'react-i18next';

export default function VisualizationPage() {
    const { t } = useTranslation();

    const instructions = [
        t('instruction_one_visualization'),
        t('instruction_two_visualization'),
        t('instruction_three_visualization'),
        t('instruction_four_visualization'),
        t('instruction_five_visualization'),
        t('instruction_six_visualization'),
    ];

    const images = [
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0", // Bosque
        "https://images.unsplash.com/photo-1518791841217-8f162f1e1131", // Playa
        "https://images.unsplash.com/photo-1470165496609-5d0a3f622a31", // Río
        "https://images.unsplash.com/photo-1444044205806-38f3ed106c10", // Prado
        "https://images.unsplash.com/photo-1506748686100-e09700e43b10", // Cielo estrellado
        "https://images.unsplash.com/photo-1506748686104-94c2f0cbdd0e"  // Nube
    ];

    const [currentInstructionIndex, setCurrentInstructionIndex] = useState(0);
    const [timeLeft, setTimeLeft] = useState(60); // Tiempo en segundos
    const [isRunning, setIsRunning] = useState(false); // Estado del temporizador
    const [visualizationStarted, setVisualizationStarted] = useState(false); // Estado de inicio
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
                stopVisualization();
            }
        }
    }, [isRunning, timeLeft, currentInstructionIndex]);

    const startVisualization = () => {
        setIsRunning(true);
        setIsPaused(false);
        setTimeLeft(60);
        setVisualizationStarted(true);
    };

    const pauseVisualization = () => {
        setIsRunning(false);
        setIsPaused(true);
    };

    const continueVisualization = () => {
        setIsRunning(true);
        setIsPaused(false);
    };

    const stopVisualization = () => {
        setIsRunning(false);
        setCurrentInstructionIndex(0);
        setTimeLeft(60);
        setVisualizationStarted(false);
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
            stopVisualization();
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <div className="fixed top-0 w-full z-50">
                <NavbarH />
            </div>
            <script src="https://cdn.tailwindcss.com"></script>
            <div className="flex-grow pt-20 p-4">
                <h1 suppressHydrationWarning={true}  className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 text-white p-6 rounded-lg shadow-lg text-center">
                    {t('visualization')}
                </h1>
                <p suppressHydrationWarning={true}  className="mt-4 text-purple-500 text-lg p-2 text-center italic">
                   {t('introvisualization')}
                </p>

                <div className="mt-6 bg-white p-6 rounded-lg shadow-xl flex flex-col items-center">
                    <h3 suppressHydrationWarning={true}  className="text-xl font-bold text-green-600 mt-6 mb-2 text-center">{t('additional')}</h3>
                    <ul className="list-disc list-inside space-y-2">
                        <li suppressHydrationWarning={true} ><strong>Ambiente:</strong> {t('find_place')}</li>
                        <li suppressHydrationWarning={true} ><strong suppressHydrationWarning={true} >{t('respiration')}</strong> {t('keep')}</li>
                        <li suppressHydrationWarning={true} ><strong>Conexión:</strong> {t('permit')}</li>
                    </ul>

                    {visualizationStarted ? (
                        <>
                            <h3 className="text-xl font-bold text-green-600 mb-2 text-center">{t('visualnow')}</h3>
                            <p className="text-center mb-4 text-lg">
                                {instructions[currentInstructionIndex]}
                            </p>
                            <img
                                src={images[currentInstructionIndex]}
                                alt={`Visualización ${currentInstructionIndex + 1}`}
                                className="w-80 h-80 object-cover rounded-lg mb-4"
                            />

                            <h3 
                            suppressHydrationWarning={true} className="text-xl font-bold text-blue-600 mb-2 text-center">{t('time_remaining')}</h3>
                            <p 
                            suppressHydrationWarning={true} className="text-center text-lg">{timeLeft} {t('seconds')}</p>

                            <div className="flex space-x-4 mt-4">
                                <button
                                suppressHydrationWarning={true} 
                                    onClick={pauseVisualization}
                                    className="bg-yellow-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-yellow-600"
                                >
                                    {t('pause')}
                                </button>
                                <button
                                suppressHydrationWarning={true} 
                                    onClick={stopVisualization}
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
                                        onClick={continueVisualization}
                                        className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600"
                                    >
                                        {t('continue')}
                                    </button>
                                )}
                            </div>
                        </>
                    ) : (
                        <button
                        suppressHydrationWarning={true} 
                            onClick={startVisualization}
                            className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600"
                        >
                            {t('start')}
                        </button>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
}
