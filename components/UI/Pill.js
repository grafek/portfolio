import { useContext } from "react";
import { ThemeContext } from "../../store/ThemeContext";

const Pill = ({ children }) => {
  const themeCtx = useContext(ThemeContext);
  return (
    <span
      className={`${themeCtx.themeClasses.subText} ${themeCtx.themeClasses.darkBg} mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700`}
    >
      {children}
    </span>
  );
};

export default Pill;
