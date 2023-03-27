import { useContext } from 'react';
import { ThemeContext } from '../../contexts/Theme';
import { motion } from 'framer-motion';
import SectionWrap from '../../hoc/SectionWrap';
import { heroItemVariants, heroVariants } from '../../utils/framer';

type HeroProps = {
  firstName: string;
  role: string;
};

const Hero: React.FC<HeroProps> = ({ firstName, role }) => {
  const themeCtx = useContext(ThemeContext);

  const heroHeadingColor =
    themeCtx.darkTheme === 'dark'
      ? 'bg-gradient-to-r from-sky-500 to-fuchsia-700'
      : 'bg-gradient-to-r from-sky-600 to-fuchsia-800';

  return (
    <motion.div
      variants={heroVariants}
      initial="heroHidden"
      animate="heroShown"
      className="flex flex-col"
    >
      <motion.div variants={heroItemVariants}>
        <h1
          className={`${heroHeadingColor} bg-clip-text text-[5rem] font-bold text-transparent md:text-[7rem] lg:text-[8rem] xl:text-[12rem]`}
        >
          {`Hi, I'm ${firstName}`}
        </h1>

        <h2
          className={`${themeCtx.themeClasses.text} pt-4 pb-8 text-2xl font-semibold md:py-8 `}
        >
          {role}
        </h2>
      </motion.div>
      <motion.div
        variants={heroItemVariants}
        initial={{ x: '100vw', opacity: 0 }}
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
    </motion.div>
  );
};

export default SectionWrap(
  Hero,
  'hero',
  undefined,
  'flex z-20 flex-col 2xl:px-0 justify-center text-center'
);
