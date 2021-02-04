import React, { useContext } from "react";
import themes from "./themes";

const ThemeContext = React.createContext();

export const ThemeContextProvider = ({ children }) => {
    
  return (
    <ThemeContext.Provider value={{ themes }}>
      {children}
    </ThemeContext.Provider>
  );
};

export function withTheme(Component) {
    return (props) => {
        const { themes } = useContext(ThemeContext);
    return <Component {...props} themes={themes} />;
};
}