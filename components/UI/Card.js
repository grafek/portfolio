import Image from "next/image";
import { useContext } from "react";
import { ThemeContext } from "../../store/ThemeContext";

export default function Card({ title, children, tags, url, img, hasBackdrop }) {
  const themeCtx = useContext(ThemeContext);

  let tagsContent;
  let imgContent;
  let alternateTitle;

  if (tags && tags.length >= 1) {
    tagsContent = tags.map((tag) => {
      return (
        <span
          key={tag}
          className={`${themeCtx.themeClasses.subText} ${themeCtx.themeClasses.darkBg} mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700`}
        >
          {tag}
        </span>
      );
    });
  }
  if (img) {
    imgContent = (
      <div className="h-60 lg:h-80 relative rounded-t" title={title}>
        <Image layout="fill" objectFit="cover" alt={title} src={img} />
      </div>
    );
  }
  if (img && hasBackdrop) {
    imgContent = (
      <div
        className="h-60 lg:h-80 relative rounded-t hover:scale-105 duration-300"
        title={title}
      >
        <a href={url} rel="noreferrer" target="_blank">
          <div className="z-30 absolute flex justify-center h-full w-full">
            <h2 className="text-slate-200 font-bold italic text-3xl md:text-4xl l my-auto">
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
          className={`${themeCtx.themeClasses.text} mb-2 text-center text-xl font-bold lg:text-left`}
        >
          {title}
        </h2>
      ))
    : null;

  return (
    <div className="w-11/12 xl:w-5/6 mx-auto">
      {imgContent}
      <div className={`${themeCtx.themeClasses.lightDarkBg} p-4`}>
        <div className="mb-8">
          {alternateTitle}
          <p className={`${themeCtx.themeClasses.subText}`}>{children}</p>
        </div>
        <div className="pt-4">{tagsContent}</div>
      </div>
    </div>
  );
}
