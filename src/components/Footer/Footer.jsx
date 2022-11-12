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
      <div className="h-screen flex flex-col w-11/12 mx-auto ">
        <div className="h-1/2 md:h-2/3 w-full min-h-[300px] flex items-center mt-8">
          <ContactForm />
        </div>
        <div className="flex flex-1 flex-col justify-center w-full space-y-3 relative bottom-0 left-0 right-0">
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
