import Image from "next/image";
import { useContext } from "react";
import { ThemeContext } from "../../../contexts/Theme";
import { HiOutlineCode } from "react-icons/hi";
import { Pill } from "../../UI";

export default function Project({
  title,
  tags,
  demoUrl,
  codeUrl,
  img,
  hasBackdrop,
  description,
  className = "",
}) {
  const themeCtx = useContext(ThemeContext);

  let tagsContent;
  let imgContent;

  if (tags && tags.length >= 1) {
    tagsContent = (
      <div>
        {tags.map((tag, i) => (
          <Pill
            className={` ${themeCtx.themeClasses.darkBg} ${themeCtx.themeClasses.subText} mb-2 mr-2 `}
            key={i}
          >
            #{tag}
          </Pill>
        ))}
      </div>
    );
  }
  if (img && hasBackdrop) {
    imgContent = (
      <div className="flex-1 relative" title={title}>
        <div className="z-30 absolute flex justify-center h-full w-full">
          <h2 className="text-slate-200 capitalize text-center font-bold italic text-3xl md:text-4xl l my-auto">
            {title}
          </h2>
        </div>
        <div className="h-full w-full bg-black opacity-60 z-20 relative flex justify-center"></div>
        <Image layout="fill" objectFit="cover" alt={title} src={img} />
      </div>
    );
  }
  return (
    <div
      className={`${themeCtx.themeClasses.lightDarkBg} ${className} ${themeCtx.themeClasses.shadow} min-w-[260px] w-[260px] md:w-[600px] xl:w-[900px] min-h-[450px] flex-shrink-0 m-auto flex flex-col rounded-md h-full shadow-md transition-colors`}
    >
      {imgContent}
      <div className={`p-4 lg:text-lg leading-6`}>
        <p
          className={`${themeCtx.themeClasses.subText} max-h-[160px] overflow-auto`}
        >
          {description}
        </p>
        <div className="flex flex-col md:flex-row justify-between items-center pt-4 gap-4">
          {tagsContent}
          <div className="flex justify-between md:gap-6 w-full md:w-auto md:items-center">
            <a href={demoUrl} target="_blank" rel="noreferrer">
              <Pill
                className={`hover:text-white hover:bg-indigo-500 text-indigo-600`}
              >
                Source
              </Pill>
            </a>
            <a href={codeUrl} target="_blank" rel="noreferrer">
              <Pill
                className={`hover:text-white hover:bg-indigo-500 text-indigo-600 flex`}
              >
                <HiOutlineCode className="text-xl" />
              </Pill>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
