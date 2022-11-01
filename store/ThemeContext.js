import React, { useState } from "react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";

const ThemeContext = React.createContext();

function ThemeContextProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(true);

  const toggleDarkTheme = () => {
    setDarkTheme((prev) => !prev);
  };

  const changeThemeBtn = darkTheme ? (
    <BsSunFill
      onClick={toggleDarkTheme}
      className="text-slate-200 text-2xl md:text-3xl cursor-pointer duration-300 hover:scale-110"
    />
  ) : (
    <BsMoonFill
      onClick={toggleDarkTheme}
      className={`text-2xl md:text-3xl cursor-pointer duration-300 hover:scale-110`}
    />
  );

  const shadow = darkTheme ? "shadow-[#ffffff15]" : "shadow-[#00000025]";

  const text = darkTheme
    ? "text-gray-50 transition-all"
    : "text-inherit transition-all";

  const subText = darkTheme
    ? "text-gray-100 transition-all"
    : "text-inherit transition-all";

  const lightDarkBg = darkTheme
    ? "bg-gray-900 transition-all"
    : "bg-gray-50 transition-all";

  const darkBg = darkTheme
    ? "bg-darkBg transition-all"
    : "bg-gray-100 transition-all";

  const btnTrans = darkTheme
    ? "text-white bg-transparent rounded-md border-indigo-700 border py-2 hover:bg-indigo-700 hover:text-white px-8 duration-300"
    : "text-black bg-transparent rounded-md border-indigo-700 border py-2 hover:bg-indigo-700 hover:text-white px-8 duration-300";

  const btnFilled = darkTheme
    ? "text-white bg-indigo-700 py-2 rounded-md hover:bg-transparent border border-indigo-700 hover:text-white px-8 duration-300"
    : "text-white bg-indigo-700 rounded-md border-indigo-700 border py-2 hover:bg-transparent hover:text-black px-8 duration-300";

  const themeClasses = {
    text,
    subText,
    lightDarkBg,
    darkBg,
    btnTrans,
    btnFilled,
    shadow,
  };

  return (
    <ThemeContext.Provider
      value={{ toggleDarkTheme, themeClasses, darkTheme, changeThemeBtn }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeContextProvider };
