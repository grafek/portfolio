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
      transition={{
        duration: 0.35,
        delay: 0.3,
      }}
      className={"relative top-8 flex justify-center"}
    >
      <h3
        className={`${themeCtx.themeClasses.text} text-4xl lg:text-5xl font-semibold tracking-widest`}
      >
        <SectionDivider />
        {children}
      </h3>
    </motion.div>
  );
}
