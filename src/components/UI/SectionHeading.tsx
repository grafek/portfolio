import { motion } from "framer-motion";
import { sectionHeadingVariants } from "../../utils/framer";

type SectionHeadingProps = { children: React.ReactNode };

const SectionHeading: React.FC<SectionHeadingProps> = ({ children }) => {
  return (
    <motion.div
      whileInView="show"
      initial="hidden"
      variants={sectionHeadingVariants}
      viewport={{ once: true }}
      className={"my-4 flex py-2 md:my-8"}
    >
      <div className="mr-3 inline-flex flex-col items-center justify-center">
        <div className="h-5 w-5 rounded-full bg-violet-500" />
        <div className="inline-block h-10 w-1 bg-gradient-to-b from-violet-400 to-transparent" />
      </div>
      <h3
        className={`flex items-center text-2xl font-black tracking-widest text-slate-900 dark:text-gray-50 md:text-4xl`}
      >
        {children}
      </h3>
    </motion.div>
  );
};

export default SectionHeading;
