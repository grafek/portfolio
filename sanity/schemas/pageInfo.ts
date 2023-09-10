import { defineField, defineType } from "sanity";

export default defineType({
  name: "pageInfo",
  title: "PageInfo",
  type: "document",
  fields: [
    defineField({
      name: "firstName",
      title: "FirstName",
      type: "string",
    }),
    defineField({
      name: "lastName",
      title: "LastName",
      type: "string",
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "string",
    }),
    defineField({
      name: "aboutImage",
      title: "AboutImage",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "aboutInfo",
      title: "AboutInfo",
      type: "string",
    }),
    defineField({
      name: "heroShortDescription",
      title: "HeroShortDescription",
      type: "string",
    }),
    defineField({
      name: "phoneNumber",
      title: "PhoneNumber",
      type: "string",
    }),
  ],
});
