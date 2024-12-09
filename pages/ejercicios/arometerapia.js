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
                <h1 className="text-4xl font-bold bg-gradient-to-r from-teal-400 to-teal-600 text-white p-6 rounded-lg shadow-lg text-center">
                    Aromaterapia
                </h1>
                <p className="mt-4 text-teal-500 text-lg p-2 text-center italic">
                    Usa aceites esenciales para promover la relajación y el bienestar emocional.
                </p>
                
                <div className="mt-6 bg-white p-6 rounded-lg shadow-xl flex flex-col items-center">
                    <h3 className="text-xl font-bold text-green-600 mt-6 mb-2 text-center">Consejos Adicionales</h3>
                    <ul className="list-disc list-inside space-y-2">
                        <li><strong>Duración:</strong> La aromaterapia puede durar entre 15 y 30 minutos dependiendo de tu preferencia.</li>
                        <li><strong>Ambiente:</strong> Asegúrate de estar en un lugar tranquilo y cómodo para disfrutar de la experiencia.</li>
                        <li><strong>Aceites recomendados:</strong> La lavanda es ideal para la relajación, mientras que la menta puede revitalizarte.</li>
                    </ul>

                    <h2 className="text-2xl mt-5 font-semibold text-teal-500 text-center mb-4">Ejercicio de Aromaterapia Guiada</h2>
                    
                    {aromatherapyStarted ? (
                        <>
                            <h3 className="text-xl font-bold text-green-600 mb-2 text-center">Instrucción Actual</h3>
                            <p className="text-center mb-4 text-lg">
                                {instructions[currentInstructionIndex]}
                            </p>

                            <h3 className="text-xl font-bold text-green-600 mb-2 text-center">Tiempo Restante</h3>
                            <p className="text-center text-lg">{timeLeft} segundos</p>

                            <div className="flex space-x-4 mt-4">
                                <button 
                                    onClick={pauseAromatherapy} 
                                    className="bg-yellow-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-yellow-600"
                                >
                                    Pausar
                                </button>
                                <button 
                                    onClick={stopAromatherapy} 
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
                                        onClick={continueAromatherapy} 
                                        className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600"
                                    >
                                        Continuar
                                    </button>
                                )}
                            </div>
                        </>
                    ) : (
                        <button 
                            onClick={startAromatherapy} 
                            className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600"
                        >
                            Iniciar
                        </button>
                    )}

                    {/* Sección de información sobre los olores */}
                    <div className="mt-6 bg-gray-50 p-6 rounded-lg shadow-xl">
                        <h3 className="text-xl font-bold text-green-600 mb-4 text-center">Información sobre los Aceites Esenciales</h3>
                        <p className="text-lg mb-4">
                            Los aceites esenciales son conocidos por sus propiedades terapéuticas, ayudando a reducir el estrés, mejorar el ánimo y promover la relajación. Aquí tienes algunos de los más populares y sus beneficios:
                        </p>
                        <ul className="list-disc list-inside space-y-2">
                            <li><strong>Lavanda:</strong> Ideal para la relajación, ayuda a reducir la ansiedad y mejorar el sueño.</li>
                            <li><strong>Mentol (Menta):</strong> Energizante y refrescante, puede aliviar dolores de cabeza y mejorar la concentración.</li>
                            <li><strong>Rosa Mosqueta:</strong> Promueve la calma y el bienestar emocional, ideal para el estrés.</li>
                            <li><strong>Citronela:</strong> Ayuda a limpiar la mente y a liberar energías negativas.</li>
                            <li><strong>Eucalipto:</strong> Perfecto para mejorar la respiración y reducir la tensión muscular.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
