import { createContext, useContext, useEffect } from "react";
import { useLocalStorage } from "react-use";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./darkTheme";
import { lightTheme } from "./lightTheme";

const ThemeContext = createContext();
const useTheme = () => useContext(ThemeContext);

const ManageThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useLocalStorage("theme", false);

  useEffect(() => {
    setIsDarkMode(isDarkMode)
  })

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };  

  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export { useTheme, ManageThemeProvider };
