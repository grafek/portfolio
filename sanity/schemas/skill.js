export default {
  name: "skill",
  title: "Skill",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      description: "Skill title",
      type: "string",
    },
    {
      name: "progress",
      title: "Progress",
      type: "number",
      description: "Skill progress 0 to 100%",
      validation: (Rule) => Rule.min(0).max(100),
    },
    {
      name: "skillImage",
      title: "SkillImage",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
