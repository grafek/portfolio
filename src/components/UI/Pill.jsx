import { useContext } from "react";
import { ThemeContext } from "../../contexts/Theme";

const Pill = ({ children, className }) => {
  const themeCtx = useContext(ThemeContext);
  return (
    <span
      className={` ${themeCtx.themeClasses.darkBg} ${className} inline-block rounded-full px-3 py-1 text-sm font-semibold`}
    >
      {children}
    </span>
  );
};

export default Pill;
