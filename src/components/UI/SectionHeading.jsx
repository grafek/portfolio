import { useContext } from "react";
import { ThemeContext } from "../../contexts/Theme";
import { SectionDivider } from ".";
import { motion } from "framer-motion";

export default function SectionHeading({ children }) {
  const themeCtx = useContext(ThemeContext);
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -10 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.35,
        delay: 0.3,
      }}
      className={"relative md:pt-[34px] pb-4 pt-14 flex ml-5"}
    >
      <h3
        className={`${themeCtx.themeClasses.text} tracking-widest font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] flex items-center`}
      >
        <SectionDivider />
        {children}
      </h3>
    </motion.div>
  );
}
