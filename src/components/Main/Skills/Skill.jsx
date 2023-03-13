import { motion } from "framer-motion";
import BallCanvas from "../../Canvas/Ball";

const skillItemVariants = {
  hidden: { opacity: 0, y: -20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const Skill = ({ name, img }) => {
  return (
    <motion.div
      variants={skillItemVariants}
      title={name}
      className="group relative flex cursor-pointer w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 xl:w-36 xl:h-36 items-center"
    >
      <BallCanvas icon={img} />
    </motion.div>
  );
};

export default Skill;
