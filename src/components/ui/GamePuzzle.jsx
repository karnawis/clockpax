import { useGameProvider } from '../../hook/useCustomHook';

const Puzzle = () => {
    const { puzzleWords, trackedScenes } = useGameProvider();


const puzzleClass = (puzzle) => {
    console.log("puzzle", puzzle)
    if (trackedScenes.includes(puzzle.key)) {
        console.log(trackedScenes)
        return "puzzle-completed"
    } else {
        console.log(trackedScenes)
        return "puzzle-completed"
    }
    // alert(puzzle)
    // if (trackedScenes.includes(puzzle.key)) {
    //     return "scene-completed";
    // }
    // return "";
    
};


    return (
    <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-bold text-gray-800 mb-2">Puzzle</h2>
        <ul>
            {puzzleWords.map((puzzleWord) => (
                <li onClick={()=> {puzzleClass(puzzleWord.key)}} className="text-slate-500" key={puzzleWord.key}>
                    {puzzleWord.name}
                </li>
            ))}
        </ul>
    </div>
    )
}

export default Puzzle;