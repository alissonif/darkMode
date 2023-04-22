import PropTypes from 'prop-types';

export const ToggleButton = ({ darkMode, handleToggleClick }) => {
  return (
    <button onClick={handleToggleClick}>
      {darkMode ? 'Modo claro' : 'Modo escuro'}
    </button>
  );
};

ToggleButton.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  handleToggleClick: PropTypes.func.isRequired
};
