import { motion } from 'framer-motion';
import { getImgUrl } from '../../lib/sanityConfig';
import SectionWrap from '../../hoc/SectionWrap';
import BallCanvas from '../Canvas/Ball';
import { Skill } from '../../../types';
import { generateSubarrays } from '../../utils/helper';
import { skillItemVariants, skillsVariants } from '../../utils/framer';

type SkillsProps = {
  skills: Skill[];
};

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const skillsSubarrays = generateSubarrays(skills, 4);

  return (
    <div className="relative flex flex-col items-center justify-center text-center md:text-left xl:flex-row xl:space-y-0">
      <motion.div
        variants={skillsVariants}
        initial={'hidden'}
        viewport={{ once: true }}
        whileInView={'show'}
        className="relative flex w-full flex-wrap items-center justify-around gap-4 "
      >
        {skillsSubarrays.map((subArray, arrIdx) => (
          <motion.div
            key={arrIdx}
            variants={skillItemVariants}
            className="h-32 w-32 cursor-pointer sm:h-36 sm:w-36 md:h-48 md:w-48 xl:h-56 xl:w-56"
          >
            <BallCanvas
              imgUrls={subArray.map((skill) =>
                getImgUrl(skill.skillImage).url()
              )}
              autoRotateSpeed={Math.random() + 1 * 0.4}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default SectionWrap(Skills, 'skills', 'Skills', '');
