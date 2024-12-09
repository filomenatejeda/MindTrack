'use client';
import React, { useState, useEffect } from 'react';
import NavbarH from '/components/NavbarH';
import Footer from '/components/Footer';
import { useTranslation } from 'react-i18next';

export default function MeditationPage() {
    const { t } = useTranslation();

    const instructions = [
        t('intruction_one_meditation'),
        t('intruction_two_meditation'),
        t('intruction_theer_meditation'),
        t('intruction_four_meditation'),
        t('intruction_five_meditation'),
        t('intruction_six_meditation'),
        t('intruction_conclusion_meditation')
    ];

    const images = [
        "https://www.podcastyradio.es/wp-content/uploads/2021/02/meditaciones-guiadas.png", 
        "https://i.pinimg.com/736x/d2/31/7d/d2317d7f64419757126253e3f7c14465.jpg", 
        "https://cflvdg.avoz.es/sc/d7f6L8pDUI4IuMotGXjiTEDx_30=/768x/2022/01/28/00121643373224399422404/Foto/respirarwaltr.png", 
        "https://s3.tuespaciodeterapia.com/wp-content/uploads/2021/06/28181942/image-1-97-1024x683.gif", 
        "https://www.respiraprana.com/wp-content/uploads/2024/02/breathing-7528400_1280-1.png", 
        "https://img.lavdg.com/sc/TdNJTmCiL1lguTpP6hnE12t9x-E=/480x/2024/02/16/00121708098581505861289/Foto/respiraaaa.jpg", 
        "https://img.freepik.com/vector-premium/persona-que-practica-ejercicios-respiracion-profunda-que-destacan-uso-tecnicas-relajacion-manejar_216520-14789.jpg"  
    ];

    const [currentInstructionIndex, setCurrentInstructionIndex] = useState(0);
    const [timeLeft, setTimeLeft] = useState(60); // Tiempo en segundos
    const [isRunning, setIsRunning] = useState(false); // Estado del temporizador
    const [meditationStarted, setMeditationStarted] = useState(false); // Estado de inicio de meditación
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
                // Detener la meditación si se ha llegado al final de las instrucciones
                stopMeditation();
            }
        }
    }, [isRunning, timeLeft, currentInstructionIndex]);

    const startMeditation = () => {
        setIsRunning(true);
        setIsPaused(false); 
        setTimeLeft(60); 
        setMeditationStarted(true); 
    };

    const pauseMeditation = () => {
        setIsRunning(false); 
        setIsPaused(true); 
    };

    const continueMeditation = () => {
        setIsRunning(true); 
        setIsPaused(false); 
    };

    const stopMeditation = () => {
        setIsRunning(false); 
        setCurrentInstructionIndex(0); 
        setTimeLeft(60); 
        setMeditationStarted(false); 
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
            stopMeditation(); // Detener si es la última instrucción
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <div className="fixed top-0 w-full z-50">
                <NavbarH />
                <script src="https://cdn.tailwindcss.com"></script>
            </div>
            <script src="https://cdn.tailwindcss.com"></script>
            <div className="flex-grow pt-20 p-4">
                <h1 suppressHydrationWarning={true}  className="text-4xl font-bold bg-gradient-to-r from-teal-400 to-teal-600 text-white p-6 rounded-lg shadow-lg text-center">
                    {t('meditation_relaxation')}
                </h1>
                <p suppressHydrationWarning={true}  className="mt-4 text-teal-500 text-lg p-2 text-center italic">
                    {t('intomeditation_relaxation')}
                </p>
                
                <div className="mt-6 bg-white p-6 rounded-lg shadow-xl flex flex-col items-center">
                    <h3 suppressHydrationWarning={true}  className="text-xl font-bold text-green-600 mt-6 mb-2 text-center">{t('additional')}</h3>
                    <ul className="list-disc list-inside space-y-2">
                        <li suppressHydrationWarning={true} ><strong suppressHydrationWarning={true} >{t('duration')}</strong> {t('start_meditation')}</li>
                        <li suppressHydrationWarning={true} ><strong suppressHydrationWarning={true} >{t('frequency')}</strong> {t('practicing_mindfulness')}</li>
                        <li suppressHydrationWarning={true} ><strong suppressHydrationWarning={true} >{t('patience')}</strong> {t('get_distractes')}</li>
                    </ul>

                    <h2 suppressHydrationWarning={true}  className="text-2xl mt-5 font-semibold text-teal-500 text-center mb-4">{t('mindfulness_guided')}</h2>
                    
                    {meditationStarted ? (
                        <>
                            <h3 suppressHydrationWarning={true}  className="text-xl font-bold text-green-600 mb-2 text-center">{t('current')}</h3>
                            <p className="text-center mb-4 text-lg">
                                {instructions[currentInstructionIndex]}
                            </p>
                            <img 
                                src={images[currentInstructionIndex]} 
                                alt={`Instrucción ${currentInstructionIndex + 1}`} 
                                className="w-80 h-80 object-cover rounded-lg mb-4"
                            />

                            <h3 suppressHydrationWarning={true}  className="text-xl font-bold text-green-600 mb-2 text-center">{t('time_remaining')}</h3>
                            <p suppressHydrationWarning={true}  className="text-center text-lg">{timeLeft} {t('seconds')}</p>

                            <div className="flex space-x-4 mt-4">
                                <button 
                                 suppressHydrationWarning={true} 
                                    onClick={pauseMeditation} 
                                    className="bg-yellow-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-yellow-600"
                                >
                                    {t('pause')}
                                </button>
                                <button 
                                suppressHydrationWarning={true} 
                                    onClick={stopMeditation} 
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
                                        onClick={continueMeditation} 
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
                            onClick={startMeditation} 
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
