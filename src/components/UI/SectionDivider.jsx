import { motion } from "framer-motion";
const SectionDivider = () => {
  return (
    <motion.div
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -30 }}
      transition={{
        duration: 0.35,
        delay: 1,
      }}
      className="mx-auto w-10 lg:w-16 h-[2px] bg-gradient-to-l from-cyan-500 to-indigo-800 mb-2"
    ></motion.div>
  );
};

export default SectionDivider;
