import {defineType} from 'sanity'

export default defineType({
  name: 'experiences',
  title: 'Experiences',
  type: 'document',
  fields: [
    {
      name: 'expId',
      title: 'Exp-ID',
      type: 'string',
      description: 'Custom experience ID',
      validation: (Rule) => Rule.required().error('Experience ID is required'),
    },
    {
      name: 'role',
      title: 'Role / Job Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'company',
      title: 'Company',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
    },
    {
      name: 'dateRange',
      title: 'Date Range',
      type: 'string',
      description: 'e.g., Aug 2021 – Dec 2025',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'responsibilities',
      title: 'Responsibilities',
      type: 'array',
      of: [{type: 'string'}],
      description: 'List 4–5 bullet points describing your role',
      validation: (Rule) => Rule.min(1).max(8),
    },
  ],
  preview: {
    select: {
      title: 'role',
      subtitle: 'company',
    },
    prepare(selection) {
      const {title, subtitle} = selection
      return {
        title: title || 'No Role',
        subtitle: subtitle || 'No Company',
      }
    },
  },
})
