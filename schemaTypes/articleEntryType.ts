import {defineField, defineType} from 'sanity'

export const articleEntryType = defineType({
  name: 'articleEntry',
  title: 'Article Entry',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'article',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'body',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'price',
      description: 'Calculated economic cost per american per this article',
      type: 'string',
    }),
    defineField({
      description:
        'Explain the justification for the price calculation, this will be shown in a tooltip',
      name: 'priceCalculation',
      type: 'string',
    }),
    defineField({
      name: 'active',
      description: 'Should we display this article?',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'shouldCalculatePrice',
      description: 'Should we calculate the price for this article?',
      type: 'boolean',
      initialValue: true,
    }),
  ],
})
