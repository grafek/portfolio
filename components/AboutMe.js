import Image from "next/image";
import React, { useContext } from "react";
import { ThemeContext } from "../store/ThemeContext";
import Timeline from "./Timeline";
import SectionHeading from "./UI/SectionHeading";

const AboutMe = () => {
  const themeCtx = useContext(ThemeContext);
  return (
    <section id={`about`}>
      <SectionHeading>About me</SectionHeading>
      <div className="w-11/12 mx-auto flex flex-col md:flex-row md:gap-10 items-center">
        <div className="relative min-h-fit overflow-hidden min-w-fit mb-4 rounded-full">
          <div className="absolute h-full w-full bg-gradient-to-bl from-gray-700 to-gray-900 opacity-50 z-10"></div>
          <Image
            src={"/ja_ca.jpg"}
            width="100%"
            height="100%"
            objectFit="contain"
            alt="me"
          />
        </div>
        <p className={`${themeCtx.themeClasses.subText} text-justify`}>
          I am a graduate of ICT & Electronic school with IT technician degree.
          Currently I am working as a L2 Remote Specialist at Hemmersbach. After
          hours I am working on my &nbsp;
          <a
            href="#projects"
            className="border-b italic font-semibold border-indigo-500"
          >
            projects
          </a>
          &nbsp; and learning about web apps and its development. I know how to
          efficiently find information, I am fluent in english and communication
          is not a problem for me. I am looking for an opportunity to broaden my
          knowledge in the web industry and to work in a team.
        </p>
      </div>
      <Timeline />
    </section>
  );
};

export default AboutMe;
