import { useGameProvider } from "../GameProvider";
const Details = () => {
    const  { currentScene } = useGameProvider();
    return (
        <div className="lg:col-span-4 bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-bold text-gray-800 mb-2">Details About Each Scene</h2>
            <p className="text-slate-500">Details about the selected object will appear here.</p>
            <p className="text-slate-500">Current Scene: {currentScene.name}</p>
            <img src={currentScene.image} alt={currentScene.name} />
        </div>
    );
}

export default Details
