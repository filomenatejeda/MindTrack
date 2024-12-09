'use client';
import React, { useState, useEffect } from 'react';
import NavbarH from '/components/NavbarH';
import Footer from '/components/Footer';
import { useTranslation } from 'react-i18next';

export default function YogaPage() {
    const { t } = useTranslation();

    const instructions = [
        "Instrucción 1: Adopta la postura del niño (Balasana) para relajar la espalda y concentrarte en tu respiración.",
        "Instrucción 2: Realiza la postura del perro mirando hacia abajo (Adho Mukha Svanasana), estirando tu espalda y piernas.",
        "Instrucción 3: Transita a la postura del guerrero I (Virabhadrasana I), sintiendo la fuerza en tus piernas y equilibrio.",
        "Instrucción 4: Pasa a la postura del triángulo (Trikonasana), estirando tus costados y fortaleciendo tu núcleo.",
        "Instrucción 5: Siéntate en la postura del loto (Padmasana) para meditar y enfocar tu mente.",
        "Instrucción 6: Finaliza en la postura del cadáver (Savasana), permitiendo que tu cuerpo y mente se relajen por completo."
    ];

    const images = [
        "https://static.vecteezy.com/system/resources/previews/004/305/970/non_2x/balasana-flat-illustration-child-s-pose-caucausian-woman-performing-yoga-posture-in-green-and-yellow-sportswear-workout-physical-exercise-isolated-cartoon-character-on-white-background-vector.jpg",
        "https://static.vecteezy.com/system/resources/previews/004/305/984/non_2x/downward-facing-dog-flat-illustration-adho-mukha-shvanasana-caucausian-woman-performing-yoga-posture-in-green-and-yellow-sportswear-workout-isolated-cartoon-character-on-white-background-vector.jpg",
        "https://media.istockphoto.com/id/1399323597/vector/the-girl-performs-the-pose-of-a-warrior-spiritual-and-physical-health-flat-vector.jpg?s=612x612&w=0&k=20&c=Q3i-Vv56JCTTdw-o4M1_gwrUmeiUKzTFJ6W1swdrub8=",
        "https://static.vecteezy.com/system/resources/previews/004/305/968/non_2x/trikonasana-flat-illustration-triangle-pose-caucausian-woman-performing-yoga-posture-in-green-and-yellow-sportswear-workout-physical-exercise-isolated-cartoon-character-on-white-background-vector.jpg",
        "https://img.freepik.com/vector-premium/ilustracion-diseno-plano-pose-loto_151150-4203.jpg?w=360",
        "https://media.istockphoto.com/id/1357391833/es/vector/pose-de-cadáver-prasarita-balasana-hermosa-práctica-de-chica-savasana.jpg?s=612x612&w=0&k=20&c=fxAlswd3RPaRVadcHhoyYVahVOFBA3xfGfKG5Rc7CVA="
    ];

    const [currentInstructionIndex, setCurrentInstructionIndex] = useState(0);
    const [timeLeft, setTimeLeft] = useState(60);
    const [isRunning, setIsRunning] = useState(false);
    const [meditationStarted, setMeditationStarted] = useState(false);
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
            stopMeditation();
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
                    Práctica de Yoga Guiada
                </h1>
                <p className="mt-4 text-teal-500 text-lg p-2 text-center italic">
                    Conecta cuerpo y mente a través del movimiento y la quietud.
                </p>

                <div className="mt-6 bg-white p-6 rounded-lg shadow-xl flex flex-col items-center">
                <h3 className="text-xl font-bold text-green-600 mt-6 mb-2 text-center">Consejos Adicionales</h3>
                    <ul className="list-disc list-inside space-y-2">
                        <li><strong>Duración:</strong> Dedica al menos 15 minutos para cada sesión.</li>
                        <li><strong>Ambiente:</strong> Crea un espacio tranquilo y libre de distracciones.</li>
                        <li><strong>Conexión:</strong> Mantén tu respiración fluida y acompasada con los movimientos.</li>
                    </ul>

                    {meditationStarted ? (
                        <>
                            <h3 className="text-xl font-bold text-green-600 mb-2 text-center">Postura Actual</h3>
                            <p className="text-center mb-4 text-lg">
                                {instructions[currentInstructionIndex]}
                            </p>
                            <img
                                src={images[currentInstructionIndex]}
                                alt={`Instrucción ${currentInstructionIndex + 1}`}
                                className="w-100 h-80 object-cover rounded-lg mb-4"
                            />

                            <h3 className="text-xl font-bold text-blue-600 mb-2 text-center">Tiempo Restante</h3>
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
