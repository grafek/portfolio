import { useContext } from "react";
import { ThemeContext } from "../../store/ThemeContext";
import SectionDivider from "./SectionDivider";

export default function SectionHeading({ children }) {
  const themeCtx = useContext(ThemeContext);
  return (
    <>
      <h3
        className={`${themeCtx.themeClasses.text} px-4 text-4xl lg:text-5xl font-semibold py-12`}
      >
        <SectionDivider />
        {children}
      </h3>
    </>
  );
}
