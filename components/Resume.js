import Image from "next/image";
import { ThemeContext } from "../store/ThemeContext";
import { useContext } from "react";
import SocialLinks from "./UI/SocialLinks";

export default function Resume() {
  const themeCtx = useContext(ThemeContext);

  const mySkills = [
    "HTML5",
    "CSS3 Grid and flex",
    "Basic Design Patterns",
    "Mobile First",
    "JavaScript",
    "Typescript",
    "React",
    "React Context API",
    "Next.js",
    "Communication",
    "Teamwork",
    "Determination",
  ];

  let skillsContent = mySkills.map((skill) => {
    return (
      <span
        key={skill}
        className={`${themeCtx.themeClasses.subText} ${themeCtx.themeClasses.darkBg} mb-2 mr-2 rounded-full px-3 py-1 text-sm font-semibold`}
      >
        {skill}
      </span>
    );
  });

  return (
    <section
      id={`resume`}
      className="h-fit flex my-10 md:mb-14 lg:mb-0 xl:h-screen"
    >
      <div
        className={`${themeCtx.themeClasses.lightDarkBg} h-fit flex gap-8 flex-col md:flex-row p-4 rounded-md m-auto w-11/12`}
      >
        <div className="shadow-lg rounded-md flex flex-col  md:w-1/2 lg:w-1/2 xl:w-1/3 p-4">
          <div className="relative h-28 w-28 my-4 overflow-hidden rounded-full mx-auto">
            <div className="h-full w-full bg-gradient-to-t from-gray-900 to-gray-700 opacity-60 relative z-10"></div>{" "}
            <Image
              src={"/ja_ca.jpg"}
              layout="fill"
              objectFit="contain"
              alt="me"
            />
          </div>
          <div className="flex flex-col justify-center gap-4">
            <h2
              className={`${themeCtx.themeClasses.text} text-center text-3xl lg:text-3xl font-bold`}
            >
              Jacek Grafender
            </h2>
            <span className="mx-auto italic text-center text-indigo-500 font-medium">
              IT Technician & Front-end Developer
            </span>
            <span>
              <SocialLinks iconsSize={"text-2xl"} />
              {/* add mail and call option */}
            </span>
          </div>
          <div className="flex flex-col gap-4 justify-center">
            <div className="mx-auto">
              <h2
                className={`${themeCtx.themeClasses.text} mt-4 text-2xl lg:text-3xl font-semibold border-b border-indigo-500`}
              >
                About
              </h2>
            </div>
            <p className={`${themeCtx.themeClasses.subText} text-justify`}>
              I am a graduate of ICT & Electronic school with IT technician
              degree. Currently I am working as a L2 Remote Specialist at
              Hemmersbach. After hours I am working on my &nbsp;
              <a
                href="#projects"
                className="border-b italic font-semibold border-indigo-500"
              >
                projects
              </a>
              &nbsp; and constantly learning about web development. I know how
              to efficiently find information and I am fluent in english. I am
              looking for an opportunity to broaden my knowledge in the web
              industry and to get involved in real projects.
            </p>
          </div>
          <div className="flex flex-col gap-4 mb-2">
            <div className="mx-auto">
              <h2
                className={`${themeCtx.themeClasses.text} mt-4 text-2xl lg:text-3xl font-semibold border-b border-indigo-500`}
              >
                Skills
              </h2>
            </div>
            <div className="flex flex-wrap">
              {/* Pills for now, will maybe switch to progress bar or sth elese */}
              {skillsContent}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10 md:w-1/2 lg:w-2/3">
          <div className=" flex flex-col shadow-lg rounded-md p-4">
            <div className="mx-auto">
              <h2
                className={`${themeCtx.themeClasses.text} text-2xl lg:text-3xl font-semibold border-b border-indigo-500 my-4`}
              >
                Experience
              </h2>
            </div>
            <div>
              <ul
                className={`${themeCtx.themeClasses.subText} flex flex-col gap-2`}
              >
                <li>19/09/2022 - now L2 Resmote Specialist at Hemmersbach</li>
                <li>
                  07/2020 - 08/2020 & 09/2020-2020 School apprenticeship at
                  Foxysoft - took a part of developing new website for my high
                  school
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col shadow-lg rounded-md p-4">
            <div className="mx-auto">
              <h2
                className={`${themeCtx.themeClasses.text} text-2xl lg:text-3xl font-semibold border-b border-indigo-500 my-4`}
              >
                Education
              </h2>
            </div>
            <div>
              <ul
                className={`${themeCtx.themeClasses.subText} list-disc mx-4 flex flex-col gap-2`}
              >
                <li>
                  09/2017-05/2021 IT Technician degree ICT and Electronic School
                  Complex
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row shadow-lg rounded-md p-4">
            <div className="w-full lg:w-1/2 flex flex-col">
              <div className="mx-auto">
                <h2
                  className={`${themeCtx.themeClasses.text} text-2xl lg:text-3xl font-semibold border-b border-indigo-500 my-4`}
                >
                  Languages
                </h2>
              </div>
              <div>
                <ul
                  className={`${themeCtx.themeClasses.subText} list-disc mx-4 flex flex-col gap-2`}
                >
                  <li>Polish - native</li>
                  <li>
                    English - intermediate (
                    <span className="italic">B2/C1</span>)
                  </li>
                  <li>German - basics</li>
                  <li>
                    Spanish - basics (
                    <span className="italic">currently learning</span>)
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex flex-col">
              <div className="mx-auto">
                <h2
                  className={`${themeCtx.themeClasses.text} text-2xl lg:text-3xl font-semibold border-b border-indigo-500 my-4`}
                >
                  Interests
                </h2>
              </div>
              <div>
                <ul
                  className={`${themeCtx.themeClasses.subText} list-disc mx-4 flex flex-col gap-2`}
                >
                  <li>
                    Sports (
                    <span className="italic">Running and Skateboarding</span>)
                  </li>
                  <li>Learning and self-development</li>
                  <li>DJ-ing</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex justify-center md:justify-end h-full mb-2">
            <a
              href="#"
              className={`${themeCtx.themeClasses.btnFilled} font-semibold mt-auto`}
            >
              Download resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
