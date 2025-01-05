import gameImage2 from '../../assets/images/clockspax-mid-night-skies.jpg'
import Navigation from './Navigation';
import Poem from './Poem';
const Main = () => {
    return (
    
    <>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">

        {/* Main Photo Area (spans full width on small screens, 3/4 on large screens) */}
        <div className="lg:col-span-3 bg-gray-300 relative rounded-lg overflow-hidden h-96" >
            <img src={gameImage2} alt="game image" className="w-full h-full object-cover" />

            {/*Example Hotspot */}
            <div className="absolute top-1/4 left-1/3 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center cursor-pointer">
            <span className="text-white font-bold text-sm">1</span>
            </div>
        </div>
    
    {/*Example Hotspot */}
    <Poem />

    {/* Interactable Object Info Area (spans full width, placed below on small screens) */} 
        <div className="lg:col-span-4 bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-bold text-gray-800 mb-2">Object Information</h2>
            <p>Details about the selected object will appear here.</p>
        </div>
    </div>
    <Navigation />

    </>
    );
};

export default Main;