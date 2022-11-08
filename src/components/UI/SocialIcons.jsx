import { useContext } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { ThemeContext } from "../../contexts/Theme";

export default function SocialIcons({ iconsSize }) {
  const themeCtx = useContext(ThemeContext);

  return (
    <>
      <a
        href={"https://github.com/grafek"}
        rel="noreferrer"
        target={"_blank"}
        title={"github"}
      >
        <BsGithub
          className={`${iconsSize} ${themeCtx.themeClasses.text}  duration-300 hover:scale-110`}
        />
      </a>
      <a
        href={"https://www.linkedin.com/in/jacek-grafender/"}
        rel="noreferrer"
        target={"_blank"}
        title={"linkedin"}
        id
      >
        <BsLinkedin
          className={`${iconsSize} ${themeCtx.themeClasses.text}  duration-300 hover:scale-110`}
        />
      </a>
    </>
  );
}
