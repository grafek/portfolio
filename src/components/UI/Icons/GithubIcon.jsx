import { BsGithub } from "react-icons/bs";
import { useContext } from "react";
import { ThemeContext } from "../../../contexts/Theme";

function GithubIcon({ className = "", github }) {
  const themeCtx = useContext(ThemeContext);

  return (
    <a
      href={github.socialLink}
      rel="noreferrer"
      target={"_blank"}
      title={github.title}
    >
      <BsGithub className={`${className} ${themeCtx.themeClasses.text} `} />
    </a>
  );
}

export default GithubIcon;
