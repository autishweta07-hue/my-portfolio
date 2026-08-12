import { Block } from 'payload'

export const ContactBlock: Block = {
  slug: 'contactBlock',
  interfaceName: 'ContactBlock',
  labels: {
    singular: 'Contact',
    plural: 'Contact',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      defaultValue: 'Contact Me',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      name: 'phone',
      type: 'text',
    },
    {
      name: 'linkedin',
      type: 'text',
    },
    {
      name: 'github',
      type: 'text',
    },
  ],
}