import React, { useState } from "react";

const ThemeContext = React.createContext();

function ThemeContextProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleDarkTheme = () => {
    setDarkTheme((prev) => !prev);
  };

  const text = darkTheme
    ? "text-slate-200 transition-colors"
    : "text-inherit transition-colors";

  const subText = darkTheme
    ? "text-slate-400 transition-colors"
    : "text-inherit transition-colors";

  const lightDarkBg = darkTheme
    ? "bg-slate-800 transition-colors"
    : "bg-slate-100 transition-colors";

  const darkBg = darkTheme
    ? "bg-gray-800 transition-colors"
    : "bg-slate-50 transition-colors";

  const themeClasses = {
    text,
    subText,
    lightDarkBg,
    darkBg,
  };

  return (
    <ThemeContext.Provider value={{ toggleDarkTheme, themeClasses }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeContextProvider };
