import React from 'react';
import PropTypes from 'prop-types';

const ErrorPanel = ({ error }) => {
  if (!error) return null;
  return (
    <>
      <div className="error">
        <div className="error__container">
          <div className="error__title">⚠️ Error</div>
          <div className="error__message">{error}</div>
        </div>
      </div>
    </>
  );
};

ErrorPanel.propTypes = {
  error: PropTypes.string,
};

export default ErrorPanel;
