import { useContext } from "react";
import { ThemeContext } from "../../../contexts/Theme";
import { TIMELINE_DATA } from "../../../constants";
import TimelineItem from "./TimelineItem";
import { motion } from "framer-motion";
import { Slider } from "../../UI";

const timelineSliderVariants = {
  sliderHidden: { opacity: 0, scale: 0.5 },
  sliderShown: {
    opacity: 1,
    scale: 1,
    x: [0, -60, 30, 0],
    transition: {
      delay: 2.5,
      duration: 1,
      type: "spring",
      stiffnes: 300,
    },
  },
};

export default function Timeline() {
  const themeCtx = useContext(ThemeContext);

  let timelineContet = TIMELINE_DATA.map((item, index) => (
    <TimelineItem key={index} year={item.year} text={item.text} />
  ));

  return (
    <Slider
      innerSliderClasses="gap-8 w-11/12 mx-auto"
      sliderVariants={timelineSliderVariants}
    >
      <motion.ul
        className={`${themeCtx.themeClasses.subText} flex gap-10 lg:w-full text-sm md:text-base lg:justify-between`}
      >
        {timelineContet}
      </motion.ul>
    </Slider>
  );
}
