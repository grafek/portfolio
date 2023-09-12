import { motion as m } from "framer-motion";
import { getImgUrl } from "../../lib/sanityConfig";
import SectionWrap from "../../hoc/SectionWrap";
import { PageInfo, Timeline as TimelineType } from "../../../types";
import { aboutItemVariants, aboutVariants } from "../../utils/framer";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
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

      <m.div variants={aboutItemVariants}>
        <VerticalTimeline>
          {timelineInfo.map((item) => (
            <VerticalTimelineElement
              key={item._id}
              className="vertical-timeline-element--work"
              contentArrowStyle={{
                borderRight: "7px solid #4f46e5",
              }}
              contentStyle={{
                background: "#151239",
                color: "#94a3b8",
              }}
              date={item.date}
              dateClassName="text-slate-400"
              icon={
                <img
                  src={getImgUrl(item.companyLogo).url()}
                  alt={item.companyName}
                  className="rounded-full object-contain"
                />
              }
            >
              <h3 className="vertical-timeline-element-title text-xl font-semibold text-gray-50">
                {item.role}
              </h3>
              <span className="font-thin">{item.companyName}</span>
              <ul className="mt-4 flex list-inside flex-col gap-2">
                {item.responsibilities.map((item, i) => (
                  <Fragment key={i}>
                    <li
                      key={i}
                      className="flex items-start gap-2 leading-6 lg:text-lg"
                    >
                      <div className="relative top-[6px] h-0 w-0 border-b-[5px] border-l-[7.5px] border-t-[5px] border-b-transparent border-l-indigo-500 border-t-transparent"></div>
                      {item}
                    </li>
                  </Fragment>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </m.div>
    </m.div>
  );
};

export default SectionWrap(About, "about", "About", "");
