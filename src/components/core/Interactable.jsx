
import { useGameProvider } from "../GameProvider"
import imgBoxPlaceholderPath from '../../assets/images/box.png'
const Interactable = () => {
    const { interactables, handler } = useGameProvider()
    const { x, y, width, height, verbs, image } = interactables

    const handlePointerDown = () => {
        handler(verbs);
        console.log('verbs >>',verbs)
    };

    console.log(`interactables >> ${interactables} interactables ${interactables} ` )
    
    return (
    <div className="bg-white rounded-lg shadow">
        <h2 className="text-slate-800 text-3xl">Interactable</h2>
        <ul>
        {interactables.map((interactable,i) => (
            <li key={i}>
                <span className='interactable text-slate-500'>{interactable[i]}</span>
            </li>
        ))}
        </ul>
        <div>
            {/* style={{
                background: `url(${image})`,
                backgroundSize: 'cover',
                height: `${height}px`,
                width: `${width}px`,
            }}
            onPointerDown={handlePointerDown} /> */}
            <div id="interactable"
            style={{
            position: 'absolute',
            left: x,
            top: -10,
            width: width,
            height: height,
            //backgroundImage: `url(./images/${image || imgBoxPlaceholder })`,
            backgroundImage: `url(${imgBoxPlaceholderPath }})`,
            opacity: 1,
            zIndex: 999,
            border: '1px solid black',
            display: 'block',
            width: '20px',
            height: '20px',
            background: 'red'
            }}
            onPointerDown={handlePointerDown}
        /></div>
    </div>
    )
}

export default Interactable

