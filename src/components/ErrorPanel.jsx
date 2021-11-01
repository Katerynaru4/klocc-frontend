import React from 'react';

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
export default ErrorPanel;
