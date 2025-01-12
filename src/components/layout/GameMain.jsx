import Details from '../ui/GameDetails';
import Puzzle from '../ui/GamePuzzle';
import Views from '../Game/Views';
import Verbs from '../core/Verbs';
import Panel from '../core/Panel';
import Interactable from '../core/Interactable';

const GameMain = () => {
    return (
    <>
        {/* Main Content Grid */}
        <div className="w-full relative">
            <Views />
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8'>
                <Details />
                <Puzzle />
                <Verbs />
                <Panel />
                <Interactable />
            </div>
        </div>
    </>
    );
};

export default GameMain;