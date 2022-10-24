import { useContext } from "react";
import { BsFillClockFill } from "react-icons/bs";
import { ThemeContext } from "../../store/ThemeContext";

export default function Timestamp({ dates, children }) {
  const themeCtx = useContext(ThemeContext);
  return (
    <div className={`${themeCtx.themeClasses.subText} flex items-center gap-2`}>
      <BsFillClockFill className={`duration-300 text-lg hover:scale-110`} />
      <span className="flex-1">{dates}</span>·
      <span className="flex-1">{children}</span>
    </div>
  );
}
