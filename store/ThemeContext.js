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

  const btnTrans = darkTheme
    ? "text-white bg-transparent rounded-md border-slate-900 border py-2 hover:bg-slate-900 hover:text-white px-8"
    : "text-black bg-transparent rounded-md border-slate-900 border py-2 hover:bg-slate-900 hover:text-white px-8";

  const btnFilled = darkTheme
    ? "text-white bg-slate-900 py-2 rounded-md hover:bg-transparent border border-slate-900 hover:text-white px-8"
    : "text-white bg-slate-900 rounded-md border-slate-900 border py-2 hover:bg-transparent-900 hover:text-white px-8";

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
