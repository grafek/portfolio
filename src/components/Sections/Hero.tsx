import { motion as m } from "framer-motion";
import SectionWrap from "../../hoc/SectionWrap";
import { heroItemVariants, heroVariants } from "../../utils/framer";

type HeroProps = {
  firstName: string;
  role: string;
};

const Hero: React.FC<HeroProps> = ({ firstName, role }) => {
  return (
    <m.div
      variants={heroVariants}
      initial="initial"
      animate="animate"
      className="flex flex-col"
    >
      <m.div variants={heroItemVariants}>
        <h1
          className={`bg-gradient-to-r from-[#6c1cce] to-[#1483f1] bg-clip-text text-[5rem] font-bold text-transparent dark:from-[#74b6f7] dark:to-[#ab66ff] md:text-[7rem] lg:text-[8rem] xl:text-[10rem]`}
        >
          {`Hi, I'm ${firstName}`}
        </h1>

        <h2
          className={`pb-8 pt-4 text-2xl font-medium text-slate-900 dark:text-gray-50 md:py-8 `}
        >
          {role}
        </h2>
      </m.div>
      <m.div
        variants={heroItemVariants}
        initial={{ x: "100vw", opacity: 0 }}
        className="flex flex-col gap-8 md:mx-auto md:max-w-md md:flex-row"
      >
        <a
          className={`mx-auto w-1/2 rounded-md border border-indigo-700 bg-indigo-700 px-8 py-2 font-medium text-white duration-300 hover:bg-transparent hover:text-black dark:border-indigo-700 dark:hover:bg-transparent dark:hover:text-white md:w-3/4 md:px-12 md:py-3`}
          href={"#projects"}
        >
          Projects
        </a>
        <a
          className={`mx-auto w-1/2 rounded-md border border-indigo-700 bg-transparent px-8 py-2 font-medium text-black duration-300 hover:bg-indigo-700 hover:text-white dark:text-white md:w-3/4 md:px-12  md:py-3`}
          href={`#contact`}
        >
          Contact
        </a>
      </m.div>
    </m.div>
  );
};

export default SectionWrap(
  Hero,
  "hero",
  undefined,
  "flex z-20 flex-col 2xl:px-0 justify-center text-center h-[100dvh]",
);
