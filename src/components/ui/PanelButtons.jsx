import propTypes from 'prop-types';

const PanelButtons = ({ name, onClick }) => {
    return (
        <button
            className='exit w-10 h-10 bg-gray-300 hover:bg-gray-400 rounded-full flex items-center justify-center text-gray-800'
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
