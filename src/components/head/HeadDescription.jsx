import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const HeadDescription = ({ showDescription, toggleDescription }) => {
  const descriptionCn = classNames({
    header__description: true,
    openDesc: showDescription,
    hiddenDesc: !showDescription,
  });
  return (
    <div
      className={descriptionCn}
      title={showDescription ? 'Hide description' : 'Show description'}
    >
      <p className="header__description-text" onClick={toggleDescription}>
        Hi, hopefully you will find this tool useful.
      </p>
    </div>
  );
};

HeadDescription.propTypes = {
  showDescription: PropTypes.bool.isRequired,
  toggleDescription: PropTypes.func.isRequired,
};

export default HeadDescription;
