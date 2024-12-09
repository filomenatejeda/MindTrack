'use client';
import React, { useState, useEffect } from 'react';
import NavbarH from '/components/NavbarH';
import Footer from '/components/Footer';
import { useTranslation } from 'react-i18next';

export default function NatureWalkPage() {
    const { t } = useTranslation();

    const instructions = [
        "Instrucción 1: Encuentra un lugar natural y tranquilo: Busca un parque, bosque o sendero donde puedas caminar libremente.",
        "Instrucción 2: Respira profundamente: Inhala el aire fresco profundamente por la nariz y exhala por la boca, sintiendo cómo el aire entra y sale.",
        "Instrucción 3: Siente la tierra bajo tus pies: Concédele atención a cada paso que das, siente el suelo, la hierba o las hojas bajo tus pies.",
        "Instrucción 4: Conéctate con los sonidos: Escucha los sonidos de la naturaleza: pájaros cantando, hojas moviéndose, el viento. Mantén tu mente en estos sonidos.",
        "Instrucción 5: Observa los detalles a tu alrededor: Fíjate en los árboles, flores, rocas o cualquier elemento natural. Aprecia los colores, texturas y formas.",
        "Instrucción 6: Relájate en movimiento: Permítete caminar a un ritmo cómodo y tranquilo, sin presiones, solo disfrutando del momento.",
        "Cierre de la sesión: Cuando termines, haz una pausa, cierra los ojos un momento y reflexiona sobre cómo te sientes. Respira profundamente una vez más."
    ];

    const images = [
        "https://www.example.com/nature-walk1.jpg", 
        "https://www.example.com/nature-walk2.jpg", 
        "https://www.example.com/nature-walk3.jpg"
    ];

    const [currentInstructionIndex, setCurrentInstructionIndex] = useState(0);
    const [timeLeft, setTimeLeft] = useState(60); // Tiempo en segundos
    const [isRunning, setIsRunning] = useState(false); // Estado del temporizador
    const [walkStarted, setWalkStarted] = useState(false); // Estado de inicio de caminata
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
                stopWalk();
            }
        }
    }, [isRunning, timeLeft, currentInstructionIndex]);

    const startWalk = () => {
        setIsRunning(true);
        setIsPaused(false); 
        setTimeLeft(60); 
        setWalkStarted(true); 
    };

    const pauseWalk = () => {
        setIsRunning(false); 
        setIsPaused(true); 
    };

    const continueWalk = () => {
        setIsRunning(true); 
        setIsPaused(false); 
    };

    const stopWalk = () => {
        setIsRunning(false); 
        setCurrentInstructionIndex(0); 
        setTimeLeft(60); 
        setWalkStarted(false); 
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
            stopWalk(); 
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
                    Caminata en la Naturaleza
                </h1>
                <p className="mt-4 text-teal-500 text-lg p-2 text-center italic">
                    Sal a caminar y conecta con la naturaleza para relajar cuerpo y mente.
                </p>
                
                <div className="mt-6 bg-white p-6 rounded-lg shadow-xl flex flex-col items-center">
                    <h3 className="text-xl font-bold text-green-600 mt-6 mb-2 text-center">Consejos Adicionales</h3>
                    <ul className="list-disc list-inside space-y-2">
                        <li><strong>Duración:</strong> Comienza con una caminata de 10 a 20 minutos y aumenta gradualmente.</li>
                        <li><strong>Comodidad:</strong> Usa ropa y calzado cómodo para caminar sin molestias.</li>
                        <li><strong>Atención plena:</strong> Concédele atención al momento presente, sin distracciones externas.</li>
                    </ul>

                    <h2 className="text-2xl mt-5 font-semibold text-teal-500 text-center mb-4">Ejercicio de Caminata Guiada en la Naturaleza</h2>
                    
                    {walkStarted ? (
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
                                    onClick={pauseWalk} 
                                    className="bg-yellow-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-yellow-600"
                                >
                                    Pausar
                                </button>
                                <button 
                                    onClick={stopWalk} 
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
                                        onClick={continueWalk} 
                                        className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600"
                                    >
                                        Continuar
                                    </button>
                                )}
                            </div>
                        </>
                    ) : (
                        <button 
                            onClick={startWalk} 
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
