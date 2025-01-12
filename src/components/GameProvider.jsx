    import { createContext, useContext, useState } from "react";
    import PropTypes from "prop-types";
    import { scenes, verbs, puzzleWords } from "../data/scenes";

    const GameContext = createContext()

    export const GameProvider = ({ children }) => {

    //const { scenes, verbs, poemWords } = data
    const [currentScene, setCurrentScene] = useState(scenes.scene3)
    const [currentDetails, setCurrentDetails] = useState(
        scenes.scene3.details
    )
    const [currentVerb, setCurrentVerb] = useState("explore")   
    const interactables = ["key"]
/*
    const [trackedScenes, setTrackedScenes] = useState(["scene3"])//change it 
    const addTrackScenes = (sceneKey) => {
    const index = setTrackedScenes.indexOf(sceneKey)
        if (index === -1) {
            console.log('sceneKey >>',sceneKey)
       // let updatedRooms = [...trackedScenes]
       //updatedScene.push(sceney)
        //setVisitedRooms(updatedRooms)
        }
    }
        
    const clearTrackedScenes = () => setTrackedScenes([])

    const completedPoemWords = poemWords.filter((poemWord) => trackScenes.includes(poemWord.key))
    const PoemCompletionPercentage = (completedPoemWords.length / poemWords.length) * 100
*/
    const handleExit = (exit) => {
        console.log(`exit >> ${exit} ${exit.details}`)
        setCurrentScene(exit) 
        setCurrentDetails(exit.details)
        console.log(`exit >> ${exit} ${exit.name} ${exit.details}`)
    }

    return (
        <GameContext.Provider value={{ 
                scenes, 
                currentScene, 
                setCurrentScene, 
                handleExit,
                puzzleWords,
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