import { useContext } from "react";
import { ThemeContext } from "../../contexts/Theme";
import { SectionDivider } from ".";

export default function SectionHeading({ children }) {
  const themeCtx = useContext(ThemeContext);
  return (
    <>
      <h3
        className={`${themeCtx.themeClasses.text} text-center px-4 text-4xl lg:text-5xl font-semibold py-8 tracking-widest`}
      >
        <SectionDivider />
        {children}
      </h3>
    </>
  );
}
