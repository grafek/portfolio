import Image from "next/image";
import { useContext } from "react";
import { ThemeContext } from "../../store/ThemeContext";
import Contact from "../UI/Contact";

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

export default function ResumeLeft() {
  const themeCtx = useContext(ThemeContext);

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
    <div className="shadow-lg rounded-md flex flex-col  md:w-1/2 lg:w-1/2 xl:w-1/3 p-4">
      <div className="relative h-28 w-28 my-4 overflow-hidden rounded-full mx-auto">
        <div className="h-full w-full bg-gradient-to-t from-gray-900 to-gray-700 opacity-60 relative z-10"></div>{" "}
        <Image src={"/ja_ca.jpg"} layout="fill" objectFit="contain" alt="me" />
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
        <Contact iconsSize={"text-2xl"} />
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
          I am a graduate of ICT & Electronic school with IT technician degree.
          Currently I am working as a L2 Remote Specialist at Hemmersbach. After
          hours I am working on my &nbsp;
          <a
            href="#projects"
            className="border-b italic font-semibold border-indigo-500"
          >
            projects
          </a>
          &nbsp; and constantly learning about web development. I know how to
          efficiently find information and I am fluent in english. I am looking
          for an opportunity to broaden my knowledge in the web industry and to
          get involved in real projects.
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
  );
}
