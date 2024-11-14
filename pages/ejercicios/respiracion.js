'use client';
import React, { useState, useEffect } from 'react';
import NavbarH from '/components/NavbarH';
import Footer from '/components/Footer';
import { useTranslation } from 'react-i18next';

export default function MeditationPage() {
    const { t } = useTranslation();

    const instructions = [
        "Instrucción 1: Encuentra un espacio tranquilo: Busca un lugar cómodo donde puedas sentarte o acostarte sin distracciones.",
        "Instrucción 2: Relaja el cuerpo: Ajusta tu postura, relaja los hombros y coloca tus manos sobre tus rodillas o en tu regazo.",
        "Instrucción 3: Respira profundamente: Inhala por la nariz y exhala lentamente por la boca, enfocándote en la respiración.",
        "Instrucción 4: Dirige la atención al presente: Lleva tu atención al flujo de aire en tu cuerpo. Si te distraes, simplemente regresa a la respiración.",
        "Instrucción 5: Escanea tu cuerpo: Dirige tu atención desde los pies a la cabeza. Nota cualquier tensión y suéltala al exhalar.",
        "Instrucción 6: Observa tus pensamientos: Imagina que tus pensamientos son nubes que pasan. No los juzgues ni te aferres a ellos.",
        "Cierre de la sesión: Termina con tres respiraciones profundas y abre los ojos suavemente cuando estés listo."
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
            </div>
            <script src="https://cdn.tailwindcss.com"></script>
            <div className="flex-grow pt-20 p-4">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-teal-400 to-teal-600 text-white p-6 rounded-lg shadow-lg text-center">
                    Meditación y Relajación
                </h1>
                <p className="mt-4 text-teal-500 text-lg p-2 text-center italic">
                    Bienvenido a tu espacio de meditación
                </p>
                
                <div className="mt-6 bg-white p-6 rounded-lg shadow-xl flex flex-col items-center">
                    <h3 className="text-xl font-bold text-green-600 mt-6 mb-2 text-center">Consejos Adicionales</h3>
                    <ul className="list-disc list-inside space-y-2">
                        <li><strong>Duración:</strong> Comienza con 5 a 10 minutos de meditación y aumenta gradualmente.</li>
                        <li><strong>Frecuencia:</strong> Practicar la atención plena diariamente puede mejorar tu bienestar.</li>
                        <li><strong>Paciencia:</strong> Si te distraes, no te preocupes. Aprende a redirigir tu atención con calma.</li>
                    </ul>

                    <h2 className="text-2xl mt-5 font-semibold text-teal-500 text-center mb-4">Ejercicio de Meditación Guiada de Atención Plena</h2>
                    
                    {meditationStarted ? (
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
                                    onClick={pauseMeditation} 
                                    className="bg-yellow-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-yellow-600"
                                >
                                    Pausar
                                </button>
                                <button 
                                    onClick={stopMeditation} 
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
                                        onClick={continueMeditation} 
                                        className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600"
                                    >
                                        Continuar
                                    </button>
                                )}
                            </div>
                        </>
                    ) : (
                        <button 
                            onClick={startMeditation} 
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
