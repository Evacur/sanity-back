import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'creation',
  title: 'Création',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
      },
    }),
    defineField({
      name: 'category',
      title: 'Catégorie',
      type: 'string',
    }),
    defineField({
      name: 'section',
      title: 'Section liée',
      type: 'reference',
      to: [{ type: 'creationSection' }],
    }),
  ],
})
