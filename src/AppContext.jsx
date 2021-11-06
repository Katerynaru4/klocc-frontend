import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const Context = createContext({
  isLight: true,
  toggleTheme: () => {},
});

const AppContext = ({ children }) => {
  const [isLight, setIsLight] = useState(true);

  const toggleTheme = () => {
    setIsLight(!isLight);
  };

  return (
    <Context.Provider value={{ isLight, toggleTheme }}>
      {children}
    </Context.Provider>
  );
};

AppContext.propTypes = {
  children: PropTypes.node,
};

export default AppContext;
