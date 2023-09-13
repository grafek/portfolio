import { motion as m } from "framer-motion";
import { getImgUrl } from "../../lib/sanityConfig";
import SectionWrap from "../../hoc/SectionWrap";
import { PageInfo, Timeline as TimelineType } from "../../../types";
import { aboutItemVariants, aboutVariants } from "../../utils/framer";
import { Fragment } from "react";

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
      className="flex select-none flex-col gap-12 md:gap-16"
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

      <m.div
        variants={aboutItemVariants}
        className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:-translate-x-px before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent md:before:mx-auto md:before:translate-x-0"
      >
        {timelineInfo.map((item) => (
          <div
            key={item._id}
            className="group relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white shadow md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <img
                src={getImgUrl(item.companyLogo).url()}
                className="rounded-full"
              />
            </div>
            <div className="w-[calc(100%-4rem)] rounded border border-[#9693eb] bg-[#dfdef8] p-4 pb-10 shadow dark:border-indigo-600 dark:bg-indigo-950 md:w-[calc(50%-2.5rem)] md:pb-4">
              <div className="mb-1 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="font-bold text-gray-900 dark:text-gray-200">
                    {item.role}
                  </span>
                  <span className="font-thin text-gray-500">
                    {item.companyName}
                  </span>
                </div>
                <time className="font-caveat absolute bottom-2 right-2 font-medium text-indigo-500 dark:text-indigo-300 md:static">
                  {item.date}
                </time>
              </div>
              <ul className="mt-4 flex list-inside flex-col gap-2 dark:text-gray-300">
                {item.responsibilities.map((item, i) => (
                  <Fragment key={i}>
                    <li
                      key={i}
                      className="flex items-start gap-2 leading-6 lg:text-lg"
                    >
                      <div className="relative top-[6px] h-0 w-0 border-b-[5px] border-l-[7.5px] border-t-[5px] border-b-transparent border-l-indigo-500 border-t-transparent dark:border-l-indigo-300"></div>
                      {item}
                    </li>
                  </Fragment>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </m.div>
    </m.div>
  );
};

export default SectionWrap(About, "about", "About", "");
