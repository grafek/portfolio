import { motion as m } from "framer-motion";
import { getImgUrl } from "../../lib/sanityConfig";
import SectionWrap from "../../hoc/SectionWrap";
import { PageInfo, Timeline as TimelineType } from "../../../types";
import { Slider, Underline } from "../UI";
import { aboutItemVariants, aboutVariants } from "../../utils/framer";

type AboutProps = {
  timelineInfo: TimelineType[];
  pageInfo: PageInfo;
};

const About: React.FC<AboutProps> = ({ timelineInfo, pageInfo }) => {
  const { aboutInfo, aboutImage } = pageInfo;

  return (
    <m.div
      variants={aboutVariants}
      initial={"initial"}
      whileInView={"animate"}
      viewport={{ once: true }}
      className="flex select-none flex-col gap-8"
    >
      <m.div
        variants={aboutItemVariants}
        className="mx-auto flex flex-col items-center gap-4 md:flex-row md:gap-8"
      >
        <div className="relative hidden aspect-square md:block md:w-full lg:h-[25vh] xl:h-[40vh]">
          <img
            src={getImgUrl(aboutImage).url()}
            alt="my-photo"
            className="mx-auto max-h-full max-w-full"
          />
        </div>
        <p className={`text-justify text-sm leading-6 md:text-base lg:text-lg`}>
          {aboutInfo}
        </p>
      </m.div>

      <m.div variants={aboutItemVariants}>
        <Slider innerSliderClasses="gap-8 mx-auto">
          <m.ul
            className={`flex w-full gap-6 text-sm md:gap-12 md:text-base lg:justify-between`}
          >
            {timelineInfo.map((item) => (
              <li
                key={item._id}
                className="flex max-w-[14rem] flex-shrink-0 md:max-w-[20rem]"
              >
                <div className="w-full">
                  <h2 className="text-xl font-semibold">
                    {item.year}
                    <Underline />
                  </h2>
                  <p className="mt-2 font-medium leading-6 lg:text-lg">
                    {item.timelineText}
                  </p>
                </div>
              </li>
            ))}
          </m.ul>
        </Slider>
      </m.div>
    </m.div>
  );
};

export default SectionWrap(About, "about", "About", "");
