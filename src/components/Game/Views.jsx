import { useGameProvider } from "../GameProvider"

const Views = () => {
    const { currentScene } = useGameProvider();
    return (
        <div id="views" className="lg:col-span-3 bg-gray-300 relative rounded-lg overflow-hidden h-96">
            <h2>View Port</h2>
            <p className="text-white-800">{currentScene.name } </p>
            {/* Main Photo Scene (spans full width on small screens, 3/4 on large screens) */}
            <img className="w-full h-full object-cover" src={currentScene.image} alt={currentScene.name} />
            <div className="absolute top-1/4 left-1/3 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center cursor-pointer">
                {/*Example Hotspot */}
                <span className="text-white font-bold text-sm">1</span>
                <span className="text-white font-bold text-sm">{currentScene.puzzle}</span>
            </div>
        </div>
    )
}

export default Views
