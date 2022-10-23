import { useContext, useState } from "react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import SocialLinks from "../../UI/SocialLinks";
import NavItem from "./NavItem";
import { ThemeContext } from "../../../store/ThemeContext";

export default function Header() {
  const [isNavShown, setIsNavShown] = useState("MOUNTED");

  const themeCtx = useContext(ThemeContext);

  const hideNavHandler = () => {
    setIsNavShown("HIDE");
  };

  const toggleNavHandler = () => {
    isNavShown === "HIDE" || isNavShown === "MOUNTED"
      ? setIsNavShown("SHOW")
      : setIsNavShown("HIDE");
  };

  const themeButton = themeCtx.darkTheme ? (
    <BsSunFill
      onClick={themeCtx.toggleDarkTheme}
      className="text-slate-200 text-3xl cursor-pointer mx-8 duration-300 hover:scale-110"
    />
  ) : (
    <BsMoonFill
      onClick={themeCtx.toggleDarkTheme}
      className={`${themeCtx.themeClasses.text} text-3xl cursor-pointer mx-8 duration-300 hover:scale-110`}
    />
  );

  const navMobileButtons =
    isNavShown === "SHOW" ? (
      <CgClose
        onClick={toggleNavHandler}
        className={`${themeCtx.themeClasses.text} text-3xl cursor-pointer duration-300 hover:scale-110`}
      />
    ) : (
      <GiHamburgerMenu
        onClick={toggleNavHandler}
        className={`${themeCtx.themeClasses.text} text-3xl cursor-pointer duration-300 hover:scale-110`}
      />
    );

  return (
    <header className={`w-screen h-0 fixed opacity-95  z-40`}>
      <div className="absolute p-7 z-20">{navMobileButtons}</div>
      <nav className="h-0">
        <div
          className={`${
            isNavShown === "SHOW"
              ? `animate-slideIn`
              : isNavShown === "HIDE"
              ? "animate-slideOut"
              : "hidden"
          } ${themeCtx.themeClasses.lightDarkBg}`}
        >
          <ul
            className={`items-center justify-center h-screen flex flex-col gap-10`}
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
          {themeButton}
          <SocialLinks iconsSize={"text-3xl"} />
        </div>
      </nav>
    </header>
  );
}
