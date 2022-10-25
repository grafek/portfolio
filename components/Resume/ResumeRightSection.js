import { useContext } from "react";
import { ThemeContext } from "../../store/ThemeContext";

export default function ResumeRightSection({ title, children, className }) {
  const themeCtx = useContext(ThemeContext);

  const titleContent = title ? (
    <div className="mx-auto">
      <h2
        className={`${themeCtx.themeClasses.text} text-2xl lg:text-3xl font-semibold border-b border-indigo-500 my-4`}
      >
        {title}
      </h2>
    </div>
  ) : null;

  return (
    <div className={`${className} flex flex-col shadow-lg rounded-md p-4`}>
      {titleContent}
      <div>{children}</div>
    </div>
  );
}
