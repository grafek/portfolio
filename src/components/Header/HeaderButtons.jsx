import { useContext } from "react";
import { CgClose } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import { ThemeContext } from "../../contexts/Theme";
import { SocialIcons } from "../UI";

export default function HeaderButtons({ toggleNavHandler, isNavShown }) {
  const themeCtx = useContext(ThemeContext);

  const navMobileButtons =
    isNavShown === "SHOW" ? (
      <CgClose
        onClick={toggleNavHandler}
        className={`${themeCtx.themeClasses.text} text-2xl md:text-3xl cursor-pointer duration-300 hover:scale-110`}
      />
    ) : (
      <GiHamburgerMenu
        onClick={toggleNavHandler}
        className={`${themeCtx.themeClasses.text} text-2xl md:text-3xl cursor-pointer duration-300 hover:scale-110`}
      />
    );

  return (
    <>
      <div className="absolute top-0 p-8 z-20">{navMobileButtons}</div>
      <div className="absolute flex gap-6 top-0 right-0 p-8 z-20">
        {themeCtx.changeThemeBtn}
        <SocialIcons iconsSize={"text-2xl md:text-3xl"} />
      </div>
    </>
  );
}
