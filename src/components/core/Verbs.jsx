import { useGameProvider } from "../GameProvider"
import PropTypes from 'prop-types'

const Verbs = () => {
    const { verbs, currentAction, setCurrentAction } = useGameProvider()

    const Active = ({ verb }) => (
    <>
        <span className='active-verb'>{verb}</span>
        &nbsp;
        <span
        className='active-cancel'
        onClick={() => setCurrentAction("")}
        >
        x
        </span>
    </>
    )

    const Inactive = ({ verb }) => (
    <span
        className='inactive-verb'
        onClick={() => {
        setCurrentAction(verb)
        }}
    >
        {verb}
    </span>
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
        {verbs.map((verb,i) => (
            <li key={i}>
            {verb === currentAction ? (
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