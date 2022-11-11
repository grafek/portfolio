import { useContext } from "react";
import { BsArrowUp } from "react-icons/bs";
import { ThemeContext } from "../../contexts/Theme";
import ContactForm from "./ContactForm";
import { ContactIcons, SectionHeading, SocialIcons } from "../UI";

export default function Footer() {
  const themeCtx = useContext(ThemeContext);

  const currYear = new Date().getFullYear();

  return (
    <footer
      id={"contact"}
      className={`${themeCtx.themeClasses.lightDarkBg} snap-start min-h-screen`}
    >
      <SectionHeading>Contact</SectionHeading>
      <div className="h-[calc(90vh-1rem)] relative flex flex-col md:justify-between w-full p-8 pb-1 overflow-hidden">
        <div className="w-full flex items-center h-2/3 md:h-full">
          <ContactForm />
        </div>
        <div className="flex flex-col justify-center w-full space-y-3 absolute bottom-0 left-0">
          <a href="#home" className="mx-auto" title="home">
            <BsArrowUp className={`${themeCtx.themeClasses.text} text-2xl`} />
          </a>
          <div className="flex gap-8 justify-center">
            <SocialIcons iconsSize={"text-2xl"} />
            <ContactIcons iconsSize={"text-2xl"} />
          </div>
          <p className={`${themeCtx.themeClasses.subText} text-center`}>
            ©{currYear} Jacek Grafender
          </p>
        </div>
      </div>
    </footer>
  );
}
