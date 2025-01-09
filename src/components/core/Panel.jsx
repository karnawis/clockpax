import { useEffect } from 'react';
import { useGameProvider } from '../GameProvider';
import PanelButtons from '../ui/PanelButtons';


const Panel = () => {
    const { currentScene, scenes, handleExit } = useGameProvider();
    const exits = currentScene.exits;

    const Exit = ({ exitName }) => {
        const exit = scenes[exitName]
        return (
            <td className="exit"> 
                <PanelButtons name={exitName} onClick={() => handleExit(exit)} />
            </td>
        )
        }
    const NoExit = () => {
        <PanelButtons name='' onClick={(e) => e.preventDefault()} />
    }

    // 9x9 grid for now
    const rows = [
        ["a1", "a2", "a3"],
        ["b1", "b2", "b3"],
        ["c1", "c2", "c3"],
    ];

    useEffect(() => {
        try {
            if (currentScene) {
                console.log(`current scene >> ${currentScene.Exit}`);
            } else {
                console.log(`current scene >> ${currentScene}`);
            }
        } catch (error) {
            console.log(`Error >> ${error} ${error.message}`);
        }
    }, [currentScene]);

    return (
    <div id="panel" className="mt-6 grid grid-cols-9 gap-2 max-w-6xl mx-auto">
        <table>
            <tbody>
            {rows.map((row, rowIndex) => (
                <tr key={rowIndex} className="row">
                    {row.map((cell) =>
                        exits?.[cell] ? (
                            <Exit
                                key={cell}
                                exitName={exits[cell]}
                            />
                        ) : (
                            <NoExit key={cell} />
                        )
                    )}
                </tr>
            ))}
            </tbody>
        </table>
    </div>
    );
};


export default Panel;