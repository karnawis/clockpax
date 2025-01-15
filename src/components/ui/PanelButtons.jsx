import propTypes from 'prop-types';

const PanelButtons = ({ name, onClick }) => {
    return (
        <button
            className='exit m-1 p-3 bg-gray-300 hover:bg-gray-400 rounded-lg flex items-center justify-center text-slate-800'
            onClick={onClick}>
                {name}
        </button>
    )
}

PanelButtons.propTypes = {
    name: propTypes.string.isRequired,
    onClick: propTypes.func.isRequired
}

export default PanelButtons
