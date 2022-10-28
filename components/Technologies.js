import Card from "../components/UI/Card";
import Pill from "./UI/Pill";
import SectionHeading from "./UI/SectionHeading";

const frontEndSkills = [
  "HTML5",
  "CSS3 Grid and flex",
  "Basic Design Patterns",
  "Mobile First",
  "ES6",
  "React",
  "TailwindCSS",
  "React Context API",
];

const backEndSkills = ["Next.js", "NextAuth.js", "tRPC", "Prisma"];

const otherSkills = ["Troubleshooting", "Problem solving"];

const frontEndSkillsContent = frontEndSkills.map((skill, i) => (
  <Pill key={i}>{skill}</Pill>
));
const backEndSkillsContent = backEndSkills.map((skill, i) => (
  <Pill key={i}>{skill}</Pill>
));

const otherSkillsContent = otherSkills.map((skill, i) => (
  <Pill key={i}>{skill}</Pill>
));

const Technologies = () => {
  return (
    <section>
      <SectionHeading>Current Stack</SectionHeading>
      <div className="flex flex-col md:flex-row gap-10 align-center mx-auto">
        <Card title={"Front-end"}>{frontEndSkillsContent}</Card>
        <Card title={"Back-end"}>{backEndSkillsContent}</Card>
        <Card title={"Other"}>{otherSkillsContent}</Card>
      </div>
    </section>
  );
};

export default Technologies;
