import { useContext } from "react";
import { BsArrowUp } from "react-icons/bs";
import { ThemeContext } from "../../store/ThemeContext";
import Contact from "../UI/Contact";
import SocialLinks from "../UI/SocialLinks";

export default function Footer() {
  const themeCtx = useContext(ThemeContext);

  const currYear = new Date().getFullYear();

  return (
    <footer
      id={"footer"}
      className={`${themeCtx.themeClasses.lightDarkBg} w-100 min-h-fit flex flex-col justify-center gap-8 shadow-xl p-8 pb-1`}
    >
      <div>
        <a href="#">
          <BsArrowUp
            className={`${themeCtx.themeClasses.text} mx-auto text-3xl`}
          />
        </a>
      </div>
      <div>
        <div className="flex gap-8 justify-center">
          <SocialLinks iconsSize={"text-2xl"} />
          <Contact iconsSize={"text-2xl"} />
        </div>
        <p className={`text-gray-500 text-center my-2`}>
          ©{currYear} Jacek Grafender
        </p>
      </div>
    </footer>
  );
}
