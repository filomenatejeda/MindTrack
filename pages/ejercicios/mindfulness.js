'use client';
import React, { useState, useEffect } from 'react';
import NavbarH from '/components/NavbarH';
import Footer from '/components/Footer';
import { useTranslation } from 'react-i18next';

export default function MindfulnessPage() {
    const { t } = useTranslation();

    const instructions = [
        t('instruction_one_mindfulness'),
        t('instruction_two_mindfulness'),
        t('instruction_three_mindfulness'),
        t('instruction_four_mindfulness'),
        t('instruction_five_mindfulness'),
        t('instruction_six_mindfulness'),
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
                <h1 suppressHydrationWarning={true} className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-indigo-600 text-white p-6 rounded-lg shadow-lg text-center">
                    {t('mindfulness')}
                </h1>
                <p suppressHydrationWarning={true} className="mt-4 text-indigo-500 text-lg p-2 text-center italic">
                    {t('intromindfulness')}
                </p>

                <div className="mt-6 bg-white p-6 rounded-lg shadow-xl flex flex-col items-center">
                    <h3 suppressHydrationWarning={true} className="text-xl font-bold text-green-600 mt-6 mb-2 text-center">{t('advise')}</h3>
                    <ul className="list-disc list-inside space-y-2">
                        <li suppressHydrationWarning={true}><strong suppressHydrationWarning={true}>{t('space')}</strong> {t('find_quiet')}</li>
                        <li suppressHydrationWarning={true}><strong>Postura: </strong>{t('sit')}</li>
                        <li suppressHydrationWarning={true}><strong suppressHydrationWarning={true}>{t('attitude')}</strong> {t('be_kind')}</li>
                    </ul>

                    {mindfulnessStarted ? (
                        <>
                            <h3 className="text-xl font-bold text-green-600 mb-2 text-center">Ejercicio Actual</h3>
                            <p className="text-center mb-4 text-lg">
                                {instructions[currentInstructionIndex]}
                            </p>

                            <h3 
                            suppressHydrationWarning={true}className="text-xl font-bold text-blue-600 mb-2 text-center">{t('time_remaining')}</h3>
                            <p 
                            suppressHydrationWarning={true}className="text-center text-lg">{timeLeft} {t('seconds')}</p>

                            <div className="flex space-x-4 mt-4">
                                <button
                                suppressHydrationWarning={true}
                                    onClick={pauseMindfulness}
                                    className="bg-yellow-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-yellow-600"
                                >
                                    {t('pause')}
                                </button>
                                <button
                                suppressHydrationWarning={true}
                                    onClick={stopMindfulness}
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
                                        onClick={continueMindfulness}
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
                            onClick={startMindfulness}
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
