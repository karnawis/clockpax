import Details from '../ui/GameDetails';
import Puzzle from '../ui/GamePuzzle';
import Views from '../Game/Views';
import Verbs from '../core/Verbs';
import Panel from '../core/Panel';

const GameMain = () => {
    return (
    <>
        {/* Main Content Grid */}
        <div className="w-full relative bg-black lg:grid-cols-2">
            <Views />
            <Panel />
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8'>
                <Details />
                <Puzzle />
                <Verbs />

            </div>
        </div>
    </>
    );
};

export default GameMain;