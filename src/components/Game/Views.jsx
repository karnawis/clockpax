import { verbs } from "../../data/scenes";
import { useGameProvider } from "../GameProvider"
import Interactable from "../core/Interactable";
const Views = () => {
    const {
            currentScene,
            handleInteraction,
        } = useGameProvider();

        const handlePointerDown = (t) => {
            //const x = event.nativeEvent.offsetX
            //const y = event.nativeEvent.offsetY
            //console.log('X',x, 'y', y)
            handler(verbs)
        }
        
    return (
        <div id="views" className="bg-white p-4 rounded-lg shadow" style={{ width: 600, height: 600, position: 'relative' }}  onPointerDown={handlePointerDown}>
            <h2 className="text-slate-800 text-3xl">View Port</h2>
            <p className="text-slate-800">{currentScene.name } </p>
            {/* Main Photo Scene (spans full width on small screens, 3/4 on large screens) */}
            <img className="w-full h-full object-cover" src={currentScene?.image} alt={currentScene.name} />
            <div className="absolute top-1/4 left-1/4 w-6 h-6 bg-transparent flex items-start justify-right">
                <p className="text-blue-500 font-bold text-xs">
                    {currentScene.puzzle}
                </p>
            </div>
            {currentScene?.interactables?.map((interactable) => (
                <Interactable
                key={interactable.name}
                interactable={interactable}
                handler={handleInteraction}
                />
            ))}
            <p>
            {/*<div
                style={{
                    background: `url(${currentScene?.image})`,
                    backgroundSize: 'cover',
                    height: '100px',
                    width: '100px',
                }}
                >
                </div>*/}
            </p>
        </div>
    )
}

export default Views
