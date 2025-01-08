import { useGameProvider } from "../GameProvider"

const MoveGrid = () => {
const { areas, currentArea, setCurrentArea } = useGameProvider()
const exits = currentArea.exits

const Exit = ({ exitName }) => {
const exit = areas[exitName]
    return (
        <td className="exit">
        <button onClick={() => setCurrentArea(exit)} />
        </td>
    )
}
const NoExit = () => <td className="no-exit"></td>

        // 9x9 grid for now
    const rows = [
    ["a1", "a2", "a3"],
    ["b1", "b2", "b3"],
    ["c1", "c2", "c3"],
    ]
    return (
    <table id="move-grid">
        <tbody>
            <span>test</span>
            {rows.map((row, rowIndex) => (
                <tr key={rowIndex}>
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
    )
}

export default MoveGrid