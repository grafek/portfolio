import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      description: 'Skill name',
      type: 'string',
    }),
    defineField({
      name: 'skillImage',
      title: 'SkillImage',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
});
