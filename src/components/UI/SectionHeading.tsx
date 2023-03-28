import { motion } from 'framer-motion';
import { sectionHeadingVariants } from '../../utils/framer';

type SectionHeadingProps = { children: React.ReactNode };

const SectionHeading: React.FC<SectionHeadingProps> = ({ children }) => {
  return (
    <motion.div
      whileInView="show"
      initial="hidden"
      variants={sectionHeadingVariants}
      viewport={{ once: true }}
      className={'relative ml-5 mt-14 flex pb-4 md:mt-[34px]'}
    >
      <div className="mr-3 inline-flex flex-col items-center justify-center">
        <div className="h-5 w-5 rounded-full bg-violet-500" />
        <div className="inline-block h-10 w-1 bg-gradient-to-b from-violet-400 to-transparent" />
      </div>
      <h3
        className={`xs:text-[40px] flex items-center text-[30px] font-black tracking-widest text-slate-900 dark:text-gray-50 sm:text-[50px] md:text-[60px]`}
      >
        {children}
      </h3>
    </motion.div>
  );
};

export default SectionHeading;
