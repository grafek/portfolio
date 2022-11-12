import { SectionHeading } from "../../UI";
import { SKILLS } from "../../../constants";
import Skill from "./Skill";
import { motion } from "framer-motion";

const skillsVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.34,
      delayChildren: 1.2,
    },
  },
};

const Skills = () => {
  return (
    <section id={"skills"} className="snap-center h-screen">
      <SectionHeading>Skills</SectionHeading>
      <div className=" w-11/12 flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 h-[80%] justify-center xl:space-y-0 mx-auto items-center">
        <motion.div
          variants={skillsVariants}
          initial={"hidden"}
          whileInView={"show"}
          className="grid grid-cols-3 gap-4 sm:gap-8  md:gap-16 relative"
        >
          {SKILLS.map((item, i) => (
            <Skill
              key={i}
              img={item.img}
              name={item.name}
              progress={item.progress}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
