import Image from "next/image";
import { useContext } from "react";
import profileImg from "../public/my-pic.jpg";
import { ThemeContext } from "../store/ThemeContext";
import SocialLinks from "./UI/SocialLinks";

export default function AboutMe() {
  const themeCtx = useContext(ThemeContext);

  return (
    <>
      <section className="text-center p-10 pt-32">
        <h2 className="text-5xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-sky-700 via-purple-500 to-red-500">
          Jacek Grafender
        </h2>
        <h3 className={`${themeCtx.themeClasses.text} py-5 text-2xl`}>
          IT Technician and developer
        </h3>
        <p className={`${themeCtx.themeClasses.subText} leading-8`}>
          As of now working as a L2 Support Specialist. Aspiring to get the
          first job as a junior front-end developer after hours. <br />
          Hire me, you will not regret it ;)
        </p>
        <div className="my-12 w-4/5 max-w-xs mx-auto">
          <Image src={profileImg} className="rounded-full" alt={"my picture"} />
        </div>
        <SocialLinks id="projects"/>
      </section>
    </>
  );
}
