import { useContext } from "react";
import { BsArrowUp } from "react-icons/bs";
import { ThemeContext } from "../../contexts/Theme";
import ContactForm from "./ContactForm";
import { SectionHeading } from "../UI";

export default function Footer() {
  const themeCtx = useContext(ThemeContext);

  const currYear = new Date().getFullYear();

  return (
    <footer
      id={"contact"}
      className={`${themeCtx.themeClasses.lightDarkBg} snap-start h-screen`}
    >
      <SectionHeading>Contact</SectionHeading>
      <div className="h-screen flex flex-col w-11/12 mx-auto justify-evenly sm:justify-around">
        <div className="h-[60vh] w-full max-h-full flex items-center ">
          <ContactForm />
        </div>
        <div className="flex flex-col justify-center w-full space-y-3">
          <a href="#home" className="mx-auto" title="home">
            <BsArrowUp className={`${themeCtx.themeClasses.text} text-2xl`} />
          </a>
          <p className={`${themeCtx.themeClasses.subText} text-center`}>
            ©{currYear} Jacek Grafender
          </p>
        </div>
      </div>
    </footer>
  );
}
