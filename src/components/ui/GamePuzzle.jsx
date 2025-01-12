import { useGameProvider } from "../GameProvider";
const Puzzle = () => {
    const { puzzleWords } = useGameProvider();

    // const { tasks, visitedRooms } = useGameProvider()

    // const taskClass = (task) => {
    //   if (visitedRooms.includes(task.key)) {
    //     return "task-completed"
    //   }
    //}

    return (
    <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-bold text-gray-800 mb-2">Puzzle</h2>
        {<ul>
            {puzzleWords.map((puzzleWord) => (
                <li className="text-slate-500"
                key={puzzleWord.key}
                >
                {puzzleWord.name}
                </li>
            ))}
            </ul>
        }
    </div>
    )
}

export default Puzzle;