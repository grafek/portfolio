import Image from "next/image";
import { useContext } from "react";
import profileImg from "../public/my-pic1.png";
import { ThemeContext } from "../store/ThemeContext";
import SocialLinks from "./UI/SocialLinks";

export default function AboutMe() {
  const themeCtx = useContext(ThemeContext);

  return (
    <section className="md:pt-0 h-screen">
      <div className="flex  flex-col px-4 2xl:px-0 justify-center content-center md:justify-start max-w-screen-2xl md:flex-wrap lg:mx-auto md:flex-row text-center w-full h-full lg:h-screen">
        <div className="md:w-1/2 md:flex-auto md:flex md:flex-col justify-evenly md:justify-center ">
          <h1
            className={`${themeCtx.themeClasses.text} text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold`}
          >
            Hi, I&apos;m Jacek
          </h1>
          <h3 className={`${themeCtx.themeClasses.text} italic py-5 text-2xl`}>
            IT Technician and Developer
          </h3>
          <p className={`${themeCtx.themeClasses.subText} leading-8 `}>
            As of now working as a L2 Support Specialist. Aspiring to get the
            first job as a front-end developer.
          </p>
          <div className="flex flex-col gap-6 md:flex-row md:justify-center mt-20 w-1/2 md:w-full mx-auto">
            <button
              className={`${themeCtx.themeClasses.btnFilled} animate-bounce`}
            >
              Hire me!
            </button>
            <button className={`${themeCtx.themeClasses.btnTrans}`}>
              Resume
            </button>
          </div>
        </div>
        <div className="hidden md:w-1/3 md:flex md:m-auto ">
          <div className="md:max-w-lg mx-auto w-44 md:w-full">
            <Image src={profileImg} layout="responsive" alt={"my picture"} />
          </div>
        </div>
      </div>
    </section>
  );
}
