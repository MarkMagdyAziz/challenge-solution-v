import React, { useState, createContext } from "react";

//1st create context object
export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  // 2nd defining a state
  const [mode, setTheme] = useState("dark");
  // 3rd create the provider component
  return (
    <ThemeContext.Provider
      value={{
        mode,
        setTheme: () => setTheme(mode === "dark" ? "light" : "dark"),
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
