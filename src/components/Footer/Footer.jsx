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
      id={"footer"}
      className={`${themeCtx.themeClasses.lightDarkBg} snap-start min-h-screen h-fit`}
    >
      <SectionHeading>Contact me!</SectionHeading>
      <div className="min-h-[85vh] md:h-[87vh] flex flex-col items-center justify-between w-full shadow-xl p-8 pb-1 overflow-hidden">
        <div className="w-full h-full md:flex items-center">
          {" "}
          <ContactForm />
        </div>
        <div className="relative  bottom-0 left-0 flex flex-col justify-center w-full space-y-6">
          <a href="#home" className="mx-auto">
            <BsArrowUp className={`${themeCtx.themeClasses.text} text-2xl`} />
          </a>
          <div className="flex gap-8 justify-center">
            <SocialIcons iconsSize={"text-2xl"} />
            <ContactIcons iconsSize={"text-2xl"} />
          </div>
          <p className={`text-gray-500 text-center mb-2`}>
            ©{currYear} Jacek Grafender
          </p>
        </div>
      </div>
    </footer>
  );
}
