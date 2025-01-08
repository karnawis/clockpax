import { useEffect } from 'react';
import { useGameProvider } from '../GameProvider';
import PropTypes from 'prop-types';

const Exit = ({ exitName }) => <td className="exit">{exitName}</td>;
const NoExit = () => <td className="no-exit"></td>;

Exit.propTypes = {
    exitName: PropTypes.string.isRequired,
};

import { useState } from 'react';

const Panel = () => {
    const [error, setError] = useState(null);
    const { currentArea } = useGameProvider();
    const exits = currentArea.exits;

    // 9x9 grid for now
    const rows = [
        ["a1", "a2", "a3"],
        ["b1", "b2", "b3"],
        ["c1", "c2", "c3"],
    ];

    useEffect(() => {
        console.log(`currnt area Exit >> ${currentArea} Exit >>  ${currentArea.Exit} No Exit >>  ${currentArea.NoExit}`);
        try {
            if (currentArea) {
                console.log(`current area >> ${currentArea.Exit}`);
            } else {
                console.log(`current area >> ${currentArea}`);
            }
        } catch (error) {
            setError(error.message);
            console.log(`Error >> ${error} ${error.message}`);
        }
    }, [currentArea]);

    return (
    <table id="panel">
        <tbody>
            <span className="text-xl font-bold text-white-800 mb-2">Panel</span>
        {rows.map((row, rowIndex) => (
            <tr className='text-white-800' key={rowIndex}>
            {row.map((cell) =>
                exits?.[cell] ? (
                <Exit key={cell} exitName={exits[cell]} />
                ) : (
                <NoExit key={cell} />
                )
            )}
            {rowIndex}
            </tr>
        ))}
        </tbody>
    </table>
    );
};

export default Panel;