import { useContext } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { ThemeContext } from "../../store/ThemeContext";

export default function SocialLinks({ className }) {
  const themeCtx = useContext(ThemeContext);

  const classes = `${className} ${themeCtx.themeClasses.text} flex justify-center gap-8`;
  return (
    <div className={classes}>
      <a href={"https://github.com/grafek"} rel="noreferrer" target={"_blank"}>
        <BsGithub className="text-3xl hover:scale-110 duration-300" />
      </a>
      <a
        href={"https://www.linkedin.com/in/jacek-grafender/"}
        rel="noreferrer"
        target={"_blank"}
      >
        <BsLinkedin className="text-3xl hover:scale-110 duration-300" />
      </a>
    </div>
  );
}
