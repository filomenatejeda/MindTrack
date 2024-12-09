'use client';
import React, { useState, useEffect } from 'react';
import NavbarH from '/components/NavbarH';
import Footer from '/components/Footer';
import { useTranslation } from 'react-i18next';

export default function RelaxingMusicPage() {
    const { t } = useTranslation();

    const playlist = [
        { title: "So Many Years", audioSrc: "https://soundcloud.com/filomena-tejeda/calm-piano?in=filomena-tejeda/sets/relax&si=3984316360e44f1f8e5fc50d6fadcac9&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { title: "Gentle Breeze", audioSrc: "https://soundcloud.com/relaxing-music-production/sets/piano-covers?si=4d92047baffb49f6b3d3a91a6e082794&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { title: "Ocean Waves", audioSrc: "https://soundcloud.com/filomena-tejeda/relaxing-piano?in=filomena-tejeda/sets/relax&si=f80b4d0b18434003a7a50347e5e9b052&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { title: "Soft piano", audioSrc: "https://soundcloud.com/filomena-tejeda/soft-piano?si=c39a29e45ffb482493a54994d4565c1a&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { title: "Meditation", audioSrc: "https://soundcloud.com/filomena-tejeda/meditation?si=300e5b5ce34248df8900c06b946f6193&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
    ];

    const [currentTrackIndex, setCurrentTrackIndex] = useState(-1);  // Inicialmente no hay canción seleccionada
    const [isPlaying, setIsPlaying] = useState(false);
    const [player, setPlayer] = useState(null);

    useEffect(() => {
        if (window.SC && currentTrackIndex >= 0) {
            const widget = window.SC.Widget(document.getElementById('soundcloud-iframe'));
            setPlayer(widget);
        }
    }, [currentTrackIndex]);

    const playTrack = (index) => {
        setCurrentTrackIndex(index);
        setIsPlaying(true);
    };

    const handleSongEnd = () => {
        const nextTrackIndex = (currentTrackIndex + 1) % playlist.length; // Avanza al siguiente track o vuelve al primero
        setCurrentTrackIndex(nextTrackIndex);
    };

    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-teal-50 to-teal-100">
            <div className="fixed top-0 w-full z-50">
                <NavbarH />
            </div>
            <script src="https://cdn.tailwindcss.com"></script>
            <div className="flex-grow pt-20 p-4">
                <h1 suppressHydrationWarning={true} className="text-4xl font-bold bg-gradient-to-r from-teal-500 to-teal-600 text-white p-6 rounded-lg shadow-lg text-center">
                    {t('relaxingmusic')}
                </h1>
                <div className="mt-6 bg-white p-6 rounded-lg shadow-xl">
                    <h2 suppressHydrationWarning={true}  className="text-2xl font-semibold text-teal-700 mb-4 text-center">
                        {t('playlist')}
                    </h2>
                    <ul className="space-y-4">
                        {playlist.map((track, index) => (
                            <li key={index} className={`flex items-center justify-between p-3 rounded-lg ${currentTrackIndex === index ? 'bg-teal-200' : ''} hover:bg-teal-100 transition-all duration-200`}>
                                <span className="text-lg font-medium text-teal-800">{track.title}</span>
                                <button
                                    onClick={() => playTrack(index)}
                                    className={`bg-teal-500 text-white px-4 py-2 rounded-lg transition-all duration-300 ${currentTrackIndex === index && isPlaying ? 'bg-teal-600' : ''}`}
                                >
                                    {currentTrackIndex === index && isPlaying ? 'Reproduciendo' : 'Reproducir'}
                                </button>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-6 rounded-lg overflow-hidden">
                        {/* Reproductor de SoundCloud con un diseño más minimalista */}
                        {currentTrackIndex >= 0 && (
                            <iframe
                                id="soundcloud-iframe"
                                width="100%"
                                height="166"
                                scrolling="no"
                                frameBorder="no"
                                allow="autoplay"
                                className="rounded-lg shadow-lg"
                                src={`https://w.soundcloud.com/player/?url=${playlist[currentTrackIndex].audioSrc}&color=ff5500&auto_play=true&hide_related=true&show_comments=false&show_user=false&show_reposts=false`}
                            ></iframe>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
