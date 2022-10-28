import { useContext } from "react";
import { ThemeContext } from "../../store/ThemeContext";
import SectionDivider from "./SectionDivider";

export default function SectionHeading({ title }) {
  const themeCtx = useContext(ThemeContext);
  return (
    <>
      <h3
        className={`${themeCtx.themeClasses.text} px-4 text-4xl lg:text-5xl font-semibold pb-5`}
      >
        <SectionDivider />
        {title}
      </h3>
    </>
  );
}
