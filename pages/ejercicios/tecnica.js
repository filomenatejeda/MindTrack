'use client';
import React, { useState, useEffect } from 'react';
import NavbarH from '/components/NavbarH';
import Footer from '/components/Footer';
import { useTranslation } from 'react-i18next';

export default function Relaxation54321Page() {
    const { t } = useTranslation();

    const instructions = [
        "Instrucción 1: Mira a tu alrededor y observa 5 cosas que puedas ver. Pueden ser detalles pequeños o grandes, como objetos cercanos o distantes.",
        "Instrucción 2: Siente tu cuerpo. Identifica 4 cosas que puedas sentir en este momento. Puede ser la textura de lo que tocas, la temperatura, o el contacto con el suelo.",
        "Instrucción 3: Escucha con atención. Identifica 3 sonidos que puedas oír. Pueden ser sonidos cercanos o lejanos, como el viento, la música, o las voces.",
        "Instrucción 4: Respira profundamente e identifica 2 olores. Tómate un momento para detectar cualquier fragancia en el aire. Pueden ser olores de la naturaleza, comida, o incluso tu propio perfume.",
        "Instrucción 5: Finalmente, piensa en 1 cosa que puedas saborear. Puede ser el sabor de lo que has comido o el sabor en tu boca en este momento.",
        "Cierre de la sesión: Relájate, respira profundamente una vez más y siente cómo tu cuerpo se libera de la tensión."
    ];

    const [currentInstructionIndex, setCurrentInstructionIndex] = useState(0);
    const [timeLeft, setTimeLeft] = useState(60); // Tiempo en segundos
    const [isRunning, setIsRunning] = useState(false); // Estado del temporizador
    const [relaxationStarted, setRelaxationStarted] = useState(false); // Estado de inicio de relajación
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
                stopRelaxation();
            }
        }
    }, [isRunning, timeLeft, currentInstructionIndex]);

    const startRelaxation = () => {
        setIsRunning(true);
        setIsPaused(false); 
        setTimeLeft(60); 
        setRelaxationStarted(true); 
    };

    const pauseRelaxation = () => {
        setIsRunning(false); 
        setIsPaused(true); 
    };

    const continueRelaxation = () => {
        setIsRunning(true); 
        setIsPaused(false); 
    };

    const stopRelaxation = () => {
        setIsRunning(false); 
        setCurrentInstructionIndex(0); 
        setTimeLeft(60); 
        setRelaxationStarted(false); 
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
            stopRelaxation(); 
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
                    Técnica de Relajación 5-4-3-2-1
                </h1>
                <p className="mt-4 text-teal-500 text-lg p-2 text-center italic">
                    Reduce la ansiedad conectando con tus sentidos.
                </p>
                
                <div className="mt-6 bg-white p-6 rounded-lg shadow-xl flex flex-col items-center">
                    <h3 className="text-xl font-bold text-green-600 mt-6 mb-2 text-center">Consejos Adicionales</h3>
                    <ul className="list-disc list-inside space-y-2">
                        <li><strong>Respiración:</strong> Asegúrate de respirar profundamente para activar tu sistema de relajación natural.</li>
                        <li><strong>Atención plena:</strong> Intenta enfocarte completamente en cada uno de tus sentidos durante el ejercicio.</li>
                        <li><strong>Sin prisa:</strong> Tómate tu tiempo para realizar cada paso de manera tranquila y pausada.</li>
                    </ul>

                    <h2 className="text-2xl mt-5 font-semibold text-teal-500 text-center mb-4">Ejercicio de Relajación Guiada 5-4-3-2-1</h2>
                    
                    {relaxationStarted ? (
                        <>
                            <h3 className="text-xl font-bold text-green-600 mb-2 text-center">Instrucción Actual</h3>
                            <p className="text-center mb-4 text-lg">
                                {instructions[currentInstructionIndex]}
                            </p>

                            <h3 className="text-xl font-bold text-green-600 mb-2 text-center">Tiempo Restante</h3>
                            <p className="text-center text-lg">{timeLeft} segundos</p>

                            <div className="flex space-x-4 mt-4">
                                <button 
                                    onClick={pauseRelaxation} 
                                    className="bg-yellow-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-yellow-600"
                                >
                                    Pausar
                                </button>
                                <button 
                                    onClick={stopRelaxation} 
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
                                        onClick={continueRelaxation} 
                                        className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600"
                                    >
                                        Continuar
                                    </button>
                                )}
                            </div>
                        </>
                    ) : (
                        <button 
                            onClick={startRelaxation} 
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
