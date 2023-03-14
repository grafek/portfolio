import Image from 'next/image';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/Theme';
import Timeline from '../Timeline';
import { motion } from 'framer-motion';
import { getImgUrl } from '../../lib/sanityConfig';
import SectionWrap from '../../hoc/SectionWrap';
import { PageInfo, Timeline as TimelineType } from '../../../types';

const aboutVariants = {
  aboutHidden: { opacity: 0 },
  aboutShown: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      delayChildren: 1,
    },
  },
};

const aboutItemVariants = {
  aboutHidden: { opacity: 0, x: 100, scale: 0.4 },
  aboutShown: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 1,
    },
  },
};

type AboutProps = {
  timelineInfo: TimelineType[];
  pageInfo: PageInfo;
};

const About: React.FC<AboutProps> = ({ timelineInfo, pageInfo }) => {
  const themeCtx = useContext(ThemeContext);

  const { aboutInfo, aboutImage } = pageInfo;

  return (
    <motion.div
      variants={aboutVariants}
      initial={'aboutHidden'}
      whileInView={'aboutShown'}
      viewport={{ once: true }}
      className="flex select-none flex-col gap-6 sm:gap-14"
    >
      <motion.div
        variants={aboutItemVariants}
        className="mx-auto flex w-11/12 flex-col items-center gap-8 md:flex-row md:gap-8 "
      >
        <div className="relative h-[15vh] w-full md:h-[13vh] md:w-full lg:h-[25vh] xl:h-[40vh]">
          <Image
            src={getImgUrl(aboutImage).url()}
            layout="fill"
            className="relative object-contain"
            alt="me"
          />
        </div>
        <p
          className={`${themeCtx.themeClasses.subText} text-justify text-sm md:text-base`}
        >
          {aboutInfo}
        </p>
      </motion.div>
      <motion.div variants={aboutItemVariants}>
        <Timeline timelineInfo={timelineInfo} />
      </motion.div>
    </motion.div>
  );
};

export default SectionWrap(About, 'about', 'About', '');
