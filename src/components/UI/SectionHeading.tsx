import { useContext } from 'react';
import { ThemeContext } from '../../contexts/Theme';
import { SectionDivider } from '.';
import { motion } from 'framer-motion';

type SectionHeadingProps = { children: React.ReactNode };

const SectionHeading: React.FC<SectionHeadingProps> = ({ children }) => {
  const themeCtx = useContext(ThemeContext);
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -10 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.35,
        delay: 0.3,
      }}
      className={'relative ml-5 flex pb-4 pt-14 md:pt-[34px]'}
    >
      <h3
        className={`${themeCtx.themeClasses.text} xs:text-[40px] flex items-center text-[30px] font-black tracking-widest sm:text-[50px] md:text-[60px]`}
      >
        <SectionDivider />
        {children}
      </h3>
    </motion.div>
  );
};

export default SectionHeading;
