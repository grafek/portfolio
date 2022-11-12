import { useContext } from "react";
import { ThemeContext } from "../../../contexts/Theme";
import { motion, useCycle } from "framer-motion";
import { CgClose } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import Navigation from "./Navigation";

const sidebar = {
  open: {
    opacity: 0.95,
    clipPath: `circle(1000px at 50px 50px)`,
    transition: {
      type: "spring",
      stiffness: 30,
      restDelta: 2,
      damping: 20,
    },
  },
  closed: {
    opacity: 0.95,
    clipPath: "circle(20px at 28px 28px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 200,
      damping: 40,
    },
  },
};

export default function Navbar() {
  const themeCtx = useContext(ThemeContext);
  const [isNavShown, toggleNav] = useCycle(false, true);

  const navBtn = isNavShown ? (
    <CgClose
      onClick={toggleNav}
      className={`${themeCtx.themeClasses.text} text-xl md:text-2xl cursor-pointer duration-300 hover:scale-110 opacity-70`}
    />
  ) : (
    <GiHamburgerMenu
      onClick={toggleNav}
      className={`${themeCtx.themeClasses.text} text-xl md:text-2xl cursor-pointer duration-300 hover:scale-110 opacity-70`}
    />
  );

  return (
    <motion.nav
      animate={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        animate={isNavShown ? "open" : "closed"}
        initial={false}
        className={`${themeCtx.themeClasses.lightDarkBg} absolute top-0 left-0 bottom-0 w-1/3 md:w-1/5 h-screen`}
        variants={sidebar}
      >
        <div className="absolute top-0 left-0 p-[18px] md:p-[16px] z-20">
          {navBtn}
        </div>
        <Navigation toggleNav={toggleNav} />
      </motion.div>
    </motion.nav>
  );
}
