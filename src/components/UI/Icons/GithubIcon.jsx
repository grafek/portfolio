import { BsGithub } from "react-icons/bs";
import { useContext } from "react";
import { ThemeContext } from "../../../contexts/Theme";

function GithubIcon({ className = "" }) {
  const themeCtx = useContext(ThemeContext);

  return (
    <a
      href={"https://github.com/grafek"}
      rel="noreferrer"
      target={"_blank"}
      title={"github"}
    >
      <BsGithub className={`${className} ${themeCtx.themeClasses.text} `} />
    </a>
  );
}

export default GithubIcon;
