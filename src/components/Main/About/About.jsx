import Image from "next/image";
import React, { useContext } from "react";
import { ThemeContext } from "../../../contexts/Theme";
import Timeline from "./Timeline/Timeline";
import { SectionHeading } from "../../UI";
import { motion } from "framer-motion";
import { getImgUrl } from "../../../lib/sanityConfig";

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
    <section id={`about`} className={"snap-start h-screen relative"}>
      <SectionHeading>About</SectionHeading>
      <motion.div
        variants={aboutVariants}
        initial={"aboutHidden"}
        whileInView={"aboutShown"}
        className="flex flex-col h-full justify-center gap-10"
      >
        <motion.div
          variants={aboutItemVariants}
          className="w-11/12 mx-auto flex flex-col md:flex-row gap-6 md:gap-8 items-center min-h-fit"
        >
          <div className="relative w-full sm:w-1/2 md:w-full h-[20vh] md:h-[35vh] lg:h-[45vh] max-h-[50%] xl:max-h-full">
            <div className="h-full w-1/3 sm:w-1/2 md:w-full bg-gray-600 opacity-10 z-20 rounded-full relative flex m-auto justify-center"></div>
            <Image
              src={getImgUrl(aboutImage).url()}
              layout="fill"
              objectFit=""
              className="relative object-contain md:object-cover"
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
    </section>
  );
};

export default About;
