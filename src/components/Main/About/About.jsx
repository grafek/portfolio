import Image from "next/image";
import React, { useContext } from "react";
import { ThemeContext } from "../../../contexts/Theme";
import { Timeline } from "../index";
import { SectionHeading } from "../../UI";

const About = () => {
  const themeCtx = useContext(ThemeContext);
  return (
    <section id={`about`} className={"snap-start h-fit min-h-screen"}>
      <SectionHeading>About</SectionHeading>
      <div className="h-[80vh] flex flex-col justify-around">
        <div className="w-11/12 mx-auto flex flex-col md:flex-row gap-8 items-center min-h-fit">
          <div className="relative filter w-24 h-24 sm:w-40 sm:h-40 md:w-[250vw] md:h-[35vh] lg:h-[50vh]  xl:w-[100vw]">
            <Image
              src={"/assets/ja_caa.png"}
              layout="fill"
              objectFit="contain"
              className="relative"
              alt="me"
            />
          </div>
          <p
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
          </p>
        </div>
        <Timeline />
      </div>
    </section>
  );
};

export default About;
