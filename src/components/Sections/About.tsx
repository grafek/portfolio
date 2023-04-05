import Image from 'next/image';
import { motion as m } from 'framer-motion';
import { getImgUrl } from '../../lib/sanityConfig';
import SectionWrap from '../../hoc/SectionWrap';
import { PageInfo, Timeline as TimelineType } from '../../../types';
import { Slider, Underline } from '../UI';
import { aboutItemVariants, aboutVariants } from '../../utils/framer';

type AboutProps = {
  timelineInfo: TimelineType[];
  pageInfo: PageInfo;
};

const About: React.FC<AboutProps> = ({ timelineInfo, pageInfo }) => {
  const { aboutInfo, aboutImage } = pageInfo;

  return (
    <m.div
      variants={aboutVariants}
      initial={'initial'}
      whileInView={'animate'}
      viewport={{ once: true }}
      className="flex select-none flex-col gap-6 sm:gap-14"
    >
      <m.div
        variants={aboutItemVariants}
        className="mx-auto flex flex-col items-center gap-4 md:flex-row md:gap-8 "
      >
        <div className="relative h-[15vh] w-full md:h-[13vh] md:w-full lg:h-[25vh] xl:h-[40vh]">
          <Image
            src={getImgUrl(aboutImage).url()}
            fill
            sizes="(max-width: 768px) 118px,
            (max-width: 1024px) 133px,
            (max-width: 1538px) 344px,
            476px"
            className="relative object-contain"
            alt="me"
          />
        </div>
        <p className={`text-justify text-sm md:text-base`}>{aboutInfo}</p>
      </m.div>

      {/* TIMELINE */}

      <m.div variants={aboutItemVariants}>
        <Slider
          innerSliderClasses="gap-8 mx-auto "
          outerSliderClasses="overflow-hidden"
        >
          <m.ul
            className={`flex w-full gap-6 text-sm md:gap-14 md:text-base lg:justify-between`}
          >
            {timelineInfo.map((item) => (
              <li
                key={item._id}
                className="flex max-w-[300px] flex-shrink-0 md:max-w-[420px]"
              >
                <div className="w-full">
                  <h2 className="text-xl font-semibold">
                    {item.year}
                    <Underline />
                  </h2>
                  <p className="mt-2 font-semibold">{item.timelineText}</p>
                </div>
              </li>
            ))}
          </m.ul>
        </Slider>
      </m.div>
    </m.div>
  );
};

export default SectionWrap(About, 'about', 'About', '');
