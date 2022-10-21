import { useContext } from "react";
import { ThemeContext } from "../../../store/ThemeContext";

export default function NavItem({ className, content, onClick, href }) {
  const themeCtx = useContext(ThemeContext);

  const classes = `${className} ${themeCtx.themeClasses.text} border-b border-indigo-900 uppercase font-semibold hover:scale-110 transition duration-300`;
  return (
    <li className={classes}>
      <a href={href} onClick={onClick}>
        {content}
      </a>
    </li>
  );
}
