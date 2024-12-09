'use client';
import React, { useState, useEffect } from 'react';
import NavbarH from '/components/NavbarH';
import Footer from '/components/Footer';
import { useTranslation } from 'react-i18next';

export default function BreathingPage() {
    const { t } = useTranslation();

    const instructions = [
        "Instrucción 1: Siéntate en una postura cómoda, con la espalda recta y los pies en el suelo.",
        "Instrucción 2: Respira por la nariz durante 4 segundos, llenando tus pulmones.",
        "Instrucción 3: Sostén la respiración por 7 segundos, enfocándote en la calma.",
        "Instrucción 4: Suelta el aire por la boca durante 8 segundos. Imagina que eliminas toda tensión.",
        "Instrucción 5: Mantén un patrón constante de 4-7-8 y siente cómo se relaja tu cuerpo.",
        "Instrucción 6: Mientras respiras, imagina una luz cálida recorriendo tu cuerpo, llenándote de paz.",
        "Cierre de la sesión: Termina con tres respiraciones profundas y una sonrisa, sintiéndote renovado."
    ];

    const images = [
        "https://img.freepik.com/vector-gratis/mujer-postura-comoda-meditar_74855-5302.jpg", 
        "https://img.freepik.com/free-vector/breathing-exercise-concept-illustration_114360-8920.jpg", 
        "https://s3.amazonaws.com/jm.files/2022-05/shutterstock_2016549191.jpg", 
        "https://static.vecteezy.com/system/resources/thumbnails/007/411/186/small/woman-doing-breathing-exercise-woman-meditating-in-lotus-pose-world-yoga-day-mental-wellness-vector.jpg", 
        "https://thumbs.dreamstime.com/b/breath-exercise-good-relaxation-breathe-out-breath-exercise-good-relaxation-breathe-out-relax-deep-131435880.jpg", 
        "https://as1.ftcdn.net/v2/jpg/05/85/39/94/1000_F_585399499_3cBsmr9LN6CEeCyYRl7iNG3ztXM2LPjF.jpg", 
        "https://img.freepik.com/premium-vector/three-people-engaged-meditation-outdoors-surrounded-by-vibrant-greenery-mountains-daylight-organic-flat-people-meditating_538213-148192.jpg" 
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
                // Detener la sesión si se ha llegado al final de las instrucciones
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
            </div>
            <script src="https://cdn.tailwindcss.com"></script>
            <div className="flex-grow pt-20 p-4">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-teal-400 to-teal-600 text-white p-6 rounded-lg shadow-lg text-center">
                    Ejercicios de Respiración Consciente
                </h1>
                <p className="mt-4 text-teal-500 text-lg p-2 text-center italic">
                    Descubre la tranquilidad a través del poder de tu respiración.
                </p>
                
                <div className="mt-6 bg-white p-6 rounded-lg shadow-xl flex flex-col items-center">
                <h3 className="text-xl font-bold text-green-600 mt-6 mb-2 text-center">{t('additional')}</h3>
                    <ul className="list-disc list-inside space-y-2">
                        <li><strong>{t('duration')}</strong> Dedica entre 5 y 10 minutos a estas prácticas diarias.</li>
                        <li><strong>Postura:</strong> Mantén una posición cómoda y relajada, pero erguida.</li>
                        <li><strong>Foco:</strong> Si tu mente divaga, simplemente regresa a tu respiración.</li>
                    </ul>

                   
                    
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

                            <h3 suppressHydrationWarning={true}  className="text-xl font-bold text-blue-600 mb-2 text-center">{t('time_remaining')}</h3>
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
