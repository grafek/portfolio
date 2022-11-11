import Image from "next/image";
import React, { useContext } from "react";
import { ThemeContext } from "../../../contexts/Theme";
import { Timeline } from "../index";
import { SectionHeading } from "../../UI";
import { motion } from "framer-motion";

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
  aboutHidden: { opacity: 0, x: -50, scale: 0.4 },
  aboutShown: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 1,
    },
  },
};

const About = () => {
  const themeCtx = useContext(ThemeContext);
  return (
    <section id={`about`} className={"snap-start h-fit min-h-screen"}>
      <SectionHeading>About</SectionHeading>
      <div className="flex flex-col h-[calc(100vh-3.5rem)] justify-around">
        <motion.div
          variants={aboutVariants}
          initial={"aboutHidden"}
          whileInView={"aboutShown"}
          className="w-11/12 mx-auto flex flex-col md:flex-row gap-2 md:gap-8 items-center min-h-fit"
        >
          <motion.div
            variants={aboutItemVariants}
            className="relative w-1/2 md:w-full h-[20vh] md:h-[35vh] lg:h-[45vh] max-h-[50%] xl:max-h-full"
          >
            <div className="h-full w-1/2 md:w-full bg-gray-600 opacity-10 z-20 rounded-full relative flex m-auto justify-center"></div>
            <Image
              src={"/assets/ja_caa.png"}
              layout="fill"
              objectFit=""
              className="relative object-contain md:object-cover"
              alt="me"
            />
          </motion.div>
          <motion.p
            variants={aboutItemVariants}
            className={`${themeCtx.themeClasses.subText} text-sm md:text-base text-justify`}
          >
            I am a graduate of ICT & Electronic school with IT technician
            degree. Currently I am working as a L2 Remote Specialist at
            Hemmersbach. After hours I am working on my &nbsp;
            <a
              href="#projects"
              className="border-b italic font-semibold border-indigo-500"
            >
              projects
            </a>
            &nbsp; and learning about web apps and its development. I know how
            to efficiently find information, I am fluent in english and
            communication is not a problem for me. I am looking for an
            opportunity to broaden my knowledge in the web industry and to work
            in a team.
          </motion.p>
        </motion.div>
        <Timeline />
      </div>
    </section>
  );
};

export default About;
