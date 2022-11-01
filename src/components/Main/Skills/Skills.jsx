import { Card, Pill, SectionHeading } from "../../UI";
import { DiReact } from "react-icons/di";
import { SiPrisma, SiNextdotjs } from "react-icons/si";
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";
import {
  FRONTEND_SKILLS,
  DATABASE_SKILLS,
  OTHER_SKILLS,
  BACKEND_SKILLS,
} from "../../../constants";
import { listItems } from "../../../utils/functions";

const iconsInlineClasses = "inline text-3xl mr-3";

const Skills = () => {
  return (
    <section id={"stack"}>
      <SectionHeading>Current Stack</SectionHeading>
      <div className="mx-auto grid lg:grid-cols-2 2xl:grid-cols-4 gap-10">
        <Card
          icon={<DiReact className={iconsInlineClasses} />}
          title={"Front-end"}
        >
          {listItems(FRONTEND_SKILLS, Pill)}
        </Card>
        <Card
          title={"Back-end"}
          icon={<SiNextdotjs className={iconsInlineClasses} />}
        >
          {listItems(BACKEND_SKILLS, Pill)}
        </Card>
        <Card
          title={"Databases"}
          icon={<SiPrisma className={iconsInlineClasses} />}
        >
          {listItems(DATABASE_SKILLS, Pill)}
        </Card>
        <Card
          title={"Other"}
          icon={
            <HiOutlineDotsCircleHorizontal className={iconsInlineClasses} />
          }
        >
          {listItems(OTHER_SKILLS, Pill)}
        </Card>
      </div>
    </section>
  );
};

export default Skills;
