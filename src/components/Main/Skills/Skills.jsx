import { SectionHeading } from "../../UI";
import Skill from "./Skill";
import { motion } from "framer-motion";
import { getImgUrl } from "../../../lib/sanityConfig";

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

const Skills = ({ skills }) => {
  return (
    <section id={"skills"} className="snap-center h-screen">
      <SectionHeading>Skills</SectionHeading>
      <div className=" w-11/12 flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 h-[90%] justify-center xl:space-y-0 mx-auto items-center">
        <motion.div
          variants={skillsVariants}
          initial={"hidden"}
          whileInView={"show"}
          className="grid grid-cols-3 gap-4 sm:gap-8  md:gap-16 relative"
        >
          {skills.map((skill) => (
            <Skill
              key={skill._id}
              name={skill.title}
              progress={skill.progress}
              img={getImgUrl(skill.skillImage).url()}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
