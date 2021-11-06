import React from 'react';
import PropTypes from 'prop-types';

const Loading = ({ status }) => {
  if (status === 'false') return null;

  const loadingText = (
    <p className="loading__text">Waiting for the server response ...</p>
  );

  return (
    <div className="loading">
      {loadingText}
      <div className="loading__container">
        <div className="loading__wave"></div>
        <div className="loading__wave"></div>
        <div className="loading__wave"></div>
        <div className="loading__wave"></div>
        <div className="loading__wave"></div>
        <div className="loading__wave"></div>
        <div className="loading__wave"></div>
        <div className="loading__wave"></div>
        <div className="loading__wave"></div>
        <div className="loading__wave"></div>
      </div>
      <div className="loading__container">
        <div className="loading__wave"></div>
        <div className="loading__wave"></div>
        <div className="loading__wave"></div>
        <div className="loading__wave"></div>
        <div className="loading__wave"></div>
        <div className="loading__wave"></div>
        <div className="loading__wave"></div>
        <div className="loading__wave"></div>
        <div className="loading__wave"></div>
        <div className="loading__wave"></div>
      </div>
      <div className="loading__container">
        <div className="loading__wave"></div>
        <div className="loading__wave"></div>
        <div className="loading__wave"></div>
        <div className="loading__wave"></div>
        <div className="loading__wave"></div>
        <div className="loading__wave"></div>
        <div className="loading__wave"></div>
        <div className="loading__wave"></div>
        <div className="loading__wave"></div>
        <div className="loading__wave"></div>
      </div>
    </div>
  );
};

Loading.propTypes = {
  status: PropTypes.string.isRequired,
};

export default Loading;
