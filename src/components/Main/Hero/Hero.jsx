import { useContext } from "react";
import { ThemeContext } from "../../../contexts/Theme";
import { motion } from "framer-motion";
import SectionWrap from "../../../hoc/SectionWrap";

function Hero({ heroInfo }) {
  const themeCtx = useContext(ThemeContext);

  const { firstName, role } = heroInfo;

  const heroHeadingColor =
    themeCtx.darkTheme === "dark"
      ? "bg-gradient-to-r from-indigo-400 to-violet-700"
      : "bg-gradient-to-r from-violet-700 to-indigo-500";

  return (
    <div className="flex flex-col">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.3 }}
      >
        <h1
          className={`${heroHeadingColor} bg-clip-text text-transparent text-5xl sm:text-[6rem] md:text-[7rem] lg:text-[8rem] xl:text-[10rem] font-bold`}
        >
          Hi, I&apos;m {firstName}
        </h1>
        <h2
          className={`${themeCtx.themeClasses.text} italic py-5 md:py-8 text-2xl`}
        >
          {role}
        </h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{ duration: 0.3, delay: 2.5 }}
        className="flex flex-col md:flex-row md:max-w-md md:mx-auto gap-8"
      >
        <a
          className={`${themeCtx.themeClasses.btnFilled} w-1/2 md:w-3/4 mx-auto font-semibold`}
          href={"#projects"}
        >
          Projects
        </a>
        <a
          className={`${themeCtx.themeClasses.btnTrans} w-1/2  md:w-3/4 mx-auto  font-semibold`}
          href={`#contact`}
        >
          Contact
        </a>
      </motion.div>
    </div>
  );
}

export default SectionWrap(
  Hero,
  "hero",
  undefined,
  "flex z-20 flex-col 2xl:px-0 justify-center items-center md:flex-row text-center"
);
