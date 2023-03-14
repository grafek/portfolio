import { motion } from 'framer-motion';
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
      className="mr-3 inline-flex flex-col items-center justify-center"
    >
      <div className="h-5 w-5 rounded-full bg-violet-500" />
      <div className="inline-block h-10 w-1 bg-gradient-to-b from-violet-400 to-transparent" />
    </motion.div>
  );
};

export default SectionDivider;
