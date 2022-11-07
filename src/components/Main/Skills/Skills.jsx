import { SectionHeading } from "../../UI";
import { SKILLS } from "../../../constants";
import Skill from "./Skill";

const Skills = () => {
  return (
    <section id={"skills"} className="snap-center h-screen">
      <SectionHeading>Skills</SectionHeading>
      <div className=" w-11/12 flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 h-[80%] justify-center xl:space-y-0 mx-auto items-center">
        <div className="grid grid-cols-3 gap-4 sm:gap-8  md:gap-16">
          {SKILLS.map((item, i) => (
            <Skill
              key={i}
              img={item.img}
              name={item.name}
              progress={item.progress}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
