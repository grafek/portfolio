export default {
  name: "timeline",
  title: "Timeline",
  type: "document",
  fields: [
    {
      name: "year",
      title: "Year",
      description: "Year of a milestone",
      type: "number",
      validation: (Rule) => Rule.min(2016).max(2060),
    },
    {
      name: "timelineText",
      title: "TimelineText",
      type: "string",
    },
  ],
};
