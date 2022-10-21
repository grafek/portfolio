import { useContext } from "react";
import { ThemeContext } from "../../store/ThemeContext";

export default function SectionHeading({ title }) {
  const themeCtx = useContext(ThemeContext);
  return (
    <h3
      className={`${themeCtx.themeClasses.text} text-2xl lg:text-3xl w-11/12 xl:w-full mx-auto text-center font-semibold pb-5`}
    >
      {title}
    </h3>
  );
}
