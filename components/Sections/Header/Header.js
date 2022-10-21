import { useContext, useState } from "react";
import { BsMoonFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import SocialLinks from "../../UI/SocialLinks";
import NavItem from "./NavItem";
import { ThemeContext } from "../../../store/ThemeContext";

export default function Header() {
  const [isNavShown, setIsNavShown] = useState("MOUNTED");

  const themeCtx = useContext(ThemeContext);

  const hideNavHandler = () => {
    if (window !== undefined && window.innerWidth <= 768) {
      setIsNavShown("HIDE");
    }
  };

  const toggleNavHandler = () => {
    isNavShown === "HIDE" || isNavShown === "MOUNTED"
      ? setIsNavShown("SHOW")
      : setIsNavShown("HIDE");
  };

  const navMobileButtons =
    isNavShown === "SHOW" ? (
      <CgClose
        onClick={toggleNavHandler}
        className={`${themeCtx.themeClasses.text} text-3xl cursor-pointer hover:animate-pulse`}
      />
    ) : (
      <GiHamburgerMenu
        onClick={toggleNavHandler}
        className={`${themeCtx.themeClasses.text} text-3xl cursor-pointer hover:animate-pulse`}
      />
    );

  return (
    <header className={`w-screen h-20 fixed opacity-95  z-10`}>
      <nav className="h-20 md:px-10 md:max-w-7xl md:mx-auto md:justify-between">
        <div className="md:hidden absolute p-7 z-20">{navMobileButtons}</div>
        <div
          className={`flex-1 justify-self-center justify-between md:block md:h-full ${
            isNavShown === "SHOW"
              ? `animate-slideIn  ${themeCtx.themeClasses.lightDarkBg}`
              : isNavShown === "HIDE"
              ? "animate-slideOut"
              : "hidden"
          }`}
        >
          <ul
            className={`items-center justify-center h-screen  flex flex-col gap-10 md:h-full md:flex-row md:gap-20 ${
              isNavShown === "HIDE"
                ? "md:translate-x-full md:translate-y-0"
                : ""
            } `}
          >
            <NavItem content="about" href={"#main"} onClick={hideNavHandler} />
            <NavItem
              content="projects"
              href={"#projects"}
              onClick={hideNavHandler}
            />
            <NavItem
              content="contact"
              href={"#footer"}
              onClick={hideNavHandler}
            />
          </ul>
        </div>
        <div className="flex absolute top-7 right-7">
          <BsMoonFill
            onClick={themeCtx.toggleDarkTheme}
            className={`${themeCtx.themeClasses.text} text-3xl cursor-pointer mx-8 hover:scale-110 transition duration-300`}
          />
          <SocialLinks />
        </div>
      </nav>
    </header>
  );
}
