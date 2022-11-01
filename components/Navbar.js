import { useContext } from "react";
import { ThemeContext } from "../store/ThemeContext";
import NavItem from "./Sections/Header/NavItem";

export default function Navbar({ isNavShown, toggleNavHandler }) {
  const themeCtx = useContext(ThemeContext);
  return (
    <nav
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
        <NavItem content="about" href={"#about"} onClick={toggleNavHandler} />
        <NavItem
          content="projects"
          href={"#projects"}
          onClick={toggleNavHandler}
        />
        <NavItem
          content="contact"
          href={"#contact"}
          onClick={toggleNavHandler}
        />
      </ul>
    </nav>
  );
}
