import { useContext } from "react";
import { ThemeContext } from "../store/ThemeContext";
import Line from "./UI/Line";

const TimeLineData = [
  { year: 2020, text: "2 months of front-end school apprenticeship @ Foxysoft" },
  { year: 2021, text: "Finished school with IT Technician degree" },
  { year: 2022, text: "Started journey in IT as a L2 Specialist" },
];

const Timeline = () => {
  const themeCtx = useContext(ThemeContext);
  return (
    <div className="flex justify-center w-11/12 py-14 mx-auto">
      <ul
        className={`${themeCtx.themeClasses.subText} lg:flex lg:w-full  lg:justify-between`}
      >
        {TimeLineData.map((item, index) => (
          <div className="flex my-4 lg:my-0" key={index}>
            <div className="w-full">
              <h2 className="font-semibold text-xl">
                {item.year}
                <Line />
              </h2>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Timeline;
