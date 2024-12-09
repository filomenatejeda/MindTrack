'use client';
import React, { useState, useEffect } from 'react';
import NavbarH from '/components/NavbarH';
import Footer from '/components/Footer';
import { useTranslation } from 'react-i18next';

export default function MindfulnessPage() {
    const { t } = useTranslation();

    const instructions = [
        "Instrucción 1: Cierra los ojos y enfócate en tu respiración. Nota cómo el aire entra y sale por tu nariz, sin intentar cambiarlo.",
        "Instrucción 2: Lleva tu atención a tu cuerpo. Escanea mentalmente desde la cabeza hasta los pies, observando cualquier sensación sin juicio.",
        "Instrucción 3: Escucha los sonidos a tu alrededor. Nota los sonidos cercanos y lejanos, dejando que vayan y vengan.",
        "Instrucción 4: Enfócate en el presente. Nota cómo se siente tu cuerpo en contacto con la superficie en la que estás sentado o acostado.",
        "Instrucción 5: Trae tu atención a tus emociones. Observa lo que estás sintiendo sin intentar cambiarlo, solo acepta lo que está presente.",
        "Instrucción 6: Visualiza una palabra positiva, como 'calma' o 'paz'. Repite esta palabra mentalmente mientras continúas respirando."
    ];

    const [currentInstructionIndex, setCurrentInstructionIndex] = useState(0);
    const [timeLeft, setTimeLeft] = useState(60);
    const [isRunning, setIsRunning] = useState(false);
    const [mindfulnessStarted, setMindfulnessStarted] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

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
                stopMindfulness();
            }
        }
    }, [isRunning, timeLeft, currentInstructionIndex]);

    const startMindfulness = () => {
        setIsRunning(true);
        setIsPaused(false);
        setTimeLeft(60);
        setMindfulnessStarted(true);
    };

    const pauseMindfulness = () => {
        setIsRunning(false);
        setIsPaused(true);
    };

    const continueMindfulness = () => {
        setIsRunning(true);
        setIsPaused(false);
    };

    const stopMindfulness = () => {
        setIsRunning(false);
        setCurrentInstructionIndex(0);
        setTimeLeft(60);
        setMindfulnessStarted(false);
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
            stopMindfulness();
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <div className="fixed top-0 w-full z-50">
                <NavbarH />
            </div>
            <script src="https://cdn.tailwindcss.com"></script>
            <div className="flex-grow pt-20 p-4">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-indigo-600 text-white p-6 rounded-lg shadow-lg text-center">
                    Práctica de Mindfulness Guiada
                </h1>
                <p className="mt-4 text-indigo-500 text-lg p-2 text-center italic">
                    Encuentra calma y claridad conectando con el momento presente.
                </p>

                <div className="mt-6 bg-white p-6 rounded-lg shadow-xl flex flex-col items-center">
                    <h3 className="text-xl font-bold text-green-600 mt-6 mb-2 text-center">Consejos para la Práctica</h3>
                    <ul className="list-disc list-inside space-y-2">
                        <li><strong>Espacio:</strong> Encuentra un lugar tranquilo y cómodo donde no te interrumpan.</li>
                        <li><strong>Postura:</strong> Siéntate derecho pero relajado, o recuéstate si prefieres.</li>
                        <li><strong>Actitud:</strong> Sé amable contigo mismo. Si tu mente divaga, tráela suavemente al presente.</li>
                    </ul>

                    {mindfulnessStarted ? (
                        <>
                            <h3 className="text-xl font-bold text-green-600 mb-2 text-center">Ejercicio Actual</h3>
                            <p className="text-center mb-4 text-lg">
                                {instructions[currentInstructionIndex]}
                            </p>

                            <h3 className="text-xl font-bold text-blue-600 mb-2 text-center">Tiempo Restante</h3>
                            <p className="text-center text-lg">{timeLeft} segundos</p>

                            <div className="flex space-x-4 mt-4">
                                <button
                                    onClick={pauseMindfulness}
                                    className="bg-yellow-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-yellow-600"
                                >
                                    Pausar
                                </button>
                                <button
                                    onClick={stopMindfulness}
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
                                        onClick={continueMindfulness}
                                        className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600"
                                    >
                                        Continuar
                                    </button>
                                )}
                            </div>
                        </>
                    ) : (
                        <button
                            onClick={startMindfulness}
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
