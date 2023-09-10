import { defineField, defineType } from "sanity";

export default defineType({
  name: "timeline",
  title: "Timeline",
  type: "document",
  fields: [
    defineField({
      name: "year",
      title: "Year",
      description: "Year of a milestone",
      type: "number",
      validation: (Rule) => Rule.min(2016).max(2060),
    }),
    defineField({
      name: "timelineText",
      title: "TimelineText",
      type: "string",
    }),
  ],
});
