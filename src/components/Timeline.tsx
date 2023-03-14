import { useContext } from 'react';
import { ThemeContext } from '../contexts/Theme';
import { motion } from 'framer-motion';
import { Slider } from './UI';
import { Underline } from './UI';
import { type Timeline } from '../../types';

type TimelineProps = {
  timelineInfo: Timeline[];
};

const Timeline: React.FC<TimelineProps> = ({ timelineInfo }) => {
  const themeCtx = useContext(ThemeContext);

  return (
    <Slider
      innerSliderClasses="gap-8 w-11/12 mx-auto "
      outerSliderClasses="overflow-hidden"
    >
      <motion.ul
        className={`${themeCtx.themeClasses.subText} flex w-full gap-6 text-sm md:gap-14 md:text-base lg:justify-between`}
      >
        {timelineInfo.map((item) => (
          <TimelineItem
            text={item.timelineText}
            year={item.year}
            key={item._id}
          />
        ))}
      </motion.ul>
    </Slider>
  );
};

export default Timeline;

const timelineItemVariants = {
  timelineHidden: { opacity: 0, y: -40 },
  timelineShown: {
    opacity: 1,
    y: 0,
  },
};

type TimelineItemProps = {
  year: number;
  text: string;
};

const TimelineItem: React.FC<TimelineItemProps> = ({ year, text }) => {
  return (
    <motion.li
      variants={timelineItemVariants}
      className="my-4 flex max-w-[260px] flex-shrink-0 md:max-w-[400px] lg:my-0"
    >
      <div className="w-full">
        <h2 className="text-xl font-semibold">
          {year}
          <Underline />
        </h2>
        <p>{text}</p>
      </div>
    </motion.li>
  );
};
