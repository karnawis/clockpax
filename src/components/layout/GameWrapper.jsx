import { useState } from 'react';
import PropTypes from 'prop-types';
import useSoundHandler from '../../hook/useSoundHandler';
import imageIntro from '../../assets/images/clockspax-intro.jpg'

const GameWrapper = ({ children }) => {
    const { handlePlaySound } = useSoundHandler();
    const [reveal, setRevealmessage] = useState(false);

    const revealScreenOn = () => {
        handlePlaySound();
        setRevealmessage(true); //set false in prod mode
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
        <div id="game-wrapper" className="relative bg-black-800 text-light min-h-screen">
            {reveal ? (
                <div id='reveal-screen'>
                    <h1 className='text-5xl font-bold text-white-500'>Welcome to clockPax Game</h1>
                    <p>This nonlinear structure ties the worlds together through Fefe’s perspective, blending surrealism, emotional depth, and a sense of discovery.</p>
                    <img className="w-full" src={imageIntro} alt="clockpax" />
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
