import { Block } from 'payload'

export const AboutBlock: Block = {
  slug: 'aboutBlock',
  interfaceName: 'AboutBlock',
  labels: {
    singular: 'About',
    plural: 'About',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
      defaultValue: 'About Me',
    },
    {
      name: 'description',
      type: 'richText',
      required: true,
    },
  ],
}