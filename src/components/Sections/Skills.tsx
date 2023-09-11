import { motion as m } from "framer-motion";
import { getImgUrl } from "../../lib/sanityConfig";
import SectionWrap from "../../hoc/SectionWrap";
import BallCanvas from "../Canvas/Ball";
import { Skill } from "../../../types";
import { generateSubarrays } from "../../utils/helpers";
import { skillItemVariants, skillsVariants } from "../../utils/framer";

type SkillsProps = {
  skills: Skill[];
};

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const skillsSubarrays = generateSubarrays(skills, 4);

  return (
    <m.div
      variants={skillsVariants}
      initial={"initial"}
      viewport={{ once: true }}
      whileInView={"animate"}
      className="relative grid w-full grid-cols-2 gap-8"
    >
      {skillsSubarrays.map((subArray, arrIdx) => (
        <m.div
          key={arrIdx}
          variants={skillItemVariants}
          className="mx-auto h-32 w-32 cursor-pointer lg:h-44 lg:w-44"
        >
          <BallCanvas
            imgUrls={subArray.map((skill) => getImgUrl(skill.skillImage).url())}
            autoRotateSpeed={Math.random() + 1 * 0.4}
          />
        </m.div>
      ))}
    </m.div>
  );
};

export default SectionWrap(Skills, "skills", "Skills", "");
