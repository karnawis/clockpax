import { useGameProvider } from "../GameProvider"
const Views = () => {
    const { verbs,
            scenes,
            currentScene,
            currentVerb,
            trackScene,
            setCurrentDetails,
            setCurrentScene,
            setCurrentVerb,
        } = useGameProvider();

        const handleVerb = (verbKey) => {
            if (verbs?.[verbKey]?.[currentVerb]) {
                const  aheadScene = scenes[verbs[verbKey][currentVerb].aheadScene]
                setCurrentScene(aheadScene)
                trackScene(aheadScene.key)
                console.log('aheadScene key>>',aheadScene.key)
                setCurrentDetails(verbs[verbKey][currentVerb])
                setCurrentVerb("")
                console.log('aheadScene >>',aheadScene)
            }
        }

          // 9x9 action grid
    const rows = [
        ['a1', 'a2', 'a3'],
        ['b1', 'b2', 'b3'],
        ['c1', 'c2', 'c3'],
    ];

    return (
        <div id="views" className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-slate-800 text-3xl">View Port</h2>
            <p className="text-slate-800">{currentScene.name } </p>
            {/* Main Photo Scene (spans full width on small screens, 3/4 on large screens) */}
            <img className="w-full h-full object-cover" src={currentScene?.image} alt={currentScene.name} />
            <div className="absolute top-1/4 left-1/4 w-6 h-6 bg-transparent flex items-start justify-right">
                <p className="text-blue-500 font-bold text-xs">
                    {currentScene.puzzle}
                </p>
            </div>
            <ul>
                {rows.map((row, rowIndex) => (
                    <li className="text-blue-500" key={rowIndex}>
                        {row.map(cell => <button key={cell} onClick={() => handleVerb(cell)}>{cell} test</button>)}
                    </li>
                ))}
            </ul>
            <p>
                <button className="text-slate-500" onClick={()=> handleVerb('a1')}>
                    button 1
                </button>
            </p>
            <p>
            {/*<div
                style={{
                    background: `url(${currentScene?.image})`,
                    backgroundSize: 'cover',
                    height: '100px',
                    width: '100px',
                }}
                >
                </div>*/}
            </p>
        </div>
    )
}

export default Views
