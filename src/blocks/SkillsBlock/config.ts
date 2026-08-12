import { Block } from 'payload'

export const SkillsBlock: Block = {
  slug: 'skillsBlock',
  interfaceName: 'SkillsBlock',
  labels: {
    singular: 'Skills',
    plural: 'Skills',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      defaultValue: 'Technical Skills',
      required: true,
    },
    {
      name: 'skills',
      type: 'array',
      minRows: 1,
      fields: [
        {
          name: 'category',
          type: 'text',
          required: true,
        },
        {
          name: 'items',
          type: 'text',
          required: true,
          admin: {
            description: 'Comma-separated values (e.g. Python, Java, C++)',
          },
        },
      ],
    },
  ],
}