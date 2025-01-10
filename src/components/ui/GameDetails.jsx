import { useGameProvider } from "../GameProvider";
const Details = () => {
    const  { currentScene } = useGameProvider();
    return (
        <div id="details"  className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-bold text-gray-800 mb-2">Details About Each Scene</h2>
            <p className="text-slate-500">Current Scene: {currentScene.Details}</p>
        </div>
    );
}

export default Details
