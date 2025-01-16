import { useGameProvider } from "../../hook/useCustomHook";
import Interactable from "../core/Interactable";
const Views = () => {
    const {
            currentScene,
            handleInteraction,
        } = useGameProvider();

        const handlePointerDown = (event) => {
            const x = event.nativeEvent.offsetX
            const y = event.nativeEvent.offsetY
        }
        
    return (
        <div id="views" className="rounded-lg flex shadow items-center justify-center" style={{position: 'relative'}} onPointerDown={handlePointerDown}>
            {/*<h3 className="text-light-800">{currentScene.name } </h3>*/}
            <div className="rounded-lg mx-auto w-[500px]"
                style={{
                    backgroundImage: `url(${currentScene?.image})`,
                    backgroundSize: '100%',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'top center',
                    height: '500px',
                    width: '500px',
                    position: 'relative', 
                    zIndex: 1,
                }}
            >
            {currentScene?.interactables?.map((interactable) => (
                <Interactable
                    key={interactable.name}
                    interactable={interactable}
                    handler={handleInteraction}
                />
            ))}
            <div id="puzzle-number" className="absolute top-1/4 left-1/4 w-6 h-6 bg-transparent flex items-start justify-right">
                <p id="puzzle-number-button" className="font-bold text-xs">
                    {currentScene.puzzle}
                </p>
            </div>
        </div>
        {/*<img className="w-full" src={currentScene?.image} alt={currentScene.name} />*/}
    </div>
    )
}

export default Views
