import { Line } from "../../../UI";
import { motion } from "framer-motion";

const timelineItemVariants = {
  timelineHidden: { opacity: 0, y: -40 },
  timelineShown: {
    opacity: 1,
    y: 0,
  },
};

export default function TimelineItem({ year, text }) {
  return (
    <motion.li variants={timelineItemVariants} className="flex my-4 lg:my-0 flex-shrink-0">
      <div className="w-full">
        <h2 className="font-semibold text-xl">
          {year}
          <Line />
        </h2>
        <p>{text}</p>
      </div>
    </motion.li>
  );
}
