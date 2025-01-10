import { scenes } from "../../data/scenes";
import { useGameProvider } from "../GameProvider"

const Views = () => {
    const { 
            verbs,
            scenes,
            currentScene,
            setCurrentScene,
            setCurrentDetails,
            currentVerb,
            setCurrentVerb,

            
        } = useGameProvider();

    const handleVerb = (sector) => {
        if (verb?.[sector]?.[currentVerb]?.details) {
            setCurrentDetails(verb[sector][currentVerb].details)
            setCurrentVerb("")
        }

        if (verbs?.[sector]?.[currentVerb]?.nextscene) {
            const nextscene = scenes[verb[sector][currentVerb].nextscene]
            setCurrentScene(nextScene)
            setCurrentDetails(nextscene.details)
            setCurrentVerb("")
        }
        }
    return (
        <div id="views" className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-slate-800 text-3xl">View Port</h2>
            <p className="text-slate-800">{currentScene.name } </p>
            {/* Main Photo Scene (spans full width on small screens, 3/4 on large screens) */}
            <img className="w-full h-full object-cover" src={currentScene.image} alt={currentScene.name} />
            <div className="absolute top-1/4 left-1/4 w-6 h-6 bg-transparent flex items-start justify-right">
                <p className="text-blue-500 font-bold text-xs">
                    {currentScene.puzzle}
                </p>
            </div>
        </div>
    )
}

export default Views
