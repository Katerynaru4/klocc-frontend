import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

const HeadDescription = ({ showDescription, toggleDescription }) => {
  let descriptionCn = classNames({
    description: true,
    openDesc: showDescription,
    hiddenDesc: !showDescription,
  });
  return (
    <div
      className={descriptionCn}
      title={showDescription ? 'Hide description' : 'Show description'}
    >
      <p className="description__text" onClick={toggleDescription}>
        Hi😺, hopefully you will find this tool useful.
      </p>
    </div>
  );
};
export default HeadDescription;
