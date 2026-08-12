import { Block } from 'payload'

export const ProjectsBlock: Block = {
  slug: 'projectsBlock',
  interfaceName: 'ProjectsBlock',
  labels: {
    singular: 'Projects',
    plural: 'Projects',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      defaultValue: 'Projects',
      required: true,
    },
    {
      name: 'projects',
      type: 'array',
      minRows: 1,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
        },
        {
          name: 'technologies',
          type: 'text',
          admin: {
            description: 'Comma separated values',
          },
        },
        {
          name: 'github',
          type: 'text',
        },
        {
          name: 'demo',
          type: 'text',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
  ],
}