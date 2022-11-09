import Image from "next/image";
import { motion } from "framer-motion";

const Skill = ({ name, img, progress }) => {
  const itemVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
    },
  };
  return (
    <motion.div
      variants={itemVariants}
      className="group relative flex cursor-pointer"
    >
      <div className="rounded-full w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out">
        <Image
          alt={name}
          objectFit="cover"
          layout="fill"
          src={img}
          className="rounded-full"
        />
      </div>
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
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
