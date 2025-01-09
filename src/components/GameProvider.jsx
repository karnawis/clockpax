    import { createContext, useContext, useState } from "react";
    import PropTypes from "prop-types";
    import { scenes } from "../data/scenes";

    const GameContext = createContext()

    export const GameProvider = ({ children }) => {

    const [currentScene, setCurrentScene] = useState(scenes.scene3)

    const handleExit = (exit) => {
        setCurrentScene(exit)
    }

    return (
        <GameContext.Provider value={{ 
                scenes, 
                currentScene, 
                setCurrentScene, 
                handleExit 
            }}>
            {children}
        </GameContext.Provider>
        )
    }

GameProvider.propTypes = {
    children: PropTypes.node.isRequired,
}
export const useGameProvider = () => useContext(GameContext)