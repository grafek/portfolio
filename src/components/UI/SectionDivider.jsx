import { motion } from "framer-motion";
const SectionDivider = () => {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -10 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.35,
        delay: 0.3,
      }}
      className="mr-4 w-[3px] h-3/4 inline-block bg-gradient-to-l from-cyan-500 to-indigo-800"
    ></motion.div>
  );
};

export default SectionDivider;
