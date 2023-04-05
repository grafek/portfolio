import { motion as m } from 'framer-motion';
import { getImgUrl } from '../../lib/sanityConfig';
import SectionWrap from '../../hoc/SectionWrap';
import BallCanvas from '../Canvas/Ball';
import { Skill } from '../../../types';
import { generateSubarrays } from '../../utils/helpers';
import { skillItemVariants, skillsVariants } from '../../utils/framer';

type SkillsProps = {
  skills: Skill[];
};

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const skillsSubarrays = generateSubarrays(skills, 4);

  return (
    <div className="relative flex flex-col items-center justify-center text-center md:text-left xl:flex-row xl:space-y-0">
      <m.div
        variants={skillsVariants}
        initial={'initial'}
        viewport={{ once: true }}
        whileInView={'animate'}
        className="relative flex w-full flex-wrap items-center justify-around gap-4 "
      >
        {skillsSubarrays.map((subArray, arrIdx) => (
          <m.div
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
          </m.div>
        ))}
      </m.div>
    </div>
  );
};

export default SectionWrap(Skills, 'skills', 'Skills', '');
