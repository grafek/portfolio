import { ThemeContext } from "../../store/ThemeContext";
import { useContext } from "react";
import ResumeLeft from "./ResumeLeft";
import ResumeRight from "./ResumeRight";
import ResumeRightSection from "./ResumeRightSection";
import Timestamp from "../UI/Timestamp";

const languages = [
  "Polish - native",
  "English - intermediate (B2/C1)",
  "Spanish - basics (currently learning)",
  "German - basics",
];

let languagesContent = languages.map((lang) => {
  return <li key={lang}>{lang}</li>;
});

const interests = [
  "Running",
  "Skateboarding",
  "Learning",
  "Self-development",
  "DJ-ing",
];

let interestsContent = interests.map((interest) => {
  return <li key={interest}>{interest}</li>;
});

export default function Resume() {
  const themeCtx = useContext(ThemeContext);

  return (
    <section id={`resume`} className="h-fit flex my-10">
      <div
        className={`${themeCtx.themeClasses.lightDarkBg} h-fit flex gap-8 flex-col md:flex-row p-4 rounded-md m-auto w-11/12`}
      >
        <ResumeLeft />
        <ResumeRight>
          <ResumeRightSection title={"Experience"}>
            <Timestamp dates={"19/09/2022 - now"}>
              L2 Resmote Specialist at Hemmersbach
            </Timestamp>
            <Timestamp dates={"07/2020 - 08/2020 & 09/2020-2020"}>
              School apprenticeship at Foxysoft - took a part of developing new
              website for my high school
            </Timestamp>
          </ResumeRightSection>
          <ResumeRightSection title={"Education"}>
            <Timestamp dates={"09/2017-05/2021"}>
              IT Technician degree ICT and Electronic School Complex
            </Timestamp>
          </ResumeRightSection>
          <div className="flex flex-col lg:flex-row">
            <ResumeRightSection className={"flex-1"} title={"Languages"}>
              <ul
                className={`${themeCtx.themeClasses.subText} list-disc mx-4 flex flex-col gap-2`}
              >
                {languagesContent}
              </ul>
            </ResumeRightSection>
            <ResumeRightSection className={"flex-1"} title={"Interests"}>
              <ul
                className={`${themeCtx.themeClasses.subText} list-disc mx-4 flex flex-col gap-2`}
              >
                {interestsContent}
              </ul>
            </ResumeRightSection>
          </div>
        </ResumeRight>
      </div>
    </section>
  );
}
