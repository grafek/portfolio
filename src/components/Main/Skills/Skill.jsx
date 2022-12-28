import Image from "next/image";
import { motion } from "framer-motion";

const skillItemVariants = {
  hidden: { opacity: 0, y: -20, scale: 0.6 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

const Skill = ({ name, img, progress }) => {
  return (
    <motion.div
      variants={skillItemVariants}
      className="group relative flex cursor-pointer select-none"
    >
      <div className="rounded-full relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out">
        <Image
          alt={name}
          title={name}
          objectFit="cover"
          layout="fill"
          src={img}
          className="rounded-full"
        />
      </div>
      <div className="select-none absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-gray-300 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">
            {progress}%
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Skill;
