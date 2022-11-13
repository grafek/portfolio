import { useContext } from "react";
import { ThemeContext } from "../../../../contexts/Theme";
import { TIMELINE_DATA } from "../../../../constants";
import TimelineItem from "./TimelineItem";
import { motion } from "framer-motion";
import { Slider } from "../../../UI";

export default function Timeline() {
  const themeCtx = useContext(ThemeContext);

  let timelineContet = TIMELINE_DATA.map((item, index) => (
    <TimelineItem key={index} year={item.year} text={item.text} />
  ));

  return (
    <Slider
      innerSliderClasses="gap-8 w-11/12 mx-auto "
      outerSliderClasses="overflow-hidden"
    >
      <motion.ul
        className={`${themeCtx.themeClasses.subText} flex gap-10 w-full text-sm md:text-base`}
      >
        {timelineContet}
      </motion.ul>
    </Slider>
  );
}
