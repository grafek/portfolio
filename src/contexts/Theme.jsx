import React, { useEffect, useState } from "react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";

const ThemeContext = React.createContext();

const getLocalStorageTheme =
  typeof window !== "undefined" ? localStorage.theme : "dark";

function ThemeContextProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(getLocalStorageTheme);
  const [mounted, setMounted] = useState(false);

  const colorTheme = darkTheme === "dark" ? "dark" : "light";

  useEffect(() => {
    setMounted(true);
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", colorTheme);
    }
  }, [colorTheme]);
  if (!mounted) return null;

  const toggleDarkTheme = () => {
    setDarkTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const changeThemeBtn =
    darkTheme === "dark" ? (
      <BsSunFill
        onClick={toggleDarkTheme}
        className="text-slate-200 text-xl md:text-2xl cursor-pointer duration-300 hover:scale-110 opacity-70"
      />
    ) : (
      <BsMoonFill
        onClick={toggleDarkTheme}
        className={`text-xl md:text-2xl cursor-pointer duration-300 hover:scale-110 opacity-70`}
      />
    );

  const scrollbar =
    darkTheme === "dark"
      ? "scrollbar-thin scrollbar-thumb-indigo-600 scrollbar-track-gray-800"
      : "scrollbar-thin scrollbar-thumb-indigo-600 scrollbar-track-gray-300";

  const shadow =
    darkTheme === "dark" ? "shadow-[#ffffff15]" : "shadow-[#00000025]";

  const text = darkTheme === "dark" ? "text-gray-50" : "text-slate-900";

  const subText =
    darkTheme === "dark"
      ? "text-slate-400 transition-colors"
      : "text-slate-700 transition-colors";

  const lightDarkBg =
    darkTheme === "dark"
      ? "bg-gray-900 transition-colors"
      : "bg-gray-50 transition-colors";

  const darkBg =
    darkTheme === "dark"
      ? "bg-darkBg transition-colors"
      : "bg-gray-100 transition-colors";

  const btnTrans =
    darkTheme === "dark"
      ? "text-white bg-transparent rounded-md border-indigo-700 border  py-2 md:py-3 hover:bg-indigo-700 hover:text-white px-8 md:px-12 duration-300"
      : "text-black bg-transparent rounded-md border-indigo-700 border py-2 md:py-3 hover:bg-indigo-700 hover:text-white px-8 md:px-12 duration-300";

  const btnFilled =
    darkTheme === "dark"
      ? "text-white bg-indigo-700 py-2 md:py-3 rounded-md hover:bg-transparent border border-indigo-700 hover:text-white px-8 md:px-12 duration-300"
      : "text-white bg-indigo-700 rounded-md border-indigo-700 border py-2 md:py-3 hover:bg-transparent hover:text-black px-8 md:px-12 duration-300";

  const themeClasses = {
    text,
    subText,
    lightDarkBg,
    darkBg,
    btnTrans,
    btnFilled,
    shadow,
    scrollbar,
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
