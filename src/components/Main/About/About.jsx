import Image from "next/image";
import { useContext } from "react";
import { ThemeContext } from "../../../contexts/Theme";
import Timeline from "./Timeline/Timeline";
import { motion } from "framer-motion";
import { getImgUrl } from "../../../lib/sanityConfig";
import SectionWrap from "../../../hoc/SectionWrap";

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

const About = ({ timelineInfo, pageInfo }) => {
  const themeCtx = useContext(ThemeContext);

  const { aboutInfo, aboutImage } = pageInfo;

  return (
    <motion.div
      variants={aboutVariants}
      initial={"aboutHidden"}
      whileInView={"aboutShown"}
      viewport={{ once: true }}
      className="flex flex-col h-full justify-center gap-6 sm:gap-14 select-none"
    >
      <motion.div
        variants={aboutItemVariants}
        className="w-11/12 mx-auto flex flex-col md:flex-row gap-8 md:gap-8 items-center min-h-fit"
      >
        <div className="relative w-full md:w-full h-[15vh] md:h-[13vh] lg:h-[25vh] xl:h-[40vh]">
          <div className="h-full w-1/3 max-w-[112px] md:max-w-none md:w-full bg-gray-600 opacity-10 z-20 rounded-full relative flex m-auto justify-center"></div>
          <Image
            src={getImgUrl(aboutImage).url()}
            layout="fill"
            className="relative object-contain"
            alt="me"
          />
        </div>
        <p
          className={`${themeCtx.themeClasses.subText} text-sm md:text-base text-justify`}
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

export default SectionWrap(About, "about", "About");
