import Line from "./UI/Line";

export default function TimelineItem({ year, text }) {
  return (
    <div className="flex my-4 lg:my-0">
      <div className="w-full">
        <h2 className="font-semibold text-xl">
          {year}
          <Line />
        </h2>
        <p>{text}</p>
      </div>
    </div>
  );
}
