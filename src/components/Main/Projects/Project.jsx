import Image from "next/image";
import { useContext } from "react";
import { ThemeContext } from "../../../contexts/Theme";
import { listItems } from "../../../utils/functions";
import { Pill } from "../../UI";

export default function Project({
  title,
  tags,
  url,
  img,
  hasBackdrop,
  description,
  className,
}) {
  const themeCtx = useContext(ThemeContext);

  let tagsContent;
  let imgContent;

  if (tags && tags.length >= 1) {
    tagsContent = <div className="pt-4">{listItems(tags, Pill)}</div>;
  }
  if (img && hasBackdrop) {
    imgContent = (
      <div
        className="flex-1 relative hover:scale-105 duration-300"
        title={title}
      >
        <a href={url} rel="noreferrer" className="relative" target="_blank">
          <div className="z-30 absolute flex justify-center h-full w-full">
            <h2 className="text-slate-200 capitalize text-center font-bold italic text-3xl md:text-4xl l my-auto">
              {title}
            </h2>
          </div>
          <div className="h-full w-full bg-black opacity-60 z-20 relative flex justify-center"></div>
          <Image layout="fill" objectFit="cover" alt={title} src={img} />
        </a>
      </div>
    );
  }
  return (
    <div
      className={`${themeCtx.themeClasses.lightDarkBg} ${
        className ? className : ""
      } ${
        themeCtx.themeClasses.shadow
      } min-w-full md:min-w-[40%] m-auto flex flex-col justify-between rounded-md h-full shadow-md `}
    >
      {imgContent}
      <div className={`p-4 lg:text-lg leading-6`}>
        <p className={`${themeCtx.themeClasses.subText}`}>{description}</p>
        {tagsContent}
      </div>
    </div>
  );
}
