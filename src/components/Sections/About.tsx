import Image from 'next/image';
import { motion } from 'framer-motion';
import { getImgUrl } from '../../lib/sanityConfig';
import SectionWrap from '../../hoc/SectionWrap';
import { PageInfo, Timeline as TimelineType } from '../../../types';
import { Slider, Underline } from '../UI';
import {
  aboutItemVariants,
  aboutVariants,
  timelineItemVariants,
} from '../../utils/framer';

type AboutProps = {
  timelineInfo: TimelineType[];
  pageInfo: PageInfo;
};

const About: React.FC<AboutProps> = ({ timelineInfo, pageInfo }) => {
  const { aboutInfo, aboutImage } = pageInfo;

  return (
    <motion.div
      variants={aboutVariants}
      initial={'aboutHidden'}
      whileInView={'aboutShown'}
      viewport={{ once: true }}
      className="flex select-none flex-col gap-6 sm:gap-14"
    >
      <motion.div
        variants={aboutItemVariants}
        className="mx-auto flex flex-col items-center gap-8 md:flex-row md:gap-8 "
      >
        <div className="relative h-[15vh] w-full md:h-[13vh] md:w-full lg:h-[25vh] xl:h-[40vh]">
          <Image
            src={getImgUrl(aboutImage).url()}
            layout="fill"
            className="relative object-contain"
            alt="me"
          />
        </div>
        <p className={`text-justify text-sm md:text-base`}>{aboutInfo}</p>
      </motion.div>

      {/* TIMELINE */}

      <motion.div variants={aboutItemVariants}>
        <Slider
          innerSliderClasses="gap-8 mx-auto "
          outerSliderClasses="overflow-hidden"
        >
          <motion.ul
            className={`flex w-full gap-6 text-sm md:gap-14 md:text-base lg:justify-between`}
          >
            {timelineInfo.map((item) => (
              <motion.li
                variants={timelineItemVariants}
                key={item._id}
                className="my-4 flex max-w-[240px] flex-shrink-0 md:max-w-[400px] lg:my-0"
              >
                <div className="w-full">
                  <h2 className="text-xl font-semibold">
                    {item.year}
                    <Underline />
                  </h2>
                  <p className="mt-2 font-semibold">{item.timelineText}</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </Slider>
      </motion.div>
    </motion.div>
  );
};

export default SectionWrap(About, 'about', 'About', '');
