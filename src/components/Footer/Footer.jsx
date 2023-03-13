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
      className={`${themeCtx.themeClasses.lightDarkBg} h-[100dvh] snap-start relative`}
    >
      <div className="container mx-auto justify-between flex flex-col h-full">
        <SectionHeading>Let&apos;s talk</SectionHeading>
        <div className="h-5/6 pl-3 pr-6 mx-auto w-full max-h-full flex items-center ">
          <ContactForm />
        </div>
        <div className="flex flex-col justify-center w-full space-y-3 mt-auto">
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
