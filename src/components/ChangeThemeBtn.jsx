import React from 'react';
import PropTypes from 'prop-types';

const ChangeThemeBtn = ({ toggleTheme, isLight }) => (
  <div className="theme-btn">
    <label htmlFor="checkbox" className="theme-btn__switch">
      <input
        id="checkbox"
        type="checkbox"
        className="theme-btn__checkbox"
        onClick={toggleTheme}
      />
      <span className="theme-btn__slider theme-btn__round"></span>
      <span className="theme-btn__text">{isLight ? 'Light' : 'Dark'}</span>
    </label>
  </div>
);

ChangeThemeBtn.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
  isLight: PropTypes.bool.isRequired,
};

export default ChangeThemeBtn;
