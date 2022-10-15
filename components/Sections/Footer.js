import { useContext } from "react";
import { ThemeContext } from "../../store/ThemeContext";
import SocialLinks from "../UI/SocialLinks";

export default function Footer() {
  const themeCtx = useContext(ThemeContext);

  const currYear = new Date().getFullYear();

  return (
    <footer
      id={"footer"}
      className={`${themeCtx.themeClasses.lightDarkBg} w-100  shadow-xl p-8 pb-1`}
    >
      <p className="text-center my-12 text-slate-400">----------contact form----------</p>
      <SocialLinks />
      <p className={`${themeCtx.themeClasses.subText} text-center mt-2`}>
        ©{currYear} Jacek Grafender
      </p>
    </footer>
  );
}
