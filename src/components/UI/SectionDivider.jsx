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
      className="inline-flex flex-col justify-center items-center mr-2"
    >
      <div className="w-5 h-5 rounded-full bg-violet-500" />
      <div className="w-1 h-10 inline-block bg-gradient-to-b from-violet-400 to-transparent" />
    </motion.div>
  );
};

export default SectionDivider;
