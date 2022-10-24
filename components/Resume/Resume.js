import { ThemeContext } from "../../store/ThemeContext";
import { useContext } from "react";
import ResumeLeft from "./ResumeLeft";
import ResumeRight from "./ResumeRight";
import ResumeRightSection from "./ResumeRightSection";

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
            <ul
              className={`${themeCtx.themeClasses.subText} flex flex-col gap-2`}
            >
              <li>19/09/2022 - now L2 Resmote Specialist at Hemmersbach</li>
              <li>
                07/2020 - 08/2020 & 09/2020-2020 School apprenticeship at
                Foxysoft - took a part of developing new website for my high
                school
              </li>
            </ul>
          </ResumeRightSection>
          <ResumeRightSection title={"Education"}>
            <ul
              className={`${themeCtx.themeClasses.subText} flex flex-col gap-2`}
            >
              <li>19/09/2022 - now L2 Resmote Specialist at Hemmersbach</li>
              <li>
                07/2020 - 08/2020 & 09/2020-2020 School apprenticeship at
                Foxysoft - took a part of developing new website for my high
                school
              </li>
            </ul>
          </ResumeRightSection>
          <ResumeRightSection>
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-1/2 flex flex-col">
                <div className="mx-auto">
                  <h2
                    className={`${themeCtx.themeClasses.text} text-2xl lg:text-3xl font-semibold border-b border-indigo-500 my-4`}
                  >
                    Languages
                  </h2>
                </div>
                <div>
                  <ul
                    className={`${themeCtx.themeClasses.subText} list-disc mx-4 flex flex-col gap-2`}
                  >
                    {languagesContent}
                  </ul>
                </div>
              </div>
              <div className="w-full lg:w-1/2 flex flex-col">
                <div className="mx-auto">
                  <h2
                    className={`${themeCtx.themeClasses.text} text-2xl lg:text-3xl font-semibold border-b border-indigo-500 my-4`}
                  >
                    Interests
                  </h2>
                </div>
                <div>
                  <ul
                    className={`${themeCtx.themeClasses.subText} list-disc mx-4 flex flex-col gap-2`}
                  >
                    {interestsContent}
                  </ul>
                </div>
              </div>
            </div>
          </ResumeRightSection>
        </ResumeRight>
      </div>
    </section>
  );
}
