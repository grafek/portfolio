import { useContext } from "react";
import { ThemeContext } from "../../contexts/Theme";

const Pill = ({ children }) => {
  const themeCtx = useContext(ThemeContext);
  return (
    <span
      className={` ${themeCtx.themeClasses.darkBg} ${themeCtx.themeClasses.subText} mb-2 mr-2 inline-block rounded-full px-3 py-1 text-sm font-semibold`}
    >
      {children}
    </span>
  );
};

export default Pill;
