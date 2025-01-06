import { useState } from 'react';
import PropTypes from 'prop-types';
import useSound from 'use-sound';
import chimes from '../../assets/sounds/soundbuttonclick.wav';

const GameWrapper = ({ children }) => {
    const [play, {stop}] = useSound(chimes);
    const [reveal, setRevealmessage] = useState(true);
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

    const revealScreenOn = () => {
        handlePlaySound();
        setRevealmessage(false);
    }
{/*}
    const [creditOpen, setCreditOpen] = useState(false); // Add this line

    const creditsScreenOn = () => {
        playReveal()
        setCreditsOpen(true)
    }

    const creditsScreenOnOff = () => {
        playReveal()
        setCreditsOpen(false)
    }
*/}


    return (
        <div id="game-wrapper" className="relative bg-gray-800 text-white min-h-screen">
            {reveal ? (
                <div id='reveal-screen'>
                    <h1 className='text-5xl font-bold text-white-500'>Welcome to clockPax Game</h1>
                    <button onClick={ revealScreenOn }>Ready to play</button>
                </div>
            ) : (
                children
            )}
        </div>
    )
}

GameWrapper.propTypes = {
    children: PropTypes.node.isRequired,
};

export default GameWrapper;
