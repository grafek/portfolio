import { useContext } from "react";
import { BsArrowUp } from "react-icons/bs";
import { ThemeContext } from "../../store/ThemeContext";
import ContactIcons from "../UI/ContactIcons";
import SocialIcons from "../UI/SocialIcons";

export default function Footer() {
  const themeCtx = useContext(ThemeContext);

  const currYear = new Date().getFullYear();

  return (
    <footer
      id={"footer"}
      className={`${themeCtx.themeClasses.lightDarkBg} w-100 flex flex-col justify-center gap-6 shadow-xl p-8 pb-1`}
    >
      <a href="#" className="mx-auto">
        <BsArrowUp className={`${themeCtx.themeClasses.text} text-2xl`} />
      </a>
      <div className="flex gap-8 justify-center">
        <SocialIcons iconsSize={"text-2xl"} />
        <ContactIcons iconsSize={"text-2xl"} />
      </div>
      <p className={`text-gray-500 text-center mb-2`}>
        ©{currYear} Jacek Grafender
      </p>
    </footer>
  );
}
