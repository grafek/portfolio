import Image from "next/image";
import { useContext } from "react";
import { ThemeContext } from "../../store/ThemeContext";
import { listItems } from "../functions";
import Pill from "./Pill";

export default function Card({
  title,
  children,
  tags,
  url,
  img,
  hasBackdrop,
  className,
  icon,
}) {
  const themeCtx = useContext(ThemeContext);

  let tagsContent;
  let imgContent;
  let alternateTitle;

  if (tags && tags.length >= 1) {
    tagsContent = <div className="pt-4">{listItems(tags, Pill)}</div>;
  }
  if (img) {
    imgContent = (
      <div className="h-60 lg:h-80 relative" title={title}>
        <Image layout="fill" objectFit="cover" alt={title} src={img} />
      </div>
    );
  }
  if (img && hasBackdrop) {
    imgContent = (
      <div
        className="h-60 lg:h-80 relative hover:scale-105 duration-300"
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

  !hasBackdrop && !img
    ? (alternateTitle = (
        <h2
          className={`${themeCtx.themeClasses.text} mb-4 text-2xl font-bold `}
        >
          {icon}
          {title}
        </h2>
      ))
    : null;

  return (
    <div
      className={`${themeCtx.themeClasses.lightDarkBg} ${
        className ? className : ""
      } ${themeCtx.themeClasses.shadow} w-5/6 mx-auto rounded-md shadow-md`}
    >
      {imgContent}
      <div className={`p-4`}>
        {alternateTitle}
        <p className={`${themeCtx.themeClasses.subText}`}>{children}</p>
        {tagsContent}
      </div>
    </div>
  );
}
