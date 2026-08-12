import { Block } from 'payload'

export const EducationBlock: Block = {
  slug: 'educationBlock',
  interfaceName: 'EducationBlock',
  labels: {
    singular: 'Education',
    plural: 'Education',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      defaultValue: 'Education',
      required: true,
    },
    {
      name: 'education',
      type: 'array',
      minRows: 1,
      fields: [
        {
          name: 'institution',
          type: 'text',
          required: true,
        },
        {
          name: 'degree',
          type: 'text',
          required: true,
        },
        {
          name: 'duration',
          type: 'text',
          required: true,
        },
        {
          name: 'grade',
          type: 'text',
        },
      ],
    },
  ],
}