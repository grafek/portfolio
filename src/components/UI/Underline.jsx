import { useContext } from "react";
import { ThemeContext } from "../../contexts/Theme";

const Underline = () => {
  const themeCtx = useContext(ThemeContext);
  return (
    <svg
      width="208"
      height="6"
      viewBox="0 0 208 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z"
        fill="url(#paint0_linear)"
        fillOpacity="0.33"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="-4.30412e-10"
          y1="0.5"
          x2="208"
          y2="0.500295"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={themeCtx.darkTheme === "dark" ? "white" : "black"} />
          <stop
            offset="0.79478"
            stopColor={themeCtx.darkTheme === "dark" ? "white" : "black"}
            stopOpacity="0.2"
          />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Underline;