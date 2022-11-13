import { useContext } from "react";
import { ThemeContext } from "../../contexts/Theme";
import { listItems } from "../../utils/Helper";
import { Pill } from "./";

export default function Card({
  title,
  children,
  tags,
  className,
  icon,
}) {
  const themeCtx = useContext(ThemeContext);

  let tagsContent;

  if (tags && tags.length >= 1) {
    tagsContent = <div className="pt-4">{listItems(tags, Pill)}</div>;
  }

  return (
    <div
      className={`${themeCtx.themeClasses.lightDarkBg} ${
        className ? className : ""
      } ${themeCtx.themeClasses.shadow} w-11/12 mx-auto rounded-md shadow-md `}
    >
      <div className={`p-4`}>
        <h2
          className={`${themeCtx.themeClasses.text} mb-4 text-2xl font-bold `}
        >
          {icon}
          {title}
        </h2>
        <p className={`${themeCtx.themeClasses.subText}`}>{children}</p>
        {tagsContent}
      </div>
    </div>
  );
}
