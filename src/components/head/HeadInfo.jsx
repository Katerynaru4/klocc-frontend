import React from 'react';
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

export default HeadInfo;
