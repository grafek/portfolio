import { useContext } from "react";
import { ThemeContext } from "../../store/ThemeContext";

export default function SectionHeading({ title }) {
  const themeCtx = useContext(ThemeContext);
  return (
    <h3
      className={`${themeCtx.themeClasses.text} text-2xl w-11/12 xl:w-full mx-auto text-center font-semibold border-b pb-5 border-indigo-900`}
    >
      {title}
    </h3>
  );
}
