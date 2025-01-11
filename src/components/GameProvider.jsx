    import { createContext, useContext, useState } from "react";
    import PropTypes from "prop-types";
    import { scenes, verbs } from "../data/scenes";

    const GameContext = createContext()

    export const GameProvider = ({ children }) => {

    const [currentScene, setCurrentScene] = useState(scenes.scene3)
    const [currentDetails, setCurrentDetails] = useState(
        scenes.scene3.details
    )
    const [currentVerb, setCurrentVerb] = useState("explore")   
    const interactables = ["key"]

    const handleExit = (exit) => {
        setCurrentScene(exit)
    }

    return (
        <GameContext.Provider value={{ 
                scenes, 
                currentScene, 
                setCurrentScene, 
                handleExit,
                verbs,
                currentVerb,
                setCurrentVerb, 
                interactables,
                currentDetails,
                setCurrentDetails,
            }}>
            {children}
        </GameContext.Provider>
        )
    }

GameProvider.propTypes = {
    children: PropTypes.node.isRequired,
}
export const useGameProvider = () => useContext(GameContext)