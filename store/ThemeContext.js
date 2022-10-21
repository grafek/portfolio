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
    ? "text-slate-300 transition-colors"
    : "text-inherit transition-colors";

  const lightDarkBg = darkTheme
    ? "bg-slate-700 transition-colors"
    : "bg-slate-100 transition-colors";

  const darkBg = darkTheme
    ? "bg-gray-800 transition-colors"
    : "bg-slate-200 transition-colors";

  const btnTrans = darkTheme
    ? "text-white bg-transparent rounded-md border-indigo-700 border py-2 hover:bg-indigo-700 hover:text-white px-8"
    : "text-black bg-transparent rounded-md border-indigo-700 border py-2 hover:bg-indigo-700 hover:text-white px-8";

  const btnFilled = darkTheme
    ? "text-white bg-indigo-700 py-2 rounded-md hover:bg-transparent border border-indigo-700 hover:text-white px-8"
    : "text-white bg-indigo-700 rounded-md border-indigo-700 border py-2 hover:bg-transparent hover:text-black px-8";

  const themeClasses = {
    text,
    subText,
    lightDarkBg,
    darkBg,
    btnTrans,
    btnFilled,
  };

  return (
    <ThemeContext.Provider value={{ toggleDarkTheme, themeClasses, darkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeContextProvider };
