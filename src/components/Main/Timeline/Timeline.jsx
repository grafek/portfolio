import { useContext } from "react";
import { ThemeContext } from "../../../contexts/Theme";
import { TIMELINE_DATA } from "../../../constants";
import TimelineItem from "./TimelineItem";

const Timeline = () => {
  const themeCtx = useContext(ThemeContext);

  let timelineContet = TIMELINE_DATA.map((item, index) => (
    <TimelineItem key={index} year={item.year} text={item.text} />
  ));

  return (
    <div className="flex justify-center w-11/12 py-14 mx-auto">
      <ul
        className={`${themeCtx.themeClasses.subText} lg:flex lg:w-full  lg:justify-between`}
      >
        {timelineContet}
      </ul>
    </div>
  );
};

export default Timeline;
