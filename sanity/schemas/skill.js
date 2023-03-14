export default {
  name: "skill",
  title: "Skill",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      description: "Skill name",
      type: "string",
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
