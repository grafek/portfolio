import Card from "../components/UI/Card";
import Pill from "./UI/Pill";
import SectionHeading from "./UI/SectionHeading";
import { DiNodejs, DiReact } from "react-icons/di";
import { SiPrisma } from "react-icons/si";
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";

function listSkillsContent(skillsArr) {
  const skillsContent = skillsArr.map((skill, i) => (
    <Pill key={i}>{skill}</Pill>
  ));

  return skillsContent;
}

const frontEndSkills = [
  "HTML5",
  "CSS3 Grid and flex",
  "Basic Design Patterns",
  "TailwindCSS",
  "Mobile First",
  "ES6",
  "React",
  "React Context API",
  "TypeScript",
];

const backEndSkills = ["Next.js", "NextAuth.js", "tRPC"];

const databaseSkills = ["Prisma"];

const otherSkills = [
  "Troubleshooting",
  "Problem solving",
  "Git",
  "Github",
  "Vercel",
];

const iconsInlineClasses = "inline text-3xl mr-3";

const Technologies = () => {
  return (
    <section id={"stack"}>
      <SectionHeading>Current Stack</SectionHeading>
      <div className="mx-auto grid lg:grid-cols-2 gap-10">
        <Card
          icon={<DiReact className={iconsInlineClasses} />}
          title={"Front-end"}
        >
          {listSkillsContent(frontEndSkills)}
        </Card>
        <Card
          title={"Back-end"}
          icon={<DiNodejs className={iconsInlineClasses} />}
        >
          {listSkillsContent(backEndSkills)}
        </Card>
        <Card
          title={"Databases"}
          icon={<SiPrisma className={iconsInlineClasses} />}
        >
          {listSkillsContent(databaseSkills)}
        </Card>
        <Card
          title={"Other"}
          icon={
            <HiOutlineDotsCircleHorizontal className={iconsInlineClasses} />
          }
        >
          {listSkillsContent(otherSkills)}
        </Card>
      </div>
    </section>
  );
};

export default Technologies;
