import Card from "../components/UI/Card";
import Pill from "./UI/Pill";
import SectionHeading from "./UI/SectionHeading";

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

const Technologies = () => {
  return (
    <section id={'stack'}>
      <SectionHeading>Current Stack</SectionHeading>
      <div className="mx-auto grid lg:grid-cols-2 gap-10">
        <Card className={'shadow-[#0000003d]'} title={"Front-end"}>{listSkillsContent(frontEndSkills)}</Card>
        <Card className={'shadow-[#0000003d]'} title={"Back-end"}>{listSkillsContent(backEndSkills)}</Card>
        <Card className={'shadow-[#0000003d]'} title={"Databases"}>{listSkillsContent(databaseSkills)}</Card>
        <Card className={'shadow-[#0000003d]'} title={"Other"}>{listSkillsContent(otherSkills)}</Card>
      </div>
    </section>
  );
};

export default Technologies;
