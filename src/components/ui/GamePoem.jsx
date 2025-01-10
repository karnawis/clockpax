import { useGameProvider } from "../GameProvider";
const Poem = () => {
    const { currentScene } = useGameProvider();
    // const { tasks, visitedRooms } = useGameProvider()

    // const taskClass = (task) => {
    //   if (visitedRooms.includes(task.key)) {
    //     return "task-completed"
    //   }
    //}
    return (
    <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-bold text-gray-800 mb-2">Poem</h2>
        <p className="text-slate-500">Line 1 of the poem...</p>
        <p className="text-slate-500">Line 2 of the poem...</p>
        <p className="text-slate-500">Line 3 of the poem...</p>
        <p className="text-slate-500">Line 4 of the poem...</p>
        <p className="text-slate-500">Line 5 of the poem...</p>
        <p className="text-slate-500">Line 6 of the poem...</p>
        <p className="text-slate-500">Line 7 of the poem...</p>
        <p className="text-slate-500">Line 8 of the poem...</p>
        {/*}    <ul>
            {tasks.map((task) => (
                <li
                key={task.key}
                className={taskClass(task)}
                >
                {task.name}
                </li>
            ))}
            </ul>
            */}
    </div>
    )
}

export default Poem;