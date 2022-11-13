import { useContext } from "react";
import { ThemeContext } from "../../../contexts/Theme";
import { BsLinkedin } from "react-icons/bs";

export default function LinkedInIcon({ className = "", linkedIn }) {
  const themeCtx = useContext(ThemeContext);

  return (
    <a
      href={linkedIn.socialLink}
      rel="noreferrer"
      target={"_blank"}
      title={linkedIn.title}
    >
      <BsLinkedin className={`${className} ${themeCtx.themeClasses.text}`} />
    </a>
  );
}
