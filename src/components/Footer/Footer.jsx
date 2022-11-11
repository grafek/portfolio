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
      className={`${themeCtx.themeClasses.lightDarkBg} snap-start min-h-screen h-screen`}
    >
      <SectionHeading>Contact</SectionHeading>
      <div className="h-[calc(100%-5rem)] min-h-[430px] relative justify-between flex flex-col w-11/12 mx-auto pb-1 overflow-hidden">
        <div className="w-full flex items-center md:h-full">
          <ContactForm />
        </div>
        <div className="flex flex-col justify-center w-full space-y-3 ">
          <a href="#home" className="mx-auto" title="home">
            <BsArrowUp className={`${themeCtx.themeClasses.text} text-2xl`} />
          </a>
          <div className="flex gap-6 justify-center">
            <SocialIcons iconsSize={"text-2xl"} />
            <p className={`${themeCtx.themeClasses.subText} text-center`}>
              ©{currYear} Jacek Grafender
            </p>
            <ContactIcons iconsSize={"text-2xl"} />
          </div>
        </div>
      </div>
    </footer>
  );
}
