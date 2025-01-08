import { useState } from 'react';
import PropTypes from 'prop-types';
import useSoundHandler from '../../hook/useSoundHandler';

const GameWrapper = ({ children }) => {
    const { handlePlaySound } = useSoundHandler();
    const [reveal, setRevealmessage] = useState(false);

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
