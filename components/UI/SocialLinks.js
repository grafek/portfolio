import { useContext } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { ThemeContext } from "../../store/ThemeContext";

export default function SocialLinks({ className, iconsSize }) {
  const themeCtx = useContext(ThemeContext);

  const classes = `${className} ${themeCtx.themeClasses.text} flex justify-center gap-8`;
  return (
    <div className={classes}>
      <a href={"https://github.com/grafek"} rel="noreferrer" target={"_blank"}>
        <BsGithub className={`${iconsSize} duration-300 hover:scale-110`} />
      </a>
      <a
        href={"https://www.linkedin.com/in/jacek-grafender/"}
        rel="noreferrer"
        target={"_blank"}
      >
        <BsLinkedin className={`${iconsSize} duration-300 hover:scale-110`} />
      </a>
    </div>
  );
}
