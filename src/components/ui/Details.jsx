import { useGameProvider } from "../GameProvider";
const Details = () => {
    const  { currentArea } = useGameProvider();
    return (
        <div className="lg:col-span-4 bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-bold text-gray-800 mb-2">Details About Each Area</h2>
            <p className="text-slate-500">Details about the selected object will appear here.</p>
            <p className="text-slate-500">Current Area: {currentArea.name}</p>
            <img src={currentArea.image} alt={currentArea.name} />
        </div>
    );
}

export default Details
