import { useContext } from "react";
import { ThemeContext } from "../../store/ThemeContext";

export default function Card({ title, children }) {
  const themeCtx = useContext(ThemeContext);

  return (
    <div
      className={`${themeCtx.themeClasses.lightDarkBg}  shadow-lg m-8 p-8 rounded-lg`}
    >
      <h1
        className={`${themeCtx.themeClasses.text} text-2xl font-semibold md:text-3xl`}
      >
        {title}
      </h1>
      <p
        className={`${themeCtx.themeClasses.subText} leading-8 mt-4 text-justify`}
      >
        {children}
      </p>
    </div>
  );
}
