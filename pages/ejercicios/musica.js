'use client';
import React, { useState } from 'react';
import NavbarH from '/components/NavbarH';
import Footer from '/components/Footer';

export default function RelaxingMusicPage() {
    const playlist = [
        { title: "So Many Years", audioSrc: "/music/calm-piano.mp3" },
        { title: "Gentle Breeze", audioSrc: "/music/music-piano.mp3" },
        { title: "Ocean Waves", audioSrc: "/music/relaxing-piano.mp3" },
        { title: "Soft piano", audioSrc: "/music/soft-piano.mp3" },
        { title: "Meditation", audioSrc: "/music/meditation.mp3" },
    ];

    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    const playTrack = (index) => {
        setCurrentTrackIndex(index);
        setIsPlaying(true);
        const audio = document.getElementById('audioPlayer');
        audio.src = playlist[index].audioSrc;
        audio.play();
    };

    const togglePlayPause = () => {
        const audio = document.getElementById('audioPlayer');
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleSongEnd = () => {
        const nextTrackIndex = (currentTrackIndex + 1) % playlist.length; // Avanza al siguiente track o vuelve al primero.
        setCurrentTrackIndex(nextTrackIndex);
        setIsPlaying(true);
        const audio = document.getElementById('audioPlayer');
        audio.src = playlist[nextTrackIndex].audioSrc;
        audio.play();
    };

    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-teal-50 to-teal-100">
            <div className="fixed top-0 w-full z-50">
                <NavbarH />
            </div>
            <script src="https://cdn.tailwindcss.com"></script>
            <div className="flex-grow pt-20 p-4">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-teal-500 to-teal-600 text-white p-6 rounded-lg shadow-lg text-center">
                    Música Relajante
                </h1>
                <p className="mt-4 text-gray-700 text-lg p-2 text-center italic">
                    Encuentra tu calma escuchando nuestra selección de pistas relajantes.
                </p>

                <div className="mt-6 bg-white p-6 rounded-lg shadow-xl">
                    <h2 className="text-2xl font-semibold text-teal-700 mb-4 text-center">
                        Lista de Reproducción
                    </h2>
                    <ul className="space-y-4">
                        {playlist.map((track, index) => (
                            <li
                                key={index}
                                className={`flex items-center justify-between p-3 rounded-lg transition-colors ${
                                    currentTrackIndex === index ? 'bg-teal-100' : 'hover:bg-gray-100'
                                }`}
                            >
                                <span className="text-lg font-medium text-teal-800">
                                    {track.title}
                                </span>
                                <button
                                    onClick={() => playTrack(index)}
                                    className="bg-teal-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-teal-600"
                                >
                                    {currentTrackIndex === index && isPlaying ? 'Reproduciendo' : 'Reproducir'}
                                </button>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-6">
                        <audio
                            id="audioPlayer"
                            controls
                            className="w-full border border-teal-500 rounded-lg p-0 shadow-lg"
                            onEnded={handleSongEnd} // Maneja el evento al terminar la canción
                        >
                            <source src={playlist[currentTrackIndex]?.audioSrc} type="audio/mp3" />
                            Tu navegador no soporta el reproductor de audio.
                        </audio>
                        <button
                            onClick={togglePlayPause}
                            className={`mt-4 w-full px-4 py-2 rounded-lg shadow-md transition ${
                                isPlaying ? 'bg-red-400 hover:bg-red-500' : 'bg-blue-400 hover:bg-blue-500'
                            } text-white font-medium`}
                        >
                            {isPlaying ? 'Pausar' : 'Reproducir'}
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
