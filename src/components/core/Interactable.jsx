import { useGameProvider } from "../GameProvider"
const Interactable = () => {
    const { interactables } = useGameProvider()
    return (
    <div className="bg-white rounded-lg shadow">
        <h2 className="text-slate-800 text-3xl">Interactable</h2>
        <ul>
        {interactables.map((interactable,i) => (
            <li key={i}>
                <span className='interactable'>{interactable}</span>
            </li>
        ))}
        </ul>
    </div>
    )
}

export default Interactable
