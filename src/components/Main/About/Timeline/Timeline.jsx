import { useContext } from "react";
import { ThemeContext } from "../../../../contexts/Theme";
import TimelineItem from "./TimelineItem";
import { motion } from "framer-motion";
import { Slider } from "../../../UI";

export default function Timeline({ timelineInfo }) {
  const themeCtx = useContext(ThemeContext);

  const timelineContet = timelineInfo.map((item, index) => (
    <TimelineItem key={index} year={item.year} text={item.timelineText} />
  ));

  return (
    <Slider
      innerSliderClasses="gap-8 w-11/12 mx-auto "
      outerSliderClasses="overflow-hidden"
    >
      <motion.ul
        className={`${themeCtx.themeClasses.subText} flex gap-14 w-full text-sm md:text-base justify-between`}
      >
        {timelineContet}
      </motion.ul>
    </Slider>
  );
}
