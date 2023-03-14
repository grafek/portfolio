import { useContext } from 'react';
import { ThemeContext } from '../../contexts/Theme';
import { motion } from 'framer-motion';
import SectionWrap from '../../hoc/SectionWrap';

type HeroProps = {
  firstName: string;
  role: string;
};

const Hero: React.FC<HeroProps> = ({ firstName, role }) => {
  const themeCtx = useContext(ThemeContext);

  const heroHeadingColor =
    themeCtx.darkTheme === 'dark'
      ? 'bg-gradient-to-r from-indigo-400 to-violet-700'
      : 'bg-gradient-to-r from-violet-700 to-indigo-500';

  return (
    <div className="flex flex-col">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 1 }}
      >
        <h1
          className={`${heroHeadingColor} bg-clip-text text-5xl font-bold text-transparent sm:text-[6rem] md:text-[7rem] lg:text-[8rem] xl:text-[10rem]`}
        >
          Hi, I&apos;m {firstName}
        </h1>
        <h2
          className={`${themeCtx.themeClasses.text} py-5 text-2xl italic md:py-8`}
        >
          {role}
        </h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{ duration: 2, delay: 1.7 }}
        className="flex flex-col gap-8 md:mx-auto md:max-w-md md:flex-row"
      >
        <a
          className={`${themeCtx.themeClasses.btnFilled} mx-auto w-1/2 font-semibold md:w-3/4`}
          href={'#projects'}
        >
          Projects
        </a>
        <a
          className={`${themeCtx.themeClasses.btnTrans} mx-auto  w-1/2 font-semibold  md:w-3/4`}
          href={`#contact`}
        >
          Contact
        </a>
      </motion.div>
    </div>
  );
};

export default SectionWrap(
  Hero,
  'hero',
  undefined,
  'flex z-20 flex-col 2xl:px-0 justify-center items-center md:flex-row text-center'
);
