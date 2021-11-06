import React from 'react';
import PropTypes from 'prop-types';

const HeadTitle = ({ showDescription, toggleDescription }) => (
  <>
    <h1
      className="header__title"
      onClick={toggleDescription}
      title={showDescription ? 'Hide description' : 'Show description'}
    >
      Klocc - kitty lines of code counter
    </h1>
  </>
);

HeadTitle.propTypes = {
  showDescription: PropTypes.bool.isRequired,
  toggleDescription: PropTypes.func.isRequired,
};

export default HeadTitle;
