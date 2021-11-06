import React from 'react';
import PropTypes from 'prop-types';
import HeadDescription from './HeadDescription.jsx';
import HeadTitle from './HeadTitle.jsx';

const HeadInfo = ({ showDescription, setShowDescription }) => {
  const toggleDescription = () => setShowDescription(!showDescription);

  return (
    <>
      <HeadTitle
        showDescription={showDescription}
        toggleDescription={toggleDescription}
      />
      <HeadDescription
        showDescription={showDescription}
        toggleDescription={toggleDescription}
      />
    </>
  );
};

HeadInfo.propTypes = {
  showDescription: PropTypes.bool.isRequired,
  setShowDescription: PropTypes.func.isRequired,
};

export default HeadInfo;
