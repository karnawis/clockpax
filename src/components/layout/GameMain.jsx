import Details from '../ui/GameDetails';
import Poem from '../ui/GamePoem';
import Views from '../Game/Views';

const GameMain = () => {
    return (
    <>
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Views />
            <Poem />
            <Details />
        </div>
    </>
    );
};

export default GameMain;