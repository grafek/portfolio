import { useContext } from "react";
import { ThemeContext } from "../../../contexts/Theme";
import { TIMELINE_DATA } from "../../../constants";
import TimelineItem from "./TimelineItem";
import { motion } from "framer-motion";

const timelineVariants = {
  timelineHidden: { opacity: 0 },
  timelineShown: {
    opacity: 1,
    transition: {
      staggerChildren: 0.7,
      delayChildren: 2.5,
    },
  },
};

export default function Timeline() {
  const themeCtx = useContext(ThemeContext);

  let timelineContet = TIMELINE_DATA.map((item, index) => (
    <TimelineItem key={index} year={item.year} text={item.text} />
  ));

  return (
    <div className="flex justify-center w-11/12 py-3 mx-auto">
      <motion.ul
        variants={timelineVariants}
        initial={"timelineHidden"}
        whileInView={"timelineShown"}
        className={`${themeCtx.themeClasses.subText} lg:flex lg:w-full text-sm md:text-base lg:justify-between`}
      >
        {timelineContet}
      </motion.ul>
    </div>
  );
}
