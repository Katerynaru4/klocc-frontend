import React from 'react';

const HeadTitle = ({ showDescription, toggleDescription }) => {
  return (
    <>
      <h1
        className="title"
        onClick={toggleDescription}
        title={showDescription ? 'Hide description' : 'Show description'}
      >
         Klocc - kitty lines of code counter 
      </h1>
    </>
  );
};
export default HeadTitle;
