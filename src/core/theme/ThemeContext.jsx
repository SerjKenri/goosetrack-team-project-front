import { createContext, useContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./darkTheme";
import { lightTheme } from "./lightTheme";

const ThemeContext = createContext();
const useTheme = () => useContext(ThemeContext);

const ManageThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const theme = isDarkMode ? darkTheme : lightTheme;
  console.log(theme);
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export { useTheme, ManageThemeProvider };
