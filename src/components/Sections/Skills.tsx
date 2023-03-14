import { motion } from 'framer-motion';
import { getImgUrl } from '../../lib/sanityConfig';
import SectionWrap from '../../hoc/SectionWrap';
import BallCanvas from '../Canvas/Ball';
import { Skill } from '../../../types';

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

const skillItemVariants = {
  hidden: { opacity: 0, y: -20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

type SkillsProps = {
  skills: Skill[];
};

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <div className="relative mx-auto flex max-w-[2000px] flex-col items-center justify-center text-center md:text-left xl:flex-row xl:space-y-0">
      <motion.div
        variants={skillsVariants}
        initial={'hidden'}
        viewport={{ once: true }}
        whileInView={'show'}
        className="relative grid grid-cols-3 gap-4 sm:gap-8 md:grid-cols-4 md:gap-16"
      >
        {skills.map((skill) => (
          <motion.div
            variants={skillItemVariants}
            title={skill.name}
            key={skill._id}
            className="group relative flex h-20 w-20 cursor-pointer select-none items-center sm:h-24 sm:w-24 md:h-28 md:w-28 xl:h-36 xl:w-36"
          >
            <BallCanvas imgUrl={getImgUrl(skill.skillImage).url()} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default SectionWrap(Skills, 'skills', 'Skills', '');
