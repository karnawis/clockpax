// src/hooks/useSoundHandler.js
import { useState } from 'react';
import useSound from 'use-sound';
import tickSound from '../assets/sounds/soundbuttonclick.wav';
const useSoundHandler = () => {
    const [play, { stop }] = useSound(tickSound);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlaySound = () => {
        if (!isPlaying) {
            setIsPlaying(true);
            play();
        } else {
            setIsPlaying(false);
            stop();
        }
    };

    return { handlePlaySound, isPlaying };
};

export default useSoundHandler;