'use client';
import React, { useState, useEffect } from 'react';
import NavbarH from '/components/NavbarH';
import Footer from '/components/Footer';
import { useTranslation } from 'react-i18next';

export default function ProgressiveMusclePage() {
    const { t } = useTranslation();

    const instructions = [
        "Instrucción 1: Encuentra un lugar cómodo y tranquilo donde puedas acostarte sin distracciones.",
        "Instrucción 2: Comienza con los pies: Tensa los músculos de los pies durante 5 segundos, luego relájalos durante 10 segundos.",
        "Instrucción 3: Continúa con las piernas: Tensa los músculos de las piernas durante 5 segundos, luego relájalos durante 10 segundos.",
        "Instrucción 4: Tensa los músculos de los glúteos: Mantén la tensión durante 5 segundos, luego relájalos.",
        "Instrucción 5: Sube por el cuerpo: Tensa los músculos de los abdominales, pecho, hombros y brazos, relajándolos después de cada uno.",
        "Instrucción 6: Relaja tu cara: Tensa los músculos de la cara (fruncir el ceño, apretar los ojos) y luego relájalos.",
        "Cierre de la sesión: Termina con una respiración profunda y siente cómo tu cuerpo se siente más relajado."
    ];

    const images = [
        "https://www.example.com/relaxation-image1.jpg", 
        "https://www.example.com/relaxation-image2.jpg", 
        "https://www.example.com/relaxation-image3.jpg"
    ];

    const [currentInstructionIndex, setCurrentInstructionIndex] = useState(0);
    const [timeLeft, setTimeLeft] = useState(60); // Tiempo en segundos
    const [isRunning, setIsRunning] = useState(false); // Estado del temporizador
    const [progressStarted, setProgressStarted] = useState(false); // Estado de inicio de progresión
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
                stopProgression();
            }
        }
    }, [isRunning, timeLeft, currentInstructionIndex]);

    const startProgression = () => {
        setIsRunning(true);
        setIsPaused(false); 
        setTimeLeft(60); 
        setProgressStarted(true); 
    };

    const pauseProgression = () => {
        setIsRunning(false); 
        setIsPaused(true); 
    };

    const continueProgression = () => {
        setIsRunning(true); 
        setIsPaused(false); 
    };

    const stopProgression = () => {
        setIsRunning(false); 
        setCurrentInstructionIndex(0); 
        setTimeLeft(60); 
        setProgressStarted(false); 
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
            stopProgression(); 
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <div className="fixed top-0 w-full z-50">
                <NavbarH />
                <script src="https://cdn.tailwindcss.com"></script>
            </div>
            <div className="flex-grow pt-20 p-4">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-teal-400 to-teal-600 text-white p-6 rounded-lg shadow-lg text-center">
                    Progresión Muscular
                </h1>
                <p className="mt-4 text-teal-500 text-lg p-2 text-center italic">
                    Técnica de relajación a través de la tensión y liberación muscular.
                </p>
                
                <div className="mt-6 bg-white p-6 rounded-lg shadow-xl flex flex-col items-center">
                    <h3 className="text-xl font-bold text-green-600 mt-6 mb-2 text-center">Consejos Adicionales</h3>
                    <ul className="list-disc list-inside space-y-2">
                        <li><strong>Duración:</strong> Realiza la práctica entre 10 a 20 minutos, según tu disponibilidad.</li>
                        <li><strong>Comodidad:</strong> Asegúrate de estar en un lugar cómodo y libre de distracciones.</li>
                        <li><strong>Atención:</strong> Concéntrate en los cambios de tensión y relajación de cada grupo muscular.</li>
                    </ul>

                    <h2 className="text-2xl mt-5 font-semibold text-teal-500 text-center mb-4">Ejercicio de Progresión Muscular Guiada</h2>
                    
                    {progressStarted ? (
                        <>
                            <h3 className="text-xl font-bold text-green-600 mb-2 text-center">Instrucción Actual</h3>
                            <p className="text-center mb-4 text-lg">
                                {instructions[currentInstructionIndex]}
                            </p>
                            <img 
                                src={images[currentInstructionIndex]} 
                                alt={`Instrucción ${currentInstructionIndex + 1}`} 
                                className="w-80 h-80 object-cover rounded-lg mb-4"
                            />

                            <h3 className="text-xl font-bold text-green-600 mb-2 text-center">Tiempo Restante</h3>
                            <p className="text-center text-lg">{timeLeft} segundos</p>

                            <div className="flex space-x-4 mt-4">
                                <button 
                                    onClick={pauseProgression} 
                                    className="bg-yellow-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-yellow-600"
                                >
                                    Pausar
                                </button>
                                <button 
                                    onClick={stopProgression} 
                                    className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600"
                                >
                                    Detener
                                </button>
                                <button 
                                    onClick={nextInstruction} 
                                    className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600"
                                >
                                    Siguiente
                                </button>
                                {isPaused && (
                                    <button 
                                        onClick={continueProgression} 
                                        className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600"
                                    >
                                        Continuar
                                    </button>
                                )}
                            </div>
                        </>
                    ) : (
                        <button 
                            onClick={startProgression} 
                            className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600"
                        >
                            Iniciar
                        </button>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
}
