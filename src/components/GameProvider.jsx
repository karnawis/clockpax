    import { createContext, useContext, useState } from "react";
    import PropTypes from "prop-types";
    import { areas } from "../data/data";

    const GameContext = createContext()

    export const GameProvider = ({ children }) => {

    const [currentArea, setCurrentArea] = useState(areas.area3)

    return (
        <GameContext.Provider value={{ areas, currentArea, setCurrentArea }}>
            {children}
        </GameContext.Provider>
        )
    }

GameProvider.propTypes = {
    children: PropTypes.node.isRequired,
}
export const useGameProvider = () => useContext(GameContext)