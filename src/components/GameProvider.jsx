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

    const handleVerb = (verbKey) => {
        if (verbs?.[verbKey]?.[currentVerb]) {
            const  aheadScene = scenes[verbs[verbKey][currentVerb].aheadScene]
            setCurrentScene(aheadScene)
            console.log('aheadScene key>>',aheadScene.key)
            setCurrentDetails(verbs[verbKey][currentVerb])
            setCurrentVerb("")
            console.log('aheadScene >>',aheadScene)
        }
    }

    const handleInteraction = (verbs) => {
        console.log('verbs >>',verbs)
        if (verbs?.[currentVerb]?.details) {
            setCurrentDetails(verbs[currentVerb].details)
            setCurrentVerb("default")
        }
    }

    const [trackedScenes, setTrackedScenes] = useState(["scene1"])//change it 

    const addTrackedScene = (sceneKey) => {
        console.log('sceneKey >>',sceneKey)
        const index = trackedScenes.indexOf(sceneKey)
        if (index === -1) {
          let updatedScenes = [...trackedScenes]
          updatedScenes.push(sceneKey)
          setTrackedScenes(updatedScenes)
          console.log('updated scene >>',updatedScenes, 'trackedScenes', trackedScenes)
        }
      }
    /*
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
        console.log( currentScene.interactables[0].name)
    }

    return (
        <GameContext.Provider value={{ 
                scenes, 
                currentScene, 
                setCurrentScene, 
                handleExit,
                puzzleWords,
                handleVerb,
                verbs,
                currentVerb,
                setCurrentVerb, 
                interactables: currentScene.interactables,
                currentDetails,
                setCurrentDetails,
                handleInteraction,
                trackedScenes,
                setTrackedScenes,
                addTrackedScene
            }}>
            {children}
        </GameContext.Provider>
        )
    }

GameProvider.propTypes = {
    children: PropTypes.node.isRequired,
}
export const useGameProvider = () => useContext(GameContext)