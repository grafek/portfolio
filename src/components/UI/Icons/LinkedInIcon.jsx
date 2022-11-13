import { useContext } from "react";
import { ThemeContext } from "../../../contexts/Theme";
import { BsLinkedin } from "react-icons/bs";

export default function LinkedInIcon({ className = "" }) {
  const themeCtx = useContext(ThemeContext);

  return (
    <a
      href={"https://www.linkedin.com/in/jacek-grafender/"}
      rel="noreferrer"
      target={"_blank"}
      title={"linkedin"}
    >
      <BsLinkedin className={`${className} ${themeCtx.themeClasses.text}`} />
    </a>
  );
}
