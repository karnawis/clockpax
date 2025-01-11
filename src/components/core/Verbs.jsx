import { useGameProvider } from "../GameProvider"
import PropTypes from 'prop-types'

const Verbs = () => {
    const { setCurrentScene,
            setCurrentDetails,
            verbs, 
            currentVerb,
            setCurrentVerb
        } = useGameProvider()

    const handleSelect = (verb) => {
            setCurrentVerb(verb)
            const details = `What would you like to ${verb}?`
            setCurrentDetails([details])
            }
        
        const handleCancel = () => {
            setCurrentVerb("")
            setCurrentDetails(setCurrentScene.details)
            }
    const Active = ({ verb }) => (
    <>
        <span className='active-verb text-slate-500'>{verb}</span>
        <button
            className='active-cancel text-red-500 text-slate-500'
            onClick={() => handleCancel()}
            >
            {verb}
        </button>
    </>
    )

    const Inactive = ({ verb }) => (
    <button
        className='inactive-verb text-slate-500'
        onClick={() => {
        handleSelect(verb)
        }}
        >
        {verb} test
    </button>
    )

    Active.propTypes = {
        verb: PropTypes.string.isRequired,
    }
    
    Inactive.propTypes = {
        verb: PropTypes.string.isRequired,
    }

return (
    <div id='verbs' className="bg-white rounded-lg shadow">
        <h2 className="text-slate-800 text-3xl">Verb</h2>
        <ul>
        {verbs.map((verb) => (
            <li key={verb}>
            {verb === currentVerb ? (
                <Active verb={verb} />
            ) : (
                <Inactive verb={verb} />
            )}
            </li>
        ))}
        </ul>
    </div>
    )
}

export default Verbs